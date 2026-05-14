# 24_PAYMENTS_MASTER_PLAN.md

# Documento Maestro del Plan de Pagos
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `24_PAYMENTS_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico, financiero y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Pagos, comprobantes, conciliación referencial y control financiero |
| Módulos relacionados | Cotizaciones, órdenes, servicios, tiendas, comisiones, documentos, evidencias, auditoría, notificaciones, reportes, soporte |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro del módulo de pagos** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de un módulo financiero que permita registrar, consultar, validar, confirmar, rechazar, conciliar referencialmente y auditar pagos asociados a órdenes de servicio logístico.

El módulo de pagos debe permitir:

1. Registrar pagos asociados a órdenes.
2. Cargar comprobantes de pago.
3. Validar comprobantes.
4. Confirmar o rechazar pagos.
5. Actualizar el estado financiero de la orden.
6. Calcular comisiones del marketplace.
7. Registrar monto neto del proveedor.
8. Consultar pagos por cliente, tienda y superadministrador.
9. Preparar arquitectura futura para pasarelas de pago.
10. Preparar arquitectura futura para split payments.
11. Preparar arquitectura futura para conciliación bancaria.
12. Generar auditoría financiera.
13. Enviar notificaciones financieras.
14. Generar reportes de pagos y comisiones.

---

## 3. Objetivo general

Diseñar e implementar un módulo de pagos seguro, trazable, auditable y escalable que permita controlar el ciclo financiero de las órdenes del marketplace logístico, desde el registro inicial del pago hasta su confirmación, rechazo, conciliación referencial, cálculo de comisión y actualización del estado financiero de la orden.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del módulo de pagos.
2. Definir actores participantes.
3. Definir métodos de pago del MVP.
4. Definir estados de pago.
5. Definir estados financieros de la orden.
6. Definir flujo de pago manual con comprobante.
7. Definir flujo futuro con pasarela de pago.
8. Definir flujo futuro de split payments.
9. Definir reglas de validación de pagos.
10. Definir reglas de rechazo y corrección.
11. Definir reglas de reembolso referencial.
12. Definir cálculo de comisión.
13. Definir relación con órdenes y cotizaciones.
14. Definir relación con documentos y evidencias.
15. Definir relación con tiendas y proveedores.
16. Definir permisos RBAC y scopes.
17. Definir endpoints Nest.js.
18. Definir componentes React.js.
19. Definir validaciones backend.
20. Definir auditoría y notificaciones.
21. Definir reportes y métricas.
22. Definir casos de error.
23. Definir seeds demo.
24. Definir pruebas funcionales y técnicas.
25. Servir como prompt para Antigravity.

---

## 5. Alcance del módulo de pagos MVP

El MVP debe cubrir el siguiente flujo principal:

```txt
Orden creada desde cotización aprobada
  ↓
Orden con estado financiero UNPAID
  ↓
Cliente registra pago o comprobante
  ↓
Pago queda en estado SUBMITTED
  ↓
Admin / operador autorizado revisa comprobante
  ↓
Pago confirmado o rechazado
  ↓
Si se confirma, orden pasa a financial_status CONFIRMED
  ↓
Se calcula o confirma comisión
  ↓
Se registra neto proveedor
  ↓
Se notifica a cliente y tienda
  ↓
Se actualizan reportes financieros
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Integración real con pasarela de pago.
2. Split payments automático real.
3. Liquidación automática a tiendas.
4. Conciliación bancaria automática.
5. Facturación fiscal automática.
6. Emisión de invoices fiscales oficiales.
7. Validación automática de comprobantes bancarios.
8. KYC/KYB financiero avanzado.
9. Integración con ERP Odoo.
10. Integración con bancos.
11. Manejo de chargebacks reales.
12. Motor antifraude avanzado.
13. Wallet interna.
14. Escrow regulado.
15. Crédito, financiamiento o factoring.
16. Cálculo fiscal por jurisdicción.
17. Retenciones fiscales automáticas.
18. Payouts automáticos reales.

---

## 7. Principios funcionales del módulo de pagos

Antigravity debe respetar los siguientes principios:

1. Todo pago debe estar asociado a una orden.
2. No debe existir pago confirmado sin orden válida.
3. Una orden puede tener uno o más pagos si se permite pago parcial.
4. En MVP se recomienda un pago principal por orden.
5. Todo pago debe tener método, monto, moneda y estado.
6. Todo comprobante debe vincularse al pago.
7. Todo pago confirmado debe actualizar el estado financiero de la orden.
8. Todo pago rechazado debe tener motivo.
9. Todo cambio crítico debe auditarse.
10. El cálculo de comisión debe ejecutarse en backend.
11. El frontend no debe calcular montos críticos como fuente de verdad.
12. Las tiendas solo deben ver pagos relacionados con sus órdenes.
13. Los clientes solo deben ver sus pagos.
14. El superadministrador puede ver todos los pagos.
15. El auditor puede consultar pagos sin modificarlos.
16. La arquitectura debe permitir pasarelas futuras sin reescribir el core.
17. No debe existir dependencia técnica con Odoo.

---

## 8. Actores del módulo de pagos

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Registra pagos, carga comprobantes y consulta estado financiero |
| Tienda logística | `PROF-TIE-002` | Consulta pagos confirmados y comisiones asociadas a sus órdenes |
| Transportista | `PROF-TRA-006` | Consulta pagos de órdenes de transporte propias o asignadas |
| Agente aduanal | `PROF-ADU-007` | Consulta pagos de órdenes aduanales propias |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Consulta pagos de servicios de almacenamiento |
| Inspector | `PROF-INS-005` | Consulta pagos de servicios de inspección si aplica como proveedor |
| Operador interno | `PROF-OPE-004` | Revisa comprobantes, valida pagos y gestiona incidencias financieras |
| Superadministrador | `PROF-SUP-003` | Administra pagos, confirmaciones, rechazos, comisiones y reportes globales |
| Auditor | `PROF-AUD-008` | Consulta pagos, comprobantes, comisiones y auditoría sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias de pago y comprobantes |

---

## 9. Entidades principales del módulo de pagos

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Pago | `payments` | Registro principal del pago |
| Comprobante | `payment_receipts` o `documents` | Archivo o evidencia del pago |
| Transacción | `payment_transactions` | Registro técnico futuro de pasarela |
| Historial de pago | `payment_status_history` | Cambios de estado del pago |
| Orden | `orders` | Orden relacionada |
| Comisión | `commissions` | Comisión calculada sobre la orden/pago |
| Regla de comisión | `commission_rules` | Regla usada para calcular comisión |
| Método de pago | `payment_methods` | Catálogo de métodos de pago |
| Reembolso | `refunds` | Reembolso referencial o futuro |
| Documento | `documents` | Comprobante o soporte documental |
| Auditoría | `audit_logs` | Trazabilidad de eventos críticos |
| Notificación | `notifications` | Avisos financieros a usuarios |

