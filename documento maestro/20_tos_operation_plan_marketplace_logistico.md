# 20_TOS_OPERATION_PLAN.md

# Documento Maestro del Plan Operativo TOS
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `20_TOS_OPERATION_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | TOS básico / Terminal Operating System referencial |
| Módulos relacionados | Órdenes, servicios, tiendas, transporte, almacenamiento, documentos, evidencias, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md` |

---

## 2. Propósito del documento

Este documento define el **plan operativo maestro del módulo TOS básico** del Marketplace Logístico TOS para Puertos Aduaneros.

El TOS, o Terminal Operating System, dentro del MVP será un **módulo operativo referencial** para registrar, visualizar y controlar eventos logísticos asociados a contenedores, patios, ubicaciones, gates, movimientos, bloqueos, liberaciones y operaciones vinculadas a órdenes de servicio.

El objetivo no es reemplazar un TOS portuario real de una terminal, sino construir una capa digital propia del marketplace para:

1. Registrar contenedores asociados a órdenes.
2. Controlar ubicación referencial en patio.
3. Registrar gate-in y gate-out.
4. Registrar movimientos internos.
5. Bloquear y liberar contenedores.
6. Asociar eventos TOS a órdenes.
7. Generar evidencias operativas.
8. Alimentar timeline de la orden.
9. Permitir trazabilidad para cliente, tienda, operador y auditor.
10. Preparar una arquitectura futura integrable con sistemas reales de terminal, EDI, IoT, GPS o ERP.

---

## 3. Objetivo general

Diseñar e implementar un módulo TOS básico, modular, auditable y escalable que permita controlar de forma referencial las operaciones de contenedores dentro del marketplace logístico, vinculando patios, contenedores, gates, movimientos, bloqueos, liberaciones, órdenes y evidencias operativas.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del TOS básico.
2. Definir entidades operativas principales.
3. Definir ciclo de vida de un contenedor.
4. Definir estados TOS.
5. Definir reglas de gate-in y gate-out.
6. Definir reglas de movimiento interno.
7. Definir reglas de bloqueo y liberación.
8. Definir relación con órdenes de servicio.
9. Definir relación con transporte.
10. Definir relación con almacenamiento.
11. Definir relación con documentos y evidencias.
12. Definir permisos RBAC y scopes.
13. Definir endpoints Nest.js.
14. Definir componentes React.js.
15. Definir validaciones backend.
16. Definir auditoría y notificaciones.
17. Definir reportes y métricas.
18. Definir casos de error.
19. Definir pruebas funcionales y técnicas.
20. Servir como prompt para Antigravity.

---

## 5. Alcance del TOS básico MVP

El MVP debe cubrir las siguientes operaciones:

```txt
Orden logística relacionada con contenedor
  ↓
Registro del contenedor
  ↓
Asignación a patio y ubicación inicial
  ↓
Gate-in referencial
  ↓
Movimiento interno de contenedor
  ↓
Bloqueo o liberación si aplica
  ↓
Gate-out referencial
  ↓
Evidencias y timeline de orden
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Integración real con terminal portuaria.
2. Integración EDI.
3. Integración con navieras.
4. Integración con autoridad portuaria.
5. Integración con aduanas oficiales.
6. Planeación automática de patio.
7. Optimización de grúas.
8. Control de equipos portuarios reales.
9. IoT en contenedores.
10. GPS en tiempo real.
11. OCR de números de contenedor.
12. Lectura RFID.
13. Control de citas portuarias reales.
14. Liquidación automática de cargos portuarios.
15. Facturación portuaria oficial.
16. Sustitución de un TOS empresarial.
17. Integración directa con Odoo.

---

## 7. Principios funcionales del TOS básico

Antigravity debe respetar los siguientes principios:

1. El TOS del MVP es referencial, no oficial.
2. Todo contenedor debe tener número único o código interno válido.
3. Todo contenedor debe asociarse a una orden si forma parte de una operación del marketplace.
4. Todo contenedor debe tener tipo de contenedor.
5. Todo contenedor debe tener estado TOS.
6. Todo contenedor puede tener patio y ubicación actual.
7. Todo movimiento debe conservar origen y destino.
8. Todo gate debe indicar tipo: gate-in o gate-out.
9. Todo bloqueo debe tener motivo.
10. Toda liberación debe validar que no existan bloqueos activos.
11. Todo evento TOS crítico debe auditarse.
12. Todo evento TOS relevante debe reflejarse en timeline de orden.
13. El frontend no debe permitir movimientos inválidos si el backend los rechaza.
14. El backend es la fuente de verdad de estados y validaciones.
15. El diseño debe permitir futura integración externa sin acoplar el core.

---

## 8. Actores del módulo TOS

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta estado referencial del contenedor asociado a su orden |
| Tienda logística | `PROF-TIE-002` | Consulta o registra eventos si presta servicio relacionado |
| Terminal portuaria | Tipo tienda `PORT_TERMINAL` | Puede operar registros TOS si está habilitada |
| Operador interno | `PROF-OPE-004` | Registra contenedores, gates, movimientos y bloqueos |
| Transportista | `PROF-TRA-006` | Consulta gate-out, retiro o entrega vinculada |
| Agente aduanal | `PROF-ADU-007` | Consulta bloqueos/liberaciones relacionados con despacho |
| Inspector | `PROF-INS-005` | Consulta o carga evidencias de inspección vinculadas al contenedor |
| Superadministrador | `PROF-SUP-003` | Configura, consulta globalmente y corrige casos excepcionales |
| Auditor | `PROF-AUD-008` | Consulta eventos TOS y auditoría sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias del módulo TOS |

---

## 9. Entidades principales del TOS básico

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Patio | `tos_yards` | Área lógica donde se ubican contenedores |
| Ubicación | `tos_locations` o campo en yard | Posición referencial dentro de patio |
| Contenedor | `tos_containers` | Registro operativo del contenedor |
| Movimiento | `tos_moves` | Movimiento interno entre ubicaciones |
| Gate | `tos_gates` | Registro de entrada o salida |
| Bloqueo | `tos_holds` | Bloqueo operativo, documental, aduanero o financiero |
| Liberación | `tos_releases` | Liberación de bloqueo o salida autorizada |
| Evento TOS | `order_events` o `tos_events` | Evento operativo visible en timeline |
| Evidencia | `evidences` | Foto, documento o prueba asociada |
| Orden | `orders` | Orden relacionada con operación TOS |

---

## 10. Modelo operativo general

```txt
Order
  ↓
