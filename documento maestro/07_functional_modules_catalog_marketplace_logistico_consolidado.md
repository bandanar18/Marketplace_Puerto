# 07_FUNCTIONAL_MODULES_CATALOG.md

# Documento Maestro de Catálogo de Módulos Funcionales
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `07_FUNCTIONAL_MODULES_CATALOG.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro funcional |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md` |

---

## 2. Propósito del documento

Este documento define el **catálogo maestro de módulos funcionales** que componen el Marketplace Logístico TOS para Puertos Aduaneros.

Su objetivo es servir como fuente de verdad para que Antigravity pueda desarrollar la plataforma de forma modular, ordenada y controlada, convirtiendo cada módulo en:

1. Épicas de desarrollo.
2. Historias de usuario.
3. Tareas frontend React.js.
4. Tareas backend Nest.js.
5. Tareas MySQL.
6. Endpoints API.
7. Componentes visuales.
8. Permisos RBAC.
9. Eventos de auditoría.
10. Pruebas QA.
11. Criterios de aceptación.
12. Entregables por sprint.

---

## 3. Objetivo general

Definir todos los módulos funcionales necesarios para construir el Marketplace Logístico TOS, separando los módulos obligatorios del MVP, los módulos parciales y los módulos de fases posteriores, para permitir que Antigravity ejecute el desarrollo del software final de manera secuencial.

---

## 4. Objetivos específicos

1. Listar los módulos funcionales del marketplace.
2. Definir el objetivo de cada módulo.
3. Clasificar los módulos por prioridad y fase.
4. Determinar qué módulos forman parte del MVP.
5. Determinar qué módulos quedan para fases posteriores.
6. Definir entradas, procesos y salidas por módulo.
7. Definir tablas MySQL recomendadas.
8. Definir endpoints Nest.js sugeridos.
9. Definir componentes React.js sugeridos.
10. Definir permisos RBAC por módulo.
11. Definir reportes asociados.
12. Definir eventos auditables.
13. Definir dependencias entre módulos.
14. Definir criterios de aceptación.
15. Crear una guía directa para prompts de Antigravity.

---

## 5. Principios de diseño modular

Antigravity debe respetar los siguientes principios:

1. Cada módulo debe tener una responsabilidad funcional clara.
2. Cada módulo debe tener sus propias rutas frontend.
3. Cada módulo debe tener endpoints backend separados.
4. Cada módulo debe tener tablas MySQL identificadas.
5. Cada módulo crítico debe tener permisos RBAC.
6. Cada módulo crítico debe registrar auditoría.
7. Cada módulo debe tener pruebas mínimas.
8. Cada módulo debe tener documentación funcional y técnica.
9. Cada módulo debe respetar el alcance MVP.
10. Cada módulo debe poder crecer sin romper otros módulos.

---

## 6. Clasificación de módulos

| Tipo de módulo | Descripción | Ejemplos |
|---|---|---|
| Core | Base del sistema | Usuarios, autenticación, roles, permisos |
| Marketplace | Funciones comerciales del marketplace | Tiendas, servicios, búsqueda, perfil público |
| Operación comercial | Flujo de venta y contratación | Cotizaciones, órdenes |
| Operación documental | Documentos y evidencias | Carga, validación, versionamiento |
| Finanzas | Pagos, comisiones y estados financieros | Pagos, comisiones |
| Operación logística | Funciones TOS y logística | Transporte, almacenamiento, inspecciones |
| Control | Reportes, auditoría y trazabilidad | Reportes, auditoría |
| Administración | Configuración global y catálogos | Catálogos, actores, configuración |
| Soporte | Atención de incidencias | Tickets, SLA, soporte técnico |
| Técnico | APIs, QA, despliegue | Swagger, pruebas, DevOps |

---

## 7. Lista maestra de módulos funcionales

| Nº | Código | Módulo | Tipo | Estado MVP | Prioridad |
|---:|---|---|---|---|---|
| 1 | MOD-USR-001 | Usuarios | Core | Incluido | Alta |
| 2 | MOD-AUT-002 | Autenticación | Core | Incluido | Alta |
| 3 | MOD-ROL-003 | Roles | Seguridad | Incluido | Alta |
| 4 | MOD-PER-004 | Permisos | Seguridad | Incluido | Alta |
| 5 | MOD-CAT-005 | Catálogos maestros | Configuración | Incluido | Alta |
| 6 | MOD-ACT-006 | Actores del ecosistema | Configuración funcional | Incluido como matriz/catálogo | Alta |
| 7 | MOD-STO-007 | Tiendas logísticas | Marketplace | Incluido | Alta |
| 8 | MOD-SER-008 | Servicios logísticos | Marketplace | Incluido | Alta |
| 9 | MOD-SEA-009 | Búsqueda marketplace | Marketplace | Incluido | Alta |
| 10 | MOD-PUB-010 | Perfil público de tienda | Marketplace | Incluido | Alta |
| 11 | MOD-REV-011 | Reviews y ratings | Marketplace | Parcial | Media |
| 12 | MOD-QUO-012 | Cotizaciones | Operación comercial | Incluido | Alta |
| 13 | MOD-ORD-013 | Órdenes de servicio | Operación comercial | Incluido | Alta |
| 14 | MOD-DOC-014 | Documentos y evidencias | Documental | Incluido | Alta |
| 15 | MOD-PAY-015 | Pagos | Finanzas | Incluido referencial/manual | Media |
| 16 | MOD-COM-016 | Comisiones | Finanzas | Incluido | Media |
| 17 | MOD-REP-017 | Reportes | Control | Incluido básico | Media |
| 18 | MOD-AUD-018 | Auditoría | Control | Incluido | Alta |
| 19 | MOD-TOS-019 | TOS básico | Operación portuaria | Parcial | Media |
| 20 | MOD-TRA-020 | Transporte | Operación logística | Parcial | Media |
| 21 | MOD-ALM-021 | Almacenamiento | Operación logística | Parcial | Media |
| 22 | MOD-INS-022 | Inspecciones | Operación logística | Parcial | Media |
| 23 | MOD-SOP-023 | Soporte técnico | Soporte | Posterior / básico | Baja |
| 24 | MOD-CON-024 | Configuración global | Administración | Parcial | Media |
| 25 | MOD-NOT-025 | Notificaciones | Comunicación | Posterior / básico | Baja |
| 26 | MOD-EXP-026 | Exportaciones PDF/Excel | Reportes | Básico | Media |
| 27 | MOD-DAS-027 | Dashboards | UI / Analítica | Incluido | Alta |
| 28 | MOD-API-028 | API y Swagger | Técnico | Incluido | Alta |
| 29 | MOD-QA-029 | QA y pruebas | Calidad | Incluido | Alta |
| 30 | MOD-DEP-030 | Despliegue | DevOps | Cierre MVP | Media |

---

## 8. Módulos obligatorios del MVP

Los módulos mínimos para validar el MVP son:

1. Usuarios.
2. Autenticación.
3. Roles.
4. Permisos.
5. Catálogos maestros.
6. Actores del ecosistema como matriz/catálogo.
7. Tiendas logísticas.
8. Servicios logísticos.
9. Búsqueda marketplace.
10. Perfil público de tienda.
11. Cotizaciones.
12. Órdenes de servicio.
13. Documentos y evidencias básicas.
14. Pagos referenciales o manuales.
15. Comisiones básicas.
16. Reportes básicos.
17. Auditoría básica.
18. Dashboards por perfil.
19. API documentada.
20. QA mínimo.

---

## 9. Módulos parciales o diferidos

Los siguientes módulos pueden existir como estructura inicial o categoría funcional, pero no deben desarrollarse de forma avanzada en el MVP:

1. TOS avanzado.
2. Transporte avanzado.
3. Almacenamiento avanzado.
4. Inspecciones avanzadas.
5. Soporte técnico completo.
6. Notificaciones avanzadas.
7. Exportaciones avanzadas.
8. Integraciones externas.
9. GPS en tiempo real.
10. OCR documental.
11. Facturación fiscal automática.
12. Liquidación automática a proveedores.
13. EDI portuario.
14. Inteligencia artificial de recomendación.

---

# 10. Fichas maestras por módulo funcional

---

## 10.1 MOD-USR-001 — Usuarios

| Campo | Descripción |
|---|---|
| Código | MOD-USR-001 |
| Nombre | Usuarios |
| Tipo | Core |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Cliente final, Tienda logística, Superadministrador, Operador, Auditor, Soporte |
| Objetivo | Administrar usuarios, perfiles, estado, datos básicos y relación con roles |
| Modelo Odoo referencial | `res.users`, `res.partner` |

### Funcionalidades

1. Crear usuario.
2. Consultar usuario.
3. Editar usuario.
4. Activar usuario.
5. Bloquear usuario.
6. Asociar usuario a perfil.
7. Asociar usuario a tienda si aplica.
8. Registrar auditoría de cambios.