---

## 10. Modelo operativo general

```txt
Order
  ↓
Payment Request / Payment Record
  ↓
Receipt Upload
  ↓
Review
  ↓
Confirm / Reject
  ↓
Order Financial Status Update
  ↓
Commission Calculation
  ↓
Provider Net Amount
  ↓
Reports / Audit / Notifications
```

---

## 11. Métodos de pago MVP

| Código | Nombre | Descripción | MVP |
|---|---|---|---|
| `BANK_TRANSFER` | Transferencia bancaria | Pago vía transferencia bancaria cargando comprobante | Sí |
| `WIRE_TRANSFER` | Wire transfer | Transferencia bancaria internacional o doméstica | Sí |
| `ACH` | ACH | Transferencia ACH referencial | Sí |
| `MANUAL_RECEIPT` | Comprobante manual | Registro manual de pago con soporte | Sí |
| `CASH_REFERENCE` | Referencia de efectivo | Solo referencial, si aplica | Opcional |
| `PAYMENT_GATEWAY_FUTURE` | Pasarela futura | Método reservado para integración futura | No inicial |
| `MERCADOPAGO_FUTURE` | MercadoPago futuro | Reservado para integración futura si aplica por país | No inicial |
| `STRIPE_FUTURE` | Stripe futuro | Reservado para integración futura | No inicial |
| `PAYPAL_FUTURE` | PayPal futuro | Reservado para integración futura | No inicial |

---

## 12. Estados de pago

| Estado | Código | Descripción |
|---|---|---|
| Creado | `CREATED` | Pago registrado inicialmente |
| Pendiente | `PENDING` | Pago pendiente de comprobante o acción del cliente |
| Enviado | `SUBMITTED` | Cliente cargó comprobante o registró pago |
| En revisión | `IN_REVIEW` | Pago en validación manual |
| Confirmado | `CONFIRMED` | Pago validado y aceptado |
| Rechazado | `REJECTED` | Pago no aceptado |
| Parcial | `PARTIAL` | Pago parcial aceptado |
| Cancelado | `CANCELLED` | Pago anulado antes de confirmación |
| Reembolsado | `REFUNDED` | Pago devuelto total o parcial referencialmente |
| Fallido | `FAILED` | Pago fallido en pasarela futura |

---

## 13. Estados financieros de orden

| Estado | Código | Descripción |
|---|---|---|
| No pagada | `UNPAID` | Orden sin pago registrado |
| Pendiente | `PENDING` | Pago iniciado o pendiente de comprobante |
| Enviado | `SUBMITTED` | Comprobante enviado |
| Confirmado | `CONFIRMED` | Pago confirmado |
| Rechazado | `REJECTED` | Pago rechazado |
| Parcial | `PARTIAL` | Pago parcial confirmado |
| En revisión | `IN_REVIEW` | Pago en revisión manual |
| Reembolsado | `REFUNDED` | Pago devuelto total o parcialmente |

---

## 14. Transiciones válidas de pago

```txt
CREATED → PENDING
PENDING → SUBMITTED
SUBMITTED → IN_REVIEW
SUBMITTED → CONFIRMED
IN_REVIEW → CONFIRMED
IN_REVIEW → REJECTED
REJECTED → SUBMITTED
PENDING → CANCELLED
SUBMITTED → CANCELLED, solo si no fue revisado
CONFIRMED → REFUNDED, si aplica
CONFIRMED → PARTIAL, si aplica ajuste parcial futuro
```

---

## 15. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `CONFIRMED` | `PENDING` | No debe retroceder sin proceso de reverso |
| `CONFIRMED` | `REJECTED` | Requiere reverso o ajuste especial |
| `REFUNDED` | `CONFIRMED` | Un pago reembolsado no se confirma nuevamente |
| `CANCELLED` | `CONFIRMED` | Pago cancelado no debe confirmarse |
| `FAILED` | `CONFIRMED` | Pago fallido requiere nueva transacción |

---

## 16. Flujo MVP de pago manual con comprobante

### 16.1 Paso 1 — Orden creada

La orden se crea desde una cotización aprobada.

Estado inicial recomendado:

```txt
order.financial_status = UNPAID
```

### 16.2 Paso 2 — Cliente registra pago

El cliente registra:

1. Método de pago.
2. Monto.
3. Moneda.
4. Fecha de pago.
5. Referencia bancaria.
6. Comprobante.
7. Notas opcionales.

Estado del pago:

```txt
SUBMITTED
```

Estado financiero de la orden:

```txt
SUBMITTED
```

### 16.3 Paso 3 — Revisión

Un usuario autorizado revisa el comprobante.

Estado del pago:

```txt
IN_REVIEW
```

Estado financiero de la orden:

```txt
IN_REVIEW
```

### 16.4 Paso 4 — Confirmación

Si el comprobante es válido:

```txt
payment.status = CONFIRMED
order.financial_status = CONFIRMED
```

Se calcula o confirma la comisión.

### 16.5 Paso 5 — Rechazo

Si el comprobante no es válido:

```txt
payment.status = REJECTED
order.financial_status = REJECTED
```

Debe existir motivo de rechazo.

---

## 17. Flujo futuro con pasarela de pago

El diseño debe preparar una abstracción para futuras pasarelas.

```txt
Cliente selecciona pasarela
  ↓
Backend crea payment intent / preference
  ↓
Pasarela procesa pago
  ↓
Webhook recibe resultado
  ↓
Backend valida firma / evento
  ↓
PaymentTransaction se actualiza
  ↓
Payment se confirma o falla
  ↓
Order financial_status se actualiza
  ↓
Commission se calcula
```

### 17.1 Regla

El MVP no debe depender de una pasarela real. Se debe diseñar una capa futura:

```txt
PaymentProviderAdapter
```

Ejemplos futuros:

1. `ManualPaymentAdapter`.
2. `MercadoPagoAdapter`.
3. `StripeAdapter`.
4. `PayPalAdapter`.
5. `BankTransferAdapter`.

---

## 18. Flujo futuro de split payments

El marketplace puede preparar un modelo futuro para distribuir fondos entre:

1. Marketplace.
2. Tienda logística.
3. Proveedor operativo.
4. Transportista.
5. Inspector.
6. Almacén.

### 18.1 Modelo referencial