TOS Container
  ↓
Yard / Location
  ↓
Gate Event
  ↓
Move Event
  ↓
Hold / Release
  ↓
Evidence
  ↓
Order Timeline
```

---

## 11. Estados TOS de contenedor

| Estado | Código | Descripción |
|---|---|---|
| Registrado | `REGISTERED` | Contenedor creado en el sistema |
| Gate in | `GATE_IN` | Contenedor ingresó referencialmente a patio/terminal |
| En patio | `IN_YARD` | Contenedor ubicado en patio |
| Movido | `MOVED` | Contenedor tuvo movimiento interno |
| Bloqueado | `BLOCKED` | Contenedor no puede salir o moverse por restricción |
| Liberado | `RELEASED` | Contenedor liberado para salida o siguiente proceso |
| Gate out | `GATE_OUT` | Contenedor salió referencialmente de patio/terminal |
| Cancelado | `CANCELLED` | Registro TOS cancelado por error o anulación |

---

## 12. Transiciones válidas de estado TOS

```txt
REGISTERED → GATE_IN
REGISTERED → CANCELLED
GATE_IN → IN_YARD
IN_YARD → MOVED
MOVED → IN_YARD
IN_YARD → BLOCKED
MOVED → BLOCKED
BLOCKED → RELEASED
RELEASED → IN_YARD
RELEASED → GATE_OUT
IN_YARD → GATE_OUT
```

---

## 13. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `REGISTERED` | `GATE_OUT` | No puede salir sin ingreso referencial |
| `BLOCKED` | `GATE_OUT` | No puede salir con bloqueo activo |
| `GATE_OUT` | `MOVED` | Ya salió del patio/terminal |
| `CANCELLED` | cualquier estado operativo | Registro cancelado no debe reactivarse sin proceso especial |
| `IN_YARD` | `REGISTERED` | No se debe retroceder a registro inicial |

---

## 14. Tipos de operación TOS

| Código | Operación | Descripción |
|---|---|---|
| `REGISTER_CONTAINER` | Registrar contenedor | Alta del contenedor en TOS básico |
| `GATE_IN` | Gate-in | Entrada referencial a patio/terminal |
| `MOVE` | Movimiento interno | Cambio de ubicación dentro del patio |
| `HOLD` | Bloqueo | Restricción operativa o documental |
| `RELEASE` | Liberación | Remoción de bloqueo o autorización |
| `GATE_OUT` | Gate-out | Salida referencial del patio/terminal |
| `UPDATE_STATUS` | Actualizar estado | Cambio administrativo controlado |
| `ADD_EVIDENCE` | Cargar evidencia | Evidencia asociada a contenedor/evento |

---

## 15. Tipos de bloqueo TOS

| Código | Nombre | Descripción |
|---|---|---|
| `CUSTOMS_HOLD` | Bloqueo aduanero | Retención por proceso o revisión aduanera |
| `DOCUMENT_HOLD` | Bloqueo documental | Faltan documentos o documentos rechazados |
| `PAYMENT_HOLD` | Bloqueo financiero | Pago pendiente o rechazado |
| `INSPECTION_HOLD` | Bloqueo por inspección | Requiere inspección o resultado pendiente |
| `OPERATIONAL_HOLD` | Bloqueo operativo | Restricción interna del patio/terminal |
| `SECURITY_HOLD` | Bloqueo de seguridad | Observación de seguridad |
| `ADMIN_HOLD` | Bloqueo administrativo | Bloqueo manual por administrador |

---

## 16. Tipos de liberación TOS

| Código | Nombre | Descripción |
|---|---|---|
| `CUSTOMS_RELEASE` | Liberación aduanera | Se resolvió bloqueo aduanero |
| `DOCUMENT_RELEASE` | Liberación documental | Documentos validados |
| `PAYMENT_RELEASE` | Liberación financiera | Pago confirmado |
| `INSPECTION_RELEASE` | Liberación de inspección | Inspección aprobada |
| `OPERATIONAL_RELEASE` | Liberación operativa | Restricción operativa resuelta |
| `ADMIN_RELEASE` | Liberación administrativa | Liberación manual autorizada |

---

## 17. Datos mínimos de un patio TOS

| Campo | Descripción | Obligatorio |
|---|---|---|
| `yard_code` | Código único del patio | Sí |
| `yard_name` | Nombre del patio | Sí |
| `port_code` | Puerto asociado | Sí |
| `terminal_code` | Terminal asociada | No, pero recomendado |
| `yard_type` | Tipo de patio | No |
| `capacity_teu` | Capacidad referencial | No |
| `status` | Estado del patio | Sí |

---

## 18. Datos mínimos de un contenedor TOS

| Campo | Descripción | Obligatorio |
|---|---|---|
| `container_number` | Número de contenedor | Sí |
| `container_type_code` | Tipo de contenedor | Sí |
| `order_id` | Orden relacionada | No, pero requerido en operación marketplace |
| `yard_id` | Patio actual | No al crear, sí al ingresar a patio |
| `current_location` | Ubicación actual | No al crear, sí al ubicar |
| `current_status` | Estado TOS | Sí |
| `cargo_type_code` | Tipo de carga | No |
| `seal_number` | Precinto | No |
| `gross_weight` | Peso bruto referencial | No |
| `notes` | Notas | No |

---

## 19. Datos mínimos de gate

| Campo | Descripción | Obligatorio |
|---|---|---|
| `gate_code` | Código del evento gate | Sí |
| `container_id` | Contenedor | Sí |
| `order_id` | Orden relacionada | No, pero recomendado |
| `gate_type` | `GATE_IN` o `GATE_OUT` | Sí |
| `gate_datetime` | Fecha y hora | Sí |
| `yard_id` | Patio | Sí |
| `location` | Ubicación inicial o salida | No |
| `carrier_id` | Transportista relacionado | No |
| `driver_id` | Conductor relacionado | No |
| `vehicle_id` | Vehículo relacionado | No |
| `evidence_id` | Evidencia asociada | No |
| `created_by` | Usuario que registra | Sí |

---

## 20. Datos mínimos de movimiento interno

| Campo | Descripción | Obligatorio |
|---|---|---|
| `move_code` | Código del movimiento | Sí |
| `container_id` | Contenedor | Sí |
| `order_id` | Orden relacionada | No, pero recomendado |
| `from_yard_id` | Patio origen | Sí |
| `from_location` | Ubicación origen | Sí |
| `to_yard_id` | Patio destino | Sí |
| `to_location` | Ubicación destino | Sí |
| `move_reason` | Motivo del movimiento | Sí |
| `move_datetime` | Fecha y hora | Sí |
| `created_by` | Usuario que registra | Sí |

---

## 21. Datos mínimos de bloqueo

| Campo | Descripción | Obligatorio |
|---|---|---|
| `hold_code` | Código del bloqueo | Sí |
| `container_id` | Contenedor bloqueado | Sí |
| `order_id` | Orden relacionada | No, pero recomendado |
| `hold_type` | Tipo de bloqueo | Sí |
| `hold_reason` | Motivo | Sí |
| `status` | active, released, cancelled | Sí |
| `created_by` | Usuario que registra | Sí |
| `released_by` | Usuario que libera | No |
| `released_at` | Fecha de liberación | No |
| `release_reason` | Motivo de liberación | No |

---

## 22. Ciclo operativo del contenedor

### 22.1 Registro

```txt
REGISTERED
```

El contenedor se crea con número, tipo y orden asociada.

### 22.2 Gate-in

```txt
GATE_IN
```

Se registra entrada al patio o terminal referencial.

### 22.3 Ubicación en patio

```txt
IN_YARD
```

Se asigna patio y ubicación.

### 22.4 Movimiento interno

```txt
MOVED → IN_YARD
```

Se cambia ubicación y se conserva trazabilidad.

### 22.5 Bloqueo

```txt
BLOCKED
```

Se restringe salida o movimiento.

### 22.6 Liberación

```txt
RELEASED
```

Se resuelve bloqueo y se permite continuidad.

### 22.7 Gate-out

```txt
GATE_OUT
```

Se registra salida referencial.

---

## 23. Reglas de registro de contenedor

1. El número de contenedor debe ser único dentro de registros activos.
2. El tipo de contenedor debe existir en `CONTAINER_TYPES`.
3. Si se asocia a orden, la orden debe existir.
4. La orden no debe estar cerrada o cancelada.
5. El estado inicial debe ser `REGISTERED`.
6. Debe generarse evento de timeline si existe orden.
7. Debe auditarse el registro.

---

## 24. Reglas de gate-in

1. El contenedor debe estar `REGISTERED` o en estado permitido.
2. Debe indicarse patio.
3. El patio debe estar activo.
4. Puede indicarse ubicación inicial.
5. Puede vincularse transportista, vehículo y conductor.
6. Debe crearse evento de gate.
7. Debe actualizarse estado a `GATE_IN` o `IN_YARD` según diseño.
8. Debe crearse evento en timeline de orden.
9. Debe auditarse gate-in.

---

## 25. Reglas de movimiento interno

1. El contenedor debe estar en patio.
2. No debe estar bloqueado, salvo permiso especial.
3. La ubicación origen debe coincidir con ubicación actual.
4. La ubicación destino no debe ser igual a la ubicación origen.
5. Debe registrarse motivo del movimiento.
6. Debe actualizarse ubicación actual.
7. Debe crearse evento TOS.
8. Debe reflejarse en timeline de orden.
9. Debe auditarse el movimiento.

---

## 26. Reglas de bloqueo

1. El contenedor debe existir.
2. El contenedor no debe estar `GATE_OUT`.
3. Debe indicarse tipo de bloqueo.
4. Debe indicarse motivo.
5. Puede existir más de un bloqueo activo si son de tipos diferentes.
6. Un bloqueo activo debe impedir gate-out.
7. El estado del contenedor debe cambiar a `BLOCKED` si el bloqueo es crítico.
8. Debe notificar a las partes relacionadas.
9. Debe auditarse.

---

## 27. Reglas de liberación

1. Debe existir bloqueo activo.
2. Usuario debe tener permiso de liberación.
3. Debe indicarse motivo de liberación.
4. Debe registrar `released_by` y `released_at`.
5. Si no quedan bloqueos activos, el contenedor puede pasar a `RELEASED` o `IN_YARD`.
6. Debe notificar a las partes.
7. Debe auditarse.

---

## 28. Reglas de gate-out

1. El contenedor debe estar en patio o liberado.
2. No debe tener bloqueos activos.
3. Debe existir autorización operativa.
4. Puede requerir pago confirmado según política.
5. Puede requerir documentos validados según política.
6. Puede requerir inspección aprobada según política.
7. Debe registrar fecha y usuario.
8. Debe actualizar estado a `GATE_OUT`.
9. Debe crear evento de timeline.
10. Debe auditarse.

---

## 29. Relación con órdenes de servicio

| Evento TOS | Efecto en orden |
|---|---|
| Registro de contenedor | Agrega evento a timeline |
| Gate-in | Puede cambiar orden a `IN_PROCESS` o confirmar avance |
| Movimiento interno | Agrega evento operativo |
| Bloqueo | Puede cambiar orden a `ON_HOLD` |
| Liberación | Puede permitir reanudar orden |
| Gate-out | Puede habilitar cierre o siguiente fase |
| Evidencia TOS | Agrega evidencia a orden |

---

## 30. Relación con transporte

| Operación TOS | Relación transporte |
|---|---|
| Gate-in | Puede estar vinculado a viaje de ingreso |
| Gate-out | Puede estar vinculado a viaje de salida |
| Transportista | Puede registrar o consultar eventos autorizados |
| Vehículo | Puede asociarse al gate |
| Conductor | Puede asociarse al gate |
| Prueba de entrega | Puede relacionarse con evidencia posterior |

---

## 31. Relación con almacenamiento

| Operación TOS | Relación almacenamiento |
|---|---|
| Gate-in | Puede generar recepción en almacén o patio |
| Ubicación | Puede sincronizarse con ubicación de almacenamiento referencial |
| Movimiento | Puede generar `storage_movements` si aplica |
| Gate-out | Puede generar despacho o salida |
| Bloqueo | Puede impedir despacho |

---

## 32. Relación con inspecciones

| Operación TOS | Relación inspección |
|---|---|
| Bloqueo por inspección | Genera o espera inspección |
| Inspección aprobada | Puede liberar bloqueo |
| Inspección rechazada | Mantiene bloqueo o pone orden en espera |
| Evidencia fotográfica | Se vincula a inspección y contenedor |

---

## 33. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `tos_yards` | Patios o áreas de ubicación |
| `tos_containers` | Contenedores registrados |
| `tos_moves` | Movimientos internos |
| `tos_gates` | Gate-in y gate-out |
| `tos_holds` | Bloqueos del contenedor |
| `tos_releases` | Liberaciones de bloqueos |
| `orders` | Orden relacionada |
| `order_events` | Timeline operativo |
| `documents` | Documentos asociados |
| `evidences` | Evidencias TOS |
| `trips` | Viajes relacionados |
| `vehicles` | Vehículos relacionados |
| `drivers` | Conductores relacionados |
| `inspections` | Inspecciones relacionadas |
| `audit_logs` | Auditoría |
| `notifications` | Notificaciones |
| `master_catalog_items` | Catálogos de estados, tipos de contenedor, puertos, terminales |

---

## 34. Modelo de tabla `tos_yards`

```txt
id
uuid
yard_code
yard_name
port_code
terminal_code
yard_type
capacity_teu
status
created_at
updated_at
deleted_at
```

---

## 35. Modelo de tabla `tos_containers`

```txt
id
uuid
container_number
container_type_code
order_id
yard_id
current_location
current_status
cargo_type_code
seal_number
gross_weight
notes
created_by
created_at
updated_at
deleted_at
```

---

## 36. Modelo de tabla `tos_moves`

```txt
id
uuid
move_code
container_id
order_id
from_yard_id
from_location
to_yard_id
to_location
move_reason
move_datetime
created_by
created_at
```

---

## 37. Modelo de tabla `tos_gates`

```txt
id
uuid
gate_code
container_id
order_id
gate_type
gate_datetime
yard_id
location
carrier_id
driver_id
vehicle_id
evidence_id
created_by
created_at
```

---

## 38. Modelo de tabla `tos_holds`

```txt
id
uuid
hold_code
container_id
order_id
hold_type
hold_reason
status
created_by
released_by
released_at
release_reason
created_at
updated_at
```

---

## 39. Permisos RBAC del módulo TOS

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `tos.view` | Ver datos TOS según scope | Cliente, tienda, operador, admin, auditor |
| `tos.create_container` | Registrar contenedor | Operador, tienda autorizada, admin |
| `tos.update_container` | Actualizar datos de contenedor | Operador, admin |
| `tos.gate_in` | Registrar gate-in | Operador, terminal, admin |
| `tos.gate_out` | Registrar gate-out | Operador, terminal, admin |
| `tos.move_container` | Mover contenedor | Operador, terminal, admin |
| `tos.block` | Bloquear contenedor | Operador, agente autorizado, admin |
| `tos.release` | Liberar contenedor | Operador autorizado, admin |
| `tos.upload_evidence` | Cargar evidencia TOS | Operador, tienda, inspector |
| `tos.audit` | Ver auditoría TOS | Admin, auditor |

---

## 40. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo contenedores asociados a sus órdenes |
| Tienda | `store` | Contenedores asociados a órdenes de su tienda |
| Terminal | `store` | Contenedores del patio/terminal asociado |
| Transportista | `assigned` | Contenedores asociados a sus viajes |
| Agente aduanal | `store` | Contenedores de sus órdenes aduanales |
| Inspector | `assigned` | Contenedores asociados a inspecciones asignadas |
| Operador interno | `module` | Operaciones TOS autorizadas |
| Superadministrador | `global` | Todos los registros TOS |
| Auditor | `global` de consulta | Todos los registros TOS sin modificar |
| Soporte | `module` limitado | Registros asociados a tickets |

---

## 41. Endpoints Nest.js del módulo TOS

Base path:

```txt
/tos
```

### 41.1 Patios

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/tos/yards` | Listar patios | `tos.view` | No |
| GET | `/tos/yards/:id` | Ver patio | `tos.view` | No |
| POST | `/tos/yards` | Crear patio | `tos.update_container` o admin | `tos.yard.created` |
| PATCH | `/tos/yards/:id` | Actualizar patio | `tos.update_container` o admin | `tos.yard.updated` |

