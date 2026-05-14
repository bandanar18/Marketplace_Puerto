import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false }) // Don't return password by default
  passwordHash: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Role)
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
