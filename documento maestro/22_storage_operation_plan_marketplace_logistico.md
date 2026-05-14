# 22_STORAGE_OPERATION_PLAN.md

# Documento Maestro del Plan Operativo de Almacenamiento
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `22_STORAGE_OPERATION_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Almacenamiento logístico |
| Módulos relacionados | Órdenes, cotizaciones, servicios, tiendas, TOS, transporte, documentos, evidencias, pagos, comisiones, inspecciones, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan operativo maestro del módulo de almacenamiento** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de un módulo que permita registrar, recibir, ubicar, mover, custodiar, inspeccionar, despachar y cerrar operaciones de almacenamiento asociadas a órdenes de servicio, cargas, contenedores, almacenes fiscales, patios, transportes, documentos y evidencias.

El módulo de almacenamiento del MVP debe permitir:

1. Crear almacenes y ubicaciones internas.
2. Recibir mercancía o contenedores asociados a órdenes.
3. Registrar inventario básico referencial.
4. Asignar ubicación de almacenamiento.
5. Registrar movimientos internos.
6. Controlar estados de inventario y almacenamiento.
7. Registrar despacho o salida.
8. Emitir recibo de almacén referencial.
9. Vincular documentos y evidencias.
10. Relacionar almacenamiento con transporte y TOS.
11. Generar eventos en timeline de orden.
12. Auditar eventos críticos.
13. Enviar notificaciones a usuarios involucrados.
14. Generar reportes y métricas operativas.

---

## 3. Objetivo general

Diseñar e implementar un módulo de almacenamiento seguro, trazable, auditable y escalable que permita gestionar operaciones básicas de recepción, ubicación, custodia, movimiento interno y despacho de mercancías o contenedores dentro del marketplace logístico.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del módulo de almacenamiento.
2. Definir entidades operativas principales.
3. Definir el ciclo de vida del inventario almacenado.
4. Definir estados de almacenamiento.
5. Definir reglas de recepción.
6. Definir reglas de ubicación.
7. Definir reglas de movimiento interno.
8. Definir reglas de despacho.
9. Definir relación con órdenes de servicio.
10. Definir relación con transporte.
11. Definir relación con TOS básico.
12. Definir relación con inspecciones.
13. Definir relación con documentos y evidencias.
14. Definir permisos RBAC y scopes.
15. Definir endpoints Nest.js.
16. Definir componentes React.js.
17. Definir validaciones backend.
18. Definir auditoría y notificaciones.
19. Definir reportes y métricas.
20. Definir casos de error.
21. Definir seeds demo.
22. Definir pruebas funcionales y técnicas.
23. Servir como prompt para Antigravity.

---

## 5. Alcance del almacenamiento MVP

El MVP debe cubrir el siguiente flujo operativo:

```txt
Orden logística aprobada
  ↓
Servicio de almacenamiento contratado
  ↓
Recepción de mercancía o contenedor
  ↓
Registro de inventario básico
  ↓
Asignación de ubicación
  ↓
Movimiento interno si aplica
  ↓
Custodia o almacenamiento por periodo
  ↓
Inspección o validación si aplica
  ↓
Despacho o salida
  ↓
Evidencias y cierre operativo
  ↓
Actualización de orden y timeline
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. WMS avanzado.
2. Inventario con valorización contable.
3. Lotes complejos con trazabilidad industrial avanzada.
4. Picking y packing avanzado.
5. Cross-docking avanzado.
6. Control automático con códigos de barra.
7. RFID.
8. Integración con básculas reales.
9. Integración con escáneres de almacén.
10. Integración directa con Odoo Inventory.
11. Integración directa con ERP externo.
12. Integración con sistemas fiscales oficiales.
13. Facturación automática de almacenaje por días.
14. Algoritmos de optimización de ubicaciones.
15. Control de temperatura IoT.
16. Control de inventario multi-almacén avanzado.
17. Liquidación financiera automática de almacenaje.
18. App móvil nativa de almacén.

---

## 7. Principios funcionales del módulo de almacenamiento

Antigravity debe respetar los siguientes principios:

1. Todo registro de inventario debe estar asociado a una orden, recepción o operación autorizada.
2. Todo inventario debe tener tipo de carga, unidad y cantidad.
3. Todo inventario almacenado debe tener almacén y ubicación actual.
4. Todo movimiento interno debe conservar origen y destino.
5. Toda recepción debe generar evento de orden.
6. Todo despacho debe generar evento de orden.
7. La salida no debe permitirse si existen bloqueos activos críticos.
8. La salida no debe permitirse si faltan documentos requeridos, salvo autorización especial.
9. Las evidencias críticas no deben eliminarse físicamente.
10. Los cambios críticos deben auditarse.
11. El backend es la fuente de verdad de estados y validaciones.
12. El cliente solo debe ver inventario asociado a sus órdenes.
13. La tienda/almacén solo debe ver inventario de sus operaciones.
14. El auditor puede consultar sin modificar.
15. El superadministrador puede consultar globalmente.
16. El diseño debe permitir integración futura con WMS sin acoplar el core.

---

## 8. Actores del módulo de almacenamiento

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta recepción, ubicación, estado y despacho de su mercancía |
| Tienda logística | `PROF-TIE-002` | Proveedor que ofrece servicios de almacenamiento |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Recibe, ubica, mueve, custodia y despacha mercancía |
| Operador interno | `PROF-OPE-004` | Supervisa operaciones, documentos y excepciones |
| Transportista | `PROF-TRA-006` | Entrega carga al almacén o retira carga despachada |
| Agente aduanal | `PROF-ADU-007` | Consulta estado documental, fiscal o aduanero relacionado |
| Inspector | `PROF-INS-005` | Ejecuta inspecciones físicas/documentales relacionadas con inventario |
| Superadministrador | `PROF-SUP-003` | Consulta global, configura y corrige casos excepcionales |
| Auditor | `PROF-AUD-008` | Consulta inventario, movimientos, evidencias y logs sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias del módulo de almacenamiento |

---

## 9. Entidades principales del módulo de almacenamiento

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Almacén | `warehouses` | Instalación o proveedor de almacenamiento |
| Ubicación | `storage_locations` | Posición interna dentro del almacén |
| Inventario | `inventory_items` | Mercancía, carga o contenedor almacenado |
| Movimiento | `storage_movements` | Traslado interno entre ubicaciones |
| Recepción | `storage_receipts` o evento de movimiento | Ingreso de carga al almacén |
| Despacho | `dispatches` | Salida de carga del almacén |
| Evidencia | `evidences` | Fotos, recibos, actas o comprobantes |
| Documento | `documents` | Documentos asociados al almacenamiento |
| Orden | `orders` | Orden de servicio relacionada |
| Transporte | `trips` | Viaje de entrada o salida |
| TOS | `tos_containers` | Contenedor asociado si aplica |
| Inspección | `inspections` | Inspección asociada a mercancía o ubicación |
| Auditoría | `audit_logs` | Trazabilidad de cambios críticos |
| Notificación | `notifications` | Avisos a usuarios involucrados |

---

## 10. Modelo operativo general

```txt
Order
  ↓
Warehouse Service
  ↓
Receipt
  ↓
Inventory Item
  ↓
Storage Location
  ↓
Internal Movement
  ↓
Storage / Custody
  ↓
Dispatch
  ↓
Evidence
  ↓
Order Timeline
```

---

## 11. Tipos de almacén

