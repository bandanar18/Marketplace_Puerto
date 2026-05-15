import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => WmsZone, (zone) => zone.warehouse)
  zones: WmsZone[];
}

@Entity()
export class WmsZone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string; // DRY, COLD, HAZARDOUS

  @ManyToOne(() => Warehouse, (wh) => wh.zones)
  warehouse: Warehouse;

  @OneToMany(() => Rack, (rack) => rack.zone)
  racks: Rack[];
}

@Entity()
export class Rack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string; // e.g., 'A1'

  @ManyToOne(() => WmsZone, (zone) => zone.racks)
  zone: WmsZone;

  @OneToMany(() => RackPosition, (pos) => pos.rack)
  positions: RackPosition[];
}

@Entity()
export class RackPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: number;

  @Column()
  column: number;

  @Column({ default: 'EMPTY' })
  status: string; // EMPTY, OCCUPIED, RESERVED

  @ManyToOne(() => Rack, (rack) => rack.positions)
  rack: Rack;
}