### Entradas

1. Nombre.
2. Correo electrónico.
3. Teléfono.
4. Contraseña.
5. Perfil principal.
6. Rol asignado.
7. Estado.

### Procesos

1. Validar datos.
2. Verificar correo único.
3. Crear usuario.
4. Asignar perfil.
5. Asignar rol.
6. Registrar evento de auditoría.

### Salidas

1. Usuario creado.
2. Perfil asociado.
3. Rol asociado.
4. Estado actualizado.
5. Log de auditoría.

### Tablas MySQL

1. `users`.
2. `user_profiles`.
3. `user_roles`.
4. `roles`.
5. `audit_logs`.

### Endpoints Nest.js

1. `GET /users`
2. `GET /users/:id`
3. `POST /users`
4. `PATCH /users/:id`
5. `PATCH /users/:id/block`
6. `PATCH /users/:id/activate`

### Componentes React.js

1. `UserListPage`.
2. `UserForm`.
3. `UserProfileCard`.
4. `UserStatusBadge`.
5. `AdminDataTable`.

### Permisos

1. `users.view`
2. `users.create`
3. `users.update`
4. `users.block`
5. `users.activate`
6. `users.assign_role`

### Eventos de auditoría

1. `user.created`
2. `user.updated`
3. `user.blocked`
4. `user.activated`
5. `user.role.assigned`

### Criterios de aceptación

1. El usuario puede crearse con correo único.
2. El usuario puede asociarse a un perfil.
3. El usuario puede bloquearse y activarse.
4. El backend protege acciones administrativas.
5. Toda acción crítica genera auditoría.

---

## 10.2 MOD-AUT-002 — Autenticación

| Campo | Descripción |
|---|---|
| Código | MOD-AUT-002 |
| Nombre | Autenticación |
| Tipo | Core |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Todos |
| Objetivo | Gestionar registro, login, logout, sesión segura y recuperación de contraseña |
| Modelo Odoo referencial | `res.users` |

### Funcionalidades

1. Registro.
2. Login.
3. Logout.
4. Perfil actual.
5. Recuperación de contraseña.
6. Validación de token.
7. Sesión segura.

### Entradas

1. Email.
2. Contraseña.
3. Token.
4. Datos de usuario.

### Procesos

1. Validar credenciales.
2. Hashear contraseña.
3. Generar JWT.
4. Validar token.
5. Registrar login.
6. Registrar intentos fallidos.

### Salidas

1. Token.
2. Usuario autenticado.
3. Perfil principal.
4. Permisos.
5. Menú dinámico.

### Tablas MySQL

1. `users`.
2. `user_sessions`.
3. `user_roles`.
4. `roles`.
5. `permissions`.
6. `audit_logs`.

