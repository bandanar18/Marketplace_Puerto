import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class CertificateOfDeposit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  folio: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  declaredValue: number;

  @Column()
  currency: string;

  @Column({ default: 'ACTIVE' })
  status: string; // ACTIVE, PLEDGED, EXPIRED, RELEASED

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => Order)
  order: Order;

  @CreateDateColumn()
  issuedAt: Date;

  @Column({ type: 'timestamp' })
  expiresAt: Date;
}

@Entity()
export class PledgeBond {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  financialInstitution: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  creditAmount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  interestRate: number;

  @Column({ default: 'ACTIVE' })
  status: string; // ACTIVE, RELEASED

  @OneToOne(() => CertificateOfDeposit)
  @JoinColumn()
  certificate: CertificateOfDeposit;

  @CreateDateColumn()
  issuedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  releasedAt: Date;
}
