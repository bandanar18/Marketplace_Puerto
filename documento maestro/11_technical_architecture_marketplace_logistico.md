# 11_TECHNICAL_ARCHITECTURE.md

# Documento Maestro de Arquitectura Técnica
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `11_TECHNICAL_ARCHITECTURE.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Frontend | React.js |
| Backend | Nest.js |
| Base de datos | MySQL |
| Modelo referencial | Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro técnico |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md` |

---

## 2. Propósito del documento

Este documento define la **arquitectura técnica maestra** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como guía central para que Antigravity pueda desarrollar el software de forma modular, segura, escalable, auditable y mantenible usando:

1. React.js para frontend.
2. Nest.js para backend.
3. MySQL para base de datos.
4. Arquitectura modular por dominios.
5. RBAC para control de acceso.
6. API REST documentada.
7. Auditoría transversal.
8. Catálogos maestros.
9. Separación clara entre frontend, backend y base de datos.
10. Uso de Odoo solo como referencia conceptual de modelos de datos.

---

## 3. Objetivo general

Definir la arquitectura técnica base para construir el Marketplace Logístico TOS, estableciendo capas, módulos, patrones, convenciones, estructura de carpetas, comunicación API, seguridad, base de datos, auditoría, testing, despliegue y criterios técnicos de aceptación.

---

## 4. Objetivos específicos

1. Definir arquitectura general del sistema.
2. Definir separación por capas.
3. Definir estructura de repositorio.
4. Definir arquitectura frontend React.js.
5. Definir arquitectura backend Nest.js.
6. Definir arquitectura MySQL.
7. Definir estrategia RBAC.
8. Definir estrategia de autenticación.
9. Definir estrategia de auditoría.
10. Definir estándares API REST.
11. Definir manejo de errores.
12. Definir configuración de ambientes.
13. Definir estrategia de migraciones y seeds.
14. Definir testing y QA técnico.
15. Definir despliegue MVP.
16. Servir como prompt técnico para Antigravity.

---

## 5. Visión técnica general

El marketplace logístico se construirá como una aplicación web modular con arquitectura cliente-servidor.

```txt
Usuario Web
   │
   ▼
Frontend React.js
   │  HTTPS / REST API / JWT
   ▼
Backend Nest.js
   │
   ▼
MySQL Database
```

### Componentes principales

1. **Frontend React.js:** interfaz pública, dashboards, menús, formularios, cards, tablas y flujos de usuario.
2. **Backend Nest.js:** lógica de negocio, validaciones, seguridad, permisos, API REST, auditoría y servicios de dominio.
3. **MySQL:** persistencia de usuarios, tiendas, servicios, cotizaciones, órdenes, documentos, pagos, comisiones, auditoría y catálogos.
4. **Storage de archivos:** almacenamiento local o externo para documentos y evidencias.
5. **Swagger/OpenAPI:** documentación de endpoints.
6. **Sistema RBAC:** roles, permisos, perfiles y alcance de datos.
7. **Auditoría:** logs de eventos críticos.

---

## 6. Principios técnicos obligatorios

Antigravity debe respetar los siguientes principios:

1. Separar frontend, backend y base de datos.
2. No colocar lógica crítica solo en frontend.
3. Validar datos en frontend y backend.
4. Proteger endpoints privados con autenticación.
5. Proteger acciones críticas con permisos RBAC.
6. Registrar auditoría en eventos críticos.
7. Usar catálogos maestros para valores controlados.
8. No integrar Odoo en el MVP.
9. Usar Odoo solo como referencia conceptual de datos.
10. Mantener arquitectura modular por dominio.
11. Evitar duplicación de lógica.
12. Usar DTOs para entrada y salida de datos.
13. Usar migraciones para cambios de base de datos.
14. Usar seeds para datos iniciales.
15. Documentar endpoints con Swagger.
16. Crear pruebas para flujos críticos.
17. Mantener convenciones de nombres consistentes.
18. No hardcodear secretos.
19. No depender de CDN externos para assets críticos.
20. Diseñar para crecimiento futuro.

---

## 7. Arquitectura por capas

| Capa | Tecnología | Responsabilidad |
|---|---|---|
| Presentación | React.js | UI, navegación, formularios, dashboards, validación visual |
| Seguridad visual | React.js | Rutas protegidas, guards visuales, menús por permiso |
| API Client | React.js | Servicios frontend para consumir API |
| Controladores | Nest.js | Recibir requests, validar permisos, invocar servicios |
| Servicios de negocio | Nest.js | Reglas de negocio, cálculos, procesos, auditoría |
| Repositorios / ORM | Nest.js | Acceso a datos |
| Persistencia | MySQL | Datos transaccionales y maestros |
| Auditoría | Nest.js + MySQL | Registro de eventos críticos |
| Documentos | Backend + Storage | Archivos, evidencias y metadata |
| Reportes | Backend + MySQL | Consultas y exportaciones |

