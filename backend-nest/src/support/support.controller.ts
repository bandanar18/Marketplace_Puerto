import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { SupportService } from './support.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('support')
@UseGuards(JwtAuthGuard)
export class SupportController {
  constructor(private supportService: SupportService) {}

  @Post('tickets')
  async create(@Body() data: any, @Request() req) {
    return this.supportService.createTicket(data, req.user);
  }

  @Get('tickets/my')
  async getMyTickets(@Request() req) {
    return this.supportService.findMyTickets(req.user.userId);
  }

  @Get('tickets/:id')
  async getDetails(@Param('id') id: number) {
    return this.supportService.findTicketDetails(Number(id));
  }

  @Post('tickets/:id/messages')
  async addMessage(@Param('id') id: number, @Body('content') content: string, @Request() req) {
    return this.supportService.addMessage(Number(id), content, req.user);
  }
}
