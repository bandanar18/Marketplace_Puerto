# 26_SECURITY_MASTER_PLAN.md

# Documento Maestro del Plan de Seguridad
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `26_SECURITY_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro de seguridad, arquitectura, control de acceso, auditoría y protección operativa |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Seguridad transversal del marketplace |
| Módulos relacionados | Usuarios, roles, permisos, tiendas, servicios, cotizaciones, órdenes, TOS, transporte, almacenamiento, inspecciones, pagos, comisiones, documentos, auditoría, notificaciones, soporte, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de seguridad** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de una arquitectura segura, auditable y escalable para proteger usuarios, tiendas, servicios, órdenes, documentos, pagos, comisiones, operaciones logísticas, datos sensibles y acciones críticas del sistema.

La seguridad debe aplicarse de forma transversal a toda la plataforma, incluyendo:

1. Autenticación.
2. Autorización.
3. RBAC.
4. Scopes de datos.
5. Protección de APIs.
6. Protección del frontend.
7. Seguridad de documentos y evidencias.
8. Auditoría crítica.
9. Protección de pagos y comisiones.
10. Protección de operaciones TOS, transporte, almacenamiento e inspecciones.
11. Validación de entrada.
12. Control de sesiones.
13. Gestión de contraseñas.
14. Hardening backend.
15. Hardening MySQL.
16. Seguridad de archivos.
17. Manejo de incidentes.
18. Backups.
19. Monitoreo.
20. Pruebas de seguridad.

---

## 3. Objetivo general

Diseñar e implementar un plan de seguridad integral que proteja la plataforma marketplace logística desde el inicio del desarrollo, aplicando controles de autenticación, autorización, privacidad, validación, auditoría, trazabilidad, protección de archivos, seguridad API, seguridad frontend, seguridad de base de datos y respuesta ante incidentes.

---

## 4. Objetivos específicos

1. Definir principios de seguridad del proyecto.
2. Definir el modelo de autenticación.
3. Definir el modelo de autorización RBAC.
4. Definir scopes de datos por perfil.
5. Definir permisos críticos por módulo.
6. Definir reglas de protección de endpoints Nest.js.
7. Definir reglas de protección de rutas React.js.
8. Definir reglas de protección de documentos y evidencias.
9. Definir reglas de seguridad para pagos y comisiones.
10. Definir reglas de auditoría crítica.
11. Definir validaciones contra ataques comunes.
12. Definir controles OWASP aplicables.
13. Definir medidas de protección de MySQL.
14. Definir políticas de contraseñas.
15. Definir políticas de sesiones y tokens.
16. Definir estrategia de logs y monitoreo.
17. Definir estrategia de backup y recuperación.
18. Definir plan de respuesta a incidentes.
19. Definir pruebas de seguridad.
20. Servir como prompt para Antigravity.

---

## 5. Alcance del plan de seguridad MVP

El MVP debe cubrir como mínimo:

```txt
Usuario se registra / inicia sesión
  ↓
Backend valida identidad
  ↓
Sistema emite token seguro
  ↓
Frontend guarda sesión de forma controlada
  ↓
Usuario accede a módulos según perfil
  ↓
Backend valida permiso + scope en cada endpoint
  ↓
Acciones críticas generan auditoría
  ↓
Archivos y documentos se protegen por permisos
  ↓
Pagos, comisiones y datos sensibles requieren permisos reforzados
  ↓
Logs y reportes permiten trazabilidad
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. SSO empresarial avanzado.
2. SAML.
3. OpenID Connect empresarial.
4. Autenticación biométrica.
5. Hardware Security Module.
6. Firma digital avanzada.
7. Cifrado de extremo a extremo de archivos.
8. SOC 24/7.
9. SIEM empresarial completo.
10. DLP avanzado.
11. CASB.
12. Zero Trust completo.
13. Pentesting externo formal automatizado.
14. Cumplimiento certificado ISO 27001.
15. Certificación SOC 2.
16. PCI DSS completo, salvo futura integración real con pagos de tarjeta.
17. Integración directa con Odoo Security.
18. Integración con IAM externo.
19. Integración con servicios gubernamentales de identidad.

---

## 7. Principios de seguridad del proyecto

Antigravity debe respetar los siguientes principios:

1. Seguridad por diseño.
2. Denegar por defecto.
3. Mínimo privilegio.
4. Separación de responsabilidades.
5. Validación backend obligatoria.
6. El frontend no es fuente de verdad de seguridad.
7. Todo endpoint sensible debe validar autenticación.
8. Todo endpoint crítico debe validar permiso.
9. Todo endpoint con datos de negocio debe validar scope.
10. Toda acción crítica debe auditarse.
11. Todo archivo privado debe requerir autorización.
12. Contraseñas nunca se guardan en texto plano.
13. Tokens deben expirar.
14. Datos sensibles deben minimizarse.
15. Errores no deben filtrar información interna.
16. Logs no deben exponer secretos.
17. Cambios financieros requieren auditoría reforzada.
18. Seguridad de datos debe ser transversal a todos los módulos.
19. No debe existir dependencia técnica con Odoo.
20. El modelo debe permitir integraciones futuras sin debilitar el core.

---

## 8. Activos críticos a proteger

| Activo | Descripción | Nivel de criticidad |
|---|---|---|
| Usuarios | Cuentas, perfiles, credenciales y permisos | Crítico |
| Tiendas | Proveedores logísticos, datos comerciales y aprobación | Crítico |
| Servicios | Fichas de servicios, tarifas y reglas | Alto |
| Cotizaciones | Precios, condiciones y documentos iniciales | Alto |
| Órdenes | Operaciones logísticas, estados, pagos y documentos | Crítico |
| TOS | Contenedores, gates, movimientos y bloqueos | Crítico operativo |
| Transporte | Viajes, conductores, vehículos y evidencias | Alto |
| Almacenamiento | Inventario, ubicaciones, despachos y evidencias | Alto |
| Inspecciones | Resultados, checklist, hallazgos y evidencias | Alto |
| Pagos | Comprobantes, estados financieros y confirmaciones | Crítico financiero |
| Comisiones | Reglas, montos, ajustes y neto proveedor | Crítico financiero |
| Documentos | Archivos privados, soportes y evidencias | Crítico |
| Auditoría | Logs críticos e historial de eventos | Crítico |
| Reportes | Información agregada operativa y financiera | Alto |
| Configuración | Catálogos, reglas globales y parámetros | Crítico |

---

## 9. Perfiles principales de seguridad

| Perfil | Código | Nivel de riesgo | Alcance esperado |
|---|---|---|---|
| Cliente final | `PROF-CLI-001` | Medio | Solo datos propios |
| Tienda logística | `PROF-TIE-002` | Alto | Datos de su tienda y operaciones |
| Superadministrador | `PROF-SUP-003` | Crítico | Acceso global y configuración |
| Operador interno | `PROF-OPE-004` | Alto | Operaciones autorizadas |
| Inspector | `PROF-INS-005` | Medio/alto | Inspecciones asignadas |
| Transportista | `PROF-TRA-006` | Alto | Viajes y órdenes propias/asignadas |
| Agente aduanal | `PROF-ADU-007` | Alto | Servicios aduanales propios |
| Auditor | `PROF-AUD-008` | Alto | Consulta global sin modificación |
| Soporte técnico | `PROF-SOP-009` | Medio/alto | Incidencias y soporte limitado |

