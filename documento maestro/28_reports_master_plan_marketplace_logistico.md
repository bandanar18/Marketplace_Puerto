# 28_REPORTS_MASTER_PLAN.md

# Documento Maestro del Plan de Reportes y Analítica
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `28_REPORTS_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico, analítico, operativo y financiero |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Reportes, dashboards, KPIs, métricas y exportaciones |
| Módulos relacionados | Usuarios, tiendas, servicios, cotizaciones, órdenes, TOS, transporte, almacenamiento, inspecciones, pagos, comisiones, documentos, auditoría, seguridad, notificaciones, soporte |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de reportes, dashboards, métricas y analítica** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de una capa transversal de información que permita visualizar el estado general del marketplace, medir operaciones logísticas, controlar órdenes, monitorear pagos y comisiones, auditar eventos críticos, analizar rendimiento por tienda y consultar indicadores por perfil de usuario.

El módulo de reportes debe permitir:

1. Crear dashboards por perfil.
2. Consultar KPIs operativos.
3. Consultar KPIs financieros.
4. Consultar KPIs comerciales.
5. Consultar KPIs TOS.
6. Consultar KPIs de transporte.
7. Consultar KPIs de almacenamiento.
8. Consultar KPIs de inspecciones.
9. Consultar KPIs de pagos y comisiones.
10. Consultar KPIs de auditoría y seguridad.
11. Filtrar información por fecha, estado, tienda, cliente, servicio, categoría, puerto y terminal.
12. Exportar reportes autorizados.
13. Proteger reportes por RBAC y scopes.
14. Registrar auditoría de exportaciones.
15. Alimentar vistas ejecutivas, operativas y financieras.

---

## 3. Objetivo general

Diseñar e implementar un módulo de reportes seguro, escalable y segmentado por perfil que permita transformar los datos operativos, comerciales, financieros y de auditoría del marketplace logístico en tableros, indicadores, listados filtrables y exportaciones controladas para la toma de decisiones.

---

## 4. Objetivos específicos

1. Definir tipos de reportes del marketplace.
2. Definir dashboards por perfil.
3. Definir KPIs por módulo.
4. Definir filtros transversales.
5. Definir reglas de acceso a reportes.
6. Definir reglas de exportación.
7. Definir relación con órdenes, pagos y comisiones.
8. Definir relación con TOS, transporte, almacenamiento e inspecciones.
9. Definir relación con auditoría y seguridad.
10. Definir estructuras MySQL necesarias.
11. Definir endpoints Nest.js.
12. Definir componentes React.js.
13. Definir hooks frontend.
14. Definir validaciones backend.
15. Definir auditoría de reportes.
16. Definir casos de error.
17. Definir seeds demo.
18. Definir pruebas funcionales y técnicas.
19. Servir como prompt para Antigravity.

---

## 5. Alcance del módulo de reportes MVP

El MVP debe cubrir el siguiente flujo:

```txt
Usuario autenticado ingresa a dashboard
  ↓
Frontend identifica perfil, permisos y scope
  ↓
Usuario selecciona reporte o tablero
  ↓
Backend valida permiso + scope
  ↓
Backend consulta datos agregados desde MySQL
  ↓
Backend devuelve KPIs, tablas y series temporales
  ↓
Frontend renderiza tarjetas, tablas y gráficos
  ↓
Usuario aplica filtros
  ↓
Si tiene permiso, puede exportar
  ↓
Exportación genera audit log
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Business Intelligence externo.
2. Data warehouse dedicado.
3. ETL avanzado.
4. Cubos OLAP.
5. Machine learning predictivo.
6. Forecasting avanzado.
7. Reportes programados automáticos por email.
8. Alertas inteligentes avanzadas.
9. Integración con Power BI, Tableau o Looker.
10. Integración con Odoo Reporting.
11. Reportes fiscales oficiales.
12. Reportes regulatorios oficiales.
13. Motor de reportes drag-and-drop.
14. Constructor visual de dashboards por usuario.
15. Streaming en tiempo real.
16. Exportaciones masivas sin límite.
17. Reportes multiempresa con consolidación contable avanzada.

---

## 7. Principios funcionales del módulo de reportes

Antigravity debe respetar los siguientes principios:

1. Todo reporte debe respetar RBAC.
2. Todo reporte debe respetar scope de datos.
3. El cliente solo ve datos propios.
4. La tienda solo ve datos de su tienda.
5. El auditor consulta sin modificar.
6. El superadministrador puede ver reportes globales.
7. El operador interno solo ve módulos autorizados.
8. Reportes financieros requieren permisos reforzados.
9. Exportaciones requieren permiso explícito.
10. Toda exportación debe generar auditoría.
11. Los reportes no deben exponer datos sensibles innecesarios.
12. Los filtros deben validarse en backend.
13. Los listados deben paginarse.
14. Las métricas críticas deben calcularse en backend.
15. El frontend no debe ser fuente de verdad de KPIs financieros.
16. El diseño debe permitir reportes futuros sin reescribir módulos principales.
17. No debe existir dependencia técnica con Odoo.

---

## 8. Actores del módulo de reportes

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta reportes de sus órdenes, pagos, documentos y seguimiento logístico |
| Tienda logística | `PROF-TIE-002` | Consulta reportes comerciales, operativos, pagos, comisiones y servicios propios |
| Transportista | `PROF-TRA-006` | Consulta reportes de viajes, entregas, retrasos, vehículos y conductores propios |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Consulta reportes de inventario, recepciones, despachos y bloqueos propios |
| Inspector | `PROF-INS-005` | Consulta reportes de inspecciones asignadas o de empresa inspectora |
| Agente aduanal | `PROF-ADU-007` | Consulta reportes de operaciones aduanales, documentos y órdenes propias |
| Operador interno | `PROF-OPE-004` | Consulta reportes operativos autorizados |
| Superadministrador | `PROF-SUP-003` | Consulta reportes globales, financieros, comerciales, operativos y auditoría |
| Auditor | `PROF-AUD-008` | Consulta reportes de auditoría, seguridad, finanzas y operaciones sin modificar |
| Soporte técnico | `PROF-SOP-009` | Consulta reportes limitados de tickets, incidencias y errores operativos |

---

## 9. Tipos de reportes del marketplace

| Tipo | Código | Descripción |
|---|---|---|
| Ejecutivo | `EXECUTIVE` | Resumen global para superadministrador |
| Comercial | `COMMERCIAL` | Tiendas, servicios, cotizaciones, órdenes y conversión |
| Operativo | `OPERATIONAL` | Órdenes, TOS, transporte, almacenamiento e inspecciones |
| Financiero | `FINANCIAL` | Pagos, comisiones, neto proveedor y reembolsos referenciales |
| TOS | `TOS` | Contenedores, patios, gates, movimientos, bloqueos |
| Transporte | `TRANSPORT` | Viajes, entregas, retrasos, incidencias, conductores, vehículos |
| Almacenamiento | `STORAGE` | Inventario, recepciones, ubicaciones, despachos, bloqueos |
| Inspecciones | `INSPECTIONS` | Checklists, resultados, evidencias, aprobaciones/rechazos |
| Documental | `DOCUMENTS` | Documentos cargados, validados, rechazados y pendientes |
| Auditoría | `AUDIT` | Eventos críticos, acciones por usuario, cambios financieros y seguridad |
| Seguridad | `SECURITY` | Logins, accesos denegados, cambios de roles y eventos de seguridad |
| Soporte | `SUPPORT` | Tickets, incidencias, tiempos de respuesta y estados |