```txt
Total pagado por cliente
  ↓
Marketplace calcula comisión
  ↓
Proveedor recibe neto
  ↓
Marketplace conserva comisión
  ↓
Liquidación futura o payout futuro
```

### 18.2 Fórmula referencial

```txt
commission_amount = subtotal_amount * commission_percentage / 100
provider_net_amount = subtotal_amount - commission_amount
```

### 18.3 Regla MVP

En MVP no se ejecutan payouts reales. Solo se registran montos referenciales:

1. Total pagado.
2. Comisión marketplace.
3. Neto proveedor.
4. Estado de comisión.
5. Estado de liquidación futura si se define.

---

## 19. Datos mínimos de un pago

| Campo | Descripción | Obligatorio |
|---|---|---|
| `payment_code` | Código único del pago | Sí |
| `order_id` | Orden relacionada | Sí |
| `customer_id` | Cliente que paga | Sí |
| `store_id` | Tienda proveedora | Sí |
| `payment_method_code` | Método de pago | Sí |
| `amount` | Monto pagado | Sí |
| `currency_code` | Moneda | Sí |
| `payment_reference` | Referencia bancaria o manual | No, recomendado |
| `payment_date` | Fecha del pago | No, recomendado |
| `status` | Estado del pago | Sí |
| `reviewed_by` | Usuario que revisa | No |
| `confirmed_by` | Usuario que confirma | No |
| `rejected_by` | Usuario que rechaza | No |
| `rejection_reason` | Motivo de rechazo | No, obligatorio al rechazar |
| `confirmed_at` | Fecha de confirmación | No |
| `rejected_at` | Fecha de rechazo | No |
| `metadata` | Datos adicionales | No |

---

## 20. Datos mínimos de comprobante de pago

| Campo | Descripción | Obligatorio |
|---|---|---|
| `receipt_code` | Código único del comprobante | Sí |
| `payment_id` | Pago relacionado | Sí |
| `document_id` | Documento o archivo relacionado | Sí si se usa `documents` |
| `receipt_type` | Tipo de comprobante | Sí |
| `file_name` | Nombre del archivo | Sí |
| `file_url` | Ruta o URL interna | Sí si aplica |
| `uploaded_by` | Usuario que cargó | Sí |
| `uploaded_at` | Fecha de carga | Sí |
| `status` | Estado del comprobante | Sí |
| `review_notes` | Observaciones | No |

---

## 21. Datos mínimos de transacción futura

| Campo | Descripción | Obligatorio |
|---|---|---|
| `transaction_code` | Código interno de transacción | Sí |
| `payment_id` | Pago relacionado | Sí |
| `provider_code` | Pasarela o proveedor | Sí |
| `provider_transaction_id` | ID externo | No hasta integración |
| `provider_status` | Estado externo | No |
| `amount` | Monto | Sí |
| `currency_code` | Moneda | Sí |
| `raw_response` | Respuesta de proveedor | No |
| `status` | Estado interno | Sí |

---

## 22. Datos mínimos de reembolso referencial

| Campo | Descripción | Obligatorio |
|---|---|---|
| `refund_code` | Código de reembolso | Sí |
| `payment_id` | Pago relacionado | Sí |
| `order_id` | Orden relacionada | Sí |
| `amount` | Monto reembolsado | Sí |
| `currency_code` | Moneda | Sí |
| `reason` | Motivo | Sí |
| `status` | Estado del reembolso | Sí |
| `created_by` | Usuario que registra | Sí |
| `approved_by` | Usuario que aprueba | No |
| `processed_at` | Fecha procesada | No |

---

## 23. Relación con cotizaciones

| Evento | Relación con cotización |
|---|---|
| Cotización respondida | Define precio base para aprobar |
| Cotización aprobada | Permite crear orden |
| Cotización convertida | Origina orden con monto aprobado |
| Pago de orden | No modifica la cotización histórica |
| Rechazo de pago | No cambia cotización, afecta orden |

---

## 24. Relación con órdenes

| Evento de pago | Efecto en orden |
|---|---|
| Pago creado | Puede cambiar `financial_status` a `PENDING` |
| Comprobante enviado | Cambia `financial_status` a `SUBMITTED` |
| Pago en revisión | Cambia `financial_status` a `IN_REVIEW` |
| Pago confirmado | Cambia `financial_status` a `CONFIRMED` |
| Pago rechazado | Cambia `financial_status` a `REJECTED` |
| Pago parcial | Cambia `financial_status` a `PARTIAL` |
| Pago reembolsado | Cambia `financial_status` a `REFUNDED` si aplica |
| Pago confirmado | Puede permitir iniciar o cerrar orden según política |

---

## 25. Relación con comisiones

| Evento de pago | Efecto en comisión |
|---|---|
| Orden creada | Puede calcular comisión preliminar |
| Pago confirmado | Confirma comisión |
| Pago parcial | Calcula comisión proporcional si se permite |
| Pago rechazado | No confirma comisión |
| Orden cancelada | Puede cancelar comisión |
| Reembolso | Puede ajustar comisión |

---

## 26. Relación con documentos y evidencias

### 26.1 Documentos frecuentes

1. Payment Receipt.
2. Bank Transfer Receipt.
3. Wire Confirmation.
4. ACH Confirmation.
5. Manual Payment Support.
6. Refund Support.
7. Financial Note.
8. Other Document.

### 26.2 Reglas

1. Todo comprobante cargado debe almacenarse como documento o evidencia financiera.
2. El archivo debe respetar tipos permitidos.
3. El comprobante debe asociarse al pago y a la orden.
4. Comprobantes rechazados deben tener motivo.
5. Comprobantes confirmados no deben eliminarse físicamente.
6. Toda validación debe quedar auditada.

---

## 27. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `payments` | Registro principal del pago |
| `payment_receipts` | Comprobantes cargados |
| `payment_transactions` | Transacciones de pasarela futura |
| `payment_status_history` | Historial de estados del pago |
| `refunds` | Reembolsos referenciales |
| `orders` | Orden relacionada |
| `order_events` | Timeline de la orden |
| `commissions` | Comisión calculada |
| `commission_rules` | Reglas de comisión |
| `documents` | Archivos de comprobantes |
| `evidences` | Evidencias financieras si se usa tabla común |
| `stores` | Tienda proveedora |
| `users` | Cliente, admin, operador |
| `notifications` | Notificaciones financieras |
| `audit_logs` | Auditoría financiera |
| `master_catalog_items` | Métodos, estados, monedas, tipos de comprobantes |

---

## 28. Modelo de tabla `payments`

