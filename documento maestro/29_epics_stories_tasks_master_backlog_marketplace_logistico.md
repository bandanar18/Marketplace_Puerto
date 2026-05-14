# 29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md

# Documento Maestro de Épicas, Historias y Tareas
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Backlog maestro de producto, épicas, historias, tareas, criterios de aceptación y secuencia de desarrollo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional del marketplace logístico con arquitectura escalable |
| Estilo visual | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, ratings, categorías, búsqueda, perfiles de tiendas y experiencia clara para usuarios finales |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md` |

---

## 2. Propósito del documento

Este documento organiza el desarrollo del Marketplace Logístico TOS en un **backlog maestro ejecutable** para Antigravity, estructurado en:

1. Épicas.
2. Historias de usuario.
3. Tareas funcionales.
4. Tareas frontend React.js.
5. Tareas backend Nest.js.
6. Tareas MySQL.
7. Tareas de seguridad.
8. Tareas de auditoría.
9. Tareas de QA.
10. Criterios de aceptación.
11. Dependencias.
12. Prioridades.
13. Secuencia recomendada de implementación.

El objetivo es convertir todos los documentos maestros previos en una ruta concreta para desarrollar el software final del marketplace logístico en Antigravity.

---

## 3. Objetivo general

Definir un backlog maestro por épicas, historias y tareas que permita desarrollar de forma ordenada, modular y verificable el Marketplace Logístico TOS usando React.js, Nest.js y MySQL, aplicando arquitectura marketplace, diseño visual tipo Yelp.com, seguridad transversal, auditoría, reportes, flujos operativos y módulos logísticos completos.

---

## 4. Objetivos específicos

1. Organizar el desarrollo por módulos funcionales.
2. Definir épicas del MVP.
3. Definir historias de usuario por perfil.
4. Definir tareas técnicas por historia.
5. Definir criterios de aceptación.
6. Definir dependencias entre épicas.
7. Definir prioridades MVP.
8. Definir secuencia recomendada para Antigravity.
9. Alinear frontend, backend y base de datos.
10. Alinear permisos, scopes y auditoría.
11. Alinear reportes y dashboards.
12. Evitar desarrollos desordenados o duplicados.
13. Servir como backlog único para programación incremental.

---

## 5. Convenciones del backlog

### 5.1 Códigos de épicas

```txt
EPIC-001
EPIC-002
EPIC-003
...
```

### 5.2 Códigos de historias

```txt
US-001-001
US-001-002
US-002-001
...
```

Estructura:

```txt
US-[número épica]-[número historia]
```

### 5.3 Códigos de tareas

```txt
TASK-001-001-BE
TASK-001-001-FE
TASK-001-001-DB
TASK-001-001-QA
```

Sufijos:

| Sufijo | Significado |
|---|---|
| `FE` | Frontend React.js |
| `BE` | Backend Nest.js |
| `DB` | Base de datos MySQL |
| `QA` | Pruebas |
| `SEC` | Seguridad |
| `AUD` | Auditoría |
| `DOC` | Documentación |
| `SEED` | Datos iniciales |

### 5.4 Prioridades

| Prioridad | Código | Descripción |
|---|---|---|
| Crítica MVP | `P0` | Necesaria para que el sistema funcione |
| Alta MVP | `P1` | Necesaria para experiencia completa del MVP |
| Media | `P2` | Mejora importante, puede ir después del núcleo |
| Baja | `P3` | Mejora futura |

### 5.5 Estados del backlog

| Estado | Código |
|---|---|
| Pendiente | `TODO` |
| En análisis | `ANALYSIS` |
| En desarrollo | `IN_PROGRESS` |
| En revisión | `REVIEW` |
| En pruebas | `TESTING` |
| Bloqueado | `BLOCKED` |
| Completado | `DONE` |

---

## 6. Perfiles cubiertos por el backlog

| Perfil | Código | Participación principal |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Busca servicios, solicita cotizaciones, aprueba, paga y consulta operaciones |
| Tienda logística | `PROF-TIE-002` | Publica servicios, responde cotizaciones, gestiona órdenes y consulta pagos/comisiones |
| Superadministrador | `PROF-SUP-003` | Configura, aprueba, audita y monitorea todo el marketplace |
| Operador interno | `PROF-OPE-004` | Supervisa operaciones logísticas y excepciones |
| Inspector | `PROF-INS-005` | Ejecuta inspecciones y evidencias |
| Transportista | `PROF-TRA-006` | Gestiona viajes, retiro, tránsito, entrega y POD |
| Agente aduanal | `PROF-ADU-007` | Gestiona servicios aduanales y documentos |
| Auditor | `PROF-AUD-008` | Consulta reportes y auditoría sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias limitadas |

---

## 7. Lista general de épicas MVP

| Épica | Nombre | Prioridad | Documento base |
|---|---|---|---|
| `EPIC-001` | Arquitectura inicial del proyecto | `P0` | `11_TECHNICAL_ARCHITECTURE.md` |
| `EPIC-002` | Diseño visual marketplace tipo Yelp | `P0` | `08_DESIGN_SYSTEM_MARKETPLACE.md` |
| `EPIC-003` | Seguridad, autenticación, roles y permisos | `P0` | `26_SECURITY_MASTER_PLAN.md` |
| `EPIC-004` | Catálogos maestros y seeds iniciales | `P0` | `15_MASTER_CATALOGS_MVP.md`, `17_INITIAL_SEEDS_PLAN.md` |
| `EPIC-005` | Usuarios, perfiles y navegación | `P0` | `05_USER_PROFILES.md`, `10_NAVIGATION_AND_MENUS.md` |
| `EPIC-006` | Tiendas logísticas y actores del ecosistema | `P0` | `04_ECOSYSTEM_ACTORS_MATRIX.md` |
| `EPIC-007` | Servicios y fichas marketplace | `P0` | `16_SERVICES_MASTER_CATALOG.md` |
| `EPIC-008` | Home, búsqueda, directorio y filtros | `P0` | `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md` |
| `EPIC-009` | Cotizaciones | `P0` | `18_QUOTATION_WORKFLOW.md` |
| `EPIC-010` | Órdenes | `P0` | `19_ORDER_WORKFLOW.md` |
| `EPIC-011` | Documentos y evidencias | `P1` | `12_DATABASE_MASTER_SCHEMA.md`, módulos operativos |
| `EPIC-012` | TOS operación portuaria | `P1` | `20_TOS_OPERATION_PLAN.md` |
| `EPIC-013` | Transporte | `P1` | `21_TRANSPORT_OPERATION_PLAN.md` |
| `EPIC-014` | Almacenamiento | `P1` | `22_STORAGE_OPERATION_PLAN.md` |
| `EPIC-015` | Inspecciones | `P1` | `23_INSPECTION_OPERATION_PLAN.md` |
| `EPIC-016` | Pagos | `P0` | `24_PAYMENTS_MASTER_PLAN.md` |
| `EPIC-017` | Comisiones | `P1` | `25_COMMISSIONS_MASTER_PLAN.md` |
| `EPIC-018` | Auditoría y trazabilidad | `P0` | `27_AUDIT_TRAIL_MASTER_PLAN.md` |
| `EPIC-019` | Reportes y dashboards | `P1` | `28_REPORTS_MASTER_PLAN.md` |
| `EPIC-020` | Notificaciones | `P1` | Documentos operativos y financieros |
| `EPIC-021` | Soporte e incidencias | `P2` | Seguridad, auditoría y operación |
| `EPIC-022` | QA, pruebas integrales y hardening | `P0` | Todos los documentos |
| `EPIC-023` | Documentación Swagger y README técnico | `P0` | `13_API_SPECIFICATION.md` |

---

# EPIC-001 — Arquitectura inicial del proyecto

## 8. Descripción

Crear la estructura base del proyecto en Antigravity con frontend React.js, backend Nest.js y base de datos MySQL, aplicando una arquitectura modular, limpia, escalable y lista para desarrollar por dominios funcionales.

## 8.1 Historias de usuario

### US-001-001 — Crear estructura general del monorepo

**Como desarrollador**, quiero una estructura inicial del proyecto separada en frontend, backend, database y docs, para trabajar de forma ordenada en Antigravity.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existe carpeta `/frontend`.
2. Existe carpeta `/backend`.
3. Existe carpeta `/database`.
4. Existe carpeta `/docs`.
5. Existe README raíz.
6. La estructura está documentada.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-001-001-DOC` | DOC | Crear README raíz del proyecto |
| `TASK-001-001-FE` | FE | Inicializar React.js con estructura base |
| `TASK-001-001-BE` | BE | Inicializar Nest.js con módulos base |
| `TASK-001-001-DB` | DB | Crear carpeta de migraciones, seeds y diagramas |
| `TASK-001-001-QA` | QA | Verificar que frontend y backend levantan localmente |