---

## 10. Dashboards por perfil

### 10.1 Cliente final

El cliente debe ver un dashboard simple orientado a sus operaciones.

KPIs sugeridos:

1. Órdenes activas.
2. Órdenes completadas.
3. Órdenes pendientes de pago.
4. Cotizaciones pendientes.
5. Pagos en revisión.
6. Documentos pendientes.
7. Viajes en tránsito.
8. Inspecciones pendientes.
9. Últimos eventos de sus órdenes.

### 10.2 Tienda logística

La tienda debe ver rendimiento de sus servicios.

KPIs sugeridos:

1. Servicios publicados.
2. Cotizaciones recibidas.
3. Cotizaciones respondidas.
4. Cotizaciones aprobadas.
5. Órdenes activas.
6. Órdenes cerradas.
7. Ingresos confirmados.
8. Comisiones acumuladas.
9. Neto proveedor estimado.
10. Calificación o desempeño futuro.

### 10.3 Transportista

KPIs sugeridos:

1. Viajes asignados.
2. Viajes programados.
3. Viajes en tránsito.
4. Viajes retrasados.
5. Viajes con incidencia.
6. Entregas completadas.
7. Tiempo promedio de entrega.
8. Vehículos activos.
9. Conductores activos.
10. POD pendientes.

### 10.4 Almacén fiscal

KPIs sugeridos:

1. Inventario recibido.
2. Inventario almacenado.
3. Inventario bloqueado.
4. Inventario despachado.
5. Recepciones del día.
6. Despachos del día.
7. Movimientos internos.
8. Ubicaciones ocupadas.
9. Evidencias pendientes.
10. Tiempo promedio en almacén.

### 10.5 Inspector

KPIs sugeridos:

1. Inspecciones asignadas.
2. Inspecciones programadas.
3. Inspecciones en ejecución.
4. Inspecciones pendientes de evidencia.
5. Inspecciones en revisión.
6. Inspecciones aprobadas.
7. Inspecciones rechazadas.
8. Tiempo promedio de cierre.

### 10.6 Operador interno

KPIs sugeridos:

1. Órdenes en proceso.
2. Órdenes en espera.
3. Operaciones TOS pendientes.
4. Viajes retrasados.
5. Inventario bloqueado.
6. Inspecciones en revisión.
7. Pagos pendientes de revisión.
8. Documentos pendientes de validación.
9. Incidencias abiertas.
10. Eventos críticos recientes.

### 10.7 Superadministrador

KPIs sugeridos:

1. Usuarios activos.
2. Tiendas activas.
3. Servicios publicados.
4. Cotizaciones generadas.
5. Órdenes activas.
6. Órdenes completadas.
7. Total cobrado confirmado.
8. Comisión marketplace acumulada.
9. Neto proveedor acumulado.
10. Eventos críticos.
11. Pagos pendientes de revisión.
12. Comisiones pendientes.
13. Reportes exportados.
14. Accesos denegados.

### 10.8 Auditor

KPIs sugeridos:

1. Eventos críticos por periodo.
2. Cambios de roles.
3. Cambios de reglas de comisión.
4. Pagos confirmados.
5. Pagos rechazados.
6. Comisiones ajustadas.
7. Gate-outs críticos.
8. Despachos críticos.
9. Exportaciones realizadas.
10. Accesos denegados.

### 10.9 Soporte técnico

KPIs sugeridos:

1. Tickets abiertos.
2. Tickets en proceso.
3. Tickets cerrados.
4. Incidencias de pago.
5. Incidencias de documentos.
6. Incidencias de acceso.
7. Tiempo promedio de respuesta.
8. Tickets por módulo.

---

## 11. KPIs comerciales

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Tiendas activas | `active_stores` | Conteo de `stores.status = ACTIVE` |
| Servicios publicados | `published_services` | Conteo de `services.status = PUBLISHED` |
| Cotizaciones creadas | `quotations_created` | Conteo por fecha |
| Cotizaciones respondidas | `quotations_responded` | Conteo con estado respondido |
| Cotizaciones aprobadas | `quotations_approved` | Conteo con estado aprobado |
| Tasa de conversión a orden | `quotation_to_order_rate` | órdenes creadas / cotizaciones aprobables |
| Órdenes creadas | `orders_created` | Conteo de órdenes |
| Órdenes cerradas | `orders_closed` | Conteo `orders.status = CLOSED` |
| Ticket promedio | `average_order_value` | suma total / número de órdenes |
| Servicios más solicitados | `top_requested_services` | Ranking por cotizaciones/órdenes |

---

## 12. KPIs operativos generales

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Órdenes activas | `active_orders` | `orders.status IN (ACTIVE, IN_PROCESS, EXECUTING)` |
| Órdenes en espera | `orders_on_hold` | `orders.status = ON_HOLD` |
| Órdenes canceladas | `cancelled_orders` | `orders.status = CANCELLED` |
| Órdenes completadas | `completed_orders` | `orders.status = CLOSED` |
| Tiempo promedio de cierre | `average_order_cycle_time` | fecha cierre - fecha creación |
| Incidencias operativas | `operational_incidents` | Incidencias por módulo |
| Documentos pendientes | `pending_documents` | Documentos requeridos no validados |
| Evidencias pendientes | `pending_evidences` | Evidencias requeridas no cargadas |

---

## 13. KPIs TOS

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Contenedores registrados | `tos_containers_registered` | Conteo de `tos_containers` |
| Contenedores en patio | `tos_containers_in_yard` | Estado TOS en patio |
| Gate-in del periodo | `tos_gate_ins` | Conteo de gate-in |
| Gate-out del periodo | `tos_gate_outs` | Conteo de gate-out |
| Contenedores bloqueados | `tos_blocked_containers` | Bloqueos activos |
| Contenedores liberados | `tos_released_containers` | Liberaciones |
| Movimientos internos | `tos_internal_moves` | Conteo de movimientos |
| Tiempo promedio en patio | `tos_avg_yard_dwell_time` | salida - entrada |
| Bloqueos por tipo | `tos_holds_by_type` | Agrupado por tipo de bloqueo |
| Ocupación de patio | `tos_yard_occupancy` | contenedores / capacidad referencial |

---

## 14. KPIs transporte

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Viajes creados | `trips_created` | Conteo de `trips` |
| Viajes asignados | `trips_assigned` | Estado `ASSIGNED` |
| Viajes programados | `trips_scheduled` | Estado `SCHEDULED` |
| Viajes en tránsito | `trips_in_transit` | Estado `IN_TRANSIT` |
| Viajes retrasados | `trips_delayed` | Estado `DELAYED` |
| Viajes con incidencia | `trips_incident` | Estado `INCIDENT` |
| Entregas completadas | `trips_delivered` | Estado `DELIVERED` |
| Tiempo promedio de entrega | `avg_delivery_time` | entrega real - retiro real |
| POD pendientes | `pending_pod` | entregado sin evidencia POD |
| Viajes por transportista | `trips_by_carrier` | Agrupado por tienda/transportista |

---

## 15. KPIs almacenamiento

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Inventario registrado | `inventory_registered` | Conteo de `inventory_items` |
| Inventario recibido | `inventory_received` | Estado `RECEIVED` |
| Inventario almacenado | `inventory_stored` | Estado `STORED` |
| Inventario bloqueado | `inventory_blocked` | Estado `BLOCKED` o holds activos |
| Inventario reservado | `inventory_reserved` | Estado `RESERVED` |
| Inventario despachado | `inventory_dispatched` | Estado `DISPATCHED` |
| Recepciones por periodo | `storage_receipts` | Conteo de recepción |
| Despachos por periodo | `storage_dispatches` | Conteo de despachos |
| Movimientos internos | `storage_movements` | Conteo de movimientos |
| Tiempo promedio en almacén | `avg_storage_time` | despacho - recepción |
| Bloqueos por tipo | `storage_holds_by_type` | Agrupado por tipo |

