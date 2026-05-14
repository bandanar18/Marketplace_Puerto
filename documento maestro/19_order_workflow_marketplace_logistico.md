# 19_ORDER_WORKFLOW.md

# Documento Maestro del Flujo de Órdenes de Servicio
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `19_ORDER_WORKFLOW.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Órdenes de servicio |
| Módulos relacionados | Cotizaciones, servicios, tiendas, documentos, pagos, comisiones, TOS, transporte, almacenamiento, inspecciones, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md` |

---

## 2. Propósito del documento

Este documento define el **flujo maestro de órdenes de servicio** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como guía para que Antigravity implemente el ciclo completo de una orden generada desde una cotización aprobada, incluyendo creación, ejecución, documentos, pagos, comisiones, tareas, evidencias, cierre, cancelación, auditoría, notificaciones y reportes.

La orden de servicio representa el núcleo operativo posterior a la aprobación de una cotización y conecta:

1. Cliente final.
2. Tienda logística.
3. Servicio contratado.
4. Cotización origen.
5. Documentos requeridos.
6. Tareas operativas.
7. Pagos.
8. Comisiones.
9. Evidencias.
10. TOS básico.
11. Transporte.
12. Almacenamiento.
13. Inspecciones.
14. Auditoría.
15. Reportes.

---

## 3. Objetivo general

Diseñar e implementar un flujo de órdenes de servicio seguro, trazable, auditable y escalable, que permita transformar una cotización aprobada en una operación logística ejecutable, con control de estados, documentación, pagos, evidencias, tareas y cierre operativo.

---

## 4. Objetivos específicos

1. Definir el ciclo de vida de una orden.
2. Definir estados operativos, financieros y documentales.
3. Definir transiciones válidas de estado.
4. Definir actores participantes.
5. Definir reglas de negocio.
6. Definir datos mínimos de una orden.
7. Definir tareas operativas.
8. Definir documentos requeridos.
9. Definir evidencias de ejecución.
10. Definir interacción con pagos.
11. Definir interacción con comisiones.
12. Definir interacción con TOS, transporte, almacenamiento e inspecciones.
13. Definir endpoints Nest.js.
14. Definir componentes React.js.
15. Definir permisos RBAC y scopes.
16. Definir auditoría y notificaciones.
17. Definir reportes y métricas.
18. Definir casos de error.
19. Definir pruebas funcionales y técnicas.
20. Servir como prompt para Antigravity.

---

## 5. Alcance del flujo de órdenes MVP

El MVP debe cubrir el siguiente flujo principal:

```txt
Cotización aprobada
  ↓
Conversión a orden
  ↓
Orden creada
  ↓
Carga y validación documental
  ↓
Registro y confirmación de pago
  ↓
Inicio operativo
  ↓
Ejecución del servicio
  ↓
Carga de evidencias
  ↓
Cierre de orden
  ↓
Review del cliente
  ↓
Reporte y auditoría
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Órdenes multi-proveedor consolidadas.
2. Split de pagos automático por proveedor.
3. Facturación fiscal automática.
4. Conciliación bancaria automática.
5. Integración con pasarela de pago real.
6. Integración directa con Odoo.
7. Integración directa con sistemas aduaneros oficiales.
8. Integración directa con navieras o terminales.
9. Motor avanzado de rutas y GPS.
10. EDI portuario.
11. Optimización automática de patio.
12. Firma electrónica avanzada.
13. Workflow BPM configurable por usuario.
14. Reglas fiscales avanzadas.
15. Liquidación financiera real a proveedores.

---

## 7. Principios funcionales del flujo

Antigravity debe respetar los siguientes principios:

1. Una orden debe nacer desde una cotización aprobada.
2. No debe existir más de una orden para la misma cotización, salvo regla futura explícita.
3. La orden debe conservar los montos aprobados en la cotización.
4. La orden debe asociarse a cliente, tienda y servicio.
5. El cliente solo ve sus órdenes.
6. La tienda solo ve órdenes de sus servicios.
7. El superadministrador puede ver todas las órdenes.
8. El auditor puede consultar órdenes sin modificarlas.
9. Los estados operativos deben validarse en backend.
10. Los estados financieros deben depender del flujo de pagos.
11. Los estados documentales deben depender del flujo documental.
12. El cierre de orden debe requerir condiciones mínimas.
13. Toda transición crítica debe generar auditoría.
14. Los documentos y evidencias deben quedar vinculados a la orden.
15. Las comisiones deben calcularse en backend.
16. El frontend no debe ser fuente de verdad para reglas críticas.

---

## 8. Actores del flujo

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta orden, carga documentos, registra pago, valida avance, deja review |
| Tienda logística | `PROF-TIE-002` | Ejecuta servicio, actualiza estado, carga evidencias, cierra tareas |
| Agente aduanal | `PROF-ADU-007` | Ejecuta órdenes aduanales si opera como tienda |
| Transportista | `PROF-TRA-006` | Ejecuta órdenes de transporte y entrega |
| Inspector | `PROF-INS-005` | Ejecuta inspecciones relacionadas con la orden |
| Operador interno | `PROF-OPE-004` | Supervisa, valida documentos o apoya ejecución operativa |
| Superadministrador | `PROF-SUP-003` | Supervisa, corrige casos excepcionales, audita y reporta |
| Auditor | `PROF-AUD-008` | Consulta orden, documentos, pagos, comisiones y logs |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias relacionadas con la orden |

---

## 9. Tipos de estados de una orden

La orden debe controlar tres dimensiones de estado:

1. **Estado operativo:** avance real del servicio.
2. **Estado financiero:** situación de pago.
3. **Estado documental:** situación de documentos y evidencias.

Esta separación evita que una orden se considere cerrada solo porque fue pagada o solo porque tiene documentos cargados.

---

## 10. Estados operativos de orden

| Estado | Código | Descripción | Responsable típico |
|---|---|---|---|
| Creada | `CREATED` | Orden generada desde cotización aprobada | Sistema |
| En proceso | `IN_PROCESS` | Orden en preparación operativa | Tienda / operador |
| Pendiente de documentos | `PENDING_DOCUMENTS` | Faltan documentos requeridos | Cliente / tienda |
| Pendiente de pago | `PENDING_PAYMENT` | Falta pago o confirmación | Cliente / admin |
| En ejecución | `EXECUTING` | Servicio en ejecución | Tienda / operador |
| En espera | `ON_HOLD` | Orden detenida por observación o bloqueo | Tienda / operador / admin |
| Cerrada | `CLOSED` | Servicio completado y validado | Tienda / admin |
| Cancelada | `CANCELLED` | Orden cancelada | Cliente / tienda / admin |

---

## 11. Estados financieros de orden

| Estado | Código | Descripción |
|---|---|---|
| No pagado | `UNPAID` | No existe pago registrado |
| Pendiente | `PENDING` | Pago pendiente de envío o revisión |
| Enviado | `SUBMITTED` | Comprobante cargado o pago registrado |
| Confirmado | `CONFIRMED` | Pago confirmado |
| Rechazado | `REJECTED` | Pago rechazado |
| Parcial | `PARTIAL` | Pago parcial registrado |
| Reembolsado | `REFUNDED` | Pago devuelto total o parcialmente |

---

## 12. Estados documentales de orden

| Estado | Código | Descripción |
|---|---|---|
| Pendiente | `PENDING` | Documentos requeridos no cargados |
| Parcial | `PARTIAL` | Algunos documentos fueron cargados |
| En revisión | `IN_REVIEW` | Documentos en revisión |
| Validado | `VALIDATED` | Documentos requeridos validados |
| Rechazado | `REJECTED` | Uno o más documentos rechazados |
| Vencido | `EXPIRED` | Documento vencido o no vigente |

---

## 13. Transiciones operativas válidas

```txt
CREATED → PENDING_DOCUMENTS
CREATED → PENDING_PAYMENT
CREATED → IN_PROCESS
PENDING_DOCUMENTS → IN_PROCESS
PENDING_PAYMENT → IN_PROCESS
IN_PROCESS → EXECUTING
IN_PROCESS → ON_HOLD
EXECUTING → ON_HOLD
ON_HOLD → IN_PROCESS
ON_HOLD → EXECUTING
EXECUTING → CLOSED
CREATED → CANCELLED
PENDING_DOCUMENTS → CANCELLED
PENDING_PAYMENT → CANCELLED
IN_PROCESS → CANCELLED
ON_HOLD → CANCELLED
```

---

## 14. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `CREATED` | `CLOSED` | Debe existir ejecución y validaciones mínimas |
| `PENDING_DOCUMENTS` | `CLOSED` | Faltan documentos requeridos |
| `PENDING_PAYMENT` | `CLOSED` | Falta confirmación financiera si la regla lo exige |
| `CANCELLED` | `EXECUTING` | Orden cancelada no puede reactivarse sin proceso especial |
| `CLOSED` | `EXECUTING` | Orden cerrada no debe reabrirse sin autorización especial |
| `CLOSED` | `CANCELLED` | Cierre histórico no debe cancelarse directamente |
| `CANCELLED` | `CLOSED` | Orden cancelada no puede cerrarse |

---

## 15. Diagrama textual del flujo principal

```txt
[Quotation APPROVED]
        ↓