---

### US-001-002 — Configurar arquitectura backend Nest.js

**Como desarrollador backend**, quiero una arquitectura modular en Nest.js para separar auth, usuarios, tiendas, servicios, cotizaciones, órdenes, pagos, comisiones, TOS, transporte, almacenamiento, inspecciones, auditoría y reportes.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existe módulo raíz `AppModule`.
2. Existen módulos iniciales vacíos por dominio.
3. Existe configuración global de variables de entorno.
4. Existe configuración de conexión MySQL.
5. Existe estructura para DTOs, services, controllers y entities.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-001-002-BE` | BE | Crear módulos Nest.js principales |
| `TASK-001-002-BE2` | BE | Configurar ConfigModule y variables de entorno |
| `TASK-001-002-DB` | DB | Configurar conexión MySQL |
| `TASK-001-002-SEC` | SEC | Preparar estructura de guards e interceptors |
| `TASK-001-002-QA` | QA | Probar health check backend |

---

### US-001-003 — Configurar arquitectura frontend React.js

**Como desarrollador frontend**, quiero una estructura React.js modular por páginas, componentes, hooks, servicios y layouts para construir la experiencia marketplace tipo Yelp.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existe layout público.
2. Existe layout autenticado.
3. Existe estructura de rutas.
4. Existe carpeta de componentes compartidos.
5. Existe carpeta de servicios API.
6. Existe carpeta de hooks.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-001-003-FE` | FE | Crear estructura de carpetas frontend |
| `TASK-001-003-FE2` | FE | Crear layouts base |
| `TASK-001-003-FE3` | FE | Crear router base |
| `TASK-001-003-FE4` | FE | Crear cliente HTTP API |
| `TASK-001-003-QA` | QA | Verificar navegación inicial |

---

# EPIC-002 — Diseño visual marketplace tipo Yelp

## 9. Descripción

Implementar el sistema visual base del marketplace logístico inspirado en Yelp.com: directorio, tarjetas de tiendas, tarjetas de servicios, búsqueda, filtros, badges, ratings, navegación clara, diseño responsive y estructura visual profesional.

## 9.1 Historias de usuario

### US-002-001 — Crear design system base

**Como usuario**, quiero una interfaz moderna, limpia y consistente para navegar servicios logísticos con facilidad.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existen tokens visuales base.
2. Existen botones, cards, badges, inputs y tablas.
3. La interfaz usa estilo marketplace tipo Yelp.
4. Los componentes son reutilizables.
5. La interfaz es responsive.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-002-001-FE` | FE | Crear componentes UI base |
| `TASK-002-001-FE2` | FE | Crear `MarketplaceCard`, `ServiceCard`, `StoreCard` |
| `TASK-002-001-FE3` | FE | Crear badges de estado y categoría |
| `TASK-002-001-FE4` | FE | Crear diseño responsive base |
| `TASK-002-001-QA` | QA | Validar consistencia visual |

---

### US-002-002 — Crear home público del marketplace

**Como cliente final**, quiero entrar al home del marketplace y encontrar categorías, tiendas, servicios destacados y buscador.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Home tiene header con navegación.
2. Home tiene buscador principal.
3. Home muestra categorías logísticas.
4. Home muestra tiendas destacadas.
5. Home muestra servicios destacados.
6. Home tiene footer.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-002-002-FE` | FE | Crear `HomePage` |
| `TASK-002-002-FE2` | FE | Crear hero con buscador |
| `TASK-002-002-FE3` | FE | Crear sección categorías |
| `TASK-002-002-FE4` | FE | Crear sección tiendas destacadas |
| `TASK-002-002-FE5` | FE | Crear footer marketplace |
| `TASK-002-002-QA` | QA | Probar responsive desktop/mobile |

---

### US-002-003 — Crear componentes de filtros y directorio

**Como cliente**, quiero filtrar servicios por categoría, puerto, terminal, tipo de tienda y estado para encontrar proveedores adecuados.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existe panel de filtros.
2. Existe listado de resultados.
3. Se pueden filtrar categorías.
4. Se pueden filtrar tiendas.
5. Se pueden filtrar puertos y terminales.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-002-003-FE` | FE | Crear `DirectoryFilters` |
| `TASK-002-003-FE2` | FE | Crear `MarketplaceResultsList` |
| `TASK-002-003-FE3` | FE | Crear estados empty/loading/error |
| `TASK-002-003-BE` | BE | Preparar endpoint de búsqueda básica |
| `TASK-002-003-QA` | QA | Probar filtros combinados |

---

# EPIC-003 — Seguridad, autenticación, roles y permisos

## 10. Descripción

Implementar la seguridad transversal del sistema: autenticación, sesiones, roles, permisos, scopes, protección de rutas, protección de endpoints y auditoría de eventos críticos.

## 10.1 Historias de usuario

### US-003-001 — Registro e inicio de sesión

**Como usuario**, quiero registrarme e iniciar sesión para acceder a mi panel correspondiente.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Usuario puede registrarse.
2. Usuario puede iniciar sesión.
3. Backend valida contraseña.
4. Backend genera tokens.
5. Frontend guarda sesión de forma controlada.
6. Usuario es redirigido según perfil.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-003-001-DB` | DB | Crear tablas `users`, `user_sessions` |
| `TASK-003-001-BE` | BE | Crear AuthModule |
| `TASK-003-001-BE2` | BE | Crear endpoints register/login/logout |
| `TASK-003-001-SEC` | SEC | Implementar hash de password y JWT |
| `TASK-003-001-FE` | FE | Crear LoginPage y RegisterPage |
| `TASK-003-001-QA` | QA | Probar login exitoso y fallido |

---

### US-003-002 — Roles, permisos y scopes

