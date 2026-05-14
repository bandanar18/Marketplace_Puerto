import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // ISO 3166-1 alpha-2 (e.g., 'VE', 'US')

  @Column()
  name: string;
}
