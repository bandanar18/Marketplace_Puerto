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

  async findAll(): Promise<AuditLog[]> {
    return this.auditRepository.find({
      order: { timestamp: 'DESC' },
      take: 100, // Limit for safety
    });
  }

  async findByEntity(type: string, id: number): Promise<AuditLog[]> {
    return this.auditRepository.find({
      where: { entityType: type, entityId: id },
      order: { timestamp: 'DESC' },
    });
  }
}