### 41.2 Contenedores

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/tos/containers` | Listar contenedores | `tos.view` | No |
| GET | `/tos/containers/:id` | Ver contenedor | `tos.view` | No |
| POST | `/tos/containers` | Registrar contenedor | `tos.create_container` | `tos.container.created` |
| PATCH | `/tos/containers/:id` | Actualizar contenedor | `tos.update_container` | `tos.container.updated` |
| PATCH | `/tos/containers/:id/location` | Cambiar ubicación | `tos.move_container` | `tos.container.moved` |
| PATCH | `/tos/containers/:id/block` | Bloquear contenedor | `tos.block` | `tos.container.blocked` |
| PATCH | `/tos/containers/:id/release` | Liberar contenedor | `tos.release` | `tos.container.released` |
| GET | `/tos/containers/:id/timeline` | Timeline TOS | `tos.view` | No |
| GET | `/tos/containers/:id/holds` | Bloqueos del contenedor | `tos.view` | No |

### 41.3 Gates y movimientos

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| POST | `/tos/gates` | Registrar gate-in/gate-out | `tos.gate_in` o `tos.gate_out` | `tos.gate.event.created` |
| GET | `/tos/gates` | Listar eventos gate | `tos.view` | No |
| POST | `/tos/moves` | Registrar movimiento | `tos.move_container` | `tos.container.moved` |
| GET | `/tos/moves` | Listar movimientos | `tos.view` | No |

### 41.4 Evidencias

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| POST | `/tos/containers/:id/evidences` | Cargar evidencia TOS | `tos.upload_evidence` | `tos.evidence.uploaded` |
| GET | `/tos/containers/:id/evidences` | Ver evidencias TOS | `tos.view` | No |

---

## 42. DTOs sugeridos

### 42.1 `CreateTosContainerDto`

```json
{
  "containerNumber": "MSCU1234567",
  "containerTypeCode": "40HC",
  "orderId": 1001,
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "sealNumber": "SEAL-001",
  "grossWeight": 24000,
  "notes": "Demo container associated with customs order"
}
```

### 42.2 `CreateTosGateDto`

```json
{
  "containerId": 1,
  "orderId": 1001,
  "gateType": "GATE_IN",
  "gateDatetime": "2026-02-01T10:00:00.000Z",
  "yardId": 1,
  "location": "A-01-01",
  "carrierId": 20,
  "driverId": 5,
  "vehicleId": 7
}
```

### 42.3 `CreateTosMoveDto`

```json
{
  "containerId": 1,
  "orderId": 1001,
  "fromYardId": 1,
  "fromLocation": "A-01-01",
  "toYardId": 1,
  "toLocation": "B-02-03",
  "moveReason": "Moved to inspection area",
  "moveDatetime": "2026-02-01T14:30:00.000Z"
}
```

### 42.4 `BlockTosContainerDto`

```json
{
  "holdType": "DOCUMENT_HOLD",
  "holdReason": "Commercial invoice rejected"
}
```

### 42.5 `ReleaseTosContainerDto`

```json
{
  "holdId": 1,
  "releaseType": "DOCUMENT_RELEASE",
  "releaseReason": "Corrected document validated"
}
```

### 42.6 `UpdateTosLocationDto`

```json
{
  "yardId": 1,
  "newLocation": "C-03-04",
  "moveReason": "Operational relocation"
}
```

---

## 43. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `TosDashboardPage` | Vista general TOS |
| `TosContainerListPage` | Listado de contenedores |
| `TosContainerDetailPage` | Detalle de contenedor |
| `TosContainerForm` | Registrar/editar contenedor |
| `TosYardMap` | Mapa visual referencial de patio |
| `TosYardListPage` | Listado de patios |
| `TosGateForm` | Registro de gate-in/gate-out |
| `TosMoveForm` | Registro de movimiento interno |
| `TosHoldPanel` | Bloqueos activos e históricos |
| `TosReleaseModal` | Liberar bloqueo |
| `TosStatusBadge` | Estado TOS del contenedor |
| `TosTimeline` | Timeline de eventos TOS |
| `TosEvidencePanel` | Evidencias del contenedor |
| `TosFiltersBar` | Filtros por estado, patio, puerto, terminal |
| `TosRelatedOrderCard` | Orden asociada |
| `TosContainerLocationCard` | Ubicación actual |
| `TosGateHistoryTable` | Historial de gates |
| `TosMoveHistoryTable` | Historial de movimientos |

---

## 44. Páginas React.js por perfil

### 44.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/orders/:id/tos` | `ClientOrderTosTab` | Ver estado TOS asociado a su orden |
| `/client/containers/:id` | `ClientTosContainerDetailPage` | Consulta limitada del contenedor |