| Código | Nombre | Descripción |
|---|---|---|
| `BONDED` | Fiscal / Bonded | Almacén fiscal o autorizado |
| `GENERAL` | General | Almacén general de mercancía |
| `REEFER` | Refrigerado | Almacén con temperatura controlada |
| `CONTAINER_YARD` | Patio de contenedores | Área para contenedores |
| `CFS` | Container Freight Station | Estación de consolidación/desconsolidación |
| `TEMPORARY_STORAGE` | Almacenamiento temporal | Custodia temporal de mercancía |

---

## 12. Estados del inventario almacenado

| Estado | Código | Descripción |
|---|---|---|
| Registrado | `REGISTERED` | Inventario creado pero no recibido físicamente |
| Recibido | `RECEIVED` | Mercancía recibida en almacén |
| En revisión | `IN_REVIEW` | Inventario en validación documental o física |
| Ubicado | `STORED` | Mercancía ubicada en almacén |
| Movido | `MOVED` | Mercancía movida internamente |
| Bloqueado | `BLOCKED` | No puede moverse o despacharse |
| Reservado | `RESERVED` | Separado para despacho o proceso |
| En despacho | `DISPATCHING` | Proceso de salida iniciado |
| Despachado | `DISPATCHED` | Mercancía salió del almacén |
| Cancelado | `CANCELLED` | Registro anulado |

---

## 13. Transiciones válidas de inventario

```txt
REGISTERED → RECEIVED
REGISTERED → CANCELLED
RECEIVED → IN_REVIEW
RECEIVED → STORED
IN_REVIEW → STORED
IN_REVIEW → BLOCKED
STORED → MOVED
MOVED → STORED
STORED → BLOCKED
BLOCKED → STORED
STORED → RESERVED
RESERVED → DISPATCHING
DISPATCHING → DISPATCHED
STORED → DISPATCHING
```

---

## 14. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `REGISTERED` | `DISPATCHED` | Debe recibirse y ubicarse antes de despachar |
| `BLOCKED` | `DISPATCHED` | No puede salir con bloqueo activo |
| `DISPATCHED` | `MOVED` | Mercancía ya salió del almacén |
| `CANCELLED` | cualquier estado operativo | Registro cancelado no se reactiva sin proceso especial |
| `STORED` | `REGISTERED` | No se retrocede a registro inicial |

---

## 15. Tipos de operación de almacenamiento

| Código | Operación | Descripción |
|---|---|---|
| `REGISTER_ITEM` | Registrar inventario | Alta referencial de mercancía |
| `RECEIVE` | Recibir | Ingreso físico o documental al almacén |
| `PUTAWAY` | Ubicar | Asignar ubicación interna |
| `MOVE` | Movimiento interno | Cambiar ubicación |
| `HOLD` | Bloqueo | Restringir movimiento o despacho |
| `RELEASE` | Liberación | Remover bloqueo |
| `RESERVE` | Reservar | Separar para despacho |
| `DISPATCH` | Despachar | Salida del almacén |
| `ADD_EVIDENCE` | Cargar evidencia | Agregar evidencia operativa |
| `ISSUE_RECEIPT` | Emitir recibo | Generar recibo de almacén referencial |

---

## 16. Tipos de bloqueo de almacenamiento

| Código | Nombre | Descripción |
|---|---|---|
| `DOCUMENT_HOLD` | Bloqueo documental | Faltan documentos o fueron rechazados |
| `CUSTOMS_HOLD` | Bloqueo aduanero | Retención por proceso aduanero |
| `PAYMENT_HOLD` | Bloqueo financiero | Pago pendiente o rechazado |
| `INSPECTION_HOLD` | Bloqueo por inspección | Requiere inspección o resultado pendiente |
| `DAMAGE_HOLD` | Bloqueo por daño | Posible daño o discrepancia |
| `SECURITY_HOLD` | Bloqueo de seguridad | Observación de seguridad |
| `OPERATIONAL_HOLD` | Bloqueo operativo | Restricción interna del almacén |
| `ADMIN_HOLD` | Bloqueo administrativo | Bloqueo manual autorizado |

---

## 17. Datos mínimos de un almacén

| Campo | Descripción | Obligatorio |
|---|---|---|
| `warehouse_code` | Código único del almacén | Sí |
| `warehouse_name` | Nombre del almacén | Sí |
| `store_id` | Tienda/proveedor asociado | Sí |
| `warehouse_type_code` | Tipo de almacén | Sí |
| `port_code` | Puerto relacionado | No, recomendado |
| `terminal_code` | Terminal relacionada | No |
| `address` | Dirección | Sí |
| `capacity_units` | Capacidad referencial | No |
| `status` | Estado | Sí |

---

## 18. Datos mínimos de una ubicación

| Campo | Descripción | Obligatorio |
|---|---|---|
| `location_code` | Código único de ubicación | Sí |
| `warehouse_id` | Almacén padre | Sí |
| `zone` | Zona o área | No |
| `aisle` | Pasillo | No |
| `rack` | Rack | No |
| `position` | Posición | No |
| `location_type` | Tipo de ubicación | No |
| `capacity_units` | Capacidad referencial | No |
| `status` | Estado | Sí |

---

## 19. Datos mínimos de inventario

| Campo | Descripción | Obligatorio |
|---|---|---|
| `inventory_code` | Código único de inventario | Sí |
| `order_id` | Orden relacionada | Sí en MVP |
| `warehouse_id` | Almacén actual | Sí al recibir |
| `location_id` | Ubicación actual | Sí al ubicar |
| `container_id` | Contenedor TOS asociado | No |
| `cargo_type_code` | Tipo de carga | Sí |
| `item_description` | Descripción de mercancía | Sí |
| `quantity` | Cantidad | Sí |
| `unit_measure` | Unidad | Sí |
| `weight` | Peso referencial | No |
| `volume` | Volumen referencial | No |
| `status` | Estado | Sí |
| `received_at` | Fecha de recepción | No |
| `dispatched_at` | Fecha de despacho | No |
| `notes` | Notas | No |

---

## 20. Datos mínimos de movimiento interno

| Campo | Descripción | Obligatorio |
|---|---|---|
| `movement_code` | Código único de movimiento | Sí |
| `inventory_item_id` | Inventario movido | Sí |
| `order_id` | Orden relacionada | No, recomendado |
| `from_location_id` | Ubicación origen | Sí |
| `to_location_id` | Ubicación destino | Sí |
| `movement_type` | Tipo de movimiento | Sí |
| `movement_reason` | Motivo | Sí |
| `movement_datetime` | Fecha/hora | Sí |
| `created_by` | Usuario que registra | Sí |

---

## 21. Datos mínimos de despacho

| Campo | Descripción | Obligatorio |
|---|---|---|
| `dispatch_code` | Código único de despacho | Sí |
| `order_id` | Orden relacionada | Sí |
| `inventory_item_id` | Inventario despachado | Sí |
| `warehouse_id` | Almacén origen | Sí |
| `location_id` | Ubicación origen | Sí |
| `trip_id` | Viaje de salida | No, recomendado |
| `dispatch_datetime` | Fecha/hora salida | Sí |
| `receiver_name` | Receptor | No |
| `dispatch_notes` | Notas | No |
| `evidence_id` | Evidencia asociada | No |
| `created_by` | Usuario que registra | Sí |

---

## 22. Ciclo operativo del inventario

