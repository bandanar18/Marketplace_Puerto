import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../orders/entities/order.entity';
import { Commission } from '../commissions/entities/commission.entity';
import { Payment } from '../payments/entities/payment.entity';
import { Parser } from 'json2csv';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Commission)
    private commissionsRepository: Repository<Commission>,
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async exportPayments(storeId?: number): Promise<string> {
    const where = storeId ? { order: { store: { id: storeId } } } : {};
    const payments = await this.paymentsRepository.find({
      where,
      relations: ['order', 'order.store', 'reportedBy'],
      order: { createdAt: 'DESC' }
    });

    const fields = [
      { label: 'ID Pago', value: 'id' },
      { label: 'Orden #', value: 'order.orderNumber' },
      { label: 'Referencia', value: 'referenceNumber' },
      { label: 'Monto', value: 'amount' },
      { label: 'Fecha Reporte', value: (row) => new Date(row.createdAt).toLocaleDateString() },
      { label: 'Reportado por', value: (row) => row.reportedBy?.email || 'N/A' },
      { label: 'Estado', value: 'status' }
    ];

    const parser = new Parser({ fields });
    return parser.parse(payments);
  }

  async exportOrders(storeId?: number): Promise<string> {
    const where = storeId ? { store: { id: storeId } } : {};
    const orders = await this.ordersRepository.find({
      where,
      relations: ['client', 'state', 'service'],
      order: { createdAt: 'DESC' }
    });

    const fields = [
      { label: 'Orden #', value: 'orderNumber' },
      { label: 'Fecha', value: (row) => new Date(row.createdAt).toLocaleDateString() },
      { label: 'Cliente', value: (row) => `${row.client.firstName} ${row.client.lastName}` },
      { label: 'Servicio', value: 'service.name' },
      { label: 'Monto', value: 'totalAmount' },
      { label: 'Estado', value: 'state.name' }
    ];

    const parser = new Parser({ fields });
    return parser.parse(orders);
  }

  async exportCommissions(): Promise<string> {
    const commissions = await this.commissionsRepository.find({
      relations: ['order', 'store'],
      order: { calculatedAt: 'DESC' }
    });

    const fields = [
      { label: 'ID', value: 'id' },
      { label: 'Fecha', value: (row) => new Date(row.createdAt).toLocaleDateString() },
      { label: 'Orden #', value: 'order.orderNumber' },
      { label: 'Tienda', value: 'store.legalName' },
      { label: 'Monto Orden', value: 'baseAmount' },
      { label: 'Comisión Marketplace', value: 'commissionAmount' },
      { label: 'Tasa %', value: 'rateApplied' }
    ];

    const parser = new Parser({ fields });
    return parser.parse(commissions);
  }
}
