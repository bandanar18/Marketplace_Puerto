import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quotation } from './entities/quotation.entity';
import { OrdersService } from '../orders/orders.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class QuotationsService {
  constructor(
    @InjectRepository(Quotation)
    private quotationsRepository: Repository<Quotation>,
    private ordersService: OrdersService,
    private auditService: AuditService,
  ) {}

  async createRequest(data: any, client: any): Promise<Quotation> {
    const quotation = this.quotationsRepository.create({
      ...data,
      client: { id: client.userId },
      status: 'PENDING',
    });
    return this.quotationsRepository.save(quotation) as any as Promise<Quotation>;
  }

  async findByClient(clientId: number): Promise<Quotation[]> {
    return this.quotationsRepository.find({
      where: { client: { id: clientId } },
      relations: ['service', 'store'],
      order: { createdAt: 'DESC' }
    });
  }

  async findByStore(storeId: number): Promise<Quotation[]> {
    return this.quotationsRepository.find({
      where: { store: { id: storeId } },
      relations: ['service', 'client'],
      order: { createdAt: 'DESC' }
    });
  }

  async updateStatus(id: number, data: any): Promise<Quotation> {
    const quotation = await this.quotationsRepository.findOneBy({ id });
    if (!quotation) throw new NotFoundException('Quotation not found');
    
    Object.assign(quotation, data);
    return this.quotationsRepository.save(quotation) as any as Promise<Quotation>;
  }

  async approve(id: number, userId: number): Promise<Quotation> {
    const quotation = await this.quotationsRepository.findOne({
      where: { id },
      relations: ['client']
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    if (quotation.client.id !== userId) throw new ForbiddenException('Not your quotation');
    
    const previousValue = { ...quotation };
    quotation.status = 'ACCEPTED';
    const savedQuotation = await this.quotationsRepository.save(quotation) as any as Quotation;
    
    // Audit
    await this.auditService.log({
      userId,
      userRole: 'CLIENT', // Simplified
      action: 'APPROVE_QUOTATION',
      entityType: 'Quotation',
      entityId: quotation.id,
      previousValue,
      newValue: savedQuotation,
      criticality: 'HIGH',
    });
    
    // Sprint 09: Automatic Order Creation
    await this.ordersService.createFromQuotation(savedQuotation);
    
    return savedQuotation;
  }

  async reject(id: number, userId: number, reason: string): Promise<Quotation> {
    const quotation = await this.quotationsRepository.findOne({
      where: { id },
      relations: ['client']
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    if (quotation.client.id !== userId) throw new ForbiddenException('Not your quotation');

    quotation.status = 'REJECTED';
    quotation.notes = (quotation.notes || '') + `\nRejection reason: ${reason}`;
    return this.quotationsRepository.save(quotation) as any as Promise<Quotation>;
  }

  async requestRevision(id: number, userId: number, comments: string): Promise<Quotation> {
    const quotation = await this.quotationsRepository.findOne({
      where: { id },
      relations: ['client']
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    if (quotation.client.id !== userId) throw new ForbiddenException('Not your quotation');

    quotation.status = 'REVISION_REQUESTED';
    quotation.notes = (quotation.notes || '') + `\nRevision request: ${comments}`;
    return this.quotationsRepository.save(quotation) as any as Promise<Quotation>;
  }

  async counterRespond(id: number, userId: number, data: any): Promise<Quotation> {
    const quotation = await this.quotationsRepository.findOne({
      where: { id },
      relations: ['store', 'store.owner']
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    if (quotation.store.owner.id !== userId) throw new ForbiddenException('Not your store');

    quotation.status = 'QUOTED';
    quotation.quotedPrice = data.quotedPrice;
    quotation.notes = (quotation.notes || '') + `\nCounter response: ${data.notes}`;
    return this.quotationsRepository.save(quotation) as any as Promise<Quotation>;
  }
}
