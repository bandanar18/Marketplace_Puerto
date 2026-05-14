# 09_FRONTEND_COMPONENT_MAP.md

# Documento Maestro de Mapa de Componentes Frontend React.js
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `09_FRONTEND_COMPONENT_MAP.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnología frontend | React.js |
| Tecnologías relacionadas | Nest.js, MySQL |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md` |
| Tipo de documento | Documento maestro técnico-funcional frontend |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Guiar a Antigravity en la creación, organización y desarrollo de los componentes React.js del marketplace logístico |

---

## 2. Propósito del documento

Este documento define el **mapa maestro de componentes frontend React.js** del Marketplace Logístico TOS para Puertos Aduaneros.

Su objetivo es servir como guía directa para que Antigravity pueda construir el frontend de la plataforma de forma modular, consistente, reutilizable, escalable, responsive y alineada con el sistema visual definido en `08_DESIGN_SYSTEM_MARKETPLACE.md`.

El documento organiza los componentes en grupos funcionales:

1. Componentes base de UI.
2. Layouts públicos y privados.
3. Componentes de autenticación.
4. Componentes de navegación.
5. Componentes del marketplace público.
6. Componentes de búsqueda y filtros.
7. Componentes de tiendas logísticas.
8. Componentes de servicios.
9. Componentes de cotizaciones.
10. Componentes de órdenes.
11. Componentes documentales.
12. Componentes financieros.
13. Componentes de comisiones.
14. Componentes de reportes.
15. Componentes de auditoría.
16. Componentes TOS.
17. Componentes de transporte.
18. Componentes de almacenamiento.
19. Componentes de inspecciones.
20. Componentes de soporte.
21. Componentes de administración.
22. Componentes de permisos y seguridad visual.
23. Componentes de dashboards por perfil.
24. Componentes de estados, badges y feedback.
25. Componentes de pruebas y QA visual.

---

## 3. Objetivo general

Definir una arquitectura clara de componentes React.js para desarrollar el frontend del marketplace logístico, garantizando que cada pantalla, flujo y módulo funcional tenga componentes reutilizables, bien organizados y conectados con rutas, servicios API, permisos, estados visuales y criterios de aceptación.

---

## 4. Objetivos específicos

1. Definir la estructura de carpetas frontend.
2. Definir componentes UI base reutilizables.
3. Definir layouts generales y por perfil.
4. Definir páginas principales por módulo.
5. Definir componentes marketplace.
6. Definir componentes administrativos.
7. Definir componentes de formularios y tablas.
8. Definir componentes de permisos visuales.
9. Definir componentes de dashboards.
10. Definir componentes conectados a endpoints Nest.js.
11. Definir props mínimas por componente crítico.
12. Definir hooks y servicios frontend.
13. Definir componentes de estados: loading, empty, error, forbidden.
14. Definir criterios de aceptación frontend.
15. Definir pruebas mínimas por componente.
16. Servir como prompt maestro para Antigravity.

---

## 5. Principios frontend obligatorios

Antigravity debe respetar los siguientes principios:

1. Crear componentes reutilizables y no duplicar lógica.
2. Separar componentes UI, páginas, layouts, features y servicios.
3. No colocar lógica de negocio crítica en el frontend.
4. Validar formularios en frontend, pero confirmar reglas críticas en backend.
5. No confiar en el frontend como única capa de seguridad.
6. Usar permisos para mostrar u ocultar acciones visuales.
7. Mantener consistencia con el sistema visual.
8. Crear estados loading, empty, error y forbidden.
9. Mantener diseño responsive.
10. No depender de CDN externos para íconos o assets críticos.
11. Usar nombres claros en PascalCase para componentes.
12. Centralizar llamadas API en servicios frontend.
13. Separar hooks reutilizables.
14. Documentar props de componentes importantes.
15. Crear pruebas para componentes críticos.

---

## 6. Estructura recomendada de carpetas frontend

```txt
/frontend-react
  /src
    /app
      App.tsx
      main.tsx
      providers.tsx
    /assets
      /images
      /icons
      /logos
    /components
      /ui
      /layout
      /navigation
      /marketplace
      /dashboard
      /forms
      /tables
      /status
      /documents
      /finance
      /audit
      /tos
      /transport
      /storage
      /inspections
      /support
      /security
    /features
      /auth
      /users
      /roles
      /permissions
      /catalogs
      /actors
      /stores
      /services
      /search
      /quotations
      /orders
      /documents
      /payments
      /commissions
      /reports
      /audit
      /tos
      /transport
      /storage
      /inspections
      /support
    /hooks
    /layouts
    /lib
    /pages
      /public
      /client
      /store
      /admin
      /operator
      /inspector
      /carrier
      /customs-agent
      /auditor
      /support
    /routes
    /services
    /store
    /types
    /utils
    /tests
```

---

## 7. Convenciones de nombres

### 7.1 Componentes

Usar PascalCase.

Ejemplos:

```txt
ServiceResultCard.tsx
StorePublicProfile.tsx
RequestQuoteModal.tsx
DocumentUploader.tsx
RolePermissionMatrix.tsx
```

### 7.2 Hooks

Usar camelCase con prefijo `use`.

```txt
useAuth.ts
usePermissions.ts
useDebounce.ts
useCatalogs.ts
useQuotations.ts
```

### 7.3 Servicios API

Usar nombre del dominio seguido de `Api`.

```txt
authApi.ts
usersApi.ts
storesApi.ts
servicesApi.ts
quotationsApi.ts
ordersApi.ts
paymentsApi.ts
```

### 7.4 Tipos TypeScript

Usar PascalCase.

