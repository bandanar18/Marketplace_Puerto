import { Controller, Post, Body, Get, UseGuards, Request, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StoresService } from '../stores/stores.service';

@Controller('services')
export class ServicesController {
  constructor(
    private servicesService: ServicesService,
    private storesService: StoresService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() serviceData: any, @Request() req) {
    const store = await this.storesService.findByOwner(req.user.userId);
    if (!store) throw new Error('You must have a store to create services');
    return this.servicesService.create(serviceData, store.id);
  }

  @Get()
  async getActive(@Query() filters: any) {
    return this.servicesService.findAllActive(filters);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-services')
  async getMyServices(@Request() req) {
    const store = await this.storesService.findByOwner(req.user.userId);
    if (!store) return [];
    return this.servicesService.findByStore(store.id);
  }
}
