# 18_QUOTATION_WORKFLOW.md

# Documento Maestro del Flujo de Cotizaciones
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `18_QUOTATION_WORKFLOW.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Cotizaciones |
| Módulos relacionados | Servicios, tiendas, usuarios, documentos, órdenes, pagos, comisiones, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **flujo maestro de cotizaciones** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como guía para que Antigravity implemente el ciclo completo de solicitud, revisión, respuesta, aprobación, rechazo, vencimiento y conversión de cotizaciones en órdenes de servicio.

El flujo de cotización es uno de los procesos centrales del marketplace porque conecta:

1. Cliente final.
2. Tienda logística.
3. Servicio publicado.
4. Documentos requeridos.
5. Tarifa base o tarifa respondida.
6. Comisión del marketplace.
7. Conversión a orden.
8. Auditoría.
9. Notificaciones.
10. Reportes operativos y comerciales.

---

## 3. Objetivo general

Diseñar e implementar un flujo de cotizaciones seguro, trazable, auditable y escalable que permita al cliente solicitar servicios logísticos publicados, a la tienda logística responder con tarifa y condiciones, y al cliente aprobar o rechazar la propuesta para convertirla en una orden de servicio.

---

## 4. Objetivos específicos

1. Definir actores participantes en el flujo.
2. Definir estados de la cotización.
3. Definir transiciones válidas entre estados.
4. Definir reglas de negocio.
5. Definir datos mínimos de una cotización.
6. Definir documentos requeridos.
7. Definir interacción con servicios publicados.
8. Definir interacción con órdenes.
9. Definir interacción con pagos y comisiones.
10. Definir endpoints Nest.js.
11. Definir componentes React.js.
12. Definir tablas MySQL relacionadas.
13. Definir validaciones backend.
14. Definir permisos RBAC.
15. Definir auditoría.
16. Definir notificaciones.
17. Definir reportes asociados.
18. Definir casos de error.
19. Definir pruebas funcionales.
20. Servir como prompt para Antigravity.

---

## 5. Alcance del flujo de cotizaciones MVP

El MVP debe cubrir el flujo principal:

```txt
Cliente busca servicio publicado
  ↓
Cliente solicita cotización
  ↓
Tienda recibe cotización
  ↓
Tienda revisa documentos y datos
  ↓
Tienda responde con tarifa, condiciones y vencimiento
  ↓
Cliente revisa respuesta
  ↓
Cliente aprueba o rechaza
  ↓
Si aprueba, se convierte en orden
  ↓
Se calcula comisión referencial
  ↓
Se generan eventos de auditoría y notificaciones
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Subasta entre múltiples tiendas.
2. Comparación automática de múltiples respuestas.
3. Negociación en múltiples rondas.
4. Chat en tiempo real integrado por cotización.
5. Firma electrónica avanzada.
6. Integración con pasarela de pago real.
7. Integración directa con ERP Odoo.
8. Integración directa con aduanas oficiales.
9. Integración con navieras o terminales reales.
10. Motor avanzado de pricing dinámico.
11. Cotizaciones multi-tienda en una sola solicitud compuesta.
12. Órdenes multi-proveedor consolidadas.
13. Facturación fiscal automática.
14. Conciliación bancaria automática.

---

## 7. Principios funcionales del flujo

Antigravity debe respetar los siguientes principios:

1. Solo servicios publicados pueden cotizarse públicamente.
2. El cliente debe estar autenticado para solicitar cotización.
3. La cotización debe asociarse a cliente, tienda y servicio.
4. La tienda solo puede ver y responder cotizaciones de sus propios servicios.
5. El cliente solo puede ver sus propias cotizaciones.
6. El superadministrador puede ver todas las cotizaciones.
7. El auditor puede consultar cotizaciones, pero no modificarlas.
8. La cotización debe conservar el precio respondido, aunque cambie luego la tarifa del servicio.
9. Cada cambio de estado debe generar historial.
10. Estados críticos deben generar auditoría.
11. La conversión a orden solo se permite desde cotización aprobada.
12. No se debe convertir una cotización vencida, rechazada o cancelada.
13. La respuesta de la tienda debe tener vencimiento.
14. Los documentos requeridos deben provenir del servicio cotizado.
15. La comisión debe calcularse en backend.
16. El frontend no debe calcular valores finales críticos como fuente de verdad.

---

## 8. Actores del flujo

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Solicita, revisa, aprueba o rechaza cotizaciones |
| Tienda logística | `PROF-TIE-002` | Recibe, revisa y responde cotizaciones |
| Agente aduanal | `PROF-ADU-007` | Responde cotizaciones aduanales si opera como tienda |
| Transportista | `PROF-TRA-006` | Responde cotizaciones de transporte si opera como tienda |
| Inspector | `PROF-INS-005` | Puede responder o ejecutar servicios de inspección según configuración |
| Operador interno | `PROF-OPE-004` | Consulta o apoya seguimiento operativo |
| Superadministrador | `PROF-SUP-003` | Supervisa, audita y gestiona casos globales |
| Auditor | `PROF-AUD-008` | Consulta cotizaciones y eventos de auditoría |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias relacionadas con cotizaciones |

---

## 9. Estados de cotización