[Create Order]
        ↓
[CREATED]
        ↓
 ┌───────────────────────┬───────────────────────┐
 ↓                       ↓                       ↓
[PENDING_DOCUMENTS]   [PENDING_PAYMENT]       [IN_PROCESS]
        ↓                       ↓                       ↓
        └──────────────→ [IN_PROCESS] ←───────────────┘
                                ↓
                          [EXECUTING]
                                ↓
                            [CLOSED]
```

Flujo alterno:

```txt
CREATED / IN_PROCESS / EXECUTING
        ↓
     [ON_HOLD]
        ↓
IN_PROCESS / EXECUTING / CANCELLED
```

---

## 16. Datos mínimos de una orden

| Campo | Descripción | Obligatorio |
|---|---|---|
| `order_code` | Código único de orden | Sí |
| `quotation_id` | Cotización origen | Sí en MVP |
| `customer_id` | Cliente | Sí |
| `store_id` | Tienda proveedora | Sí |
| `service_id` | Servicio contratado | Sí |
| `subtotal_amount` | Subtotal aprobado | Sí |
| `tax_amount` | Impuesto si aplica | No |
| `commission_amount` | Comisión marketplace | Sí si aplica |
| `total_amount` | Total de la orden | Sí |
| `provider_net_amount` | Monto neto proveedor | Sí si aplica |
| `currency_code` | Moneda | Sí |
| `operational_status` | Estado operativo | Sí |
| `financial_status` | Estado financiero | Sí |
| `document_status` | Estado documental | Sí |
| `started_at` | Fecha de inicio | No |
| `closed_at` | Fecha de cierre | No |
| `cancelled_at` | Fecha de cancelación | No |
| `created_at` | Fecha de creación | Sí |
| `updated_at` | Fecha de actualización | Sí |

---

## 17. Tablas MySQL relacionadas

| Tabla | Uso en el flujo |
|---|---|
| `orders` | Registro principal de la orden |
| `order_lines` | Servicios y costos aprobados |
| `order_tasks` | Tareas operativas |
| `order_events` | Timeline de eventos de orden |
| `quotations` | Cotización origen |
| `quotation_lines` | Fuente de líneas iniciales |
| `services` | Servicio contratado |
| `stores` | Tienda proveedora |
| `users` | Cliente, proveedor, operador, auditor |
| `documents` | Documentos vinculados a orden |
| `document_validations` | Validación documental |
| `evidences` | Evidencias de ejecución |
| `payments` | Pagos asociados |
| `payment_receipts` | Comprobantes |
| `commission_rules` | Reglas de comisión |
| `commissions` | Comisión calculada de la orden |
| `tos_containers` | Contenedores vinculados si aplica |
| `trips` | Viajes de transporte si aplica |
| `inventory_items` | Mercancía en almacén si aplica |
| `inspections` | Inspecciones vinculadas |
| `reviews` | Review posterior al cierre |
| `notifications` | Notificaciones del flujo |
| `audit_logs` | Auditoría crítica |

---

## 18. Modelo de tabla `orders`

Campos principales definidos en `12_DATABASE_MASTER_SCHEMA.md`:

```txt
id
uuid
order_code
quotation_id
customer_id
store_id
service_id
subtotal_amount
tax_amount
commission_amount
total_amount
provider_net_amount
currency_code
operational_status
financial_status
document_status
started_at
closed_at
cancelled_at
created_at
updated_at
deleted_at
```

---

## 19. Modelo de tabla `order_lines`

Uso recomendado:

1. Congelar el servicio y precio aprobado.
2. Permitir costos complementarios futuros.
3. Evitar dependencia de cambios posteriores en `services`.

Campos principales:

```txt
id
order_id
service_id
description
quantity
unit_measure
unit_price
subtotal_amount
status
```

---

## 20. Modelo de tabla `order_tasks`

Uso recomendado:

1. Dividir la orden en actividades operativas.
2. Asignar responsables.
3. Controlar fechas y cumplimiento.
4. Permitir seguimiento desde dashboard.

Campos principales:

```txt
id
order_id
task_code
task_name
assigned_to
due_date
status
completed_at
created_at
updated_at
```

Estados sugeridos:

```txt
PENDING
IN_PROGRESS
COMPLETED
CANCELLED
```

---

## 21. Modelo de tabla `order_events`

Uso recomendado:

1. Construir timeline operativo.
2. Mostrar eventos al cliente y tienda.
3. Registrar cambios importantes no necesariamente críticos.

Campos principales:

```txt
id
order_id
event_code
event_name
event_description
event_status
created_by
created_at
```

---

## 22. Creación de orden desde cotización

### 22.1 Precondiciones

1. Cotización existe.
2. Cotización está en estado `APPROVED`.
3. No existe orden previa para esa cotización.
4. Cliente está activo.
5. Tienda está activa y aprobada.
6. Servicio no está inactivo.
7. Montos de cotización están definidos.
8. Moneda está activa.
9. Usuario o sistema tiene permiso para convertir.

### 22.2 Acción

Se ejecuta:

```txt
POST /quotations/:id/convert-to-order
```

### 22.3 Resultado

Se crea una orden en estado inicial:

```txt
operational_status = CREATED
financial_status = UNPAID
document_status = PENDING
```

### 22.4 Efectos automáticos

1. Crear `orders`.
2. Crear `order_lines` desde `quotation_lines`.
3. Copiar o vincular documentos de cotización si existen.
4. Crear tareas iniciales según tipo de servicio.
5. Crear evento `order.created`.
6. Calcular comisión referencial.
7. Cambiar cotización a `CONVERTED`.
8. Crear notificaciones para cliente y tienda.
9. Crear auditoría.

---

## 23. Tareas iniciales por tipo de servicio

| Categoría | Tareas iniciales sugeridas |
|---|---|
| Aduana | Revisar documentos, validar POA, preparar datos aduanales, actualizar estado |
| Transporte | Confirmar ruta, asignar vehículo, asignar conductor, registrar retiro, registrar entrega |
| Almacenamiento | Recibir mercancía, asignar ubicación, emitir recibo, registrar despacho |
| Inspección | Programar inspección, ejecutar checklist, cargar evidencias, registrar resultado |
| Documentación | Revisar documentos, generar checklist, reportar observaciones |
| Pagos | Verificar comprobante, confirmar pago, actualizar estado financiero |
| TOS | Registrar contenedor, asignar patio, registrar movimiento, liberar contenedor |
| Tecnología | Activar trazabilidad, configurar acceso, atender soporte |

---

## 24. Inicio operativo de orden

### 24.1 Precondiciones

1. Orden existe.
2. Orden no está cancelada ni cerrada.
3. Usuario tiene permiso `orders.start`.
4. Documentos mínimos están cargados o no son requeridos para iniciar.
5. Pago está confirmado o la política permite inicio sin pago.

### 24.2 Acción

```txt
PATCH /orders/:id/start
```

### 24.3 Resultado

Estado operativo:

```txt
IN_PROCESS
```

### 24.4 Efectos

1. Registrar `started_at`.
2. Crear evento `order.started`.
3. Notificar a cliente y tienda.
4. Auditar inicio de orden.

---

## 25. Ejecución de orden

### 25.1 Precondiciones

1. Orden está en `IN_PROCESS`.
2. Usuario tiene permiso `orders.update_status`.
3. Las tareas iniciales requeridas están creadas.

### 25.2 Acción

```txt
PATCH /orders/:id/status
```

Payload sugerido:

```json
{
  "newStatus": "EXECUTING",
  "reason": "Provider started operational execution"
}
```

### 25.3 Resultado

Estado operativo:

```txt
EXECUTING
```

### 25.4 Efectos

1. Crear evento `order.status_changed`.
2. Crear auditoría.
3. Notificar a cliente.
4. Habilitar carga de evidencias operativas.

---

## 26. Pausa o retención de orden

### 26.1 Motivos posibles

1. Documento rechazado.
2. Pago pendiente o rechazado.
3. Observación aduanera.
4. Falta de acceso a terminal.
5. Carga retenida.
6. Falta de instrucciones del cliente.
7. Incidencia operativa.
8. Incidencia de soporte.

### 26.2 Acción

```txt
PATCH /orders/:id/status
```

Payload sugerido:

```json
{
  "newStatus": "ON_HOLD",
  "reason": "Missing required document"
}
```

### 26.3 Efectos

1. Crear evento `order.on_hold`.
2. Notificar al cliente.
3. Notificar a tienda.
4. Auditar cambio.
5. Mostrar causa en timeline.

---

## 27. Cierre de orden

### 27.1 Precondiciones mínimas

1. Orden está en `EXECUTING` o estado permitido para cierre.
2. Usuario tiene permiso `orders.close`.
3. Tareas críticas están completadas o justificadas.
4. Evidencias requeridas están cargadas.
5. Documentos requeridos están validados o marcados como no aplicables.
6. Pago está confirmado si la política del servicio lo exige.
7. No existen bloqueos activos.

### 27.2 Acción

```txt
PATCH /orders/:id/close
```

Payload sugerido:

```json
{
  "closingNotes": "Service completed successfully",
  "evidenceIds": [1, 2, 3]
}
```

### 27.3 Resultado

Estado operativo:

```txt
CLOSED
```

### 27.4 Efectos

1. Registrar `closed_at`.
2. Crear evento `order.closed`.
3. Auditar cierre.
4. Notificar cliente y tienda.
5. Habilitar review del cliente.
6. Actualizar métricas de tienda.
7. Actualizar reporte de órdenes cerradas.

---

## 28. Cancelación de orden

### 28.1 Quién puede cancelar

| Actor | Condición |
|---|---|
| Cliente | Si la orden no está ejecutada o según reglas de cancelación |
| Tienda | Si no puede ejecutar el servicio y justifica motivo |
| Superadministrador | Por caso excepcional |
| Sistema | Por regla automática futura |

### 28.2 Precondiciones

1. Orden no está cerrada.
2. Usuario tiene permiso `orders.cancel`.
3. Debe existir motivo de cancelación.
4. Si hay pago confirmado, debe marcarse revisión financiera.

### 28.3 Acción

```txt
PATCH /orders/:id/cancel
```

Payload sugerido:

```json
{
  "cancelReason": "Customer cancelled the operation before execution"
}
```

### 28.4 Resultado

Estado operativo:

```txt
CANCELLED
```

### 28.5 Efectos

1. Registrar `cancelled_at`.
2. Crear evento `order.cancelled`.
3. Auditar cancelación.
4. Notificar a las partes.
5. Si existe pago, marcar revisión financiera o reembolso según política.
6. Bloquear nuevas tareas operativas.

---

## 29. Documentos de la orden

### 29.1 Fuente documental

Los documentos requeridos de una orden pueden provenir de:

1. Documentos requeridos del servicio.
2. Documentos cargados en la cotización.
3. Reglas por categoría.
4. Solicitudes adicionales de la tienda.
5. Requerimientos operativos internos.

### 29.2 Reglas

1. Los documentos de la cotización deben copiarse o vincularse a la orden.
2. Documentos requeridos deben mostrarse al cliente.
3. Documentos rechazados deben tener motivo.
4. Documentos validados actualizan `document_status`.
5. La orden no debe cerrarse si faltan documentos críticos, salvo override autorizado.
6. Toda carga, validación, rechazo o versionamiento debe auditarse.

---

## 30. Evidencias de orden

### 30.1 Tipos de evidencias

1. Foto.
2. Documento.
3. Checklist.
4. Nota operativa.
5. Prueba de entrega.
6. Recibo de almacén.
7. Acta de inspección.
8. Evento TOS.
9. Registro de viaje.
10. Confirmación de pago.

### 30.2 Reglas

1. Las evidencias deben asociarse a la orden o submódulo relacionado.
2. Las evidencias críticas deben ser visibles en el timeline.
3. El cierre puede requerir evidencias obligatorias.
4. Las evidencias no deben eliminarse físicamente si soportan el cierre.
5. Las evidencias deben tener usuario creador y fecha.

---

## 31. Pagos relacionados con la orden

### 31.1 Flujo financiero básico

```txt
Orden creada
  ↓
