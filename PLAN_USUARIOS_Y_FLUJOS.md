# Plan de Usuarios y Flujos — Puerto Marketplace Logístico
> Documento de handoff para continuación del desarrollo.
> Proyecto: `C:\Users\juans\OneDrive\Documentos\marketplaces\Puerto`
> Stack: React 19 + Vite 8 (frontend) · NestJS + TypeORM + PostgreSQL (backend) · Docker Compose

---

## 1. ESTADO ACTUAL DEL PROYECTO

### ¿Qué está funcionando?
- Docker Compose con 4 servicios: postgres, pgadmin, backend, frontend
- Backend NestJS compila y arranca correctamente
- Base de datos PostgreSQL con schema sincronizado (TypeORM `synchronize: true`)
- Seed de datos de prueba cargado con 13 servicios, 8 usuarios, 5 tiendas, 10 cotizaciones, 8 órdenes
- Frontend React sirve en `http://localhost:8080`
- La grilla de servicios en Home carga desde `GET /services` (fix aplicado al ServicesModule)
- Auth funciona: login devuelve `{ access_token, user }`, token guardado en localStorage

### ¿Qué fue el último fix aplicado?
`backend-nest/src/services/services.module.ts` — se agregó `Store` al `TypeOrmModule.forFeature`:
```typescript
TypeOrmModule.forFeature([Service, Store])
```
Esto era lo que impedía que `GET /services` devolviera datos.

### Comandos para levantar el proyecto
```bash
# Levantar todo
cd C:\Users\juans\OneDrive\Documentos\marketplaces\Puerto
docker compose up --build -d

# Ver logs del backend
docker compose logs -f backend

# Ejecutar seed (solo primera vez o al resetear la DB)
cd backend-nest
npx ts-node src/seed.ts

# Desarrollo local sin Docker
cd backend-nest && npm run start:dev   # http://localhost:3000
cd frontend-react && npm run dev       # http://localhost:5173
```

### URLs
| Servicio | URL |
|---|---|
| Frontend (Docker) | http://localhost:8080 |
| Frontend (Dev) | http://localhost:5173 |
| Backend API | http://localhost:3000 |
| Swagger Docs | http://localhost:3000/api |
| pgAdmin | http://localhost:5050 |

---

## 2. ARQUITECTURA DE ROLES

El sistema tiene 8 roles definidos en la DB. El campo clave es `user.role.name` (string).

| Rol (name en DB) | Descripción | Dashboard |
|---|---|---|
| `ADMIN` | Administrador del sistema. Ve todo, configura catálogos, comisiones y auditoría | `/admin/analytics` |
| `STORE_OWNER` | Dueño de una tienda logística. Publica servicios, gestiona órdenes entrantes | `/store/dashboard` |
| `CUSTOMER` | Cliente importador/exportador. Busca servicios, cotiza y paga | `/dashboard` |
| `OPERATOR` | Operador logístico (empleado). Asigna viajes, sube documentos, actualiza estados | `/operator/dashboard` |
| `AUDITOR` | Auditor interno. Solo lectura de órdenes, pagos y logs | `/auditor/dashboard` |
| `FINANCIAL` | Gestor financiero. Ve ingresos, comisiones y reportes | `/finances` |
| `WMS_OPERATOR` | Operador de almacén. Maneja inventario y posiciones de rack | `/wms/inventory` |
| `AGD_MANAGER` | Gestor de Almacén General de Depósito. Crea certificados y bonos | `/agd/dashboard` |

### JWT payload
```json
{
  "email": "usuario@ejemplo.com",
  "sub": 1,
  "role": "CUSTOMER"
}
```
El frontend lee `user.role.name` desde el AuthContext para condicionar la UI.

---

## 3. CREDENCIALES DE PRUEBA (seed)

Contraseña universal: `Demo2026!`

