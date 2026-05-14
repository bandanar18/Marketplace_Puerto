# 00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md

# Documento Maestro General del Proyecto
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Tipo de documento | Documento rector, plan maestro general, mapa de ejecución y documento índice del ecosistema documental |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Estilo visual | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, badges, dashboards y experiencia responsive |
| Alcance | Demo temprana + MVP completo + base escalable futura |
| Estado | Documento maestro inicial |
| Versión | 1.0 |
| Fecha referencial | 2026-05-13 |
| Uso principal | Guiar a Antigravity en el desarrollo secuencial del software final |

---

## 2. Propósito del documento

Este documento es el **documento maestro general** del Marketplace Logístico TOS para Puertos Aduaneros.

Su función es servir como punto de entrada, mapa rector y guía principal para que Antigravity pueda desarrollar el software completo de forma ordenada, secuencial, modular, verificable y alineada con los documentos maestros del proyecto.

Este documento conecta:

1. Visión del producto.
2. Alcance MVP.
3. Reglas para Antigravity.
4. Actores del ecosistema.
5. Perfiles de usuario.
6. Matriz de módulos por perfil.
7. Catálogo funcional.
8. Diseño visual marketplace tipo Yelp.
9. Arquitectura técnica.
10. Base de datos MySQL.
11. API Nest.js.
12. Frontend React.js.
13. Catálogos maestros.
14. Fichas de servicios logísticos.
15. Flujos de cotización, orden, TOS, transporte, almacenamiento e inspección.
16. Pagos y comisiones.
17. Seguridad, RBAC y scopes.
18. Auditoría y trazabilidad.
19. Reportes y dashboards.
20. Épicas, historias y tareas.
21. Roadmap por sprints.
22. Prompts para Antigravity.
23. Criterios de aceptación.
24. QA.
25. Despliegue.
26. Operaciones y soporte.
27. Changelog y decisiones.
28. Checklist de artefactos.

---

## 3. Objetivo general del proyecto

Desarrollar una plataforma tipo **marketplace logístico especializado en operaciones TOS, puertos y aduanas**, donde clientes finales puedan buscar, comparar, cotizar y contratar servicios logísticos ofrecidos por diferentes actores del ecosistema portuario-aduanero, mientras cada tienda logística gestiona sus servicios, cotizaciones, órdenes, pagos, documentos, evidencias, operaciones y reportes desde un panel propio.

El sistema debe estar construido con:

- **React.js** para frontend.
- **Nest.js** para backend.
- **MySQL** para base de datos.
- **Antigravity** como plataforma de desarrollo asistido.
- **Diseño visual inspirado en Yelp.com** para experiencia marketplace.

---

## 4. Objetivos específicos

1. Crear un marketplace logístico de servicios portuarios y aduaneros.
2. Permitir que clientes finales busquen servicios logísticos por categoría, proveedor, puerto, terminal, tipo de carga y necesidad operativa.
3. Permitir que tiendas logísticas publiquen fichas de servicios y productos logísticos.
4. Permitir solicitudes de cotización entre clientes y tiendas.
5. Convertir cotizaciones aprobadas en órdenes.
6. Gestionar pagos manuales con comprobante en MVP.
7. Calcular comisiones del marketplace en backend.
8. Gestionar documentos y evidencias por operación.
9. Incluir módulos TOS para contenedores, gates, movimientos y bloqueos.
10. Incluir módulos de transporte, almacenamiento e inspecciones.
11. Implementar dashboards por perfil.
12. Implementar reportes operativos, financieros y de auditoría.
13. Implementar seguridad con RBAC y scopes.
14. Implementar auditoría crítica transversal.
15. Implementar QA, despliegue, operación y soporte como parte del plan maestro.
16. Crear documentación modular lista para Antigravity.
17. Evitar integraciones externas prematuras fuera del MVP.
18. Usar Odoo solo como referencia conceptual de normalización de datos, sin integración real.

---

## 5. Concepto del producto

El Marketplace Logístico TOS conecta tres grandes dimensiones:

### 5.1 Marketplace comercial

Permite a clientes buscar y contratar servicios logísticos mediante una experiencia visual de directorio tipo Yelp:

- Home público.
- Buscador principal.
- Categorías logísticas.
- Tarjetas de tiendas.
- Tarjetas de servicios.
- Filtros laterales.
- Perfiles públicos de tiendas.
- Fichas de servicios.
- Solicitud de cotización.
- Comparación de proveedores.

### 5.2 Operación logística

Permite gestionar el ciclo operativo posterior a la contratación:

- Órdenes.
- Documentos.
- Evidencias.
- TOS.
- Transporte.
- Almacenamiento.
- Inspecciones.
- Timeline operacional.
- Estados operativos, financieros y aduaneros.

### 5.3 Control administrativo

Permite controlar el ecosistema completo:

- Usuarios.
- Roles.
- Permisos.
- Tiendas.
- Servicios.
- Pagos.
- Comisiones.
- Auditoría.
- Reportes.
- Tickets.
- Soporte.
- Changelog.
- Operaciones.

---

## 6. Principios rectores del proyecto

1. El marketplace debe ser modular.
2. El sistema debe ser escalable.
3. El MVP debe evitar complejidad innecesaria.
4. No se debe integrar Odoo en el MVP.
5. Odoo se usa solo como referencia conceptual para normalización.
6. No se debe integrar pasarela real de pagos en el MVP.
7. No se debe integrar BI externo en el MVP.
8. No se debe desarrollar una app móvil nativa en el MVP.
9. No se debe saltar seguridad backend.
10. RBAC y scopes son obligatorios.
11. Toda acción crítica debe generar auditoría.
12. Los cálculos financieros deben hacerse en backend.
13. El frontend no debe ser fuente de verdad financiera ni de seguridad.
14. Los documentos y evidencias deben tener control de permisos.
15. Los reportes deben respetar scopes.
16. Las exportaciones deben auditarse.
17. Cada sprint debe entregar artefactos verificables.
18. Cada historia debe tener criterios de aceptación.
19. Cada release debe tener QA, changelog y deployment plan.
20. La operación y soporte deben diseñarse desde el MVP.

