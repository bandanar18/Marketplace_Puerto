import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async sendMessage(senderId: number, receiverId: number, content: string): Promise<Message> {
    const message = this.messagesRepository.create({
      senderId,
      receiverId,
      content,
    });
    return this.messagesRepository.save(message);
  }

  async getConversation(userId: number, contactId: number): Promise<Message[]> {
    return this.messagesRepository.find({
      where: [
        { senderId: userId, receiverId: contactId },
        { senderId: contactId, receiverId: userId },
      ],
      order: { createdAt: 'ASC' },
      relations: ['sender', 'receiver'],
    });
  }

  async getRecentConversations(userId: number) {
    // This is a simplified version. Ideally, it should group by contact and get the last message.
    const messages = await this.messagesRepository.find({
      where: [
        { senderId: userId },
        { receiverId: userId },
      ],
      order: { createdAt: 'DESC' },
      relations: ['sender', 'receiver'],
    });

    const conversations = new Map();
    messages.forEach(msg => {
      const contact = msg.senderId === userId ? msg.receiver : msg.sender;
      if (!conversations.has(contact.id)) {
        conversations.set(contact.id, {
          contact,
          lastMessage: msg,
        });
      }
    });

    return Array.from(conversations.values());
  }

  async markAsRead(receiverId: number, senderId: number): Promise<void> {
    await this.messagesRepository.update(
      { receiverId, senderId, isRead: false },
      { isRead: true }
    );
  }
}
