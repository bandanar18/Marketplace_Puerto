# 21_TRANSPORT_OPERATION_PLAN.md

# Documento Maestro del Plan Operativo de Transporte
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `21_TRANSPORT_OPERATION_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Transporte logístico |
| Módulos relacionados | Órdenes, cotizaciones, servicios, tiendas, TOS, almacenamiento, documentos, evidencias, pagos, comisiones, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan operativo maestro del módulo de transporte** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de un módulo que permita registrar, asignar, ejecutar y monitorear viajes logísticos asociados a órdenes de servicio, contenedores, carga general, almacenes, terminales, patios TOS, transportistas, conductores y vehículos.

El módulo de transporte del MVP debe permitir:

1. Crear viajes asociados a órdenes.
2. Asignar transportista, vehículo y conductor.
3. Registrar ruta origen-destino.
4. Controlar estados del viaje.
5. Registrar eventos operativos.
6. Vincular evidencias de retiro y entrega.
7. Relacionar el viaje con TOS, gate-in o gate-out si aplica.
8. Relacionar el viaje con almacenamiento si aplica.
9. Generar timeline de orden.
10. Gestionar permisos por perfil.
11. Generar auditoría de eventos críticos.
12. Enviar notificaciones a cliente, tienda, transportista y operador.
13. Generar reportes y métricas de transporte.

---

## 3. Objetivo general

Diseñar e implementar un módulo de transporte seguro, auditable y escalable que permita gestionar viajes logísticos dentro del marketplace, desde la asignación del transportista hasta la entrega final, vinculando órdenes, contenedores, vehículos, conductores, rutas, evidencias, pagos, comisiones, auditoría y reportes.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del módulo de transporte.
2. Definir entidades operativas principales.
3. Definir el ciclo de vida del viaje.
4. Definir estados de transporte.
5. Definir reglas de creación y asignación de viajes.
6. Definir reglas de inicio, tránsito, entrega, cancelación y retraso.
7. Definir relación con órdenes de servicio.
8. Definir relación con TOS básico.
9. Definir relación con almacenamiento.
10. Definir relación con documentos y evidencias.
11. Definir permisos RBAC y scopes.
12. Definir endpoints Nest.js.
13. Definir componentes React.js.
14. Definir validaciones backend.
15. Definir auditoría y notificaciones.
16. Definir reportes y métricas.
17. Definir casos de error.
18. Definir seeds demo.
19. Definir pruebas funcionales y técnicas.
20. Servir como prompt para Antigravity.

---

## 5. Alcance del transporte MVP

El MVP debe cubrir el siguiente flujo operativo:

```txt
Orden logística aprobada
  ↓
Creación de viaje
  ↓
Asignación de transportista, vehículo y conductor
  ↓
Programación de fecha y ruta
  ↓
Retiro de carga o contenedor
  ↓
Viaje en tránsito
  ↓
Registro de eventos y evidencias
  ↓
Entrega de carga o contenedor
  ↓
Cierre de viaje
  ↓
Actualización de orden y timeline
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Tracking GPS en tiempo real.
2. Integración con dispositivos IoT.
3. Integración con ELD.
4. Optimización automática de rutas.
5. Motor avanzado de tarifas por milla.
6. Liquidación automática a transportistas.
7. Integración directa con TMS externo.
8. Integración directa con Odoo.
9. Integración directa con terminales portuarias reales.
10. Integración con citas portuarias oficiales.
11. Validación automática de licencias y seguros.
12. Firma digital avanzada de POD.
13. App móvil nativa para conductor.
14. Geocercas automáticas.
15. Control de combustible y mantenimiento avanzado.
16. Despacho multi-parada avanzado.
17. Consolidación de múltiples órdenes en un mismo viaje.
18. Optimización de flota por inteligencia artificial.

---

## 7. Principios funcionales del módulo de transporte

Antigravity debe respetar los siguientes principios:

1. Todo viaje debe estar asociado a una orden o a una operación interna autorizada.
2. Todo viaje debe tener origen y destino.
3. Todo viaje debe tener estado operativo.
4. Todo viaje puede tener transportista, vehículo y conductor asignados.
5. Todo viaje puede vincularse a contenedor, carga o inventario.
6. Los cambios críticos de estado deben auditarse.
7. La entrega debe requerir evidencia mínima.
8. El viaje entregado debe actualizar el timeline de la orden.
9. Un viaje cancelado no debe continuar en tránsito.
10. Un viaje completado no debe modificarse sin autorización especial.
11. El transportista solo debe ver viajes asignados o propios.
12. El cliente solo debe ver viajes asociados a sus órdenes.
13. El superadministrador puede ver todos los viajes.
14. El auditor puede consultar sin modificar.
15. El backend es la fuente de verdad para estados y validaciones.
16. El diseño debe permitir integración futura con TMS o GPS sin acoplar el core.

---

## 8. Actores del módulo de transporte

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta estado del transporte asociado a su orden |
| Tienda logística | `PROF-TIE-002` | Puede contratar, coordinar o ejecutar transporte si corresponde |
| Transportista | `PROF-TRA-006` | Ejecuta viajes, asigna vehículo/conductor, actualiza eventos y evidencias |
| Conductor | Usuario operativo o registro interno | Ejecuta físicamente el viaje y entrega evidencias |
| Operador interno | `PROF-OPE-004` | Coordina viajes, asignaciones, seguimiento y excepciones |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Recibe o despacha carga vinculada al viaje |
| Terminal portuaria | Tipo tienda `PORT_TERMINAL` | Puede participar en gate-in/gate-out asociado |
| Agente aduanal | `PROF-ADU-007` | Consulta transporte vinculado a operación aduanal |
| Inspector | `PROF-INS-005` | Puede validar evidencias o inspecciones de carga |
| Superadministrador | `PROF-SUP-003` | Consulta global, corrige casos excepcionales y administra catálogos |
| Auditor | `PROF-AUD-008` | Consulta viajes, eventos, evidencias y auditoría sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias del módulo de transporte |

---

## 9. Entidades principales del módulo de transporte

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Viaje | `trips` | Registro principal del traslado |
| Vehículo | `vehicles` | Unidad utilizada para transporte |
| Conductor | `drivers` | Persona asignada al viaje |
| Ruta | `routes` | Origen, destino y distancia referencial |
| Evento de viaje | `trip_events` | Timeline operativo del viaje |
| Evidencia | `evidences` | POD, fotos, documentos o comprobantes |
| Orden | `orders` | Orden de servicio relacionada |
| Contenedor TOS | `tos_containers` | Contenedor asociado si aplica |
| Gate TOS | `tos_gates` | Gate-in/gate-out relacionado |
| Inventario | `inventory_items` | Carga o mercancía relacionada |
| Documento | `documents` | Documentos del viaje |
| Pago | `payments` | Pago asociado a la orden o servicio |
| Comisión | `commissions` | Comisión del servicio de transporte |
| Auditoría | `audit_logs` | Trazabilidad de cambios críticos |
| Notificación | `notifications` | Avisos a usuarios involucrados |

---

## 10. Modelo operativo general

```txt
Order
  ↓
Trip
  ↓
Carrier / Vehicle / Driver
  ↓
Route
  ↓
Pickup Event
  ↓
In Transit Events
  ↓
Delivery Event
  ↓
Evidence / POD
  ↓
Order Timeline
```

---

## 11. Estados del viaje

