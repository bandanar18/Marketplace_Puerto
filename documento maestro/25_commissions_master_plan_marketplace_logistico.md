# 25_COMMISSIONS_MASTER_PLAN.md

# Documento Maestro del Plan de Comisiones
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `25_COMMISSIONS_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, financiero, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Comisiones del marketplace |
| Módulos relacionados | Pagos, órdenes, cotizaciones, servicios, tiendas, reportes, auditoría, notificaciones, configuración global |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `24_PAYMENTS_MASTER_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro del módulo de comisiones** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de un módulo que permita configurar reglas de comisión, calcular comisiones por orden, confirmar comisiones al confirmar pagos, registrar el monto neto del proveedor, auditar cambios financieros, consultar comisiones por tienda, generar reportes y preparar una arquitectura futura para liquidaciones o payouts.

El módulo de comisiones debe permitir:

1. Crear reglas de comisión globales.
2. Crear reglas de comisión por categoría de servicio.
3. Crear reglas de comisión por tipo de tienda.
4. Crear reglas de comisión por tienda específica.
5. Calcular comisión referencial desde cotización, orden o pago.
6. Congelar la comisión aplicada a una orden.
7. Registrar monto neto del proveedor.
8. Confirmar comisión cuando el pago sea confirmado.
9. Cancelar o ajustar comisión en casos controlados.
10. Consultar comisiones por tienda, orden, servicio, categoría y periodo.
11. Auditar cambios de reglas y montos.
12. Generar reportes financieros.
13. Preparar liquidaciones futuras sin ejecutar payouts reales en MVP.

---

## 3. Objetivo general

Diseñar e implementar un módulo de comisiones seguro, trazable, auditable y escalable que permita al marketplace calcular, confirmar, consultar y reportar la comisión generada por cada operación logística, separando claramente el monto del cliente, la comisión del marketplace y el neto referencial del proveedor.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del módulo de comisiones.
2. Definir actores participantes.
3. Definir tipos de comisiones.
4. Definir reglas de comisión.
5. Definir jerarquía de aplicación de reglas.
6. Definir estados de comisión.
7. Definir fórmulas de cálculo.
8. Definir relación con cotizaciones.
9. Definir relación con órdenes.
10. Definir relación con pagos.
11. Definir relación con tiendas y servicios.
12. Definir relación con reportes financieros.
13. Definir permisos RBAC y scopes.
14. Definir endpoints Nest.js.
15. Definir componentes React.js.
16. Definir validaciones backend.
17. Definir auditoría y notificaciones.
18. Definir reportes y métricas.
19. Definir casos de error.
20. Definir seeds demo.
21. Definir pruebas funcionales y técnicas.
22. Servir como prompt para Antigravity.

---

## 5. Alcance del módulo de comisiones MVP

El MVP debe cubrir el siguiente flujo principal:

```txt
Servicio publicado con categoría y tienda
  ↓
Cliente solicita cotización
  ↓
Tienda responde precio
  ↓
Cliente aprueba cotización
  ↓
Se crea orden
  ↓
Backend selecciona regla de comisión aplicable
  ↓
Backend calcula comisión referencial
  ↓
Orden conserva comisión y neto proveedor
  ↓
Cliente registra pago
  ↓
Pago confirmado
  ↓
Comisión pasa a confirmada
  ↓
Tienda y admin consultan comisión
  ↓
Reportes financieros actualizados
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Payout automático real a tiendas.
2. Split payments real en pasarela.
3. Liquidación bancaria automática.
4. Facturación fiscal automática de comisión.
5. Retenciones fiscales automáticas.
6. Cálculo de impuestos por jurisdicción.
7. Conciliación bancaria automática.
8. Wallet interna.
9. Escrow regulado.
10. Comisiones dinámicas por riesgo avanzado.
11. Motor de revenue sharing multi-proveedor.
12. Integración directa con Odoo Accounting.
13. Integración directa con pasarela real.
14. Integración con bancos.
15. Contabilidad fiscal oficial.
16. Reportes regulatorios oficiales.

---

## 7. Principios funcionales del módulo de comisiones

Antigravity debe respetar los siguientes principios:

1. Toda comisión debe asociarse a una orden.
2. Toda comisión debe asociarse a una tienda proveedora.
3. Toda comisión debe asociarse a una regla de comisión aplicada.
4. La comisión debe calcularse en backend.
5. El frontend no debe ser fuente de verdad para montos críticos.
6. La comisión aplicada a una orden debe congelarse para preservar histórico.
7. Cambios futuros en reglas no deben modificar comisiones históricas ya confirmadas.
8. Una comisión preliminar puede calcularse antes del pago.
9. Una comisión confirmada debe depender de un pago confirmado o regla administrativa.
10. Una comisión cancelada debe tener motivo.
11. Un ajuste de comisión debe auditarse.
12. Tiendas solo ven sus comisiones.
13. Cliente no necesita ver la comisión, salvo política explícita.
14. Superadministrador ve todas las comisiones.
15. Auditor consulta sin modificar.
16. El diseño debe permitir liquidaciones futuras sin implementarlas en MVP.
17. No debe existir dependencia técnica con Odoo.

---

## 8. Actores del módulo de comisiones

| Actor | Perfil | Participación |
|---|---|---|
| Superadministrador | `PROF-SUP-003` | Configura reglas, consulta comisiones, aprueba ajustes y reportes globales |
| Operador interno | `PROF-OPE-004` | Consulta comisiones y apoya revisión financiera según permisos |
| Tienda logística | `PROF-TIE-002` | Consulta comisiones de sus órdenes y neto proveedor |
| Transportista | `PROF-TRA-006` | Consulta comisiones de servicios de transporte propios |
| Agente aduanal | `PROF-ADU-007` | Consulta comisiones de servicios aduanales propios |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Consulta comisiones de almacenamiento propio |
| Inspector | `PROF-INS-005` | Consulta comisiones de inspecciones propias si opera como proveedor |
| Auditor | `PROF-AUD-008` | Consulta comisiones, reglas aplicadas, pagos y auditoría sin modificar |
| Cliente final | `PROF-CLI-001` | Normalmente no gestiona comisiones; puede ver total pagado de la orden |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias financieras sin modificar reglas críticas |

---

## 9. Entidades principales del módulo de comisiones

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Regla de comisión | `commission_rules` | Configuración para calcular comisión |
| Comisión | `commissions` | Comisión calculada para una orden/pago |
| Historial de comisión | `commission_status_history` | Cambios de estado de comisión |
| Ajuste de comisión | `commission_adjustments` | Ajustes manuales controlados |
| Liquidación futura | `commission_settlements` | Agrupación referencial para payout futuro |
| Orden | `orders` | Orden que genera comisión |
| Pago | `payments` | Pago que confirma comisión |
| Servicio | `services` | Servicio contratado |
| Tienda | `stores` | Proveedor que recibe neto |
| Catálogo | `master_catalog_items` | Tipos, estados y categorías |
| Auditoría | `audit_logs` | Trazabilidad crítica |
| Notificación | `notifications` | Avisos financieros |

---

## 10. Modelo operativo general

```txt
Commission Rule
  ↓
