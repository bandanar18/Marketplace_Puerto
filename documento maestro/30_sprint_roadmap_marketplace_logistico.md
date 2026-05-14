# 30_SPRINT_ROADMAP.md

# Documento Maestro de Roadmap por Sprints
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `30_SPRINT_ROADMAP.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Roadmap maestro por sprints, fases, entregables, dependencias y criterios de aceptación |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional + base escalable para módulos logísticos avanzados |
| Estilo visual | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, servicios destacados, badges y experiencia responsive |
| Documento base principal | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` |

---

## 2. Propósito del documento

Este documento define la **hoja de ruta por sprints** para desarrollar el Marketplace Logístico TOS en Antigravity.

Su propósito es convertir el backlog maestro de épicas, historias y tareas en una secuencia de trabajo práctica, ordenada y verificable, de manera que el equipo o la inteligencia de desarrollo pueda construir el software final por iteraciones.

El roadmap debe permitir:

1. Definir fases de desarrollo.
2. Definir sprints numerados.
3. Definir objetivos por sprint.
4. Definir entregables por sprint.
5. Definir épicas involucradas.
6. Definir historias priorizadas.
7. Definir tareas técnicas principales.
8. Definir dependencias.
9. Definir criterios de aceptación.
10. Definir pruebas mínimas.
11. Definir riesgos por sprint.
12. Definir orden recomendado de implementación.
13. Evitar construir módulos avanzados antes de la seguridad, datos base y flujos comerciales.

---

## 3. Objetivo general

Planificar el desarrollo incremental del Marketplace Logístico TOS mediante sprints organizados por fases, garantizando que primero se construyan las fundaciones técnicas, luego el marketplace comercial, después los flujos financieros, posteriormente los módulos logísticos operativos y finalmente los reportes, auditoría, QA y documentación final.

---

## 4. Objetivos específicos

1. Definir un roadmap ejecutable para Antigravity.
2. Organizar el desarrollo por fases.
3. Priorizar el MVP mínimo funcional.
4. Alinear cada sprint con épicas e historias del backlog maestro.
5. Evitar duplicidad de esfuerzos.
6. Asegurar que seguridad, RBAC y scopes se construyan temprano.
7. Asegurar que catálogos y seeds estén disponibles desde el inicio.
8. Implementar primero el flujo cliente-tienda-admin.
9. Implementar pagos, comisiones y auditoría antes de reportes avanzados.
10. Implementar módulos TOS, transporte, almacenamiento e inspecciones de forma progresiva.
11. Definir entregables verificables por sprint.
12. Definir criterios de aceptación y pruebas mínimas.
13. Preparar el proyecto para demostración y validación continua.

---

## 5. Supuestos de planificación

| Supuesto | Definición |
|---|---|
| Duración sugerida de sprint | 1 a 2 semanas por sprint, según capacidad del equipo |
| Metodología | Desarrollo incremental basado en épicas, historias y tareas |
| Arquitectura | React.js frontend, Nest.js backend, MySQL database |
| Integraciones externas reales | Fuera del MVP inicial |
| Odoo | Solo referencia conceptual de normalización, sin integración |
| Pasarela de pago real | Fuera del MVP; se prepara arquitectura futura |
| BI externo | Fuera del MVP; reportes internos básicos |
| Prioridad | Seguridad, datos base, marketplace comercial, pagos, auditoría, operación, reportes |
| Entorno inicial | Local/demo con seeds funcionales |

---

## 6. Principios rectores del roadmap

1. No desarrollar módulos sensibles sin autenticación y RBAC.
2. No desarrollar reportes antes de tener datos operativos suficientes.
3. No desarrollar pagos sin auditoría crítica mínima.
4. No desarrollar comisiones sin reglas claras y cálculo backend.
5. No desarrollar operación logística avanzada sin órdenes funcionales.
6. No crear integraciones externas reales durante el MVP.
7. No depender de Odoo; usar Odoo solo como referencia conceptual.
8. Mantener diseño tipo Yelp desde los primeros sprints.
9. Crear seeds desde fase temprana para probar flujo completo.
10. Probar scopes por perfil en cada sprint sensible.
11. Documentar endpoints conforme se desarrollan.
12. Mantener una demo funcional al final de cada fase.

---

## 7. Fases generales del roadmap

| Fase | Nombre | Objetivo |
|---|---|---|
| Fase 0 | Preparación del plan maestro | Ordenar documentos, reglas y alcance |
| Fase 1 | Fundaciones técnicas y seguridad | Crear base React/Nest/MySQL, auth, RBAC, scopes y catálogos |
| Fase 2 | Marketplace comercial Yelp-like | Home, directorio, tiendas, servicios, búsqueda y cotizaciones |
| Fase 3 | Órdenes, pagos, comisiones y auditoría | Convertir cotizaciones en órdenes y controlar dinero/trazabilidad |
| Fase 4 | Operación logística avanzada | TOS, transporte, almacenamiento, inspecciones, documentos y evidencias |
| Fase 5 | Reportes, dashboards y soporte | KPIs, reportes por perfil, exportaciones y soporte básico |
| Fase 6 | QA integral, hardening y documentación | Pruebas, seguridad, Swagger, README y demo final |

---

## 8. Resumen ejecutivo de sprints

| Sprint | Fase | Nombre | Resultado principal |
|---|---|---|---|
| Sprint 00 | Fase 0 | Preparación Antigravity | Proyecto documentado y listo para iniciar |
| Sprint 01 | Fase 1 | Arquitectura base | React, Nest, MySQL y estructura del proyecto |
| Sprint 02 | Fase 1 | Auth, RBAC y scopes | Login, permisos, roles y rutas protegidas |
| Sprint 03 | Fase 1 | Catálogos, seeds y layouts | Datos base, navegación y dashboards iniciales |
| Sprint 04 | Fase 2 | Design system Yelp-like y home | UI base, home, tarjetas y filtros visuales |
| Sprint 05 | Fase 2 | Tiendas logísticas | Registro, aprobación y perfil público de tienda |
| Sprint 06 | Fase 2 | Servicios marketplace | Fichas de servicios, publicación y detalle |
| Sprint 07 | Fase 2 | Búsqueda, directorio y filtros | Search marketplace funcional |
| Sprint 08 | Fase 2 | Cotizaciones | Solicitud, respuesta, aprobación y rechazo |
| Sprint 09 | Fase 3 | Órdenes | Creación, detalle, timeline y estados |
| Sprint 10 | Fase 3 | Pagos manuales | Pago con comprobante, revisión, confirmación y rechazo |
| Sprint 11 | Fase 3 | Comisiones | Reglas, cálculo, neto proveedor y confirmación |
| Sprint 12 | Fase 3 | Auditoría crítica y notificaciones | Audit logs, eventos críticos y notificaciones internas |
| Sprint 13 | Fase 4 | Documentos y evidencias | Upload seguro, validación y vinculación |
| Sprint 14 | Fase 4 | TOS básico | Contenedores, gate-in, gate-out, movimientos y bloqueos |
| Sprint 15 | Fase 4 | Transporte | Viajes, asignación, estados, incidencia, entrega y POD |
| Sprint 16 | Fase 4 | Almacenamiento | Inventario, recepción, movimiento, bloqueo y despacho |
| Sprint 17 | Fase 4 | Inspecciones | Checklists, evidencias, aprobación, rechazo y cierre |
| Sprint 18 | Fase 5 | Reportes por perfil | KPIs y dashboards por perfil |
| Sprint 19 | Fase 5 | Reportes financieros, auditoría y exportaciones | Reportes sensibles, CSV y audit log de exportación |
| Sprint 20 | Fase 5 | Soporte e incidencias | Tickets básicos y soporte limitado |
| Sprint 21 | Fase 6 | QA integral E2E | Pruebas de flujo completo y permisos |
| Sprint 22 | Fase 6 | Hardening, Swagger y documentación final | Proyecto listo para demo MVP |

---

# FASE 0 — PREPARACIÓN DEL PLAN MAESTRO

---

## 9. Sprint 00 — Preparación Antigravity

### 9.1 Objetivo del sprint

Preparar el entorno conceptual y documental para iniciar el desarrollo en Antigravity, asegurando que todos los documentos maestros estén disponibles, ordenados y referenciados.

