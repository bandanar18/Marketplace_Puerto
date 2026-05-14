# 12_DATABASE_MASTER_SCHEMA.md

# Documento Maestro de Esquema de Base de Datos MySQL
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `12_DATABASE_MASTER_SCHEMA.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Base de datos | MySQL |
| Tecnologías relacionadas | React.js, Nest.js |
| Modelo referencial | Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro técnico de base de datos |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md` |

---

## 2. Propósito del documento

Este documento define el **esquema maestro de base de datos MySQL** para el Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como fuente técnica para que Antigravity pueda crear:

1. Migraciones MySQL.
2. Entidades Nest.js.
3. Relaciones entre tablas.
4. Seeds iniciales.
5. Índices.
6. Llaves foráneas.
7. Reglas de integridad.
8. Estructura RBAC.
9. Catálogos maestros.
10. Tablas transaccionales.
11. Tablas de auditoría.
12. Tablas documentales.
13. Tablas financieras.
14. Tablas logísticas.
15. Tablas de soporte y configuración.

El documento no representa una integración con Odoo. Los modelos Odoo se usan únicamente como referencia conceptual para orientar el diseño de entidades propias.

---

## 3. Objetivo general

Diseñar un esquema relacional MySQL modular, escalable, auditable y seguro para soportar el Marketplace Logístico TOS, cubriendo usuarios, perfiles, roles, permisos, tiendas, servicios, cotizaciones, órdenes, documentos, pagos, comisiones, reportes, auditoría, TOS básico, transporte, almacenamiento, inspecciones, navegación, soporte y configuración global.

---

## 4. Objetivos específicos

1. Definir convenciones de nombres para tablas y campos.
2. Definir campos estándar reutilizables.
3. Definir grupos funcionales de tablas.
4. Definir tablas maestras y transaccionales.
5. Definir relaciones principales.
6. Definir índices recomendados.
7. Definir restricciones de integridad.
8. Definir estrategia de soft delete.
9. Definir tablas RBAC.
10. Definir tablas de catálogos maestros.
11. Definir tablas de marketplace.
12. Definir tablas de cotizaciones y órdenes.
13. Definir tablas documentales.
14. Definir tablas financieras.
15. Definir tablas operativas TOS/logísticas.
16. Definir tablas de auditoría.
17. Definir seeds iniciales.
18. Definir criterios de aceptación.
19. Servir como prompt para Antigravity.

---

## 5. Principios de diseño de base de datos

Antigravity debe respetar los siguientes principios:

1. Usar MySQL como base relacional principal.
2. Usar nombres en `snake_case`.
3. Usar tablas en plural.
4. Usar claves primarias `id` tipo `BIGINT UNSIGNED AUTO_INCREMENT`.
5. Usar `uuid` para exponer identificadores fuera del backend cuando aplique.
6. Usar `created_at`, `updated_at`, `deleted_at` en tablas críticas.
7. Usar soft delete en entidades comerciales, documentales, financieras y operativas.
8. Usar llaves foráneas donde aplique.
9. Usar índices para búsquedas, filtros, estados y relaciones.
10. Evitar datos hardcodeados fuera de catálogos.
11. Usar tablas de catálogos maestros para valores controlados.
12. Registrar auditoría para cambios críticos.
13. No almacenar archivos binarios grandes en MySQL en el MVP.
14. Guardar metadata de archivos en MySQL y archivo físico en storage.
15. No almacenar contraseñas en texto plano.
16. No guardar tokens sensibles sin protección.
17. Mantener campos financieros con `DECIMAL`, no `FLOAT`.
18. Mantener trazabilidad de usuario creador y actualizador cuando aplique.
19. Separar tablas maestras, transaccionales, auditoría y configuración.
20. Diseñar para crecimiento futuro sin integrar Odoo en el MVP.

---

## 6. Convenciones generales

### 6.1 Convención de tablas

| Regla | Ejemplo correcto | Ejemplo incorrecto |
|---|---|---|
| Plural | `users` | `user` |
| Snake case | `service_categories` | `ServiceCategories` |
| Nombre claro | `quotation_lines` | `q_lines` |
| Dominio explícito | `payment_receipts` | `receipts` |

### 6.2 Convención de campos

| Tipo de campo | Convención | Ejemplo |
|---|---|---|
| PK | `id` | `id` |
| UUID público | `uuid` | `uuid` |
| FK | singular + `_id` | `user_id`, `store_id` |
| Código único | entidad + `_code` | `service_code` |
| Estado | `status` | `status` |
| Fecha | sufijo `_at` | `created_at` |
| Booleano | prefijo `is_`, `has_`, `can_` | `is_active` |
| Monto | sufijo `_amount` | `total_amount` |
| Porcentaje | sufijo `_percentage` | `commission_percentage` |

---

## 7. Tipos de datos recomendados

| Tipo de dato | Uso recomendado |
|---|---|
| `BIGINT UNSIGNED` | IDs internos |
| `CHAR(36)` | UUID |
| `VARCHAR(50)` | Códigos cortos |
| `VARCHAR(120)` | Nombres cortos |
| `VARCHAR(255)` | Emails, títulos, rutas |
| `TEXT` | Descripciones largas |
| `DECIMAL(15,2)` | Montos financieros |
| `DECIMAL(8,4)` | Porcentajes o tasas |
| `INT` | Contadores, secuencias, niveles |
| `BOOLEAN` | Flags |
| `DATE` | Fechas sin hora |
| `DATETIME` | Fechas con hora |
| `JSON` | Metadata, snapshots, filtros guardados, valores de auditoría |

---

## 8. Campos estándar por tipo de tabla

### 8.1 Campos estándar para tablas maestras

```txt
id
uuid
code
name
description
status
created_at
updated_at
deleted_at
created_by
updated_by
```

### 8.2 Campos estándar para tablas transaccionales

```txt
id
uuid
status
created_at
updated_at
deleted_at
created_by
updated_by
approved_by
approved_at
cancelled_by
cancelled_at
```

### 8.3 Campos estándar para tablas financieras

```txt
id
uuid
currency_code
subtotal_amount
tax_amount
commission_amount
total_amount
status
created_at
updated_at
created_by
updated_by
confirmed_by
confirmed_at
```

### 8.4 Campos estándar para auditoría

```txt
id
uuid
user_id
profile_code
module_name
action
entity_type
entity_id
old_value
new_value
ip_address
user_agent
result
criticality
created_at
```

---

## 9. Grupos funcionales de tablas

| Grupo | Descripción |
|---|---|
| Seguridad e identidad | Usuarios, perfiles, roles, permisos, sesiones |
| Navegación | Menús, ítems de menú, preferencias de navegación |
| Catálogos maestros | Catálogos e ítems reutilizables |
| Actores del ecosistema | Matriz de actores, servicios, documentos y módulos |
| Marketplace | Tiendas, servicios, categorías, precios, reviews |
| Cotizaciones | Solicitudes, respuestas, líneas, documentos, estados |
| Órdenes | Órdenes, líneas, tareas, eventos |
| Documentos | Tipos, archivos, versiones, validaciones, evidencias |
| Finanzas | Pagos, comprobantes, métodos, comisiones |
| TOS básico | Patios, contenedores, movimientos, gates |
| Transporte | Viajes, vehículos, conductores, rutas |
| Almacenamiento | Almacenes, ubicaciones, inventario, movimientos, despacho |
| Inspecciones | Inspecciones, checklists, resultados, evidencias |
| Reportes | Reportes, plantillas, exportaciones |
| Auditoría | Logs, eventos, entidades, snapshots |
| Soporte | Tickets, mensajes, categorías, SLA |
| Configuración | Parámetros globales, notificaciones, templates |

---

# 10. Esquema de Seguridad e Identidad

---

## 10.1 Tabla `users`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador interno |
| `uuid` | CHAR(36) | UNIQUE | Identificador público |
| `first_name` | VARCHAR(120) | NOT NULL | Nombre |
| `last_name` | VARCHAR(120) | NULL | Apellido |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | Correo |
| `phone` | VARCHAR(50) | NULL | Teléfono |
| `password_hash` | VARCHAR(255) | NOT NULL | Contraseña hasheada |
| `primary_profile_id` | BIGINT UNSIGNED | FK | Perfil principal |
| `status` | VARCHAR(30) | NOT NULL | active, inactive, blocked, pending |
| `last_login_at` | DATETIME | NULL | Último login |
| `email_verified_at` | DATETIME | NULL | Verificación email |
| `created_at` | DATETIME | NOT NULL | Fecha creación |
| `updated_at` | DATETIME | NOT NULL | Fecha actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_users_email`
2. `idx_users_status`
3. `idx_users_primary_profile_id`
4. `idx_users_created_at`

### Referencia Odoo conceptual

`res.users`, `res.partner`.

---

## 10.2 Tabla `user_profiles`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `profile_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código de perfil |
| `profile_name` | VARCHAR(120) | NOT NULL | Nombre |
| `profile_type` | VARCHAR(80) | NOT NULL | Tipo funcional |
| `description` | TEXT | NULL | Descripción |
| `default_dashboard_route` | VARCHAR(200) | NULL | Ruta inicial |
| `mvp_participation` | VARCHAR(50) | NULL | Completa, parcial, posterior |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Seeds mínimos

