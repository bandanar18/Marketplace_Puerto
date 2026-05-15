import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportTicket, SupportMessage } from './entities/support.entities';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(SupportTicket)
    private ticketRepository: Repository<SupportTicket>,
    @InjectRepository(SupportMessage)
    private messageRepository: Repository<SupportMessage>,
    private auditService: AuditService,
  ) {}

  async createTicket(data: any, user: any): Promise<SupportTicket> {
    const ticket = this.ticketRepository.create({
      ...data,
      folio: `TCK-${Date.now()}`,
      createdBy: { id: user.userId },
      status: 'OPEN',
    });

    const saved = await this.ticketRepository.save(ticket) as any as SupportTicket;

    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'SUPPORT_TICKET_OPEN',
      entityType: 'SupportTicket',
      entityId: saved.id,
      newValue: saved,
      criticality: 'MEDIUM',
    });

    return saved;
  }

  async addMessage(ticketId: number, content: string, user: any): Promise<SupportMessage> {
    const ticket = await this.ticketRepository.findOne({ where: { id: ticketId } });
    if (!ticket) throw new NotFoundException('Ticket not found');
    if (ticket.status === 'CLOSED') throw new Error('Cannot add message to a closed ticket');

    const message = this.messageRepository.create({
      content,
      author: { id: user.userId },
      ticket,
    });

    const savedMsg = await this.messageRepository.save(message) as any as SupportMessage;

    // Update ticket updatedAt
    ticket.updatedAt = new Date();
    if (ticket.status === 'OPEN' && user.role !== 'CUSTOMER') {
      ticket.status = 'IN_PROGRESS';
    }
    await this.ticketRepository.save(ticket);

    return savedMsg;
  }

  async findMyTickets(userId: number): Promise<SupportTicket[]> {
    return this.ticketRepository.find({
      where: { createdBy: { id: userId } },
      order: { updatedAt: 'DESC' },
    });
  }

  async findTicketDetails(id: number): Promise<SupportTicket | null> {
    return this.ticketRepository.findOne({
      where: { id },
      relations: ['messages', 'messages.author', 'createdBy'],
    });
  }
}
