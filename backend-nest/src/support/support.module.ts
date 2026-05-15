import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportService } from './support.service';
import { SupportController } from './support.controller';
import { SupportTicket, SupportMessage } from './entities/support.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupportTicket, SupportMessage]),
  ],
  providers: [SupportService],
  controllers: [SupportController],
  exports: [SupportService],
})
export class SupportModule {}
