import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from '../orders/entities/document.entity';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
    private ordersService: OrdersService,
  ) {}

  async upload(orderId: number, data: any, user: any): Promise<Document> {
    const order = await this.ordersService.findOne(orderId);
    
    const document = this.documentsRepository.create({
      ...data,
      order,
      uploadedBy: user,
    });

    const savedDoc = await this.documentsRepository.save(document) as any as Document;

    // Log event in order timeline
    await this.ordersService.updateState(
      orderId,
      order.state.code, // Keep same state
      user,
      `Documento subido: ${data.type} - ${data.fileName}`
    );

    return savedDoc;
  }

  async findByOrder(orderId: number): Promise<Document[]> {
    return this.documentsRepository.find({
      where: { order: { id: orderId } },
      relations: ['uploadedBy'],
      order: { createdAt: 'DESC' },
    });
  }

  async remove(id: number, userId: number): Promise<void> {
    const doc = await this.documentsRepository.findOne({
      where: { id },
      relations: ['uploadedBy']
    });
    if (!doc) throw new NotFoundException('Document not found');
    if (doc.uploadedBy.id !== userId) throw new ForbiddenException('Not your document');

    await this.documentsRepository.remove(doc);
  }
}
