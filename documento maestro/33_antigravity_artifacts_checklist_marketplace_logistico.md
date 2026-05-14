# 33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md

# Documento Maestro de Checklist de Artefactos para Antigravity
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Checklist maestro de artefactos técnicos, funcionales, documentales, QA, seguridad y despliegue |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional + base escalable para marketplace logístico |
| Estilo visual | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, perfiles públicos, badges, búsqueda y experiencia responsive |
| Documento base principal | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` |

---

## 2. Propósito del documento

Este documento define el **checklist maestro de artefactos** que deben existir, revisarse o generarse durante el desarrollo del Marketplace Logístico TOS en Antigravity.

Su finalidad es evitar omisiones durante el desarrollo, asegurando que cada sprint produzca artefactos verificables en frontend, backend, base de datos, documentación, seguridad, auditoría, reportes, pruebas y despliegue.

Este checklist debe usarse para validar:

1. Estructura general del repositorio.
2. Documentos maestros del proyecto.
3. Artefactos frontend React.js.
4. Artefactos backend Nest.js.
5. Artefactos MySQL.
6. Seeds iniciales.
7. DTOs y contratos API.
8. Swagger y documentación técnica.
9. Guards, permisos y scopes.
10. Auditoría y trazabilidad.
11. Reportes y dashboards.
12. Archivos, documentos y evidencias.
13. QA funcional y técnico.
14. Seguridad y hardening.
15. Entregables por sprint.
16. Demo temprana.
17. MVP completo.

---

## 3. Objetivo general

Definir una lista maestra de artefactos obligatorios y recomendados para que Antigravity pueda desarrollar, revisar y cerrar el Marketplace Logístico TOS de manera ordenada, modular, auditable y verificable.

---

## 4. Objetivos específicos

1. Definir artefactos documentales obligatorios.
2. Definir artefactos de frontend React.js.
3. Definir artefactos de backend Nest.js.
4. Definir artefactos de base de datos MySQL.
5. Definir artefactos de seguridad.
6. Definir artefactos de auditoría.
7. Definir artefactos de reportes.
8. Definir artefactos de QA.
9. Definir artefactos de seeds.
10. Definir artefactos de Swagger.
11. Definir artefactos por módulo funcional.
12. Definir artefactos por sprint.
13. Definir checklist de demo temprana.
14. Definir checklist de MVP completo.
15. Definir checklist de cierre técnico.
16. Servir como guía de verificación para Antigravity.

---

## 5. Principios rectores del checklist

Antigravity debe aplicar estos principios:

1. Ningún módulo debe considerarse completo si le faltan artefactos mínimos.
2. Ningún endpoint privado debe existir sin auth, permisos y scope cuando aplique.
3. Ninguna acción crítica debe existir sin auditoría.
4. Ningún formulario crítico debe existir sin validación frontend y backend.
5. Ningún módulo financiero debe calcular montos críticos en frontend como fuente de verdad.
6. Ningún reporte debe existir sin validación de permisos y scopes.
7. Ningún archivo sensible debe descargarse sin autorización.
8. Ningún documento maestro debe contradecir el alcance MVP.
9. Ningún artefacto debe depender de integración real con Odoo.
10. Ningún artefacto debe depender de pasarela de pago real en el MVP.
11. Ningún artefacto debe depender de BI externo en el MVP.
12. Cada sprint debe cerrar con artefactos revisables.
13. Cada artefacto debe estar alineado con el backlog, roadmap y criterios de aceptación.

---

## 6. Estructura general esperada del repositorio

```txt
marketplace-logistico-tos/
  frontend/
  backend/
  database/
  docs/
  scripts/
  tests/
  README.md
  .env.example
  .gitignore
```

---

## 7. Checklist de estructura raíz

| Artefacto | Obligatorio | Estado |
|---|---|---|
| `/frontend` | Sí | Pendiente |
| `/backend` | Sí | Pendiente |
| `/database` | Sí | Pendiente |
| `/docs` | Sí | Pendiente |
| `/scripts` | Recomendado | Pendiente |
| `/tests` | Recomendado | Pendiente |
| `README.md` raíz | Sí | Pendiente |
| `.env.example` | Sí | Pendiente |
| `.gitignore` | Sí | Pendiente |
| Guía de instalación local | Sí | Pendiente |
| Guía de seeds demo | Sí | Pendiente |
| Guía de pruebas | Sí | Pendiente |

---

# SECCIÓN A — ARTEFACTOS DOCUMENTALES

---

## 8. Checklist de documentos maestros

| Código | Documento | Obligatorio | Estado |
|---|---|---|---|
| 01 | `01_PRODUCT_VISION.md` | Sí | Creado |
| 02 | `02_MVP_SCOPE.md` | Sí | Creado |
| 03 | `03_ANTIGRAVITY_RULES.md` | Sí | Creado |
| 04 | `04_ECOSYSTEM_ACTORS_MATRIX.md` | Sí | Creado |
| 05 | `05_USER_PROFILES.md` | Sí | Creado |
| 06 | `06_MODULE_PROFILE_ACCESS_MATRIX.md` | Sí | Creado |
| 07 | `07_FUNCTIONAL_MODULES_CATALOG.md` | Sí | Creado |
| 08 | `08_DESIGN_SYSTEM_MARKETPLACE.md` | Sí | Creado |
| 09 | `09_FRONTEND_COMPONENT_MAP.md` | Sí | Creado |
| 10 | `10_NAVIGATION_AND_MENUS.md` | Sí | Creado |
| 11 | `11_TECHNICAL_ARCHITECTURE.md` | Sí | Creado |
| 12 | `12_DATABASE_MASTER_SCHEMA.md` | Sí | Creado |
| 13 | `13_API_SPECIFICATION.md` | Sí | Creado |
| 14 | `14_ODOO_REFERENCE_MODELS.md` | Sí | Creado |
| 15 | `15_MASTER_CATALOGS_MVP.md` | Sí | Creado |
| 16 | `16_SERVICES_MASTER_CATALOG.md` | Sí | Creado |
| 17 | `17_INITIAL_SEEDS_PLAN.md` | Sí | Creado |
| 18 | `18_QUOTATION_WORKFLOW.md` | Sí | Creado |
| 19 | `19_ORDER_WORKFLOW.md` | Sí | Creado |
| 20 | `20_TOS_OPERATION_PLAN.md` | Sí | Creado |
| 21 | `21_TRANSPORT_OPERATION_PLAN.md` | Sí | Creado |
| 22 | `22_STORAGE_OPERATION_PLAN.md` | Sí | Creado |
| 23 | `23_INSPECTION_OPERATION_PLAN.md` | Sí | Creado |
| 24 | `24_PAYMENTS_MASTER_PLAN.md` | Sí | Creado |
| 25 | `25_COMMISSIONS_MASTER_PLAN.md` | Sí | Creado |
| 26 | `26_SECURITY_MASTER_PLAN.md` | Sí | Creado |
| 27 | `27_AUDIT_TRAIL_MASTER_PLAN.md` | Sí | Creado |
| 28 | `28_REPORTS_MASTER_PLAN.md` | Sí | Creado |
| 29 | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` | Sí | Creado |
| 30 | `30_SPRINT_ROADMAP.md` | Sí | Creado |
| 31 | `31_ACCEPTANCE_CRITERIA_MASTER.md` | Sí | Creado |
| 32 | `32_QA_TESTING_MASTER_PLAN.md` | Recomendado | Pendiente |
| 33 | `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` | Sí | En creación |

---

## 9. Checklist de documentos técnicos complementarios

