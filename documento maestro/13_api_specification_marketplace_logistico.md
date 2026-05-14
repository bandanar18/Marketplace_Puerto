# 13_API_SPECIFICATION.md

# Documento Maestro de Especificación API REST
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `13_API_SPECIFICATION.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Backend | Nest.js |
| Frontend consumidor | React.js |
| Base de datos | MySQL |
| Tipo de API | REST |
| Autenticación | JWT |
| Autorización | RBAC por perfiles, roles, permisos y scopes |
| Documentación API | Swagger / OpenAPI |
| Modelo referencial | Odoo solo como referencia conceptual de datos |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md` |

---

## 2. Propósito del documento

Este documento define la **especificación maestra de API REST** para el Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como guía técnica para que Antigravity pueda implementar los endpoints backend en Nest.js, conectarlos con el frontend React.js, documentarlos en Swagger y protegerlos mediante JWT, RBAC, validaciones DTO, scopes de datos y auditoría.

La API debe soportar los módulos principales del sistema:

1. Autenticación.
2. Usuarios.
3. Perfiles.
4. Roles.
5. Permisos.
6. Navegación.
7. Catálogos maestros.
8. Actores del ecosistema.
9. Tiendas logísticas.
10. Servicios logísticos.
11. Búsqueda marketplace.
12. Reviews y ratings.
13. Cotizaciones.
14. Órdenes.
15. Documentos y evidencias.
16. Pagos.
17. Comisiones.
18. Reportes.
19. Auditoría.
20. TOS básico.
21. Transporte.
22. Almacenamiento.
23. Inspecciones.
24. Soporte.
25. Configuración.
26. Notificaciones.
27. Dashboards.
28. Exportaciones.

---

## 3. Objetivo general

Definir los estándares, contratos, rutas, métodos, DTOs, respuestas, errores, seguridad, paginación, filtros, auditoría y documentación Swagger necesarios para construir una API REST modular, segura, auditable y escalable para el Marketplace Logístico TOS.

---

## 4. Objetivos específicos

1. Definir estándar general de rutas REST.
2. Definir estructura de respuesta exitosa.
3. Definir estructura de error.
4. Definir autenticación JWT.
5. Definir autorización RBAC.
6. Definir scopes de datos.
7. Definir paginación, filtros y ordenamiento.
8. Definir endpoints por módulo.
9. Definir DTOs base por módulo.
10. Definir permisos requeridos por endpoint.
11. Definir eventos auditables por endpoint crítico.
12. Definir manejo de archivos.
13. Definir exportaciones.
14. Definir documentación Swagger.
15. Definir criterios de aceptación API.
16. Servir como prompt maestro para Antigravity.

---

## 5. Principios obligatorios de la API

Antigravity debe respetar los siguientes principios:

1. Usar arquitectura REST.
2. Usar JSON como formato principal.
3. Usar JWT para endpoints privados.
4. Usar RBAC para acciones protegidas.
5. Validar entrada con DTOs.
6. No confiar en validaciones del frontend.
7. Respetar scopes de datos: `own`, `store`, `assigned`, `module`, `global`.
8. Paginar listados.
9. No devolver datasets masivos sin paginación.
10. Usar respuestas consistentes.
11. Usar errores consistentes.
12. No exponer `password_hash` ni secretos.
13. No exponer rutas absolutas de archivos.
14. Auditar eventos críticos.
15. Documentar endpoints en Swagger.
16. Usar nombres claros y consistentes.
17. No integrar directamente con Odoo.
18. Usar Odoo solo como referencia conceptual.
19. No hardcodear permisos en el frontend.
20. Validar permisos en backend siempre.

---

## 6. Estándar base de URL

### 6.1 URL base local

```txt
http://localhost:3000/api/v1
```

### 6.2 URL base staging

```txt
https://staging-api.marketplace-logistics.example.com/api/v1
```

### 6.3 URL base producción futura

```txt
https://api.marketplace-logistics.example.com/api/v1
```

### 6.4 Versionado

La API debe versionarse desde el path:

```txt
/api/v1
```

Futuras versiones:

```txt
/api/v2
```

---

## 7. Headers estándar

### 7.1 Headers públicos

```txt
Content-Type: application/json
Accept: application/json
```

### 7.2 Headers privados

```txt
Content-Type: application/json
Accept: application/json
Authorization: Bearer <jwt_token>
```

### 7.3 Headers opcionales

```txt
X-Request-Id: REQ-000001
X-Client-Version: web-1.0.0
X-Timezone: America/New_York
```

---

