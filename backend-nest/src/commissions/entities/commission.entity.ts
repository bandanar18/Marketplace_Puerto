import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Payment } from '../../payments/entities/payment.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Commission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Payment)
  payment: Payment;

  @ManyToOne(() => Order)
  order: Order;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  grossAmount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  rateApplied: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  commissionAmount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  netAmount: number;

  @CreateDateColumn()
  calculatedAt: Date;
}
