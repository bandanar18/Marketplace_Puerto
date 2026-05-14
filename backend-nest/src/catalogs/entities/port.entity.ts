import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Country } from './country.entity';

@Entity()
export class Port {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // UN/LOCODE (e.g., 'VECBL', 'VELGU')

  @Column()
  name: string;

  @ManyToOne(() => Country)
  country: Country;

  @Column({ nullable: true })
  coordinates: string; // "lat,lng"
}