```txt
id
uuid
payment_code
order_id
customer_id
store_id
payment_method_code
amount
currency_code
payment_reference
payment_date
status
reviewed_by
confirmed_by
rejected_by
rejection_reason
confirmed_at
rejected_at
metadata
created_at
updated_at
deleted_at
```

---

## 29. Modelo de tabla `payment_receipts`

```txt
id
uuid
receipt_code
payment_id
document_id
receipt_type
file_name
file_url
uploaded_by
uploaded_at
status
review_notes
created_at
updated_at
```

---

## 30. Modelo de tabla `payment_transactions`

```txt
id
uuid
transaction_code
payment_id
provider_code
provider_transaction_id
provider_status
amount
currency_code
raw_response
status
created_at
updated_at
```

---

## 31. Modelo de tabla `payment_status_history`

```txt
id
uuid
payment_id
old_status
new_status
changed_by
change_reason
created_at
```

---

## 32. Modelo de tabla `refunds`

```txt
id
uuid
refund_code
payment_id
order_id
amount
currency_code
reason
status
created_by
approved_by
processed_at
created_at
updated_at
```

---

## 33. Permisos RBAC del módulo de pagos

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `payments.view` | Ver pagos según scope | Cliente, tienda, admin, auditor, operador |
| `payments.create` | Registrar pago | Cliente, admin |
| `payments.upload_receipt` | Cargar comprobante | Cliente, admin |
| `payments.review` | Revisar pago | Operador, admin |
| `payments.confirm` | Confirmar pago | Admin, operador autorizado |
| `payments.reject` | Rechazar pago | Admin, operador autorizado |
| `payments.cancel` | Cancelar pago no confirmado | Cliente, admin |
| `payments.refund` | Registrar reembolso referencial | Admin |
| `payments.reconcile` | Conciliar pago referencialmente | Admin, operador autorizado |
| `payments.export` | Exportar pagos | Admin, auditor |
| `payments.audit` | Ver auditoría de pagos | Admin, auditor |
| `commissions.view` | Ver comisiones | Tienda, admin, auditor |
| `commissions.calculate` | Calcular comisiones | Sistema, admin |
| `commissions.configure` | Configurar reglas | Admin |
| `commissions.settle` | Registrar liquidación futura | Admin |

---

## 34. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo pagos de sus órdenes |
| Tienda logística | `store` | Pagos de órdenes de sus servicios |
| Transportista | `store` | Pagos de órdenes de transporte propias |
| Agente aduanal | `store` | Pagos de órdenes aduanales propias |
| Almacén fiscal | `store` | Pagos de servicios de almacenamiento propios |
| Inspector | `store` o `assigned` | Pagos de servicios de inspección propios si aplica |
| Operador interno | `module` | Pagos autorizados para revisión |
| Superadministrador | `global` | Todos los pagos |
| Auditor | `global` de consulta | Todos los pagos sin modificar |
| Soporte | `module` limitado | Pagos relacionados con tickets |

---

## 35. Endpoints Nest.js del módulo de pagos

Base path principal:

```txt
/payments
```

### 35.1 Pagos

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/payments` | Listar pagos según scope | `payments.view` | No |
| GET | `/payments/:id` | Ver pago | `payments.view` | No |
| POST | `/payments` | Registrar pago | `payments.create` | `payment.created` |
| PATCH | `/payments/:id/submit` | Enviar pago/comprobante | `payments.upload_receipt` | `payment.submitted` |
| PATCH | `/payments/:id/start-review` | Marcar en revisión | `payments.review` | `payment.in_review` |
| PATCH | `/payments/:id/confirm` | Confirmar pago | `payments.confirm` | `payment.confirmed` |
| PATCH | `/payments/:id/reject` | Rechazar pago | `payments.reject` | `payment.rejected` |
| PATCH | `/payments/:id/cancel` | Cancelar pago | `payments.cancel` | `payment.cancelled` |
| POST | `/payments/:id/receipts` | Cargar comprobante | `payments.upload_receipt` | `payment.receipt.uploaded` |
| GET | `/payments/:id/receipts` | Ver comprobantes | `payments.view` | No |
| GET | `/payments/:id/history` | Historial de estados | `payments.view` | No |
| GET | `/payments/:id/audit` | Auditoría del pago | `payments.audit` | `payment.audit.viewed` |

### 35.2 Pagos por orden

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/orders/:orderId/payments` | Ver pagos de una orden | `payments.view` |
| POST | `/orders/:orderId/payments` | Crear pago desde orden | `payments.create` |

### 35.3 Reembolsos referenciales

Base path:

```txt
/refunds
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/refunds` | Listar reembolsos | `payments.view` | No |
| GET | `/refunds/:id` | Ver reembolso | `payments.view` | No |
| POST | `/refunds` | Registrar reembolso referencial | `payments.refund` | `refund.created` |
| PATCH | `/refunds/:id/approve` | Aprobar reembolso referencial | `payments.refund` | `refund.approved` |
| PATCH | `/refunds/:id/process` | Marcar como procesado | `payments.refund` | `refund.processed` |

---

## 36. DTOs sugeridos

### 36.1 `CreatePaymentDto`

```json
{
  "orderId": 1001,
  "paymentMethodCode": "BANK_TRANSFER",
  "amount": 450.00,
  "currencyCode": "USD",
  "paymentReference": "DEMO-BANK-REF-001",
  "paymentDate": "2026-02-01",
  "notes": "Bank transfer submitted by demo client"
}
```

### 36.2 `SubmitPaymentDto`

```json
{
  "paymentReference": "DEMO-BANK-REF-001",
  "paymentDate": "2026-02-01",
  "receiptDocumentId": 5001,
  "customerNotes": "Payment receipt uploaded for review"
}
```

### 36.3 `ConfirmPaymentDto`

```json
{
  "confirmationNotes": "Receipt verified and amount matches order total",
  "confirmedAmount": 450.00,
  "confirmCommission": true
}
```

### 36.4 `RejectPaymentDto`

```json
{
  "rejectionReason": "Receipt amount does not match order total",
  "allowResubmission": true
}
```

### 36.5 `CancelPaymentDto`

```json
{
  "cancelReason": "Customer will submit a new payment receipt"
}
```

### 36.6 `CreatePaymentReceiptDto`

```json
{
  "paymentId": 100,
  "receiptType": "BANK_TRANSFER_RECEIPT",
  "documentId": 5001,
  "reviewNotes": "Initial receipt uploaded"
}
```

### 36.7 `CreateRefundDto`

```json
{
  "paymentId": 100,
  "orderId": 1001,
  "amount": 100.00,
  "currencyCode": "USD",
  "reason": "Partial refund due to cancelled service component"
}
```

