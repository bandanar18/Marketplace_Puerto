import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post('order/:orderId')
  @UseGuards(JwtAuthGuard)
  async create(@Param('orderId') orderId: number, @Body() data: any, @Request() req) {
    return this.reviewsService.create(Number(orderId), data, req.user);
  }

  @Get('store/:storeId')
  async getByStore(@Param('storeId') storeId: number) {
    return this.reviewsService.findByStore(Number(storeId));
  }

  @Get('service/:serviceId')
  async getByService(@Param('serviceId') serviceId: number) {
    return this.reviewsService.findByService(Number(serviceId));
  }
}