financial_status = UNPAID
  ↓
Cliente registra pago o comprobante
  ↓
financial_status = SUBMITTED
  ↓
Admin / usuario autorizado confirma pago
  ↓
financial_status = CONFIRMED
  ↓
Se confirma o actualiza comisión
```

### 31.2 Reglas

1. Una orden puede tener uno o más pagos si se permite pago parcial.
2. En MVP se recomienda iniciar con un pago principal por orden.
3. El pago confirmado no debe modificarse sin trazabilidad.
4. Si el pago es rechazado, la orden puede pasar a `PENDING_PAYMENT`.
5. Si la orden se cancela con pago confirmado, debe marcarse para revisión financiera.

---

## 32. Comisiones relacionadas con la orden

### 32.1 Momento de cálculo

La comisión puede calcularse:

1. Al responder cotización.
2. Al convertir cotización a orden.
3. Al confirmar pago.

Para MVP se recomienda calcular al convertir a orden y confirmar al confirmar pago.

### 32.2 Fórmulas referenciales

```txt
commission_amount = subtotal_amount * commission_percentage / 100
provider_net_amount = subtotal_amount - commission_amount
total_amount = subtotal_amount + tax_amount
```

### 32.3 Reglas

1. La comisión se calcula en backend.
2. La regla de comisión se obtiene desde `commission_rules`.
3. Cambios de comisión deben auditarse.
4. El proveedor neto debe conservarse en la orden.
5. La comisión puede tener estado `calculated`, `confirmed`, `settled`, `cancelled`.

---

## 33. Integración con TOS básico

### 33.1 Cuándo aplica

Aplica si el servicio o la orden involucra:

1. Contenedor.
2. Patio.
3. Gate-in.
4. Gate-out.
5. Movimiento interno.
6. Bloqueo o liberación de contenedor.

### 33.2 Entidades relacionadas

1. `tos_yards`.
2. `tos_containers`.
3. `tos_moves`.
4. `tos_gates`.

### 33.3 Reglas

1. La orden puede crear un contenedor TOS referencial.
2. Los movimientos TOS deben reflejarse como eventos o evidencias.
3. El TOS del MVP es referencial, no sustituye un sistema oficial de terminal.
4. Eventos TOS críticos deben auditarse.

---

## 34. Integración con transporte

### 34.1 Cuándo aplica

Aplica si la orden pertenece a servicios de transporte o drayage.

### 34.2 Entidades relacionadas

1. `trips`.
2. `vehicles`.
3. `drivers`.
4. `routes`.
5. `trip_events`.

### 34.3 Reglas

1. La orden puede generar un viaje.
2. El viaje debe asociarse a vehículo y conductor si aplica.
3. Eventos de viaje deben mostrarse en timeline de orden.
4. Prueba de entrega debe asociarse como evidencia.
5. Viaje entregado puede contribuir al cierre de la orden.

---

## 35. Integración con almacenamiento

### 35.1 Cuándo aplica

Aplica si la orden involucra almacén fiscal, recepción, custodia, ubicación o despacho.

### 35.2 Entidades relacionadas

1. `warehouses`.
2. `storage_locations`.
3. `inventory_items`.
4. `storage_movements`.
5. `dispatches`.

### 35.3 Reglas

1. La orden puede crear un ítem de inventario.
2. La recepción genera evento de orden.
3. El movimiento interno genera evidencia o evento.
4. El despacho puede ser requisito para cierre.
5. El recibo de almacén puede ser documento o evidencia.

---

## 36. Integración con inspecciones

### 36.1 Cuándo aplica

Aplica si la orden requiere inspección física, documental, fotográfica o de seguridad.

### 36.2 Entidades relacionadas

1. `inspections`.
2. `inspection_checklists`.
3. `inspection_results`.
4. `inspection_evidences`.

### 36.3 Reglas

1. La orden puede generar una inspección.
2. La inspección debe tener tipo y responsable.
3. El resultado debe asociarse a la orden.
4. Una inspección rechazada puede poner la orden en `ON_HOLD`.
5. Una inspección aprobada puede permitir continuidad o cierre.

---

## 37. Permisos RBAC del flujo

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `orders.view` | Ver órdenes según scope | Cliente, tienda, admin, auditor |
| `orders.start` | Iniciar orden | Tienda, operador, admin |
| `orders.update_status` | Cambiar estado operativo | Tienda, operador, admin |
| `orders.close` | Cerrar orden | Tienda, operador, admin |
| `orders.cancel` | Cancelar orden | Cliente, tienda, admin |
| `orders.assign` | Crear o asignar tareas | Tienda, operador, admin |
| `documents.view` | Ver documentos | Cliente, tienda, admin, auditor |
| `documents.upload` | Cargar documentos/evidencias | Cliente, tienda, inspector |
| `payments.view` | Ver pagos | Cliente, tienda, admin, auditor |
| `payments.create` | Registrar pago | Cliente |
| `payments.confirm` | Confirmar pago | Admin / operador autorizado |
| `commissions.view` | Ver comisiones | Tienda, admin, auditor |
| `audit.view` | Ver auditoría | Admin, auditor |

---

## 38. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo órdenes propias |
| Tienda | `store` | Solo órdenes de servicios de su tienda |
| Agente aduanal | `store` | Órdenes aduanales de su tienda |
| Transportista | `store` | Órdenes/viajes de su tienda |
| Inspector | `assigned` | Inspecciones u órdenes asignadas |
| Operador interno | `module` | Órdenes operativas autorizadas |
| Superadministrador | `global` | Todas las órdenes |
| Auditor | `global` de consulta | Todas las órdenes sin modificar |
| Soporte | `module` limitado | Órdenes relacionadas con tickets |

---

## 39. Endpoints Nest.js del flujo

Base path:

```txt
/orders
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/orders` | Listar órdenes según scope | `orders.view` | No |
| GET | `/orders/:id` | Ver detalle de orden | `orders.view` | No |
| PATCH | `/orders/:id/start` | Iniciar orden | `orders.start` | `order.started` |
| PATCH | `/orders/:id/status` | Cambiar estado operativo | `orders.update_status` | `order.status_changed` |
| PATCH | `/orders/:id/close` | Cerrar orden | `orders.close` | `order.closed` |
| PATCH | `/orders/:id/cancel` | Cancelar orden | `orders.cancel` | `order.cancelled` |
| POST | `/orders/:id/tasks` | Crear tarea | `orders.assign` | `order.task.created` |
| PATCH | `/orders/:id/tasks/:taskId` | Actualizar tarea | `orders.assign` | `order.task.updated` |
| GET | `/orders/:id/tasks` | Listar tareas | `orders.view` | No |
| GET | `/orders/:id/timeline` | Ver timeline | `orders.view` | No |
| GET | `/orders/:id/documents` | Ver documentos | `documents.view` | No |
| POST | `/orders/:id/documents` | Cargar documento | `documents.upload` | `order.document.uploaded` |
| GET | `/orders/:id/evidences` | Ver evidencias | `documents.view` | No |
| POST | `/orders/:id/evidences` | Cargar evidencia | `documents.upload` | `order.evidence.uploaded` |
| GET | `/orders/:id/payments` | Ver pagos | `payments.view` | No |
| GET | `/orders/:id/commissions` | Ver comisiones | `commissions.view` | No |
| GET | `/orders/:id/audit` | Ver auditoría de orden | `audit.view` | `order.audit.viewed` |

---

## 40. DTOs sugeridos

### 40.1 `UpdateOrderStatusDto`

```json
{
  "newStatus": "EXECUTING",
  "reason": "Provider started operational execution"
}
```

### 40.2 `StartOrderDto`

```json
{
  "startNotes": "All minimum requirements are ready to start execution",
  "createDefaultTasks": true
}
```

### 40.3 `CloseOrderDto`

```json
{
  "closingNotes": "Service completed successfully",
  "evidenceIds": [1, 2, 3],
  "markTasksAsCompleted": false
}
```

### 40.4 `CancelOrderDto`

```json
{
  "cancelReason": "Customer cancelled the operation before execution",
  "requiresFinancialReview": true
}
```

### 40.5 `CreateOrderTaskDto`

```json
{
  "taskName": "Validate commercial invoice",
  "assignedTo": 15,
  "dueDate": "2026-02-03",
  "status": "PENDING"
}
```

### 40.6 `UpdateOrderTaskDto`

```json
{
  "status": "COMPLETED",
  "notes": "Document reviewed and approved"
}
```

---

## 41. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `OrderListPage` | Listado de órdenes por perfil |
| `OrderDetailPage` | Detalle completo de orden |
| `OrderStatusBadge` | Badge de estado operativo |
| `OrderFinancialStatusBadge` | Badge de estado financiero |
| `OrderDocumentStatusBadge` | Badge de estado documental |
| `OrderTimeline` | Timeline de eventos |
| `OrderTasksPanel` | Tareas operativas |
| `OrderDocumentsPanel` | Documentos requeridos y cargados |
| `OrderEvidencePanel` | Evidencias operativas |
| `OrderPaymentPanel` | Pagos relacionados |
| `OrderCommissionPanel` | Comisión y neto proveedor |
| `OrderActionsPanel` | Acciones permitidas por estado y perfil |
| `OrderCloseModal` | Cierre de orden |
| `OrderCancelModal` | Cancelación de orden |
| `OrderFiltersBar` | Filtros de listado |
| `OrderSummaryCard` | Resumen operativo y financiero |
| `OrderRelatedModulesTabs` | Tabs TOS, transporte, almacén, inspecciones |

---

## 42. Páginas React.js por perfil

### 42.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/orders` | `ClientOrdersPage` | Ver órdenes propias |
| `/client/orders/:id` | `ClientOrderDetailPage` | Ver detalle, documentos, pagos, evidencias y review |

