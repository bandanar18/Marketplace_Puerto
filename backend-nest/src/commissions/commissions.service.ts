import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commission } from './entities/commission.entity';
import { CommissionRule } from './entities/commission-rule.entity';
import { Payment } from '../payments/entities/payment.entity';

@Injectable()
export class CommissionsService {
  constructor(
    @InjectRepository(Commission)
    private commissionsRepository: Repository<Commission>,
    @InjectRepository(CommissionRule)
    private rulesRepository: Repository<CommissionRule>,
  ) {}

  async calculate(payment: Payment): Promise<Commission> {
    // 1. Find the applicable rule (Specific store override first, then service type)
    let rule = await this.rulesRepository.findOne({
      where: { store: { id: payment.order.store.id }, active: true },
    });

    if (!rule) {
      rule = await this.rulesRepository.findOne({
        where: { serviceType: { id: payment.order.service.category.id }, active: true },
      });
    }

    const rate = rule ? rule.rate : 5.00; // Default 5% if no rule found
    const grossAmount = Number(payment.amount);
    const commissionAmount = (grossAmount * rate) / 100;
    const netAmount = grossAmount - commissionAmount;

    const commission = this.commissionsRepository.create({
      payment,
      order: payment.order,
      grossAmount,
      rateApplied: rate,
      commissionAmount,
      netAmount,
    });

    return this.commissionsRepository.save(commission) as any as Commission;
  }

  async getForStore(storeId: number): Promise<Commission[]> {
    return this.commissionsRepository.find({
      where: { order: { store: { id: storeId } } },
      relations: ['order', 'payment'],
      order: { calculatedAt: 'DESC' },
    });
  }

  async getAll(): Promise<Commission[]> {
    return this.commissionsRepository.find({
      relations: ['order', 'payment', 'order.store'],
      order: { calculatedAt: 'DESC' },
    });
  }

  async createRule(data: any): Promise<CommissionRule> {
    const rule = this.rulesRepository.create(data);
    return this.rulesRepository.save(rule) as any as CommissionRule;
  }

  async getRules(): Promise<CommissionRule[]> {
    return this.rulesRepository.find({
      relations: ['serviceType', 'store'],
    });
  }
}