---

## 16. KPIs inspecciones

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Inspecciones creadas | `inspections_created` | Conteo de inspecciones |
| Inspecciones asignadas | `inspections_assigned` | Estado `ASSIGNED` |
| Inspecciones programadas | `inspections_scheduled` | Estado `SCHEDULED` |
| Inspecciones en ejecución | `inspections_in_progress` | Estado `IN_PROGRESS` |
| Inspecciones en revisión | `inspections_in_review` | Estado `IN_REVIEW` |
| Inspecciones aprobadas | `inspections_approved` | Resultado `APPROVED` |
| Inspecciones observadas | `inspections_observed` | Resultado `OBSERVED` |
| Inspecciones rechazadas | `inspections_rejected` | Resultado `REJECTED` |
| Evidencias pendientes | `inspection_pending_evidence` | Estado `PENDING_EVIDENCE` |
| Tiempo promedio de cierre | `avg_inspection_close_time` | cierre - creación |
| Rechazos por tipo | `inspection_rejections_by_type` | Agrupado por tipo de inspección |

---

## 17. KPIs financieros

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Pagos creados | `payments_created` | Conteo de pagos |
| Pagos enviados | `payments_submitted` | Estado `SUBMITTED` |
| Pagos en revisión | `payments_in_review` | Estado `IN_REVIEW` |
| Pagos confirmados | `payments_confirmed` | Estado `CONFIRMED` |
| Pagos rechazados | `payments_rejected` | Estado `REJECTED` |
| Total cobrado confirmado | `confirmed_payment_amount` | Suma de pagos confirmados |
| Total pendiente | `pending_payment_amount` | Suma de pagos pendientes/revisión |
| Comisiones calculadas | `commissions_calculated` | Conteo/suma de comisiones calculadas |
| Comisiones confirmadas | `commissions_confirmed` | Suma de comisiones confirmadas |
| Neto proveedor | `provider_net_amount` | Suma neto proveedor |
| Reembolsos referenciales | `refund_amount` | Suma de refunds registrados |
| Ticket promedio pagado | `average_paid_order_value` | total confirmado / órdenes pagadas |

---

## 18. KPIs documentales

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Documentos cargados | `documents_uploaded` | Conteo de documentos |
| Documentos pendientes | `documents_pending` | Estado pendiente |
| Documentos validados | `documents_validated` | Estado validado |
| Documentos rechazados | `documents_rejected` | Estado rechazado |
| Evidencias cargadas | `evidences_uploaded` | Conteo de evidencias |
| Comprobantes de pago | `payment_receipts_uploaded` | Comprobantes cargados |
| POD cargados | `pod_uploaded` | Evidencias de entrega |
| Evidencias críticas | `critical_evidences` | Evidencias asociadas a eventos críticos |

---

## 19. KPIs auditoría y seguridad

| KPI | Código | Fórmula / Fuente |
|---|---|---|
| Eventos críticos | `critical_audit_events` | `audit_logs.severity = CRITICAL` |
| Eventos high | `high_audit_events` | `audit_logs.severity = HIGH` |
| Accesos denegados | `forbidden_access_events` | Eventos `security.forbidden_access` |
| Violaciones de scope | `scope_violation_events` | Eventos `security.scope_violation` |
| Logins fallidos | `failed_login_attempts` | `login_attempts.success = false` |
| Cambios de roles | `role_changes` | Eventos roles |
| Cambios de reglas de comisión | `commission_rule_changes` | Eventos commission rules |
| Exportaciones | `report_exports` | `audit_exports` o `report.exported` |
| Usuarios bloqueados | `locked_users` | `users.status = LOCKED` |

---

## 20. Filtros transversales

Todo reporte debe soportar filtros según aplique:

| Filtro | Campo sugerido |
|---|---|
| Fecha desde | `date_from` |
| Fecha hasta | `date_to` |
| Cliente | `customer_id` |
| Tienda | `store_id` |
| Tipo de tienda | `store_type_code` |
| Servicio | `service_id` |
| Categoría de servicio | `service_category_code` |
| Orden | `order_id` |
| Estado | `status` |
| Estado financiero | `financial_status` |
| Puerto | `port_code` |
| Terminal | `terminal_code` |
| Tipo de carga | `cargo_type_code` |
| Tipo de contenedor | `container_type_code` |
| Transportista | `carrier_id` |
| Inspector | `inspector_id` |
| Almacén | `warehouse_id` |
| Severidad | `severity` |
| Moneda | `currency_code` |

---

## 21. Reglas de acceso por perfil

| Perfil | Reportes permitidos |
|---|---|
| Cliente final | Sus órdenes, pagos, documentos, transporte, almacenamiento e inspecciones visibles |
| Tienda logística | Sus servicios, cotizaciones, órdenes, pagos, comisiones y operaciones |
| Transportista | Viajes propios/asignados, entregas, retrasos, POD, vehículos, conductores |
| Almacén fiscal | Inventario propio, recepciones, movimientos, despachos y bloqueos |
| Inspector | Inspecciones asignadas, resultados, evidencias y tiempos |
| Agente aduanal | Operaciones aduanales propias, documentos, órdenes y pagos relacionados |
| Operador interno | Módulos autorizados por rol |
| Superadministrador | Reportes globales |
| Auditor | Reportes globales de solo lectura, auditoría, seguridad y financieros |
| Soporte técnico | Tickets e incidencias limitadas |

---

## 22. Reglas de exportación

1. Exportar requiere permiso `reports.export`.
2. Exportar reportes financieros requiere `reports.export_financial` o permiso reforzado.
3. Exportar auditoría requiere `audit.export`.
4. Toda exportación debe pedir motivo.
5. Toda exportación debe generar audit log.
6. La exportación debe respetar scope.
7. El archivo exportado debe protegerse como documento sensible.
8. Debe existir límite de filas exportables.
9. Si se excede el límite, devolver error controlado.
10. No exportar campos sensibles innecesarios.
11. El auditor puede exportar solo si tiene permiso explícito.
12. El cliente no debe exportar reportes globales.
13. La tienda no debe exportar datos de otras tiendas.

---

## 23. Formatos de exportación MVP

| Formato | Código | MVP |
|---|---|---|
| CSV | `CSV` | Sí |
| Excel | `XLSX` | Opcional |
| PDF | `PDF` | Futuro / opcional |
| JSON | `JSON` | Futuro / uso técnico |

Recomendación MVP:

```txt
Implementar CSV primero.
Preparar arquitectura para XLSX y PDF futuros.
```

---

## 24. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `report_definitions` | Definición de reportes disponibles |
| `report_exports` | Exportaciones realizadas |
| `dashboard_widgets` | Widgets configurables por dashboard, opcional |
| `orders` | KPIs de órdenes |
| `quotations` | KPIs comerciales |
| `services` | KPIs de servicios |
| `stores` | KPIs de tiendas |
| `payments` | KPIs financieros |
| `commissions` | KPIs de comisiones |
| `tos_containers` | KPIs TOS |
| `tos_gates` | KPIs gate-in/gate-out |
| `trips` | KPIs transporte |
| `inventory_items` | KPIs almacenamiento |
| `storage_movements` | KPIs movimientos internos |
| `dispatches` | KPIs despachos |
| `inspections` | KPIs inspecciones |
| `documents` | KPIs documentales |
| `evidences` | KPIs de evidencias |
| `audit_logs` | KPIs de auditoría |
| `security_events` | KPIs seguridad |
| `login_attempts` | KPIs login |
| `notifications` | KPIs notificaciones futuras |

