import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CommissionsService } from './commissions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('commissions')
@UseGuards(JwtAuthGuard)
export class CommissionsController {
  constructor(private commissionsService: CommissionsService) {}

  @Get('my-commissions')
  async getMyCommissions(@Request() req) {
    // Note: Store owner ID should be derived from req.user
    return this.commissionsService.getForStore(req.user.userId);
  }

  @Get('all')
  async getAll() {
    return this.commissionsService.getAll();
  }

  @Post('rules')
  async createRule(@Body() data: any) {
    return this.commissionsService.createRule(data);
  }

  @Get('rules')
  async getRules() {
    return this.commissionsService.getRules();
  }
}
