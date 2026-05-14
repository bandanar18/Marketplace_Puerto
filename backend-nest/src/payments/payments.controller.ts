import { Controller, Post, Body, Param, UseGuards, Request, Put, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('order/:orderId')
  async register(@Param('orderId') orderId: number, @Body() data: any, @Request() req) {
    return this.paymentsService.register(orderId, data, req.user);
  }

  @Put(':id/validate')
  async validate(@Param('id') id: number, @Body() data: any, @Request() req) {
    // Note: In a real app, we'd check req.user.role for 'OPERATOR' or 'ADMIN'
    return this.paymentsService.validate(id, data.status, req.user, data.notes);
  }

  @Get('pending')
  async getPending() {
    return this.paymentsService.findPending();
  }

  @Get('order/:orderId')
  async getByOrder(@Param('orderId') orderId: number) {
    return this.paymentsService.findByOrder(orderId);
  }
}