**Como superadministrador**, quiero gestionar roles y permisos para controlar el acceso a cada módulo.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existen roles por perfil.
2. Existen permisos atómicos.
3. Se asignan permisos a roles.
4. Backend valida permisos.
5. Backend valida scope.
6. Frontend oculta acciones no autorizadas.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-003-002-DB` | DB | Crear `roles`, `permissions`, `role_permissions`, `user_roles` |
| `TASK-003-002-BE` | BE | Crear PermissionsGuard |
| `TASK-003-002-BE2` | BE | Crear ScopeGuard |
| `TASK-003-002-FE` | FE | Crear `PermissionGate` |
| `TASK-003-002-SEED` | SEED | Crear seeds de roles/permisos |
| `TASK-003-002-QA` | QA | Probar 401, 403 y scopes |

---

### US-003-003 — Rutas protegidas por perfil

**Como usuario autenticado**, quiero ver solo las rutas y menús que corresponden a mi perfil.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente ve dashboard cliente.
2. Tienda ve dashboard tienda.
3. Admin ve panel global.
4. Auditor ve modo solo lectura.
5. Rutas privadas requieren sesión.
6. Rutas no autorizadas muestran 403.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-003-003-FE` | FE | Crear `ProtectedRoute` |
| `TASK-003-003-FE2` | FE | Crear layouts por perfil |
| `TASK-003-003-FE3` | FE | Crear `AccessDeniedPage` |
| `TASK-003-003-BE` | BE | Crear endpoint `/auth/me` |
| `TASK-003-003-QA` | QA | Probar navegación por perfil |

---

# EPIC-004 — Catálogos maestros y seeds iniciales

## 11. Descripción

Implementar catálogos maestros mínimos para el MVP: categorías de servicios, tipos de tienda, tipos de carga, tipos de contenedores, estados operativos, estados financieros, estados aduaneros, puertos, terminales, tarifas, comisiones, roles y permisos.

## 11.1 Historias de usuario

### US-004-001 — Crear modelo de catálogos maestros

**Como superadministrador**, quiero disponer de catálogos maestros para normalizar datos del marketplace.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existe tabla de catálogos.
2. Existe tabla de ítems de catálogo.
3. Los ítems tienen código, nombre, descripción y estado.
4. Los módulos consumen catálogos activos.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-004-001-DB` | DB | Crear `master_catalogs` y `master_catalog_items` |
| `TASK-004-001-BE` | BE | Crear MasterCatalogsModule |
| `TASK-004-001-BE2` | BE | Crear endpoints GET de catálogos |
| `TASK-004-001-FE` | FE | Crear servicios API para catálogos |
| `TASK-004-001-QA` | QA | Probar consulta de catálogos activos |

---

### US-004-002 — Crear seeds iniciales del MVP

**Como desarrollador**, quiero cargar datos iniciales para probar el marketplace desde el primer sprint.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Existen perfiles demo.
2. Existen roles y permisos demo.
3. Existen categorías demo.
4. Existen tiendas demo.
5. Existen servicios demo.
6. Existen órdenes, pagos y comisiones demo.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-004-002-SEED` | SEED | Crear seeds de perfiles |
| `TASK-004-002-SEED2` | SEED | Crear seeds de roles/permisos |
| `TASK-004-002-SEED3` | SEED | Crear seeds de categorías logísticas |
| `TASK-004-002-SEED4` | SEED | Crear seeds de tiendas y servicios |
| `TASK-004-002-SEED5` | SEED | Crear seeds de flujos demo |
| `TASK-004-002-QA` | QA | Validar carga limpia de seeds |

---

# EPIC-005 — Usuarios, perfiles y navegación

## 12. Descripción

Implementar dashboards, navegación, menús y experiencias por perfil: cliente final, tienda logística, superadministrador, operador interno, inspector, transportista, agente aduanal, auditor y soporte.

## 12.1 Historias de usuario

### US-005-001 — Dashboard cliente final

**Como cliente final**, quiero acceder a un dashboard donde vea mis cotizaciones, órdenes, pagos, documentos y seguimiento logístico.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente ve resumen de cotizaciones.
2. Cliente ve órdenes activas.
3. Cliente ve pagos pendientes.
4. Cliente ve documentos pendientes.
5. Cliente ve últimas actualizaciones.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-005-001-FE` | FE | Crear `ClientDashboardPage` |
| `TASK-005-001-BE` | BE | Crear endpoint dashboard cliente |
| `TASK-005-001-BE2` | BE | Aplicar scope `own` |
| `TASK-005-001-QA` | QA | Probar que cliente solo ve datos propios |

---

### US-005-002 — Dashboard tienda logística

**Como tienda logística**, quiero ver mis servicios, cotizaciones, órdenes, pagos, comisiones y desempeño.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Tienda ve servicios propios.
2. Tienda ve cotizaciones recibidas.
3. Tienda ve órdenes activas.
4. Tienda ve pagos confirmados.
5. Tienda ve comisiones y neto proveedor.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-005-002-FE` | FE | Crear `StoreDashboardPage` |
| `TASK-005-002-BE` | BE | Crear endpoint dashboard tienda |
| `TASK-005-002-BE2` | BE | Aplicar scope `store` |
| `TASK-005-002-QA` | QA | Probar que tienda no ve datos de otra tienda |

---

### US-005-003 — Panel global superadministrador

**Como superadministrador**, quiero ver un panel global del marketplace con usuarios, tiendas, servicios, órdenes, pagos, comisiones, auditoría y reportes.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Admin ve métricas globales.
2. Admin ve accesos a módulos principales.
3. Admin puede navegar a configuración.
4. Admin puede ver reportes y auditoría.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-005-003-FE` | FE | Crear `AdminDashboardPage` |
| `TASK-005-003-BE` | BE | Crear endpoint dashboard global |
| `TASK-005-003-SEC` | SEC | Aplicar permiso `reports.view_global` |
| `TASK-005-003-QA` | QA | Probar acceso solo admin/auditor autorizado |

---

# EPIC-006 — Tiendas logísticas y actores del ecosistema

## 13. Descripción

Implementar tiendas logísticas como proveedores del ecosistema: agente aduanal, transportista, almacén fiscal, terminal, naviera, inspector, aseguradora, banco, tecnología y otros actores.

## 13.1 Historias de usuario

### US-006-001 — Crear tienda logística

**Como proveedor logístico**, quiero crear una tienda para ofrecer servicios dentro del marketplace.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Usuario puede crear solicitud de tienda.
2. Tienda tiene tipo de actor.
3. Tienda tiene datos comerciales.
4. Tienda inicia en estado pendiente.
5. Admin puede aprobar o rechazar.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-006-001-DB` | DB | Crear tablas `stores`, `store_users` |
| `TASK-006-001-BE` | BE | Crear StoresModule |
| `TASK-006-001-BE2` | BE | Crear endpoints CRUD tiendas |
| `TASK-006-001-FE` | FE | Crear `StoreRegistrationPage` |
| `TASK-006-001-AUD` | AUD | Auditar aprobación/rechazo |
| `TASK-006-001-QA` | QA | Probar creación y aprobación |

---

### US-006-002 — Perfil público de tienda estilo Yelp