### 22.1 Registro

```txt
REGISTERED
```

El inventario se crea como referencia de una orden, servicio o documento.

### 22.2 Recepción

```txt
RECEIVED
```

La mercancía o contenedor ingresa al almacén.

### 22.3 Revisión

```txt
IN_REVIEW
```

Se valida documentación, condición física o requisitos operativos.

### 22.4 Ubicación

```txt
STORED
```

La mercancía se ubica en una posición interna.

### 22.5 Movimiento interno

```txt
MOVED → STORED
```

La mercancía cambia de ubicación.

### 22.6 Bloqueo

```txt
BLOCKED
```

La mercancía no puede moverse o despacharse.

### 22.7 Reserva

```txt
RESERVED
```

La mercancía queda separada para despacho.

### 22.8 Despacho

```txt
DISPATCHING → DISPATCHED
```

La mercancía sale del almacén.

---

## 23. Reglas de recepción

1. La orden debe existir.
2. La orden no debe estar cerrada ni cancelada.
3. El almacén debe estar activo.
4. La mercancía debe tener descripción, cantidad y unidad.
5. El tipo de carga debe ser válido.
6. Si existe contenedor, debe estar registrado en TOS o crearse referencialmente si se permite.
7. Debe crearse evento de recepción.
8. Debe actualizarse estado de inventario a `RECEIVED`.
9. Debe generarse evidencia o recibo si aplica.
10. Debe reflejarse en timeline de orden.
11. Debe auditarse la recepción.

---

## 24. Reglas de ubicación

1. El inventario debe estar `RECEIVED` o `IN_REVIEW` aprobado.
2. La ubicación debe existir y estar activa.
3. La ubicación debe pertenecer al almacén seleccionado.
4. La ubicación debe tener capacidad disponible si se controla capacidad.
5. Debe actualizarse estado a `STORED`.
6. Debe registrar usuario y fecha.
7. Debe crear evento de orden.

---

## 25. Reglas de movimiento interno

1. El inventario debe estar `STORED` o `MOVED`.
2. El inventario no debe tener bloqueo activo crítico.
3. La ubicación origen debe coincidir con la ubicación actual.
4. La ubicación destino debe existir y estar activa.
5. La ubicación destino debe ser diferente a la origen.
6. Debe registrarse motivo.
7. Debe actualizarse ubicación actual.
8. Debe crear movimiento histórico.
9. Debe reflejarse en timeline de orden si aplica.
10. Debe auditarse si el movimiento es crítico.

---

## 26. Reglas de bloqueo

1. El inventario debe existir.
2. El inventario no debe estar `DISPATCHED`.
3. Debe indicarse tipo de bloqueo.
4. Debe indicarse motivo.
5. Un bloqueo activo debe impedir despacho.
6. Puede impedir movimiento interno según tipo.
7. Debe notificar a las partes relacionadas.
8. Debe auditarse.

---

## 27. Reglas de liberación

1. Debe existir bloqueo activo.
2. Usuario debe tener permiso de liberación.
3. Debe indicarse motivo de liberación.
4. Debe registrar usuario y fecha.
5. Si no quedan bloqueos activos, el inventario puede volver a `STORED` o `RESERVED` según flujo.
6. Debe generar evento y notificación.
7. Debe auditarse.

---

## 28. Reglas de despacho

1. El inventario debe estar `STORED` o `RESERVED`.
2. No debe tener bloqueos activos críticos.
3. Documentos críticos deben estar validados si aplica.
4. Pago debe estar confirmado si la política lo exige.
5. Inspecciones requeridas deben estar aprobadas si aplica.
6. Debe indicarse fecha/hora de despacho.
7. Debe cargarse evidencia mínima si aplica.
8. Debe actualizarse estado a `DISPATCHED`.
9. Debe crear evento de orden.
10. Debe vincularse con viaje de salida si aplica.
11. Debe auditarse.

---

## 29. Relación con órdenes de servicio

| Evento de almacenamiento | Efecto en orden |
|---|---|
| Inventario registrado | Agrega evento informativo |
| Recepción | Puede cambiar orden a `IN_PROCESS` o `EXECUTING` |
| Ubicación asignada | Agrega evento operativo |
| Movimiento interno | Agrega evento si aplica |
| Bloqueo | Puede cambiar orden a `ON_HOLD` |
| Liberación | Puede permitir reanudar orden |
| Despacho | Puede habilitar cierre de orden |
| Evidencia cargada | Agrega evidencia a orden |
| Recibo de almacén | Agrega documento/evidencia |

---

## 30. Relación con transporte

| Almacenamiento | Transporte |
|---|---|
| Recepción | Puede originarse desde un viaje entregado |
| Despacho | Puede generar o cerrar viaje de salida |
| POD | Puede servir como evidencia de recepción o despacho |
| Viaje retrasado | Puede retrasar recepción o despacho |
| Incidencia de transporte | Puede crear bloqueo operativo |

---

## 31. Relación con TOS básico

| Almacenamiento | TOS |
|---|---|
| Contenedor recibido | Puede vincularse a `tos_containers` |
| Patio de contenedores | Puede corresponder a almacén tipo `CONTAINER_YARD` |
| Gate-in | Puede generar recepción en almacén/patio |
| Gate-out | Puede generar despacho |
| Bloqueo TOS | Puede bloquear despacho |
| Liberación TOS | Puede habilitar salida |

---

## 32. Relación con inspecciones

| Almacenamiento | Inspección |
|---|---|
| Recepción con observación | Puede generar inspección |
| Bloqueo por daño | Puede requerir inspección física |
| Inspección aprobada | Puede liberar inventario |
| Inspección rechazada | Puede mantener bloqueo |
| Evidencia fotográfica | Puede asociarse a inventario e inspección |

---

## 33. Relación con documentos y evidencias

### 33.1 Documentos frecuentes

1. Packing List.
2. Bill of Lading.
3. Warehouse Instruction.
4. Warehouse Receipt.
5. Commercial Invoice.
6. Delivery Order.
7. Inspection Report.
8. Photo Evidence.
9. Dispatch Proof.
10. Other Document.

### 33.2 Evidencias frecuentes

1. Foto de recepción.
2. Foto de condición de carga.
3. Foto de ubicación.
4. Recibo de almacén.
5. Evidencia de movimiento.
6. Evidencia de despacho.
7. Firma simple de receptor.
8. Acta de inspección.
9. Observación de daño.
10. Documento de salida.

### 33.3 Reglas

1. Las evidencias deben asociarse a inventario, orden o despacho.
2. Evidencias críticas no se eliminan físicamente.
3. Documentos rechazados pueden bloquear despacho.
4. Recibos de almacén pueden ser documentos o evidencias.
5. Las evidencias deben tener usuario creador y fecha.

---

## 34. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `warehouses` | Almacenes |
| `storage_locations` | Ubicaciones internas |
| `inventory_items` | Inventario o mercancía almacenada |
| `storage_movements` | Movimientos internos |
| `dispatches` | Despachos o salidas |
| `storage_holds` | Bloqueos de inventario si se implementa separado |
| `orders` | Orden relacionada |
| `order_events` | Timeline de orden |
| `trips` | Viajes de entrada o salida |
| `tos_containers` | Contenedores asociados |
| `documents` | Documentos |
| `evidences` | Evidencias |
| `inspections` | Inspecciones relacionadas |
| `payments` | Pagos asociados |
| `commissions` | Comisiones del servicio |
| `audit_logs` | Auditoría |
| `notifications` | Notificaciones |
| `master_catalog_items` | Catálogos de tipos, estados, unidades y documentos |

