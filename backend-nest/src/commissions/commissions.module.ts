import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommissionsService } from './commissions.service';
import { CommissionsController } from './commissions.controller';
import { Commission } from './entities/commission.entity';
import { CommissionRule } from './entities/commission-rule.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Commission, CommissionRule]),
  ],
  providers: [CommissionsService],
  controllers: [CommissionsController],
  exports: [CommissionsService],
})
export class CommissionsModule {}
