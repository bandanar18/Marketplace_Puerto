import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';
import { Permission } from './permissions/entities/permission.entity';
import { CatalogsModule } from './catalogs/catalogs.module';
import { Country } from './catalogs/entities/country.entity';
import { Currency } from './catalogs/entities/currency.entity';
import { Unit } from './catalogs/entities/unit.entity';
import { ServiceType } from './catalogs/entities/service-type.entity';
import { Port } from './catalogs/entities/port.entity';
import { OrderState } from './catalogs/entities/order-state.entity';
import { StoresModule } from './stores/stores.module';
import { ServicesModule } from './services/services.module';
import { Store } from './stores/entities/store.entity';
import { Service } from './services/entities/service.entity';
import { Quotation } from './quotations/entities/quotation.entity';
import { QuotationsModule } from './quotations/quotations.module';
import { PaymentsModule } from './payments/payments.module';
import { Payment } from './payments/entities/payment.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/entities/review.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { Trip } from './orders/entities/trip.entity';
import { OrderEvent } from './orders/entities/order-event.entity';
import { Document } from './orders/entities/document.entity';
import { DocumentsModule } from './documents/documents.module';
import { Commission } from './commissions/entities/commission.entity';
import { CommissionRule } from './commissions/entities/commission-rule.entity';
import { CommissionsModule } from './commissions/commissions.module';
import { AuditModule } from './audit/audit.module';
import { InventoryItem } from './wms/entities/inventory-item.entity';
import { Warehouse, WmsZone, Rack, RackPosition } from './wms/entities/warehouse-hierarchy.entities';
import { WmsModule } from './wms/wms.module';
import { CertificateOfDeposit, PledgeBond } from './agd/entities/agd.entities';
import { AgdModule } from './agd/agd.module';
import { InspectionTemplate, InspectionChecklist } from './inspections/entities/inspection.entities';
import { InspectionsModule } from './inspections/inspections.module';
import { ReportsModule } from './reports/reports.module';
import { SupportTicket, SupportMessage } from './support/entities/support.entities';
import { SupportModule } from './support/support.module';
import { AuditLog } from './audit/entities/audit-log.entity';
import { Notification } from './notifications/entities/notification.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { Message } from './messages/entities/message.entity';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'logistica_tos',
      entities: [
        User, Role, Permission, 
        Country, Currency, Unit, ServiceType, Port, OrderState,
        Store, Service, Quotation, Payment, Review, Order, Trip, OrderEvent, Document,
        Commission, CommissionRule, AuditLog,
        InventoryItem, Warehouse, WmsZone, Rack, RackPosition,
        CertificateOfDeposit, PledgeBond,
        InspectionTemplate, InspectionChecklist,
        SupportTicket, SupportMessage,
        Notification, Message
      ],
      synchronize: true, // Should be false in production
    }),
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    CatalogsModule,
    StoresModule,
    ServicesModule,
    QuotationsModule,
    PaymentsModule,
    ReviewsModule,
    OrdersModule,
    DocumentsModule,
    CommissionsModule,
    AuditModule,
    WmsModule,
    AgdModule,
    InspectionsModule,
    ReportsModule,
    SupportModule,
    NotificationsModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