Service / Store / Category Match
  ↓
Order Created
  ↓
Commission Calculated
  ↓
Payment Confirmed
  ↓
Commission Confirmed
  ↓
Provider Net Amount Registered
  ↓
Reports / Audit / Future Settlement
```

---

## 11. Tipos de comisión

| Código | Nombre | Descripción | MVP |
|---|---|---|---|
| `PERCENTAGE` | Porcentaje | Porcentaje sobre subtotal de la orden | Sí |
| `FIXED_AMOUNT` | Monto fijo | Comisión fija por operación | Sí |
| `MIXED` | Mixta | Porcentaje más monto fijo | Opcional |
| `TIERED` | Escalonada | Comisión por rango de monto | Futuro |
| `CATEGORY_BASED` | Por categoría | Comisión por categoría de servicio | Sí |
| `STORE_BASED` | Por tienda | Comisión específica para una tienda | Sí |
| `PROMOTIONAL` | Promocional | Comisión temporal reducida o especial | Futuro |
| `ZERO_COMMISSION` | Sin comisión | Comisión cero para servicios internos o promociones | Sí |

---

## 12. Estados de regla de comisión

| Estado | Código | Descripción |
|---|---|---|
| Borrador | `DRAFT` | Regla creada pero no activa |
| Activa | `ACTIVE` | Regla disponible para cálculo |
| Pausada | `PAUSED` | Regla temporalmente no aplicable |
| Expirada | `EXPIRED` | Regla fuera de vigencia |
| Archivada | `ARCHIVED` | Regla histórica no editable operativamente |

---

## 13. Estados de comisión

| Estado | Código | Descripción |
|---|---|---|
| Calculada | `CALCULATED` | Comisión calculada de forma referencial |
| Pendiente | `PENDING` | Comisión pendiente de confirmación de pago |
| Confirmada | `CONFIRMED` | Comisión confirmada por pago confirmado |
| Ajustada | `ADJUSTED` | Comisión modificada por ajuste autorizado |
| Cancelada | `CANCELLED` | Comisión anulada por cancelación o rechazo |
| En liquidación | `IN_SETTLEMENT` | Agrupada para liquidación futura referencial |
| Liquidada | `SETTLED` | Marcada como liquidada referencialmente |
| Revertida | `REVERSED` | Revertida por reembolso o corrección |

---

## 14. Transiciones válidas de comisión

```txt
CALCULATED → PENDING
PENDING → CONFIRMED
PENDING → CANCELLED
CONFIRMED → ADJUSTED
CONFIRMED → IN_SETTLEMENT
CONFIRMED → REVERSED
ADJUSTED → IN_SETTLEMENT
IN_SETTLEMENT → SETTLED
CONFIRMED → CANCELLED, solo por operación administrativa controlada
SETTLED → REVERSED, solo por proceso excepcional futuro
```

---

## 15. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `SETTLED` | `CALCULATED` | No debe volver a estado inicial |
| `CANCELLED` | `CONFIRMED` | Comisión cancelada requiere nueva comisión o ajuste formal |
| `REVERSED` | `CONFIRMED` | Reverso requiere nueva operación formal |
| `CONFIRMED` | `CALCULATED` | No se debe retroceder sin auditoría especial |
| `IN_SETTLEMENT` | `PENDING` | Una comisión agrupada no debe volver a pendiente sin reverso |

---

## 16. Jerarquía de aplicación de reglas

Cuando varias reglas puedan aplicar, el backend debe resolver la regla usando una jerarquía clara.

Orden recomendado:

```txt
1. Regla específica por tienda + servicio
2. Regla específica por tienda + categoría
3. Regla específica por tienda
4. Regla por categoría de servicio
5. Regla por tipo de tienda
6. Regla global activa
7. Regla fallback del sistema
```

---

## 17. Fórmulas de comisión

### 17.1 Comisión porcentual

```txt
commission_amount = subtotal_amount * commission_percentage / 100
provider_net_amount = subtotal_amount - commission_amount
```

### 17.2 Comisión fija

```txt
commission_amount = fixed_amount
provider_net_amount = subtotal_amount - commission_amount
```

### 17.3 Comisión mixta

```txt
commission_amount = fixed_amount + (subtotal_amount * commission_percentage / 100)
provider_net_amount = subtotal_amount - commission_amount
```

### 17.4 Comisión cero

```txt
commission_amount = 0
provider_net_amount = subtotal_amount
```

---

## 18. Reglas financieras base

1. La comisión se calcula sobre `subtotal_amount`, no sobre impuestos, salvo regla futura explícita.
2. `total_amount` representa lo que paga el cliente.
3. `provider_net_amount` representa el neto referencial del proveedor antes de futuras retenciones o ajustes.
4. La comisión no debe ser negativa.
5. El neto proveedor no debe ser negativo.
6. Si la comisión supera el subtotal, el backend debe rechazar el cálculo.
7. La moneda de la comisión debe coincidir con la moneda de la orden.
8. Todo redondeo debe definirse en backend.
9. Los decimales monetarios deben manejarse con precisión decimal, no flotantes inseguros.
10. Toda modificación manual requiere auditoría.

---

## 19. Momento de cálculo de comisión

La comisión puede calcularse en tres momentos:

| Momento | Uso | MVP |
|---|---|---|
| Al responder cotización | Vista referencial de comisión proyectada | Opcional |
| Al convertir cotización a orden | Congelar comisión preliminar | Sí |
| Al confirmar pago | Confirmar comisión real | Sí |

Recomendación MVP:

```txt
1. Calcular comisión al crear orden.
2. Guardar comisión como PENDING o CALCULATED.
3. Confirmar comisión al confirmar pago.
```

---

## 20. Datos mínimos de una regla de comisión

| Campo | Descripción | Obligatorio |
|---|---|---|
| `rule_code` | Código único de regla | Sí |
| `rule_name` | Nombre de la regla | Sí |
| `commission_type` | Tipo de comisión | Sí |
| `percentage` | Porcentaje | No, obligatorio si aplica |
| `fixed_amount` | Monto fijo | No, obligatorio si aplica |
| `currency_code` | Moneda para monto fijo | No, obligatorio si monto fijo |
| `service_category_code` | Categoría de servicio | No |
| `service_id` | Servicio específico | No |
| `store_type_code` | Tipo de tienda | No |
| `store_id` | Tienda específica | No |
| `min_order_amount` | Monto mínimo para aplicar | No |
| `max_order_amount` | Monto máximo para aplicar | No |
| `valid_from` | Vigencia inicial | No, recomendado |
| `valid_to` | Vigencia final | No |
| `priority` | Prioridad en resolución | Sí |
| `status` | Estado de la regla | Sí |
| `created_by` | Usuario creador | Sí |

---

## 21. Datos mínimos de una comisión

| Campo | Descripción | Obligatorio |
|---|---|---|
| `commission_code` | Código único de comisión | Sí |
| `order_id` | Orden relacionada | Sí |
| `payment_id` | Pago relacionado | No al calcular, sí al confirmar si aplica |
| `store_id` | Tienda proveedora | Sí |
| `service_id` | Servicio contratado | Sí |
| `commission_rule_id` | Regla aplicada | Sí |
| `base_amount` | Subtotal base | Sí |
| `commission_type` | Tipo aplicado | Sí |
| `commission_percentage` | Porcentaje aplicado | No |
| `fixed_amount` | Monto fijo aplicado | No |
| `commission_amount` | Comisión calculada | Sí |
| `provider_net_amount` | Neto proveedor | Sí |
| `currency_code` | Moneda | Sí |
| `status` | Estado de comisión | Sí |
| `calculated_at` | Fecha de cálculo | Sí |
| `confirmed_at` | Fecha de confirmación | No |
| `settled_at` | Fecha de liquidación referencial | No |
| `cancelled_at` | Fecha de cancelación | No |
| `metadata` | Datos adicionales | No |

---

## 22. Datos mínimos de ajuste de comisión

| Campo | Descripción | Obligatorio |
|---|---|---|
| `adjustment_code` | Código único de ajuste | Sí |
| `commission_id` | Comisión relacionada | Sí |
| `old_commission_amount` | Monto anterior | Sí |
| `new_commission_amount` | Nuevo monto | Sí |
| `old_provider_net_amount` | Neto anterior | Sí |
| `new_provider_net_amount` | Nuevo neto | Sí |
| `reason` | Motivo del ajuste | Sí |
| `approved_by` | Usuario que aprueba | Sí |
| `created_by` | Usuario que solicita | Sí |
| `status` | Estado del ajuste | Sí |

---

## 23. Datos mínimos de liquidación futura referencial

| Campo | Descripción | Obligatorio |
|---|---|---|
| `settlement_code` | Código de liquidación | Sí |
| `store_id` | Tienda proveedora | Sí |
| `period_start` | Inicio de periodo | Sí |
| `period_end` | Fin de periodo | Sí |
| `total_base_amount` | Total base | Sí |
| `total_commission_amount` | Total comisión | Sí |
| `total_provider_net_amount` | Total neto proveedor | Sí |
| `currency_code` | Moneda | Sí |
| `status` | Estado de liquidación referencial | Sí |
| `created_by` | Usuario creador | Sí |
| `approved_by` | Usuario aprobador | No |
| `settled_at` | Fecha de liquidación referencial | No |

---

## 24. Relación con cotizaciones

| Evento | Relación con comisión |
|---|---|
| Cotización respondida | Puede mostrar comisión proyectada a tienda/admin |
| Cotización aprobada | Habilita conversión a orden |
| Cotización convertida | Genera orden y comisión preliminar |
| Cotización rechazada | No genera comisión |
| Cotización vencida | No genera comisión |

Regla:

La comisión histórica no debe depender de una cotización que luego sea modificada. La comisión debe congelarse al crear la orden.

---

## 25. Relación con órdenes

| Evento de orden | Efecto en comisión |
|---|---|
| Orden creada | Calcula comisión preliminar |
| Orden cancelada | Cancela comisión si no hay pago confirmado o marca revisión si ya hubo pago |
| Orden cerrada | Mantiene comisión confirmada si el pago fue confirmado |
| Orden ajustada | Puede requerir ajuste de comisión |
| Orden con refund | Puede requerir reverso o ajuste de comisión |

---

## 26. Relación con pagos

| Evento de pago | Efecto en comisión |
|---|---|
| Pago creado | Comisión permanece pendiente |
| Pago enviado | Comisión permanece pendiente |
| Pago confirmado | Comisión pasa a confirmada |
| Pago rechazado | Comisión no se confirma |
| Pago cancelado | Comisión puede cancelarse si no hay otro pago válido |
| Pago parcial | Comisión puede confirmarse proporcionalmente si se habilita pago parcial |
| Reembolso | Comisión puede revertirse o ajustarse |

---

## 27. Relación con tiendas y servicios

| Entidad | Relación con comisión |
|---|---|
| Tienda | Recibe neto proveedor referencial |
| Servicio | Define categoría y posible regla específica |
| Categoría | Puede determinar porcentaje de comisión |
| Tipo de tienda | Puede determinar regla de comisión |
| Plan futuro de tienda | Puede modificar comisión en versiones futuras |
| Rating futuro | Puede influir en comisión en reglas futuras |

---

## 28. Relación con reportes financieros

Las comisiones deben alimentar:

1. Reporte de comisiones globales.
2. Reporte de comisiones por tienda.
3. Reporte de comisiones por categoría.
4. Reporte de comisiones por servicio.
5. Reporte de neto proveedor.
6. Reporte de pagos confirmados.
7. Reporte de órdenes pagadas.
8. Reporte de ajustes de comisión.
9. Reporte de comisiones canceladas.
10. Reporte de liquidaciones futuras referenciales.

---

## 29. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `commission_rules` | Reglas configurables de comisión |
| `commissions` | Comisiones calculadas |
| `commission_status_history` | Historial de estados |
| `commission_adjustments` | Ajustes manuales controlados |
| `commission_settlements` | Liquidaciones referenciales futuras |
| `commission_settlement_lines` | Detalle de comisiones agrupadas |
| `orders` | Orden relacionada |
| `payments` | Pago que confirma comisión |
| `services` | Servicio contratado |
| `stores` | Tienda proveedora |
| `master_catalog_items` | Tipos y estados |
| `audit_logs` | Auditoría crítica |
| `notifications` | Notificaciones |

---

## 30. Modelo de tabla `commission_rules`

```txt
id
uuid
rule_code
rule_name
commission_type
percentage
fixed_amount
currency_code
service_category_code
service_id
store_type_code
store_id
min_order_amount
max_order_amount
valid_from
valid_to
priority
status
created_by
created_at
updated_at
deleted_at
```

---

## 31. Modelo de tabla `commissions`

```txt
id
uuid
commission_code
order_id
payment_id
store_id
service_id
commission_rule_id
base_amount
commission_type
commission_percentage
fixed_amount
commission_amount
provider_net_amount
currency_code
status
calculated_at
confirmed_at
settled_at
cancelled_at
metadata
created_at
updated_at
deleted_at
```

---

## 32. Modelo de tabla `commission_status_history`

```txt
id
uuid
commission_id
old_status
new_status
changed_by
change_reason
created_at
```

---

## 33. Modelo de tabla `commission_adjustments`

```txt
id
uuid
adjustment_code
commission_id
old_commission_amount
new_commission_amount
old_provider_net_amount
new_provider_net_amount
reason
created_by
approved_by
status
created_at
updated_at
```

---

## 34. Modelo de tabla `commission_settlements`

```txt
id
uuid
settlement_code
store_id
period_start
period_end
total_base_amount
total_commission_amount
total_provider_net_amount
currency_code
status
created_by
approved_by
settled_at
created_at
updated_at
```

---

## 35. Modelo de tabla `commission_settlement_lines`

```txt
id
uuid
settlement_id
commission_id
order_id
payment_id
base_amount
commission_amount
provider_net_amount
currency_code
created_at
```

---

## 36. Permisos RBAC del módulo de comisiones

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `commissions.view` | Ver comisiones según scope | Tienda, admin, auditor, operador |
| `commissions.calculate` | Calcular comisiones | Sistema, admin |
| `commissions.confirm` | Confirmar comisiones | Sistema, admin, operador autorizado |
| `commissions.cancel` | Cancelar comisiones | Admin |
| `commissions.adjust` | Ajustar comisiones | Admin autorizado |
| `commissions.configure` | Configurar reglas | Superadministrador |
| `commissions.view_rules` | Ver reglas | Admin, auditor |
| `commissions.manage_rules` | Crear/editar reglas | Superadministrador |
| `commissions.settle` | Crear liquidación referencial | Admin |
| `commissions.export` | Exportar comisiones | Admin, auditor |
| `commissions.audit` | Ver auditoría de comisiones | Admin, auditor |

---

## 37. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Tienda logística | `store` | Solo comisiones de sus órdenes |
| Transportista | `store` | Comisiones de servicios de transporte propios |
| Agente aduanal | `store` | Comisiones de servicios aduanales propios |
| Almacén fiscal | `store` | Comisiones de almacenamiento propio |
| Inspector | `store` o `assigned` | Comisiones de inspecciones propias si aplica |
| Operador interno | `module` | Comisiones autorizadas para revisión |
| Superadministrador | `global` | Todas las comisiones y reglas |
| Auditor | `global` de consulta | Todas las comisiones sin modificar |
| Cliente final | `own_limited` | No ve comisión, salvo política futura; ve total de orden |
| Soporte | `module` limitado | Comisiones relacionadas con tickets financieros |

---

## 38. Endpoints Nest.js del módulo de comisiones

Base path principal:

```txt
/commissions
```

### 38.1 Comisiones

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/commissions` | Listar comisiones según scope | `commissions.view` | No |
| GET | `/commissions/:id` | Ver comisión | `commissions.view` | No |
| POST | `/commissions/calculate` | Calcular comisión para orden | `commissions.calculate` | `commission.calculated` |
| PATCH | `/commissions/:id/confirm` | Confirmar comisión | `commissions.confirm` | `commission.confirmed` |
| PATCH | `/commissions/:id/cancel` | Cancelar comisión | `commissions.cancel` | `commission.cancelled` |
| POST | `/commissions/:id/adjustments` | Solicitar/crear ajuste | `commissions.adjust` | `commission.adjustment.created` |
| PATCH | `/commissions/:id/adjustments/:adjustmentId/approve` | Aprobar ajuste | `commissions.adjust` | `commission.adjustment.approved` |
| GET | `/commissions/:id/history` | Historial de estados | `commissions.view` | No |
| GET | `/commissions/:id/audit` | Auditoría de comisión | `commissions.audit` | `commission.audit.viewed` |

