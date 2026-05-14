# 17_INITIAL_SEEDS_PLAN.md

# Documento Maestro del Plan de Seeds Iniciales
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `17_INITIAL_SEEDS_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro técnico de carga inicial de datos |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de seeds iniciales** para cargar datos base en el Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la creación de seeds seguros, repetibles, ordenados, auditables y consistentes para levantar el MVP con datos mínimos funcionales.

Los seeds iniciales deben permitir que el sistema pueda iniciar con:

1. Perfiles de usuario.
2. Roles.
3. Permisos.
4. Niveles de acceso.
5. Módulos funcionales.
6. Matriz perfil-módulo.
7. Menús por perfil.
8. Catálogos maestros.
9. Actores del ecosistema.
10. Tiendas demo.
11. Usuarios demo.
12. Servicios demo.
13. Reglas de comisión.
14. Métodos de pago.
15. Documentos requeridos.
16. Estados operativos.
17. Estados financieros.
18. Estados documentales.
19. TOS básico demo.
20. Transporte demo.
21. Almacenamiento demo.
22. Inspecciones demo.
23. Reportes base.
24. Eventos de auditoría.
25. Configuración global.
26. Notificaciones demo.
27. Soporte demo.

---

## 3. Objetivo general

Definir un plan de carga inicial de datos que permita inicializar el marketplace logístico en ambiente local, development, staging o demo con una base funcional coherente, evitando datos huérfanos, duplicados, inconsistencias de RBAC, catálogos incompletos o flujos operativos rotos.

---

## 4. Objetivos específicos

1. Definir el orden correcto de ejecución de seeds.
2. Definir dependencias entre seeds.
3. Definir datos mínimos por módulo.
4. Definir datos demo diferenciados de datos del sistema.
5. Definir reglas de idempotencia.
6. Definir estructura recomendada de archivos seed.
7. Definir convenciones de códigos.
8. Definir usuarios demo y accesos por perfil.
9. Definir tiendas demo.
10. Definir servicios demo.
11. Definir flujos demo de cotización, orden, documento, pago y comisión.
12. Definir validaciones post-seed.
13. Definir estrategia de rollback.
14. Definir pruebas mínimas de seeds.
15. Servir como prompt para Antigravity.

---

## 5. Principios obligatorios de seeds

Antigravity debe respetar los siguientes principios:

1. Los seeds deben ser idempotentes.
2. Ejecutar el seed dos veces no debe duplicar datos.
3. Cada registro seed debe tener un código único estable.
4. Los datos del sistema deben diferenciarse de los datos demo.
5. No usar datos personales reales.
6. No usar contraseñas reales.
7. No hardcodear secretos.
8. No depender de Odoo.
9. Odoo solo puede usarse como referencia conceptual.
10. Los seeds deben respetar migraciones existentes.
11. Los seeds deben ejecutarse después de migraciones.
12. Los seeds deben respetar llaves foráneas.
13. Los seeds deben crear primero datos maestros y luego datos transaccionales.
14. Los seeds deben poder ejecutarse por fase.
15. Los seeds críticos deben registrar auditoría inicial si aplica.
16. Los seeds de producción deben ser mínimos y seguros.
17. Los seeds demo solo deben cargarse en ambientes demo, local o staging.
18. Las contraseñas demo deben cambiarse antes de producción.
19. Los seeds deben poder validarse con tests.
20. Los seeds deben estar documentados.

---

## 6. Clasificación de seeds

| Tipo de seed | Descripción | Ambiente sugerido |
|---|---|---|
| Seed sistema | Datos indispensables para que el sistema funcione | Todos |
| Seed configuración | Parámetros globales y reglas base | Local, dev, staging, producción controlada |
| Seed demo | Datos ficticios para demostración funcional | Local, dev, staging |
| Seed QA | Datos diseñados para pruebas automáticas | Testing |
| Seed desarrollo | Datos ampliados para pruebas de desarrollo | Local, dev |
| Seed producción | Datos mínimos no sensibles | Producción |

---

## 7. Orden maestro de ejecución de seeds

El orden de ejecución debe respetar dependencias.

```txt
01_user_profiles
02_access_levels
03_modules
04_roles
05_permissions
06_role_permissions
07_profile_module_access
08_master_catalogs
09_master_catalog_items
10_navigation_menus
11_navigation_menu_items
12_global_settings
13_ecosystem_actors
14_payment_methods
15_commission_rules
16_audit_events
17_report_definitions
18_demo_users
19_demo_stores
20_demo_store_users
21_demo_services
22_demo_service_pricing
23_demo_service_documents
24_demo_quotations
25_demo_orders
26_demo_documents
27_demo_payments
28_demo_commissions
29_demo_tos
30_demo_transport
31_demo_storage
32_demo_inspections
33_demo_support
34_demo_notifications
35_validation_seed_checks
```

---

## 8. Estructura recomendada de carpetas seed

```txt
/backend-nest
  /src
    /database
      /seeds
        /system
          01_user_profiles.seed.ts
          02_access_levels.seed.ts
          03_modules.seed.ts
          04_roles.seed.ts
          05_permissions.seed.ts
          06_role_permissions.seed.ts
          07_profile_module_access.seed.ts
          08_master_catalogs.seed.ts
          09_master_catalog_items.seed.ts
          10_navigation_menus.seed.ts
          11_navigation_menu_items.seed.ts
          12_global_settings.seed.ts
          13_ecosystem_actors.seed.ts
          14_payment_methods.seed.ts
          15_commission_rules.seed.ts
          16_audit_events.seed.ts
          17_report_definitions.seed.ts
        /demo
          18_demo_users.seed.ts
          19_demo_stores.seed.ts
          20_demo_store_users.seed.ts
          21_demo_services.seed.ts
          22_demo_service_pricing.seed.ts
          23_demo_service_documents.seed.ts
          24_demo_quotations.seed.ts
          25_demo_orders.seed.ts
          26_demo_documents.seed.ts
          27_demo_payments.seed.ts
          28_demo_commissions.seed.ts
          29_demo_tos.seed.ts
          30_demo_transport.seed.ts
          31_demo_storage.seed.ts
          32_demo_inspections.seed.ts
          33_demo_support.seed.ts
          34_demo_notifications.seed.ts
        /qa
          qa_test_dataset.seed.ts
        seed-runner.ts
        seed-utils.ts