---

## 25. Modelo de tabla `report_definitions`

```txt
id
uuid
report_code
report_name
report_type
module_code
description
required_permission
allowed_profiles
supports_export
supports_date_filter
status
created_at
updated_at
```

---

## 26. Modelo de tabla `report_exports`

```txt
id
uuid
export_code
report_code
exported_by
export_format
filters_used
row_count
document_id
export_reason
status
created_at
updated_at
```

---

## 27. Modelo de tabla `dashboard_widgets`

Tabla opcional para futura configuración de dashboard.

```txt
id
uuid
widget_code
widget_name
dashboard_profile_code
report_code
widget_type
position_index
required_permission
status
created_at
updated_at
```

---

## 28. Permisos RBAC del módulo de reportes

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `reports.view` | Ver reportes según scope | Todos los perfiles autorizados |
| `reports.view_global` | Ver reportes globales | Superadministrador, auditor |
| `reports.view_commercial` | Ver reportes comerciales | Admin, tienda, operador |
| `reports.view_operational` | Ver reportes operativos | Admin, operador, auditor, tienda según scope |
| `reports.view_financial` | Ver reportes financieros | Admin, auditor, tienda limitada |
| `reports.view_tos` | Ver reportes TOS | Admin, operador, auditor |
| `reports.view_transport` | Ver reportes transporte | Admin, transportista, operador, auditor |
| `reports.view_storage` | Ver reportes almacenamiento | Admin, almacén, operador, auditor |
| `reports.view_inspections` | Ver reportes inspecciones | Admin, inspector, operador, auditor |
| `reports.view_security` | Ver reportes seguridad | Admin, auditor |
| `reports.export` | Exportar reportes generales | Admin, auditor autorizado, tienda limitada |
| `reports.export_financial` | Exportar reportes financieros | Admin, auditor autorizado |
| `reports.manage_definitions` | Administrar definiciones de reportes | Superadministrador |
| `reports.audit` | Ver auditoría de reportes/exportaciones | Admin, auditor |

---

## 29. Scopes de reportes

| Perfil | Scope | Regla |
|---|---|---|
| Cliente final | `own` | Solo datos de sus órdenes y pagos |
| Tienda logística | `store` | Solo datos de su tienda |
| Transportista | `store` o `assigned` | Viajes y operaciones propias/asignadas |
| Inspector | `assigned` | Inspecciones asignadas o de su empresa |
| Almacén fiscal | `store` | Inventario y despachos propios |
| Agente aduanal | `store` | Operaciones aduanales propias |
| Operador interno | `module` | Módulos autorizados |
| Superadministrador | `global` | Todos los datos |
| Auditor | `global_readonly` | Todos los datos de solo lectura |
| Soporte técnico | `support_limited` | Incidencias y tickets autorizados |

---

## 30. Endpoints Nest.js del módulo de reportes

Base path principal:

```txt
/reports
```

### 30.1 Reportes generales

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/reports/definitions` | Listar reportes disponibles según perfil | `reports.view` | No |
| GET | `/reports/dashboard` | Dashboard del usuario actual | `reports.view` | No |
| GET | `/reports/executive` | Dashboard ejecutivo global | `reports.view_global` | Opcional |
| GET | `/reports/commercial` | Reportes comerciales | `reports.view_commercial` | Opcional |
| GET | `/reports/operational` | Reportes operativos generales | `reports.view_operational` | Opcional |
| GET | `/reports/financial` | Reportes financieros | `reports.view_financial` | Opcional |
| POST | `/reports/export` | Exportar reporte | `reports.export` | `report.exported` |

### 30.2 Reportes por módulo

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/reports/orders` | Reporte de órdenes | `reports.view_operational` |
| GET | `/reports/quotations` | Reporte de cotizaciones | `reports.view_commercial` |
| GET | `/reports/stores` | Reporte de tiendas | `reports.view_commercial` |
| GET | `/reports/services` | Reporte de servicios | `reports.view_commercial` |
| GET | `/reports/tos` | Reporte TOS | `reports.view_tos` |
| GET | `/reports/transport` | Reporte transporte | `reports.view_transport` |
| GET | `/reports/storage` | Reporte almacenamiento | `reports.view_storage` |
| GET | `/reports/inspections` | Reporte inspecciones | `reports.view_inspections` |
| GET | `/reports/payments` | Reporte pagos | `reports.view_financial` |
| GET | `/reports/commissions` | Reporte comisiones | `reports.view_financial` |
| GET | `/reports/documents` | Reporte documental | `reports.view_operational` |
| GET | `/reports/security` | Reporte seguridad | `reports.view_security` |
| GET | `/reports/audit` | Reporte auditoría | `audit.view` |

