# 06_MODULE_PROFILE_ACCESS_MATRIX.md

# Documento Maestro de Matriz de Módulos por Perfil
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `06_MODULE_PROFILE_ACCESS_MATRIX.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro de control de acceso por perfil y módulo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Definir qué módulos puede ver, consultar, operar, aprobar, administrar o auditar cada perfil del marketplace logístico |

---

## 2. Propósito del documento

Este documento define la **matriz maestra de acceso por módulo y perfil** para el Marketplace Logístico TOS.

La matriz sirve como fuente de verdad para que Antigravity pueda implementar:

1. Control de acceso RBAC.
2. Menús visibles por perfil.
3. Rutas protegidas en React.js.
4. Guards de autorización en Nest.js.
5. Permisos CRUD por módulo.
6. Permisos especiales por acción.
7. Reportes visibles por perfil.
8. Eventos auditables por perfil.
9. Seeds iniciales de roles y permisos.
10. Pruebas de seguridad y acceso.

Este documento debe usarse junto con `05_USER_PROFILES.md` y `07_FUNCTIONAL_MODULES_CATALOG.md`.

---

## 3. Objetivo general

Definir de forma clara, numérica y programable el nivel de acceso de cada perfil de usuario sobre cada módulo funcional del marketplace logístico, para que el sistema controle correctamente qué puede ver, crear, editar, aprobar, ejecutar, cerrar, auditar o administrar cada usuario.

---

## 4. Objetivos específicos

1. Definir la escala de acceso 0–4.
2. Definir la lista maestra de perfiles.
3. Definir la lista maestra de módulos funcionales.
4. Relacionar cada perfil con cada módulo.
5. Definir permisos CRUD por nivel de acceso.
6. Definir permisos especiales por módulo.
7. Definir rutas frontend protegidas.
8. Definir endpoints backend protegidos.
9. Definir componentes React visibles por perfil.
10. Definir tablas MySQL necesarias para RBAC.
11. Definir modelos Odoo referenciales.
12. Definir eventos de auditoría por módulo y perfil.
13. Crear estructura para seeds iniciales.
14. Crear criterios de aceptación para pruebas RBAC.
15. Servir como prompt base para Antigravity.

---

## 5. Escala maestra de acceso

| Nivel | Código | Nombre | Descripción | Uso funcional |
|---:|---|---|---|---|
| 0 | ACCESS-000 | Sin acceso | El perfil no ve ni opera el módulo | Ocultar menú, bloquear ruta y rechazar endpoint |
| 1 | ACCESS-001 | Consulta | Solo lectura o visualización | Ver listados, detalles y reportes permitidos |
| 2 | ACCESS-002 | Operativo básico | Crear o editar registros propios | Crear solicitudes, editar datos propios, cargar documentos |
| 3 | ACCESS-003 | Operativo avanzado | Ejecutar, responder, aprobar, cerrar o gestionar procesos | Responder cotizaciones, cambiar estados, cerrar órdenes |
| 4 | ACCESS-004 | Administración total | Configurar, aprobar, anular, auditar y administrar globalmente | Control global, configuración, auditoría completa |

---

## 6. Traducción del nivel de acceso a permisos CRUD

| Nivel | Crear | Leer | Editar | Eliminar | Aprobar | Ejecutar | Auditar | Configurar |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | No | No | No | No | No | No | No | No |
| 1 | No | Sí | No | No | No | No | Limitado | No |
| 2 | Sí, propio | Sí, propio | Sí, propio | No | No | Básico | Limitado | No |
| 3 | Sí | Sí | Sí | No o limitado | Sí, si aplica | Sí | Parcial | No |
| 4 | Sí | Sí | Sí | Sí o anular | Sí | Sí | Sí | Sí |

### Regla importante

El nivel de acceso numérico no reemplaza los permisos específicos. Sirve como base general. Para acciones críticas, el sistema debe validar permisos explícitos como:

- `quotation.approve`
- `quotation.reject`
- `order.close`
- `payment.confirm`
- `commission.configure`
- `store.approve`
- `service.approve`
- `audit.view`
- `report.export`

---

## 7. Perfiles incluidos

| Código | Perfil | Tipo |
|---|---|---|
| PROF-CLI-001 | Cliente final | Usuario demandante |
| PROF-TIE-002 | Tienda logística | Proveedor marketplace |
| PROF-SUP-003 | Superadministrador | Administrador global |
| PROF-OPE-004 | Operador interno | Operación interna |
| PROF-INS-005 | Inspector | Proveedor especializado |
| PROF-TRA-006 | Transportista | Proveedor especializado |
| PROF-ADU-007 | Agente aduanal | Proveedor especializado |
| PROF-AUD-008 | Auditor | Control y cumplimiento |
| PROF-SOP-009 | Soporte técnico | Soporte funcional/técnico |

---

## 8. Módulos funcionales incluidos

| Código | Módulo | Descripción |
|---|---|---|
| MOD-USR-001 | Usuarios | Gestión de usuarios, perfiles y sesiones |
| MOD-ROL-002 | Roles | Gestión de roles funcionales |
| MOD-STO-003 | Tiendas | Gestión de tiendas logísticas y proveedores |
| MOD-SER-004 | Servicios | Fichas de servicios logísticos |
| MOD-PRO-005 | Productos | Productos o complementos logísticos si aplica |
| MOD-QUO-006 | Cotizaciones | Solicitud, respuesta, aprobación y rechazo |
| MOD-ORD-007 | Órdenes | Ejecución de órdenes de servicio |
| MOD-DOC-008 | Documentos | Carga, validación y versionamiento documental |
| MOD-PAY-009 | Pagos | Registro, confirmación y conciliación referencial |
| MOD-COM-010 | Comisiones | Reglas y cálculo de comisión marketplace |
| MOD-REP-011 | Reportes | Reportes operativos, financieros y administrativos |
| MOD-AUD-012 | Auditoría | Logs, trazabilidad y eventos críticos |
| MOD-TOS-013 | TOS | Operación portuaria, contenedores, patio y gates |
| MOD-TRA-014 | Transporte | Viajes, vehículos, conductores y rutas |
| MOD-ALM-015 | Almacenamiento | Almacenes, ubicaciones, inventario y despacho |
| MOD-INS-016 | Inspecciones | Checklists, resultados y evidencias de inspección |
| MOD-REV-017 | Reviews | Ratings, reseñas y reputación |
| MOD-SOP-018 | Soporte | Tickets, incidencias y SLA de soporte |
| MOD-CAT-019 | Catálogos | Catálogos maestros del MVP |
| MOD-SEA-020 | Búsqueda | Buscador, filtros y resultados tipo marketplace |

---

## 9. Matriz maestra de acceso por módulo y perfil

| Módulo | Cliente final | Tienda logística | Superadmin | Operador interno | Inspector | Transportista | Agente aduanal | Auditor | Soporte técnico |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Usuarios | 2 | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 3 |
| Roles | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 1 | 1 |
| Tiendas | 1 | 2 | 4 | 1 | 0 | 1 | 1 | 1 | 2 |
| Servicios | 1 | 3 | 4 | 2 | 1 | 2 | 2 | 1 | 1 |
| Productos | 1 | 3 | 4 | 2 | 0 | 0 | 0 | 1 | 1 |
| Cotizaciones | 3 | 3 | 4 | 2 | 1 | 2 | 3 | 1 | 1 |
| Órdenes | 2 | 3 | 4 | 3 | 2 | 3 | 3 | 1 | 1 |
| Documentos | 2 | 3 | 4 | 3 | 3 | 2 | 3 | 1 | 2 |
| Pagos | 3 | 2 | 4 | 1 | 0 | 1 | 1 | 1 | 1 |
| Comisiones | 0 | 1 | 4 | 0 | 0 | 1 | 1 | 1 | 0 |
| Reportes | 1 | 2 | 4 | 2 | 1 | 1 | 2 | 3 | 1 |
| Auditoría | 0 | 1 | 4 | 1 | 1 | 1 | 1 | 4 | 2 |
| TOS | 1 | 2 | 4 | 3 | 1 | 1 | 1 | 1 | 2 |
| Transporte | 1 | 2 | 4 | 2 | 0 | 3 | 0 | 1 | 1 |
| Almacenamiento | 1 | 2 | 4 | 2 | 0 | 0 | 0 | 1 | 1 |
| Inspecciones | 1 | 2 | 4 | 2 | 3 | 0 | 2 | 1 | 1 |
| Reviews | 2 | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 2 |
| Soporte | 2 | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 3 |
| Catálogos | 1 | 1 | 4 | 1 | 0 | 0 | 0 | 1 | 1 |
| Búsqueda | 3 | 2 | 4 | 2 | 1 | 1 | 1 | 1 | 1 |

---

## 10. Resumen numérico por perfil

| Perfil | Módulos con acceso | Puntos de acceso | Nivel promedio aproximado | Interpretación |
|---|---:|---:|---:|---|
| Cliente final | 16 | 29 | 1.45 | Acceso centrado en búsqueda, cotización, órdenes, pagos y documentos propios |
| Tienda logística | 20 | 43 | 2.15 | Acceso operativo para publicar servicios, responder cotizaciones y ejecutar órdenes |
| Superadministrador | 20 | 80 | 4.00 | Administración total del ecosistema |
| Operador interno | 17 | 32 | 1.60 | Seguimiento operativo y control limitado |
| Inspector | 13 | 18 | 0.90 | Acceso especializado a inspecciones, documentos y evidencias |
| Transportista | 15 | 24 | 1.20 | Acceso especializado a transporte, órdenes y evidencias |
| Agente aduanal | 15 | 25 | 1.25 | Acceso especializado a cotizaciones, órdenes y documentos aduaneros |
| Auditor | 20 | 25 | 1.25 | Consulta amplia y auditoría avanzada |
| Soporte técnico | 19 | 27 | 1.35 | Soporte, consulta técnica y asistencia limitada |

---

## 11. Reglas de acceso por perfil

### 11.1 Cliente final

1. Puede buscar servicios.
2. Puede solicitar cotizaciones.
3. Puede aprobar o rechazar sus propias cotizaciones.
4. Puede ver y gestionar sus propias órdenes.
5. Puede cargar documentos propios.
6. Puede registrar pagos propios.
7. Puede calificar órdenes cerradas.
8. No puede publicar servicios.
9. No puede ver información privada de otros clientes.
10. No puede acceder a auditoría global.

### 11.2 Tienda logística

1. Puede administrar su perfil de tienda.
2. Puede publicar servicios propios.
3. Puede responder cotizaciones dirigidas a su tienda.
4. Puede gestionar órdenes asignadas.
5. Puede cargar documentos y evidencias.
6. Puede consultar pagos y comisiones propias.
7. Puede responder reviews si está habilitado.
8. No puede aprobar su propia tienda.
9. No puede ver información privada de otras tiendas.
10. No puede configurar comisiones globales.

### 11.3 Superadministrador

1. Tiene acceso total a todos los módulos.
2. Puede aprobar tiendas.
3. Puede aprobar servicios.
4. Puede configurar catálogos.
5. Puede configurar comisiones.
6. Puede consultar reportes globales.
7. Puede consultar auditoría completa.
8. Puede moderar reviews.
9. Puede intervenir operaciones críticas.
10. Toda acción crítica debe ser auditada.

### 11.4 Operador interno

1. Puede consultar y gestionar órdenes según permisos.
2. Puede revisar documentos.
3. Puede actualizar estados operativos autorizados.
4. Puede consultar TOS básico.
5. Puede consultar reportes operativos.
6. No puede configurar roles.
7. No puede configurar comisiones.
8. No puede aprobar tiendas.
9. No puede modificar pagos confirmados.

### 11.5 Inspector

1. Puede consultar inspecciones asignadas.
2. Puede ejecutar checklists.
3. Puede cargar evidencias.
4. Puede emitir resultados.
5. Puede consultar documentos relacionados.
6. No puede ver inspecciones ajenas sin autorización.
7. No puede modificar pagos ni comisiones.

### 11.6 Transportista

1. Puede responder cotizaciones de transporte.
2. Puede ver órdenes de transporte asignadas.
3. Puede crear y actualizar viajes.
4. Puede asignar conductor y vehículo si está permitido.
5. Puede cargar evidencia de entrega.
6. No puede ver viajes de otros transportistas.
7. No puede configurar comisiones ni pagos globales.

### 11.7 Agente aduanal

1. Puede publicar servicios aduanales.
2. Puede responder cotizaciones aduanales.
3. Puede revisar documentos.
4. Puede actualizar estados aduaneros operativos.
5. Puede cargar evidencias.
6. No representa autoridad aduanera real dentro del MVP.
7. No puede liberar formalmente mercancía como sistema oficial externo.

### 11.8 Auditor

1. Puede consultar todos los módulos en modo lectura según reglas.
2. Puede consultar auditoría completa.
3. Puede exportar reportes autorizados.
4. No puede crear, editar, aprobar, rechazar ni cerrar operaciones.
5. No puede modificar pagos ni comisiones.

### 11.9 Soporte técnico

1. Puede consultar información necesaria para asistencia.
2. Puede gestionar tickets de soporte.
3. Puede revisar logs técnicos limitados.
4. Puede ayudar con usuarios y accesos según permisos.
5. No puede modificar pagos, comisiones ni reglas críticas.
6. No puede aprobar tiendas ni servicios salvo permiso especial.

---

## 12. Permisos maestros sugeridos por módulo

### 12.1 Usuarios

| Permiso | Descripción |
|---|---|
| `users.view` | Ver usuarios |
| `users.create` | Crear usuarios |
| `users.update` | Editar usuarios |
| `users.block` | Bloquear usuarios |
| `users.activate` | Activar usuarios |
| `users.assign_role` | Asignar roles |

### 12.2 Roles y permisos

| Permiso | Descripción |
|---|---|
| `roles.view` | Ver roles |
| `roles.create` | Crear roles |
| `roles.update` | Editar roles |
| `roles.assign_permissions` | Asignar permisos |
| `permissions.view` | Ver permisos |
| `permissions.manage` | Administrar permisos |

### 12.3 Tiendas

| Permiso | Descripción |
|---|---|
| `stores.view` | Ver tiendas |
| `stores.create` | Crear tienda |
| `stores.update_own` | Editar tienda propia |
| `stores.approve` | Aprobar tienda |
| `stores.reject` | Rechazar tienda |
| `stores.suspend` | Suspender tienda |

### 12.4 Servicios

| Permiso | Descripción |
|---|---|
| `services.view` | Ver servicios |
| `services.create` | Crear servicio |
| `services.update_own` | Editar servicio propio |
| `services.approve` | Aprobar servicio |
| `services.publish` | Publicar servicio |
| `services.pause` | Pausar servicio |

### 12.5 Cotizaciones

| Permiso | Descripción |
|---|---|
| `quotations.view` | Ver cotizaciones |
| `quotations.create` | Crear solicitud de cotización |
| `quotations.respond` | Responder cotización |
| `quotations.approve` | Aprobar cotización |
| `quotations.reject` | Rechazar cotización |
| `quotations.convert_to_order` | Convertir cotización en orden |

### 12.6 Órdenes

| Permiso | Descripción |
|---|---|
| `orders.view` | Ver órdenes |
| `orders.start` | Iniciar orden |
| `orders.update_status` | Cambiar estado de orden |
| `orders.close` | Cerrar orden |
| `orders.cancel` | Cancelar orden |
| `orders.assign` | Asignar responsable |

### 12.7 Documentos

| Permiso | Descripción |
|---|---|
| `documents.view` | Ver documentos |
| `documents.upload` | Cargar documentos |
| `documents.validate` | Validar documentos |
| `documents.reject` | Rechazar documentos |
| `documents.version` | Versionar documentos |
| `documents.download` | Descargar documentos |

### 12.8 Pagos

| Permiso | Descripción |
|---|---|
| `payments.view` | Ver pagos |
| `payments.create` | Registrar pago |
| `payments.confirm` | Confirmar pago |
| `payments.reconcile` | Conciliar pago |
| `payments.refund` | Registrar reembolso |

### 12.9 Comisiones

| Permiso | Descripción |
|---|---|
| `commissions.view` | Ver comisiones |
| `commissions.calculate` | Calcular comisión |
| `commissions.configure` | Configurar reglas de comisión |
| `commissions.settle` | Liquidar comisiones |

### 12.10 Reportes y auditoría

| Permiso | Descripción |
|---|---|
| `reports.view` | Ver reportes |
| `reports.export_pdf` | Exportar PDF |
| `reports.export_excel` | Exportar Excel |
| `audit.view` | Ver auditoría |
| `audit.export` | Exportar auditoría |

---

## 13. Rutas frontend protegidas por perfil

| Ruta | Módulo | Perfiles permitidos |
|---|---|---|
| `/dashboard/client` | Cliente | Cliente final |
| `/dashboard/store` | Tienda | Tienda logística |
| `/admin` | Superadministrador | Superadministrador |
| `/operator` | Operador | Operador interno, Superadministrador |
| `/inspector` | Inspecciones | Inspector, Superadministrador |
| `/carrier` | Transporte | Transportista, Superadministrador |
| `/customs-agent` | Aduana | Agente aduanal, Superadministrador |
| `/auditor` | Auditoría | Auditor, Superadministrador |
| `/support` | Soporte | Soporte técnico, Superadministrador |
| `/search` | Búsqueda | Público / autenticado según acción |
| `/stores/:id` | Tienda pública | Público / autenticado según acción |
| `/services/:id` | Servicio público | Público / autenticado según acción |
| `/client/quotations` | Cotizaciones | Cliente final |
| `/store/quotations` | Cotizaciones | Tienda logística |
| `/admin/catalogs` | Catálogos | Superadministrador |
| `/admin/audit` | Auditoría | Superadministrador, Auditor |

---

## 14. Endpoints Nest.js protegidos por permiso

| Endpoint | Permiso requerido | Nivel mínimo sugerido |
|---|---|---:|
| `GET /users` | `users.view` | 1 |
| `PATCH /users/:id/block` | `users.block` | 4 |
| `GET /roles` | `roles.view` | 1 |
| `POST /roles` | `roles.create` | 4 |
| `POST /stores` | `stores.create` | 2 |
| `PATCH /stores/:id/approve` | `stores.approve` | 4 |
| `POST /services` | `services.create` | 2 |
| `PATCH /services/:id/approve` | `services.approve` | 4 |
| `POST /quotations` | `quotations.create` | 2 |
| `PATCH /quotations/:id/respond` | `quotations.respond` | 3 |
| `PATCH /quotations/:id/approve` | `quotations.approve` | 3 |
| `POST /quotations/:id/convert-to-order` | `quotations.convert_to_order` | 3 |
| `PATCH /orders/:id/status` | `orders.update_status` | 3 |
| `PATCH /orders/:id/close` | `orders.close` | 3 |
| `POST /documents` | `documents.upload` | 2 |
| `PATCH /documents/:id/validate` | `documents.validate` | 3 |
| `POST /payments` | `payments.create` | 2 |
| `PATCH /payments/:id/confirm` | `payments.confirm` | 3 |
| `POST /commissions/calculate` | `commissions.calculate` | 2 |
| `POST /commission-rules` | `commissions.configure` | 4 |
| `GET /audit-logs` | `audit.view` | 4 |
| `GET /reports/summary` | `reports.view` | 1 |
| `GET /reports/export` | `reports.export_excel` | 3 |

---

## 15. Componentes React relacionados con acceso

| Componente | Uso | Regla de acceso |
|---|---|---|
| `ProtectedRoute` | Protege rutas privadas | Requiere autenticación |
| `PermissionGuard` | Oculta o muestra componentes | Requiere permiso específico |
| `RolePermissionMatrix` | Visualiza matriz RBAC | Superadministrador, Auditor consulta |
| `DashboardRouterByProfile` | Redirige según perfil | Perfil principal del usuario |
| `DynamicSidebarMenu` | Menú dinámico | Se alimenta de `profile_menu_items` |
| `AdminDataTable` | Tablas administrativas | Permisos de lectura y edición |
| `ActionButtonGuard` | Botones críticos | Permiso específico por acción |
| `AuditTimeline` | Trazabilidad | Auditor, Superadministrador, consulta limitada |
| `ReportExportButton` | Exportación | Permiso `reports.export_*` |
| `CatalogManager` | Catálogos maestros | Superadministrador |

---

## 16. Tablas MySQL recomendadas para RBAC

### 16.1 Tabla `access_levels`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `level_code` | VARCHAR(50) | Código del nivel |
| `level_name` | VARCHAR(100) | Nombre del nivel |
| `numeric_value` | INT | Valor 0–4 |
| `description` | TEXT | Descripción |
| `status` | VARCHAR(30) | Estado |

### 16.2 Tabla `modules`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `module_code` | VARCHAR(50) | Código del módulo |
| `module_name` | VARCHAR(120) | Nombre del módulo |
| `description` | TEXT | Descripción |
| `frontend_base_route` | VARCHAR(200) | Ruta base frontend |
| `backend_base_path` | VARCHAR(200) | Ruta base API |
| `status` | VARCHAR(30) | Estado |

### 16.3 Tabla `profile_module_access`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `profile_id` | BIGINT | Perfil |
| `module_id` | BIGINT | Módulo |
| `access_level` | INT | Nivel 0–4 |
| `visible_in_menu` | BOOLEAN | Visible en menú |
| `can_create` | BOOLEAN | Puede crear |
| `can_read` | BOOLEAN | Puede leer |
| `can_update` | BOOLEAN | Puede editar |
| `can_delete` | BOOLEAN | Puede eliminar/anular |
| `can_approve` | BOOLEAN | Puede aprobar |
| `can_execute` | BOOLEAN | Puede ejecutar |
| `can_audit` | BOOLEAN | Puede auditar |
| `status` | VARCHAR(30) | Estado |

### 16.4 Tabla `permissions`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `permission_code` | VARCHAR(100) | Código del permiso |
| `permission_name` | VARCHAR(150) | Nombre del permiso |
| `module_id` | BIGINT | Módulo asociado |
| `action_type` | VARCHAR(50) | view, create, update, approve, execute, export, audit |
| `description` | TEXT | Descripción |
| `status` | VARCHAR(30) | Estado |

### 16.5 Tabla `role_permissions`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `role_id` | BIGINT | Rol |
| `permission_id` | BIGINT | Permiso |
| `granted` | BOOLEAN | Concedido o no |
| `scope` | VARCHAR(50) | own, store, global |
| `status` | VARCHAR(30) | Estado |

### 16.6 Tabla `user_roles`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `user_id` | BIGINT | Usuario |
| `role_id` | BIGINT | Rol |
| `profile_id` | BIGINT | Perfil asociado |
| `is_primary` | BOOLEAN | Rol principal |
| `status` | VARCHAR(30) | Estado |

### 16.7 Tabla `permission_audit_logs`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador |
| `actor_user_id` | BIGINT | Usuario que hizo el cambio |
| `target_user_id` | BIGINT | Usuario afectado si aplica |
| `role_id` | BIGINT | Rol afectado |
| `permission_id` | BIGINT | Permiso afectado |
| `old_value` | JSON | Valor anterior |
| `new_value` | JSON | Valor nuevo |
| `event_name` | VARCHAR(150) | Evento |
| `created_at` | DATETIME | Fecha |

---

## 17. Modelos Odoo referenciales

| Concepto RBAC propio | Modelo Odoo referencial | Uso conceptual |
|---|---|---|
| Usuarios | `res.users` | Usuarios del sistema |
| Contactos / actores | `res.partner` | Relación con clientes, tiendas y proveedores |
| Roles | `res.groups` | Grupos de seguridad |
| Permisos | `ir.model.access` | Derechos de acceso a modelos |
| Reglas de acceso | `ir.rule` | Reglas de dominio y visibilidad |
| Auditoría | `mail.message` | Trazabilidad y mensajes del sistema |
| Reportes | `ir.actions.report` | Acciones de reportes |

### Restricción

Estos modelos se usan solo como referencia conceptual. No se debe integrar Odoo ni depender de sus APIs en el MVP.

---

## 18. Seeds iniciales sugeridos

### 18.1 Seed de niveles de acceso

```json
[
  { "level_code": "ACCESS-000", "level_name": "Sin acceso", "numeric_value": 0 },
  { "level_code": "ACCESS-001", "level_name": "Consulta", "numeric_value": 1 },
  { "level_code": "ACCESS-002", "level_name": "Operativo básico", "numeric_value": 2 },
  { "level_code": "ACCESS-003", "level_name": "Operativo avanzado", "numeric_value": 3 },
  { "level_code": "ACCESS-004", "level_name": "Administración total", "numeric_value": 4 }
]
```

### 18.2 Seed de módulos

```json
[
  { "module_code": "MOD-USR-001", "module_name": "Usuarios", "frontend_base_route": "/admin/users", "backend_base_path": "/users" },
  { "module_code": "MOD-ROL-002", "module_name": "Roles", "frontend_base_route": "/admin/roles", "backend_base_path": "/roles" },
  { "module_code": "MOD-STO-003", "module_name": "Tiendas", "frontend_base_route": "/admin/stores", "backend_base_path": "/stores" },
  { "module_code": "MOD-SER-004", "module_name": "Servicios", "frontend_base_route": "/services", "backend_base_path": "/services" },
  { "module_code": "MOD-QUO-006", "module_name": "Cotizaciones", "frontend_base_route": "/quotations", "backend_base_path": "/quotations" },
  { "module_code": "MOD-ORD-007", "module_name": "Órdenes", "frontend_base_route": "/orders", "backend_base_path": "/orders" },
  { "module_code": "MOD-DOC-008", "module_name": "Documentos", "frontend_base_route": "/documents", "backend_base_path": "/documents" },
  { "module_code": "MOD-PAY-009", "module_name": "Pagos", "frontend_base_route": "/payments", "backend_base_path": "/payments" },
  { "module_code": "MOD-COM-010", "module_name": "Comisiones", "frontend_base_route": "/commissions", "backend_base_path": "/commissions" },
  { "module_code": "MOD-AUD-012", "module_name": "Auditoría", "frontend_base_route": "/audit", "backend_base_path": "/audit-logs" }
]
```

### 18.3 Ejemplo de seed de acceso perfil-módulo

```json
[
  { "profile_code": "PROF-CLI-001", "module_code": "MOD-QUO-006", "access_level": 3, "visible_in_menu": true },
  { "profile_code": "PROF-TIE-002", "module_code": "MOD-QUO-006", "access_level": 3, "visible_in_menu": true },
  { "profile_code": "PROF-SUP-003", "module_code": "MOD-QUO-006", "access_level": 4, "visible_in_menu": true },
  { "profile_code": "PROF-AUD-008", "module_code": "MOD-AUD-012", "access_level": 4, "visible_in_menu": true },
  { "profile_code": "PROF-SUP-003", "module_code": "MOD-AUD-012", "access_level": 4, "visible_in_menu": true }
]
```

---

## 19. Eventos auditables relacionados con RBAC

| Evento | Descripción | Criticidad |
|---|---|---|
| `role.created` | Creación de rol | Alta |
| `role.updated` | Actualización de rol | Alta |
| `permission.created` | Creación de permiso | Alta |
| `permission.updated` | Actualización de permiso | Alta |
| `role.permission.assigned` | Permiso asignado a rol | Crítica |
| `role.permission.removed` | Permiso removido de rol | Crítica |
| `user.role.assigned` | Rol asignado a usuario | Crítica |
| `user.role.removed` | Rol removido de usuario | Crítica |
| `profile.access.updated` | Cambio de acceso perfil-módulo | Crítica |
| `unauthorized.access.attempt` | Intento de acceso no autorizado | Alta |
| `admin.permission.export` | Exportación de permisos | Alta |
| `audit.logs.viewed` | Consulta de auditoría | Media |

---

## 20. Reglas de validación RBAC

1. Todo endpoint privado debe requerir autenticación.
2. Todo endpoint crítico debe validar permiso explícito.
3. El frontend no debe ser la única barrera de seguridad.
4. Los menús se ocultan según permisos, pero el backend siempre valida.
5. Un usuario puede tener varios roles, pero debe tener un perfil principal.
6. Si un usuario tiene varios roles, se debe resolver el mayor permiso aplicable o una regla definida.
7. Los permisos administrativos deben quedar auditados.
8. Los cambios de roles deben requerir superadministrador.
9. El auditor puede consultar, pero no modificar.
10. Soporte técnico no puede elevar permisos propios.
11. Las rutas protegidas deben redirigir si el usuario no tiene acceso.
12. Los botones críticos deben ocultarse o deshabilitarse si no hay permiso.
13. Los datos deben filtrarse por alcance: propio, tienda, global.
14. Un permiso `global` debe ser reservado para superadministrador o auditor autorizado.

---

## 21. Alcances de datos por permiso

| Scope | Descripción | Ejemplo |
|---|---|---|
| `own` | Solo registros propios del usuario | Cliente ve sus cotizaciones |
| `store` | Registros asociados a la tienda del usuario | Tienda ve sus servicios y órdenes |
| `assigned` | Registros asignados al usuario | Inspector ve inspecciones asignadas |
| `module` | Registros de un módulo en modo operativo | Operador interno ve órdenes operativas |
| `global` | Todos los registros del sistema | Superadministrador o auditor autorizado |

---

## 22. Criterios de aceptación RBAC

El sistema RBAC se considera aceptado cuando:

1. Un usuario sin login no puede entrar a rutas privadas.
2. Un usuario autenticado sin permiso no puede acceder a endpoints restringidos.
3. El cliente solo ve sus propios registros.
4. La tienda solo ve sus propios servicios, cotizaciones y órdenes.
5. El superadministrador ve todos los módulos.
6. El auditor ve auditoría y reportes, pero no modifica operaciones.
7. Soporte técnico no puede modificar pagos ni comisiones.
8. El menú cambia según perfil.
9. Los botones críticos se ocultan o bloquean según permiso.
10. Los cambios de rol generan auditoría.
11. Los cambios de permisos generan auditoría.
12. Los intentos no autorizados generan log.
13. Existen seeds iniciales de niveles, módulos, roles y permisos.
14. Existen pruebas unitarias para guards.
15. Existen pruebas de integración para endpoints críticos.

---

## 23. Tareas técnicas para Antigravity

### 23.1 Backend Nest.js

1. Crear `AccessLevelsModule` o seed de niveles.
2. Crear entidad `Module`.
3. Crear entidad `Permission`.
4. Crear entidad `RolePermission`.
5. Crear entidad `UserRole`.
6. Crear entidad `ProfileModuleAccess`.
7. Crear `JwtAuthGuard`.
8. Crear `PermissionsGuard`.
9. Crear decorador `@RequirePermissions()`.
10. Crear decorador `@AccessScope()`.
11. Crear servicio para resolver permisos del usuario.
12. Crear endpoint para obtener menú del usuario.
13. Crear endpoint para obtener matriz RBAC.
14. Crear auditoría de cambios de permisos.
15. Crear pruebas de guards.

### 23.2 Frontend React.js

1. Crear `ProtectedRoute`.
2. Crear `PermissionGuard`.
3. Crear `DynamicSidebarMenu`.
4. Crear `DashboardRouterByProfile`.
5. Crear `RolePermissionMatrix`.
6. Crear `ActionButtonGuard`.
7. Crear hooks `useAuth()` y `usePermissions()`.
8. Crear manejo de acceso denegado.
9. Crear página `403 Forbidden`.
10. Crear pruebas de renderizado por perfil.

### 23.3 Base de datos MySQL

1. Crear tabla `access_levels`.
2. Crear tabla `modules`.
3. Crear tabla `profile_module_access`.
4. Crear tabla `permissions`.
5. Crear tabla `roles`.
6. Crear tabla `role_permissions`.
7. Crear tabla `user_roles`.
8. Crear tabla `permission_audit_logs`.
9. Crear migraciones.
10. Crear seeds iniciales.

### 23.4 QA

1. Probar login sin permisos.
2. Probar acceso de cliente.
3. Probar acceso de tienda.
4. Probar acceso de superadministrador.
5. Probar acceso de auditor.
6. Probar endpoints críticos.
7. Probar ocultamiento de menús.
8. Probar botones críticos.
9. Probar auditoría de cambios.
10. Probar intento no autorizado.

---

## 24. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, experto en RBAC, desarrollador full stack senior y QA técnico.

Usa el documento `06_MODULE_PROFILE_ACCESS_MATRIX.md` como fuente principal para implementar el sistema de control de acceso del Marketplace Logístico TOS.

Objetivo:
Convertir la matriz de módulos por perfil en una implementación funcional de permisos, roles, rutas protegidas, menús dinámicos, guards backend, componentes frontend y seeds iniciales usando React.js, Nest.js y MySQL.

Reglas obligatorias:
1. Respetar los perfiles definidos en `05_USER_PROFILES.md`.
2. Respetar los actores definidos en `04_ECOSYSTEM_ACTORS_MATRIX.md`.
3. Respetar el alcance MVP definido en `02_MVP_SCOPE.md`.
4. No integrar directamente con Odoo; usar modelos Odoo solo como referencia conceptual.
5. Proteger endpoints con JWT y permisos explícitos.
6. No confiar solo en el frontend para seguridad.
7. Crear auditoría para cambios de roles, permisos y accesos.
8. Crear seeds iniciales de niveles, módulos, permisos y matriz perfil-módulo.
9. Crear pruebas unitarias de guards.
10. Crear pruebas de integración para endpoints críticos.

Entregables esperados:
1. Migraciones MySQL para RBAC.
2. Seeds iniciales.
3. Guards Nest.js.
4. Decoradores de permisos.
5. Servicio para resolver permisos del usuario.
6. Endpoint de menú dinámico.
7. Componentes React de rutas protegidas.
8. Componente de matriz RBAC.
9. Página de acceso denegado.
10. Pruebas de permisos.
11. Documentación técnica actualizada.

Antes de implementar, genera un plan de trabajo dividido en backend, frontend, base de datos y QA.
```

---

## 25. Checklist de uso en Antigravity

- [ ] Guardar este documento como `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `04_ECOSYSTEM_ACTORS_MATRIX.md`.
- [ ] Validar módulos con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Crear seeds de niveles de acceso.
- [ ] Crear seeds de módulos.
- [ ] Crear seeds de permisos.
- [ ] Crear seeds de matriz perfil-módulo.
- [ ] Implementar guards backend.
- [ ] Implementar rutas protegidas frontend.
- [ ] Implementar menú dinámico.
- [ ] Implementar auditoría de cambios RBAC.
- [ ] Crear pruebas de permisos.
- [ ] Confirmar que el frontend no sea la única barrera de seguridad.
- [ ] Confirmar que Odoo se usa solo como referencia conceptual.

---

## 26. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