---

## 8. Arquitectura lógica del sistema

```txt
Marketplace Logistics TOS
│
├── Public Marketplace
│   ├── Home
│   ├── Search
│   ├── Store Public Profile
│   └── Service Detail
│
├── Authentication & Identity
│   ├── Users
│   ├── Profiles
│   ├── Roles
│   └── Permissions
│
├── Marketplace Core
│   ├── Stores
│   ├── Services
│   ├── Reviews
│   └── Catalogs
│
├── Commercial Operations
│   ├── Quotations
│   └── Orders
│
├── Documents & Evidence
│   ├── Documents
│   ├── Versions
│   └── Validations
│
├── Finance
│   ├── Payments
│   ├── Receipts
│   └── Commissions
│
├── Logistics Operations
│   ├── TOS Basic
│   ├── Transport
│   ├── Storage
│   └── Inspections
│
├── Control
│   ├── Reports
│   └── Audit Logs
│
└── Support & Configuration
    ├── Support Tickets
    ├── Global Settings
    └── Notifications
```

---

## 9. Estructura general de repositorio

```txt
/logistics-marketplace-tos
  /frontend-react
  /backend-nest
  /database-mysql
  /docs
  /scripts
  /tests
  /infra
  README.md
```

### 9.1 Carpeta `/docs`

Debe contener los documentos maestros:

```txt
/docs
  00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md
  01_PRODUCT_VISION.md
  02_MVP_SCOPE.md
  03_ANTIGRAVITY_RULES.md
  04_ECOSYSTEM_ACTORS_MATRIX.md
  05_USER_PROFILES.md
  06_MODULE_PROFILE_ACCESS_MATRIX.md
  07_FUNCTIONAL_MODULES_CATALOG.md
  08_DESIGN_SYSTEM_MARKETPLACE.md
  09_FRONTEND_COMPONENT_MAP.md
  10_NAVIGATION_AND_MENUS.md
  11_TECHNICAL_ARCHITECTURE.md
  12_DATABASE_MASTER_SCHEMA.md
  13_API_SPECIFICATION.md
```

---

## 10. Arquitectura frontend React.js

### 10.1 Objetivo del frontend

El frontend debe proporcionar una experiencia visual tipo marketplace logístico, permitiendo:

1. Búsqueda pública de servicios.
2. Visualización de tiendas.
3. Solicitud de cotizaciones.
4. Gestión de órdenes.
5. Carga de documentos.
6. Gestión de pagos referenciales.
7. Dashboards por perfil.
8. Administración global.
9. Auditoría visual.
10. Navegación protegida por permisos.

### 10.2 Estructura frontend recomendada

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
    /routes
    /services
    /store
    /types
    /utils
    /tests
```

### 10.3 Reglas frontend

1. Usar componentes reutilizables.
2. Usar rutas protegidas.
3. Centralizar llamadas API en `/services`.
4. Centralizar tipos en `/types`.
5. Usar hooks reutilizables.
6. Mantener separación entre componentes UI y features.
7. Implementar estados `loading`, `empty`, `error`, `forbidden`.
8. Respetar sistema visual del documento `08_DESIGN_SYSTEM_MARKETPLACE.md`.
9. Respetar navegación del documento `10_NAVIGATION_AND_MENUS.md`.
10. No depender de CDN externos para assets críticos.

---

## 11. Arquitectura backend Nest.js

### 11.1 Objetivo del backend

El backend debe administrar la lógica de negocio, seguridad, validaciones, persistencia, auditoría y exposición de API REST.

### 11.2 Estructura backend recomendada

```txt
/backend-nest
  /src
    /main.ts
    /app.module.ts
    /config
    /common
      /decorators
      /filters
      /guards
      /interceptors
      /pipes
      /utils
    /database
      /migrations
      /seeds
      /entities
    /auth
    /users
    /profiles
    /roles
    /permissions
    /navigation
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
    /settings
    /notifications
```

### 11.3 Patrón interno por módulo Nest.js

Cada módulo debe tener una estructura similar:

```txt
/module-name
  module-name.module.ts
  module-name.controller.ts
  module-name.service.ts
  /dto
    create-module-name.dto.ts
    update-module-name.dto.ts
    query-module-name.dto.ts
  /entities
    module-name.entity.ts
  /tests
    module-name.service.spec.ts
    module-name.controller.spec.ts
