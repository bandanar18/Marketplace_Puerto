import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';
import { Country } from './entities/country.entity';
import { Currency } from './entities/currency.entity';
import { Unit } from './entities/unit.entity';
import { ServiceType } from './entities/service-type.entity';
import { Port } from './entities/port.entity';
import { OrderState } from './entities/order-state.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Country,
      Currency,
      Unit,
      ServiceType,
      Port,
      OrderState,
    ]),
  ],
  providers: [CatalogsService],
  controllers: [CatalogsController],
  exports: [CatalogsService],
})
export class CatalogsModule {}