## 8. Formato estándar de respuesta exitosa

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {},
  "meta": {
    "requestId": "REQ-000001",
    "timestamp": "2026-01-01T00:00:00.000Z",
    "version": "v1"
  }
}
```

---

## 9. Formato estándar de respuesta paginada

```json
{
  "success": true,
  "message": "Records retrieved successfully",
  "data": [
    {}
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 150,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPreviousPage": false
  },
  "meta": {
    "requestId": "REQ-000001",
    "timestamp": "2026-01-01T00:00:00.000Z",
    "version": "v1"
  }
}
```

---

## 10. Formato estándar de error

```json
{
  "success": false,
  "message": "Validation error",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  },
  "meta": {
    "requestId": "REQ-000001",
    "timestamp": "2026-01-01T00:00:00.000Z",
    "version": "v1"
  }
}
```

---

## 11. Códigos HTTP estándar

| Código | Uso |
|---:|---|
| 200 | Consulta exitosa o actualización exitosa |
| 201 | Recurso creado |
| 204 | Acción exitosa sin contenido |
| 400 | Solicitud inválida |
| 401 | No autenticado |
| 403 | Sin permiso |
| 404 | Recurso no encontrado |
| 409 | Conflicto de datos o estado |
| 422 | Regla de negocio inválida |
| 429 | Límite de solicitudes si aplica |
| 500 | Error interno |

---

## 12. Códigos de error funcionales

| Código interno | HTTP | Descripción |
|---|---:|---|
| `VALIDATION_ERROR` | 400 | Error de validación DTO |
| `UNAUTHORIZED` | 401 | Token ausente o inválido |
| `FORBIDDEN` | 403 | Usuario sin permiso |
| `RESOURCE_NOT_FOUND` | 404 | Recurso no encontrado |
| `DUPLICATE_RESOURCE` | 409 | Recurso duplicado |
| `INVALID_STATUS_TRANSITION` | 422 | Transición de estado inválida |
| `BUSINESS_RULE_ERROR` | 422 | Regla de negocio incumplida |
| `FILE_UPLOAD_ERROR` | 400 | Error al cargar archivo |
| `FILE_TYPE_NOT_ALLOWED` | 400 | Tipo de archivo no permitido |
| `FILE_SIZE_EXCEEDED` | 400 | Archivo excede tamaño permitido |
| `PAYMENT_STATUS_LOCKED` | 409 | Pago no modificable |
| `ORDER_CANNOT_BE_CLOSED` | 422 | Orden no cumple condiciones de cierre |
| `SERVICE_NOT_PUBLISHED` | 422 | Servicio no publicado |
| `STORE_NOT_APPROVED` | 422 | Tienda no aprobada |
| `INTERNAL_SERVER_ERROR` | 500 | Error interno |

---

## 13. Paginación, filtros y ordenamiento

### 13.1 Query params estándar

```txt
?page=1&limit=20&sortBy=created_at&sortOrder=desc&status=active&search=text
```

### 13.2 Parámetros estándar

| Parámetro | Tipo | Descripción |
|---|---|---|
| `page` | number | Página actual |
| `limit` | number | Registros por página |
| `sortBy` | string | Campo de ordenamiento |
| `sortOrder` | string | `asc` o `desc` |
| `search` | string | Búsqueda textual |
| `status` | string | Filtro por estado |
| `dateFrom` | date | Fecha desde |
| `dateTo` | date | Fecha hasta |

### 13.3 Límite recomendado

| Valor | Recomendación |
|---:|---|
| `limit` por defecto | 20 |
| `limit` máximo recomendado | 100 |

---

## 14. Autenticación JWT

### 14.1 Endpoints públicos de autenticación

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| POST | `/auth/register` | Registrar usuario | Público |
| POST | `/auth/login` | Iniciar sesión | Público |
| POST | `/auth/forgot-password` | Solicitar recuperación | Público |
| POST | `/auth/reset-password` | Restablecer contraseña | Público con token |

### 14.2 Endpoints privados de autenticación

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| POST | `/auth/logout` | Cerrar sesión | Autenticado |
| GET | `/auth/me` | Obtener usuario autenticado | Autenticado |
| GET | `/auth/me/permissions` | Obtener permisos del usuario | Autenticado |
| GET | `/auth/me/navigation` | Obtener navegación del usuario | Autenticado |

### 14.3 DTO `LoginDto`

```json
{
  "email": "user@example.com",
  "password": "StrongPassword123"
}
```

### 14.4 Respuesta login

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "jwt-token",
    "user": {
      "id": 1,
      "uuid": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "primaryProfileCode": "PROF-CLI-001"
    },
    "permissions": ["quotations.view", "orders.view"],
    "defaultDashboardRoute": "/dashboard/client"
  }
}
```

### 14.5 Eventos auditables

1. `auth.login`
2. `auth.logout`
3. `auth.failed_login`
4. `auth.password_reset_requested`
5. `auth.password_changed`

---

## 15. Autorización RBAC

### 15.1 Decorador sugerido en Nest.js

```ts
@RequirePermissions('services.create')
@Post('/services')
createService() {}
```

### 15.2 Guard sugerido

```txt
JwtAuthGuard → PermissionsGuard → ScopeGuard
```

### 15.3 Scopes permitidos

| Scope | Descripción |
|---|---|
| `own` | Solo registros propios |
| `store` | Registros de la tienda del usuario |
| `assigned` | Registros asignados al usuario |
| `module` | Registros operativos del módulo |
| `global` | Todos los registros |

### 15.4 Reglas

1. Todos los endpoints privados usan `JwtAuthGuard`.
2. Acciones críticas usan `PermissionsGuard`.
3. Listados filtran por scope.
4. Cambios de permisos generan auditoría.
5. Intentos no autorizados generan auditoría.

---

# 16. Endpoints de Usuarios

Base path:

```txt
/users
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/users` | Listar usuarios | `users.view` | No |
| GET | `/users/:id` | Ver usuario | `users.view` | No |
| POST | `/users` | Crear usuario | `users.create` | `user.created` |
| PATCH | `/users/:id` | Actualizar usuario | `users.update` | `user.updated` |
| PATCH | `/users/:id/block` | Bloquear usuario | `users.block` | `user.blocked` |
| PATCH | `/users/:id/activate` | Activar usuario | `users.activate` | `user.activated` |
| POST | `/users/:id/roles` | Asignar rol | `users.assign_role` | `user.role.assigned` |
| DELETE | `/users/:id/roles/:roleId` | Remover rol | `users.assign_role` | `user.role.removed` |

### DTO `CreateUserDto`

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1 555 000 0000",
  "password": "StrongPassword123",
  "primaryProfileCode": "PROF-CLI-001",
  "roleCode": "ROLE-CLIENT"
}
```

### DTO `UpdateUserDto`

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1 555 000 0000",
  "status": "active"
}
```

---

# 17. Endpoints de Perfiles

Base path:

```txt
/profiles
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/profiles` | Listar perfiles | `profiles.view` | No |
| GET | `/profiles/:id` | Ver perfil | `profiles.view` | No |
| POST | `/profiles` | Crear perfil | `profiles.manage` | `profile.created` |
| PATCH | `/profiles/:id` | Actualizar perfil | `profiles.manage` | `profile.updated` |
| GET | `/profiles/:id/modules` | Ver módulos del perfil | `profiles.view` | No |
| PATCH | `/profiles/:id/modules/:moduleId/access` | Actualizar acceso a módulo | `profiles.manage` | `profile.module_access.updated` |

---

# 18. Endpoints de Roles y Permisos

## 18.1 Roles

Base path:

```txt
/roles
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/roles` | Listar roles | `roles.view` | No |
| GET | `/roles/:id` | Ver rol | `roles.view` | No |
| POST | `/roles` | Crear rol | `roles.create` | `role.created` |
| PATCH | `/roles/:id` | Actualizar rol | `roles.update` | `role.updated` |
| POST | `/roles/:id/permissions` | Asignar permisos | `roles.assign_permissions` | `role.permission.assigned` |
| DELETE | `/roles/:id/permissions/:permissionId` | Quitar permiso | `roles.assign_permissions` | `role.permission.removed` |

## 18.2 Permisos

Base path:

```txt
/permissions
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/permissions` | Listar permisos | `permissions.view` | No |
| GET | `/permissions/:id` | Ver permiso | `permissions.view` | No |
| POST | `/permissions` | Crear permiso | `permissions.manage` | `permission.created` |
| PATCH | `/permissions/:id` | Actualizar permiso | `permissions.manage` | `permission.updated` |
| GET | `/permissions/me` | Permisos del usuario actual | Autenticado | No |

---

# 19. Endpoints de Navegación

Base path:

