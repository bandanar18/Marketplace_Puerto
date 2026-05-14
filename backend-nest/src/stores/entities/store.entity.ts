import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Port } from '../../catalogs/entities/port.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  legalName: string;

  @Column({ unique: true })
  taxId: string; // RIF / NIT

  @Column({ nullable: true })
  address: string;

  @ManyToOne(() => Port)
  basePort: Port;

  @Column({ default: 'pending' })
  status: string; // pending, approved, rejected

  @Column({ nullable: true })
  brandColor: string;

  @Column({ nullable: true })
  logoUrl: string;

  @OneToOne(() => User)
  @JoinColumn()
  owner: User;
}