### 38.2 Reglas de comisión

Base path:

```txt
/commission-rules
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/commission-rules` | Listar reglas | `commissions.view_rules` | No |
| GET | `/commission-rules/:id` | Ver regla | `commissions.view_rules` | No |
| POST | `/commission-rules` | Crear regla | `commissions.manage_rules` | `commission.rule.created` |
| PATCH | `/commission-rules/:id` | Actualizar regla | `commissions.manage_rules` | `commission.rule.updated` |
| PATCH | `/commission-rules/:id/activate` | Activar regla | `commissions.manage_rules` | `commission.rule.activated` |
| PATCH | `/commission-rules/:id/pause` | Pausar regla | `commissions.manage_rules` | `commission.rule.paused` |
| PATCH | `/commission-rules/:id/archive` | Archivar regla | `commissions.manage_rules` | `commission.rule.archived` |

### 38.3 Liquidaciones futuras referenciales

Base path:

```txt
/commission-settlements
```

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/commission-settlements` | Listar liquidaciones referenciales | `commissions.view` | No |
| GET | `/commission-settlements/:id` | Ver liquidación | `commissions.view` | No |
| POST | `/commission-settlements` | Crear liquidación referencial | `commissions.settle` | `commission.settlement.created` |
| PATCH | `/commission-settlements/:id/approve` | Aprobar liquidación referencial | `commissions.settle` | `commission.settlement.approved` |
| PATCH | `/commission-settlements/:id/mark-settled` | Marcar como liquidada | `commissions.settle` | `commission.settlement.settled` |

---

## 39. DTOs sugeridos

### 39.1 `CreateCommissionRuleDto`

```json
{
  "ruleCode": "COM-CUSTOMS-001",
  "ruleName": "Comisión servicios aduanales",
  "commissionType": "PERCENTAGE",
  "percentage": 10.0,
  "fixedAmount": null,
  "currencyCode": "USD",
  "serviceCategoryCode": "CUSTOMS",
  "serviceId": null,
  "storeTypeCode": "CUSTOMS_AGENT",
  "storeId": null,
  "minOrderAmount": null,
  "maxOrderAmount": null,
  "validFrom": "2026-01-01",
  "validTo": null,
  "priority": 50,
  "status": "ACTIVE"
}
```

### 39.2 `CalculateCommissionDto`

```json
{
  "orderId": 1001,
  "forceRecalculate": false,
  "calculationReason": "Order created from approved quotation"
}
```

### 39.3 `ConfirmCommissionDto`

```json
{
  "paymentId": 100,
  "confirmationNotes": "Commission confirmed after payment confirmation"
}
```

### 39.4 `CancelCommissionDto`

```json
{
  "cancelReason": "Order was cancelled before payment confirmation"
}
```

### 39.5 `CreateCommissionAdjustmentDto`

```json
{
  "newCommissionAmount": 40.00,
  "newProviderNetAmount": 410.00,
  "reason": "Manual adjustment approved due to promotional agreement"
}
```

### 39.6 `CreateCommissionSettlementDto`

```json
{
  "storeId": 20,
  "periodStart": "2026-02-01",
  "periodEnd": "2026-02-28",
  "currencyCode": "USD",
  "commissionIds": [1, 2, 3]
}
```

---

## 40. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `CommissionsDashboardPage` | Dashboard financiero de comisiones |
| `CommissionListPage` | Listado de comisiones |
| `CommissionDetailPage` | Detalle de comisión |
| `CommissionStatusBadge` | Estado de comisión |
| `CommissionRuleListPage` | Listado de reglas |
| `CommissionRuleForm` | Crear/editar regla |
| `CommissionRuleDetailPage` | Detalle de regla aplicada |
| `CommissionCalculatorPreview` | Vista previa de cálculo |
| `CommissionSummaryCard` | Base, comisión y neto proveedor |
| `CommissionHistoryTimeline` | Historial de estados |
| `CommissionAdjustmentModal` | Crear ajuste |
| `CommissionAdjustmentPanel` | Ver ajustes |
| `CommissionSettlementListPage` | Liquidaciones referenciales |
| `CommissionSettlementDetailPage` | Detalle de liquidación |
| `CommissionSettlementForm` | Crear liquidación referencial |
| `StoreCommissionPanel` | Vista de tienda para comisiones propias |
| `CommissionFiltersBar` | Filtros por estado, tienda, categoría, periodo |
| `CommissionReportCards` | Métricas y reportes |

---

## 41. Páginas React.js por perfil

### 41.1 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/commissions` | `StoreCommissionsPage` | Ver comisiones propias |
| `/store/commissions/:id` | `StoreCommissionDetailPage` | Ver detalle de comisión y neto proveedor |
| `/store/financial-summary` | `StoreFinancialSummaryPage` | Resumen de pagos, comisiones y neto |