```txt
/navigation
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/navigation/me` | Obtener menú del usuario autenticado | Autenticado | No |
| GET | `/navigation/profile/:profileCode` | Obtener menú por perfil | `navigation.view` | No |
| GET | `/navigation/preferences` | Obtener preferencias | Autenticado | No |
| PATCH | `/navigation/preferences` | Actualizar preferencias | Autenticado | `navigation.preferences.updated` |
| GET | `/admin/navigation/menus` | Listar menús | `navigation.manage` | No |
| POST | `/admin/navigation/menus` | Crear menú | `navigation.manage` | `navigation.menu.created` |
| POST | `/admin/navigation/items` | Crear ítem | `navigation.manage` | `navigation.item.created` |
| PATCH | `/admin/navigation/items/:id` | Editar ítem | `navigation.manage` | `navigation.item.updated` |

---

# 20. Endpoints de Catálogos Maestros

Base path:

```txt
/catalogs
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/catalogs` | Listar catálogos | `catalogs.view` | No |
| GET | `/catalogs/:id` | Ver catálogo | `catalogs.view` | No |
| POST | `/catalogs` | Crear catálogo | `catalogs.create` | `catalog.created` |
| PATCH | `/catalogs/:id` | Actualizar catálogo | `catalogs.update` | `catalog.updated` |
| GET | `/catalogs/:id/items` | Listar ítems | `catalogs.view` | No |
| POST | `/catalogs/:id/items` | Crear ítem | `catalogs.manage_items` | `catalog.item.created` |
| PATCH | `/catalogs/:id/items/:itemId` | Actualizar ítem | `catalogs.manage_items` | `catalog.item.updated` |
| PATCH | `/catalogs/:id/items/:itemId/disable` | Inactivar ítem | `catalogs.manage_items` | `catalog.item.disabled` |

### DTO `CreateCatalogItemDto`

```json
{
  "itemCode": "PORT-HOUSTON",
  "itemName": "Port Houston",
  "description": "Puerto de Houston",
  "parentItemId": null,
  "orderIndex": 1,
  "metadata": {}
}
```

---

# 21. Endpoints de Actores del Ecosistema

Base path:

```txt
/actors
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/actors` | Listar actores | `actors.view` | No |
| GET | `/actors/:id` | Ver actor | `actors.view` | No |
| POST | `/actors` | Crear actor | `actors.manage` | `actor.created` |
| PATCH | `/actors/:id` | Actualizar actor | `actors.manage` | `actor.updated` |
| GET | `/actors/:id/services` | Servicios relacionados | `actors.view` | No |
| GET | `/actors/:id/documents` | Documentos relacionados | `actors.view` | No |
| POST | `/actors/:id/services` | Asociar servicio conceptual | `actors.manage` | `actor.service.assigned` |
| POST | `/actors/:id/documents` | Asociar documento | `actors.manage` | `actor.document.assigned` |

---

# 22. Endpoints de Tiendas Logísticas

Base path:

```txt
/stores
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/stores` | Listar tiendas | `stores.view` | No |
| GET | `/stores/:id` | Ver tienda privada | `stores.view` | No |
| GET | `/stores/:id/public` | Perfil público de tienda | Público | `store.public_profile.viewed` si autenticado |
| POST | `/stores` | Crear tienda | `stores.create` | `store.created` |
| PATCH | `/stores/:id` | Actualizar tienda | `stores.update_own` o `stores.update` | `store.updated` |
| PATCH | `/stores/:id/approve` | Aprobar tienda | `stores.approve` | `store.approved` |
| PATCH | `/stores/:id/reject` | Rechazar tienda | `stores.reject` | `store.rejected` |
| PATCH | `/stores/:id/suspend` | Suspender tienda | `stores.suspend` | `store.suspended` |
| GET | `/stores/:id/services` | Servicios de tienda | Público si aprobada | No |
| GET | `/stores/:id/reviews` | Reviews de tienda | Público | No |

### DTO `CreateStoreDto`

```json
{
  "storeName": "Port Logistics Services LLC",
  "legalName": "Port Logistics Services LLC",
  "storeTypeCode": "CUSTOMS_AGENT",
  "taxId": "TX-000001",
  "email": "contact@example.com",
  "phone": "+1 555 000 0000",
  "description": "Proveedor de servicios aduanales y logísticos",
  "mainPortCode": "PORT-HOUSTON",
  "mainTerminalCode": "TERM-001",
  "address": "Houston, TX"
}
```

### Reglas de negocio

1. Una tienda debe estar aprobada para publicar servicios.
2. Solo la tienda propietaria puede editar su perfil salvo superadministrador.
3. Aprobar, rechazar o suspender tienda requiere auditoría.
4. Tiendas rechazadas no aparecen en búsqueda pública.

---

# 23. Endpoints de Servicios Logísticos

Base path:

```txt
/services
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/services` | Listar servicios | `services.view` o público filtrado | No |
| GET | `/services/:id` | Ver servicio | Público si publicado | `service.viewed` si autenticado |
| POST | `/services` | Crear servicio | `services.create` | `service.created` |
| PATCH | `/services/:id` | Actualizar servicio | `services.update_own` | `service.updated` |
| PATCH | `/services/:id/approve` | Aprobar servicio | `services.approve` | `service.approved` |
| PATCH | `/services/:id/reject` | Rechazar servicio | `services.approve` | `service.rejected` |
| PATCH | `/services/:id/publish` | Publicar servicio | `services.publish` | `service.published` |
| PATCH | `/services/:id/pause` | Pausar servicio | `services.pause` | `service.paused` |
| GET | `/services/:id/documents-required` | Documentos requeridos | Público si publicado | No |

### DTO `CreateServiceDto`

```json
{
  "storeId": 1,
  "categoryId": 1,
  "subcategoryId": null,
  "serviceName": "Customs Clearance Basic Service",
  "description": "Servicio básico de gestión aduanal",
  "scope": "Revisión documental, preparación y trámite básico",
  "basePrice": 450.00,
  "currencyCode": "USD",
  "unitMeasure": "service",
  "estimatedTime": "24-48 hours",
  "slaHours": 48,
  "rules": "Cliente debe cargar documentos completos",
  "commissionPercentage": 10.00,
  "requiredDocuments": ["COMMERCIAL_INVOICE", "PACKING_LIST", "BILL_OF_LADING"]
}
```

### Reglas de negocio

1. La tienda debe estar aprobada.
2. El servicio debe tener categoría, tarifa y unidad.
3. Cambios de tarifa deben auditarse.
4. Servicios no publicados no aparecen en búsqueda pública.

---

# 24. Endpoints de Búsqueda Marketplace

Base path:

```txt
/search
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/search/services` | Buscar servicios publicados | Público | `search.executed` si autenticado |
| GET | `/search/stores` | Buscar tiendas aprobadas | Público | `search.executed` si autenticado |
| GET | `/search/categories` | Categorías para búsqueda | Público | No |
| GET | `/search/suggestions` | Sugerencias de búsqueda | Público | No |

### Query params sugeridos

