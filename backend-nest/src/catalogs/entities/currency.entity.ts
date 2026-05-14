import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // ISO 4217 (e.g., 'USD', 'VES')

  @Column()
  name: string;

  @Column()
  symbol: string;
}