| Estado | Código | Descripción |
|---|---|---|
| Creado | `CREATED` | Viaje creado sin asignación completa |
| Asignado | `ASSIGNED` | Transportista, vehículo o conductor asignado |
| Programado | `SCHEDULED` | Viaje programado con fecha/hora |
| En retiro | `PICKUP_IN_PROGRESS` | Conductor o transportista inició retiro |
| Retirado | `PICKED_UP` | Carga o contenedor retirado |
| En tránsito | `IN_TRANSIT` | Viaje en curso hacia destino |
| Retrasado | `DELAYED` | Viaje con retraso reportado |
| En incidencia | `INCIDENT` | Viaje con problema operativo |
| Entregado | `DELIVERED` | Carga o contenedor entregado |
| Cerrado | `CLOSED` | Viaje finalizado administrativamente |
| Cancelado | `CANCELLED` | Viaje anulado |

---

## 12. Transiciones válidas de viaje

```txt
CREATED → ASSIGNED
CREATED → CANCELLED
ASSIGNED → SCHEDULED
ASSIGNED → CANCELLED
SCHEDULED → PICKUP_IN_PROGRESS
SCHEDULED → DELAYED
SCHEDULED → CANCELLED
PICKUP_IN_PROGRESS → PICKED_UP
PICKUP_IN_PROGRESS → DELAYED
PICKUP_IN_PROGRESS → INCIDENT
PICKED_UP → IN_TRANSIT
IN_TRANSIT → DELAYED
IN_TRANSIT → INCIDENT
IN_TRANSIT → DELIVERED
DELAYED → IN_TRANSIT
DELAYED → INCIDENT
INCIDENT → IN_TRANSIT
INCIDENT → CANCELLED
DELIVERED → CLOSED
```

---

## 13. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `CREATED` | `DELIVERED` | Debe existir asignación, retiro y tránsito |
| `ASSIGNED` | `DELIVERED` | Falta programación y ejecución |
| `CANCELLED` | `IN_TRANSIT` | Viaje cancelado no puede ejecutarse |
| `CLOSED` | `IN_TRANSIT` | Viaje cerrado no debe reabrirse sin autorización |
| `DELIVERED` | `CANCELLED` | Viaje entregado no debe cancelarse directamente |
| `IN_TRANSIT` | `CREATED` | No se permite retroceso a estado inicial |

---

## 14. Tipos de viaje

| Código | Nombre | Descripción |
|---|---|---|
| `PORT_TO_WAREHOUSE` | Puerto a almacén | Retiro desde puerto/terminal hacia almacén |
| `WAREHOUSE_TO_CLIENT` | Almacén a cliente | Entrega desde almacén a destino final |
| `PORT_TO_CLIENT` | Puerto a cliente | Transporte directo desde puerto a cliente |
| `WAREHOUSE_TO_PORT` | Almacén a puerto | Movimiento de exportación hacia puerto |
| `TERMINAL_TRANSFER` | Transferencia terminal | Traslado entre terminales o patios |
| `LOCAL_DRAYAGE` | Drayage local | Movimiento local de contenedor |
| `LONG_HAUL` | Larga distancia | Transporte interurbano o interestatal |
| `INSPECTION_TRANSFER` | Traslado a inspección | Movimiento hacia zona de inspección |
| `RETURN_EMPTY` | Retorno de vacío | Devolución de contenedor vacío |
| `INTERNAL_MOVE` | Movimiento interno | Movimiento operativo interno |

---

## 15. Tipos de eventos de transporte

| Código | Evento | Descripción |
|---|---|---|
| `TRIP_CREATED` | Viaje creado | Alta inicial del viaje |
| `TRIP_ASSIGNED` | Viaje asignado | Transportista, vehículo o conductor asignado |
| `TRIP_SCHEDULED` | Viaje programado | Fecha/hora definida |
| `PICKUP_STARTED` | Retiro iniciado | Inicio del retiro |
| `PICKUP_COMPLETED` | Retiro completado | Carga retirada |
| `IN_TRANSIT` | En tránsito | Viaje en curso |
| `DELAY_REPORTED` | Retraso reportado | Demora documentada |
| `INCIDENT_REPORTED` | Incidencia reportada | Problema operativo |
| `ARRIVED_DESTINATION` | Llegada a destino | Arribo al destino |
| `DELIVERY_COMPLETED` | Entrega completada | Entrega confirmada |
| `POD_UPLOADED` | POD cargado | Prueba de entrega cargada |
| `TRIP_CLOSED` | Viaje cerrado | Cierre administrativo |
| `TRIP_CANCELLED` | Viaje cancelado | Anulación del viaje |

---

## 16. Datos mínimos de un viaje

| Campo | Descripción | Obligatorio |
|---|---|---|
| `trip_code` | Código único del viaje | Sí |
| `order_id` | Orden relacionada | Sí en MVP |
| `store_id` | Tienda/transportista proveedor | Sí si aplica |
| `carrier_id` | Transportista asignado | No al crear, sí al asignar |
| `vehicle_id` | Vehículo asignado | No al crear, sí antes de iniciar |
| `driver_id` | Conductor asignado | No al crear, sí antes de iniciar |
| `route_id` | Ruta relacionada | No, pero recomendado |
| `trip_type_code` | Tipo de viaje | Sí |
| `origin_name` | Nombre del origen | Sí |
| `origin_address` | Dirección origen | Sí |
| `destination_name` | Nombre del destino | Sí |
| `destination_address` | Dirección destino | Sí |
| `scheduled_pickup_at` | Fecha/hora retiro | No, pero recomendado |
| `scheduled_delivery_at` | Fecha/hora entrega | No, pero recomendado |
| `actual_pickup_at` | Fecha/hora retiro real | No |
| `actual_delivery_at` | Fecha/hora entrega real | No |
| `container_id` | Contenedor TOS asociado | No |
| `cargo_type_code` | Tipo de carga | No |
| `container_type_code` | Tipo de contenedor | No |
| `status` | Estado del viaje | Sí |
| `notes` | Notas | No |

---

## 17. Datos mínimos de vehículo

| Campo | Descripción | Obligatorio |
|---|---|---|
| `vehicle_code` | Código único del vehículo | Sí |
| `store_id` | Tienda/transportista propietario | Sí |
| `vehicle_type_code` | Tipo de vehículo | Sí |
| `plate_number` | Placa | Sí |
| `capacity_weight` | Capacidad de peso | No |
| `capacity_volume` | Capacidad de volumen | No |
| `status` | Estado del vehículo | Sí |
| `insurance_expiration` | Vencimiento de seguro | No |
| `inspection_expiration` | Vencimiento inspección | No |

---

## 18. Datos mínimos de conductor

| Campo | Descripción | Obligatorio |
|---|---|---|
| `driver_code` | Código único del conductor | Sí |
| `store_id` | Tienda/transportista asociado | Sí |
| `first_name` | Nombre | Sí |
| `last_name` | Apellido | Sí |
| `phone` | Teléfono | No |
| `license_number` | Número de licencia | No, recomendado |
| `license_expiration` | Vencimiento de licencia | No |
| `status` | Estado del conductor | Sí |

---

## 19. Datos mínimos de ruta

| Campo | Descripción | Obligatorio |
|---|---|---|
| `route_code` | Código único de ruta | Sí |
| `origin_name` | Nombre de origen | Sí |
| `origin_address` | Dirección origen | Sí |
| `destination_name` | Nombre destino | Sí |
| `destination_address` | Dirección destino | Sí |
| `estimated_distance_miles` | Distancia estimada | No |
| `estimated_duration_minutes` | Tiempo estimado | No |
| `port_code` | Puerto relacionado | No |
| `terminal_code` | Terminal relacionada | No |
| `status` | Estado | Sí |

---

## 20. Creación de viaje

### 20.1 Precondiciones