| Nombre | Email | Rol | Notas |
|---|---|---|---|
| Admin Sistema | admin@puerto.com | ADMIN | Acceso total |
| Carlos Importador | carlos@importex.com | CUSTOMER | Tiene 4 órdenes activas |
| María Logística | maria@cargomas.com | CUSTOMER | Tiene 2 órdenes |
| José Almacenero | jose@almacenve.com | CUSTOMER | Tiene 2 órdenes |
| Ana Operadora | ana.operadora@puerto.com | OPERATOR | Sin órdenes asignadas aún |
| Luis Auditor | luis.auditor@puerto.com | AUDITOR | Solo lectura |
| Pedro Financiero | pedro.financiero@puerto.com | FINANCIAL | Sin datos aún |
| Carmen WMS | carmen.wms@puerto.com | WMS_OPERATOR | Sin inventario asignado |
| Rafael AGD | rafael.agd@puerto.com | AGD_MANAGER | Sin certificados aún |
| Aduana Express | aduana@express.com | STORE_OWNER | Tienda con 3 servicios activos |
| TransLogística | trans@logistica.com | STORE_OWNER | Tienda con 3 servicios activos |

---

## 4. FLUJOS POR ROL — LO QUE FALTA IMPLEMENTAR

---

### FLUJO 1: CUSTOMER (Carlos, María, José)

#### Estado actual
- ✅ Puede ver servicios en Home (`GET /services`)
- ✅ Puede hacer login y registrarse
- ⚠️ `GET /quotations/my-requests` existe en backend pero NO hay frontend para solicitar cotización desde la tarjeta de servicio
- ⚠️ `GET /orders/my-orders` existe pero las órdenes del CustomerDashboard no cargan (el backend devuelve error porque `findByClient` no hace el join con `state`, `service`, `store`)
- ❌ No hay redirección por rol después del login (siempre va a `/`)

#### Pasos del flujo completo
```
1. Home → ver grilla de servicios
2. Click en tarjeta → ServiceDetailPage (/services/:id)
3. Click "Solicitar Cotización" → modal QuotationModal
4. Llenar detalles de carga → POST /quotations/request
5. Recibir notificación cuando la tienda responde
6. Aceptar cotización → POST /quotations/:id/approve
7. Ir a /dashboard → ver orden creada automáticamente
8. Pagar orden → POST /payments
9. Ver estado en tiempo real → /orders/:id
10. Dejar reseña al completarse → POST /reviews
```

#### Tareas concretas
1. **LoginPage** — agregar redirección por rol:
   ```jsx
   // frontend-react/src/pages/Auth/LoginPage.jsx
   // En handleSubmit, después de await login():
   const roleRoutes = {
     ADMIN: '/admin/analytics',
     STORE_OWNER: '/store/dashboard',
     OPERATOR: '/operator/dashboard',
     AUDITOR: '/auditor/dashboard',
     FINANCIAL: '/finances',
     WMS_OPERATOR: '/wms/inventory',
     AGD_MANAGER: '/agd/dashboard',
     CUSTOMER: '/dashboard',
   };
   navigate(roleRoutes[data.user.role.name] || '/');
   ```

2. **ServiceDetailPage** — agregar botón "Solicitar Cotización" funcional:
   - Abrir `QuotationModal` con el serviceId
   - El modal ya existe en `src/components/Quotations/QuotationModal.jsx`
   - Llamar `POST /quotations/request` con `{ serviceId, cargoDetails, notes }`

3. **OrdersService (backend)** — `findByClient` necesita eager loading:
   ```typescript
   // backend-nest/src/orders/orders.service.ts
   // La query de findByClient debe incluir relations:
   return this.ordersRepository.find({
     where: { client: { id: clientId } },
     relations: ['state', 'service', 'store', 'quotation'],
     order: { id: 'DESC' }
   });
   ```

4. **PaymentForm** — conectar con API real:
   - Archivo: `frontend-react/src/components/Payments/PaymentForm.jsx`
   - Llamar `POST /payments` con `{ orderId, amount, method, reference }`
   - El prop que recibe es `order` (no `quotation`)

---

### FLUJO 2: STORE_OWNER (Aduana Express, TransLogística)

#### Estado actual
- ✅ `GET /services/my-services` funciona
- ✅ `GET /quotations/store-requests` funciona
- ⚠️ `GET /orders/store-orders` llama `findByStore(userId)` pero el service busca por `storeId` — hay un mismatch: necesita primero buscar la tienda del usuario y luego las órdenes
- ❌ No hay ruta `/store/onboarding` para crear tienda desde cero (StoresController probablemente no tiene `POST /stores`)
- ❌ StoreDashboard hace fetch a `/orders/stats` que devuelve stats del cliente, no de la tienda