### 30.3 Reportes por perfil

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/reports/client-dashboard` | Dashboard cliente | `reports.view` |
| GET | `/reports/store-dashboard` | Dashboard tienda | `reports.view` |
| GET | `/reports/carrier-dashboard` | Dashboard transportista | `reports.view_transport` |
| GET | `/reports/warehouse-dashboard` | Dashboard almacén | `reports.view_storage` |
| GET | `/reports/inspector-dashboard` | Dashboard inspector | `reports.view_inspections` |
| GET | `/reports/operator-dashboard` | Dashboard operador | `reports.view_operational` |
| GET | `/reports/admin-dashboard` | Dashboard admin | `reports.view_global` |
| GET | `/reports/auditor-dashboard` | Dashboard auditor | `audit.view` |

---

## 31. DTOs sugeridos

### 31.1 `ReportFilterDto`

```json
{
  "dateFrom": "2026-02-01",
  "dateTo": "2026-02-28",
  "storeId": 20,
  "serviceCategoryCode": "CUSTOMS",
  "status": "ACTIVE",
  "currencyCode": "USD",
  "page": 1,
  "limit": 25
}
```

### 31.2 `FinancialReportFilterDto`

```json
{
  "dateFrom": "2026-02-01",
  "dateTo": "2026-02-28",
  "storeId": 20,
  "paymentStatus": "CONFIRMED",
  "commissionStatus": "CONFIRMED",
  "currencyCode": "USD",
  "page": 1,
  "limit": 25
}
```

### 31.3 `OperationalReportFilterDto`

```json
{
  "dateFrom": "2026-02-01",
  "dateTo": "2026-02-28",
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-HOU-BAYPORT",
  "storeId": 30,
  "status": "IN_PROCESS",
  "page": 1,
  "limit": 25
}
```

### 31.4 `ExportReportDto`

```json
{
  "reportCode": "FINANCIAL_PAYMENTS_SUMMARY",
  "exportFormat": "CSV",
  "filters": {
    "dateFrom": "2026-02-01",
    "dateTo": "2026-02-28",
    "paymentStatus": "CONFIRMED",
    "currencyCode": "USD"
  },
  "exportReason": "Monthly financial review"
}
```

### 31.5 `CreateReportDefinitionDto`

```json
{
  "reportCode": "TRANSPORT_TRIPS_SUMMARY",
  "reportName": "Transport Trips Summary",
  "reportType": "TRANSPORT",
  "moduleCode": "transport",
  "description": "Summary of trips by status, carrier and period",
  "requiredPermission": "reports.view_transport",
  "allowedProfiles": ["PROF-SUP-003", "PROF-TRA-006", "PROF-OPE-004", "PROF-AUD-008"],
  "supportsExport": true,
  "supportsDateFilter": true,
  "status": "ACTIVE"
}
```

---

## 32. Estructura de respuesta recomendada para dashboards

```json
{
  "summaryCards": [
    {
      "code": "active_orders",
      "label": "Órdenes activas",
      "value": 18,
      "unit": "count",
      "trend": "up"
    }
  ],
  "charts": [
    {
      "code": "orders_by_status",
      "type": "bar",
      "title": "Órdenes por estado",
      "data": []
    }
  ],
  "tables": [
    {
      "code": "latest_orders",
      "title": "Últimas órdenes",
      "columns": [],
      "rows": []
    }
  ],
  "filtersApplied": {},
  "generatedAt": "2026-02-01T12:00:00.000Z"
}
```

---

## 33. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `ReportsDashboardPage` | Dashboard general de reportes |
| `ClientReportsDashboard` | Dashboard del cliente |
| `StoreReportsDashboard` | Dashboard de tienda |
| `AdminReportsDashboard` | Dashboard global del superadministrador |
| `AuditorReportsDashboard` | Dashboard auditor |
| `OperatorReportsDashboard` | Dashboard operador |
| `ReportSummaryCard` | Tarjeta KPI |
| `ReportMetricGrid` | Grid de KPIs |
| `ReportFiltersBar` | Filtros transversales |
| `ReportDateRangePicker` | Selector de rango de fechas |
| `ReportStatusFilter` | Filtro por estado |
| `ReportStoreFilter` | Filtro por tienda |
| `ReportTable` | Tabla de reporte |
| `ReportChartCard` | Contenedor de gráfico |
| `ReportExportButton` | Botón de exportación |
| `ReportExportModal` | Modal con motivo de exportación |
| `FinancialReportPage` | Reportes financieros |
| `OperationalReportPage` | Reportes operativos |
| `TosReportPage` | Reportes TOS |
| `TransportReportPage` | Reportes transporte |
| `StorageReportPage` | Reportes almacenamiento |
| `InspectionsReportPage` | Reportes inspecciones |
| `SecurityReportPage` | Reportes seguridad |
| `ReportForbiddenState` | Estado sin permisos |
| `ReportEmptyState` | Estado sin datos |
| `ReportLoadingSkeleton` | Estado de carga |

---

## 34. Páginas React.js por perfil

### 34.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/reports` | `ClientReportsDashboard` | Resumen de operaciones propias |
| `/client/reports/orders` | `ClientOrdersReportPage` | Órdenes propias |
| `/client/reports/payments` | `ClientPaymentsReportPage` | Pagos propios |
| `/client/reports/documents` | `ClientDocumentsReportPage` | Documentos propios |

### 34.2 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/reports` | `StoreReportsDashboard` | Resumen de tienda |
| `/store/reports/services` | `StoreServicesReportPage` | Servicios propios |
| `/store/reports/quotations` | `StoreQuotationsReportPage` | Cotizaciones recibidas |
| `/store/reports/orders` | `StoreOrdersReportPage` | Órdenes propias |
| `/store/reports/payments` | `StorePaymentsReportPage` | Pagos relacionados |
| `/store/reports/commissions` | `StoreCommissionsReportPage` | Comisiones y neto proveedor |

### 34.3 Transportista

| Ruta | Página | Uso |
|---|---|---|
| `/carrier/reports` | `CarrierReportsDashboard` | Resumen transportista |
| `/carrier/reports/trips` | `CarrierTripsReportPage` | Viajes |
| `/carrier/reports/deliveries` | `CarrierDeliveriesReportPage` | Entregas y POD |
| `/carrier/reports/incidents` | `CarrierIncidentsReportPage` | Incidencias y retrasos |

### 34.4 Almacén fiscal

| Ruta | Página | Uso |
|---|---|---|
| `/warehouse/reports` | `WarehouseReportsDashboard` | Resumen almacén |
| `/warehouse/reports/inventory` | `WarehouseInventoryReportPage` | Inventario |
| `/warehouse/reports/dispatches` | `WarehouseDispatchesReportPage` | Despachos |
| `/warehouse/reports/holds` | `WarehouseHoldsReportPage` | Bloqueos |

### 34.5 Inspector

| Ruta | Página | Uso |
|---|---|---|
| `/inspector/reports` | `InspectorReportsDashboard` | Resumen de inspecciones |
| `/inspector/reports/inspections` | `InspectorInspectionsReportPage` | Inspecciones asignadas |
| `/inspector/reports/evidences` | `InspectorEvidenceReportPage` | Evidencias pendientes/cargadas |

### 34.6 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/reports` | `OperatorReportsDashboard` | Resumen operativo |
| `/operator/reports/orders` | `OperatorOrdersReportPage` | Órdenes operativas |
| `/operator/reports/tos` | `OperatorTosReportPage` | TOS |
| `/operator/reports/transport` | `OperatorTransportReportPage` | Transporte |
| `/operator/reports/storage` | `OperatorStorageReportPage` | Almacenamiento |
| `/operator/reports/inspections` | `OperatorInspectionsReportPage` | Inspecciones |

### 34.7 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/reports` | `AdminReportsDashboard` | Reportes globales |
| `/admin/reports/executive` | `ExecutiveReportPage` | Ejecutivo global |
| `/admin/reports/commercial` | `CommercialReportPage` | Comercial global |
| `/admin/reports/operational` | `OperationalReportPage` | Operativo global |
| `/admin/reports/financial` | `FinancialReportPage` | Financiero global |
| `/admin/reports/security` | `SecurityReportPage` | Seguridad |
| `/admin/reports/exports` | `ReportExportsPage` | Exportaciones realizadas |

### 34.8 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/reports` | `AuditorReportsDashboard` | Reportes de auditoría |
| `/auditor/reports/financial` | `AuditorFinancialReportPage` | Financiero solo lectura |
| `/auditor/reports/operational` | `AuditorOperationalReportPage` | Operativo solo lectura |
| `/auditor/reports/security` | `AuditorSecurityReportPage` | Seguridad solo lectura |
| `/auditor/reports/exports` | `AuditorExportsReportPage` | Exportaciones |

---

## 35. Servicios frontend API

Archivo sugerido:

```txt
/src/services/reportsApi.ts
```

Funciones mínimas:

```ts
getReportDefinitions(params)
getUserDashboard(params)
getExecutiveReport(params)
getCommercialReport(params)
getOperationalReport(params)
getFinancialReport(params)
getOrdersReport(params)
getQuotationsReport(params)
getStoresReport(params)
getServicesReport(params)
getTosReport(params)
getTransportReport(params)
getStorageReport(params)
getInspectionsReport(params)
getPaymentsReport(params)
getCommissionsReport(params)
getDocumentsReport(params)
getSecurityReport(params)
getAuditReport(params)
exportReport(payload)
getReportExports(params)
getClientDashboard(params)
getStoreDashboard(params)
getCarrierDashboard(params)
getWarehouseDashboard(params)
getInspectorDashboard(params)
getOperatorDashboard(params)
getAdminDashboard(params)
getAuditorDashboard(params)
```

---

