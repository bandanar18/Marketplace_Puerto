import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Currency } from '../../catalogs/entities/currency.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  reportedBy: User;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @ManyToOne(() => Currency)
  currency: Currency;

  @Column()
  method: string; // Transferencia, Zelle, Pago Movil

  @Column({ unique: true })
  referenceNumber: string;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, APPROVED, REJECTED

  @Column({ nullable: true })
  receiptUrl: string;

  @Column({ type: 'date', nullable: true })
  paymentDate: Date;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ nullable: true })
  validatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
