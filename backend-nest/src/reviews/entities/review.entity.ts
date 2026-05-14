import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Store } from '../../stores/entities/store.entity';
import { Service } from '../../services/entities/service.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => Service)
  service: Service;

  @ManyToOne(() => Order)
  order: Order;

  @Column({ type: 'int' })
  rating: number; // 1-5

  @Column({ type: 'text' })
  comment: string;

  @Column({ default: 'VISIBLE' })
  status: string; // VISIBLE, HIDDEN

  @CreateDateColumn()
  createdAt: Date;
}