### 41.2 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/commissions` | `AdminCommissionsPage` | Vista global de comisiones |
| `/admin/commissions/:id` | `AdminCommissionDetailPage` | Gestionar comisión, ajuste y auditoría |
| `/admin/commission-rules` | `AdminCommissionRulesPage` | Administrar reglas |
| `/admin/commission-rules/:id` | `AdminCommissionRuleDetailPage` | Ver detalle de regla |
| `/admin/commission-settlements` | `AdminCommissionSettlementsPage` | Liquidaciones referenciales |
| `/admin/financial-reports/commissions` | `AdminCommissionReportsPage` | Reportes de comisiones |

### 41.3 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/commissions` | `OperatorCommissionsPage` | Consultar comisiones autorizadas |
| `/operator/commissions/:id` | `OperatorCommissionDetailPage` | Revisar detalle según permiso |

### 41.4 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/commissions` | `AuditorCommissionsPage` | Consulta de comisiones |
| `/auditor/commissions/:id` | `AuditorCommissionDetailPage` | Consulta de regla aplicada, historial y logs |
| `/auditor/commission-rules` | `AuditorCommissionRulesPage` | Consulta de reglas sin edición |

---

## 42. Servicios frontend API

Archivo sugerido:

```txt
/src/services/commissionsApi.ts
```