#### Pasos del flujo completo
```
1. Registro → StoreOnboarding (/store/onboarding)
2. Crear tienda → POST /stores
3. Publicar servicio → ServiceWizard (/store/services/new)
4. Recibir solicitud de cotización → notificación
5. Responder cotización → PATCH /quotations/:id (agregar quotedPrice)
6. Cliente acepta → orden creada automáticamente
7. Ver orden en StoreDashboard → /store/dashboard
8. Actualizar estado de orden → PATCH /orders/:id/status
9. Subir documentos → POST /documents/upload
10. Marcar como completada → cobrar comisión automáticamente
```

#### Tareas concretas
1. **StoresController (backend)** — verificar que existe `POST /stores`:
   - Archivo: `backend-nest/src/stores/stores.controller.ts`
   - Si no existe, agregar endpoint que reciba `{ legalName, taxId, address, portId, brandColor }` con JWT guard
   - La tienda se crea con `status: 'pending'` (requiere aprobación del ADMIN)

2. **OrdersController (backend)** — corregir `store-orders`:
   ```typescript
   @Get('store-orders')
   async getStoreOrders(@Request() req) {
     const store = await this.storesService.findByOwner(req.user.userId);
     if (!store) return [];
     return this.ordersService.findByStore(store.id);
   }
   ```
   El módulo de órdenes debe importar `StoresModule` (igual al fix de ServicesModule).

3. **OrdersService (backend)** — agregar cambio de estado:
   ```typescript
   // PATCH /orders/:id/status { newStatus: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' }
   async updateStatus(orderId: number, newStatus: string, userId: number) {
     // 1. Buscar la orden
     // 2. Buscar el OrderState por nombre
     // 3. Actualizar order.state
     // 4. Crear OrderEvent con timestamp y userId
     // 5. Save y return
   }
   ```

4. **ServiceWizard** — llamar API real:
   - Archivo: `frontend-react/src/pages/Store/ServiceWizard.jsx`
   - En el submit final: `POST /services` con JWT, body: `{ name, description, basePrice, billingUnitId, categoryId }`
   - Redirigir a `/store/dashboard` al éxito

---

### FLUJO 3: ADMIN

#### Estado actual
- ✅ `GET /admin/catalogs` — UI existe para ver/editar catálogos
- ✅ `GET /admin/audit` — AuditLogsPage existe
- ⚠️ Los catálogos se leen pero no está claro si los endpoints PATCH/POST de catálogos están implementados
- ❌ `AdminAnalyticsPage` tiene datos hardcodeados, no conecta con backend
- ❌ No hay endpoint para aprobar/rechazar tiendas pendientes
- ❌ `CommissionConfigPage` no tiene endpoint backend para guardar reglas

#### Tareas concretas
1. **Aprobar tiendas** — agregar en StoresController:
   ```typescript
   // PATCH /stores/:id/approve  (solo ADMIN)
   // PATCH /stores/:id/reject   (solo ADMIN)
   // GET /stores/pending        (solo ADMIN)
   ```

2. **AdminAnalyticsPage** — conectar con `GET /reports`:
   - El ReportsService necesita implementarse (actualmente vacío)
   - Devolver: `{ totalGMV, totalOrders, totalUsers, topServices[], revenueByMonth[] }`

3. **CommissionConfigPage** — backend:
   - `GET /commissions/rules` — listar reglas
   - `POST /commissions/rules` — crear regla `{ serviceTypeId, percentage, flatFee }`
   - `PATCH /commissions/rules/:id` — editar regla

---

### FLUJO 4: OPERATOR (Ana)

#### Estado actual
- ✅ `OperatorDashboard` existe como componente
- ⚠️ Hace fetch a `/orders/operator-metrics` que existe en backend pero puede estar vacío
- ❌ `TripAssignmentForm` no conecta con backend
- ❌ No hay endpoint `POST /orders/:id/assign-operator`

#### Pasos del flujo completo
```
1. Ver órdenes en curso → GET /orders?status=IN_PROGRESS
2. Asignarse a una orden → POST /orders/:id/assign-operator
3. Crear viaje → POST /trips { orderId, vehiclePlate, driverName, origin, destination }
4. Actualizar posición → PATCH /trips/:id/location
5. Subir documentos → POST /documents/upload
6. Marcar viaje completado → PATCH /trips/:id/complete
7. Capturar firma → componente SignaturePad ya existe
```

