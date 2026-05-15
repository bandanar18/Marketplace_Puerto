import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Order } from '../../orders/entities/order.entity';
import { RackPosition } from './warehouse-hierarchy.entities';

@Entity()
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  quantity: number;

  @Column()
  unit: string; // PALLETS, BOXES, KG

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => RackPosition)
  position: RackPosition;

  @Column({ default: 'IN_STOCK' })
  status: string; // IN_STOCK, DISPATCHED, DAMAGED

  @CreateDateColumn()
  receivedAt: Date;
}
