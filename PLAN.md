# Plan de Desarrollo — Puerto Marketplace Logístico
> Generado el 2026-05-15. Estado actual: Docker levantado, seed cargado, frontend sin productos visibles.

---

## 🔴 BUG CRÍTICO — Por qué no se ven los servicios en el Home

### Causa raíz
`ServicesService` inyecta `@InjectRepository(Store)` pero `ServicesModule` solo registra `TypeOrmModule.forFeature([Service])`. El repositorio de `Store` no está disponible → el backend lanza error en runtime y el endpoint `GET /services` falla silenciosamente.

### Fix inmediato (1 línea)
**Archivo:** `backend-nest/src/services/services.module.ts`

```typescript
// CAMBIAR:
TypeOrmModule.forFeature([Service]),

// POR:
TypeOrmModule.forFeature([Service, Store]),
```
Y agregar el import de la entidad:
```typescript
import { Store } from '../stores/entities/store.entity';
```

### Verificación
Después del fix, `GET http://localhost:3000/services` debe devolver un array JSON con los 13 servicios del seed.

---

## 🟡 PENDIENTES BACKEND (NestJS)

### 1. Autenticación — AuthController incompleto
**Archivo:** `backend-nest/src/auth/auth.controller.ts`
- El endpoint `POST /auth/register` debe devolver `{ access_token, user }` igual que `/auth/login`
- Agregar validación de email único antes de crear usuario
- El `user` en la respuesta no debe incluir el campo `password`

### 2. StoresService — findByOwner puede fallar
**Archivo:** `backend-nest/src/stores/stores.service.ts`
- Verificar que `findByOwner(userId)` use correctamente la relación `owner.id = userId`
- La query actual puede no hacer el join correcto con la entidad `User`

### 3. QuotationsService — falta endpoint para cliente
**Archivo:** `backend-nest/src/quotations/quotations.controller.ts`
- Agregar `GET /quotations/my-quotations` con guard JWT para que el cliente vea sus cotizaciones
- Agregar `PATCH /quotations/:id/accept` y `PATCH /quotations/:id/reject`

### 4. OrdersService — falta lógica de estados
**Archivo:** `backend-nest/src/orders/orders.service.ts`
- Implementar transición de estados (pending → confirmed → in_progress → completed)
- Registrar `OrderEvent` en cada cambio de estado
- `GET /orders/my-orders` para clientes y `GET /orders/store-orders` para tiendas

### 5. PaymentsService — falta validación
**Archivo:** `backend-nest/src/payments/payments.service.ts`
- Verificar que un pago no pueda crearse si la orden ya tiene pago confirmado
- Agregar `GET /payments/order/:orderId` para consultar pago de una orden

### 6. NotificationsService — sin triggers reales
**Archivo:** `backend-nest/src/notifications/notifications.service.ts`
- Conectar envío de notificaciones en eventos de negocio:
  - Nueva cotización → notificar a la tienda
  - Cotización aceptada → notificar al cliente
  - Orden completada → notificar al cliente
  - Pago confirmado → notificar a la tienda

### 7. ReportsService — endpoints vacíos
**Archivo:** `backend-nest/src/reports/reports.service.ts`
- Implementar: ingresos por período, órdenes por estado, top servicios, top clientes
- Retornar datos agregados listos para gráficas

### 8. WmsService — flujo de inventario incompleto
**Archivo:** `backend-nest/src/wms/`
- Agregar `POST /wms/inventory/receive` — entrada de mercancía
- Agregar `POST /wms/inventory/dispatch` — salida de mercancía
- Agregar `GET /wms/inventory/by-client/:userId` — inventario por cliente
- Agregar `GET /wms/warehouse/map` — posiciones del rack con ocupación

### 9. AgdService — certificados sin validaciones
**Archivo:** `backend-nest/src/agd/agd.service.ts`
- Agregar validación de fecha de expiración al crear `CertificateOfDeposit`
- Agregar `GET /agd/certificates/expiring-soon` — alertas de vencimiento próximo
- Implementar generación de número correlativo para `PledgeBond`

### 10. DocumentsService — sin almacenamiento real
**Archivo:** `backend-nest/src/documents/documents.service.ts`
- Actualmente solo guarda metadata en DB
- Integrar con multer para subida real de archivos (`POST /documents/upload`)
- O integrar con S3/MinIO para storage en Docker
- Agregar `GET /documents/order/:orderId` para listar documentos de una orden

### 11. SupportService — chat sin tiempo real
**Archivo:** `backend-nest/src/support/`
- Agregar `POST /support/tickets` — crear ticket
- Agregar `GET /support/tickets/my-tickets` — tickets del usuario
- Agregar `POST /support/tickets/:id/messages` — enviar mensaje en ticket
- Opcional: WebSocket con Socket.io para mensajería en tiempo real