---

## 35. Modelo de tabla `warehouses`

```txt
id
uuid
warehouse_code
warehouse_name
store_id
warehouse_type_code
port_code
terminal_code
address
capacity_units
status
created_at
updated_at
deleted_at
```

---

## 36. Modelo de tabla `storage_locations`

```txt
id
uuid
location_code
warehouse_id
zone
aisle
rack
position
location_type
capacity_units
status
created_at
updated_at
deleted_at
```

---

## 37. Modelo de tabla `inventory_items`

```txt
id
uuid
inventory_code
order_id
warehouse_id
location_id
container_id
cargo_type_code
item_description
quantity
unit_measure
weight
volume
status
received_at
dispatched_at
notes
created_by
created_at
updated_at
deleted_at
```

---

## 38. Modelo de tabla `storage_movements`

```txt
id
uuid
movement_code
inventory_item_id
order_id
from_location_id
to_location_id
movement_type
movement_reason
movement_datetime
created_by
created_at
```

---

## 39. Modelo de tabla `dispatches`

```txt
id
uuid
dispatch_code
order_id
inventory_item_id
warehouse_id
location_id
trip_id
dispatch_datetime
receiver_name
dispatch_notes
evidence_id
created_by
created_at
updated_at
```

---

## 40. Permisos RBAC del módulo de almacenamiento

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `storage.view` | Ver almacenamiento según scope | Cliente, tienda, almacén, operador, admin, auditor |
| `storage.create_warehouse` | Crear almacén | Admin, tienda autorizada |
| `storage.update_warehouse` | Actualizar almacén | Admin, tienda autorizada |
| `storage.manage_locations` | Gestionar ubicaciones | Almacén, operador, admin |
| `storage.receive` | Recibir mercancía | Almacén, operador, admin |
| `storage.putaway` | Ubicar mercancía | Almacén, operador, admin |
| `storage.move` | Mover mercancía internamente | Almacén, operador, admin |
| `storage.block` | Bloquear inventario | Almacén, operador, admin |
| `storage.release` | Liberar inventario | Almacén, operador autorizado, admin |
| `storage.dispatch` | Despachar mercancía | Almacén, operador, admin |
| `storage.upload_evidence` | Cargar evidencia | Almacén, operador, inspector |
| `storage.audit` | Ver auditoría de almacenamiento | Admin, auditor |

---

## 41. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo inventario asociado a sus órdenes |
| Tienda logística | `store` | Inventario asociado a órdenes de su tienda |
| Almacén fiscal | `store` | Inventario de su almacén |
| Transportista | `assigned` | Inventario asociado a sus viajes |
| Agente aduanal | `store` | Inventario de órdenes aduanales relacionadas |
| Inspector | `assigned` | Inventario asociado a inspecciones asignadas |
| Operador interno | `module` | Inventario autorizado por operación |
| Superadministrador | `global` | Todos los registros de almacenamiento |
| Auditor | `global` de consulta | Todos los registros sin modificar |
| Soporte | `module` limitado | Registros asociados a tickets |

---

## 42. Endpoints Nest.js del módulo de almacenamiento

Base path principal:

```txt
/storage
```

### 42.1 Almacenes

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/storage/warehouses` | Listar almacenes | `storage.view` | No |
| GET | `/storage/warehouses/:id` | Ver almacén | `storage.view` | No |
| POST | `/storage/warehouses` | Crear almacén | `storage.create_warehouse` | `warehouse.created` |
| PATCH | `/storage/warehouses/:id` | Actualizar almacén | `storage.update_warehouse` | `warehouse.updated` |
| PATCH | `/storage/warehouses/:id/disable` | Inactivar almacén | `storage.update_warehouse` | `warehouse.disabled` |

### 42.2 Ubicaciones

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/storage/locations` | Listar ubicaciones | `storage.view` | No |
| GET | `/storage/locations/:id` | Ver ubicación | `storage.view` | No |
| POST | `/storage/locations` | Crear ubicación | `storage.manage_locations` | `storage.location.created` |
| PATCH | `/storage/locations/:id` | Actualizar ubicación | `storage.manage_locations` | `storage.location.updated` |
| PATCH | `/storage/locations/:id/disable` | Inactivar ubicación | `storage.manage_locations` | `storage.location.disabled` |