### 44.2 Tienda logística / terminal

| Ruta | Página | Uso |
|---|---|---|
| `/store/tos/containers` | `StoreTosContainersPage` | Ver contenedores de sus órdenes |
| `/store/tos/containers/:id` | `StoreTosContainerDetailPage` | Ver y operar según permisos |

### 44.3 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/tos` | `OperatorTosDashboardPage` | Operación TOS diaria |
| `/operator/tos/containers` | `OperatorTosContainersPage` | Gestionar contenedores |
| `/operator/tos/yards` | `OperatorTosYardsPage` | Gestionar patios |

### 44.4 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/tos` | `AdminTosDashboardPage` | Vista global TOS |
| `/admin/tos/containers` | `AdminTosContainersPage` | Gestión global |
| `/admin/tos/yards` | `AdminTosYardsPage` | Administración de patios |

### 44.5 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/tos` | `AuditorTosPage` | Consulta TOS |
| `/auditor/tos/containers/:id` | `AuditorTosContainerDetailPage` | Consulta de detalle y logs |

---

## 45. Servicios frontend API

Archivo sugerido:

```txt
/src/services/tosApi.ts
```

Funciones mínimas:

```ts
getTosYards(params)
getTosYardById(id)
createTosYard(payload)
updateTosYard(id, payload)
getTosContainers(params)
getTosContainerById(id)
createTosContainer(payload)
updateTosContainer(id, payload)
updateTosContainerLocation(id, payload)
blockTosContainer(id, payload)
releaseTosContainer(id, payload)
getTosContainerTimeline(id)
getTosContainerHolds(id)
createTosGate(payload)
getTosGates(params)
createTosMove(payload)
getTosMoves(params)
uploadTosEvidence(containerId, formData)
getTosEvidences(containerId)
```

