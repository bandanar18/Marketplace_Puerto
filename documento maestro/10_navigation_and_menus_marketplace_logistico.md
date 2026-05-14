# 10_NAVIGATION_AND_MENUS.md

# Documento Maestro de Navegación y Menús
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `10_NAVIGATION_AND_MENUS.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnología frontend | React.js |
| Tecnologías relacionadas | Nest.js, MySQL |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md` |
| Tipo de documento | Documento maestro frontend, UX y RBAC visual |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Definir la navegación pública, navegación privada, menús por perfil, rutas protegidas, breadcrumbs y comportamiento responsive del marketplace logístico |

---

## 2. Propósito del documento

Este documento define el sistema maestro de **navegación y menús** del Marketplace Logístico TOS para Puertos Aduaneros.

Su objetivo es servir como guía para que Antigravity construya una navegación clara, segura, modular, responsive y alineada con perfiles, permisos y módulos funcionales.

La navegación debe permitir que cada usuario acceda únicamente a las rutas, módulos, acciones y reportes autorizados según su perfil y permisos RBAC.

Este documento cubre:

1. Navegación pública.
2. Navegación privada.
3. Menú lateral por perfil.
4. Menú superior interno.
5. Menú mobile.
6. Breadcrumbs.
7. Rutas públicas.
8. Rutas protegidas.
9. Rutas por perfil.
10. Menús dinámicos según permisos.
11. Accesos rápidos.
12. Notificaciones.
13. Estados de navegación.
14. Página 403.
15. Reglas de seguridad visual.
16. Tablas MySQL sugeridas.
17. Endpoints Nest.js sugeridos.
18. Componentes React.js requeridos.
19. Criterios de aceptación.
20. Prompt para Antigravity.

---

## 3. Objetivo general

Diseñar una arquitectura de navegación y menús para el marketplace logístico que permita a clientes, tiendas logísticas, superadministradores, operadores, inspectores, transportistas, agentes aduanales, auditores y soporte técnico acceder de forma intuitiva, segura y organizada a los módulos que les corresponden.

---

## 4. Objetivos específicos

1. Definir rutas públicas del marketplace.
2. Definir rutas privadas por perfil.
3. Definir menús visibles por perfil.
4. Definir menús dinámicos basados en permisos.
5. Definir navegación responsive mobile y desktop.
6. Definir breadcrumbs por módulo.
7. Definir accesos rápidos por perfil.
8. Definir comportamiento de rutas no autorizadas.
9. Definir comportamiento de rutas inexistentes.
10. Definir estructura de datos para menús.
11. Definir componentes React.js necesarios.
12. Definir endpoints para menús dinámicos.
13. Definir reglas de seguridad visual.
14. Definir criterios de aceptación para navegación.
15. Servir como guía para Antigravity.

---

## 5. Principios de navegación

La navegación debe cumplir los siguientes principios:

1. **Claridad:** cada usuario debe saber dónde está y qué puede hacer.
2. **Seguridad:** los menús no deben mostrar opciones no autorizadas.
3. **Consistencia:** todos los perfiles deben usar patrones similares.
4. **Contexto:** cada módulo debe mostrar breadcrumbs o ruta funcional.
5. **Rapidez:** las acciones frecuentes deben estar cerca del usuario.
6. **Responsive:** la navegación debe funcionar en desktop, tablet y mobile.
7. **Escalabilidad:** los menús deben poder crecer por módulos futuros.
8. **RBAC:** el menú debe obedecer roles, perfiles y permisos.
9. **Separación:** navegación pública y privada deben estar claramente separadas.
10. **Trazabilidad:** accesos críticos deben generar auditoría cuando corresponda.

---

## 6. Tipos de navegación del sistema

| Tipo | Descripción | Usuarios |
|---|---|---|
| Navegación pública | Acceso a home, búsqueda, perfiles públicos, servicios y autenticación | Visitantes, clientes no autenticados |
| Navegación privada | Acceso a dashboards y módulos internos | Usuarios autenticados |
| Navegación por perfil | Menús específicos según perfil principal | Cliente, tienda, admin, operador, inspector, transportista, agente aduanal, auditor, soporte |
| Navegación por permisos | Menús y acciones visibles según permisos RBAC | Todos los usuarios autenticados |
| Navegación contextual | Breadcrumbs, tabs, acciones internas del módulo | Usuarios dentro de módulos |
| Navegación mobile | Header compacto, drawer lateral, filtros en modal | Usuarios en pantallas pequeñas |

---

## 7. Arquitectura general de navegación

```txt
App
├── PublicLayout
│   ├── PublicHeader
│   ├── PublicRoutes
│   └── PublicFooter
│
├── AuthLayout
│   └── AuthRoutes
│
└── DashboardLayout
    ├── DashboardHeader
    ├── DynamicSidebarMenu
    ├── Breadcrumbs
    ├── ProtectedRoutes
    └── ProfileSpecificPages
```

---

## 8. Layouts relacionados con navegación

| Layout | Uso | Componentes principales |
|---|---|---|
| `PublicLayout` | Páginas públicas | `PublicHeader`, `PublicFooter`, `PublicSearchBar` |
| `AuthLayout` | Login, registro y recuperación | `AuthHeader`, `AuthFormContainer` |
| `DashboardLayout` | Base privada autenticada | `DashboardHeader`, `DynamicSidebarMenu`, `Breadcrumbs` |
| `ClientLayout` | Cliente final | Menú cliente, dashboard cliente |
| `StoreLayout` | Tienda logística | Menú tienda, dashboard tienda |
| `AdminLayout` | Superadministrador | Menú global, panel administrativo |
| `OperatorLayout` | Operador interno | Menú operativo |
| `InspectorLayout` | Inspector | Menú inspecciones |
| `CarrierLayout` | Transportista | Menú transporte |
| `CustomsAgentLayout` | Agente aduanal | Menú aduanal |
| `AuditorLayout` | Auditor | Menú auditoría |
| `SupportLayout` | Soporte técnico | Menú soporte |