Funciones mínimas:

```ts
getCommissions(params)
getCommissionById(id)
calculateCommission(payload)
confirmCommission(id, payload)
cancelCommission(id, payload)
createCommissionAdjustment(id, payload)
approveCommissionAdjustment(id, adjustmentId, payload)
getCommissionHistory(id)
getCommissionAudit(id)
getCommissionRules(params)
getCommissionRuleById(id)
createCommissionRule(payload)
updateCommissionRule(id, payload)
activateCommissionRule(id)
pauseCommissionRule(id)
archiveCommissionRule(id)
getCommissionSettlements(params)
getCommissionSettlementById(id)
createCommissionSettlement(payload)
approveCommissionSettlement(id, payload)
markCommissionSettlementAsSettled(id, payload)
getCommissionMetrics(params)
```

---

## 43. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useCommissions` | Listar comisiones con filtros |
| `useCommissionDetail` | Cargar detalle de comisión |
| `useCalculateCommission` | Calcular comisión |
| `useConfirmCommission` | Confirmar comisión |
| `useCancelCommission` | Cancelar comisión |
| `useCommissionAdjustments` | Gestionar ajustes |
| `useCommissionHistory` | Historial de comisión |
| `useCommissionRules` | Listar reglas |
| `useCommissionRuleDetail` | Detalle de regla |
| `useCreateCommissionRule` | Crear regla |
| `useUpdateCommissionRule` | Actualizar regla |
| `useCommissionSettlements` | Liquidaciones referenciales |
| `useCommissionMetrics` | Métricas de comisiones |
| `useCommissionPermissions` | Acciones visibles según permisos |
| `useCommissionFilters` | Filtros de comisiones |

---

## 44. Validaciones backend obligatorias

### 44.1 Crear regla de comisión

1. Usuario autenticado.
2. Usuario tiene `commissions.manage_rules`.
3. `rule_code` único.
4. Tipo de comisión válido.
5. Si tipo es `PERCENTAGE`, porcentaje obligatorio.
6. Si tipo es `FIXED_AMOUNT`, monto fijo y moneda obligatorios.
7. Porcentaje no puede ser negativo.
8. Porcentaje no debe exceder límite permitido del sistema.
9. Monto fijo no puede ser negativo.
10. Vigencia final no puede ser anterior a vigencia inicial.
11. Categoría, tienda o servicio deben existir si se envían.
12. Prioridad debe ser numérica.

### 44.2 Calcular comisión

1. Orden existe.
2. Orden no está cancelada, salvo cálculo administrativo permitido.
3. Orden tiene subtotal válido.
4. Orden tiene tienda y servicio.
5. Existe regla aplicable activa o fallback.
6. Comisión calculada no puede ser negativa.
7. Neto proveedor no puede ser negativo.
8. Si ya existe comisión confirmada, no recalcular sin permiso especial.
9. Guardar regla aplicada.
10. Registrar historial y auditoría.

### 44.3 Confirmar comisión

1. Comisión existe.
2. Pago confirmado existe o usuario tiene autorización administrativa.
3. Comisión está `PENDING` o `CALCULATED`.
4. Monto de comisión válido.
5. Confirmar fecha y usuario.
6. Actualizar historial.
7. Auditar evento.

### 44.4 Cancelar comisión

1. Comisión existe.
2. Comisión no está liquidada, salvo proceso excepcional.
3. Usuario tiene `commissions.cancel`.
4. Motivo obligatorio.
5. Actualizar estado e historial.
6. Auditar cancelación.

### 44.5 Ajustar comisión

1. Comisión existe.
2. Usuario tiene `commissions.adjust`.
3. Motivo obligatorio.
4. Nuevo monto no puede ser negativo.
5. Nuevo neto proveedor no puede ser negativo.
6. Ajustes sobre comisiones liquidadas requieren regla excepcional.
7. Registrar antes/después.
8. Auditar ajuste.

### 44.6 Crear liquidación referencial

1. Usuario tiene `commissions.settle`.
2. Tienda existe.
3. Rango de fechas válido.
4. Comisiones pertenecen a la tienda.
5. Comisiones están confirmadas o ajustadas.
6. Comisiones no están previamente liquidadas.
7. Moneda consistente.
8. Totales calculados por backend.

---

## 45. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Calcular comisión y actualizar orden si aplica.
2. Confirmar pago y confirmar comisión.
3. Cancelar orden y cancelar comisión.
4. Ajustar comisión y actualizar neto proveedor.
5. Crear liquidación referencial con sus líneas.
6. Marcar liquidación como liquidada y actualizar comisiones.
7. Revertir comisión por reembolso futuro.

Si falla una parte, la operación debe hacer rollback.

---

## 46. Auditoría del módulo de comisiones