1. La orden existe.
2. La orden no está cerrada ni cancelada.
3. El servicio de la orden corresponde a transporte o requiere transporte.
4. Usuario tiene permiso `transport.create_trip`.
5. Origen y destino están definidos.
6. Tipo de viaje es válido.

### 20.2 Acción

```txt
POST /trips
```

### 20.3 Resultado

Se crea un viaje en estado:

```txt
CREATED
```

### 20.4 Efectos

1. Crear registro en `trips`.
2. Crear evento `TRIP_CREATED`.
3. Agregar evento al timeline de la orden.
4. Notificar a tienda/transportista si aplica.
5. Auditar creación.

---

## 21. Asignación de viaje

### 21.1 Precondiciones

1. Viaje existe.
2. Viaje está en `CREATED` o `ASSIGNED`.
3. Usuario tiene permiso `transport.assign`.
4. Transportista, vehículo y conductor existen si se asignan.
5. Vehículo está activo/disponible.
6. Conductor está activo/disponible.

### 21.2 Acción

```txt
PATCH /trips/:id/assign
```

### 21.3 Resultado

Estado recomendado:

```txt
ASSIGNED
```

### 21.4 Efectos

1. Actualizar carrier, vehículo y conductor.
2. Crear evento `TRIP_ASSIGNED`.
3. Notificar a transportista y conductor si aplica.
4. Reflejar evento en orden.
5. Auditar asignación.

---

## 22. Programación de viaje

### 22.1 Precondiciones

1. Viaje está `ASSIGNED`.
2. Tiene origen y destino.
3. Tiene fecha/hora de retiro o entrega estimada.
4. Usuario tiene permiso `transport.assign` o `transport.update_status`.

### 22.2 Resultado

Estado:

```txt
SCHEDULED
```

### 22.3 Efectos

1. Registrar fechas programadas.
2. Crear evento `TRIP_SCHEDULED`.
3. Notificar al cliente y tienda.
4. Actualizar timeline de orden.

---

## 23. Inicio de retiro

### 23.1 Precondiciones

1. Viaje está `SCHEDULED`.
2. Vehículo y conductor están asignados.
3. No existe bloqueo crítico de orden o contenedor.
4. Usuario tiene permiso `transport.update_status`.

### 23.2 Resultado

Estado:

```txt
PICKUP_IN_PROGRESS
```

### 23.3 Efectos

1. Crear evento `PICKUP_STARTED`.
2. Notificar al cliente y tienda.
3. Si aplica, relacionar con TOS gate-out.
4. Auditar cambio.

---

## 24. Retiro completado

### 24.1 Precondiciones

1. Viaje está `PICKUP_IN_PROGRESS`.
2. Se confirma retiro de carga o contenedor.
3. Se puede cargar evidencia de retiro.

### 24.2 Resultado

Estado:

```txt
PICKED_UP
```

### 24.3 Efectos

1. Registrar `actual_pickup_at`.
2. Crear evento `PICKUP_COMPLETED`.
3. Cargar evidencia si aplica.
4. Si aplica, registrar gate-out TOS.
5. Actualizar timeline de orden.

---

## 25. Viaje en tránsito

### 25.1 Precondiciones

1. Viaje está `PICKED_UP`.
2. Usuario tiene permiso `transport.update_status`.

### 25.2 Resultado

Estado:

```txt
IN_TRANSIT
```

### 25.3 Efectos

1. Crear evento `IN_TRANSIT`.
2. Notificar al cliente.
3. Actualizar timeline.
4. Permitir registro de eventos de retraso o incidencia.

---

## 26. Retraso de viaje

### 26.1 Motivos comunes

1. Tráfico.
2. Cita de terminal demorada.
3. Bloqueo documental.
4. Retención aduanera.
5. Clima.
6. Incidencia mecánica.
7. Falta de acceso al destino.
8. Problema de carga o descarga.

### 26.2 Resultado

Estado:

```txt
DELAYED
```

### 26.3 Reglas

1. El motivo es obligatorio.
2. La nueva ETA es recomendable.
3. Debe notificarse a cliente y tienda.
4. Debe registrarse evento y auditoría.

---

## 27. Incidencia de viaje

### 27.1 Casos posibles

1. Accidente.
2. Vehículo averiado.
3. Documento rechazado en gate.
4. Contenedor bloqueado.
5. Carga dañada.
6. Entrega rechazada.
7. Incidencia de seguridad.
8. Falta de conductor o unidad.

### 27.2 Resultado

Estado:

```txt
INCIDENT
```

### 27.3 Reglas

1. Motivo obligatorio.
2. Evidencia recomendada u obligatoria según gravedad.
3. Notificación a cliente, tienda y operador.
4. Puede poner orden en `ON_HOLD`.
5. Debe auditarse como evento crítico si afecta entrega.

---

## 28. Entrega completada

### 28.1 Precondiciones

1. Viaje está `IN_TRANSIT` o estado permitido.
2. Se confirma llegada al destino.
3. Se carga evidencia mínima de entrega.
4. Usuario tiene permiso `transport.close_delivery`.

### 28.2 Resultado

Estado:

```txt
DELIVERED
```

### 28.3 Evidencias mínimas sugeridas

1. Proof of Delivery.
2. Foto de entrega.
3. Firma simple o nombre de receptor.
4. Fecha/hora real de entrega.
5. Observaciones de entrega.

### 28.4 Efectos

1. Registrar `actual_delivery_at`.
2. Crear evento `DELIVERY_COMPLETED`.
3. Cargar evidencia POD.
4. Actualizar timeline de orden.
5. Notificar a cliente y tienda.
6. Si la orden depende solo del transporte, puede habilitar cierre.

---

## 29. Cierre de viaje

### 29.1 Precondiciones

1. Viaje está `DELIVERED`.
2. Evidencia de entrega está cargada.
3. No hay incidencias abiertas.
4. Usuario tiene permiso `transport.close_delivery`.

### 29.2 Resultado

Estado:

```txt
CLOSED
```

### 29.3 Efectos

1. Crear evento `TRIP_CLOSED`.
2. Notificar a tienda y operador.
3. Actualizar métricas.
4. Puede contribuir al cierre de la orden.
5. Auditar cierre.

---

## 30. Cancelación de viaje

### 30.1 Precondiciones

1. Viaje no está `DELIVERED` ni `CLOSED`.
2. Usuario tiene permiso `transport.update_status` o autorización de cancelación.
3. Motivo obligatorio.

### 30.2 Resultado

Estado:

```txt
CANCELLED
```

### 30.3 Efectos

1. Crear evento `TRIP_CANCELLED`.
2. Notificar a cliente, tienda y transportista.
3. Liberar vehículo y conductor si estaban asignados.
4. Puede requerir reasignar nuevo viaje.
5. Auditar cancelación.

---

## 31. Relación con órdenes de servicio

| Evento transporte | Efecto en orden |
|---|---|
| Viaje creado | Agrega evento a timeline |
| Viaje asignado | Actualiza avance operativo |
| Retiro iniciado | Puede cambiar orden a `EXECUTING` |
| Retiro completado | Agrega evidencia operativa |
| En tránsito | Muestra avance al cliente |
| Retraso | Puede generar alerta |
| Incidencia | Puede poner orden en `ON_HOLD` |
| Entrega completada | Puede habilitar cierre |
| Viaje cerrado | Contribuye al cierre de orden |
| Viaje cancelado | Puede requerir nueva asignación o poner orden en espera |

---

## 32. Relación con TOS básico

