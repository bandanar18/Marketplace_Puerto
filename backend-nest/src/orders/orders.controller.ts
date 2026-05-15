import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { StoresService } from '../stores/stores.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Órdenes y Servicios')
@ApiBearerAuth()
@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private storesService: StoresService
  ) {}

  @ApiOperation({ summary: 'Listar mis órdenes (Cliente)' })
  @Get('my-orders')
  async getMyOrders(@Request() req) {
    return this.ordersService.findByClient(req.user.userId);
  }

  @ApiOperation({ summary: 'Obtener estadísticas de órdenes' })
  @Get('stats')
  async getStats(@Request() req) {
    // Determine if we should show stats as a client or as a store owner
    if (req.user.role === 'STORE_OWNER') {
      const store = await this.storesService.findByOwner(req.user.userId);
      if (!store) return { totalOrders: 0, totalGMV: 0, statusDistribution: {} };
      return this.ordersService.getStats(store.id, 'store');
    }
    return this.ordersService.getStats(req.user.userId, 'client');
  }

  @ApiOperation({ summary: 'Obtener métricas operativas (Solo Staff)' })
  @Get('operator-metrics')
  async getOperatorMetrics() {
    return this.ordersService.getOperatorMetrics();
  }

  @Get('store-orders')
  async getStoreOrders(@Request() req) {
    const store = await this.storesService.findByOwner(req.user.userId);
    if (!store) return [];
    return this.ordersService.findByStore(store.id);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Get(':id/events')
  async getEvents(@Param('id') id: number) {
    return this.ordersService.getEvents(id);
  }
}
