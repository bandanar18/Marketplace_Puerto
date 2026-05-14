import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Document } from '../orders/entities/document.entity';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Document]),
    OrdersModule,
  ],
  providers: [DocumentsService],
  controllers: [DocumentsController],
  exports: [DocumentsService],
})
export class DocumentsModule {}