---

## 46. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useTosYards` | Listar patios |
| `useTosContainers` | Listar contenedores |
| `useTosContainerDetail` | Cargar detalle de contenedor |
| `useCreateTosContainer` | Registrar contenedor |
| `useCreateTosGate` | Registrar gate |
| `useCreateTosMove` | Registrar movimiento |
| `useBlockTosContainer` | Bloquear contenedor |
| `useReleaseTosContainer` | Liberar contenedor |
| `useTosTimeline` | Timeline TOS |
| `useTosHolds` | Bloqueos activos e históricos |
| `useTosEvidences` | Evidencias TOS |
| `useTosPermissions` | Acciones visibles según permisos |

---

## 47. Validaciones backend obligatorias

### 47.1 Registro de contenedor

1. Usuario autenticado.
2. Usuario tiene `tos.create_container`.
3. Número de contenedor no duplicado en registros activos.
4. Tipo de contenedor válido y activo.
5. Orden existe si se envía `orderId`.
6. Orden no está cerrada ni cancelada.
7. Estado inicial permitido.

### 47.2 Gate-in

1. Usuario tiene permiso `tos.gate_in`.
2. Contenedor existe.
3. Patio existe y está activo.
4. Contenedor no está cancelado.
5. Contenedor no está `GATE_OUT`.
6. No registrar doble gate-in activo sin gate-out.
7. Actualizar ubicación si se envía.