---

## 37. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `PaymentsDashboardPage` | Vista general financiera |
| `PaymentListPage` | Listado de pagos |
| `PaymentDetailPage` | Detalle de pago |
| `PaymentForm` | Registrar pago |
| `PaymentReceiptUpload` | Cargar comprobante |
| `PaymentStatusBadge` | Estado de pago |
| `OrderFinancialStatusBadge` | Estado financiero de orden |
| `PaymentReviewPanel` | Revisar, confirmar o rechazar pago |
| `PaymentHistoryTimeline` | Historial de estados del pago |
| `PaymentReceiptPanel` | Comprobantes asociados |
| `PaymentSummaryCard` | Monto, moneda, método, estado |
| `CommissionPreviewCard` | Comisión y neto proveedor |
| `PaymentActionsPanel` | Acciones visibles por estado y permisos |
| `RefundForm` | Registrar reembolso referencial |
| `RefundListPage` | Listado de reembolsos |
| `PaymentFiltersBar` | Filtros por estado, fecha, cliente, tienda, método |
| `FinancialReportCards` | Tarjetas de métricas financieras |

---

## 38. Páginas React.js por perfil

### 38.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/payments` | `ClientPaymentsPage` | Ver pagos propios |
| `/client/payments/:id` | `ClientPaymentDetailPage` | Ver detalle y comprobante |
| `/client/orders/:id/payment` | `ClientOrderPaymentPage` | Registrar pago de una orden |

### 38.2 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/payments` | `StorePaymentsPage` | Ver pagos de órdenes de la tienda |
| `/store/payments/:id` | `StorePaymentDetailPage` | Ver pago, comisión y neto proveedor |
| `/store/commissions` | `StoreCommissionsPage` | Ver comisiones asociadas |

### 38.3 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/payments` | `OperatorPaymentsPage` | Revisar pagos autorizados |
| `/operator/payments/:id` | `OperatorPaymentDetailPage` | Validar comprobantes y actualizar estado |

### 38.4 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/payments` | `AdminPaymentsPage` | Vista global de pagos |
| `/admin/payments/:id` | `AdminPaymentDetailPage` | Confirmar, rechazar, auditar y gestionar pagos |
| `/admin/refunds` | `AdminRefundsPage` | Gestionar reembolsos referenciales |
| `/admin/commissions` | `AdminCommissionsPage` | Gestionar comisiones |
| `/admin/financial-reports` | `AdminFinancialReportsPage` | Reportes financieros |

### 38.5 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/payments` | `AuditorPaymentsPage` | Consulta de pagos |
| `/auditor/payments/:id` | `AuditorPaymentDetailPage` | Consulta de comprobantes, historial y logs |
| `/auditor/commissions` | `AuditorCommissionsPage` | Consulta de comisiones |

---

## 39. Servicios frontend API

Archivo sugerido:

```txt
/src/services/paymentsApi.ts
```

Funciones mínimas:

```ts
getPayments(params)
getPaymentById(id)
createPayment(payload)
submitPayment(id, payload)
startPaymentReview(id, payload)
confirmPayment(id, payload)
rejectPayment(id, payload)
cancelPayment(id, payload)
uploadPaymentReceipt(id, formData)
getPaymentReceipts(id)
getPaymentHistory(id)
getPaymentAudit(id)
getOrderPayments(orderId)
createOrderPayment(orderId, payload)
getRefunds(params)
getRefundById(id)
createRefund(payload)
approveRefund(id, payload)
processRefund(id, payload)
```

---

## 40. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `usePayments` | Listar pagos con filtros |
| `usePaymentDetail` | Cargar detalle de pago |
| `useCreatePayment` | Registrar pago |
| `useSubmitPayment` | Enviar comprobante |
| `usePaymentReviewActions` | Confirmar o rechazar pago |
| `usePaymentReceipts` | Gestionar comprobantes |
| `usePaymentHistory` | Historial de pago |
| `useOrderPayments` | Pagos por orden |
| `useRefunds` | Listar reembolsos |
| `useCreateRefund` | Registrar reembolso |
| `usePaymentPermissions` | Acciones visibles según permisos |
| `usePaymentFilters` | Filtros de pagos |
| `useFinancialMetrics` | Métricas financieras |

---

## 41. Validaciones backend obligatorias

### 41.1 Crear pago

1. Usuario autenticado.
2. Usuario tiene `payments.create`.
3. Orden existe.
4. Orden pertenece al cliente o usuario tiene scope autorizado.
5. Orden no está cerrada ni cancelada, salvo pago administrativo permitido.
6. Monto mayor que cero.
7. Moneda válida y activa.
8. Método de pago válido y activo.
9. No exceder saldo pendiente si se controla pago parcial.
10. Estado inicial válido.

### 41.2 Cargar comprobante

1. Pago existe.
2. Pago pertenece al usuario o scope autorizado.
3. Pago no está confirmado ni cancelado.
4. Archivo válido.
5. Tipo de comprobante válido.
6. Documento se vincula a pago y orden.
7. Estado cambia a `SUBMITTED` si aplica.

### 41.3 Iniciar revisión

1. Usuario tiene `payments.review`.
2. Pago está `SUBMITTED`.
3. Existe comprobante cargado si el método lo exige.
4. Estado cambia a `IN_REVIEW`.

### 41.4 Confirmar pago

1. Usuario tiene `payments.confirm`.
2. Pago está `SUBMITTED` o `IN_REVIEW`.
3. Monto confirmado no puede ser negativo.
4. Monto confirmado debe coincidir con la orden o respetar regla de parcial.
5. Si se confirma, actualizar orden.
6. Si se confirma, calcular o confirmar comisión.
7. Registrar usuario y fecha.
8. Auditar evento.

### 41.5 Rechazar pago

1. Usuario tiene `payments.reject`.
2. Pago no está confirmado.
3. Motivo de rechazo obligatorio.
4. Actualizar estado de pago y orden.
5. Notificar al cliente.
6. Auditar rechazo.

### 41.6 Cancelar pago

1. Pago no está confirmado.
2. Usuario tiene permiso o es dueño del pago.
3. Motivo obligatorio.
4. Actualizar estado y auditoría.

### 41.7 Reembolso referencial

1. Pago confirmado existe.
2. Usuario tiene `payments.refund`.
3. Monto de reembolso mayor que cero.
4. Monto no debe exceder monto confirmado.
5. Motivo obligatorio.
6. Actualizar estado si se procesa.
7. Auditar evento.

---

