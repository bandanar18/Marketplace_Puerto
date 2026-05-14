import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('my-orders')
  async getMyOrders(@Request() req) {
    return this.ordersService.findByClient(req.user.userId);
  }

  @Get('store-orders')
  async getStoreOrders(@Request() req) {
    // Note: Store ID retrieval logic should be handled here or in the service
    // For now, we assume the user is the owner of the store
    // This part might need further refinement based on user-store relationship
    return this.ordersService.findByStore(req.user.userId); // Placeholder
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