#### Tareas concretas
1. **TripsController (backend)** — revisar `backend-nest/src/orders/trips.controller.ts`:
   - Agregar `POST /trips` con cuerpo `{ orderId, vehiclePlate, driverName, origin, destination }`
   - Agregar `PATCH /trips/:id/complete`

2. **TripAssignmentForm (frontend)** — llamar `POST /trips` con JWT

---

### FLUJO 5: AUDITOR (Luis)

#### Estado actual
- ✅ `AuditorDashboard` existe como componente
- ⚠️ Solo debe tener acceso de lectura — no hay guards de rol en el frontend

#### Tareas concretas
1. **Guards de rol en frontend** — crear HOC o hook `useRequireRole`:
   ```jsx
   // frontend-react/src/hooks/useRequireRole.js
   import { useAuth } from '../context/AuthContext';
   import { useNavigate } from 'react-router-dom';
   import { useEffect } from 'react';

   export function useRequireRole(...allowedRoles) {
     const { user } = useAuth();
     const navigate = useNavigate();
     useEffect(() => {
       if (user && !allowedRoles.includes(user.role?.name)) {
         navigate('/');
       }
     }, [user]);
   }
   ```
   Usar en cada page protegida: `useRequireRole('AUDITOR', 'ADMIN')`

---

### FLUJO 6: WMS_OPERATOR (Carmen)

#### Estado actual
- ✅ `WmsInventoryPage` existe con tabla de inventario y mapa de racks
- ⚠️ Los datos son estáticos/mock
- ⚠️ El backend tiene entidades `InventoryItem`, `Warehouse`, `WmsZone`, `Rack`, `RackPosition` pero los endpoints pueden estar incompletos

#### Pasos del flujo completo
```
1. Ver inventario → GET /wms/inventory (filtrable por cliente, estado)
2. Recibir mercancía → POST /wms/inventory/receive { sku, description, quantity, unit, clientId, positionId }
3. Ver mapa de rack → GET /wms/warehouse/map
4. Reubicar → PATCH /wms/inventory/:id/relocate { positionId }
5. Despachar → POST /wms/inventory/:id/dispatch { orderId }
6. Generar reporte de movimientos → GET /wms/inventory/movements?from=&to=
```

#### Tareas concretas
1. Revisar `backend-nest/src/wms/wms.module.ts` — agregar todos los endpoints del flujo
2. `WarehouseMapView` — conectar con `GET /wms/warehouse/map`
3. `WmsInventoryPage` — conectar tabla con `GET /wms/inventory`

---

### FLUJO 7: AGD_MANAGER (Rafael)

#### Estado actual
- ✅ `AgdDashboard` existe
- ⚠️ Datos estáticos
- ✅ Entidades `CertificateOfDeposit` y `PledgeBond` existen en DB

#### Pasos del flujo completo
```
1. Ver certificados vigentes → GET /agd/certificates
2. Crear certificado de depósito → POST /agd/certificates { clientId, orderId, commodityDescription, quantity, expiresAt }
3. Ver bonos de prenda → GET /agd/bonds
4. Crear bono → POST /agd/bonds { certificateId, amount, beneficiary }
5. Alertas de vencimiento → GET /agd/certificates/expiring-soon
```

#### Tareas concretas
1. Revisar `backend-nest/src/agd/agd.controller.ts` — agregar endpoints faltantes
2. `AgdDashboard` — conectar con API real

---

## 5. NAVBAR — COMPORTAMIENTO ESPERADO POR ROL

El `Navbar.jsx` actual no usa AuthContext. Debe modificarse así:

```jsx
// frontend-react/src/components/Navbar/Navbar.jsx
import { useAuth } from '../../context/AuthContext';

export default function Navbar({ onSearch }) {
  const { user, logout } = useAuth();
  // ...

  return (
    <nav className="navbar">
      {/* ... logo, searchbar igual ... */}
      <div className="navbar-right">
        {/* Mostrar solo si STORE_OWNER */}
        {user?.role?.name === 'STORE_OWNER' && (
          <button onClick={() => navigate('/store/services/new')}>
            Publicar Servicio
          </button>
        )}

        {/* Dropdown de usuario */}
        {user ? (
          <div className="user-menu">
            <span>{user.firstName}</span>
            {/* Links según rol */}
            {user.role?.name === 'ADMIN' && <Link to="/admin/analytics">Admin</Link>}
            {user.role?.name === 'STORE_OWNER' && <Link to="/store/dashboard">Mi Tienda</Link>}
            <Link to="/profile">Mi Perfil</Link>
            <button onClick={logout}>Cerrar Sesión</button>
          </div>
        ) : (
          <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        )}
      </div>
    </nav>
  );
}
```