```

### 11.4 Reglas backend

1. Cada dominio debe tener módulo propio.
2. Cada endpoint debe validar DTOs.
3. Cada endpoint privado debe requerir JWT.
4. Cada acción crítica debe requerir permiso.
5. Cada acción crítica debe generar auditoría.
6. No devolver datos sensibles.
7. No exponer stack traces en producción.
8. Usar respuestas API consistentes.
9. Usar Swagger para documentar endpoints.
10. Crear pruebas de services y guards.

---

## 12. Arquitectura de base de datos MySQL

### 12.1 Objetivo de la base de datos

Persistir información transaccional, documental, financiera, operativa, administrativa y de auditoría del marketplace.

### 12.2 Grupos de tablas

| Grupo | Tablas principales |
|---|---|
| Seguridad | `users`, `user_profiles`, `roles`, `permissions`, `role_permissions`, `user_roles`, `user_sessions` |
| Navegación | `navigation_menus`, `navigation_menu_items`, `user_navigation_preferences` |
| Catálogos | `master_catalogs`, `master_catalog_items` |
| Actores | `ecosystem_actors`, `actor_services`, `actor_documents`, `actor_permissions`, `actor_modules` |
| Marketplace | `stores`, `store_users`, `store_documents`, `services`, `service_categories`, `service_pricing`, `service_documents` |
| Búsqueda y reputación | `search_logs`, `reviews`, `ratings`, `review_replies` |
| Cotizaciones | `quotations`, `quotation_lines`, `quotation_documents`, `quotation_statuses` |
| Órdenes | `orders`, `order_lines`, `order_tasks`, `order_events` |
| Documentos | `documents`, `document_types`, `document_versions`, `document_validations`, `evidences` |
| Finanzas | `payments`, `payment_methods`, `payment_receipts`, `commission_rules`, `commissions`, `commission_logs` |
| TOS | `tos_yards`, `tos_containers`, `tos_moves`, `tos_gates` |
| Transporte | `trips`, `vehicles`, `drivers`, `routes`, `trip_events` |
| Almacenamiento | `warehouses`, `storage_locations`, `inventory_items`, `storage_movements`, `dispatches` |
| Inspecciones | `inspections`, `inspection_checklists`, `inspection_results`, `inspection_evidences` |
| Reportes | `reports`, `report_templates`, `report_exports` |
| Auditoría | `audit_logs`, `audit_events`, `audit_entities`, `audit_snapshots` |
| Soporte | `support_tickets`, `support_ticket_messages`, `support_categories`, `support_sla` |
| Configuración | `global_settings`, `system_parameters`, `notifications`, `notification_templates` |

### 12.3 Convenciones MySQL

1. Tablas en plural y snake_case.
2. Campos en snake_case.
3. Clave primaria `id` BIGINT.
4. Campo `uuid` cuando se exponga externamente.
5. Timestamps `created_at`, `updated_at`, `deleted_at`.
6. Campos `created_by`, `updated_by` cuando aplique.
7. Campo `status` para estado operativo.
8. Usar índices en campos de búsqueda frecuente.
9. Usar llaves foráneas cuando aplique.
10. Usar eliminación lógica en entidades críticas.

### 12.4 Campos estándar recomendados

```txt
id
uuid
status
created_at
updated_at
deleted_at
created_by
updated_by
```

---

## 13. Estrategia de autenticación

### 13.1 Método recomendado

Usar autenticación basada en JWT.

### 13.2 Flujo general

```txt
Usuario ingresa email y contraseña
   ↓
Backend valida credenciales
   ↓
Backend genera JWT
   ↓
Frontend guarda sesión de forma segura
   ↓
Frontend envía token en requests privados
   ↓
Backend valida token y permisos
```

### 13.3 Endpoints base

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /auth/logout`
4. `GET /auth/me`
5. `POST /auth/forgot-password`
6. `POST /auth/reset-password`

### 13.4 Reglas de seguridad

1. No guardar contraseñas en texto plano.
2. Usar hashing seguro.
3. No exponer token en logs.
4. Expirar tokens.
5. Validar usuario activo.
6. Bloquear usuarios suspendidos.
7. Registrar intentos fallidos relevantes.
8. Proteger rutas privadas con `JwtAuthGuard`.

---

## 14. Estrategia RBAC

### 14.1 Componentes RBAC

1. Usuarios.
2. Perfiles.
3. Roles.
4. Permisos.
5. Módulos.
6. Alcance de datos.
7. Menús.
8. Guards backend.
9. Guards visuales frontend.