1. `PROF-CLI-001` Cliente final.
2. `PROF-TIE-002` Tienda logística.
3. `PROF-SUP-003` Superadministrador.
4. `PROF-OPE-004` Operador interno.
5. `PROF-INS-005` Inspector.
6. `PROF-TRA-006` Transportista.
7. `PROF-ADU-007` Agente aduanal.
8. `PROF-AUD-008` Auditor.
9. `PROF-SOP-009` Soporte técnico.

---

## 10.3 Tabla `roles`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `role_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código rol |
| `role_name` | VARCHAR(120) | NOT NULL | Nombre rol |
| `profile_id` | BIGINT UNSIGNED | FK NULL | Perfil relacionado |
| `description` | TEXT | NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Referencia Odoo conceptual

`res.groups`.

---

## 10.4 Tabla `permissions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `permission_code` | VARCHAR(100) | UNIQUE, NOT NULL | Código permiso |
| `permission_name` | VARCHAR(150) | NOT NULL | Nombre permiso |
| `module_id` | BIGINT UNSIGNED | FK | Módulo relacionado |
| `action_type` | VARCHAR(50) | NOT NULL | view, create, update, approve, execute, export, audit |
| `description` | TEXT | NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Referencia Odoo conceptual

`ir.model.access`, `ir.rule`.

---

## 10.5 Tabla `role_permissions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `role_id` | BIGINT UNSIGNED | FK, NOT NULL | Rol |
| `permission_id` | BIGINT UNSIGNED | FK, NOT NULL | Permiso |
| `granted` | BOOLEAN | DEFAULT TRUE | Permiso concedido |
| `scope` | VARCHAR(50) | NOT NULL | own, store, assigned, module, global |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Restricción única

`UNIQUE(role_id, permission_id, scope)`.

---

## 10.6 Tabla `user_roles`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `role_id` | BIGINT UNSIGNED | FK, NOT NULL | Rol |
| `profile_id` | BIGINT UNSIGNED | FK, NOT NULL | Perfil asociado |
| `is_primary` | BOOLEAN | DEFAULT FALSE | Rol principal |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 10.7 Tabla `user_sessions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `session_token_hash` | VARCHAR(255) | NULL | Hash de token si aplica |
| `ip_address` | VARCHAR(80) | NULL | IP |
| `user_agent` | TEXT | NULL | Navegador |
| `started_at` | DATETIME | NOT NULL | Inicio |
| `expires_at` | DATETIME | NULL | Expiración |
| `ended_at` | DATETIME | NULL | Fin |
| `status` | VARCHAR(30) | NOT NULL | active, expired, revoked |

---

# 11. Esquema de Módulos, Acceso y Navegación

---

## 11.1 Tabla `access_levels`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `level_code` | VARCHAR(50) | UNIQUE | ACCESS-000 a ACCESS-004 |
| `level_name` | VARCHAR(100) | NOT NULL | Nombre |
| `numeric_value` | INT | UNIQUE | Valor 0 a 4 |
| `description` | TEXT | NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | active |

### Seeds

1. 0 Sin acceso.
2. 1 Consulta.
3. 2 Operativo básico.
4. 3 Operativo avanzado.
5. 4 Administración total.

---

## 11.2 Tabla `modules`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `module_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código módulo |
| `module_name` | VARCHAR(120) | NOT NULL | Nombre |
| `description` | TEXT | NULL | Descripción |
| `frontend_base_route` | VARCHAR(200) | NULL | Ruta frontend |
| `backend_base_path` | VARCHAR(200) | NULL | Ruta API |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 11.3 Tabla `profile_module_access`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `profile_id` | BIGINT UNSIGNED | FK, NOT NULL | Perfil |
| `module_id` | BIGINT UNSIGNED | FK, NOT NULL | Módulo |
| `access_level` | INT | NOT NULL | Nivel 0 a 4 |
| `visible_in_menu` | BOOLEAN | DEFAULT FALSE | Visible en menú |
| `can_create` | BOOLEAN | DEFAULT FALSE | Crear |
| `can_read` | BOOLEAN | DEFAULT FALSE | Leer |
| `can_update` | BOOLEAN | DEFAULT FALSE | Editar |
| `can_delete` | BOOLEAN | DEFAULT FALSE | Eliminar/anular |
| `can_approve` | BOOLEAN | DEFAULT FALSE | Aprobar |
| `can_execute` | BOOLEAN | DEFAULT FALSE | Ejecutar |
| `can_audit` | BOOLEAN | DEFAULT FALSE | Auditar |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

### Restricción única

`UNIQUE(profile_id, module_id)`.

---

## 11.4 Tabla `navigation_menus`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `menu_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código menú |
| `menu_name` | VARCHAR(120) | NOT NULL | Nombre menú |
| `profile_id` | BIGINT UNSIGNED | FK NULL | Perfil asociado |
| `description` | TEXT | NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 11.5 Tabla `navigation_menu_items`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `menu_id` | BIGINT UNSIGNED | FK, NOT NULL | Menú |
| `parent_id` | BIGINT UNSIGNED | FK NULL | Ítem padre |
| `item_code` | VARCHAR(50) | NOT NULL | Código ítem |
| `label` | VARCHAR(120) | NOT NULL | Texto visible |
| `route` | VARCHAR(200) | NULL | Ruta frontend |
| `icon_name` | VARCHAR(80) | NULL | Ícono |
| `required_permission` | VARCHAR(100) | NULL | Permiso requerido |
| `required_profile_code` | VARCHAR(50) | NULL | Perfil requerido |
| `section_name` | VARCHAR(120) | NULL | Sección |
| `order_index` | INT | DEFAULT 0 | Orden |
| `visible_in_menu` | BOOLEAN | DEFAULT TRUE | Visible |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 11.6 Tabla `user_navigation_preferences`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `sidebar_collapsed` | BOOLEAN | DEFAULT FALSE | Sidebar colapsado |
| `last_route` | VARCHAR(200) | NULL | Última ruta |
| `active_profile_id` | BIGINT UNSIGNED | FK NULL | Perfil activo |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

# 12. Esquema de Catálogos Maestros

---

## 12.1 Tabla `master_catalogs`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `catalog_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código catálogo |
| `catalog_name` | VARCHAR(120) | NOT NULL | Nombre |
| `description` | TEXT | NULL | Descripción |
| `module_code` | VARCHAR(50) | NULL | Módulo relacionado |
| `is_system` | BOOLEAN | DEFAULT FALSE | Catálogo del sistema |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 12.2 Tabla `master_catalog_items`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `catalog_id` | BIGINT UNSIGNED | FK, NOT NULL | Catálogo |
| `item_code` | VARCHAR(50) | NOT NULL | Código ítem |
| `item_name` | VARCHAR(120) | NOT NULL | Nombre ítem |
| `description` | TEXT | NULL | Descripción |
| `parent_item_id` | BIGINT UNSIGNED | FK NULL | Ítem padre |
| `order_index` | INT | DEFAULT 0 | Orden |
| `metadata` | JSON | NULL | Metadata |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Restricción única

`UNIQUE(catalog_id, item_code)`.

### Catálogos mínimos por seed

1. `SERVICE_CATEGORIES`.
2. `STORE_TYPES`.
3. `CARGO_TYPES`.
4. `CONTAINER_TYPES`.
5. `DOCUMENT_TYPES`.
6. `OPERATIONAL_STATUSES`.
7. `FINANCIAL_STATUSES`.
8. `CUSTOMS_STATUSES`.
9. `PORTS`.
10. `TERMINALS`.
11. `TARIFF_TYPES`.
12. `COMMISSION_TYPES`.
13. `ROLES`.
14. `PERMISSIONS`.

---

# 13. Esquema de Actores del Ecosistema

---