**Como cliente**, quiero ver una página pública de tienda con descripción, servicios, ubicación, rating, documentos y datos relevantes.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Página muestra nombre de tienda.
2. Página muestra tipo de actor.
3. Página muestra servicios publicados.
4. Página muestra badges y datos clave.
5. Página tiene estilo tipo Yelp.
6. Cliente puede solicitar cotización desde servicios.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-006-002-FE` | FE | Crear `StorePublicProfilePage` |
| `TASK-006-002-FE2` | FE | Crear `StoreHeader`, `StoreServiceList`, `StoreInfoPanel` |
| `TASK-006-002-BE` | BE | Crear endpoint público de tienda |
| `TASK-006-002-QA` | QA | Probar visualización pública |

---

# EPIC-007 — Servicios y fichas marketplace

## 14. Descripción

Implementar fichas de servicios logísticos ofrecidos por tiendas, con categorías, subcategorías, tarifa, unidad, SLA, documentos requeridos, alcance, reglas, comisión y evidencias.

## 14.1 Historias de usuario

### US-007-001 — Crear ficha de servicio

**Como tienda logística**, quiero crear una ficha de servicio para venderlo dentro del marketplace.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Servicio tiene código y nombre.
2. Servicio tiene categoría y subcategoría.
3. Servicio tiene tarifa y unidad.
4. Servicio tiene documentos requeridos.
5. Servicio tiene SLA y reglas.
6. Servicio queda en borrador o publicado.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-007-001-DB` | DB | Crear tabla `services` y relaciones |
| `TASK-007-001-BE` | BE | Crear ServicesModule |
| `TASK-007-001-BE2` | BE | Crear endpoints CRUD servicios |
| `TASK-007-001-FE` | FE | Crear `ServiceForm` |
| `TASK-007-001-FE2` | FE | Crear `StoreServicesPage` |
| `TASK-007-001-QA` | QA | Probar alta de servicio |

---

### US-007-002 — Publicar servicio en directorio

**Como tienda**, quiero publicar mi servicio para que los clientes puedan encontrarlo y solicitar cotización.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Servicio publicado aparece en directorio.
2. Servicio inactivo no aparece.
3. Solo tienda dueña puede editar.
4. Admin puede moderar.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-007-002-BE` | BE | Crear endpoint publicar/despublicar |
| `TASK-007-002-FE` | FE | Crear acción publicar en UI |
| `TASK-007-002-AUD` | AUD | Auditar publicación/despublicación |
| `TASK-007-002-QA` | QA | Probar visibilidad en directorio |

---

# EPIC-008 — Home, búsqueda, directorio y filtros

## 15. Descripción

Implementar búsqueda general del marketplace, directorio de servicios, filtros por categoría, puerto, terminal, tipo de tienda, tarifa, estado, rating y palabras clave.

## 15.1 Historias de usuario

### US-008-001 — Buscar servicios logísticos

**Como cliente**, quiero buscar servicios logísticos por palabra clave y categoría para encontrar proveedores adecuados.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Buscador consulta servicios publicados.
2. Resultados muestran tarjetas de servicio.
3. Filtros funcionan.
4. Resultados respetan estado publicado.
5. Usuario puede abrir detalle de servicio.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-008-001-BE` | BE | Crear endpoint `/search/services` |
| `TASK-008-001-BE2` | BE | Implementar filtros básicos |
| `TASK-008-001-FE` | FE | Crear `SearchResultsPage` |
| `TASK-008-001-FE2` | FE | Crear `SearchBar` y `FilterSidebar` |
| `TASK-008-001-QA` | QA | Probar búsqueda y filtros |

---

### US-008-002 — Ver detalle de servicio

**Como cliente**, quiero ver el detalle de un servicio con proveedor, alcance, documentos, tarifa, SLA y botón de cotización.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Página muestra datos del servicio.
2. Página muestra tienda proveedora.
3. Página muestra documentos requeridos.
4. Página muestra tarifa referencial.
5. Página permite solicitar cotización.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-008-002-FE` | FE | Crear `ServiceDetailPage` |
| `TASK-008-002-BE` | BE | Crear endpoint detalle de servicio |
| `TASK-008-002-FE2` | FE | Crear CTA solicitar cotización |
| `TASK-008-002-QA` | QA | Probar detalle y CTA |

---

# EPIC-009 — Cotizaciones

## 16. Descripción

Implementar flujo completo de cotizaciones: solicitud del cliente, respuesta de tienda, aprobación/rechazo y conversión a orden.

## 16.1 Historias de usuario

### US-009-001 — Solicitar cotización

**Como cliente**, quiero solicitar una cotización de un servicio logístico para recibir una propuesta de la tienda.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente selecciona servicio.
2. Cliente completa datos de solicitud.
3. Cliente adjunta documentos si aplica.
4. Cotización se crea en estado pendiente.
5. Tienda recibe notificación.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-009-001-DB` | DB | Crear `quotations`, `quotation_lines` |
| `TASK-009-001-BE` | BE | Crear QuotationsModule |
| `TASK-009-001-BE2` | BE | Crear endpoint solicitud |
| `TASK-009-001-FE` | FE | Crear `QuotationRequestForm` |
| `TASK-009-001-NOTIF` | BE | Crear notificación a tienda |
| `TASK-009-001-QA` | QA | Probar solicitud completa |

---

### US-009-002 — Responder cotización

**Como tienda**, quiero responder una cotización indicando precio, condiciones, tiempo estimado y observaciones.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Tienda ve cotizaciones recibidas.
2. Tienda responde precio.
3. Tienda define condiciones.
4. Cotización pasa a respondida.
5. Cliente recibe notificación.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-009-002-BE` | BE | Crear endpoint responder cotización |
| `TASK-009-002-FE` | FE | Crear `QuotationResponseForm` |
| `TASK-009-002-AUD` | AUD | Auditar respuesta |
| `TASK-009-002-QA` | QA | Probar respuesta y scope tienda |

---

### US-009-003 — Aprobar cotización y crear orden

**Como cliente**, quiero aprobar una cotización para convertirla en una orden logística.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente dueño puede aprobar.
2. Cotización pasa a aprobada.
3. Se crea orden.
4. Se crea comisión preliminar si aplica.
5. Cliente y tienda reciben notificación.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-009-003-BE` | BE | Crear endpoint aprobar cotización |
| `TASK-009-003-BE2` | BE | Crear orden desde cotización |
| `TASK-009-003-BE3` | BE | Integrar cálculo de comisión preliminar |
| `TASK-009-003-FE` | FE | Crear acción aprobar en UI |
| `TASK-009-003-QA` | QA | Probar conversión a orden |

---

# EPIC-010 — Órdenes

## 17. Descripción

Implementar el flujo de órdenes: creación, estados, timeline, tareas, documentos, pagos, ejecución, cierre y cancelación.

## 17.1 Historias de usuario

### US-010-001 — Ver órdenes por perfil

**Como usuario**, quiero consultar mis órdenes según mi perfil y scope.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente ve órdenes propias.
2. Tienda ve órdenes de sus servicios.
3. Admin ve todas.
4. Auditor ve solo lectura.
5. Filtros por estado funcionan.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-010-001-DB` | DB | Crear `orders`, `order_lines`, `order_events` |
| `TASK-010-001-BE` | BE | Crear OrdersModule |
| `TASK-010-001-BE2` | BE | Crear listados con scopes |
| `TASK-010-001-FE` | FE | Crear `OrdersListPage` por perfil |
| `TASK-010-001-QA` | QA | Probar scopes de órdenes |

---

### US-010-002 — Detalle y timeline de orden

**Como cliente o tienda**, quiero ver el detalle de una orden y su timeline para conocer el estado operativo.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Detalle muestra datos de orden.
2. Muestra servicio y tienda.
3. Muestra estado operativo y financiero.
4. Muestra timeline.
5. Muestra documentos y evidencias.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-010-002-FE` | FE | Crear `OrderDetailPage` |
| `TASK-010-002-FE2` | FE | Crear `OrderTimeline` |
| `TASK-010-002-BE` | BE | Crear endpoint detalle orden |
| `TASK-010-002-BE2` | BE | Crear endpoint timeline |
| `TASK-010-002-QA` | QA | Probar detalle por perfil |