### Endpoints Nest.js

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /auth/logout`
4. `GET /auth/me`
5. `POST /auth/forgot-password`
6. `POST /auth/reset-password`

### Componentes React.js

1. `LoginPage`.
2. `RegisterPage`.
3. `ForgotPasswordPage`.
4. `AuthLayout`.
5. `ProtectedRoute`.
6. `SessionProvider`.

### Permisos

1. Público para login.
2. Público para registro.
3. `auth.me` para perfil actual.

### Eventos de auditoría

1. `auth.login`
2. `auth.logout`
3. `auth.failed_login`
4. `auth.password_reset_requested`
5. `auth.password_changed`

### Criterios de aceptación

1. Login correcto genera token.
2. Contraseña no se guarda en texto plano.
3. Rutas privadas requieren autenticación.
4. Intentos fallidos se registran.
5. El usuario autenticado recibe perfil, rol y permisos.

---

## 10.3 MOD-ROL-003 — Roles

| Campo | Descripción |
|---|---|
| Código | MOD-ROL-003 |
| Nombre | Roles |
| Tipo | Seguridad |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Superadministrador, Auditor en consulta |
| Objetivo | Administrar roles funcionales y su relación con usuarios y permisos |
| Modelo Odoo referencial | `res.groups` |

### Funcionalidades

1. Crear rol.
2. Editar rol.
3. Activar o inactivar rol.
4. Asociar permisos.
5. Asignar rol a usuario.
6. Consultar roles.

### Tablas MySQL

1. `roles`.
2. `permissions`.
3. `role_permissions`.
4. `user_roles`.
5. `audit_logs`.

### Endpoints Nest.js

1. `GET /roles`
2. `GET /roles/:id`
3. `POST /roles`
4. `PATCH /roles/:id`
5. `POST /roles/:id/permissions`

### Componentes React.js

1. `RoleListPage`.
2. `RoleForm`.
3. `RolePermissionMatrix`.
4. `PermissionSelector`.

### Permisos

1. `roles.view`
2. `roles.create`
3. `roles.update`
4. `roles.assign_permissions`

### Auditoría

1. `role.created`
2. `role.updated`
3. `role.permission.assigned`
4. `role.permission.removed`

### Criterios de aceptación

1. Solo superadministrador crea roles.
2. Auditor puede consultar si tiene permiso.
3. Cambios de permisos generan auditoría.
4. No se permiten códigos duplicados.

---

## 10.4 MOD-PER-004 — Permisos

| Campo | Descripción |
|---|---|
| Código | MOD-PER-004 |
| Nombre | Permisos |
| Tipo | Seguridad |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Superadministrador, Auditor en consulta |
| Objetivo | Definir acciones autorizadas por módulo, rol, perfil y alcance |
| Modelo Odoo referencial | `ir.model.access`, `ir.rule` |

### Funcionalidades

1. Crear permiso.
2. Consultar permisos.
3. Asociar permiso a módulo.
4. Asociar permiso a rol.
5. Validar permiso en backend.
6. Validar permiso en frontend.

### Tablas MySQL

1. `permissions`.
2. `role_permissions`.
3. `profile_module_access`.
4. `permission_audit_logs`.

### Endpoints Nest.js

1. `GET /permissions`
2. `POST /permissions`
3. `PATCH /permissions/:id`
4. `GET /permissions/me`

### Componentes React.js

1. `PermissionListPage`.
2. `PermissionGuard`.
3. `ActionButtonGuard`.
4. `RolePermissionMatrix`.

### Permisos

1. `permissions.view`
2. `permissions.manage`

### Auditoría

1. `permission.created`
2. `permission.updated`
3. `permission.assigned`
4. `unauthorized.access.attempt`

### Criterios de aceptación

1. Los endpoints críticos validan permisos.
2. El frontend oculta acciones no autorizadas.
3. El backend bloquea acciones no autorizadas.
4. Intentos no autorizados se registran.

---

## 10.5 MOD-CAT-005 — Catálogos maestros

| Campo | Descripción |
|---|---|
| Código | MOD-CAT-005 |
| Nombre | Catálogos maestros |
| Tipo | Configuración |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Superadministrador, usuarios en consulta según módulo |
| Objetivo | Administrar datos maestros mínimos del MVP |
| Modelo Odoo referencial | `product.category`, `uom.uom`, `res.groups`, `ir.model.access` |

### Catálogos mínimos

1. Categorías de servicios.
2. Tipos de tiendas.
3. Tipos de carga.
4. Tipos de contenedores.
5. Tipos de documentos.
6. Estados operativos.
7. Estados financieros.
8. Estados aduaneros.
9. Puertos.
10. Terminales.
11. Tarifas.
12. Comisiones.
13. Roles.
14. Permisos.

### Tablas MySQL

1. `master_catalogs`.
2. `master_catalog_items`.
3. `audit_logs`.

### Endpoints Nest.js

1. `GET /catalogs`
2. `POST /catalogs`
3. `GET /catalogs/:id/items`
4. `POST /catalogs/:id/items`
5. `PATCH /catalogs/:id/items/:itemId`

### Componentes React.js

1. `CatalogManager`.
2. `CatalogItemForm`.
3. `CatalogSelect`.
4. `AdminDataTable`.

### Permisos

1. `catalogs.view`
2. `catalogs.create`
3. `catalogs.update`
4. `catalogs.manage_items`

### Auditoría

1. `catalog.created`
2. `catalog.updated`
3. `catalog.item.created`
4. `catalog.item.updated`
5. `catalog.item.disabled`

### Criterios de aceptación

1. Los catálogos se cargan por seed.
2. El superadministrador puede editarlos.
3. Los ítems usados históricamente no se eliminan físicamente.
4. Los formularios usan catálogos y no valores libres cuando aplique.

---

## 10.6 MOD-ACT-006 — Actores del ecosistema

| Campo | Descripción |
|---|---|
| Código | MOD-ACT-006 |
| Nombre | Actores del ecosistema |
| Tipo | Configuración funcional |
| Estado MVP | Incluido como matriz/catálogo |
| Prioridad | Alta |
| Perfiles | Superadministrador, Auditor, Operador |
| Objetivo | Definir actores logísticos, financieros, regulatorios y administrativos del ecosistema |
| Modelo Odoo referencial | `res.partner`, `res.users`, `mail.message` |

### Actores mínimos

1. Cliente.
2. Importador.
3. Exportador.
4. Agente aduanal.
5. Transportista.
6. Almacén fiscal.
7. Terminal portuaria.
8. Naviera.
9. Aduana.
10. Autoridad portuaria.
11. Inspector.
12. Aseguradora.
13. Banco.
14. Superadministrador.

### Tablas MySQL

1. `ecosystem_actors`.
2. `actor_services`.
3. `actor_documents`.
4. `actor_permissions`.
5. `actor_modules`.

### Endpoints Nest.js

1. `GET /actors`
2. `GET /actors/:id`
3. `GET /actors/:id/services`
4. `GET /actors/:id/documents`

### Componentes React.js

1. `ActorMatrixTable`.
2. `ActorProfileCard`.
3. `ActorDetailPage`.
4. `ActorServiceList`.

### Permisos

1. `actors.view`
2. `actors.manage`

### Auditoría

1. `actor.created`
2. `actor.updated`
3. `actor.service.assigned`
4. `actor.document.assigned`

### Criterios de aceptación

1. Todos los actores mínimos tienen código único.
2. Los actores se relacionan con perfiles.
3. Los actores se pueden usar como catálogo funcional.
4. El MVP opera aunque los reguladores sean referenciales.

---

## 10.7 MOD-STO-007 — Tiendas logísticas

| Campo | Descripción |
|---|---|
| Código | MOD-STO-007 |
| Nombre | Tiendas logísticas |
| Tipo | Marketplace |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Tienda logística, Superadministrador, Auditor consulta |
| Objetivo | Registrar, aprobar, administrar y publicar proveedores logísticos dentro del marketplace |
| Modelo Odoo referencial | `res.partner`, `res.company`, `res.users`, `ir.attachment` |

### Funcionalidades

1. Registro de tienda.
2. Edición de perfil de tienda.
3. Carga de documentos de validación.
4. Aprobación por superadministrador.
5. Rechazo o suspensión.
6. Perfil público de tienda.
7. Asociación con servicios.
8. Asociación con usuarios.

### Tablas MySQL

1. `stores`.
2. `store_users`.
3. `store_documents`.
4. `services`.
5. `documents`.
6. `reviews`.
7. `audit_logs`.

### Endpoints Nest.js

1. `POST /stores`
2. `GET /stores`
3. `GET /stores/:id`
4. `GET /stores/:id/public`
5. `PATCH /stores/:id`
6. `PATCH /stores/:id/approve`
7. `PATCH /stores/:id/reject`
8. `PATCH /stores/:id/suspend`

### Componentes React.js

1. `StoreRegistrationForm`.
2. `StoreProfileForm`.
3. `StorePublicProfile`.
4. `StoreResultCard`.
5. `StoreApprovalPanel`.
6. `StoreDocumentsPanel`.

### Permisos

1. `stores.view`
2. `stores.create`
3. `stores.update_own`
4. `stores.approve`
5. `stores.reject`
6. `stores.suspend`

### Auditoría

1. `store.created`
2. `store.updated`
3. `store.approved`
4. `store.rejected`
5. `store.suspended`
6. `store.document.uploaded`

### Criterios de aceptación

1. Una tienda puede registrarse.
2. La tienda no puede publicar servicios si no está aprobada.
3. El superadministrador puede aprobar o rechazar tiendas.
4. El perfil público muestra datos básicos y servicios.
5. Toda aprobación queda auditada.

---

## 10.8 MOD-SER-008 — Servicios logísticos

| Campo | Descripción |
|---|---|
| Código | MOD-SER-008 |
| Nombre | Servicios logísticos |
| Tipo | Marketplace |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Tienda logística, Cliente final, Superadministrador |
| Objetivo | Crear y administrar fichas de servicios logísticos publicables en el marketplace |
| Modelo Odoo referencial | `product.template`, `product.product`, `product.category`, `uom.uom` |

### Funcionalidades

1. Crear ficha de servicio.
2. Editar servicio propio.
3. Definir categoría.
4. Definir tarifa.
5. Definir unidad de medida.
6. Definir SLA.
7. Definir documentos requeridos.
8. Definir comisión.
9. Aprobar servicio.
10. Publicar servicio.

### Tablas MySQL

1. `services`.
2. `service_categories`.
3. `service_pricing`.
4. `service_documents`.
5. `service_evidences`.
6. `commission_rules`.

### Endpoints Nest.js

1. `POST /services`
2. `GET /services`
3. `GET /services/:id`
4. `PATCH /services/:id`
5. `PATCH /services/:id/approve`
6. `PATCH /services/:id/publish`
7. `PATCH /services/:id/pause`

### Componentes React.js

1. `ServiceForm`.
2. `ServiceResultCard`.
3. `ServiceDetailPage`.
4. `ServiceApprovalPanel`.
5. `ServicePricingForm`.
6. `ServiceDocumentChecklist`.

### Permisos

1. `services.view`
2. `services.create`
3. `services.update_own`
4. `services.approve`
5. `services.publish`
6. `services.pause`

### Auditoría

1. `service.created`
2. `service.updated`
3. `service.price.changed`
4. `service.approved`
5. `service.published`
6. `service.paused`

### Criterios de aceptación

1. Solo tiendas aprobadas pueden crear servicios publicables.
2. Servicios deben tener tarifa, categoría y unidad.
3. Servicios deben pasar por aprobación si aplica.
4. Servicios publicados aparecen en búsqueda.
5. Cambios de tarifa generan auditoría.

---

## 10.9 MOD-SEA-009 — Búsqueda marketplace

| Campo | Descripción |
|---|---|
| Código | MOD-SEA-009 |
| Nombre | Búsqueda marketplace |
| Tipo | Marketplace |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Público, Cliente final, Tienda logística, Superadministrador |
| Objetivo | Permitir buscar, filtrar y comparar servicios y tiendas logísticas |
| Modelo Odoo referencial | `product.template`, `product.category`, `res.partner` |

### Funcionalidades

1. Buscar servicios por texto.
2. Buscar tiendas.
3. Filtrar por categoría.
4. Filtrar por puerto.
5. Filtrar por terminal.
6. Filtrar por tarifa.
7. Filtrar por rating.
8. Ordenar por relevancia.
9. Ver resultados en cards.
10. Acceder al detalle.

### Tablas MySQL

1. `services`.
2. `stores`.
3. `service_categories`.
4. `service_pricing`.
5. `reviews`.
6. `ports`.
7. `terminals`.

### Endpoints Nest.js

1. `GET /search/services`
2. `GET /search/stores`
3. `GET /search/categories`

### Componentes React.js

1. `HomeHeroSearch`.
2. `SearchResultsPage`.
3. `FilterSidebar`.
4. `SortDropdown`.
5. `ServiceResultCard`.
6. `StoreResultCard`.
7. `PaginationControls`.

### Permisos

1. Público para consulta de servicios publicados.
2. `search.use` para acciones autenticadas.

### Auditoría

1. `search.executed` si el usuario está autenticado.
2. `service.viewed`.
3. `store.viewed`.

### Criterios de aceptación

1. El usuario puede buscar servicios publicados.
2. Los filtros funcionan correctamente.
3. Los resultados están paginados.
4. Los servicios no aprobados no aparecen.
5. El detalle puede abrirse desde la card.

---

## 10.10 MOD-PUB-010 — Perfil público de tienda

| Campo | Descripción |
|---|---|
| Código | MOD-PUB-010 |
| Nombre | Perfil público de tienda |
| Tipo | Marketplace |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Público, Cliente final, Tienda logística, Superadministrador |
| Objetivo | Mostrar información comercial, servicios, rating y cotización rápida de una tienda logística |
| Modelo Odoo referencial | `res.partner`, `product.template`, `ir.attachment` |

### Secciones requeridas

1. Header de tienda.
2. Información comercial.
3. Rating y reviews.
4. Badges de verificación.
5. Servicios publicados.
6. Galería de fotos.
7. Ubicación o puertos donde opera.
8. Horarios de atención.
9. Tiempo promedio de respuesta.
10. Botón “Solicitar cotización”.

### Tablas MySQL

1. `stores`.
2. `services`.
3. `reviews`.
4. `ratings`.
5. `store_documents`.

### Endpoints Nest.js

1. `GET /stores/:id/public`
2. `GET /stores/:id/services`
3. `GET /stores/:id/reviews`

### Componentes React.js

1. `StorePublicProfile`.
2. `StoreHeader`.
3. `StoreServiceList`.
4. `RatingStars`.
5. `ReviewList`.
6. `RequestQuoteButton`.

### Permisos

1. Público para tiendas aprobadas.
2. `stores.update_own` para editar perfil propio.

### Auditoría

1. `store.public_profile.viewed` si el usuario está autenticado.
2. `store.profile.updated`.

### Criterios de aceptación

1. Solo tiendas aprobadas tienen perfil público visible.
2. Los servicios pausados no se muestran como disponibles.
3. El cliente puede solicitar cotización desde el perfil.
4. El diseño es responsive.

---

## 10.11 MOD-REV-011 — Reviews y ratings

| Campo | Descripción |
|---|---|
| Código | MOD-REV-011 |
| Nombre | Reviews y ratings |
| Tipo | Marketplace |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Cliente final, Tienda logística, Superadministrador, Auditor consulta |
| Objetivo | Permitir calificar servicios y tiendas después de una orden cerrada |
| Modelo Odoo referencial | `mail.message`, `res.partner` |

### Funcionalidades

1. Crear review.
2. Calificar servicio.
3. Calificar tienda.
4. Calcular rating promedio.
5. Mostrar reviews públicas.
6. Moderar reviews.
7. Responder reviews.

### Tablas MySQL

1. `reviews`.
2. `ratings`.
3. `review_replies`.
4. `orders`.
5. `stores`.

### Endpoints Nest.js

1. `POST /reviews`
2. `GET /stores/:id/reviews`
3. `POST /reviews/:id/reply`
4. `PATCH /reviews/:id/moderate`

### Componentes React.js

1. `RatingStars`.
2. `ReviewForm`.
3. `ReviewList`.
4. `ReviewReplyBox`.
5. `ReviewModerationPanel`.

### Permisos

1. `reviews.create`
2. `reviews.view`
3. `reviews.reply`
4. `reviews.moderate`

### Auditoría

1. `review.created`
2. `review.replied`
3. `review.moderated`
4. `rating.updated`

### Criterios de aceptación

1. Solo clientes con orden cerrada pueden calificar.
2. Cada orden permite una review principal.
3. El rating promedio se actualiza.
4. El superadministrador puede moderar.

---

## 10.12 MOD-QUO-012 — Cotizaciones

| Campo | Descripción |
|---|---|
| Código | MOD-QUO-012 |
| Nombre | Cotizaciones |
| Tipo | Operación comercial |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Cliente final, Tienda logística, Superadministrador, Agente aduanal, Transportista |
| Objetivo | Gestionar solicitudes, respuestas, aprobación, rechazo y conversión de cotizaciones en órdenes |
| Modelo Odoo referencial | `sale.order`, `sale.order.line`, `res.partner` |

### Funcionalidades

1. Crear solicitud de cotización.
2. Adjuntar documentos.
3. Enviar a tienda.
4. Responder cotización.
5. Calcular tarifa.
6. Aprobar cotización.
7. Rechazar cotización.
8. Convertir cotización en orden.
9. Generar PDF referencial.

### Tablas MySQL

1. `quotations`.
2. `quotation_lines`.
3. `quotation_documents`.
4. `quotation_statuses`.
5. `orders`.
6. `audit_logs`.

### Endpoints Nest.js

1. `POST /quotations`
2. `GET /quotations`
3. `GET /quotations/:id`
4. `PATCH /quotations/:id/respond`
5. `PATCH /quotations/:id/approve`
6. `PATCH /quotations/:id/reject`
7. `POST /quotations/:id/convert-to-order`

### Componentes React.js

1. `RequestQuoteModal`.
2. `QuotationForm`.
3. `QuotationDetail`.
4. `QuotationStatusBadge`.
5. `QuotationResponseForm`.
6. `QuotationSummaryCard`.

### Permisos

1. `quotations.view`
2. `quotations.create`
3. `quotations.respond`
4. `quotations.approve`
5. `quotations.reject`
6. `quotations.convert_to_order`

### Auditoría

1. `quotation.created`
2. `quotation.responded`
3. `quotation.approved`
4. `quotation.rejected`
5. `quotation.converted_to_order`

### Criterios de aceptación

1. Cliente puede solicitar cotización.
2. Tienda puede responder cotización dirigida a ella.
3. Cliente puede aprobar o rechazar.
4. Cotización aprobada genera orden.
5. Cada cambio de estado se audita.

---

## 10.13 MOD-ORD-013 — Órdenes de servicio

| Campo | Descripción |
|---|---|
| Código | MOD-ORD-013 |
| Nombre | Órdenes de servicio |
| Tipo | Operación comercial |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Cliente final, Tienda logística, Superadministrador, Operador interno |
| Objetivo | Gestionar ejecución de servicios contratados desde cotizaciones aprobadas |
| Modelo Odoo referencial | `sale.order`, `project.task`, `stock.picking` |

### Funcionalidades

1. Crear orden desde cotización.
2. Consultar orden.
3. Cambiar estado.
4. Asignar responsable.
5. Gestionar tareas.
6. Cargar documentos.
7. Cargar evidencias.
8. Cerrar orden.
9. Cancelar orden.

### Tablas MySQL

1. `orders`.
2. `order_lines`.
3. `order_tasks`.
4. `documents`.
5. `service_evidences`.
6. `audit_logs`.

### Endpoints Nest.js

1. `GET /orders`
2. `GET /orders/:id`
3. `PATCH /orders/:id/status`
4. `PATCH /orders/:id/start`
5. `PATCH /orders/:id/close`
6. `PATCH /orders/:id/cancel`

### Componentes React.js

1. `OrderListPage`.
2. `OrderDetailPage`.
3. `OrderTimeline`.
4. `OrderStatusBadge`.
5. `OrderTaskList`.
6. `OrderEvidencePanel`.

### Permisos

1. `orders.view`
2. `orders.start`
3. `orders.update_status`
4. `orders.close`
5. `orders.cancel`
6. `orders.assign`

### Auditoría

1. `order.created`
2. `order.started`
3. `order.status_changed`
4. `order.closed`
5. `order.cancelled`

### Criterios de aceptación

1. Una orden puede generarse desde cotización aprobada.
2. Cada perfil solo ve órdenes según alcance.
3. Los estados se validan.
4. El cierre requiere evidencia si aplica.
5. Todo cambio de estado se audita.

---

## 10.14 MOD-DOC-014 — Documentos y evidencias

| Campo | Descripción |
|---|---|
| Código | MOD-DOC-014 |
| Nombre | Documentos y evidencias |
| Tipo | Operación documental |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Cliente final, Tienda logística, Operador, Inspector, Agente aduanal |
| Objetivo | Gestionar carga, validación, rechazo, versionamiento y consulta de documentos y evidencias |
| Modelo Odoo referencial | `ir.attachment`, `documents.document` |

### Funcionalidades

1. Cargar documento.
2. Consultar documento.
3. Validar documento.
4. Rechazar documento.
5. Versionar documento.
6. Cargar evidencia.
7. Asociar documento a cotización, orden, servicio o tienda.

### Tablas MySQL

1. `documents`.
2. `document_types`.
3. `document_versions`.
4. `document_validations`.
5. `evidences`.
6. `audit_logs`.

### Endpoints Nest.js

1. `POST /documents`
2. `GET /documents/:id`
3. `PATCH /documents/:id/validate`
4. `PATCH /documents/:id/reject`
5. `GET /documents/by-order/:orderId`

### Componentes React.js

1. `DocumentUploader`.
2. `DocumentList`.
3. `DocumentViewer`.
4. `DocumentStatusBadge`.
5. `EvidenceUploader`.
6. `DocumentValidationPanel`.

### Permisos

1. `documents.view`
2. `documents.upload`
3. `documents.validate`
4. `documents.reject`
5. `documents.version`
6. `documents.download`

### Auditoría

1. `document.uploaded`
2. `document.validated`
3. `document.rejected`
4. `document.versioned`
5. `evidence.uploaded`

### Criterios de aceptación

1. Documento tiene tipo, estado y entidad asociada.
2. Validación genera auditoría.
3. Rechazo requiere motivo.
4. Reemplazo crea nueva versión.
5. El acceso respeta permisos.

---

## 10.15 MOD-PAY-015 — Pagos

| Campo | Descripción |
|---|---|
| Código | MOD-PAY-015 |
| Nombre | Pagos |
| Tipo | Finanzas |
| Estado MVP | Incluido referencial/manual |
| Prioridad | Media |
| Perfiles | Cliente final, Tienda logística consulta, Superadministrador |
| Objetivo | Registrar pagos manuales o referenciales, comprobantes y estados financieros |
| Modelo Odoo referencial | `account.payment`, `account.move`, `account.journal` |

### Funcionalidades

1. Registrar pago.
2. Subir comprobante.
3. Confirmar pago.
4. Consultar pagos.
5. Cambiar estado financiero.
6. Asociar pago a orden.

### Tablas MySQL

1. `payments`.
2. `payment_methods`.
3. `payment_receipts`.
4. `payment_reconciliations`.
5. `orders`.
6. `audit_logs`.

### Endpoints Nest.js

1. `POST /payments`
2. `GET /payments`
3. `GET /payments/:id`
4. `PATCH /payments/:id/confirm`
5. `PATCH /payments/:id/reconcile`

### Componentes React.js

1. `PaymentSummaryCard`.
2. `PaymentForm`.
3. `PaymentReceiptUploader`.
4. `PaymentStatusBadge`.
5. `PaymentAdminPanel`.

### Permisos

1. `payments.view`
2. `payments.create`
3. `payments.confirm`
4. `payments.reconcile`
5. `payments.refund`

### Auditoría

1. `payment.created`
2. `payment.receipt_uploaded`
3. `payment.confirmed`
4. `payment.reconciled`
5. `payment.refunded`

### Criterios de aceptación

1. Cliente puede registrar pago propio.
2. Pago se asocia a orden.
3. Comprobante queda guardado como documento.
4. Confirmación requiere permiso.
5. Cambios financieros se auditan.

---

## 10.16 MOD-COM-016 — Comisiones

| Campo | Descripción |
|---|---|
| Código | MOD-COM-016 |
| Nombre | Comisiones |
| Tipo | Finanzas |
| Estado MVP | Incluido |
| Prioridad | Media |
| Perfiles | Superadministrador, Tienda logística consulta |
| Objetivo | Configurar reglas y calcular comisión del marketplace por servicio u orden |
| Modelo Odoo referencial | `account.move.line`, `account.move` |

### Funcionalidades

1. Crear regla de comisión.
2. Editar regla.
3. Calcular comisión.
4. Calcular neto proveedor.
5. Consultar comisiones.
6. Generar reporte.

### Tablas MySQL

1. `commission_rules`.
2. `commissions`.
3. `commission_logs`.
4. `orders`.
5. `services`.

### Endpoints Nest.js

1. `GET /commission-rules`
2. `POST /commission-rules`
3. `PATCH /commission-rules/:id`
4. `GET /commissions`
5. `POST /commissions/calculate`

### Componentes React.js

1. `CommissionRuleForm`.
2. `CommissionSummaryCard`.
3. `CommissionReportTable`.
4. `CommissionConfigPage`.

### Permisos

1. `commissions.view`
2. `commissions.calculate`
3. `commissions.configure`
4. `commissions.settle`

### Auditoría

1. `commission.rule.created`
2. `commission.rule.updated`
3. `commission.calculated`
4. `commission.settled`

### Criterios de aceptación

1. El sistema calcula comisión desde regla activa.
2. No hay porcentajes hardcodeados en frontend.
3. Cambios de regla se auditan.
4. Tienda puede consultar comisión propia.

---

## 10.17 MOD-REP-017 — Reportes

| Campo | Descripción |
|---|---|
| Código | MOD-REP-017 |
| Nombre | Reportes |
| Tipo | Control |
| Estado MVP | Incluido básico |
| Prioridad | Media |
| Perfiles | Cliente, Tienda, Superadministrador, Auditor |
| Objetivo | Generar reportes operativos, financieros, administrativos y de auditoría |
| Modelo Odoo referencial | `ir.actions.report`, `account.report` |

### Reportes mínimos

1. Reporte de cotizaciones.
2. Reporte de órdenes.
3. Reporte de pagos.
4. Reporte de comisiones.
5. Reporte de tiendas.
6. Reporte de servicios.
7. Reporte de auditoría.

### Tablas MySQL

1. `reports`.
2. `report_templates`.
3. `report_exports`.
4. `orders`.
5. `payments`.
6. `commissions`.
7. `audit_logs`.

### Endpoints Nest.js

1. `GET /reports/summary`
2. `GET /reports/orders`
3. `GET /reports/payments`
4. `GET /reports/commissions`
5. `GET /reports/export`

### Componentes React.js

1. `ReportsDashboard`.
2. `ReportFilterPanel`.
3. `ReportDataTable`.
4. `ReportExportButton`.
5. `MetricCard`.

### Permisos

1. `reports.view`
2. `reports.export_pdf`
3. `reports.export_excel`

### Auditoría

1. `report.generated`
2. `report.exported`
3. `report.viewed`

### Criterios de aceptación

1. Cada perfil ve reportes según permisos.
2. Reportes aplican filtros.
3. Exportación requiere permiso.
4. Exportación se audita.

---

## 10.18 MOD-AUD-018 — Auditoría

| Campo | Descripción |
|---|---|
| Código | MOD-AUD-018 |
| Nombre | Auditoría |
| Tipo | Control |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Superadministrador, Auditor, consulta limitada según perfil |
| Objetivo | Registrar y consultar eventos críticos del sistema |
| Modelo Odoo referencial | `mail.message` |

### Funcionalidades

1. Registrar eventos.
2. Consultar logs.
3. Filtrar por usuario.
4. Filtrar por módulo.
5. Filtrar por entidad.
6. Guardar valor anterior y nuevo.
7. Exportar logs si autorizado.

### Tablas MySQL

1. `audit_logs`.
2. `audit_events`.
3. `audit_entities`.
4. `audit_snapshots`.

### Endpoints Nest.js

1. `GET /audit-logs`
2. `GET /audit-logs/:id`
3. `GET /audit-logs/by-entity/:entityType/:entityId`

### Componentes React.js

1. `AuditTimeline`.
2. `AuditLogTable`.
3. `AuditFilterPanel`.
4. `AuditDetailDrawer`.

### Permisos

1. `audit.view`
2. `audit.export`

### Auditoría propia del módulo

1. `audit.logs.viewed`
2. `audit.logs.exported`
3. `unauthorized.access.attempt`

### Criterios de aceptación

1. Eventos críticos se registran.
2. Auditor puede consultar logs.
3. Cambios financieros y permisos se auditan.
4. Intentos no autorizados se registran.

---

## 10.19 MOD-TOS-019 — TOS básico

| Campo | Descripción |
|---|---|
| Código | MOD-TOS-019 |
| Nombre | TOS básico |
| Tipo | Operación portuaria |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Superadministrador, Operador interno, Terminal portuaria |
| Objetivo | Crear estructura inicial para gestionar contenedores, patios, movimientos y gates de forma básica |
| Modelo Odoo referencial | `stock.location`, `stock.move`, `stock.quant`, `project.task` |

### Funcionalidades MVP parciales

1. Registrar contenedor.
2. Consultar contenedor.
3. Registrar patio o ubicación.
4. Registrar movimiento básico.
5. Registrar bloqueo o liberación referencial.
6. Consultar ocupación básica.

### Tablas MySQL

1. `tos_yards`.
2. `tos_containers`.
3. `tos_moves`.
4. `tos_gates`.
5. `audit_logs`.

### Endpoints Nest.js

1. `POST /tos/containers`
2. `GET /tos/containers`
3. `PATCH /tos/containers/:id/location`
4. `POST /tos/moves`
5. `PATCH /tos/containers/:id/block`
6. `PATCH /tos/containers/:id/release`

### Componentes React.js

1. `TosDashboard`.
2. `ContainerList`.
3. `ContainerStatusBadge`.
4. `YardSummaryCard`.
5. `TosMoveForm`.

### Permisos

1. `tos.view`
2. `tos.create_container`
3. `tos.move_container`
4. `tos.block`
5. `tos.release`

### Auditoría

1. `tos.container.created`
2. `tos.container.moved`
3. `tos.container.blocked`
4. `tos.container.released`

### Criterios de aceptación

1. El MVP tiene estructura TOS básica.
2. Los movimientos generan auditoría.
3. No se implementa mapa avanzado de patio en MVP.
4. Operador y superadministrador pueden consultar.

---

## 10.20 MOD-TRA-020 — Transporte

| Campo | Descripción |
|---|---|
| Código | MOD-TRA-020 |
| Nombre | Transporte |
| Tipo | Operación logística |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Transportista, Tienda logística, Superadministrador, Cliente consulta |
| Objetivo | Gestionar servicios de transporte, viajes, vehículos, conductores y evidencias de entrega |
| Modelo Odoo referencial | `fleet.vehicle`, `res.partner`, `project.task` |

### Funcionalidades MVP parciales

1. Registrar servicio de transporte.
2. Crear viaje básico.
3. Asignar conductor.
4. Asignar vehículo.
5. Actualizar estado de viaje.
6. Cargar evidencia de entrega.

### Tablas MySQL

1. `trips`.
2. `vehicles`.
3. `drivers`.
4. `routes`.
5. `trip_events`.
6. `documents`.

### Endpoints Nest.js

1. `POST /trips`
2. `GET /trips`
3. `PATCH /trips/:id/assign`
4. `PATCH /trips/:id/start`
5. `PATCH /trips/:id/complete`

### Componentes React.js

1. `TransportDashboard`.
2. `TripList`.
3. `TripForm`.
4. `VehicleSelector`.
5. `DriverSelector`.
6. `DeliveryEvidenceUploader`.

### Permisos

1. `transport.view`
2. `transport.create_trip`
3. `transport.assign`
4. `transport.update_status`
5. `transport.close_delivery`

### Auditoría

1. `trip.created`
2. `trip.assigned`
3. `trip.started`
4. `trip.completed`
5. `delivery.evidence.uploaded`

### Criterios de aceptación

1. Transportista puede gestionar viajes propios.
2. Cliente puede consultar estado de transporte relacionado.
3. Evidencia de entrega queda asociada.
4. Cambios de estado se auditan.

---

## 10.21 MOD-ALM-021 — Almacenamiento

| Campo | Descripción |
|---|---|
| Código | MOD-ALM-021 |
| Nombre | Almacenamiento |
| Tipo | Operación logística |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Almacén fiscal, Tienda logística, Operador, Superadministrador |
| Objetivo | Gestionar almacenamiento fiscal básico, ubicaciones, inventario y despacho |
| Modelo Odoo referencial | `stock.location`, `stock.quant`, `stock.picking` |

### Funcionalidades MVP parciales

1. Registrar almacén.
2. Registrar ubicación.
3. Registrar ingreso básico.
4. Consultar inventario básico.
5. Registrar despacho.
6. Calcular permanencia referencial.

### Tablas MySQL

1. `warehouses`.
2. `storage_locations`.
3. `inventory_items`.
4. `storage_movements`.
5. `dispatches`.

### Endpoints Nest.js

1. `POST /storage/receipts`
2. `GET /storage/items`
3. `PATCH /storage/items/:id/location`
4. `POST /storage/movements`
5. `POST /storage/dispatches`

### Componentes React.js

1. `StorageDashboard`.
2. `InventoryTable`.
3. `StorageLocationSelector`.
4. `StorageMovementForm`.
5. `DispatchForm`.

### Permisos

1. `storage.view`
2. `storage.receive`
3. `storage.move`
4. `storage.dispatch`

### Auditoría

1. `storage.received`
2. `storage.moved`
3. `storage.dispatched`
4. `inventory.adjusted`

### Criterios de aceptación

1. Se registra ingreso básico.
2. Se asigna ubicación.
3. Se consulta inventario básico.
4. Despacho genera auditoría.

---

## 10.22 MOD-INS-022 — Inspecciones

| Campo | Descripción |
|---|---|
| Código | MOD-INS-022 |
| Nombre | Inspecciones |
| Tipo | Operación logística |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Inspector, Tienda logística, Cliente consulta, Superadministrador |
| Objetivo | Programar, ejecutar y documentar inspecciones físicas o documentales |
| Modelo Odoo referencial | `quality.check`, `project.task`, `ir.attachment` |

### Funcionalidades MVP parciales

1. Solicitar inspección.
2. Programar inspección.
3. Asignar inspector.
4. Ejecutar checklist básico.
5. Cargar evidencia.
6. Registrar resultado.
7. Emitir acta básica.

### Tablas MySQL

1. `inspections`.
2. `inspection_checklists`.
3. `inspection_results`.
4. `inspection_evidences`.
5. `documents`.

### Endpoints Nest.js

1. `POST /inspections`
2. `PATCH /inspections/:id/schedule`
3. `PATCH /inspections/:id/assign`
4. `POST /inspections/:id/results`
5. `POST /inspections/:id/evidences`

### Componentes React.js

1. `InspectionDashboard`.
2. `InspectionForm`.
3. `InspectionChecklist`.
4. `InspectionEvidenceUploader`.
5. `InspectionResultPanel`.

### Permisos

1. `inspections.view`
2. `inspections.create`
3. `inspections.schedule`
4. `inspections.execute`
5. `inspections.close`

### Auditoría

1. `inspection.created`
2. `inspection.scheduled`
3. `inspection.assigned`
4. `inspection.result.created`
5. `inspection.closed`

### Criterios de aceptación

1. Inspector ve inspecciones asignadas.
2. Evidencias quedan vinculadas.
3. Resultado se registra.
4. Cierre genera auditoría.

---

## 10.23 MOD-SOP-023 — Soporte técnico

| Campo | Descripción |
|---|---|
| Código | MOD-SOP-023 |
| Nombre | Soporte técnico |
| Tipo | Soporte |
| Estado MVP | Fase posterior / básico |
| Prioridad | Baja |
| Perfiles | Soporte técnico, Superadministrador, usuarios solicitantes |
| Objetivo | Gestionar tickets, incidencias, mensajes y SLA de soporte |
| Modelo Odoo referencial | `project.task`, `mail.message`, `res.users` |

### Funcionalidades

1. Crear ticket.
2. Asignar responsable.
3. Responder ticket.
4. Cambiar estado.
5. Escalar incidencia.
6. Medir SLA.
7. Reportar soporte.

### Tablas MySQL

1. `support_tickets`.
2. `support_ticket_messages`.
3. `support_categories`.
4. `support_sla`.

### Endpoints Nest.js

1. `POST /support/tickets`
2. `GET /support/tickets`
3. `PATCH /support/tickets/:id/status`
4. `POST /support/tickets/:id/messages`

### Componentes React.js

1. `SupportDashboard`.
2. `TicketList`.
3. `TicketForm`.
4. `TicketDetail`.
5. `TicketStatusBadge`.

### Permisos

1. `support.view`
2. `support.create_ticket`
3. `support.assign`
4. `support.respond`
5. `support.close`

### Auditoría

1. `ticket.created`
2. `ticket.assigned`
3. `ticket.status_changed`
4. `ticket.closed`

### Criterios de aceptación

1. Usuario puede crear ticket.
2. Soporte puede responder.
3. Cambios de estado se auditan.
4. Soporte no puede modificar pagos ni comisiones sin permiso especial.

---

## 10.24 MOD-CON-024 — Configuración global

| Campo | Descripción |
|---|---|
| Código | MOD-CON-024 |
| Nombre | Configuración global |
| Tipo | Administración |
| Estado MVP | Parcial |
| Prioridad | Media |
| Perfiles | Superadministrador |
| Objetivo | Administrar parámetros generales del marketplace |

### Funcionalidades

1. Configurar nombre del marketplace.
2. Configurar moneda base.
3. Configurar impuestos referenciales.
4. Configurar reglas operativas.
5. Configurar parámetros de búsqueda.
6. Configurar límites de archivos.

### Tablas MySQL

1. `global_settings`.
2. `system_parameters`.
3. `audit_logs`.

### Endpoints Nest.js

1. `GET /settings`
2. `PATCH /settings/:key`

### Componentes React.js

1. `GlobalSettingsPage`.
2. `SettingsForm`.
3. `SystemParameterTable`.

### Permisos

1. `settings.view`
2. `settings.update`

### Auditoría

1. `settings.updated`
2. `system.parameter.changed`

### Criterios de aceptación

1. Solo superadministrador accede a configuración.
2. Cambios quedan auditados.
3. Parámetros críticos no se eliminan sin control.

---

## 10.25 MOD-NOT-025 — Notificaciones

| Campo | Descripción |
|---|---|
| Código | MOD-NOT-025 |
| Nombre | Notificaciones |
| Tipo | Comunicación |
| Estado MVP | Posterior / básico |
| Prioridad | Baja |
| Perfiles | Todos |
| Objetivo | Informar eventos relevantes a los usuarios |

### Funcionalidades iniciales

1. Notificar cotización respondida.
2. Notificar orden creada.
3. Notificar documento rechazado.
4. Notificar pago confirmado.
5. Notificar servicio aprobado.

### Tablas MySQL

1. `notifications`.
2. `notification_templates`.
3. `user_notifications`.

### Endpoints Nest.js

1. `GET /notifications`
2. `PATCH /notifications/:id/read`

### Componentes React.js

1. `NotificationBell`.
2. `NotificationList`.
3. `NotificationItem`.

### Permisos

1. `notifications.view`
2. `notifications.mark_read`

### Auditoría

1. `notification.created`
2. `notification.read`

### Criterios de aceptación

1. Usuario ve sus notificaciones.
2. Puede marcarlas como leídas.
3. No ve notificaciones de otros usuarios.

---

## 10.26 MOD-EXP-026 — Exportaciones PDF/Excel

| Campo | Descripción |
|---|---|
| Código | MOD-EXP-026 |
| Nombre | Exportaciones PDF/Excel |
| Tipo | Reportes |
| Estado MVP | Básico |
| Prioridad | Media |
| Perfiles | Superadministrador, Auditor, perfiles autorizados |
| Objetivo | Exportar reportes, cotizaciones, órdenes y auditoría en formatos descargables |

### Funcionalidades

1. Exportar cotización.
2. Exportar orden.
3. Exportar reporte de pagos.
4. Exportar reporte de comisiones.
5. Exportar logs de auditoría.

### Tablas MySQL

1. `report_exports`.
2. `reports`.
3. `audit_logs`.

### Endpoints Nest.js

1. `GET /exports/quotations/:id/pdf`
2. `GET /exports/orders/:id/pdf`
3. `GET /exports/reports/:id/excel`

### Componentes React.js

1. `ReportExportButton`.
2. `ExportFormatSelector`.
3. `ExportHistoryTable`.

### Permisos

1. `reports.export_pdf`
2. `reports.export_excel`
3. `audit.export`

### Auditoría

1. `export.generated`
2. `report.exported`
3. `audit.exported`

### Criterios de aceptación

1. Exportar requiere permiso.
2. Exportación queda auditada.
3. Archivo generado corresponde al alcance del usuario.

---

## 10.27 MOD-DAS-027 — Dashboards

| Campo | Descripción |
|---|---|
| Código | MOD-DAS-027 |
| Nombre | Dashboards |
| Tipo | UI / Analítica |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Todos según dashboard |
| Objetivo | Mostrar métricas, alertas y accesos rápidos según perfil |

### Dashboards mínimos

1. Dashboard cliente.
2. Dashboard tienda.
3. Dashboard superadministrador.
4. Dashboard operador.
5. Dashboard auditor.

### Componentes React.js

1. `ClientDashboard`.
2. `StoreDashboard`.
3. `AdminDashboard`.
4. `OperatorDashboard`.
5. `AuditorDashboard`.
6. `MetricCard`.
7. `RecentActivityList`.
8. `StatusSummaryPanel`.

### Endpoints Nest.js

1. `GET /dashboard/client`
2. `GET /dashboard/store`
3. `GET /dashboard/admin`
4. `GET /dashboard/operator`
5. `GET /dashboard/auditor`

### Permisos

1. `dashboard.view_client`
2. `dashboard.view_store`
3. `dashboard.view_admin`
4. `dashboard.view_operator`
5. `dashboard.view_auditor`

### Criterios de aceptación

1. Cada perfil entra a su dashboard correcto.
2. Las métricas respetan alcance de datos.
3. El dashboard es responsive.
4. No muestra acciones sin permiso.

---

## 10.28 MOD-API-028 — API y documentación Swagger

| Campo | Descripción |
|---|---|
| Código | MOD-API-028 |
| Nombre | API y documentación Swagger |
| Tipo | Técnico |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Equipo técnico, Superadministrador técnico |
| Objetivo | Documentar endpoints backend y contratos API |

### Funcionalidades

1. Documentar módulos API.
2. Documentar DTOs.
3. Documentar respuestas.
4. Documentar errores.
5. Documentar autenticación.
6. Documentar permisos.

### Entregables

1. Swagger disponible.
2. Agrupación por módulo.
3. DTOs documentados.
4. Códigos de error estándar.
5. Ejemplos de request/response.

### Criterios de aceptación

1. Todo endpoint MVP aparece en Swagger.
2. Endpoints protegidos indican seguridad.
3. DTOs muestran campos obligatorios.
4. Errores comunes están documentados.

---

## 10.29 MOD-QA-029 — QA y pruebas

| Campo | Descripción |
|---|---|
| Código | MOD-QA-029 |
| Nombre | QA y pruebas |
| Tipo | Calidad |
| Estado MVP | Incluido |
| Prioridad | Alta |
| Perfiles | Equipo técnico, QA, Product Owner |
| Objetivo | Validar que los módulos funcionen según criterios de aceptación |

### Pruebas mínimas

1. Pruebas de autenticación.
2. Pruebas RBAC.
3. Pruebas de cotización.
4. Pruebas de orden.
5. Pruebas documentales.
6. Pruebas de pagos.
7. Pruebas de comisiones.
8. Pruebas de auditoría.
9. Pruebas de búsqueda.
10. Pruebas responsive.

### Entregables

1. Plan de pruebas.
2. Casos de prueba.
3. Pruebas unitarias.
4. Pruebas de integración.
5. Checklist QA.
6. Reporte de defectos.

### Criterios de aceptación

1. Los flujos críticos tienen pruebas.
2. Los cálculos financieros tienen pruebas.
3. Los guards RBAC tienen pruebas.
4. No hay errores críticos abiertos antes del demo MVP.

---

## 10.30 MOD-DEP-030 — Despliegue

| Campo | Descripción |
|---|---|
| Código | MOD-DEP-030 |
| Nombre | Despliegue |
| Tipo | DevOps |
| Estado MVP | Cierre MVP |
| Prioridad | Media |
| Perfiles | Equipo técnico |
| Objetivo | Preparar ambiente demo o producción inicial del MVP |

### Funcionalidades

1. Configurar variables de entorno.
2. Preparar build frontend.
3. Preparar build backend.
4. Preparar migraciones.
5. Preparar seeds.
6. Crear Docker si aplica.
7. Crear checklist de despliegue.

### Entregables

1. `.env.example`.
2. Dockerfile frontend si aplica.
3. Dockerfile backend si aplica.
4. `docker-compose.yml` si aplica.
5. Script de migraciones.
6. Script de seeds.
7. README de despliegue.

### Criterios de aceptación

1. Frontend compila.
2. Backend compila.
3. Migraciones corren correctamente.
4. Seeds cargan correctamente.
5. El MVP puede ejecutarse en ambiente demo.

---

## 11. Dependencias entre módulos

| Módulo | Depende de |
|---|---|
| Autenticación | Usuarios |
| Roles | Usuarios, Perfiles |
| Permisos | Roles, Módulos |
| Catálogos | Usuarios, Permisos |
| Actores | Catálogos, Perfiles |
| Tiendas | Usuarios, Catálogos, Documentos |
| Servicios | Tiendas, Catálogos, Comisiones |
| Búsqueda | Servicios, Tiendas, Reviews |
| Perfil público | Tiendas, Servicios, Reviews |
| Reviews | Órdenes, Tiendas, Clientes |
| Cotizaciones | Usuarios, Tiendas, Servicios, Documentos |
| Órdenes | Cotizaciones, Servicios, Usuarios |
| Documentos | Usuarios, Cotizaciones, Órdenes |
| Pagos | Órdenes, Documentos |
| Comisiones | Servicios, Órdenes, Pagos |
| Reportes | Todos los módulos operativos |
| Auditoría | Todos los módulos críticos |
| TOS | Órdenes, Servicios, Documentos |
| Transporte | Órdenes, Servicios, Documentos |
| Almacenamiento | Órdenes, Servicios, Documentos |
| Inspecciones | Órdenes, Servicios, Documentos |
| Soporte | Usuarios, Auditoría |
| Dashboards | Reportes, módulos operativos |
| API/Swagger | Backend Nest.js |
| QA | Todos los módulos |
| Despliegue | Frontend, Backend, Base de datos |

---

## 12. Roadmap recomendado por fases

| Fase | Módulos | Resultado esperado |
|---:|---|---|
| Fase 1 | Usuarios, Autenticación, Roles, Permisos | Base segura del sistema |
| Fase 2 | Catálogos, Actores, Perfiles, Matriz RBAC | Datos maestros y acceso por perfil |
| Fase 3 | Tiendas, Perfil público, Servicios | Marketplace base de proveedores |
| Fase 4 | Búsqueda, Reviews básicas | Experiencia marketplace tipo directorio |
| Fase 5 | Cotizaciones, Órdenes | Flujo comercial principal |
| Fase 6 | Documentos, Evidencias | Soporte documental operativo |
| Fase 7 | Pagos, Comisiones | Flujo financiero referencial |
| Fase 8 | Reportes, Auditoría | Control y trazabilidad |
| Fase 9 | TOS básico, Transporte, Almacenamiento, Inspecciones | Operación logística inicial |
| Fase 10 | Soporte, Notificaciones, Exportaciones avanzadas | Mejoras operativas |
| Fase 11 | QA, Swagger, Despliegue | MVP listo para demo |

---

## 13. Tablas MySQL globales por grupo funcional

| Grupo | Tablas principales |
|---|---|
| Seguridad | `users`, `user_profiles`, `roles`, `permissions`, `role_permissions`, `user_roles`, `user_sessions` |
| Configuración | `master_catalogs`, `master_catalog_items`, `ecosystem_actors`, `profile_module_access` |
| Marketplace | `stores`, `store_users`, `store_documents`, `services`, `service_categories`, `service_pricing` |
| Búsqueda y reputación | `reviews`, `ratings`, `search_logs` |
| Cotizaciones y órdenes | `quotations`, `quotation_lines`, `orders`, `order_lines`, `order_tasks` |
| Documentos | `documents`, `document_versions`, `document_validations`, `evidences` |
| Finanzas | `payments`, `payment_receipts`, `commission_rules`, `commissions` |
| Operación logística | `tos_containers`, `tos_yards`, `tos_moves`, `trips`, `vehicles`, `drivers`, `warehouses`, `inventory_items`, `inspections` |
| Control | `reports`, `report_exports`, `audit_logs`, `audit_events` |
| Soporte | `support_tickets`, `support_ticket_messages`, `support_sla` |

---

## 14. Endpoints base por grupo funcional

| Grupo | Endpoints base |
|---|---|
| Seguridad | `/auth`, `/users`, `/roles`, `/permissions` |
| Configuración | `/catalogs`, `/actors`, `/profiles`, `/modules` |
| Marketplace | `/stores`, `/services`, `/search` |
| Cotizaciones y órdenes | `/quotations`, `/orders` |
| Documentos | `/documents`, `/evidences` |
| Finanzas | `/payments`, `/commissions`, `/commission-rules` |
| Operación logística | `/tos`, `/trips`, `/storage`, `/inspections` |
| Control | `/reports`, `/audit-logs` |
| Soporte | `/support/tickets` |
| Dashboards | `/dashboard` |

---

## 15. Componentes React base por grupo funcional

| Grupo | Componentes principales |
|---|---|
| Seguridad | `LoginPage`, `RegisterPage`, `ProtectedRoute`, `PermissionGuard` |
| Administración | `AdminDashboard`, `AdminDataTable`, `RolePermissionMatrix`, `CatalogManager` |
| Marketplace | `HomeHeroSearch`, `SearchResultsPage`, `FilterSidebar`, `ServiceResultCard`, `StorePublicProfile` |
| Cotizaciones | `RequestQuoteModal`, `QuotationForm`, `QuotationDetail`, `QuotationStatusBadge` |
| Órdenes | `OrderListPage`, `OrderDetailPage`, `OrderTimeline`, `OrderStatusBadge` |
| Documentos | `DocumentUploader`, `DocumentViewer`, `DocumentValidationPanel` |
| Finanzas | `PaymentSummaryCard`, `CommissionSummaryCard`, `PaymentAdminPanel` |
| Operación | `TosDashboard`, `TransportDashboard`, `StorageDashboard`, `InspectionDashboard` |
| Reportes | `ReportsDashboard`, `ReportFilterPanel`, `ReportExportButton` |
| Auditoría | `AuditTimeline`, `AuditLogTable`, `AuditFilterPanel` |
| Soporte | `SupportDashboard`, `TicketList`, `TicketDetail` |

---

## 16. Matriz resumida módulo vs perfil principal

| Módulo | Cliente | Tienda | Superadmin | Operador | Inspector | Transportista | Agente aduanal | Auditor | Soporte |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Usuarios | Sí | Sí | Sí | Consulta | Consulta | Consulta | Consulta | Consulta | Sí |
| Roles | No | Consulta | Sí | No | No | No | No | Consulta | Consulta |
| Permisos | No | No | Sí | No | No | No | No | Consulta | Consulta |
| Catálogos | Consulta | Consulta | Sí | Consulta | No | No | No | Consulta | Consulta |
| Tiendas | Consulta | Sí | Sí | Consulta | No | Consulta | Consulta | Consulta | Consulta |
| Servicios | Consulta | Sí | Sí | Consulta | Consulta | Sí | Sí | Consulta | Consulta |
| Búsqueda | Sí | Sí | Sí | Sí | Consulta | Consulta | Consulta | Consulta | Consulta |
| Cotizaciones | Sí | Sí | Sí | Consulta | Consulta | Sí | Sí | Consulta | Consulta |
| Órdenes | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta |
| Documentos | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta |
| Pagos | Sí | Consulta | Sí | Consulta | No | Consulta | Consulta | Consulta | No |
| Comisiones | No | Consulta | Sí | No | No | Consulta | Consulta | Consulta | No |
| Reportes | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Sí | Consulta |
| Auditoría | No | Limitado | Sí | Limitado | Limitado | Limitado | Limitado | Sí | Limitado |
| TOS | Consulta | Parcial | Sí | Sí | Consulta | Consulta | Consulta | Consulta | Consulta |
| Transporte | Consulta | Sí | Sí | Consulta | No | Sí | No | Consulta | Consulta |
| Almacenamiento | Consulta | Sí | Sí | Consulta | No | No | No | Consulta | Consulta |
| Inspecciones | Consulta | Sí | Sí | Consulta | Sí | No | Sí | Consulta | Consulta |
| Soporte | Sí | Sí | Sí | Consulta | Sí | Sí | Sí | Consulta | Sí |

---

## 17. Criterios generales de aceptación del catálogo de módulos

Este documento se considera completo cuando:

1. Lista todos los módulos funcionales del marketplace.
2. Identifica cuáles módulos pertenecen al MVP.
3. Identifica módulos parciales o posteriores.
4. Define objetivo por módulo.
5. Define funcionalidades por módulo.
6. Define entradas, procesos y salidas cuando aplica.
7. Define tablas MySQL por módulo.
8. Define endpoints Nest.js por módulo.
9. Define componentes React.js por módulo.
10. Define permisos por módulo.
11. Define auditoría por módulo.
12. Define criterios de aceptación por módulo.
13. Define dependencias entre módulos.
14. Define roadmap por módulos.
15. Sirve como base para épicas, historias y tareas.

---

## 18. Tareas técnicas sugeridas para Antigravity

### 18.1 Backend Nest.js

1. Crear módulos Nest.js por dominio.
2. Crear controllers por módulo.
3. Crear services por módulo.
4. Crear DTOs por módulo.
5. Crear guards por permisos.
6. Crear interceptores de auditoría.
7. Crear Swagger agrupado por módulo.
8. Crear pruebas unitarias por módulo.

### 18.2 Frontend React.js

1. Crear rutas por módulo.
2. Crear layouts por perfil.
3. Crear componentes base.
4. Crear pantallas por módulo.
5. Crear menús dinámicos.
6. Crear guards visuales por permiso.
7. Crear estados de carga, error y vacío.
8. Crear pruebas de renderizado básico.

### 18.3 Base de datos MySQL

1. Crear migraciones por grupo funcional.
2. Crear seeds iniciales.
3. Crear índices.
4. Crear llaves foráneas.
5. Crear tablas de auditoría.
6. Crear tablas de catálogos.

### 18.4 QA

1. Crear pruebas de autenticación.
2. Crear pruebas RBAC.
3. Crear pruebas de cotización.
4. Crear pruebas de orden.
5. Crear pruebas documentales.
6. Crear pruebas financieras.
7. Crear pruebas de auditoría.
8. Crear pruebas de búsqueda.
9. Crear pruebas responsive.
10. Crear pruebas de despliegue MVP.

---

## 19. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, product owner, desarrollador full stack senior y QA técnico.

Usa el documento `07_FUNCTIONAL_MODULES_CATALOG.md` como fuente principal para desarrollar el Marketplace Logístico TOS por módulos funcionales.

Objetivo:
Convertir cada módulo del catálogo en épicas, historias de usuario, tareas frontend, tareas backend, tareas MySQL, pruebas y documentación, usando React.js, Nest.js y MySQL.

Reglas obligatorias:
1. Respetar el alcance MVP definido en `02_MVP_SCOPE.md`.
2. Respetar las reglas de desarrollo definidas en `03_ANTIGRAVITY_RULES.md`.
3. Respetar perfiles de `05_USER_PROFILES.md`.
4. Respetar matriz RBAC de `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
5. Respetar diseño visual de `08_DESIGN_SYSTEM_MARKETPLACE.md`.
6. No integrar directamente con Odoo; usarlo solo como referencia conceptual.
7. Mantener arquitectura modular.
8. Crear pruebas por módulo.
9. Registrar auditoría para eventos críticos.
10. Documentar endpoints, tablas y componentes creados.
11. No desarrollar módulos avanzados fuera del MVP sin registrarlos como fase posterior.

Entregables esperados:
1. Backlog de épicas por módulo.
2. Historias de usuario por módulo.
3. Tareas técnicas por capa.
4. Migraciones MySQL por módulo.
5. Endpoints Nest.js por módulo.
6. Componentes React.js por módulo.
7. Permisos RBAC por módulo.
8. Eventos de auditoría por módulo.
9. Pruebas por módulo.
10. Documentación técnica actualizada.

Antes de implementar, genera un plan por fases y valida dependencias entre módulos.
```

---

## 20. Checklist de uso en Antigravity

- [ ] Guardar este documento como `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `02_MVP_SCOPE.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `08_DESIGN_SYSTEM_MARKETPLACE.md`.
- [ ] Usarlo como base para el backlog maestro.
- [ ] Crear épicas por módulo.
- [ ] Crear historias por módulo.
- [ ] Crear tareas frontend, backend, MySQL y QA.
- [ ] Confirmar dependencias entre módulos.
- [ ] Confirmar módulos MVP obligatorios.
- [ ] Confirmar módulos diferidos.
- [ ] Confirmar permisos por módulo.
- [ ] Confirmar auditoría por módulo.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 21. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

