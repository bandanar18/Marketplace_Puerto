import { Controller, Post, Get, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Post('order/:orderId')
  async upload(@Param('orderId') orderId: number, @Body() data: any, @Request() req) {
    return this.documentsService.upload(orderId, data, req.user);
  }

  @Get('order/:orderId')
  async getByOrder(@Param('orderId') orderId: number) {
    return this.documentsService.findByOrder(orderId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    return this.documentsService.remove(id, req.user.userId);
  }
}