| Estado | Código | Descripción | Responsable típico |
|---|---|---|---|
| Solicitada | `REQUESTED` | Cliente crea solicitud de cotización | Cliente |
| En revisión | `IN_REVIEW` | Tienda inicia revisión de datos y documentos | Tienda |
| Respondida | `RESPONDED` | Tienda responde con precio, condiciones y vencimiento | Tienda |
| Aprobada | `APPROVED` | Cliente acepta la cotización | Cliente |
| Rechazada | `REJECTED` | Cliente o tienda rechaza la cotización | Cliente / tienda |
| Vencida | `EXPIRED` | La cotización superó fecha de vigencia | Sistema / backend |
| Convertida | `CONVERTED` | Cotización aprobada generó orden | Sistema |
| Cancelada | `CANCELLED` | Cotización cancelada antes de cierre | Cliente / admin |

---

## 10. Transiciones válidas de estado

```txt
REQUESTED → IN_REVIEW
REQUESTED → REJECTED
REQUESTED → CANCELLED
IN_REVIEW → RESPONDED
IN_REVIEW → REJECTED
IN_REVIEW → CANCELLED
RESPONDED → APPROVED
RESPONDED → REJECTED
RESPONDED → EXPIRED
RESPONDED → CANCELLED
APPROVED → CONVERTED
APPROVED → CANCELLED, solo antes de crear orden si se permite
```

---

## 11. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `REQUESTED` | `CONVERTED` | Debe ser respondida y aprobada antes |
| `IN_REVIEW` | `CONVERTED` | Falta respuesta y aprobación |
| `RESPONDED` | `CONVERTED` | Falta aprobación del cliente |
| `REJECTED` | `APPROVED` | Cotización ya fue rechazada |
| `EXPIRED` | `APPROVED` | Cotización vencida no puede aprobarse |
| `CANCELLED` | `APPROVED` | Cotización cancelada no puede aprobarse |
| `CONVERTED` | cualquier estado anterior | Cotización ya generó orden |

---

## 12. Diagrama textual del flujo principal

```txt
[Servicio publicado]
        ↓
[Cliente solicita cotización]
        ↓
[REQUESTED]
        ↓ tienda revisa
[IN_REVIEW]
        ↓ tienda responde
[RESPONDED]
        ↓ cliente decide
 ┌───────────────┬────────────────┐
 ↓               ↓                ↓
[APPROVED]     [REJECTED]      [EXPIRED]
 ↓
[CONVERTED]
 ↓
[ORDER CREATED]
```

---

## 13. Datos mínimos de una cotización

| Campo | Descripción | Obligatorio |
|---|---|---|
| `quotation_code` | Código único de cotización | Sí |
| `customer_id` | Cliente solicitante | Sí |
| `store_id` | Tienda proveedora | Sí |
| `service_id` | Servicio cotizado | Sí |
| `port_code` | Puerto relacionado | No, según servicio |
| `terminal_code` | Terminal relacionada | No, según servicio |
| `cargo_type_code` | Tipo de carga | No, según servicio |
| `container_type_code` | Tipo de contenedor | No, según servicio |
| `quantity` | Cantidad | Sí |
| `unit_measure` | Unidad de medida | Sí |
| `requested_date` | Fecha solicitada | No |
| `customer_notes` | Notas del cliente | No |
| `provider_notes` | Notas de la tienda | No |
| `subtotal_amount` | Subtotal respondido | No al crear, sí al responder |
| `tax_amount` | Impuesto si aplica | No |
| `commission_amount` | Comisión calculada | No al crear, sí al responder o convertir |
| `total_amount` | Total de la cotización | No al crear, sí al responder |
| `currency_code` | Moneda | Sí |
| `status` | Estado de cotización | Sí |
| `expires_at` | Fecha de vencimiento | Sí al responder |
| `created_at` | Fecha de creación | Sí |
| `updated_at` | Fecha de actualización | Sí |

---

## 14. Tablas MySQL relacionadas

| Tabla | Uso en el flujo |
|---|---|
| `quotations` | Registro principal de la cotización |
| `quotation_lines` | Líneas de servicios cotizados |
| `quotation_documents` | Documentos asociados a cotización |
| `quotation_status_history` | Historial de cambios de estado |
| `services` | Servicio cotizado |
| `service_documents` | Documentos requeridos por el servicio |
| `stores` | Tienda que ofrece el servicio |
| `users` | Cliente y usuarios operadores |
| `documents` | Documentos cargados |
| `orders` | Orden creada tras aprobación |
| `order_lines` | Líneas de orden generadas desde cotización |
| `commission_rules` | Reglas de comisión aplicables |
| `commissions` | Comisión generada al convertir en orden o confirmar pago |
| `notifications` | Notificaciones por eventos |
| `audit_logs` | Auditoría de eventos críticos |
| `master_catalog_items` | Estados, tipos de carga, contenedor, moneda, unidad |

---

## 15. Modelo de tabla `quotations`

Campos principales definidos en `12_DATABASE_MASTER_SCHEMA.md`:

```txt
id
uuid
quotation_code
customer_id
store_id
service_id
port_code
terminal_code
cargo_type_code
container_type_code
quantity
unit_measure
requested_date
customer_notes
provider_notes
subtotal_amount
tax_amount
commission_amount
total_amount
currency_code
status
responded_at
approved_at
rejected_at
expires_at
created_at
updated_at
deleted_at
```

---

## 16. Modelo de tabla `quotation_lines`

Uso recomendado:

1. Guardar la línea principal del servicio cotizado.
2. Permitir agregar costos complementarios en fases futuras.
3. Congelar precio unitario respondido.
4. Evitar depender de cambios futuros del servicio original.

Campos principales:

```txt
id
quotation_id
service_id
description
quantity
unit_measure
unit_price
subtotal_amount
status
```

---

## 17. Modelo de tabla `quotation_documents`

Uso recomendado:

1. Relacionar documentos requeridos y cargados.
2. Mantener estado documental por cotización.
3. Permitir validar si la tienda puede responder o si requiere documentos adicionales.