---

## 10. Modelo de autenticación

### 10.1 Modelo MVP recomendado

El MVP debe usar autenticación basada en:

1. Email.
2. Contraseña segura.
3. JWT access token.
4. Refresh token.
5. Expiración controlada.
6. Revocación de sesión.
7. Hash seguro de contraseñas.

### 10.2 Flujo de login

```txt
Usuario envía email + password
  ↓
Backend valida existencia del usuario
  ↓
Backend compara password con hash seguro
  ↓
Backend valida estado del usuario
  ↓
Backend carga roles, perfil y permisos
  ↓
Backend emite access token + refresh token
  ↓
Frontend inicializa sesión
  ↓
Usuario accede según permisos
```

### 10.3 Reglas

1. No revelar si un email existe o no en mensajes de error públicos.
2. No devolver hash de contraseña en ninguna respuesta.
3. No incluir datos sensibles innecesarios en el JWT.
4. El token debe incluir identificador de usuario, perfil, roles y claims mínimos.
5. Los permisos detallados deben validarse en backend desde base de datos o cache controlado.
6. El refresh token debe poder revocarse.
7. Usuarios inactivos o suspendidos no pueden iniciar sesión.
8. Usuarios de tiendas suspendidas no pueden operar módulos de tienda.

---

## 11. Política de contraseñas

### 11.1 Reglas mínimas MVP

| Regla | Valor recomendado |
|---|---|
| Longitud mínima | 10 caracteres |
| Mayúsculas | Recomendado |
| Minúsculas | Recomendado |
| Números | Recomendado |
| Símbolos | Recomendado |
| Password común | Rechazar si está en lista local futura |
| Hash | Argon2 o bcrypt |
| Salt | Obligatorio |
| Reutilización | Evitar en fase futura |
| Cambio periódico | No forzar salvo incidente |

### 11.2 Reglas de seguridad

1. Nunca guardar contraseñas en texto plano.
2. Nunca enviar contraseña por email.
3. Nunca registrar contraseña en logs.
4. Reset de contraseña debe usar token temporal.
5. Token de reset debe expirar.
6. Después de reset, invalidar sesiones anteriores si aplica.

---

## 12. Tokens y sesiones

| Elemento | Regla recomendada |
|---|---|
| Access token | Corto plazo |
| Refresh token | Mayor duración, revocable |
| Token reset password | Corto plazo, un solo uso |
| Token verificación email | Corto/medio plazo |
| Revocación | Tabla o store de sesiones |
| Rotación refresh token | Recomendada |
| Logout | Revocar refresh token |
| Logout global | Revocar todas las sesiones del usuario |

### 12.1 Reglas

1. Tokens deben firmarse con secret seguro.
2. Secrets no deben estar en código fuente.
3. Tokens expirados deben rechazarse.
4. Cambios de contraseña deben invalidar sesiones activas si se define.
5. Suspensión de usuario debe invalidar capacidad operativa.
6. Suspensión de tienda debe invalidar operaciones de tienda.

---

## 13. Modelo RBAC

El sistema debe usar RBAC basado en:

1. Usuarios.
2. Roles.
3. Permisos.
4. Perfiles.
5. Scope de datos.
6. Estado del usuario.
7. Estado de tienda.

### 13.1 Estructura conceptual

```txt
User
  ↓
UserProfile
  ↓
Roles
  ↓
Permissions
  ↓
Scopes
  ↓
Allowed Actions
```

---

## 14. Tablas de seguridad recomendadas

| Tabla | Uso |
|---|---|
| `users` | Usuarios del sistema |
| `user_profiles` | Perfil principal del usuario |
| `roles` | Roles funcionales |
| `permissions` | Permisos atómicos |
| `role_permissions` | Relación rol-permiso |
| `user_roles` | Relación usuario-rol |
| `user_sessions` | Sesiones activas o revocadas |
| `password_reset_tokens` | Tokens de recuperación |
| `email_verification_tokens` | Tokens de verificación |
| `security_events` | Eventos de seguridad |
| `audit_logs` | Auditoría crítica |
| `api_keys` | Futuras API keys de integración |
| `login_attempts` | Intentos de login |
| `blocked_ips` | Bloqueos básicos por IP si aplica |
| `stores` | Estado de tienda y alcance |
| `store_users` | Usuarios vinculados a tiendas |

---

## 15. Modelo de tabla `users`

```txt
id
uuid
email
password_hash
first_name
last_name
phone
profile_code
status
email_verified_at
last_login_at
password_changed_at
created_at
updated_at
deleted_at
```

Estados sugeridos:

```txt
ACTIVE
PENDING_VERIFICATION
SUSPENDED
LOCKED
DISABLED
DELETED
```

---

## 16. Modelo de tabla `roles`

```txt
id
uuid
role_code
role_name
description
profile_code
status
created_at
updated_at
```

---

## 17. Modelo de tabla `permissions`

```txt
id
uuid
permission_code
permission_name
module_code
action_code
description
is_critical
status
created_at
updated_at
```

---

## 18. Modelo de tabla `role_permissions`

```txt
id
role_id
permission_id
created_at
```

---

## 19. Modelo de tabla `user_roles`

```txt
id
user_id
role_id
scope_type
store_id
created_at
```

---

## 20. Modelo de tabla `user_sessions`

```txt
id
uuid
user_id
refresh_token_hash
device_label
ip_address
user_agent
status
expires_at
revoked_at
created_at
updated_at
```

Estados sugeridos:

```txt
ACTIVE
REVOKED
EXPIRED
SUSPICIOUS
```

---

## 21. Modelo de tabla `login_attempts`

```txt
id
email
ip_address
user_agent
success
failure_reason
created_at
```

---

## 22. Modelo de tabla `security_events`

```txt
id
uuid
user_id
event_code
event_type
severity
ip_address
user_agent
description
metadata
created_at
```

---

## 23. Modelo de permisos por módulo

Los permisos deben seguir una convención clara:

```txt
module.action
```

Ejemplos:

```txt
users.view
users.create
users.update
stores.approve
quotations.create
quotations.respond
orders.close
payments.confirm
commissions.adjust
tos.gate_out
transport.update_status
storage.dispatch
inspections.approve
audit.view
reports.export
```

---

## 24. Módulos de permisos mínimos