## 13.1 Tabla `ecosystem_actors`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `actor_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código actor |
| `actor_name` | VARCHAR(150) | NOT NULL | Nombre actor |
| `actor_type` | VARCHAR(80) | NOT NULL | Demandante, proveedor, regulador, financiero, administrador |
| `profile_id` | BIGINT UNSIGNED | FK NULL | Perfil principal |
| `main_function` | TEXT | NULL | Función principal |
| `mvp_participation` | VARCHAR(50) | NULL | Completa, parcial, referencial |
| `odoo_reference_models` | TEXT | NULL | Modelos Odoo referenciales |
| `status` | VARCHAR(30) | NOT NULL | active, inactive, reference |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 13.2 Tabla `actor_services`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `actor_id` | BIGINT UNSIGNED | FK, NOT NULL | Actor |
| `service_category_code` | VARCHAR(50) | NOT NULL | Categoría servicio |
| `service_name` | VARCHAR(150) | NOT NULL | Nombre servicio |
| `relation_type` | VARCHAR(50) | NOT NULL | ofrece, consume, regula, administra |
| `unit_measure` | VARCHAR(50) | NULL | Unidad referencial |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 13.3 Tabla `actor_documents`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `actor_id` | BIGINT UNSIGNED | FK, NOT NULL | Actor |
| `document_type_code` | VARCHAR(50) | NOT NULL | Tipo documento |
| `document_name` | VARCHAR(150) | NOT NULL | Nombre documento |
| `required` | BOOLEAN | DEFAULT FALSE | Obligatorio |
| `related_module_code` | VARCHAR(50) | NULL | Módulo relacionado |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 13.4 Tabla `actor_permissions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `actor_id` | BIGINT UNSIGNED | FK, NOT NULL | Actor |
| `permission_id` | BIGINT UNSIGNED | FK NULL | Permiso |
| `permission_code` | VARCHAR(100) | NULL | Código permiso |
| `access_level` | INT | DEFAULT 1 | Nivel acceso |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 13.5 Tabla `actor_modules`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `actor_id` | BIGINT UNSIGNED | FK, NOT NULL | Actor |
| `module_id` | BIGINT UNSIGNED | FK, NOT NULL | Módulo |
| `participation_type` | VARCHAR(50) | NOT NULL | consulta, opera, administra, regula |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

# 14. Esquema Marketplace: Tiendas y Servicios

---

## 14.1 Tabla `stores`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `store_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código tienda |
| `store_name` | VARCHAR(150) | NOT NULL | Nombre comercial |
| `legal_name` | VARCHAR(200) | NULL | Razón social |
| `store_type_code` | VARCHAR(50) | NOT NULL | Tipo de tienda |
| `tax_id` | VARCHAR(80) | NULL | Identificación fiscal |
| `email` | VARCHAR(255) | NULL | Email |
| `phone` | VARCHAR(50) | NULL | Teléfono |
| `description` | TEXT | NULL | Descripción |
| `main_port_code` | VARCHAR(50) | NULL | Puerto principal |
| `main_terminal_code` | VARCHAR(50) | NULL | Terminal principal |
| `address` | TEXT | NULL | Dirección |
| `logo_url` | VARCHAR(500) | NULL | Logo |
| `cover_image_url` | VARCHAR(500) | NULL | Portada |
| `average_rating` | DECIMAL(3,2) | DEFAULT 0 | Rating |
| `review_count` | INT | DEFAULT 0 | Reviews |
| `verification_status` | VARCHAR(30) | NOT NULL | pending, approved, rejected, suspended |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `approved_by` | BIGINT UNSIGNED | FK NULL | Aprobado por |
| `approved_at` | DATETIME | NULL | Fecha aprobación |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_stores_store_type_code`
2. `idx_stores_verification_status`
3. `idx_stores_main_port_code`
4. `idx_stores_average_rating`
5. `idx_stores_status`

### Referencia Odoo conceptual

`res.partner`, `res.company`.

---

## 14.2 Tabla `store_users`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `store_role` | VARCHAR(80) | NOT NULL | owner, manager, operator |
| `is_primary_owner` | BOOLEAN | DEFAULT FALSE | Dueño principal |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Restricción única

`UNIQUE(store_id, user_id)`.

---

## 14.3 Tabla `store_documents`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `document_id` | BIGINT UNSIGNED | FK, NOT NULL | Documento |
| `document_purpose` | VARCHAR(80) | NULL | validation, certification, license |
| `status` | VARCHAR(30) | NOT NULL | pending, valid, rejected |
| `created_at` | DATETIME | NOT NULL | Creación |

---

## 14.4 Tabla `service_categories`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `category_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código |
| `category_name` | VARCHAR(120) | NOT NULL | Nombre |
| `parent_category_id` | BIGINT UNSIGNED | FK NULL | Padre |
| `description` | TEXT | NULL | Descripción |
| `icon_name` | VARCHAR(80) | NULL | Ícono |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 14.5 Tabla `services`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `service_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código servicio |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda proveedora |
| `category_id` | BIGINT UNSIGNED | FK, NOT NULL | Categoría |
| `subcategory_id` | BIGINT UNSIGNED | FK NULL | Subcategoría |
| `service_name` | VARCHAR(180) | NOT NULL | Nombre |
| `description` | TEXT | NULL | Descripción |
| `scope` | TEXT | NULL | Alcance |
| `base_price` | DECIMAL(15,2) | NOT NULL | Tarifa base |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `unit_measure` | VARCHAR(50) | NOT NULL | Unidad |
| `estimated_time` | VARCHAR(120) | NULL | Tiempo estimado |
| `sla_hours` | INT | NULL | SLA horas |
| `rules` | TEXT | NULL | Reglas |
| `commission_percentage` | DECIMAL(8,4) | NULL | Comisión referencial |
| `approval_status` | VARCHAR(30) | NOT NULL | draft, pending, approved, rejected |
| `publication_status` | VARCHAR(30) | NOT NULL | draft, published, paused, inactive |
| `approved_by` | BIGINT UNSIGNED | FK NULL | Aprobado por |
| `approved_at` | DATETIME | NULL | Fecha aprobación |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_services_store_id`
2. `idx_services_category_id`
3. `idx_services_approval_status`
4. `idx_services_publication_status`
5. `idx_services_base_price`
6. `idx_services_created_at`

### Referencia Odoo conceptual

`product.template`, `product.product`, `product.category`, `uom.uom`.

---

## 14.6 Tabla `service_pricing`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `pricing_code` | VARCHAR(50) | NOT NULL | Código precio |
| `price_type` | VARCHAR(50) | NOT NULL | fixed, range, quote_required |
| `price_amount` | DECIMAL(15,2) | NOT NULL | Monto |
| `min_amount` | DECIMAL(15,2) | NULL | Mínimo |
| `max_amount` | DECIMAL(15,2) | NULL | Máximo |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `unit_measure` | VARCHAR(50) | NOT NULL | Unidad |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 14.7 Tabla `service_documents`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `document_type_code` | VARCHAR(50) | NOT NULL | Tipo documento |
| `document_name` | VARCHAR(150) | NOT NULL | Nombre documento |
| `required` | BOOLEAN | DEFAULT TRUE | Obligatorio |
| `order_index` | INT | DEFAULT 0 | Orden |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

# 15. Esquema de Búsqueda y Reputación

---