### 42.3 Inventario

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/storage/inventory` | Listar inventario | `storage.view` | No |
| GET | `/storage/inventory/:id` | Ver inventario | `storage.view` | No |
| POST | `/storage/inventory` | Registrar inventario | `storage.receive` | `storage.inventory.created` |
| PATCH | `/storage/inventory/:id/receive` | Recibir inventario | `storage.receive` | `storage.received` |
| PATCH | `/storage/inventory/:id/putaway` | Ubicar inventario | `storage.putaway` | `storage.putaway` |
| PATCH | `/storage/inventory/:id/block` | Bloquear inventario | `storage.block` | `storage.inventory.blocked` |
| PATCH | `/storage/inventory/:id/release` | Liberar inventario | `storage.release` | `storage.inventory.released` |
| GET | `/storage/inventory/:id/timeline` | Timeline de inventario | `storage.view` | No |
| POST | `/storage/inventory/:id/evidences` | Cargar evidencia | `storage.upload_evidence` | `storage.evidence.uploaded` |
| GET | `/storage/inventory/:id/evidences` | Ver evidencias | `storage.view` | No |

### 42.4 Movimientos y despachos

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| POST | `/storage/movements` | Registrar movimiento interno | `storage.move` | `storage.moved` |
| GET | `/storage/movements` | Listar movimientos | `storage.view` | No |
| POST | `/storage/dispatches` | Registrar despacho | `storage.dispatch` | `storage.dispatched` |
| GET | `/storage/dispatches` | Listar despachos | `storage.view` | No |
| GET | `/storage/dispatches/:id` | Ver despacho | `storage.view` | No |

---

## 43. DTOs sugeridos

### 43.1 `CreateWarehouseDto`

```json
{
  "storeId": 30,
  "warehouseCode": "WH-2026-001",
  "warehouseName": "Demo Bonded Warehouse",
  "warehouseTypeCode": "BONDED",
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-HOU-BAYPORT",
  "address": "Houston, TX",
  "capacityUnits": 5000,
  "status": "ACTIVE"
}
```

### 43.2 `CreateStorageLocationDto`

```json
{
  "warehouseId": 1,
  "locationCode": "LOC-A-01",
  "zone": "A",
  "aisle": "01",
  "rack": "R1",
  "position": "P1",
  "locationType": "STANDARD",
  "capacityUnits": 100,
  "status": "ACTIVE"
}
```

### 43.3 `CreateInventoryItemDto`

```json
{
  "orderId": 1001,
  "warehouseId": 1,
  "containerId": 1,
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "itemDescription": "Demo imported container cargo",
  "quantity": 1,
  "unitMeasure": "CONTAINER",
  "weight": 24000,
  "volume": null,
  "notes": "Inventory item created from demo order"
}
```

### 43.4 `ReceiveInventoryDto`

```json
{
  "warehouseId": 1,
  "receivedAt": "2026-02-01T15:00:00.000Z",
  "receiptNotes": "Cargo received from transport trip",
  "evidenceIds": [1]
}
```

### 43.5 `PutawayInventoryDto`

```json
{
  "locationId": 1,
  "putawayNotes": "Assigned to location A-01"
}
```

### 43.6 `CreateStorageMovementDto`

```json
{
  "inventoryItemId": 1,
  "orderId": 1001,
  "fromLocationId": 1,
  "toLocationId": 2,
  "movementType": "INTERNAL_MOVE",
  "movementReason": "Moved to inspection zone",
  "movementDatetime": "2026-02-01T17:00:00.000Z"
}
```

### 43.7 `BlockInventoryDto`

```json
{
  "holdType": "DOCUMENT_HOLD",
  "holdReason": "Warehouse receipt requires validation"
}
```

### 43.8 `ReleaseInventoryDto`

```json
{
  "holdId": 1,
  "releaseType": "DOCUMENT_RELEASE",
  "releaseReason": "Warehouse receipt validated"
}
```

### 43.9 `CreateDispatchDto`

```json
{
  "orderId": 1001,
  "inventoryItemId": 1,
  "warehouseId": 1,
  "locationId": 1,
  "tripId": 2001,
  "dispatchDatetime": "2026-02-03T10:00:00.000Z",
  "receiverName": "Driver Demo",
  "dispatchNotes": "Cargo dispatched for final delivery",
  "evidenceId": 3
}
```

---

## 44. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `StorageDashboardPage` | Vista general del módulo de almacenamiento |
| `WarehouseListPage` | Listado de almacenes |
| `WarehouseDetailPage` | Detalle de almacén |
| `WarehouseForm` | Crear/editar almacén |
| `StorageLocationListPage` | Listado de ubicaciones |
| `StorageLocationForm` | Crear/editar ubicación |
| `InventoryListPage` | Listado de inventario |
| `InventoryDetailPage` | Detalle de inventario |
| `InventoryForm` | Registrar inventario |
| `ReceiveInventoryForm` | Registrar recepción |
| `PutawayInventoryForm` | Asignar ubicación |
| `StorageMovementForm` | Registrar movimiento interno |
| `DispatchForm` | Registrar despacho |
| `StorageHoldPanel` | Bloqueos activos e históricos |
| `StorageReleaseModal` | Liberar bloqueo |
| `StorageEvidencePanel` | Evidencias de inventario |
| `StorageTimeline` | Timeline de almacenamiento |
| `StorageStatusBadge` | Estado del inventario |
| `WarehouseCapacityCard` | Capacidad referencial |
| `StorageRelatedOrderCard` | Orden relacionada |
| `StorageRelatedTransportCard` | Viaje relacionado |
| `StorageRelatedTosCard` | Contenedor TOS relacionado |
| `StorageFiltersBar` | Filtros por almacén, estado, cliente, orden, fecha |

---

## 45. Páginas React.js por perfil

### 45.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/orders/:id/storage` | `ClientOrderStorageTab` | Ver almacenamiento asociado a su orden |
| `/client/storage/inventory/:id` | `ClientInventoryDetailPage` | Consulta limitada de inventario |

### 45.2 Almacén / tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/storage` | `StoreStorageDashboardPage` | Dashboard de almacenamiento de la tienda |
| `/store/storage/inventory` | `StoreInventoryPage` | Inventario de la tienda/almacén |
| `/store/storage/inventory/:id` | `StoreInventoryDetailPage` | Operar recepción, ubicación, movimiento y despacho |
| `/store/storage/warehouses` | `StoreWarehousesPage` | Almacenes propios |
| `/store/storage/locations` | `StoreStorageLocationsPage` | Ubicaciones propias |

### 45.3 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/storage` | `OperatorStorageDashboardPage` | Operación diaria de almacenamiento |
| `/operator/storage/inventory` | `OperatorInventoryPage` | Gestionar inventario autorizado |
| `/operator/storage/dispatches` | `OperatorDispatchesPage` | Ver despachos |

### 45.4 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/storage` | `AdminStorageDashboardPage` | Vista global de almacenamiento |
| `/admin/storage/warehouses` | `AdminWarehousesPage` | Gestión global de almacenes |
| `/admin/storage/inventory` | `AdminInventoryPage` | Inventario global |

### 45.5 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/storage` | `AuditorStoragePage` | Consulta de almacenamiento |
| `/auditor/storage/inventory/:id` | `AuditorInventoryDetailPage` | Consulta de detalle, evidencias y logs |

---

## 46. Servicios frontend API

Archivo sugerido:

```txt
/src/services/storageApi.ts
```

Funciones mínimas:

```ts
getWarehouses(params)
getWarehouseById(id)
createWarehouse(payload)
updateWarehouse(id, payload)
getStorageLocations(params)
getStorageLocationById(id)
createStorageLocation(payload)
updateStorageLocation(id, payload)
getInventoryItems(params)
getInventoryItemById(id)
createInventoryItem(payload)
receiveInventoryItem(id, payload)
putawayInventoryItem(id, payload)
blockInventoryItem(id, payload)
releaseInventoryItem(id, payload)
getInventoryTimeline(id)
uploadInventoryEvidence(id, formData)
getInventoryEvidences(id)
createStorageMovement(payload)
getStorageMovements(params)
createDispatch(payload)
getDispatches(params)
getDispatchById(id)
```

---

## 47. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useWarehouses` | Listar almacenes |
| `useWarehouseDetail` | Cargar detalle de almacén |
| `useStorageLocations` | Listar ubicaciones |
| `useInventoryItems` | Listar inventario |
| `useInventoryDetail` | Cargar detalle de inventario |
| `useCreateInventoryItem` | Registrar inventario |
| `useReceiveInventory` | Recibir mercancía |
| `usePutawayInventory` | Ubicar mercancía |
| `useMoveInventory` | Movimiento interno |
| `useBlockInventory` | Bloquear inventario |
| `useReleaseInventory` | Liberar inventario |
| `useDispatchInventory` | Despachar mercancía |
| `useStorageTimeline` | Timeline de almacenamiento |
| `useStorageEvidences` | Evidencias de inventario |
| `useStoragePermissions` | Acciones visibles según permisos |
| `useStorageFilters` | Filtros de inventario |

---

## 48. Validaciones backend obligatorias

### 48.1 Crear almacén

1. Usuario autenticado.
2. Usuario tiene `storage.create_warehouse`.
3. Tienda existe y está aprobada.
4. Tipo de almacén válido.
5. Código de almacén único.
6. Dirección obligatoria.

### 48.2 Crear ubicación

1. Usuario tiene `storage.manage_locations`.
2. Almacén existe y está activo.
3. Código de ubicación único dentro del almacén.
4. Capacidad no puede ser negativa.

### 48.3 Registrar inventario

1. Usuario tiene `storage.receive`.
2. Orden existe.
3. Orden no está cerrada ni cancelada.
4. Tipo de carga válido.
5. Unidad válida.
6. Cantidad mayor a cero.
7. Si se envía contenedor, debe existir o estar autorizado.

### 48.4 Recepción

1. Inventario existe.
2. Almacén activo.
3. Inventario no está cancelado ni despachado.
4. Fecha de recepción válida.
5. Actualizar estado a `RECEIVED`.

### 48.5 Ubicación

1. Inventario está `RECEIVED` o `IN_REVIEW` aprobado.
2. Ubicación existe y está activa.
3. Ubicación pertenece al almacén.
4. Actualizar ubicación y estado.