| Módulo | Código | Ejemplos de permisos |
|---|---|---|
| Usuarios | `users` | `users.view`, `users.create`, `users.update`, `users.disable` |
| Roles | `roles` | `roles.view`, `roles.create`, `roles.assign` |
| Tiendas | `stores` | `stores.view`, `stores.create`, `stores.approve`, `stores.suspend` |
| Servicios | `services` | `services.view`, `services.create`, `services.publish` |
| Cotizaciones | `quotations` | `quotations.create`, `quotations.respond`, `quotations.approve` |
| Órdenes | `orders` | `orders.view`, `orders.start`, `orders.close`, `orders.cancel` |
| TOS | `tos` | `tos.view`, `tos.gate_in`, `tos.gate_out`, `tos.block` |
| Transporte | `transport` | `transport.create_trip`, `transport.assign`, `transport.update_status` |
| Almacenamiento | `storage` | `storage.receive`, `storage.move`, `storage.dispatch` |
| Inspecciones | `inspections` | `inspections.create`, `inspections.execute`, `inspections.approve` |
| Pagos | `payments` | `payments.create`, `payments.confirm`, `payments.reject` |
| Comisiones | `commissions` | `commissions.view`, `commissions.adjust`, `commissions.configure` |
| Documentos | `documents` | `documents.view`, `documents.upload`, `documents.validate` |
| Reportes | `reports` | `reports.view`, `reports.export` |
| Auditoría | `audit` | `audit.view`, `audit.export` |
| Configuración | `settings` | `settings.view`, `settings.update` |

---

## 25. Scopes de datos

El scope define **qué datos puede ver o modificar un usuario**, incluso si tiene el permiso funcional.

| Scope | Descripción |
|---|---|
| `own` | Solo registros propios del usuario |
| `store` | Registros asociados a su tienda |
| `assigned` | Registros asignados directamente al usuario |
| `module` | Registros autorizados por módulo o área operativa |
| `global` | Acceso global del superadministrador |
| `global_readonly` | Acceso global de solo lectura para auditor |
| `support_limited` | Acceso limitado a casos de soporte |

---

## 26. Reglas de scope por perfil

| Perfil | Scope recomendado | Regla |
|---|---|---|
| Cliente final | `own` | Solo datos de sus órdenes, cotizaciones, pagos y documentos |
| Tienda logística | `store` | Solo datos de su tienda y operaciones |
| Transportista | `store` o `assigned` | Viajes propios/asignados |
| Inspector | `assigned` | Inspecciones asignadas |
| Agente aduanal | `store` | Operaciones aduanales propias |
| Operador interno | `module` | Módulos autorizados por rol |
| Superadministrador | `global` | Todo el sistema |
| Auditor | `global_readonly` | Todo el sistema sin modificar |
| Soporte técnico | `support_limited` | Solo tickets y registros relacionados |

---

## 27. Protección de endpoints Nest.js

Todos los endpoints deben protegerse con:

1. `JwtAuthGuard`.
2. `PermissionsGuard`.
3. `ScopeGuard`.
4. Validación DTO.
5. Validación de estado de usuario.
6. Validación de estado de tienda si aplica.
7. Auditoría si es acción crítica.

### 27.1 Ejemplo conceptual

```txt
@UseGuards(JwtAuthGuard, PermissionsGuard, ScopeGuard)
@RequirePermissions('orders.close')
@RequireScope('store|module|global')
PATCH /orders/:id/close
```

---

## 28. Protección de rutas React.js

El frontend debe proteger rutas por:

1. Usuario autenticado.
2. Perfil.
3. Permisos.
4. Scope aproximado para navegación.
5. Estado del usuario.
6. Estado de tienda.

### 28.1 Reglas

1. Ocultar menús no autorizados.
2. Deshabilitar acciones no permitidas.
3. Nunca confiar solo en el frontend.
4. Mostrar `ForbiddenState` cuando el backend devuelva 403.
5. Redirigir al login si no hay sesión.
6. Redirigir a dashboard correcto según perfil.
7. Mostrar mensajes claros sin filtrar detalles técnicos.

---

## 29. Seguridad por módulo funcional

### 29.1 Usuarios y roles

Controles obligatorios:

1. Solo admin puede asignar roles críticos.
2. Cambios de rol generan auditoría.
3. Deshabilitar usuario genera revocación de sesiones.
4. Cambios de email deben requerir verificación futura.
5. No permitir que un usuario se otorgue permisos superiores.

### 29.2 Tiendas

Controles obligatorios:

1. Crear tienda no implica aprobación automática.
2. Tienda suspendida no puede publicar servicios ni responder cotizaciones.
3. Usuarios de tienda suspendida no pueden operar órdenes nuevas.
4. Aprobación/suspensión genera auditoría.

### 29.3 Servicios

Controles obligatorios:

1. Solo tienda dueña o admin puede editar servicio.
2. Publicación requiere permiso.
3. Cambios de tarifa deben auditarse.
4. Servicio inactivo no puede recibir cotizaciones.

### 29.4 Cotizaciones

Controles obligatorios:

1. Cliente solo ve cotizaciones propias.
2. Tienda solo ve cotizaciones de sus servicios.
3. Responder cotización requiere permiso y scope de tienda.
4. Aprobar cotización requiere cliente dueño.
5. Conversión a orden requiere estado válido.

### 29.5 Órdenes

Controles obligatorios:

1. Cliente solo ve órdenes propias.
2. Tienda solo ve órdenes de sus servicios.
3. Cierre de orden requiere permiso.
4. Cancelación exige motivo.
5. Cambios de estado generan auditoría.

### 29.6 TOS

Controles obligatorios:

1. Gate-out no permitido con bloqueos activos.
2. Bloqueos y liberaciones requieren permiso.
3. Movimientos requieren ubicación origen válida.
4. Eventos TOS críticos generan auditoría.

### 29.7 Transporte

Controles obligatorios:

1. Transportista solo ve viajes propios/asignados.
2. Entrega requiere evidencia.
3. Incidencias requieren motivo.
4. Cancelación requiere motivo.

### 29.8 Almacenamiento

Controles obligatorios:

1. Inventario bloqueado no puede despacharse.
2. Movimiento requiere ubicación origen correcta.
3. Despacho requiere permiso.
4. Evidencias críticas deben conservarse.

### 29.9 Inspecciones

Controles obligatorios:

1. Inspector solo ve inspecciones asignadas.
2. Checklist obligatorio debe completarse.
3. Evidencia obligatoria debe cargarse.
4. Rechazo requiere motivo.
5. Rechazo puede crear bloqueo.

### 29.10 Pagos

Controles obligatorios:

1. Cliente solo ve pagos propios.
2. Tienda solo ve pagos de sus órdenes.
3. Confirmar pago requiere permiso crítico.
4. Rechazar pago requiere motivo.
5. Confirmar pago genera auditoría crítica.

### 29.11 Comisiones

Controles obligatorios:

1. Configurar reglas requiere superadministrador.
2. Ajustar comisión requiere permiso crítico.
3. Tienda solo ve comisiones propias.
4. Cambios de reglas generan auditoría crítica.

---

## 30. Seguridad de documentos y evidencias

### 30.1 Principios

