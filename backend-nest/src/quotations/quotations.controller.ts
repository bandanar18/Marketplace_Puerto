import { Controller, Post, Body, Get, UseGuards, Request, Param, Patch } from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StoresService } from '../stores/stores.service';

@Controller('quotations')
@UseGuards(JwtAuthGuard)
export class QuotationsController {
  constructor(
    private quotationsService: QuotationsService,
    private storesService: StoresService
  ) {}

  @Post('request')
  async create(@Body() data: any, @Request() req) {
    return this.quotationsService.createRequest(data, req.user);
  }

  @Get('my-requests')
  async getMyRequests(@Request() req) {
    return this.quotationsService.findByClient(req.user.userId);
  }

  @Get('store-requests')
  async getStoreRequests(@Request() req) {
    const store = await this.storesService.findByOwner(req.user.userId);
    if (!store) return [];
    return this.quotationsService.findByStore(store.id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: any) {
    return this.quotationsService.updateStatus(id, data);
  }

  @Post(':id/approve')
  async approve(@Param('id') id: number, @Request() req) {
    return this.quotationsService.approve(id, req.user.userId);
  }

  @Post(':id/reject')
  async reject(@Param('id') id: number, @Body() data: any, @Request() req) {
    return this.quotationsService.reject(id, req.user.userId, data.reason);
  }

  @Post(':id/request-revision')
  async requestRevision(@Param('id') id: number, @Body() data: any, @Request() req) {
    return this.quotationsService.requestRevision(id, req.user.userId, data.comments);
  }

  @Post(':id/counter-respond')
  async counterRespond(@Param('id') id: number, @Body() data: any, @Request() req) {
    return this.quotationsService.counterRespond(id, req.user.userId, data);
  }
}
