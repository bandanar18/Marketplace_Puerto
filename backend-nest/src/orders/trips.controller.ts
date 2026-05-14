import { Controller, Post, Patch, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { TripsService } from './trips.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('trips')
@UseGuards(JwtAuthGuard)
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Post('order/:orderId')
  async create(@Param('orderId') orderId: number, @Body() data: any, @Request() req) {
    return this.tripsService.create(orderId, data, req.user);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: number, @Body() data: any, @Request() req) {
    return this.tripsService.updateStatus(id, data.status, req.user, data.coords);
  }

  @Get('order/:orderId')
  async getByOrder(@Param('orderId') orderId: number) {
    return this.tripsService.findByOrder(orderId);
  }
}