### 9.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-023` | Documentación Swagger y README técnico |
| `EPIC-001` | Arquitectura inicial del proyecto |

### 9.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-023-002` | Crear README técnico de ejecución | `P0` |
| `US-001-001` | Crear estructura general del monorepo | `P0` |

### 9.4 Entregables

1. Carpeta `/docs` definida.
2. Documentos maestros listados.
3. Documento índice del plan maestro.
4. README inicial conceptual.
5. Convención de nombres de archivos.
6. Convención de módulos.
7. Convención de ramas o commits, si aplica.

### 9.5 Tareas principales

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR00-TASK-001-DOC` | DOC | Crear índice de documentos maestros |
| `SPR00-TASK-002-DOC` | DOC | Crear README inicial del proyecto |
| `SPR00-TASK-003-DOC` | DOC | Validar nombres de documentos `01` a `30` |
| `SPR00-TASK-004-DOC` | DOC | Preparar prompt inicial de Antigravity |

### 9.6 Criterios de aceptación

1. Todos los documentos maestros están nombrados correctamente.
2. El roadmap por sprints está definido.
3. El backlog maestro está disponible.
4. La arquitectura objetivo está clara.
5. El alcance MVP está identificado.

### 9.7 Riesgos

| Riesgo | Mitigación |
|---|---|
| Iniciar desarrollo sin orden documental | Usar `/docs` como fuente oficial |
| Duplicar tareas en Antigravity | Usar `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` como backlog único |

---

# FASE 1 — FUNDACIONES TÉCNICAS Y SEGURIDAD

---

## 10. Sprint 01 — Arquitectura base React/Nest/MySQL

### 10.1 Objetivo del sprint

Crear la base técnica del proyecto con estructura frontend, backend, database y documentación, permitiendo levantar el sistema en ambiente local/demo.

### 10.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-001` | Arquitectura inicial del proyecto |
| `EPIC-023` | Documentación Swagger y README técnico |

### 10.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-001-001` | Crear estructura general del monorepo | `P0` |
| `US-001-002` | Configurar arquitectura backend Nest.js | `P0` |
| `US-001-003` | Configurar arquitectura frontend React.js | `P0` |
| `US-023-002` | Crear README técnico de ejecución | `P0` |

### 10.4 Entregables

1. Proyecto base React.js.
2. Proyecto base Nest.js.
3. Carpeta database.
4. Carpeta docs.
5. Configuración de variables de entorno.
6. Health check backend.
7. Cliente HTTP frontend.
8. README técnico inicial.

### 10.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR01-TASK-001-FE` | FE | Crear estructura `/frontend` |
| `SPR01-TASK-002-FE` | FE | Crear router base y layouts iniciales |
| `SPR01-TASK-003-FE` | FE | Crear cliente API HTTP |
| `SPR01-TASK-004-BE` | BE | Crear estructura `/backend` Nest.js |
| `SPR01-TASK-005-BE` | BE | Configurar `ConfigModule` |
| `SPR01-TASK-006-BE` | BE | Crear health endpoint |
| `SPR01-TASK-007-DB` | DB | Configurar conexión MySQL |
| `SPR01-TASK-008-DOC` | DOC | Crear README de instalación local |
| `SPR01-TASK-009-QA` | QA | Verificar arranque frontend/backend |

### 10.6 Criterios de aceptación

1. Frontend levanta localmente.
2. Backend levanta localmente.
3. Backend conecta a MySQL.
4. Existe endpoint de health check.
5. Existe README con comandos base.
6. La estructura respeta los documentos maestros.

### 10.7 Dependencias

Ninguna. Es el sprint técnico inicial.

---

## 11. Sprint 02 — Autenticación, RBAC y scopes

### 11.1 Objetivo del sprint

Implementar autenticación, sesiones, roles, permisos, scopes y protección inicial de rutas/endpoints.

### 11.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-003` | Seguridad, autenticación, roles y permisos |
| `EPIC-018` | Auditoría y trazabilidad, base inicial |

### 11.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-003-001` | Registro e inicio de sesión | `P0` |
| `US-003-002` | Roles, permisos y scopes | `P0` |
| `US-003-003` | Rutas protegidas por perfil | `P0` |

### 11.4 Entregables

1. Registro de usuario.
2. Login.
3. Logout.
4. JWT access token.
5. Refresh token básico.
6. Hash de contraseña.
7. Roles y permisos.
8. Guards backend.
9. ProtectedRoute frontend.
10. PermissionGate frontend.
11. Endpoint `/auth/me`.

### 11.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR02-TASK-001-DB` | DB | Crear tablas `users`, `roles`, `permissions`, `user_roles`, `role_permissions`, `user_sessions` |
| `SPR02-TASK-002-BE` | BE | Crear `AuthModule` |
| `SPR02-TASK-003-BE` | BE | Crear endpoints register, login, logout, me |
| `SPR02-TASK-004-SEC` | SEC | Implementar hashing de contraseñas |
| `SPR02-TASK-005-SEC` | SEC | Implementar JWT y refresh token |
| `SPR02-TASK-006-BE` | BE | Crear `JwtAuthGuard` |
| `SPR02-TASK-007-BE` | BE | Crear `PermissionsGuard` |
| `SPR02-TASK-008-BE` | BE | Crear `ScopeGuard` inicial |
| `SPR02-TASK-009-FE` | FE | Crear LoginPage, RegisterPage |
| `SPR02-TASK-010-FE` | FE | Crear ProtectedRoute y PermissionGate |
| `SPR02-TASK-011-QA` | QA | Probar 401, 403, login y logout |

### 11.6 Criterios de aceptación

1. Usuario puede registrarse.
2. Usuario puede iniciar sesión.
3. Contraseña se guarda hasheada.
4. Endpoint protegido sin token devuelve 401.
5. Endpoint sin permiso devuelve 403.
6. Frontend protege rutas privadas.
7. Usuario se redirige por perfil.
8. Auditoría básica de login fallido puede registrarse o dejarse preparada.

### 11.7 Dependencias

Depende de Sprint 01.

---

## 12. Sprint 03 — Catálogos, seeds y navegación por perfil

### 12.1 Objetivo del sprint

Crear catálogos maestros, seeds iniciales, perfiles de usuario y navegación básica por perfil.

### 12.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-004` | Catálogos maestros y seeds iniciales |
| `EPIC-005` | Usuarios, perfiles y navegación |

### 12.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-004-001` | Crear modelo de catálogos maestros | `P0` |
| `US-004-002` | Crear seeds iniciales del MVP | `P0` |
| `US-005-001` | Dashboard cliente final | `P0` |
| `US-005-002` | Dashboard tienda logística | `P0` |
| `US-005-003` | Panel global superadministrador | `P0` |

### 12.4 Entregables

1. Tablas de catálogos.
2. Seeds de perfiles.
3. Seeds de roles y permisos.
4. Seeds de categorías logísticas.
5. Seeds de tipos de tiendas.
6. Seeds de estados.
7. Dashboards iniciales por perfil.
8. Menús por perfil.
9. Navegación horizontal y vertical base.

### 12.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR03-TASK-001-DB` | DB | Crear `master_catalogs`, `master_catalog_items` |
| `SPR03-TASK-002-BE` | BE | Crear `MasterCatalogsModule` |
| `SPR03-TASK-003-SEED` | SEED | Crear seeds de perfiles y roles |
| `SPR03-TASK-004-SEED` | SEED | Crear seeds de categorías, estados, puertos y terminales demo |
| `SPR03-TASK-005-FE` | FE | Crear layouts por perfil |
| `SPR03-TASK-006-FE` | FE | Crear Dashboard cliente, tienda y admin inicial |
| `SPR03-TASK-007-FE` | FE | Crear menús por perfil |
| `SPR03-TASK-008-QA` | QA | Probar navegación y acceso por perfil |

### 12.6 Criterios de aceptación

1. Los catálogos se consultan desde backend.
2. Los seeds cargan correctamente.
3. Cliente ve menú cliente.
4. Tienda ve menú tienda.
5. Admin ve menú global.
6. Auditor queda preparado para modo lectura.
7. Los dashboards iniciales no muestran datos fuera de scope.

### 12.7 Dependencias

Depende de Sprint 02.

---