## 15.1 Tabla `search_logs`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `user_id` | BIGINT UNSIGNED | FK NULL | Usuario si autenticado |
| `search_text` | VARCHAR(255) | NULL | Texto buscado |
| `filters` | JSON | NULL | Filtros usados |
| `results_count` | INT | DEFAULT 0 | Resultados |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 15.2 Tabla `reviews`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden cerrada |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `service_id` | BIGINT UNSIGNED | FK NULL | Servicio |
| `customer_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario cliente |
| `rating` | INT | NOT NULL | 1 a 5 |
| `title` | VARCHAR(150) | NULL | Título |
| `comment` | TEXT | NULL | Comentario |
| `is_verified` | BOOLEAN | DEFAULT TRUE | Verificada por orden |
| `moderation_status` | VARCHAR(30) | DEFAULT 'published' | published, hidden, pending |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Restricción única

`UNIQUE(order_id, customer_id)`.

---

## 15.3 Tabla `review_replies`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `review_id` | BIGINT UNSIGNED | FK, NOT NULL | Review |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario que responde |
| `reply_text` | TEXT | NOT NULL | Respuesta |
| `status` | VARCHAR(30) | DEFAULT 'published' | Estado |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

# 16. Esquema de Cotizaciones

---

## 16.1 Tabla `quotations`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `quotation_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código cotización |
| `customer_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario cliente |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `port_code` | VARCHAR(50) | NULL | Puerto |
| `terminal_code` | VARCHAR(50) | NULL | Terminal |
| `cargo_type_code` | VARCHAR(50) | NULL | Tipo carga |
| `container_type_code` | VARCHAR(50) | NULL | Tipo contenedor |
| `quantity` | DECIMAL(15,4) | DEFAULT 1 | Cantidad |
| `unit_measure` | VARCHAR(50) | NULL | Unidad |
| `requested_date` | DATE | NULL | Fecha solicitada |
| `customer_notes` | TEXT | NULL | Observaciones cliente |
| `provider_notes` | TEXT | NULL | Observaciones proveedor |
| `subtotal_amount` | DECIMAL(15,2) | DEFAULT 0 | Subtotal |
| `tax_amount` | DECIMAL(15,2) | DEFAULT 0 | Impuesto |
| `commission_amount` | DECIMAL(15,2) | DEFAULT 0 | Comisión |
| `total_amount` | DECIMAL(15,2) | DEFAULT 0 | Total |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `status` | VARCHAR(30) | NOT NULL | requested, review, responded, approved, rejected, expired, converted |
| `responded_at` | DATETIME | NULL | Fecha respuesta |
| `approved_at` | DATETIME | NULL | Fecha aprobación |
| `rejected_at` | DATETIME | NULL | Fecha rechazo |
| `expires_at` | DATETIME | NULL | Vencimiento |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_quotations_customer_id`
2. `idx_quotations_store_id`
3. `idx_quotations_service_id`
4. `idx_quotations_status`
5. `idx_quotations_created_at`

### Referencia Odoo conceptual

`sale.order`, `sale.order.line`.

---

## 16.2 Tabla `quotation_lines`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `quotation_id` | BIGINT UNSIGNED | FK, NOT NULL | Cotización |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `description` | TEXT | NULL | Descripción línea |
| `quantity` | DECIMAL(15,4) | NOT NULL | Cantidad |
| `unit_measure` | VARCHAR(50) | NOT NULL | Unidad |
| `unit_price` | DECIMAL(15,2) | NOT NULL | Precio unitario |
| `subtotal_amount` | DECIMAL(15,2) | NOT NULL | Subtotal |
| `status` | VARCHAR(30) | DEFAULT 'active' | Estado |

---

## 16.3 Tabla `quotation_documents`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `quotation_id` | BIGINT UNSIGNED | FK, NOT NULL | Cotización |
| `document_id` | BIGINT UNSIGNED | FK, NOT NULL | Documento |
| `required` | BOOLEAN | DEFAULT FALSE | Requerido |
| `status` | VARCHAR(30) | NOT NULL | pending, uploaded, validated, rejected |

---

## 16.4 Tabla `quotation_status_history`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `quotation_id` | BIGINT UNSIGNED | FK, NOT NULL | Cotización |
| `old_status` | VARCHAR(30) | NULL | Estado anterior |
| `new_status` | VARCHAR(30) | NOT NULL | Nuevo estado |
| `changed_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `change_reason` | TEXT | NULL | Motivo |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 17. Esquema de Órdenes

---

## 17.1 Tabla `orders`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `order_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código orden |
| `quotation_id` | BIGINT UNSIGNED | FK NULL | Cotización origen |
| `customer_id` | BIGINT UNSIGNED | FK, NOT NULL | Cliente |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `subtotal_amount` | DECIMAL(15,2) | DEFAULT 0 | Subtotal |
| `tax_amount` | DECIMAL(15,2) | DEFAULT 0 | Impuesto |
| `commission_amount` | DECIMAL(15,2) | DEFAULT 0 | Comisión |
| `total_amount` | DECIMAL(15,2) | DEFAULT 0 | Total |
| `provider_net_amount` | DECIMAL(15,2) | DEFAULT 0 | Neto proveedor |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `operational_status` | VARCHAR(30) | NOT NULL | created, in_process, executing, closed, cancelled |
| `financial_status` | VARCHAR(30) | NOT NULL | unpaid, pending, paid, confirmed, refunded |
| `document_status` | VARCHAR(30) | NOT NULL | pending, partial, validated, rejected |
| `started_at` | DATETIME | NULL | Inicio |
| `closed_at` | DATETIME | NULL | Cierre |
| `cancelled_at` | DATETIME | NULL | Cancelación |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_orders_customer_id`
2. `idx_orders_store_id`
3. `idx_orders_service_id`
4. `idx_orders_operational_status`
5. `idx_orders_financial_status`
6. `idx_orders_created_at`

### Referencia Odoo conceptual

`sale.order`, `project.task`, `stock.picking`.

---

## 17.2 Tabla `order_lines`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `service_id` | BIGINT UNSIGNED | FK, NOT NULL | Servicio |
| `description` | TEXT | NULL | Descripción |
| `quantity` | DECIMAL(15,4) | NOT NULL | Cantidad |
| `unit_measure` | VARCHAR(50) | NOT NULL | Unidad |
| `unit_price` | DECIMAL(15,2) | NOT NULL | Precio unitario |
| `subtotal_amount` | DECIMAL(15,2) | NOT NULL | Subtotal |
| `status` | VARCHAR(30) | DEFAULT 'active' | Estado |

---

## 17.3 Tabla `order_tasks`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `task_code` | VARCHAR(50) | NULL | Código tarea |
| `task_name` | VARCHAR(150) | NOT NULL | Nombre tarea |
| `assigned_to` | BIGINT UNSIGNED | FK NULL | Usuario asignado |
| `due_date` | DATE | NULL | Fecha límite |
| `status` | VARCHAR(30) | NOT NULL | pending, in_progress, completed, cancelled |
| `completed_at` | DATETIME | NULL | Completado |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 17.4 Tabla `order_events`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `event_code` | VARCHAR(50) | NOT NULL | Código evento |
| `event_name` | VARCHAR(150) | NOT NULL | Nombre |
| `event_description` | TEXT | NULL | Descripción |
| `event_status` | VARCHAR(30) | NULL | Estado resultante |
| `created_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 18. Esquema Documental y Evidencias

---

## 18.1 Tabla `documents`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `document_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código documento |
| `document_type_code` | VARCHAR(50) | NOT NULL | Tipo documento |
| `original_filename` | VARCHAR(255) | NOT NULL | Nombre original |
| `stored_filename` | VARCHAR(255) | NOT NULL | Nombre almacenado |
| `file_path` | VARCHAR(500) | NOT NULL | Ruta relativa |
| `mime_type` | VARCHAR(120) | NOT NULL | MIME |
| `file_size_bytes` | BIGINT UNSIGNED | NOT NULL | Tamaño |
| `entity_type` | VARCHAR(80) | NOT NULL | store, service, quotation, order, inspection, payment |
| `entity_id` | BIGINT UNSIGNED | NOT NULL | ID entidad |
| `version_number` | INT | DEFAULT 1 | Versión |
| `validation_status` | VARCHAR(30) | NOT NULL | pending, validated, rejected |
| `uploaded_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `validated_by` | BIGINT UNSIGNED | FK NULL | Usuario validador |
| `validated_at` | DATETIME | NULL | Fecha validación |
| `rejection_reason` | TEXT | NULL | Motivo rechazo |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `deleted_at` | DATETIME | NULL | Soft delete |

### Índices

1. `idx_documents_entity`
2. `idx_documents_document_type_code`
3. `idx_documents_validation_status`
4. `idx_documents_uploaded_by`

### Referencia Odoo conceptual

`ir.attachment`, `documents.document`.

---

## 18.2 Tabla `document_versions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `document_id` | BIGINT UNSIGNED | FK, NOT NULL | Documento actual |
| `version_number` | INT | NOT NULL | Versión |
| `stored_filename` | VARCHAR(255) | NOT NULL | Archivo |
| `file_path` | VARCHAR(500) | NOT NULL | Ruta |
| `file_size_bytes` | BIGINT UNSIGNED | NOT NULL | Tamaño |
| `uploaded_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 18.3 Tabla `document_validations`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `document_id` | BIGINT UNSIGNED | FK, NOT NULL | Documento |
| `validation_status` | VARCHAR(30) | NOT NULL | validated, rejected |
| `validation_notes` | TEXT | NULL | Notas |
| `validated_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 18.4 Tabla `evidences`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `evidence_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código evidencia |
| `entity_type` | VARCHAR(80) | NOT NULL | order, trip, inspection, storage, tos |
| `entity_id` | BIGINT UNSIGNED | NOT NULL | ID entidad |
| `document_id` | BIGINT UNSIGNED | FK NULL | Documento asociado |
| `evidence_type` | VARCHAR(50) | NOT NULL | photo, file, note, checklist |
| `title` | VARCHAR(150) | NULL | Título |
| `description` | TEXT | NULL | Descripción |
| `created_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 19. Esquema Financiero: Pagos y Comisiones