| Transporte | TOS |
|---|---|
| Retiro desde terminal | Puede requerir `GATE_OUT` |
| Entrega a terminal/patio | Puede requerir `GATE_IN` |
| Contenedor asociado | Se vincula con `tos_containers` |
| Bloqueo TOS activo | Debe impedir retiro/gate-out |
| Gate-out registrado | Puede iniciar viaje o confirmar pickup |
| Gate-in registrado | Puede completar entrega a patio |

---

## 33. Relación con almacenamiento

| Transporte | Almacenamiento |
|---|---|
| Entrega a almacén | Puede crear recepción en almacén |
| Retiro desde almacén | Puede crear despacho |
| Movimiento entre almacenes | Puede crear `storage_movements` |
| POD | Puede servir como evidencia de despacho/recepción |
| Viaje cerrado | Puede actualizar inventario si aplica |

---

## 34. Relación con documentos y evidencias

### 34.1 Documentos frecuentes

1. Bill of Lading.
2. Delivery Order.
3. Packing List.
4. Proof of Delivery.
5. Gate pass si aplica.
6. Warehouse Receipt si aplica.
7. Photo Evidence.
8. Other Document.

### 34.2 Evidencias frecuentes

1. Foto del contenedor.
2. Foto de sello.
3. Foto de carga.
4. POD.
5. Firma simple.
6. Hora de retiro.
7. Hora de entrega.
8. Observación de daño.
9. Reporte de incidencia.

### 34.3 Reglas

1. La evidencia de entrega debe asociarse al viaje y a la orden.
2. Evidencias críticas no deben eliminarse físicamente.
3. El cierre del viaje debe requerir evidencia mínima.
4. Documentos rechazados pueden poner el viaje en incidencia o retraso.

---

## 35. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `trips` | Viaje principal |
| `vehicles` | Vehículos de transporte |
| `drivers` | Conductores |
| `routes` | Rutas origen-destino |
| `trip_events` | Eventos del viaje |
| `orders` | Orden relacionada |
| `order_events` | Timeline de orden |
| `tos_containers` | Contenedor asociado |
| `tos_gates` | Gate-in/gate-out relacionado |
| `warehouses` | Almacén origen/destino si aplica |
| `inventory_items` | Inventario relacionado |
| `documents` | Documentos relacionados |
| `evidences` | Evidencias de transporte |
| `payments` | Pagos asociados |
| `commissions` | Comisión del servicio |
| `audit_logs` | Auditoría |
| `notifications` | Notificaciones |
| `master_catalog_items` | Catálogos de estados, vehículos, carga, contenedores |

---

## 36. Modelo de tabla `trips`

```txt
id
uuid
trip_code
order_id
store_id
carrier_id
vehicle_id
driver_id
route_id
trip_type_code
origin_name
origin_address
destination_name
destination_address
scheduled_pickup_at
scheduled_delivery_at
actual_pickup_at
actual_delivery_at
container_id
cargo_type_code
container_type_code
status
notes
created_by
created_at
updated_at
deleted_at
```

---

## 37. Modelo de tabla `vehicles`

```txt
id
uuid
vehicle_code
store_id
vehicle_type_code
plate_number
capacity_weight
capacity_volume
status
insurance_expiration
inspection_expiration
created_at
updated_at
deleted_at
```

---

## 38. Modelo de tabla `drivers`

```txt
id
uuid
driver_code
store_id
first_name
last_name
phone
license_number
license_expiration
status
created_at
updated_at
deleted_at
```

---

## 39. Modelo de tabla `routes`

```txt
id
uuid
route_code
origin_name
origin_address
destination_name
destination_address
estimated_distance_miles
estimated_duration_minutes
port_code
terminal_code
status
created_at
updated_at
deleted_at
```

---

## 40. Modelo de tabla `trip_events`

```txt
id
uuid
trip_id
event_code
event_name
event_description
event_datetime
location_text
created_by
created_at
```

---

## 41. Permisos RBAC del módulo de transporte

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `transport.view` | Ver viajes según scope | Cliente, tienda, transportista, operador, admin, auditor |
| `transport.create_trip` | Crear viaje | Tienda, transportista, operador, admin |
| `transport.assign` | Asignar vehículo/conductor | Transportista, operador, admin |
| `transport.update_status` | Actualizar estado del viaje | Transportista, operador, admin |
| `transport.close_delivery` | Confirmar entrega y cerrar viaje | Transportista, operador, admin |
| `transport.manage_vehicles` | Administrar vehículos | Transportista, tienda, admin |
| `transport.manage_drivers` | Administrar conductores | Transportista, tienda, admin |
| `transport.manage_routes` | Administrar rutas | Operador, admin |
| `transport.upload_evidence` | Cargar evidencias de transporte | Transportista, conductor, operador |
| `transport.audit` | Ver auditoría de transporte | Admin, auditor |

---

## 42. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo viajes asociados a sus órdenes |
| Tienda logística | `store` | Viajes asociados a órdenes de su tienda |
| Transportista | `store` o `assigned` | Viajes propios o asignados |
| Conductor | `assigned` | Solo viajes asignados al conductor |
| Operador interno | `module` | Viajes autorizados por operación |
| Superadministrador | `global` | Todos los viajes |
| Auditor | `global` de consulta | Todos los viajes sin modificar |
| Soporte | `module` limitado | Viajes asociados a tickets |

---

## 43. Endpoints Nest.js del módulo de transporte

Base path principal:

```txt
/trips
```