### 42.2 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/orders` | `StoreOrdersPage` | Ver órdenes recibidas |
| `/store/orders/:id` | `StoreOrderDetailPage` | Ejecutar, actualizar, cargar evidencias, cerrar |

### 42.3 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/orders` | `AdminOrdersPage` | Vista global de órdenes |
| `/admin/orders/:id` | `AdminOrderDetailPage` | Supervisar y auditar orden |

### 42.4 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/orders` | `OperatorOrdersPage` | Ver órdenes operativas asignadas o autorizadas |
| `/operator/orders/:id` | `OperatorOrderDetailPage` | Validar documentos, apoyar ejecución, registrar eventos |

### 42.5 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/orders` | `AuditorOrdersPage` | Consulta de órdenes |
| `/auditor/orders/:id` | `AuditorOrderDetailPage` | Consulta de detalle, pagos, comisiones y auditoría |

---

## 43. Servicios frontend API

Archivo sugerido:

```txt
/src/services/ordersApi.ts
```

Funciones mínimas:

```ts
getOrders(params)
getOrderById(id)
startOrder(id, payload)
updateOrderStatus(id, payload)
closeOrder(id, payload)
cancelOrder(id, payload)
getOrderTasks(id)
createOrderTask(id, payload)
updateOrderTask(id, taskId, payload)
getOrderTimeline(id)
getOrderDocuments(id)
uploadOrderDocument(id, formData)
getOrderEvidences(id)
uploadOrderEvidence(id, formData)
getOrderPayments(id)
getOrderCommissions(id)
getOrderAudit(id)
```

