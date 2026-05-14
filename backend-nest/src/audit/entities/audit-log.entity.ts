import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  userRole: string;

  @Column()
  action: string; // e.g., 'VALIDATE_PAYMENT', 'APPROVE_QUOTATION'

  @Column()
  entityType: string; // e.g., 'Payment', 'Quotation'

  @Column({ nullable: true })
  entityId: number;

  @Column({ type: 'json', nullable: true })
  previousValue: any;

  @Column({ type: 'json', nullable: true })
  newValue: any;

  @Column({ default: 'MEDIUM' })
  criticality: string; // LOW, MEDIUM, HIGH, CRITICAL

  @Column({ nullable: true })
  ipAddress: string;

  @CreateDateColumn()
  timestamp: Date;
}
