import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { InspectionsService } from './inspections.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('inspections')
@UseGuards(JwtAuthGuard)
export class InspectionsController {
  constructor(private inspectionsService: InspectionsService) {}

  @Get('templates')
  async getTemplates() {
    return this.inspectionsService.getTemplates();
  }

  @Post('complete')
  async complete(@Body() data: any, @Request() req) {
    return this.inspectionsService.complete(data, req.user);
  }
}