### 43.1 Viajes

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/trips` | Listar viajes según scope | `transport.view` | No |
| GET | `/trips/:id` | Ver viaje | `transport.view` | No |
| POST | `/trips` | Crear viaje | `transport.create_trip` | `trip.created` |
| PATCH | `/trips/:id/assign` | Asignar transportista, vehículo y conductor | `transport.assign` | `trip.assigned` |
| PATCH | `/trips/:id/schedule` | Programar viaje | `transport.assign` | `trip.scheduled` |
| PATCH | `/trips/:id/start-pickup` | Iniciar retiro | `transport.update_status` | `trip.pickup_started` |
| PATCH | `/trips/:id/complete-pickup` | Confirmar retiro | `transport.update_status` | `trip.pickup_completed` |
| PATCH | `/trips/:id/in-transit` | Marcar en tránsito | `transport.update_status` | `trip.in_transit` |
| PATCH | `/trips/:id/delay` | Reportar retraso | `transport.update_status` | `trip.delayed` |
| PATCH | `/trips/:id/incident` | Reportar incidencia | `transport.update_status` | `trip.incident_reported` |
| PATCH | `/trips/:id/complete-delivery` | Confirmar entrega | `transport.close_delivery` | `trip.delivered` |
| PATCH | `/trips/:id/close` | Cerrar viaje | `transport.close_delivery` | `trip.closed` |
| PATCH | `/trips/:id/cancel` | Cancelar viaje | `transport.update_status` | `trip.cancelled` |
| POST | `/trips/:id/events` | Crear evento manual | `transport.update_status` | `trip.event.created` |
| GET | `/trips/:id/events` | Ver eventos | `transport.view` | No |
| POST | `/trips/:id/evidences` | Cargar evidencia | `transport.upload_evidence` | `trip.evidence.uploaded` |
| GET | `/trips/:id/evidences` | Ver evidencias | `transport.view` | No |

### 43.2 Vehículos

Base path:

```txt
/vehicles
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/vehicles` | Listar vehículos | `transport.view` |
| GET | `/vehicles/:id` | Ver vehículo | `transport.view` |
| POST | `/vehicles` | Crear vehículo | `transport.manage_vehicles` |
| PATCH | `/vehicles/:id` | Actualizar vehículo | `transport.manage_vehicles` |
| PATCH | `/vehicles/:id/disable` | Inactivar vehículo | `transport.manage_vehicles` |

### 43.3 Conductores

Base path:

```txt
/drivers
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/drivers` | Listar conductores | `transport.view` |
| GET | `/drivers/:id` | Ver conductor | `transport.view` |
| POST | `/drivers` | Crear conductor | `transport.manage_drivers` |
| PATCH | `/drivers/:id` | Actualizar conductor | `transport.manage_drivers` |
| PATCH | `/drivers/:id/disable` | Inactivar conductor | `transport.manage_drivers` |

### 43.4 Rutas

Base path:

```txt
/routes
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/routes` | Listar rutas | `transport.view` |
| GET | `/routes/:id` | Ver ruta | `transport.view` |
| POST | `/routes` | Crear ruta | `transport.manage_routes` |
| PATCH | `/routes/:id` | Actualizar ruta | `transport.manage_routes` |

---

## 44. DTOs sugeridos

### 44.1 `CreateTripDto`

```json
{
  "orderId": 1001,
  "storeId": 20,
  "tripTypeCode": "PORT_TO_WAREHOUSE",
  "originName": "Bayport Container Terminal",
  "originAddress": "Port Houston, TX",
  "destinationName": "Demo Bonded Warehouse",
  "destinationAddress": "Houston, TX",
  "scheduledPickupAt": "2026-02-01T09:00:00.000Z",
  "scheduledDeliveryAt": "2026-02-01T14:00:00.000Z",
  "containerId": 1,
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "containerTypeCode": "40HC",
  "notes": "Demo drayage trip from terminal to warehouse"
}
```

### 44.2 `AssignTripDto`

```json
{
  "carrierId": 20,
  "vehicleId": 7,
  "driverId": 5,
  "assignmentNotes": "Assigned to available demo driver and truck"
}
```

### 44.3 `ScheduleTripDto`

```json
{
  "scheduledPickupAt": "2026-02-01T09:00:00.000Z",
  "scheduledDeliveryAt": "2026-02-01T14:00:00.000Z",
  "scheduleNotes": "Pickup appointment confirmed"
}
```

### 44.4 `UpdateTripStatusDto`

```json
{
  "newStatus": "IN_TRANSIT",
  "reason": "Cargo picked up and truck is moving to destination"
}
```

### 44.5 `ReportTripDelayDto`

```json
{
  "delayReason": "Terminal pickup delay",
  "newEstimatedDeliveryAt": "2026-02-01T16:00:00.000Z",
  "notes": "Driver is waiting for release confirmation"
}
```

### 44.6 `ReportTripIncidentDto`

```json
{
  "incidentType": "DOCUMENT_ISSUE",
  "incidentDescription": "Gate rejected pickup due to missing release document",
  "requiresOrderHold": true
}
```

### 44.7 `CompleteDeliveryDto`

```json
{
  "actualDeliveryAt": "2026-02-01T13:45:00.000Z",
  "receiverName": "Warehouse Receiver Demo",
  "deliveryNotes": "Container delivered without visible damage",
  "evidenceIds": [1, 2]
}
```

### 44.8 `CreateVehicleDto`

```json
{
  "storeId": 20,
  "vehicleTypeCode": "TRACTOR_TRAILER",
  "plateNumber": "DEMO1234",
  "capacityWeight": 44000,
  "capacityVolume": null,
  "status": "ACTIVE"
}
```

### 44.9 `CreateDriverDto`

```json
{
  "storeId": 20,
  "firstName": "Driver",
  "lastName": "Demo",
  "phone": "+1 555 000 2001",
  "licenseNumber": "DEMO-LIC-001",
  "licenseExpiration": "2027-12-31",
  "status": "ACTIVE"
}
```

---

## 45. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `TransportDashboardPage` | Vista general del módulo transporte |
| `TripListPage` | Listado de viajes |
| `TripDetailPage` | Detalle de viaje |
| `TripForm` | Crear o editar viaje |
| `TripAssignmentPanel` | Asignar transportista, vehículo y conductor |
| `TripSchedulePanel` | Programar retiro y entrega |
| `TripStatusBadge` | Estado del viaje |
| `TripTimeline` | Timeline de eventos del viaje |
| `TripEventsTable` | Tabla de eventos |
| `TripEvidencePanel` | Evidencias de retiro/entrega |
| `TripRouteCard` | Origen, destino y datos de ruta |
| `TripRelatedOrderCard` | Orden relacionada |
| `TripRelatedTosCard` | Contenedor y eventos TOS relacionados |
| `TripDelayModal` | Reportar retraso |
| `TripIncidentModal` | Reportar incidencia |
| `TripDeliveryModal` | Confirmar entrega |
| `TripCancelModal` | Cancelar viaje |
| `VehicleListPage` | Listado de vehículos |
| `VehicleForm` | Crear/editar vehículo |
| `DriverListPage` | Listado de conductores |
| `DriverForm` | Crear/editar conductor |
| `RouteListPage` | Listado de rutas |
| `RouteForm` | Crear/editar ruta |
| `TransportFiltersBar` | Filtros por estado, fecha, tienda, conductor, vehículo |

---

## 46. Páginas React.js por perfil

### 46.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/orders/:id/transport` | `ClientOrderTransportTab` | Ver transporte asociado a orden |
| `/client/trips/:id` | `ClientTripDetailPage` | Consulta limitada del viaje |

### 46.2 Transportista

| Ruta | Página | Uso |
|---|---|---|
| `/carrier/trips` | `CarrierTripsPage` | Ver viajes asignados o propios |
| `/carrier/trips/:id` | `CarrierTripDetailPage` | Actualizar viaje, evidencias y entrega |
| `/carrier/vehicles` | `CarrierVehiclesPage` | Gestionar vehículos |
| `/carrier/drivers` | `CarrierDriversPage` | Gestionar conductores |

### 46.3 Tienda logística

| Ruta | Página | Uso |
|---|---|---|
| `/store/transport/trips` | `StoreTripsPage` | Ver transporte de órdenes de la tienda |
| `/store/transport/trips/:id` | `StoreTripDetailPage` | Seguimiento y gestión según permisos |

### 46.4 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/transport` | `OperatorTransportDashboardPage` | Operación diaria de transporte |
| `/operator/transport/trips` | `OperatorTripsPage` | Gestionar viajes |
| `/operator/transport/routes` | `OperatorRoutesPage` | Gestionar rutas |

### 46.5 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/transport` | `AdminTransportDashboardPage` | Vista global de transporte |
| `/admin/transport/trips` | `AdminTripsPage` | Gestión global de viajes |
| `/admin/transport/vehicles` | `AdminVehiclesPage` | Gestión global de vehículos |
| `/admin/transport/drivers` | `AdminDriversPage` | Gestión global de conductores |

### 46.6 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/transport` | `AuditorTransportPage` | Consulta de transporte |
| `/auditor/transport/trips/:id` | `AuditorTripDetailPage` | Consulta de eventos, evidencias y logs |

---

## 47. Servicios frontend API

Archivo sugerido:

```txt
/src/services/transportApi.ts
```

Funciones mínimas:

```ts
getTrips(params)
getTripById(id)
createTrip(payload)
assignTrip(id, payload)
scheduleTrip(id, payload)
startPickup(id, payload)
completePickup(id, payload)
markTripInTransit(id, payload)
reportTripDelay(id, payload)
reportTripIncident(id, payload)
completeDelivery(id, payload)
closeTrip(id, payload)
cancelTrip(id, payload)
getTripEvents(id)
createTripEvent(id, payload)
getTripEvidences(id)
uploadTripEvidence(id, formData)
getVehicles(params)
getVehicleById(id)
createVehicle(payload)
updateVehicle(id, payload)
getDrivers(params)
getDriverById(id)
createDriver(payload)
updateDriver(id, payload)
getRoutes(params)
getRouteById(id)
createRoute(payload)
updateRoute(id, payload)
```

