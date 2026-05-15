import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { AgdService } from './agd.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('agd')
@UseGuards(JwtAuthGuard)
export class AgdController {
  constructor(private agdService: AgdService) {}

  @Post('certificates/order/:orderId')
  async issue(@Param('orderId') orderId: number, @Body() data: any, @Request() req) {
    return this.agdService.issueCertificate(Number(orderId), data, req.user);
  }

  @Post('certificates/:id/pledge')
  async pledge(@Param('id') id: number, @Body() data: any, @Request() req) {
    return this.agdService.createPledge(Number(id), data, req.user);
  }

  @Get('certificates/my')
  async getMyCertificates(@Request() req) {
    return this.agdService.findMyCertificates(req.user.userId);
  }

  @Get('check-block/:orderId')
  async checkBlock(@Param('orderId') orderId: number) {
    const isBlocked = await this.agdService.isOrderBlocked(Number(orderId));
    return { isBlocked };
  }
}
