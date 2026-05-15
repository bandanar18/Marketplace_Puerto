import { Controller, Get, UseGuards, Request, Header } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('orders/csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=reporte_ordenes.csv')
  async exportOrders(@Request() req) {
    // Logic to determine storeId based on role could be added here
    return this.reportsService.exportOrders();
  }

  @Get('commissions/csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=reporte_comisiones.csv')
  async exportCommissions() {
    return this.reportsService.exportCommissions();
  }
}
