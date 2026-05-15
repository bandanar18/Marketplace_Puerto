import { Controller, Get, UseGuards, Request, Header } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StoresService } from '../stores/stores.service';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(
    private reportsService: ReportsService,
    private storesService: StoresService
  ) {}

  @Get('orders/csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=reporte_ordenes.csv')
  async exportOrders(@Request() req) {
    let storeId: number | undefined;
    if (req.user.role === 'STORE_OWNER') {
      const store = await this.storesService.findByOwner(req.user.userId);
      storeId = store?.id;
    }
    return this.reportsService.exportOrders(storeId);
  }

  @Get('payments/csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=reporte_pagos.csv')
  async exportPayments(@Request() req) {
    let storeId: number | undefined;
    if (req.user.role === 'STORE_OWNER') {
      const store = await this.storesService.findByOwner(req.user.userId);
      storeId = store?.id;
    }
    return this.reportsService.exportPayments(storeId);
  }

  @Get('commissions/csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=reporte_comisiones.csv')
  async exportCommissions() {
    return this.reportsService.exportCommissions();
  }
}