## 42. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Crear pago y actualizar estado financiero de orden.
2. Enviar comprobante y crear documento relacionado.
3. Confirmar pago, actualizar orden y confirmar comisión.
4. Rechazar pago y actualizar orden.
5. Registrar reembolso y actualizar pago/orden si aplica.
6. Confirmar pago parcial y recalcular saldo/comisión proporcional si se implementa.

Si falla una parte, la operación debe hacer rollback.

---

## 43. Auditoría del módulo de pagos

| Evento | Descripción | Criticidad |
|---|---|---|
| `payment.created` | Pago creado | high |
| `payment.submitted` | Pago enviado por cliente | high |
| `payment.receipt.uploaded` | Comprobante cargado | high |
| `payment.in_review` | Pago en revisión | medium |
| `payment.confirmed` | Pago confirmado | critical |
| `payment.rejected` | Pago rechazado | high |
| `payment.cancelled` | Pago cancelado | high |
| `payment.refunded` | Pago reembolsado | critical |
| `payment.reconciled` | Pago conciliado referencialmente | critical |
| `payment.amount.changed` | Monto cambiado | critical |
| `payment.method.changed` | Método cambiado | high |
| `payment.unauthorized_access` | Intento no autorizado | high |
| `refund.created` | Reembolso creado | high |
| `refund.approved` | Reembolso aprobado | critical |
| `refund.processed` | Reembolso procesado | critical |
| `commission.confirmed_from_payment` | Comisión confirmada por pago | high |

---

## 44. Notificaciones del módulo de pagos

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Pago registrado | Cliente | Tu pago fue registrado | `/client/payments/:id` |
| Comprobante cargado | Operador / admin | Nuevo comprobante pendiente de revisión | `/admin/payments/:id` |
| Pago en revisión | Cliente | Tu pago está en revisión | `/client/payments/:id` |
| Pago confirmado | Cliente / tienda | El pago fue confirmado | `/orders/:id/payment` |
| Pago rechazado | Cliente | Tu pago fue rechazado. Revisa el motivo | `/client/payments/:id` |
| Pago cancelado | Cliente / admin | El pago fue cancelado | `/payments/:id` |
| Reembolso registrado | Cliente / admin | Se registró un reembolso referencial | `/refunds/:id` |
| Comisión confirmada | Tienda / admin | Comisión confirmada para la orden | `/commissions/:id` |
| Pago requiere soporte | Soporte | Se abrió incidencia de pago | `/support/tickets/:id` |

---

## 45. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Pagos por estado | Cantidad y monto por estado | Admin, auditor |
| Pagos por método | Distribución por método de pago | Admin |
| Pagos por tienda | Pagos asociados a cada proveedor | Admin, tienda |
| Pagos por cliente | Historial financiero por cliente | Admin, cliente |
| Pagos confirmados | Pagos validados por periodo | Admin, auditor |
| Pagos rechazados | Rechazos y motivos | Admin, auditor |
| Pagos pendientes de revisión | Backlog financiero | Admin, operador |
| Comisiones generadas | Comisión marketplace por periodo | Admin |
| Neto proveedor | Monto neto por tienda | Admin, tienda |
| Reembolsos | Reembolsos referenciales | Admin, auditor |
| Órdenes pendientes de pago | Órdenes con financial_status pendiente | Admin, operador |
| Conciliación referencial | Pagos pendientes vs confirmados | Admin |

---

## 46. Métricas del dashboard financiero

### 46.1 Cliente

1. Pagos registrados.
2. Pagos pendientes.
3. Pagos en revisión.
4. Pagos confirmados.
5. Pagos rechazados.
6. Órdenes pendientes de pago.

### 46.2 Tienda logística

1. Pagos confirmados de sus órdenes.
2. Pagos pendientes de confirmación.
3. Comisiones asociadas.
4. Neto proveedor estimado.
5. Órdenes pagadas.
6. Órdenes pendientes de pago.

### 46.3 Operador interno

1. Pagos pendientes de revisión.
2. Comprobantes cargados hoy.
3. Pagos rechazados hoy.
4. Pagos confirmados hoy.
5. Pagos con incidencias.

### 46.4 Superadministrador

1. Total cobrado.
2. Total pendiente.
3. Total confirmado.
4. Total rechazado.
5. Total de comisiones.
6. Neto proveedor acumulado.
7. Pagos por método.
8. Pagos por tienda.
9. Pagos por periodo.
10. Reembolsos referenciales.

### 46.5 Auditor

1. Pagos confirmados.
2. Pagos rechazados.
3. Reembolsos.
4. Cambios críticos.
5. Usuarios que confirmaron pagos.
6. Comprobantes validados.
7. Comisiones confirmadas.

---

## 47. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Pago no existe | `RESOURCE_NOT_FOUND` | 404 |
| Orden no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Monto inválido | `VALIDATION_ERROR` | 400 |
| Moneda inválida | `VALIDATION_ERROR` | 400 |
| Método de pago inválido | `VALIDATION_ERROR` | 400 |
| Orden cerrada o cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Pago ya confirmado | `BUSINESS_RULE_ERROR` | 422 |
| Pago ya cancelado | `BUSINESS_RULE_ERROR` | 422 |
| Comprobante requerido | `PAYMENT_RECEIPT_REQUIRED` | 422 |
| Archivo inválido | `FILE_UPLOAD_ERROR` | 400 |
| Rechazo sin motivo | `VALIDATION_ERROR` | 400 |
| Reembolso mayor al pago | `BUSINESS_RULE_ERROR` | 422 |
| Doble confirmación | `PAYMENT_ALREADY_CONFIRMED` | 409 |

---

## 48. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `CREATED` | Creado | Completar datos |
| `PENDING` | Pendiente | Cargar comprobante |
| `SUBMITTED` | Enviado | Revisar |
| `IN_REVIEW` | En revisión | Confirmar o rechazar |
| `CONFIRMED` | Confirmado | Ver comisión / continuar orden |
| `REJECTED` | Rechazado | Corregir y reenviar |
| `PARTIAL` | Parcial | Completar pago |
| `CANCELLED` | Cancelado | Ver motivo |
| `REFUNDED` | Reembolsado | Ver reembolso |
| `FAILED` | Fallido | Reintentar, futuro |

---

## 49. Reglas UX del módulo de pagos