---

## 9. Componentes React.js de navegación

| Componente | Carpeta sugerida | Descripción |
|---|---|---|
| `PublicHeader` | `/components/navigation` | Header público del marketplace |
| `PublicFooter` | `/components/navigation` | Footer público |
| `PublicSearchBar` | `/components/navigation` | Buscador en header público |
| `DashboardHeader` | `/components/navigation` | Header interno privado |
| `DynamicSidebarMenu` | `/components/navigation` | Menú lateral dinámico por perfil y permisos |
| `MobileNavigationDrawer` | `/components/navigation` | Menú mobile para usuarios autenticados |
| `MobilePublicMenu` | `/components/navigation` | Menú mobile público |
| `Breadcrumbs` | `/components/navigation` | Ruta jerárquica del módulo |
| `ProfileMenu` | `/components/navigation` | Menú de usuario autenticado |
| `ProfileSwitcher` | `/components/navigation` | Selector de perfil si el usuario tiene más de uno |
| `NotificationBell` | `/components/navigation` | Campana de notificaciones |
| `NotificationDropdown` | `/components/navigation` | Lista de notificaciones |
| `QuickActionsMenu` | `/components/navigation` | Acciones rápidas por perfil |
| `ModuleTabs` | `/components/navigation` | Tabs internas de módulo |
| `BackButton` | `/components/navigation` | Botón volver contextual |
| `ForbiddenStatePage` | `/pages/errors` | Página 403 sin permisos |
| `NotFoundPage` | `/pages/errors` | Página 404 |

---

## 10. Navegación pública

### 10.1 Objetivo

Permitir que visitantes y usuarios no autenticados puedan descubrir el marketplace, buscar servicios, ver tiendas, ver detalles de servicios, registrarse o iniciar sesión.

### 10.2 Menú público desktop

| Orden | Label | Ruta | Tipo | Descripción |
|---:|---|---|---|---|
| 1 | Inicio | `/` | Pública | Home del marketplace |
| 2 | Buscar servicios | `/search` | Pública | Página de búsqueda |
| 3 | Categorías | `/categories` | Pública | Categorías de servicios logísticos |
| 4 | Puertos | `/ports` | Pública | Puertos y terminales destacados |
| 5 | Cómo funciona | `/how-it-works` | Pública | Explicación del flujo marketplace |
| 6 | Registrar tienda | `/register-store` | Pública / autenticación requerida al enviar | CTA para proveedores |
| 7 | Iniciar sesión | `/login` | Pública | Login |
| 8 | Crear cuenta | `/register` | Pública | Registro |

### 10.3 Menú público mobile

En mobile, el menú público debe mostrarse mediante `MobilePublicMenu` como drawer o menú desplegable.

Opciones:

1. Inicio.
2. Buscar servicios.
3. Categorías.
4. Puertos.
5. Cómo funciona.
6. Registrar tienda.
7. Iniciar sesión.
8. Crear cuenta.

### 10.4 Header público

Debe incluir:

1. Logo propio del marketplace.
2. Menú principal.
3. Buscador compacto opcional.
4. Botón “Iniciar sesión”.
5. Botón “Crear cuenta”.
6. Botón destacado “Registrar tienda logística”.

---

## 11. Rutas públicas

| Ruta | Página | Layout | Acceso | Descripción |
|---|---|---|---|---|
| `/` | `HomePage` | `PublicLayout` | Público | Página principal |
| `/search` | `SearchResultsPage` | `PublicLayout` | Público | Resultados de búsqueda |
| `/stores/:id` | `StorePublicProfilePage` | `PublicLayout` | Público | Perfil público de tienda |
| `/services/:id` | `ServiceDetailPage` | `PublicLayout` | Público | Detalle de servicio |
| `/categories` | `CategoriesPage` | `PublicLayout` | Público | Categorías de servicios |
| `/ports` | `PortsPage` | `PublicLayout` | Público | Puertos y terminales |
| `/how-it-works` | `HowItWorksPage` | `PublicLayout` | Público | Cómo funciona |
| `/register-store` | `StoreRegistrationLandingPage` | `PublicLayout` | Público | Landing para proveedores |
| `/login` | `LoginPage` | `AuthLayout` | Público | Login |
| `/register` | `RegisterPage` | `AuthLayout` | Público | Registro |
| `/forgot-password` | `ForgotPasswordPage` | `AuthLayout` | Público | Recuperación |
| `/reset-password` | `ResetPasswordPage` | `AuthLayout` | Público con token | Cambio de contraseña |
| `/403` | `ForbiddenStatePage` | `PublicLayout` o `DashboardLayout` | Público/autenticado | Acceso denegado |
| `/404` | `NotFoundPage` | `PublicLayout` | Público | Ruta no encontrada |

---

## 12. Navegación privada general

La navegación privada debe cargarse únicamente cuando el usuario esté autenticado.

### 12.1 Elementos del `DashboardHeader`

1. Nombre del módulo actual.
2. Breadcrumbs compactos.
3. Buscador interno opcional.
4. Botón de acciones rápidas.
5. Campana de notificaciones.
6. Menú de perfil.
7. Selector de tienda si aplica.
8. Selector de perfil si el usuario tiene múltiples perfiles.
9. Botón para abrir drawer mobile.

### 12.2 Elementos del `DynamicSidebarMenu`

1. Logo o ícono compacto.
2. Menú principal por perfil.
3. Agrupación por secciones.
4. Estado activo de ruta.
5. Badges de pendientes si aplica.
6. Colapsar/expandir sidebar.
7. Respetar permisos RBAC.
8. Ocultar módulos sin permiso.

---

## 13. Rutas privadas base por perfil

| Perfil | Ruta base | Dashboard |
|---|---|---|
| Cliente final | `/dashboard/client` | `ClientDashboard` |
| Tienda logística | `/dashboard/store` | `StoreDashboard` |
| Superadministrador | `/admin` | `AdminDashboard` |
| Operador interno | `/operator` | `OperatorDashboard` |
| Inspector | `/inspector` | `InspectorDashboard` |
| Transportista | `/carrier` | `CarrierDashboard` |
| Agente aduanal | `/customs-agent` | `CustomsAgentDashboard` |
| Auditor | `/auditor` | `AuditorDashboard` |
| Soporte técnico | `/support` | `SupportDashboard` |