---

### US-010-003 — Cerrar o cancelar orden

**Como operador autorizado**, quiero cerrar o cancelar una orden con motivo y auditoría.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Solo usuario autorizado cierra/cancela.
2. Cancelar exige motivo.
3. Cerrar exige estado válido.
4. Se genera audit log.
5. Se notifica a partes.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-010-003-BE` | BE | Crear endpoints close/cancel |
| `TASK-010-003-FE` | FE | Crear modales close/cancel |
| `TASK-010-003-AUD` | AUD | Auditar cierre/cancelación |
| `TASK-010-003-QA` | QA | Probar reglas de estado |

---

# EPIC-011 — Documentos y evidencias

## 18. Descripción

Implementar sistema transversal para cargar, validar, rechazar, consultar y vincular documentos/evidencias a órdenes, pagos, TOS, transporte, almacenamiento e inspecciones.

## 18.1 Historias de usuario

### US-011-001 — Cargar documentos

**Como usuario autorizado**, quiero cargar documentos asociados a una orden o módulo para respaldar la operación.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Usuario puede cargar archivo permitido.
2. Archivo se vincula a entidad.
3. Backend valida tipo y tamaño.
4. Documento queda visible según permisos.
5. Carga genera auditoría si es crítica.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-011-001-DB` | DB | Crear `documents`, `evidences` |
| `TASK-011-001-BE` | BE | Crear DocumentsModule |
| `TASK-011-001-BE2` | BE | Crear upload seguro |
| `TASK-011-001-FE` | FE | Crear `DocumentUpload` |
| `TASK-011-001-SEC` | SEC | Validar tipos y permisos |
| `TASK-011-001-QA` | QA | Probar upload válido/inválido |

---

### US-011-002 — Validar o rechazar documento

**Como operador autorizado**, quiero validar o rechazar documentos con motivo.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Operador puede validar documento.
2. Rechazo exige motivo.
3. Estado cambia correctamente.
4. Se genera auditoría.
5. Se notifica al usuario.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-011-002-BE` | BE | Crear endpoints validate/reject |
| `TASK-011-002-FE` | FE | Crear `DocumentReviewPanel` |
| `TASK-011-002-AUD` | AUD | Auditar validación/rechazo |
| `TASK-011-002-QA` | QA | Probar permisos y motivos |

---

# EPIC-012 — TOS operación portuaria

## 19. Descripción

Implementar módulo TOS básico: patios, contenedores, gate-in, gate-out, movimientos, bloqueos, liberaciones y evidencias.

## 19.1 Historias de usuario

### US-012-001 — Registrar contenedor TOS

**Como operador TOS**, quiero registrar un contenedor asociado a una orden para controlar su operación portuaria.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Contenedor tiene número válido.
2. Contenedor se asocia a orden.
3. Contenedor tiene estado TOS.
4. Se puede consultar en detalle.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-012-001-DB` | DB | Crear `tos_containers` |
| `TASK-012-001-BE` | BE | Crear TosModule |
| `TASK-012-001-FE` | FE | Crear `TosContainerForm` |
| `TASK-012-001-QA` | QA | Probar creación contenedor |

---

### US-012-002 — Registrar gate-in y gate-out

**Como operador TOS**, quiero registrar entrada y salida de contenedores con reglas de bloqueo.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Gate-in registra entrada.
2. Gate-out registra salida.
3. Gate-out no permite bloqueos activos.
4. Eventos generan auditoría.
5. Timeline de orden se actualiza.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-012-002-DB` | DB | Crear `tos_gates` |
| `TASK-012-002-BE` | BE | Crear endpoints gate-in/gate-out |
| `TASK-012-002-FE` | FE | Crear formularios gate-in/gate-out |
| `TASK-012-002-AUD` | AUD | Auditar gate-out crítico |
| `TASK-012-002-QA` | QA | Probar bloqueo en gate-out |

---

# EPIC-013 — Transporte

## 20. Descripción

Implementar módulo de transporte: viajes, vehículos, conductores, asignación, programación, retiro, tránsito, incidencia, entrega, POD y cierre.

## 20.1 Historias de usuario

### US-013-001 — Crear viaje de transporte

**Como tienda transportista u operador**, quiero crear un viaje asociado a una orden para gestionar el traslado de carga.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Viaje se asocia a orden.
2. Viaje tiene origen y destino.
3. Viaje tiene estado inicial.
4. Puede asignarse conductor y vehículo.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-013-001-DB` | DB | Crear `trips`, `vehicles`, `drivers` |
| `TASK-013-001-BE` | BE | Crear TransportModule |
| `TASK-013-001-FE` | FE | Crear `TripForm` |
| `TASK-013-001-QA` | QA | Probar creación de viaje |

---

### US-013-002 — Actualizar estado del viaje

**Como transportista**, quiero actualizar el viaje desde programado hasta entregado con evidencias.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Estados siguen transiciones válidas.
2. Entrega requiere evidencia POD.
3. Incidencia requiere motivo.
4. Timeline de orden se actualiza.
5. Eventos críticos se auditan.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-013-002-BE` | BE | Crear endpoints de transición de viaje |
| `TASK-013-002-FE` | FE | Crear `TripStatusActions` |
| `TASK-013-002-FE2` | FE | Crear `PodUploadPanel` |
| `TASK-013-002-AUD` | AUD | Auditar entrega/incidencias |
| `TASK-013-002-QA` | QA | Probar flujo completo de viaje |

---

# EPIC-014 — Almacenamiento

## 21. Descripción

Implementar módulo de almacenamiento: almacenes, ubicaciones, inventario, recepción, ubicación, movimientos, bloqueos, liberaciones y despacho.

## 21.1 Historias de usuario

### US-014-001 — Recibir inventario en almacén

**Como almacén fiscal**, quiero registrar la recepción de mercancía o contenedor asociado a una orden.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Inventario se asocia a orden.
2. Inventario se asocia a almacén.
3. Cantidad y unidad son válidas.
4. Estado pasa a recibido.
5. Timeline se actualiza.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-014-001-DB` | DB | Crear `warehouses`, `storage_locations`, `inventory_items` |
| `TASK-014-001-BE` | BE | Crear StorageModule |
| `TASK-014-001-FE` | FE | Crear `ReceiveInventoryForm` |
| `TASK-014-001-AUD` | AUD | Auditar recepción |
| `TASK-014-001-QA` | QA | Probar recepción |

---

### US-014-002 — Despachar inventario