---

## 6. ESTRUCTURA DE ARCHIVOS CLAVE

```
Puerto/
├── docker-compose.yml              ← Levanta los 4 servicios
├── pgadmin-servers.json            ← Configuración automática pgAdmin
├── PLAN.md                         ← Lista de 33 tareas pendientes (técnico)
├── PLAN_USUARIOS_Y_FLUJOS.md       ← Este archivo
│
├── backend-nest/
│   ├── src/
│   │   ├── app.module.ts           ← Registro central de entidades y módulos
│   │   ├── main.ts                 ← Bootstrap: CORS, Swagger, ValidationPipe
│   │   ├── seed.ts                 ← Datos de prueba (correr con npx ts-node)
│   │   ├── auth/                   ← Login, register, JWT strategy
│   │   ├── users/                  ← Entidad User, UsersService
│   │   ├── stores/                 ← Tiendas (STORE_OWNER)
│   │   ├── services/               ← Servicios logísticos publicados
│   │   │   └── services.module.ts  ← ⚠️ Fix aplicado: forFeature([Service, Store])
│   │   ├── quotations/             ← Ciclo de cotización
│   │   ├── orders/                 ← Órdenes, viajes, eventos, documentos
│   │   ├── payments/               ← Pagos
│   │   ├── reviews/                ← Reseñas post-orden
│   │   ├── commissions/            ← Reglas de comisión
│   │   ├── wms/                    ← Warehouse Management System
│   │   ├── agd/                    ← Almacén General de Depósito
│   │   ├── inspections/            ← Checklists de inspección
│   │   ├── notifications/          ← Notificaciones push
│   │   ├── messages/               ← Chat entre usuarios
│   │   ├── support/                ← Tickets de soporte
│   │   ├── reports/                ← Reportes y analytics
│   │   ├── audit/                  ← Log de auditoría
│   │   └── catalogs/               ← Países, monedas, unidades, puertos
│   ├── Dockerfile                  ← Multi-stage: builder + production
│   └── .dockerignore               ← Excluye node_modules, dist, .env, *.log
│
└── frontend-react/
    ├── src/
    │   ├── main.jsx                ← BrowserRouter > AuthProvider > LanguageProvider > App
    │   ├── App.jsx                 ← Todas las rutas definidas aquí
    │   ├── context/
    │   │   ├── AuthContext.jsx     ← user, login(), logout(), register()
    │   │   └── LanguageContext.jsx ← t(), lang, switchLang()
    │   ├── layouts/AppLayout/      ← Wrapper con Navbar y Footer
    │   ├── components/
    │   │   ├── Navbar/             ← ⚠️ No usa AuthContext aún
    │   │   ├── Search/             ← SearchBar, FilterSidebar
    │   │   ├── ServiceResultCard/  ← Tarjeta de servicio en Home
    │   │   ├── Quotations/         ← QuotationModal, QuotationActions
    │   │   ├── Payments/           ← PaymentForm
    │   │   ├── Orders/             ← DocumentManager, TripTracker, TripAssignmentForm
    │   │   ├── Reviews/            ← ReviewForm
    │   │   ├── Wms/                ← WarehouseMapView
    │   │   ├── Support/            ← TicketChat
    │   │   └── Common/             ← ErrorBoundary, SkeletonLoader, ExportButton, CatalogSelect
    │   └── pages/
    │       ├── Auth/               ← LoginPage ⚠️ sin redirección por rol, RegisterPage
    │       ├── Dashboard/          ← CustomerDashboard, StoreDashboard, OperatorDashboard, AuditorDashboard, FinancialDashboard
    │       ├── Services/           ← ServiceDetailPage
    │       ├── Store/              ← StoreOnboarding, ServiceWizard, StoreProfilePage
    │       ├── Orders/             ← OrderDetailPage
    │       ├── Admin/              ← AdminCatalogsPage, AdminAnalyticsPage, AuditLogsPage, CommissionConfigPage
    │       ├── Wms/                ← WmsInventoryPage
    │       ├── Agd/                ← AgdDashboard
    │       ├── Reports/            ← ReportsPage
    │       ├── Support/            ← SupportPage
    │       ├── Chat/               ← ChatPage
    │       └── Profile/            ← ProfilePage
    ├── .env                        ← VITE_API_URL=http://localhost:3000
    ├── Dockerfile                  ← Multi-stage: builder + nginx
    ├── nginx.conf                  ← SPA routing (try_files), gzip, cache
    └── .dockerignore               ← Excluye node_modules, dist, *.log (NO .env)
```