---

# 14. Menús privados por perfil

---

## 14.1 Menú Cliente final

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard | `/dashboard/client` | dashboard | `dashboard.view_client` | Resumen del cliente |
| 2 | Buscar servicios | `/search` | search | `search.use` | Buscar servicios logísticos |
| 3 | Mis cotizaciones | `/client/quotations` | quotation | `quotations.view` | Cotizaciones solicitadas |
| 4 | Mis órdenes | `/client/orders` | orders | `orders.view` | Órdenes del cliente |
| 5 | Mis documentos | `/client/documents` | documents | `documents.view` | Documentos cargados |
| 6 | Mis pagos | `/client/payments` | payments | `payments.view` | Pagos y comprobantes |
| 7 | Mis reviews | `/client/reviews` | star | `reviews.view` | Calificaciones realizadas |
| 8 | Reportes | `/client/reports` | reports | `reports.view` | Reportes propios |
| 9 | Soporte | `/client/support` | support | `support.create_ticket` | Solicitudes de soporte |
| 10 | Mi perfil | `/client/profile` | user | `users.update` | Datos personales |

### Acciones rápidas del cliente

1. Solicitar cotización.
2. Cargar documento.
3. Registrar pago.
4. Ver órdenes activas.
5. Crear ticket.

---

## 14.2 Menú Tienda logística

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard | `/dashboard/store` | dashboard | `dashboard.view_store` | Resumen de tienda |
| 2 | Mi tienda | `/store/profile` | store | `stores.update_own` | Perfil de la tienda |
| 3 | Mis servicios | `/store/services` | services | `services.view` | Servicios publicados |
| 4 | Crear servicio | `/store/services/new` | plus | `services.create` | Nueva ficha de servicio |
| 5 | Cotizaciones recibidas | `/store/quotations` | quotation | `quotations.view` | Solicitudes de clientes |
| 6 | Órdenes asignadas | `/store/orders` | orders | `orders.view` | Órdenes de la tienda |
| 7 | Documentos | `/store/documents` | documents | `documents.view` | Documentos y evidencias |
| 8 | Pagos | `/store/payments` | payments | `payments.view` | Pagos relacionados |
| 9 | Comisiones | `/store/commissions` | commissions | `commissions.view` | Comisiones aplicadas |
| 10 | Reviews | `/store/reviews` | star | `reviews.view` | Reviews recibidas |
| 11 | Reportes | `/store/reports` | reports | `reports.view` | Reportes de tienda |
| 12 | Soporte | `/store/support` | support | `support.create_ticket` | Tickets de soporte |

### Acciones rápidas de tienda

1. Crear servicio.
2. Responder cotización.
3. Cargar evidencia.
4. Actualizar orden.
5. Ver perfil público.

---

## 14.3 Menú Superadministrador

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Panel global | `/admin` | dashboard | `dashboard.view_admin` | Métricas globales |
| 2 | Usuarios | `/admin/users` | users | `users.view` | Gestión de usuarios |
| 3 | Roles y permisos | `/admin/roles-permissions` | shield | `roles.view` | RBAC |
| 4 | Perfiles | `/admin/profiles` | profile | `profiles.view` | Perfiles funcionales |
| 5 | Actores | `/admin/actors` | network | `actors.view` | Matriz de actores |
| 6 | Tiendas | `/admin/stores` | store | `stores.view` | Gestión de tiendas |
| 7 | Servicios | `/admin/services` | services | `services.view` | Gestión de servicios |
| 8 | Cotizaciones | `/admin/quotations` | quotation | `quotations.view` | Control de cotizaciones |
| 9 | Órdenes | `/admin/orders` | orders | `orders.view` | Control de órdenes |
| 10 | Documentos | `/admin/documents` | documents | `documents.view` | Documentación global |
| 11 | Pagos | `/admin/payments` | payments | `payments.view` | Pagos |
| 12 | Comisiones | `/admin/commissions` | commissions | `commissions.view` | Reglas y cálculos |
| 13 | Catálogos | `/admin/catalogs` | catalog | `catalogs.view` | Catálogos maestros |
| 14 | Reportes | `/admin/reports` | reports | `reports.view` | Reportes globales |
| 15 | Auditoría | `/admin/audit` | audit | `audit.view` | Logs y trazabilidad |
| 16 | Reviews | `/admin/reviews` | star | `reviews.moderate` | Moderación |
| 17 | Configuración | `/admin/settings` | settings | `settings.view` | Parámetros globales |
| 18 | Soporte | `/admin/support` | support | `support.view` | Tickets globales |

### Acciones rápidas del superadministrador

1. Aprobar tienda.
2. Aprobar servicio.
3. Crear catálogo.
4. Exportar reporte.
5. Ver eventos críticos.
6. Configurar comisión.

---

## 14.4 Menú Operador interno

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard operativo | `/operator` | dashboard | `dashboard.view_operator` | Resumen operativo |
| 2 | Órdenes | `/operator/orders` | orders | `orders.view` | Órdenes activas |
| 3 | Documentos | `/operator/documents` | documents | `documents.view` | Revisión documental |
| 4 | Estados operativos | `/operator/statuses` | status | `orders.update_status` | Seguimiento de estados |
| 5 | TOS básico | `/operator/tos` | container | `tos.view` | Contenedores y movimientos |
| 6 | Transporte | `/operator/transport` | truck | `transport.view` | Seguimiento transporte |
| 7 | Almacenamiento | `/operator/storage` | warehouse | `storage.view` | Seguimiento almacén |
| 8 | Inspecciones | `/operator/inspections` | inspection | `inspections.view` | Inspecciones |
| 9 | Reportes | `/operator/reports` | reports | `reports.view` | Reportes operativos |
| 10 | Auditoría limitada | `/operator/audit` | audit | `audit.view_limited` | Eventos operativos |