1. Archivos privados no deben estar expuestos públicamente sin token o autorización.
2. Todo archivo debe asociarse a una entidad y dueño lógico.
3. Todo acceso a archivo privado debe validar permiso y scope.
4. Archivos críticos no deben eliminarse físicamente sin política formal.
5. Se debe usar soft delete cuando aplique.
6. Los nombres de archivos no deben revelar información sensible.
7. Validar tipo y tamaño de archivo.
8. Bloquear extensiones peligrosas.
9. Generar nombre interno seguro.
10. Auditar acceso o descarga de archivos críticos si aplica.

### 30.2 Tipos de archivos permitidos MVP

| Tipo | Extensiones |
|---|---|
| PDF | `.pdf` |
| Imágenes | `.jpg`, `.jpeg`, `.png`, `.webp` |
| Documentos | `.doc`, `.docx` opcional |
| Hojas | `.xls`, `.xlsx` opcional |
| Texto | `.txt`, `.csv` opcional |

### 30.3 Tipos prohibidos

```txt
.exe
.bat
.sh
.cmd
.scr
.js ejecutable subido
.php
.jar
.vbs
.msi
```

---

## 31. Seguridad API

Controles obligatorios:

1. Validación DTO con `class-validator` o equivalente.
2. Sanitización de entradas.
3. Rate limiting.
4. CORS configurado.
5. Headers de seguridad.
6. No exponer stack traces en producción.
7. Paginación obligatoria en listados.
8. Límites máximos de consulta.
9. Validación de IDs y UUIDs.
10. Protección contra SQL injection mediante ORM/query builder seguro.
11. Protección contra mass assignment.
12. Respuestas consistentes de error.
13. Idempotencia en operaciones críticas si aplica.
14. Auditoría de operaciones críticas.

---

## 32. Seguridad frontend React.js

Controles obligatorios:

1. No guardar secretos en frontend.
2. No exponer claves privadas en variables públicas.
3. Evitar renderizar HTML no confiable.
4. Sanitizar contenido si se permite HTML.
5. Controlar rutas privadas.
6. Ocultar acciones no permitidas.
7. Manejar 401 y 403 de forma segura.
8. No mostrar errores internos al usuario.
9. Evitar datos sensibles en localStorage cuando sea posible.
10. Si se usa localStorage, evaluar riesgo y expiración.
11. Preferir cookies seguras httpOnly para tokens si la arquitectura lo permite.
12. Validar formularios en frontend, pero confirmar siempre en backend.

---

## 33. Seguridad MySQL

Controles obligatorios:

1. Usuario de base de datos con privilegios mínimos.
2. No usar usuario root de MySQL en la app.
3. Contraseña de base de datos en variable de entorno.
4. Backups periódicos.
5. Índices adecuados para evitar consultas pesadas abusivas.
6. Soft delete en entidades críticas.
7. Auditoría de cambios críticos a nivel aplicación.
8. Migraciones versionadas.
9. No guardar tokens en texto plano.
10. Hash de refresh tokens.
11. Campos monetarios con decimal exacto.
12. Restricciones de integridad referencial.

---

## 34. Variables de entorno seguras

Variables recomendadas:

```txt
NODE_ENV
APP_URL
FRONTEND_URL
DATABASE_HOST
DATABASE_PORT
DATABASE_USER
DATABASE_PASSWORD
DATABASE_NAME
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
JWT_ACCESS_EXPIRES_IN
JWT_REFRESH_EXPIRES_IN
PASSWORD_HASH_ROUNDS
FILE_STORAGE_PATH
MAX_FILE_SIZE_MB
CORS_ALLOWED_ORIGINS
RATE_LIMIT_WINDOW
RATE_LIMIT_MAX
MAIL_HOST
MAIL_USER
MAIL_PASSWORD
```

Reglas:

1. No subir `.env` real al repositorio.
2. Crear `.env.example` sin secretos reales.
3. Rotar secretos si se exponen.
4. Separar variables por ambiente.

---

## 35. Ambientes y seguridad

| Ambiente | Uso | Reglas |
|---|---|---|
| Local | Desarrollo individual | Datos demo, secretos locales no productivos |
| Development | Desarrollo compartido | Datos demo o anonimizados |
| Staging | Validación previa | Configuración similar a producción |
| Production | Operación real | Secrets fuertes, logs, backups, monitoreo |

---

## 36. Auditoría de seguridad

Todo evento crítico debe registrarse en `audit_logs` o `security_events`.

### 36.1 Eventos de autenticación

| Evento | Criticidad |
|---|---|
| `auth.login.success` | low |
| `auth.login.failed` | medium |
| `auth.logout` | low |
| `auth.password.reset.requested` | medium |
| `auth.password.reset.completed` | high |
| `auth.refresh_token.revoked` | medium |
| `auth.account.locked` | high |

### 36.2 Eventos de autorización

| Evento | Criticidad |
|---|---|
| `security.forbidden_access` | high |
| `security.scope_violation` | high |
| `security.permission_changed` | critical |
| `security.role_assigned` | critical |
| `security.role_removed` | critical |

### 36.3 Eventos financieros

| Evento | Criticidad |
|---|---|
| `payment.confirmed` | critical |
| `payment.rejected` | high |
| `payment.refunded` | critical |
| `commission.rule.updated` | critical |
| `commission.adjustment.approved` | critical |

### 36.4 Eventos operativos críticos

| Evento | Criticidad |
|---|---|
| `order.closed` | high |
| `order.cancelled` | high |
| `tos.container.blocked` | high |
| `tos.container.released` | high |
| `storage.dispatched` | high |
| `inspection.rejected` | high |
| `trip.incident_reported` | high |

---

## 37. Modelo de tabla `audit_logs`

```txt
id
uuid
actor_user_id
action_code
entity_type
entity_id
old_values
new_values
ip_address
user_agent
severity
created_at
```

Reglas:

1. `old_values` y `new_values` deben evitar guardar secretos.
2. No guardar contraseñas ni tokens.
3. Registrar IP y user agent si están disponibles.
4. Registrar usuario actor.
5. Registrar entidad afectada.
6. Registrar severidad.

---

## 38. Rate limiting y protección contra abuso

### 38.1 Endpoints con rate limit estricto

| Endpoint | Riesgo |
|---|---|
| `/auth/login` | Fuerza bruta |
| `/auth/register` | Spam de cuentas |
| `/auth/forgot-password` | Abuso de emails |
| `/documents/upload` | Abuso de almacenamiento |
| `/payments` | Abuso financiero |
| `/support/tickets` | Spam soporte |

### 38.2 Reglas

1. Limitar intentos de login por IP y email.
2. Registrar intentos fallidos.
3. Bloquear temporalmente patrones abusivos.
4. Proteger uploads con límites de tamaño.
5. Proteger listados con paginación.
6. Proteger búsquedas con límites.

---

## 39. Protección OWASP aplicable

