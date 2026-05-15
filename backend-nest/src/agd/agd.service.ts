import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CertificateOfDeposit, PledgeBond } from './entities/agd.entities';
import { OrdersService } from '../orders/orders.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class AgdService {
  constructor(
    @InjectRepository(CertificateOfDeposit)
    private cdRepository: Repository<CertificateOfDeposit>,
    @InjectRepository(PledgeBond)
    private pledgeRepository: Repository<PledgeBond>,
    private ordersService: OrdersService,
    private auditService: AuditService,
  ) {}

  async issueCertificate(orderId: number, data: any, user: any): Promise<CertificateOfDeposit> {
    const order = await this.ordersService.findOne(orderId);
    if (!order) throw new NotFoundException('Order not found');

    const cd = this.cdRepository.create({
      ...data,
      folio: `CD-${Date.now()}`,
      client: order.client,
      order: order,
      status: 'ACTIVE',
    });

    const savedCd = await this.cdRepository.save(cd) as any as CertificateOfDeposit;

    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'AGD_ISSUE_CD',
      entityType: 'CertificateOfDeposit',
      entityId: savedCd.id,
      newValue: savedCd,
      criticality: 'HIGH',
    });

    return savedCd;
  }

  async createPledge(certId: number, data: any, user: any): Promise<PledgeBond> {
    const cert = await this.cdRepository.findOne({ where: { id: certId } });
    if (!cert) throw new NotFoundException('Certificate not found');
    if (cert.status !== 'ACTIVE') throw new ForbiddenException('Certificate is not in ACTIVE state');

    const pledge = this.pledgeRepository.create({
      ...data,
      certificate: cert,
      status: 'ACTIVE',
    });

    const savedPledge = await this.pledgeRepository.save(pledge) as any as PledgeBond;

    // Update Certificate status to PLEDGED
    cert.status = 'PLEDGED';
    await this.cdRepository.save(cert);

    await this.auditService.log({
      userId: user.userId,
      userRole: user.role,
      action: 'AGD_CREATE_PLEDGE',
      entityType: 'PledgeBond',
      entityId: savedPledge.id,
      newValue: savedPledge,
      criticality: 'CRITICAL',
    });

    return savedPledge;
  }

  async isOrderBlocked(orderId: number): Promise<boolean> {
    const cert = await this.cdRepository.findOne({
      where: { order: { id: orderId }, status: 'PLEDGED' }
    });
    return !!cert;
  }

  async findMyCertificates(clientId: number): Promise<CertificateOfDeposit[]> {
    return this.cdRepository.find({
      where: { client: { id: clientId } },
      relations: ['order'],
      order: { issuedAt: 'DESC' }
    });
  }
}
