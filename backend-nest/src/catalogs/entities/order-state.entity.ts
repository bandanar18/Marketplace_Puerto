import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // e.g., 'DRAFT', 'PUBLISHED', 'QUOTED', 'ACCEPTED', 'IN_TRANSIT', 'COMPLETED'

  @Column()
  name: string;

  @Column()
  color: string; // Hex code for UI representation
}