### 12. MessagesService — sin sala de chat entre usuarios
**Archivo:** `backend-nest/src/messages/`
- Implementar `GET /messages/conversation/:userId` — historial de conversación
- Implementar `POST /messages` — enviar mensaje
- Agregar WebSocket gateway para chat en tiempo real

---

## 🟡 PENDIENTES FRONTEND (React)

### 13. HomePage — conexión con API real (bug secundario)
**Archivo:** `frontend-react/src/App.jsx` (función `HomePage`)
- Una vez corregido el backend (fix #1), la grilla de servicios debe funcionar
- Agregar manejo de error con mensaje visible al usuario si la API falla
- El skeleton loader ya existe pero no se activa correctamente cuando `loading=true`

### 14. ServiceResultCard — datos faltantes
**Archivo:** `frontend-react/src/components/ServiceResultCard/ServiceResultCard.jsx`
- Verificar qué campos usa el card vs. qué devuelve la API (`name`, `basePrice`, `store.legalName`, `category.name`, `billingUnit.name`)
- Agregar fallback para imágenes de tienda (logo no existe en seed)
- Mostrar rating promedio (no hay reviews en el card actualmente)

### 15. FilterSidebar — catálogos sin cargar
**Archivo:** `frontend-react/src/components/Search/FilterSidebar.jsx`
- Los filtros de puerto y categoría deben cargar desde `GET /catalogs/ports` y `GET /catalogs/service-types`
- Verificar que `CatalogSelect` recibe `onChange` correctamente desde FilterSidebar

### 16. LoginPage — sin redirección por rol
**Archivo:** `frontend-react/src/pages/Auth/LoginPage.jsx`
- Después del login exitoso, redirigir según el rol del usuario:
  - `ADMIN` → `/admin/analytics`
  - `STORE_OWNER` → `/store/dashboard`
  - `OPERATOR` → `/operator/dashboard`
  - `AUDITOR` → `/auditor/dashboard`
  - `CUSTOMER` → `/dashboard`

### 17. Navbar — menú dinámico por rol
**Archivo:** `frontend-react/src/components/Navbar/Navbar.jsx`
- Mostrar/ocultar items del menú según `user.role` del AuthContext
- El botón "Publicar Servicio" solo debe verse para `STORE_OWNER`
- Agregar dropdown de usuario con: Mi Perfil, Mi Tienda, Cerrar Sesión

### 18. StoreDashboard — widgets sin datos reales
**Archivo:** `frontend-react/src/pages/Dashboard/StoreDashboard.jsx`
- Conectar con `GET /orders/store-orders` para órdenes activas
- Conectar con `GET /services/my-services` para lista de servicios
- Conectar con `GET /reports` para estadísticas de ingresos

### 19. CustomerDashboard — PaymentForm con lógica real
**Archivo:** `frontend-react/src/pages/Dashboard/CustomerDashboard.jsx`
- `PaymentForm` necesita llamar `POST /payments` con el token JWT
- Mostrar estado de pago después de procesar
- Listar órdenes desde `GET /orders/my-orders`

### 20. OrderDetailPage — acciones por estado
**Archivo:** `frontend-react/src/pages/Orders/OrderDetailPage.jsx`
- Los botones de acción deben llamar endpoints reales: confirmar, completar, cancelar
- La línea de tiempo de eventos debe cargar desde la API
- Mostrar documentos adjuntos desde `GET /documents/order/:id`

### 21. ServiceWizard — publicación real
**Archivo:** `frontend-react/src/pages/Store/ServiceWizard.jsx`
- El formulario debe llamar `POST /services` con JWT
- Manejar errores de validación del backend (422)
- Redirigir al dashboard de tienda al publicar exitosamente

### 22. StoreOnboarding — creación de tienda real
**Archivo:** `frontend-react/src/pages/Store/StoreOnboarding.jsx`
- Llamar `POST /stores` con JWT al completar el wizard
- El backend debe existir ese endpoint (verificar que `StoresController` lo tiene)

### 23. ProfilePage — edición de datos
**Archivo:** `frontend-react/src/pages/Profile/ProfilePage.jsx`
- Conectar con `GET /users/me` para cargar datos del perfil
- Conectar con `PATCH /users/me` para guardar cambios
- Cambio de contraseña: `POST /auth/change-password`

### 24. ChatPage — sin WebSocket
**Archivo:** `frontend-react/src/pages/Chat/ChatPage.jsx`
- Actualmente es UI estática
- Conectar con `GET /messages/conversation/:userId` para historial
- Agregar socket.io-client para mensajes en tiempo real

### 25. WmsInventoryPage — tabla sin datos
**Archivo:** `frontend-react/src/pages/Wms/WmsInventoryPage.jsx`
- Cargar inventario desde `GET /wms/inventory/by-client/:userId`
- Botones de recepción y despacho deben llamar endpoints reales
- `WarehouseMapView` necesita datos del mapa de racks

### 26. AgdDashboard — sin datos reales
**Archivo:** `frontend-react/src/pages/Agd/AgdDashboard.jsx`
- Cargar certificados desde `GET /agd/certificates`
- Mostrar alertas de vencimiento próximo
- Formulario de creación de certificado debe llamar `POST /agd/certificates`

### 27. ReportsPage — gráficas estáticas
**Archivo:** `frontend-react/src/pages/Reports/ReportsPage.jsx`
- Conectar con `GET /reports` una vez implementado en backend
- Agregar selector de rango de fechas
- Exportar a PDF/Excel (botón `ExportButton` ya existe pero sin lógica)

### 28. SupportPage — sin tickets reales
**Archivo:** `frontend-react/src/pages/Support/SupportPage.jsx`
- Cargar tickets desde `GET /support/tickets/my-tickets`
- Formulario de nuevo ticket debe llamar `POST /support/tickets`
- `TicketChat` debe cargar mensajes del ticket y enviar respuestas

---

## 🟢 INFRAESTRUCTURA Y DEVOPS

### 29. Variables de entorno de producción
- El frontend usa `VITE_API_URL=http://localhost:3000` — en producción debe ser la URL pública
- Crear `frontend-react/.env.production` con la URL del servidor
- El `docker-compose.yml` tiene `synchronize: true` en TypeORM — debe ser `false` en producción y usar migraciones

### 30. Migraciones TypeORM
- Reemplazar `synchronize: true` con migraciones controladas
- Generar migración inicial: `npx typeorm migration:generate -n InitialSchema`
- Agregar script `migration:run` en `package.json`

### 31. Seed en Docker
- El seed `backend-nest/src/seed.ts` se ejecuta manualmente
- Agregar script en `docker-compose.yml` o entrypoint del backend para ejecutar seed automáticamente en primer arranque
- Alternativa: endpoint `POST /admin/seed` protegido por rol ADMIN

### 32. Nginx proxy reverso
- Considerar agregar nginx como proxy reverso en el docker-compose que enrute:
  - `/api/*` → backend:3000
  - `/*` → frontend:80
- Esto permite usar un solo puerto (80) para toda la app

### 33. Health checks del backend
- El backend no tiene endpoint `/health`
- Agregar `GET /health` que verifique conexión a DB
- Actualizar `docker-compose.yml` para que frontend dependa del health del backend

---

## 📋 ORDEN DE PRIORIDAD SUGERIDO

| # | Tarea | Impacto | Esfuerzo |
|---|-------|---------|----------|
| 1 | Fix `ServicesModule` (Store repository) | 🔴 Crítico | 5 min |
| 2 | Redirección por rol en LoginPage | 🔴 Alto | 30 min |
| 3 | Navbar dinámica por rol | 🟠 Alto | 1h |
| 4 | CustomerDashboard con órdenes reales | 🟠 Alto | 2h |
| 5 | StoreDashboard con datos reales | 🟠 Alto | 2h |
| 6 | ServiceWizard publicación real | 🟠 Alto | 1h |
| 7 | OrdersService — estados y eventos | 🟡 Medio | 3h |
| 8 | QuotationsService — endpoints cliente | 🟡 Medio | 2h |
| 9 | NotificationsService — triggers | 🟡 Medio | 2h |
| 10 | WmsInventoryPage — datos reales | 🟡 Medio | 2h |
| 11 | ReportsPage + ReportsService | 🟡 Medio | 3h |
| 12 | Chat en tiempo real (WebSocket) | 🟢 Bajo | 4h |
| 13 | DocumentsService — subida real | 🟢 Bajo | 3h |
| 14 | Migraciones TypeORM | 🟢 Bajo | 2h |
| 15 | Nginx proxy reverso | 🟢 Bajo | 1h |

---

## 🧪 CREDENCIALES SEED PARA PRUEBAS

| Usuario | Email | Contraseña | Rol |
|---------|-------|-----------|-----|
| Admin Sistema | admin@puerto.com | Demo2026! | ADMIN |
| Carlos Importador | carlos@importex.com | Demo2026! | CUSTOMER |
| María Logística | maria@cargomas.com | Demo2026! | CUSTOMER |
| José Almacenero | jose@almacenve.com | Demo2026! | CUSTOMER |
| Ana Operadora | ana.operadora@puerto.com | Demo2026! | OPERATOR |
| Luis Auditor | luis.auditor@puerto.com | Demo2026! | AUDITOR |
| Aduana Express (tienda) | aduana@express.com | Demo2026! | STORE_OWNER |
| TransLogística (tienda) | trans@logistica.com | Demo2026! | STORE_OWNER |

---

## 🔗 URLs LOCALES

| Servicio | URL |
|----------|-----|
| Frontend | http://localhost:8080 |
| Backend API | http://localhost:3000 |
| Swagger Docs | http://localhost:3000/api |
| pgAdmin | http://localhost:5050 |