## 36. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useReportDefinitions` | Listar reportes disponibles |
| `useUserDashboard` | Dashboard según perfil |
| `useExecutiveReport` | Reporte ejecutivo |
| `useCommercialReport` | Reporte comercial |
| `useOperationalReport` | Reporte operativo |
| `useFinancialReport` | Reporte financiero |
| `useTosReport` | Reporte TOS |
| `useTransportReport` | Reporte transporte |
| `useStorageReport` | Reporte almacenamiento |
| `useInspectionsReport` | Reporte inspecciones |
| `usePaymentsReport` | Reporte pagos |
| `useCommissionsReport` | Reporte comisiones |
| `useSecurityReport` | Reporte seguridad |
| `useReportExport` | Exportar reporte |
| `useReportFilters` | Manejo de filtros |
| `useReportPermissions` | Acciones visibles según permisos |
| `useReportDateRange` | Rango de fechas |

---

## 37. Validaciones backend obligatorias

### 37.1 Consultar reporte

1. Usuario autenticado.
2. Usuario tiene permiso requerido.
3. Aplicar scope por perfil.
4. Validar filtros.
5. Validar rango de fechas.
6. Limitar paginación.
7. No devolver datos sensibles no permitidos.
8. No permitir consultas sin límite para tablas grandes.
9. Validar que tienda/cliente solicitados estén dentro del scope.
10. Registrar auditoría si el reporte es sensible.

### 37.2 Reporte financiero

1. Requiere `reports.view_financial`.
2. Debe respetar scope.
3. Auditor solo lectura.
4. Tienda solo ve sus datos.
5. Cliente solo ve sus pagos y totales propios.
6. No mostrar reglas internas de comisión a clientes.
7. Montos se calculan en backend.
8. Moneda debe filtrarse o agruparse correctamente.

### 37.3 Exportar reporte

1. Usuario tiene permiso de exportación.
2. Debe indicar motivo.
3. Debe validar formato.
4. Debe aplicar scope.
5. Debe aplicar límite de filas.
6. Debe generar archivo protegido.
7. Debe registrar `report.exported` en auditoría.
8. Debe registrar filtros usados.
9. Debe devolver referencia segura del documento generado.

### 37.4 Definir reporte

1. Solo superadministrador puede crear o editar definiciones.
2. `report_code` único.
3. Permiso requerido debe existir.
4. Perfiles permitidos deben existir.
5. Estado debe ser válido.
6. Cambios deben auditarse.

---

## 38. Transacciones de base de datos

Deben ser transaccionales:

1. Exportar reporte + crear documento + crear `report_exports` + audit log.
2. Crear definición de reporte + audit log.
3. Actualizar definición de reporte + audit log.
4. Generar reporte financiero sensible + audit log opcional si se registra consulta.

Regla:

Si falla la creación del audit log en una exportación sensible, la exportación debe hacer rollback o quedar marcada como fallida.

---

## 39. Auditoría del módulo de reportes

| Evento | Descripción | Criticidad |
|---|---|---|
| `report.viewed` | Reporte consultado | low/medium |
| `report.financial.viewed` | Reporte financiero consultado | high |
| `report.security.viewed` | Reporte de seguridad consultado | high |
| `report.exported` | Reporte exportado | high |
| `report.financial.exported` | Reporte financiero exportado | critical |
| `report.audit.exported` | Reporte de auditoría exportado | critical |
| `report.definition.created` | Definición de reporte creada | high |
| `report.definition.updated` | Definición de reporte actualizada | high |
| `report.definition.disabled` | Definición de reporte deshabilitada | high |
| `report.forbidden_access` | Intento de acceso sin permiso | high |
| `report.scope_violation` | Intento de acceder a datos fuera de scope | high |

---

## 40. Notificaciones relacionadas con reportes

En MVP las notificaciones de reportes pueden ser limitadas.

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Exportación completada | Usuario solicitante | Tu reporte fue exportado correctamente | `/reports/exports/:id` |
| Exportación fallida | Usuario solicitante | No fue posible exportar el reporte | `/reports` |
| Exportación financiera | Admin / auditor opcional | Se exportó un reporte financiero | `/audit/logs` |
| Definición de reporte actualizada | Admin / auditor | Definición de reporte actualizada | `/admin/reports/definitions` |

---

## 41. Seguridad de reportes

Reglas:

1. Reportes financieros requieren permisos reforzados.
2. Reportes de auditoría requieren permisos de auditoría.
3. Reportes de seguridad requieren permisos de seguridad.
4. Exportaciones deben generar audit log.
5. No devolver datos de otras tiendas.
6. No devolver pagos de otros clientes.
7. No devolver documentos privados sin permiso.
8. No mostrar campos sensibles.
9. Aplicar paginación y límites.
10. Validar todos los filtros.
11. Proteger archivos exportados.
12. Evitar exponer consultas SQL o errores internos.

---

## 42. Optimización de consultas

Reglas técnicas recomendadas:

1. Crear índices por fechas y estados.
2. Crear índices por `store_id`.
3. Crear índices por `customer_id`.
4. Crear índices por `order_id`.
5. Crear índices por `status`.
6. Crear índices por `created_at`.
7. Evitar consultas sin rango en tablas grandes.
8. Usar agregaciones backend optimizadas.
9. Considerar vistas SQL o materialized summaries futuras.
10. Evitar N+1 queries.
11. Limitar tamaño de respuestas.
12. Cachear reportes no críticos si aplica en fase futura.

---

## 43. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Reporte no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Violación de scope | `SCOPE_VIOLATION` | 403 |
| Filtro inválido | `VALIDATION_ERROR` | 400 |
| Rango de fechas inválido | `VALIDATION_ERROR` | 400 |
| Formato de exportación inválido | `INVALID_EXPORT_FORMAT` | 400 |
| Exportación sin motivo | `REASON_REQUIRED` | 400 |
| Exportación demasiado grande | `EXPORT_LIMIT_EXCEEDED` | 422 |
| Error generando archivo | `REPORT_EXPORT_FAILED` | 500 |
| Reporte deshabilitado | `REPORT_DISABLED` | 422 |
| Moneda mixta sin agrupación | `CURRENCY_GROUPING_REQUIRED` | 422 |

---

## 44. Estados visuales en frontend

| Estado | Badge sugerido |
|---|---|
| `ACTIVE` | Activo |
| `DRAFT` | Borrador |
| `DISABLED` | Deshabilitado |
| `ARCHIVED` | Archivado |

| Exportación | Badge sugerido |
|---|---|
| `PENDING` | Pendiente |
| `PROCESSING` | Procesando |
| `COMPLETED` | Completada |
| `FAILED` | Fallida |
| `EXPIRED` | Expirada |

---

## 45. Reglas UX del módulo de reportes

1. Cada perfil debe ver solo los reportes relevantes.
2. Los dashboards deben cargar KPIs principales primero.
3. Los filtros deben ser visibles y fáciles de usar.
4. El rango de fechas debe tener valores por defecto.
5. Las métricas financieras deben mostrar moneda.
6. Los estados deben mostrarse con badges.
7. Las tablas deben tener paginación.
8. Las exportaciones deben pedir motivo.
9. Las exportaciones financieras deben mostrar advertencia.
10. Los reportes vacíos deben mostrar `ReportEmptyState`.
11. Los reportes sin permiso deben mostrar `ReportForbiddenState`.
12. Los gráficos deben ser simples y comprensibles.
13. No saturar el dashboard con demasiados KPIs.
14. Priorizar tarjetas, tablas y gráficos básicos para MVP.
15. Usar estilo visual consistente con Yelp-like marketplace: tarjetas limpias, badges, filtros visibles y jerarquía clara.

---

