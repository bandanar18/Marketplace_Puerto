import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Store } from '../../stores/entities/store.entity';
import { ServiceType } from '../../catalogs/entities/service-type.entity';
import { Unit } from '../../catalogs/entities/unit.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basePrice: number;

  @ManyToOne(() => Unit)
  billingUnit: Unit;

  @ManyToOne(() => ServiceType)
  category: ServiceType;

  @ManyToOne(() => Store)
  store: Store;

  @Column({ default: 'draft' })
  status: string; // draft, active, archived
}
