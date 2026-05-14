import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { Store } from '../stores/entities/store.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}

  async create(serviceData: any, storeId: number): Promise<Service> {
    const store = await this.storesRepository.findOneBy({ id: storeId });
    if (!store) throw new NotFoundException('Store not found');

    const service = this.servicesRepository.create({
      ...serviceData,
      store,
    });

    return this.servicesRepository.save(service) as any as Promise<Service>;
  }

  async findByStore(storeId: number): Promise<Service[]> {
    return this.servicesRepository.find({ 
      where: { store: { id: storeId } },
      relations: ['billingUnit', 'category']
    });
  }

  async findAllActive(filters: any = {}): Promise<Service[]> {
    const { q, portId, categoryId, minPrice, maxPrice } = filters;
    const query = this.servicesRepository.createQueryBuilder('service')
      .leftJoinAndSelect('service.store', 'store')
      .leftJoinAndSelect('service.billingUnit', 'billingUnit')
      .leftJoinAndSelect('service.category', 'category')
      .leftJoinAndSelect('store.basePort', 'port')
      .where('service.status = :status', { status: 'active' })
      .andWhere('store.status = :storeStatus', { storeStatus: 'approved' });

    if (q) {
      query.andWhere('(service.name LIKE :q OR service.description LIKE :q)', { q: `%${q}%` });
    }

    if (portId) {
      query.andWhere('port.id = :portId', { portId });
    }

    if (categoryId) {
      query.andWhere('category.id = :categoryId', { categoryId });
    }

    if (minPrice) {
      query.andWhere('service.basePrice >= :minPrice', { minPrice });
    }

    if (maxPrice) {
      query.andWhere('service.basePrice <= :maxPrice', { maxPrice });
    }

    return query.getMany();
  }
}