```txt
/search/services?search=customs&categoryCode=CUSTOMS&portCode=PORT-HOUSTON&minPrice=100&maxPrice=1000&rating=4&page=1&limit=20
```

### Filtros permitidos

1. `search`.
2. `categoryCode`.
3. `subcategoryCode`.
4. `storeTypeCode`.
5. `portCode`.
6. `terminalCode`.
7. `cargoTypeCode`.
8. `containerTypeCode`.
9. `minPrice`.
10. `maxPrice`.
11. `rating`.
12. `verified`.
13. `sortBy`.
14. `sortOrder`.

---

# 25. Endpoints de Reviews y Ratings

Base path:

```txt
/reviews
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/reviews` | Listar reviews | `reviews.view` | No |
| POST | `/reviews` | Crear review | `reviews.create` | `review.created` |
| GET | `/reviews/:id` | Ver review | `reviews.view` o público si publicada | No |
| POST | `/reviews/:id/reply` | Responder review | `reviews.reply` | `review.replied` |
| PATCH | `/reviews/:id/moderate` | Moderar review | `reviews.moderate` | `review.moderated` |
| GET | `/stores/:id/reviews` | Reviews de tienda | Público | No |

### DTO `CreateReviewDto`

```json
{
  "orderId": 1001,
  "storeId": 20,
  "serviceId": 50,
  "rating": 5,
  "title": "Excellent service",
  "comment": "The provider completed the customs service on time."
}
```

### Reglas de negocio

1. Solo se puede crear review sobre una orden cerrada.
2. Una orden solo permite una review principal por cliente.
3. El rating debe estar entre 1 y 5.
4. Reviews moderadas deben generar auditoría.

---

# 26. Endpoints de Cotizaciones

Base path:

```txt
/quotations
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/quotations` | Listar cotizaciones según scope | `quotations.view` | No |
| GET | `/quotations/:id` | Ver cotización | `quotations.view` | No |
| POST | `/quotations` | Crear solicitud | `quotations.create` | `quotation.created` |
| PATCH | `/quotations/:id/respond` | Responder cotización | `quotations.respond` | `quotation.responded` |
| PATCH | `/quotations/:id/approve` | Aprobar cotización | `quotations.approve` | `quotation.approved` |
| PATCH | `/quotations/:id/reject` | Rechazar cotización | `quotations.reject` | `quotation.rejected` |
| POST | `/quotations/:id/convert-to-order` | Convertir en orden | `quotations.convert_to_order` | `quotation.converted_to_order` |
| GET | `/quotations/:id/documents` | Documentos de cotización | `documents.view` | No |
| POST | `/quotations/:id/documents` | Adjuntar documento | `documents.upload` | `quotation.document.uploaded` |

### DTO `CreateQuotationDto`

```json
{
  "storeId": 20,
  "serviceId": 50,
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-001",
  "cargoTypeCode": "GENERAL_CARGO",
  "containerTypeCode": "40HC",
  "quantity": 1,
  "unitMeasure": "container",
  "requestedDate": "2026-02-01",
  "customerNotes": "Need customs clearance and documentation support."
}
```

### DTO `RespondQuotationDto`

```json
{
  "providerNotes": "Service can be completed within 48 hours.",
  "subtotalAmount": 450.00,
  "taxAmount": 0.00,
  "commissionAmount": 45.00,
  "totalAmount": 450.00,
  "currencyCode": "USD",
  "expiresAt": "2026-02-05T23:59:59.000Z"
}
```

### Reglas de negocio

1. Cliente crea cotización.
2. Tienda solo responde cotizaciones dirigidas a ella.
3. Cliente solo aprueba o rechaza cotizaciones propias.
4. Cotización aprobada puede convertirse en orden.
5. No convertir cotización rechazada o vencida.
6. Todo cambio de estado se audita.

---

# 27. Endpoints de Órdenes

Base path:

```txt
/orders
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/orders` | Listar órdenes según scope | `orders.view` | No |
| GET | `/orders/:id` | Ver orden | `orders.view` | No |
| PATCH | `/orders/:id/start` | Iniciar orden | `orders.start` | `order.started` |
| PATCH | `/orders/:id/status` | Cambiar estado | `orders.update_status` | `order.status_changed` |
| PATCH | `/orders/:id/close` | Cerrar orden | `orders.close` | `order.closed` |
| PATCH | `/orders/:id/cancel` | Cancelar orden | `orders.cancel` | `order.cancelled` |
| POST | `/orders/:id/tasks` | Crear tarea | `orders.assign` | `order.task.created` |
| PATCH | `/orders/:id/tasks/:taskId` | Actualizar tarea | `orders.assign` | `order.task.updated` |
| GET | `/orders/:id/timeline` | Timeline de orden | `orders.view` | No |
| GET | `/orders/:id/documents` | Documentos de orden | `documents.view` | No |
| GET | `/orders/:id/evidences` | Evidencias de orden | `documents.view` | No |

### DTO `UpdateOrderStatusDto`

```json
{
  "newStatus": "executing",
  "reason": "Provider started operational execution"
}
```

### DTO `CloseOrderDto`

```json
{
  "closingNotes": "Service completed successfully",
  "evidenceIds": [1, 2, 3]
}
```

### Reglas de negocio

1. Una orden nace desde cotización aprobada.
2. Estados deben seguir transiciones permitidas.
3. Cerrar orden puede requerir evidencias.
4. Cancelar orden requiere motivo.
5. Cambios de estado se auditan.

---

# 28. Endpoints de Documentos y Evidencias

## 28.1 Documentos

Base path:

```txt
/documents
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/documents` | Listar documentos según scope | `documents.view` | No |
| GET | `/documents/:id` | Ver metadata de documento | `documents.view` | No |
| GET | `/documents/:id/download` | Descargar documento | `documents.download` | `document.downloaded` |
| POST | `/documents` | Cargar documento | `documents.upload` | `document.uploaded` |
| PATCH | `/documents/:id/validate` | Validar documento | `documents.validate` | `document.validated` |
| PATCH | `/documents/:id/reject` | Rechazar documento | `documents.reject` | `document.rejected` |
| POST | `/documents/:id/version` | Subir nueva versión | `documents.version` | `document.versioned` |
| GET | `/documents/by-entity/:entityType/:entityId` | Documentos por entidad | `documents.view` | No |

### Content-Type para carga

```txt
multipart/form-data
```

### Campos `multipart/form-data`

| Campo | Tipo | Requerido |
|---|---|---|
| `file` | file | Sí |
| `documentTypeCode` | string | Sí |
| `entityType` | string | Sí |
| `entityId` | number | Sí |
| `notes` | string | No |

### DTO `RejectDocumentDto`

```json
{
  "rejectionReason": "Commercial invoice is incomplete"
}
```

## 28.2 Evidencias

Base path:

