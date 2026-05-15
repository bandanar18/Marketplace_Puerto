import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { OrdersService } from '../orders/orders.service';
import { CommissionsService } from '../commissions/commissions.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
    private ordersService: OrdersService,
    private commissionsService: CommissionsService,
    private auditService: AuditService,
  ) {}

  async register(orderId: number, data: any, user: any): Promise<Payment> {
    const order = await this.ordersService.findOne(orderId);
    
    const payment = this.paymentsRepository.create({
      ...data,
      order,
      reportedBy: user,
      status: 'PAYMENT_PENDING_VALIDATION',
    });

    const savedPayment = await this.paymentsRepository.save(payment) as any as Payment;

    // Update Order state
    await this.ordersService.updateState(
      orderId, 
      'PAYMENT_SUBMITTED', 
      user, 
      `Pago reportado por el cliente. Referencia: ${data.referenceNumber}`
    );

    return savedPayment;
  }

  async validate(id: number, status: string, user: any, notes?: string): Promise<Payment> {
    const payment = await this.paymentsRepository.findOne({
      where: { id },
      relations: ['order']
    });
    if (!payment) throw new NotFoundException('Payment not found');
    
    if (payment.status !== 'PAYMENT_PENDING_VALIDATION') {
      throw new ForbiddenException(`El pago ya ha sido procesado (Estado actual: ${payment.status})`);
    }

    const previousValue = { ...payment };
    payment.status = status;
    payment.notes = notes ?? null;
    payment.validatedAt = new Date();
    
    const savedPayment = await this.paymentsRepository.save(payment) as any as Payment;

    // Audit Log
    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'VALIDATE_PAYMENT',
      entityType: 'Payment',
      entityId: payment.id,
      previousValue,
      newValue: savedPayment,
      criticality: 'CRITICAL',
    });

    if (status === 'APPROVED') {
      await this.ordersService.updateState(
        payment.order.id,
        'PAID',
        user,
        'Pago validado y aprobado por el operador.'
      );
      
      // Calculate Commission
      await this.commissionsService.calculate(savedPayment);
    } else if (status === 'REJECTED') {
      await this.ordersService.updateState(
        payment.order.id,
        'PAYMENT_REJECTED',
        user,
        `Pago rechazado. Motivo: ${notes}`
      );
    }

    return savedPayment;
  }

  async findByOrder(orderId: number): Promise<Payment[]> {
    return this.paymentsRepository.find({
      where: { order: { id: orderId } },
      order: { createdAt: 'DESC' },
    });
  }

  async findPending(): Promise<Payment[]> {
    return this.paymentsRepository.find({
      where: { status: 'PAYMENT_PENDING_VALIDATION' },
      relations: ['order', 'order.client'],
      order: { createdAt: 'ASC' },
    });
  }
}
