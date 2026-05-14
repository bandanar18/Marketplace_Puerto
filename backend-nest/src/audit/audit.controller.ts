import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { AuditService } from './audit.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('audit')
@UseGuards(JwtAuthGuard)
export class AuditController {
  constructor(private auditService: AuditService) {}

  @Get('logs')
  async getLogs() {
    // In production, we'd check if user has 'AUDITOR' or 'ADMIN' role
    return this.auditService.findAll();
  }

  @Get('entity')
  async getByEntity(@Query('type') type: string, @Query('id') id: number) {
    return this.auditService.findByEntity(type, Number(id));
  }
}