| Evento | Descripción | Criticidad |
|---|---|---|
| `commission.rule.created` | Regla de comisión creada | critical |
| `commission.rule.updated` | Regla de comisión actualizada | critical |
| `commission.rule.activated` | Regla activada | high |
| `commission.rule.paused` | Regla pausada | high |
| `commission.rule.archived` | Regla archivada | high |
| `commission.calculated` | Comisión calculada | high |
| `commission.confirmed` | Comisión confirmada | high |
| `commission.cancelled` | Comisión cancelada | high |
| `commission.adjustment.created` | Ajuste creado | critical |
| `commission.adjustment.approved` | Ajuste aprobado | critical |
| `commission.settlement.created` | Liquidación referencial creada | high |
| `commission.settlement.approved` | Liquidación aprobada | critical |
| `commission.settlement.settled` | Liquidación marcada como liquidada | critical |
| `commission.reversed` | Comisión revertida | critical |
| `commission.unauthorized_access` | Intento no autorizado | high |
| `commission.audit.viewed` | Auditoría consultada | medium |

---

## 47. Notificaciones del módulo de comisiones

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Comisión calculada | Admin | Comisión calculada para una orden | `/admin/commissions/:id` |
| Comisión confirmada | Tienda / admin | Comisión confirmada para la orden | `/store/commissions/:id` |
| Comisión cancelada | Tienda / admin | Comisión cancelada con motivo registrado | `/commissions/:id` |
| Ajuste solicitado | Admin | Se creó un ajuste de comisión | `/admin/commissions/:id` |
| Ajuste aprobado | Tienda / admin | Ajuste de comisión aprobado | `/commissions/:id` |
| Regla creada | Admin / auditor | Nueva regla de comisión creada | `/admin/commission-rules/:id` |
| Regla actualizada | Admin / auditor | Regla de comisión actualizada | `/admin/commission-rules/:id` |
| Liquidación creada | Tienda / admin | Liquidación referencial creada | `/commission-settlements/:id` |
| Liquidación marcada liquidada | Tienda / admin | Liquidación referencial marcada como liquidada | `/commission-settlements/:id` |

---

## 48. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Comisiones por estado | Cantidad y monto por estado | Admin, auditor |
| Comisiones por tienda | Comisión generada por proveedor | Admin, tienda |
| Comisiones por categoría | Comisión por tipo de servicio | Admin |
| Comisiones por servicio | Comisión por servicio específico | Admin |
| Comisiones por periodo | Comisión por fecha | Admin, auditor |
| Neto proveedor | Neto acumulado por tienda | Admin, tienda |
| Ajustes de comisión | Cambios manuales y motivos | Admin, auditor |
| Comisiones canceladas | Cancelaciones y razones | Admin, auditor |
| Reglas activas | Reglas disponibles | Admin, auditor |
| Liquidaciones referenciales | Agrupaciones por periodo y tienda | Admin, tienda |
| Comisiones vs pagos | Comparación pago confirmado / comisión | Admin |
| Margen marketplace | Total de comisión como ingreso marketplace | Admin |

---

## 49. Métricas del dashboard de comisiones

### 49.1 Tienda logística

1. Comisiones confirmadas.
2. Comisiones pendientes.
3. Neto proveedor acumulado.
4. Neto proveedor por periodo.
5. Comisiones canceladas.
6. Comisiones ajustadas.
7. Liquidaciones referenciales futuras.
8. Órdenes con comisión confirmada.

### 49.2 Superadministrador

1. Comisión total generada.
2. Comisión total confirmada.
3. Comisión total pendiente.
4. Comisión total cancelada.
5. Comisión por tienda.
6. Comisión por categoría.
7. Comisión por servicio.
8. Neto proveedor global.
9. Ajustes realizados.
10. Reglas activas.
11. Liquidaciones referenciales.

### 49.3 Operador interno

1. Comisiones pendientes de revisión.
2. Comisiones con pago confirmado.
3. Comisiones con posibles errores.
4. Ajustes pendientes.
5. Comisiones canceladas por orden cancelada.

### 49.4 Auditor

1. Reglas modificadas.
2. Comisiones ajustadas.
3. Comisiones canceladas.
4. Liquidaciones referenciales.
5. Usuarios que modificaron reglas.
6. Diferencias entre pago y comisión.

---

## 50. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Comisión no existe | `RESOURCE_NOT_FOUND` | 404 |
| Regla no existe | `RESOURCE_NOT_FOUND` | 404 |
| Orden no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| No existe regla aplicable | `COMMISSION_RULE_NOT_FOUND` | 422 |
| Comisión negativa | `VALIDATION_ERROR` | 400 |
| Neto proveedor negativo | `VALIDATION_ERROR` | 400 |
| Porcentaje inválido | `VALIDATION_ERROR` | 400 |
| Monto fijo inválido | `VALIDATION_ERROR` | 400 |
| Regla duplicada | `DUPLICATE_RESOURCE` | 409 |
| Comisión ya confirmada | `COMMISSION_ALREADY_CONFIRMED` | 409 |
| Comisión ya liquidada | `COMMISSION_ALREADY_SETTLED` | 409 |
| Ajuste sin motivo | `VALIDATION_ERROR` | 400 |
| Liquidación con moneda mixta | `BUSINESS_RULE_ERROR` | 422 |
| Comisión de otra tienda | `FORBIDDEN` | 403 |

---

## 51. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `CALCULATED` | Calculada | Confirmar o revisar |
| `PENDING` | Pendiente | Esperar pago confirmado |
| `CONFIRMED` | Confirmada | Ver neto / liquidar futuro |
| `ADJUSTED` | Ajustada | Ver ajuste |
| `CANCELLED` | Cancelada | Ver motivo |
| `IN_SETTLEMENT` | En liquidación | Ver liquidación |
| `SETTLED` | Liquidada | Ver detalle |
| `REVERSED` | Revertida | Ver reverso |

---

## 52. Reglas UX del módulo de comisiones

1. La tienda debe ver de forma clara su comisión y neto proveedor.
2. El admin debe ver base, porcentaje, comisión, neto y regla aplicada.
3. El auditor debe ver modo solo lectura.
4. Las reglas de comisión deben mostrar vigencia y prioridad.
5. Crear o editar regla debe mostrar advertencia de impacto financiero.
6. Ajustar comisión debe exigir motivo.
7. Cancelar comisión debe exigir motivo.
8. Confirmar comisión debe mostrar relación con pago confirmado.
9. Las liquidaciones referenciales deben mostrar comisiones incluidas.
10. Los montos deben mostrarse con moneda y formato decimal.
11. Las acciones deben mostrarse según permisos y estado.
12. El historial debe mostrarse como timeline.
13. Cambios críticos deben pedir confirmación visual.

---