### 47.3 Movimiento

1. Usuario tiene permiso `tos.move_container`.
2. Contenedor está en patio.
3. Contenedor no tiene bloqueo activo crítico.
4. Ubicación origen coincide con actual.
5. Ubicación destino es válida y diferente.
6. Motivo obligatorio.

### 47.4 Bloqueo

1. Usuario tiene permiso `tos.block`.
2. Contenedor existe.
3. Contenedor no está `GATE_OUT`.
4. Tipo de bloqueo válido.
5. Motivo obligatorio.
6. Registrar bloqueo activo.
7. Actualizar estado si aplica.

### 47.5 Liberación

1. Usuario tiene permiso `tos.release`.
2. Bloqueo existe y está activo.
3. Motivo de liberación obligatorio.
4. Registrar usuario y fecha.
5. Actualizar estado si no quedan bloqueos activos.

### 47.6 Gate-out

1. Usuario tiene permiso `tos.gate_out`.
2. Contenedor existe.
3. Contenedor está en patio o liberado.
4. No existen bloqueos activos.
5. Validar documentos, pago o inspección si la política de orden lo exige.
6. Registrar salida.
7. Actualizar estado a `GATE_OUT`.

---

## 48. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Gate-in con actualización de contenedor y creación de evento.
2. Movimiento con actualización de ubicación y creación de evento.
3. Bloqueo con actualización de estado y notificación.
4. Liberación con actualización de bloqueo, estado y notificación.
5. Gate-out con actualización de estado, evento y posible cambio de orden.

Si falla una parte, la operación debe hacer rollback.

---

## 49. Auditoría del módulo TOS

| Evento | Descripción | Criticidad |
|---|---|---|
| `tos.yard.created` | Patio creado | medium |
| `tos.yard.updated` | Patio actualizado | medium |
| `tos.container.created` | Contenedor registrado | medium |
| `tos.container.updated` | Contenedor actualizado | medium |
| `tos.container.moved` | Contenedor movido | high |
| `tos.container.blocked` | Contenedor bloqueado | high |
| `tos.container.released` | Contenedor liberado | high |
| `tos.gate.event.created` | Gate-in/gate-out registrado | high |
| `tos.evidence.uploaded` | Evidencia TOS cargada | medium |
| `tos.unauthorized_access` | Intento de acceso no autorizado | high |
| `tos.override.executed` | Corrección excepcional | critical |

---

## 50. Notificaciones del módulo TOS

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Contenedor registrado | Cliente / tienda | Contenedor registrado en operación | `/orders/:id` |
| Gate-in | Cliente / tienda | El contenedor ingresó al patio | `/orders/:id/tos` |
| Movimiento | Cliente / tienda | El contenedor cambió de ubicación | `/orders/:id/tos` |
| Bloqueo | Cliente / tienda / operador | El contenedor fue bloqueado | `/orders/:id/tos` |
| Liberación | Cliente / tienda | El contenedor fue liberado | `/orders/:id/tos` |
| Gate-out | Cliente / tienda / transportista | El contenedor salió del patio | `/orders/:id/tos` |
| Evidencia TOS | Cliente / tienda | Nueva evidencia TOS cargada | `/orders/:id/tos` |

---

## 51. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Contenedores por estado | Cantidad de contenedores por estado TOS | Admin, operador |
| Contenedores por patio | Distribución por patio | Admin, operador |
| Movimientos por periodo | Movimientos internos por fecha | Admin, operador |
| Gate-in / gate-out | Entradas y salidas por periodo | Admin, operador |
| Bloqueos activos | Contenedores bloqueados y motivo | Admin, operador, auditor |
| Tiempo en patio | Tiempo referencial desde gate-in hasta gate-out | Admin, tienda |
| Contenedores por orden | Contenedores asociados a órdenes | Admin, tienda, cliente |
| Eventos TOS críticos | Bloqueos, liberaciones y overrides | Auditor |

---

## 52. Métricas del dashboard TOS

### 52.1 Operador interno

1. Contenedores registrados.
2. Contenedores en patio.
3. Contenedores bloqueados.
4. Gate-ins del día.
5. Gate-outs del día.
6. Movimientos del día.
7. Liberaciones pendientes.
8. Contenedores con evidencias recientes.

### 52.2 Tienda logística

1. Contenedores asociados a sus órdenes.
2. Contenedores bloqueados.
3. Contenedores liberados.
4. Contenedores listos para salida.
5. Órdenes con eventos TOS activos.

### 52.3 Cliente

1. Contenedores de sus órdenes.
2. Estado actual del contenedor.
3. Último evento TOS.
4. Bloqueos activos si existen.
5. Evidencias disponibles.

### 52.4 Superadministrador

1. Contenedores globales.
2. Capacidad referencial por patio.
3. Estados globales.
4. Bloqueos críticos.
5. Eventos por terminal.
6. Movimientos por periodo.

### 52.5 Auditor

1. Eventos críticos TOS.
2. Bloqueos y liberaciones.
3. Gate-in/gate-out.
4. Correcciones excepcionales.
5. Usuarios que registraron eventos.

---

## 53. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Contenedor no existe | `RESOURCE_NOT_FOUND` | 404 |
| Contenedor duplicado | `DUPLICATE_RESOURCE` | 409 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Patio no existe | `RESOURCE_NOT_FOUND` | 404 |
| Patio inactivo | `BUSINESS_RULE_ERROR` | 422 |
| Gate-out con bloqueo activo | `CONTAINER_BLOCKED` | 422 |
| Movimiento con ubicación origen incorrecta | `BUSINESS_RULE_ERROR` | 422 |
| Tipo de contenedor inválido | `VALIDATION_ERROR` | 400 |
| Orden cerrada o cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Bloqueo no existe | `RESOURCE_NOT_FOUND` | 404 |
| Bloqueo ya liberado | `BUSINESS_RULE_ERROR` | 422 |
| Error carga evidencia | `FILE_UPLOAD_ERROR` | 400 |

