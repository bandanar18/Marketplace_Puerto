import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ServiceType } from '../../catalogs/entities/service-type.entity';
import { Store } from '../../stores/entities/store.entity';

@Entity()
export class CommissionRule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ServiceType, { nullable: true })
  serviceType: ServiceType;

  @ManyToOne(() => Store, { nullable: true })
  store: Store; // Specific override for a store

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  rate: number; // e.g., 5.00 for 5%

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  minAmount: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
