import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class InspectionTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string; // CARGO, CONTAINER, VEHICLE

  @Column({ type: 'json' })
  questions: any; // [{ id: 1, text: '¿Estado de sellos?', type: 'select', options: ['OK', 'DAMAGED'] }]
}

@Entity()
export class InspectionChecklist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => InspectionTemplate)
  template: InspectionTemplate;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  inspector: User;

  @Column({ type: 'json' })
  answers: any; // { "1": "OK", "2": "..." }

  @Column({ type: 'json', nullable: true })
  photos: string[];

  @Column()
  result: string; // PASS, FAIL, CONDITIONAL

  @CreateDateColumn()
  completedAt: Date;
}
