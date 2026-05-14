import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { OrdersService } from '../orders/orders.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    private ordersService: OrdersService,
    private auditService: AuditService,
  ) {}

  async create(orderId: number, reviewData: any, user: any): Promise<Review> {
    const order = await this.ordersService.findOne(orderId);
    if (!order) throw new NotFoundException('Order not found');

    if (order.state.code !== 'DELIVERED') {
      throw new ForbiddenException('Solo puedes calificar servicios que ya hayan sido entregados');
    }

    const review = this.reviewsRepository.create({
      ...reviewData,
      author: { id: user.userId },
      store: order.store,
      service: order.service,
      order: order,
    });

    const savedReview = await this.reviewsRepository.save(review) as any as Review;

    // Update Order State to COMPLETED
    await this.ordersService.updateState(
      orderId,
      'COMPLETED',
      user,
      'Servicio finalizado por el cliente con una reseña.'
    );

    // Audit
    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'SUBMIT_REVIEW',
      entityType: 'Review',
      entityId: savedReview.id,
      newValue: savedReview,
      criticality: 'MEDIUM',
    });

    return savedReview;
  }

  async findByStore(storeId: number): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { store: { id: storeId }, status: 'VISIBLE' },
      relations: ['author', 'service'],
      order: { createdAt: 'DESC' }
    });
  }

  async findByService(serviceId: number): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { service: { id: serviceId }, status: 'VISIBLE' },
      relations: ['author'],
      order: { createdAt: 'DESC' }
    });
  }
}