**Como almacén**, quiero despachar inventario cuando no existan bloqueos activos.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Solo inventario almacenado/reservado se despacha.
2. No se despacha con bloqueo activo.
3. Despacho genera evidencia si aplica.
4. Estado pasa a despachado.
5. Auditoría crítica se registra.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-014-002-BE` | BE | Crear endpoint despacho |
| `TASK-014-002-FE` | FE | Crear `DispatchForm` |
| `TASK-014-002-AUD` | AUD | Auditar despacho crítico |
| `TASK-014-002-QA` | QA | Probar bloqueo impide despacho |

---

# EPIC-015 — Inspecciones

## 22. Descripción

Implementar inspecciones: creación, asignación, programación, ejecución de checklist, evidencias, revisión, aprobación, observación, rechazo, cierre y bloqueos relacionados.

## 22.1 Historias de usuario

### US-015-001 — Crear y asignar inspección

**Como operador**, quiero crear una inspección y asignarla a un inspector para validar una carga, documento, inventario o contenedor.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Inspección se asocia a orden.
2. Se define tipo de inspección.
3. Se asigna inspector.
4. Estado pasa a asignada.
5. Inspector recibe notificación.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-015-001-DB` | DB | Crear `inspections`, `inspection_checklists` |
| `TASK-015-001-BE` | BE | Crear InspectionsModule |
| `TASK-015-001-FE` | FE | Crear `InspectionForm` |
| `TASK-015-001-FE2` | FE | Crear `InspectionAssignmentPanel` |
| `TASK-015-001-QA` | QA | Probar asignación y scope inspector |

---

### US-015-002 — Ejecutar checklist y cerrar inspección

**Como inspector**, quiero ejecutar un checklist, cargar evidencias y enviar resultado para revisión.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Inspector ve inspecciones asignadas.
2. Completa checklist obligatorio.
3. Carga evidencias requeridas.
4. Envía a revisión.
5. Operador aprueba/rechaza/observa.
6. Rechazo puede crear bloqueo.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-015-002-BE` | BE | Crear endpoints checklist/resultados |
| `TASK-015-002-FE` | FE | Crear `InspectionChecklistRunner` |
| `TASK-015-002-FE2` | FE | Crear `InspectionReviewPanel` |
| `TASK-015-002-AUD` | AUD | Auditar aprobación/rechazo |
| `TASK-015-002-QA` | QA | Probar checklist y evidencias |

---

# EPIC-016 — Pagos

## 23. Descripción

Implementar módulo de pagos manuales con comprobante, revisión, confirmación, rechazo, estado financiero de orden y base futura para pasarelas.

## 23.1 Historias de usuario

### US-016-001 — Registrar pago con comprobante

**Como cliente**, quiero registrar un pago y cargar comprobante para que mi orden avance financieramente.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Pago se asocia a orden.
2. Cliente carga comprobante.
3. Estado pasa a enviado.
4. Orden actualiza estado financiero.
5. Admin/operador recibe notificación.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-016-001-DB` | DB | Crear `payments`, `payment_receipts` |
| `TASK-016-001-BE` | BE | Crear PaymentsModule |
| `TASK-016-001-FE` | FE | Crear `PaymentForm` |
| `TASK-016-001-FE2` | FE | Crear `PaymentReceiptUpload` |
| `TASK-016-001-QA` | QA | Probar pago con comprobante |

---

### US-016-002 — Confirmar o rechazar pago

**Como operador financiero**, quiero confirmar o rechazar pagos con auditoría y motivo.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Confirmar pago requiere permiso.
2. Rechazar pago requiere motivo.
3. Confirmación actualiza orden.
4. Confirmación confirma comisión.
5. Eventos críticos se auditan.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-016-002-BE` | BE | Crear endpoints confirm/reject |
| `TASK-016-002-FE` | FE | Crear `PaymentReviewPanel` |
| `TASK-016-002-AUD` | AUD | Auditar confirmación/rechazo |
| `TASK-016-002-QA` | QA | Probar confirmación y rechazo |

---

# EPIC-017 — Comisiones

## 24. Descripción

Implementar reglas de comisión, cálculo backend, comisión aplicada por orden, neto proveedor, confirmación con pago y reportes de comisiones.

## 24.1 Historias de usuario

### US-017-001 — Configurar reglas de comisión

**Como superadministrador**, quiero configurar reglas de comisión por categoría, tienda o servicio para monetizar el marketplace.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Admin crea regla.
2. Regla tiene tipo, porcentaje o monto fijo.
3. Regla tiene prioridad y vigencia.
4. Cambios se auditan.
5. Regla activa se usa en cálculo.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-017-001-DB` | DB | Crear `commission_rules` |
| `TASK-017-001-BE` | BE | Crear CommissionRulesModule |
| `TASK-017-001-FE` | FE | Crear `CommissionRuleForm` |
| `TASK-017-001-AUD` | AUD | Auditar cambios de reglas |
| `TASK-017-001-QA` | QA | Probar reglas válidas/inválidas |

---

### US-017-002 — Calcular comisión por orden

**Como sistema**, quiero calcular la comisión de una orden usando la regla aplicable.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Backend selecciona regla por jerarquía.
2. Comisión se calcula en backend.
3. Neto proveedor no es negativo.
4. Comisión se asocia a orden.
5. Se confirma al confirmar pago.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-017-002-DB` | DB | Crear `commissions`, `commission_status_history` |
| `TASK-017-002-BE` | BE | Crear motor de cálculo |
| `TASK-017-002-BE2` | BE | Integrar con órdenes y pagos |
| `TASK-017-002-FE` | FE | Crear `CommissionSummaryCard` |
| `TASK-017-002-QA` | QA | Probar cálculo porcentual/fijo |

---

# EPIC-018 — Auditoría y trazabilidad

## 25. Descripción

Implementar auditoría transversal: audit logs, historial, eventos críticos, trazabilidad por entidad, exportaciones y vistas para auditor.

## 25.1 Historias de usuario

### US-018-001 — Registrar audit logs críticos

**Como auditor**, quiero que las acciones críticas queden registradas para poder reconstruir eventos del sistema.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Pagos confirmados generan audit log.
2. Comisiones ajustadas generan audit log.
3. Roles cambiados generan audit log.
4. Gate-out genera audit log.
5. Despachos generan audit log.
6. Logs no guardan secretos.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-018-001-DB` | DB | Crear `audit_logs`, `entity_change_history` |
| `TASK-018-001-BE` | BE | Crear AuditModule |
| `TASK-018-001-BE2` | BE | Crear AuditLoggerService |
| `TASK-018-001-SEC` | SEC | Crear sanitizador de campos sensibles |
| `TASK-018-001-QA` | QA | Probar generación de logs críticos |

---

### US-018-002 — Consultar auditoría por entidad

**Como auditor**, quiero consultar la auditoría de una orden, pago, comisión, contenedor o inspección.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Auditor puede filtrar por entidad.
2. Admin puede consultar global.
3. Operador consulta módulos autorizados.
4. Cliente no ve audit logs internos.
5. Logs muestran old/new values filtrados.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-018-002-BE` | BE | Crear endpoints `/audit` |
| `TASK-018-002-FE` | FE | Crear `AuditLogListPage` |
| `TASK-018-002-FE2` | FE | Crear `AuditDiffViewer` |
| `TASK-018-002-QA` | QA | Probar filtros y permisos |

---

# EPIC-019 — Reportes y dashboards

## 26. Descripción

Implementar dashboards por perfil, reportes operativos, financieros, TOS, transporte, almacenamiento, inspecciones, auditoría y seguridad.

## 26.1 Historias de usuario

### US-019-001 — Dashboard por perfil

**Como usuario**, quiero ver un dashboard con KPIs relevantes para mi perfil.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Cliente ve KPIs propios.
2. Tienda ve KPIs de tienda.
3. Admin ve KPIs globales.
4. Auditor ve KPIs de auditoría.
5. Dashboard respeta scopes.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-019-001-BE` | BE | Crear ReportsModule |
| `TASK-019-001-BE2` | BE | Crear endpoints dashboards |
| `TASK-019-001-FE` | FE | Crear dashboards por perfil |
| `TASK-019-001-QA` | QA | Probar KPIs por perfil |