### Acciones rápidas del operador

1. Revisar documentos pendientes.
2. Cambiar estado operativo.
3. Ver órdenes críticas.
4. Registrar observación.

---

## 14.5 Menú Inspector

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard | `/inspector` | dashboard | `dashboard.view_inspector` | Resumen de inspecciones |
| 2 | Mis inspecciones | `/inspector/inspections` | inspection | `inspections.view` | Inspecciones asignadas |
| 3 | Checklists | `/inspector/checklists` | checklist | `inspections.execute` | Checklists |
| 4 | Evidencias | `/inspector/evidences` | documents | `documents.upload` | Fotos y evidencias |
| 5 | Resultados | `/inspector/results` | report | `inspections.execute` | Resultados |
| 6 | Documentos | `/inspector/documents` | documents | `documents.view` | Documentos relacionados |
| 7 | Reportes | `/inspector/reports` | reports | `reports.view` | Reportes propios |
| 8 | Mi perfil | `/inspector/profile` | user | `users.update` | Perfil inspector |

### Acciones rápidas del inspector

1. Iniciar inspección.
2. Cargar evidencia.
3. Emitir resultado.
4. Cerrar inspección.

---

## 14.6 Menú Transportista

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard | `/carrier` | dashboard | `dashboard.view_carrier` | Resumen transporte |
| 2 | Servicios | `/carrier/services` | services | `services.view` | Servicios de transporte |
| 3 | Cotizaciones | `/carrier/quotations` | quotation | `quotations.view` | Cotizaciones de transporte |
| 4 | Órdenes | `/carrier/orders` | orders | `orders.view` | Órdenes asignadas |
| 5 | Viajes | `/carrier/trips` | route | `transport.view` | Viajes |
| 6 | Vehículos | `/carrier/vehicles` | truck | `transport.view` | Flota |
| 7 | Conductores | `/carrier/drivers` | user | `transport.view` | Conductores |
| 8 | Evidencias | `/carrier/evidences` | documents | `documents.upload` | Evidencias de entrega |
| 9 | Pagos | `/carrier/payments` | payments | `payments.view` | Pagos relacionados |
| 10 | Comisiones | `/carrier/commissions` | commissions | `commissions.view` | Comisiones |
| 11 | Reportes | `/carrier/reports` | reports | `reports.view` | Reportes de transporte |

### Acciones rápidas del transportista

1. Crear viaje.
2. Asignar conductor.
3. Asignar vehículo.
4. Cargar evidencia de entrega.
5. Cerrar viaje.

---

## 14.7 Menú Agente aduanal

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard | `/customs-agent` | dashboard | `dashboard.view_customs_agent` | Resumen aduanal |
| 2 | Servicios aduanales | `/customs-agent/services` | services | `services.view` | Servicios publicados |
| 3 | Cotizaciones | `/customs-agent/quotations` | quotation | `quotations.view` | Cotizaciones aduanales |
| 4 | Órdenes | `/customs-agent/orders` | orders | `orders.view` | Órdenes aduanales |
| 5 | Documentos | `/customs-agent/documents` | documents | `documents.view` | Documentos aduaneros |
| 6 | Estados aduaneros | `/customs-agent/statuses` | status | `orders.update_status` | Seguimiento aduanal |
| 7 | Evidencias | `/customs-agent/evidences` | documents | `documents.upload` | Evidencias |
| 8 | Pagos | `/customs-agent/payments` | payments | `payments.view` | Pagos relacionados |
| 9 | Comisiones | `/customs-agent/commissions` | commissions | `commissions.view` | Comisiones |
| 10 | Reportes | `/customs-agent/reports` | reports | `reports.view` | Reportes aduanales |

### Acciones rápidas del agente aduanal

1. Validar documentos.
2. Responder cotización.
3. Registrar observación.
4. Cambiar estado aduanero.
5. Cargar evidencia.

---

## 14.8 Menú Auditor

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard auditoría | `/auditor` | dashboard | `dashboard.view_auditor` | Resumen de auditoría |
| 2 | Logs | `/auditor/logs` | audit | `audit.view` | Logs del sistema |
| 3 | Reportes | `/auditor/reports` | reports | `reports.view` | Reportes autorizados |
| 4 | Cotizaciones | `/auditor/quotations` | quotation | `quotations.view` | Consulta |
| 5 | Órdenes | `/auditor/orders` | orders | `orders.view` | Consulta |
| 6 | Documentos | `/auditor/documents` | documents | `documents.view` | Consulta documental |
| 7 | Pagos | `/auditor/payments` | payments | `payments.view` | Consulta financiera |
| 8 | Comisiones | `/auditor/commissions` | commissions | `commissions.view` | Consulta de comisiones |
| 9 | Usuarios | `/auditor/users` | users | `users.view` | Consulta limitada |
| 10 | Exportaciones | `/auditor/exports` | export | `reports.export_excel` | Exportación autorizada |

### Acciones rápidas del auditor

1. Filtrar logs críticos.
2. Exportar auditoría.
3. Revisar cambios financieros.
4. Revisar cambios de permisos.
5. Revisar documentos rechazados.

---

## 14.9 Menú Soporte técnico

| Orden | Label | Ruta | Icono sugerido | Permiso | Descripción |
|---:|---|---|---|---|---|
| 1 | Dashboard soporte | `/support` | dashboard | `dashboard.view_support` | Resumen soporte |
| 2 | Tickets | `/support/tickets` | support | `support.view` | Tickets |
| 3 | Crear ticket | `/support/tickets/new` | plus | `support.create_ticket` | Nuevo ticket |
| 4 | Usuarios | `/support/users` | users | `users.view` | Consulta para soporte |
| 5 | Incidencias | `/support/incidents` | alert | `support.view` | Incidencias |
| 6 | Base de conocimiento | `/support/knowledge-base` | docs | `support.view` | Ayuda interna |
| 7 | Reportes | `/support/reports` | reports | `reports.view` | Reportes soporte |
| 8 | Escalaciones | `/support/escalations` | alert | `support.assign` | Escalaciones |

