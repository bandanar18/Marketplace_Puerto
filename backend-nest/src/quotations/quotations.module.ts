import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotationsService } from './quotations.service';
import { QuotationsController } from './quotations.controller';
import { Quotation } from './entities/quotation.entity';
import { StoresModule } from '../stores/stores.module';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quotation]),
    StoresModule,
    OrdersModule,
  ],
  providers: [QuotationsService],
  controllers: [QuotationsController],
  exports: [QuotationsService],
})
export class QuotationsModule {}
