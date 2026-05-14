import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string; // e.g., 'CREATE_ORDER', 'VIEW_REPORTS'

  @Column()
  description: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
