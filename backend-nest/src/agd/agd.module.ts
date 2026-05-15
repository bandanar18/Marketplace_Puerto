import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgdService } from './agd.service';
import { AgdController } from './agd.controller';
import { CertificateOfDeposit, PledgeBond } from './entities/agd.entities';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CertificateOfDeposit, PledgeBond]),
    forwardRef(() => OrdersModule),
  ],
  providers: [AgdService],
  controllers: [AgdController],
  exports: [AgdService],
})
export class AgdModule {}