Campos principales:

```txt
id
quotation_id
document_id
required
status
```

Estados sugeridos:

```txt
PENDING
UPLOADED
VALIDATED
REJECTED
```

---

## 18. Modelo de tabla `quotation_status_history`

Uso recomendado:

1. Registrar cada transición de estado.
2. Guardar usuario que cambió el estado.
3. Guardar motivo de cambio.
4. Complementar auditoría funcional.

Campos principales:

```txt
id
quotation_id
old_status
new_status
changed_by
change_reason
created_at
```

---

## 19. Creación de cotización por cliente

### 19.1 Precondiciones

1. El cliente está autenticado.
2. El servicio existe.
3. El servicio está publicado.
4. La tienda del servicio está aprobada.
5. El servicio no está pausado ni inactivo.
6. La cantidad es mayor que cero.
7. La unidad de medida es válida.
8. Los catálogos usados están activos.

### 19.2 Acción

El cliente hace clic en **Solicitar cotización** desde `ServiceDetailPage` o `ServiceResultCard`.

### 19.3 Resultado

Se crea una cotización en estado:

```txt
REQUESTED
```

### 19.4 Datos creados automáticamente

1. `quotation_code`.
2. `customer_id`.
3. `store_id`.
4. `service_id`.
5. `status = REQUESTED`.
6. Línea inicial en `quotation_lines` si aplica.
7. Documentos requeridos en `quotation_documents` si aplica.
8. Notificación a la tienda.
9. Evento de auditoría.
10. Historial de estado.

---

## 20. Revisión de cotización por tienda

### 20.1 Precondiciones

1. La tienda está autenticada.
2. El usuario pertenece a la tienda.
3. La cotización pertenece a un servicio de esa tienda.
4. La cotización está en estado `REQUESTED`.

### 20.2 Acción

La tienda abre la cotización y marca la solicitud como **En revisión**.

### 20.3 Resultado

La cotización cambia a:

```txt
IN_REVIEW
```

### 20.4 Efectos

1. Se registra `quotation_status_history`.
2. Se genera auditoría `quotation.in_review`.
3. Se notifica al cliente que la tienda está revisando.

---

## 21. Respuesta de cotización por tienda

### 21.1 Precondiciones

1. Cotización en estado `REQUESTED` o `IN_REVIEW`.
2. Usuario tiene permiso `quotations.respond`.
3. Usuario pertenece a la tienda correspondiente.
4. La tarifa es mayor o igual a cero.
5. La moneda es válida.
6. El vencimiento es posterior a la fecha actual.

### 21.2 Datos requeridos para responder

| Campo | Descripción |
|---|---|
| `provider_notes` | Condiciones, observaciones y alcance de la respuesta |
| `subtotal_amount` | Subtotal ofrecido |
| `tax_amount` | Impuesto si aplica |
| `total_amount` | Total mostrado al cliente |
| `currency_code` | Moneda |
| `expires_at` | Fecha de vencimiento de la respuesta |
| `line_items` | Líneas de precio si aplica |

### 21.3 Resultado

La cotización cambia a:

```txt
RESPONDED
```

### 21.4 Efectos

1. Se guarda precio respondido.
2. Se actualizan líneas de cotización.
3. Se calcula comisión referencial si aplica.
4. Se registra fecha `responded_at`.
5. Se notifica al cliente.
6. Se registra auditoría `quotation.responded`.
7. Se registra historial de estado.

---

## 22. Aprobación de cotización por cliente

### 22.1 Precondiciones

1. Cliente autenticado.
2. Cotización pertenece al cliente.
3. Cotización está en estado `RESPONDED`.
4. Cotización no está vencida.
5. Servicio y tienda siguen activos.

### 22.2 Acción

Cliente hace clic en **Aprobar cotización**.

### 22.3 Resultado

La cotización cambia a:

```txt
APPROVED
```

### 22.4 Efectos

1. Se registra `approved_at`.
2. Se genera auditoría `quotation.approved`.
3. Se notifica a la tienda.
4. Se habilita conversión a orden.
5. Puede ejecutarse conversión automática o manual según configuración.

---

## 23. Rechazo de cotización

### 23.1 Quién puede rechazar

| Actor | Condición |
|---|---|
| Cliente | Puede rechazar cotizaciones propias respondidas |
| Tienda | Puede rechazar solicitudes que no puede atender |
| Superadministrador | Puede rechazar por caso excepcional o control |

### 23.2 Precondiciones

1. Cotización no está convertida.
2. Cotización no está cancelada.
3. Usuario tiene permiso correspondiente.
4. Debe registrarse motivo.

### 23.3 Resultado

La cotización cambia a:

```txt
REJECTED
```

### 23.4 Efectos

1. Se registra `rejected_at`.
2. Se guarda motivo.
3. Se notifica a la contraparte.
4. Se registra auditoría `quotation.rejected`.

---

## 24. Vencimiento de cotización

### 24.1 Regla

Una cotización en estado `RESPONDED` vence si:

```txt
now > expires_at
```

### 24.2 Forma de ejecución

Puede ejecutarse mediante:

1. Job programado backend.
2. Validación en endpoint al intentar aprobar.
3. Validación al listar cotizaciones.

### 24.3 Resultado

La cotización cambia a:

```txt
EXPIRED
```

### 24.4 Efectos

1. Se notifica al cliente.
2. Se notifica a la tienda si aplica.
3. Se registra auditoría `quotation.expired`.
4. No permite aprobación.
5. Puede permitir solicitar nueva cotización.

---

## 25. Conversión de cotización en orden

