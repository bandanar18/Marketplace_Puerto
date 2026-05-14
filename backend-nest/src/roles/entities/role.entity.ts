import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from '../../permissions/entities/permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 1 })
  level: number; // 1 to 4 as per plan

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({ name: 'role_permissions' })
  permissions: Permission[];
}