1. El cliente debe ver claramente el monto a pagar.
2. El cliente debe ver el estado financiero de su orden.
3. El formulario debe mostrar métodos de pago activos.
4. La carga de comprobante debe ser simple y visible.
5. El cliente debe ver el motivo de rechazo si aplica.
6. El operador debe ver cola de pagos pendientes de revisión.
7. El administrador debe ver detalle completo de pago, orden, cliente y tienda.
8. La tienda debe ver pagos confirmados y neto proveedor.
9. El auditor debe ver modo solo lectura.
10. Las acciones deben mostrarse según permisos y estado.
11. Los montos deben formatearse con moneda.
12. Los cambios críticos deben mostrar confirmación previa.
13. Confirmar pago debe requerir doble confirmación visual.
14. Rechazar pago debe exigir motivo.
15. El historial debe mostrarse como timeline.

---

## 50. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Cliente pagos | `Dashboard cliente > Mis pagos` |
| Cliente pago detalle | `Dashboard cliente > Mis pagos > PAY-2026-001` |
| Pago de orden cliente | `Mis órdenes > ORD-2026-001 > Pago` |
| Tienda pagos | `Dashboard tienda > Pagos` |
| Tienda comisiones | `Dashboard tienda > Comisiones` |
| Operador pagos | `Operaciones > Pagos por revisar` |
| Admin pagos | `Panel global > Pagos` |
| Admin pago detalle | `Panel global > Pagos > PAY-2026-001` |
| Admin reembolsos | `Panel global > Reembolsos` |
| Auditor pagos | `Auditoría > Pagos` |

---

## 51. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Pago demo | `PAY-2026-001` | Pago asociado a orden demo |
| Orden demo | `ORD-2026-001` | Orden relacionada |
| Cliente demo | `client.demo@example.com` | Cliente pagador |
| Tienda demo | `STO-ADU-001` | Tienda proveedora |
| Método | `BANK_TRANSFER` | Transferencia bancaria |
| Referencia | `DEMO-BANK-REF-001` | Referencia bancaria demo |
| Monto | `450.00` | Monto de orden demo |
| Moneda | `USD` | Moneda base |
| Estado | `CONFIRMED` | Pago confirmado |
| Comprobante | `DOC-2026-005` | Comprobante demo |
| Comisión | `COM-2026-001` | Comisión asociada |

---

## 52. Ejemplo JSON de pago demo

```json
{
  "paymentCode": "PAY-2026-001",
  "orderCode": "ORD-2026-001",
  "customerEmail": "client.demo@example.com",
  "storeCode": "STO-ADU-001",
  "paymentMethodCode": "BANK_TRANSFER",
  "amount": 450.00,
  "currencyCode": "USD",
  "paymentReference": "DEMO-BANK-REF-001",
  "paymentDate": "2026-02-01",
  "status": "CONFIRMED",
  "confirmedAt": "2026-02-01T16:00:00.000Z",
  "isDemo": true
}
```

---

## 53. Ejemplo JSON de comprobante demo

```json
{
  "receiptCode": "RCPT-2026-001",
  "paymentCode": "PAY-2026-001",
  "documentCode": "DOC-2026-005",
  "receiptType": "BANK_TRANSFER_RECEIPT",
  "fileName": "demo-payment-receipt.pdf",
  "status": "VALIDATED",
  "reviewNotes": "Demo receipt validated successfully",
  "isDemo": true
}
```

---

## 54. Ejemplo JSON de reembolso referencial demo

```json
{
  "refundCode": "REF-2026-001",
  "paymentCode": "PAY-2026-001",
  "orderCode": "ORD-2026-001",
  "amount": 50.00,
  "currencyCode": "USD",
  "reason": "Demo partial refund for service adjustment",
  "status": "CREATED",
  "isDemo": true
}
```

---

## 55. Pruebas funcionales mínimas

### 55.1 Cliente

1. Cliente puede ver órdenes pendientes de pago.
2. Cliente puede registrar pago.
3. Cliente puede cargar comprobante.
4. Cliente puede ver estado del pago.
5. Cliente puede ver motivo de rechazo.
6. Cliente no puede ver pagos de otros clientes.
7. Cliente no puede confirmar pagos.

### 55.2 Tienda logística

1. Tienda puede ver pagos de sus órdenes.
2. Tienda puede ver comisiones asociadas.
3. Tienda puede ver neto proveedor.
4. Tienda no puede ver pagos de otra tienda.
5. Tienda no puede confirmar pagos salvo permiso especial.

### 55.3 Operador interno

1. Operador puede ver pagos pendientes de revisión.
2. Operador puede iniciar revisión.
3. Operador puede confirmar pago si tiene permiso.
4. Operador puede rechazar pago con motivo.
5. Operador ve historial financiero.

### 55.4 Superadministrador

1. Admin puede ver todos los pagos.
2. Admin puede confirmar o rechazar pagos.
3. Admin puede registrar reembolsos referenciales.
4. Admin puede ver reportes financieros.
5. Admin puede ver auditoría.

### 55.5 Auditor

1. Auditor puede ver pagos.
2. Auditor puede ver comprobantes.
3. Auditor puede ver comisiones.
4. Auditor puede ver historial y logs.
5. Auditor no puede modificar pagos.

---

## 56. Pruebas técnicas API

1. `POST /payments` crea pago válido.
2. `POST /payments` rechaza monto cero o negativo.
3. `POST /payments` rechaza orden inexistente.
4. `POST /payments/:id/receipts` carga comprobante válido.
5. `PATCH /payments/:id/start-review` cambia a `IN_REVIEW`.
6. `PATCH /payments/:id/confirm` confirma pago válido.
7. Confirmar pago actualiza `orders.financial_status`.
8. Confirmar pago calcula o confirma comisión.
9. `PATCH /payments/:id/reject` exige motivo.
10. Rechazar pago actualiza estado financiero de orden.
11. `PATCH /payments/:id/cancel` rechaza cancelar pago confirmado.
12. `POST /refunds` crea reembolso referencial válido.
13. `GET /payments` respeta scope.
14. `GET /payments/:id/history` devuelve historial.
15. Eventos críticos generan `audit_logs`.
16. Eventos principales generan `notifications`.

---

## 57. Criterios de aceptación

El módulo de pagos se considera aceptado cuando:

1. Se pueden crear pagos asociados a órdenes.
2. Se pueden cargar comprobantes.
3. Se pueden revisar pagos.
4. Se pueden confirmar pagos.
5. Se pueden rechazar pagos con motivo.
6. Se pueden cancelar pagos no confirmados.
7. Se pueden registrar reembolsos referenciales.
8. Confirmar pago actualiza el estado financiero de la orden.
9. Rechazar pago actualiza el estado financiero de la orden.
10. Confirmar pago calcula o confirma comisión.
11. Se conserva historial de estados del pago.
12. Los comprobantes se asocian al pago y a la orden.
13. Los permisos RBAC se respetan.
14. Los scopes de datos se respetan.
15. Cliente solo consulta sus pagos.
16. Tienda solo consulta pagos de sus órdenes.
17. Auditor consulta sin modificar.
18. Superadministrador consulta globalmente.
19. Eventos críticos generan auditoría.
20. Eventos principales generan notificaciones.
21. Reportes básicos de pagos funcionan.
22. Endpoints están documentados en Swagger.
23. Pruebas funcionales y API pasan.
24. El diseño permite pasarela futura sin reescribir el core.
25. No existe dependencia técnica con Odoo ni con pasarela real en MVP.