---

## 7. Alcance general del MVP

El MVP incluye:

1. Arquitectura base React.js + Nest.js + MySQL.
2. Autenticación.
3. Usuarios.
4. Roles.
5. Permisos.
6. Scopes.
7. Catálogos maestros.
8. Seeds demo.
9. Home marketplace tipo Yelp.
10. Directorio de servicios.
11. Tiendas logísticas.
12. Fichas de servicios.
13. Búsqueda y filtros.
14. Cotizaciones.
15. Órdenes.
16. Pagos manuales con comprobante.
17. Comisiones marketplace.
18. Auditoría crítica.
19. Notificaciones básicas.
20. Documentos y evidencias.
21. TOS básico.
22. Transporte.
23. Almacenamiento.
24. Inspecciones.
25. Dashboards por perfil.
26. Reportes.
27. Exportaciones CSV controladas.
28. Soporte básico.
29. QA integral.
30. Deployment plan.
31. Operación y soporte.
32. Documentación completa para Antigravity.

---

## 8. Fuera de alcance del MVP

Quedan fuera del MVP inicial:

1. Integración real con Odoo.
2. Pasarela real de pagos.
3. Split payment real.
4. Facturación fiscal productiva.
5. Integración gubernamental aduanera.
6. Integración con TOS externo real.
7. BI externo como Power BI, Tableau o Looker.
8. Data warehouse.
9. Aplicación móvil nativa.
10. Kubernetes obligatorio.
11. Alta disponibilidad multi-región.
12. Inteligencia artificial predictiva.
13. OCR documental avanzado.
14. Firma digital legal avanzada.
15. Notificaciones WhatsApp/SMS productivas.
16. Integración bancaria real.
17. Marketplace internacional multi-moneda avanzado.
18. Contratos legales digitales automatizados.

---

## 9. Perfiles principales del sistema

| Perfil | Descripción |
|---|---|
| Cliente final | Usuario que busca, cotiza, aprueba, paga y da seguimiento a servicios logísticos |
| Tienda logística | Proveedor de servicios logísticos dentro del marketplace |
| Superadministrador | Control global del marketplace, usuarios, tiendas, permisos, comisiones y auditoría |
| Operador interno | Usuario operativo que supervisa órdenes, documentos y operaciones específicas |
| Transportista | Actor encargado de viajes, unidades, conductores, incidencias y POD |
| Almacén fiscal | Actor encargado de recepción, ubicación, inventario, bloqueos y despachos |
| Inspector | Actor encargado de inspecciones, checklists, evidencias y resultados |
| Auditor | Usuario de solo lectura para logs, reportes, trazabilidad y cumplimiento |
| Soporte técnico | Usuario encargado de tickets, incidencias, soporte y seguimiento |

---

## 10. Actores del ecosistema logístico portuario aduanero

| Actor | Rol dentro del marketplace |
|---|---|
| Cliente | Solicita servicios logísticos |
| Importador | Cliente o actor que requiere ingreso de mercancía |
| Exportador | Cliente o actor que requiere salida de mercancía |
| Agente aduanal | Tienda logística de servicios aduaneros |
| Transportista | Tienda o actor operativo de transporte |
| Almacén fiscal | Tienda o actor operativo de almacenamiento |
| Terminal portuaria | Actor operativo portuario |
| Naviera | Actor relacionado con transporte marítimo |
| Aduana | Autoridad o entidad de referencia operativa |
| Autoridad portuaria | Actor regulador o de control portuario |
| Inspector | Actor que ejecuta inspecciones |
| Aseguradora | Tienda logística de seguros |
| Banco | Actor financiero referencial |
| Superadministrador | Dueño/gestor del marketplace |

---

## 11. Verticales y categorías de servicios logísticos

El marketplace organiza sus servicios en las siguientes categorías principales:

1. Aduana.
2. Transporte.
3. Puerto.
4. Terminal.
5. Almacenamiento.
6. Inspección.
7. Seguros.
8. Pagos.
9. Documentación.
10. Tecnología.

Cada categoría puede tener subcategorías y servicios específicos.

---

## 12. Módulos funcionales principales

| Módulo | Descripción |
|---|---|
| Usuarios | Registro, login, perfiles, sesiones |
| Roles y permisos | RBAC, scopes, control de acciones |
| Tiendas | Registro, aprobación, perfiles públicos, suspensión |
| Servicios | Fichas de servicios logísticos publicables |
| Productos | Fichas de productos logísticos si aplica |
| Búsqueda | Directorio, filtros, resultados tipo marketplace |
| Cotizaciones | Solicitud, respuesta, aprobación y rechazo |
| Órdenes | Creación, seguimiento, timeline y cierre |
| Documentos | Upload, validación, rechazo, evidencias |
| Pagos | Registro manual, comprobante, revisión y confirmación |
| Comisiones | Reglas, cálculo, neto proveedor, reportes |
| Reportes | KPIs comerciales, financieros y operativos |
| Auditoría | Trazabilidad crítica de acciones |
| TOS | Contenedores, gate-in, gate-out, movimientos, bloqueos |
| Transporte | Viajes, conductores, vehículos, POD, incidencias |
| Almacenamiento | Inventario, ubicaciones, bloqueos, despachos |
| Inspecciones | Checklists, evidencias, resultados, revisión |
| Notificaciones | Alertas internas por eventos |
| Soporte | Tickets, incidencias, SLA, escalamiento |
| Despliegue | Release, ambientes, migraciones, rollback |
| Operaciones | Monitoreo, soporte, mantenimiento y continuidad |

---

## 13. Matriz resumida de módulos por perfil