---

## 19.1 Tabla `payment_methods`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `method_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código método |
| `method_name` | VARCHAR(120) | NOT NULL | Nombre |
| `description` | TEXT | NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 19.2 Tabla `payments`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `payment_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código pago |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `customer_id` | BIGINT UNSIGNED | FK, NOT NULL | Cliente |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `payment_method_id` | BIGINT UNSIGNED | FK NULL | Método |
| `reference_number` | VARCHAR(120) | NULL | Referencia |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `subtotal_amount` | DECIMAL(15,2) | DEFAULT 0 | Subtotal |
| `tax_amount` | DECIMAL(15,2) | DEFAULT 0 | Impuesto |
| `commission_amount` | DECIMAL(15,2) | DEFAULT 0 | Comisión |
| `total_amount` | DECIMAL(15,2) | NOT NULL | Total |
| `payment_status` | VARCHAR(30) | NOT NULL | pending, submitted, confirmed, rejected, refunded |
| `payment_date` | DATETIME | NULL | Fecha pago |
| `confirmed_by` | BIGINT UNSIGNED | FK NULL | Confirmado por |
| `confirmed_at` | DATETIME | NULL | Fecha confirmación |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Referencia Odoo conceptual

`account.payment`, `account.move`, `account.journal`.

---

## 19.3 Tabla `payment_receipts`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `payment_id` | BIGINT UNSIGNED | FK, NOT NULL | Pago |
| `document_id` | BIGINT UNSIGNED | FK, NOT NULL | Comprobante |
| `status` | VARCHAR(30) | NOT NULL | uploaded, validated, rejected |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 19.4 Tabla `commission_rules`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `rule_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código regla |
| `rule_name` | VARCHAR(150) | NOT NULL | Nombre |
| `service_category_code` | VARCHAR(50) | NULL | Categoría servicio |
| `store_type_code` | VARCHAR(50) | NULL | Tipo tienda |
| `commission_type` | VARCHAR(50) | NOT NULL | percentage, fixed |
| `commission_percentage` | DECIMAL(8,4) | NULL | Porcentaje |
| `commission_fixed_amount` | DECIMAL(15,2) | NULL | Fijo |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `valid_from` | DATE | NULL | Desde |
| `valid_to` | DATE | NULL | Hasta |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 19.5 Tabla `commissions`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `commission_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código comisión |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `payment_id` | BIGINT UNSIGNED | FK NULL | Pago |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `commission_rule_id` | BIGINT UNSIGNED | FK NULL | Regla |
| `base_amount` | DECIMAL(15,2) | NOT NULL | Base cálculo |
| `commission_percentage` | DECIMAL(8,4) | NULL | Porcentaje |
| `commission_amount` | DECIMAL(15,2) | NOT NULL | Comisión |
| `provider_net_amount` | DECIMAL(15,2) | NOT NULL | Neto proveedor |
| `currency_code` | VARCHAR(10) | DEFAULT 'USD' | Moneda |
| `status` | VARCHAR(30) | NOT NULL | calculated, confirmed, settled, cancelled |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

# 20. Esquema TOS Básico

---

## 20.1 Tabla `tos_yards`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `yard_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código patio |
| `yard_name` | VARCHAR(150) | NOT NULL | Nombre |
| `port_code` | VARCHAR(50) | NULL | Puerto |
| `terminal_code` | VARCHAR(50) | NULL | Terminal |
| `capacity_teu` | INT | NULL | Capacidad TEU |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

### Referencia Odoo conceptual

`stock.location`.

---

## 20.2 Tabla `tos_containers`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `container_number` | VARCHAR(30) | NOT NULL | Número contenedor |
| `container_type_code` | VARCHAR(50) | NULL | Tipo contenedor |
| `yard_id` | BIGINT UNSIGNED | FK NULL | Patio |
| `current_location` | VARCHAR(120) | NULL | Ubicación |
| `order_id` | BIGINT UNSIGNED | FK NULL | Orden relacionada |
| `status` | VARCHAR(30) | NOT NULL | registered, in_yard, moved, blocked, released, gate_out |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 20.3 Tabla `tos_moves`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `container_id` | BIGINT UNSIGNED | FK, NOT NULL | Contenedor |
| `from_location` | VARCHAR(120) | NULL | Desde |
| `to_location` | VARCHAR(120) | NOT NULL | Hacia |
| `move_type` | VARCHAR(50) | NOT NULL | internal, gate_in, gate_out, block, release |
| `moved_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `moved_at` | DATETIME | NOT NULL | Fecha movimiento |
| `notes` | TEXT | NULL | Notas |

---

## 20.4 Tabla `tos_gates`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `container_id` | BIGINT UNSIGNED | FK, NOT NULL | Contenedor |
| `gate_type` | VARCHAR(50) | NOT NULL | gate_in, gate_out |
| `gate_reference` | VARCHAR(120) | NULL | Referencia |
| `vehicle_plate` | VARCHAR(50) | NULL | Placa |
| `driver_name` | VARCHAR(150) | NULL | Conductor |
| `event_at` | DATETIME | NOT NULL | Fecha evento |
| `created_by` | BIGINT UNSIGNED | FK NULL | Usuario |

---

# 21. Esquema de Transporte

---

## 21.1 Tabla `vehicles`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda transportista |
| `vehicle_code` | VARCHAR(50) | UNIQUE | Código vehículo |
| `plate_number` | VARCHAR(50) | NOT NULL | Placa |
| `vehicle_type` | VARCHAR(80) | NULL | Tipo |
| `capacity` | VARCHAR(80) | NULL | Capacidad |
| `status` | VARCHAR(30) | NOT NULL | active, inactive, maintenance |

### Referencia Odoo conceptual

`fleet.vehicle`.

---

## 21.2 Tabla `drivers`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda |
| `driver_code` | VARCHAR(50) | UNIQUE | Código conductor |
| `driver_name` | VARCHAR(150) | NOT NULL | Nombre |
| `phone` | VARCHAR(50) | NULL | Teléfono |
| `license_number` | VARCHAR(80) | NULL | Licencia |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 21.3 Tabla `routes`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `route_code` | VARCHAR(50) | UNIQUE | Código ruta |
| `origin` | VARCHAR(200) | NOT NULL | Origen |
| `destination` | VARCHAR(200) | NOT NULL | Destino |
| `estimated_time` | VARCHAR(120) | NULL | Tiempo estimado |
| `distance_km` | DECIMAL(10,2) | NULL | Distancia |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 21.4 Tabla `trips`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `trip_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código viaje |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Transportista |
| `vehicle_id` | BIGINT UNSIGNED | FK NULL | Vehículo |
| `driver_id` | BIGINT UNSIGNED | FK NULL | Conductor |
| `route_id` | BIGINT UNSIGNED | FK NULL | Ruta |
| `origin` | VARCHAR(200) | NULL | Origen |
| `destination` | VARCHAR(200) | NULL | Destino |
| `status` | VARCHAR(30) | NOT NULL | created, assigned, in_transit, delivered, cancelled |
| `started_at` | DATETIME | NULL | Inicio |
| `completed_at` | DATETIME | NULL | Entrega |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 21.5 Tabla `trip_events`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `trip_id` | BIGINT UNSIGNED | FK, NOT NULL | Viaje |
| `event_code` | VARCHAR(50) | NOT NULL | Código evento |
| `event_name` | VARCHAR(120) | NOT NULL | Nombre |
| `event_location` | VARCHAR(200) | NULL | Ubicación |
| `event_notes` | TEXT | NULL | Notas |
| `created_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 22. Esquema de Almacenamiento

---

## 22.1 Tabla `warehouses`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `store_id` | BIGINT UNSIGNED | FK, NOT NULL | Tienda almacén |
| `warehouse_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código almacén |
| `warehouse_name` | VARCHAR(150) | NOT NULL | Nombre |
| `warehouse_type` | VARCHAR(80) | NULL | fiscal, bonded, general |
| `address` | TEXT | NULL | Dirección |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