---

## 48. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useTrips` | Listar viajes con filtros |
| `useTripDetail` | Cargar detalle de viaje |
| `useCreateTrip` | Crear viaje |
| `useAssignTrip` | Asignar viaje |
| `useScheduleTrip` | Programar viaje |
| `useTripStatusActions` | Ejecutar acciones de estado |
| `useTripEvents` | Timeline de eventos |
| `useTripEvidences` | Evidencias de viaje |
| `useVehicles` | Listar vehículos |
| `useDrivers` | Listar conductores |
| `useRoutes` | Listar rutas |
| `useTransportPermissions` | Acciones visibles según permisos |
| `useTripFilters` | Manejo de filtros de viaje |

---

## 49. Validaciones backend obligatorias

### 49.1 Creación de viaje

1. Usuario autenticado.
2. Usuario tiene `transport.create_trip`.
3. Orden existe.
4. Orden no está cerrada ni cancelada.
5. Tipo de viaje válido.
6. Origen y destino obligatorios.
7. Si se envía contenedor, debe existir.
8. Si se envía contenedor, debe estar relacionado con la orden o autorizado.
9. Estado inicial debe ser `CREATED`.

### 49.2 Asignación de viaje

1. Usuario tiene `transport.assign`.
2. Viaje existe.
3. Viaje no está cerrado ni cancelado.
4. Vehículo existe y está disponible.
5. Conductor existe y está disponible.
6. Transportista existe y está activo.
7. Vehículo y conductor pertenecen a la tienda transportista si aplica.

### 49.3 Programación

1. Viaje está `ASSIGNED`.
2. Fecha de retiro es futura o permitida por operación.
3. Fecha de entrega estimada es posterior al retiro.
4. Usuario tiene permiso.

### 49.4 Inicio de retiro

1. Viaje está `SCHEDULED`.
2. Vehículo asignado.
3. Conductor asignado.
4. No hay bloqueo TOS crítico si hay contenedor.
5. Orden no está en estado bloqueante.

### 49.5 Retiro completado

1. Viaje está `PICKUP_IN_PROGRESS`.
2. Puede requerir evidencia.
3. Si involucra TOS, validar gate-out si aplica.

### 49.6 Entrega completada

1. Viaje está `IN_TRANSIT` o `DELAYED` resuelto.
2. Evidencia de entrega requerida.
3. Fecha real de entrega válida.
4. Usuario tiene `transport.close_delivery`.

### 49.7 Cancelación

1. Viaje no está `DELIVERED` ni `CLOSED`.
2. Motivo obligatorio.
3. Usuario tiene permiso.
4. Debe liberar recursos asignados si aplica.

---

## 50. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Crear viaje y evento inicial.
2. Asignar viaje y actualizar disponibilidad de vehículo/conductor si aplica.
3. Completar retiro y registrar evidencia/gate-out si aplica.
4. Completar entrega y cargar POD.
5. Cancelar viaje y liberar recursos.
6. Reportar incidencia que cambia orden a `ON_HOLD`.
7. Cerrar viaje y actualizar orden si aplica.

Si falla una parte, la operación debe hacer rollback.

---

## 51. Auditoría del módulo de transporte

| Evento | Descripción | Criticidad |
|---|---|---|
| `trip.created` | Viaje creado | medium |
| `trip.assigned` | Viaje asignado | medium |
| `trip.scheduled` | Viaje programado | medium |
| `trip.pickup_started` | Retiro iniciado | medium |
| `trip.pickup_completed` | Retiro completado | high |
| `trip.in_transit` | Viaje en tránsito | medium |
| `trip.delayed` | Retraso reportado | medium |
| `trip.incident_reported` | Incidencia reportada | high |
| `trip.delivered` | Entrega completada | high |
| `trip.closed` | Viaje cerrado | high |
| `trip.cancelled` | Viaje cancelado | high |
| `trip.evidence.uploaded` | Evidencia cargada | medium |
| `vehicle.created` | Vehículo creado | medium |
| `vehicle.updated` | Vehículo actualizado | medium |
| `driver.created` | Conductor creado | medium |
| `driver.updated` | Conductor actualizado | medium |
| `transport.unauthorized_access` | Intento no autorizado | high |
| `transport.override.executed` | Corrección excepcional | critical |

---

## 52. Notificaciones del módulo de transporte

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Viaje creado | Tienda / transportista | Nuevo viaje creado | `/carrier/trips/:id` |
| Viaje asignado | Transportista / conductor | Se te asignó un viaje | `/carrier/trips/:id` |
| Viaje programado | Cliente / tienda | El viaje fue programado | `/orders/:id/transport` |
| Retiro iniciado | Cliente / tienda | El retiro está en proceso | `/orders/:id/transport` |
| Retiro completado | Cliente / tienda | La carga fue retirada | `/orders/:id/transport` |
| En tránsito | Cliente / tienda | El viaje está en tránsito | `/orders/:id/transport` |
| Retraso | Cliente / tienda / operador | El viaje presenta retraso | `/orders/:id/transport` |
| Incidencia | Cliente / tienda / operador | Se reportó una incidencia en el viaje | `/orders/:id/transport` |
| Entrega completada | Cliente / tienda | La entrega fue completada | `/orders/:id/transport` |
| POD cargado | Cliente / tienda | Se cargó prueba de entrega | `/orders/:id/transport` |
| Viaje cancelado | Cliente / tienda / transportista | El viaje fue cancelado | `/orders/:id/transport` |

---

## 53. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Viajes por estado | Cantidad de viajes por estado | Admin, operador, transportista |
| Viajes por transportista | Volumen por proveedor | Admin |
| Viajes por cliente | Historial por cliente | Cliente, admin |
| Viajes retrasados | Viajes con demora | Admin, operador |
| Incidencias de transporte | Problemas operativos | Admin, operador, auditor |
| Entregas completadas | Viajes entregados por periodo | Admin, transportista |
| Tiempo promedio de entrega | SLA de transporte | Admin, transportista |
| Vehículos activos | Flota disponible | Transportista, admin |
| Conductores activos | Conductores disponibles | Transportista, admin |
| POD pendientes | Viajes entregados sin evidencia | Admin, operador |

---

## 54. Métricas del dashboard de transporte

### 54.1 Transportista

1. Viajes asignados.
2. Viajes programados.
3. Viajes en tránsito.
4. Viajes retrasados.
5. Viajes con incidencia.
6. Viajes entregados.
7. Vehículos activos.
8. Conductores activos.
9. POD pendientes.

### 54.2 Cliente

1. Viajes asociados a sus órdenes.
2. Estado actual de transporte.
3. Último evento de viaje.
4. Entregas completadas.
5. Evidencias disponibles.

### 54.3 Operador interno

1. Viajes del día.
2. Viajes pendientes de asignación.
3. Viajes en retiro.
4. Viajes en tránsito.
5. Retrasos activos.
6. Incidencias activas.
7. Entregas pendientes.

### 54.4 Superadministrador

1. Viajes globales.
2. Viajes por tienda.
3. Viajes por categoría de servicio.
4. Viajes por estado.
5. Tiempo promedio de entrega.
6. Incidencias críticas.
7. Transportistas con mejor desempeño.

### 54.5 Auditor

1. Eventos críticos de transporte.
2. Cambios de estado.
3. Incidencias.
4. Cancelaciones.
5. Evidencias de entrega.
6. Usuarios que registraron eventos.