| Módulo | Cliente | Tienda | Admin | Operador | Transportista | Almacén | Inspector | Auditor | Soporte |
|---|---|---|---|---|---|---|---|---|---|
| Home/búsqueda | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| Tiendas | Ver | Gestiona propia | Global | Ver | Ver | Ver | Ver | Readonly | Soporte |
| Servicios | Cotizar | CRUD propio | Global | Ver | Ver | Ver | Ver | Readonly | Soporte |
| Cotizaciones | Propias | Recibidas | Global | Supervisar | No | No | No | Readonly | Soporte |
| Órdenes | Propias | Propias | Global | Supervisar | Asignadas | Relacionadas | Relacionadas | Readonly | Soporte |
| Pagos | Propios | Relacionados | Global | Revisión limitada | No | No | No | Readonly | Soporte limitado |
| Comisiones | No | Propias | Global | No | No | No | No | Readonly | No |
| Documentos | Propios | Propios | Global | Revisar | Relacionados | Relacionados | Relacionados | Readonly | Soporte |
| TOS | Seguimiento | Relacionado | Global | Gestiona | Relacionado | Relacionado | Relacionado | Readonly | Soporte |
| Transporte | Seguimiento | Relacionado | Global | Supervisar | Gestiona | No | No | Readonly | Soporte |
| Almacenamiento | Seguimiento | Relacionado | Global | Supervisar | No | Gestiona | No | Readonly | Soporte |
| Inspecciones | Seguimiento | Relacionado | Global | Supervisar | No | No | Gestiona | Readonly | Soporte |
| Reportes | Propios | Propios | Global | Según permiso | Propios | Propios | Propios | Global readonly | Soporte limitado |
| Auditoría | No | Limitada | Global | Limitada | No | No | No | Global readonly | Limitada |
| Soporte | Tickets propios | Tickets propios | Global | Gestiona | Tickets propios | Tickets propios | Tickets propios | Readonly | Gestiona |

---

## 14. Arquitectura técnica general

```txt
Frontend React.js
  ├── Home público
  ├── Directorio marketplace
  ├── Dashboards por perfil
  ├── Formularios
  ├── Reportes
  └── Componentes visuales tipo Yelp

Backend Nest.js
  ├── AuthModule
  ├── UsersModule
  ├── StoresModule
  ├── ServicesModule
  ├── QuotationsModule
  ├── OrdersModule
  ├── PaymentsModule
  ├── CommissionsModule
  ├── DocumentsModule
  ├── AuditModule
  ├── ReportsModule
  ├── TosModule
  ├── TransportModule
  ├── StorageModule
  ├── InspectionsModule
  └── SupportModule

MySQL Database
  ├── users / roles / permissions
  ├── stores / services
  ├── quotations / orders
  ├── payments / commissions
  ├── documents / evidences
  ├── audit_logs
  ├── tos / transport / storage / inspections
  ├── reports / exports
  └── support_tickets
```

---

## 15. Stack oficial aprobado

| Capa | Tecnología |
|---|---|
| Frontend | React.js |
| Backend | Nest.js |
| Base de datos | MySQL |
| API | REST |
| Documentación API | Swagger / OpenAPI |
| UI/UX | Marketplace tipo Yelp.com |
| Autenticación | JWT |
| Control de acceso | RBAC + scopes |
| Auditoría | Audit logs en backend |
| Reportes | React + Nest.js + MySQL |
| Archivos MVP | Storage local seguro o equivalente |
| Desarrollo asistido | Antigravity |

---

## 16. Referencia conceptual Odoo

Odoo se utiliza únicamente como referencia conceptual de normalización.

Modelos Odoo de referencia:

| Modelo Odoo | Uso conceptual |
|---|---|
| `res.users` | Usuarios, login, identidad |
| `res.partner` | Contactos, tiendas, actores, NAP |
| `res.groups` | Roles y permisos |
| `product.template` | Fichas de servicios/productos |
| `product.category` | Categorías de servicios |
| `sale.order` | Órdenes |
| `sale.order.line` | Líneas de orden |
| `account.move` | Documentos financieros referenciales |
| `payment.transaction` | Flujo conceptual de pagos |
| `ir.attachment` | Documentos y evidencias |
| `rating.rating` | Reputación futura |

Regla:

```txt
No crear integración real con Odoo en el MVP.
No consumir APIs Odoo.
No sincronizar datos con Odoo.
```

---

## 17. Estructura documental del proyecto

El proyecto debe organizarse en `/docs` con los siguientes documentos maestros:

| Código | Documento | Función |
|---|---|---|
| 00 | `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md` | Documento rector general |
| 01 | `01_PRODUCT_VISION.md` | Visión de producto |
| 02 | `02_MVP_SCOPE.md` | Alcance MVP |
| 03 | `03_ANTIGRAVITY_RULES.md` | Reglas para Antigravity |
| 04 | `04_ECOSYSTEM_ACTORS_MATRIX.md` | Actores del ecosistema |
| 05 | `05_USER_PROFILES.md` | Perfiles de usuario |
| 06 | `06_MODULE_PROFILE_ACCESS_MATRIX.md` | Acceso por perfil |
| 07 | `07_FUNCTIONAL_MODULES_CATALOG.md` | Catálogo funcional |
| 08 | `08_DESIGN_SYSTEM_MARKETPLACE.md` | Sistema visual marketplace |
| 09 | `09_FRONTEND_COMPONENT_MAP.md` | Mapa de componentes React |
| 10 | `10_NAVIGATION_AND_MENUS.md` | Navegación y menús |
| 11 | `11_TECHNICAL_ARCHITECTURE.md` | Arquitectura técnica |
| 12 | `12_DATABASE_MASTER_SCHEMA.md` | Esquema maestro MySQL |
| 13 | `13_API_SPECIFICATION.md` | Especificación API Nest.js |
| 14 | `14_ODOO_REFERENCE_MODELS.md` | Modelos Odoo referenciales |
| 15 | `15_MASTER_CATALOGS_MVP.md` | Catálogos MVP |
| 16 | `16_SERVICES_MASTER_CATALOG.md` | Catálogo maestro de servicios |
| 17 | `17_INITIAL_SEEDS_PLAN.md` | Plan de seeds iniciales |
| 18 | `18_QUOTATION_WORKFLOW.md` | Flujo de cotizaciones |
| 19 | `19_ORDER_WORKFLOW.md` | Flujo de órdenes |
| 20 | `20_TOS_OPERATION_PLAN.md` | Operación TOS |
| 21 | `21_TRANSPORT_OPERATION_PLAN.md` | Operación transporte |
| 22 | `22_STORAGE_OPERATION_PLAN.md` | Operación almacenamiento |
| 23 | `23_INSPECTION_OPERATION_PLAN.md` | Operación inspecciones |
| 24 | `24_PAYMENTS_MASTER_PLAN.md` | Plan de pagos |
| 25 | `25_COMMISSIONS_MASTER_PLAN.md` | Plan de comisiones |
| 26 | `26_SECURITY_MASTER_PLAN.md` | Plan de seguridad |
| 27 | `27_AUDIT_TRAIL_MASTER_PLAN.md` | Plan de auditoría |
| 28 | `28_REPORTS_MASTER_PLAN.md` | Plan de reportes |
| 29 | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` | Backlog maestro |
| 30 | `30_SPRINT_ROADMAP.md` | Roadmap de sprints |
| 31 | `31_ACCEPTANCE_CRITERIA_MASTER.md` | Criterios de aceptación |
| 32 | `32_ANTIGRAVITY_PROMPTS_MASTER.md` | Prompts maestros |
| 33 | `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` | Checklist de artefactos |
| 34 | `34_CHANGELOG_AND_DECISION_LOG.md` | Cambios y decisiones |
| 35 | `35_QA_MASTER_TEST_PLAN.md` | Plan QA |
| 36 | `36_DEPLOYMENT_MASTER_PLAN.md` | Plan de despliegue |
| 37 | `37_OPERATIONS_AND_SUPPORT_PLAN.md` | Operaciones y soporte |

---

## 18. Función de cada documento maestro

### 18.1 Documentos de definición de producto

- `01_PRODUCT_VISION.md`
- `02_MVP_SCOPE.md`
- `04_ECOSYSTEM_ACTORS_MATRIX.md`
- `05_USER_PROFILES.md`
- `06_MODULE_PROFILE_ACCESS_MATRIX.md`
- `07_FUNCTIONAL_MODULES_CATALOG.md`

Estos documentos definen qué se construye, para quién y con qué módulos.

### 18.2 Documentos de diseño y frontend

- `08_DESIGN_SYSTEM_MARKETPLACE.md`
- `09_FRONTEND_COMPONENT_MAP.md`
- `10_NAVIGATION_AND_MENUS.md`

Estos documentos definen la experiencia visual, navegación, pantallas y componentes React.js.

### 18.3 Documentos técnicos

- `11_TECHNICAL_ARCHITECTURE.md`
- `12_DATABASE_MASTER_SCHEMA.md`
- `13_API_SPECIFICATION.md`
- `14_ODOO_REFERENCE_MODELS.md`
- `15_MASTER_CATALOGS_MVP.md`
- `17_INITIAL_SEEDS_PLAN.md`

Estos documentos definen backend, base de datos, API, catálogos y seeds.

### 18.4 Documentos operativos de negocio

- `16_SERVICES_MASTER_CATALOG.md`
- `18_QUOTATION_WORKFLOW.md`
- `19_ORDER_WORKFLOW.md`
- `20_TOS_OPERATION_PLAN.md`
- `21_TRANSPORT_OPERATION_PLAN.md`
- `22_STORAGE_OPERATION_PLAN.md`
- `23_INSPECTION_OPERATION_PLAN.md`
- `24_PAYMENTS_MASTER_PLAN.md`
- `25_COMMISSIONS_MASTER_PLAN.md`

Estos documentos definen los flujos comerciales, financieros y logísticos.

### 18.5 Documentos de control, calidad y ejecución

- `26_SECURITY_MASTER_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`
- `28_REPORTS_MASTER_PLAN.md`
- `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`
- `30_SPRINT_ROADMAP.md`
- `31_ACCEPTANCE_CRITERIA_MASTER.md`
- `32_ANTIGRAVITY_PROMPTS_MASTER.md`
- `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`
- `34_CHANGELOG_AND_DECISION_LOG.md`
- `35_QA_MASTER_TEST_PLAN.md`
- `36_DEPLOYMENT_MASTER_PLAN.md`
- `37_OPERATIONS_AND_SUPPORT_PLAN.md`

Estos documentos permiten ejecutar, validar, desplegar, operar y soportar el software.

---

## 19. Estructura esperada del repositorio

```txt
marketplace-logistico-tos/
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
    .env.example

  backend/
    src/
      main.ts
      app.module.ts
      config/
      common/
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
    package.json
    tsconfig.json
    .env.example

  database/
    migrations/
    seeds/
    diagrams/
    schema.sql
    seed-demo.sql

  docs/
    00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md
    01_PRODUCT_VISION.md
    ...
    37_OPERATIONS_AND_SUPPORT_PLAN.md

  scripts/
    deploy-demo.sh
    backup-db.sh
    restore-db.sh
    run-migrations.sh
    run-seeds-demo.sh

  tests/
  docker-compose.yml
  README.md
  .env.example
  .gitignore