---

## 44. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useOrders` | Listar órdenes con filtros |
| `useOrderDetail` | Cargar detalle de orden |
| `useStartOrder` | Iniciar orden |
| `useUpdateOrderStatus` | Cambiar estado |
| `useCloseOrder` | Cerrar orden |
| `useCancelOrder` | Cancelar orden |
| `useOrderTasks` | Gestionar tareas |
| `useOrderTimeline` | Timeline de eventos |
| `useOrderDocuments` | Documentos de orden |
| `useOrderEvidences` | Evidencias de orden |
| `useOrderPayments` | Pagos relacionados |
| `useOrderCommissions` | Comisiones relacionadas |
| `useOrderPermissions` | Acciones visibles según permisos y estado |

---

## 45. Validaciones backend obligatorias

### 45.1 Al crear orden desde cotización

1. Cotización está `APPROVED`.
2. No existe orden previa.
3. Cliente está activo.
4. Tienda está aprobada.
5. Servicio no está inactivo.
6. Montos válidos.
7. Moneda válida.
8. Conversión en transacción.

### 45.2 Al iniciar orden

1. Orden existe.
2. Orden está en `CREATED`, `PENDING_DOCUMENTS` o `PENDING_PAYMENT` según regla.
3. Usuario tiene permiso `orders.start`.
4. Usuario pertenece a tienda o tiene scope autorizado.
5. No hay bloqueo crítico.