---

## 54. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `REGISTERED` | Registrado | Gate-in |
| `GATE_IN` | Gate-in | Ubicar en patio |
| `IN_YARD` | En patio | Mover / bloquear / gate-out |
| `MOVED` | Movido | Ver ubicación actual |
| `BLOCKED` | Bloqueado | Liberar bloqueo |
| `RELEASED` | Liberado | Gate-out o mover |
| `GATE_OUT` | Gate-out | Ver historial |
| `CANCELLED` | Cancelado | Ver motivo |

---

## 55. Reglas UX del módulo TOS

1. El operador debe ver una lista clara de contenedores por estado.
2. El detalle del contenedor debe mostrar ubicación actual.
3. El timeline debe mostrar gate, movimientos, bloqueos, liberaciones y evidencias.
4. Las acciones deben mostrarse según permisos y estado.
5. Si el contenedor está bloqueado, el botón gate-out debe estar deshabilitado.
6. Los bloqueos activos deben destacarse visualmente.
7. Las evidencias deben visualizarse en panel separado.
8. Cliente debe ver versión simplificada del TOS.
9. Auditor debe ver vista solo lectura.
10. Superadministrador debe ver filtros globales.
11. El mapa de patio del MVP puede ser visual referencial, no geográfico real.
12. Formularios de gate y movimiento deben validar campos obligatorios antes de enviar.

---

## 56. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Dashboard TOS operador | `Operaciones > TOS` |
| Listado contenedores | `Operaciones > TOS > Contenedores` |
| Detalle contenedor | `Operaciones > TOS > Contenedores > MSCU1234567` |
| Patios | `Operaciones > TOS > Patios` |
| Cliente TOS orden | `Mis órdenes > ORD-2026-001 > TOS` |
| Auditor TOS | `Auditoría > TOS` |
| Admin TOS | `Panel global > TOS` |

---

## 57. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Patio | `YARD-HOU-001` | Patio demo Houston |
| Contenedor | `MSCU1234567` | Contenedor demo 40HC |
| Ubicación inicial | `A-01-01` | Ubicación inicial |
| Orden | `ORD-2026-001` | Orden demo relacionada |
| Gate | `GATE-2026-001` | Gate-in demo |
| Movimiento | `MOVE-2026-001` | Movimiento interno demo |
| Bloqueo | `HOLD-2026-001` | Bloqueo documental demo |
| Liberación | `REL-2026-001` | Liberación documental demo |

---

## 58. Ejemplo JSON de contenedor demo

```json
{
  "containerNumber": "MSCU1234567",
  "containerTypeCode": "40HC",
  "orderCode": "ORD-2026-001",
  "yardCode": "YARD-HOU-001",
  "currentLocation": "A-01-01",
  "currentStatus": "IN_YARD",
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "sealNumber": "SEAL-001",
  "grossWeight": 24000,
  "notes": "Demo container for TOS operation plan",
  "isDemo": true
}
```

---

## 59. Ejemplo JSON de gate demo

```json
{
  "gateCode": "GATE-2026-001",
  "containerNumber": "MSCU1234567",
  "orderCode": "ORD-2026-001",
  "gateType": "GATE_IN",
  "gateDatetime": "2026-02-01T10:00:00.000Z",
  "yardCode": "YARD-HOU-001",
  "location": "A-01-01",
  "isDemo": true
}
```

---

## 60. Ejemplo JSON de movimiento demo

```json
{
  "moveCode": "MOVE-2026-001",
  "containerNumber": "MSCU1234567",
  "orderCode": "ORD-2026-001",
  "fromYardCode": "YARD-HOU-001",
  "fromLocation": "A-01-01",
  "toYardCode": "YARD-HOU-001",
  "toLocation": "B-02-03",
  "moveReason": "Moved to inspection area",
  "moveDatetime": "2026-02-01T14:30:00.000Z",
  "isDemo": true
}
```

---

## 61. Pruebas funcionales mínimas

### 61.1 Operador interno

1. Operador puede registrar contenedor.
2. Operador puede registrar gate-in.
3. Operador puede mover contenedor.
4. Operador puede bloquear contenedor.
5. Operador puede liberar bloqueo.
6. Operador puede registrar gate-out.
7. Operador puede cargar evidencia TOS.
8. Operador ve timeline completo.

### 61.2 Cliente

1. Cliente ve contenedores asociados a sus órdenes.
2. Cliente no ve contenedores de otros clientes.
3. Cliente ve estado actual.
4. Cliente ve eventos relevantes.
5. Cliente ve evidencias permitidas.
6. Cliente no puede modificar eventos TOS.

### 61.3 Tienda / terminal

1. Tienda ve contenedores de sus órdenes.
2. Tienda puede operar solo si tiene permisos.
3. Tienda no ve contenedores de otra tienda.
4. Terminal puede registrar eventos si está habilitada.

### 61.4 Auditor

1. Auditor ve eventos TOS.
2. Auditor ve bloqueos y liberaciones.
3. Auditor no puede modificar.
4. Auditor puede filtrar por usuario, estado, contenedor y fecha.

### 61.5 Admin

1. Admin ve todos los contenedores.
2. Admin puede corregir registros según permiso.
3. Admin ve auditoría completa.
4. Admin puede administrar patios.

---

## 62. Pruebas técnicas API

1. `POST /tos/containers` crea contenedor válido.
2. `POST /tos/containers` rechaza contenedor duplicado.
3. `POST /tos/gates` registra gate-in válido.
4. `POST /tos/gates` rechaza gate-out con bloqueo activo.
5. `POST /tos/moves` mueve contenedor y actualiza ubicación.
6. `POST /tos/moves` rechaza movimiento con origen incorrecto.
7. `PATCH /tos/containers/:id/block` crea bloqueo activo.
8. `PATCH /tos/containers/:id/release` libera bloqueo activo.
9. `GET /tos/containers` respeta scope.
10. `GET /tos/containers/:id/timeline` devuelve eventos.
11. Eventos críticos generan `audit_logs`.
12. Eventos principales generan `notifications`.