## 46. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Reportes cliente | `Dashboard cliente > Reportes` |
| Reportes tienda | `Dashboard tienda > Reportes` |
| Reportes admin | `Panel global > Reportes` |
| Reporte ejecutivo | `Panel global > Reportes > Ejecutivo` |
| Reporte comercial | `Panel global > Reportes > Comercial` |
| Reporte operativo | `Panel global > Reportes > Operativo` |
| Reporte financiero | `Panel global > Reportes > Financiero` |
| Reporte TOS | `Operaciones > Reportes > TOS` |
| Reporte transporte | `Operaciones > Reportes > Transporte` |
| Reporte almacenamiento | `Operaciones > Reportes > Almacenamiento` |
| Reporte inspecciones | `Operaciones > Reportes > Inspecciones` |
| Reporte seguridad | `Panel global > Reportes > Seguridad` |
| Exportaciones | `Panel global > Reportes > Exportaciones` |

---

## 47. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear definiciones demo:

| Código | Nombre | Tipo |
|---|---|---|
| `EXECUTIVE_GLOBAL_DASHBOARD` | Dashboard ejecutivo global | `EXECUTIVE` |
| `CLIENT_OPERATIONS_DASHBOARD` | Dashboard operaciones cliente | `OPERATIONAL` |
| `STORE_PERFORMANCE_DASHBOARD` | Dashboard rendimiento tienda | `COMMERCIAL` |
| `ORDERS_SUMMARY_REPORT` | Resumen de órdenes | `OPERATIONAL` |
| `QUOTATIONS_SUMMARY_REPORT` | Resumen de cotizaciones | `COMMERCIAL` |
| `TOS_CONTAINERS_REPORT` | Reporte de contenedores TOS | `TOS` |
| `TRANSPORT_TRIPS_REPORT` | Reporte de viajes | `TRANSPORT` |
| `STORAGE_INVENTORY_REPORT` | Reporte de inventario | `STORAGE` |
| `INSPECTIONS_SUMMARY_REPORT` | Reporte de inspecciones | `INSPECTIONS` |
| `FINANCIAL_PAYMENTS_SUMMARY` | Resumen de pagos | `FINANCIAL` |
| `FINANCIAL_COMMISSIONS_SUMMARY` | Resumen de comisiones | `FINANCIAL` |
| `AUDIT_CRITICAL_EVENTS_REPORT` | Eventos críticos | `AUDIT` |
| `SECURITY_ACCESS_REPORT` | Accesos y seguridad | `SECURITY` |

---

## 48. Ejemplo JSON de definición de reporte demo

