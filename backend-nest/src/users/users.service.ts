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
      relations: ['role'] 
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
}