# FASE 2 — MARKETPLACE COMERCIAL YELP-LIKE

---

## 13. Sprint 04 — Design system Yelp-like y home público

### 13.1 Objetivo del sprint

Implementar el sistema visual base tipo Yelp.com y el home público del marketplace logístico.

### 13.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-002` | Diseño visual marketplace tipo Yelp |
| `EPIC-008` | Home, búsqueda, directorio y filtros |

### 13.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-002-001` | Crear design system base | `P0` |
| `US-002-002` | Crear home público del marketplace | `P0` |
| `US-002-003` | Crear componentes de filtros y directorio | `P0` |

### 13.4 Entregables

1. Header público.
2. Footer público.
3. Hero con buscador.
4. Cards tipo Yelp.
5. Badges de categoría/estado.
6. Filtros visuales.
7. Sección de categorías logísticas.
8. Sección de tiendas destacadas demo.
9. Sección de servicios destacados demo.
10. Responsive base.

### 13.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR04-TASK-001-FE` | FE | Crear componentes UI base: Button, Card, Badge, Input, Tabs |
| `SPR04-TASK-002-FE` | FE | Crear `MarketplaceHeader` y `MarketplaceFooter` |
| `SPR04-TASK-003-FE` | FE | Crear `HomePage` |
| `SPR04-TASK-004-FE` | FE | Crear `StoreCard`, `ServiceCard`, `CategoryCard` |
| `SPR04-TASK-005-FE` | FE | Crear `DirectoryFilters` visual |
| `SPR04-TASK-006-FE` | FE | Crear responsive mobile/tablet/desktop |
| `SPR04-TASK-007-QA` | QA | Validar diseño visual y navegación pública |

### 13.6 Criterios de aceptación

1. Home carga sin autenticación.
2. La interfaz tiene estilo marketplace tipo Yelp.
3. Cards son reutilizables.
4. Filtros se muestran aunque aún usen datos demo.
5. Home es responsive.
6. No hay dependencias externas innecesarias.

### 13.7 Dependencias

Depende de Sprint 01. Se beneficia de Sprint 03 para catálogos demo.

---

## 14. Sprint 05 — Tiendas logísticas y perfiles públicos

### 14.1 Objetivo del sprint

Implementar tiendas logísticas como actores del ecosistema: registro, aprobación, gestión básica y perfil público.

### 14.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-006` | Tiendas logísticas y actores del ecosistema |
| `EPIC-005` | Usuarios, perfiles y navegación |

### 14.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-006-001` | Crear tienda logística | `P0` |
| `US-006-002` | Perfil público de tienda estilo Yelp | `P0` |

### 14.4 Entregables

1. Tabla `stores`.
2. Tabla `store_users`.
3. Registro de tienda.
4. Estado pendiente/aprobada/rechazada/suspendida.
5. Panel admin para aprobar/rechazar tiendas.
6. Perfil público de tienda.
7. Página de tienda en dashboard.
8. Auditoría de aprobación/rechazo.

### 14.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR05-TASK-001-DB` | DB | Crear tablas `stores`, `store_users` |
| `SPR05-TASK-002-BE` | BE | Crear `StoresModule` |
| `SPR05-TASK-003-BE` | BE | Crear endpoints CRUD y aprobación |
| `SPR05-TASK-004-FE` | FE | Crear `StoreRegistrationPage` |
| `SPR05-TASK-005-FE` | FE | Crear `StoreManagementPage` |
| `SPR05-TASK-006-FE` | FE | Crear `StorePublicProfilePage` |
| `SPR05-TASK-007-AUD` | AUD | Auditar aprobación/rechazo/suspensión |
| `SPR05-TASK-008-QA` | QA | Probar creación, aprobación y visibilidad pública |

### 14.6 Criterios de aceptación

1. Usuario puede solicitar tienda.
2. Tienda inicia pendiente.
3. Admin puede aprobar/rechazar.
4. Tienda aprobada puede mostrarse públicamente.
5. Tienda suspendida no puede operar.
6. Perfil público muestra información tipo marketplace.
7. No se ven tiendas de otros usuarios en dashboard tienda.

### 14.7 Dependencias

Depende de Sprint 02 y Sprint 03.

---

## 15. Sprint 06 — Servicios marketplace y fichas de servicios

### 15.1 Objetivo del sprint

Crear servicios logísticos como fichas comerciales publicables por tiendas, con categoría, tarifa, documentos requeridos, reglas, SLA y alcance.

### 15.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-007` | Servicios y fichas marketplace |
| `EPIC-006` | Tiendas logísticas |

### 15.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-007-001` | Crear ficha de servicio | `P0` |
| `US-007-002` | Publicar servicio en directorio | `P0` |
| `US-008-002` | Ver detalle de servicio | `P0` |

### 15.4 Entregables

1. Tabla `services`.
2. Tabla de documentos requeridos por servicio si aplica.
3. CRUD de servicios.
4. Publicar/despublicar servicio.
5. Detalle de servicio público.
6. Tarjeta de servicio.
7. Servicios visibles en tienda pública.

### 15.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR06-TASK-001-DB` | DB | Crear tabla `services` y relaciones básicas |
| `SPR06-TASK-002-BE` | BE | Crear `ServicesModule` |
| `SPR06-TASK-003-BE` | BE | Crear endpoints CRUD y publish/unpublish |
| `SPR06-TASK-004-FE` | FE | Crear `ServiceForm` |
| `SPR06-TASK-005-FE` | FE | Crear `StoreServicesPage` |
| `SPR06-TASK-006-FE` | FE | Crear `ServiceDetailPage` |
| `SPR06-TASK-007-FE` | FE | Crear `ServiceCard` final |
| `SPR06-TASK-008-QA` | QA | Probar servicios por tienda y visibilidad pública |

### 15.6 Criterios de aceptación

1. Tienda aprobada puede crear servicios.
2. Servicio puede quedar en borrador.
3. Servicio publicado aparece públicamente.
4. Servicio inactivo no aparece en directorio.
5. Solo tienda dueña o admin puede editar.
6. Servicio muestra tarifa referencial, SLA y documentos.

### 15.7 Dependencias

Depende de Sprint 05.

---

## 16. Sprint 07 — Búsqueda, directorio y filtros

### 16.1 Objetivo del sprint

Implementar búsqueda y directorio de servicios/tiendas con filtros de marketplace.

### 16.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-008` | Home, búsqueda, directorio y filtros |
| `EPIC-007` | Servicios marketplace |

### 16.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-008-001` | Buscar servicios logísticos | `P0` |
| `US-002-003` | Crear componentes de filtros y directorio | `P0` |

### 16.4 Entregables

1. Endpoint de búsqueda de servicios.
2. Endpoint de búsqueda de tiendas.
3. Filtros por categoría.
4. Filtros por tipo de tienda.
5. Filtros por puerto/terminal demo.
6. Página de resultados.
7. Cards de resultados.
8. Estados loading, empty, error.

### 16.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR07-TASK-001-BE` | BE | Crear endpoint `/search/services` |
| `SPR07-TASK-002-BE` | BE | Crear filtros por categoría, tienda, puerto, terminal |
| `SPR07-TASK-003-FE` | FE | Crear `SearchResultsPage` |
| `SPR07-TASK-004-FE` | FE | Crear `SearchBar` conectado |
| `SPR07-TASK-005-FE` | FE | Crear `FilterSidebar` conectado |
| `SPR07-TASK-006-FE` | FE | Crear paginación básica |
| `SPR07-TASK-007-QA` | QA | Probar búsqueda y filtros combinados |

### 16.6 Criterios de aceptación

1. Usuario puede buscar servicios por texto.
2. Usuario puede filtrar por categoría.
3. Resultados muestran solo servicios publicados.
4. Resultados enlazan al detalle de servicio.
5. Resultados muestran proveedor.
6. La UI mantiene estilo Yelp-like.

### 16.7 Dependencias

Depende de Sprint 06.

---

## 17. Sprint 08 — Cotizaciones

### 17.1 Objetivo del sprint

Implementar el flujo de cotización: cliente solicita, tienda responde, cliente aprueba/rechaza y se prepara conversión a orden.

### 17.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-009` | Cotizaciones |
| `EPIC-020` | Notificaciones, base inicial |