### 25.1 Precondiciones

1. Cotización en estado `APPROVED`.
2. No existe orden previa asociada.
3. Cliente, tienda y servicio siguen activos.
4. Precio respondido está definido.
5. La cotización no está vencida.
6. Usuario tiene permiso `quotations.convert_to_order` o el sistema ejecuta conversión automática.

### 25.2 Resultado

Se crea una orden en tabla `orders`.

Estado inicial de orden:

```txt
operational_status = CREATED
financial_status = UNPAID
_document_status = PENDING
```

### 25.3 Datos copiados desde cotización

| Cotización | Orden |
|---|---|
| `quotation_id` | `quotation_id` |
| `customer_id` | `customer_id` |
| `store_id` | `store_id` |
| `service_id` | `service_id` |
| `subtotal_amount` | `subtotal_amount` |
| `tax_amount` | `tax_amount` |
| `commission_amount` | `commission_amount` |
| `total_amount` | `total_amount` |
| `currency_code` | `currency_code` |

### 25.4 Efectos

1. Se crea `orders`.
2. Se crean `order_lines`.
3. Se cambia cotización a `CONVERTED`.
4. Se registra auditoría `quotation.converted_to_order`.
5. Se registra auditoría `order.created`.
6. Se notifica al cliente.
7. Se notifica a la tienda.
8. Se crea comisión referencial si aplica.
9. Se crean requerimientos documentales de la orden si aplica.

---

## 26. Reglas de cálculo financiero en cotización

### 26.1 Fórmulas referenciales

```txt
subtotal_amount = sum(quotation_lines.subtotal_amount)
commission_amount = subtotal_amount * commission_percentage / 100
total_amount = subtotal_amount + tax_amount
provider_net_amount = subtotal_amount - commission_amount
```

### 26.2 Reglas

1. La tienda responde el precio ofrecido al cliente.
2. El backend calcula comisión referencial.
3. El cliente ve total cotizado.
4. El proveedor puede ver comisión y neto según permisos.
5. El superadministrador ve todos los cálculos.
6. El auditor consulta los cálculos sin modificarlos.
7. No permitir montos negativos.
8. No permitir moneda inactiva.
9. Cambios de precio se auditan.

---

## 27. Documentos requeridos en cotización

### 27.1 Fuente documental

Los documentos requeridos deben provenir de:

1. `service_documents`.
2. Catálogo `DOCUMENT_TYPES`.
3. Reglas específicas de categoría si aplica.

### 27.2 Ejemplo por servicio aduanal

Para `SER-ADU-001`:

1. `COMMERCIAL_INVOICE`.
2. `PACKING_LIST`.
3. `BILL_OF_LADING`.
4. `POWER_OF_ATTORNEY`.

### 27.3 Reglas

1. El cliente puede cargar documentos al crear o después de crear la cotización.
2. La tienda puede solicitar documentos faltantes.
3. Documentos rechazados deben tener motivo.
4. Documentos validados pueden usarse al convertir en orden.
5. Documentos se auditan en el módulo documental.

---

## 28. Permisos RBAC del flujo

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `quotations.view` | Ver cotizaciones según scope | Cliente, tienda, admin, auditor |
| `quotations.create` | Crear cotización | Cliente |
| `quotations.respond` | Responder cotización | Tienda logística |
| `quotations.approve` | Aprobar cotización | Cliente |
| `quotations.reject` | Rechazar cotización | Cliente, tienda, admin |
| `quotations.cancel` | Cancelar cotización | Cliente, admin |
| `quotations.convert_to_order` | Convertir a orden | Cliente, sistema, admin |
| `documents.upload` | Cargar documentos | Cliente, tienda |
| `documents.view` | Ver documentos | Cliente, tienda, admin, auditor |
| `commissions.calculate` | Calcular comisión | Sistema, admin |
| `audit.view` | Ver auditoría | Admin, auditor |

---

## 29. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo cotizaciones propias |
| Tienda | `store` | Solo cotizaciones de servicios de su tienda |
| Agente aduanal | `store` | Solo cotizaciones de su tienda aduanal |
| Transportista | `store` | Solo cotizaciones de su tienda transportista |
| Inspector | `assigned` o `store` | Solo inspecciones/cotizaciones asignadas o de tienda |
| Operador interno | `module` | Cotizaciones operativas autorizadas |
| Superadministrador | `global` | Todas las cotizaciones |
| Auditor | `global` de consulta | Todas las cotizaciones sin modificar |
| Soporte | `module` limitado | Cotizaciones asociadas a tickets o incidencias |

---

## 30. Endpoints Nest.js del flujo

Base path:

```txt
/quotations
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/quotations` | Listar cotizaciones según scope | `quotations.view` | No |
| GET | `/quotations/:id` | Ver detalle de cotización | `quotations.view` | No |
| POST | `/quotations` | Crear cotización | `quotations.create` | `quotation.created` |
| PATCH | `/quotations/:id/start-review` | Marcar en revisión | `quotations.respond` | `quotation.in_review` |
| PATCH | `/quotations/:id/respond` | Responder cotización | `quotations.respond` | `quotation.responded` |
| PATCH | `/quotations/:id/approve` | Aprobar cotización | `quotations.approve` | `quotation.approved` |
| PATCH | `/quotations/:id/reject` | Rechazar cotización | `quotations.reject` | `quotation.rejected` |
| PATCH | `/quotations/:id/cancel` | Cancelar cotización | `quotations.cancel` | `quotation.cancelled` |
| PATCH | `/quotations/:id/expire` | Marcar vencida | Sistema/admin | `quotation.expired` |
| POST | `/quotations/:id/convert-to-order` | Convertir a orden | `quotations.convert_to_order` | `quotation.converted_to_order` |
| GET | `/quotations/:id/documents` | Ver documentos asociados | `documents.view` | No |
| POST | `/quotations/:id/documents` | Cargar documento | `documents.upload` | `quotation.document.uploaded` |
| GET | `/quotations/:id/history` | Historial de estados | `quotations.view` | No |

