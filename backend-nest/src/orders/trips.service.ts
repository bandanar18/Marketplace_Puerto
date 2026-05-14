import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './entities/trip.entity';
import { OrdersService } from './orders.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trip)
    private tripsRepository: Repository<Trip>,
    private ordersService: OrdersService,
    private auditService: AuditService,
  ) {}

  async create(orderId: number, data: any, user: any): Promise<Trip> {
    const order = await this.ordersService.findOne(orderId);
    
    // Generate trip number
    const count = await this.tripsRepository.count();
    const tripNumber = `TRP-${new Date().getFullYear()}-${(count + 1).toString().padStart(4, '0')}`;

    const trip = this.tripsRepository.create({
      ...data,
      tripNumber,
      order,
      status: 'SCHEDULED',
    });

    const savedTrip = await this.tripsRepository.save(trip) as any as Trip;

    // Log in order timeline
    await this.ordersService.updateState(
      orderId,
      order.state.code, // Keep same state
      user,
      `Viaje de despacho creado: ${tripNumber}. Conductor: ${data.driverName}`
    );

    return savedTrip;
  }

  async updateStatus(id: number, status: string, user: any, coords?: { lat: number, lng: number }): Promise<Trip> {
    const trip = await this.tripsRepository.findOne({
      where: { id },
      relations: ['order']
    });
    if (!trip) throw new NotFoundException('Trip not found');

    const previousValue = { ...trip };
    trip.status = status;
    if (coords) {
      trip.currentLat = coords.lat;
      trip.currentLng = coords.lng;
    }

    if (status === 'IN_TRANSIT') trip.startedAt = new Date();
    if (status === 'DELIVERED') {
      trip.completedAt = new Date();
      // Update order state to DELIVERED
      await this.ordersService.updateState(
        trip.order.id,
        'DELIVERED',
        user,
        `Carga entregada exitosamente en destino. Viaje: ${trip.tripNumber}`
      );
    }

    const savedTrip = await this.tripsRepository.save(trip) as any as Trip;

    // Audit
    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'UPDATE_TRIP_STATUS',
      entityType: 'Trip',
      entityId: trip.id,
      previousValue,
      newValue: savedTrip,
      criticality: 'MEDIUM',
    });

    return savedTrip;
  }

  async findByOrder(orderId: number): Promise<Trip[]> {
    return this.tripsRepository.find({
      where: { order: { id: orderId } },
      order: { createdAt: 'DESC' },
    });
  }
}