### 48.6 Movimiento interno

1. Inventario está ubicado.
2. No tiene bloqueo activo crítico.
3. Ubicación origen coincide con actual.
4. Ubicación destino válida.
5. Motivo obligatorio.

### 48.7 Bloqueo

1. Inventario existe.
2. Inventario no está despachado.
3. Tipo de bloqueo válido.
4. Motivo obligatorio.

### 48.8 Liberación

1. Bloqueo activo existe.
2. Usuario tiene permiso.
3. Motivo de liberación obligatorio.

### 48.9 Despacho

1. Inventario está `STORED` o `RESERVED`.
2. No existen bloqueos activos críticos.
3. Documentos críticos validados si aplica.
4. Pago confirmado si la política lo exige.
5. Inspección aprobada si aplica.
6. Evidencia mínima si aplica.
7. Actualizar estado a `DISPATCHED`.

---

## 49. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Recepción con creación de evento y evidencia.
2. Ubicación con actualización de inventario y evento.
3. Movimiento interno con actualización de ubicación y movimiento histórico.
4. Bloqueo con cambio de estado y notificación.
5. Liberación con actualización de bloqueo y estado.
6. Despacho con actualización de inventario, creación de despacho, evento y evidencia.
7. Despacho que crea o actualiza viaje de salida.
8. Recepción derivada de viaje entregado.

Si falla una parte, la operación debe hacer rollback.

---

## 50. Auditoría del módulo de almacenamiento

| Evento | Descripción | Criticidad |
|---|---|---|
| `warehouse.created` | Almacén creado | medium |
| `warehouse.updated` | Almacén actualizado | medium |
| `warehouse.disabled` | Almacén inactivado | high |
| `storage.location.created` | Ubicación creada | medium |
| `storage.location.updated` | Ubicación actualizada | medium |
| `storage.location.disabled` | Ubicación inactivada | high |
| `storage.inventory.created` | Inventario registrado | medium |
| `storage.received` | Mercancía recibida | high |
| `storage.putaway` | Mercancía ubicada | medium |
| `storage.moved` | Movimiento interno registrado | high |
| `storage.inventory.blocked` | Inventario bloqueado | high |
| `storage.inventory.released` | Inventario liberado | high |
| `storage.dispatched` | Mercancía despachada | high |
| `storage.evidence.uploaded` | Evidencia cargada | medium |
| `storage.unauthorized_access` | Intento no autorizado | high |
| `storage.override.executed` | Corrección excepcional | critical |

---

## 51. Notificaciones del módulo de almacenamiento

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Inventario registrado | Cliente / tienda | Inventario registrado para tu orden | `/orders/:id/storage` |
| Mercancía recibida | Cliente / tienda | La mercancía fue recibida en almacén | `/orders/:id/storage` |
| Mercancía ubicada | Cliente / tienda | La mercancía fue ubicada en almacén | `/orders/:id/storage` |
| Movimiento interno | Cliente / tienda | La mercancía cambió de ubicación | `/orders/:id/storage` |
| Bloqueo | Cliente / tienda / operador | La mercancía fue bloqueada | `/orders/:id/storage` |
| Liberación | Cliente / tienda | La mercancía fue liberada | `/orders/:id/storage` |
| Despacho | Cliente / tienda / transportista | La mercancía fue despachada | `/orders/:id/storage` |
| Evidencia cargada | Cliente / tienda | Nueva evidencia de almacenamiento cargada | `/orders/:id/storage` |

---

## 52. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Inventario por estado | Cantidad de inventario por estado | Admin, almacén, operador |
| Inventario por almacén | Inventario distribuido por almacén | Admin, tienda |
| Inventario por ubicación | Ocupación referencial por ubicación | Almacén, operador |
| Recepciones por periodo | Ingresos al almacén | Admin, almacén |
| Despachos por periodo | Salidas del almacén | Admin, almacén |
| Bloqueos activos | Inventario bloqueado y motivo | Admin, operador, auditor |
| Tiempo en almacén | Tiempo entre recepción y despacho | Admin, tienda |
| Evidencias pendientes | Inventario sin evidencias requeridas | Operador, admin |
| Recibos de almacén | Documentos de recepción | Almacén, auditor |
| Movimientos internos | Historial de movimientos | Admin, auditor |

---

## 53. Métricas del dashboard de almacenamiento

### 53.1 Almacén / tienda

1. Inventario recibido.
2. Inventario almacenado.
3. Inventario bloqueado.
4. Inventario reservado.
5. Inventario despachado.
6. Recepciones del día.
7. Despachos del día.
8. Movimientos internos.
9. Evidencias pendientes.
10. Ocupación referencial.

### 53.2 Cliente

1. Mercancía recibida.
2. Estado actual de almacenamiento.
3. Ubicación referencial visible si se permite.
4. Último evento de almacenamiento.
5. Bloqueos activos si existen.
6. Evidencias disponibles.
7. Despacho programado o completado.

### 53.3 Operador interno

1. Recepciones pendientes.
2. Ubicaciones pendientes.
3. Movimientos pendientes.
4. Bloqueos activos.
5. Despachos pendientes.
6. Inventario con documentos incompletos.
7. Inventario con inspección pendiente.

### 53.4 Superadministrador

1. Inventario global.
2. Inventario por almacén.
3. Inventario por estado.
4. Almacenes activos.
5. Bloqueos críticos.
6. Recepciones y despachos por periodo.
7. Tiempo promedio de almacenamiento.

### 53.5 Auditor

1. Movimientos críticos.
2. Bloqueos y liberaciones.
3. Despachos.
4. Cambios de ubicación.
5. Evidencias.
6. Usuarios que registraron eventos.

---

## 54. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Almacén no existe | `RESOURCE_NOT_FOUND` | 404 |
| Ubicación no existe | `RESOURCE_NOT_FOUND` | 404 |
| Inventario no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Ubicación inactiva | `BUSINESS_RULE_ERROR` | 422 |
| Ubicación origen incorrecta | `BUSINESS_RULE_ERROR` | 422 |
| Inventario bloqueado | `INVENTORY_BLOCKED` | 422 |
| Despacho con bloqueo activo | `INVENTORY_BLOCKED` | 422 |
| Falta evidencia de despacho | `DISPATCH_EVIDENCE_REQUIRED` | 422 |
| Orden cerrada o cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Cantidad inválida | `VALIDATION_ERROR` | 400 |
| Unidad inválida | `VALIDATION_ERROR` | 400 |
| Error carga evidencia | `FILE_UPLOAD_ERROR` | 400 |

---

## 55. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `REGISTERED` | Registrado | Recibir |
| `RECEIVED` | Recibido | Revisar / ubicar |
| `IN_REVIEW` | En revisión | Validar / bloquear |
| `STORED` | Ubicado | Mover / reservar / despachar |
| `MOVED` | Movido | Ver ubicación actual |
| `BLOCKED` | Bloqueado | Liberar bloqueo |
| `RESERVED` | Reservado | Despachar |
| `DISPATCHING` | En despacho | Completar despacho |
| `DISPATCHED` | Despachado | Ver historial |
| `CANCELLED` | Cancelado | Ver motivo |

---

## 56. Reglas UX del módulo de almacenamiento

