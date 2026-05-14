import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './entities/review.entity';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Review]),
    OrdersModule,
  ],
  providers: [ReviewsService],
  controllers: [ReviewsController],
  exports: [ReviewsService],
})
export class ReviewsModule {}