| Riesgo OWASP | Control requerido |
|---|---|
| Broken Access Control | RBAC + scopes backend |
| Cryptographic Failures | Hash de contraseñas, secrets seguros, HTTPS en producción |
| Injection | ORM seguro, validación DTO, parametrización |
| Insecure Design | Seguridad por diseño, denegar por defecto |
| Security Misconfiguration | Headers, CORS, variables seguras |
| Vulnerable Components | Mantener dependencias actualizadas |
| Identification and Authentication Failures | Sesiones, tokens, rate limit, password policy |
| Software and Data Integrity Failures | Migraciones, control de dependencias |
| Security Logging and Monitoring Failures | Audit logs y security events |
| SSRF | Validar URLs externas si se agregan integraciones futuras |

---

## 40. Validación y sanitización de entrada

Reglas obligatorias:

1. Todo DTO debe validarse.
2. IDs deben ser numéricos o UUID válidos según diseño.
3. Emails deben validarse.
4. Montos deben ser positivos.
5. Estados deben pertenecer a catálogos permitidos.
6. Códigos maestros deben existir y estar activos.
7. Textos deben tener longitud máxima.
8. Campos HTML no deben aceptarse salvo necesidad expresa.
9. Archivos deben validar MIME type y extensión.
10. Parámetros de ordenamiento deben restringirse a columnas permitidas.

---

## 41. Respuestas de error seguras

Formato sugerido:

```json
{
  "statusCode": 403,
  "errorCode": "FORBIDDEN",
  "message": "You do not have permission to perform this action.",
  "requestId": "REQ-2026-0001"
}
```

Reglas:

1. No exponer stack trace en producción.
2. No exponer SQL.
3. No exponer rutas internas.
4. No exponer secretos.
5. Mensajes claros para usuario.
6. Códigos técnicos consistentes para frontend.

---

## 42. Seguridad en reportes y exportaciones

Controles obligatorios:

1. Exportar reportes requiere permiso `reports.export`.
2. Auditor puede exportar solo si tiene permiso explícito.
3. Reportes financieros requieren permisos reforzados.
4. Reportes deben respetar scope.
5. Exportaciones deben auditarse.
6. Evitar exponer datos de otras tiendas.
7. Limitar volumen de exportación si aplica.
8. Registrar usuario, fecha y filtros usados.

---

## 43. Seguridad en notificaciones

Reglas:

1. Notificaciones no deben exponer datos sensibles innecesarios.
2. La ruta de destino debe validar permisos al abrir.
3. No confiar en notificación como autorización.
4. Notificaciones financieras deben ser breves.
5. Notificaciones de seguridad deben evitar detalles explotables.

---

## 44. Seguridad en soporte técnico

Reglas:

1. Soporte no debe tener acceso global por defecto.
2. Soporte debe trabajar con tickets.
3. Acceso a órdenes/pagos/documentos debe estar justificado por ticket.
4. Acciones de soporte deben auditarse.
5. Soporte no debe confirmar pagos ni ajustar comisiones salvo rol explícito.
6. Soporte no debe cambiar roles críticos.

---

## 45. Backup y recuperación

### 45.1 Reglas mínimas

1. Backup de base de datos en producción.
2. Backup de documentos/evidencias.
3. Separar backups de ambiente productivo.
4. Probar restauración periódicamente.
5. Definir retención.
6. Proteger backups con acceso restringido.
7. No guardar backups en repositorio.

### 45.2 Frecuencia sugerida

| Tipo | Frecuencia MVP sugerida |
|---|---|
| Base de datos | Diario |
| Archivos críticos | Diario |
| Configuración | En cada despliegue |
| Prueba de restauración | Mensual o por hito |

---

## 46. Monitoreo y alertas

Eventos que deben monitorearse:

1. Muchos logins fallidos.
2. Intentos repetidos de acceso 403.
3. Cambios de roles críticos.
4. Confirmaciones de pago.
5. Ajustes de comisión.
6. Descargas masivas de documentos.
7. Errores 500 recurrentes.
8. Subida masiva de archivos.
9. Cambios de reglas financieras.
10. Gate-out o despacho con eventos sensibles.

---

## 47. Respuesta a incidentes

### 47.1 Tipos de incidentes

| Tipo | Ejemplo |
|---|---|
| Autenticación | Cuenta comprometida |
| Autorización | Acceso indebido a datos de otra tienda |
| Documentos | Descarga no autorizada |
| Financiero | Pago confirmado indebidamente |
| Operativo | Gate-out o despacho no autorizado |
| Datos | Eliminación o modificación crítica |
| Disponibilidad | Caída del sistema |

### 47.2 Flujo de respuesta

```txt
Detección
  ↓
Clasificación
  ↓
Contención
  ↓
Investigación
  ↓
Corrección
  ↓
Restauración
  ↓
Reporte interno
  ↓
Medidas preventivas
```

### 47.3 Acciones de contención posibles

1. Suspender usuario.
2. Revocar sesiones.
3. Suspender tienda.
4. Bloquear endpoint temporalmente.
5. Deshabilitar descarga de documentos.
6. Poner orden en revisión.
7. Revertir cambio no autorizado si aplica.
8. Restaurar desde backup si aplica.

---

## 48. Seguridad en despliegue

Reglas:

1. No desplegar con `NODE_ENV=development` en producción.
2. No exponer Swagger público en producción sin protección.
3. CORS debe limitar orígenes.
4. Usar HTTPS en producción.
5. Habilitar headers de seguridad.
6. No exponer puertos internos innecesarios.
7. Migraciones deben ejecutarse controladamente.
8. Seeds demo no deben cargarse en producción real salvo ambiente demo.
9. Logs de producción deben evitar datos sensibles.
10. Variables de entorno deben estar protegidas.

---

## 49. Headers de seguridad recomendados

| Header | Uso |
|---|---|
| `Content-Security-Policy` | Reducir XSS |
| `X-Content-Type-Options` | Evitar MIME sniffing |
| `X-Frame-Options` | Evitar clickjacking |
| `Referrer-Policy` | Controlar referer |
| `Permissions-Policy` | Limitar APIs del navegador |
| `Strict-Transport-Security` | Forzar HTTPS en producción |

---

## 50. CORS

Reglas:

1. Permitir solo dominios frontend autorizados.
2. No usar `*` en producción.
3. Controlar métodos permitidos.
4. Controlar headers permitidos.
5. Permitir credenciales solo si el diseño lo requiere.

---

## 51. Cifrado y protección de datos

### 51.1 En tránsito

1. Usar HTTPS en producción.
2. No transmitir tokens por URL.
3. No transmitir contraseñas fuera de login/reset.

### 51.2 En reposo

1. Hash de contraseñas.
2. Hash de refresh tokens.
3. Proteger backups.
4. Considerar cifrado de archivos sensibles en fase futura.
5. Considerar cifrado de campos sensibles en fase futura.

---

## 52. Privacidad y minimización de datos

Reglas:

1. Recolectar solo datos necesarios.
2. No mostrar datos de contacto privados sin necesidad operativa.
3. Limitar acceso a comprobantes de pago.
4. Limitar acceso a documentos privados.
5. Ocultar información sensible en reportes públicos.
6. Usar vistas por perfil.
7. Soporte debe tener acceso limitado.
8. Auditor tiene lectura, no modificación.

---

## 53. Seguridad de seeds iniciales

Reglas para `17_INITIAL_SEEDS_PLAN.md`:

1. Crear roles mínimos necesarios.
2. Crear permisos atómicos.
3. Crear usuario superadmin demo solo en ambiente no productivo.
4. Contraseñas demo deben cambiarse en producción.
5. Seeds de datos demo no deben mezclarse con producción real.
6. Asignar permisos por perfil de forma conservadora.
7. Auditor debe ser solo lectura.
8. Soporte debe ser limitado.
9. Tienda no debe tener permisos globales.
10. Cliente no debe tener permisos de tienda.

---

## 54. Matriz de permisos críticos

| Acción crítica | Permiso requerido | Auditoría |
|---|---|---|
| Aprobar tienda | `stores.approve` | Sí |
| Suspender tienda | `stores.suspend` | Sí |
| Asignar rol | `roles.assign` | Sí |
| Cambiar permisos | `roles.update` | Sí |
| Confirmar pago | `payments.confirm` | Sí crítica |
| Rechazar pago | `payments.reject` | Sí |
| Ajustar comisión | `commissions.adjust` | Sí crítica |
| Configurar regla comisión | `commissions.manage_rules` | Sí crítica |
| Cerrar orden | `orders.close` | Sí |
| Cancelar orden | `orders.cancel` | Sí |
| Gate-out TOS | `tos.gate_out` | Sí |
| Liberar bloqueo TOS | `tos.release` | Sí |
| Despachar inventario | `storage.dispatch` | Sí |
| Aprobar inspección | `inspections.approve` | Sí |
| Exportar reportes financieros | `reports.export` | Sí |

---

## 55. Endpoints Nest.js de seguridad

Base path:

```txt
/auth
/security
```

### 55.1 Autenticación

| Método | Endpoint | Descripción | Público |
|---|---|---|---|
| POST | `/auth/register` | Registro de usuario | Sí |
| POST | `/auth/login` | Inicio de sesión | Sí |
| POST | `/auth/refresh` | Renovar access token | No, refresh requerido |
| POST | `/auth/logout` | Cerrar sesión | No |
| POST | `/auth/logout-all` | Cerrar todas las sesiones | No |
| POST | `/auth/forgot-password` | Solicitar reset | Sí |
| POST | `/auth/reset-password` | Confirmar reset | Sí con token |
| POST | `/auth/verify-email` | Verificar email | Sí con token |
| GET | `/auth/me` | Usuario actual | No |

### 55.2 Seguridad y sesiones

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/security/sessions` | Ver sesiones propias | usuario autenticado |
| DELETE | `/security/sessions/:id` | Revocar sesión propia | usuario autenticado |
| GET | `/security/events` | Ver eventos de seguridad | `audit.view` o admin |
| GET | `/security/login-attempts` | Ver intentos de login | admin/auditor |
| POST | `/security/users/:id/lock` | Bloquear usuario | `users.disable` |
| POST | `/security/users/:id/unlock` | Desbloquear usuario | `users.update` |

---

## 56. DTOs sugeridos

### 56.1 `LoginDto`

```json
{
  "email": "client.demo@example.com",
  "password": "StrongPassword123!"
}
```

### 56.2 `RegisterDto`

```json
{
  "email": "new.user@example.com",
  "password": "StrongPassword123!",
  "firstName": "New",
  "lastName": "User",
  "profileCode": "PROF-CLI-001"
}
```

### 56.3 `ForgotPasswordDto`

```json
{
  "email": "client.demo@example.com"
}
```

### 56.4 `ResetPasswordDto`

```json
{
  "token": "RESET_TOKEN_VALUE",
  "newPassword": "NewStrongPassword123!"
}
```

### 56.5 `AssignRoleDto`

```json
{
  "userId": 10,
  "roleCode": "STORE_MANAGER",
  "scopeType": "store",
  "storeId": 20,
  "reason": "Assigning store manager role to approved store user"
}
```

### 56.6 `RevokeSessionDto`

```json
{
  "sessionId": 100,
  "reason": "User requested logout from device"
}
```

---

## 57. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `LoginPage` | Inicio de sesión |
| `RegisterPage` | Registro de usuario |
| `ForgotPasswordPage` | Solicitud de recuperación |
| `ResetPasswordPage` | Cambio de contraseña con token |
| `VerifyEmailPage` | Verificación de correo |
| `ProtectedRoute` | Protección de rutas privadas |
| `PermissionGate` | Control visual por permiso |
| `RoleBadge` | Mostrar rol del usuario |
| `UserSecurityPanel` | Seguridad de cuenta |
| `ActiveSessionsPanel` | Sesiones activas |
| `SecurityEventsPage` | Eventos de seguridad |
| `AccessDeniedPage` | Página 403 |
| `SessionExpiredModal` | Sesión expirada |
| `AuditLogViewer` | Visor de auditoría |
| `RoleManagementPage` | Administración de roles |
| `PermissionMatrixPage` | Matriz de permisos |
| `SecurityDashboardPage` | Dashboard de seguridad admin |

---

## 58. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useAuth` | Estado de autenticación |
| `useCurrentUser` | Usuario actual |
| `usePermissions` | Permisos del usuario |
| `useHasPermission` | Validar permiso puntual |
| `useLogout` | Cerrar sesión |
| `useRefreshToken` | Renovar sesión |
| `useActiveSessions` | Sesiones activas |
| `useSecurityEvents` | Eventos de seguridad |
| `useRoleManagement` | Roles y permisos |
| `useForbiddenHandler` | Manejo de 403 |

---

## 59. Servicios frontend API

Archivo sugerido:

```txt
/src/services/authApi.ts
/src/services/securityApi.ts
```

Funciones mínimas:

```ts
login(payload)
register(payload)
refreshToken(payload)
logout()
logoutAll()
forgotPassword(payload)
resetPassword(payload)
verifyEmail(payload)
getCurrentUser()
getActiveSessions()
revokeSession(sessionId)
getSecurityEvents(params)
getLoginAttempts(params)
lockUser(userId, payload)
unlockUser(userId, payload)
assignRole(payload)
removeRole(payload)
getRoles(params)
getPermissions(params)
```

---

## 60. Validaciones backend obligatorias

### 60.1 Login

1. Email válido.
2. Password presente.
3. Rate limit por IP/email.
4. Usuario existe y está activo.
5. Email verificado si se exige.
6. Password correcta.
7. Registrar intento exitoso o fallido.
8. Emitir tokens.

### 60.2 Registro

1. Email válido y único.
2. Password cumple política.
3. Perfil permitido para autorregistro.
4. Usuario inicia como `PENDING_VERIFICATION` o `ACTIVE` según regla.
5. No asignar roles críticos automáticamente.