```txt
User.ts
Store.ts
Service.ts
Quotation.ts
Order.ts
Document.ts
Payment.ts
Permission.ts
```

---

## 8. Componentes UI base obligatorios

| Componente | Carpeta sugerida | Uso principal | Prioridad |
|---|---|---|---|
| `Button` | `/components/ui` | Botones primarios, secundarios y de acción | Alta |
| `Input` | `/components/ui` | Campos de texto | Alta |
| `Select` | `/components/ui` | Selectores de catálogos | Alta |
| `Textarea` | `/components/ui` | Observaciones y descripciones | Alta |
| `Checkbox` | `/components/ui` | Selección múltiple | Media |
| `RadioGroup` | `/components/ui` | Opciones únicas | Media |
| `Modal` | `/components/ui` | Ventanas emergentes | Alta |
| `Drawer` | `/components/ui` | Filtros mobile y menús | Alta |
| `Card` | `/components/ui` | Contenedor base | Alta |
| `Badge` | `/components/ui` | Estados y etiquetas | Alta |
| `Tabs` | `/components/ui` | Navegación interna | Media |
| `Table` | `/components/ui` | Tablas base | Alta |
| `Pagination` | `/components/ui` | Paginación de listados | Alta |
| `Tooltip` | `/components/ui` | Ayuda contextual | Media |
| `Dropdown` | `/components/ui` | Menús desplegables | Alta |
| `Toast` | `/components/ui` | Notificaciones temporales | Alta |
| `Avatar` | `/components/ui` | Imagen de usuario o tienda | Media |
| `Breadcrumbs` | `/components/ui` | Navegación jerárquica | Media |
| `MetricCard` | `/components/ui` | Métricas de dashboards | Alta |
| `LoadingState` | `/components/ui` | Estado cargando | Alta |
| `EmptyState` | `/components/ui` | Estado sin datos | Alta |
| `ErrorState` | `/components/ui` | Estado de error | Alta |
| `ForbiddenState` | `/components/ui` | Estado sin permiso | Alta |

---

## 9. Layouts principales

| Layout | Carpeta sugerida | Perfiles | Descripción |
|---|---|---|---|
| `PublicLayout` | `/layouts` | Público, cliente no autenticado | Home, búsqueda, perfil público, detalle de servicio |
| `AuthLayout` | `/layouts` | Público | Login, registro, recuperación de contraseña |
| `DashboardLayout` | `/layouts` | Usuarios autenticados | Layout base con sidebar, header y contenido |
| `ClientLayout` | `/layouts` | Cliente final | Panel cliente |
| `StoreLayout` | `/layouts` | Tienda logística | Panel proveedor logístico |
| `AdminLayout` | `/layouts` | Superadministrador | Panel administrativo global |
| `OperatorLayout` | `/layouts` | Operador interno | Operación y seguimiento |
| `InspectorLayout` | `/layouts` | Inspector | Inspecciones asignadas |
| `CarrierLayout` | `/layouts` | Transportista | Transporte y viajes |
| `CustomsAgentLayout` | `/layouts` | Agente aduanal | Operaciones aduanales |
| `AuditorLayout` | `/layouts` | Auditor | Auditoría y reportes |
| `SupportLayout` | `/layouts` | Soporte técnico | Tickets e incidencias |

---

## 10. Componentes de navegación

| Componente | Uso | Perfil |
|---|---|---|
| `PublicHeader` | Header público del marketplace | Público |
| `PublicFooter` | Footer público | Público |
| `DashboardHeader` | Header interno privado | Autenticados |
| `DynamicSidebarMenu` | Menú lateral según perfil y permisos | Autenticados |
| `MobileNavigationDrawer` | Menú mobile | Autenticados |
| `ProfileMenu` | Menú del usuario | Autenticados |
| `NotificationBell` | Notificaciones | Autenticados |
| `Breadcrumbs` | Ruta jerárquica | Autenticados |
| `QuickActionsMenu` | Acciones rápidas por perfil | Autenticados |
| `ProfileSwitcher` | Cambio de perfil si aplica | Usuarios multirol |

---

## 11. Componentes de autenticación

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `LoginPage` | `/features/auth/pages` | Pantalla de inicio de sesión |
| `RegisterPage` | `/features/auth/pages` | Registro de usuario |
| `ForgotPasswordPage` | `/features/auth/pages` | Solicitud de recuperación |
| `ResetPasswordPage` | `/features/auth/pages` | Cambio de contraseña |
| `AuthFormContainer` | `/features/auth/components` | Contenedor visual común |
| `LoginForm` | `/features/auth/components` | Formulario login |
| `RegisterForm` | `/features/auth/components` | Formulario registro |
| `PasswordStrengthMeter` | `/features/auth/components` | Medidor de seguridad |
| `ProtectedRoute` | `/components/security` | Protege rutas privadas |
| `SessionProvider` | `/app` | Proveedor de sesión |

