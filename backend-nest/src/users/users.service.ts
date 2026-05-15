import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ 
      where: { email },
      relations: ['role'],
      select: ['id', 'email', 'passwordHash', 'firstName', 'lastName']
    });
  }

  async create(userData: any): Promise<User> {
    // Default to PROF-CLI-001 if no role provided
    if (!userData.role) {
      const defaultRole = await this.rolesRepository.findOneBy({ name: 'PROF-CLI-001' });
      userData.role = defaultRole;
    }
    
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user) as any as Promise<User>;
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ 
      where: { id },
      relations: ['role'] 
    });
  }

  async update(id: number, data: any): Promise<User> {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');
    
    // Protection: don't allow changing role or email easily here for security
    const { email, role, passwordHash, ...updateData } = data;
    
    Object.assign(user, updateData);
    return this.usersRepository.save(user) as any as Promise<User>;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['role'],
      order: { id: 'DESC' }
    });
  }

  async updateStatus(id: number, isActive: boolean): Promise<User> {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');
    user.isActive = isActive;
    return this.usersRepository.save(user) as any as Promise<User>;
  }

  async updateRole(id: number, roleName: string): Promise<User> {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');
    
    const role = await this.rolesRepository.findOneBy({ name: roleName });
    if (!role) throw new Error('Role not found');
    
    user.role = role;
    return this.usersRepository.save(user) as any as Promise<User>;
  }
}