### Acciones rápidas de soporte

1. Crear ticket.
2. Asignar ticket.
3. Escalar incidencia.
4. Cerrar ticket.
5. Consultar usuario.

---

## 15. Menús agrupados por secciones

Para evitar menús demasiado largos, el sidebar debe agruparse por secciones.

### 15.1 Secciones sugeridas para Superadministrador

1. **Panel**
   - Panel global.

2. **Gestión de usuarios**
   - Usuarios.
   - Roles y permisos.
   - Perfiles.

3. **Marketplace**
   - Tiendas.
   - Servicios.
   - Reviews.

4. **Operación**
   - Cotizaciones.
   - Órdenes.
   - Documentos.

5. **Finanzas**
   - Pagos.
   - Comisiones.

6. **Configuración**
   - Catálogos.
   - Actores.
   - Configuración global.

7. **Control**
   - Reportes.
   - Auditoría.

8. **Soporte**
   - Tickets.

### 15.2 Secciones sugeridas para Tienda logística

1. **Panel**
   - Dashboard.

2. **Mi tienda**
   - Mi tienda.
   - Mis servicios.

3. **Operación**
   - Cotizaciones recibidas.
   - Órdenes asignadas.
   - Documentos.
   - Evidencias.

4. **Finanzas**
   - Pagos.
   - Comisiones.

5. **Reputación**
   - Reviews.

6. **Soporte**
   - Soporte.

### 15.3 Secciones sugeridas para Cliente final

1. **Marketplace**
   - Buscar servicios.

2. **Mis operaciones**
   - Mis cotizaciones.
   - Mis órdenes.
   - Mis documentos.

3. **Finanzas**
   - Mis pagos.

4. **Actividad**
   - Mis reviews.
   - Reportes.

5. **Cuenta**
   - Mi perfil.
   - Soporte.

---

## 16. Breadcrumbs por módulo

### 16.1 Regla general

Todo módulo privado debe mostrar breadcrumbs.

Formato:

```txt
Dashboard > Módulo > Submódulo > Detalle
```

### 16.2 Ejemplos

| Pantalla | Breadcrumb |
|---|---|
| Detalle de cotización cliente | `Dashboard cliente > Mis cotizaciones > Cotización #COT-0001` |
| Detalle de orden tienda | `Dashboard tienda > Órdenes asignadas > Orden #ORD-0001` |
| Aprobación de tienda | `Panel global > Tiendas > Revisión de tienda` |
| Configuración de comisión | `Panel global > Comisiones > Reglas de comisión` |
| Auditoría de entidad | `Dashboard auditoría > Logs > Orden #ORD-0001` |
| Inspección asignada | `Dashboard inspector > Mis inspecciones > Inspección #INS-0001` |

---

## 17. Tabs internas por módulo

Algunos módulos deben usar tabs para organizar información interna.

### 17.1 Detalle de tienda

Tabs sugeridas:

1. Resumen.
2. Servicios.
3. Documentos.
4. Reviews.
5. Órdenes.
6. Auditoría.

### 17.2 Detalle de servicio

Tabs sugeridas:

1. Información.
2. Tarifas.
3. Documentos requeridos.
4. SLA.
5. Reglas.
6. Auditoría.

### 17.3 Detalle de cotización

Tabs sugeridas:

1. Resumen.
2. Líneas.
3. Documentos.
4. Respuesta de tienda.
5. Historial.
6. Auditoría.

### 17.4 Detalle de orden

Tabs sugeridas:

1. Resumen.
2. Timeline.
3. Documentos.
4. Evidencias.
5. Pagos.
6. Comisiones.
7. Auditoría.

---

## 18. Accesos rápidos por perfil

| Perfil | Accesos rápidos |
|---|---|
| Cliente final | Solicitar cotización, cargar documento, registrar pago, ver órdenes activas, crear ticket |
| Tienda logística | Crear servicio, responder cotización, cargar evidencia, actualizar orden, ver perfil público |
| Superadministrador | Aprobar tienda, aprobar servicio, crear catálogo, exportar reporte, ver eventos críticos |
| Operador interno | Revisar documentos, cambiar estado, ver órdenes críticas, registrar observación |
| Inspector | Iniciar inspección, cargar evidencia, emitir resultado, cerrar inspección |
| Transportista | Crear viaje, asignar conductor, asignar vehículo, cargar entrega, cerrar viaje |
| Agente aduanal | Validar documentos, responder cotización, registrar observación, cambiar estado aduanero |
| Auditor | Filtrar logs, exportar auditoría, revisar pagos, revisar permisos |
| Soporte técnico | Crear ticket, asignar ticket, escalar incidencia, cerrar ticket |

---

## 19. Notificaciones en navegación

### 19.1 Tipos de notificaciones

1. Cotización respondida.
2. Cotización aprobada.
3. Cotización rechazada.
4. Orden creada.
5. Orden actualizada.
6. Documento pendiente.
7. Documento rechazado.
8. Pago confirmado.
9. Servicio aprobado.
10. Tienda aprobada.
11. Review recibida.
12. Ticket respondido.
13. Evento crítico de auditoría.

### 19.2 Comportamiento visual

1. Mostrar contador en `NotificationBell`.
2. Mostrar lista corta en dropdown.
3. Permitir marcar como leída.
4. Permitir navegar al detalle.
5. No mostrar notificaciones de otros usuarios.
6. Respetar alcance del perfil.

---

## 20. Reglas para rutas protegidas

### 20.1 Reglas generales

1. Si el usuario no está autenticado, redirigir a `/login`.
2. Si el usuario está autenticado pero no tiene permiso, redirigir a `/403` o mostrar `ForbiddenState`.
3. Si la ruta no existe, mostrar `/404`.
4. Si el usuario tiene múltiples perfiles, redirigir según perfil activo.
5. Si el perfil no tiene dashboard definido, redirigir a una página de selección de perfil.
6. El frontend debe ocultar rutas no permitidas, pero el backend debe validar permisos.