```json
{
  "reportCode": "FINANCIAL_PAYMENTS_SUMMARY",
  "reportName": "Financial Payments Summary",
  "reportType": "FINANCIAL",
  "moduleCode": "payments",
  "description": "Summary of payments by status, method, store and period",
  "requiredPermission": "reports.view_financial",
  "allowedProfiles": ["PROF-SUP-003", "PROF-AUD-008", "PROF-TIE-002"],
  "supportsExport": true,
  "supportsDateFilter": true,
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 49. Ejemplo JSON de dashboard admin demo

```json
{
  "dashboardCode": "ADMIN_GLOBAL_DASHBOARD",
  "profileCode": "PROF-SUP-003",
  "summaryCards": [
    {
      "code": "active_stores",
      "label": "Tiendas activas",
      "value": 12,
      "unit": "count"
    },
    {
      "code": "active_orders",
      "label": "Órdenes activas",
      "value": 24,
      "unit": "count"
    },
    {
      "code": "confirmed_payment_amount",
      "label": "Pagos confirmados",
      "value": 15400.00,
      "unit": "USD"
    },
    {
      "code": "commissions_confirmed",
      "label": "Comisiones confirmadas",
      "value": 1540.00,
      "unit": "USD"
    }
  ],
  "generatedAt": "2026-02-01T12:00:00.000Z",
  "isDemo": true
}
```

---

## 50. Ejemplo JSON de exportación demo

```json
{
  "exportCode": "REXP-2026-001",
  "reportCode": "FINANCIAL_PAYMENTS_SUMMARY",
  "exportedByEmail": "admin.demo@example.com",
  "exportFormat": "CSV",
  "filtersUsed": {
    "dateFrom": "2026-02-01",
    "dateTo": "2026-02-28",
    "paymentStatus": "CONFIRMED",
    "currencyCode": "USD"
  },
  "rowCount": 25,
  "exportReason": "Monthly financial review",
  "status": "COMPLETED",
  "isDemo": true
}
```

---

## 51. Pruebas funcionales mínimas

### 51.1 Cliente final

1. Cliente ve dashboard propio.
2. Cliente ve sus órdenes.
3. Cliente ve sus pagos.
4. Cliente no ve reportes de otra persona.
5. Cliente no ve comisiones internas.
6. Cliente no exporta reportes globales.

### 51.2 Tienda logística

1. Tienda ve dashboard propio.
2. Tienda ve sus servicios.
3. Tienda ve sus cotizaciones.
4. Tienda ve sus órdenes.
5. Tienda ve sus pagos y comisiones.
6. Tienda no ve datos de otra tienda.
7. Tienda exporta solo si tiene permiso y dentro de su scope.

### 51.3 Operador interno

1. Operador ve reportes de módulos autorizados.
2. Operador no ve reportes financieros si no tiene permiso.
3. Operador puede filtrar por fecha y estado.
4. Operador no puede exportar si no tiene permiso.

### 51.4 Superadministrador

1. Admin ve reportes globales.
2. Admin ve dashboard ejecutivo.
3. Admin ve reportes comerciales.
4. Admin ve reportes operativos.
5. Admin ve reportes financieros.
6. Admin puede exportar con motivo.
7. Exportación genera auditoría.

### 51.5 Auditor

1. Auditor ve reportes globales de solo lectura.
2. Auditor ve reportes financieros si tiene permiso.
3. Auditor ve reportes de seguridad.
4. Auditor puede exportar solo si tiene permiso.
5. Auditor no puede modificar definiciones.

---

## 52. Pruebas técnicas API

1. `GET /reports/dashboard` devuelve dashboard según perfil.
2. `GET /reports/financial` requiere permiso financiero.
3. `GET /reports/transport` respeta scope transportista.
4. `GET /reports/storage` respeta scope almacén.
5. `GET /reports/inspections` respeta scope inspector.
6. `GET /reports/tos` requiere permiso TOS.
7. `GET /reports/security` requiere permiso de seguridad.
8. Filtros inválidos devuelven 400.
9. Rango de fechas inválido devuelve 400.
10. `POST /reports/export` exige motivo.
11. `POST /reports/export` rechaza usuario sin permiso.
12. Exportación respeta scope.
13. Exportación crea `report_exports`.
14. Exportación genera audit log `report.exported`.
15. Reporte financiero no expone datos de otras tiendas.
16. Listados tienen paginación.
17. Respuesta de dashboard incluye `generatedAt`.

---

## 53. Criterios de aceptación

El módulo de reportes se considera aceptado cuando:

1. Existen dashboards por perfil.
2. Cliente ve solo reportes propios.
3. Tienda ve solo reportes de su tienda.
4. Transportista ve solo viajes propios/asignados.
5. Inspector ve solo inspecciones asignadas o de su empresa.
6. Operador ve solo módulos autorizados.
7. Auditor ve reportes de solo lectura.
8. Superadministrador ve reportes globales.
9. Existen KPIs comerciales.
10. Existen KPIs operativos.
11. Existen KPIs TOS.
12. Existen KPIs transporte.
13. Existen KPIs almacenamiento.
14. Existen KPIs inspecciones.
15. Existen KPIs financieros.
16. Existen KPIs auditoría/seguridad.
17. Los filtros funcionan.
18. Los reportes respetan RBAC.
19. Los reportes respetan scopes.
20. Las exportaciones requieren permiso.
21. Las exportaciones requieren motivo.
22. Las exportaciones generan auditoría.
23. Los reportes financieros no exponen datos indebidos.
24. Las tablas tienen paginación.
25. Los endpoints están documentados en Swagger.
26. Pruebas funcionales y API pasan.
27. No existe dependencia técnica con Odoo ni BI externo.

---

## 54. Tareas técnicas para Antigravity

### 54.1 Base de datos

1. Crear o validar tabla `report_definitions`.
2. Crear o validar tabla `report_exports`.
3. Crear tabla opcional `dashboard_widgets`.
4. Crear índices en tablas fuente por fecha, estado y scope.
5. Crear seeds de definiciones de reportes.
6. Crear seeds de exportaciones demo opcionales.
7. Validar relación con documentos para exportaciones.
8. Validar relación con audit logs.

### 54.2 Backend Nest.js

1. Crear módulo `reports`.
2. Crear `ReportsController`.
3. Crear `ReportsService`.
4. Crear `ReportDefinitionsService`.
5. Crear `ReportExportService`.
6. Crear DTOs de filtros.
7. Crear DTO de exportación.
8. Crear endpoints de dashboards.
9. Crear endpoints de reportes por módulo.
10. Crear endpoints de reportes por perfil.
11. Crear motor de scope para reportes.
12. Crear agregadores de KPIs.
13. Crear exportador CSV.
14. Preparar arquitectura para XLSX/PDF futuros.
15. Integrar con auditoría.
16. Integrar con documentos para archivos exportados.
17. Crear pruebas unitarias y API.

### 54.3 Frontend React.js

1. Crear `ReportsDashboardPage`.
2. Crear dashboards por perfil.
3. Crear `ReportSummaryCard`.
4. Crear `ReportMetricGrid`.
5. Crear `ReportFiltersBar`.
6. Crear `ReportTable`.
7. Crear `ReportChartCard`.
8. Crear `ReportExportButton`.
9. Crear `ReportExportModal`.
10. Crear páginas de reportes comerciales.
11. Crear páginas de reportes operativos.
12. Crear páginas de reportes financieros.
13. Crear páginas TOS, transporte, almacenamiento e inspecciones.
14. Crear páginas de seguridad/auditoría.
15. Crear hooks de reportes.
16. Crear guards visuales por permisos.
17. Crear estados loading, empty, error y forbidden.

### 54.4 QA

1. Probar dashboards por perfil.
2. Probar filtros.
3. Probar scopes.
4. Probar permisos.
5. Probar KPIs comerciales.
6. Probar KPIs operativos.
7. Probar KPIs financieros.
8. Probar KPIs TOS.
9. Probar KPIs transporte.
10. Probar KPIs almacenamiento.
11. Probar KPIs inspecciones.
12. Probar KPIs auditoría/seguridad.
13. Probar exportación con motivo.
14. Probar auditoría de exportación.
15. Probar límites de exportación.
16. Probar errores.
17. Probar paginación.

---

## 55. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto de analítica, backend architect Nest.js, frontend architect React.js, database architect MySQL, security engineer y QA engineer del Marketplace Logístico TOS.

Usa el documento `28_REPORTS_MASTER_PLAN.md` como fuente principal para implementar el módulo transversal de reportes, dashboards, KPIs y exportaciones del marketplace logístico.

Objetivo:
Implementar un sistema de reportes que permita dashboards por perfil, KPIs comerciales, operativos, financieros, TOS, transporte, almacenamiento, inspecciones, documentos, auditoría y seguridad; con filtros, scopes, permisos, exportaciones controladas y auditoría de exportaciones.

Reglas obligatorias:
1. Todo reporte debe validar autenticación.
2. Todo reporte debe validar permiso.
3. Todo reporte debe validar scope.
4. Cliente solo ve datos propios.
5. Tienda solo ve datos de su tienda.
6. Transportista solo ve viajes propios/asignados.
7. Inspector solo ve inspecciones asignadas o propias.
8. Auditor ve solo lectura.
9. Superadministrador ve global.
10. Reportes financieros requieren permiso reforzado.
11. Exportar requiere permiso y motivo.
12. Toda exportación genera audit log.
13. Exportaciones deben respetar scope.
14. Filtros deben validarse en backend.
15. Tablas deben tener paginación.
16. Montos financieros se calculan en backend.
17. No exponer datos sensibles innecesarios.
18. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
19. Respetar `13_API_SPECIFICATION.md`.
20. Respetar `24_PAYMENTS_MASTER_PLAN.md`.
21. Respetar `25_COMMISSIONS_MASTER_PLAN.md`.
22. Respetar `26_SECURITY_MASTER_PLAN.md`.
23. Respetar `27_AUDIT_TRAIL_MASTER_PLAN.md`.
24. No integrar Odoo ni BI externo en MVP.

Entregables esperados:
1. Tabla `report_definitions`.
2. Tabla `report_exports`.
3. Módulo Reports Nest.js.
4. Endpoints de dashboards por perfil.
5. Endpoints de reportes por módulo.
6. DTOs de filtros.
7. DTOs de exportación.
8. Agregadores de KPIs.
9. Motor de scope para reportes.
10. Exportador CSV.
11. Auditoría de exportaciones.
12. Componentes React.js de reportes.
13. Dashboards por perfil.
14. Filtros visuales.
15. Tablas y tarjetas KPI.
16. Pruebas unitarias y API.
17. Seeds demo de reportes.
18. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, backend reports service, agregadores KPI, endpoints por perfil, frontend dashboards, filtros, exportación, auditoría, seguridad, QA y hardening final.
```

---

## 56. Checklist de uso en Antigravity

- [ ] Guardar este documento como `28_REPORTS_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `10_NAVIGATION_AND_MENUS.md`.
- [ ] Validar consistencia con `11_TECHNICAL_ARCHITECTURE.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Validar consistencia con `20_TOS_OPERATION_PLAN.md`.
- [ ] Validar consistencia con `21_TRANSPORT_OPERATION_PLAN.md`.
- [ ] Validar consistencia con `22_STORAGE_OPERATION_PLAN.md`.
- [ ] Validar consistencia con `23_INSPECTION_OPERATION_PLAN.md`.
- [ ] Validar consistencia con `24_PAYMENTS_MASTER_PLAN.md`.
- [ ] Validar consistencia con `25_COMMISSIONS_MASTER_PLAN.md`.
- [ ] Validar consistencia con `26_SECURITY_MASTER_PLAN.md`.
- [ ] Validar consistencia con `27_AUDIT_TRAIL_MASTER_PLAN.md`.
- [ ] Crear tablas de reportes.
- [ ] Crear módulo Reports.
- [ ] Crear endpoints de dashboards.
- [ ] Crear endpoints de reportes por módulo.
- [ ] Crear DTOs de filtros.
- [ ] Crear DTOs de exportación.
- [ ] Crear agregadores KPI.
- [ ] Crear exportador CSV.
- [ ] Integrar con documentos.
- [ ] Integrar con auditoría.
- [ ] Crear componentes React.
- [ ] Crear dashboards por perfil.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni BI externo.

---

## 57. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión analítica | Sí |
| Pendiente de revisión de seguridad | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

