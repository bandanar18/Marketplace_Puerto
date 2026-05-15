import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class SupportTicket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  folio: string;

  @Column()
  subject: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  category: string; // PAYMENT, LOGISTICS, TECHNICAL, ACCOUNT

  @Column({ default: 'MEDIUM' })
  priority: string; // LOW, MEDIUM, HIGH, URGENT

  @Column({ default: 'OPEN' })
  status: string; // OPEN, IN_PROGRESS, RESOLVED, CLOSED

  @ManyToOne(() => User)
  createdBy: User;

  @ManyToOne(() => User, { nullable: true })
  assignedTo: User;

  @OneToMany(() => SupportMessage, (msg) => msg.ticket)
  messages: SupportMessage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class SupportMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => SupportTicket, (t) => t.messages)
  ticket: SupportTicket;

  @CreateDateColumn()
  createdAt: Date;
}