---

## 55. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Viaje no existe | `RESOURCE_NOT_FOUND` | 404 |
| Orden no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Vehículo no disponible | `VEHICLE_NOT_AVAILABLE` | 422 |
| Conductor no disponible | `DRIVER_NOT_AVAILABLE` | 422 |
| Viaje ya cerrado | `BUSINESS_RULE_ERROR` | 422 |
| Viaje ya cancelado | `BUSINESS_RULE_ERROR` | 422 |
| Orden cerrada o cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Contenedor bloqueado | `CONTAINER_BLOCKED` | 422 |
| Falta evidencia de entrega | `DELIVERY_EVIDENCE_REQUIRED` | 422 |
| Fecha inválida | `VALIDATION_ERROR` | 400 |
| Error carga evidencia | `FILE_UPLOAD_ERROR` | 400 |

---

## 56. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `CREATED` | Creado | Asignar |
| `ASSIGNED` | Asignado | Programar |
| `SCHEDULED` | Programado | Iniciar retiro |
| `PICKUP_IN_PROGRESS` | Retiro en proceso | Completar retiro |
| `PICKED_UP` | Retirado | Marcar en tránsito |
| `IN_TRANSIT` | En tránsito | Reportar retraso/incidencia o entregar |
| `DELAYED` | Retrasado | Actualizar ETA o reanudar |
| `INCIDENT` | Incidencia | Resolver o cancelar |
| `DELIVERED` | Entregado | Cerrar viaje |
| `CLOSED` | Cerrado | Ver resumen |
| `CANCELLED` | Cancelado | Ver motivo |

---

## 57. Reglas UX del módulo de transporte

1. El transportista debe ver sus viajes asignados de forma clara.
2. El cliente debe ver una versión simplificada del seguimiento.
3. La tienda debe ver viajes asociados a sus órdenes.
4. El operador debe tener vista de control con filtros por estado.
5. El detalle del viaje debe mostrar orden, ruta, conductor, vehículo y estado.
6. El timeline debe mostrar eventos de transporte.
7. La entrega debe requerir evidencia antes de cerrar.
8. Los retrasos e incidencias deben destacarse visualmente.
9. Acciones no permitidas deben ocultarse o deshabilitarse.
10. Auditor debe ver modo solo lectura.
11. La vista mobile debe permitir actualizar estado y cargar evidencia fácilmente.
12. Las evidencias deben tener previsualización cuando sea posible.

---

## 58. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Dashboard transporte | `Operaciones > Transporte` |
| Listado viajes | `Operaciones > Transporte > Viajes` |
| Detalle viaje | `Operaciones > Transporte > Viajes > TRP-2026-001` |
| Vehículos | `Operaciones > Transporte > Vehículos` |
| Conductores | `Operaciones > Transporte > Conductores` |
| Rutas | `Operaciones > Transporte > Rutas` |
| Cliente transporte orden | `Mis órdenes > ORD-2026-001 > Transporte` |
| Auditor transporte | `Auditoría > Transporte` |
| Admin transporte | `Panel global > Transporte` |

---

## 59. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Vehículo | `VEH-2026-001` | Tracto camión demo |
| Placa | `DEMO1234` | Placa demo |
| Conductor | `DRV-2026-001` | Driver Demo |
| Ruta | `ROU-2026-001` | Port Houston → Demo Bonded Warehouse |
| Viaje | `TRP-2026-001` | Viaje asociado a `ORD-2026-001` |
| Estado viaje | `DELIVERED` | Entregado |
| Evidencia | `POD-2026-001` | Prueba de entrega demo |

---

## 60. Ejemplo JSON de viaje demo

```json
{
  "tripCode": "TRP-2026-001",
  "orderCode": "ORD-2026-001",
  "storeCode": "STO-TRA-001",
  "vehicleCode": "VEH-2026-001",
  "driverCode": "DRV-2026-001",
  "routeCode": "ROU-2026-001",
  "tripTypeCode": "PORT_TO_WAREHOUSE",
  "originName": "Bayport Container Terminal",
  "originAddress": "Port Houston, TX",
  "destinationName": "Demo Bonded Warehouse",
  "destinationAddress": "Houston, TX",
  "scheduledPickupAt": "2026-02-01T09:00:00.000Z",
  "scheduledDeliveryAt": "2026-02-01T14:00:00.000Z",
  "actualPickupAt": "2026-02-01T09:30:00.000Z",
  "actualDeliveryAt": "2026-02-01T13:45:00.000Z",
  "containerNumber": "MSCU1234567",
  "cargoTypeCode": "CONTAINERIZED_CARGO",
  "containerTypeCode": "40HC",
  "status": "DELIVERED",
  "isDemo": true
}
```

---

## 61. Ejemplo JSON de vehículo demo