### 45.3 Al cambiar estado

1. Estado destino existe.
2. Transición es válida.
3. Usuario tiene permiso.
4. Motivo obligatorio para `ON_HOLD` o cambios excepcionales.
5. Se genera evento y auditoría.

### 45.4 Al cerrar orden

1. Orden está en estado cerrable.
2. Documentos críticos están validados o justificados.
3. Pago confirmado si la política lo exige.
4. Evidencias requeridas están cargadas.
5. No hay tareas críticas pendientes.
6. No hay inspecciones rechazadas abiertas.
7. No hay bloqueos TOS activos si aplica.

### 45.5 Al cancelar orden

1. Orden no está cerrada.
2. Usuario tiene permiso.
3. Motivo de cancelación requerido.
4. Si hay pago confirmado, se marca revisión financiera.
5. Se bloquean nuevas tareas operativas.

---

## 46. Transacciones de base de datos

La creación de orden desde cotización debe ejecutarse dentro de una transacción.

Operaciones transaccionales:

1. Validar cotización.
2. Crear orden.
3. Crear líneas de orden.
4. Crear tareas iniciales.
5. Vincular documentos.
6. Calcular comisión.
7. Crear evento de orden.
8. Cambiar cotización a `CONVERTED`.
9. Crear auditoría.
10. Crear notificaciones.

Si una operación falla, se debe hacer rollback.

---

## 47. Auditoría del flujo

| Evento | Descripción | Criticidad |
|---|---|---|
| `order.created` | Orden creada | high |
| `order.started` | Orden iniciada | medium |
| `order.status_changed` | Estado operativo actualizado | medium |
| `order.on_hold` | Orden puesta en espera | high |
| `order.closed` | Orden cerrada | high |
| `order.cancelled` | Orden cancelada | high |
| `order.task.created` | Tarea creada | low |
| `order.task.updated` | Tarea actualizada | low |
| `order.document.uploaded` | Documento cargado | medium |
| `order.evidence.uploaded` | Evidencia cargada | medium |
| `order.payment.linked` | Pago vinculado | high |
| `order.commission.calculated` | Comisión calculada | high |
| `order.unauthorized_access` | Intento de acceso no autorizado | high |
| `order.audit.viewed` | Auditoría de orden consultada | medium |

---

## 48. Notificaciones del flujo

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Orden creada | Cliente y tienda | La cotización fue convertida en orden | `/orders/:id` |
| Orden iniciada | Cliente | Tu orden está en proceso | `/client/orders/:id` |
| Orden en ejecución | Cliente | El servicio está en ejecución | `/client/orders/:id` |
| Orden en espera | Cliente y tienda | La orden fue puesta en espera | `/orders/:id` |
| Documento requerido | Cliente | Hay documentos pendientes por cargar | `/client/orders/:id` |
| Pago pendiente | Cliente | Tu orden tiene pago pendiente | `/client/payments` |
| Pago confirmado | Cliente y tienda | El pago de la orden fue confirmado | `/orders/:id` |
| Evidencia cargada | Cliente | Se cargó una nueva evidencia | `/client/orders/:id` |
| Orden cerrada | Cliente | Tu orden fue completada | `/client/orders/:id` |
| Orden cancelada | Cliente y tienda | La orden fue cancelada | `/orders/:id` |

---

## 49. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Órdenes por estado | Cantidad por estado operativo | Admin, tienda |
| Órdenes por tienda | Volumen operativo por proveedor | Admin |
| Órdenes por cliente | Historial de órdenes por cliente | Cliente, admin |
| Órdenes cerradas | Órdenes completadas por periodo | Admin, tienda |
| Órdenes canceladas | Cancelaciones y motivos | Admin |
| Órdenes en espera | Operaciones bloqueadas | Admin, operador |
| Monto de órdenes | Total operativo por periodo | Admin, tienda |
| Comisiones por orden | Comisión generada por orden | Admin, auditor |
| Tiempo promedio de cierre | SLA operativo por tienda | Admin, tienda |
| Documentos pendientes por orden | Control documental | Operador, admin |

---

## 50. Métricas del dashboard

### 50.1 Cliente

1. Órdenes activas.
2. Órdenes pendientes de documentos.
3. Órdenes pendientes de pago.
4. Órdenes en ejecución.
5. Órdenes cerradas.
6. Órdenes canceladas.

### 50.2 Tienda

1. Órdenes recibidas.
2. Órdenes en proceso.
3. Órdenes en ejecución.
4. Órdenes en espera.
5. Órdenes cerradas.
6. Monto total de órdenes.
7. Comisiones estimadas.
8. Tiempo promedio de cierre.

### 50.3 Superadministrador

1. Órdenes globales.
2. Órdenes por estado.
3. Órdenes por categoría.
4. Órdenes por tienda.
5. Monto total de órdenes.
6. Comisiones globales.
7. Órdenes con riesgo documental.
8. Órdenes con riesgo financiero.
9. Órdenes atrasadas.