### 20.2 Comportamiento de `ProtectedRoute`

```txt
Usuario sin token -> /login
Usuario con token inválido -> /login
Usuario con token válido y sin permiso -> /403
Usuario con token válido y permiso -> Renderiza componente
```

### 20.3 Comportamiento de `DashboardRouterByProfile`

| Perfil principal | Redirección |
|---|---|
| Cliente final | `/dashboard/client` |
| Tienda logística | `/dashboard/store` |
| Superadministrador | `/admin` |
| Operador interno | `/operator` |
| Inspector | `/inspector` |
| Transportista | `/carrier` |
| Agente aduanal | `/customs-agent` |
| Auditor | `/auditor` |
| Soporte técnico | `/support` |

---

## 21. Estados visuales de navegación

| Estado | Comportamiento |
|---|---|
| Activo | Menú resaltado |
| Hover | Cambio visual suave |
| Disabled | Menú visible pero no accionable, solo si conviene mostrarlo |
| Oculto | No se muestra por falta de permiso |
| Badge pendiente | Muestra cantidad de pendientes |
| Colapsado | Sidebar reducido a iconos |
| Expandido | Sidebar completo |
| Loading | Skeleton de menú mientras carga permisos |
| Error | Mensaje si no se puede cargar menú |
| Forbidden | Acceso denegado |

---

## 22. Navegación responsive

### 22.1 Desktop

1. Sidebar fijo o colapsable.
2. Header interno visible.
3. Breadcrumbs visibles.
4. Menú agrupado por secciones.
5. Acciones rápidas visibles en header.

### 22.2 Tablet

1. Sidebar colapsable.
2. Breadcrumbs compactos.
3. Menú puede mostrarse como drawer.
4. Acciones rápidas en dropdown.

### 22.3 Mobile

1. Sin sidebar fijo.
2. `MobileNavigationDrawer` para menú.
3. Header compacto.
4. Breadcrumbs reducidos o reemplazados por botón volver.
5. Filtros en drawer.
6. Acciones rápidas en botón flotante o dropdown.

---

## 23. Estructura de datos sugerida para menús

```ts
interface NavigationItem {
  id: string;
  label: string;
  route: string;
  icon?: string;
  requiredPermission?: string;
  requiredProfile?: string;
  section?: string;
  order: number;
  badgeKey?: string;
  children?: NavigationItem[];
  visibleInMenu: boolean;
  status: 'active' | 'inactive';
}
```

---

## 24. Tablas MySQL sugeridas

### 24.1 Tabla `navigation_menus`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `menu_code` | VARCHAR(50) | Código del menú |
| `menu_name` | VARCHAR(120) | Nombre del menú |
| `profile_code` | VARCHAR(50) | Perfil asociado |
| `description` | TEXT | Descripción |
| `status` | VARCHAR(30) | Estado |
| `created_at` | DATETIME | Fecha de creación |
| `updated_at` | DATETIME | Fecha de actualización |

### 24.2 Tabla `navigation_menu_items`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `menu_id` | BIGINT | Menú relacionado |
| `parent_id` | BIGINT NULL | Ítem padre si existe |
| `item_code` | VARCHAR(50) | Código del ítem |
| `label` | VARCHAR(120) | Texto visible |
| `route` | VARCHAR(200) | Ruta frontend |
| `icon_name` | VARCHAR(80) | Nombre del icono |
| `required_permission` | VARCHAR(100) | Permiso requerido |
| `required_profile` | VARCHAR(50) | Perfil requerido |
| `section_name` | VARCHAR(120) | Agrupación visual |
| `order_index` | INT | Orden |
| `visible_in_menu` | BOOLEAN | Visible en menú |
| `status` | VARCHAR(30) | Estado |

### 24.3 Tabla `user_navigation_preferences`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `user_id` | BIGINT | Usuario |
| `sidebar_collapsed` | BOOLEAN | Preferencia sidebar |
| `last_route` | VARCHAR(200) | Última ruta visitada |
| `active_profile_code` | VARCHAR(50) | Perfil activo |
| `created_at` | DATETIME | Fecha de creación |
| `updated_at` | DATETIME | Fecha de actualización |

---

## 25. Endpoints Nest.js sugeridos

| Endpoint | Método | Uso | Permiso |
|---|---|---|---|
| `/navigation/me` | GET | Obtener menú del usuario autenticado | Autenticado |
| `/navigation/profile/:profileCode` | GET | Obtener menú de perfil | `navigation.view` |
| `/navigation/preferences` | GET | Obtener preferencias del usuario | Autenticado |
| `/navigation/preferences` | PATCH | Actualizar preferencias | Autenticado |
| `/admin/navigation/menus` | GET | Listar menús | `navigation.manage` |
| `/admin/navigation/menus` | POST | Crear menú | `navigation.manage` |
| `/admin/navigation/items` | POST | Crear ítem de menú | `navigation.manage` |
| `/admin/navigation/items/:id` | PATCH | Editar ítem | `navigation.manage` |

---

## 26. Servicios API frontend sugeridos

| Servicio | Archivo | Función |
|---|---|---|
| Navigation API | `navigationApi.ts` | Cargar menús y preferencias |
| Auth API | `authApi.ts` | Obtener perfil y permisos |
| Permissions API | `permissionsApi.ts` | Validar permisos |
| Notifications API | `notificationsApi.ts` | Cargar notificaciones |
| Catalogs API | `catalogsApi.ts` | Cargar catálogos para menú si aplica |

---

## 27. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useNavigation` | Cargar menú dinámico |
| `useActiveRoute` | Detectar ruta activa |
| `useBreadcrumbs` | Construir breadcrumbs |
| `useSidebarState` | Colapsar/expandir sidebar |
| `useMobileMenu` | Abrir/cerrar drawer mobile |
| `useQuickActions` | Acciones rápidas por perfil |
| `useNotifications` | Campana y lista de notificaciones |
| `useProfileSwitcher` | Cambio de perfil activo |
| `usePermissions` | Validar permisos visuales |

