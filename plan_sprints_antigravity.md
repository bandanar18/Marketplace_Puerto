# Plan de Desarrollo — Marketplace Logístico Antigravity
**Arquitectura:** TOS-WMS-AGD | **Stack:** NestJS · React · MySQL  
**Total:** 23 Sprints · 6 Fases estratégicas · Duración estimada por sprint: 2 semanas

---

## Tabla de contenido

1. [Fase 1 — Fundaciones y Seguridad (Sprints 01–03)](#fase-1)
2. [Fase 2 — Marketplace Comercial (Sprints 04–08)](#fase-2)
3. [Fase 3 — Operaciones y Finanzas (Sprints 09–12)](#fase-3)
4. [Fase 4 — Logística Integrada TOS-WMS-AGD (Sprints 13–17)](#fase-4)
5. [Fase 5 — Inteligencia y Soporte (Sprints 18–20)](#fase-5)
6. [Fase 6 — Cierre y Hardening (Sprints 21–23)](#fase-6)

---

## Convenciones

| Símbolo | Significado |
|---------|-------------|
| 🎯 | Objetivo principal del sprint |
| 📋 | Tareas del backend |
| 🖥️ | Tareas del frontend |
| 🗄️ | Modelo de datos / migraciones |
| ✅ | Criterios de aceptación |
| 🔗 | Dependencias previas |
| ⚠️ | Riesgos o consideraciones críticas |

---

<a name="fase-1"></a>
## Fase 1 — Fundaciones y Seguridad
> Establece el núcleo técnico, la autenticación, el control de acceso por roles y los catálogos maestros que soportarán todas las fases posteriores.

---

### Sprint 01 — Setup del Proyecto e Infraestructura Base

🎯 **Objetivo:** Configurar el monorepo, los entornos de desarrollo/producción y el pipeline CI/CD inicial. Nada de funcionalidad de negocio aún; solo la base técnica sólida.

📋 **Backend (NestJS)**
- Inicializar proyecto NestJS con estructura modular (`src/modules/`, `src/common/`, `src/config/`)
- Configurar conexión a MySQL usando TypeORM con soporte para migraciones versionadas
- Implementar módulo de configuración con variables de entorno (`.env`) por entorno (dev, staging, prod)
- Crear script de seed inicial para datos de prueba
- Configurar Logger global con niveles (debug, info, warn, error)
- Implementar health check endpoint (`GET /health`)
- Configurar CORS, rate limiting global y helmet para headers de seguridad

🖥️ **Frontend (React)**
- Inicializar proyecto React con Vite + TypeScript
- Configurar React Router v6 con estructura de rutas protegidas y públicas
- Instalar y configurar Tailwind CSS + sistema de design tokens base
- Crear layout principal: `AuthLayout` y `AppLayout`
- Configurar Axios con interceptores para headers y manejo de errores globales
- Implementar página placeholder "En construcción" para rutas no desarrolladas aún

🗄️ **Base de datos**
- Crear esquema inicial de la base de datos MySQL
- Migración `001_initial_schema`: tabla `users` y tabla `audit_logs` (vacía, se activará en Sprint 12)
- Configurar índices en columnas de búsqueda frecuente

✅ **Criterios de aceptación**
- El servidor NestJS levanta en entorno local y staging sin errores
- La aplicación React compila y muestra la pantalla de inicio
- El endpoint `/health` responde `200 OK` con estado de la DB
- Las migraciones corren de forma idempotente con `npm run migration:run`
- El pipeline CI ejecuta build y linting sin errores

🔗 **Dependencias:** Ninguna

⚠️ **Riesgos**
- Conflictos de versiones entre dependencias de NestJS y TypeORM; fijar versiones en `package.json`
- Definir desde el inicio la estrategia de branching (GitFlow o Trunk-Based)

---

### Sprint 02 — Autenticación JWT y Sistema RBAC

🎯 **Objetivo:** Implementar autenticación segura con JWT y el sistema de roles y permisos (RBAC) que gobernará el acceso a todos los módulos del sistema.

📋 **Backend**
- Crear módulo `AuthModule` con endpoints:
  - `POST /auth/register` — registro de usuario con validación de email único
  - `POST /auth/login` — autenticación y emisión de JWT (access token 15min + refresh token 7d)
  - `POST /auth/refresh` — renovación de access token
  - `POST /auth/logout` — invalidación de refresh token
  - `POST /auth/forgot-password` — solicitud de restablecimiento
  - `POST /auth/reset-password` — cambio de contraseña con token temporal
- Implementar guardas de NestJS: `JwtAuthGuard`, `RolesGuard`
- Crear decorador `@Roles(...roles)` para proteger endpoints por perfil
- Implementar lógica de scopes de datos: `own`, `store`, `module`, `assigned`, `global`, `global_readonly`
- Hashear contraseñas con bcrypt (salt rounds: 12)
- Registrar en `audit_logs` todo intento de login (exitoso y fallido) con IP y user agent

📋 **Módulo RBAC**
- Crear tabla `roles` con los 9 perfiles funcionales predefinidos:
  - `PROF-CLI-001` Cliente Final (nivel 1)
  - `PROF-TIE-002` Tienda Logística (nivel 2)
  - `PROF-SUP-003` Superadmin (nivel 4)
  - `PROF-OPE-004` Operador Interno (nivel 3)
  - `PROF-INS-005` Inspector (nivel 2)
  - `PROF-TRP-006` Transportista (nivel 2)
  - `PROF-AGA-007` Agente Aduanal (nivel 2)
  - `PROF-AUD-008` Auditor (nivel 1, solo lectura)
- Crear tabla `permissions` con acciones por módulo (create, read, update, delete)
- Tabla pivot `role_permissions`
- Endpoint `GET /auth/me` — retorna el perfil del usuario autenticado con su rol y permisos

🖥️ **Frontend**
- Implementar pantalla de Login con validación de formulario
- Pantalla de registro de usuario (Cliente Final por defecto)
- Flujo de recuperación de contraseña (solicitud + formulario de reset)
- Context/Store de autenticación con persistencia en `localStorage` (solo el access token)
- HOC `<ProtectedRoute>` que valida JWT y redirige si expiró
- Implementar lógica de refresco automático de token antes de expiración

🗄️ **Migraciones**
- `002_auth_tables`: tablas `users`, `roles`, `permissions`, `role_permissions`, `refresh_tokens`
- `003_user_roles`: insertar los 9 roles iniciales con sus niveles y scopes

✅ **Criterios de aceptación**
- Login exitoso retorna JWT válido y datos del usuario con su rol
- Un intento con credenciales incorrectas retorna `401` y se registra en `audit_logs`
- Un endpoint protegido con `@Roles('PROF-SUP-003')` rechaza con `403` a un usuario con rol `PROF-CLI-001`
- El refresh token rota correctamente al renovarse
- La UI redirige automáticamente al login si el token expira

🔗 **Dependencias:** Sprint 01

⚠️ **Riesgos**
- Almacenar el refresh token en `httpOnly cookie` en lugar de `localStorage` para mayor seguridad
- Definir política de expiración de sesiones para usuarios inactivos

---

### Sprint 03 — Catálogos Maestros

🎯 **Objetivo:** Crear y poblar los catálogos maestros que serán referencia de todos los módulos: puertos, estados de orden, unidades de medida, tipos de servicio y monedas.

📋 **Backend**
- Crear módulo `CatalogsModule` con endpoints CRUD completos para cada catálogo
- `GET /catalogs/ports` — listado de puertos con filtro por país/región
- `GET /catalogs/order-states` — estados posibles de órdenes con transiciones permitidas
- `GET /catalogs/units` — unidades de medida (kg, ton, m³, TEU, etc.)
- `GET /catalogs/service-types` — tipos de servicio logístico (almacenaje, transporte, aduana, etc.)
- `GET /catalogs/currencies` — monedas soportadas con código ISO
- `GET /catalogs/countries` — países con código ISO
- Proteger endpoints de escritura con `@Roles('PROF-SUP-003')` (solo Superadmin puede modificar catálogos)
- Implementar caché en memoria (TTL 1 hora) para catálogos de solo lectura frecuente
- Validación de integridad referencial al eliminar entradas usadas en otras tablas

🖥️ **Frontend**
- Panel de administración de catálogos (solo visible para Superadmin)
- Tabla con paginación para cada catálogo
- Formularios de creación y edición con validación inline
- Buscador en tiempo real sobre los catálogos
- Componente `<Select>` reutilizable que consume cualquier catálogo vía API

🗄️ **Migraciones**
- `004_catalogs`: tablas `ports`, `order_states`, `measurement_units`, `service_types`, `currencies`, `countries`
- `005_catalog_seeds`: insertar datos iniciales (puertos principales de México y Latinoamérica, estados estándar, unidades ISO, monedas principales)

✅ **Criterios de aceptación**
- `GET /catalogs/ports` retorna al menos 20 puertos poblados con nombre, código y país
- La modificación de un catálogo queda registrada en `audit_logs`
- Un usuario con rol `PROF-CLI-001` no puede crear ni editar entradas de catálogo
- El `<Select>` del frontend carga las opciones desde la API y muestra estado de carga
- Los catálogos se sirven en menos de 200ms gracias al caché

🔗 **Dependencias:** Sprints 01, 02

⚠️ **Riesgos**
- Definir la lista completa de estados de orden antes de avanzar a la Fase 3; los estados son la columna vertebral del sistema de trazabilidad

---

<a name="fase-2"></a>
## Fase 2 — Marketplace Comercial
> Construye la cara pública del marketplace: búsqueda de tiendas, publicación de servicios y el flujo completo de cotizaciones desde solicitud hasta aprobación.

---

### Sprint 04 — Interfaz de Búsqueda tipo Marketplace

🎯 **Objetivo:** Implementar la interfaz de descubrimiento de tiendas logísticas con búsqueda, filtros y visualización de resultados estilo Yelp/marketplace.

📋 **Backend**
- Crear módulo `SearchModule`
- `GET /search/stores` — búsqueda full-text de tiendas con filtros:
  - Puerto de operación
  - Tipo de servicio ofrecido
  - Rango de precio
  - Calificación promedio
  - País/región
- Implementar paginación con cursor (más eficiente que offset para grandes volúmenes)
- Endpoint `GET /search/stores/:id` — detalle de tienda con sus servicios publicados
- Indexar columnas de búsqueda en MySQL (FULLTEXT index en nombre y descripción)
- Endpoint `GET /search/featured` — tiendas destacadas (configurado por Superadmin)

🖥️ **Frontend**
- Página principal del marketplace con buscador prominente
- Panel de filtros lateral con checkboxes y rangos de precio
- Grid de tarjetas de tiendas con: nombre, logo, calificación, puerto, tipos de servicio y precio base
- Componente de paginación infinita (scroll) o paginación tradicional
- Página de detalle de tienda con descripción, servicios, horarios y botón "Solicitar cotización"
- Estado vacío cuando no hay resultados con sugerencias de búsqueda

🗄️ **Migraciones**
- `006_stores_base`: tabla `stores` (id, name, description, port_id, logo_url, status, rating_avg, created_at)
- `007_store_services_base`: tabla `store_services` (id, store_id, service_type_id, name, description, status)

✅ **Criterios de aceptación**
- La búsqueda por nombre retorna resultados relevantes en menos de 500ms
- Los filtros combinados (puerto + tipo de servicio) funcionan correctamente
- La página de detalle muestra la información completa de la tienda
- Un usuario no autenticado puede explorar el marketplace (acceso público)
- El estado de carga se muestra correctamente durante las peticiones

🔗 **Dependencias:** Sprints 01, 02, 03

---

### Sprint 05 — Registro y Gestión de Tiendas Logísticas

🎯 **Objetivo:** Implementar el flujo completo de onboarding de tiendas logísticas: registro, verificación y aprobación por parte del Superadmin.

📋 **Backend**
- Endpoint `POST /stores/register` — registro de nueva tienda (requiere rol `PROF-TIE-002`)
  - Datos: nombre, descripción, RFC/NIT, dirección, puertos de operación, contacto
  - Estado inicial: `PENDING_APPROVAL`
- Endpoint `PUT /stores/:id/approve` — aprobación por Superadmin (cambia estado a `ACTIVE`)
- Endpoint `PUT /stores/:id/reject` — rechazo con motivo (estado `REJECTED`)
- Endpoint `PUT /stores/:id/suspend` — suspensión temporal (estado `SUSPENDED`)
- Endpoint `GET /stores/my-store` — datos de la propia tienda (scope `store`)
- Endpoint `PUT /stores/:id` — edición de datos de tienda
- Notificación por email al cambiar estado de aprobación
- Registro en `audit_logs` de cada cambio de estado con usuario responsable y motivo

🖥️ **Frontend**
- Formulario de registro de tienda (multi-step):
  - Paso 1: Datos de empresa (nombre, RFC, dirección)
  - Paso 2: Puertos y tipos de servicio
  - Paso 3: Datos de contacto y documentos
- Dashboard del Superadmin para gestionar solicitudes pendientes
- Lista de tiendas con filtro por estado (pending, active, rejected, suspended)
- Modal de aprobación/rechazo con campo de motivo obligatorio para rechazo
- Panel "Mi Tienda" para que el propietario vea y edite sus datos

🗄️ **Migraciones**
- `008_stores_full`: ampliar tabla `stores` con campos de aprobación, documentos y estado
- `009_store_ports`: tabla pivot `store_ports` (store_id, port_id)
- `010_store_documents`: tabla `store_documents` (id, store_id, type, file_url, status)

✅ **Criterios de aceptación**
- Una tienda registrada aparece en estado `PENDING_APPROVAL` hasta que el Superadmin la aprueba
- Solo las tiendas en estado `ACTIVE` aparecen en el marketplace público
- El cambio de estado queda registrado en `audit_logs` con el id del Superadmin y timestamp
- La tienda recibe notificación de aprobación o rechazo
- El propietario puede editar datos básicos sin perder el estado de aprobación

🔗 **Dependencias:** Sprints 02, 03, 04

---

### Sprint 06 — Publicación de Servicios con Tarifas y SLAs

🎯 **Objetivo:** Permitir a las tiendas crear y publicar su catálogo de servicios con estructura de tarifas, SLAs y condiciones comerciales.

📋 **Backend**
- Crear módulo `ServicesModule`
- `POST /stores/:id/services` — crear servicio (requiere ser propietario de la tienda)
  - Campos: nombre, descripción, tipo de servicio (catálogo), unidad de cobro, precio base, moneda
  - SLA: tiempo máximo de respuesta a cotizaciones, tiempo estimado de entrega del servicio
  - Condiciones: mínimo de unidades, máximo por orden, restricciones de mercancía
- `PUT /stores/:id/services/:serviceId` — editar servicio
- `DELETE /stores/:id/services/:serviceId` — desactivar servicio (soft delete)
- `GET /stores/:id/services` — listar servicios publicados de una tienda
- Validar que el servicio pertenece a una tienda activa antes de publicarlo
- Registro en `audit_logs` al crear, editar o desactivar servicios

🖥️ **Frontend**
- Panel "Mis Servicios" en el dashboard de la tienda
- Formulario de creación de servicio con secciones:
  - Información general (nombre, descripción, tipo)
  - Tarifas (precio, moneda, unidad de cobro)
  - SLA (tiempos de respuesta y entrega)
  - Condiciones especiales (texto libre)
- Vista previa del servicio tal como lo verá el cliente
- Toggle de activar/desactivar servicio sin eliminarlo
- Indicador visual de estado (activo, inactivo, pendiente)

🗄️ **Migraciones**
- `011_services_full`: ampliar `store_services` con campos de tarifa, SLA y condiciones
- `012_service_pricing`: tabla `service_pricing_rules` para tarifas escalonadas opcionales

✅ **Criterios de aceptación**
- Una tienda puede crear múltiples servicios de distintos tipos
- El servicio aparece en la página pública de la tienda si está activo
- El SLA es visible para el cliente antes de solicitar cotización
- Solo el propietario o un Operador Interno puede editar o desactivar un servicio
- La desactivación de un servicio no afecta las órdenes activas que lo referencian

🔗 **Dependencias:** Sprints 03, 05

---

### Sprint 07 — Solicitud y Respuesta de Cotizaciones

🎯 **Objetivo:** Implementar el flujo de cotización: el cliente solicita una cotización sobre un servicio y la tienda la responde con precio final y condiciones.

📋 **Backend**
- Crear módulo `QuotationsModule`
- `POST /quotations` — crear solicitud de cotización (cliente)
  - Campos: store_id, service_id, descripción de la necesidad, cantidad, puerto de origen/destino, fecha requerida, documentos adjuntos opcionales
  - Estado inicial: `QUOTE_REQUESTED`
- `GET /quotations` — listar cotizaciones (scope por rol: `own` para cliente, `store` para tienda)
- `GET /quotations/:id` — detalle de cotización
- `POST /quotations/:id/respond` — respuesta de la tienda
  - Campos: precio total, desglose de costos, condiciones especiales, validez de la oferta (fecha expiración), archivos adjuntos
  - Estado: `QUOTE_RESPONDED`
- Validar que la tienda responde solo cotizaciones de sus propios servicios
- Notificación al cliente cuando la tienda responde

🖥️ **Frontend**
- Botón "Solicitar cotización" en el detalle del servicio
- Formulario de solicitud de cotización con campos dinámicos según tipo de servicio
- Panel "Mis Cotizaciones" para el cliente con estados visuales por color
- Panel "Cotizaciones recibidas" para la tienda con bandeja de entrada
- Vista de detalle de cotización con historial de mensajes (thread básico)
- Formulario de respuesta para la tienda con campo de desglose de costos

🗄️ **Migraciones**
- `013_quotations`: tabla `quotations` (id, client_id, store_id, service_id, status, description, quantity, port_origin_id, port_dest_id, required_date)
- `014_quotation_responses`: tabla `quotation_responses` (id, quotation_id, total_price, currency_id, breakdown, conditions, valid_until)
- `015_quotation_documents`: tabla `quotation_documents` (id, quotation_id, file_url, uploaded_by, type)

✅ **Criterios de aceptación**
- El cliente puede solicitar cotizaciones solo a tiendas activas
- La tienda ve únicamente las cotizaciones de sus propios servicios
- El cliente recibe notificación cuando la tienda responde
- El estado de la cotización cambia correctamente a `QUOTE_RESPONDED`
- Ambas partes pueden adjuntar archivos (PDF, imágenes)

🔗 **Dependencias:** Sprints 05, 06

---

### Sprint 08 — Aprobación y Rechazo de Cotizaciones

🎯 **Objetivo:** Completar el ciclo de cotización con la decisión del cliente: aprobar (convierte en orden) o rechazar con posibilidad de negociación.

📋 **Backend**
- `POST /quotations/:id/approve` — cliente aprueba la cotización
  - Estado: `QUOTE_APPROVED`
  - Dispara creación automática de borrador de orden de servicio (se desarrolla en Sprint 09)
- `POST /quotations/:id/reject` — cliente rechaza con motivo
  - Estado: `QUOTE_REJECTED`
- `POST /quotations/:id/request-revision` — cliente solicita ajuste con comentarios
  - Estado: `QUOTE_REVISION_REQUESTED`
- `POST /quotations/:id/counter-respond` — tienda responde a la revisión
  - Estado: vuelve a `QUOTE_RESPONDED`
- Validar que solo el cliente propietario de la cotización puede aprobarla o rechazarla
- Validar que la cotización no haya expirado (`valid_until`) antes de aprobar
- Registrar en `audit_logs` la aprobación con criticidad `HIGH`

🖥️ **Frontend**
- Botones de acción en la vista de cotización respondida: "Aprobar", "Rechazar", "Solicitar revisión"
- Modal de confirmación para aprobación con resumen de costos
- Modal de rechazo con campo de motivo obligatorio
- Formulario de solicitud de revisión con comentarios
- Timeline visual del ciclo de vida de la cotización
- Indicador de expiración de oferta con cuenta regresiva

✅ **Criterios de aceptación**
- Una cotización aprobada no puede ser modificada ni rechazada después
- Una cotización expirada (`valid_until` < fecha actual) retorna `422` al intentar aprobar
- El Audit Trail registra la aprobación con: usuario, IP, timestamp, valor anterior y nuevo del estado
- La tienda recibe notificación inmediata de la decisión del cliente
- El flujo de revisión puede iterarse hasta 3 veces antes de expirar automáticamente

🔗 **Dependencias:** Sprint 07

---

<a name="fase-3"></a>
## Fase 3 — Operaciones y Finanzas
> Convierte cotizaciones aprobadas en órdenes de servicio ejecutables, implementa el registro de pagos y activa el Audit Trail crítico que protegerá todos los eventos financieros y legales del sistema.

---

### Sprint 09 — Órdenes de Servicio

🎯 **Objetivo:** Implementar el módulo de órdenes de servicio: conversión desde cotización aprobada, gestión del ciclo de vida completo de la orden y visibilidad operativa para todas las partes.

📋 **Backend**
- Crear módulo `OrdersModule`
- Al aprobar una cotización (Sprint 08), crear automáticamente:
  - `service_orders`: id, quotation_id, client_id, store_id, service_id, status (`ORDER_CREATED`), total_amount, currency_id, created_at
- `GET /orders` — listar órdenes (scope por rol)
- `GET /orders/:id` — detalle completo con timeline de eventos
- `PUT /orders/:id/confirm` — tienda confirma recepción y acepta ejecutar (estado `ORDER_CONFIRMED`)
- `PUT /orders/:id/in-progress` — tienda marca inicio de ejecución (estado `IN_PROGRESS`)
- `PUT /orders/:id/complete` — tienda marca como completada (estado `COMPLETED`)
- `PUT /orders/:id/cancel` — cancelación con motivo (estados permitidos: solo antes de `IN_PROGRESS`)
- Implementar máquina de estados para transiciones válidas (rechazar transiciones inválidas con `422`)
- Endpoint `GET /orders/:id/timeline` — lista cronológica de todos los eventos de la orden

🖥️ **Frontend**
- Dashboard principal del cliente: lista de órdenes con estado, tienda y monto
- Dashboard de la tienda: órdenes pendientes de confirmar, en progreso y completadas
- Vista de detalle de orden con timeline vertical de eventos
- Botones de acción según estado actual y rol del usuario
- Filtros por estado, fecha y tienda en los dashboards
- Notificaciones en tiempo real de cambios de estado (polling cada 30s o WebSocket básico)

🗄️ **Migraciones**
- `016_service_orders`: tabla `service_orders`
- `017_order_events`: tabla `order_events` (id, order_id, event_type, description, user_id, created_at) — base del timeline

✅ **Criterios de aceptación**
- Una orden se crea automáticamente al aprobar la cotización sin intervención manual
- Las transiciones de estado inválidas (ej. `COMPLETED` → `IN_PROGRESS`) son rechazadas por el API
- El timeline de la orden muestra todos los cambios de estado con usuario y timestamp
- Una orden cancelada después de `IN_PROGRESS` retorna `422` con mensaje claro
- El Operador Interno puede ver todas las órdenes del sistema (scope `module`)

🔗 **Dependencias:** Sprint 08

---

### Sprint 10 — Registro de Pagos Manuales

🎯 **Objetivo:** Implementar el módulo de pagos manuales con carga de comprobantes, validación por parte del Operador y vinculación con órdenes de servicio.

📋 **Backend**
- Crear módulo `PaymentsModule`
- `POST /orders/:id/payments` — registrar pago (cliente)
  - Campos: monto, moneda, método de pago, referencia bancaria, fecha de pago, comprobante (archivo)
  - Estado inicial del pago: `PAYMENT_PENDING_VALIDATION`
  - Estado de la orden cambia a `PAYMENT_SUBMITTED`
- `PUT /payments/:id/validate` — Operador Interno valida el comprobante
  - Estado del pago: `PAYMENT_VALIDATED`
  - Estado de la orden: `PAYMENT_CONFIRMED`
- `PUT /payments/:id/reject` — Operador rechaza el comprobante con motivo
  - Estado del pago: `PAYMENT_REJECTED`
  - Estado de la orden: regresa a `ORDER_CONFIRMED`
- `GET /orders/:id/payments` — historial de pagos de una orden
- Soporte para pagos parciales (múltiples pagos hasta cubrir el total)
- Calcular saldo pendiente automáticamente

🖥️ **Frontend**
- Sección "Pagos" en la vista de detalle de orden
- Formulario de carga de comprobante con drag & drop de archivo
- Lista de pagos con estado visual por color y monto
- Indicador de saldo: "Pagado / Pendiente / Total"
- Panel del Operador Interno: bandeja de comprobantes pendientes de validar
- Modal de validación con vista previa del comprobante (PDF/imagen)
- Modal de rechazo con campo de motivo

🗄️ **Migraciones**
- `018_payments`: tabla `payments` (id, order_id, amount, currency_id, method, reference, receipt_url, status, validated_by, validated_at)

✅ **Criterios de aceptación**
- Un cliente puede registrar un pago solo sobre órdenes en estado `ORDER_CONFIRMED` o superior
- El comprobante (PDF o imagen) se almacena correctamente y es accesible para el Operador
- La validación del pago queda registrada en `audit_logs` con criticidad `CRITICAL`
- El rechazo de comprobante no elimina el registro; se conserva con estado `PAYMENT_REJECTED`
- El saldo pendiente se calcula correctamente con múltiples pagos parciales

🔗 **Dependencias:** Sprint 09

⚠️ **Riesgos**
- Definir el proveedor de almacenamiento de archivos (S3, GCS o local) antes de iniciar este sprint
- Validar tamaño máximo de archivos de comprobante (recomendado: 10 MB)

---

### Sprint 11 — Cálculo de Comisiones

🎯 **Objetivo:** Implementar el motor de cálculo de comisiones del marketplace, que descuenta automáticamente el porcentaje acordado del pago de cada tienda.

📋 **Backend**
- Crear módulo `CommissionsModule`
- Tabla de configuración de comisiones: porcentaje por tipo de servicio y/o tienda específica
- `POST /admin/commission-rules` — Superadmin define reglas de comisión
  - Por tipo de servicio (ej. almacenaje: 5%, transporte: 3%)
  - Por tienda específica (override individual)
  - Por rango de monto (comisión escalonada)
- Al validar un pago (`PAYMENT_VALIDATED`), calcular automáticamente:
  - Comisión del marketplace = monto pagado × tasa aplicable
  - Monto neto a transferir a la tienda = monto pagado − comisión
- Crear registro en tabla `commissions` con detalle del cálculo
- `GET /commissions` — reporte de comisiones (Superadmin ve todas; tienda ve las suyas)
- `GET /commissions/summary` — resumen por período con totales

🖥️ **Frontend**
- Panel de configuración de reglas de comisión (solo Superadmin)
- Tabla de reglas activas con posibilidad de editar porcentajes
- Sección "Comisiones" en el dashboard de la tienda con desglose por orden
- Reporte de comisiones del período con totales y gráfica básica
- Indicador en la orden: "Monto bruto / Comisión / Monto neto"

🗄️ **Migraciones**
- `019_commission_rules`: tabla `commission_rules` (id, service_type_id, store_id nullable, rate, min_amount, max_amount, active)
- `020_commissions`: tabla `commissions` (id, payment_id, order_id, gross_amount, rate_applied, commission_amount, net_amount, calculated_at)

✅ **Criterios de aceptación**
- La comisión se calcula automáticamente al validar cada pago sin intervención manual
- Si no existe regla específica para la tienda, se aplica la regla por tipo de servicio
- Si no existe regla por tipo de servicio, se aplica una tasa default configurable
- El cálculo es auditable: la tabla `commissions` registra la tasa exacta aplicada en el momento del cálculo
- El Superadmin puede cambiar tasas sin afectar comisiones ya calculadas (inmutables)

🔗 **Dependencias:** Sprints 03, 10

---

### Sprint 12 — Activación del Audit Trail Crítico

🎯 **Objetivo:** Activar y completar el sistema de trazabilidad inmutable para todos los eventos críticos del sistema. Este sprint es el punto de inflexión: **ninguna operación logística de las fases siguientes debe ejecutarse sin Audit Trail activo**.

📋 **Backend**
- Completar el módulo `AuditModule` con servicio transversal `AuditService`
- Implementar decorador `@Auditable(level, description)` para marcar endpoints críticos
- El `AuditService.log()` debe capturar:
  - `user_id`, `user_role`, `ip_address`, `user_agent`
  - `entity_type`, `entity_id` (qué objeto fue modificado)
  - `action` (CREATE, UPDATE, DELETE, STATE_CHANGE, LOGIN, LOGOUT, etc.)
  - `previous_value` (JSON snapshot antes del cambio)
  - `new_value` (JSON snapshot después del cambio)
  - `criticality` (LOW, MEDIUM, HIGH, CRITICAL)
  - `timestamp` (UTC, no modificable)
- Aplicar `@Auditable` en todos los endpoints críticos ya desarrollados:
  - Cambios de rol de usuario → `CRITICAL`
  - Aprobación/rechazo de cotizaciones → `HIGH`
  - Confirmación de pagos → `CRITICAL`
  - Validación de comprobantes → `CRITICAL`
  - Cambios de estado de órdenes → `MEDIUM` a `HIGH`
  - Login/logout → `LOW`
- Implementar política de retención: los registros de `audit_logs` son **inmutables** (sin endpoint de DELETE ni UPDATE)
- `GET /audit/logs` — consulta de logs (solo Auditor y Superadmin)
  - Filtros: usuario, entidad, nivel de criticidad, rango de fechas
  - Exportación a CSV
- Crear índices compuestos en `audit_logs` para búsquedas eficientes

🖥️ **Frontend**
- Panel de Auditoría (solo Auditor y Superadmin):
  - Tabla con filtros avanzados
  - Vista de detalle: diff visual entre `previous_value` y `new_value`
  - Exportación a CSV
- Badge de criticidad con código de color en cada registro

🗄️ **Migraciones**
- `021_audit_logs_full`: tabla `audit_logs` completa con todos los campos definidos + índices
- `022_audit_logs_partition`: configurar particionamiento por mes para escalabilidad futura

✅ **Criterios de aceptación**
- Cada evento crítico genera un registro en `audit_logs` dentro de la misma transacción de base de datos (no después, no en un job asíncrono)
- No existe endpoint para eliminar o modificar registros de `audit_logs`
- El Auditor puede consultar todos los logs pero no puede modificar ningún dato del sistema
- La búsqueda por entidad y rango de fechas retorna resultados en menos de 1 segundo
- La exportación CSV de 10,000 registros completa en menos de 30 segundos

🔗 **Dependencias:** Todos los sprints anteriores

⚠️ **Riesgos**
- Asegurarse de que el `AuditService` nunca lance excepciones que interrumpan la operación principal (usar try-catch interno)
- Considerar volumen de datos a largo plazo; el particionamiento es clave para rendimiento

---

<a name="fase-4"></a>
## Fase 4 — Logística Integrada TOS-WMS-AGD
> Implementa los tres módulos operativos centrales del sistema portuario: Terminal Operating System (TOS), Warehouse Management System (WMS) y el módulo de instrumentos financieros AGD.

---

### Sprint 13 — TOS: Gestión de Patios y Contenedores

🎯 **Objetivo:** Implementar el módulo TOS básico para gestión de patios de contenedores: registro, ubicación en patio, estado y búsqueda.

📋 **Backend**
- Crear módulo `TOSModule`
- Subentidad `Yard` (patio): nombre, puerto, capacidad total, zonas
- Subentidad `Container`: número de contenedor (formato ISO), tipo (20', 40', 45', reefer), estado, ubicación en patio (zona + fila + columna + altura), propietario (cliente o tienda), orden asociada
- `POST /tos/containers` — registrar contenedor
- `GET /tos/containers` — listar con filtros (estado, zona, cliente, orden)
- `GET /tos/containers/:id` — detalle con historial de movimientos
- `PUT /tos/containers/:id/move` — registrar reubicación dentro del patio
- `GET /tos/yards` — mapa de patio con ocupación por zona
- `GET /tos/yards/:id/map` — representación grid de la ubicación de contenedores
- Integrar con `AuditService` para registrar cada movimiento físico

🖥️ **Frontend**
- Vista de mapa del patio: grid visual con colores por estado de contenedor
- Panel de búsqueda y filtro de contenedores
- Formulario de registro de contenedor
- Modal de reubicación con selección de nueva posición en el grid
- Historial de movimientos del contenedor en timeline

🗄️ **Migraciones**
- `023_yards`: tabla `yards` (id, name, port_id, capacity, zones_config JSON)
- `024_containers`: tabla `containers` (id, iso_number, type, status, yard_id, zone, row, column, tier, order_id, client_id)
- `025_container_movements`: tabla `container_movements` (id, container_id, from_location, to_location, moved_by, reason, created_at)

✅ **Criterios de aceptación**
- El sistema valida el formato ISO del número de contenedor
- No se puede ubicar dos contenedores en la misma posición (zona+fila+columna+altura)
- Cada movimiento queda registrado en `audit_logs` con criticidad `MEDIUM`
- El mapa del patio refleja la ocupación actual en tiempo real (máximo 1 minuto de desfase)

🔗 **Dependencias:** Sprint 12

---

### Sprint 14 — TOS: Control de Garitas (Gate-in / Gate-out)

🎯 **Objetivo:** Implementar el control de entradas y salidas del terminal portuario con checklist de condición, registro fotográfico y validaciones de bloqueo.

📋 **Backend**
- `POST /tos/gate/in` — registro de Gate-in (entrada al terminal)
  - Campos: número de contenedor, placa del camión, nombre del conductor, inspector asignado, hora de entrada, fotos de condición, notas
  - Valida que el contenedor no tenga bloqueo AGD activo para entrada (contenedores pignorados no deben moverse)
  - Estado del contenedor cambia a `IN_YARD`
  - Dispara registro `CRITICAL` en `audit_logs`
- `POST /tos/gate/out` — registro de Gate-out (salida del terminal)
  - **Validación crítica:** consulta al módulo AGD si el contenedor tiene bloqueo activo → rechaza con `403` si lo tiene
  - Valida que la orden asociada esté en estado `COMPLETED` o `PAYMENT_CONFIRMED`
  - Estado del contenedor cambia a `EXITED`
  - Registra en `audit_logs` con criticidad `CRITICAL`
- `GET /tos/gate/log` — historial de entradas/salidas con filtros
- `GET /tos/gate/pending-exit` — contenedores listos para salir (sin bloqueos)

🖥️ **Frontend**
- Pantalla de control de garita (diseñada para tablet/desktop de operador)
- Formulario de Gate-in con captura de datos del vehículo y checklist fotográfico
- Formulario de Gate-out con validación visual de bloqueos (semáforo: verde = libre, rojo = bloqueado)
- Bitácora de entradas/salidas del día con exportación
- Indicador de contenedores en espera de salida

🗄️ **Migraciones**
- `026_gate_log`: tabla `gate_log` (id, container_id, type ENUM(in,out), truck_plate, driver_name, inspector_id, photos JSON, notes, created_at)

✅ **Criterios de aceptación**
- Un Gate-out de un contenedor con Bono de Prenda activo es **imposible**: el API retorna `403` con mensaje descriptivo
- El registro fotográfico acepta hasta 5 imágenes por movimiento
- Cada Gate-in y Gate-out genera un registro `CRITICAL` en `audit_logs` con snapshot completo
- El historial de garita es consultable por el cliente para ver el movimiento de su contenedor

🔗 **Dependencias:** Sprints 12, 13

⚠️ **Riesgos**
- La validación de bloqueos AGD debe ser una llamada síncrona dentro de la misma transacción; nunca asíncrona

---

### Sprint 15 — WMS: Recepción, Ubicación en Racks y Despachos

🎯 **Objetivo:** Implementar el módulo de gestión de almacén para mercancía en racks: recepción de productos, asignación de ubicaciones y registro de despachos.

📋 **Backend**
- Crear módulo `WMSModule`
- Subentidades: `Warehouse` (almacén), `Zone`, `Rack`, `Position`
- `POST /wms/receipts` — registrar recepción de mercancía
  - Campos: orden asociada, lista de ítems (SKU, descripción, cantidad, unidad, peso, volumen), condición al recibir, fotos
  - Genera ubicación sugerida automáticamente por tipo de mercancía y disponibilidad
- `PUT /wms/receipts/:id/locate` — confirmar ubicación física de la mercancía
- `GET /wms/inventory` — inventario actual con filtros por cliente, zona, SKU
- `POST /wms/dispatches` — registrar despacho de mercancía
  - **Validación crítica:** consultar módulo AGD — si existe Bono de Prenda activo sobre los ítems a despachar, rechazar con `403`
  - Descontar del inventario
  - Registrar en `audit_logs` con criticidad `CRITICAL`
- `GET /wms/inventory/:id/movements` — trazabilidad de movimientos por ítem

🖥️ **Frontend**
- Panel WMS con vista de almacén (racks y zonas)
- Formulario de recepción con tabla de ítems dinámica
- Mapa de racks con indicador de ocupación
- Pantalla de despacho con validación visual de bloqueos AGD
- Reporte de inventario con exportación CSV

🗄️ **Migraciones**
- `027_warehouses`: tablas `warehouses`, `wms_zones`, `racks`, `rack_positions`
- `028_inventory`: tabla `inventory_items` (id, order_id, sku, description, quantity, unit_id, weight, volume, position_id, client_id, status)
- `029_wms_movements`: tabla `wms_movements` (id, item_id, type ENUM(receipt,relocation,dispatch), from_position, to_position, quantity, user_id, created_at)

✅ **Criterios de aceptación**
- Un despacho con Bono de Prenda activo es bloqueado por el API con `403`
- La recepción descuenta la capacidad disponible de la posición en el rack
- Cada movimiento de inventario queda en `audit_logs` con criticidad `CRITICAL`
- El inventario de un cliente solo es visible para ese cliente y para el Operador Interno (scope correcto)

🔗 **Dependencias:** Sprints 12, 13

---

### Sprint 16 — AGD: Certificados de Depósito y Bonos de Prenda

🎯 **Objetivo:** Implementar el módulo AGD (Almacén General de Depósito) para la emisión de instrumentos financieros respaldados por mercancía: Certificados de Depósito y Bonos de Prenda, con los bloqueos lógicos que protegen la integridad del inventario.

📋 **Backend**
- Crear módulo `AGDModule`
- `POST /agd/certificates` — emitir Certificado de Depósito (CD)
  - Requiere: orden activa, inventario recibido y ubicado (WMS)
  - Genera folio único, valor declarado, descripción de la mercancía, fecha de emisión y vencimiento
  - Estado: `CD_ACTIVE`
  - Registra en `audit_logs` con criticidad `CRITICAL`
- `POST /agd/certificates/:id/pledge` — crear Bono de Prenda sobre el CD
  - Campos: institución financiera, monto del crédito, tasa de interés, fecha de vencimiento del bono
  - **Activa bloqueo lógico:** marca los ítems de inventario en WMS y el contenedor en TOS como `PLEDGED`
  - Estado CD: `CD_PLEDGED`
  - Registra en `audit_logs` con criticidad `CRITICAL`
- `POST /agd/pledges/:id/release` — liberar Bono de Prenda
  - Requiere confirmación de pago del crédito
  - **Desactiva el bloqueo lógico** en WMS y TOS
  - Estado CD: vuelve a `CD_ACTIVE`
  - Registra en `audit_logs` con criticidad `CRITICAL`
- `GET /agd/certificates` — listar CDs (filtro por estado, cliente, orden)
- `GET /agd/certificates/:id` — detalle con estado del bloqueo
- Endpoint interno `GET /agd/check-block/:entityType/:entityId` — consultado por TOS y WMS antes de permitir Gate-out o despacho

🖥️ **Frontend**
- Panel AGD en el dashboard del Operador Interno y Superadmin
- Formulario de emisión de Certificado de Depósito
- Formulario de creación de Bono de Prenda con datos de la institución financiera
- Vista de CD activos con indicador de bloqueo (candado visual)
- Botón de liberación con confirmación y registro de evidencia de pago del crédito
- Historial de instrumentos por cliente y orden

🗄️ **Migraciones**
- `030_agd_certificates`: tabla `certificates_of_deposit` (id, order_id, client_id, folio, declared_value, currency_id, description, issued_at, expires_at, status)
- `031_agd_pledges`: tabla `pledge_bonds` (id, certificate_id, financial_institution, credit_amount, interest_rate, expires_at, status, released_at, released_by)
- `032_agd_blocks`: tabla `logical_blocks` (id, entity_type ENUM(container,inventory_item), entity_id, pledge_bond_id, created_at, released_at)

✅ **Criterios de aceptación**
- La emisión de un CD solo es posible si los ítems del inventario están ubicados en WMS
- Al crear un Bono de Prenda, los ítems correspondientes cambian a estado `PLEDGED` inmediatamente
- El endpoint `/agd/check-block` retorna respuesta en menos de 100ms (es consultado síncronamente)
- La liberación del bono registra quién la autorizó, cuándo y qué evidencia de pago se cargó
- Todo el ciclo (emisión → pignoración → liberación) es completamente trazable en `audit_logs`

🔗 **Dependencias:** Sprints 12, 14, 15

⚠️ **Riesgos**
- Este módulo tiene implicaciones legales; validar el formato y los campos del CD con el equipo legal antes de finalizar el sprint

---

### Sprint 17 — Transporte e Inspecciones

🎯 **Objetivo:** Implementar la gestión de viajes de transporte con prueba de entrega (POD) y el módulo de checklists de inspección de calidad para mercancía y contenedores.

📋 **Backend**
- Crear módulo `TransportModule`
- `POST /transport/trips` — crear viaje (asignado a Transportista)
  - Campos: orden asociada, origen, destino, vehículo, conductor, fecha programada, tipo de carga
- `PUT /transport/trips/:id/start` — iniciar viaje (GPS tracking opcional)
- `PUT /transport/trips/:id/pod` — cargar Prueba de Entrega (POD)
  - Campos: firma del receptor, fotos de entrega, observaciones, timestamp real de entrega
  - Estado del viaje: `DELIVERED`
  - Actualiza estado de la orden según configuración
- `GET /transport/trips` — listado con filtros por estado y fecha

- Crear módulo `InspectionsModule`
- `POST /inspections/checklists` — crear checklist de inspección (Inspector)
  - Vinculado a: orden, contenedor o lote de inventario
  - Preguntas configurables por tipo de inspección (carga general, reefer, peligrosa, etc.)
- `PUT /inspections/checklists/:id/complete` — completar checklist con respuestas y fotos
- `GET /inspections/checklists` — historial de inspecciones por orden/contenedor

🖥️ **Frontend**
- Panel del Transportista: viajes asignados, activos y completados
- Formulario de POD con captura de firma digital y fotos
- Panel del Inspector: checklists pendientes y completados
- Formulario de checklist con preguntas dinámicas y campo de foto por pregunta
- Vista de historial de inspecciones en el detalle de la orden

🗄️ **Migraciones**
- `033_trips`: tabla `trips` (id, order_id, driver_id, origin, destination, vehicle, scheduled_at, status, pod_url, delivered_at)
- `034_inspection_templates`: tabla `inspection_templates` (id, name, type, questions JSON)
- `035_inspection_checklists`: tabla `inspection_checklists` (id, template_id, order_id, container_id, inspector_id, answers JSON, photos JSON, completed_at, result ENUM(pass,fail,conditional))

✅ **Criterios de aceptación**
- El Transportista solo puede ver y gestionar los viajes que le han sido asignados (scope `assigned`)
- El POD incluye timestamp inmutable de entrega registrado en `audit_logs`
- Un checklist de inspección fallido (resultado `fail`) notifica automáticamente al Operador Interno
- El Inspector solo puede completar inspecciones asignadas a su perfil

🔗 **Dependencias:** Sprints 09, 12

---

<a name="fase-5"></a>
## Fase 5 — Inteligencia y Soporte
> Agrega la capa de visibilidad analítica con dashboards personalizados, reportes financieros exportables y un sistema de tickets de soporte.

---

### Sprint 18 — Dashboards Personalizados por Perfil

🎯 **Objetivo:** Implementar dashboards operativos y financieros adaptados a cada perfil de usuario, con métricas relevantes en tiempo real.

📋 **Backend**
- Crear módulo `DashboardModule`
- Endpoint `GET /dashboard` — retorna métricas según el rol del usuario autenticado
- **Cliente Final:** órdenes activas, pagos pendientes, cotizaciones en proceso, saldo de comisiones
- **Tienda Logística:** órdenes por estado (KPI), cotizaciones por responder, ingresos del mes, comisiones descontadas
- **Superadmin:** volumen total de órdenes, ingresos del marketplace, comisiones cobradas, tiendas activas/pendientes, usuarios registrados
- **Operador Interno:** comprobantes pendientes de validar, inspecciones pendientes, Gate-outs pendientes, alertas de bloqueos AGD
- **Auditor:** últimos eventos críticos en `audit_logs`, anomalías (múltiples intentos de login, cambios de rol)
- Optimizar queries con vistas materializadas o queries pre-calculadas para evitar carga en tiempo real

🖥️ **Frontend**
- Dashboard dinámico que carga el layout correcto según el rol del usuario
- Tarjetas de KPI con número, tendencia y sparkline
- Gráfica de barras de órdenes por mes (últimos 6 meses)
- Gráfica de donut de distribución de estados de órdenes
- Tabla de las últimas 5 actividades relevantes para el perfil
- Indicadores de alertas pendientes con acceso rápido a la acción

✅ **Criterios de aceptación**
- El dashboard carga en menos de 2 segundos con datos reales
- Cada perfil ve únicamente las métricas de su scope (un Cliente no ve datos de otras cuentas)
- Las alertas del Operador Interno (comprobantes pendientes) muestran el número exacto de ítems

🔗 **Dependencias:** Todos los módulos de Fases 1–4

---

### Sprint 19 — Reportes Financieros Exportables

🎯 **Objetivo:** Implementar reportes financieros descargables en CSV para los distintos perfiles, cubriendo ingresos, comisiones, pagos y órdenes por período.

📋 **Backend**
- Crear módulo `ReportsModule`
- Reportes disponibles y sus filtros:
  - **Reporte de órdenes:** filtro por estado, tienda, cliente, rango de fechas → CSV
  - **Reporte de pagos:** validados/pendientes/rechazados, por período → CSV
  - **Reporte de comisiones:** por tienda, por tipo de servicio, por período → CSV
  - **Reporte de inventario WMS:** stock actual por cliente, por almacén → CSV
  - **Reporte de movimientos TOS:** Gate-in/out por período, por contenedor → CSV
  - **Reporte de Audit Trail:** eventos por nivel de criticidad, por usuario → CSV (solo Auditor/Superadmin)
- Implementar generación asíncrona para reportes grandes (> 10,000 filas): job en cola + notificación por email con link de descarga
- `POST /reports/generate` — solicitar generación de reporte
- `GET /reports/:jobId/status` — estado del job
- `GET /reports/:jobId/download` — descargar archivo generado (URL firmada, válida 24h)

🖥️ **Frontend**
- Sección "Reportes" en el menú lateral de cada perfil
- Formulario de configuración de reporte: tipo, filtros y formato
- Historial de reportes generados con estado (procesando / listo / expirado) y botón de descarga
- Para reportes pequeños: descarga inmediata inline
- Para reportes grandes: indicador de progreso y notificación cuando esté listo

✅ **Criterios de aceptación**
- Un reporte de hasta 1,000 filas se genera y descarga en menos de 5 segundos
- Un reporte grande (> 10,000 filas) se procesa en background y el usuario recibe email cuando está listo
- Los archivos CSV incluyen cabecera con nombres de columna legibles, no nombres de campo técnicos
- Los links de descarga expiran a las 24 horas por seguridad

🔗 **Dependencias:** Fases 1–4

---

### Sprint 20 — Sistema de Tickets de Soporte

🎯 **Objetivo:** Implementar un sistema de tickets interno para que clientes y tiendas reporten problemas y reciban atención del Operador Interno o Superadmin.

📋 **Backend**
- Crear módulo `SupportModule`
- `POST /support/tickets` — crear ticket (Cliente o Tienda)
  - Campos: título, descripción, categoría (pago, cotización, orden, técnico, otro), prioridad, archivos adjuntos, referencia a orden/cotización opcional
  - Estado inicial: `TICKET_OPEN`
- `PUT /support/tickets/:id/assign` — Operador Interno o Superadmin se asigna el ticket
- `POST /support/tickets/:id/messages` — agregar mensaje al hilo (todas las partes)
- `PUT /support/tickets/:id/resolve` — marcar como resuelto con nota de resolución
- `PUT /support/tickets/:id/close` — cerrar ticket (cliente confirma resolución)
- `PUT /support/tickets/:id/reopen` — reabrir si el problema persiste
- `GET /support/tickets` — listar tickets (scope por rol)
- Notificaciones por email en cada cambio de estado y mensaje nuevo

🖥️ **Frontend**
- Botón "Crear ticket" accesible desde cualquier pantalla del sistema
- Lista de tickets del usuario con estado visual por color y tiempo transcurrido
- Vista de detalle: hilo de mensajes estilo chat con adjuntos
- Panel de soporte para Operador Interno: cola de tickets por prioridad y estado
- Filtros: por categoría, prioridad, estado, asignado a

🗄️ **Migraciones**
- `036_support_tickets`: tabla `support_tickets` (id, created_by, assigned_to, category, priority, status, title, order_id nullable)
- `037_ticket_messages`: tabla `ticket_messages` (id, ticket_id, sender_id, message, attachments JSON, created_at)

✅ **Criterios de aceptación**
- Un cliente puede crear un ticket y recibe acuse de recibo por email
- El cliente solo puede ver sus propios tickets; el Operador ve todos
- El hilo de mensajes se actualiza en tiempo real (polling cada 15s)
- Los tickets resueltos sin reabrir en 72 horas se cierran automáticamente

🔗 **Dependencias:** Sprints 02, 09

---

<a name="fase-6"></a>
## Fase 6 — Cierre y Hardening
> Asegura la calidad integral del producto, documenta la API y prepara la demostración final del MVP para stakeholders.

---

### Sprint 21 — QA Integral y Corrección de Bugs

🎯 **Objetivo:** Ejecutar un ciclo completo de QA sobre todos los módulos desarrollados: pruebas end-to-end de los flujos críticos, pruebas de regresión, corrección de bugs y mejoras de rendimiento.

📋 **Actividades**

**Testing automatizado**
- Completar cobertura de pruebas unitarias a mínimo 80% en módulos críticos (Auth, Orders, Payments, AGD)
- Implementar pruebas de integración para los flujos completos:
  - Flujo 1: Registro de tienda → publicación de servicio → cotización → aprobación → orden → pago → validación
  - Flujo 2: Gate-in → recepción WMS → emisión CD → creación Bono de Prenda → bloqueo → intento de Gate-out (debe fallar) → liberación → Gate-out exitoso
  - Flujo 3: Creación de viaje → POD → completar orden
- Pruebas de carga: simular 100 usuarios concurrentes en el flujo de cotizaciones

**Testing manual**
- Recorrer todos los flujos por cada uno de los 9 perfiles de usuario
- Verificar que los scopes de datos son correctos (un cliente no puede ver datos de otro)
- Verificar bloqueos AGD en TOS y WMS bajo escenarios reales
- Pruebas de seguridad básicas: inyección SQL, XSS, acceso a endpoints sin autenticación

**Correcciones**
- Clasificar bugs encontrados por severidad (crítico, mayor, menor)
- Resolver todos los bugs críticos y mayores antes de cerrar el sprint
- Documentar bugs menores para backlog post-MVP

✅ **Criterios de aceptación**
- Los 3 flujos de integración pasan de forma automatizada sin errores
- Cobertura de tests unitarios ≥ 80% en módulos Auth, Orders, Payments, AGD
- Cero bugs de severidad crítica o mayor al cerrar el sprint
- Todos los endpoints protegidos retornan `401` sin JWT y `403` con JWT de rol incorrecto

🔗 **Dependencias:** Todos los sprints anteriores

---

### Sprint 22 — Documentación Swagger y Preparación de Demo

🎯 **Objetivo:** Completar la documentación Swagger de toda la API, crear los datos de demostración y preparar el entorno de demo para la presentación del MVP.

📋 **Documentación API (Swagger/OpenAPI)**
- Decorar con `@ApiTags`, `@ApiOperation`, `@ApiResponse` y `@ApiBearerAuth` todos los endpoints de:
  - AuthModule, UsersModule, CatalogsModule
  - StoresModule, ServicesModule, QuotationsModule
  - OrdersModule, PaymentsModule, CommissionsModule
  - TOSModule, WMSModule, AGDModule
  - TransportModule, InspectionsModule
  - DashboardModule, ReportsModule, SupportModule, AuditModule
- Documentar todos los DTOs de request y response con `@ApiProperty` y ejemplos reales
- Documentar los códigos de error con descripción de cuándo ocurren
- Publicar Swagger UI en `/api/docs` (solo accesible en entornos no-producción)
- Exportar el archivo `openapi.json` como artefacto del repositorio

📋 **Datos de demo**
- Script de seed completo para el entorno de demo que crea:
  - 1 cuenta Superadmin + 1 Auditor + 2 Operadores
  - 3 tiendas logísticas activas con al menos 3 servicios cada una
  - 2 cuentas de Cliente con historial de cotizaciones y órdenes en distintos estados
  - 1 orden completa: desde cotización hasta Gate-out con todos los documentos
  - 1 orden con Bono de Prenda activo (para demostrar el bloqueo)
  - 1 ticket de soporte abierto y 1 resuelto

📋 **Preparación del entorno de demo**
- Configurar ambiente de staging estable con datos de demo precargados
- Script de reset del ambiente de demo para poder reiniciar la presentación
- Revisión final de la UI: consistencia visual, mensajes de error amigables, estados vacíos

✅ **Criterios de aceptación**
- Swagger UI está accesible y documenta el 100% de los endpoints con ejemplos reales
- El script de seed corre en menos de 2 minutos y genera todos los datos necesarios
- El ambiente de demo es estable y puede reiniciarse con un solo comando
- Todos los flujos de la demo funcionan sin errores con los datos de seed

🔗 **Dependencias:** Sprint 21

---

### Sprint 23 — Demo Final del MVP

🎯 **Objetivo:** Ejecutar la presentación formal del MVP a stakeholders, recopilar feedback y documentar el plan de iteraciones post-MVP.

📋 **Actividades**

**Preparación de la presentación**
- Crear guión de demo de 30-45 minutos cubriendo:
  - Visión del producto y propuesta de valor
  - Demo en vivo: flujo cliente → cotización → orden → pago (Tienda y Cliente)
  - Demo del módulo TOS: Gate-in y Gate-out con bloqueo AGD
  - Demo del módulo WMS: recepción y despacho
  - Demo del módulo AGD: emisión de CD y Bono de Prenda
  - Panel de Auditoría: mostrar trazabilidad completa de una orden
  - Dashboard del Superadmin: métricas del sistema
- Preparar presentación de diapositivas de arquitectura técnica
- Preparar documento de roadmap post-MVP

**Durante la demo**
- Ejecutar los flujos con datos de seed del Sprint 22
- Documentar preguntas y feedback de los stakeholders en tiempo real

**Post-demo**
- Recopilar y priorizar el feedback recibido
- Crear backlog de mejoras Fase 7+ basado en el feedback
- Documentar decisiones de arquitectura y deuda técnica conocida
- Entregar el repositorio con README completo, instrucciones de instalación y variables de entorno documentadas

✅ **Criterios de aceptación**
- La demo se ejecuta sin interrupciones técnicas durante los flujos principales
- El documento de roadmap post-MVP está entregado al finalizar el sprint
- El repositorio tiene un README completo que permite a un nuevo desarrollador levantar el proyecto en menos de 30 minutos
- Toda la deuda técnica conocida está registrada como issues en el repositorio con etiquetas de prioridad

🔗 **Dependencias:** Sprint 22

---

## Resumen ejecutivo

| Fase | Sprints | Duración estimada | Entregables clave |
|------|---------|-------------------|-------------------|
| 1 — Fundaciones | 01–03 | 6 semanas | Auth JWT, RBAC, catálogos |
| 2 — Marketplace | 04–08 | 10 semanas | Búsqueda, tiendas, cotizaciones |
| 3 — Operaciones | 09–12 | 8 semanas | Órdenes, pagos, comisiones, Audit Trail |
| 4 — TOS-WMS-AGD | 13–17 | 10 semanas | Patios, garitas, almacén, instrumentos financieros |
| 5 — Inteligencia | 18–20 | 6 semanas | Dashboards, reportes, soporte |
| 6 — Cierre | 21–23 | 6 semanas | QA, Swagger, Demo MVP |
| **Total** | **23 sprints** | **~46 semanas** | **MVP completo listo para producción** |

---

## Stack tecnológico de referencia

| Capa | Tecnología |
|------|-----------|
| Backend | NestJS (TypeScript) |
| Frontend | React + Vite + TypeScript + Tailwind CSS |
| Base de datos | MySQL 8 con TypeORM |
| Autenticación | JWT (access + refresh tokens) |
| Almacenamiento de archivos | AWS S3 / GCS (a definir) |
| Documentación API | Swagger / OpenAPI 3.0 |
| CI/CD | GitHub Actions |
| Infraestructura | Docker + docker-compose (dev) |

---

*Documento generado para el Marketplace Logístico Antigravity — Arquitectura TOS-WMS-AGD*  
*Todos los sprints tienen duración estimada de 2 semanas. Las fechas exactas dependen del tamaño del equipo.*