### 17.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-009-001` | Solicitar cotización | `P0` |
| `US-009-002` | Responder cotización | `P0` |
| `US-009-003` | Aprobar cotización y crear orden | `P0` parcial, conversión completa en Sprint 09 |

### 17.4 Entregables

1. Tablas `quotations`, `quotation_lines`.
2. Solicitud de cotización desde servicio.
3. Listado de cotizaciones cliente.
4. Listado de cotizaciones tienda.
5. Respuesta de tienda.
6. Aprobación/rechazo por cliente.
7. Notificación básica.
8. Auditoría básica de respuesta/aprobación.

### 17.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR08-TASK-001-DB` | DB | Crear tablas `quotations`, `quotation_lines` |
| `SPR08-TASK-002-BE` | BE | Crear `QuotationsModule` |
| `SPR08-TASK-003-BE` | BE | Crear endpoint solicitud |
| `SPR08-TASK-004-BE` | BE | Crear endpoint respuesta tienda |
| `SPR08-TASK-005-BE` | BE | Crear endpoint aprobar/rechazar |
| `SPR08-TASK-006-FE` | FE | Crear `QuotationRequestForm` |
| `SPR08-TASK-007-FE` | FE | Crear `ClientQuotationsPage` |
| `SPR08-TASK-008-FE` | FE | Crear `StoreQuotationsPage` |
| `SPR08-TASK-009-FE` | FE | Crear `QuotationResponseForm` |
| `SPR08-TASK-010-QA` | QA | Probar flujo cliente-tienda |

### 17.6 Criterios de aceptación

1. Cliente puede solicitar cotización desde un servicio publicado.
2. Tienda ve cotizaciones de sus servicios.
3. Tienda puede responder con monto y condiciones.
4. Cliente ve respuesta.
5. Cliente puede aprobar o rechazar.
6. Scopes evitan que otra tienda vea la cotización.

### 17.7 Dependencias

Depende de Sprint 07.

---

# FASE 3 — ÓRDENES, PAGOS, COMISIONES Y AUDITORÍA

---

## 18. Sprint 09 — Órdenes y timeline operativo

### 18.1 Objetivo del sprint

Implementar órdenes creadas desde cotizaciones aprobadas, con estados, detalle, timeline y visibilidad por perfil.

### 18.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-010` | Órdenes |
| `EPIC-009` | Cotizaciones |
| `EPIC-018` | Auditoría inicial |

### 18.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-009-003` | Aprobar cotización y crear orden | `P0` completo |
| `US-010-001` | Ver órdenes por perfil | `P0` |
| `US-010-002` | Detalle y timeline de orden | `P0` |
| `US-010-003` | Cerrar o cancelar orden | `P1` básico |

### 18.4 Entregables

1. Tablas `orders`, `order_lines`, `order_events`.
2. Conversión de cotización a orden.
3. Estado operativo de orden.
4. Estado financiero inicial.
5. Listado de órdenes por perfil.
6. Detalle de orden.
7. Timeline de orden.
8. Cierre/cancelación básica con motivo.

### 18.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR09-TASK-001-DB` | DB | Crear tablas `orders`, `order_lines`, `order_events` |
| `SPR09-TASK-002-BE` | BE | Crear `OrdersModule` |
| `SPR09-TASK-003-BE` | BE | Integrar approve quotation → create order |
| `SPR09-TASK-004-BE` | BE | Crear endpoints listado/detalle/timeline |
| `SPR09-TASK-005-BE` | BE | Crear endpoints close/cancel básicos |
| `SPR09-TASK-006-FE` | FE | Crear `OrdersListPage` |
| `SPR09-TASK-007-FE` | FE | Crear `OrderDetailPage` |
| `SPR09-TASK-008-FE` | FE | Crear `OrderTimeline` |
| `SPR09-TASK-009-AUD` | AUD | Auditar creación/cierre/cancelación |
| `SPR09-TASK-010-QA` | QA | Probar flujo cotización → orden |

### 18.6 Criterios de aceptación

1. Cotización aprobada crea orden.
2. Cliente ve orden propia.
3. Tienda ve orden de su servicio.
4. Admin ve todas.
5. Orden tiene timeline.
6. Cancelación exige motivo.
7. Cierre/cancelación genera auditoría.

### 18.7 Dependencias

Depende de Sprint 08.

---

## 19. Sprint 10 — Pagos manuales con comprobante

### 19.1 Objetivo del sprint

Implementar pagos manuales asociados a órdenes, comprobantes, revisión, confirmación, rechazo y actualización del estado financiero.

### 19.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-016` | Pagos |
| `EPIC-011` | Documentos y evidencias, base parcial |
| `EPIC-018` | Auditoría crítica |

### 19.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-016-001` | Registrar pago con comprobante | `P0` |
| `US-016-002` | Confirmar o rechazar pago | `P0` |

### 19.4 Entregables

1. Tablas `payments`, `payment_receipts`, `payment_status_history`.
2. Pago asociado a orden.
3. Carga de comprobante.
4. Estado de pago.
5. Estado financiero de orden.
6. Panel de revisión admin/operador.
7. Confirmación de pago.
8. Rechazo con motivo.
9. Auditoría crítica de pago.

### 19.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR10-TASK-001-DB` | DB | Crear tablas de pagos |
| `SPR10-TASK-002-BE` | BE | Crear `PaymentsModule` |
| `SPR10-TASK-003-BE` | BE | Crear endpoint crear pago |
| `SPR10-TASK-004-BE` | BE | Crear endpoint cargar comprobante |
| `SPR10-TASK-005-BE` | BE | Crear endpoints confirm/reject |
| `SPR10-TASK-006-FE` | FE | Crear `PaymentForm` |
| `SPR10-TASK-007-FE` | FE | Crear `PaymentReceiptUpload` |
| `SPR10-TASK-008-FE` | FE | Crear `PaymentReviewPanel` |
| `SPR10-TASK-009-AUD` | AUD | Auditar confirmación/rechazo |
| `SPR10-TASK-010-QA` | QA | Probar pago confirmado y rechazado |

### 19.6 Criterios de aceptación

1. Cliente registra pago de su orden.
2. Cliente carga comprobante válido.
3. Admin/operador confirma pago.
4. Rechazar pago exige motivo.
5. Confirmar pago actualiza `order.financial_status`.
6. Confirmación genera audit log crítico.
7. Cliente no ve pagos de otros clientes.

### 19.7 Dependencias

Depende de Sprint 09.

---

## 20. Sprint 11 — Comisiones y neto proveedor

### 20.1 Objetivo del sprint

Implementar reglas de comisión, cálculo de comisión, neto proveedor y confirmación de comisión vinculada al pago confirmado.

### 20.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-017` | Comisiones |
| `EPIC-016` | Pagos |
| `EPIC-018` | Auditoría crítica |

### 20.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-017-001` | Configurar reglas de comisión | `P1` |
| `US-017-002` | Calcular comisión por orden | `P1` |

### 20.4 Entregables

1. Tablas `commission_rules`, `commissions`, `commission_status_history`.
2. Regla global demo.
3. Regla por categoría demo.
4. Motor de cálculo backend.
5. Comisión preliminar al crear orden o al confirmar pago.
6. Comisión confirmada cuando el pago se confirma.
7. Neto proveedor visible para tienda.
8. Auditoría de reglas y ajustes.

### 20.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR11-TASK-001-DB` | DB | Crear tablas de comisiones |
| `SPR11-TASK-002-BE` | BE | Crear `CommissionsModule` |
| `SPR11-TASK-003-BE` | BE | Crear `CommissionRulesModule` |
| `SPR11-TASK-004-BE` | BE | Crear motor de selección de regla |
| `SPR11-TASK-005-BE` | BE | Crear motor de cálculo decimal |
| `SPR11-TASK-006-BE` | BE | Integrar comisión con órdenes y pagos |
| `SPR11-TASK-007-FE` | FE | Crear `CommissionRuleForm` |
| `SPR11-TASK-008-FE` | FE | Crear `CommissionSummaryCard` |
| `SPR11-TASK-009-AUD` | AUD | Auditar reglas y confirmación |
| `SPR11-TASK-010-QA` | QA | Probar comisión porcentual/fija/cero |

### 20.6 Criterios de aceptación