### Referencia Odoo conceptual

`stock.location`, `stock.warehouse`.

---

## 22.2 Tabla `storage_locations`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `warehouse_id` | BIGINT UNSIGNED | FK, NOT NULL | Almacén |
| `location_code` | VARCHAR(50) | NOT NULL | Código ubicación |
| `location_name` | VARCHAR(120) | NOT NULL | Nombre ubicación |
| `status` | VARCHAR(30) | NOT NULL | active, inactive, occupied |

---

## 22.3 Tabla `inventory_items`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `order_id` | BIGINT UNSIGNED | FK NULL | Orden |
| `warehouse_id` | BIGINT UNSIGNED | FK, NOT NULL | Almacén |
| `location_id` | BIGINT UNSIGNED | FK NULL | Ubicación |
| `item_code` | VARCHAR(50) | UNIQUE | Código item |
| `description` | TEXT | NULL | Descripción mercancía |
| `quantity` | DECIMAL(15,4) | DEFAULT 1 | Cantidad |
| `unit_measure` | VARCHAR(50) | NULL | Unidad |
| `received_at` | DATETIME | NULL | Recepción |
| `dispatched_at` | DATETIME | NULL | Despacho |
| `status` | VARCHAR(30) | NOT NULL | received, stored, moved, dispatched |

---

## 22.4 Tabla `storage_movements`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `inventory_item_id` | BIGINT UNSIGNED | FK, NOT NULL | Item |
| `from_location_id` | BIGINT UNSIGNED | FK NULL | Desde |
| `to_location_id` | BIGINT UNSIGNED | FK NULL | Hacia |
| `movement_type` | VARCHAR(50) | NOT NULL | receipt, move, dispatch, adjustment |
| `moved_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `moved_at` | DATETIME | NOT NULL | Fecha |
| `notes` | TEXT | NULL | Notas |

---

## 22.5 Tabla `dispatches`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `warehouse_id` | BIGINT UNSIGNED | FK, NOT NULL | Almacén |
| `dispatch_code` | VARCHAR(50) | UNIQUE | Código despacho |
| `dispatch_status` | VARCHAR(30) | NOT NULL | pending, dispatched, cancelled |
| `dispatched_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `dispatched_at` | DATETIME | NULL | Fecha |

---

# 23. Esquema de Inspecciones

---

## 23.1 Tabla `inspections`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `inspection_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código inspección |
| `order_id` | BIGINT UNSIGNED | FK, NOT NULL | Orden |
| `store_id` | BIGINT UNSIGNED | FK NULL | Tienda inspectora |
| `inspector_user_id` | BIGINT UNSIGNED | FK NULL | Inspector |
| `inspection_type` | VARCHAR(80) | NOT NULL | physical, document, photo, security |
| `scheduled_at` | DATETIME | NULL | Programada |
| `started_at` | DATETIME | NULL | Inicio |
| `completed_at` | DATETIME | NULL | Fin |
| `result_status` | VARCHAR(30) | NULL | approved, rejected, observed |
| `status` | VARCHAR(30) | NOT NULL | created, scheduled, assigned, in_progress, completed, cancelled |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

### Referencia Odoo conceptual

`quality.check`, `project.task`.

---