| Documento | Descripción | Obligatorio | Estado |
|---|---|---|---|
| `README.md` | Guía general del proyecto | Sí | Pendiente |
| `INSTALLATION.md` | Instalación local | Recomendado | Pendiente |
| `ENVIRONMENT_VARIABLES.md` | Variables de entorno | Recomendado | Pendiente |
| `DATABASE_MIGRATIONS.md` | Guía de migraciones | Recomendado | Pendiente |
| `SEEDS_GUIDE.md` | Guía de seeds demo | Recomendado | Pendiente |
| `API_SWAGGER_GUIDE.md` | Guía de Swagger | Recomendado | Pendiente |
| `SECURITY_NOTES.md` | Notas de seguridad | Recomendado | Pendiente |
| `QA_CHECKLIST.md` | Checklist QA operativo | Recomendado | Pendiente |
| `DEMO_SCRIPT.md` | Guion de demo | Recomendado | Pendiente |
| `RELEASE_NOTES.md` | Notas de release MVP | Recomendado | Pendiente |

---

# SECCIÓN B — ARTEFACTOS FRONTEND REACT.JS

---

## 10. Estructura frontend esperada

```txt
frontend/
  src/
    app/
    routes/
    layouts/
    pages/
    components/
    features/
    hooks/
    services/
    types/
    utils/
    constants/
    guards/
    styles/
    assets/
  public/
  package.json
  vite.config.ts
  tsconfig.json
```

---

## 11. Checklist frontend base

| Artefacto | Obligatorio | Estado |
|---|---|---|
| `src/app/App.tsx` | Sí | Pendiente |
| `src/routes/AppRouter.tsx` | Sí | Pendiente |
| `src/layouts/PublicLayout.tsx` | Sí | Pendiente |
| `src/layouts/AuthLayout.tsx` | Sí | Pendiente |
| `src/layouts/DashboardLayout.tsx` | Sí | Pendiente |
| `src/services/apiClient.ts` | Sí | Pendiente |
| `src/hooks/useAuth.ts` | Sí | Pendiente |
| `src/guards/ProtectedRoute.tsx` | Sí | Pendiente |
| `src/guards/PermissionGate.tsx` | Sí | Pendiente |
| `src/components/ui` | Sí | Pendiente |
| `src/constants/routes.ts` | Recomendado | Pendiente |
| `src/constants/permissions.ts` | Recomendado | Pendiente |
| `src/types` | Recomendado | Pendiente |

---

## 12. Checklist de componentes UI base

| Componente | Uso | Obligatorio |
|---|---|---|
| `Button` | Acciones generales | Sí |
| `Input` | Formularios | Sí |
| `Select` | Catálogos y filtros | Sí |
| `Textarea` | Descripciones y motivos | Sí |
| `Card` | Tarjetas tipo marketplace | Sí |
| `Badge` | Estados y categorías | Sí |
| `Table` | Listados y reportes | Sí |
| `Modal` | Confirmaciones y formularios secundarios | Sí |
| `Tabs` | Organización de detalles | Recomendado |
| `Breadcrumbs` | Navegación contextual | Recomendado |
| `Pagination` | Listados grandes | Sí |
| `DateRangePicker` | Reportes y filtros | Recomendado |
| `LoadingSkeleton` | Estado de carga | Sí |
| `EmptyState` | Estado sin datos | Sí |
| `ErrorState` | Estado de error | Sí |
| `ForbiddenState` | Estado sin permiso | Sí |

---

## 13. Checklist de componentes marketplace tipo Yelp

| Componente | Descripción | Obligatorio |
|---|---|---|
| `MarketplaceHeader` | Header público con búsqueda y navegación | Sí |
| `MarketplaceFooter` | Footer público | Sí |
| `HeroSearchSection` | Hero con buscador principal | Sí |
| `CategoryCard` | Categoría logística | Sí |
| `StoreCard` | Tarjeta de tienda | Sí |
| `ServiceCard` | Tarjeta de servicio | Sí |
| `RatingStars` | Rating visual futuro | Recomendado |
| `TrustBadge` | Badge de verificación/aprobación | Recomendado |
| `DirectoryFilters` | Filtros laterales | Sí |
| `SearchResultsList` | Listado de resultados | Sí |
| `StorePublicProfileHeader` | Encabezado de tienda pública | Sí |
| `ServiceDetailHero` | Encabezado de servicio | Sí |
| `QuoteCTAButton` | Botón solicitar cotización | Sí |

---

## 14. Checklist de páginas públicas

| Página | Ruta sugerida | Obligatorio |
|---|---|---|
| `HomePage` | `/` | Sí |
| `SearchResultsPage` | `/search` | Sí |
| `StorePublicProfilePage` | `/stores/:slug` | Sí |
| `ServiceDetailPage` | `/services/:slug` | Sí |
| `LoginPage` | `/login` | Sí |
| `RegisterPage` | `/register` | Sí |
| `ForgotPasswordPage` | `/forgot-password` | Recomendado |
| `ResetPasswordPage` | `/reset-password` | Recomendado |
| `AccessDeniedPage` | `/403` | Sí |
| `NotFoundPage` | `*` | Sí |

---

## 15. Checklist de dashboards por perfil

| Dashboard | Ruta sugerida | Obligatorio MVP |
|---|---|---|
| `ClientDashboardPage` | `/client/dashboard` | Sí |
| `StoreDashboardPage` | `/store/dashboard` | Sí |
| `AdminDashboardPage` | `/admin/dashboard` | Sí |
| `OperatorDashboardPage` | `/operator/dashboard` | Recomendado |
| `AuditorDashboardPage` | `/auditor/dashboard` | Sí |
| `CarrierDashboardPage` | `/carrier/dashboard` | Recomendado |
| `WarehouseDashboardPage` | `/warehouse/dashboard` | Recomendado |
| `InspectorDashboardPage` | `/inspector/dashboard` | Recomendado |
| `SupportDashboardPage` | `/support/dashboard` | Futuro/Recomendado |

---

## 16. Checklist de páginas funcionales frontend

| Módulo | Páginas mínimas | Obligatorio |
|---|---|---|
| Tiendas | `StoreRegistrationPage`, `StoreManagementPage`, `StoreProfilePage` | Sí |
| Servicios | `StoreServicesPage`, `ServiceFormPage`, `ServiceDetailPage` | Sí |
| Cotizaciones | `ClientQuotationsPage`, `StoreQuotationsPage`, `QuotationDetailPage` | Sí |
| Órdenes | `OrdersListPage`, `OrderDetailPage`, `OrderTimeline` | Sí |
| Pagos | `PaymentFormPage`, `PaymentReviewPage`, `PaymentDetailPage` | Sí |
| Comisiones | `CommissionListPage`, `CommissionDetailPage`, `CommissionRuleFormPage` | Sí |
| Documentos | `DocumentsPanel`, `DocumentReviewPage` | Sí |
| TOS | `TosDashboardPage`, `TosContainerDetailPage` | Recomendado MVP completo |
| Transporte | `TripsListPage`, `TripDetailPage` | Recomendado MVP completo |
| Almacenamiento | `InventoryListPage`, `StorageDashboardPage` | Recomendado MVP completo |
| Inspecciones | `InspectionListPage`, `InspectionDetailPage` | Recomendado MVP completo |
| Auditoría | `AuditLogListPage`, `AuditLogDetailPage` | Sí |
| Reportes | `ReportsDashboardPage`, `FinancialReportPage`, `OperationalReportPage` | Sí |
| Soporte | `SupportTicketsPage`, `SupportTicketDetailPage` | Recomendado |

---

## 17. Checklist de hooks frontend

