import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryItem } from './entities/inventory-item.entity';
import { Warehouse, WmsZone, Rack, RackPosition } from './entities/warehouse-hierarchy.entities';
import { OrdersService } from '../orders/orders.service';
import { AuditService } from '../audit/audit.service';
import { AgdService } from '../agd/agd.service';

@Injectable()
export class WmsService {
  constructor(
    @InjectRepository(InventoryItem)
    private inventoryRepository: Repository<InventoryItem>,
    @InjectRepository(RackPosition)
    private positionRepository: Repository<RackPosition>,
    private ordersService: OrdersService,
    private auditService: AuditService,
    private agdService: AgdService,
  ) {}

  async receive(data: any, user: any): Promise<InventoryItem> {
    const position = await this.positionRepository.findOne({ where: { id: data.positionId } });
    if (!position) throw new NotFoundException('Position not found');
    if (position.status !== 'EMPTY') throw new Error('Position already occupied');

    const order = await this.ordersService.findOne(data.orderId);

    const item = this.inventoryRepository.create({
      ...data,
      client: order.client,
      order: order,
      position: position,
      status: 'IN_STOCK',
    });

    const savedItem = await this.inventoryRepository.save(item) as any as InventoryItem;

    // Update position status
    position.status = 'OCCUPIED';
    await this.positionRepository.save(position);

    // Audit
    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'WMS_RECEIVE_STOCK',
      entityType: 'InventoryItem',
      entityId: savedItem.id,
      newValue: savedItem,
      criticality: 'MEDIUM',
    });

    return savedItem;
  }

  async dispatch(itemId: number, user: any): Promise<void> {
    const item = await this.inventoryRepository.findOne({ 
      where: { id: itemId },
      relations: ['order', 'position']
    });
    if (!item) throw new NotFoundException('Item not found');

    // CRITICAL: Check AGD block
    const isBlocked = await this.agdService.isOrderBlocked(item.order.id);
    if (isBlocked) {
      throw new ForbiddenException('No se puede despachar: La mercancía tiene un Bono de Prenda activo (Bloqueo AGD)');
    }

    item.status = 'DISPATCHED';
    await this.inventoryRepository.save(item);

    item.position.status = 'EMPTY';
    await this.positionRepository.save(item.position);

    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'WMS_DISPATCH',
      entityType: 'InventoryItem',
      entityId: itemId,
      newValue: { status: 'DISPATCHED' },
      criticality: 'HIGH',
    });
  }

  async getInventoryByClient(clientId: number): Promise<any[]> {
    const items = await this.inventoryRepository.find({
      where: { client: { id: clientId }, status: 'IN_STOCK' },
      relations: ['position', 'position.rack', 'position.rack.zone', 'order'],
    });

    // Check blocks for each unique order
    const orderIds = [...new Set(items.map(item => item.order.id))];
    const blockMap = {};
    for (const orderId of orderIds) {
      blockMap[orderId] = await this.agdService.isOrderBlocked(orderId);
    }

    return items.map(item => ({
      ...item,
      isBlocked: blockMap[item.order.id]
    }));
  }

  async getPositionsByRack(rackId: number): Promise<RackPosition[]> {
    return this.positionRepository.find({
      where: { rack: { id: rackId } },
      order: { level: 'ASC', column: 'ASC' },
    });
  }
}
