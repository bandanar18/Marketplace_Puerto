import { DataSource } from 'typeorm';
import { Role } from './roles/entities/role.entity';
import { User } from './users/entities/user.entity';
import { Country } from './catalogs/entities/country.entity';
import { Currency } from './catalogs/entities/currency.entity';
import { Unit } from './catalogs/entities/unit.entity';
import { ServiceType } from './catalogs/entities/service-type.entity';
import { Port } from './catalogs/entities/port.entity';
import { OrderState } from './catalogs/entities/order-state.entity';
import { Store } from './stores/entities/store.entity';
import { Service } from './services/entities/service.entity';
import { Quotation } from './quotations/entities/quotation.entity';
import { Order } from './orders/entities/order.entity';
import { Trip } from './orders/entities/trip.entity';
import { Payment } from './payments/entities/payment.entity';
import { Review } from './reviews/entities/review.entity';
import * as bcrypt from 'bcrypt';
import * as path from 'path';

async function seed() {
  const dataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'logistica_tos',
    entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
    synchronize: true,
  });

  await dataSource.initialize();
  console.log('Database connected');

  // TRUNCATE TABLES TO START FRESH
  // Order matters due to FK constraints
  const entities = ['review', 'payment', 'trip', 'order', 'quotation', 'service', 'store', 'user', 'role', 'port', 'order_state', 'service_type', 'unit', 'currency', 'country'];
  for (const entity of entities) {
    try {
      await dataSource.query(`DELETE FROM ${entity}`);
      await dataSource.query(`ALTER TABLE ${entity} AUTO_INCREMENT = 1`);
    } catch (e) {
      // Some tables might not exist yet or have different names
    }
  }

  // 1. Countries & Currencies
  const countryRepo = dataSource.getRepository(Country);
  const currencyRepo = dataSource.getRepository(Currency);
  
  const ve = await countryRepo.save({ code: 'VE', name: 'Venezuela' });
  await countryRepo.save([
    { code: 'CO', name: 'Colombia' },
    { code: 'US', name: 'Estados Unidos' },
  ]);
  
  const usd = await currencyRepo.save({ code: 'USD', name: 'Dólar Estadounidense', symbol: '$' });
  await currencyRepo.save({ code: 'VES', name: 'Bolívar Digital', symbol: 'Bs.' });

  // 2. Units
  const unitRepo = dataSource.getRepository(Unit);
  const ton = await unitRepo.save({ code: 'TON', name: 'Toneladas', type: 'Weight' });
  const m3 = await unitRepo.save({ code: 'M3', name: 'Metros Cúbicos', type: 'Volume' });
  const viaje = await unitRepo.save({ code: 'VIAJE', name: 'Por Viaje', type: 'Quantity' });
  await unitRepo.save({ code: 'KG', name: 'Kilogramos', type: 'Weight' });

  // 3. Service Types
  const stRepo = dataSource.getRepository(ServiceType);
  const stStorage = await stRepo.save({ code: 'STORAGE', name: 'Almacenamiento' });
  const stTransport = await stRepo.save({ code: 'TRANSPORT', name: 'Transporte Terrestre' });
  const stCustoms = await stRepo.save({ code: 'CUSTOMS', name: 'Agenciamiento Aduanal' });
  const stInspection = await stRepo.save({ code: 'INSPECTION', name: 'Inspección' });

  // 4. Ports
  const portRepo = dataSource.getRepository(Port);
  const pc = await portRepo.save({ name: 'Puerto Cabello', code: 'VEPBL', country: ve });
  const lg = await portRepo.save({ name: 'La Guaira', code: 'VELGU', country: ve });

  // 5. Order States
  const osRepo = dataSource.getRepository(OrderState);
  const osCreated = await osRepo.save({ code: 'CREATED', name: 'Creada', description: 'Orden recién generada' });
  const osConfirmed = await osRepo.save({ code: 'CONFIRMED', name: 'Confirmada', description: 'Tienda aceptó el servicio' });
  const osInProgress = await osRepo.save({ code: 'IN_PROGRESS', name: 'En Ejecución', description: 'Servicio operativo activo' });
  const osCompleted = await osRepo.save({ code: 'COMPLETED', name: 'Completada', description: 'Servicio finalizado con éxito' });
  const osCancelled = await osRepo.save({ code: 'CANCELLED', name: 'Cancelada', description: 'Orden anulada' });

  // 6. Roles
  const roleRepo = dataSource.getRepository(Role);
  const roles = [
    { name: 'PROF-CLI-001', description: 'Cliente Final' },
    { name: 'PROF-TIE-002', description: 'Tienda Logística' },
    { name: 'PROF-SUP-003', description: 'Superadmin' },
    { name: 'PROF-OPE-004', description: 'Operador Interno' },
    { name: 'PROF-INS-005', description: 'Inspector' },
    { name: 'PROF-TRP-006', description: 'Transportista' },
    { name: 'PROF-AGA-007', description: 'Agente Aduanal' },
    { name: 'PROF-AUD-008', description: 'Auditor' },
  ];
  
  const roleEntities: Record<string, Role> = {};
  for (const r of roles) {
    roleEntities[r.name] = await roleRepo.save(r as any);
  }

  // 7. Users (Admin, Client, and Store Owners)
  const userRepo = dataSource.getRepository(User);
  const passwordHash = await bcrypt.hash('password123', 10);
  
  const admin = await userRepo.save({ firstName: 'Super', lastName: 'Admin', email: 'admin@tos.com', passwordHash, role: roleEntities['PROF-SUP-003'] });
  const client = await userRepo.save({ firstName: 'Carlos', lastName: 'Cliente', email: 'client@tos.com', passwordHash, role: roleEntities['PROF-CLI-001'] });
  
  const ownerAduana = await userRepo.save({ firstName: 'Andres', lastName: 'Aduana', email: 'aduana@tos.com', passwordHash, role: roleEntities['PROF-TIE-002'] });
  const ownerTransporte = await userRepo.save({ firstName: 'Tomas', lastName: 'Transporte', email: 'transporte@tos.com', passwordHash, role: roleEntities['PROF-TIE-002'] });
  const ownerAlmacen = await userRepo.save({ firstName: 'Alberto', lastName: 'Almacen', email: 'almacen@tos.com', passwordHash, role: roleEntities['PROF-TIE-002'] });

  // 8. Stores
  const storeRepo = dataSource.getRepository(Store);
  const storeAduana = await storeRepo.save({ 
    legalName: 'Aduanas Globales S.A.', 
    taxId: 'J-12345678-0', 
    status: 'ACTIVE', 
    owner: ownerAduana, 
    basePort: pc,
    averageRating: 4.8
  });
  const storeTransporte = await storeRepo.save({ 
    legalName: 'Transportes Veloces C.A.', 
    taxId: 'J-87654321-0', 
    status: 'ACTIVE', 
    owner: ownerTransporte, 
    basePort: pc,
    averageRating: 4.5
  });
  const storeAlmacen = await storeRepo.save({ 
    legalName: 'Almacenes Seguros S.A.', 
    taxId: 'J-55555555-5', 
    status: 'ACTIVE', 
    owner: ownerAlmacen, 
    basePort: lg,
    averageRating: 4.2
  });

  // 9. Services
  const serviceRepo = dataSource.getRepository(Service);
  const s1 = await serviceRepo.save({ 
    name: 'Nacionalización de Carga General', 
    description: 'Trámite completo de aduana para contenedores de 20/40 pies.', 
    basePrice: 450, 
    store: storeAduana, 
    type: stCustoms, 
    billingUnit: viaje,
    status: 'PUBLISHED'
  });
  const s2 = await serviceRepo.save({ 
    name: 'Flete Puerto Cabello - Valencia', 
    description: 'Transporte terrestre local de carga contenerizada.', 
    basePrice: 280, 
    store: storeTransporte, 
    type: stTransport, 
    billingUnit: viaje,
    status: 'PUBLISHED'
  });
  const s3 = await serviceRepo.save({ 
    name: 'Almacenaje en Patio Fiscal', 
    description: 'Custodia de mercancía en zona primaria por día.', 
    basePrice: 15, 
    store: storeAlmacen, 
    type: stStorage, 
    billingUnit: ton,
    status: 'PUBLISHED'
  });

  // 10. Transactions (E2E Flows)
  const qRepo = dataSource.getRepository(Quotation);
  const oRepo = dataSource.getRepository(Order);
  const pRepo = dataSource.getRepository(Payment);
  const tripRepo = dataSource.getRepository(Trip);
  const reviewRepo = dataSource.getRepository(Review);

  // --- FLOW 1: ADUANA (COMPLETED & PAID) ---
  const q1 = await qRepo.save({ 
    client, store: storeAduana, service: s1, cargoDetails: '1x40HQ Electrónicos', 
    quotedPrice: 450, status: 'ACCEPTED', notes: 'Urgente' 
  });
  const o1 = await oRepo.save({ 
    orderNumber: 'ORD-2026-0001', client, store: storeAduana, service: s1, quotation: q1, 
    state: osCompleted, totalAmount: 450, description: 'Servicio de aduana completado' 
  });
  await pRepo.save({ 
    quotation: q1, reportedBy: client, amount: 450, currency: usd, 
    method: 'Zelle', referenceNumber: 'ZELLE-888', status: 'APPROVED', notes: 'Pago verificado' 
  });
  await reviewRepo.save({ 
    author: client, store: storeAduana, service: s1, rating: 5, 
    comment: 'Excelente servicio, muy rápidos con los documentos.', status: 'VISIBLE' 
  });

  // --- FLOW 2: TRANSPORTE (IN PROGRESS with TRIP) ---
  const q2 = await qRepo.save({ 
    client, store: storeTransporte, service: s2, cargoDetails: '1x20ST Repuestos', 
    quotedPrice: 280, status: 'ACCEPTED' 
  });
  const o2 = await oRepo.save({ 
    orderNumber: 'ORD-2026-0002', client, store: storeTransporte, service: s2, quotation: q2, 
    state: osInProgress, totalAmount: 280, description: 'Viaje en tránsito' 
  });
  await tripRepo.save({ 
    tripNumber: 'TRP-2026-0001', order: o2, vehiclePlate: 'A12BC3D', driverName: 'Juan Perez', 
    origin: 'Puerto Cabello', destination: 'Valencia, Carabobo', status: 'IN_TRANSIT', 
    startedAt: new Date() 
  });
  // Pending payment
  await pRepo.save({ 
    quotation: q2, reportedBy: client, amount: 280, currency: usd, 
    method: 'Transferencia', referenceNumber: 'TRANSF-999', status: 'PENDING' 
  });

  // --- FLOW 3: ALMACEN (CREATED / PENDING) ---
  const q3 = await qRepo.save({ 
    client, store: storeAlmacen, service: s3, cargoDetails: '10 TON Granos', 
    quotedPrice: 150, status: 'ACCEPTED' 
  });
  await oRepo.save({ 
    orderNumber: 'ORD-2026-0003', client, store: storeAlmacen, service: s3, quotation: q3, 
    state: osCreated, totalAmount: 150, description: 'Esperando llegada de carga' 
  });

  console.log('Ecosystem demo realistic seeded successfully');
  await dataSource.destroy();
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