| Hook | Uso | Obligatorio |
|---|---|---|
| `useAuth` | Sesión actual | Sí |
| `useCurrentUser` | Usuario autenticado | Sí |
| `usePermissions` | Permisos disponibles | Sí |
| `useHasPermission` | Validación visual | Sí |
| `useCatalogs` | Catálogos maestros | Sí |
| `useStores` | Tiendas | Sí |
| `useServices` | Servicios | Sí |
| `useSearch` | Búsqueda marketplace | Sí |
| `useQuotations` | Cotizaciones | Sí |
| `useOrders` | Órdenes | Sí |
| `usePayments` | Pagos | Sí |
| `useCommissions` | Comisiones | Sí |
| `useDocuments` | Documentos | Sí |
| `useNotifications` | Notificaciones | Sí |
| `useAuditLogs` | Auditoría | Sí |
| `useReports` | Reportes | Sí |
| `useTos` | TOS | Recomendado |
| `useTrips` | Transporte | Recomendado |
| `useStorage` | Almacenamiento | Recomendado |
| `useInspections` | Inspecciones | Recomendado |

---

## 18. Checklist de servicios API frontend

| Archivo | Módulo | Obligatorio |
|---|---|---|
| `authApi.ts` | Auth | Sí |
| `usersApi.ts` | Usuarios | Sí |
| `catalogsApi.ts` | Catálogos | Sí |
| `storesApi.ts` | Tiendas | Sí |
| `servicesApi.ts` | Servicios | Sí |
| `searchApi.ts` | Búsqueda | Sí |
| `quotationsApi.ts` | Cotizaciones | Sí |
| `ordersApi.ts` | Órdenes | Sí |
| `paymentsApi.ts` | Pagos | Sí |
| `commissionsApi.ts` | Comisiones | Sí |
| `documentsApi.ts` | Documentos | Sí |
| `notificationsApi.ts` | Notificaciones | Sí |
| `auditApi.ts` | Auditoría | Sí |
| `reportsApi.ts` | Reportes | Sí |
| `tosApi.ts` | TOS | Recomendado |
| `transportApi.ts` | Transporte | Recomendado |
| `storageApi.ts` | Almacenamiento | Recomendado |
| `inspectionsApi.ts` | Inspecciones | Recomendado |
| `supportApi.ts` | Soporte | Recomendado |

---

# SECCIÓN C — ARTEFACTOS BACKEND NEST.JS

---

## 19. Estructura backend esperada

```txt
backend/
  src/
    main.ts
    app.module.ts
    config/
    common/
      guards/
      decorators/
      interceptors/
      filters/
      pipes/
      utils/
    modules/
      auth/
      users/
      roles/
      permissions/
      catalogs/
      stores/
      services/
      search/
      quotations/
      orders/
      payments/
      commissions/
      documents/
      notifications/
      audit/
      reports/
      tos/
      transport/
      storage/
      inspections/
      support/
    database/
    docs/
  test/
  package.json
  tsconfig.json
```

---

## 20. Checklist backend base

| Artefacto | Obligatorio | Estado |
|---|---|---|
| `main.ts` | Sí | Pendiente |
| `app.module.ts` | Sí | Pendiente |
| `ConfigModule` | Sí | Pendiente |
| Conexión MySQL | Sí | Pendiente |
| Health endpoint | Sí | Pendiente |
| Global ValidationPipe | Sí | Pendiente |
| Global exception filter | Recomendado | Pendiente |
| Swagger setup | Sí | Pendiente |
| CORS config | Sí | Pendiente |
| Rate limit auth | Sí | Pendiente |

---

## 21. Checklist de módulos Nest.js

| Módulo | Obligatorio MVP | Estado |
|---|---|---|
| `AuthModule` | Sí | Pendiente |
| `UsersModule` | Sí | Pendiente |
| `RolesModule` | Sí | Pendiente |
| `PermissionsModule` | Sí | Pendiente |
| `CatalogsModule` | Sí | Pendiente |
| `StoresModule` | Sí | Pendiente |
| `ServicesModule` | Sí | Pendiente |
| `SearchModule` | Sí | Pendiente |
| `QuotationsModule` | Sí | Pendiente |
| `OrdersModule` | Sí | Pendiente |
| `PaymentsModule` | Sí | Pendiente |
| `CommissionsModule` | Sí | Pendiente |
| `DocumentsModule` | Sí | Pendiente |
| `NotificationsModule` | Sí | Pendiente |
| `AuditModule` | Sí | Pendiente |
| `ReportsModule` | Sí | Pendiente |
| `TosModule` | Recomendado MVP completo | Pendiente |
| `TransportModule` | Recomendado MVP completo | Pendiente |
| `StorageModule` | Recomendado MVP completo | Pendiente |
| `InspectionsModule` | Recomendado MVP completo | Pendiente |
| `SupportModule` | Recomendado | Pendiente |

---

## 22. Checklist por módulo backend

Cada módulo backend debe tener, cuando aplique:

| Artefacto | Obligatorio |
|---|---|
| `*.module.ts` | Sí |
| `*.controller.ts` | Sí |
| `*.service.ts` | Sí |
| `dto/create-*.dto.ts` | Sí, si crea registros |
| `dto/update-*.dto.ts` | Sí, si actualiza registros |
| `dto/filter-*.dto.ts` | Sí, si lista/filtra |
| `entities/*.entity.ts` o modelo equivalente | Sí |
| `*.permissions.ts` | Recomendado |
| `*.constants.ts` | Recomendado |
| Pruebas unitarias básicas | Recomendado |
| Swagger decorators | Sí |
| Guards de auth/permission/scope | Sí, si privado |
| Audit logger | Sí, si crítico |
| Notificación | Sí, si aplica |

---

## 23. Checklist de guards, decorators e interceptors

| Artefacto | Uso | Obligatorio |
|---|---|---|
| `JwtAuthGuard` | Validar sesión | Sí |
| `PermissionsGuard` | Validar permiso | Sí |
| `ScopeGuard` | Validar alcance de datos | Sí |
| `RequirePermissions` | Decorator permisos | Sí |
| `RequireScope` | Decorator scope | Recomendado |
| `CurrentUser` | Usuario autenticado | Sí |
| `Audit` | Decorator auditoría | Recomendado |
| `RequestIdMiddleware` | Trazabilidad request | Recomendado |
| `HttpExceptionFilter` | Errores controlados | Recomendado |
| `LoggingInterceptor` | Logs técnicos | Recomendado |
| `AuditInterceptor` | Auditoría transversal | Recomendado |

---

## 24. Checklist de DTOs críticos

| DTO | Módulo | Obligatorio |
|---|---|---|
| `LoginDto` | Auth | Sí |
| `RegisterDto` | Auth | Sí |
| `CreateStoreDto` | Stores | Sí |
| `ApproveStoreDto` | Stores | Sí |
| `CreateServiceDto` | Services | Sí |
| `UpdateServiceDto` | Services | Sí |
| `SearchServicesDto` | Search | Sí |
| `CreateQuotationDto` | Quotations | Sí |
| `RespondQuotationDto` | Quotations | Sí |
| `ApproveQuotationDto` | Quotations | Sí |
| `CreateOrderDto` | Orders | Sí |
| `UpdateOrderStatusDto` | Orders | Sí |
| `CreatePaymentDto` | Payments | Sí |
| `ConfirmPaymentDto` | Payments | Sí |
| `RejectPaymentDto` | Payments | Sí |
| `CreateCommissionRuleDto` | Commissions | Sí |
| `CalculateCommissionDto` | Commissions | Sí |
| `UploadDocumentDto` | Documents | Sí |
| `ReviewDocumentDto` | Documents | Sí |
| `AuditLogFilterDto` | Audit | Sí |
| `ReportFilterDto` | Reports | Sí |
| `ExportReportDto` | Reports | Sí |
| `CreateTosContainerDto` | TOS | Recomendado |
| `CreateTripDto` | Transport | Recomendado |
| `ReceiveInventoryDto` | Storage | Recomendado |
| `CreateInspectionDto` | Inspections | Recomendado |

---

# SECCIÓN D — ARTEFACTOS MYSQL Y DATABASE

