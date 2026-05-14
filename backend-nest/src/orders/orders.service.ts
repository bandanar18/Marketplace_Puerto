import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderEvent } from './entities/order-event.entity';
import { OrderState } from '../catalogs/entities/order-state.entity';
import { Quotation } from '../quotations/entities/quotation.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderEvent)
    private eventsRepository: Repository<OrderEvent>,
    @InjectRepository(OrderState)
    private statesRepository: Repository<OrderState>,
  ) {}

  async createFromQuotation(quotation: Quotation): Promise<Order> {
    const initialState = await this.statesRepository.findOneBy({ code: 'CREATED' });
    
    // Generate a unique order number
    const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const count = await this.ordersRepository.count();
    const orderNumber = `ORD-${dateStr}-${(count + 1).toString().padStart(4, '0')}`;

    const order = this.ordersRepository.create({
      orderNumber,
      quotation,
      client: quotation.client,
      store: quotation.store,
      service: quotation.service,
      totalAmount: quotation.quotedPrice,
      state: initialState,
      description: `Orden generada automáticamente desde la cotización #${quotation.id}`,
    });

    const savedOrder = await this.ordersRepository.save(order) as any as Order;

    // Create initial event
    await this.eventsRepository.save({
      order: savedOrder,
      eventType: 'ORDER_CREATED',
      description: 'La orden ha sido creada exitosamente.',
      user: quotation.client,
    });

    return savedOrder;
  }

  async findByClient(clientId: number): Promise<Order[]> {
    return this.ordersRepository.find({
      where: { client: { id: clientId } },
      relations: ['state', 'service', 'store'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByStore(storeId: number): Promise<Order[]> {
    return this.ordersRepository.find({
      where: { store: { id: storeId } },
      relations: ['state', 'service', 'client'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: ['state', 'service', 'store', 'client', 'quotation'],
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async getEvents(orderId: number): Promise<OrderEvent[]> {
    return this.eventsRepository.find({
      where: { order: { id: orderId } },
      relations: ['user'],
      order: { createdAt: 'ASC' },
    });
  }

  async updateState(orderId: number, stateCode: string, user: any, description: string): Promise<Order> {
    const order = await this.findOne(orderId);
    const state = await this.statesRepository.findOneBy({ code: stateCode });
    if (!state) throw new NotFoundException(`Order state ${stateCode} not found`);

    order.state = state;
    const savedOrder = await this.ordersRepository.save(order) as any as Order;

    await this.eventsRepository.save({
      order: savedOrder,
      eventType: 'STATE_CHANGE',
      description,
      user,
    });

    return savedOrder;
  }
}