1. Admin crea regla de comisión.
2. Backend selecciona regla aplicable.
3. Comisión no es negativa.
4. Neto proveedor no es negativo.
5. Tienda ve neto proveedor.
6. Confirmar pago confirma comisión.
7. Cambios de reglas se auditan.

### 20.7 Dependencias

Depende de Sprint 10.

---

## 21. Sprint 12 — Auditoría crítica y notificaciones internas

### 21.1 Objetivo del sprint

Consolidar auditoría crítica transversal e implementar notificaciones internas para eventos principales del marketplace.

### 21.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-018` | Auditoría y trazabilidad |
| `EPIC-020` | Notificaciones |
| `EPIC-003` | Seguridad |

### 21.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-018-001` | Registrar audit logs críticos | `P0` |
| `US-018-002` | Consultar auditoría por entidad | `P1` |
| `US-020-001` | Crear sistema de notificaciones internas | `P1` |

### 21.4 Entregables

1. `AuditLoggerService` transversal.
2. Tabla `audit_logs` consolidada.
3. Sanitizador de campos sensibles.
4. Audit log para pagos, comisiones, roles y órdenes.
5. Consulta básica de auditoría.
6. Tabla `notifications`.
7. Notificaciones por cotización, orden, pago y comisión.
8. Dropdown de notificaciones.

### 21.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR12-TASK-001-DB` | DB | Crear/ajustar `audit_logs`, `notifications` |
| `SPR12-TASK-002-BE` | BE | Crear `AuditModule` y `AuditLoggerService` |
| `SPR12-TASK-003-SEC` | SEC | Crear sanitizador de campos sensibles |
| `SPR12-TASK-004-BE` | BE | Crear endpoints `/audit` básicos |
| `SPR12-TASK-005-BE` | BE | Crear `NotificationsModule` |
| `SPR12-TASK-006-FE` | FE | Crear `AuditLogListPage` básica |
| `SPR12-TASK-007-FE` | FE | Crear `NotificationsDropdown` |
| `SPR12-TASK-008-FE` | FE | Crear `NotificationsPage` |
| `SPR12-TASK-009-QA` | QA | Probar auditoría crítica y notificaciones |

### 21.6 Criterios de aceptación

1. Confirmar pago genera audit log.
2. Cambiar regla de comisión genera audit log.
3. Cerrar/cancelar orden genera audit log.
4. Audit log no guarda secretos.
5. Usuario ve notificaciones propias.
6. Notificaciones pueden marcarse como leídas.
7. Cliente/tienda/admin reciben notificaciones según evento.

### 21.7 Dependencias

Depende de Sprint 10 y Sprint 11.

---

# FASE 4 — OPERACIÓN LOGÍSTICA AVANZADA

---

## 22. Sprint 13 — Documentos y evidencias transversales

### 22.1 Objetivo del sprint

Implementar carga, consulta, validación, rechazo y vinculación de documentos/evidencias para órdenes, pagos y módulos operativos.

### 22.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-011` | Documentos y evidencias |
| `EPIC-026` | Seguridad, aplicada a archivos |

### 22.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-011-001` | Cargar documentos | `P1` |
| `US-011-002` | Validar o rechazar documento | `P1` |

### 22.4 Entregables

1. Tablas `documents`, `evidences`.
2. Upload seguro.
3. Validación de tipo y tamaño.
4. Vinculación con entidad.
5. Revisión de documentos.
6. Rechazo con motivo.
7. Panel de documentos por orden.
8. Auditoría documental.

### 22.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR13-TASK-001-DB` | DB | Crear `documents`, `evidences` |
| `SPR13-TASK-002-BE` | BE | Crear `DocumentsModule` |
| `SPR13-TASK-003-BE` | BE | Implementar upload seguro |
| `SPR13-TASK-004-SEC` | SEC | Validar MIME, extensión, tamaño y permisos |
| `SPR13-TASK-005-BE` | BE | Crear endpoints validate/reject |
| `SPR13-TASK-006-FE` | FE | Crear `DocumentUpload` |
| `SPR13-TASK-007-FE` | FE | Crear `DocumentReviewPanel` |
| `SPR13-TASK-008-QA` | QA | Probar archivos permitidos/prohibidos |

### 22.6 Criterios de aceptación

1. Usuario autorizado puede cargar documento.
2. Archivo prohibido se rechaza.
3. Archivo grande se rechaza.
4. Documento se vincula a entidad.
5. Validar/rechazar requiere permiso.
6. Rechazo exige motivo.
7. Documentos respetan scope.

### 22.7 Dependencias

Depende de Sprint 12.

---

## 23. Sprint 14 — TOS básico

### 23.1 Objetivo del sprint

Implementar operación TOS básica: contenedores, gate-in, gate-out, movimientos, bloqueos y liberaciones.

### 23.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-012` | TOS operación portuaria |
| `EPIC-018` | Auditoría |

### 23.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-012-001` | Registrar contenedor TOS | `P1` |
| `US-012-002` | Registrar gate-in y gate-out | `P1` |

### 23.4 Entregables

1. Tablas `tos_containers`, `tos_gates`, `tos_movements`, `tos_holds`.
2. Registro de contenedor.
3. Gate-in.
4. Gate-out con validación de bloqueo.
5. Movimiento interno.
6. Bloqueo y liberación.
7. Vista TOS por orden.
8. Auditoría crítica TOS.

### 23.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR14-TASK-001-DB` | DB | Crear tablas TOS básicas |
| `SPR14-TASK-002-BE` | BE | Crear `TosModule` |
| `SPR14-TASK-003-BE` | BE | Crear endpoints contenedores |
| `SPR14-TASK-004-BE` | BE | Crear endpoints gate-in/gate-out |
| `SPR14-TASK-005-BE` | BE | Crear bloqueos/liberaciones |
| `SPR14-TASK-006-FE` | FE | Crear `TosDashboardPage` |
| `SPR14-TASK-007-FE` | FE | Crear formularios TOS |
| `SPR14-TASK-008-AUD` | AUD | Auditar gate-out y bloqueos |
| `SPR14-TASK-009-QA` | QA | Probar gate-out con bloqueo activo |

### 23.6 Criterios de aceptación

1. Contenedor se asocia a orden.
2. Gate-in registra entrada.
3. Gate-out no permite bloqueos activos.
4. Bloqueo exige motivo.
5. Liberación exige permiso.
6. Eventos TOS aparecen en timeline de orden.
7. Gate-out y liberación se auditan.

### 23.7 Dependencias

Depende de Sprint 09 y Sprint 13.

---

## 24. Sprint 15 — Transporte

### 24.1 Objetivo del sprint

Implementar transporte: viajes, vehículos, conductores, asignación, estados, incidencia, entrega y POD.

### 24.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-013` | Transporte |
| `EPIC-011` | Documentos y evidencias |
| `EPIC-018` | Auditoría |

### 24.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-013-001` | Crear viaje de transporte | `P1` |
| `US-013-002` | Actualizar estado del viaje | `P1` |

### 24.4 Entregables

1. Tablas `trips`, `vehicles`, `drivers`, `trip_events`.
2. Crear viaje.
3. Asignar vehículo/conductor.
4. Actualizar estados.
5. Reportar incidencia.
6. Completar entrega.
7. Cargar POD.
8. Timeline de viaje y orden.

### 24.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR15-TASK-001-DB` | DB | Crear tablas transporte |
| `SPR15-TASK-002-BE` | BE | Crear `TransportModule` |
| `SPR15-TASK-003-BE` | BE | Crear endpoints viajes |
| `SPR15-TASK-004-BE` | BE | Crear transición de estados |
| `SPR15-TASK-005-BE` | BE | Integrar POD con evidencias |
| `SPR15-TASK-006-FE` | FE | Crear `TripsListPage` |
| `SPR15-TASK-007-FE` | FE | Crear `TripDetailPage` |
| `SPR15-TASK-008-FE` | FE | Crear `TripStatusActions` |
| `SPR15-TASK-009-AUD` | AUD | Auditar entrega/incidencia |
| `SPR15-TASK-010-QA` | QA | Probar flujo completo de viaje |

### 24.6 Criterios de aceptación

1. Viaje se asocia a orden.
2. Transportista ve viajes propios/asignados.
3. Estados siguen transición válida.
4. Incidencia exige motivo.
5. Entrega requiere POD.
6. Eventos actualizan timeline.
7. Entrega e incidencia se auditan.