---

## 7. ORDEN DE TRABAJO SUGERIDO PARA ANTIGRAVITY

### Sesión 1 — Conectar flujo principal del CUSTOMER (2-3h)
1. `LoginPage` → redirección por rol según `user.role.name`
2. `Navbar` → leer AuthContext, mostrar dropdown de usuario, botón "Publicar Servicio" solo para STORE_OWNER
3. `OrdersService.findByClient` (backend) → agregar relations `['state', 'service', 'store', 'quotation']`
4. `ServiceDetailPage` → botón "Solicitar Cotización" abre QuotationModal y llama `POST /quotations/request`
5. Verificar que CustomerDashboard muestra órdenes reales

### Sesión 2 — Flujo completo de STORE_OWNER (2-3h)
1. `OrdersController.getStoreOrders` → obtener store del usuario primero, luego las órdenes
2. `StoresController` → verificar/agregar `POST /stores` para crear tienda nueva
3. `ServiceWizard` → llamar `POST /services` con JWT al finalizar wizard
4. `StoreDashboard` → verificar que KPIs cargan desde `GET /orders/stats` (ajustar stats para ser por tienda)
5. `QuotationsController` → verificar que `store-requests` devuelve cotizaciones con relaciones

### Sesión 3 — Guards, hook de rol, mejoras UX (1-2h)
1. Crear `useRequireRole` hook
2. Proteger rutas admin, store, operator, wms, agd con el hook
3. Manejar errores de API con mensajes visibles al usuario en todos los dashboards
4. Skeleton loaders en CustomerDashboard y StoreDashboard

### Sesión 4 — OPERATOR y documentos (2h)
1. `TripsController` → `POST /trips`, `PATCH /trips/:id/complete`
2. `DocumentsController` → `POST /documents/upload` (multer)
3. `OperatorDashboard` → conectar con métricas reales
4. `TripAssignmentForm` → llamar API real

### Sesión 5 — WMS, AGD, Reports (3h)
1. `WmsModule` → endpoints de receive/dispatch/relocate
2. `WmsInventoryPage` → tabla y mapa conectados
3. `AgdDashboard` → CRUD de certificados
4. `ReportsService` → implementar queries de analytics
5. `AdminAnalyticsPage` → gráficas con datos reales

---

## 8. PATRONES DE CÓDIGO ESTABLECIDOS

### Fetch con JWT en frontend
```jsx
const token = localStorage.getItem('token');
const res = await fetch(`${import.meta.env.VITE_API_URL}/endpoint`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});
if (!res.ok) throw new Error(await res.text());
const data = await res.json();
```

### Guard JWT en backend
```typescript
@UseGuards(JwtAuthGuard)
@Get('my-data')
async getData(@Request() req) {
  // req.user = { userId: 1, email: '...', role: 'CUSTOMER' }
  return this.service.findByUser(req.user.userId);
}
```

### Módulo NestJS con dependencia de otro módulo
```typescript
@Module({
  imports: [
    TypeOrmModule.forFeature([MiEntidad, EntidadExterna]), // ← repos que inyecta el service
    ModuloExterno,                                          // ← servicios del otro módulo
  ],
  providers: [MiService],
  controllers: [MiController],
  exports: [MiService],
})
```
> ⚠️ IMPORTANTE: Si un Controller inyecta un Service de otro módulo, ese módulo DEBE estar en `imports` Y debe exportar ese Service. Y si el Service inyecta un Repository de una entidad externa, esa entidad DEBE estar en `forFeature`.

### Styling en frontend
- Variables CSS en `frontend-react/src/styles/variables.css` (`--color-primary`, `--color-carbon`, `--color-slate`, `--color-mist`, `--color-fog`)
- Cards: `className="card"` con border-radius 20-24px
- Botones: `className="btn btn-primary"` o `btn btn-ghost`
- Layout: `className="container"` con max-width y padding lateral
