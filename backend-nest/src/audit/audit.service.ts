import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from './entities/audit-log.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(AuditLog)
    private auditRepository: Repository<AuditLog>,
  ) {}

  async log(data: Partial<AuditLog>): Promise<void> {
    const entry = this.auditRepository.create(data);
    await this.auditRepository.save(entry);
  }

  async findAll(filters: any = {}): Promise<AuditLog[]> {
    const { userId, action, entityType } = filters;
    const query = this.auditRepository.createQueryBuilder('log');

    if (userId) query.andWhere('log.userId = :userId', { userId });
    if (action) query.andWhere('log.action = :action', { action });
    if (entityType) query.andWhere('log.entityType = :entityType', { entityType });

    return query.orderBy('log.timestamp', 'DESC').take(200).getMany();
  }

  async findByEntity(type: string, id: number): Promise<AuditLog[]> {
    return this.auditRepository.find({
      where: { entityType: type, entityId: id },
      order: { timestamp: 'DESC' },
    });
  }
}
