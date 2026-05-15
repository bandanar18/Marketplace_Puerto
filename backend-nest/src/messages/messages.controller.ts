import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('messages')
@UseGuards(JwtAuthGuard)
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('send')
  sendMessage(@Request() req, @Body() body: { receiverId: number; content: string }) {
    return this.messagesService.sendMessage(req.user.id, body.receiverId, body.content);
  }

  @Get('recent')
  getRecentConversations(@Request() req) {
    return this.messagesService.getRecentConversations(req.user.id);
  }

  @Get('conversation/:contactId')
  getConversation(@Request() req, @Param('contactId') contactId: string) {
    return this.messagesService.getConversation(req.user.id, parseInt(contactId, 10));
  }

  @Post('read/:senderId')
  markAsRead(@Request() req, @Param('senderId') senderId: string) {
    return this.messagesService.markAsRead(req.user.id, parseInt(senderId, 10));
  }
}