---

## 31. DTOs sugeridos

### 31.1 `CreateQuotationDto`

```json
{
  "storeId": 20,
  "serviceId": 50,
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-HOU-BAYPORT",
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "containerTypeCode": "40HC",
  "quantity": 1,
  "unitMeasure": "CONTAINER",
  "requestedDate": "2026-02-01",
  "customerNotes": "Need customs clearance and document support."
}
```

### 31.2 `RespondQuotationDto`

```json
{
  "providerNotes": "Service can be completed within 48 hours after complete document submission.",
  "currencyCode": "USD",
  "subtotalAmount": 450.00,
  "taxAmount": 0.00,
  "lineItems": [
    {
      "serviceId": 50,
      "description": "Customs clearance basic service",
      "quantity": 1,
      "unitMeasure": "SERVICE",
      "unitPrice": 450.00
    }
  ],
  "expiresAt": "2026-02-05T23:59:59.000Z"
}
```

### 31.3 `ApproveQuotationDto`

```json
{
  "approvalNotes": "Approved by client. Please proceed with the order."
}
```

### 31.4 `RejectQuotationDto`

```json
{
  "rejectionReason": "The proposed price is outside the approved budget."
}
```

### 31.5 `CancelQuotationDto`

```json
{
  "cancelReason": "The operation is no longer required."
}
```

### 31.6 `ConvertQuotationToOrderDto`

```json
{
  "conversionNotes": "Converted after client approval.",
  "createInitialTasks": true,
  "copyDocuments": true
}
```

---

## 32. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `RequestQuoteModal` | Crear solicitud desde servicio |
| `QuotationForm` | Formulario de cotización |
| `QuotationListPage` | Listado de cotizaciones |
| `QuotationDetailPage` | Detalle de cotización |
| `QuotationStatusBadge` | Badge de estado |
| `QuotationTimeline` | Historial visual de estados |
| `QuotationDocumentsPanel` | Documentos requeridos/cargados |
| `QuotationResponseForm` | Respuesta de tienda |
| `QuotationPriceSummary` | Subtotal, impuestos, total y comisión |
| `QuotationApprovalPanel` | Aprobar o rechazar como cliente |
| `QuotationConversionPanel` | Convertir en orden |
| `QuotationFiltersBar` | Filtros de búsqueda/listado |
| `QuotationEmptyState` | Estado vacío |
| `QuotationErrorState` | Error de carga |
| `QuotationForbiddenState` | Usuario sin permisos |

---

## 33. Páginas React.js por perfil

### 33.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/quotations` | `ClientQuotationsPage` | Ver cotizaciones propias |
| `/client/quotations/:id` | `ClientQuotationDetailPage` | Ver detalle, aprobar, rechazar, cargar documentos |
| `/services/:id` | `ServiceDetailPage` | Solicitar cotización |

### 33.2 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/quotations` | `StoreQuotationsPage` | Ver cotizaciones recibidas |
| `/store/quotations/:id` | `StoreQuotationDetailPage` | Revisar y responder |

### 33.3 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/quotations` | `AdminQuotationsPage` | Vista global de cotizaciones |
| `/admin/quotations/:id` | `AdminQuotationDetailPage` | Supervisión y auditoría |

### 33.4 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/quotations` | `AuditorQuotationsPage` | Consulta de cotizaciones |
| `/auditor/quotations/:id` | `AuditorQuotationDetailPage` | Consulta de detalle e historial |

---

## 34. Servicios frontend API

Archivo sugerido:

```txt
/src/services/quotationsApi.ts
```

Funciones mínimas:

```ts
getQuotations(params)
getQuotationById(id)
createQuotation(payload)
startQuotationReview(id)
respondQuotation(id, payload)
approveQuotation(id, payload)
rejectQuotation(id, payload)
cancelQuotation(id, payload)
convertQuotationToOrder(id, payload)
getQuotationDocuments(id)
uploadQuotationDocument(id, formData)
getQuotationHistory(id)
```

---

## 35. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useQuotations` | Listar cotizaciones con filtros |
| `useQuotationDetail` | Cargar detalle de cotización |
| `useCreateQuotation` | Crear cotización |
| `useRespondQuotation` | Responder cotización |
| `useApproveQuotation` | Aprobar cotización |
| `useRejectQuotation` | Rechazar cotización |
| `useConvertQuotationToOrder` | Convertir cotización en orden |
| `useQuotationDocuments` | Gestionar documentos |
| `useQuotationTimeline` | Mostrar historial |
| `useQuotationPermissions` | Validar acciones visibles |

---

## 36. Validaciones backend obligatorias

### 36.1 Al crear cotización

1. Usuario autenticado.
2. Usuario tiene `quotations.create`.
3. Servicio existe.
4. Servicio está `PUBLISHED`.
5. Tienda está aprobada.
6. Cantidad mayor a cero.
7. Unidad válida.
8. Puerto válido si se envía.
9. Terminal válida si se envía.
10. Tipo de carga válido si se envía.
11. Tipo de contenedor válido si se envía.

### 36.2 Al responder cotización