```

---

## 20. Roadmap general por fases

| Fase | Sprints | Objetivo |
|---|---|---|
| Fase 0 | Sprint 00 | Preparación documental y reglas Antigravity |
| Fase 1 | Sprint 01-03 | Arquitectura, seguridad, catálogos y navegación |
| Fase 2 | Sprint 04-08 | Marketplace comercial tipo Yelp, tiendas, servicios, búsqueda y cotizaciones |
| Fase 3 | Sprint 09-12 | Órdenes, pagos, comisiones, auditoría y notificaciones |
| Fase 4 | Sprint 13-17 | Documentos, TOS, transporte, almacenamiento e inspecciones |
| Fase 5 | Sprint 18-20 | Dashboards, reportes, exportaciones y soporte |
| Fase 6 | Sprint 21-22 | QA integral, hardening, Swagger y documentación final |

---

## 21. Roadmap por sprint

| Sprint | Nombre | Resultado principal |
|---|---|---|
| Sprint 00 | Preparación Antigravity | Documentos, backlog, roadmap y prompts |
| Sprint 01 | Arquitectura base | React/Nest/MySQL funcionando |
| Sprint 02 | Auth, RBAC y scopes | Seguridad base |
| Sprint 03 | Catálogos, seeds y navegación | Datos iniciales y menús por perfil |
| Sprint 04 | Design system y home | Marketplace visual tipo Yelp |
| Sprint 05 | Tiendas logísticas | Registro, aprobación y perfil público |
| Sprint 06 | Servicios | Fichas de servicios publicables |
| Sprint 07 | Búsqueda | Directorio, filtros y resultados |
| Sprint 08 | Cotizaciones | Solicitud, respuesta y aprobación |
| Sprint 09 | Órdenes | Orden desde cotización y timeline |
| Sprint 10 | Pagos | Pago manual con comprobante |
| Sprint 11 | Comisiones | Reglas, cálculo y neto proveedor |
| Sprint 12 | Auditoría y notificaciones | Trazabilidad crítica y alertas |
| Sprint 13 | Documentos | Upload, validación y evidencias |
| Sprint 14 | TOS | Contenedores, gates y bloqueos |
| Sprint 15 | Transporte | Viajes, incidencias y POD |
| Sprint 16 | Almacenamiento | Inventario, bloqueos y despachos |
| Sprint 17 | Inspecciones | Checklists, evidencias y resultados |
| Sprint 18 | Dashboards y reportes | KPIs por perfil |
| Sprint 19 | Exportaciones | CSV, reportes financieros y auditoría |
| Sprint 20 | Soporte | Tickets e incidencias |
| Sprint 21 | QA integral | Pruebas E2E y regresión |
| Sprint 22 | Hardening y documentación | Swagger, README, release final |

---

## 22. Demo temprana

La demo temprana se considera lista al completar Sprint 00 a Sprint 12.

Debe demostrar:

1. Home público.
2. Búsqueda de servicios.
3. Perfil público de tienda.
4. Detalle de servicio.
5. Login cliente.
6. Solicitud de cotización.
7. Login tienda.
8. Respuesta de cotización.
9. Aprobación de cotización.
10. Creación de orden.
11. Pago manual con comprobante.
12. Confirmación de pago por admin.
13. Comisión confirmada.
14. Audit log crítico.
15. Notificaciones.
16. Dashboard cliente.
17. Dashboard tienda.
18. Dashboard admin.
19. Auditoría básica.

---

## 23. MVP completo

El MVP completo se considera listo al completar Sprint 00 a Sprint 22.

Debe incluir:

1. Todo lo de la demo temprana.
2. Documentos y evidencias.
3. TOS básico.
4. Transporte.
5. Almacenamiento.
6. Inspecciones.
7. Reportes por perfil.
8. Reportes financieros.
9. Exportaciones CSV.
10. Auditoría de exportaciones.
11. Soporte básico.
12. Swagger completo.
13. README final.
14. QA integral.
15. Deployment plan.
16. Operación y soporte.
17. Backups básicos.
18. Runbooks mínimos.
19. Release notes.
20. Sin bugs críticos abiertos.

---

## 24. Flujos funcionales maestros

### 24.1 Flujo marketplace comercial

```txt
Cliente entra al home
  ↓
Busca servicio logístico
  ↓
Filtra resultados
  ↓
Abre ficha de servicio
  ↓
Abre perfil de tienda
  ↓
Solicita cotización
  ↓
Tienda responde
  ↓
Cliente aprueba
  ↓
Sistema crea orden
```

### 24.2 Flujo financiero MVP

```txt
Orden creada
  ↓
Cliente registra pago manual
  ↓
Cliente carga comprobante
  ↓
Admin/finanzas revisa pago
  ↓
Admin confirma o rechaza
  ↓
Si confirma: orden pagada
  ↓
Backend calcula comisión
  ↓
Tienda ve neto proveedor
  ↓
Audit log crítico
```

### 24.3 Flujo documental

```txt
Orden o proceso requiere documento
  ↓
Usuario carga archivo
  ↓
Backend valida tipo/tamaño/permiso
  ↓
Documento queda pendiente
  ↓
Operador valida o rechaza
  ↓
Sistema registra evidencia/auditoría
```

### 24.4 Flujo TOS

```txt
Orden relacionada con contenedor
  ↓
Operador registra contenedor
  ↓
Gate-in
  ↓
Movimientos internos
  ↓
Bloqueos si aplica
  ↓
Liberación autorizada
  ↓
Gate-out
  ↓
Audit log crítico
```

### 24.5 Flujo transporte

```txt
Orden requiere transporte
  ↓
Se crea viaje
  ↓
Se asigna conductor/vehículo
  ↓
Viaje programado
  ↓
En tránsito
  ↓
Incidencias si aplica
  ↓
Entrega con POD
  ↓
Timeline actualizado
```

### 24.6 Flujo almacenamiento

```txt
Mercancía recibida
  ↓
Inventario creado
  ↓
Ubicación asignada
  ↓
Movimiento interno
  ↓
Bloqueo si aplica
  ↓
Liberación autorizada
  ↓
Despacho
  ↓
Audit log crítico
```

### 24.7 Flujo inspecciones

```txt
Operador crea inspección
  ↓
Asigna inspector
  ↓
Inspector ejecuta checklist
  ↓