---

## 28. Seeds iniciales sugeridos

### 28.1 Menú cliente final

```json
[
  { "profile_code": "PROF-CLI-001", "label": "Dashboard", "route": "/dashboard/client", "required_permission": "dashboard.view_client", "section": "Panel", "order": 1 },
  { "profile_code": "PROF-CLI-001", "label": "Buscar servicios", "route": "/search", "required_permission": "search.use", "section": "Marketplace", "order": 2 },
  { "profile_code": "PROF-CLI-001", "label": "Mis cotizaciones", "route": "/client/quotations", "required_permission": "quotations.view", "section": "Mis operaciones", "order": 3 },
  { "profile_code": "PROF-CLI-001", "label": "Mis órdenes", "route": "/client/orders", "required_permission": "orders.view", "section": "Mis operaciones", "order": 4 },
  { "profile_code": "PROF-CLI-001", "label": "Mis documentos", "route": "/client/documents", "required_permission": "documents.view", "section": "Mis operaciones", "order": 5 },
  { "profile_code": "PROF-CLI-001", "label": "Mis pagos", "route": "/client/payments", "required_permission": "payments.view", "section": "Finanzas", "order": 6 }
]
```

### 28.2 Menú tienda logística

```json
[
  { "profile_code": "PROF-TIE-002", "label": "Dashboard", "route": "/dashboard/store", "required_permission": "dashboard.view_store", "section": "Panel", "order": 1 },
  { "profile_code": "PROF-TIE-002", "label": "Mi tienda", "route": "/store/profile", "required_permission": "stores.update_own", "section": "Mi tienda", "order": 2 },
  { "profile_code": "PROF-TIE-002", "label": "Mis servicios", "route": "/store/services", "required_permission": "services.view", "section": "Mi tienda", "order": 3 },
  { "profile_code": "PROF-TIE-002", "label": "Cotizaciones recibidas", "route": "/store/quotations", "required_permission": "quotations.view", "section": "Operación", "order": 4 },
  { "profile_code": "PROF-TIE-002", "label": "Órdenes asignadas", "route": "/store/orders", "required_permission": "orders.view", "section": "Operación", "order": 5 }
]
```

### 28.3 Menú superadministrador

```json
[
  { "profile_code": "PROF-SUP-003", "label": "Panel global", "route": "/admin", "required_permission": "dashboard.view_admin", "section": "Panel", "order": 1 },
  { "profile_code": "PROF-SUP-003", "label": "Usuarios", "route": "/admin/users", "required_permission": "users.view", "section": "Gestión de usuarios", "order": 2 },
  { "profile_code": "PROF-SUP-003", "label": "Roles y permisos", "route": "/admin/roles-permissions", "required_permission": "roles.view", "section": "Gestión de usuarios", "order": 3 },
  { "profile_code": "PROF-SUP-003", "label": "Tiendas", "route": "/admin/stores", "required_permission": "stores.view", "section": "Marketplace", "order": 4 },
  { "profile_code": "PROF-SUP-003", "label": "Servicios", "route": "/admin/services", "required_permission": "services.view", "section": "Marketplace", "order": 5 },
  { "profile_code": "PROF-SUP-003", "label": "Auditoría", "route": "/admin/audit", "required_permission": "audit.view", "section": "Control", "order": 15 }
]
```

---

## 29. Reglas de auditoría de navegación

No toda navegación debe auditarse para evitar exceso de logs. Solo se deben auditar eventos relevantes.

### 29.1 Eventos auditables

1. Acceso a auditoría.
2. Exportación de reportes.
3. Acceso denegado a ruta protegida.
4. Intento no autorizado de acción crítica.
5. Cambio de perfil activo.
6. Cambio de configuración de menú por superadministrador.
7. Acceso a documentos sensibles.
8. Acceso a pagos sensibles.
9. Acceso a configuración global.
10. Consulta de logs críticos.

### 29.2 Eventos no auditables por defecto

1. Clic en menú público.
2. Navegación normal entre páginas públicas.
3. Apertura de sidebar.
4. Cierre de drawer mobile.
5. Cambio visual de pestaña no crítica.

---

## 30. Reglas de permisos visuales

1. Si el usuario no tiene permiso, el ítem de menú debe ocultarse.
2. Si el usuario tiene permiso de consulta, puede ver el módulo pero no acciones críticas.
3. Si el usuario tiene permiso operativo, puede ver botones de crear o editar según alcance.
4. Si el usuario tiene permiso administrativo, puede ver acciones globales.
5. Los botones críticos deben usar `ActionButtonGuard`.
6. Los menús deben usar `PermissionGuard` o un filtro centralizado.
7. El backend siempre debe validar permisos, aunque el frontend oculte opciones.
8. El menú debe actualizarse si cambia el perfil activo.
9. El menú debe actualizarse si cambian los permisos del usuario.
10. En caso de error al cargar permisos, mostrar menú mínimo seguro o pantalla de error.

---

## 31. Página 403 — Acceso denegado

### 31.1 Objetivo

Informar al usuario que no tiene permisos para acceder a una ruta o acción.

### 31.2 Contenido sugerido

1. Título: “Acceso no autorizado”.
2. Mensaje: “No tienes permiso para ver esta sección o ejecutar esta acción”.
3. Botón: “Volver al dashboard”.
4. Botón secundario: “Contactar soporte” si aplica.
5. Código de referencia si el backend devuelve uno.

### 31.3 Componente

`ForbiddenStatePage`

---

## 32. Página 404 — Ruta no encontrada

### 32.1 Objetivo

Informar que la ruta no existe o fue movida.

### 32.2 Contenido sugerido

1. Título: “Página no encontrada”.
2. Mensaje: “La ruta que intentas visitar no existe o fue movida”.
3. Botón: “Ir al inicio”.
4. Botón: “Volver al dashboard” si está autenticado.