```json
{
  "vehicleCode": "VEH-2026-001",
  "storeCode": "STO-TRA-001",
  "vehicleTypeCode": "TRACTOR_TRAILER",
  "plateNumber": "DEMO1234",
  "capacityWeight": 44000,
  "capacityVolume": null,
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 62. Ejemplo JSON de conductor demo

```json
{
  "driverCode": "DRV-2026-001",
  "storeCode": "STO-TRA-001",
  "firstName": "Driver",
  "lastName": "Demo",
  "phone": "+1 555 000 2001",
  "licenseNumber": "DEMO-LIC-001",
  "licenseExpiration": "2027-12-31",
  "status": "ACTIVE",
  "isDemo": true
}
```

---

## 63. Pruebas funcionales mínimas

### 63.1 Transportista

1. Transportista puede ver viajes asignados.
2. Transportista puede asignar vehículo y conductor si tiene permiso.
3. Transportista puede programar viaje.
4. Transportista puede iniciar retiro.
5. Transportista puede completar retiro.
6. Transportista puede marcar en tránsito.
7. Transportista puede reportar retraso.
8. Transportista puede reportar incidencia.
9. Transportista puede completar entrega con evidencia.
10. Transportista puede cerrar viaje si cumple requisitos.

### 63.2 Cliente

1. Cliente ve transporte asociado a sus órdenes.
2. Cliente no ve viajes de otros clientes.
3. Cliente ve estado actual del viaje.
4. Cliente ve eventos principales.
5. Cliente ve evidencia de entrega permitida.
6. Cliente no puede modificar viajes.

### 63.3 Tienda logística

1. Tienda ve viajes asociados a sus órdenes.
2. Tienda no ve viajes de otra tienda.
3. Tienda puede coordinar transporte si tiene permisos.
4. Tienda puede ver evidencias de retiro y entrega.

### 63.4 Operador interno

1. Operador ve viajes autorizados.
2. Operador puede crear y asignar viajes.
3. Operador puede reportar incidencias.
4. Operador puede resolver seguimiento operativo.

### 63.5 Auditor

1. Auditor ve viajes y eventos.
2. Auditor ve evidencias.
3. Auditor no puede modificar.
4. Auditor puede filtrar por usuario, estado, transportista y fecha.

### 63.6 Admin

1. Admin ve todos los viajes.
2. Admin puede corregir casos excepcionales.
3. Admin administra vehículos, conductores y rutas si aplica.
4. Admin ve auditoría completa.

---

## 64. Pruebas técnicas API

1. `POST /trips` crea viaje válido.
2. `POST /trips` rechaza orden cerrada.
3. `PATCH /trips/:id/assign` asigna vehículo y conductor.
4. `PATCH /trips/:id/assign` rechaza vehículo no disponible.
5. `PATCH /trips/:id/start-pickup` valida estado programado.
6. `PATCH /trips/:id/complete-pickup` registra retiro.
7. `PATCH /trips/:id/in-transit` cambia a tránsito.
8. `PATCH /trips/:id/delay` exige motivo.
9. `PATCH /trips/:id/incident` crea incidencia y puede poner orden en espera.
10. `PATCH /trips/:id/complete-delivery` exige evidencia.
11. `PATCH /trips/:id/cancel` exige motivo.
12. `GET /trips` respeta scope.
13. `GET /trips/:id/events` devuelve timeline.
14. Eventos críticos generan `audit_logs`.
15. Eventos principales generan `notifications`.

---

## 65. Criterios de aceptación

El módulo de transporte se considera aceptado cuando:

1. Se pueden crear viajes asociados a órdenes.
2. Un viaje puede tener origen y destino.
3. Un viaje puede tener transportista, vehículo y conductor.
4. Se pueden administrar vehículos.
5. Se pueden administrar conductores.
6. Se pueden administrar rutas.
7. Se puede programar un viaje.
8. Se puede iniciar retiro.
9. Se puede completar retiro.
10. Se puede marcar viaje en tránsito.
11. Se pueden reportar retrasos.
12. Se pueden reportar incidencias.
13. Se puede completar entrega con evidencia.
14. Se puede cerrar viaje.
15. Se puede cancelar viaje con motivo.
16. Los eventos del viaje se reflejan en timeline de orden.
17. Las evidencias de transporte se pueden cargar y consultar.
18. Los permisos RBAC se respetan.
19. Los scopes de datos se respetan.
20. Cliente solo consulta sus viajes.
21. Transportista solo consulta viajes propios o asignados.
22. Auditor consulta sin modificar.
23. Superadministrador consulta globalmente.
24. Eventos críticos generan auditoría.
25. Eventos principales generan notificaciones.
26. Reportes básicos de transporte funcionan.
27. Endpoints están documentados en Swagger.
28. Pruebas funcionales y API pasan.
29. No existe dependencia técnica con Odoo ni con TMS externo.

---

## 66. Tareas técnicas para Antigravity

### 66.1 Base de datos

1. Validar tabla `trips`.
2. Validar tabla `vehicles`.
3. Validar tabla `drivers`.
4. Validar tabla `routes`.
5. Validar tabla `trip_events`.
6. Crear índices por orden, tienda, transportista, vehículo, conductor, estado y fecha.
7. Crear seeds de vehículo demo.
8. Crear seeds de conductor demo.
9. Crear seeds de ruta demo.
10. Crear seeds de viaje demo.
11. Crear validaciones de transiciones.

### 66.2 Backend Nest.js

1. Crear módulo `transport` o `trips`.
2. Crear `TripsController`.
3. Crear `TripsService`.
4. Crear `VehiclesController`.
5. Crear `VehiclesService`.
6. Crear `DriversController`.
7. Crear `DriversService`.
8. Crear `RoutesController`.
9. Crear `RoutesService`.
10. Crear DTOs de transporte.
11. Crear endpoints de viajes.
12. Crear endpoints de vehículos.
13. Crear endpoints de conductores.
14. Crear endpoints de rutas.
15. Crear integración con órdenes.
16. Crear integración con TOS.
17. Crear integración con evidencias.
18. Crear validaciones de estado.
19. Crear transacciones críticas.
20. Crear auditoría.
21. Crear notificaciones.
22. Crear pruebas unitarias y API.

### 66.3 Frontend React.js

1. Crear `TransportDashboardPage`.
2. Crear `TripListPage`.
3. Crear `TripDetailPage`.
4. Crear `TripForm`.
5. Crear `TripAssignmentPanel`.
6. Crear `TripSchedulePanel`.
7. Crear `TripTimeline`.
8. Crear `TripEvidencePanel`.
9. Crear modales de retraso, incidencia, entrega y cancelación.
10. Crear `VehicleListPage` y `VehicleForm`.
11. Crear `DriverListPage` y `DriverForm`.
12. Crear `RouteListPage` y `RouteForm`.
13. Crear filtros por estado, fecha, tienda, conductor y vehículo.
14. Crear hooks de transporte.
15. Crear guards visuales por permisos.
16. Crear estados loading, empty, error y forbidden.

### 66.4 QA

1. Probar creación de viaje.
2. Probar asignación.
3. Probar programación.
4. Probar retiro.
5. Probar tránsito.
6. Probar retraso.
7. Probar incidencia.
8. Probar entrega.
9. Probar cierre.
10. Probar cancelación.
11. Probar vehículos.
12. Probar conductores.
13. Probar rutas.
14. Probar permisos y scopes.
15. Probar timeline.
16. Probar evidencias.
17. Probar auditoría.
18. Probar notificaciones.
19. Probar reportes.

---

## 67. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto logístico de transporte, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `21_TRANSPORT_OPERATION_PLAN.md` como fuente principal para implementar el módulo de transporte del marketplace logístico.

Objetivo:
Implementar un módulo de transporte que permita crear viajes asociados a órdenes, asignar transportista, vehículo y conductor, programar rutas, iniciar retiro, completar retiro, marcar tránsito, reportar retrasos, reportar incidencias, completar entrega con evidencia, cerrar viajes, cancelar viajes, registrar eventos, actualizar timeline de orden, generar auditoría, notificaciones, reportes y métricas.

Reglas obligatorias:
1. Todo viaje del MVP debe asociarse a una orden.
2. Todo viaje debe tener origen y destino.
3. Validar estados y transiciones en backend.
4. No permitir entrega sin evidencia mínima.
5. No permitir asignar vehículo o conductor inactivo.
6. No permitir ejecutar viajes cancelados o cerrados.
7. Reportes de retraso e incidencia deben tener motivo.
8. Incidencias críticas pueden poner la orden en espera.
9. Eventos de transporte deben reflejarse en timeline de orden.
10. Eventos críticos deben auditarse.
11. Eventos principales deben generar notificaciones.
12. Respetar scopes de datos: own, store, assigned, module, global.
13. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
14. Respetar `13_API_SPECIFICATION.md`.
15. Respetar `15_MASTER_CATALOGS_MVP.md`.
16. Respetar `19_ORDER_WORKFLOW.md`.
17. Respetar `20_TOS_OPERATION_PLAN.md`.
18. No integrar Odoo ni TMS externo; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de transporte.
3. Endpoints Nest.js.
4. Servicios backend.
5. Validaciones RBAC y scope.
6. Validaciones de transición de estados.
7. Viajes, vehículos, conductores y rutas.
8. Timeline de eventos.
9. Evidencias de transporte.
10. Auditoría.
11. Notificaciones.
12. Componentes React.js.
13. Hooks frontend.
14. Pruebas unitarias y API.
15. Seeds demo de transporte.
16. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, permisos, timeline, evidencias, auditoría, notificaciones, reportes y QA.
```

---

## 68. Checklist de uso en Antigravity

- [ ] Guardar este documento como `21_TRANSPORT_OPERATION_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Validar consistencia con `17_INITIAL_SEEDS_PLAN.md`.
- [ ] Validar consistencia con `19_ORDER_WORKFLOW.md`.
- [ ] Validar consistencia con `20_TOS_OPERATION_PLAN.md`.
- [ ] Crear DTOs de transporte.
- [ ] Crear endpoints de viajes.
- [ ] Crear endpoints de vehículos.
- [ ] Crear endpoints de conductores.
- [ ] Crear endpoints de rutas.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de permisos.
- [ ] Crear timeline de transporte.
- [ ] Crear evidencias de transporte.
- [ ] Crear integración con órdenes.
- [ ] Crear integración con TOS.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni TMS externo.

---

## 69. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión operativa de transporte | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