Carga evidencias
  ↓
Envía a revisión
  ↓
Operador aprueba/observa/rechaza
  ↓
Audit log crítico
```

---

## 25. Seguridad, RBAC y scopes

### 25.1 Reglas obligatorias

1. Todo endpoint privado requiere autenticación.
2. Toda acción crítica requiere permiso.
3. Todo acceso a datos sensibles requiere scope.
4. Cliente solo ve datos propios.
5. Tienda solo ve datos de su tienda.
6. Transportista solo ve viajes asignados.
7. Inspector solo ve inspecciones asignadas.
8. Almacén solo ve inventario propio.
9. Auditor ve solo lectura.
10. Soporte tiene acceso limitado.
11. Admin ve global, pero sus acciones críticas se auditan.

### 25.2 Scopes principales

| Scope | Uso |
|---|---|
| `own` | Cliente final ve datos propios |
| `store` | Tienda ve datos propios de tienda |
| `assigned` | Inspector/transportista ve asignaciones |
| `warehouse` | Almacén ve inventario propio |
| `module` | Operador ve módulos autorizados |
| `global` | Superadministrador ve global |
| `global_readonly` | Auditor ve global sin modificar |
| `support_limited` | Soporte ve tickets/casos autorizados |

---

## 26. Auditoría crítica

Deben auditarse:

1. Login fallido repetido.
2. Cambio de rol.
3. Cambio de permiso.
4. Aprobación/rechazo/suspensión de tienda.
5. Publicación/despublicación de servicio.
6. Aprobación de cotización.
7. Creación/cancelación/cierre de orden.
8. Confirmación/rechazo de pago.
9. Cambio de regla de comisión.
10. Ajuste de comisión.
11. Upload/revisión documental crítica.
12. Gate-out TOS.
13. Bloqueo/liberación TOS.
14. Entrega transporte.
15. Despacho almacenamiento.
16. Rechazo de inspección.
17. Exportación de reporte.
18. Cambio de configuración sensible.

---

## 27. Reportes maestros

### 27.1 Reportes cliente

1. Órdenes activas.
2. Cotizaciones pendientes.
3. Pagos pendientes.
4. Documentos pendientes.
5. Historial de servicios contratados.

### 27.2 Reportes tienda

1. Cotizaciones recibidas.
2. Servicios publicados.
3. Órdenes activas.
4. Pagos confirmados.
5. Comisiones.
6. Neto proveedor.

### 27.3 Reportes admin

1. Tiendas activas.
2. Servicios publicados.
3. Órdenes globales.
4. Pagos globales.
5. Comisiones globales.
6. Eventos críticos.
7. Exportaciones.
8. Tickets.

### 27.4 Reportes auditor

1. Audit logs.
2. Cambios de permisos.
3. Pagos confirmados.
4. Comisiones ajustadas.
5. Exportaciones.
6. Incidentes de seguridad.

---

## 28. Catálogos maestros mínimos

1. Categorías de servicios.
2. Subcategorías de servicios.
3. Tipos de tiendas.
4. Tipos de carga.
5. Tipos de contenedores.
6. Tipos de documentos.
7. Estados operativos.
8. Estados financieros.
9. Estados aduaneros.
10. Puertos.
11. Terminales.
12. Tarifas.
13. Comisiones.
14. Roles.
15. Permisos.
16. Tipos de inspección.
17. Estados de viaje.
18. Estados de inventario.
19. Categorías de soporte.
20. Severidades de tickets.

---

## 29. Fichas maestras del marketplace

### 29.1 Ficha de producto o servicio

Debe contener:

1. Código.
2. Nombre.
3. Categoría.
4. Subcategoría.
5. Proveedor.
6. Descripción.
7. Alcance.
8. Documentos requeridos.
9. Tarifa.
10. Unidad de medida.
11. Tiempo estimado.
12. Estado.
13. Reglas.
14. Comisión.
15. SLA.
16. Evidencias.

### 29.2 Ficha de módulo funcional

Debe contener:

1. Código del módulo.
2. Nombre.
3. Perfil.
4. Objetivo.
5. Funcionalidades.
6. Entradas.
7. Procesos.
8. Salidas.
9. Tablas MySQL.
10. Endpoints Nest.js.
11. Componentes React.js.
12. Permisos.
13. Reportes.
14. Auditoría.

### 29.3 Ficha de actor del ecosistema

Debe contener:

1. Código.
2. Nombre del actor.
3. Tipo.
4. Perfil asociado.
5. Servicios que ofrece.
6. Módulos que usa.
7. Documentos requeridos.
8. Estados posibles.
9. Permisos.
10. Reportes.
11. Riesgos.
12. Auditoría asociada.

---

## 30. Criterios de aceptación globales

El proyecto no debe considerarse aceptado si falla cualquiera de estos puntos:

1. El sistema no levanta frontend/backend.
2. MySQL no conecta.
3. Login no funciona.
4. RBAC no funciona.
5. Scopes no funcionan.
6. Cliente ve datos ajenos.
7. Tienda ve datos ajenos.
8. Auditor puede modificar datos.
9. Pago confirmado no actualiza orden.
10. Comisión puede ser negativa.
11. Neto proveedor puede ser negativo.
12. Audit log no registra acciones críticas.
13. Reporte financiero no respeta permisos.
14. Exportación no genera auditoría.
15. Gate-out permite bloqueo activo.
16. Inventario bloqueado puede despacharse.
17. Inspección puede cerrarse sin evidencia obligatoria.
18. Upload permite archivos peligrosos.
19. Swagger no documenta endpoints principales.
20. README no permite ejecutar el sistema.
21. No existe plan de despliegue.
22. No existe plan de soporte.
23. Hay bugs críticos abiertos.

---

## 31. QA maestro

El QA se ejecuta en estos niveles:

1. QA por historia.
2. QA por sprint.
3. QA por módulo.
4. QA frontend.
5. QA backend.
6. QA database.
7. QA API.
8. QA seguridad.
9. QA scopes.
10. QA auditoría.
11. QA pagos.
12. QA comisiones.
13. QA documentos.
14. QA TOS.
15. QA transporte.
16. QA almacenamiento.
17. QA inspecciones.
18. QA reportes.
19. QA exportaciones.
20. QA E2E.
21. QA release.

---

## 32. Flujos E2E obligatorios

1. Cliente busca servicio, solicita cotización, aprueba, paga y consulta orden.
2. Tienda publica servicio, responde cotización y consulta orden.
3. Admin aprueba tienda, confirma pago y revisa comisiones.
4. Auditor consulta logs críticos sin modificar.
5. Cliente no puede ver datos ajenos.
6. Tienda no puede ver datos de otra tienda.
7. Reporte financiero respeta scope.
8. Exportación requiere motivo y genera auditoría.
9. Gate-out falla con bloqueo activo.
10. Despacho falla con inventario bloqueado.
11. Inspección no se cierra sin evidencia obligatoria.

---

## 33. Deployment maestro

El despliegue debe contemplar:

1. Ambiente local.
2. Ambiente demo.
3. Ambiente QA.
4. Ambiente staging futuro.
5. Ambiente producción futuro.
6. Variables de entorno por ambiente.
7. Build frontend.
8. Build backend.
9. Migraciones MySQL.
10. Seeds demo.
11. Backup previo.
12. Storage documental.
13. Swagger protegido.
14. CORS.
15. Rate limit.
16. Logs.
17. Smoke test.
18. Rollback.
19. Release notes.
20. Deployment report.

---

## 34. Operaciones y soporte maestro

El sistema debe contar con:

1. Soporte L0 autoservicio.
2. Soporte L1 atención inicial.
3. Soporte L2 funcional.
4. Soporte L3 técnico.
5. Escalamiento L4 arquitectura/desarrollo.
6. Tickets.
7. Categorías de soporte.
8. Severidades.
9. SLAs.
10. Runbooks.
11. Monitoreo técnico.
12. Monitoreo funcional.
13. Monitoreo financiero.
14. Monitoreo seguridad.
15. Backups.
16. Restauración.
17. Mantenimiento preventivo.
18. Mantenimiento correctivo.
19. Mantenimiento evolutivo.
20. Reportes de soporte.

---

## 35. Decisiones fundacionales aprobadas

| Código | Decisión | Estado |
|---|---|---|
| DEC-2026-001 | Usar React.js como frontend | Aprobada |
| DEC-2026-002 | Usar Nest.js como backend | Aprobada |
| DEC-2026-003 | Usar MySQL como base de datos | Aprobada |
| DEC-2026-004 | Odoo solo como referencia conceptual | Aprobada |
| DEC-2026-005 | Pasarela real fuera del MVP | Aprobada |
| DEC-2026-006 | BI externo fuera del MVP | Aprobada |
| DEC-2026-007 | Diseño visual tipo Yelp.com | Aprobada |
| DEC-2026-008 | RBAC y scopes obligatorios en backend | Aprobada |
| DEC-2026-009 | Auditoría crítica obligatoria | Aprobada |
| DEC-2026-010 | Demo temprana hasta Sprint 12 | Aprobada |

---

## 36. Riesgos principales del proyecto

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Alcance demasiado amplio | Alto | MVP por fases y MoSCoW |
| Integrar pasarela real demasiado pronto | Alto | Mantener fuera del MVP |
| Integrar Odoo real prematuramente | Alto | Usar solo referencia conceptual |
| Fuga de datos por scope | Crítico | ScopeGuard + QA seguridad |
| Pagos/comisiones incorrectos | Crítico | Cálculo backend + QA financiero |
| Falta de auditoría crítica | Alto | AuditLogger obligatorio |
| Seeds inconsistentes | Medio | Seeds idempotentes/controlados |
| Reportes fuera de scope | Alto | QA reportes y permisos |
| Upload inseguro | Alto | Validar MIME, extensión, tamaño |
| Despliegue sin rollback | Alto | Deployment plan obligatorio |
| Operación sin soporte | Medio | Operations and support plan |

---

## 37. Criterio de priorización MoSCoW

| Prioridad | Descripción |
|---|---|
| Must have | Obligatorio para demo/MVP |
| Should have | Importante, puede entrar si no bloquea |
| Could have | Deseable, fase futura o mejora |
| Won't have now | Excluido del MVP |

### Must have MVP

1. Auth.
2. RBAC.
3. Scopes.
4. Tiendas.
5. Servicios.
6. Búsqueda.
7. Cotizaciones.
8. Órdenes.
9. Pagos manuales.
10. Comisiones.
11. Auditoría.
12. Documentos.
13. Reportes.
14. QA.
15. Deployment.

### Won't have now

1. Odoo real.
2. Pasarela real.
3. BI externo.
4. App móvil nativa.
5. Integración aduanera real.
6. Split payment real.

---

## 38. Orden recomendado de ejecución en Antigravity

```txt
1. Cargar todos los documentos maestros en /docs
2. Leer 00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md
3. Leer 03_ANTIGRAVITY_RULES.md
4. Leer 30_SPRINT_ROADMAP.md
5. Leer 31_ACCEPTANCE_CRITERIA_MASTER.md
6. Leer 32_ANTIGRAVITY_PROMPTS_MASTER.md
7. Leer 33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md
8. Ejecutar Sprint 01
9. Validar Sprint 01
10. Ejecutar Sprint 02
11. Validar seguridad
12. Continuar sprint por sprint
13. Ejecutar QA por sprint
14. Registrar cambios en changelog
15. Preparar despliegue demo
16. Ejecutar QA release
17. Desplegar demo
18. Continuar hasta MVP completo
```

---

## 39. Prompt maestro inicial para Antigravity

```text
Actúa como product owner, arquitecto full-stack, frontend architect React.js, backend architect Nest.js, database architect MySQL, QA lead, DevOps, security engineer, auditor técnico y responsable de operaciones del proyecto Marketplace Logístico TOS para Puertos Aduaneros.