1. El almacén debe ver inventario por estado y ubicación.
2. El cliente debe ver una vista simplificada del estado de su mercancía.
3. El operador debe ver recepciones, bloqueos y despachos pendientes.
4. El detalle de inventario debe mostrar orden, almacén, ubicación, estado, documentos, evidencias y timeline.
5. Las acciones deben mostrarse según permisos y estado.
6. Si el inventario está bloqueado, el botón despachar debe estar deshabilitado.
7. Los bloqueos activos deben destacarse visualmente.
8. Las evidencias deben mostrarse en panel separado.
9. El auditor debe ver modo solo lectura.
10. El superadministrador debe ver filtros globales.
11. El mapa de ubicaciones puede ser una representación referencial, no un plano real.
12. Formularios de recepción, movimiento y despacho deben validar campos obligatorios antes de enviar.
13. La vista mobile debe permitir cargar evidencias fácilmente.

---

## 57. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Dashboard almacenamiento | `Operaciones > Almacenamiento` |
| Listado almacenes | `Operaciones > Almacenamiento > Almacenes` |
| Detalle almacén | `Operaciones > Almacenamiento > Almacenes > WH-2026-001` |
| Listado inventario | `Operaciones > Almacenamiento > Inventario` |
| Detalle inventario | `Operaciones > Almacenamiento > Inventario > INV-2026-001` |
| Ubicaciones | `Operaciones > Almacenamiento > Ubicaciones` |
| Despachos | `Operaciones > Almacenamiento > Despachos` |
| Cliente almacenamiento orden | `Mis órdenes > ORD-2026-001 > Almacenamiento` |
| Auditor almacenamiento | `Auditoría > Almacenamiento` |
| Admin almacenamiento | `Panel global > Almacenamiento` |

---

## 58. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Almacén | `WH-2026-001` | Demo Bonded Warehouse |
| Ubicación | `LOC-A-01` | Pasillo A, posición 01 |
| Inventario | `INV-2026-001` | Mercancía demo asociada a orden |
| Movimiento | `STM-2026-001` | Recepción o movimiento demo |
| Despacho | `DSP-2026-001` | Despacho demo |
| Orden | `ORD-2026-001` | Orden demo relacionada |
| Viaje | `TRP-2026-001` | Viaje de entrada o salida relacionado |
| Contenedor | `MSCU1234567` | Contenedor demo relacionado |

---

## 59. Ejemplo JSON de almacén demo