### Endpoints relacionados

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /auth/logout`
4. `GET /auth/me`
5. `POST /auth/forgot-password`
6. `POST /auth/reset-password`

---

## 12. Componentes de seguridad visual y permisos

| Componente | Uso | Reglas |
|---|---|---|
| `ProtectedRoute` | Bloquea rutas privadas | Requiere usuario autenticado |
| `PermissionGuard` | Renderiza contenido según permiso | Requiere permiso específico |
| `ActionButtonGuard` | Protege botones críticos | Requiere permiso de acción |
| `RoleGuard` | Protege por rol si aplica | Requiere rol permitido |
| `ProfileGuard` | Protege por perfil | Requiere perfil permitido |
| `ForbiddenState` | Pantalla 403 | Sin permiso |
| `AccessDeniedBanner` | Mensaje inline sin permiso | Acciones no disponibles |
| `DashboardRouterByProfile` | Redirecciona a dashboard correcto | Según perfil principal |

### Regla obligatoria

Estos componentes solo controlan la experiencia visual. El backend Nest.js debe validar siempre los permisos reales.

---

## 13. Componentes del marketplace público

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `HomePage` | `/pages/public` | Página principal pública |
| `HomeHeroSearch` | `/components/marketplace` | Hero con buscador principal |
| `ServiceCategoryGrid` | `/components/marketplace` | Categorías destacadas |
| `FeaturedLogisticsStores` | `/components/marketplace` | Tiendas destacadas |
| `PopularPortsSection` | `/components/marketplace` | Puertos destacados |
| `HowItWorksSection` | `/components/marketplace` | Explicación del flujo |
| `TrustAndSecuritySection` | `/components/marketplace` | Confianza y seguridad |
| `MarketplaceStatsSection` | `/components/marketplace` | Métricas públicas |
| `CallToActionProviderSection` | `/components/marketplace` | CTA para registrar tienda |

### Objetivo

Permitir que el cliente entienda el marketplace, busque servicios y acceda rápidamente a proveedores logísticos.

---

## 14. Componentes de búsqueda y resultados

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `SearchResultsPage` | `/features/search/pages` | Página de resultados |
| `SearchSummaryBar` | `/features/search/components` | Resumen de búsqueda |
| `FilterSidebar` | `/features/search/components` | Filtros desktop |
| `MobileFilterDrawer` | `/features/search/components` | Filtros mobile |
| `SortDropdown` | `/features/search/components` | Ordenamiento |
| `ServiceResultCard` | `/features/search/components` | Card de servicio |
| `StoreResultCard` | `/features/search/components` | Card de tienda |
| `MapPreviewPanel` | `/features/search/components` | Vista conceptual de ubicación |
| `PaginationControls` | `/components/ui` | Paginación |
| `SearchEmptyState` | `/features/search/components` | Sin resultados |

### Filtros requeridos

1. Categoría.
2. Puerto.
3. Terminal.
4. Tipo de carga.
5. Tipo de contenedor.
6. Rango de tarifa.
7. Rating.
8. Tiempo estimado.
9. Tienda verificada.
10. SLA.

### Endpoints relacionados

1. `GET /search/services`
2. `GET /search/stores`
3. `GET /search/categories`

---

## 15. Componentes de tiendas logísticas

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `StoreRegistrationPage` | `/features/stores/pages` | Registro de tienda |
| `StoreRegistrationForm` | `/features/stores/components` | Formulario de tienda |
| `StoreProfilePage` | `/features/stores/pages` | Perfil privado de tienda |
| `StoreProfileForm` | `/features/stores/components` | Edición de perfil |
| `StorePublicProfile` | `/features/stores/components` | Perfil público |
| `StoreHeader` | `/features/stores/components` | Encabezado público |
| `StoreServiceList` | `/features/stores/components` | Servicios publicados |
| `StoreDocumentsPanel` | `/features/stores/components` | Documentos de validación |
| `StoreApprovalPanel` | `/features/stores/components` | Aprobación admin |
| `StoreStatusBadge` | `/features/stores/components` | Estado visual |
| `StoreVerificationBadge` | `/features/stores/components` | Verificación visual |
| `StoreGallery` | `/features/stores/components` | Galería de tienda |

### Endpoints relacionados

1. `POST /stores`
2. `GET /stores`
3. `GET /stores/:id`
4. `GET /stores/:id/public`
5. `PATCH /stores/:id`
6. `PATCH /stores/:id/approve`
7. `PATCH /stores/:id/reject`
8. `PATCH /stores/:id/suspend`

---

## 16. Componentes de servicios logísticos

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `ServiceListPage` | `/features/services/pages` | Listado de servicios |
| `ServiceFormPage` | `/features/services/pages` | Crear/editar servicio |
| `ServiceForm` | `/features/services/components` | Formulario de ficha de servicio |
| `ServiceDetailPage` | `/features/services/pages` | Detalle público del servicio |
| `ServiceHeader` | `/features/services/components` | Encabezado del detalle |
| `ServicePricingBox` | `/features/services/components` | Tarifa y unidad |
| `ServiceDocumentChecklist` | `/features/services/components` | Documentos requeridos |
| `ServiceSlaPanel` | `/features/services/components` | SLA y tiempos |
| `ServiceProviderCard` | `/features/services/components` | Tienda proveedora |
| `ServiceApprovalPanel` | `/features/services/components` | Aprobación admin |
| `ServiceStatusBadge` | `/features/services/components` | Estado visual |
| `RelatedServicesSection` | `/features/services/components` | Servicios relacionados |

### Endpoints relacionados

1. `POST /services`
2. `GET /services`
3. `GET /services/:id`
4. `PATCH /services/:id`
5. `PATCH /services/:id/approve`
6. `PATCH /services/:id/publish`
7. `PATCH /services/:id/pause`

---

## 17. Componentes de cotizaciones

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `RequestQuoteModal` | `/features/quotations/components` | Modal de solicitud rápida |
| `QuotationListPage` | `/features/quotations/pages` | Listado de cotizaciones |
| `QuotationForm` | `/features/quotations/components` | Formulario de solicitud |
| `QuotationDetailPage` | `/features/quotations/pages` | Detalle de cotización |
| `QuotationDetail` | `/features/quotations/components` | Resumen visual |
| `QuotationStatusBadge` | `/features/quotations/components` | Estado visual |
| `QuotationResponseForm` | `/features/quotations/components` | Respuesta de tienda |
| `QuotationSummaryCard` | `/features/quotations/components` | Resumen financiero |
| `QuotationDocumentPanel` | `/features/quotations/components` | Documentos asociados |
| `QuotationActionsPanel` | `/features/quotations/components` | Aprobar, rechazar, convertir |
| `QuotationTimeline` | `/features/quotations/components` | Historial de estados |

### Endpoints relacionados

1. `POST /quotations`
2. `GET /quotations`
3. `GET /quotations/:id`
4. `PATCH /quotations/:id/respond`
5. `PATCH /quotations/:id/approve`
6. `PATCH /quotations/:id/reject`
7. `POST /quotations/:id/convert-to-order`

---

## 18. Componentes de órdenes de servicio

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `OrderListPage` | `/features/orders/pages` | Listado de órdenes |
| `OrderDetailPage` | `/features/orders/pages` | Detalle de orden |
| `OrderTimeline` | `/features/orders/components` | Línea de tiempo |
| `OrderStatusBadge` | `/features/orders/components` | Estado visual |
| `OrderTaskList` | `/features/orders/components` | Tareas relacionadas |
| `OrderEvidencePanel` | `/features/orders/components` | Evidencias |
| `OrderDocumentPanel` | `/features/orders/components` | Documentos |
| `OrderFinancialSummary` | `/features/orders/components` | Pago y comisión |
| `OrderActionsPanel` | `/features/orders/components` | Iniciar, cerrar, cancelar |
| `OrderStatusForm` | `/features/orders/components` | Cambio de estado |

### Endpoints relacionados

1. `GET /orders`
2. `GET /orders/:id`
3. `PATCH /orders/:id/status`
4. `PATCH /orders/:id/start`
5. `PATCH /orders/:id/close`
6. `PATCH /orders/:id/cancel`

---

## 19. Componentes documentales

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `DocumentListPage` | `/features/documents/pages` | Listado documental |
| `DocumentUploader` | `/components/documents` | Carga de documentos |
| `DocumentList` | `/components/documents` | Lista de documentos |
| `DocumentViewer` | `/components/documents` | Visualización de documento |
| `DocumentStatusBadge` | `/components/documents` | Estado documental |
| `DocumentValidationPanel` | `/components/documents` | Validar o rechazar |
| `DocumentVersionHistory` | `/components/documents` | Versiones |
| `EvidenceUploader` | `/components/documents` | Carga de evidencias |
| `EvidenceGallery` | `/components/documents` | Evidencias visuales |
| `DocumentRejectReasonBox` | `/components/documents` | Motivo de rechazo |

### Endpoints relacionados

1. `POST /documents`
2. `GET /documents/:id`
3. `PATCH /documents/:id/validate`
4. `PATCH /documents/:id/reject`
5. `GET /documents/by-order/:orderId`

---

## 20. Componentes financieros y pagos

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `PaymentListPage` | `/features/payments/pages` | Listado de pagos |
| `PaymentSummaryCard` | `/components/finance` | Resumen de pago |
| `PaymentForm` | `/components/finance` | Registro de pago |
| `PaymentReceiptUploader` | `/components/finance` | Comprobante |
| `PaymentStatusBadge` | `/components/finance` | Estado financiero |
| `PaymentAdminPanel` | `/components/finance` | Confirmación y revisión |
| `FinancialBreakdownTable` | `/components/finance` | Desglose de montos |
| `PaymentMethodSelect` | `/components/finance` | Método de pago |

### Endpoints relacionados

1. `POST /payments`
2. `GET /payments`
3. `GET /payments/:id`
4. `PATCH /payments/:id/confirm`
5. `PATCH /payments/:id/reconcile`

---

## 21. Componentes de comisiones

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `CommissionConfigPage` | `/features/commissions/pages` | Configuración de reglas |
| `CommissionRuleForm` | `/components/finance` | Formulario de regla |
| `CommissionSummaryCard` | `/components/finance` | Resumen de comisión |
| `CommissionReportTable` | `/components/finance` | Reporte de comisiones |
| `CommissionCalculationPreview` | `/components/finance` | Vista previa del cálculo |
| `ProviderNetAmountCard` | `/components/finance` | Neto proveedor |

### Endpoints relacionados

1. `GET /commission-rules`
2. `POST /commission-rules`
3. `PATCH /commission-rules/:id`
4. `GET /commissions`
5. `POST /commissions/calculate`

---

## 22. Componentes de reportes

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `ReportsDashboard` | `/features/reports/pages` | Dashboard de reportes |
| `ReportFilterPanel` | `/features/reports/components` | Filtros de reporte |
| `ReportDataTable` | `/features/reports/components` | Datos tabulares |
| `ReportExportButton` | `/features/reports/components` | Exportación |
| `ReportMetricCard` | `/features/reports/components` | Métricas |
| `ReportDateRangePicker` | `/features/reports/components` | Rango de fechas |
| `ExportFormatSelector` | `/features/reports/components` | PDF/Excel |
| `ExportHistoryTable` | `/features/reports/components` | Historial de exportación |

### Endpoints relacionados

1. `GET /reports/summary`
2. `GET /reports/orders`
3. `GET /reports/payments`
4. `GET /reports/commissions`
5. `GET /reports/export`

---

## 23. Componentes de auditoría

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `AuditDashboard` | `/features/audit/pages` | Dashboard de auditoría |
| `AuditTimeline` | `/components/audit` | Línea de tiempo |
| `AuditLogTable` | `/components/audit` | Tabla de logs |
| `AuditFilterPanel` | `/components/audit` | Filtros |
| `AuditDetailDrawer` | `/components/audit` | Detalle lateral |
| `CriticalEventBadge` | `/components/audit` | Criticidad |
| `AuditEntityLink` | `/components/audit` | Link a entidad afectada |
| `AuditValueDiff` | `/components/audit` | Valor anterior vs nuevo |

### Endpoints relacionados

1. `GET /audit-logs`
2. `GET /audit-logs/:id`
3. `GET /audit-logs/by-entity/:entityType/:entityId`

---

## 24. Componentes TOS básico

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `TosDashboard` | `/features/tos/pages` | Dashboard TOS |
| `ContainerList` | `/components/tos` | Lista de contenedores |
| `ContainerStatusBadge` | `/components/tos` | Estado del contenedor |
| `ContainerDetailDrawer` | `/components/tos` | Detalle rápido |
| `YardSummaryCard` | `/components/tos` | Resumen de patio |
| `TosMoveForm` | `/components/tos` | Registro de movimiento |
| `GateEventPanel` | `/components/tos` | Gate-in/gate-out |
| `ContainerLocationBadge` | `/components/tos` | Ubicación |

### Endpoints relacionados

1. `POST /tos/containers`
2. `GET /tos/containers`
3. `PATCH /tos/containers/:id/location`
4. `POST /tos/moves`
5. `PATCH /tos/containers/:id/block`
6. `PATCH /tos/containers/:id/release`

---

## 25. Componentes de transporte

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `TransportDashboard` | `/features/transport/pages` | Dashboard transporte |
| `TripList` | `/components/transport` | Listado de viajes |
| `TripForm` | `/components/transport` | Crear/editar viaje |
| `TripStatusBadge` | `/components/transport` | Estado del viaje |
| `VehicleSelector` | `/components/transport` | Selector de vehículo |
| `DriverSelector` | `/components/transport` | Selector de conductor |
| `RouteSummaryCard` | `/components/transport` | Resumen de ruta |
| `DeliveryEvidenceUploader` | `/components/transport` | Evidencia de entrega |

### Endpoints relacionados

1. `POST /trips`
2. `GET /trips`
3. `PATCH /trips/:id/assign`
4. `PATCH /trips/:id/start`
5. `PATCH /trips/:id/complete`

---

## 26. Componentes de almacenamiento

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `StorageDashboard` | `/features/storage/pages` | Dashboard almacén |
| `InventoryTable` | `/components/storage` | Inventario |
| `StorageLocationSelector` | `/components/storage` | Selector de ubicación |
| `StorageMovementForm` | `/components/storage` | Movimiento interno |
| `DispatchForm` | `/components/storage` | Despacho |
| `WarehouseSummaryCard` | `/components/storage` | Métricas de almacén |
| `StorageStatusBadge` | `/components/storage` | Estado de inventario |

### Endpoints relacionados

1. `POST /storage/receipts`
2. `GET /storage/items`
3. `PATCH /storage/items/:id/location`
4. `POST /storage/movements`
5. `POST /storage/dispatches`

---

## 27. Componentes de inspecciones

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `InspectionDashboard` | `/features/inspections/pages` | Dashboard inspecciones |
| `InspectionList` | `/components/inspections` | Lista de inspecciones |
| `InspectionForm` | `/components/inspections` | Crear/programar inspección |
| `InspectionChecklist` | `/components/inspections` | Checklist |
| `InspectionEvidenceUploader` | `/components/inspections` | Evidencias |
| `InspectionResultPanel` | `/components/inspections` | Resultado |
| `InspectionStatusBadge` | `/components/inspections` | Estado |
| `InspectionActPreview` | `/components/inspections` | Vista previa de acta |

### Endpoints relacionados

1. `POST /inspections`
2. `PATCH /inspections/:id/schedule`
3. `PATCH /inspections/:id/assign`
4. `POST /inspections/:id/results`
5. `POST /inspections/:id/evidences`

---

## 28. Componentes de soporte técnico

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `SupportDashboard` | `/features/support/pages` | Dashboard soporte |
| `TicketList` | `/components/support` | Listado de tickets |
| `TicketForm` | `/components/support` | Crear ticket |
| `TicketDetail` | `/components/support` | Detalle del ticket |
| `TicketStatusBadge` | `/components/support` | Estado |
| `TicketMessageThread` | `/components/support` | Conversación |
| `TicketPriorityBadge` | `/components/support` | Prioridad |
| `SupportSlaCard` | `/components/support` | SLA |

### Endpoints relacionados

1. `POST /support/tickets`
2. `GET /support/tickets`
3. `PATCH /support/tickets/:id/status`
4. `POST /support/tickets/:id/messages`

---

## 29. Componentes de administración

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `AdminDashboard` | `/pages/admin` | Panel global |
| `AdminDataTable` | `/components/tables` | Tabla administrativa base |
| `UserManagementPage` | `/features/users/pages` | Usuarios |
| `RoleManagementPage` | `/features/roles/pages` | Roles |
| `PermissionManagementPage` | `/features/permissions/pages` | Permisos |
| `CatalogManager` | `/features/catalogs/components` | Catálogos |
| `ActorMatrixTable` | `/features/actors/components` | Actores |
| `StoreApprovalQueue` | `/features/stores/components` | Cola de aprobación |
| `ServiceApprovalQueue` | `/features/services/components` | Cola de servicios |
| `GlobalSettingsPage` | `/features/settings/pages` | Configuración global |

---

## 30. Componentes de dashboards por perfil

| Dashboard | Perfil | Componentes principales |
|---|---|---|
| `ClientDashboard` | Cliente final | `MetricCard`, `RecentQuotationsList`, `ActiveOrdersPanel`, `PendingDocumentsPanel`, `PaymentSummaryCard` |
| `StoreDashboard` | Tienda logística | `StorePerformanceCards`, `QuotationRequestsPanel`, `AssignedOrdersPanel`, `ServiceStatusSummary`, `ReviewSummaryCard` |
| `AdminDashboard` | Superadministrador | `GlobalMetricsGrid`, `StoresApprovalPanel`, `ServicesApprovalPanel`, `FinancialSummaryPanel`, `AuditAlertsPanel` |
| `OperatorDashboard` | Operador interno | `OperationalOrdersPanel`, `DocumentReviewQueue`, `StatusAlertPanel`, `TosSummaryCard` |
| `InspectorDashboard` | Inspector | `InspectionList`, `InspectionStatusSummary`, `InspectionEvidencePanel` |
| `CarrierDashboard` | Transportista | `TripList`, `VehicleSummaryCard`, `DeliveryEvidenceUploader` |
| `CustomsAgentDashboard` | Agente aduanal | `CustomsOrderList`, `DocumentReviewQueue`, `CustomsStatusSummary` |
| `AuditorDashboard` | Auditor | `AuditLogTable`, `CriticalEventsCard`, `ReportExportButton` |
| `SupportDashboard` | Soporte técnico | `TicketList`, `SupportSlaCard`, `TicketPriorityBadge` |

---

## 31. Componentes de estados visuales y badges

| Componente | Uso |
|---|---|
| `StatusBadge` | Estado genérico |
| `StoreStatusBadge` | Estado de tienda |
| `ServiceStatusBadge` | Estado de servicio |
| `QuotationStatusBadge` | Estado de cotización |
| `OrderStatusBadge` | Estado de orden |
| `DocumentStatusBadge` | Estado documental |
| `PaymentStatusBadge` | Estado financiero |
| `ContainerStatusBadge` | Estado TOS |
| `TripStatusBadge` | Estado de viaje |
| `InspectionStatusBadge` | Estado de inspección |
| `TicketStatusBadge` | Estado de soporte |
| `CriticalEventBadge` | Criticidad de auditoría |
| `VerificationBadge` | Verificación de tienda o servicio |

---

## 32. Servicios API frontend

| Servicio | Archivo sugerido | Endpoints relacionados |
|---|---|---|
| Auth API | `authApi.ts` | `/auth` |
| Users API | `usersApi.ts` | `/users` |
| Roles API | `rolesApi.ts` | `/roles` |
| Permissions API | `permissionsApi.ts` | `/permissions` |
| Catalogs API | `catalogsApi.ts` | `/catalogs` |
| Actors API | `actorsApi.ts` | `/actors` |
| Stores API | `storesApi.ts` | `/stores` |
| Services API | `servicesApi.ts` | `/services` |
| Search API | `searchApi.ts` | `/search` |
| Quotations API | `quotationsApi.ts` | `/quotations` |
| Orders API | `ordersApi.ts` | `/orders` |
| Documents API | `documentsApi.ts` | `/documents` |
| Payments API | `paymentsApi.ts` | `/payments` |
| Commissions API | `commissionsApi.ts` | `/commissions` |
| Reports API | `reportsApi.ts` | `/reports` |
| Audit API | `auditApi.ts` | `/audit-logs` |
| TOS API | `tosApi.ts` | `/tos` |
| Transport API | `transportApi.ts` | `/trips` |
| Storage API | `storageApi.ts` | `/storage` |
| Inspections API | `inspectionsApi.ts` | `/inspections` |
| Support API | `supportApi.ts` | `/support/tickets` |

---

## 33. Hooks frontend recomendados

| Hook | Uso |
|---|---|
| `useAuth` | Usuario autenticado, token, logout |
| `usePermissions` | Validar permisos visuales |
| `useProfile` | Perfil principal del usuario |
| `useCatalogs` | Cargar catálogos maestros |
| `useDebounce` | Búsquedas con retraso |
| `useSearchFilters` | Estado de filtros de búsqueda |
| `usePagination` | Paginación reusable |
| `useModal` | Manejo de modales |
| `useToast` | Notificaciones visuales |
| `useQuotations` | Cotizaciones |
| `useOrders` | Órdenes |
| `useDocuments` | Documentos |
| `useReports` | Reportes |
| `useAuditLogs` | Auditoría |

---

## 34. Tipos TypeScript principales

| Tipo | Archivo sugerido | Uso |
|---|---|---|
| `User` | `/types/User.ts` | Usuario del sistema |
| `UserProfile` | `/types/UserProfile.ts` | Perfil funcional |
| `Role` | `/types/Role.ts` | Rol |
| `Permission` | `/types/Permission.ts` | Permiso |
| `Store` | `/types/Store.ts` | Tienda logística |
| `Service` | `/types/Service.ts` | Servicio logístico |
| `Quotation` | `/types/Quotation.ts` | Cotización |
| `Order` | `/types/Order.ts` | Orden |
| `Document` | `/types/Document.ts` | Documento |
| `Payment` | `/types/Payment.ts` | Pago |
| `Commission` | `/types/Commission.ts` | Comisión |
| `Report` | `/types/Report.ts` | Reporte |
| `AuditLog` | `/types/AuditLog.ts` | Log de auditoría |
| `CatalogItem` | `/types/CatalogItem.ts` | Ítem de catálogo |
| `ApiResponse` | `/types/ApiResponse.ts` | Respuesta API |
| `PaginatedResponse` | `/types/PaginatedResponse.ts` | Respuesta paginada |

---

## 35. Rutas frontend principales

| Ruta | Página | Perfil |
|---|---|---|
| `/` | `HomePage` | Público |
| `/search` | `SearchResultsPage` | Público / cliente |
| `/stores/:id` | `StorePublicProfilePage` | Público |
| `/services/:id` | `ServiceDetailPage` | Público |
| `/login` | `LoginPage` | Público |
| `/register` | `RegisterPage` | Público |
| `/dashboard/client` | `ClientDashboard` | Cliente final |
| `/dashboard/store` | `StoreDashboard` | Tienda logística |
| `/admin` | `AdminDashboard` | Superadministrador |
| `/operator` | `OperatorDashboard` | Operador interno |
| `/inspector` | `InspectorDashboard` | Inspector |
| `/carrier` | `CarrierDashboard` | Transportista |
| `/customs-agent` | `CustomsAgentDashboard` | Agente aduanal |
| `/auditor` | `AuditorDashboard` | Auditor |
| `/support` | `SupportDashboard` | Soporte técnico |
| `/client/quotations` | `QuotationListPage` | Cliente final |
| `/store/quotations` | `QuotationListPage` | Tienda logística |
| `/orders/:id` | `OrderDetailPage` | Según permiso |
| `/admin/catalogs` | `CatalogManagerPage` | Superadministrador |
| `/admin/audit` | `AuditDashboard` | Superadministrador / Auditor |
| `/403` | `ForbiddenStatePage` | Todos |

---

## 36. Props mínimas de componentes críticos

### 36.1 `ServiceResultCard`

```ts
interface ServiceResultCardProps {
  serviceId: string;
  serviceName: string;
  categoryName: string;
  storeName: string;
  rating?: number;
  reviewCount?: number;
  priceFrom?: number;
  unitMeasure?: string;
  estimatedTime?: string;
  slaLabel?: string;
  status: string;
  onViewDetail: (serviceId: string) => void;
  onRequestQuote: (serviceId: string) => void;
}
```

### 36.2 `StoreResultCard`

```ts
interface StoreResultCardProps {
  storeId: string;
  storeName: string;
  storeType: string;
  rating?: number;
  reviewCount?: number;
  verified: boolean;
  locationLabel?: string;
  serviceCategories: string[];
  averageResponseTime?: string;
  onViewProfile: (storeId: string) => void;
  onRequestQuote: (storeId: string) => void;
}
```

### 36.3 `RequestQuoteModal`

```ts
interface RequestQuoteModalProps {
  open: boolean;
  serviceId?: string;
  storeId?: string;
  onClose: () => void;
  onSubmitSuccess: (quotationId: string) => void;
}
```

### 36.4 `StatusBadge`

```ts
interface StatusBadgeProps {
  status: string;
  label?: string;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}