Tu objetivo es desarrollar el software completo usando:
- Frontend: React.js
- Backend: Nest.js
- Base de datos: MySQL
- Diseño visual: marketplace tipo Yelp.com
- Plataforma de desarrollo: Antigravity

Lee primero el documento:
`00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`

Luego usa como fuente obligatoria todos los documentos maestros del 01 al 37 ubicados en `/docs`.

Reglas obligatorias:
1. No integrar Odoo en el MVP.
2. No integrar pasarela real en el MVP.
3. No integrar BI externo en el MVP.
4. No omitir RBAC.
5. No omitir scopes.
6. No omitir auditoría crítica.
7. No calcular pagos ni comisiones en frontend como fuente de verdad.
8. No cerrar historia sin criterios de aceptación.
9. No cerrar sprint sin QA.
10. No desplegar sin deployment checklist.
11. No operar sin soporte y runbooks mínimos.
12. Mantener diseño tipo Yelp en home, búsqueda, tiendas y servicios.
13. Validar cada módulo contra `31_ACCEPTANCE_CRITERIA_MASTER.md`.
14. Validar cada sprint contra `30_SPRINT_ROADMAP.md`.
15. Validar cada artefacto contra `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
16. Registrar cambios críticos en `34_CHANGELOG_AND_DECISION_LOG.md`.

Primera tarea:
Revisar la estructura documental, confirmar documentos disponibles y preparar ejecución del Sprint 01.

Entrega inicial:
1. Resumen del proyecto.
2. Stack confirmado.
3. Módulos principales.
4. Roadmap resumido.
5. Riesgos iniciales.
6. Checklist de documentos encontrados/faltantes.
7. Plan de acción para Sprint 01.
```