---

## 25. Estructura database esperada

```txt
database/
  migrations/
  seeds/
  diagrams/
  schema.sql
  seed-demo.sql
  README.md
```

---

## 26. Checklist de tablas núcleo

| Tabla | Módulo | Obligatorio MVP |
|---|---|---|
| `users` | Auth/Users | Sí |
| `roles` | RBAC | Sí |
| `permissions` | RBAC | Sí |
| `role_permissions` | RBAC | Sí |
| `user_roles` | RBAC | Sí |
| `user_sessions` | Auth | Sí |
| `master_catalogs` | Catálogos | Sí |
| `master_catalog_items` | Catálogos | Sí |
| `stores` | Tiendas | Sí |
| `store_users` | Tiendas | Sí |
| `services` | Servicios | Sí |
| `quotations` | Cotizaciones | Sí |
| `quotation_lines` | Cotizaciones | Sí |
| `orders` | Órdenes | Sí |
| `order_lines` | Órdenes | Sí |
| `order_events` | Órdenes | Sí |
| `payments` | Pagos | Sí |
| `payment_receipts` | Pagos | Sí |
| `payment_status_history` | Pagos | Sí |
| `commission_rules` | Comisiones | Sí |
| `commissions` | Comisiones | Sí |
| `commission_status_history` | Comisiones | Sí |
| `documents` | Documentos | Sí |
| `evidences` | Evidencias | Sí |
| `notifications` | Notificaciones | Sí |
| `audit_logs` | Auditoría | Sí |
| `report_definitions` | Reportes | Sí |
| `report_exports` | Reportes | Sí |

---

## 27. Checklist de tablas operativas MVP completo

| Tabla | Módulo | Obligatorio MVP completo |
|---|---|---|
| `tos_containers` | TOS | Sí, si TOS activo |
| `tos_gates` | TOS | Sí, si TOS activo |
| `tos_movements` | TOS | Sí, si TOS activo |
| `tos_holds` | TOS | Sí, si TOS activo |
| `trips` | Transporte | Sí, si transporte activo |
| `trip_events` | Transporte | Sí, si transporte activo |
| `vehicles` | Transporte | Recomendado |
| `drivers` | Transporte | Recomendado |
| `warehouses` | Almacenamiento | Sí, si almacenamiento activo |
| `storage_locations` | Almacenamiento | Sí, si almacenamiento activo |
| `inventory_items` | Almacenamiento | Sí, si almacenamiento activo |
| `storage_movements` | Almacenamiento | Sí, si almacenamiento activo |
| `storage_holds` | Almacenamiento | Sí, si almacenamiento activo |
| `dispatches` | Almacenamiento | Sí, si almacenamiento activo |
| `inspections` | Inspecciones | Sí, si inspecciones activo |
| `inspection_checklists` | Inspecciones | Sí, si inspecciones activo |
| `inspection_checklist_items` | Inspecciones | Sí, si inspecciones activo |
| `inspection_results` | Inspecciones | Sí, si inspecciones activo |
| `support_tickets` | Soporte | Recomendado |
| `support_ticket_comments` | Soporte | Recomendado |

---

## 28. Checklist de estándares MySQL

Cada tabla debe revisar:

| Criterio | Obligatorio |
|---|---|
| Primary key | Sí |
| UUID o código público | Recomendado |
| `created_at` | Sí |
| `updated_at` | Sí |
| `deleted_at` para soft delete | Si aplica |
| Índices por `status` | Si aplica |
| Índices por `store_id` | Si aplica |
| Índices por `customer_id` | Si aplica |
| Índices por `order_id` | Si aplica |
| Índices por fechas | Sí en reportes |
| Foreign keys | Sí, cuando aplique |
| Campos monetarios `DECIMAL` | Sí |
| Estados normalizados | Recomendado |
| No guardar secretos en texto plano | Sí |

---

# SECCIÓN E — SEEDS Y DATOS DEMO

---

## 29. Checklist de seeds mínimos

| Seed | Obligatorio | Estado |
|---|---|---|
| Perfiles de usuario | Sí | Pendiente |
| Roles base | Sí | Pendiente |
| Permisos base | Sí | Pendiente |
| Relación rol-permiso | Sí | Pendiente |
| Usuario superadmin demo | Sí, solo demo | Pendiente |
| Cliente demo | Sí | Pendiente |
| Tienda demo | Sí | Pendiente |
| Auditor demo | Sí | Pendiente |
| Operador demo | Recomendado | Pendiente |
| Categorías de servicios | Sí | Pendiente |
| Tipos de tienda | Sí | Pendiente |
| Tipos de carga | Sí | Pendiente |
| Tipos de documentos | Sí | Pendiente |
| Estados operativos | Sí | Pendiente |
| Estados financieros | Sí | Pendiente |
| Estados aduaneros | Sí | Pendiente |
| Puertos demo | Sí | Pendiente |
| Terminales demo | Sí | Pendiente |
| Servicios demo | Sí | Pendiente |
| Cotización demo | Recomendado | Pendiente |
| Orden demo | Recomendado | Pendiente |
| Pago demo | Recomendado | Pendiente |
| Comisión demo | Recomendado | Pendiente |
| Audit logs demo | Recomendado | Pendiente |
| Reportes demo | Recomendado | Pendiente |

---

## 30. Checklist de usuarios demo sugeridos

| Usuario | Perfil | Propósito |
|---|---|---|
| `admin.demo@example.com` | Superadministrador | Gestión global |
| `client.demo@example.com` | Cliente final | Buscar, cotizar, pagar |
| `store.demo@example.com` | Tienda logística | Publicar servicios y responder cotizaciones |
| `carrier.demo@example.com` | Transportista | Gestionar viajes |
| `warehouse.demo@example.com` | Almacén fiscal | Gestionar inventario |
| `inspector.demo@example.com` | Inspector | Ejecutar inspecciones |
| `auditor.demo@example.com` | Auditor | Ver auditoría/reportes |
| `operator.demo@example.com` | Operador interno | Supervisar operaciones |
| `support.demo@example.com` | Soporte | Atender tickets |

---

# SECCIÓN F — ARTEFACTOS DE SEGURIDAD

---

## 31. Checklist de seguridad obligatoria

| Artefacto | Obligatorio | Estado |
|---|---|---|
| Hash de contraseñas | Sí | Pendiente |
| JWT access token | Sí | Pendiente |
| Refresh token revocable | Sí | Pendiente |
| `JwtAuthGuard` | Sí | Pendiente |
| `PermissionsGuard` | Sí | Pendiente |
| `ScopeGuard` | Sí | Pendiente |
| Middleware de rate limit en auth | Sí | Pendiente |
| Validación DTO global | Sí | Pendiente |
| CORS configurado | Sí | Pendiente |
| `.env.example` sin secretos | Sí | Pendiente |
| Manejo seguro de errores | Sí | Pendiente |
| Sanitización de audit logs | Sí | Pendiente |
| Validación de archivos | Sí | Pendiente |
| Bloqueo de extensiones peligrosas | Sí | Pendiente |
| Control 401/403 frontend | Sí | Pendiente |

---

## 32. Checklist RBAC

| Artefacto | Obligatorio |
|---|---|
| Tabla `roles` | Sí |
| Tabla `permissions` | Sí |
| Tabla `role_permissions` | Sí |
| Tabla `user_roles` | Sí |
| Seeds de roles | Sí |
| Seeds de permisos | Sí |
| Decorator `RequirePermissions` | Sí |
| Guard `PermissionsGuard` | Sí |
| Matriz perfil-módulo | Sí |
| Validación de auditor solo lectura | Sí |
| Validación de tienda solo scope propio | Sí |
| Validación de cliente solo datos propios | Sí |

---

## 33. Checklist de scopes

