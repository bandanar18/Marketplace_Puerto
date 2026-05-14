import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { StoresService } from './stores.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @UseGuards(JwtAuthGuard)
  @Post('onboarding')
  async onboard(@Body() storeData: any, @Request() req) {
    return this.storesService.create(storeData, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMyStore(@Request() req) {
    return this.storesService.findByOwner(req.user.userId);
  }

  @Get()
  async getAllApproved() {
    return this.storesService.findAllApproved();
  }
}