---

### US-019-002 — Exportar reportes

**Como usuario autorizado**, quiero exportar reportes con motivo para análisis y auditoría.

**Prioridad:** `P2`

**Criterios de aceptación:**

1. Exportar requiere permiso.
2. Exportar requiere motivo.
3. Exportación respeta scope.
4. Se genera audit log.
5. Archivo queda protegido.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-019-002-DB` | DB | Crear `report_exports` |
| `TASK-019-002-BE` | BE | Crear exportador CSV |
| `TASK-019-002-FE` | FE | Crear `ReportExportModal` |
| `TASK-019-002-AUD` | AUD | Auditar exportación |
| `TASK-019-002-QA` | QA | Probar exportación con permisos |

---

# EPIC-020 — Notificaciones

## 27. Descripción

Implementar notificaciones internas para eventos importantes: cotizaciones, órdenes, pagos, inspecciones, transporte, almacenamiento, TOS, comisiones y seguridad.

## 27.1 Historias de usuario

### US-020-001 — Crear sistema de notificaciones internas

**Como usuario**, quiero recibir notificaciones de eventos relevantes para actuar oportunamente.

**Prioridad:** `P1`

**Criterios de aceptación:**

1. Se crean notificaciones por evento.
2. Usuario ve notificaciones propias.
3. Notificación tiene estado leído/no leído.
4. Notificación apunta a ruta relacionada.
5. No expone información sensible indebida.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-020-001-DB` | DB | Crear `notifications` |
| `TASK-020-001-BE` | BE | Crear NotificationsModule |
| `TASK-020-001-FE` | FE | Crear `NotificationsDropdown` |
| `TASK-020-001-FE2` | FE | Crear `NotificationsPage` |
| `TASK-020-001-QA` | QA | Probar notificaciones por usuario |

---

# EPIC-021 — Soporte e incidencias

## 28. Descripción

Implementar módulo básico de soporte: tickets, incidencias, comentarios, relación con órdenes/pagos/documentos y seguimiento por soporte técnico.

## 28.1 Historias de usuario

### US-021-001 — Crear ticket de soporte

**Como usuario**, quiero crear un ticket cuando tenga un problema con una orden, pago, documento o acceso.

**Prioridad:** `P2`

**Criterios de aceptación:**

1. Usuario crea ticket.
2. Ticket tiene módulo relacionado.
3. Ticket tiene prioridad y estado.
4. Soporte puede responder.
5. Acceso respeta scope.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-021-001-DB` | DB | Crear `support_tickets`, `support_ticket_comments` |
| `TASK-021-001-BE` | BE | Crear SupportModule |
| `TASK-021-001-FE` | FE | Crear `SupportTicketForm` |
| `TASK-021-001-FE2` | FE | Crear `SupportTicketsPage` |
| `TASK-021-001-QA` | QA | Probar flujo de ticket |

---

# EPIC-022 — QA, pruebas integrales y hardening

## 29. Descripción

Definir y ejecutar pruebas funcionales, técnicas, seguridad, integración, permisos, scopes, flujos críticos y hardening final del MVP.

## 29.1 Historias de usuario

### US-022-001 — Pruebas de flujo completo cliente-tienda-admin

**Como equipo de desarrollo**, quiero probar el flujo completo desde búsqueda hasta pago confirmado para validar el MVP.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Cliente busca servicio.
2. Cliente solicita cotización.
3. Tienda responde.
4. Cliente aprueba.
5. Se crea orden.
6. Cliente paga.
7. Admin confirma pago.
8. Comisión se confirma.
9. Auditoría se genera.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-022-001-QA` | QA | Crear caso E2E marketplace básico |
| `TASK-022-001-QA2` | QA | Probar scopes por perfil |
| `TASK-022-001-QA3` | QA | Probar auditoría crítica |
| `TASK-022-001-QA4` | QA | Probar errores comunes |

---

### US-022-002 — Pruebas de seguridad y permisos

**Como security engineer**, quiero validar que los permisos, scopes y rutas protegidas funcionen correctamente.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Endpoint sin token devuelve 401.
2. Endpoint sin permiso devuelve 403.
3. Cliente no ve datos de otro cliente.
4. Tienda no ve datos de otra tienda.
5. Auditor no modifica datos.
6. Admin accede globalmente.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-022-002-QA` | QA | Crear pruebas de RBAC |
| `TASK-022-002-QA2` | QA | Crear pruebas de scopes |
| `TASK-022-002-QA3` | QA | Probar rutas frontend protegidas |
| `TASK-022-002-QA4` | QA | Probar archivos protegidos |

---

# EPIC-023 — Documentación Swagger y README técnico

## 30. Descripción

Documentar endpoints, instalación, variables de entorno, flujos técnicos, seeds y ejecución del proyecto para que Antigravity y desarrolladores puedan continuar el desarrollo sin ambigüedad.

## 30.1 Historias de usuario

### US-023-001 — Documentar API Swagger

**Como desarrollador**, quiero tener documentación Swagger para probar endpoints y validar contratos API.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. Swagger existe en backend.
2. Endpoints están agrupados por módulo.
3. DTOs están documentados.
4. Endpoints protegidos indican auth.
5. Swagger no se expone inseguro en producción.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-023-001-BE` | BE | Configurar Swagger |
| `TASK-023-001-DOC` | DOC | Documentar módulos API |
| `TASK-023-001-SEC` | SEC | Proteger Swagger en producción |
| `TASK-023-001-QA` | QA | Validar Swagger por módulo |

---

### US-023-002 — Crear README técnico de ejecución

**Como desarrollador**, quiero instrucciones claras para ejecutar frontend, backend y base de datos.

**Prioridad:** `P0`

**Criterios de aceptación:**

1. README explica instalación.
2. README explica variables de entorno.
3. README explica migraciones.
4. README explica seeds.
5. README explica ejecución local.
6. README explica pruebas.

**Tareas:**

| Tarea | Tipo | Descripción |
|---|---|---|
| `TASK-023-002-DOC` | DOC | Crear README técnico |
| `TASK-023-002-DOC2` | DOC | Documentar comandos frontend/backend |
| `TASK-023-002-DOC3` | DOC | Documentar carga de seeds |
| `TASK-023-002-QA` | QA | Probar instrucciones desde cero |

---

# 31. Roadmap recomendado de implementación por fases

## Fase 1 — Fundaciones técnicas y seguridad

| Orden | Épica | Resultado esperado |
|---|---|---|
| 1 | `EPIC-001` | Proyecto base frontend/backend/database/docs |
| 2 | `EPIC-003` | Auth, RBAC, scopes y rutas protegidas |
| 3 | `EPIC-004` | Catálogos y seeds iniciales |
| 4 | `EPIC-002` | UI base marketplace Yelp-like |
| 5 | `EPIC-005` | Dashboards y navegación por perfil |

## Fase 2 — Marketplace comercial