| Scope | Validación obligatoria |
|---|---|
| `own` | Cliente solo datos propios |
| `store` | Tienda solo datos de su tienda |
| `assigned` | Inspector/transportista solo asignaciones |
| `module` | Operador solo módulos autorizados |
| `global` | Superadministrador global |
| `global_readonly` | Auditor solo lectura |
| `support_limited` | Soporte limitado a tickets/casos |

---

# SECCIÓN G — ARTEFACTOS DE AUDITORÍA

---

## 34. Checklist de auditoría

| Artefacto | Obligatorio | Estado |
|---|---|---|
| Tabla `audit_logs` | Sí | Pendiente |
| `AuditLoggerService` | Sí | Pendiente |
| Sanitizador de campos sensibles | Sí | Pendiente |
| `AuditLogFilterDto` | Sí | Pendiente |
| Endpoint `/audit/logs` | Sí | Pendiente |
| Endpoint auditoría por entidad | Sí | Pendiente |
| `AuditLogListPage` | Sí | Pendiente |
| `AuditLogDetailPage` | Recomendado | Pendiente |
| `AuditDiffViewer` | Recomendado | Pendiente |
| Audit log para pagos | Sí | Pendiente |
| Audit log para comisiones | Sí | Pendiente |
| Audit log para roles/permisos | Sí | Pendiente |
| Audit log para órdenes | Sí | Pendiente |
| Audit log para TOS/despacho | Sí, si activo | Pendiente |
| Audit log para exportaciones | Sí | Pendiente |

---

## 35. Eventos críticos que deben tener artefacto de auditoría

| Evento | Obligatorio |
|---|---|
| Login fallido | Recomendado |
| Asignación de rol | Sí |
| Cambio de permiso | Sí |
| Aprobación de tienda | Sí |
| Suspensión de tienda | Sí |
| Publicación de servicio | Sí |
| Aprobación de cotización | Sí |
| Creación de orden | Sí |
| Cancelación de orden | Sí |
| Confirmación de pago | Sí |
| Rechazo de pago | Sí |
| Cambio de regla de comisión | Sí |
| Ajuste de comisión | Sí |
| Gate-out TOS | Sí, si TOS activo |
| Bloqueo/liberación TOS | Sí, si TOS activo |
| Despacho de inventario | Sí, si almacenamiento activo |
| Rechazo de inspección | Sí, si inspecciones activo |
| Exportación de reporte | Sí |

---

# SECCIÓN H — ARTEFACTOS DE REPORTES

---

## 36. Checklist de reportes

| Artefacto | Obligatorio | Estado |
|---|---|---|
| Tabla `report_definitions` | Sí | Pendiente |
| Tabla `report_exports` | Sí | Pendiente |
| `ReportsModule` | Sí | Pendiente |
| `ReportFilterDto` | Sí | Pendiente |
| `ExportReportDto` | Sí | Pendiente |
| Endpoint `/reports/dashboard` | Sí | Pendiente |
| Endpoint `/reports/financial` | Sí | Pendiente |
| Endpoint `/reports/operational` | Sí | Pendiente |
| Endpoint `/reports/export` | Sí | Pendiente |
| `ReportsDashboardPage` | Sí | Pendiente |
| `ReportSummaryCard` | Sí | Pendiente |
| `ReportFiltersBar` | Sí | Pendiente |
| `ReportExportModal` | Sí | Pendiente |
| Exportador CSV | Sí | Pendiente |
| Audit log de exportación | Sí | Pendiente |

---

## 37. Checklist de KPIs mínimos

| KPI | Perfil | Obligatorio |
|---|---|---|
| Órdenes activas | Cliente/Tienda/Admin | Sí |
| Cotizaciones pendientes | Cliente/Tienda | Sí |
| Pagos pendientes | Cliente/Admin | Sí |
| Pagos confirmados | Tienda/Admin | Sí |
| Comisiones confirmadas | Tienda/Admin | Sí |
| Neto proveedor | Tienda/Admin | Sí |
| Servicios publicados | Tienda/Admin | Sí |
| Tiendas activas | Admin | Sí |
| Eventos críticos | Admin/Auditor | Sí |
| Documentos pendientes | Cliente/Tienda/Operador | Recomendado |
| Viajes en tránsito | Transportista/Operador | Recomendado |
| Inventario bloqueado | Almacén/Operador | Recomendado |
| Inspecciones pendientes | Inspector/Operador | Recomendado |

---

# SECCIÓN I — ARTEFACTOS POR MÓDULO FUNCIONAL

---

## 38. Checklist módulo Auth

| Artefacto | Obligatorio |
|---|---|
| `AuthModule` | Sí |
| `AuthController` | Sí |
| `AuthService` | Sí |
| `LoginDto` | Sí |
| `RegisterDto` | Sí |
| `RefreshTokenDto` | Recomendado |
| `users` table | Sí |
| `user_sessions` table | Sí |
| LoginPage | Sí |
| RegisterPage | Sí |
| ProtectedRoute | Sí |
| useAuth | Sí |
| authApi | Sí |
| Pruebas login/logout | Sí |

---

## 39. Checklist módulo Tiendas

| Artefacto | Obligatorio |
|---|---|
| `StoresModule` | Sí |
| `StoresController` | Sí |
| `StoresService` | Sí |
| `CreateStoreDto` | Sí |
| `ApproveStoreDto` | Sí |
| Tabla `stores` | Sí |
| Tabla `store_users` | Sí |
| StoreRegistrationPage | Sí |
| StoreManagementPage | Sí |
| StorePublicProfilePage | Sí |
| StoreCard | Sí |
| Audit log aprobación/rechazo | Sí |
| Pruebas scope tienda | Sí |

---

## 40. Checklist módulo Servicios

| Artefacto | Obligatorio |
|---|---|
| `ServicesModule` | Sí |
| `ServicesController` | Sí |
| `ServicesService` | Sí |
| `CreateServiceDto` | Sí |
| `UpdateServiceDto` | Sí |
| Tabla `services` | Sí |
| ServiceForm | Sí |
| StoreServicesPage | Sí |
| ServiceDetailPage | Sí |
| ServiceCard | Sí |
| Endpoint publish/unpublish | Sí |
| Pruebas publicación/directorio | Sí |

---

## 41. Checklist módulo Cotizaciones

| Artefacto | Obligatorio |
|---|---|
| `QuotationsModule` | Sí |
| `QuotationsController` | Sí |
| `QuotationsService` | Sí |
| `CreateQuotationDto` | Sí |
| `RespondQuotationDto` | Sí |
| `ApproveQuotationDto` | Sí |
| Tabla `quotations` | Sí |
| Tabla `quotation_lines` | Sí |
| QuotationRequestForm | Sí |
| ClientQuotationsPage | Sí |
| StoreQuotationsPage | Sí |
| QuotationDetailPage | Sí |
| Notificación a tienda/cliente | Sí |
| Prueba flujo solicitud-respuesta-aprobación | Sí |

---

## 42. Checklist módulo Órdenes

| Artefacto | Obligatorio |
|---|---|
| `OrdersModule` | Sí |
| `OrdersController` | Sí |
| `OrdersService` | Sí |
| Tabla `orders` | Sí |
| Tabla `order_lines` | Sí |
| Tabla `order_events` | Sí |
| OrdersListPage | Sí |
| OrderDetailPage | Sí |
| OrderTimeline | Sí |
| Endpoint crear desde cotización | Sí |
| Endpoint cerrar/cancelar | Sí |
| Audit log cierre/cancelación | Sí |
| Pruebas scope cliente/tienda | Sí |

---

## 43. Checklist módulo Pagos

