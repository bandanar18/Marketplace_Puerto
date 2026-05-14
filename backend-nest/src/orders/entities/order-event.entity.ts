import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Order } from './order.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class OrderEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, { onDelete: 'CASCADE' })
  order: Order;

  @Column()
  eventType: string; // e.g., STATUS_CHANGE, NOTE_ADDED, TRIP_STARTED

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => User)
  user: User; // Who triggered the event

  @CreateDateColumn()
  createdAt: Date;
}
