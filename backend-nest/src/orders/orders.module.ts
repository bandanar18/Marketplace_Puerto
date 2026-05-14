import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Trip } from './entities/trip.entity';
import { OrderEvent } from './entities/order-event.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderState } from '../catalogs/entities/order-state.entity';

import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Trip, OrderEvent, OrderState])],
  controllers: [OrdersController, TripsController],
  providers: [OrdersService, TripsService],
  exports: [OrdersService, TripsService],
})
export class OrdersModule {}