### 24.7 Dependencias

Depende de Sprint 13.

---

## 25. Sprint 16 — Almacenamiento

### 25.1 Objetivo del sprint

Implementar almacenamiento: almacenes, ubicaciones, inventario, recepción, ubicación, movimiento, bloqueo, liberación y despacho.

### 25.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-014` | Almacenamiento |
| `EPIC-011` | Evidencias |
| `EPIC-018` | Auditoría |

### 25.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-014-001` | Recibir inventario en almacén | `P1` |
| `US-014-002` | Despachar inventario | `P1` |

### 25.4 Entregables

1. Tablas `warehouses`, `storage_locations`, `inventory_items`, `storage_movements`, `storage_holds`, `dispatches`.
2. Recepción de inventario.
3. Ubicación interna.
4. Movimiento interno.
5. Bloqueo/liberación.
6. Despacho con validación.
7. Evidencias de despacho.
8. Auditoría crítica.

### 25.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR16-TASK-001-DB` | DB | Crear tablas almacenamiento |
| `SPR16-TASK-002-BE` | BE | Crear `StorageModule` |
| `SPR16-TASK-003-BE` | BE | Crear endpoints recepción/movimiento |
| `SPR16-TASK-004-BE` | BE | Crear endpoints bloqueo/liberación |
| `SPR16-TASK-005-BE` | BE | Crear endpoint despacho |
| `SPR16-TASK-006-FE` | FE | Crear `StorageDashboardPage` |
| `SPR16-TASK-007-FE` | FE | Crear `InventoryListPage` |
| `SPR16-TASK-008-FE` | FE | Crear `DispatchForm` |
| `SPR16-TASK-009-AUD` | AUD | Auditar despacho/bloqueo/liberación |
| `SPR16-TASK-010-QA` | QA | Probar despacho con bloqueo activo |

### 25.6 Criterios de aceptación

1. Inventario se asocia a orden y almacén.
2. Inventario recibido puede ubicarse.
3. Inventario bloqueado no puede despacharse.
4. Despacho exige estado válido.
5. Despacho se audita.
6. Almacén solo ve inventario propio.

### 25.7 Dependencias

Depende de Sprint 13.

---

## 26. Sprint 17 — Inspecciones

### 26.1 Objetivo del sprint

Implementar inspecciones: creación, asignación, programación, checklist, evidencias, revisión, aprobación, observación, rechazo, cierre y bloqueos relacionados.

### 26.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-015` | Inspecciones |
| `EPIC-011` | Evidencias |
| `EPIC-018` | Auditoría |

### 26.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-015-001` | Crear y asignar inspección | `P1` |
| `US-015-002` | Ejecutar checklist y cerrar inspección | `P1` |

### 26.4 Entregables

1. Tablas `inspections`, `inspection_checklists`, `inspection_checklist_items`, `inspection_results`.
2. Crear inspección.
3. Asignar inspector.
4. Programar inspección.
5. Ejecutar checklist.
6. Cargar evidencias.
7. Enviar a revisión.
8. Aprobar/observar/rechazar.
9. Crear bloqueo relacionado si aplica.
10. Auditoría crítica.

### 26.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR17-TASK-001-DB` | DB | Crear tablas inspección |
| `SPR17-TASK-002-BE` | BE | Crear `InspectionsModule` |
| `SPR17-TASK-003-BE` | BE | Crear endpoints create/assign/schedule |
| `SPR17-TASK-004-BE` | BE | Crear endpoints checklist/results |
| `SPR17-TASK-005-BE` | BE | Crear endpoints approve/observe/reject/close |
| `SPR17-TASK-006-FE` | FE | Crear `InspectionListPage` |
| `SPR17-TASK-007-FE` | FE | Crear `InspectionDetailPage` |
| `SPR17-TASK-008-FE` | FE | Crear `InspectionChecklistRunner` |
| `SPR17-TASK-009-FE` | FE | Crear `InspectionReviewPanel` |
| `SPR17-TASK-010-AUD` | AUD | Auditar aprobación/rechazo/bloqueos |
| `SPR17-TASK-011-QA` | QA | Probar checklist y evidencias obligatorias |

### 26.6 Criterios de aceptación

1. Inspección se asocia a orden.
2. Inspector solo ve inspecciones asignadas.
3. Checklist obligatorio se completa.
4. Evidencia obligatoria se valida.
5. Rechazo exige motivo.
6. Rechazo puede crear bloqueo.
7. Aprobación/rechazo se audita.

### 26.7 Dependencias

Depende de Sprint 13, y se integra con Sprints 14-16 si existen entidades operativas relacionadas.

---

# FASE 5 — REPORTES, DASHBOARDS Y SOPORTE

---

## 27. Sprint 18 — Reportes y dashboards por perfil

### 27.1 Objetivo del sprint

Implementar dashboards y KPIs por perfil usando datos reales de órdenes, pagos, comisiones y módulos operativos.

### 27.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-019` | Reportes y dashboards |

### 27.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-019-001` | Dashboard por perfil | `P1` |

### 27.4 Entregables

1. ReportsModule.
2. Dashboard cliente.
3. Dashboard tienda.
4. Dashboard admin.
5. Dashboard operador.
6. Dashboard auditor.
7. KPIs básicos comerciales.
8. KPIs básicos operativos.
9. KPIs básicos financieros.

### 27.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR18-TASK-001-DB` | DB | Crear `report_definitions` |
| `SPR18-TASK-002-BE` | BE | Crear `ReportsModule` |
| `SPR18-TASK-003-BE` | BE | Crear endpoints dashboard por perfil |
| `SPR18-TASK-004-BE` | BE | Crear agregadores KPI |
| `SPR18-TASK-005-FE` | FE | Crear `ReportsDashboardPage` |
| `SPR18-TASK-006-FE` | FE | Crear `ReportSummaryCard` y `ReportMetricGrid` |
| `SPR18-TASK-007-FE` | FE | Crear dashboards por perfil |
| `SPR18-TASK-008-QA` | QA | Probar KPIs con scopes |

### 27.6 Criterios de aceptación

1. Cliente ve KPIs propios.
2. Tienda ve KPIs propios.
3. Admin ve KPIs globales.
4. Auditor ve solo lectura.
5. KPIs financieros respetan permisos.
6. Filtros básicos por fecha funcionan.

### 27.7 Dependencias

Depende de Sprints 09-17.

---

## 28. Sprint 19 — Reportes financieros, auditoría y exportaciones

### 28.1 Objetivo del sprint

Implementar reportes financieros, reportes de auditoría, reportes de seguridad y exportaciones controladas.

### 28.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-019` | Reportes y dashboards |
| `EPIC-018` | Auditoría |

### 28.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-019-002` | Exportar reportes | `P2` |
| `US-018-002` | Consultar auditoría por entidad | `P1` ampliada |

### 28.4 Entregables

1. Tabla `report_exports`.
2. Reportes financieros de pagos y comisiones.
3. Reporte de auditoría crítica.
4. Reporte de seguridad.
5. Exportación CSV.
6. Audit log de exportación.
7. Modal de motivo de exportación.
8. Protección por permisos.

### 28.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR19-TASK-001-DB` | DB | Crear `report_exports` |
| `SPR19-TASK-002-BE` | BE | Crear endpoints reportes financieros |
| `SPR19-TASK-003-BE` | BE | Crear endpoints reportes auditoría/seguridad |
| `SPR19-TASK-004-BE` | BE | Crear exportador CSV |
| `SPR19-TASK-005-AUD` | AUD | Auditar exportación |
| `SPR19-TASK-006-FE` | FE | Crear `FinancialReportPage` |
| `SPR19-TASK-007-FE` | FE | Crear `SecurityReportPage` |
| `SPR19-TASK-008-FE` | FE | Crear `ReportExportModal` |
| `SPR19-TASK-009-QA` | QA | Probar exportación con permisos y motivo |

### 28.6 Criterios de aceptación

1. Reporte financiero requiere permiso.
2. Auditor puede consultar sin modificar.
3. Exportar exige motivo.
4. Exportar genera audit log.
5. Exportación respeta scope.
6. Cliente no exporta datos globales.
7. Tienda no exporta datos de otra tienda.

