import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(storeData: any, userId: number): Promise<Store> {
    const user = await this.usersRepository.findOne({ where: { id: userId }, relations: ['role'] });
    if (!user) throw new NotFoundException('User not found');

    const store = this.storesRepository.create({
      ...storeData,
      owner: user,
    });

    return this.storesRepository.save(store) as any as Promise<Store>;
  }

  async findByOwner(userId: number): Promise<Store | null> {
    return this.storesRepository.findOne({ 
      where: { owner: { id: userId } },
      relations: ['basePort']
    });
  }

  async findAllApproved(): Promise<Store[]> {
    return this.storesRepository.find({ where: { status: 'approved' }, relations: ['basePort'] });
  }
}