```

---

## 37. Estados obligatorios por componente de datos

Todo componente que consulte API debe manejar:

1. `idle`.
2. `loading`.
3. `success`.
4. `empty`.
5. `error`.
6. `forbidden`.

Componentes aplicables:

1. Listados.
2. Tablas.
3. Dashboards.
4. Detalles.
5. Formularios con envío.
6. Modales con API.
7. Reportes.
8. Auditoría.

---

## 38. Reglas de responsive frontend

1. En mobile, el sidebar debe convertirse en drawer.
2. En mobile, los filtros deben abrirse en drawer o modal.
3. En mobile, las cards ocupan el ancho completo.
4. En mobile, las tablas pueden convertirse en cards o scroll horizontal.
5. En desktop, los filtros de búsqueda deben estar visibles lateralmente.
6. En desktop, dashboards pueden usar grid de métricas.
7. Formularios complejos deben agruparse por secciones.
8. Modales deben ser legibles en pantallas pequeñas.

---

## 39. Reglas de accesibilidad frontend

1. Formularios deben tener labels visibles.
2. Botones de ícono deben tener `aria-label`.
3. Estados no deben depender solo del color.
4. Modales deben tener botón visible para cerrar.
5. Mensajes de error deben estar cerca del campo.
6. Inputs obligatorios deben indicarse.
7. Imágenes deben tener texto alternativo.
8. Contraste visual debe ser suficiente.
9. El usuario debe poder navegar con teclado en flujos básicos.
10. Tablas deben tener encabezados claros.

---

## 40. Pruebas frontend mínimas

| Grupo | Pruebas mínimas |
|---|---|
| Autenticación | Login renderiza, validación de campos, redirección por perfil |
| Permisos | `PermissionGuard` oculta acciones sin permiso |
| Búsqueda | Renderiza resultados, aplica filtros, muestra empty state |
| Servicios | Card renderiza datos principales, botón cotizar funciona |
| Tiendas | Perfil público renderiza servicios y rating |
| Cotizaciones | Modal valida campos y envía solicitud |
| Órdenes | Timeline muestra estados correctos |
| Documentos | Uploader valida tipo y muestra estado |
| Pagos | Card muestra montos y estado financiero |
| Auditoría | Tabla filtra y muestra logs |
| Responsive | Sidebar mobile, filtros mobile, cards mobile |

---

## 41. Criterios de aceptación frontend general

El frontend se considera aceptado cuando:

1. La estructura de carpetas está organizada por dominios.
2. Los componentes UI base son reutilizables.
3. Los layouts públicos y privados funcionan.
4. Las rutas privadas están protegidas.
5. Los menús cambian según perfil y permisos.
6. El home permite buscar servicios.
7. La página de búsqueda muestra filtros y resultados.
8. Las cards de servicio y tienda son claras.
9. El perfil público de tienda funciona.
10. El modal de cotización permite crear solicitud.
11. Los dashboards muestran métricas por perfil.
12. Las tablas administrativas tienen filtros y paginación.
13. Los documentos se pueden cargar visualmente.
14. Los estados se muestran con badges consistentes.
15. Los errores, empty states y loading states están implementados.
16. La interfaz es responsive.
17. Las acciones críticas respetan permisos visuales.
18. Los componentes críticos tienen pruebas.
19. No se copian marcas, colores exactos ni diseños protegidos de terceros.
20. No se depende de CDN externos para assets críticos.

---

## 42. Relación con documentos maestros

| Documento | Relación |
|---|---|
| `01_PRODUCT_VISION.md` | Define visión y alcance general |
| `02_MVP_SCOPE.md` | Define qué componentes son MVP |
| `03_ANTIGRAVITY_RULES.md` | Define reglas de implementación |
| `05_USER_PROFILES.md` | Define dashboards, menús y perfiles |
| `06_MODULE_PROFILE_ACCESS_MATRIX.md` | Define permisos y accesos visuales |
| `07_FUNCTIONAL_MODULES_CATALOG.md` | Define módulos funcionales |
| `08_DESIGN_SYSTEM_MARKETPLACE.md` | Define diseño visual, UI y UX |
| `10_NAVIGATION_AND_MENUS.md` | Definirá navegación detallada |
| `13_API_SPECIFICATION.md` | Definirá contratos API finales |

---

## 43. Tareas técnicas para Antigravity

### 43.1 Estructura base

1. Crear estructura de carpetas frontend.
2. Crear componentes UI base.
3. Crear layouts.
4. Crear sistema de rutas.
5. Crear provider de autenticación.
6. Crear provider de permisos.
7. Crear servicios API.
8. Crear tipos TypeScript base.

### 43.2 Marketplace público

1. Crear `HomePage`.
2. Crear `HomeHeroSearch`.
3. Crear `SearchResultsPage`.
4. Crear `FilterSidebar`.
5. Crear `ServiceResultCard`.
6. Crear `StoreResultCard`.
7. Crear `StorePublicProfile`.
8. Crear `ServiceDetailPage`.
9. Crear `RequestQuoteModal`.

### 43.3 Dashboards y administración

1. Crear `ClientDashboard`.
2. Crear `StoreDashboard`.
3. Crear `AdminDashboard`.
4. Crear `OperatorDashboard`.
5. Crear `AuditorDashboard`.
6. Crear `AdminDataTable`.
7. Crear `CatalogManager`.
8. Crear `RolePermissionMatrix`.

### 43.4 Operación

1. Crear componentes de cotizaciones.
2. Crear componentes de órdenes.
3. Crear componentes documentales.
4. Crear componentes financieros.
5. Crear componentes de auditoría.
6. Crear componentes TOS básicos.
7. Crear componentes de transporte.
8. Crear componentes de almacenamiento.
9. Crear componentes de inspecciones.

### 43.5 QA frontend

1. Crear pruebas de renderizado.
2. Crear pruebas de permisos visuales.
3. Crear pruebas de formularios.
4. Crear pruebas de rutas protegidas.
5. Crear pruebas de responsive básico.
6. Crear pruebas de estados loading, empty, error.

---

## 44. Prompt sugerido para Antigravity

```text
Actúa como frontend architect senior, desarrollador React.js experto, diseñador UX/UI y QA frontend.