### 50.4 Auditor

1. Órdenes cerradas.
2. Órdenes canceladas.
3. Órdenes con cambios críticos.
4. Pagos confirmados.
5. Comisiones calculadas.
6. Eventos de auditoría por orden.

---

## 51. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Orden no existe | `RESOURCE_NOT_FOUND` | 404 |
| Cotización no aprobada | `INVALID_STATUS_TRANSITION` | 422 |
| Ya existe orden para cotización | `ORDER_ALREADY_EXISTS` | 409 |
| Usuario no autenticado | `UNAUTHORIZED` | 401 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Orden no pertenece al usuario | `FORBIDDEN` | 403 |
| Transición inválida | `INVALID_STATUS_TRANSITION` | 422 |
| Cierre sin documentos requeridos | `ORDER_CANNOT_BE_CLOSED` | 422 |
| Cierre sin pago requerido | `ORDER_CANNOT_BE_CLOSED` | 422 |
| Monto negativo | `VALIDATION_ERROR` | 400 |
| Moneda inválida | `VALIDATION_ERROR` | 400 |
| Servicio inactivo | `SERVICE_NOT_AVAILABLE` | 422 |
| Tienda suspendida | `STORE_NOT_APPROVED` | 422 |
| Error al cargar evidencia | `FILE_UPLOAD_ERROR` | 400 |

---

## 52. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `CREATED` | Creada | Iniciar / revisar requisitos |
| `PENDING_DOCUMENTS` | Pendiente documentos | Cargar documentos |
| `PENDING_PAYMENT` | Pendiente pago | Registrar pago |
| `IN_PROCESS` | En proceso | Continuar ejecución |
| `EXECUTING` | En ejecución | Cargar evidencias / cerrar |
| `ON_HOLD` | En espera | Resolver bloqueo |
| `CLOSED` | Cerrada | Ver resumen / dejar review |
| `CANCELLED` | Cancelada | Ver motivo |

---

## 53. Reglas UX del flujo

1. El cliente debe ver el avance de la orden de forma clara.
2. La tienda debe tener acciones visibles según estado.
3. El timeline debe mostrar eventos relevantes.
4. Documentos pendientes deben destacarse visualmente.
5. Pagos pendientes deben destacarse visualmente.
6. El cierre debe pedir confirmación y evidencias.
7. La cancelación debe pedir motivo obligatorio.
8. Estados financieros y documentales deben mostrarse separados del estado operativo.
9. Acciones no permitidas deben ocultarse o deshabilitarse según permiso.
10. El auditor debe ver modo solo lectura.
11. El superadministrador debe ver vista global y filtros avanzados.
12. La vista mobile debe permitir revisar estado, documentos y pagos.

---

## 54. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Cliente listado | `Dashboard cliente > Mis órdenes` |
| Cliente detalle | `Dashboard cliente > Mis órdenes > ORD-2026-001` |
| Tienda listado | `Dashboard tienda > Órdenes recibidas` |
| Tienda detalle | `Dashboard tienda > Órdenes recibidas > ORD-2026-001` |
| Admin listado | `Panel global > Órdenes` |
| Admin detalle | `Panel global > Órdenes > ORD-2026-001` |
| Operador detalle | `Operaciones > Órdenes > ORD-2026-001` |
| Auditor detalle | `Dashboard auditoría > Órdenes > ORD-2026-001` |

---

## 55. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Código | Valor |
|---|---|
| Orden demo | `ORD-2026-001` |
| Cotización origen | `COT-2026-001` |
| Cliente demo | `client.demo@example.com` |
| Tienda demo | `STO-ADU-001` |
| Servicio demo | `SER-ADU-001-DEMO` |
| Estado operativo | `IN_PROCESS` |
| Estado financiero | `CONFIRMED` |
| Estado documental | `VALIDATED` |
| Subtotal | 450.00 USD |
| Comisión | 45.00 USD |
| Neto proveedor | 405.00 USD |

---

## 56. Ejemplo JSON de orden demo

```json
{
  "orderCode": "ORD-2026-001",
  "quotationCode": "COT-2026-001",
  "customerEmail": "client.demo@example.com",
  "storeCode": "STO-ADU-001",
  "serviceCode": "SER-ADU-001-DEMO",
  "subtotalAmount": 450.00,
  "taxAmount": 0.00,
  "commissionAmount": 45.00,
  "totalAmount": 450.00,
  "providerNetAmount": 405.00,
  "currencyCode": "USD",
  "operationalStatus": "IN_PROCESS",
  "financialStatus": "CONFIRMED",
  "documentStatus": "VALIDATED",
  "isDemo": true
}
```

---

## 57. Pruebas funcionales mínimas

### 57.1 Cliente

1. Cliente puede ver sus órdenes.
2. Cliente puede abrir detalle de orden propia.
3. Cliente no puede ver órdenes de otro cliente.
4. Cliente puede cargar documentos si la orden lo permite.
5. Cliente puede registrar pago.
6. Cliente puede ver evidencias.
7. Cliente puede dejar review si la orden está cerrada.

### 57.2 Tienda

1. Tienda puede ver órdenes de sus servicios.
2. Tienda no puede ver órdenes de otra tienda.
3. Tienda puede iniciar orden.
4. Tienda puede cambiar estado permitido.
5. Tienda puede cargar evidencias.
6. Tienda puede cerrar orden si cumple requisitos.
7. Tienda no puede cerrar orden con bloqueos críticos.

### 57.3 Admin

1. Superadministrador puede ver todas las órdenes.
2. Superadministrador puede filtrar por estado, tienda, cliente y fecha.
3. Superadministrador puede ver pagos, comisiones y auditoría.
4. Superadministrador puede intervenir casos excepcionales según permisos.

### 57.4 Auditor

1. Auditor puede ver órdenes.
2. Auditor puede ver documentos, pagos y comisiones.
3. Auditor puede ver logs.
4. Auditor no puede modificar órdenes.
5. Auditor no puede cambiar estados.

### 57.5 Conversión desde cotización

1. Cotización aprobada genera orden.
2. Se crean líneas de orden.
3. Se vinculan documentos.
4. Se calcula comisión.
5. Se cambia cotización a `CONVERTED`.
6. No se permite doble conversión.
7. Si falla una parte, se hace rollback.

---

## 58. Pruebas técnicas API

