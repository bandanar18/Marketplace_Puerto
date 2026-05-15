import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InspectionTemplate, InspectionChecklist } from './entities/inspection.entities';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectRepository(InspectionTemplate)
    private templateRepository: Repository<InspectionTemplate>,
    @InjectRepository(InspectionChecklist)
    private checklistRepository: Repository<InspectionChecklist>,
    private auditService: AuditService,
  ) {}

  async getTemplates(): Promise<InspectionTemplate[]> {
    return this.templateRepository.find();
  }

  async complete(data: any, user: any): Promise<InspectionChecklist> {
    const template = await this.templateRepository.findOne({ where: { id: data.templateId } });
    if (!template) throw new NotFoundException('Template not found');

    const checklist = this.checklistRepository.create({
      ...data,
      template,
      inspector: { id: user.userId },
    });

    const saved = await this.checklistRepository.save(checklist) as any as InspectionChecklist;

    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'INSPECTION_COMPLETE',
      entityType: 'InspectionChecklist',
      entityId: saved.id,
      newValue: saved,
      criticality: saved.result === 'FAIL' ? 'HIGH' : 'MEDIUM',
    });

    return saved;
  }
}
