import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { WmsService } from './wms.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('wms')
@UseGuards(JwtAuthGuard)
export class WmsController {
  constructor(private wmsService: WmsService) {}

  @Post('receive')
  async receive(@Body() data: any, @Request() req) {
    return this.wmsService.receive(data, req.user);
  }

  @Get('inventory/my')
  async getMyInventory(@Request() req) {
    return this.wmsService.getInventoryByClient(req.user.userId);
  }

  @Get('rack/:id/positions')
  async getRackPositions(@Param('id') id: number) {
    return this.wmsService.getPositionsByRack(Number(id));
  }
}