| Artefacto | Obligatorio |
|---|---|
| `PaymentsModule` | Sí |
| `PaymentsController` | Sí |
| `PaymentsService` | Sí |
| `CreatePaymentDto` | Sí |
| `ConfirmPaymentDto` | Sí |
| `RejectPaymentDto` | Sí |
| Tabla `payments` | Sí |
| Tabla `payment_receipts` | Sí |
| Tabla `payment_status_history` | Sí |
| PaymentForm | Sí |
| PaymentReceiptUpload | Sí |
| PaymentReviewPanel | Sí |
| Audit log confirmación/rechazo | Sí |
| Pruebas pago confirmado/rechazado | Sí |

---

## 44. Checklist módulo Comisiones

| Artefacto | Obligatorio |
|---|---|
| `CommissionsModule` | Sí |
| `CommissionRulesModule` | Sí |
| `CommissionsController` | Sí |
| `CommissionRulesController` | Sí |
| `CreateCommissionRuleDto` | Sí |
| `CalculateCommissionDto` | Sí |
| Tabla `commission_rules` | Sí |
| Tabla `commissions` | Sí |
| Tabla `commission_status_history` | Sí |
| Motor de selección de regla | Sí |
| Motor de cálculo decimal | Sí |
| CommissionRuleForm | Sí |
| CommissionSummaryCard | Sí |
| Audit log regla/ajuste | Sí |
| Pruebas cálculo comisión/neto | Sí |

---

## 45. Checklist módulo Documentos

| Artefacto | Obligatorio |
|---|---|
| `DocumentsModule` | Sí |
| `DocumentsController` | Sí |
| `DocumentsService` | Sí |
| Tabla `documents` | Sí |
| Tabla `evidences` | Sí |
| Upload seguro | Sí |
| Validación MIME/extensión/tamaño | Sí |
| DocumentUpload | Sí |
| DocumentReviewPanel | Sí |
| Endpoint validate/reject | Sí |
| Audit log documental | Sí |
| Pruebas archivo válido/inválido | Sí |

---

## 46. Checklist módulo TOS

| Artefacto | Obligatorio MVP completo |
|---|---|
| `TosModule` | Sí |
| `TosController` | Sí |
| `TosService` | Sí |
| Tabla `tos_containers` | Sí |
| Tabla `tos_gates` | Sí |
| Tabla `tos_movements` | Sí |
| Tabla `tos_holds` | Sí |
| TosDashboardPage | Sí |
| TosContainerDetailPage | Sí |
| Formularios gate-in/gate-out | Sí |
| Bloqueo/liberación | Sí |
| Audit log gate-out | Sí |
| Prueba gate-out con bloqueo | Sí |

---

## 47. Checklist módulo Transporte

| Artefacto | Obligatorio MVP completo |
|---|---|
| `TransportModule` | Sí |
| `TransportController` | Sí |
| `TransportService` | Sí |
| Tabla `trips` | Sí |
| Tabla `trip_events` | Sí |
| Tabla `vehicles` | Recomendado |
| Tabla `drivers` | Recomendado |
| TripsListPage | Sí |
| TripDetailPage | Sí |
| TripStatusActions | Sí |
| POD upload | Sí |
| Audit log entrega/incidencia | Sí |
| Prueba entrega con POD | Sí |

---

## 48. Checklist módulo Almacenamiento

| Artefacto | Obligatorio MVP completo |
|---|---|
| `StorageModule` | Sí |
| `StorageController` | Sí |
| `StorageService` | Sí |
| Tabla `warehouses` | Sí |
| Tabla `storage_locations` | Sí |
| Tabla `inventory_items` | Sí |
| Tabla `storage_movements` | Sí |
| Tabla `storage_holds` | Sí |
| Tabla `dispatches` | Sí |
| InventoryListPage | Sí |
| StorageDashboardPage | Sí |
| DispatchForm | Sí |
| Audit log despacho/bloqueo | Sí |
| Prueba despacho con bloqueo | Sí |

---

## 49. Checklist módulo Inspecciones

| Artefacto | Obligatorio MVP completo |
|---|---|
| `InspectionsModule` | Sí |
| `InspectionsController` | Sí |
| `InspectionsService` | Sí |
| Tabla `inspections` | Sí |
| Tabla `inspection_checklists` | Sí |
| Tabla `inspection_checklist_items` | Sí |
| Tabla `inspection_results` | Sí |
| InspectionListPage | Sí |
| InspectionDetailPage | Sí |
| InspectionChecklistRunner | Sí |
| InspectionReviewPanel | Sí |
| Audit log aprobación/rechazo | Sí |
| Prueba evidencia obligatoria | Sí |

---

# SECCIÓN J — ARTEFACTOS QA Y TESTING

---

## 50. Checklist QA funcional

| Prueba | Obligatorio |
|---|---|
| Login correcto | Sí |
| Login incorrecto | Sí |
| 401 sin token | Sí |
| 403 sin permiso | Sí |
| Scope cliente | Sí |
| Scope tienda | Sí |
| Scope auditor solo lectura | Sí |
| Crear tienda | Sí |
| Aprobar tienda | Sí |
| Crear servicio | Sí |
| Publicar servicio | Sí |
| Buscar servicio | Sí |
| Solicitar cotización | Sí |
| Responder cotización | Sí |
| Aprobar cotización | Sí |
| Crear orden | Sí |
| Registrar pago | Sí |
| Confirmar pago | Sí |
| Calcular comisión | Sí |
| Generar audit log | Sí |
| Crear notificación | Sí |
| Exportar reporte con motivo | Sí |

---

## 51. Checklist QA operativo MVP completo

| Prueba | Obligatorio MVP completo |
|---|---|
| Subir documento válido | Sí |
| Rechazar archivo prohibido | Sí |
| Validar documento | Sí |
| Registrar contenedor TOS | Sí |
| Gate-in | Sí |
| Gate-out con bloqueo falla | Sí |
| Crear viaje | Sí |
| Entregar viaje con POD | Sí |
| Recibir inventario | Sí |
| Despachar inventario bloqueado falla | Sí |
| Crear inspección | Sí |
| Checklist obligatorio | Sí |
| Rechazo de inspección con motivo | Sí |

---

## 52. Checklist QA técnico

| Prueba | Obligatorio |
|---|---|
| Migraciones desde cero | Sí |
| Seeds desde cero | Sí |
| Swagger carga | Sí |
| Health endpoint | Sí |
| DTO inválido devuelve 400 | Sí |
| Endpoint privado sin token devuelve 401 | Sí |
| Endpoint sin permiso devuelve 403 | Sí |
| Error no expone stack trace en producción | Sí |
| CORS configurado | Sí |
| Rate limit auth | Sí |
| Paginación en listados | Sí |
| Exportación con límite | Sí |

---

# SECCIÓN K — ARTEFACTOS SWAGGER Y API

---

## 53. Checklist Swagger

| Artefacto | Obligatorio |
|---|---|
| Swagger habilitado en local/demo | Sí |
| Auth documentado | Sí |
| DTOs documentados | Sí |
| Módulos agrupados por tags | Sí |
| Endpoints protegidos muestran bearer auth | Sí |
| Códigos 400/401/403/404/422 documentados | Recomendado |
| Upload documentado | Sí |
| Exportaciones documentadas | Sí |
| Swagger protegido/deshabilitado en producción | Sí |

---

## 54. Checklist de endpoints mínimos

| Módulo | Endpoints mínimos |
|---|---|
| Auth | register, login, logout, me, refresh |
| Catalogs | list catalogs, list items |
| Stores | create, list, detail, approve, reject, suspend |
| Services | create, update, publish, unpublish, list, detail |
| Search | search services, search stores |
| Quotations | create, respond, approve, reject, list, detail |
| Orders | list, detail, timeline, close, cancel |
| Payments | create, upload receipt, confirm, reject, list, detail |
| Commissions | rules CRUD, calculate, confirm, list, detail |
| Documents | upload, list, download, validate, reject |
| Notifications | list, mark read |
| Audit | logs, detail, entity audit |
| Reports | dashboard, financial, operational, export |
| TOS | containers, gate-in, gate-out, holds |
| Transport | trips, assign, status, POD |
| Storage | inventory, receive, move, hold, dispatch |
| Inspections | create, assign, checklist, review |
| Support | tickets, comments, status |