1. Usuario autenticado.
2. Usuario tiene `quotations.respond`.
3. Usuario pertenece a la tienda.
4. Cotización está en `REQUESTED` o `IN_REVIEW`.
5. Monto subtotal mayor o igual a cero.
6. Moneda válida.
7. Vencimiento futuro.
8. Líneas válidas.
9. Servicio no está inactivo.
10. Se calcula comisión en backend.

### 36.3 Al aprobar cotización

1. Usuario autenticado.
2. Usuario es el cliente dueño de la cotización.
3. Cotización está en `RESPONDED`.
4. Cotización no está vencida.
5. Cotización tiene total definido.
6. No existe orden previa asociada si se convertirá automáticamente.

### 36.4 Al convertir a orden

1. Cotización está en `APPROVED`.
2. No existe orden previa.
3. Cliente existe y está activo.
4. Tienda existe y está activa/aprobada.
5. Servicio existe y no está inactivo.
6. Montos están definidos.
7. Se crean orden y líneas dentro de transacción.
8. Si falla la orden, la cotización no debe quedar convertida.

---

## 37. Transacciones de base de datos

La conversión de cotización en orden debe ejecutarse dentro de una transacción.

Operaciones transaccionales:

1. Validar cotización.
2. Crear orden.
3. Crear líneas de orden.
4. Copiar o vincular documentos.
5. Crear evento de orden.
6. Calcular comisión referencial.
7. Actualizar estado de cotización a `CONVERTED`.
8. Crear historial de cotización.
9. Crear auditoría.
10. Crear notificaciones.

Si una operación falla, se debe hacer rollback.

---

## 38. Auditoría del flujo

| Evento | Descripción | Criticidad |
|---|---|---|
| `quotation.created` | Cotización creada | medium |
| `quotation.in_review` | Tienda inició revisión | low |
| `quotation.responded` | Tienda respondió cotización | medium |
| `quotation.price.changed` | Precio respondido o líneas modificadas | high |
| `quotation.approved` | Cliente aprobó cotización | high |
| `quotation.rejected` | Cotización rechazada | medium |
| `quotation.cancelled` | Cotización cancelada | medium |
| `quotation.expired` | Cotización vencida | medium |
| `quotation.converted_to_order` | Cotización convertida en orden | high |
| `quotation.document.uploaded` | Documento cargado | medium |
| `quotation.unauthorized_access` | Intento de acceso no autorizado | high |

---

## 39. Notificaciones del flujo

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Cotización creada | Tienda | Nueva solicitud de cotización recibida | `/store/quotations/:id` |
| En revisión | Cliente | Tu cotización está en revisión | `/client/quotations/:id` |
| Respondida | Cliente | Tu cotización fue respondida | `/client/quotations/:id` |
| Aprobada | Tienda | El cliente aprobó la cotización | `/store/quotations/:id` |
| Rechazada | Contraparte | La cotización fue rechazada | `/quotations/:id` |
| Vencida | Cliente | Tu cotización ha vencido | `/client/quotations/:id` |
| Convertida | Cliente y tienda | La cotización fue convertida en orden | `/orders/:id` |
| Documento cargado | Tienda | El cliente cargó un documento | `/store/quotations/:id` |

---

## 40. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Cotizaciones por estado | Cantidad por `REQUESTED`, `RESPONDED`, `APPROVED`, etc. | Admin, tienda |
| Cotizaciones por tienda | Volumen comercial por proveedor | Admin |
| Cotizaciones por cliente | Historial de solicitudes | Cliente, admin |
| Cotizaciones vencidas | Cotizaciones no aprobadas a tiempo | Tienda, admin |
| Tiempo promedio de respuesta | SLA comercial de tiendas | Tienda, admin |
| Tasa de conversión | Cotizaciones aprobadas vs convertidas | Admin, tienda |
| Monto cotizado | Suma por periodo y categoría | Admin, tienda |
| Comisiones proyectadas | Comisión estimada por cotizaciones aprobadas | Admin |

---

## 41. Métricas del dashboard

### 41.1 Cliente

1. Cotizaciones solicitadas.
2. Cotizaciones respondidas.
3. Cotizaciones pendientes.
4. Cotizaciones aprobadas.
5. Cotizaciones vencidas.
6. Órdenes generadas desde cotizaciones.

### 41.2 Tienda

1. Cotizaciones recibidas.
2. Cotizaciones pendientes de revisión.
3. Cotizaciones respondidas.
4. Cotizaciones aprobadas.
5. Tasa de conversión.
6. Tiempo promedio de respuesta.
7. Monto cotizado.

### 41.3 Superadministrador

1. Cotizaciones globales.
2. Cotizaciones por categoría.
3. Cotizaciones por tienda.
4. Cotizaciones por estado.
5. Tasa global de conversión.
6. Monto total cotizado.
7. Comisiones proyectadas.

---

## 42. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Servicio no existe | `RESOURCE_NOT_FOUND` | 404 |
| Servicio no publicado | `SERVICE_NOT_PUBLISHED` | 422 |
| Tienda no aprobada | `STORE_NOT_APPROVED` | 422 |
| Usuario no autenticado | `UNAUTHORIZED` | 401 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Cotización no existe | `RESOURCE_NOT_FOUND` | 404 |
| Cotización no pertenece al usuario | `FORBIDDEN` | 403 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Monto negativo | `VALIDATION_ERROR` | 400 |
| Moneda inválida | `VALIDATION_ERROR` | 400 |
| Cotización vencida | `QUOTATION_EXPIRED` | 422 |
| Ya existe orden | `ORDER_ALREADY_EXISTS` | 409 |
| Documento inválido | `FILE_UPLOAD_ERROR` | 400 |

---