1. `GET /orders` respeta scope.
2. `GET /orders/:id` devuelve 403 si no pertenece al usuario.
3. `PATCH /orders/:id/start` cambia estado correctamente.
4. `PATCH /orders/:id/status` rechaza transición inválida.
5. `PATCH /orders/:id/close` rechaza cierre sin evidencias requeridas.
6. `PATCH /orders/:id/cancel` exige motivo.
7. `POST /orders/:id/tasks` crea tarea.
8. `PATCH /orders/:id/tasks/:taskId` actualiza tarea.
9. `POST /orders/:id/evidences` carga evidencia.
10. `GET /orders/:id/timeline` devuelve eventos.
11. Cambios críticos generan `audit_logs`.
12. Notificaciones se crean para eventos principales.

---

## 59. Criterios de aceptación

El flujo de órdenes se considera aceptado cuando:

1. Una cotización aprobada puede convertirse en orden.
2. No se permite doble conversión.
3. La orden conserva cliente, tienda, servicio y montos aprobados.
4. La orden crea líneas de orden.
5. La orden crea eventos iniciales.
6. La orden puede mostrar estado operativo, financiero y documental.
7. La tienda puede iniciar la orden.
8. La tienda puede actualizar estados válidos.
9. Transiciones inválidas son rechazadas.
10. Documentos requeridos se vinculan a la orden.
11. Evidencias pueden cargarse y consultarse.
12. Pagos pueden asociarse a la orden.
13. Comisiones se calculan en backend.
14. La orden puede cerrarse solo si cumple requisitos.
15. La orden puede cancelarse con motivo.
16. Cliente solo ve sus órdenes.
17. Tienda solo ve órdenes de sus servicios.
18. Auditor consulta sin modificar.
19. Superadministrador consulta globalmente.
20. Eventos críticos generan auditoría.
21. Notificaciones principales se generan.
22. Reportes y métricas básicas funcionan.
23. Endpoints están documentados en Swagger.
24. Pruebas funcionales y API pasan.
25. No existe dependencia técnica con Odoo.

---

## 60. Tareas técnicas para Antigravity

### 60.1 Base de datos

1. Validar tabla `orders`.
2. Validar tabla `order_lines`.
3. Validar tabla `order_tasks`.
4. Validar tabla `order_events`.
5. Crear índices por cliente, tienda, servicio, estado y fecha.
6. Crear seed de orden demo.
7. Crear validaciones de transiciones.

### 60.2 Backend Nest.js

1. Crear módulo `orders`.
2. Crear `OrdersController`.
3. Crear `OrdersService`.
4. Crear DTOs de orden.
5. Crear endpoints de detalle, listado y estados.
6. Crear servicio de conversión desde cotización.
7. Crear transacción de conversión.
8. Crear servicio de tareas.
9. Crear servicio de timeline.
10. Crear integración documental.
11. Crear integración con pagos.
12. Crear integración con comisiones.
13. Crear integración con TOS, transporte, almacenamiento e inspecciones si aplica.
14. Crear auditoría.
15. Crear notificaciones.
16. Crear pruebas unitarias y API.

### 60.3 Frontend React.js

1. Crear `OrderListPage`.
2. Crear `OrderDetailPage`.
3. Crear `OrderTimeline`.
4. Crear `OrderTasksPanel`.
5. Crear `OrderDocumentsPanel`.
6. Crear `OrderEvidencePanel`.
7. Crear `OrderPaymentPanel`.
8. Crear `OrderCommissionPanel`.
9. Crear `OrderActionsPanel`.
10. Crear modales de cierre y cancelación.
11. Crear filtros por estado, tienda, cliente y fecha.
12. Crear hooks de órdenes.
13. Crear guards visuales por permisos.
14. Crear estados loading, empty, error y forbidden.

### 60.4 QA

1. Probar conversión desde cotización.
2. Probar flujo cliente.
3. Probar flujo tienda.
4. Probar flujo admin.
5. Probar flujo auditor.
6. Probar permisos y scopes.
7. Probar cambios de estado.
8. Probar cierre.
9. Probar cancelación.
10. Probar documentos.
11. Probar evidencias.
12. Probar pagos y comisiones.
13. Probar auditoría.
14. Probar notificaciones.

---

## 61. Prompt sugerido para Antigravity

```text
Actúa como product owner, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `19_ORDER_WORKFLOW.md` como fuente principal para implementar el flujo completo de órdenes de servicio del marketplace logístico.

Objetivo:
Implementar un flujo de órdenes donde una cotización aprobada se convierta en orden, se creen líneas, tareas, documentos, eventos, pagos, comisiones, evidencias y estados operativos, permitiendo ejecución, pausa, cierre, cancelación, auditoría, notificaciones, reportes y control por permisos RBAC.

Reglas obligatorias:
1. Una orden debe nacer desde una cotización aprobada.
2. No permitir doble conversión de una misma cotización.
3. La conversión debe ejecutarse dentro de una transacción.
4. La orden debe conservar montos aprobados.
5. Separar estado operativo, financiero y documental.
6. Validar transiciones de estado en backend.
7. No cerrar órdenes con documentos críticos faltantes salvo autorización explícita.
8. No cerrar órdenes con pago pendiente si la política lo exige.
9. Registrar eventos de timeline.
10. Auditar eventos críticos.
11. Enviar notificaciones por eventos principales.
12. Calcular comisiones en backend.
13. Respetar scopes de datos: own, store, assigned, module, global.
14. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
15. Respetar `13_API_SPECIFICATION.md`.
16. Respetar `18_QUOTATION_WORKFLOW.md`.
17. No integrar Odoo; usarlo solo como referencia conceptual.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de órdenes.
3. Endpoints Nest.js.
4. Servicios backend.
5. Validaciones RBAC y scope.
6. Conversión desde cotización con transacción.
7. Timeline de orden.
8. Tareas operativas.
9. Documentos y evidencias.
10. Pagos y comisiones.
11. Auditoría.
12. Notificaciones.
13. Componentes React.js.
14. Hooks frontend.
15. Pruebas unitarias y API.
16. Seed demo de orden.
17. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, backend, frontend, permisos, documentos, pagos, comisiones, auditoría, notificaciones, reportes y QA.
```

---

## 62. Checklist de uso en Antigravity

- [ ] Guardar este documento como `19_ORDER_WORKFLOW.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `18_QUOTATION_WORKFLOW.md`.
- [ ] Crear DTOs.
- [ ] Crear endpoints.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear conversión desde cotización.
- [ ] Crear timeline de orden.
- [ ] Crear tareas de orden.
- [ ] Crear integración documental.
- [ ] Crear integración con pagos.
- [ ] Crear integración con comisiones.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 63. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión financiera | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

