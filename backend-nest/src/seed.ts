/**
 * Puerto Marketplace – Seed de Datos de Prueba
 * ================================================
 * Ejecutar: npx ts-node src/seed.ts
 *
 * Usuarios de demo (todos con contraseña: Demo2026!):
 *   admin@puerto.com      → Superadmin
 *   operador@puerto.com   → Operador Interno
 *   auditor@puerto.com    → Auditor
 *   carlos@demo.com       → Cliente
 *   maria@demo.com        → Cliente
 *   jose@demo.com         → Cliente
 *   aduana@demo.com       → Dueño – Aduanas Globales
 *   transport@demo.com    → Dueño – Transportes Rápidos
 *   almacen@demo.com      → Dueño – Almacenes Puerto Norte
 *   inspeccion@demo.com   → Dueño – Inspecciones Técnicas
 *   maritimo@demo.com     → Dueño – Servicios Marítimos
 */

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
import { OrderEvent } from './orders/entities/order-event.entity';
import { Payment } from './payments/entities/payment.entity';
import { Review } from './reviews/entities/review.entity';
import * as bcrypt from 'bcrypt';
import * as path from 'path';

// ── Helper ──────────────────────────────────────────────────────────────────
function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

// ── Main ────────────────────────────────────────────────────────────────────
async function seed() {
  const ds = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres123',
    database: process.env.DB_NAME || 'logistica_tos',
    entities: [
    path.join(__dirname, '**/*.entity.{ts,js}'),
    path.join(__dirname, '**/*.entities.{ts,js}'),
  ],
    synchronize: true,
  });

  await ds.initialize();
  console.log('✅  Conexión a PostgreSQL establecida');

  // ── Limpiar tablas (orden respeta FK) ───────────────────────────────────
  const tables = [
    'review', 'payment', 'trip', 'order_event', '"order"',
    'quotation', 'service', 'store',
    'role_permissions', '"user"',
    'role', 'port', 'order_state', 'service_type', 'unit', 'currency', 'country',
  ];
  for (const t of tables) {
    try {
      await ds.query(`TRUNCATE TABLE ${t} RESTART IDENTITY CASCADE`);
    } catch (_) { /* tabla aún no existe, ignorar */ }
  }
  console.log('🧹  Tablas limpiadas');

  // ════════════════════════════════════════════════════════════════════════
  //  1. CATÁLOGOS BASE
  // ════════════════════════════════════════════════════════════════════════

  // — Países ——————————————————————————————————————————————————————————————
  const countryRepo = ds.getRepository(Country);
  const ve = await countryRepo.save({ code: 'VE', name: 'Venezuela' });
  const co = await countryRepo.save({ code: 'CO', name: 'Colombia' });
  const us = await countryRepo.save({ code: 'US', name: 'Estados Unidos' });
  await countryRepo.save({ code: 'PA', name: 'Panamá' });
  await countryRepo.save({ code: 'TT', name: 'Trinidad y Tobago' });
  console.log('🌎  Países creados');

  // — Monedas ——————————————————————————————————————————————————————————————
  const currencyRepo = ds.getRepository(Currency);
  const usd = await currencyRepo.save({ code: 'USD', name: 'Dólar Estadounidense', symbol: '$' });
  await currencyRepo.save({ code: 'VES', name: 'Bolívar Digital', symbol: 'Bs.' });
  await currencyRepo.save({ code: 'EUR', name: 'Euro', symbol: '€' });
  console.log('💱  Monedas creadas');

  // — Unidades ——————————————————————————————————————————————————————————————
  const unitRepo = ds.getRepository(Unit);
  const ton  = await unitRepo.save({ code: 'TON',   name: 'Toneladas',                type: 'Weight'   });
  const kg   = await unitRepo.save({ code: 'KG',    name: 'Kilogramos',               type: 'Weight'   });
  const m3   = await unitRepo.save({ code: 'M3',    name: 'Metros Cúbicos',           type: 'Volume'   });
  const teu  = await unitRepo.save({ code: 'TEU',   name: 'Unidad Equivalente 20 ft', type: 'Quantity' });
  const viaje= await unitRepo.save({ code: 'VIAJE', name: 'Por Viaje',                type: 'Quantity' });
  const dia  = await unitRepo.save({ code: 'DIA',   name: 'Por Día',                  type: 'Quantity' });
  const cont = await unitRepo.save({ code: 'CONT',  name: 'Por Contenedor',           type: 'Quantity' });
  console.log('📏  Unidades creadas');

  // — Tipos de Servicio ———————————————————————————————————————————————————
  const stRepo = ds.getRepository(ServiceType);
  const stStorage    = await stRepo.save({ code: 'STORAGE',    name: 'Almacenamiento',        description: 'Custodia y almacenaje de mercancía' });
  const stTransport  = await stRepo.save({ code: 'TRANSPORT',  name: 'Transporte Terrestre',   description: 'Flete por carretera' });
  const stCustoms    = await stRepo.save({ code: 'CUSTOMS',    name: 'Agenciamiento Aduanal',  description: 'Gestión de importación y exportación' });
  const stInspection = await stRepo.save({ code: 'INSPECTION', name: 'Inspección Portuaria',   description: 'Inspección técnica de carga' });
  const stMaritime   = await stRepo.save({ code: 'MARITIME',   name: 'Transporte Marítimo',    description: 'Agenciamiento y operaciones marítimas' });
  const stLogistics  = await stRepo.save({ code: 'LOGISTICS',  name: 'Logística Integral',     description: 'Soluciones logísticas completas' });
  console.log('🏷️  Tipos de servicio creados');

  // — Puertos ——————————————————————————————————————————————————————————————
  const portRepo = ds.getRepository(Port);
  const pc   = await portRepo.save({ code: 'VEPBL', name: 'Puerto Cabello',       country: ve, coordinates: '10.4667,-68.0167' });
  const lg   = await portRepo.save({ code: 'VELGU', name: 'La Guaira',            country: ve, coordinates: '10.6033,-66.9303' });
  const mara = await portRepo.save({ code: 'VEMZL', name: 'Maracaibo',            country: ve, coordinates: '10.6544,-71.6024' });
  const gua  = await portRepo.save({ code: 'VEGUA', name: 'Guanta – Barcelona',   country: ve, coordinates: '10.2333,-64.5667' });
  await portRepo.save({ code: 'VECUM', name: 'Cumaná',              country: ve, coordinates: '10.4500,-64.1833' });
  console.log('⚓  Puertos creados');

  // — Estados de Orden ————————————————————————————————————————————————————
  const osRepo = ds.getRepository(OrderState);
  const osCreated    = await osRepo.save({ code: 'CREATED',                     name: 'Creada',                   color: '#6B7280' });
  const osPayPending = await osRepo.save({ code: 'PAYMENT_PENDING_VALIDATION',  name: 'Pago en Revisión',         color: '#F59E0B' });
  const osPayRejected= await osRepo.save({ code: 'PAYMENT_REJECTED',            name: 'Pago Rechazado',           color: '#EF4444' });
  const osPaid       = await osRepo.save({ code: 'PAID',                        name: 'Pagada',                   color: '#10B981' });
  const osInProgress = await osRepo.save({ code: 'IN_PROGRESS',                 name: 'En Ejecución',             color: '#3B82F6' });
  const osDelivered  = await osRepo.save({ code: 'DELIVERED',                   name: 'Entregada',                color: '#8B5CF6' });
  const osCompleted  = await osRepo.save({ code: 'COMPLETED',                   name: 'Completada',               color: '#059669' });
  const osCancelled  = await osRepo.save({ code: 'CANCELLED',                   name: 'Cancelada',                color: '#9CA3AF' });
  console.log('📋  Estados de orden creados');

  // ════════════════════════════════════════════════════════════════════════
  //  2. ROLES Y USUARIOS
  // ════════════════════════════════════════════════════════════════════════

  const roleRepo = ds.getRepository(Role);
  const roleSuperAdmin = await roleRepo.save({ name: 'PROF-SUP-003', description: 'Superadmin',          level: 4 });
  const roleOperador   = await roleRepo.save({ name: 'PROF-OPE-004', description: 'Operador Interno',     level: 3 });
  const roleAuditor    = await roleRepo.save({ name: 'PROF-AUD-008', description: 'Auditor',              level: 3 });
  const roleCliente    = await roleRepo.save({ name: 'PROF-CLI-001', description: 'Cliente Final',         level: 1 });
  const roleTienda     = await roleRepo.save({ name: 'PROF-TIE-002', description: 'Tienda Logística',      level: 2 });
  const roleInspector  = await roleRepo.save({ name: 'PROF-INS-005', description: 'Inspector',             level: 2 });
  const roleTrans      = await roleRepo.save({ name: 'PROF-TRP-006', description: 'Transportista',         level: 2 });
  const roleAgente     = await roleRepo.save({ name: 'PROF-AGA-007', description: 'Agente Aduanal',        level: 2 });
  console.log('🎭  Roles creados');

  const userRepo = ds.getRepository(User);
  const hash = await bcrypt.hash('Demo2026!', 10);

  // Staff interno
  const admin    = await userRepo.save({ firstName: 'Super',   lastName: 'Admin',      email: 'admin@puerto.com',      passwordHash: hash, role: roleSuperAdmin, phone: '+58 412-000-0000', isActive: true });
  const operador = await userRepo.save({ firstName: 'Luis',    lastName: 'Operador',   email: 'operador@puerto.com',   passwordHash: hash, role: roleOperador,   phone: '+58 412-111-0001', isActive: true });
  const auditor  = await userRepo.save({ firstName: 'Ana',     lastName: 'Auditora',   email: 'auditor@puerto.com',    passwordHash: hash, role: roleAuditor,    phone: '+58 412-222-0002', isActive: true });

  // Clientes
  const carlos = await userRepo.save({ firstName: 'Carlos',  lastName: 'García',      email: 'carlos@demo.com',       passwordHash: hash, role: roleCliente,    phone: '+58 414-300-0001', isActive: true });
  const maria  = await userRepo.save({ firstName: 'María',   lastName: 'López',       email: 'maria@demo.com',        passwordHash: hash, role: roleCliente,    phone: '+58 414-400-0002', isActive: true });
  const jose   = await userRepo.save({ firstName: 'José',    lastName: 'Rodríguez',   email: 'jose@demo.com',         passwordHash: hash, role: roleCliente,    phone: '+58 414-500-0003', isActive: true });

  // Dueños de tienda
  const ownerAduana  = await userRepo.save({ firstName: 'Pedro',   lastName: 'Aduana',     email: 'aduana@demo.com',       passwordHash: hash, role: roleTienda,     phone: '+58 212-600-0001', isActive: true });
  const ownerTrans   = await userRepo.save({ firstName: 'Tomás',   lastName: 'Transporte', email: 'transport@demo.com',    passwordHash: hash, role: roleTienda,     phone: '+58 212-700-0002', isActive: true });
  const ownerAlmacen = await userRepo.save({ firstName: 'Alberto', lastName: 'Almacén',    email: 'almacen@demo.com',      passwordHash: hash, role: roleTienda,     phone: '+58 212-800-0003', isActive: true });
  const ownerInsp    = await userRepo.save({ firstName: 'Isabel',  lastName: 'Inspector',  email: 'inspeccion@demo.com',   passwordHash: hash, role: roleTienda,     phone: '+58 212-900-0004', isActive: true });
  const ownerMar     = await userRepo.save({ firstName: 'Miguel',  lastName: 'Marítimo',   email: 'maritimo@demo.com',     passwordHash: hash, role: roleTienda,     phone: '+58 212-100-0005', isActive: true });
  console.log('👥  Usuarios creados (contraseña: Demo2026!)');

  // ════════════════════════════════════════════════════════════════════════
  //  3. TIENDAS
  // ════════════════════════════════════════════════════════════════════════

  const storeRepo = ds.getRepository(Store);
  const storeAduana = await storeRepo.save({
    legalName: 'Aduanas Globales S.A.',
    taxId: 'J-12345678-0',
    address: 'Av. Bolívar, Edificio Comercio, Puerto Cabello',
    basePort: pc,
    status: 'approved',
    brandColor: '#FF5A5F',
    owner: ownerAduana,
  });
  const storeTrans = await storeRepo.save({
    legalName: 'Transportes Rápidos C.A.',
    taxId: 'J-87654321-0',
    address: 'Zona Industrial Norte, Galpón 12, Puerto Cabello',
    basePort: pc,
    status: 'approved',
    brandColor: '#00A699',
    owner: ownerTrans,
  });
  const storeAlmacen = await storeRepo.save({
    legalName: 'Almacenes Puerto Norte S.A.',
    taxId: 'J-55555555-5',
    address: 'Patio Fiscal La Guaira, Sector B',
    basePort: lg,
    status: 'approved',
    brandColor: '#FC642D',
    owner: ownerAlmacen,
  });
  const storeInsp = await storeRepo.save({
    legalName: 'Inspecciones Técnicas Portuarias C.A.',
    taxId: 'J-44444444-4',
    address: 'Terminal de Contenedores, Puerto Cabello',
    basePort: pc,
    status: 'approved',
    brandColor: '#484848',
    owner: ownerInsp,
  });
  const storeMar = await storeRepo.save({
    legalName: 'Servicios Marítimos del Caribe S.A.',
    taxId: 'J-33333333-3',
    address: 'Muelle 5, Puerto de Maracaibo',
    basePort: mara,
    status: 'approved',
    brandColor: '#767676',
    owner: ownerMar,
  });
  console.log('🏪  Tiendas creadas (5)');

  // ════════════════════════════════════════════════════════════════════════
  //  4. SERVICIOS (13 servicios)
  // ════════════════════════════════════════════════════════════════════════

  const svcRepo = ds.getRepository(Service);

  // — Aduanas Globales (3)
  const sAduana1 = await svcRepo.save({ name: 'Nacionalización Carga General',  description: 'Trámite completo de aduana para contenedores 20/40 pies en Puerto Cabello.', basePrice: 450, billingUnit: viaje, category: stCustoms,    store: storeAduana, status: 'active' });
  const sAduana2 = await svcRepo.save({ name: 'Importación Régimen Especial',   description: 'Gestión ante SENIAT para regímenes aduaneros especiales. Incluye representación.',   basePrice: 620, billingUnit: viaje, category: stCustoms,    store: storeAduana, status: 'active' });
  const sAduana3 = await svcRepo.save({ name: 'Trámite SIVEX (Exportación)',    description: 'Certificado de exportación y permisos SIVEX para mercancía venezolana.',            basePrice: 380, billingUnit: viaje, category: stCustoms,    store: storeAduana, status: 'active' });

  // — Transportes Rápidos (3)
  const sTrans1 = await svcRepo.save({ name: 'Flete Puerto Cabello – Valencia', description: 'Transporte terrestre de contenedor lleno. Seguro incluido hasta destino.',          basePrice: 280, billingUnit: viaje, category: stTransport,  store: storeTrans,  status: 'active' });
  const sTrans2 = await svcRepo.save({ name: 'Transporte Refrigerado',          description: 'Camión frigorífico para carga perecedera. Temperatura controlada –18°C a +5°C.',     basePrice: 420, billingUnit: viaje, category: stTransport,  store: storeTrans,  status: 'active' });
  const sTrans3 = await svcRepo.save({ name: 'Transporte Maquinaria Pesada',    description: 'Plataforma cama baja para carga sobredimensionada. Requiere permiso especial.',       basePrice: 850, billingUnit: viaje, category: stTransport,  store: storeTrans,  status: 'active' });

  // — Almacenes Puerto Norte (3)
  const sAlm1 = await svcRepo.save({ name: 'Almacenaje en Patio Fiscal',        description: 'Custodia de mercancía en zona primaria aduanera bajo responsabilidad fiscal.',      basePrice: 15,  billingUnit: ton,   category: stStorage,   store: storeAlmacen, status: 'active' });
  const sAlm2 = await svcRepo.save({ name: 'Almacenaje en Cámara Frigorífica',  description: 'Almacenaje de productos que requieren cadena de frío. Temperatura controlada.',     basePrice: 28,  billingUnit: ton,   category: stStorage,   store: storeAlmacen, status: 'active' });
  const sAlm3 = await svcRepo.save({ name: 'Cross-Docking',                     description: 'Servicio de transbordo sin almacenaje. Carga descargada y redespachada en 24h.',    basePrice: 80,  billingUnit: cont,  category: stStorage,   store: storeAlmacen, status: 'active' });

  // — Inspecciones Técnicas (2)
  const sInsp1 = await svcRepo.save({ name: 'Inspección Pre-Embarque',          description: 'Verificación de calidad, cantidad y estado de la carga antes de embarcar.',         basePrice: 200, billingUnit: cont,  category: stInspection, store: storeInsp, status: 'active' });
  const sInsp2 = await svcRepo.save({ name: 'Inspección de Calidad ISO',        description: 'Certificación de calidad bajo normas ISO para exportaciones.',                       basePrice: 350, billingUnit: cont,  category: stInspection, store: storeInsp, status: 'active' });

  // — Servicios Marítimos (2)
  const sMar1 = await svcRepo.save({ name: 'Agenciamiento Marítimo',            description: 'Representación del armador. Gestión de escala, manifiestos y documentos.',          basePrice: 500, billingUnit: viaje, category: stMaritime,  store: storeMar, status: 'active' });
  const sMar2 = await svcRepo.save({ name: 'Remolque en Puerto',                description: 'Servicio de asistencia con remolcador para maniobras en puerto.',                   basePrice: 300, billingUnit: viaje, category: stMaritime,  store: storeMar, status: 'active' });

  console.log('🛠️  Servicios creados (13)');

  // ════════════════════════════════════════════════════════════════════════
  //  5. COTIZACIONES
  // ════════════════════════════════════════════════════════════════════════

  const qRepo = ds.getRepository(Quotation);

  const q1 = await qRepo.save({ client: carlos, store: storeAduana,  service: sAduana1, cargoDetails: '1×40HQ – Electrónicos importados',     quotedPrice: 450,  status: 'ACCEPTED', notes: 'Urgente, cliente requiere entrega esta semana',  estimatedDate: daysAgo(-2) });
  const q2 = await qRepo.save({ client: maria,  store: storeTrans,   service: sTrans1,  cargoDetails: '1×20ST – Repuestos automotrices',       quotedPrice: 280,  status: 'ACCEPTED', notes: 'Entregar en almacén Zona Industrial Valencia',   estimatedDate: daysAgo(-1) });
  const q3 = await qRepo.save({ client: jose,   store: storeAlmacen, service: sAlm1,    cargoDetails: '25 TON – Granos (arroz y maíz)',         quotedPrice: 375,  status: 'ACCEPTED', notes: 'Requiere patio fiscal zona A',                   estimatedDate: daysAgo(0)  });
  const q4 = await qRepo.save({ client: carlos, store: storeInsp,    service: sInsp1,   cargoDetails: '2×20ST – Maquinaria industrial',         quotedPrice: 400,  status: 'ACCEPTED', notes: 'Inspección previa a nacionalización',            estimatedDate: daysAgo(1)  });
  const q5 = await qRepo.save({ client: maria,  store: storeMar,     service: sMar1,    cargoDetails: '1 Buque portacontenedores – 200 TEU',    quotedPrice: 1500, status: 'ACCEPTED', notes: 'Escala técnica en Puerto Cabello',               estimatedDate: daysAgo(3)  });
  const q6 = await qRepo.save({ client: jose,   store: storeTrans,   service: sTrans2,  cargoDetails: '5 TON – Productos lácteos',              quotedPrice: 420,  status: 'ACCEPTED', notes: 'Requiere camión frigorífico certificado',        estimatedDate: daysAgo(0)  });
  const q7 = await qRepo.save({ client: carlos, store: storeAduana,  service: sAduana3, cargoDetails: '1×20ST – Cacao venezolano exportación',  quotedPrice: 380,  status: 'ACCEPTED', notes: 'SIVEX urgente, barco sale en 3 días',           estimatedDate: daysAgo(4)  });
  const q8 = await qRepo.save({ client: maria,  store: storeAlmacen, service: sAlm3,    cargoDetails: '3 contenedores – Material de construcción', quotedPrice: 240, status: 'ACCEPTED', notes: 'Cross-docking a camiones locales',             estimatedDate: daysAgo(5)  });
  // Cotizaciones pendientes/en revisión
  const q9  = await qRepo.save({ client: jose,  store: storeAduana,  service: sAduana2, cargoDetails: '1×40HQ – Maquinaria Régimen Especial',  status: 'PENDING',  notes: 'Esperando precio del operador' });
  const q10 = await qRepo.save({ client: carlos,store: storeInsp,    service: sInsp2,   cargoDetails: '1×20ST – Alimentos para certificación', status: 'QUOTED',   quotedPrice: 350, notes: 'Esperando que cliente acepte precio' });

  console.log('📝  Cotizaciones creadas (10)');

  // ════════════════════════════════════════════════════════════════════════
  //  6. ÓRDENES (8 con estados variados)
  // ════════════════════════════════════════════════════════════════════════

  const oRepo = ds.getRepository(Order);

  // ORD-001: COMPLETED ✅ (pagada, ejecutada, completada, con reseña)
  const o1 = await oRepo.save({ orderNumber: 'ORD-2026-0001', client: carlos, store: storeAduana,  service: sAduana1, quotation: q1, state: osCompleted,    totalAmount: 450,  description: 'Nacionalización contenedor 40HQ electrónicos – completada exitosamente' });

  // ORD-002: IN_PROGRESS 🔄 (pagada, viaje en tránsito)
  const o2 = await oRepo.save({ orderNumber: 'ORD-2026-0002', client: maria,  store: storeTrans,   service: sTrans1,  quotation: q2, state: osInProgress,   totalAmount: 280,  description: 'Flete Puerto Cabello → Valencia, camión en ruta' });

  // ORD-003: PAID ✅ (pagada, esperando inicio operación)
  const o3 = await oRepo.save({ orderNumber: 'ORD-2026-0003', client: jose,   store: storeAlmacen, service: sAlm1,    quotation: q3, state: osPaid,         totalAmount: 375,  description: 'Almacenaje 25 TON granos, cargo previsto para mañana' });

  // ORD-004: PAYMENT_PENDING_VALIDATION ⏳ (pago enviado, esperando validación operador)
  const o4 = await oRepo.save({ orderNumber: 'ORD-2026-0004', client: carlos, store: storeInsp,    service: sInsp1,   quotation: q4, state: osPayPending,   totalAmount: 400,  description: 'Inspección pre-embarque 2 contenedores maquinaria' });

  // ORD-005: DELIVERED 📦 (entregada, esperando calificación del cliente)
  const o5 = await oRepo.save({ orderNumber: 'ORD-2026-0005', client: maria,  store: storeMar,     service: sMar1,    quotation: q5, state: osDelivered,    totalAmount: 1500, description: 'Agenciamiento marítimo completado, buque zarpó a tiempo' });

  // ORD-006: CREATED 🆕 (recién creada, sin pago)
  const o6 = await oRepo.save({ orderNumber: 'ORD-2026-0006', client: jose,   store: storeTrans,   service: sTrans2,  quotation: q6, state: osCreated,      totalAmount: 420,  description: 'Transporte refrigerado productos lácteos, pendiente de pago' });

  // ORD-007: PAYMENT_REJECTED ❌ (pago rechazado, debe corregir)
  const o7 = await oRepo.save({ orderNumber: 'ORD-2026-0007', client: carlos, store: storeAduana,  service: sAduana3, quotation: q7, state: osPayRejected,  totalAmount: 380,  description: 'SIVEX exportación cacao – pago rechazado, referencia incorrecta' });

  // ORD-008: CANCELLED ⛔
  const o8 = await oRepo.save({ orderNumber: 'ORD-2026-0008', client: maria,  store: storeAlmacen, service: sAlm3,    quotation: q8, state: osCancelled,    totalAmount: 240,  description: 'Cross-docking cancelado por cliente por cambio de proveedor' });

  console.log('📦  Órdenes creadas (8)');

  // ════════════════════════════════════════════════════════════════════════
  //  7. PAGOS
  // ════════════════════════════════════════════════════════════════════════

  const pRepo = ds.getRepository(Payment);

  await pRepo.save({ order: o1, reportedBy: carlos, amount: 450,  currency: usd, method: 'Zelle',         referenceNumber: 'ZELLE-2026-001', status: 'APPROVED', notes: 'Pago verificado correctamente',           paymentDate: daysAgo(10), validatedAt: daysAgo(9)  });
  await pRepo.save({ order: o2, reportedBy: maria,  amount: 280,  currency: usd, method: 'Transferencia', referenceNumber: 'TRANS-2026-002', status: 'APPROVED', notes: 'Referencia bancaria confirmada',           paymentDate: daysAgo(3),  validatedAt: daysAgo(2)  });
  await pRepo.save({ order: o3, reportedBy: jose,   amount: 375,  currency: usd, method: 'Pago Movil',    referenceNumber: 'PMOV-2026-003',  status: 'APPROVED', notes: 'Pago móvil verificado',                   paymentDate: daysAgo(1),  validatedAt: daysAgo(0)  });
  await pRepo.save({ order: o4, reportedBy: carlos, amount: 400,  currency: usd, method: 'Zelle',         referenceNumber: 'ZELLE-2026-004', status: 'PAYMENT_PENDING_VALIDATION', notes: 'Esperando revisión del operador', paymentDate: daysAgo(0)  });
  await pRepo.save({ order: o5, reportedBy: maria,  amount: 1500, currency: usd, method: 'Transferencia', referenceNumber: 'TRANS-2026-005', status: 'APPROVED', notes: 'Transferencia internacional Swift confirmada', paymentDate: daysAgo(8), validatedAt: daysAgo(7) });
  await pRepo.save({ order: o7, reportedBy: carlos, amount: 380,  currency: usd, method: 'Zelle',         referenceNumber: 'ZELLE-2026-BAD', status: 'REJECTED', notes: 'Referencia no coincide con monto indicado', paymentDate: daysAgo(2),  validatedAt: daysAgo(1)  });

  console.log('💰  Pagos creados (6)');

  // ════════════════════════════════════════════════════════════════════════
  //  8. VIAJES (trips)
  // ════════════════════════════════════════════════════════════════════════

  const tripRepo = ds.getRepository(Trip);

  await tripRepo.save({
    tripNumber:       'TRP-2026-001',
    order:            o2,
    vehiclePlate:     'A12BC3D',
    driverName:       'Juan Carlos Pérez',
    driverPhone:      '+58 414-111-2222',
    origin:           'Puerto Cabello, Carabobo',
    destination:      'Zona Industrial Norte, Valencia',
    status:           'IN_TRANSIT',
    estimatedArrival: daysAgo(-1),
    startedAt:        daysAgo(1),
    currentLat:       10.3500,
    currentLng:       -68.0100,
  });

  await tripRepo.save({
    tripNumber:       'TRP-2026-002',
    order:            o5,
    vehiclePlate:     'Buque MV-CARIBE',
    driverName:       'Capitán Ramón Díaz',
    driverPhone:      '+58 212-555-0000',
    origin:           'Puerto de Maracaibo',
    destination:      'Puerto Cabello',
    status:           'DELIVERED',
    estimatedArrival: daysAgo(4),
    startedAt:        daysAgo(8),
    completedAt:      daysAgo(4),
    currentLat:       10.4667,
    currentLng:       -68.0167,
  });

  console.log('🚚  Viajes creados (2)');

  // ════════════════════════════════════════════════════════════════════════
  //  9. EVENTOS DE ORDEN (timeline)
  // ════════════════════════════════════════════════════════════════════════

  const evRepo = ds.getRepository(OrderEvent);

  // Timeline ORD-001 (COMPLETED)
  await evRepo.save({ order: o1, eventType: 'ORDER_CREATED',   description: 'Orden generada a partir de cotización aceptada.',           user: carlos,   createdAt: daysAgo(12) } as any);
  await evRepo.save({ order: o1, eventType: 'PAYMENT_RECEIVED',description: 'Pago por Zelle reportado por el cliente.',                  user: carlos,   createdAt: daysAgo(11) } as any);
  await evRepo.save({ order: o1, eventType: 'PAYMENT_APPROVED', description: 'Pago validado por operador. Orden confirmada.',             user: operador, createdAt: daysAgo(10) } as any);
  await evRepo.save({ order: o1, eventType: 'SERVICE_STARTED',  description: 'Operador de aduana inició trámite SENIAT.',                 user: operador, createdAt: daysAgo(7)  } as any);
  await evRepo.save({ order: o1, eventType: 'ORDER_COMPLETED',  description: 'Trámite completado. DUA emitido y mercancía liberada.',     user: admin,    createdAt: daysAgo(5)  } as any);

  // Timeline ORD-002 (IN_PROGRESS)
  await evRepo.save({ order: o2, eventType: 'ORDER_CREATED',   description: 'Orden generada.',                                           user: maria,    createdAt: daysAgo(5) } as any);
  await evRepo.save({ order: o2, eventType: 'PAYMENT_APPROVED',description: 'Transferencia bancaria verificada.',                        user: operador, createdAt: daysAgo(3) } as any);
  await evRepo.save({ order: o2, eventType: 'TRIP_STARTED',    description: 'Camión A12BC3D salió de Puerto Cabello hacia Valencia.',    user: operador, createdAt: daysAgo(1) } as any);

  // Timeline ORD-004 (PAYMENT_PENDING)
  await evRepo.save({ order: o4, eventType: 'ORDER_CREATED',    description: 'Orden generada para inspección pre-embarque.',              user: carlos,   createdAt: daysAgo(2) } as any);
  await evRepo.save({ order: o4, eventType: 'PAYMENT_RECEIVED', description: 'Cliente reportó pago por Zelle. Pendiente de validación.',  user: carlos,   createdAt: daysAgo(0) } as any);

  console.log('📅  Eventos de orden creados');

  // ════════════════════════════════════════════════════════════════════════
  //  10. RESEÑAS
  // ════════════════════════════════════════════════════════════════════════

  const rvRepo = ds.getRepository(Review);

  await rvRepo.save({ author: carlos, store: storeAduana,  service: sAduana1, order: o1, rating: 5, comment: 'Excelente servicio. Los trámites fueron rapidísimos, el DUA salió en 2 días. Muy profesionales y con comunicación constante.', status: 'VISIBLE' });
  await rvRepo.save({ author: maria,  store: storeMar,     service: sMar1,    order: o5, rating: 4, comment: 'Buen servicio de agenciamiento. El buque fue atendido sin demoras. La comunicación al inicio fue un poco lenta pero mejoró.', status: 'VISIBLE' });

  console.log('⭐  Reseñas creadas (2)');

  // ════════════════════════════════════════════════════════════════════════
  //  RESUMEN
  // ════════════════════════════════════════════════════════════════════════
  console.log('\n══════════════════════════════════════════════════════');
  console.log('  🚀  SEED COMPLETADO EXITOSAMENTE');
  console.log('══════════════════════════════════════════════════════');
  console.log('  Usuarios de demo (contraseña: Demo2026!)');
  console.log('  ─────────────────────────────────────────');
  console.log('  admin@puerto.com       → Superadmin');
  console.log('  operador@puerto.com    → Operador Interno');
  console.log('  auditor@puerto.com     → Auditor');
  console.log('  carlos@demo.com        → Cliente');
  console.log('  maria@demo.com         → Cliente');
  console.log('  jose@demo.com          → Cliente');
  console.log('  aduana@demo.com        → Dueño Aduanas Globales');
  console.log('  transport@demo.com     → Dueño Transportes Rápidos');
  console.log('  almacen@demo.com       → Dueño Almacenes Puerto Norte');
  console.log('  inspeccion@demo.com    → Dueño Inspecciones Técnicas');
  console.log('  maritimo@demo.com      → Dueño Servicios Marítimos');
  console.log('══════════════════════════════════════════════════════\n');

  await ds.destroy();
}

seed().catch(err => {
  console.error('❌  Seed falló:', err);
  process.exit(1);
});