### 14.2 Niveles de acceso

| Nivel | Nombre | Descripción |
|---:|---|---|
| 0 | Sin acceso | No ve ni opera |
| 1 | Consulta | Solo lectura |
| 2 | Operativo básico | Crear o editar registros propios |
| 3 | Operativo avanzado | Ejecutar, responder, aprobar, cerrar |
| 4 | Administración total | Configurar, auditar y administrar globalmente |

### 14.3 Alcances de datos

| Scope | Descripción |
|---|---|
| `own` | Registros propios |
| `store` | Registros de la tienda |
| `assigned` | Registros asignados |
| `module` | Registros del módulo autorizado |
| `global` | Todos los registros |

### 14.4 Reglas RBAC

1. El frontend oculta menús y acciones no autorizadas.
2. El backend valida permisos siempre.
3. Un usuario puede tener varios roles, pero debe tener perfil principal.
4. Los permisos críticos deben ser explícitos.
5. Cambios de roles y permisos se auditan.
6. Intentos no autorizados se registran.

---

## 15. Arquitectura API REST

### 15.1 Estándar de endpoints

Usar endpoints REST organizados por dominio.

Ejemplos:

```txt
GET /services
POST /services
GET /services/:id
PATCH /services/:id
PATCH /services/:id/approve
```

### 15.2 Grupos API principales

| Grupo | Base path |
|---|---|
| Auth | `/auth` |
| Users | `/users` |
| Roles | `/roles` |
| Permissions | `/permissions` |
| Navigation | `/navigation` |
| Catalogs | `/catalogs` |
| Actors | `/actors` |
| Stores | `/stores` |
| Services | `/services` |
| Search | `/search` |
| Quotations | `/quotations` |
| Orders | `/orders` |
| Documents | `/documents` |
| Payments | `/payments` |
| Commissions | `/commissions` |
| Reports | `/reports` |
| Audit | `/audit-logs` |
| TOS | `/tos` |
| Transport | `/trips` |
| Storage | `/storage` |
| Inspections | `/inspections` |
| Support | `/support` |
| Settings | `/settings` |

### 15.3 Respuesta API estándar

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {},
  "meta": {
    "requestId": "REQ-000001",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}
```

### 15.4 Respuesta de error estándar

```json
{
  "success": false,
  "message": "Validation error",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": []
  },
  "meta": {
    "requestId": "REQ-000001",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}