```

---

## 9. Convenciones de códigos seed

| Entidad | Formato | Ejemplo |
|---|---|---|
| Perfil | `PROF-[TIPO]-[###]` | `PROF-CLI-001` |
| Rol | `ROLE-[NOMBRE]` | `ROLE-SUPERADMIN` |
| Permiso | `[modulo].[accion]` | `stores.approve` |
| Módulo | `MOD-[COD]-[###]` | `MOD-STO-007` |
| Catálogo | `UPPER_SNAKE_CASE` | `SERVICE_CATEGORIES` |
| Ítem catálogo | `UPPER_SNAKE_CASE` | `CUSTOMS_CLEARANCE` |
| Actor | `ACT-[COD]-[###]` | `ACT-CUSTOMS-004` |
| Tienda | `STO-[COD]-[###]` | `STO-ADU-001` |
| Servicio | `SER-[CAT]-[###]` | `SER-ADU-001` |
| Cotización | `COT-[AAAA]-[###]` | `COT-2026-001` |
| Orden | `ORD-[AAAA]-[###]` | `ORD-2026-001` |
| Documento | `DOC-[AAAA]-[###]` | `DOC-2026-001` |
| Pago | `PAY-[AAAA]-[###]` | `PAY-2026-001` |
| Comisión | `COM-[AAAA]-[###]` | `COM-2026-001` |
| Contenedor | Número ISO o demo | `MSCU1234567` |
| Viaje | `TRP-[AAAA]-[###]` | `TRP-2026-001` |
| Inspección | `INS-[AAAA]-[###]` | `INS-2026-001` |
| Ticket | `TCK-[AAAA]-[###]` | `TCK-2026-001` |

---

# 10. Fase 1 — Seeds de perfiles de usuario

## 10.1 Tabla objetivo

`user_profiles`

## 10.2 Objetivo

Crear los perfiles funcionales base del marketplace.

## 10.3 Seeds obligatorios

| Código | Nombre | Ruta dashboard | Estado |
|---|---|---|---|
| `PROF-CLI-001` | Cliente final | `/dashboard/client` | active |
| `PROF-TIE-002` | Tienda logística | `/dashboard/store` | active |
| `PROF-SUP-003` | Superadministrador | `/admin` | active |
| `PROF-OPE-004` | Operador interno | `/operator` | active |
| `PROF-INS-005` | Inspector | `/inspector` | active |
| `PROF-TRA-006` | Transportista | `/carrier` | active |
| `PROF-ADU-007` | Agente aduanal | `/customs-agent` | active |
| `PROF-AUD-008` | Auditor | `/auditor` | active |
| `PROF-SOP-009` | Soporte técnico | `/support` | active |

## 10.4 Regla técnica

El seed debe buscar por `profile_code`. Si existe, actualiza campos no críticos; si no existe, crea.

---

# 11. Fase 2 — Seeds de niveles de acceso

## 11.1 Tabla objetivo

`access_levels`

## 11.2 Seeds obligatorios

| Código | Nombre | Valor | Estado |
|---|---|---:|---|
| `ACCESS-000` | Sin acceso | 0 | active |
| `ACCESS-001` | Consulta | 1 | active |
| `ACCESS-002` | Operativo básico | 2 | active |
| `ACCESS-003` | Operativo avanzado | 3 | active |
| `ACCESS-004` | Administración total | 4 | active |

---

# 12. Fase 3 — Seeds de módulos funcionales

## 12.1 Tabla objetivo

`modules`

## 12.2 Seeds obligatorios MVP

| Código | Nombre | Base API | Estado |
|---|---|---|---|
| `MOD-AUT-001` | Autenticación | `/auth` | active |
| `MOD-USR-002` | Usuarios | `/users` | active |
| `MOD-ROL-003` | Roles | `/roles` | active |
| `MOD-PER-004` | Permisos | `/permissions` | active |
| `MOD-CAT-005` | Catálogos maestros | `/catalogs` | active |
| `MOD-ACT-006` | Actores del ecosistema | `/actors` | active |
| `MOD-STO-007` | Tiendas logísticas | `/stores` | active |
| `MOD-SER-008` | Servicios logísticos | `/services` | active |
| `MOD-SEA-009` | Búsqueda marketplace | `/search` | active |
| `MOD-REV-010` | Reviews y ratings | `/reviews` | active |
| `MOD-QUO-011` | Cotizaciones | `/quotations` | active |
| `MOD-ORD-012` | Órdenes | `/orders` | active |
| `MOD-DOC-013` | Documentos | `/documents` | active |
| `MOD-PAY-014` | Pagos | `/payments` | active |
| `MOD-COM-015` | Comisiones | `/commissions` | active |
| `MOD-REP-016` | Reportes | `/reports` | active |
| `MOD-AUD-017` | Auditoría | `/audit-logs` | active |
| `MOD-TOS-018` | TOS básico | `/tos` | active |
| `MOD-TRA-019` | Transporte | `/trips` | active |
| `MOD-ALM-020` | Almacenamiento | `/storage` | active |
| `MOD-INS-021` | Inspecciones | `/inspections` | active |
| `MOD-SOP-022` | Soporte técnico | `/support/tickets` | active |
| `MOD-NAV-023` | Navegación | `/navigation` | active |
| `MOD-CON-024` | Configuración global | `/settings` | active |
| `MOD-NOT-025` | Notificaciones | `/notifications` | active |
| `MOD-DAS-026` | Dashboards | `/dashboard` | active |
| `MOD-EXP-027` | Exportaciones | `/exports` | active |

---

# 13. Fase 4 — Seeds de roles

## 13.1 Tabla objetivo

`roles`

## 13.2 Seeds obligatorios

| Código | Nombre | Perfil | Estado |
|---|---|---|---|
| `ROLE-CLIENT` | Cliente final | `PROF-CLI-001` | active |
| `ROLE-STORE-OWNER` | Dueño de tienda logística | `PROF-TIE-002` | active |
| `ROLE-STORE-OPERATOR` | Operador de tienda | `PROF-TIE-002` | active |
| `ROLE-SUPERADMIN` | Superadministrador | `PROF-SUP-003` | active |
| `ROLE-OPERATOR` | Operador interno | `PROF-OPE-004` | active |
| `ROLE-INSPECTOR` | Inspector | `PROF-INS-005` | active |
| `ROLE-CARRIER` | Transportista | `PROF-TRA-006` | active |
| `ROLE-CUSTOMS-AGENT` | Agente aduanal | `PROF-ADU-007` | active |
| `ROLE-AUDITOR` | Auditor | `PROF-AUD-008` | active |
| `ROLE-SUPPORT` | Soporte técnico | `PROF-SOP-009` | active |

---

# 14. Fase 5 — Seeds de permisos

## 14.1 Tabla objetivo

`permissions`

## 14.2 Permisos mínimos por módulo

### Autenticación

| Código | Acción |
|---|---|
| `auth.login` | Login |
| `auth.logout` | Logout |
| `auth.me` | Ver sesión actual |

### Usuarios

| Código | Acción |
|---|---|
| `users.view` | Ver usuarios |
| `users.create` | Crear usuarios |
| `users.update` | Actualizar usuarios |
| `users.block` | Bloquear usuarios |
| `users.activate` | Activar usuarios |
| `users.assign_role` | Asignar roles |

### Roles y permisos

| Código | Acción |
|---|---|
| `roles.view` | Ver roles |
| `roles.create` | Crear roles |
| `roles.update` | Editar roles |
| `roles.assign_permissions` | Asignar permisos |
| `permissions.view` | Ver permisos |
| `permissions.manage` | Administrar permisos |

### Catálogos

| Código | Acción |
|---|---|
| `catalogs.view` | Ver catálogos |
| `catalogs.create` | Crear catálogos |
| `catalogs.update` | Actualizar catálogos |
| `catalogs.manage_items` | Administrar ítems |

### Tiendas

| Código | Acción |
|---|---|
| `stores.view` | Ver tiendas |
| `stores.create` | Crear tienda |
| `stores.update_own` | Editar tienda propia |
| `stores.update` | Editar cualquier tienda |
| `stores.approve` | Aprobar tiendas |
| `stores.reject` | Rechazar tiendas |
| `stores.suspend` | Suspender tiendas |

### Servicios

| Código | Acción |
|---|---|
| `services.view` | Ver servicios |
| `services.create` | Crear servicios |
| `services.update_own` | Editar servicio propio |
| `services.update` | Editar cualquier servicio |
| `services.approve` | Aprobar servicios |
| `services.publish` | Publicar servicios |
| `services.pause` | Pausar servicios |
| `services.manage_pricing` | Administrar tarifas |
| `services.manage_documents` | Administrar documentos requeridos |

### Cotizaciones

| Código | Acción |
|---|---|
| `quotations.view` | Ver cotizaciones |
| `quotations.create` | Crear cotizaciones |
| `quotations.respond` | Responder cotizaciones |
| `quotations.approve` | Aprobar cotizaciones |
| `quotations.reject` | Rechazar cotizaciones |
| `quotations.convert_to_order` | Convertir en orden |

### Órdenes

| Código | Acción |
|---|---|
| `orders.view` | Ver órdenes |
| `orders.start` | Iniciar órdenes |
| `orders.update_status` | Cambiar estado |
| `orders.close` | Cerrar órdenes |
| `orders.cancel` | Cancelar órdenes |
| `orders.assign` | Asignar tareas |

### Documentos

| Código | Acción |
|---|---|
| `documents.view` | Ver documentos |
| `documents.upload` | Cargar documentos |
| `documents.download` | Descargar documentos |
| `documents.validate` | Validar documentos |
| `documents.reject` | Rechazar documentos |
| `documents.version` | Versionar documentos |

### Pagos y comisiones

| Código | Acción |
|---|---|
| `payments.view` | Ver pagos |
| `payments.create` | Registrar pagos |
| `payments.confirm` | Confirmar pagos |
| `payments.reconcile` | Conciliar pagos |
| `payments.refund` | Registrar reembolso |
| `commissions.view` | Ver comisiones |
| `commissions.calculate` | Calcular comisiones |
| `commissions.configure` | Configurar reglas |
| `commissions.settle` | Liquidar comisiones |

### Reportes y auditoría

| Código | Acción |
|---|---|
| `reports.view` | Ver reportes |
| `reports.export_pdf` | Exportar PDF |
| `reports.export_excel` | Exportar Excel |
| `audit.view` | Ver auditoría |
| `audit.export` | Exportar auditoría |

### Operación logística

| Código | Acción |
|---|---|
| `tos.view` | Ver TOS |
| `tos.create_container` | Crear contenedor |
| `tos.move_container` | Mover contenedor |
| `tos.block` | Bloquear contenedor |
| `tos.release` | Liberar contenedor |
| `transport.view` | Ver transporte |
| `transport.create_trip` | Crear viaje |
| `transport.assign` | Asignar transporte |
| `transport.update_status` | Actualizar viaje |
| `transport.close_delivery` | Cerrar entrega |
| `storage.view` | Ver almacenamiento |
| `storage.receive` | Recibir carga |
| `storage.move` | Mover carga |
| `storage.dispatch` | Despachar carga |
| `inspections.view` | Ver inspecciones |
| `inspections.create` | Crear inspección |
| `inspections.schedule` | Programar inspección |
| `inspections.execute` | Ejecutar inspección |
| `inspections.close` | Cerrar inspección |

### Soporte, navegación y configuración

| Código | Acción |
|---|---|
| `support.view` | Ver tickets |
| `support.create_ticket` | Crear ticket |
| `support.assign` | Asignar ticket |
| `support.respond` | Responder ticket |
| `support.close` | Cerrar ticket |
| `navigation.view` | Ver navegación |
| `navigation.manage` | Administrar navegación |
| `settings.view` | Ver configuración |
| `settings.update` | Actualizar configuración |
| `dashboard.view_client` | Ver dashboard cliente |
| `dashboard.view_store` | Ver dashboard tienda |
| `dashboard.view_admin` | Ver dashboard admin |
| `dashboard.view_operator` | Ver dashboard operador |
| `dashboard.view_inspector` | Ver dashboard inspector |
| `dashboard.view_carrier` | Ver dashboard transportista |
| `dashboard.view_customs_agent` | Ver dashboard agente aduanal |
| `dashboard.view_auditor` | Ver dashboard auditor |
| `dashboard.view_support` | Ver dashboard soporte |

---

# 15. Fase 6 — Seeds de role_permissions

## 15.1 Tabla objetivo

`role_permissions`

## 15.2 Regla general

Cada rol debe recibir permisos acordes a su perfil y scope.

| Rol | Scope principal | Nivel |
|---|---|---|
| `ROLE-CLIENT` | `own` | Operativo básico |
| `ROLE-STORE-OWNER` | `store` | Operativo avanzado |
| `ROLE-STORE-OPERATOR` | `store` | Operativo básico |
| `ROLE-SUPERADMIN` | `global` | Administración total |
| `ROLE-OPERATOR` | `module` | Operativo avanzado |
| `ROLE-INSPECTOR` | `assigned` | Operativo avanzado |
| `ROLE-CARRIER` | `store` | Operativo avanzado |
| `ROLE-CUSTOMS-AGENT` | `store` | Operativo avanzado |
| `ROLE-AUDITOR` | `global` | Consulta / auditoría |
| `ROLE-SUPPORT` | `module` | Operativo básico |

## 15.3 Permisos mínimos por rol

### Cliente final

1. `dashboard.view_client`.
2. `search.use` si se crea permiso de búsqueda.
3. `quotations.view`.
4. `quotations.create`.
5. `quotations.approve`.
6. `quotations.reject`.
7. `orders.view`.
8. `documents.view`.
9. `documents.upload`.
10. `payments.view`.
11. `payments.create`.
12. `reviews.create` si se crea permiso de reviews.
13. `support.create_ticket`.

### Tienda logística

1. `dashboard.view_store`.
2. `stores.update_own`.
3. `services.view`.
4. `services.create`.
5. `services.update_own`.
6. `services.publish` si solo publica servicios aprobados.
7. `quotations.view`.
8. `quotations.respond`.
9. `orders.view`.
10. `orders.update_status`.
11. `documents.view`.
12. `documents.upload`.
13. `payments.view`.
14. `commissions.view`.
15. `reports.view`.
16. `support.create_ticket`.

### Superadministrador

Debe recibir todos los permisos con scope `global`.

### Auditor

Debe recibir permisos de consulta, reportes, auditoría y exportación, sin permisos de modificación operativa.

---

# 16. Fase 7 — Seeds de matriz perfil-módulo

## 16.1 Tabla objetivo

`profile_module_access`

## 16.2 Reglas

1. Cada perfil debe tener registro por módulo crítico.
2. `access_level = 0` cuando no tenga acceso.
3. `visible_in_menu = true` solo si debe verse en navegación.
4. `can_create`, `can_update`, `can_approve`, `can_execute`, `can_audit` deben alinearse con permisos reales.

## 16.3 Matriz resumida MVP

| Perfil | Marketplace | Servicios | Cotizaciones | Órdenes | Documentos | Pagos | Auditoría | Admin |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Cliente final | 2 | 1 | 2 | 1 | 2 | 2 | 0 | 0 |
| Tienda logística | 2 | 3 | 3 | 3 | 2 | 1 | 0 | 0 |
| Superadministrador | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| Operador interno | 1 | 1 | 2 | 3 | 3 | 1 | 1 | 0 |
| Inspector | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 |
| Transportista | 1 | 2 | 2 | 3 | 2 | 1 | 0 | 0 |
| Agente aduanal | 1 | 2 | 3 | 3 | 3 | 1 | 0 | 0 |
| Auditor | 1 | 1 | 1 | 1 | 1 | 1 | 4 | 0 |
| Soporte técnico | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 limitado |

---

# 17. Fase 8 — Seeds de catálogos maestros

## 17.1 Tablas objetivo

1. `master_catalogs`.
2. `master_catalog_items`.
3. `service_categories` si se usa tabla especializada.
4. `payment_methods` si se usa tabla especializada.

## 17.2 Catálogos obligatorios

Los catálogos obligatorios son los definidos en `15_MASTER_CATALOGS_MVP.md`:

1. `USER_PROFILES`.
2. `ROLES`.
3. `PERMISSIONS`.
4. `ACCESS_LEVELS`.
5. `MODULES`.
6. `SERVICE_CATEGORIES`.
7. `SERVICE_SUBCATEGORIES`.
8. `STORE_TYPES`.
9. `ACTOR_TYPES`.
10. `CARGO_TYPES`.
11. `CONTAINER_TYPES`.
12. `DOCUMENT_TYPES`.
13. `UNIT_MEASURES`.
14. `CURRENCIES`.
15. `PORTS`.
16. `TERMINALS`.
17. `STORE_STATUSES`.
18. `SERVICE_STATUSES`.
19. `QUOTATION_STATUSES`.
20. `ORDER_STATUSES`.
21. `DOCUMENT_STATUSES`.
22. `FINANCIAL_STATUSES`.
23. `CUSTOMS_STATUSES`.
24. `PAYMENT_METHODS`.
25. `COMMISSION_TYPES`.
26. `INSPECTION_TYPES`.
27. `TRIP_STATUSES`.
28. `VEHICLE_TYPES`.
29. `WAREHOUSE_TYPES`.
30. `TOS_CONTAINER_STATUSES`.
31. `SUPPORT_CATEGORIES`.
32. `SUPPORT_PRIORITIES`.
33. `SUPPORT_STATUSES`.
34. `NOTIFICATION_TYPES`.
35. `AUDIT_CRITICALITIES`.
36. `EXPORT_FORMATS`.
37. `FILE_TYPES_ALLOWED`.

---

# 18. Fase 9 — Seeds de navegación y menús

## 18.1 Tablas objetivo

1. `navigation_menus`.
2. `navigation_menu_items`.
3. `user_navigation_preferences` si aplica.

## 18.2 Menús obligatorios

| Código menú | Perfil | Descripción |
|---|---|---|
| `MENU-CLIENT` | `PROF-CLI-001` | Menú cliente final |
| `MENU-STORE` | `PROF-TIE-002` | Menú tienda logística |
| `MENU-ADMIN` | `PROF-SUP-003` | Menú superadministrador |
| `MENU-OPERATOR` | `PROF-OPE-004` | Menú operador interno |
| `MENU-INSPECTOR` | `PROF-INS-005` | Menú inspector |
| `MENU-CARRIER` | `PROF-TRA-006` | Menú transportista |
| `MENU-CUSTOMS-AGENT` | `PROF-ADU-007` | Menú agente aduanal |
| `MENU-AUDITOR` | `PROF-AUD-008` | Menú auditor |
| `MENU-SUPPORT` | `PROF-SOP-009` | Menú soporte técnico |

## 18.3 Regla

Los menús deben coincidir con `10_NAVIGATION_AND_MENUS.md` y cada ítem debe tener permiso requerido cuando aplique.

---

# 19. Fase 10 — Seeds de configuración global

## 19.1 Tabla objetivo

`global_settings`

## 19.2 Seeds sugeridos

| Clave | Valor | Tipo | Sensible | Descripción |
|---|---|---|---|---|
| `APP_NAME` | `Marketplace Logístico TOS` | string | No | Nombre de la plataforma |
| `BASE_CURRENCY` | `USD` | string | No | Moneda base |
| `DEFAULT_COMMISSION_PERCENTAGE` | `10` | number | No | Comisión general referencial |
| `MAX_UPLOAD_SIZE_MB` | `20` | number | No | Tamaño máximo de archivo |
| `ALLOW_DEMO_DATA` | `true` | boolean | No | Permite datos demo en entorno no productivo |
| `MAINTENANCE_MODE` | `false` | boolean | No | Modo mantenimiento |
| `PUBLIC_MARKETPLACE_ENABLED` | `true` | boolean | No | Marketplace público activo |
| `REQUIRE_STORE_APPROVAL` | `true` | boolean | No | Exige aprobación de tienda |
| `REQUIRE_SERVICE_APPROVAL` | `true` | boolean | No | Exige aprobación de servicio |
| `ENABLE_AUDIT_LOGS` | `true` | boolean | No | Auditoría activa |

---

# 20. Fase 11 — Seeds de actores del ecosistema

## 20.1 Tabla objetivo

`ecosystem_actors`

## 20.2 Seeds obligatorios

| Código | Actor | Tipo | Perfil relacionado | Estado |
|---|---|---|---|---|
| `ACT-CLIENT-001` | Cliente | `DEMAND_ACTOR` | `PROF-CLI-001` | active |
| `ACT-IMPORTER-002` | Importador | `DEMAND_ACTOR` | `PROF-CLI-001` | active |
| `ACT-EXPORTER-003` | Exportador | `DEMAND_ACTOR` | `PROF-CLI-001` | active |
| `ACT-CUSTOMS-004` | Agente aduanal | `SERVICE_PROVIDER` | `PROF-ADU-007` | active |
| `ACT-CARRIER-005` | Transportista | `SERVICE_PROVIDER` | `PROF-TRA-006` | active |
| `ACT-WAREHOUSE-006` | Almacén fiscal | `SERVICE_PROVIDER` | `PROF-TIE-002` | active |
| `ACT-TERMINAL-007` | Terminal portuaria | `SERVICE_PROVIDER` | `PROF-TIE-002` | active |
| `ACT-SHIPPING-008` | Naviera | `SERVICE_PROVIDER` | `PROF-TIE-002` | active |
| `ACT-CUSTOMS-AUTH-009` | Aduana | `REGULATORY_AUTHORITY` | null | reference |
| `ACT-PORT-AUTH-010` | Autoridad portuaria | `PORT_AUTHORITY` | null | reference |
| `ACT-INSPECTOR-011` | Inspector | `SERVICE_PROVIDER` | `PROF-INS-005` | active |
| `ACT-INSURANCE-012` | Aseguradora | `FINANCIAL_ACTOR` | `PROF-TIE-002` | active |
| `ACT-BANK-013` | Banco | `FINANCIAL_ACTOR` | null | reference |
| `ACT-SUPERADMIN-014` | Superadministrador | `ADMINISTRATOR` | `PROF-SUP-003` | active |

---

# 21. Fase 12 — Seeds de métodos de pago

## 21.1 Tabla objetivo

`payment_methods`

## 21.2 Seeds sugeridos

| Código | Nombre | Estado |
|---|---|---|
| `BANK_TRANSFER` | Transferencia bancaria | active |
| `WIRE_TRANSFER` | Wire transfer | active |
| `ACH` | ACH | active |
| `MANUAL_RECEIPT` | Comprobante manual | active |
| `PAYMENT_GATEWAY_FUTURE` | Pasarela futura | inactive |

---

# 22. Fase 13 — Seeds de reglas de comisión

## 22.1 Tabla objetivo

`commission_rules`

## 22.2 Seeds sugeridos

| Código | Nombre | Tipo | Categoría | Tipo tienda | Comisión | Estado |
|---|---|---|---|---|---:|---|
| `COM-GENERAL-001` | Comisión general marketplace | percentage | null | null | 10.00 | active |
| `COM-CUSTOMS-001` | Comisión servicios aduanales | percentage | `CUSTOMS` | `CUSTOMS_AGENT` | 10.00 | active |
| `COM-TRANSPORT-001` | Comisión transporte | percentage | `TRANSPORT` | `CARRIER` | 8.00 | active |
| `COM-STORAGE-001` | Comisión almacenamiento | percentage | `STORAGE` | `BONDED_WAREHOUSE` | 8.00 | active |
| `COM-INSPECTION-001` | Comisión inspecciones | percentage | `INSPECTION` | `INSPECTION_COMPANY` | 10.00 | active |
| `COM-TOS-INTERNAL-001` | Comisión TOS interno | percentage | `TECHNOLOGY` | `MARKETPLACE_OPERATOR` | 0.00 | active |

---

# 23. Fase 14 — Seeds de eventos de auditoría

## 23.1 Tabla objetivo

`audit_events`

## 23.2 Eventos obligatorios

| Código | Módulo | Criticidad |
|---|---|---|
| `auth.login` | auth | low |
| `auth.failed_login` | auth | medium |
| `user.created` | users | medium |
| `user.role.assigned` | users | high |
| `role.permission.assigned` | roles | critical |
| `store.created` | stores | medium |
| `store.approved` | stores | high |
| `store.rejected` | stores | high |
| `service.created` | services | medium |
| `service.price.changed` | services | high |
| `service.approved` | services | high |
| `service.published` | services | high |
| `quotation.created` | quotations | medium |
| `quotation.responded` | quotations | medium |
| `quotation.approved` | quotations | high |
| `quotation.converted_to_order` | quotations | high |
| `order.status_changed` | orders | medium |
| `order.closed` | orders | high |
| `document.uploaded` | documents | medium |
| `document.validated` | documents | high |
| `document.rejected` | documents | high |
| `payment.created` | payments | high |
| `payment.confirmed` | payments | critical |
| `commission.calculated` | commissions | high |
| `commission.rule.updated` | commissions | critical |
| `report.exported` | reports | high |
| `audit.exported` | audit | critical |
| `settings.updated` | settings | critical |
| `catalog.item.updated` | catalogs | high |

---

# 24. Fase 15 — Seeds de reportes base

## 24.1 Tablas objetivo

1. `reports`.
2. `report_templates`.

## 24.2 Reportes seed

| Código | Nombre | Módulo | Permiso |
|---|---|---|---|
| `REP-ORDERS-001` | Reporte de órdenes | orders | `reports.view` |
| `REP-QUOTATIONS-001` | Reporte de cotizaciones | quotations | `reports.view` |
| `REP-PAYMENTS-001` | Reporte de pagos | payments | `reports.view` |
| `REP-COMMISSIONS-001` | Reporte de comisiones | commissions | `reports.view` |
| `REP-STORES-001` | Reporte de tiendas | stores | `reports.view` |
| `REP-SERVICES-001` | Reporte de servicios | services | `reports.view` |
| `REP-AUDIT-001` | Reporte de auditoría | audit | `audit.view` |

---

# 25. Fase 16 — Seeds de usuarios demo

## 25.1 Tabla objetivo

1. `users`.
2. `user_roles`.
3. `user_navigation_preferences`.

## 25.2 Usuarios demo sugeridos

| Email | Nombre | Perfil | Rol | Estado |
|---|---|---|---|---|
| `admin.demo@example.com` | Super Admin Demo | `PROF-SUP-003` | `ROLE-SUPERADMIN` | active |
| `client.demo@example.com` | Cliente Demo | `PROF-CLI-001` | `ROLE-CLIENT` | active |
| `store.demo@example.com` | Tienda Demo | `PROF-TIE-002` | `ROLE-STORE-OWNER` | active |
| `operator.demo@example.com` | Operador Demo | `PROF-OPE-004` | `ROLE-OPERATOR` | active |
| `inspector.demo@example.com` | Inspector Demo | `PROF-INS-005` | `ROLE-INSPECTOR` | active |
| `carrier.demo@example.com` | Transportista Demo | `PROF-TRA-006` | `ROLE-CARRIER` | active |
| `customs.demo@example.com` | Agente Aduanal Demo | `PROF-ADU-007` | `ROLE-CUSTOMS-AGENT` | active |
| `auditor.demo@example.com` | Auditor Demo | `PROF-AUD-008` | `ROLE-AUDITOR` | active |
| `support.demo@example.com` | Soporte Demo | `PROF-SOP-009` | `ROLE-SUPPORT` | active |

## 25.3 Regla de contraseñas demo

Usar una contraseña demo solo en ambientes no productivos, por ejemplo:

```txt
DemoPassword123!
```

En producción, no deben cargarse usuarios demo.

---

# 26. Fase 17 — Seeds de tiendas demo

## 26.1 Tabla objetivo

1. `stores`.
2. `store_users`.

## 26.2 Tiendas demo sugeridas

| Código | Nombre | Tipo tienda | Puerto | Estado aprobación |
|---|---|---|---|---|
| `STO-ADU-001` | Demo Customs Broker LLC | `CUSTOMS_AGENT` | `PORT-HOUSTON` | approved |
| `STO-TRA-001` | Demo Drayage Carrier LLC | `CARRIER` | `PORT-HOUSTON` | approved |
| `STO-ALM-001` | Demo Bonded Warehouse LLC | `BONDED_WAREHOUSE` | `PORT-HOUSTON` | approved |
| `STO-INS-001` | Demo Inspection Services LLC | `INSPECTION_COMPANY` | `PORT-HOUSTON` | approved |
| `STO-DOC-001` | Demo Documentation Provider LLC | `DOCUMENTATION_PROVIDER` | `PORT-HOUSTON` | approved |
| `STO-TEC-001` | Demo Logistics Tech Provider LLC | `TECH_PROVIDER` | `PORT-HOUSTON` | approved |
| `STO-PAY-001` | Demo Payment Support Provider LLC | `PAYMENT_PROVIDER` | `PORT-HOUSTON` | approved |

---

# 27. Fase 18 — Seeds de servicios demo

## 27.1 Tablas objetivo

1. `services`.
2. `service_pricing`.
3. `service_documents`.

## 27.2 Servicios demo mínimos

| Código | Servicio | Tienda demo | Categoría | Precio USD | Estado |
|---|---|---|---|---:|---|
| `SER-ADU-001-DEMO` | Despacho aduanal básico de importación | `STO-ADU-001` | `CUSTOMS` | 450.00 | published |
| `SER-ADU-002-DEMO` | Revisión documental aduanal | `STO-ADU-001` | `CUSTOMS` | 85.00 | published |
| `SER-TRA-001-DEMO` | Transporte drayage local por contenedor | `STO-TRA-001` | `TRANSPORT` | 350.00 | published |
| `SER-TRA-006-DEMO` | Evidencia de entrega digital | `STO-TRA-001` | `TRANSPORT` | 35.00 | published |
| `SER-ALM-001-DEMO` | Recepción de mercancía en almacén | `STO-ALM-001` | `STORAGE` | 180.00 | published |
| `SER-ALM-002-DEMO` | Almacenamiento por día | `STO-ALM-001` | `STORAGE` | 45.00 | published |
| `SER-INS-001-DEMO` | Inspección física de carga | `STO-INS-001` | `INSPECTION` | 220.00 | published |
| `SER-DOC-001-DEMO` | Preparación de paquete documental | `STO-DOC-001` | `DOCUMENTATION` | 180.00 | published |
| `SER-PAG-001-DEMO` | Registro de comprobante de pago | `STO-PAY-001` | `PAYMENTS` | 0.00 | published |
| `SER-TOS-001-DEMO` | Registro de contenedor en TOS básico | `STO-TEC-001` | `TECHNOLOGY` | 20.00 | published |

---

# 28. Fase 19 — Seeds de documentos requeridos por servicio

## 28.1 Tabla objetivo

`service_documents`

## 28.2 Documentos por servicio demo

| Servicio | Documentos requeridos |
|---|---|
| `SER-ADU-001-DEMO` | `COMMERCIAL_INVOICE`, `PACKING_LIST`, `BILL_OF_LADING`, `POWER_OF_ATTORNEY` |
| `SER-ADU-002-DEMO` | `COMMERCIAL_INVOICE`, `PACKING_LIST`, `BILL_OF_LADING` |
| `SER-TRA-001-DEMO` | `BILL_OF_LADING`, `DELIVERY_PROOF`, `OTHER_DOCUMENT` |
| `SER-ALM-001-DEMO` | `PACKING_LIST`, `WAREHOUSE_RECEIPT`, `BILL_OF_LADING` |
| `SER-INS-001-DEMO` | `PACKING_LIST`, `INSPECTION_REPORT`, `PHOTO_EVIDENCE` |
| `SER-DOC-001-DEMO` | `COMMERCIAL_INVOICE`, `PACKING_LIST`, `BILL_OF_LADING` |
| `SER-PAG-001-DEMO` | `PAYMENT_RECEIPT` |
| `SER-TOS-001-DEMO` | `BILL_OF_LADING`, `OTHER_DOCUMENT` |

---

# 29. Fase 20 — Seeds transaccionales demo

## 29.1 Objetivo

Crear un flujo demo completo para validar el marketplace.

## 29.2 Flujo demo mínimo

```txt
Cliente demo
  ↓
Busca servicio publicado
  ↓
Solicita cotización SER-ADU-001-DEMO
  ↓
Tienda demo responde cotización
  ↓
Cliente aprueba cotización
  ↓
Sistema convierte cotización en orden
  ↓
Cliente carga documentos
  ↓
Operador valida documentos
  ↓
Cliente registra pago
  ↓
Admin confirma pago
  ↓
Se calcula comisión
  ↓
Tienda ejecuta servicio
  ↓
Orden se cierra
  ↓
Cliente deja review
```

## 29.3 Cotización demo

| Campo | Valor |
|---|---|
| Código | `COT-2026-001` |
| Cliente | `client.demo@example.com` |
| Tienda | `STO-ADU-001` |
| Servicio | `SER-ADU-001-DEMO` |
| Puerto | `PORT-HOUSTON` |
| Terminal | `TERM-HOU-BAYPORT` |
| Tipo de carga | `CONTAINERIZED_CARGO` |
| Tipo de contenedor | `40HC` |
| Subtotal | 450.00 |
| Comisión referencial | 45.00 |
| Total | 450.00 |
| Estado | `CONVERTED` |

## 29.4 Orden demo

| Campo | Valor |
|---|---|
| Código | `ORD-2026-001` |
| Cotización origen | `COT-2026-001` |
| Cliente | `client.demo@example.com` |
| Tienda | `STO-ADU-001` |
| Servicio | `SER-ADU-001-DEMO` |
| Estado operativo | `IN_PROCESS` |
| Estado financiero | `CONFIRMED` |
| Estado documental | `VALIDATED` |
| Total | 450.00 |
| Neto proveedor | 405.00 |

---

# 30. Fase 21 — Seeds documentales demo

## 30.1 Tablas objetivo

1. `documents`.
2. `document_versions`.
3. `document_validations`.
4. `evidences`.

## 30.2 Documentos demo sugeridos

| Código | Tipo | Entidad | Estado |
|---|---|---|---|
| `DOC-2026-001` | `COMMERCIAL_INVOICE` | `order:ORD-2026-001` | validated |
| `DOC-2026-002` | `PACKING_LIST` | `order:ORD-2026-001` | validated |
| `DOC-2026-003` | `BILL_OF_LADING` | `order:ORD-2026-001` | validated |
| `DOC-2026-004` | `POWER_OF_ATTORNEY` | `order:ORD-2026-001` | validated |
| `DOC-2026-005` | `PAYMENT_RECEIPT` | `payment:PAY-2026-001` | validated |

## 30.3 Regla

En seed demo se puede crear metadata de documentos sin subir archivos reales, pero debe marcarse como `demo_metadata_only = true` en `metadata` si el campo existe.

---

# 31. Fase 22 — Seeds de pagos y comisiones demo

## 31.1 Pago demo

| Campo | Valor |
|---|---|
| Código | `PAY-2026-001` |
| Orden | `ORD-2026-001` |
| Cliente | `client.demo@example.com` |
| Tienda | `STO-ADU-001` |
| Método | `BANK_TRANSFER` |
| Referencia | `DEMO-BANK-REF-001` |
| Total | 450.00 |
| Estado | `CONFIRMED` |

## 31.2 Comisión demo

| Campo | Valor |
|---|---|
| Código | `COM-2026-001` |
| Orden | `ORD-2026-001` |
| Pago | `PAY-2026-001` |
| Base | 450.00 |
| Porcentaje | 10.00 |
| Comisión | 45.00 |
| Neto proveedor | 405.00 |
| Estado | `CONFIRMED` |

---

# 32. Fase 23 — Seeds TOS demo

## 32.1 Tablas objetivo

1. `tos_yards`.
2. `tos_containers`.
3. `tos_moves`.
4. `tos_gates`.

## 32.2 Seeds sugeridos

| Entidad | Código / valor | Descripción |
|---|---|---|
| Patio | `YARD-HOU-001` | Patio demo Houston |
| Contenedor | `MSCU1234567` | Contenedor demo 40HC |
| Ubicación inicial | `A-01-01` | Ubicación inicial |
| Movimiento | `MOVE-2026-001` | Movimiento interno demo |
| Gate | `GATE-2026-001` | Gate-in demo |

---

# 33. Fase 24 — Seeds de transporte demo

## 33.1 Tablas objetivo

1. `vehicles`.
2. `drivers`.
3. `routes`.
4. `trips`.
5. `trip_events`.

## 33.2 Seeds sugeridos

| Entidad | Código | Valor |
|---|---|---|
| Vehículo | `VEH-2026-001` | Tracto camión demo |
| Placa | `DEMO1234` | Placa demo |
| Conductor | `DRV-2026-001` | Driver Demo |
| Ruta | `ROU-2026-001` | Port Houston → Houston Warehouse |
| Viaje | `TRP-2026-001` | Viaje asociado a `ORD-2026-001` |
| Estado viaje | `DELIVERED` | Entregado |

---

# 34. Fase 25 — Seeds de almacenamiento demo

## 34.1 Tablas objetivo

1. `warehouses`.
2. `storage_locations`.
3. `inventory_items`.
4. `storage_movements`.
5. `dispatches`.

## 34.2 Seeds sugeridos

| Entidad | Código | Valor |
|---|---|---|
| Almacén | `WH-2026-001` | Demo Bonded Warehouse |
| Ubicación | `LOC-A-01` | Pasillo A, posición 01 |
| Inventario | `INV-2026-001` | Mercancía demo asociada a orden |
| Movimiento | `STM-2026-001` | Recepción demo |
| Despacho | `DSP-2026-001` | Despacho demo |

---

# 35. Fase 26 — Seeds de inspecciones demo

## 35.1 Tablas objetivo

1. `inspections`.
2. `inspection_checklists`.
3. `inspection_results`.
4. `inspection_evidences`.

## 35.2 Seeds sugeridos

| Entidad | Código | Valor |
|---|---|---|
| Inspección | `INS-2026-001` | Inspección física demo |
| Orden | `ORD-2026-001` | Orden relacionada |
| Inspector | `inspector.demo@example.com` | Usuario asignado |
| Resultado | `APPROVED` | Aprobada |
| Checklist 1 | `CHK-001` | Carga identificada correctamente |
| Checklist 2 | `CHK-002` | Documentos coinciden con carga |
| Checklist 3 | `CHK-003` | Evidencia fotográfica cargada |

---

# 36. Fase 27 — Seeds de soporte demo

## 36.1 Tablas objetivo

1. `support_tickets`.
2. `support_ticket_messages`.
3. `support_sla`.

## 36.2 Seeds SLA

| Prioridad | Respuesta horas | Resolución horas |
|---|---:|---:|
| `LOW` | 48 | 120 |
| `MEDIUM` | 24 | 72 |
| `HIGH` | 8 | 24 |
| `CRITICAL` | 2 | 8 |

## 36.3 Ticket demo

| Campo | Valor |
|---|---|
| Código | `TCK-2026-001` |
| Creado por | `client.demo@example.com` |
| Asignado a | `support.demo@example.com` |
| Categoría | `DOCUMENT_SUPPORT` |
| Prioridad | `MEDIUM` |
| Estado | `IN_PROGRESS` |
| Asunto | Error al cargar documento demo |

---

# 37. Fase 28 — Seeds de notificaciones demo

## 37.1 Tabla objetivo

`notifications`

## 37.2 Notificaciones sugeridas

| Usuario | Tipo | Título | Ruta destino |
|---|---|---|---|
| Cliente demo | `QUOTATION_RESPONDED` | Tu cotización fue respondida | `/client/quotations` |
| Cliente demo | `PAYMENT_CONFIRMED` | Tu pago fue confirmado | `/client/payments` |
| Tienda demo | `ORDER_CREATED` | Nueva orden recibida | `/store/orders` |
| Admin demo | `STORE_APPROVED` | Tienda demo aprobada | `/admin/stores` |
| Auditor demo | `AUDIT_CRITICAL_EVENT` | Evento crítico registrado | `/auditor/logs` |

---

# 38. Idempotencia de seeds

## 38.1 Regla principal

Cada seed debe usar una operación tipo `upsert` basada en código único.

## 38.2 Claves de upsert recomendadas

| Entidad | Clave de upsert |
|---|---|
| Perfil | `profile_code` |
| Rol | `role_code` |
| Permiso | `permission_code` |
| Módulo | `module_code` |
| Catálogo | `catalog_code` |
| Ítem catálogo | `catalog_id + item_code` |
| Menú | `menu_code` |
| Ítem menú | `menu_id + item_code` |
| Actor | `actor_code` |
| Tienda | `store_code` |
| Servicio | `service_code` |
| Regla comisión | `rule_code` |
| Reporte | `report_code` |
| Usuario demo | `email` |
| Cotización demo | `quotation_code` |
| Orden demo | `order_code` |
| Documento demo | `document_code` |
| Pago demo | `payment_code` |
| Comisión demo | `commission_code` |
| Ticket demo | `ticket_code` |

---

# 39. Estrategia de ejecución por ambiente

| Ambiente | Seeds sistema | Seeds demo | Seeds QA | Comentario |
|---|---|---|---|---|
| Local | Sí | Sí | Opcional | Desarrollo completo |
| Development | Sí | Sí | Opcional | Integración técnica |
| Staging | Sí | Sí controlado | No | Demo funcional |
| Testing | Sí | No | Sí | Pruebas automáticas |
| Production | Sí mínimo | No | No | Solo datos base seguros |

---

# 40. Comandos sugeridos

## 40.1 Ejecutar todos los seeds sistema

```bash
npm run seed:system
```

## 40.2 Ejecutar seeds demo

```bash
npm run seed:demo
```

## 40.3 Ejecutar todos los seeds

```bash
npm run seed:all
```

## 40.4 Ejecutar validaciones post-seed

```bash
npm run seed:validate
```

## 40.5 Reset local completo

```bash
npm run db:reset:local
npm run migration:run
npm run seed:all
```

---

# 41. Validaciones post-seed

Antigravity debe crear validaciones automáticas después de ejecutar seeds.

## 41.1 Validaciones obligatorias

1. Existe al menos un superadministrador activo.
2. Existen todos los perfiles obligatorios.
3. Existen todos los roles obligatorios.
4. Existen permisos mínimos por módulo.
5. Superadministrador tiene permisos globales.
6. Existen módulos funcionales MVP.
7. Existen catálogos maestros obligatorios.
8. Existen ítems mínimos por catálogo.
9. Existen menús por perfil.
10. Cada menú tiene ítems activos.
11. Existen actores del ecosistema.
12. Existen reglas de comisión base.
13. Existen métodos de pago base.
14. Existen reportes base.
15. No hay permisos sin módulo.
16. No hay role_permissions huérfanos.
17. No hay profile_module_access sin perfil o módulo.
18. No hay servicios demo sin tienda aprobada.
19. No hay servicios publicados sin tarifa.
20. No hay servicios publicados sin categoría.
21. No hay cotización demo sin cliente, tienda y servicio.
22. No hay orden demo sin cotización o servicio.
23. No hay pago demo sin orden.
24. No hay comisión demo sin orden.
25. No hay documentos demo sin entidad.

---

# 42. Rollback de seeds

## 42.1 Regla general

Los seeds del sistema no deben borrarse automáticamente en ambientes compartidos.

## 42.2 Rollback local

En ambiente local se permite resetear base de datos completa.

```bash
npm run db:reset:local
```

## 42.3 Rollback demo

Los datos demo deben tener una marca para poder limpiarlos.

Campos sugeridos:

1. `is_demo`.
2. `metadata.demo = true`.
3. `created_by_seed = true`.

## 42.4 Limpieza demo sugerida

```bash
npm run seed:demo:clear
```

## 42.5 No limpiar automáticamente

No limpiar automáticamente:

1. `audit_logs`.
2. `payments`.
3. `commissions`.
4. `document_validations`.
5. `order_events`.
6. `quotation_status_history`.

---

# 43. Auditoría de seeds

## 43.1 Eventos sugeridos

| Evento | Descripción | Criticidad |
|---|---|---|
| `seed.system.executed` | Seeds sistema ejecutados | high |
| `seed.demo.executed` | Seeds demo ejecutados | medium |
| `seed.validation.completed` | Validación post-seed completa | medium |
| `seed.validation.failed` | Validación post-seed falló | high |
| `seed.demo.cleared` | Datos demo limpiados | high |
| `seed.production.executed` | Seed producción ejecutado | critical |

## 43.2 Regla

En desarrollo puede bastar con logs de consola. En staging y producción controlada se recomienda registrar auditoría.

---

# 44. Ejemplo de estructura seed idempotente

```ts
export async function seedUserProfiles(dataSource: DataSource) {
  const repository = dataSource.getRepository(UserProfile);

  const profiles = [
    {
      profileCode: 'PROF-CLI-001',
      profileName: 'Cliente final',
      profileType: 'client',
      defaultDashboardRoute: '/dashboard/client',
      status: 'active',
    },
    {
      profileCode: 'PROF-SUP-003',
      profileName: 'Superadministrador',
      profileType: 'superadmin',
      defaultDashboardRoute: '/admin',
      status: 'active',
    },
  ];

  for (const profile of profiles) {
    const existing = await repository.findOne({
      where: { profileCode: profile.profileCode },
    });

    if (existing) {
      await repository.update(existing.id, profile);
    } else {
      await repository.save(repository.create(profile));
    }
  }
}
```

---

# 45. Ejemplo JSON de seed de catálogo

```json
{
  "catalogCode": "CARGO_TYPES",
  "catalogName": "Tipos de carga",
  "description": "Clasificación de tipos de carga para cotizaciones y operaciones logísticas",
  "moduleCode": "MOD-QUO-011",
  "isSystem": true,
  "status": "active",
  "items": [
    {
      "itemCode": "GENERAL_CARGO",
      "itemName": "Carga general",
      "description": "Mercancía general no especializada",
      "orderIndex": 1,
      "status": "active"
    },
    {
      "itemCode": "CONTAINERIZED_CARGO",
      "itemName": "Carga contenerizada",
      "description": "Mercancía transportada en contenedor",
      "orderIndex": 2,
      "status": "active"
    }
  ]
}
```

---

# 46. Ejemplo JSON de usuario demo

```json
{
  "firstName": "Cliente",
  "lastName": "Demo",
  "email": "client.demo@example.com",
  "phone": "+1 555 000 0000",
  "password": "DemoPassword123!",
  "primaryProfileCode": "PROF-CLI-001",
  "roleCode": "ROLE-CLIENT",
  "status": "active",
  "isDemo": true
}
```

---

# 47. Ejemplo JSON de tienda demo

```json
{
  "storeCode": "STO-ADU-001",
  "storeName": "Demo Customs Broker LLC",
  "legalName": "Demo Customs Broker LLC",
  "storeTypeCode": "CUSTOMS_AGENT",
  "taxId": "DEMO-TAX-001",
  "email": "customs.store.demo@example.com",
  "phone": "+1 555 000 1001",
  "description": "Tienda demo de servicios aduanales",
  "mainPortCode": "PORT-HOUSTON",
  "mainTerminalCode": "TERM-HOU-BAYPORT",
  "verificationStatus": "approved",
  "status": "active",
  "isDemo": true
}
```

---

# 48. Ejemplo JSON de servicio demo

```json
{
  "serviceCode": "SER-ADU-001-DEMO",
  "storeCode": "STO-ADU-001",
  "categoryCode": "CUSTOMS",
  "subcategoryCode": "CUSTOMS_CLEARANCE",
  "serviceName": "Despacho aduanal básico de importación",
  "description": "Servicio demo de gestión básica para despacho aduanal de importación.",
  "scope": "Revisión inicial, preparación de datos, coordinación documental y seguimiento básico.",
  "basePrice": 450.00,
  "currencyCode": "USD",
  "unitMeasure": "SERVICE",
  "estimatedTime": "24-48 hours",
  "slaHours": 48,
  "commissionPercentage": 10.00,
  "approvalStatus": "APPROVED",
  "publicationStatus": "PUBLISHED",
  "requiredDocuments": [
    "COMMERCIAL_INVOICE",
    "PACKING_LIST",
    "BILL_OF_LADING",
    "POWER_OF_ATTORNEY"
  ],
  "isDemo": true
}
```

---

# 49. Reglas de seguridad para seeds

1. No usar correos reales de clientes.
2. No usar teléfonos reales.
3. No usar documentos reales.
4. No usar archivos reales sensibles.
5. No usar contraseñas reales.
6. No cargar seeds demo en producción.
7. No guardar secretos en seeds.
8. No guardar llaves API en seeds.
9. No crear usuarios administradores inseguros en producción.
10. No registrar tokens en seeds.
11. Cambiar credenciales demo antes de cualquier exposición pública.

---

# 50. Dependencias críticas entre seeds

| Seed dependiente | Requiere antes |
|---|---|
| Roles | Perfiles |
| Permisos | Módulos |
| Role permissions | Roles + permisos |
| Profile module access | Perfiles + módulos |
| Menús | Perfiles + permisos |
| Catálogos items | Catálogos |
| Tiendas demo | Catálogos `STORE_TYPES`, `PORTS`, `TERMINALS` |
| Store users | Usuarios demo + tiendas demo |
| Servicios demo | Tiendas aprobadas + categorías + unidades + moneda |
| Service documents | Servicios + tipos de documentos |
| Cotizaciones demo | Cliente + tienda + servicio |
| Órdenes demo | Cotización aprobada/convertida |
| Documentos demo | Entidad relacionada |
| Pagos demo | Orden |
| Comisiones demo | Orden + regla comisión |
| TOS demo | Orden + catálogos contenedor |
| Transporte demo | Orden + tienda transportista |
| Almacenamiento demo | Orden + tienda almacén |
| Inspecciones demo | Orden + inspector |
| Notificaciones demo | Usuarios demo |

---

# 51. Checklist técnico de implementación

- [ ] Crear seed runner.
- [ ] Crear utilidades de upsert.
- [ ] Crear seeds sistema.
- [ ] Crear seeds demo.
- [ ] Crear seeds QA si aplica.
- [ ] Separar ejecución por ambiente.
- [ ] Crear validaciones post-seed.
- [ ] Crear logs de ejecución.
- [ ] Crear auditoría de ejecución en staging si aplica.
- [ ] Crear comandos npm.
- [ ] Documentar credenciales demo.
- [ ] Bloquear demo seeds en producción.
- [ ] Crear limpieza de datos demo en local/staging.
- [ ] Crear pruebas de seeds.
- [ ] Validar que no existan datos huérfanos.
- [ ] Validar que el superadministrador pueda iniciar sesión.
- [ ] Validar que el cliente pueda buscar y cotizar.
- [ ] Validar que la tienda pueda responder cotización.
- [ ] Validar que el admin pueda aprobar tienda y servicio.
- [ ] Validar que los menús aparezcan por perfil.

---

# 52. Criterios de aceptación

El plan de seeds se considera aceptado cuando:

1. Los seeds sistema se ejecutan sin errores.
2. Los seeds demo se ejecutan solo en ambientes permitidos.
3. Ejecutar seeds dos veces no duplica datos.
4. Existen perfiles base.
5. Existen roles base.
6. Existen permisos base.
7. Existen módulos base.
8. Existen catálogos obligatorios.
9. Existen menús por perfil.
10. Existe superadministrador demo en ambientes no productivos.
11. Existe cliente demo.
12. Existen tiendas demo aprobadas.
13. Existen servicios demo publicados.
14. Existe flujo demo de cotización a orden.
15. Existen documentos demo asociados.
16. Existe pago demo confirmado.
17. Existe comisión demo calculada.
18. Existen datos demo TOS, transporte, almacenamiento e inspección si aplica.
19. Las validaciones post-seed pasan.
20. No hay datos huérfanos.
21. No se carga demo en producción.
22. No hay dependencia técnica con Odoo.

---

# 53. Tareas técnicas para Antigravity

## 53.1 Base de datos

1. Verificar migraciones previas.
2. Crear seeds por fase.
3. Crear utilidades de upsert.
4. Crear validaciones post-seed.
5. Crear mecanismo de limpieza demo.
6. Crear índices necesarios antes de seeds masivos.

## 53.2 Backend Nest.js

1. Crear seed runner.
2. Crear comandos npm.
3. Crear services para seeds.
4. Crear validación de entorno.
5. Crear bloqueo de seeds demo en producción.
6. Crear logs de ejecución.
7. Crear tests para seeds críticos.

## 53.3 Frontend React.js

1. Validar que login demo funciona.
2. Validar dashboards por perfil.
3. Validar menús cargados por perfil.
4. Validar búsqueda con servicios demo.
5. Validar cotización demo.
6. Validar flujo cliente-tienda-admin.

## 53.4 QA

1. Ejecutar seed en base limpia.
2. Ejecutar seed dos veces para validar idempotencia.
3. Ejecutar validación post-seed.
4. Probar login de usuarios demo.
5. Probar menús por perfil.
6. Probar búsqueda pública.
7. Probar cotización.
8. Probar orden.
9. Probar documentos.
10. Probar pagos.
11. Probar auditoría.

---

# 54. Prompt sugerido para Antigravity

```text
Actúa como backend architect senior, database architect MySQL, experto en Nest.js, seguridad RBAC, QA técnico y product owner del Marketplace Logístico TOS.

Usa el documento `17_INITIAL_SEEDS_PLAN.md` como fuente principal para crear el plan e implementación de seeds iniciales del marketplace logístico.

Objetivo:
Crear seeds idempotentes, seguros y ordenados para inicializar perfiles, roles, permisos, módulos, matriz perfil-módulo, catálogos maestros, navegación, actores, configuración, reglas de comisión, eventos de auditoría, reportes base, usuarios demo, tiendas demo, servicios demo y flujos transaccionales demo.

Reglas obligatorias:
1. Ejecutar migraciones antes de seeds.
2. Los seeds deben ser idempotentes.
3. Usar códigos únicos para upsert.
4. Separar seeds sistema, demo y QA.
5. No cargar seeds demo en producción.
6. No usar datos personales reales.
7. No usar contraseñas reales en producción.
8. No guardar secretos en seeds.
9. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
10. Respetar `13_API_SPECIFICATION.md`.
11. Respetar `15_MASTER_CATALOGS_MVP.md`.
12. Respetar `16_SERVICES_MASTER_CATALOG.md`.
13. Validar que el superadministrador tenga permisos globales.
14. Validar que los menús funcionen por perfil.
15. Validar que servicios demo estén publicados solo con tiendas aprobadas.
16. Validar que el flujo demo cotización-orden-documento-pago-comisión funcione.
17. No integrar Odoo; usarlo solo como referencia conceptual.

Entregables esperados:
1. Seed runner.
2. Seeds sistema por fase.
3. Seeds demo por fase.
4. Utilidad de upsert.
5. Comandos npm.
6. Validaciones post-seed.
7. Bloqueo de demo seeds en producción.
8. Limpieza de datos demo para local/staging.
9. Tests de seeds.
10. Documentación de credenciales demo.

Antes de implementar, genera un plan de dependencias y orden de ejecución de seeds.
```

---

# 55. Checklist de uso en Antigravity

- [ ] Guardar este documento como `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Crear estructura `/database/seeds`.
- [ ] Crear seed runner.
- [ ] Crear seeds sistema.
- [ ] Crear seeds demo.
- [ ] Crear validaciones post-seed.
- [ ] Crear comandos npm.
- [ ] Bloquear demo seeds en producción.
- [ ] Probar idempotencia.
- [ ] Probar login demo.
- [ ] Probar flujo demo completo.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 56. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión de base de datos | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