## 43. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `REQUESTED` | Solicitada | Tienda puede revisar |
| `IN_REVIEW` | En revisión | Tienda puede responder |
| `RESPONDED` | Respondida | Cliente puede aprobar/rechazar |
| `APPROVED` | Aprobada | Convertir en orden |
| `REJECTED` | Rechazada | Ver motivo |
| `EXPIRED` | Vencida | Solicitar nueva cotización |
| `CONVERTED` | Convertida | Ver orden |
| `CANCELLED` | Cancelada | Ver motivo |

---

## 44. Reglas UX del flujo

1. El cliente debe poder solicitar cotización desde la ficha del servicio.
2. El formulario debe mostrar documentos requeridos antes de enviar.
3. El cliente debe ver el estado de su cotización en todo momento.
4. La tienda debe ver un listado de cotizaciones pendientes.
5. La tienda debe poder responder con monto, notas y vencimiento.
6. El cliente debe ver claramente precio, condiciones y vencimiento.
7. El botón aprobar debe deshabilitarse si la cotización venció.
8. El botón convertir a orden debe mostrarse solo si la cotización está aprobada.
9. El historial debe mostrarse como timeline.
10. Las acciones no autorizadas deben ocultarse o mostrarse deshabilitadas según criterio UX.
11. Todo error debe mostrarse con mensaje entendible.
12. La vista mobile debe permitir revisar y aprobar cotizaciones sin fricción.

---

## 45. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Cliente listado | `Dashboard cliente > Mis cotizaciones` |
| Cliente detalle | `Dashboard cliente > Mis cotizaciones > COT-2026-001` |
| Tienda listado | `Dashboard tienda > Cotizaciones recibidas` |
| Tienda detalle | `Dashboard tienda > Cotizaciones recibidas > COT-2026-001` |
| Admin listado | `Panel global > Cotizaciones` |
| Admin detalle | `Panel global > Cotizaciones > COT-2026-001` |
| Auditor detalle | `Dashboard auditoría > Cotizaciones > COT-2026-001` |

---

## 46. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Código | Valor |
|---|---|
| Cotización demo | `COT-2026-001` |
| Cliente demo | `client.demo@example.com` |
| Tienda demo | `STO-ADU-001` |
| Servicio demo | `SER-ADU-001-DEMO` |
| Puerto | `PORT-HOUSTON` |
| Terminal | `TERM-HOU-BAYPORT` |
| Tipo de carga | `CONTAINERIZED_CARGO` |
| Tipo de contenedor | `40HC` |
| Subtotal | 450.00 USD |
| Comisión | 45.00 USD |
| Estado | `CONVERTED` |

---

## 47. Ejemplo JSON de cotización demo

```json
{
  "quotationCode": "COT-2026-001",
  "customerEmail": "client.demo@example.com",
  "storeCode": "STO-ADU-001",
  "serviceCode": "SER-ADU-001-DEMO",
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-HOU-BAYPORT",
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "containerTypeCode": "40HC",
  "quantity": 1,
  "unitMeasure": "CONTAINER",
  "customerNotes": "Need customs clearance and documentation support.",
  "providerNotes": "Service can be completed within 48 hours after complete document submission.",
  "subtotalAmount": 450.00,
  "taxAmount": 0.00,
  "commissionAmount": 45.00,
  "totalAmount": 450.00,
  "currencyCode": "USD",
  "status": "CONVERTED",
  "expiresAt": "2026-02-05T23:59:59.000Z",
  "isDemo": true
}
```

---

## 48. Pruebas funcionales mínimas

### 48.1 Cliente

1. Cliente puede ver servicio publicado.
2. Cliente puede abrir modal de cotización.
3. Cliente puede crear cotización.
4. Cliente puede ver cotización creada.
5. Cliente puede cargar documentos.
6. Cliente puede aprobar cotización respondida.
7. Cliente puede rechazar cotización respondida.
8. Cliente no puede aprobar cotización vencida.

### 48.2 Tienda

1. Tienda puede ver cotizaciones recibidas.
2. Tienda solo ve cotizaciones de sus servicios.
3. Tienda puede marcar en revisión.
4. Tienda puede responder cotización.
5. Tienda puede rechazar cotización con motivo.
6. Tienda no puede responder cotización de otra tienda.

### 48.3 Admin

1. Superadministrador puede ver todas las cotizaciones.
2. Superadministrador puede filtrar por estado, tienda, cliente y fecha.
3. Superadministrador puede ver historial.
4. Superadministrador puede auditar cambios.

### 48.4 Auditor

1. Auditor puede ver cotizaciones.
2. Auditor no puede responder.
3. Auditor no puede aprobar.
4. Auditor no puede convertir en orden.
5. Auditor puede ver logs relacionados.

### 48.5 Conversión a orden

1. Cotización aprobada se convierte en orden.
2. Se crean líneas de orden.
3. Se actualiza estado a `CONVERTED`.
4. No se permite doble conversión.
5. Si falla la orden, se hace rollback.

---

## 49. Pruebas técnicas API

1. `POST /quotations` con datos válidos devuelve 201.
2. `POST /quotations` sin token devuelve 401.
3. `POST /quotations` sobre servicio pausado devuelve 422.
4. `PATCH /quotations/:id/respond` por tienda correcta devuelve 200.
5. `PATCH /quotations/:id/respond` por tienda incorrecta devuelve 403.
6. `PATCH /quotations/:id/approve` por cliente dueño devuelve 200.
7. `PATCH /quotations/:id/approve` por otro cliente devuelve 403.
8. `POST /quotations/:id/convert-to-order` desde estado `APPROVED` devuelve 201.
9. `POST /quotations/:id/convert-to-order` desde estado `RESPONDED` devuelve 422.
10. `GET /quotations` respeta scope.
11. `GET /quotations/:id/history` devuelve historial.
12. Cambios críticos generan `audit_logs`.

