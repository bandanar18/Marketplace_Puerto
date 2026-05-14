import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { Currency } from './entities/currency.entity';
import { Unit } from './entities/unit.entity';
import { ServiceType } from './entities/service-type.entity';
import { Port } from './entities/port.entity';
import { OrderState } from './entities/order-state.entity';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectRepository(Country) private countryRepo: Repository<Country>,
    @InjectRepository(Currency) private currencyRepo: Repository<Currency>,
    @InjectRepository(Unit) private unitRepo: Repository<Unit>,
    @InjectRepository(ServiceType) private serviceTypeRepo: Repository<ServiceType>,
    @InjectRepository(Port) private portRepo: Repository<Port>,
    @InjectRepository(OrderState) private orderStateRepo: Repository<OrderState>,
  ) {}

  findAllCountries() { return this.countryRepo.find({ order: { name: 'ASC' } }); }
  findAllCurrencies() { return this.currencyRepo.find(); }
  findAllUnits() { return this.unitRepo.find(); }
  findAllServiceTypes() { return this.serviceTypeRepo.find(); }
  findAllPorts() { return this.portRepo.find({ relations: ['country'] }); }
  findAllOrderStates() { return this.orderStateRepo.find(); }

  // Generic method to add seed data if needed
  async seedCatalog(repo: Repository<any>, data: any[]) {
    for (const item of data) {
      const exists = await repo.findOneBy({ code: item.code });
      if (!exists) await repo.save(item);
    }
  }
}