```txt
/evidences
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/evidences` | Listar evidencias | `documents.view` | No |
| POST | `/evidences` | Crear evidencia | `documents.upload` | `evidence.uploaded` |
| GET | `/evidences/:id` | Ver evidencia | `documents.view` | No |
| GET | `/evidences/by-entity/:entityType/:entityId` | Evidencias por entidad | `documents.view` | No |

---

# 29. Endpoints de Pagos

Base path:

```txt
/payments
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/payments` | Listar pagos según scope | `payments.view` | No |
| GET | `/payments/:id` | Ver pago | `payments.view` | No |
| POST | `/payments` | Registrar pago | `payments.create` | `payment.created` |
| POST | `/payments/:id/receipt` | Cargar comprobante | `documents.upload` | `payment.receipt_uploaded` |
| PATCH | `/payments/:id/confirm` | Confirmar pago | `payments.confirm` | `payment.confirmed` |
| PATCH | `/payments/:id/reconcile` | Conciliar pago | `payments.reconcile` | `payment.reconciled` |
| PATCH | `/payments/:id/refund` | Registrar reembolso | `payments.refund` | `payment.refunded` |

### DTO `CreatePaymentDto`

```json
{
  "orderId": 1001,
  "paymentMethodId": 1,
  "referenceNumber": "BANK-REF-0001",
  "currencyCode": "USD",
  "totalAmount": 450.00,
  "paymentDate": "2026-02-01T10:00:00.000Z"
}
```

### Reglas de negocio

1. Pago debe estar asociado a una orden.
2. Monto no puede ser negativo.
3. Confirmar pago requiere permiso.
4. Pago confirmado no debe modificarse sin trazabilidad.
5. Comprobante se maneja como documento.

---

# 30. Endpoints de Comisiones

Base path:

```txt
/commissions
```

## 30.1 Comisiones

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/commissions` | Listar comisiones | `commissions.view` | No |
| GET | `/commissions/:id` | Ver comisión | `commissions.view` | No |
| POST | `/commissions/calculate` | Calcular comisión | `commissions.calculate` | `commission.calculated` |
| PATCH | `/commissions/:id/confirm` | Confirmar comisión | `commissions.settle` | `commission.confirmed` |
| PATCH | `/commissions/:id/settle` | Liquidar comisión | `commissions.settle` | `commission.settled` |

## 30.2 Reglas de comisión

Base path:

```txt
/commission-rules
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/commission-rules` | Listar reglas | `commissions.view` | No |
| GET | `/commission-rules/:id` | Ver regla | `commissions.view` | No |
| POST | `/commission-rules` | Crear regla | `commissions.configure` | `commission.rule.created` |
| PATCH | `/commission-rules/:id` | Actualizar regla | `commissions.configure` | `commission.rule.updated` |
| PATCH | `/commission-rules/:id/disable` | Inactivar regla | `commissions.configure` | `commission.rule.disabled` |

### DTO `CalculateCommissionDto`

```json
{
  "orderId": 1001,
  "baseAmount": 450.00,
  "serviceCategoryCode": "CUSTOMS",
  "storeTypeCode": "CUSTOMS_AGENT"
}
```

### Respuesta cálculo comisión

```json
{
  "baseAmount": 450.00,
  "commissionPercentage": 10.00,
  "commissionAmount": 45.00,
  "providerNetAmount": 405.00,
  "currencyCode": "USD"
}
```

---

# 31. Endpoints de Reportes y Exportaciones

## 31.1 Reportes

Base path:

```txt
/reports
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/reports/summary` | Resumen general | `reports.view` | `report.viewed` |
| GET | `/reports/orders` | Reporte de órdenes | `reports.view` | `report.generated` |
| GET | `/reports/payments` | Reporte de pagos | `reports.view` | `report.generated` |
| GET | `/reports/commissions` | Reporte de comisiones | `reports.view` | `report.generated` |
| GET | `/reports/stores` | Reporte de tiendas | `reports.view` | `report.generated` |
| GET | `/reports/services` | Reporte de servicios | `reports.view` | `report.generated` |

## 31.2 Exportaciones

Base path:

```txt
/exports
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/exports/quotations/:id/pdf` | PDF cotización | `reports.export_pdf` | `export.generated` |
| GET | `/exports/orders/:id/pdf` | PDF orden | `reports.export_pdf` | `export.generated` |
| GET | `/exports/reports/:reportCode/excel` | Excel reporte | `reports.export_excel` | `report.exported` |
| GET | `/exports/audit/excel` | Exportar auditoría | `audit.export` | `audit.exported` |

### Query params reportes

```txt
?dateFrom=2026-01-01&dateTo=2026-01-31&storeId=20&status=closed&page=1&limit=50
```

---

# 32. Endpoints de Auditoría

Base path:

```txt
/audit-logs
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/audit-logs` | Listar logs | `audit.view` | `audit.logs.viewed` |
| GET | `/audit-logs/:id` | Ver log | `audit.view` | `audit.log.viewed` |
| GET | `/audit-logs/by-entity/:entityType/:entityId` | Logs por entidad | `audit.view` | `audit.logs.viewed` |
| GET | `/audit-logs/critical` | Eventos críticos | `audit.view` | `audit.logs.viewed` |

### Filtros permitidos

1. `userId`.
2. `profileCode`.
3. `moduleName`.
4. `action`.
5. `entityType`.
6. `entityId`.
7. `criticality`.
8. `result`.
9. `dateFrom`.
10. `dateTo`.

---

# 33. Endpoints TOS Básico

Base path:

```txt
/tos
```

## 33.1 Contenedores

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/tos/containers` | Listar contenedores | `tos.view` | No |
| GET | `/tos/containers/:id` | Ver contenedor | `tos.view` | No |
| POST | `/tos/containers` | Registrar contenedor | `tos.create_container` | `tos.container.created` |
| PATCH | `/tos/containers/:id/location` | Cambiar ubicación | `tos.move_container` | `tos.container.moved` |
| PATCH | `/tos/containers/:id/block` | Bloquear contenedor | `tos.block` | `tos.container.blocked` |
| PATCH | `/tos/containers/:id/release` | Liberar contenedor | `tos.release` | `tos.container.released` |

## 33.2 Movimientos y gates

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| POST | `/tos/moves` | Registrar movimiento | `tos.move_container` | `tos.container.moved` |
| GET | `/tos/yards` | Listar patios | `tos.view` | No |
| POST | `/tos/gates` | Registrar gate-in/gate-out | `tos.move_container` | `tos.gate.event.created` |

### DTO `CreateContainerDto`

```json
{
  "containerNumber": "MSCU1234567",
  "containerTypeCode": "40HC",
  "yardId": 1,
  "currentLocation": "YARD-A-01",
  "orderId": 1001
}
```

---

# 34. Endpoints de Transporte

Base path:

```txt
/trips
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/trips` | Listar viajes | `transport.view` | No |
| GET | `/trips/:id` | Ver viaje | `transport.view` | No |
| POST | `/trips` | Crear viaje | `transport.create_trip` | `trip.created` |
| PATCH | `/trips/:id/assign` | Asignar conductor/vehículo | `transport.assign` | `trip.assigned` |
| PATCH | `/trips/:id/start` | Iniciar viaje | `transport.update_status` | `trip.started` |
| PATCH | `/trips/:id/complete` | Completar viaje | `transport.close_delivery` | `trip.completed` |
| POST | `/trips/:id/events` | Registrar evento | `transport.update_status` | `trip.event.created` |
| POST | `/trips/:id/evidences` | Cargar evidencia | `documents.upload` | `delivery.evidence.uploaded` |

### Endpoints auxiliares

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/vehicles` | Listar vehículos | `transport.view` |
| POST | `/vehicles` | Crear vehículo | `transport.assign` |
| GET | `/drivers` | Listar conductores | `transport.view` |
| POST | `/drivers` | Crear conductor | `transport.assign` |
| GET | `/routes` | Listar rutas | `transport.view` |

---

# 35. Endpoints de Almacenamiento

Base path:

```txt
/storage
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/storage/warehouses` | Listar almacenes | `storage.view` | No |
| POST | `/storage/warehouses` | Crear almacén | `storage.manage` | `warehouse.created` |
| GET | `/storage/items` | Listar inventario | `storage.view` | No |
| POST | `/storage/receipts` | Registrar recepción | `storage.receive` | `storage.received` |
| PATCH | `/storage/items/:id/location` | Cambiar ubicación | `storage.move` | `storage.moved` |
| POST | `/storage/movements` | Registrar movimiento | `storage.move` | `storage.moved` |
| POST | `/storage/dispatches` | Registrar despacho | `storage.dispatch` | `storage.dispatched` |

---

# 36. Endpoints de Inspecciones

Base path:

```txt
/inspections
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/inspections` | Listar inspecciones | `inspections.view` | No |
| GET | `/inspections/:id` | Ver inspección | `inspections.view` | No |
| POST | `/inspections` | Crear inspección | `inspections.create` | `inspection.created` |
| PATCH | `/inspections/:id/schedule` | Programar inspección | `inspections.schedule` | `inspection.scheduled` |
| PATCH | `/inspections/:id/assign` | Asignar inspector | `inspections.schedule` | `inspection.assigned` |
| POST | `/inspections/:id/checklist` | Guardar checklist | `inspections.execute` | `inspection.checklist.updated` |
| POST | `/inspections/:id/results` | Registrar resultado | `inspections.execute` | `inspection.result.created` |
| POST | `/inspections/:id/evidences` | Cargar evidencia | `documents.upload` | `inspection.evidence.uploaded` |
| PATCH | `/inspections/:id/close` | Cerrar inspección | `inspections.close` | `inspection.closed` |

### DTO `CreateInspectionDto`

```json
{
  "orderId": 1001,
  "storeId": 20,
  "inspectionType": "physical",
  "scheduledAt": "2026-02-01T09:00:00.000Z",
  "notes": "Inspection required before dispatch"
}
```

---

# 37. Endpoints de Soporte Técnico

Base path:

```txt
/support/tickets
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/support/tickets` | Listar tickets | `support.view` | No |
| GET | `/support/tickets/:id` | Ver ticket | `support.view` | No |
| POST | `/support/tickets` | Crear ticket | `support.create_ticket` | `ticket.created` |
| PATCH | `/support/tickets/:id/assign` | Asignar ticket | `support.assign` | `ticket.assigned` |
| PATCH | `/support/tickets/:id/status` | Cambiar estado | `support.respond` | `ticket.status_changed` |
| POST | `/support/tickets/:id/messages` | Agregar mensaje | `support.respond` | `ticket.message.created` |
| PATCH | `/support/tickets/:id/close` | Cerrar ticket | `support.close` | `ticket.closed` |

### DTO `CreateTicketDto`

```json
{
  "categoryCode": "TECHNICAL_SUPPORT",
  "priority": "medium",
  "subject": "Cannot upload document",
  "description": "The system shows an error when uploading a PDF."
}
```

---

# 38. Endpoints de Configuración Global

Base path:

```txt
/settings
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/settings` | Listar configuraciones | `settings.view` | No |
| GET | `/settings/:key` | Ver configuración | `settings.view` | No |
| PATCH | `/settings/:key` | Actualizar configuración | `settings.update` | `settings.updated` |

### DTO `UpdateSettingDto`

```json
{
  "settingValue": "USD",
  "settingType": "string"
}
```

---

# 39. Endpoints de Notificaciones

Base path:

```txt
/notifications
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/notifications` | Listar notificaciones del usuario | Autenticado | No |
| GET | `/notifications/unread-count` | Contador no leídas | Autenticado | No |
| PATCH | `/notifications/:id/read` | Marcar como leída | Autenticado | `notification.read` |
| PATCH | `/notifications/read-all` | Marcar todas como leídas | Autenticado | `notifications.read_all` |

---

# 40. Endpoints de Dashboards

Base path:

```txt
/dashboard
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/dashboard/client` | Dashboard cliente | `dashboard.view_client` |
| GET | `/dashboard/store` | Dashboard tienda | `dashboard.view_store` |
| GET | `/dashboard/admin` | Dashboard superadministrador | `dashboard.view_admin` |
| GET | `/dashboard/operator` | Dashboard operador | `dashboard.view_operator` |
| GET | `/dashboard/inspector` | Dashboard inspector | `dashboard.view_inspector` |
| GET | `/dashboard/carrier` | Dashboard transportista | `dashboard.view_carrier` |
| GET | `/dashboard/customs-agent` | Dashboard agente aduanal | `dashboard.view_customs_agent` |
| GET | `/dashboard/auditor` | Dashboard auditor | `dashboard.view_auditor` |
| GET | `/dashboard/support` | Dashboard soporte | `dashboard.view_support` |

### Regla de scope

Cada dashboard debe devolver métricas según el alcance del perfil:

1. Cliente: registros propios.
2. Tienda: registros de su tienda.
3. Superadministrador: global.
4. Auditor: global de consulta.
5. Operador: registros operativos autorizados.
6. Inspector: inspecciones asignadas.
7. Transportista: viajes y órdenes propias.
8. Agente aduanal: operaciones aduanales propias.
9. Soporte: tickets autorizados.

---

# 41. DTOs comunes

## 41.1 DTO de paginación

```json
{
  "page": 1,
  "limit": 20,
  "sortBy": "created_at",
  "sortOrder": "desc"
}
```

## 41.2 DTO de rango de fechas

```json
{
  "dateFrom": "2026-01-01",
  "dateTo": "2026-01-31"
}
```

## 41.3 DTO de cambio de estado

```json
{
  "newStatus": "approved",
  "reason": "Record meets all requirements"
}
```

## 41.4 DTO de respuesta simple

```json
{
  "id": 1,
  "uuid": "uuid",
  "code": "CODE-001",
  "name": "Record name",
  "status": "active"
}
```

---

# 42. Validaciones generales DTO

1. Emails deben tener formato válido.
2. IDs deben ser numéricos positivos.
3. UUIDs deben tener formato válido.
4. Montos deben ser `>= 0`.
5. Porcentajes deben ser `>= 0`.
6. Fechas deben tener formato ISO o `YYYY-MM-DD`.
7. Estados deben pertenecer a catálogo válido.
8. Códigos deben ser únicos cuando aplique.
9. Strings críticos no deben exceder longitud definida.
10. Archivos deben validar tipo y tamaño.

---

# 43. Manejo de archivos API

### 43.1 Endpoint principal

```txt
POST /documents
```

### 43.2 Content-Type

```txt
multipart/form-data
```

### 43.3 Tipos permitidos MVP

1. `application/pdf`.
2. `image/jpeg`.
3. `image/png`.
4. `application/vnd.openxmlformats-officedocument.wordprocessingml.document` si aplica.
5. `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` si aplica.

### 43.4 Reglas

1. Validar tamaño máximo.
2. Validar MIME type.
3. Guardar metadata en MySQL.
4. Guardar archivo en storage controlado.
5. No exponer ruta absoluta.
6. Controlar descarga con permisos.
7. Versionar reemplazos.
8. Auditar carga, validación, rechazo y descarga crítica.

---

# 44. Swagger / OpenAPI

## 44.1 Reglas Swagger

1. Todo endpoint MVP debe aparecer en Swagger.
2. Todo DTO debe documentarse.
3. Endpoints privados deben indicar Bearer Auth.
4. Endpoints deben agruparse por tags.
5. Se deben documentar respuestas 200, 201, 400, 401, 403, 404, 422 y 500 cuando aplique.
6. Deben incluirse ejemplos de request y response.
7. Debe indicarse permiso requerido en descripción.

## 44.2 Tags Swagger sugeridos

1. `Auth`.
2. `Users`.
3. `Profiles`.
4. `Roles`.
5. `Permissions`.
6. `Navigation`.
7. `Catalogs`.
8. `Actors`.
9. `Stores`.
10. `Services`.
11. `Search`.
12. `Reviews`.
13. `Quotations`.
14. `Orders`.
15. `Documents`.
16. `Payments`.
17. `Commissions`.
18. `Reports`.
19. `Audit Logs`.
20. `TOS`.
21. `Transport`.
22. `Storage`.
23. `Inspections`.
24. `Support`.
25. `Settings`.
26. `Notifications`.
27. `Dashboards`.
28. `Exports`.

---

# 45. Auditoría por endpoint crítico

| Módulo | Acciones auditables |
|---|---|
| Auth | login, logout, failed login, password reset |
| Users | create, update, block, activate, assign role |
| Roles | create, update, assign permission, remove permission |
| Stores | create, update, approve, reject, suspend |
| Services | create, update, price change, approve, publish, pause |
| Quotations | create, respond, approve, reject, convert to order |
| Orders | start, update status, close, cancel |
| Documents | upload, validate, reject, version, download sensitive |
| Payments | create, confirm, reconcile, refund |
| Commissions | rule create, rule update, calculate, settle |
| Reports | generate, export |
| Audit | view logs, export logs |
| TOS | create container, move, block, release, gate event |
| Transport | create trip, assign, start, complete |
| Storage | receive, move, dispatch |
| Inspections | create, schedule, assign, result, close |
| Support | create ticket, assign, status change, close |
| Settings | update setting |
| Navigation | update menu, update preferences |

---

# 46. Reglas de transición de estados vía API

## 46.1 Tienda

```txt
pending_review → approved
pending_review → rejected
approved → suspended
suspended → approved
```

## 46.2 Servicio

```txt
draft → pending_approval
pending_approval → approved
pending_approval → rejected
approved → published
published → paused
paused → published
```

## 46.3 Cotización

```txt
requested → in_review
in_review → responded
responded → approved
responded → rejected
responded → expired
approved → converted
```

## 46.4 Orden

```txt
created → in_process
in_process → executing
executing → closed
created → cancelled
in_process → cancelled
```

### Regla obligatoria

Si un endpoint intenta una transición no permitida, debe devolver:

```json
{
  "success": false,
  "message": "Invalid status transition",
  "error": {
    "code": "INVALID_STATUS_TRANSITION"
  }
}
```

---

# 47. Servicios frontend consumidores

Los siguientes archivos frontend deben consumir esta API:

| Servicio frontend | Base path API |
|---|---|
| `authApi.ts` | `/auth` |
| `usersApi.ts` | `/users` |
| `rolesApi.ts` | `/roles` |
| `permissionsApi.ts` | `/permissions` |
| `navigationApi.ts` | `/navigation` |
| `catalogsApi.ts` | `/catalogs` |
| `actorsApi.ts` | `/actors` |
| `storesApi.ts` | `/stores` |
| `servicesApi.ts` | `/services` |
| `searchApi.ts` | `/search` |
| `reviewsApi.ts` | `/reviews` |
| `quotationsApi.ts` | `/quotations` |
| `ordersApi.ts` | `/orders` |
| `documentsApi.ts` | `/documents` |
| `paymentsApi.ts` | `/payments` |
| `commissionsApi.ts` | `/commissions` |
| `reportsApi.ts` | `/reports` |
| `auditApi.ts` | `/audit-logs` |
| `tosApi.ts` | `/tos` |
| `transportApi.ts` | `/trips` |
| `storageApi.ts` | `/storage` |
| `inspectionsApi.ts` | `/inspections` |
| `supportApi.ts` | `/support/tickets` |
| `settingsApi.ts` | `/settings` |
| `notificationsApi.ts` | `/notifications` |
| `dashboardApi.ts` | `/dashboard` |
| `exportsApi.ts` | `/exports` |

---

# 48. Seguridad API

## 48.1 Reglas de seguridad

1. Usar JWT en endpoints privados.
2. Usar permisos en endpoints críticos.
3. Validar scope de datos.
4. No devolver `password_hash`.
5. No devolver tokens en logs.
6. No exponer stack traces en producción.
7. No exponer rutas absolutas de archivos.
8. Validar archivos cargados.
9. Sanitizar entradas.
10. Aplicar CORS controlado.
11. Aplicar rate limit básico en login si aplica.
12. Registrar intentos no autorizados.

## 48.2 Endpoints públicos permitidos

1. `/auth/register`.
2. `/auth/login`.
3. `/auth/forgot-password`.
4. `/auth/reset-password`.
5. `/search/services`.
6. `/search/stores`.
7. `/search/categories`.
8. `/stores/:id/public`.
9. `/stores/:id/services` si tienda aprobada.
10. `/stores/:id/reviews`.
11. `/services/:id` si servicio publicado.

Todo lo demás debe requerir autenticación o permiso específico.

---

# 49. Pruebas API mínimas

## 49.1 Pruebas de autenticación

1. Login exitoso.
2. Login fallido.
3. Token inválido.
4. Token expirado.
5. `/auth/me` con token válido.

## 49.2 Pruebas RBAC

1. Usuario sin permiso recibe 403.
2. Cliente no ve datos de otro cliente.
3. Tienda no ve datos de otra tienda.
4. Auditor no puede modificar operaciones.
5. Superadministrador puede acceder globalmente.

## 49.3 Pruebas de negocio

1. Crear tienda.
2. Aprobar tienda.
3. Crear servicio.
4. Publicar servicio.
5. Buscar servicio publicado.
6. Crear cotización.
7. Responder cotización.
8. Aprobar cotización.
9. Convertir a orden.
10. Cambiar estado de orden.
11. Cargar documento.
12. Validar documento.
13. Registrar pago.
14. Calcular comisión.
15. Consultar auditoría.

## 49.4 Pruebas de errores

1. DTO inválido devuelve 400.
2. Recurso no encontrado devuelve 404.
3. Duplicado devuelve 409.
4. Transición inválida devuelve 422.
5. Falta de permiso devuelve 403.

---

# 50. Criterios de aceptación API

La API se considera aceptada cuando:

1. Todos los endpoints MVP están definidos.
2. Todos los endpoints privados requieren JWT.
3. Todos los endpoints críticos requieren permiso.
4. Los listados están paginados.
5. Los filtros principales funcionan.
6. Las respuestas exitosas tienen formato estándar.
7. Los errores tienen formato estándar.
8. Los DTOs validan entradas.
9. No se exponen contraseñas ni secretos.
10. Los scopes de datos se respetan.
11. Cliente solo ve datos propios.
12. Tienda solo ve datos de su tienda.
13. Auditor consulta sin modificar.
14. Superadministrador administra globalmente.
15. Eventos críticos generan auditoría.
16. Archivos se cargan con validación.
17. Documentos tienen metadata.
18. Estados se validan con transiciones permitidas.
19. Swagger documenta endpoints, DTOs y errores.
20. Las pruebas API mínimas pasan.
21. No existe dependencia técnica con Odoo.

---

# 51. Tareas técnicas para Antigravity

## 51.1 Backend Nest.js

1. Crear estructura API `/api/v1`.
2. Crear respuesta estándar.
3. Crear filtro global de errores.
4. Crear DTOs base.
5. Crear `JwtAuthGuard`.
6. Crear `PermissionsGuard`.
7. Crear `ScopeGuard`.
8. Crear decorador `@RequirePermissions()`.
9. Crear decorador `@CurrentUser()`.
10. Crear interceptor de auditoría.
11. Crear módulos API por dominio.
12. Crear Swagger agrupado por tags.
13. Crear validaciones de estados.
14. Crear servicio de archivos.
15. Crear pruebas API.

## 51.2 Frontend React.js

1. Crear servicios API por dominio.
2. Crear cliente HTTP central.
3. Inyectar JWT en requests.
4. Manejar errores 401, 403, 404, 422.
5. Crear hooks de consumo API.
6. Conectar componentes con endpoints.
7. Implementar paginación y filtros.
8. Manejar carga de archivos.

## 51.3 Base de datos

1. Validar que endpoints correspondan a tablas.
2. Validar relaciones.
3. Validar seeds de permisos.
4. Validar auditoría.
5. Validar scopes de datos.

## 51.4 QA

1. Crear colección de pruebas API.
2. Probar autenticación.
3. Probar RBAC.
4. Probar flujos críticos.
5. Probar errores.
6. Probar carga documental.
7. Probar reportes y exportaciones.
8. Probar Swagger.

---

# 52. Prompt sugerido para Antigravity

```text
Actúa como backend architect senior, experto en Nest.js, API REST, Swagger/OpenAPI, JWT, RBAC, MySQL y QA técnico.

