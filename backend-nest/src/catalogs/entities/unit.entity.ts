import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // e.g., 'KG', 'TON', 'M3', 'TEU'

  @Column()
  name: string;

  @Column()
  type: string; // 'Weight', 'Volume', 'Quantity', 'Distance'
}