---

# SECCIÓN L — CHECKLIST POR SPRINT

---

## 55. Sprint 00 — Preparación Antigravity

| Artefacto | Estado |
|---|---|
| `/docs` organizado | Pendiente |
| Índice de documentos maestros | Pendiente |
| Roadmap revisado | Pendiente |
| Backlog revisado | Pendiente |
| Prompt inicial preparado | Pendiente |

---

## 56. Sprint 01 — Arquitectura base

| Artefacto | Estado |
|---|---|
| Frontend base | Pendiente |
| Backend base | Pendiente |
| MySQL conectado | Pendiente |
| Health endpoint | Pendiente |
| README inicial | Pendiente |
| `.env.example` | Pendiente |

---

## 57. Sprint 02 — Auth, RBAC y scopes

| Artefacto | Estado |
|---|---|
| AuthModule | Pendiente |
| Login/Register frontend | Pendiente |
| JWT guard | Pendiente |
| PermissionsGuard | Pendiente |
| ScopeGuard | Pendiente |
| Seeds roles/permisos | Pendiente |
| ProtectedRoute | Pendiente |
| Pruebas 401/403 | Pendiente |

---

## 58. Sprint 03 — Catálogos, seeds y navegación

| Artefacto | Estado |
|---|---|
| MasterCatalogsModule | Pendiente |
| Tablas catálogos | Pendiente |
| Seeds MVP | Pendiente |
| Layouts por perfil | Pendiente |
| Dashboards iniciales | Pendiente |
| Menús por perfil | Pendiente |

---

## 59. Sprint 04 — Design system y home

| Artefacto | Estado |
|---|---|
| UI components base | Pendiente |
| HomePage | Pendiente |
| MarketplaceHeader | Pendiente |
| MarketplaceFooter | Pendiente |
| StoreCard | Pendiente |
| ServiceCard | Pendiente |
| DirectoryFilters | Pendiente |

---

## 60. Sprint 05 — Tiendas

| Artefacto | Estado |
|---|---|
| StoresModule | Pendiente |
| Tablas stores/store_users | Pendiente |
| StoreRegistrationPage | Pendiente |
| Admin approval panel | Pendiente |
| StorePublicProfilePage | Pendiente |
| Audit log aprobación | Pendiente |

---

## 61. Sprint 06 — Servicios

| Artefacto | Estado |
|---|---|
| ServicesModule | Pendiente |
| Tabla services | Pendiente |
| ServiceForm | Pendiente |
| ServiceDetailPage | Pendiente |
| Publish/unpublish | Pendiente |
| ServiceCard conectado | Pendiente |

---

## 62. Sprint 07 — Búsqueda

| Artefacto | Estado |
|---|---|
| SearchModule | Pendiente |
| Endpoint search services | Pendiente |
| SearchResultsPage | Pendiente |
| SearchBar conectado | Pendiente |
| FilterSidebar conectado | Pendiente |
| Empty/loading/error states | Pendiente |

---

## 63. Sprint 08 — Cotizaciones

| Artefacto | Estado |
|---|---|
| QuotationsModule | Pendiente |
| Tablas quotations/quotation_lines | Pendiente |
| QuotationRequestForm | Pendiente |
| StoreQuotationsPage | Pendiente |
| QuotationResponseForm | Pendiente |
| Approve/reject quotation | Pendiente |

---

## 64. Sprint 09 — Órdenes

| Artefacto | Estado |
|---|---|
| OrdersModule | Pendiente |
| Tablas orders/order_lines/order_events | Pendiente |
| Crear orden desde cotización | Pendiente |
| OrdersListPage | Pendiente |
| OrderDetailPage | Pendiente |
| OrderTimeline | Pendiente |
| Close/cancel order | Pendiente |

---

## 65. Sprint 10 — Pagos

| Artefacto | Estado |
|---|---|
| PaymentsModule | Pendiente |
| Tablas payments/payment_receipts | Pendiente |
| PaymentForm | Pendiente |
| Receipt upload | Pendiente |
| PaymentReviewPanel | Pendiente |
| Confirm/reject payment | Pendiente |
| Audit log crítico | Pendiente |

---

## 66. Sprint 11 — Comisiones

| Artefacto | Estado |
|---|---|
| CommissionsModule | Pendiente |
| CommissionRulesModule | Pendiente |
| Tablas de comisiones | Pendiente |
| Motor cálculo comisión | Pendiente |
| CommissionRuleForm | Pendiente |
| CommissionSummaryCard | Pendiente |
| Integración pago-comisión | Pendiente |

---

## 67. Sprint 12 — Auditoría y notificaciones

| Artefacto | Estado |
|---|---|
| AuditModule | Pendiente |
| AuditLoggerService | Pendiente |
| Sanitizador campos sensibles | Pendiente |
| NotificationsModule | Pendiente |
| NotificationsDropdown | Pendiente |
| AuditLogListPage | Pendiente |

---

## 68. Sprint 13 — Documentos

| Artefacto | Estado |
|---|---|
| DocumentsModule | Pendiente |
| Tablas documents/evidences | Pendiente |
| Upload seguro | Pendiente |
| DocumentUpload | Pendiente |
| DocumentReviewPanel | Pendiente |
| Validar/rechazar documento | Pendiente |

---

## 69. Sprint 14 — TOS

| Artefacto | Estado |
|---|---|
| TosModule | Pendiente |
| Tablas TOS | Pendiente |
| Contenedor TOS | Pendiente |
| Gate-in/gate-out | Pendiente |
| Bloqueos/liberaciones | Pendiente |
| TosDashboardPage | Pendiente |

---

## 70. Sprint 15 — Transporte

| Artefacto | Estado |
|---|---|
| TransportModule | Pendiente |
| Tablas trips/trip_events | Pendiente |
| TripsListPage | Pendiente |
| TripDetailPage | Pendiente |
| Estados viaje | Pendiente |
| POD upload | Pendiente |

---

## 71. Sprint 16 — Almacenamiento

| Artefacto | Estado |
|---|---|
| StorageModule | Pendiente |
| Tablas storage/inventory | Pendiente |
| InventoryListPage | Pendiente |
| ReceiveInventoryForm | Pendiente |
| DispatchForm | Pendiente |
| Bloqueo/despacho | Pendiente |

---

## 72. Sprint 17 — Inspecciones

| Artefacto | Estado |
|---|---|
| InspectionsModule | Pendiente |
| Tablas inspections/checklists | Pendiente |
| InspectionListPage | Pendiente |
| InspectionDetailPage | Pendiente |
| ChecklistRunner | Pendiente |
| ReviewPanel | Pendiente |

---

## 73. Sprint 18 — Dashboards y reportes

| Artefacto | Estado |
|---|---|
| ReportsModule | Pendiente |
| report_definitions | Pendiente |
| Dashboard endpoints | Pendiente |
| ReportsDashboardPage | Pendiente |
| ReportSummaryCard | Pendiente |
| KPIs por perfil | Pendiente |

---

## 74. Sprint 19 — Exportaciones

| Artefacto | Estado |
|---|---|
| report_exports | Pendiente |
| ExportReportDto | Pendiente |
| Exportador CSV | Pendiente |
| ReportExportModal | Pendiente |
| Audit log exportación | Pendiente |
| Archivo exportado protegido | Pendiente |

---

## 75. Sprint 20 — Soporte