---

## 58. Tareas técnicas para Antigravity

### 58.1 Base de datos

1. Validar tabla `payments`.
2. Crear o validar tabla `payment_receipts`.
3. Crear o validar tabla `payment_transactions` para futuro.
4. Crear o validar tabla `payment_status_history`.
5. Crear o validar tabla `refunds`.
6. Validar relación con `orders`.
7. Validar relación con `commissions`.
8. Crear índices por orden, cliente, tienda, estado, método, fecha y moneda.
9. Crear seed de pago demo.
10. Crear seed de comprobante demo.
11. Crear seed de reembolso demo opcional.
12. Crear validaciones de transiciones.

### 58.2 Backend Nest.js

1. Crear módulo `payments`.
2. Crear `PaymentsController`.
3. Crear `PaymentsService`.
4. Crear `PaymentReceiptsController` o endpoints anidados.
5. Crear `RefundsController`.
6. Crear `RefundsService`.
7. Crear DTOs de pagos.
8. Crear DTOs de comprobantes.
9. Crear DTOs de reembolsos.
10. Crear endpoints de pagos.
11. Crear endpoints de comprobantes.
12. Crear endpoints de reembolsos.
13. Crear validaciones RBAC y scope.
14. Crear validaciones de estados.
15. Crear integración con órdenes.
16. Crear integración con comisiones.
17. Crear integración con documentos.
18. Crear auditoría.
19. Crear notificaciones.
20. Crear pruebas unitarias y API.
21. Preparar interfaz `PaymentProviderAdapter` para pasarela futura.

### 58.3 Frontend React.js

1. Crear `PaymentsDashboardPage`.
2. Crear `PaymentListPage`.
3. Crear `PaymentDetailPage`.
4. Crear `PaymentForm`.
5. Crear `PaymentReceiptUpload`.
6. Crear `PaymentReviewPanel`.
7. Crear `PaymentHistoryTimeline`.
8. Crear `PaymentReceiptPanel`.
9. Crear `PaymentSummaryCard`.
10. Crear `CommissionPreviewCard`.
11. Crear `RefundForm`.
12. Crear `RefundListPage`.
13. Crear filtros por estado, método, cliente, tienda y fecha.
14. Crear hooks de pagos.
15. Crear guards visuales por permisos.
16. Crear estados loading, empty, error y forbidden.
17. Crear vistas por perfil.

### 58.4 QA

1. Probar creación de pago.
2. Probar carga de comprobante.
3. Probar revisión.
4. Probar confirmación.
5. Probar rechazo.
6. Probar cancelación.
7. Probar reembolso referencial.
8. Probar actualización de orden.
9. Probar cálculo de comisión.
10. Probar permisos y scopes.
11. Probar historial.
12. Probar auditoría.
13. Probar notificaciones.
14. Probar reportes.
15. Probar casos de error.

---

## 59. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto financiero de marketplace, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `24_PAYMENTS_MASTER_PLAN.md` como fuente principal para implementar el módulo de pagos del marketplace logístico.

Objetivo:
Implementar un módulo de pagos que permita registrar pagos asociados a órdenes, cargar comprobantes, revisar pagos, confirmar pagos, rechazar pagos, cancelar pagos no confirmados, registrar reembolsos referenciales, actualizar el estado financiero de la orden, calcular o confirmar comisiones, generar historial, auditoría, notificaciones, reportes y métricas.

Reglas obligatorias:
1. Todo pago del MVP debe asociarse a una orden.
2. Todo pago debe tener método, monto, moneda y estado.
3. Validar estados y transiciones en backend.
4. No permitir confirmar pagos sin orden válida.
5. No permitir confirmar pagos ya confirmados.
6. No permitir rechazar pagos sin motivo.
7. No permitir reembolsos superiores al monto confirmado.
8. Confirmar pago debe actualizar `orders.financial_status`.
9. Rechazar pago debe actualizar `orders.financial_status`.
10. Confirmar pago debe calcular o confirmar comisión.
11. Comisiones y montos críticos se calculan en backend.
12. Comprobantes confirmados no deben eliminarse físicamente.
13. Eventos críticos deben auditarse.
14. Eventos principales deben generar notificaciones.
15. Respetar scopes de datos: own, store, assigned, module, global.
16. Preparar una interfaz futura `PaymentProviderAdapter`.
17. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
18. Respetar `13_API_SPECIFICATION.md`.
19. Respetar `15_MASTER_CATALOGS_MVP.md`.
20. Respetar `18_QUOTATION_WORKFLOW.md`.
21. Respetar `19_ORDER_WORKFLOW.md`.
22. No integrar Odoo ni pasarela real en MVP; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de pagos.
3. DTOs de comprobantes.
4. DTOs de reembolsos.
5. Endpoints Nest.js.
6. Servicios backend.
7. Validaciones RBAC y scope.
8. Validaciones de transición de estados.
9. Historial de pagos.
10. Integración con órdenes.
11. Integración con comisiones.
12. Integración con documentos.
13. Auditoría.
14. Notificaciones.
15. Componentes React.js.
16. Hooks frontend.
17. Pruebas unitarias y API.
18. Seeds demo de pagos.
19. Documentación Swagger.
20. Interfaz futura de proveedor de pago.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, permisos, comprobantes, comisiones, auditoría, notificaciones, reportes y QA.
```

---

## 60. Checklist de uso en Antigravity

- [ ] Guardar este documento como `24_PAYMENTS_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `18_QUOTATION_WORKFLOW.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Crear DTOs de pagos.
- [ ] Crear DTOs de comprobantes.
- [ ] Crear DTOs de reembolsos.
- [ ] Crear endpoints de pagos.
- [ ] Crear endpoints de comprobantes.
- [ ] Crear endpoints de reembolsos.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear historial de pagos.
- [ ] Crear integración con órdenes.
- [ ] Crear integración con comisiones.
- [ ] Crear integración con documentos.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Preparar interfaz futura de pasarela de pago.
- [ ] Confirmar que no existe integración real con Odoo ni pasarela real en MVP.

---

## 61. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión financiera | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

