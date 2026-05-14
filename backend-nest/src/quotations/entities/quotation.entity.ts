import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Store } from '../../stores/entities/store.entity';
import { Service } from '../../services/entities/service.entity';

@Entity()
export class Quotation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => Service)
  service: Service;

  @Column({ type: 'text' })
  cargoDetails: string;

  @Column({ nullable: true })
  estimatedDate: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  quotedPrice: number;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, QUOTED, ACCEPTED, REJECTED

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