| Artefacto | Estado |
|---|---|
| SupportModule | Pendiente |
| support_tickets | Pendiente |
| support_ticket_comments | Pendiente |
| SupportTicketForm | Pendiente |
| SupportTicketsPage | Pendiente |
| SupportTicketDetailPage | Pendiente |

---

## 76. Sprint 21 — QA integral

| Artefacto | Estado |
|---|---|
| Matriz de pruebas E2E | Pendiente |
| Prueba cliente-tienda-admin | Pendiente |
| Prueba RBAC/scopes | Pendiente |
| Prueba pagos/comisiones | Pendiente |
| Prueba auditoría | Pendiente |
| Prueba documentos | Pendiente |
| Registro de bugs | Pendiente |

---

## 77. Sprint 22 — Hardening y documentación

| Artefacto | Estado |
|---|---|
| Swagger completo | Pendiente |
| README final | Pendiente |
| `.env.example` final | Pendiente |
| Guía de seeds | Pendiente |
| Rate limit revisado | Pendiente |
| CORS revisado | Pendiente |
| Demo script | Pendiente |

---

# SECCIÓN M — CHECKLIST DE DEMO TEMPRANA

---

## 78. Artefactos mínimos para demo temprana

La demo temprana está lista cuando existen:

| Artefacto | Obligatorio |
|---|---|
| Home público | Sí |
| Login/register | Sí |
| Roles básicos | Sí |
| Catálogos demo | Sí |
| Tienda demo aprobada | Sí |
| Perfil público de tienda | Sí |
| Servicio demo publicado | Sí |
| Búsqueda de servicios | Sí |
| Detalle de servicio | Sí |
| Solicitud de cotización | Sí |
| Respuesta de cotización | Sí |
| Aprobación de cotización | Sí |
| Orden creada | Sí |
| Pago manual con comprobante | Sí |
| Confirmación de pago | Sí |
| Comisión básica | Sí |
| Audit log crítico | Sí |
| Notificaciones básicas | Sí |
| Dashboard cliente | Sí |
| Dashboard tienda | Sí |
| Dashboard admin | Sí |

---

# SECCIÓN N — CHECKLIST DE MVP COMPLETO

---

## 79. Artefactos mínimos para MVP completo

El MVP completo está listo cuando existen:

| Artefacto | Obligatorio |
|---|---|
| Todo lo de demo temprana | Sí |
| Documentos y evidencias | Sí |
| TOS básico | Sí |
| Transporte | Sí |
| Almacenamiento | Sí |
| Inspecciones | Sí |
| Reportes por perfil | Sí |
| Reportes financieros | Sí |
| Exportaciones CSV | Sí |
| Auditoría de exportaciones | Sí |
| Soporte básico | Recomendado |
| Swagger completo | Sí |
| README final | Sí |
| QA integral | Sí |
| Seeds demo completos | Sí |
| Hardening básico | Sí |
| Sin bugs críticos | Sí |

---

# SECCIÓN O — CHECKLIST DE CIERRE TÉCNICO

---

## 80. Checklist de cierre técnico por módulo

Antes de cerrar un módulo, verificar:

| Criterio | Obligatorio |
|---|---|
| Tablas creadas | Sí |
| Migraciones ejecutan | Sí |
| Seeds si aplica | Sí |
| Module Nest.js creado | Sí |
| Controller creado | Sí |
| Service creado | Sí |
| DTOs creados | Sí |
| Validaciones backend | Sí |
| Guards aplicados | Sí |
| Scopes aplicados | Sí |
| Auditoría aplicada | Si crítico |
| Notificaciones aplicadas | Si aplica |
| Componentes React creados | Sí |
| Hooks creados | Si aplica |
| Servicio API frontend creado | Sí |
| Estados UI creados | Sí |
| Swagger actualizado | Sí |
| Pruebas ejecutadas | Sí |

---

## 81. Checklist de cierre de release MVP

| Criterio | Estado |
|---|---|
| Flujo E2E cliente-tienda-admin funciona | Pendiente |
| Seguridad validada | Pendiente |
| Scopes validados | Pendiente |
| Pagos validados | Pendiente |
| Comisiones validadas | Pendiente |
| Auditoría validada | Pendiente |
| Reportes validados | Pendiente |
| Documentos validados | Pendiente |
| Swagger actualizado | Pendiente |
| README actualizado | Pendiente |
| Seeds demo cargan desde cero | Pendiente |
| No hay bugs críticos | Pendiente |
| Demo final ejecutable | Pendiente |

---

# SECCIÓN P — PROMPT PARA ANTIGRAVITY

---

## 82. Prompt maestro de checklist de artefactos

```text
Actúa como product owner, scrum master, arquitecto full-stack, backend architect Nest.js, frontend architect React.js, database architect MySQL, QA lead, security engineer y auditor técnico del Marketplace Logístico TOS para Puertos Aduaneros.

Usa el documento `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` como checklist maestro de artefactos del proyecto.

Objetivo:
Antes de marcar cualquier módulo, historia, sprint o release como terminado, valida que existan los artefactos mínimos de documentación, frontend, backend, base de datos, seeds, seguridad, auditoría, reportes, QA, Swagger y README.

Reglas obligatorias:
1. No cerrar un módulo si falta su Module, Controller, Service, DTOs, tablas, frontend y pruebas mínimas.
2. No cerrar un endpoint privado si falta auth, permiso o scope.
3. No cerrar una acción crítica si falta audit log.
4. No cerrar un reporte si no respeta permisos y scopes.
5. No cerrar una exportación si no exige motivo y no genera auditoría.
6. No cerrar un upload si no valida tipo, tamaño y permisos.
7. No cerrar frontend si no tiene loading, empty, error y forbidden cuando aplique.
8. No cerrar sprint si faltan artefactos obligatorios definidos en este checklist.
9. No usar Odoo como integración real; solo referencia conceptual.
10. No usar pasarela real ni BI externo en MVP.
11. Mantener estilo visual marketplace tipo Yelp.
12. Validar cada artefacto contra `31_ACCEPTANCE_CRITERIA_MASTER.md`.
13. Validar cada sprint contra `30_SPRINT_ROADMAP.md`.
14. Validar cada historia contra `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.

Antes de iniciar cada sprint, genera:
1. Lista de artefactos a crear.
2. Archivos frontend a crear/modificar.
3. Archivos backend a crear/modificar.
4. Tablas y migraciones requeridas.
5. Seeds requeridos.
6. DTOs requeridos.
7. Endpoints requeridos.
8. Componentes React requeridos.
9. Permisos/scopes requeridos.
10. Eventos de auditoría requeridos.
11. Pruebas requeridas.

Al cerrar cada sprint, genera:
1. Artefactos completados.
2. Artefactos pendientes.
3. Bugs abiertos.
4. Riesgos.
5. Evidencia de pruebas.
6. Decisión: Sprint ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

# SECCIÓN Q — CHECKLIST DE USO DEL DOCUMENTO

---

## 83. Checklist de uso

- [ ] Guardar este documento como `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo junto con `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Usarlo junto con `30_SPRINT_ROADMAP.md`.
- [ ] Usarlo junto con `31_ACCEPTANCE_CRITERIA_MASTER.md`.
- [ ] Revisarlo antes de iniciar cada sprint.
- [ ] Revisarlo antes de cerrar cada sprint.
- [ ] Revisarlo antes de aceptar demo temprana.
- [ ] Revisarlo antes de aceptar MVP completo.
- [ ] Actualizar estados conforme Antigravity genere archivos reales.
- [ ] No cerrar módulos con artefactos obligatorios pendientes.
- [ ] Confirmar que no existe integración real con Odoo, pasarela real ni BI externo en MVP.

---

## 84. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión database | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de validación con roadmap | Sí |
| Listo para usar en Antigravity | Sí, como checklist maestro inicial |

---

# Fin del documento