---

## 40. Checklist de inicio del proyecto

- [ ] Crear repositorio base.
- [ ] Crear carpeta `/docs`.
- [ ] Guardar documentos `00` a `37`.
- [ ] Crear carpeta `/frontend`.
- [ ] Crear carpeta `/backend`.
- [ ] Crear carpeta `/database`.
- [ ] Crear carpeta `/scripts`.
- [ ] Crear `.env.example`.
- [ ] Crear `README.md` inicial.
- [ ] Confirmar stack React.js + Nest.js + MySQL.
- [ ] Confirmar que Odoo no será integración real.
- [ ] Confirmar que pasarela real no entra en MVP.
- [ ] Confirmar que BI externo no entra en MVP.
- [ ] Ejecutar Sprint 01.

---

## 41. Checklist antes de iniciar cada sprint

- [ ] Revisar `30_SPRINT_ROADMAP.md`.
- [ ] Revisar historias del sprint en `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Revisar criterios en `31_ACCEPTANCE_CRITERIA_MASTER.md`.
- [ ] Revisar artefactos esperados en `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Revisar prompts aplicables en `32_ANTIGRAVITY_PROMPTS_MASTER.md`.
- [ ] Identificar tablas MySQL.
- [ ] Identificar endpoints Nest.js.
- [ ] Identificar componentes React.js.
- [ ] Identificar permisos y scopes.
- [ ] Identificar audit logs requeridos.
- [ ] Identificar pruebas QA.
- [ ] Confirmar dependencias del sprint.

---

## 42. Checklist antes de cerrar cada sprint

- [ ] Historias P0 completadas.
- [ ] Artefactos frontend creados.
- [ ] Artefactos backend creados.
- [ ] Migraciones creadas/probadas.
- [ ] Seeds actualizados si aplica.
- [ ] Endpoints documentados en Swagger.
- [ ] Permisos aplicados.
- [ ] Scopes aplicados.
- [ ] Audit logs implementados si aplica.
- [ ] Notificaciones implementadas si aplica.
- [ ] QA funcional ejecutado.
- [ ] QA seguridad ejecutado.
- [ ] QA scope ejecutado.
- [ ] Bugs críticos cerrados.
- [ ] Changelog actualizado si hubo cambios relevantes.
- [ ] Sprint marcado como aceptado, rechazado o aceptado con observaciones.

---

## 43. Checklist de release demo

- [ ] Sprint 00 a Sprint 12 completados.
- [ ] Home público listo.
- [ ] Búsqueda lista.
- [ ] Tiendas listas.
- [ ] Servicios listos.
- [ ] Cotizaciones listas.
- [ ] Órdenes listas.
- [ ] Pagos manuales listos.
- [ ] Comisiones listas.
- [ ] Auditoría crítica lista.
- [ ] Notificaciones listas.
- [ ] Dashboards básicos listos.
- [ ] QA demo aprobado.
- [ ] Release notes creadas.
- [ ] Deployment plan ejecutado.
- [ ] Smoke test aprobado.
- [ ] No hay bugs críticos.

---

## 44. Checklist de release MVP completo

- [ ] Sprint 00 a Sprint 22 completados.
- [ ] Demo temprana completa.
- [ ] Documentos/evidencias listos.
- [ ] TOS listo.
- [ ] Transporte listo.
- [ ] Almacenamiento listo.
- [ ] Inspecciones listas.
- [ ] Reportes listos.
- [ ] Exportaciones listas.
- [ ] Soporte listo.
- [ ] QA integral aprobado.
- [ ] Swagger completo.
- [ ] README final.
- [ ] Deployment report.
- [ ] Operations and support plan validado.
- [ ] Backups configurados.
- [ ] Runbooks mínimos listos.
- [ ] Changelog actualizado.
- [ ] No hay SEV-1 ni bugs críticos abiertos.

---

## 45. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Documento rector general | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de validación con todos los documentos maestros | Sí |
| Listo para usar en Antigravity | Sí, como documento maestro inicial |

---

# Fin del documento