---

## 50. Criterios de aceptación

El flujo de cotizaciones se considera aceptado cuando:

1. El cliente puede solicitar cotización desde un servicio publicado.
2. El sistema crea cotización en estado `REQUESTED`.
3. La tienda recibe notificación.
4. La tienda puede marcar en revisión.
5. La tienda puede responder con precio, condiciones y vencimiento.
6. El cliente recibe notificación de respuesta.
7. El cliente puede aprobar o rechazar.
8. La cotización aprobada puede convertirse en orden.
9. La cotización convertida no puede modificarse ni aprobarse nuevamente.
10. La cotización vencida no puede aprobarse.
11. Los documentos requeridos se generan desde el servicio.
12. Los cambios de estado quedan en historial.
13. Los eventos críticos generan auditoría.
14. Los permisos RBAC se respetan.
15. Los scopes de datos se respetan.
16. La tienda no ve cotizaciones de otra tienda.
17. El cliente no ve cotizaciones de otro cliente.
18. El auditor puede consultar sin modificar.
19. El superadministrador puede consultar globalmente.
20. Los endpoints están documentados en Swagger.
21. Las pruebas funcionales pasan.
22. No existe dependencia técnica con Odoo.

---

## 51. Tareas técnicas para Antigravity

### 51.1 Base de datos

1. Validar tabla `quotations`.
2. Validar tabla `quotation_lines`.
3. Validar tabla `quotation_documents`.
4. Validar tabla `quotation_status_history`.
5. Crear índices por cliente, tienda, servicio, estado y fecha.
6. Crear seed de cotización demo.
7. Crear validación de estados.

### 51.2 Backend Nest.js

1. Crear módulo `quotations`.
2. Crear `QuotationsController`.
3. Crear `QuotationsService`.
4. Crear DTOs del flujo.
5. Crear validaciones RBAC y scope.
6. Crear endpoints de estado.
7. Crear servicio de cálculo financiero referencial.
8. Crear integración con documentos requeridos.
9. Crear integración con órdenes.
10. Crear transacción de conversión a orden.
11. Crear auditoría.
12. Crear notificaciones.
13. Crear job de vencimiento si aplica.
14. Crear pruebas unitarias y API.

### 51.3 Frontend React.js

1. Crear `RequestQuoteModal`.
2. Crear `QuotationListPage`.
3. Crear `QuotationDetailPage`.
4. Crear `QuotationResponseForm`.
5. Crear `QuotationApprovalPanel`.
6. Crear `QuotationTimeline`.
7. Crear `QuotationDocumentsPanel`.
8. Crear `QuotationPriceSummary`.
9. Crear filtros por estado, tienda, fecha y servicio.
10. Crear hooks de cotizaciones.
11. Crear guards visuales por permisos.
12. Crear estados loading, empty, error y forbidden.

### 51.4 QA

1. Probar flujo cliente.
2. Probar flujo tienda.
3. Probar flujo admin.
4. Probar flujo auditor.
5. Probar errores de permisos.
6. Probar transición inválida.
7. Probar vencimiento.
8. Probar conversión a orden.
9. Probar rollback de conversión.
10. Probar auditoría y notificaciones.

---

## 52. Prompt sugerido para Antigravity

```text
Actúa como product owner, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `18_QUOTATION_WORKFLOW.md` como fuente principal para implementar el flujo completo de cotizaciones del marketplace logístico.

Objetivo:
Implementar un flujo de cotizaciones donde el cliente solicite cotización desde un servicio publicado, la tienda revise y responda con precio y condiciones, el cliente apruebe o rechace, y una cotización aprobada se convierta en orden de servicio con auditoría, notificaciones, historial, documentos y validaciones RBAC.

Reglas obligatorias:
1. Solo servicios publicados pueden cotizarse.
2. El cliente debe estar autenticado para cotizar.
3. La tienda solo puede responder cotizaciones de sus propios servicios.
4. El cliente solo puede aprobar o rechazar cotizaciones propias.
5. Las cotizaciones respondidas deben tener vencimiento.
6. Cotizaciones vencidas no pueden aprobarse.
7. Solo cotizaciones aprobadas pueden convertirse en orden.
8. La conversión a orden debe ejecutarse en transacción.
9. No permitir doble conversión.
10. Guardar historial de estados.
11. Auditar eventos críticos.
12. Enviar notificaciones por eventos principales.
13. Calcular comisiones en backend.
14. Respetar scopes de datos: own, store, assigned, module, global.
15. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
16. Respetar `13_API_SPECIFICATION.md`.
17. Respetar `16_SERVICES_MASTER_CATALOG.md`.
18. No integrar Odoo; usarlo solo como referencia conceptual.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de cotización.
3. Endpoints Nest.js.
4. Servicios backend.
5. Validaciones RBAC y scope.
6. Historial de estados.
7. Auditoría.
8. Notificaciones.
9. Conversión a orden con transacción.
10. Componentes React.js.
11. Hooks frontend.
12. Pruebas unitarias y API.
13. Seed demo de cotización.
14. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, backend, frontend, permisos, auditoría, notificaciones, conversión a orden y QA.
```

---

## 53. Checklist de uso en Antigravity

- [ ] Guardar este documento como `18_QUOTATION_WORKFLOW.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Crear DTOs.
- [ ] Crear endpoints.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear historial de cotización.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear conversión a orden.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 54. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

