import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Store } from '../../stores/entities/store.entity';
import { Service } from '../../services/entities/service.entity';
import { Quotation } from '../../quotations/entities/quotation.entity';
import { OrderState } from '../../catalogs/entities/order-state.entity';
import { Trip } from './trip.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  orderNumber: string; // e.g., ORD-2026-0001

  @ManyToOne(() => Quotation, { nullable: true })
  quotation: Quotation;

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => Service)
  service: Service;

  @ManyToOne(() => OrderState)
  state: OrderState;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  totalAmount: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Trip, (trip) => trip.order)
  trips: Trip[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