### 32.3 Componente

`NotFoundPage`

---

## 33. Criterios de aceptación de navegación

El sistema de navegación se considera aceptado cuando:

1. El header público muestra las rutas principales.
2. El menú público funciona en desktop y mobile.
3. El login redirige al dashboard correcto según perfil.
4. Las rutas privadas requieren autenticación.
5. Las rutas sin permiso muestran 403.
6. Las rutas inexistentes muestran 404.
7. El sidebar privado cambia según perfil.
8. El sidebar oculta ítems sin permiso.
9. Los breadcrumbs se muestran en módulos privados.
10. El menú mobile funciona correctamente.
11. Las acciones rápidas cambian según perfil.
12. Las notificaciones respetan el alcance del usuario.
13. El superadministrador ve menú global completo.
14. El cliente solo ve menú de operaciones propias.
15. La tienda solo ve sus módulos de proveedor.
16. El auditor ve módulos en consulta y auditoría.
17. Soporte no ve finanzas críticas sin permiso.
18. El menú se carga desde datos configurables o estructura centralizada.
19. Los cambios de menú críticos quedan auditados.
20. La navegación es responsive.

---

## 34. Tareas técnicas para Antigravity

### 34.1 Frontend React.js

1. Crear `PublicHeader`.
2. Crear `PublicFooter`.
3. Crear `DashboardHeader`.
4. Crear `DynamicSidebarMenu`.
5. Crear `MobileNavigationDrawer`.
6. Crear `Breadcrumbs`.
7. Crear `ProfileMenu`.
8. Crear `ProfileSwitcher`.
9. Crear `QuickActionsMenu`.
10. Crear `NotificationBell`.
11. Crear `ForbiddenStatePage`.
12. Crear `NotFoundPage`.
13. Crear `DashboardRouterByProfile`.
14. Crear rutas públicas.
15. Crear rutas privadas.
16. Crear rutas por perfil.
17. Implementar lógica de ruta activa.
18. Implementar menú colapsable.
19. Implementar responsive mobile.
20. Implementar pruebas de navegación.

### 34.2 Backend Nest.js

1. Crear endpoint `GET /navigation/me`.
2. Crear endpoint de preferencias de navegación.
3. Crear servicio que resuelva menú por perfil y permisos.
4. Crear validación de permisos para menú.
5. Crear auditoría de cambios críticos de navegación.
6. Crear endpoints admin para gestionar menú si aplica.

### 34.3 Base de datos MySQL

1. Crear tabla `navigation_menus` si se desea menú configurable.
2. Crear tabla `navigation_menu_items`.
3. Crear tabla `user_navigation_preferences`.
4. Crear seeds iniciales por perfil.
5. Crear índices por `profile_code`, `required_permission` y `route`.

### 34.4 QA

1. Probar redirección post-login por perfil.
2. Probar menú cliente.
3. Probar menú tienda.
4. Probar menú superadministrador.
5. Probar menú auditor.
6. Probar rutas sin permiso.
7. Probar rutas inexistentes.
8. Probar breadcrumbs.
9. Probar navegación mobile.
10. Probar ocultamiento de ítems sin permiso.

---

## 35. Prompt sugerido para Antigravity

```text
Actúa como frontend architect senior, experto en React.js, UX/UI, RBAC visual y arquitectura de navegación.

Usa el documento `10_NAVIGATION_AND_MENUS.md` como fuente principal para construir la navegación y los menús del Marketplace Logístico TOS.

Objetivo:
Implementar una navegación pública y privada completa, con menús dinámicos por perfil, rutas protegidas, breadcrumbs, navegación mobile, acciones rápidas, notificaciones y páginas 403/404 usando React.js.

Reglas obligatorias:
1. Respetar los perfiles definidos en `05_USER_PROFILES.md`.
2. Respetar la matriz RBAC definida en `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
3. Respetar los módulos definidos en `07_FUNCTIONAL_MODULES_CATALOG.md`.
4. Respetar el mapa de componentes definido en `09_FRONTEND_COMPONENT_MAP.md`.
5. No mostrar menús ni acciones sin permiso.
6. No confiar solo en frontend para seguridad; el backend debe validar permisos.
7. Crear navegación responsive desktop, tablet y mobile.
8. Crear página 403 para acceso denegado.
9. Crear página 404 para rutas inexistentes.
10. Crear breadcrumbs en módulos privados.
11. Crear menú público sin copiar identidad visual de terceros.
12. No depender de CDN externos para íconos críticos.

Entregables esperados:
1. Rutas públicas.
2. Rutas privadas.
3. Layout público.
4. Layout privado.
5. Header público.
6. Header privado.
7. Sidebar dinámico.
8. Menú mobile.
9. Breadcrumbs.
10. Acciones rápidas por perfil.
11. Notificaciones en navegación.
12. Página 403.
13. Página 404.
14. Servicio frontend de navegación.
15. Hook `useNavigation`.
16. Pruebas de rutas protegidas.
17. Pruebas de menú por perfil.

Antes de implementar, genera un plan dividido en rutas, layouts, componentes, permisos, mobile y QA.
```

---

## 36. Checklist de uso en Antigravity

- [ ] Guardar este documento como `10_NAVIGATION_AND_MENUS.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Validar consistencia con `08_DESIGN_SYSTEM_MARKETPLACE.md`.
- [ ] Validar consistencia con `09_FRONTEND_COMPONENT_MAP.md`.
- [ ] Crear rutas públicas.
- [ ] Crear rutas privadas.
- [ ] Crear menús por perfil.
- [ ] Crear sidebar dinámico.
- [ ] Crear menú mobile.
- [ ] Crear breadcrumbs.
- [ ] Crear acciones rápidas.
- [ ] Crear página 403.
- [ ] Crear página 404.
- [ ] Crear seeds de menú si aplica.
- [ ] Crear pruebas de navegación.
- [ ] Confirmar que el backend valida permisos.

---

## 37. Estado del documento

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