### 28.7 Dependencias

Depende de Sprint 18 y Sprint 12.

---

## 29. Sprint 20 — Soporte e incidencias

### 29.1 Objetivo del sprint

Implementar soporte básico mediante tickets vinculados a usuarios, órdenes, pagos, documentos o módulos operativos.

### 29.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-021` | Soporte e incidencias |

### 29.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-021-001` | Crear ticket de soporte | `P2` |

### 29.4 Entregables

1. Tablas `support_tickets`, `support_ticket_comments`.
2. Crear ticket.
3. Listado de tickets por usuario.
4. Panel soporte.
5. Comentarios.
6. Estados de ticket.
7. Vinculación opcional a orden/pago/documento.
8. Auditoría básica.

### 29.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR20-TASK-001-DB` | DB | Crear tablas soporte |
| `SPR20-TASK-002-BE` | BE | Crear `SupportModule` |
| `SPR20-TASK-003-BE` | BE | Crear endpoints tickets/comentarios |
| `SPR20-TASK-004-FE` | FE | Crear `SupportTicketForm` |
| `SPR20-TASK-005-FE` | FE | Crear `SupportTicketsPage` |
| `SPR20-TASK-006-FE` | FE | Crear `SupportTicketDetailPage` |
| `SPR20-TASK-007-QA` | QA | Probar tickets por scope |

### 29.6 Criterios de aceptación

1. Usuario crea ticket.
2. Ticket tiene módulo relacionado.
3. Soporte ve tickets asignados o autorizados.
4. Usuario ve sus tickets.
5. Comentarios se guardan.
6. Acceso respeta scope.

### 29.7 Dependencias

Depende de Sprint 03 y Sprint 12.

---

# FASE 6 — QA INTEGRAL, HARDENING Y DOCUMENTACIÓN

---

## 30. Sprint 21 — QA integral E2E y regresión

### 30.1 Objetivo del sprint

Validar el MVP completo mediante pruebas funcionales, seguridad, scopes, flujos críticos y regresión.

### 30.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-022` | QA, pruebas integrales y hardening |

### 30.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-022-001` | Pruebas de flujo completo cliente-tienda-admin | `P0` |
| `US-022-002` | Pruebas de seguridad y permisos | `P0` |

### 30.4 Entregables

1. Prueba E2E búsqueda → cotización → orden → pago → comisión → auditoría.
2. Pruebas de cliente.
3. Pruebas de tienda.
4. Pruebas de admin.
5. Pruebas de auditor.
6. Pruebas de transportista, almacén e inspector si módulos están activos.
7. Pruebas de 401/403.
8. Pruebas de archivos.
9. Pruebas de reportes.
10. Lista de bugs y correcciones.

### 30.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR21-TASK-001-QA` | QA | Crear matriz de pruebas E2E |
| `SPR21-TASK-002-QA` | QA | Probar flujo marketplace comercial completo |
| `SPR21-TASK-003-QA` | QA | Probar pagos y comisiones |
| `SPR21-TASK-004-QA` | QA | Probar auditoría crítica |
| `SPR21-TASK-005-QA` | QA | Probar RBAC y scopes |
| `SPR21-TASK-006-QA` | QA | Probar módulos operativos |
| `SPR21-TASK-007-QA` | QA | Registrar bugs encontrados |
| `SPR21-TASK-008-BE` | BE | Corregir bugs backend críticos |
| `SPR21-TASK-009-FE` | FE | Corregir bugs frontend críticos |

### 30.6 Criterios de aceptación

1. Flujo completo cliente-tienda-admin funciona.
2. Pagos y comisiones funcionan.
3. Auditoría crítica se genera.
4. Scopes por perfil son correctos.
5. Módulos operativos no rompen órdenes.
6. No existen errores críticos abiertos.
7. Estados loading, empty, error y forbidden existen en pantallas principales.

### 30.7 Dependencias

Depende de Sprints 01-20.

---

## 31. Sprint 22 — Hardening, Swagger y documentación final

### 31.1 Objetivo del sprint

Cerrar el MVP con hardening de seguridad, documentación Swagger, README técnico, validación de seeds, revisión de variables de entorno y preparación de demo final.

### 31.2 Épicas relacionadas

| Épica | Nombre |
|---|---|
| `EPIC-023` | Documentación Swagger y README técnico |
| `EPIC-022` | QA y hardening |
| `EPIC-003` | Seguridad |

### 31.3 Historias incluidas

| Historia | Nombre | Prioridad |
|---|---|---|
| `US-023-001` | Documentar API Swagger | `P0` |
| `US-023-002` | Crear README técnico de ejecución | `P0` |
| `US-022-002` | Pruebas de seguridad y permisos | `P0` cierre |

### 31.4 Entregables

1. Swagger completo por módulos.
2. README técnico final.
3. `.env.example`.
4. Guía de migraciones.
5. Guía de seeds.
6. Guía de ejecución frontend/backend.
7. Guía de usuarios demo.
8. Hardening CORS.
9. Rate limit en auth.
10. Validación final de permisos.
11. Demo MVP lista.

### 31.5 Tareas técnicas

| Tarea | Tipo | Descripción |
|---|---|---|
| `SPR22-TASK-001-BE` | BE | Configurar Swagger por módulos |
| `SPR22-TASK-002-DOC` | DOC | Documentar endpoints principales |
| `SPR22-TASK-003-DOC` | DOC | Crear README final |
| `SPR22-TASK-004-DOC` | DOC | Crear `.env.example` |
| `SPR22-TASK-005-SEC` | SEC | Revisar CORS, rate limit y errores seguros |
| `SPR22-TASK-006-QA` | QA | Validar instalación desde cero |
| `SPR22-TASK-007-QA` | QA | Validar seeds demo |
| `SPR22-TASK-008-QA` | QA | Ejecutar regresión final |

### 31.6 Criterios de aceptación

1. Swagger documenta endpoints principales.
2. README permite levantar el proyecto desde cero.
3. `.env.example` no tiene secretos reales.
4. Seeds demo cargan correctamente.
5. CORS está configurado.
6. Auth tiene rate limiting básico.
7. Errores no exponen stack trace en producción.
8. Demo final puede ejecutarse.

### 31.7 Dependencias

Depende de Sprint 21.

---

## 32. Roadmap mínimo para demo temprana

Si se requiere una demo temprana antes de completar todos los módulos operativos, se recomienda llegar hasta Sprint 12.

### Demo temprana incluye:

1. Home marketplace.
2. Búsqueda de servicios.
3. Perfil de tienda.
4. Ficha de servicio.
5. Solicitud de cotización.
6. Respuesta de tienda.
7. Aprobación de cotización.
8. Creación de orden.
9. Pago manual con comprobante.
10. Confirmación de pago.
11. Comisión básica.
12. Auditoría crítica.
13. Notificaciones internas.
14. Dashboards básicos cliente/tienda/admin.

### Sprints requeridos:

```txt
Sprint 00 a Sprint 12
```

---

## 33. Roadmap MVP completo recomendado

El MVP completo recomendado requiere completar Sprint 00 a Sprint 22.

### MVP completo incluye:

1. Fundaciones técnicas.
2. Seguridad.
3. RBAC.
4. Catálogos.
5. Seeds.
6. Home Yelp-like.
7. Tiendas.
8. Servicios.
9. Búsqueda.
10. Cotizaciones.
11. Órdenes.
12. Pagos.
13. Comisiones.
14. Auditoría.
15. Notificaciones.
16. Documentos y evidencias.
17. TOS básico.
18. Transporte.
19. Almacenamiento.
20. Inspecciones.
21. Reportes.
22. Soporte básico.
23. QA integral.
24. Swagger.
25. README final.

---

## 34. Matriz de dependencias principales