## 53. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Tienda comisiones | `Dashboard tienda > Comisiones` |
| Tienda detalle comisión | `Dashboard tienda > Comisiones > COM-2026-001` |
| Admin comisiones | `Panel global > Comisiones` |
| Admin detalle comisión | `Panel global > Comisiones > COM-2026-001` |
| Admin reglas | `Panel global > Comisiones > Reglas` |
| Admin detalle regla | `Panel global > Comisiones > Reglas > COM-CUSTOMS-001` |
| Admin liquidaciones | `Panel global > Comisiones > Liquidaciones` |
| Auditor comisiones | `Auditoría > Comisiones` |
| Auditor reglas | `Auditoría > Reglas de comisión` |

---

## 54. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Regla general | `COM-GENERAL-001` | Comisión general marketplace 10% |
| Regla aduana | `COM-CUSTOMS-001` | Comisión servicios aduanales 10% |
| Regla transporte | `COM-TRANSPORT-001` | Comisión transporte 8% |
| Regla almacenamiento | `COM-STORAGE-001` | Comisión almacenamiento 8% |
| Regla inspección | `COM-INSPECTION-001` | Comisión inspecciones 10% |
| Regla tecnología | `COM-TOS-INTERNAL-001` | Comisión TOS interno 0% |
| Comisión demo | `COM-2026-001` | Comisión de orden demo |
| Orden demo | `ORD-2026-001` | Orden relacionada |
| Pago demo | `PAY-2026-001` | Pago relacionado |
| Base | `450.00 USD` | Subtotal de orden |
| Comisión | `45.00 USD` | 10% |
| Neto proveedor | `405.00 USD` | Base menos comisión |

---

## 55. Ejemplo JSON de regla demo

