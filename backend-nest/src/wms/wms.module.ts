import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WmsService } from './wms.service';
import { WmsController } from './wms.controller';
import { InventoryItem } from './entities/inventory-item.entity';
import { Warehouse, WmsZone, Rack, RackPosition } from './entities/warehouse-hierarchy.entities';
import { OrdersModule } from '../orders/orders.module';
import { AgdModule } from '../agd/agd.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryItem, Warehouse, WmsZone, Rack, RackPosition]),
    OrdersModule,
    AgdModule,
  ],
  providers: [WmsService],
  controllers: [WmsController],
  exports: [WmsService],
})
export class WmsModule {}