### 60.3 Refresh token

1. Refresh token existe.
2. Refresh token no está revocado.
3. Refresh token no expiró.
4. Usuario sigue activo.
5. Rotar token si se implementa.

### 60.4 Asignar rol

1. Usuario actor tiene permiso.
2. No puede autoescalar privilegios.
3. Rol existe y está activo.
4. Scope requerido si el rol es de tienda.
5. Registrar auditoría crítica.

### 60.5 Acceso a entidad

1. Usuario autenticado.
2. Permiso requerido.
3. Scope correcto.
4. Entidad existe.
5. Entidad pertenece al usuario, tienda o asignación permitida.

---

## 61. Transacciones de seguridad

Deben ser transaccionales:

1. Registro de usuario + rol inicial.
2. Asignación de rol + auditoría.
3. Cambio de permisos + auditoría.
4. Suspensión de usuario + revocación de sesiones.
5. Suspensión de tienda + bloqueo operativo.
6. Reset de contraseña + revocación de tokens.
7. Confirmación de pago + auditoría + notificación.
8. Ajuste de comisión + auditoría + historial.

---

## 62. Reportes de seguridad

| Reporte | Descripción | Perfil |
|---|---|---|
| Logins fallidos | Intentos fallidos por fecha/IP/email | Admin, auditor |
| Usuarios bloqueados | Cuentas bloqueadas o suspendidas | Admin |
| Cambios de roles | Asignaciones y remociones | Admin, auditor |
| Accesos denegados | Eventos 403 y violaciones de scope | Admin, auditor |
| Eventos críticos | Pagos, comisiones, cierres y despachos | Admin, auditor |
| Descargas de documentos | Descargas de archivos sensibles | Admin, auditor |
| Sesiones activas | Sesiones por usuario | Admin, usuario propio |
| Exportaciones | Reportes exportados | Admin, auditor |

---

## 63. Métricas del dashboard de seguridad

### 63.1 Superadministrador

1. Usuarios activos.
2. Usuarios suspendidos.
3. Logins fallidos en 24 horas.
4. Accesos denegados en 24 horas.
5. Cambios de rol recientes.
6. Eventos críticos financieros.
7. Eventos críticos operativos.
8. Descargas de documentos sensibles.
9. Sesiones activas.
10. Incidentes abiertos.

### 63.2 Auditor

1. Eventos críticos por módulo.
2. Cambios de permisos.
3. Cambios de reglas de comisión.
4. Confirmaciones de pago.
5. Despachos y gate-outs.
6. Accesos denegados.
7. Exportaciones realizadas.
8. Evidencias modificadas.

### 63.3 Usuario final

1. Sesiones activas propias.
2. Último acceso.
3. Cambio de contraseña.
4. Verificación de email.
5. Opción de cerrar sesiones.

---

## 64. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Token ausente | `UNAUTHORIZED` | 401 |
| Token expirado | `TOKEN_EXPIRED` | 401 |
| Token inválido | `INVALID_TOKEN` | 401 |
| Usuario suspendido | `USER_SUSPENDED` | 403 |
| Usuario bloqueado | `USER_LOCKED` | 403 |
| Sin permiso | `FORBIDDEN` | 403 |
| Violación de scope | `SCOPE_VIOLATION` | 403 |
| Rol no permitido | `ROLE_NOT_ALLOWED` | 422 |
| Password débil | `WEAK_PASSWORD` | 400 |
| Login inválido | `INVALID_CREDENTIALS` | 401 |
| Recurso no encontrado | `RESOURCE_NOT_FOUND` | 404 |
| Archivo no permitido | `FILE_TYPE_NOT_ALLOWED` | 400 |
| Tamaño excedido | `FILE_TOO_LARGE` | 400 |
| Rate limit | `RATE_LIMIT_EXCEEDED` | 429 |
| Operación crítica sin motivo | `REASON_REQUIRED` | 400 |

---

## 65. Pruebas funcionales mínimas

### 65.1 Autenticación

1. Usuario puede registrarse.
2. Usuario puede iniciar sesión con credenciales válidas.
3. Usuario no puede iniciar sesión con contraseña incorrecta.
4. Usuario suspendido no puede iniciar sesión.
5. Token expirado rechaza acceso.
6. Logout revoca sesión.
7. Reset de contraseña funciona con token válido.

### 65.2 Autorización

1. Cliente no accede a panel de tienda.
2. Tienda no accede a panel global admin.
3. Tienda no ve datos de otra tienda.
4. Cliente no ve órdenes de otro cliente.
5. Inspector no ve inspecciones no asignadas.
6. Auditor puede ver datos sin modificar.
7. Soporte no puede confirmar pagos.
8. Usuario sin permiso recibe 403.

### 65.3 Auditoría

1. Confirmar pago genera auditoría.
2. Ajustar comisión genera auditoría.
3. Cambiar rol genera auditoría.
4. Gate-out genera auditoría.
5. Despacho genera auditoría.
6. Rechazar inspección genera auditoría.
7. Exportar reporte genera auditoría.

### 65.4 Archivos

1. Usuario autorizado puede descargar documento propio.
2. Usuario no autorizado recibe 403.
3. Archivo prohibido se rechaza.
4. Archivo grande se rechaza.
5. Comprobante confirmado no se elimina físicamente.

---

## 66. Pruebas técnicas API

1. `POST /auth/login` devuelve token con credenciales válidas.
2. `POST /auth/login` registra intento fallido.
3. `POST /auth/refresh` rechaza refresh revocado.
4. `GET /auth/me` requiere token válido.
5. Endpoint protegido sin token devuelve 401.
6. Endpoint protegido sin permiso devuelve 403.
7. Endpoint con recurso de otra tienda devuelve 403.
8. Endpoint de auditoría solo permite admin/auditor.
9. Confirmación de pago requiere permiso crítico.
10. Ajuste de comisión requiere permiso crítico.
11. Upload de `.exe` se rechaza.
12. Payload inválido devuelve 400.
13. Listados aplican paginación.
14. Reportes exportados generan auditoría.
15. Rate limit en login funciona.

---

## 67. Criterios de aceptación

El plan de seguridad se considera aceptado cuando:

1. Existe autenticación funcional.
2. Contraseñas se guardan con hash seguro.
3. Tokens expiran.
4. Refresh tokens pueden revocarse.
5. Existe RBAC funcional.
6. Permisos se validan en backend.
7. Scopes se validan en backend.
8. Rutas frontend están protegidas.
9. Menús se ajustan al perfil y permisos.
10. Cliente solo ve sus datos.
11. Tienda solo ve sus datos.
12. Inspector solo ve asignaciones.
13. Auditor consulta sin modificar.
14. Superadministrador tiene control global.
15. Pagos y comisiones tienen permisos críticos.
16. Documentos privados requieren autorización.
17. Uploads validan tipo y tamaño.
18. Eventos críticos generan auditoría.
19. Login fallido queda registrado.
20. Accesos denegados quedan registrados.
21. Errores no exponen detalles internos.
22. Variables sensibles no están en código fuente.
23. Base de datos usa privilegios mínimos.
24. Reportes respetan scopes.
25. Pruebas funcionales de seguridad pasan.
26. Pruebas API de seguridad pasan.
27. No existe dependencia técnica con Odoo.