```

---

## 16. Manejo de errores

### 16.1 Backend

El backend debe manejar errores mediante filtros o excepciones controladas.

Errores comunes:

1. `400 Bad Request` — datos inválidos.
2. `401 Unauthorized` — usuario no autenticado.
3. `403 Forbidden` — sin permiso.
4. `404 Not Found` — recurso no encontrado.
5. `409 Conflict` — duplicidad o conflicto de estado.
6. `422 Unprocessable Entity` — regla de negocio inválida.
7. `500 Internal Server Error` — error interno.

### 16.2 Frontend

El frontend debe mostrar:

1. Mensajes claros.
2. Estados de error.
3. Estados forbidden.
4. Validaciones inline.
5. Toasts de error o éxito.
6. Botones de reintento cuando aplique.

---

## 17. Auditoría transversal

### 17.1 Objetivo

Registrar eventos críticos del sistema para trazabilidad operativa, financiera, documental y de seguridad.

### 17.2 Eventos críticos mínimos

1. Login.
2. Intento fallido de login.
3. Creación de usuario.
4. Cambio de rol.
5. Cambio de permiso.
6. Registro de tienda.
7. Aprobación de tienda.
8. Creación de servicio.
9. Cambio de tarifa.
10. Solicitud de cotización.
11. Respuesta de cotización.
12. Aprobación de cotización.
13. Conversión a orden.
14. Cambio de estado de orden.
15. Carga documental.
16. Validación documental.
17. Rechazo documental.
18. Registro de pago.
19. Confirmación de pago.
20. Cálculo de comisión.
21. Exportación de reporte.
22. Acceso no autorizado.

### 17.3 Estructura mínima de log

```json
{
  "user_id": 1,
  "profile_code": "PROF-SUP-003",
  "action": "store.approved",
  "module": "stores",
  "entity_type": "store",
  "entity_id": 10,
  "old_value": {},
  "new_value": {},
  "ip_address": "127.0.0.1",
  "result": "success",
  "created_at": "2026-01-01T00:00:00.000Z"
}
```

---

## 18. Documentos y almacenamiento de archivos

### 18.1 Tipos de archivos permitidos en MVP

1. PDF.
2. JPG.
3. PNG.
4. DOCX si aplica.
5. XLSX si aplica.

### 18.2 Reglas documentales

1. Todo archivo debe tener metadata en MySQL.
2. Todo archivo debe asociarse a una entidad.
3. Todo archivo debe tener tipo documental.
4. Todo archivo debe tener estado.
5. Todo reemplazo debe crear versión.
6. Toda validación o rechazo debe auditarse.
7. No eliminar documentos críticos físicamente sin control.

### 18.3 Estrategia de almacenamiento MVP

Para MVP se permite:

1. Storage local controlado.
2. Carpeta `/uploads` fuera del código fuente.
3. Metadata en MySQL.
4. Ruta relativa protegida.

En fases posteriores se puede mover a storage externo.

---

## 19. Catálogos maestros

### 19.1 Objetivo

Centralizar valores controlados para evitar datos libres desordenados.

### 19.2 Catálogos mínimos

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

### 19.3 Reglas

1. Cargar catálogos por seeds.
2. Permitir administración desde superadministrador.
3. No eliminar ítems usados históricamente.
4. Usar estado activo/inactivo.
5. Usar código único por ítem.

---

## 20. Estrategia de estados y transiciones

### 20.1 Estados de tienda

```txt
Registrada → En revisión → Aprobada
Registrada → En revisión → Rechazada
Aprobada → Suspendida
Suspendida → Aprobada
```

### 20.2 Estados de servicio

```txt
Borrador → Pendiente de aprobación → Publicado
Pendiente de aprobación → Rechazado
Publicado → Pausado
Pausado → Publicado
```

### 20.3 Estados de cotización

```txt
Solicitada → En revisión → Respondida → Aprobada → Convertida en orden
Solicitada → En revisión → Respondida → Rechazada
Respondida → Vencida
```

### 20.4 Estados de orden

```txt
Creada → En proceso → En ejecución → Cerrada
Creada → Cancelada
En proceso → Cancelada
```

### 20.5 Regla técnica

Las transiciones deben validarse en backend. No se debe permitir cualquier cambio libre de estado.

---

## 21. Arquitectura financiera referencial

### 21.1 Componentes financieros MVP

1. Registro de pago manual.
2. Carga de comprobante.
3. Confirmación de pago por usuario autorizado.
4. Cálculo de comisión marketplace.
5. Cálculo de neto proveedor.
6. Reporte financiero básico.

### 21.2 Fórmulas referenciales

```txt
commission_amount = subtotal * commission_percentage / 100
provider_net = subtotal - commission_amount
total_client = subtotal + tax_amount
```

### 21.3 Reglas

1. Los cálculos finales deben validarse en backend.
2. No hardcodear porcentajes en frontend.
3. No permitir montos negativos.
4. Cambios financieros deben auditarse.
5. Pagos confirmados no deben modificarse sin trazabilidad.

---

## 22. Uso referencial de Odoo

Odoo se usa solo como referencia conceptual para entender modelos de ERP.

| Concepto propio | Modelo Odoo referencial | Uso conceptual |
|---|---|---|
| Usuarios | `res.users` | Usuarios del sistema |
| Actores / clientes / proveedores | `res.partner` | Entidades relacionadas |
| Roles | `res.groups` | Grupos de acceso |
| Permisos | `ir.model.access`, `ir.rule` | Control de acceso |
| Servicios | `product.template` | Fichas de servicio |
| Categorías | `product.category` | Categorías de servicio |
| Cotizaciones | `sale.order` | Solicitud comercial |
| Líneas de cotización | `sale.order.line` | Detalle del servicio |
| Documentos | `ir.attachment` | Adjuntos y evidencias |
| Pagos | `account.payment` | Pagos referenciales |
| Auditoría | `mail.message` | Historial de eventos |
| Inventario / almacén | `stock.location`, `stock.quant` | Referencia logística |
| Transporte | `fleet.vehicle` | Flota y vehículos |
| Inspecciones | `quality.check` | Control de calidad |

### Restricciones

1. No instalar Odoo.
2. No crear integración con Odoo.
3. No consumir API de Odoo.
4. No replicar toda la base de datos de Odoo.
5. No depender técnicamente de Odoo.

---

## 23. Configuración de ambientes

### 23.1 Ambientes sugeridos

| Ambiente | Uso |
|---|---|
| Local | Desarrollo individual |
| Development | Integración técnica |
| Staging | Pruebas funcionales y demo |
| Production | Producción futura |

### 23.2 Variables de entorno sugeridas

Backend:

```txt
NODE_ENV=
APP_PORT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
JWT_SECRET=
JWT_EXPIRES_IN=
UPLOADS_PATH=
CORS_ORIGIN=
```

Frontend:

```txt
VITE_API_BASE_URL=
VITE_APP_NAME=
VITE_ENVIRONMENT=
```

### 23.3 Reglas

1. No subir `.env` real al repositorio.
2. Crear `.env.example`.
3. Usar variables diferentes por ambiente.
4. No hardcodear secretos.

---

## 24. Migraciones y seeds

### 24.1 Migraciones

Todo cambio estructural de base de datos debe tener migración.

Ejemplos:

1. Crear tabla.
2. Agregar columna.
3. Crear índice.
4. Crear llave foránea.
5. Cambiar tipo de dato.

### 24.2 Seeds iniciales

Seeds mínimos:

1. Perfiles.
2. Roles.
3. Permisos.
4. Módulos.
5. Niveles de acceso.
6. Catálogos maestros.
7. Actores del ecosistema.
8. Menús por perfil.
9. Usuario superadministrador inicial.
10. Reglas de comisión iniciales.

### 24.3 Reglas

1. Seeds deben ser repetibles o seguros.
2. No usar datos reales sensibles.
3. Datos demo deben marcarse como demo.
4. No ejecutar seeds destructivos sin confirmación técnica.

---

## 25. Testing y QA técnico

### 25.1 Pruebas backend

1. Unit tests para services.
2. Tests de guards.
3. Tests de permisos.
4. Tests de validación DTO.
5. Tests de cálculos financieros.
6. Tests de transición de estados.
7. Tests de auditoría.
8. Tests de endpoints críticos.

### 25.2 Pruebas frontend

1. Renderizado de componentes.
2. Rutas protegidas.
3. Menús por perfil.
4. Formularios.
5. Estados loading/empty/error.
6. Permisos visuales.
7. Responsive básico.

### 25.3 Pruebas end-to-end sugeridas

1. Registro de cliente.
2. Login.
3. Búsqueda de servicio.
4. Solicitud de cotización.
5. Respuesta de tienda.
6. Aprobación de cotización.
7. Conversión a orden.
8. Carga documental.
9. Registro de pago.
10. Cierre de orden.
11. Creación de review.
12. Consulta de auditoría.

---

## 26. Logging técnico

### 26.1 Logs de aplicación

Registrar:

1. Inicio de aplicación.
2. Errores internos.
3. Excepciones controladas.
4. Intentos no autorizados.
5. Fallas de conexión a base de datos.
6. Fallas en carga de archivos.

### 26.2 No registrar

1. Contraseñas.
2. Tokens.
3. Secretos.
4. Datos sensibles innecesarios.
5. Archivos completos en logs.

---

## 27. Performance y escalabilidad

### 27.1 Reglas frontend

1. Paginar listados.
2. Evitar renderizados innecesarios.
3. Usar lazy loading en rutas pesadas.
4. Optimizar imágenes.
5. Usar filtros eficientes.

### 27.2 Reglas backend

1. Paginar respuestas.
2. Usar índices en búsquedas.
3. Evitar consultas N+1.
4. Filtrar en base de datos cuando aplique.
5. No devolver datasets masivos sin paginar.

### 27.3 Reglas MySQL

1. Índices en campos usados en filtros.
2. Índices en claves foráneas.
3. Índices en estados frecuentes.
4. Índices en fechas de reportes.
5. Evitar columnas JSON para datos altamente consultados, salvo auditoría o metadata.

---

## 28. Seguridad técnica

### 28.1 Seguridad backend

1. JWT en endpoints privados.
2. RBAC en endpoints críticos.
3. Validación DTO.
4. Sanitización de entradas.
5. CORS configurado.
6. Rate limit básico si aplica.
7. Protección contra archivos maliciosos.
8. No exponer errores internos.
9. No exponer datos sensibles.

### 28.2 Seguridad frontend

1. No guardar secretos en frontend.
2. No mostrar datos no autorizados.
3. No confiar en permisos visuales como seguridad real.
4. Manejar expiración de sesión.
5. Redirigir a login cuando token expire.
6. Mostrar 403 cuando falte permiso.

### 28.3 Seguridad documental

1. Validar extensiones.
2. Validar tamaño.
3. Guardar metadata.
4. Controlar acceso por entidad.
5. No exponer rutas absolutas del servidor.

---

## 29. Documentación técnica

### 29.1 Documentos técnicos mínimos

1. `11_TECHNICAL_ARCHITECTURE.md`.
2. `12_DATABASE_MASTER_SCHEMA.md`.
3. `13_API_SPECIFICATION.md`.
4. `14_SECURITY_RBAC_MODEL.md`.
5. `15_MASTER_CATALOGS_MVP.md`.
6. `16_AUDIT_LOGGING_MODEL.md`.
7. `17_DEPLOYMENT_GUIDE.md`.
8. `18_QA_TESTING_PLAN.md`.

### 29.2 Documentación por módulo

Cada módulo debe documentar:

1. Objetivo.
2. Endpoints.
3. DTOs.
4. Entidades.
5. Permisos.
6. Eventos de auditoría.
7. Pruebas.
8. Dependencias.

---

## 30. Despliegue MVP

### 30.1 Objetivo

Preparar el marketplace para ejecutarse en un ambiente demo o staging.

### 30.2 Entregables de despliegue

1. Build frontend.
2. Build backend.
3. Base de datos migrada.
4. Seeds cargados.
5. Variables de entorno configuradas.
6. Usuario superadministrador inicial.
7. Documentación Swagger disponible.
8. README de ejecución.
9. Checklist de QA.

### 30.3 Docker opcional

Se puede usar Docker para facilitar la ejecución:

```txt
/docker-compose.yml
/frontend-react/Dockerfile
/backend-nest/Dockerfile
```

Servicios sugeridos:

1. Frontend.
2. Backend.
3. MySQL.
4. Adminer o herramienta similar opcional.

---

## 31. Arquitectura de integración futura

Aunque el MVP no debe integrar sistemas externos, la arquitectura debe permitir integraciones futuras.

### 31.1 Integraciones futuras posibles

1. Odoo ERP.
2. Pasarela de pago.
3. Sistemas aduaneros.
4. Navieras.
5. Terminales portuarias.
6. GPS de transporte.
7. OCR documental.
8. Servicios de email.
9. Servicios de SMS.
10. Storage externo.
11. APIs de mapas.
12. Sistemas EDI.

### 31.2 Regla técnica

Toda integración futura debe implementarse mediante módulos o adaptadores separados, sin acoplar el core del marketplace.

---

## 32. Decisiones técnicas iniciales

| Decisión | Valor recomendado |
|---|---|
| Arquitectura | Modular monolith para MVP |
| Frontend | React.js por features y componentes reutilizables |
| Backend | Nest.js modular por dominio |
| Base de datos | MySQL relacional |
| API | REST |
| Autenticación | JWT |
| Autorización | RBAC por roles, perfiles, permisos y scope |
| Documentación API | Swagger/OpenAPI |
| Auditoría | Tabla `audit_logs` transversal |
| Archivos MVP | Storage local controlado + metadata MySQL |
| Deploy inicial | Ambiente demo/staging |
| Integraciones externas | No incluidas en MVP |
| Odoo | Referencia conceptual, no integración |

---

## 33. Riesgos técnicos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Alcance excesivo del MVP | Alto | Respetar `02_MVP_SCOPE.md` |
| Permisos mal aplicados | Alto | Implementar RBAC backend y frontend |
| Duplicación de lógica | Medio | Centralizar services y hooks |
| Base de datos desordenada | Alto | Usar `12_DATABASE_MASTER_SCHEMA.md` |
| Falta de auditoría | Alto | Interceptor o servicio central de auditoría |
| Cálculos financieros incorrectos | Alto | Calcular y probar en backend |
| Carga documental insegura | Alto | Validar tipos, tamaños y permisos |
| Frontend dependiente de datos mock | Medio | Conectar gradualmente a API real |
| Falta de pruebas | Alto | Crear QA por módulo |
| Integraciones prematuras | Medio | Diferir integraciones fuera del MVP |

---

## 34. Criterios de aceptación técnica

La arquitectura técnica se considera aceptada cuando:

1. El repositorio está separado en frontend, backend, database y docs.
2. El frontend tiene estructura modular por componentes y features.
3. El backend tiene módulos Nest.js por dominio.
4. La base de datos tiene migraciones y seeds.
5. El sistema tiene autenticación JWT.
6. El sistema tiene RBAC funcional.
7. Las rutas privadas están protegidas.
8. Los endpoints críticos validan permisos.
9. Los eventos críticos generan auditoría.
10. Los catálogos maestros están seedados.
11. Las tablas principales tienen timestamps.
12. Los listados están paginados.
13. Los errores tienen formato consistente.
14. Swagger documenta endpoints MVP.
15. El frontend maneja loading, empty, error y forbidden.
16. Los cálculos financieros se validan en backend.
17. Los documentos tienen metadata.
18. Los tests cubren flujos críticos.
19. El sistema puede ejecutarse en ambiente local.
20. El sistema puede prepararse para demo/staging.

---

## 35. Tareas técnicas para Antigravity

### 35.1 Inicialización del proyecto

1. Crear estructura del repositorio.
2. Crear frontend React.js.
3. Crear backend Nest.js.
4. Crear configuración MySQL.
5. Crear carpeta `/docs`.
6. Crear `.env.example`.
7. Crear README inicial.

### 35.2 Backend

1. Crear módulos base.
2. Crear configuración de base de datos.
3. Crear autenticación JWT.
4. Crear RBAC.
5. Crear auditoría.
6. Crear catálogos.
7. Crear Swagger.
8. Crear pruebas base.

### 35.3 Frontend

1. Crear layouts.
2. Crear rutas públicas.
3. Crear rutas privadas.
4. Crear providers.
5. Crear servicios API.
6. Crear hooks.
7. Crear componentes UI base.
8. Crear dashboards.

### 35.4 Base de datos

1. Crear migraciones iniciales.
2. Crear seeds de perfiles.
3. Crear seeds de roles.
4. Crear seeds de permisos.
5. Crear seeds de módulos.
6. Crear seeds de catálogos.
7. Crear seeds de actores.
8. Crear usuario superadministrador demo.

### 35.5 QA y despliegue

1. Crear pruebas unitarias.
2. Crear pruebas de integración.
3. Crear checklist QA.
4. Crear scripts de build.
5. Crear guía de despliegue.
6. Validar ambiente local.
7. Validar ambiente demo.

---

## 36. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software senior, backend architect Nest.js, frontend architect React.js, database architect MySQL, experto en seguridad RBAC y QA técnico.

Usa el documento `11_TECHNICAL_ARCHITECTURE.md` como fuente principal para construir la arquitectura técnica del Marketplace Logístico TOS.

Objetivo:
Crear una arquitectura modular full stack usando React.js, Nest.js y MySQL, separando frontend, backend, base de datos, documentación, pruebas y despliegue.

Reglas obligatorias:
1. Respetar el alcance MVP definido en `02_MVP_SCOPE.md`.
2. Respetar las reglas de desarrollo de `03_ANTIGRAVITY_RULES.md`.
3. Respetar perfiles de `05_USER_PROFILES.md`.
4. Respetar matriz RBAC de `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
5. Respetar módulos de `07_FUNCTIONAL_MODULES_CATALOG.md`.
6. Respetar diseño frontend de `08_DESIGN_SYSTEM_MARKETPLACE.md`.
7. Respetar mapa de componentes de `09_FRONTEND_COMPONENT_MAP.md`.
8. Respetar navegación de `10_NAVIGATION_AND_MENUS.md`.
9. No integrar directamente con Odoo; usarlo solo como referencia conceptual.
10. Implementar autenticación JWT.
11. Implementar permisos RBAC en backend y frontend.
12. Crear auditoría para eventos críticos.
13. Crear migraciones y seeds.
14. Documentar endpoints con Swagger.
15. Crear pruebas para flujos críticos.
16. No hardcodear secretos.
17. No colocar lógica crítica solo en frontend.

