import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionsService } from './inspections.service';
import { InspectionsController } from './inspections.controller';
import { InspectionTemplate, InspectionChecklist } from './entities/inspection.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([InspectionTemplate, InspectionChecklist]),
  ],
  providers: [InspectionsService],
  controllers: [InspectionsController],
  exports: [InspectionsService],
})
export class InspectionsModule {}