```json
{
  "warehouseCode": "WH-2026-001",
  "warehouseName": "Demo Bonded Warehouse",
  "storeCode": "STO-ALM-001",
  "warehouseTypeCode": "BONDED",
  "portCode": "PORT-HOUSTON",
  "terminalCode": "TERM-HOU-BAYPORT",
  "address": "Houston, TX",
  "capacityUnits": 5000,
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 60. Ejemplo JSON de ubicación demo

```json
{
  "locationCode": "LOC-A-01",
  "warehouseCode": "WH-2026-001",
  "zone": "A",
  "aisle": "01",
  "rack": "R1",
  "position": "P1",
  "locationType": "STANDARD",
  "capacityUnits": 100,
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 61. Ejemplo JSON de inventario demo

```json
{
  "inventoryCode": "INV-2026-001",
  "orderCode": "ORD-2026-001",
  "warehouseCode": "WH-2026-001",
  "locationCode": "LOC-A-01",
  "containerNumber": "MSCU1234567",
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "itemDescription": "Demo imported container cargo",
  "quantity": 1,
  "unitMeasure": "CONTAINER",
  "weight": 24000,
  "volume": null,
  "status": "STORED",
  "receivedAt": "2026-02-01T15:00:00.000Z",
  "notes": "Demo inventory for storage operation plan",
  "isDemo": true
}
```

---

## 62. Ejemplo JSON de movimiento demo

```json
{
  "movementCode": "STM-2026-001",
  "inventoryCode": "INV-2026-001",
  "orderCode": "ORD-2026-001",
  "fromLocationCode": "LOC-A-01",
  "toLocationCode": "LOC-B-02",
  "movementType": "INTERNAL_MOVE",
  "movementReason": "Moved to inspection zone",
  "movementDatetime": "2026-02-01T17:00:00.000Z",
  "isDemo": true
}
```

---

## 63. Ejemplo JSON de despacho demo

```json
{
  "dispatchCode": "DSP-2026-001",
  "orderCode": "ORD-2026-001",
  "inventoryCode": "INV-2026-001",
  "warehouseCode": "WH-2026-001",
  "locationCode": "LOC-A-01",
  "tripCode": "TRP-2026-001",
  "dispatchDatetime": "2026-02-03T10:00:00.000Z",
  "receiverName": "Driver Demo",
  "dispatchNotes": "Cargo dispatched for final delivery",
  "isDemo": true
}
```

---

## 64. Pruebas funcionales mínimas

### 64.1 Almacén / tienda

1. Almacén puede ver inventario propio.
2. Almacén puede recibir mercancía.
3. Almacén puede asignar ubicación.
4. Almacén puede mover mercancía internamente.
5. Almacén puede bloquear inventario.
6. Almacén puede liberar inventario.
7. Almacén puede despachar mercancía.
8. Almacén puede cargar evidencias.
9. Almacén no puede ver inventario de otra tienda.

### 64.2 Cliente

1. Cliente ve almacenamiento asociado a sus órdenes.
2. Cliente no ve inventario de otros clientes.
3. Cliente ve estado actual.
4. Cliente ve último evento de almacenamiento.
5. Cliente ve evidencias permitidas.
6. Cliente no puede modificar inventario.

### 64.3 Operador interno

1. Operador ve inventario autorizado.
2. Operador puede registrar recepción si tiene permiso.
3. Operador puede gestionar bloqueos.
4. Operador puede supervisar despachos.

### 64.4 Auditor

1. Auditor ve inventario, movimientos y despachos.
2. Auditor ve evidencias.
3. Auditor ve logs.
4. Auditor no puede modificar registros.
5. Auditor puede filtrar por usuario, estado, almacén, orden y fecha.

### 64.5 Admin

1. Admin ve todos los almacenes.
2. Admin ve inventario global.
3. Admin puede corregir casos excepcionales.
4. Admin administra catálogos y permisos asociados.

---

## 65. Pruebas técnicas API

1. `POST /storage/warehouses` crea almacén válido.
2. `POST /storage/locations` crea ubicación válida.
3. `POST /storage/inventory` registra inventario válido.
4. `PATCH /storage/inventory/:id/receive` marca recibido.
5. `PATCH /storage/inventory/:id/putaway` asigna ubicación.
6. `POST /storage/movements` mueve inventario y actualiza ubicación.
7. `POST /storage/movements` rechaza ubicación origen incorrecta.
8. `PATCH /storage/inventory/:id/block` crea bloqueo activo.
9. `PATCH /storage/inventory/:id/release` libera bloqueo.
10. `POST /storage/dispatches` rechaza inventario bloqueado.
11. `POST /storage/dispatches` despacha inventario válido.
12. `GET /storage/inventory` respeta scope.
13. `GET /storage/inventory/:id/timeline` devuelve eventos.
14. Eventos críticos generan `audit_logs`.
15. Eventos principales generan `notifications`.

---

## 66. Criterios de aceptación

El módulo de almacenamiento se considera aceptado cuando:

1. Se pueden crear almacenes.
2. Se pueden crear ubicaciones internas.
3. Se puede registrar inventario asociado a una orden.
4. Se puede recibir mercancía.
5. Se puede asignar ubicación.
6. Se puede mover inventario internamente.
7. Se puede bloquear inventario con motivo.
8. Inventario bloqueado no puede despacharse.
9. Se puede liberar bloqueo con motivo.
10. Se puede despachar inventario válido.
11. El despacho puede vincularse a un viaje.
12. Los eventos de almacenamiento se reflejan en timeline de orden.
13. Las evidencias se pueden cargar y consultar.
14. Los permisos RBAC se respetan.
15. Los scopes de datos se respetan.
16. Cliente solo consulta inventario de sus órdenes.
17. Tienda/almacén solo consulta su inventario.
18. Auditor consulta sin modificar.
19. Superadministrador consulta globalmente.
20. Eventos críticos generan auditoría.
21. Eventos principales generan notificaciones.
22. Reportes básicos de almacenamiento funcionan.
23. Endpoints están documentados en Swagger.
24. Pruebas funcionales y API pasan.
25. No existe dependencia técnica con Odoo ni con WMS externo.

---

## 67. Tareas técnicas para Antigravity

### 67.1 Base de datos

1. Validar tabla `warehouses`.
2. Validar tabla `storage_locations`.
3. Validar tabla `inventory_items`.
4. Validar tabla `storage_movements`.
5. Validar tabla `dispatches`.
6. Crear tabla `storage_holds` si se decide separar bloqueos.
7. Crear índices por orden, almacén, ubicación, estado, contenedor y fecha.
8. Crear seeds de almacén demo.
9. Crear seeds de ubicación demo.
10. Crear seeds de inventario demo.
11. Crear seeds de movimiento demo.
12. Crear seeds de despacho demo.
13. Crear validaciones de transiciones.

### 67.2 Backend Nest.js

1. Crear módulo `storage`.
2. Crear `WarehousesController`.
3. Crear `WarehousesService`.
4. Crear `StorageLocationsController`.
5. Crear `StorageLocationsService`.
6. Crear `InventoryController`.
7. Crear `InventoryService`.
8. Crear `StorageMovementsController`.
9. Crear `StorageMovementsService`.
10. Crear `DispatchesController`.
11. Crear `DispatchesService`.
12. Crear DTOs de almacenamiento.
13. Crear endpoints de almacenes.
14. Crear endpoints de ubicaciones.
15. Crear endpoints de inventario.
16. Crear endpoints de movimientos.
17. Crear endpoints de despachos.
18. Crear integración con órdenes.
19. Crear integración con transporte.
20. Crear integración con TOS.
21. Crear integración con inspecciones.
22. Crear integración con evidencias.
23. Crear validaciones de estado.
24. Crear transacciones críticas.
25. Crear auditoría.
26. Crear notificaciones.
27. Crear pruebas unitarias y API.

### 67.3 Frontend React.js

1. Crear `StorageDashboardPage`.
2. Crear `WarehouseListPage`.
3. Crear `WarehouseDetailPage`.
4. Crear `WarehouseForm`.
5. Crear `StorageLocationListPage`.
6. Crear `StorageLocationForm`.
7. Crear `InventoryListPage`.
8. Crear `InventoryDetailPage`.
9. Crear `InventoryForm`.
10. Crear `ReceiveInventoryForm`.
11. Crear `PutawayInventoryForm`.
12. Crear `StorageMovementForm`.
13. Crear `DispatchForm`.
14. Crear `StorageHoldPanel`.
15. Crear `StorageReleaseModal`.
16. Crear `StorageTimeline`.
17. Crear `StorageEvidencePanel`.
18. Crear filtros por estado, almacén, ubicación, cliente, orden y fecha.
19. Crear hooks de almacenamiento.
20. Crear guards visuales por permisos.
21. Crear estados loading, empty, error y forbidden.

### 67.4 QA

1. Probar creación de almacén.
2. Probar creación de ubicación.
3. Probar registro de inventario.
4. Probar recepción.
5. Probar ubicación.
6. Probar movimiento interno.
7. Probar bloqueo.
8. Probar liberación.
9. Probar despacho.
10. Probar integración con orden.
11. Probar integración con transporte.
12. Probar integración con TOS.
13. Probar permisos y scopes.
14. Probar timeline.
15. Probar evidencias.
16. Probar auditoría.
17. Probar notificaciones.
18. Probar reportes.

---

## 68. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto logístico de almacenamiento, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `22_STORAGE_OPERATION_PLAN.md` como fuente principal para implementar el módulo de almacenamiento del marketplace logístico.

Objetivo:
Implementar un módulo de almacenamiento que permita crear almacenes, ubicaciones, inventario, recepción, ubicación, movimientos internos, bloqueos, liberaciones, despachos, evidencias, timeline operativo, auditoría, notificaciones, reportes y relación con órdenes, transporte, TOS e inspecciones.

Reglas obligatorias:
1. Todo inventario del MVP debe asociarse a una orden.
2. Todo inventario debe tener tipo de carga, unidad y cantidad.
3. Validar estados y transiciones en backend.
4. No permitir despacho con bloqueos activos.
5. No permitir movimiento con ubicación origen incorrecta.
6. No permitir ubicación en almacén o ubicación inactiva.
7. Registrar motivo en movimientos, bloqueos y liberaciones.
8. Eventos de almacenamiento deben reflejarse en timeline de orden.
9. Eventos críticos deben auditarse.
10. Eventos principales deben generar notificaciones.
11. Evidencias críticas no deben eliminarse físicamente.
12. Respetar scopes de datos: own, store, assigned, module, global.
13. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
14. Respetar `13_API_SPECIFICATION.md`.
15. Respetar `15_MASTER_CATALOGS_MVP.md`.
16. Respetar `19_ORDER_WORKFLOW.md`.
17. Respetar `20_TOS_OPERATION_PLAN.md`.
18. Respetar `21_TRANSPORT_OPERATION_PLAN.md`.
19. No integrar Odoo ni WMS externo; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de almacenamiento.
3. Endpoints Nest.js.
4. Servicios backend.
5. Validaciones RBAC y scope.
6. Validaciones de transición de estados.
7. Almacenes, ubicaciones, inventario, movimientos y despachos.
8. Timeline de eventos.
9. Evidencias de almacenamiento.
10. Auditoría.
11. Notificaciones.
12. Componentes React.js.
13. Hooks frontend.
14. Pruebas unitarias y API.
15. Seeds demo de almacenamiento.
16. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, permisos, timeline, evidencias, auditoría, notificaciones, reportes y QA.
```

---

## 69. Checklist de uso en Antigravity

- [ ] Guardar este documento como `22_STORAGE_OPERATION_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Validar consistencia con `20_TOS_OPERATION_PLAN.md`.
- [ ] Validar consistencia con `21_TRANSPORT_OPERATION_PLAN.md`.
- [ ] Crear DTOs de almacenamiento.
- [ ] Crear endpoints de almacenes.
- [ ] Crear endpoints de ubicaciones.
- [ ] Crear endpoints de inventario.
- [ ] Crear endpoints de movimientos.
- [ ] Crear endpoints de despachos.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear timeline de almacenamiento.
- [ ] Crear evidencias de almacenamiento.
- [ ] Crear integración con órdenes.
- [ ] Crear integración con transporte.
- [ ] Crear integración con TOS.
- [ ] Crear integración con inspecciones.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni WMS externo.

---

## 70. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión operativa de almacenamiento | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