---

## 63. Criterios de aceptación

El módulo TOS básico se considera aceptado cuando:

1. Se pueden crear patios TOS.
2. Se pueden registrar contenedores.
3. Un contenedor puede asociarse a una orden.
4. Se puede registrar gate-in.
5. Se puede asignar ubicación inicial.
6. Se puede mover contenedor entre ubicaciones.
7. Se puede bloquear contenedor con motivo.
8. Un contenedor bloqueado no puede hacer gate-out.
9. Se puede liberar bloqueo con motivo.
10. Se puede registrar gate-out si no hay bloqueos activos.
11. Los eventos TOS se reflejan en timeline de orden.
12. Las evidencias TOS se pueden cargar y consultar.
13. Los permisos RBAC se respetan.
14. Los scopes de datos se respetan.
15. Cliente solo consulta sus contenedores.
16. Tienda solo consulta los contenedores de sus órdenes.
17. Auditor consulta sin modificar.
18. Superadministrador consulta globalmente.
19. Eventos críticos generan auditoría.
20. Eventos principales generan notificaciones.
21. Reportes básicos TOS funcionan.
22. Endpoints están documentados en Swagger.
23. Pruebas funcionales y API pasan.
24. El TOS se mantiene como módulo referencial de MVP.
25. No existe dependencia técnica con Odoo ni con un TOS externo.

---

## 64. Tareas técnicas para Antigravity

### 64.1 Base de datos

1. Validar tabla `tos_yards`.
2. Validar tabla `tos_containers`.
3. Validar tabla `tos_moves`.
4. Validar tabla `tos_gates`.
5. Crear tablas `tos_holds` y `tos_releases` si no existen.
6. Crear índices por contenedor, orden, patio, estado y fecha.
7. Crear seed de patio demo.
8. Crear seed de contenedor demo.
9. Crear seed de gate y movimiento demo.
10. Crear validaciones de transiciones.

### 64.2 Backend Nest.js

1. Crear módulo `tos`.
2. Crear `TosController`.
3. Crear `TosService`.
4. Crear DTOs TOS.
5. Crear endpoints de patios.
6. Crear endpoints de contenedores.
7. Crear endpoints de gates.
8. Crear endpoints de movimientos.
9. Crear endpoints de bloqueos y liberaciones.
10. Crear integración con órdenes.
11. Crear integración con evidencias.
12. Crear validaciones de estado.
13. Crear transacciones para operaciones críticas.
14. Crear auditoría.
15. Crear notificaciones.
16. Crear pruebas unitarias y API.

### 64.3 Frontend React.js

1. Crear `TosDashboardPage`.
2. Crear `TosContainerListPage`.
3. Crear `TosContainerDetailPage`.
4. Crear `TosContainerForm`.
5. Crear `TosYardMap` referencial.
6. Crear `TosGateForm`.
7. Crear `TosMoveForm`.
8. Crear `TosHoldPanel`.
9. Crear `TosReleaseModal`.
10. Crear `TosTimeline`.
11. Crear `TosEvidencePanel`.
12. Crear filtros por estado, patio, puerto, terminal y fecha.
13. Crear hooks de TOS.
14. Crear guards visuales por permisos.
15. Crear estados loading, empty, error y forbidden.

### 64.4 QA

1. Probar registro de contenedor.
2. Probar gate-in.
3. Probar movimiento.
4. Probar bloqueo.
5. Probar liberación.
6. Probar gate-out.
7. Probar permisos y scopes.
8. Probar timeline.
9. Probar evidencias.
10. Probar auditoría.
11. Probar notificaciones.
12. Probar reportes.

---

## 65. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto logístico TOS, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `20_TOS_OPERATION_PLAN.md` como fuente principal para implementar el módulo TOS básico del marketplace logístico.

Objetivo:
Implementar un TOS básico referencial que permita registrar patios, contenedores, gate-in, gate-out, movimientos internos, bloqueos, liberaciones, evidencias, timeline operativo, auditoría, notificaciones, reportes y relación con órdenes de servicio.

Reglas obligatorias:
1. El TOS del MVP es referencial, no reemplaza un TOS real.
2. Todo contenedor debe tener número único activo.
3. Todo contenedor debe tener tipo válido.
4. Todo contenedor asociado al marketplace debe vincularse a una orden si aplica.
5. No permitir gate-out con bloqueos activos.
6. No permitir movimientos con ubicación origen incorrecta.
7. Registrar motivo en movimientos, bloqueos y liberaciones.
8. Auditar eventos críticos.
9. Reflejar eventos TOS en timeline de orden.
10. Enviar notificaciones por eventos principales.
11. Respetar scopes de datos: own, store, assigned, module, global.
12. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
13. Respetar `13_API_SPECIFICATION.md`.
14. Respetar `15_MASTER_CATALOGS_MVP.md`.
15. Respetar `19_ORDER_WORKFLOW.md`.
16. No integrar Odoo ni TOS externo; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs TOS.
3. Endpoints Nest.js.
4. Servicios backend.
5. Validaciones RBAC y scope.
6. Transiciones de estado.
7. Patios, contenedores, gates, movimientos, bloqueos y liberaciones.
8. Timeline de eventos.
9. Evidencias TOS.
10. Auditoría.
11. Notificaciones.
12. Componentes React.js.
13. Hooks frontend.
14. Pruebas unitarias y API.
15. Seeds demo TOS.
16. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, permisos, timeline, evidencias, auditoría, notificaciones, reportes y QA.
```

---

## 66. Checklist de uso en Antigravity

- [ ] Guardar este documento como `20_TOS_OPERATION_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Crear DTOs TOS.
- [ ] Crear endpoints TOS.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear patios y contenedores.
- [ ] Crear gates y movimientos.
- [ ] Crear bloqueos y liberaciones.
- [ ] Crear timeline TOS.
- [ ] Crear evidencias TOS.
- [ ] Crear integración con órdenes.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni TOS externo.

---

## 67. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión operativa TOS | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