| Orden | Épica | Resultado esperado |
|---|---|---|
| 6 | `EPIC-006` | Tiendas logísticas y perfiles públicos |
| 7 | `EPIC-007` | Servicios/fichas marketplace |
| 8 | `EPIC-008` | Home, búsqueda, directorio y filtros |
| 9 | `EPIC-009` | Cotizaciones |
| 10 | `EPIC-010` | Órdenes |

## Fase 3 — Finanzas básicas y control

| Orden | Épica | Resultado esperado |
|---|---|---|
| 11 | `EPIC-016` | Pagos manuales con comprobante |
| 12 | `EPIC-017` | Comisiones y neto proveedor |
| 13 | `EPIC-018` | Auditoría crítica integrada |
| 14 | `EPIC-020` | Notificaciones internas |

## Fase 4 — Operación logística avanzada

| Orden | Épica | Resultado esperado |
|---|---|---|
| 15 | `EPIC-011` | Documentos y evidencias transversales |
| 16 | `EPIC-012` | TOS básico |
| 17 | `EPIC-013` | Transporte |
| 18 | `EPIC-014` | Almacenamiento |
| 19 | `EPIC-015` | Inspecciones |

## Fase 5 — Reportes, QA y cierre MVP

| Orden | Épica | Resultado esperado |
|---|---|---|
| 20 | `EPIC-019` | Reportes y dashboards |
| 21 | `EPIC-021` | Soporte básico |
| 22 | `EPIC-022` | QA integral y hardening |
| 23 | `EPIC-023` | Documentación Swagger y README |

---

# 32. MVP mínimo funcional recomendado

Para una primera versión navegable y funcional, Antigravity debe priorizar:

1. Autenticación.
2. Roles y permisos.
3. Catálogos maestros.
4. Home marketplace.
5. Directorio de tiendas y servicios.
6. Perfil público de tienda.
7. Ficha de servicio.
8. Solicitud de cotización.
9. Respuesta de cotización.
10. Aprobación de cotización.
11. Creación de orden.
12. Pago manual con comprobante.
13. Confirmación de pago.
14. Comisión básica.
15. Auditoría crítica.
16. Dashboard cliente.
17. Dashboard tienda.
18. Dashboard superadministrador.
19. Reporte básico de órdenes y pagos.

---

# 33. Definición de terminado general

Una historia se considera terminada cuando:

1. Tiene frontend funcional si aplica.
2. Tiene backend funcional si aplica.
3. Tiene tablas o migraciones si aplica.
4. Tiene validaciones backend.
5. Tiene permisos RBAC.
6. Tiene scopes de datos.
7. Tiene auditoría si la acción es crítica.
8. Tiene notificación si aplica.
9. Tiene estados loading, empty, error y forbidden en frontend.
10. Tiene pruebas básicas.
11. Respeta documentos maestros relacionados.
12. No rompe flujos existentes.
13. Está documentada en Swagger si es endpoint.
14. Usa datos de catálogos maestros cuando corresponde.
15. No depende de Odoo ni de integraciones externas reales.

---

# 34. Riesgos del backlog

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Desarrollar módulos operativos antes de seguridad | Alto | Implementar `EPIC-003` temprano |
| No respetar scopes | Crítico | QA de permisos por perfil |
| Duplicar lógica financiera en frontend | Alto | Cálculos financieros solo en backend |
| Crear reportes antes de datos base | Medio | Reportes después de órdenes/pagos |
| No auditar cambios críticos | Alto | Integrar AuditLogger desde fases tempranas |
| Sobrecargar MVP con integración externa | Alto | Mantener integraciones reales fuera de alcance MVP |
| No seguir diseño visual consistente | Medio | Usar design system y componentes base |
| No cargar seeds | Medio | Seeds obligatorios en fase 1 |
| No documentar endpoints | Medio | Swagger desde fase inicial |

---

# 35. Prompt maestro para Antigravity

```text
Actúa como product owner, scrum master, arquitecto full-stack, backend architect Nest.js, frontend architect React.js, database architect MySQL, security engineer, QA engineer y diseñador UX de marketplace tipo Yelp para el proyecto Marketplace Logístico TOS para Puertos Aduaneros.

Usa el documento `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` como backlog maestro ejecutable del proyecto.

Objetivo:
Desarrollar el marketplace logístico en fases, siguiendo épicas, historias, tareas, prioridades, dependencias, criterios de aceptación y definición de terminado. El sistema debe usar React.js en frontend, Nest.js en backend y MySQL como base de datos. El diseño visual debe inspirarse en Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles de tiendas, servicios destacados, ratings/badges, navegación clara y experiencia responsive.

Reglas obligatorias:
1. Seguir el orden de fases recomendado.
2. Implementar seguridad, RBAC y scopes antes de módulos sensibles.
3. El backend es la fuente de verdad para permisos, scopes, estados y cálculos financieros.
4. El frontend no debe calcular montos críticos como fuente de verdad.
5. Toda acción crítica debe generar auditoría.
6. Toda exportación debe generar auditoría.
7. Cliente solo ve datos propios.
8. Tienda solo ve datos de su tienda.
9. Auditor solo consulta.
10. Superadministrador consulta globalmente.
11. No integrar Odoo; usar Odoo solo como referencia conceptual de normalización.
12. No integrar pasarelas reales en MVP; preparar arquitectura futura.
13. No integrar BI externo en MVP.
14. Usar catálogos maestros para estados, categorías y tipos.
15. Usar seeds demo para probar flujos.
16. Documentar endpoints con Swagger.
17. Crear pruebas por historia.
18. Crear estados frontend: loading, empty, error, forbidden.
19. Respetar todos los documentos maestros previos del plan.
20. No avanzar a módulos complejos sin completar fundaciones técnicas.

Secuencia inicial obligatoria:
1. Crear estructura del proyecto.
2. Configurar backend Nest.js.
3. Configurar frontend React.js.
4. Configurar MySQL.
5. Crear auth.
6. Crear roles, permisos y scopes.
7. Crear catálogos y seeds.
8. Crear design system marketplace tipo Yelp.
9. Crear dashboards por perfil.
10. Crear tiendas, servicios, búsqueda, cotizaciones y órdenes.
11. Crear pagos, comisiones y auditoría.
12. Crear módulos operativos TOS, transporte, almacenamiento e inspecciones.
13. Crear reportes, QA y documentación final.

Antes de programar cada épica, genera:
1. Plan técnico.
2. Archivos a crear/modificar.
3. Tablas necesarias.
4. Endpoints necesarios.
5. Componentes React necesarios.
6. Permisos necesarios.
7. Casos de prueba.
8. Criterios de aceptación.
```

---

# 36. Checklist de uso en Antigravity

- [ ] Guardar este documento como `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Colocarlo en `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo como backlog maestro del proyecto.
- [ ] Crear issues/tareas en Antigravity por épica.
- [ ] Ejecutar fase 1 antes de fase 2.
- [ ] Validar cada historia contra sus criterios de aceptación.
- [ ] Crear pruebas por historia.
- [ ] No saltar seguridad ni scopes.
- [ ] No saltar auditoría en acciones críticas.
- [ ] No crear integraciones externas reales en MVP.
- [ ] Mantener diseño visual coherente con estilo Yelp marketplace.
- [ ] Actualizar el backlog cuando se aprueben cambios de alcance.

---

# 37. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de validación de alcance MVP | Sí |
| Listo para usar en Antigravity | Sí, como backlog maestro inicial |

---

# Fin del documento