## 23.2 Tabla `inspection_checklists`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `inspection_id` | BIGINT UNSIGNED | FK, NOT NULL | Inspección |
| `item_code` | VARCHAR(50) | NULL | Código item |
| `item_label` | VARCHAR(200) | NOT NULL | Pregunta o revisión |
| `result_value` | VARCHAR(80) | NULL | ok, fail, na |
| `notes` | TEXT | NULL | Notas |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 23.3 Tabla `inspection_results`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `inspection_id` | BIGINT UNSIGNED | FK, NOT NULL | Inspección |
| `result_status` | VARCHAR(30) | NOT NULL | approved, rejected, observed |
| `summary` | TEXT | NULL | Resumen |
| `created_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 23.4 Tabla `inspection_evidences`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `inspection_id` | BIGINT UNSIGNED | FK, NOT NULL | Inspección |
| `evidence_id` | BIGINT UNSIGNED | FK, NOT NULL | Evidencia |
| `status` | VARCHAR(30) | DEFAULT 'active' | Estado |

---

# 24. Esquema de Reportes y Exportaciones

---

## 24.1 Tabla `reports`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `report_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código reporte |
| `report_name` | VARCHAR(150) | NOT NULL | Nombre |
| `module_code` | VARCHAR(50) | NULL | Módulo |
| `description` | TEXT | NULL | Descripción |
| `required_permission` | VARCHAR(100) | NULL | Permiso |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 24.2 Tabla `report_templates`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `report_id` | BIGINT UNSIGNED | FK, NOT NULL | Reporte |
| `template_code` | VARCHAR(50) | UNIQUE | Código plantilla |
| `template_name` | VARCHAR(150) | NOT NULL | Nombre |
| `template_config` | JSON | NULL | Configuración |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 24.3 Tabla `report_exports`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `report_id` | BIGINT UNSIGNED | FK NULL | Reporte |
| `export_code` | VARCHAR(50) | UNIQUE | Código exportación |
| `export_format` | VARCHAR(20) | NOT NULL | pdf, excel, csv |
| `filters` | JSON | NULL | Filtros usados |
| `file_path` | VARCHAR(500) | NULL | Ruta archivo |
| `generated_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 25. Esquema de Auditoría

---

## 25.1 Tabla `audit_logs`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `user_id` | BIGINT UNSIGNED | FK NULL | Usuario |
| `profile_code` | VARCHAR(50) | NULL | Perfil activo |
| `module_name` | VARCHAR(120) | NOT NULL | Módulo |
| `action` | VARCHAR(120) | NOT NULL | Acción |
| `entity_type` | VARCHAR(80) | NULL | Tipo entidad |
| `entity_id` | BIGINT UNSIGNED | NULL | ID entidad |
| `old_value` | JSON | NULL | Valor anterior |
| `new_value` | JSON | NULL | Valor nuevo |
| `ip_address` | VARCHAR(80) | NULL | IP |
| `user_agent` | TEXT | NULL | Navegador |
| `result` | VARCHAR(30) | NOT NULL | success, failure, denied |
| `criticality` | VARCHAR(30) | NOT NULL | low, medium, high, critical |
| `created_at` | DATETIME | NOT NULL | Fecha |

### Índices

1. `idx_audit_logs_user_id`
2. `idx_audit_logs_module_name`
3. `idx_audit_logs_action`
4. `idx_audit_logs_entity`
5. `idx_audit_logs_created_at`
6. `idx_audit_logs_criticality`

### Referencia Odoo conceptual

`mail.message`.

---

## 25.2 Tabla `audit_events`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `event_code` | VARCHAR(80) | UNIQUE, NOT NULL | Código evento |
| `event_name` | VARCHAR(150) | NOT NULL | Nombre |
| `module_name` | VARCHAR(120) | NOT NULL | Módulo |
| `criticality` | VARCHAR(30) | NOT NULL | Criticidad |
| `track_old_value` | BOOLEAN | DEFAULT FALSE | Guarda anterior |
| `track_new_value` | BOOLEAN | DEFAULT FALSE | Guarda nuevo |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

## 25.3 Tabla `audit_snapshots`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `audit_log_id` | BIGINT UNSIGNED | FK, NOT NULL | Log |
| `snapshot_type` | VARCHAR(30) | NOT NULL | before, after |
| `snapshot_data` | JSON | NOT NULL | Datos |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

# 26. Esquema de Soporte

---

## 26.1 Tabla `support_tickets`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `ticket_code` | VARCHAR(50) | UNIQUE, NOT NULL | Código ticket |
| `created_by` | BIGINT UNSIGNED | FK, NOT NULL | Usuario creador |
| `assigned_to` | BIGINT UNSIGNED | FK NULL | Soporte asignado |
| `category_code` | VARCHAR(50) | NULL | Categoría |
| `priority` | VARCHAR(30) | NOT NULL | low, medium, high, critical |
| `subject` | VARCHAR(200) | NOT NULL | Asunto |
| `description` | TEXT | NOT NULL | Descripción |
| `status` | VARCHAR(30) | NOT NULL | open, assigned, in_progress, resolved, closed |
| `created_at` | DATETIME | NOT NULL | Creación |
| `updated_at` | DATETIME | NOT NULL | Actualización |
| `closed_at` | DATETIME | NULL | Cierre |

---

## 26.2 Tabla `support_ticket_messages`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `ticket_id` | BIGINT UNSIGNED | FK, NOT NULL | Ticket |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario |
| `message` | TEXT | NOT NULL | Mensaje |
| `is_internal` | BOOLEAN | DEFAULT FALSE | Nota interna |
| `created_at` | DATETIME | NOT NULL | Fecha |

---

## 26.3 Tabla `support_sla`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `priority` | VARCHAR(30) | UNIQUE, NOT NULL | Prioridad |
| `response_time_hours` | INT | NOT NULL | Tiempo respuesta |
| `resolution_time_hours` | INT | NOT NULL | Tiempo resolución |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

# 27. Esquema de Configuración y Notificaciones

---

## 27.1 Tabla `global_settings`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `setting_key` | VARCHAR(100) | UNIQUE, NOT NULL | Clave |
| `setting_value` | TEXT | NULL | Valor |
| `setting_type` | VARCHAR(30) | NOT NULL | string, number, boolean, json |
| `description` | TEXT | NULL | Descripción |
| `is_sensitive` | BOOLEAN | DEFAULT FALSE | Sensible |
| `updated_by` | BIGINT UNSIGNED | FK NULL | Usuario |
| `updated_at` | DATETIME | NOT NULL | Actualización |

---

## 27.2 Tabla `notifications`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `uuid` | CHAR(36) | UNIQUE | UUID |
| `user_id` | BIGINT UNSIGNED | FK, NOT NULL | Usuario destino |
| `notification_type` | VARCHAR(80) | NOT NULL | Tipo |
| `title` | VARCHAR(180) | NOT NULL | Título |
| `message` | TEXT | NULL | Mensaje |
| `target_route` | VARCHAR(255) | NULL | Ruta destino |
| `read_at` | DATETIME | NULL | Leída |
| `created_at` | DATETIME | NOT NULL | Creación |

---

## 27.3 Tabla `notification_templates`

| Campo | Tipo | Restricción | Descripción |
|---|---|---|---|
| `id` | BIGINT UNSIGNED | PK | Identificador |
| `template_code` | VARCHAR(80) | UNIQUE, NOT NULL | Código |
| `template_name` | VARCHAR(150) | NOT NULL | Nombre |
| `subject_template` | VARCHAR(255) | NULL | Asunto |
| `body_template` | TEXT | NOT NULL | Cuerpo |
| `channel` | VARCHAR(30) | NOT NULL | in_app, email, sms |
| `status` | VARCHAR(30) | NOT NULL | active, inactive |

---

# 28. Relaciones principales del modelo

## 28.1 Relaciones de identidad y seguridad

```txt
user_profiles 1 ── N users
user_profiles 1 ── N roles
users N ── N roles vía user_roles
roles N ── N permissions vía role_permissions
modules 1 ── N permissions
user_profiles N ── N modules vía profile_module_access
```

## 28.2 Relaciones marketplace

```txt
stores 1 ── N store_users
stores 1 ── N services
services 1 ── N service_pricing
services 1 ── N service_documents
stores 1 ── N reviews
services 1 ── N reviews
```

## 28.3 Relaciones comerciales

```txt
users 1 ── N quotations como customer
stores 1 ── N quotations
services 1 ── N quotations
quotations 1 ── N quotation_lines
quotations 1 ── 0..1 orders
orders 1 ── N order_lines
orders 1 ── N order_tasks
orders 1 ── N order_events
```

## 28.4 Relaciones documentales

```txt
documents se asocia por entity_type + entity_id
documents 1 ── N document_versions
documents 1 ── N document_validations
documents 1 ── N evidences si aplica
```

## 28.5 Relaciones financieras

```txt
orders 1 ── N payments
payments 1 ── N payment_receipts
orders 1 ── N commissions
commission_rules 1 ── N commissions
```

## 28.6 Relaciones logísticas

```txt
orders 1 ── N trips
orders 1 ── N inspections
orders 1 ── N tos_containers
warehouses 1 ── N storage_locations
warehouses 1 ── N inventory_items
inventory_items 1 ── N storage_movements
```

---

# 29. Estados principales controlados

## 29.1 Estados de tienda

```txt
pending_review
approved
rejected
suspended
inactive
```

## 29.2 Estados de servicio

```txt
draft
pending_approval
approved
published
paused
rejected
inactive
```

## 29.3 Estados de cotización

```txt
requested
in_review
responded
approved
rejected
expired
converted
```

## 29.4 Estados de orden

```txt
created
in_process
executing
closed
cancelled
```

## 29.5 Estados documentales

```txt
pending
uploaded
validated
rejected
versioned
```

## 29.6 Estados financieros

```txt
unpaid
pending
submitted
confirmed
rejected
refunded
```

---

# 30. Índices generales recomendados

| Tabla | Índices recomendados |
|---|---|
| `users` | email, status, primary_profile_id |
| `stores` | store_type_code, verification_status, main_port_code, average_rating |
| `services` | store_id, category_id, approval_status, publication_status, base_price |
| `quotations` | customer_id, store_id, service_id, status, created_at |
| `orders` | customer_id, store_id, service_id, operational_status, financial_status, created_at |
| `documents` | entity_type + entity_id, document_type_code, validation_status |
| `payments` | order_id, customer_id, store_id, payment_status |
| `commissions` | order_id, store_id, status |
| `audit_logs` | user_id, module_name, action, entity_type + entity_id, created_at, criticality |
| `notifications` | user_id, read_at, created_at |
| `support_tickets` | created_by, assigned_to, status, priority |

---

# 31. Estrategia de migraciones

Antigravity debe crear migraciones en fases:

## 31.1 Fase 1 — Seguridad

1. `user_profiles`.
2. `users`.
3. `roles`.
4. `modules`.
5. `permissions`.
6. `role_permissions`.
7. `user_roles`.
8. `user_sessions`.

## 31.2 Fase 2 — Configuración y navegación

1. `access_levels`.
2. `profile_module_access`.
3. `navigation_menus`.
4. `navigation_menu_items`.
5. `user_navigation_preferences`.
6. `master_catalogs`.
7. `master_catalog_items`.

## 31.3 Fase 3 — Marketplace

1. `ecosystem_actors`.
2. `stores`.
3. `store_users`.
4. `store_documents`.
5. `service_categories`.
6. `services`.
7. `service_pricing`.
8. `service_documents`.

## 31.4 Fase 4 — Operación comercial

1. `quotations`.
2. `quotation_lines`.
3. `quotation_documents`.
4. `quotation_status_history`.
5. `orders`.
6. `order_lines`.
7. `order_tasks`.
8. `order_events`.

## 31.5 Fase 5 — Documentos y finanzas

1. `documents`.
2. `document_versions`.
3. `document_validations`.
4. `evidences`.
5. `payment_methods`.
6. `payments`.
7. `payment_receipts`.
8. `commission_rules`.
9. `commissions`.

## 31.6 Fase 6 — Logística y control

1. `tos_yards`.
2. `tos_containers`.
3. `tos_moves`.
4. `tos_gates`.
5. `vehicles`.
6. `drivers`.
7. `routes`.
8. `trips`.
9. `trip_events`.
10. `warehouses`.
11. `storage_locations`.
12. `inventory_items`.
13. `storage_movements`.
14. `inspections`.
15. `inspection_checklists`.
16. `inspection_results`.
17. `audit_logs`.
18. `reports`.

---

# 32. Seeds iniciales mínimos

## 32.1 Seeds obligatorios

1. Perfiles de usuario.
2. Roles base.
3. Permisos base.
4. Módulos funcionales.
5. Niveles de acceso.
6. Matriz perfil-módulo.
7. Menús por perfil.
8. Catálogos maestros.
9. Actores del ecosistema.
10. Métodos de pago.
11. Reglas de comisión iniciales.
12. Eventos de auditoría.
13. Usuario superadministrador demo.

## 32.2 Usuario superadministrador inicial

```json
{
  "first_name": "Super",
  "last_name": "Admin",
  "email": "admin@example.com",
  "primary_profile_code": "PROF-SUP-003",
  "role_code": "ROLE-SUPERADMIN",
  "status": "active"
}
```

## 32.3 Regla de comisión inicial

```json
{
  "rule_code": "COM-GENERAL-001",
  "rule_name": "Comisión general marketplace",
  "commission_type": "percentage",
  "commission_percentage": 10.0000,
  "currency_code": "USD",
  "status": "active"
}
```

---

# 33. Reglas de integridad y validación

1. `users.email` debe ser único.
2. `stores.store_code` debe ser único.
3. `services.service_code` debe ser único.
4. `quotations.quotation_code` debe ser único.
5. `orders.order_code` debe ser único.
6. `documents.document_code` debe ser único.
7. `payments.payment_code` debe ser único.
8. `commissions.commission_code` debe ser único.
9. No permitir cotización sin cliente, tienda y servicio.
10. No permitir orden sin cliente, tienda y servicio.
11. No permitir pago sin orden.
12. No permitir comisión sin orden.
13. No permitir review sin orden cerrada.
14. No permitir servicio publicado si la tienda no está aprobada.
15. No permitir montos negativos.
16. No permitir porcentajes de comisión negativos.
17. No permitir documentos sin entidad asociada.
18. No permitir roles sin código único.
19. No permitir permisos sin módulo.
20. No permitir cambios críticos sin auditoría.

---

# 34. Reglas de soft delete

## 34.1 Tablas con soft delete recomendado

1. `users`.
2. `stores`.
3. `services`.
4. `quotations`.
5. `orders`.
6. `documents`.
7. `reviews`.
8. `support_tickets`.
9. `roles`.
10. `commission_rules`.

## 34.2 Tablas sin soft delete recomendado

1. `audit_logs`.
2. `payments`.
3. `commissions`.
4. `document_versions`.
5. `document_validations`.
6. `order_events`.
7. `quotation_status_history`.

### Regla

Los registros financieros, auditoría y eventos históricos no deben eliminarse físicamente desde la aplicación.

---

# 35. Seguridad de datos

1. Contraseñas siempre hasheadas.
2. No guardar JWT en texto plano en base de datos.
3. No guardar secretos en `global_settings` salvo cifrado o variable de entorno.
4. No exponer `password_hash` en API.
5. No exponer rutas absolutas de archivos.
6. Controlar documentos por `entity_type`, `entity_id` y permisos.
7. Los datos financieros requieren permisos específicos.
8. Auditoría no debe ser editable desde UI general.
9. Los permisos deben validarse en backend.
10. Los datos deben filtrarse por scope: own, store, assigned, module, global.

---

# 36. Mapeo conceptual con Odoo

| Dominio propio | Tablas propias | Modelo Odoo referencial |
|---|---|---|
| Usuarios | `users`, `user_profiles` | `res.users`, `res.partner` |
| Roles | `roles`, `permissions` | `res.groups`, `ir.model.access`, `ir.rule` |
| Tiendas | `stores`, `store_users` | `res.partner`, `res.company` |
| Servicios | `services`, `service_categories`, `service_pricing` | `product.template`, `product.category`, `uom.uom` |
| Cotizaciones | `quotations`, `quotation_lines` | `sale.order`, `sale.order.line` |
| Órdenes | `orders`, `order_lines`, `order_tasks` | `sale.order`, `project.task` |
| Documentos | `documents`, `document_versions` | `ir.attachment` |
| Pagos | `payments`, `payment_receipts` | `account.payment`, `account.move` |
| Comisiones | `commission_rules`, `commissions` | Conceptual financiero personalizado |
| Transporte | `vehicles`, `drivers`, `trips` | `fleet.vehicle`, `project.task` |
| Almacenamiento | `warehouses`, `inventory_items` | `stock.location`, `stock.quant`, `stock.picking` |
| Inspecciones | `inspections`, `inspection_checklists` | `quality.check` |
| Auditoría | `audit_logs` | `mail.message` |

### Restricciones

1. No usar base de datos Odoo.
2. No depender de módulos Odoo.
3. No replicar todas las tablas Odoo.
4. No crear integración técnica en el MVP.
5. Usar Odoo solo como referencia conceptual.

---

# 37. Criterios de aceptación del esquema de base de datos

El esquema se considera aceptado cuando:

1. Todas las tablas principales están definidas.
2. Las tablas usan nombres en `snake_case`.
3. Las claves primarias están definidas.
4. Las relaciones principales están claras.
5. Los campos financieros usan `DECIMAL`.
6. Las entidades críticas tienen `created_at` y `updated_at`.
7. Las entidades comerciales tienen `deleted_at` cuando aplica.
8. Los catálogos maestros están definidos.
9. Los perfiles, roles y permisos están definidos.
10. La matriz perfil-módulo tiene tabla propia.
11. El marketplace tiene tiendas y servicios.
12. Cotizaciones y órdenes tienen tablas propias.
13. Documentos y evidencias tienen metadata.
14. Pagos y comisiones tienen trazabilidad.
15. Auditoría tiene tabla transversal.
16. TOS, transporte, almacenamiento e inspecciones tienen estructura inicial.
17. Hay índices recomendados.
18. Hay seeds mínimos.
19. Hay estrategia de migraciones por fases.
20. No existe dependencia técnica con Odoo.

---

# 38. Tareas técnicas para Antigravity

## 38.1 Base de datos

1. Crear migraciones por fases.
2. Crear tablas de seguridad.
3. Crear tablas RBAC.
4. Crear tablas de navegación.
5. Crear catálogos maestros.
6. Crear tablas marketplace.
7. Crear tablas de cotizaciones y órdenes.
8. Crear tablas documentales.
9. Crear tablas financieras.
10. Crear tablas logísticas.
11. Crear tablas de auditoría.
12. Crear tablas de soporte.
13. Crear índices.
14. Crear llaves foráneas.
15. Crear seeds.

## 38.2 Backend Nest.js

1. Crear entidades por tabla.
2. Crear DTOs por módulo.
3. Crear repositorios o servicios de datos.
4. Crear validaciones de integridad.
5. Crear servicios de auditoría.
6. Crear servicios de seeds.
7. Crear pruebas de base de datos.

## 38.3 QA

1. Validar migraciones limpias.
2. Validar rollback si aplica.
3. Validar seeds.
4. Validar relaciones.
5. Validar índices.
6. Validar constraints únicos.
7. Validar soft delete.
8. Validar que no haya datos huérfanos.
9. Validar que no haya montos negativos.
10. Validar permisos por scope.

---

## 39. Prompt sugerido para Antigravity

```text
Actúa como database architect senior, backend architect Nest.js y experto en MySQL para aplicaciones marketplace empresariales.

