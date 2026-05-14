import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Order } from './order.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, { onDelete: 'CASCADE' })
  order: Order;

  @Column()
  fileName: string;

  @Column()
  fileUrl: string;

  @Column()
  type: string; // BL, INVOICE, PACKING_LIST, INSURANCE, CERTIFICATE, OTHER

  @ManyToOne(() => User)
  uploadedBy: User;

  @CreateDateColumn()
  createdAt: Date;
}