| Módulo | Depende de |
|---|---|
| Auth/RBAC | Arquitectura base |
| Catálogos | Arquitectura base |
| Dashboards por perfil | Auth/RBAC + perfiles |
| Tiendas | Auth/RBAC + catálogos |
| Servicios | Tiendas + catálogos |
| Búsqueda | Servicios publicados |
| Cotizaciones | Servicios + cliente + tienda |
| Órdenes | Cotizaciones aprobadas |
| Pagos | Órdenes |
| Comisiones | Órdenes + pagos + reglas |
| Auditoría | Seguridad + módulos críticos |
| Notificaciones | Usuarios + eventos de negocio |
| Documentos | Seguridad + entidades base |
| TOS | Órdenes + documentos/evidencias |
| Transporte | Órdenes + documentos/evidencias |
| Almacenamiento | Órdenes + documentos/evidencias |
| Inspecciones | Órdenes + documentos/evidencias |
| Reportes | Datos de órdenes, pagos, comisiones y operación |
| Soporte | Usuarios + módulos base |
| QA integral | Todos los módulos MVP |

---

## 35. Priorización MoSCoW del roadmap

### Must Have

1. Arquitectura base.
2. Auth.
3. RBAC.
4. Scopes.
5. Catálogos.
6. Seeds.
7. Home público.
8. Tiendas.
9. Servicios.
10. Búsqueda.
11. Cotizaciones.
12. Órdenes.
13. Pagos manuales.
14. Comisiones básicas.
15. Auditoría crítica.
16. Dashboards básicos.
17. QA de permisos.
18. Swagger básico.

### Should Have

1. Documentos y evidencias.
2. TOS básico.
3. Transporte.
4. Almacenamiento.
5. Inspecciones.
6. Notificaciones internas.
7. Reportes por perfil.
8. Exportaciones CSV.

### Could Have

1. Soporte e incidencias.
2. Reportes avanzados.
3. Liquidaciones referenciales.
4. Checklists avanzados.
5. Filtros avanzados.

### Won't Have en MVP

1. Pasarela de pago real.
2. Split payments real.
3. Integración Odoo.
4. Integración BI externo.
5. Integración TOS externo real.
6. Integración gubernamental.
7. Firma digital avanzada.
8. IA predictiva.

---

## 36. Definición de listo para iniciar un sprint

Un sprint está listo para iniciar cuando:

1. Sus historias están identificadas.
2. Sus dependencias están completas.
3. Existen criterios de aceptación.
4. Existen tareas frontend/backend/database si aplica.
5. Se conocen permisos requeridos.
6. Se conocen tablas requeridas.
7. Se conocen endpoints requeridos.
8. Se conocen componentes React requeridos.
9. Existen datos demo suficientes o plan de seeds.
10. No hay bloqueos críticos sin resolver.

---

## 37. Definición de terminado por sprint

Un sprint se considera terminado cuando:

1. Todos los entregables principales funcionan.
2. Las historias comprometidas cumplen sus criterios de aceptación.
3. Los endpoints tienen validaciones básicas.
4. Los componentes frontend están conectados al backend o usan mocks controlados si el endpoint está fuera de alcance.
5. Se respetan permisos y scopes.
6. Se generan audit logs si aplica.
7. Se generan notificaciones si aplica.
8. Se agregaron o actualizaron seeds si aplica.
9. Se probaron casos positivos y negativos.
10. No quedan errores críticos abiertos.
11. Swagger se actualizó si hubo endpoints nuevos.
12. README o notas técnicas se actualizaron si hubo cambios relevantes.

---

## 38. Métricas de seguimiento del roadmap

| Métrica | Uso |
|---|---|
| Historias completadas por sprint | Medir avance funcional |
| Tareas técnicas completadas | Medir avance técnico |
| Bugs críticos abiertos | Medir estabilidad |
| Endpoints documentados | Medir calidad API |
| Cobertura de flujos críticos | Medir preparación MVP |
| Casos QA ejecutados | Medir confianza de release |
| Eventos auditados | Medir trazabilidad |
| Módulos con scopes validados | Medir seguridad |
| Pantallas responsive validadas | Medir calidad frontend |
| Seeds funcionales | Medir capacidad demo |

---

## 39. Riesgos generales del roadmap

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Desarrollar módulos fuera de orden | Alto | Seguir dependencias del roadmap |
| Saltar RBAC/scopes | Crítico | QA obligatorio en Sprint 02 y Sprint 21 |
| Crear UI sin backend claro | Medio | Definir endpoints y DTOs por sprint |
| Crear backend sin UI de prueba | Medio | Crear pantallas mínimas por sprint |
| No cargar seeds | Alto | Sprint 03 obligatorio |
| Reportes lentos | Medio | Índices y filtros por fecha/scope |
| Falta de auditoría | Alto | Sprint 12 consolida audit logger |
| Pagos sin control | Crítico | Confirmación con permisos y auditoría |
| Comisiones incorrectas | Alto | Cálculo backend decimal y QA |
| Subir archivos inseguros | Alto | Sprint 13 valida tipo/tamaño/permisos |
| Integraciones externas prematuras | Alto | Mantener fuera del MVP |

---

## 40. Prompt maestro para ejecutar el roadmap en Antigravity

```text
Actúa como product owner, scrum master, arquitecto full-stack, backend architect Nest.js, frontend architect React.js, database architect MySQL, security engineer, QA engineer y diseñador UX marketplace tipo Yelp para el Marketplace Logístico TOS para Puertos Aduaneros.

Usa el documento `30_SPRINT_ROADMAP.md` como hoja de ruta principal para desarrollar el proyecto por sprints en Antigravity.

Objetivo:
Construir el marketplace logístico de manera incremental, siguiendo los sprints definidos, respetando dependencias, entregables, criterios de aceptación, seguridad, RBAC, scopes, auditoría, diseño visual tipo Yelp.com, arquitectura React.js + Nest.js + MySQL y documentos maestros relacionados.

Reglas obligatorias:
1. Seguir el orden de sprints salvo que exista una razón técnica documentada.
2. No construir módulos sensibles antes de Auth/RBAC/scopes.
3. No construir pagos sin auditoría crítica mínima.
4. No construir reportes sin datos base suficientes.
5. El backend es fuente de verdad para permisos, scopes, estados y cálculos financieros.
6. El frontend no calcula montos críticos como fuente de verdad.
7. Toda acción crítica genera audit log.
8. Toda exportación genera audit log.
9. Cliente solo ve datos propios.
10. Tienda solo ve datos de su tienda.
11. Auditor solo consulta.
12. Superadministrador accede globalmente.
13. Usar catálogos maestros y seeds demo.
14. Mantener estilo visual marketplace tipo Yelp.
15. Crear estados loading, empty, error y forbidden en pantallas principales.
16. Documentar endpoints con Swagger.
17. No integrar Odoo; solo usar como referencia conceptual.
18. No integrar pasarela real en MVP.
19. No integrar BI externo en MVP.
20. Cerrar cada sprint con pruebas mínimas.

Para cada sprint, antes de programar, genera:
1. Objetivo técnico.
2. Archivos a crear/modificar.
3. Tablas MySQL requeridas.
4. Endpoints Nest.js requeridos.
5. Componentes React.js requeridos.
6. Permisos y scopes requeridos.
7. Seeds necesarios.
8. Pruebas funcionales.
9. Pruebas de seguridad.
10. Criterios de aceptación.
11. Riesgos y mitigación.

Después de cada sprint, generar:
1. Resumen de entregables completados.
2. Historias terminadas.
3. Historias pendientes.
4. Bugs abiertos.
5. Riesgos.
6. Siguiente sprint recomendado.
```

---

## 41. Checklist de uso del roadmap

- [ ] Guardar este documento como `30_SPRINT_ROADMAP.md`.
- [ ] Colocarlo en `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo junto a `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Ejecutar Sprint 00 antes de programar.
- [ ] Ejecutar Sprint 01 antes de seguridad.
- [ ] Ejecutar Sprint 02 antes de módulos sensibles.
- [ ] Ejecutar Sprint 03 antes de flujo marketplace.
- [ ] Validar cada sprint con criterios de aceptación.
- [ ] Registrar bugs al cierre de cada sprint.
- [ ] No avanzar a pagos sin órdenes funcionales.
- [ ] No avanzar a reportes sin datos suficientes.
- [ ] No avanzar a QA final sin demo estable.
- [ ] Mantener Swagger actualizado.
- [ ] Mantener README actualizado.
- [ ] Confirmar que no existe integración real con Odoo, pasarela real ni BI externo en MVP.

---

## 42. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de validación de duración real por sprint | Sí |
| Listo para usar en Antigravity | Sí, como roadmap maestro inicial |

---

# Fin del documento