Usa el documento `12_DATABASE_MASTER_SCHEMA.md` como fuente principal para crear el esquema de base de datos del Marketplace Logístico TOS.

Objetivo:
Crear migraciones MySQL, entidades Nest.js, relaciones, índices, seeds y validaciones de integridad para soportar usuarios, perfiles, roles, permisos, tiendas, servicios, cotizaciones, órdenes, documentos, pagos, comisiones, reportes, auditoría, TOS básico, transporte, almacenamiento, inspecciones, navegación, soporte y configuración.

Reglas obligatorias:
1. Usar MySQL.
2. Usar nombres en snake_case.
3. Usar tablas en plural.
4. Usar id BIGINT UNSIGNED como PK.
5. Usar uuid en entidades expuestas externamente.
6. Usar DECIMAL para montos financieros.
7. Usar migraciones para crear tablas.
8. Usar seeds para datos iniciales.
9. Crear índices en campos de búsqueda y relación.
10. Crear llaves foráneas donde aplique.
11. Usar soft delete en entidades críticas.
12. No eliminar físicamente auditoría, pagos, comisiones ni eventos históricos.
13. No integrar Odoo; usarlo solo como referencia conceptual.
14. Validar integridad de estados y relaciones en backend.
15. Crear pruebas de migraciones y seeds.

Entregables esperados:
1. Migraciones MySQL por fase.
2. Entidades Nest.js.
3. Relaciones entre entidades.
4. Índices.
5. Llaves foráneas.
6. Seeds iniciales.
7. Validaciones de integridad.
8. Pruebas básicas de base de datos.
9. Documentación técnica de tablas.

Antes de implementar, genera un plan de migraciones por fases y valida dependencias entre tablas.
```

---

## 40. Checklist de uso en Antigravity

- [ ] Guardar este documento como `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `11_TECHNICAL_ARCHITECTURE.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Crear migraciones fase 1 seguridad.
- [ ] Crear migraciones fase 2 configuración y navegación.
- [ ] Crear migraciones fase 3 marketplace.
- [ ] Crear migraciones fase 4 operación comercial.
- [ ] Crear migraciones fase 5 documentos y finanzas.
- [ ] Crear migraciones fase 6 logística y control.
- [ ] Crear seeds mínimos.
- [ ] Crear índices.
- [ ] Crear llaves foráneas.
- [ ] Crear entidades Nest.js.
- [ ] Crear pruebas de migración.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 41. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de revisión de integridad | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

