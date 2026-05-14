import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // e.g., 'STORAGE', 'TRANSPORT', 'CUSTOMS', 'INSPECTION'

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}