```json
{
  "ruleCode": "COM-CUSTOMS-001",
  "ruleName": "Comisión servicios aduanales",
  "commissionType": "PERCENTAGE",
  "percentage": 10.0,
  "fixedAmount": null,
  "currencyCode": "USD",
  "serviceCategoryCode": "CUSTOMS",
  "storeTypeCode": "CUSTOMS_AGENT",
  "validFrom": "2026-01-01",
  "validTo": null,
  "priority": 50,
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 56. Ejemplo JSON de comisión demo

```json
{
  "commissionCode": "COM-2026-001",
  "orderCode": "ORD-2026-001",
  "paymentCode": "PAY-2026-001",
  "storeCode": "STO-ADU-001",
  "serviceCode": "SER-ADU-001-DEMO",
  "commissionRuleCode": "COM-CUSTOMS-001",
  "baseAmount": 450.00,
  "commissionType": "PERCENTAGE",
  "commissionPercentage": 10.00,
  "fixedAmount": null,
  "commissionAmount": 45.00,
  "providerNetAmount": 405.00,
  "currencyCode": "USD",
  "status": "CONFIRMED",
  "calculatedAt": "2026-02-01T15:30:00.000Z",
  "confirmedAt": "2026-02-01T16:05:00.000Z",
  "isDemo": true
}
```

---

## 57. Ejemplo JSON de ajuste demo

```json
{
  "adjustmentCode": "CADJ-2026-001",
  "commissionCode": "COM-2026-001",
  "oldCommissionAmount": 45.00,
  "newCommissionAmount": 40.00,
  "oldProviderNetAmount": 405.00,
  "newProviderNetAmount": 410.00,
  "reason": "Demo promotional adjustment approved by marketplace",
  "status": "APPROVED",
  "isDemo": true
}
```

---

## 58. Ejemplo JSON de liquidación referencial demo

```json
{
  "settlementCode": "CSET-2026-001",
  "storeCode": "STO-ADU-001",
  "periodStart": "2026-02-01",
  "periodEnd": "2026-02-28",
  "totalBaseAmount": 450.00,
  "totalCommissionAmount": 45.00,
  "totalProviderNetAmount": 405.00,
  "currencyCode": "USD",
  "status": "CREATED",
  "commissionCodes": ["COM-2026-001"],
  "isDemo": true
}
```

---

## 59. Pruebas funcionales mínimas

### 59.1 Superadministrador

1. Admin puede crear regla de comisión.
2. Admin puede editar regla de comisión.
3. Admin puede activar, pausar o archivar regla.
4. Admin puede calcular comisión para una orden.
5. Admin puede confirmar comisión.
6. Admin puede cancelar comisión con motivo.
7. Admin puede ajustar comisión con motivo.
8. Admin puede crear liquidación referencial.
9. Admin puede ver reportes globales.

### 59.2 Tienda logística

1. Tienda puede ver comisiones de sus órdenes.
2. Tienda puede ver neto proveedor.
3. Tienda no puede ver comisiones de otra tienda.
4. Tienda no puede editar reglas.
5. Tienda no puede ajustar comisiones.
6. Tienda puede filtrar por fecha, orden y estado.

### 59.3 Operador interno

1. Operador puede consultar comisiones autorizadas.
2. Operador puede revisar inconsistencias si tiene permiso.
3. Operador no puede modificar reglas sin permiso.
4. Operador puede ver relación pago-comisión si está autorizado.

### 59.4 Auditor

1. Auditor puede ver comisiones.
2. Auditor puede ver reglas aplicadas.
3. Auditor puede ver ajustes.
4. Auditor puede ver liquidaciones referenciales.
5. Auditor puede ver logs.
6. Auditor no puede modificar comisiones.

---

## 60. Pruebas técnicas API

1. `POST /commission-rules` crea regla válida.
2. `POST /commission-rules` rechaza porcentaje negativo.
3. `POST /commission-rules` rechaza regla duplicada.
4. `POST /commissions/calculate` calcula comisión para orden válida.
5. Cálculo selecciona regla de mayor jerarquía.
6. Cálculo rechaza neto proveedor negativo.
7. `PATCH /commissions/:id/confirm` confirma comisión pendiente.
8. Confirmación requiere pago confirmado o permiso administrativo.
9. `PATCH /commissions/:id/cancel` exige motivo.
10. `POST /commissions/:id/adjustments` exige motivo.
11. Ajuste registra antes y después.
12. `POST /commission-settlements` crea liquidación con comisiones confirmadas.
13. Liquidación rechaza comisiones de diferentes monedas.
14. `GET /commissions` respeta scope.
15. `GET /commissions/:id/history` devuelve historial.
16. Eventos críticos generan `audit_logs`.
17. Eventos principales generan `notifications`.

---

## 61. Criterios de aceptación

El módulo de comisiones se considera aceptado cuando:

1. Se pueden crear reglas de comisión.
2. Se pueden activar, pausar y archivar reglas.
3. El backend selecciona la regla aplicable por jerarquía.
4. Se puede calcular comisión para una orden.
5. La comisión queda asociada a orden, tienda, servicio y regla.
6. La comisión calcula base, comisión y neto proveedor.
7. La comisión no permite montos negativos.
8. Se puede confirmar comisión cuando el pago se confirma.
9. Se puede cancelar comisión con motivo.
10. Se puede ajustar comisión con motivo y auditoría.
11. Se conserva historial de estados.
12. Se pueden crear liquidaciones referenciales futuras.
13. Los permisos RBAC se respetan.
14. Los scopes de datos se respetan.
15. Tienda solo consulta comisiones propias.
16. Auditor consulta sin modificar.
17. Superadministrador consulta globalmente.
18. Eventos críticos generan auditoría.
19. Eventos principales generan notificaciones.
20. Reportes básicos de comisiones funcionan.
21. Endpoints están documentados en Swagger.
22. Pruebas funcionales y API pasan.
23. El diseño permite liquidaciones y payouts futuros sin reescribir el core.
24. No existe dependencia técnica con Odoo ni con pasarela real en MVP.

---

## 62. Tareas técnicas para Antigravity

### 62.1 Base de datos

1. Validar tabla `commission_rules`.
2. Validar tabla `commissions`.
3. Crear o validar tabla `commission_status_history`.
4. Crear o validar tabla `commission_adjustments`.
5. Crear o validar tabla `commission_settlements`.
6. Crear o validar tabla `commission_settlement_lines`.
7. Crear índices por orden, pago, tienda, servicio, regla, estado y fecha.
8. Crear seeds de reglas demo.
9. Crear seed de comisión demo.
10. Crear seed de liquidación referencial demo opcional.
11. Crear validaciones de transiciones.

### 62.2 Backend Nest.js

1. Crear módulo `commissions`.
2. Crear `CommissionsController`.
3. Crear `CommissionsService`.
4. Crear `CommissionRulesController`.
5. Crear `CommissionRulesService`.
6. Crear `CommissionSettlementsController`.
7. Crear `CommissionSettlementsService`.
8. Crear DTOs de reglas.
9. Crear DTOs de cálculo.
10. Crear DTOs de ajustes.
11. Crear DTOs de liquidación referencial.
12. Crear endpoints de comisiones.
13. Crear endpoints de reglas.
14. Crear endpoints de liquidaciones.
15. Crear motor de selección de regla.
16. Crear motor de cálculo financiero decimal.
17. Crear integración con órdenes.
18. Crear integración con pagos.
19. Crear integración con reportes.
20. Crear auditoría.
21. Crear notificaciones.
22. Crear pruebas unitarias y API.

### 62.3 Frontend React.js

1. Crear `CommissionsDashboardPage`.
2. Crear `CommissionListPage`.
3. Crear `CommissionDetailPage`.
4. Crear `CommissionRuleListPage`.
5. Crear `CommissionRuleForm`.
6. Crear `CommissionRuleDetailPage`.
7. Crear `CommissionSummaryCard`.
8. Crear `CommissionHistoryTimeline`.
9. Crear `CommissionAdjustmentModal`.
10. Crear `CommissionSettlementListPage`.
11. Crear `CommissionSettlementDetailPage`.
12. Crear `CommissionSettlementForm`.
13. Crear `StoreCommissionPanel`.
14. Crear filtros por estado, tienda, categoría, servicio y fecha.
15. Crear hooks de comisiones.
16. Crear guards visuales por permisos.
17. Crear estados loading, empty, error y forbidden.
18. Crear vistas por perfil.

### 62.4 QA

1. Probar creación de reglas.
2. Probar edición de reglas.
3. Probar prioridad y jerarquía.
4. Probar cálculo porcentual.
5. Probar cálculo fijo.
6. Probar cálculo mixto si se implementa.
7. Probar comisión cero.
8. Probar confirmación de comisión.
9. Probar cancelación.
10. Probar ajuste.
11. Probar liquidación referencial.
12. Probar permisos y scopes.
13. Probar historial.
14. Probar auditoría.
15. Probar notificaciones.
16. Probar reportes.
17. Probar casos de error.

---

## 63. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto financiero de marketplace, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `25_COMMISSIONS_MASTER_PLAN.md` como fuente principal para implementar el módulo de comisiones del marketplace logístico.

Objetivo:
Implementar un módulo de comisiones que permita crear reglas, seleccionar la regla aplicable por jerarquía, calcular comisiones por orden, confirmar comisiones al confirmar pagos, cancelar comisiones, ajustar comisiones con motivo, registrar neto proveedor, crear liquidaciones referenciales futuras, generar historial, auditoría, notificaciones, reportes y métricas.

Reglas obligatorias:
1. Toda comisión del MVP debe asociarse a una orden.
2. Toda comisión debe asociarse a una tienda, servicio y regla aplicada.
3. La comisión debe calcularse en backend.
4. El frontend no es fuente de verdad financiera.
5. La regla aplicada debe congelarse históricamente.
6. Cambios de reglas no modifican comisiones confirmadas.
7. No permitir comisión negativa.
8. No permitir neto proveedor negativo.
9. Confirmar comisión debe requerir pago confirmado o autorización administrativa.
10. Cancelar comisión debe exigir motivo.
11. Ajustar comisión debe exigir motivo y auditoría.
12. Crear liquidación debe usar comisiones confirmadas de una misma tienda y moneda.
13. Eventos críticos deben auditarse.
14. Eventos principales deben generar notificaciones.
15. Respetar scopes de datos: store, module, global y auditoría solo lectura.
16. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
17. Respetar `13_API_SPECIFICATION.md`.
18. Respetar `15_MASTER_CATALOGS_MVP.md`.
19. Respetar `18_QUOTATION_WORKFLOW.md`.
20. Respetar `19_ORDER_WORKFLOW.md`.
21. Respetar `24_PAYMENTS_MASTER_PLAN.md`.
22. No integrar Odoo ni pasarela real en MVP; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de reglas de comisión.
3. DTOs de cálculo de comisión.
4. DTOs de ajustes.
5. DTOs de liquidación referencial.
6. Endpoints Nest.js.
7. Servicios backend.
8. Motor de selección de reglas.
9. Motor de cálculo decimal.
10. Validaciones RBAC y scope.
11. Validaciones de estados.
12. Historial de comisiones.
13. Integración con órdenes.
14. Integración con pagos.
15. Auditoría.
16. Notificaciones.
17. Componentes React.js.
18. Hooks frontend.
19. Pruebas unitarias y API.
20. Seeds demo de reglas y comisiones.
21. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, motor de reglas, cálculo financiero, permisos, auditoría, notificaciones, reportes y QA.
```

---

## 64. Checklist de uso en Antigravity

- [ ] Guardar este documento como `25_COMMISSIONS_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `18_QUOTATION_WORKFLOW.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Validar consistencia con `24_PAYMENTS_MASTER_PLAN.md`.
- [ ] Crear DTOs de reglas.
- [ ] Crear DTOs de cálculo.
- [ ] Crear DTOs de ajustes.
- [ ] Crear DTOs de liquidaciones referenciales.
- [ ] Crear endpoints de comisiones.
- [ ] Crear endpoints de reglas.
- [ ] Crear endpoints de liquidaciones.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear motor de reglas.
- [ ] Crear motor de cálculo decimal.
- [ ] Crear historial de comisiones.
- [ ] Crear integración con órdenes.
- [ ] Crear integración con pagos.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni pasarela real en MVP.

---

## 65. Estado del documento

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