Usa el documento `09_FRONTEND_COMPONENT_MAP.md` como fuente principal para construir el frontend del Marketplace Logístico TOS.

Objetivo:
Crear una arquitectura frontend en React.js organizada por componentes, layouts, páginas, features, hooks, servicios API, tipos TypeScript, rutas protegidas, permisos visuales y pruebas.

Reglas obligatorias:
1. Respetar el sistema visual definido en `08_DESIGN_SYSTEM_MARKETPLACE.md`.
2. Respetar los módulos definidos en `07_FUNCTIONAL_MODULES_CATALOG.md`.
3. Respetar la matriz RBAC definida en `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
4. Respetar los perfiles definidos en `05_USER_PROFILES.md`.
5. Crear componentes reutilizables.
6. No duplicar lógica entre módulos.
7. Centralizar llamadas API en `/services`.
8. Crear hooks reutilizables en `/hooks`.
9. Crear tipos TypeScript en `/types`.
10. Implementar loading, empty, error y forbidden states.
11. Crear diseño responsive.
12. No depender de CDN externos para íconos o assets críticos.
13. No copiar identidad visual de plataformas existentes.
14. Crear pruebas para componentes críticos.

Entregables esperados:
1. Estructura de carpetas frontend.
2. Componentes UI base.
3. Layout público.
4. Layout privado.
5. Rutas públicas y privadas.
6. Componentes marketplace.
7. Componentes de dashboards.
8. Componentes de administración.
9. Componentes de cotizaciones, órdenes, documentos, pagos y auditoría.
10. Hooks frontend.
11. Servicios API frontend.
12. Tipos TypeScript.
13. Pruebas frontend básicas.
14. Documentación de componentes.

Antes de implementar código, genera un plan de componentes por fase y valida dependencias con los módulos del MVP.
```

---

## 45. Checklist de uso en Antigravity

- [ ] Guardar este documento como `09_FRONTEND_COMPONENT_MAP.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `08_DESIGN_SYSTEM_MARKETPLACE.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Crear estructura de carpetas frontend.
- [ ] Crear componentes UI base.
- [ ] Crear layouts.
- [ ] Crear rutas protegidas.
- [ ] Crear componentes marketplace.
- [ ] Crear dashboards por perfil.
- [ ] Crear componentes administrativos.
- [ ] Crear servicios API frontend.
- [ ] Crear hooks.
- [ ] Crear tipos TypeScript.
- [ ] Crear pruebas básicas.
- [ ] Validar responsive.
- [ ] Validar permisos visuales.
- [ ] Confirmar que no se depende de CDN externos para assets críticos.

---

## 46. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica frontend | Sí |
| Pendiente de revisión UX/UI | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

