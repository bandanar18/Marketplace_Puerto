import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  tripNumber: string; // e.g., TRP-2026-0001

  @ManyToOne(() => Order, (order) => order.trips)
  order: Order;

  @Column({ nullable: true })
  vehiclePlate: string;

  @Column({ nullable: true })
  driverName: string;

  @Column({ nullable: true })
  driverPhone: string;

  @Column({ nullable: true })
  origin: string;

  @Column({ nullable: true })
  destination: string;

  @Column({ default: 'SCHEDULED' })
  status: string; // SCHEDULED, IN_TRANSIT, DELIVERED, CANCELLED

  @Column({ type: 'timestamp', nullable: true })
  estimatedArrival: Date;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  currentLat: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  currentLng: number;

  @Column({ type: 'timestamp', nullable: true })
  startedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;

  @Column({ type: 'text', nullable: true })
  podSignature: string; // Base64 or URL

  @Column({ type: 'json', nullable: true })
  podPhotos: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
