import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { Payment } from './entities/payment.entity';
import { QuotationsModule } from '../quotations/quotations.module';
import { StoresModule } from '../stores/stores.module';
import { OrdersModule } from '../orders/orders.module';
import { CommissionsModule } from '../commissions/commissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment]),
    QuotationsModule,
    StoresModule,
    OrdersModule,
    CommissionsModule,
  ],
  providers: [PaymentsService],
  controllers: [PaymentsController],
  exports: [PaymentsService],
})
export class PaymentsModule {}