Entregables esperados:
1. Estructura de repositorio.
2. Arquitectura frontend React.js.
3. Arquitectura backend Nest.js.
4. Arquitectura MySQL.
5. Configuración de ambientes.
6. Módulos base.
7. Autenticación JWT.
8. RBAC.
9. Auditoría transversal.
10. Migraciones y seeds.
11. Swagger.
12. Pruebas base.
13. README técnico.
14. Checklist de despliegue MVP.

Antes de implementar, genera un plan técnico dividido en frontend, backend, base de datos, seguridad, auditoría, QA y despliegue.
```

---

## 37. Checklist de uso en Antigravity

- [ ] Guardar este documento como `11_TECHNICAL_ARCHITECTURE.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `02_MVP_SCOPE.md`.
- [ ] Validar consistencia con `03_ANTIGRAVITY_RULES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Validar consistencia con `09_FRONTEND_COMPONENT_MAP.md`.
- [ ] Validar consistencia con `10_NAVIGATION_AND_MENUS.md`.
- [ ] Crear estructura del repositorio.
- [ ] Crear arquitectura frontend.
- [ ] Crear arquitectura backend.
- [ ] Crear configuración MySQL.
- [ ] Crear autenticación JWT.
- [ ] Crear RBAC.
- [ ] Crear auditoría.
- [ ] Crear migraciones.
- [ ] Crear seeds.
- [ ] Crear Swagger.
- [ ] Crear pruebas base.
- [ ] Crear README técnico.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 38. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