Usa el documento `13_API_SPECIFICATION.md` como fuente principal para implementar la API REST del Marketplace Logístico TOS.

Objetivo:
Crear una API REST modular en Nest.js con endpoints versionados `/api/v1`, autenticación JWT, permisos RBAC, scopes de datos, DTOs validados, respuestas estándar, errores estándar, auditoría transversal, carga de archivos, reportes, exportaciones y documentación Swagger.

Reglas obligatorias:
1. Respetar la arquitectura técnica de `11_TECHNICAL_ARCHITECTURE.md`.
2. Respetar el esquema MySQL de `12_DATABASE_MASTER_SCHEMA.md`.
3. Respetar la matriz RBAC de `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
4. Respetar los módulos de `07_FUNCTIONAL_MODULES_CATALOG.md`.
5. Usar JWT para endpoints privados.
6. Usar permisos explícitos en endpoints críticos.
7. Aplicar scopes: own, store, assigned, module, global.
8. Paginar listados.
9. Validar entradas con DTOs.
10. Devolver respuestas y errores con formato estándar.
11. Auditar eventos críticos.
12. Documentar endpoints en Swagger.
13. No exponer password_hash, secretos ni rutas absolutas.
14. No integrar Odoo; usarlo solo como referencia conceptual.
15. Crear pruebas API mínimas.

Entregables esperados:
1. Módulos Nest.js por dominio.
2. Controllers.
3. Services.
4. DTOs.
5. Guards.
6. Decoradores.
7. Interceptor de auditoría.
8. Filtro global de errores.
9. Swagger completo.
10. Servicios de carga documental.
11. Endpoints de reportes y exportaciones.
12. Pruebas API.
13. Documentación técnica.

Antes de implementar, genera un plan de endpoints por fase y valida dependencias con base de datos y frontend.
```

---

# 53. Checklist de uso en Antigravity

- [ ] Guardar este documento como `13_API_SPECIFICATION.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `11_TECHNICAL_ARCHITECTURE.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Crear API versionada `/api/v1`.
- [ ] Crear autenticación JWT.
- [ ] Crear RBAC.
- [ ] Crear scopes.
- [ ] Crear DTOs.
- [ ] Crear formato estándar de respuesta.
- [ ] Crear formato estándar de error.
- [ ] Crear endpoints por módulo.
- [ ] Crear auditoría.
- [ ] Crear carga de archivos.
- [ ] Crear reportes.
- [ ] Crear exportaciones.
- [ ] Crear Swagger.
- [ ] Crear pruebas API.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 54. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