---

## 68. Tareas técnicas para Antigravity

### 68.1 Base de datos

1. Crear o validar tabla `users`.
2. Crear o validar tabla `roles`.
3. Crear o validar tabla `permissions`.
4. Crear o validar tabla `role_permissions`.
5. Crear o validar tabla `user_roles`.
6. Crear o validar tabla `user_sessions`.
7. Crear o validar tabla `login_attempts`.
8. Crear o validar tabla `security_events`.
9. Crear o validar tabla `audit_logs`.
10. Crear índices por usuario, email, rol, permiso, entidad y fecha.
11. Crear seeds de roles.
12. Crear seeds de permisos.
13. Crear seeds de matriz perfil-permisos.
14. Crear usuario superadmin demo solo en ambiente demo.

### 68.2 Backend Nest.js

1. Crear módulo `auth`.
2. Crear módulo `security`.
3. Crear módulo `roles`.
4. Crear módulo `permissions`.
5. Crear `JwtAuthGuard`.
6. Crear `PermissionsGuard`.
7. Crear `ScopeGuard`.
8. Crear decorators `RequirePermissions`.
9. Crear decorators `RequireScope`.
10. Crear servicio de password hashing.
11. Crear servicio de tokens.
12. Crear servicio de sesiones.
13. Crear endpoints auth.
14. Crear endpoints security.
15. Crear validación de usuario activo.
16. Crear validación de tienda activa.
17. Crear auditoría transversal.
18. Crear rate limiting.
19. Crear validación de archivos.
20. Crear pruebas unitarias y API.

### 68.3 Frontend React.js

1. Crear `LoginPage`.
2. Crear `RegisterPage`.
3. Crear `ForgotPasswordPage`.
4. Crear `ResetPasswordPage`.
5. Crear `ProtectedRoute`.
6. Crear `PermissionGate`.
7. Crear `AccessDeniedPage`.
8. Crear `SessionExpiredModal`.
9. Crear `UserSecurityPanel`.
10. Crear `ActiveSessionsPanel`.
11. Crear `SecurityDashboardPage`.
12. Crear `AuditLogViewer`.
13. Crear hooks `useAuth`, `usePermissions`, `useHasPermission`.
14. Crear manejo global de 401/403.
15. Crear guards visuales en menús y botones.

### 68.4 QA

1. Probar login.
2. Probar logout.
3. Probar refresh token.
4. Probar reset password.
5. Probar RBAC.
6. Probar scopes.
7. Probar rutas frontend.
8. Probar endpoints protegidos.
9. Probar auditoría.
10. Probar seguridad de archivos.
11. Probar rate limiting.
12. Probar errores seguros.
13. Probar roles críticos.
14. Probar usuario suspendido.
15. Probar tienda suspendida.
16. Probar reportes con scope.

---

## 69. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de seguridad, backend architect Nest.js, frontend architect React.js, database architect MySQL, product owner y QA engineer del Marketplace Logístico TOS.

Usa el documento `26_SECURITY_MASTER_PLAN.md` como fuente principal para implementar la seguridad transversal del marketplace logístico.

Objetivo:
Implementar autenticación, autorización, RBAC, scopes de datos, protección de endpoints, protección de rutas React, validación de archivos, auditoría crítica, sesiones, tokens, control de contraseñas, manejo seguro de errores, logs de seguridad, rate limiting, protección de reportes y controles mínimos contra riesgos OWASP.

Reglas obligatorias:
1. El backend es la fuente de verdad de seguridad.
2. Todo endpoint sensible debe requerir autenticación.
3. Todo endpoint crítico debe requerir permiso.
4. Todo acceso a datos debe validar scope.
5. Cliente solo ve datos propios.
6. Tienda solo ve datos de su tienda.
7. Inspector solo ve inspecciones asignadas.
8. Auditor solo consulta, no modifica.
9. Superadministrador tiene acceso global.
10. Contraseñas se guardan con hash seguro.
11. Refresh tokens se guardan hasheados y pueden revocarse.
12. Usuarios suspendidos no pueden operar.
13. Tiendas suspendidas no pueden publicar, cotizar ni operar nuevas órdenes.
14. Pagos, comisiones, roles y documentos críticos requieren auditoría.
15. Archivos deben validar tipo, tamaño y autorización.
16. No exponer stack traces ni secretos en errores.
17. Usar variables de entorno para secretos.
18. Proteger reportes y exportaciones por permiso y scope.
19. Crear pruebas de seguridad API y frontend.
20. No integrar Odoo; usarlo solo como referencia conceptual si aplica.

Entregables esperados:
1. Tablas de seguridad validadas.
2. Módulo Auth Nest.js.
3. Módulo Security Nest.js.
4. Módulo Roles y Permissions.
5. Guards JWT, Permissions y Scope.
6. Decorators de permisos y scopes.
7. Servicio de hashing.
8. Servicio de tokens y sesiones.
9. Endpoints de auth.
10. Endpoints de sesiones y eventos de seguridad.
11. Auditoría transversal.
12. Rate limiting.
13. Validación de archivos.
14. Protección de rutas React.
15. Componentes de login, registro, reset y seguridad de cuenta.
16. Hooks de autenticación y permisos.
17. Manejo global de 401/403.
18. Seeds de roles y permisos.
19. Pruebas unitarias y API.
20. Documentación Swagger protegida.

Antes de implementar, genera un plan por fases: base de datos, auth, RBAC, scopes, frontend guards, auditoría, archivos, rate limiting, reportes, QA y hardening final.
```

---

## 70. Checklist de uso en Antigravity

- [ ] Guardar este documento como `26_SECURITY_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Validar consistencia con `11_TECHNICAL_ARCHITECTURE.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `24_PAYMENTS_MASTER_PLAN.md`.
- [ ] Validar consistencia con `25_COMMISSIONS_MASTER_PLAN.md`.
- [ ] Crear módulo Auth.
- [ ] Crear módulo Security.
- [ ] Crear módulo Roles.
- [ ] Crear módulo Permissions.
- [ ] Crear guards JWT, Permissions y Scope.
- [ ] Crear decorators de seguridad.
- [ ] Crear tablas de sesiones y eventos.
- [ ] Crear seeds de roles y permisos.
- [ ] Crear validaciones de scope por módulo.
- [ ] Crear auditoría transversal.
- [ ] Crear protección de archivos.
- [ ] Crear rate limiting.
- [ ] Crear manejo global de errores.
- [ ] Crear rutas protegidas React.
- [ ] Crear hooks de autenticación.
- [ ] Crear pruebas de seguridad.
- [ ] Confirmar que no existe integración real con Odoo.

---

## 71. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión de seguridad | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

