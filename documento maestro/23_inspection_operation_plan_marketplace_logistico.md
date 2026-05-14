# 23_INSPECTION_OPERATION_PLAN.md

# Documento Maestro del Plan Operativo de Inspecciones
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `23_INSPECTION_OPERATION_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Inspecciones logísticas |
| Módulos relacionados | Órdenes, cotizaciones, servicios, tiendas, TOS, transporte, almacenamiento, documentos, evidencias, pagos, comisiones, auditoría, notificaciones, reportes |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan operativo maestro del módulo de inspecciones** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de un módulo que permita crear, programar, asignar, ejecutar, documentar, evidenciar, aprobar, observar, rechazar y cerrar inspecciones relacionadas con órdenes de servicio, contenedores, cargas, documentos, transporte, almacenamiento, TOS y procesos aduaneros referenciales.

El módulo de inspecciones del MVP debe permitir:

1. Crear inspecciones asociadas a órdenes.
2. Asociar inspecciones a servicios de inspección publicados.
3. Asignar inspector o empresa inspectora.
4. Programar fecha y lugar de inspección.
5. Definir checklist por tipo de inspección.
6. Ejecutar checklist.
7. Cargar evidencias fotográficas o documentales.
8. Registrar resultados.
9. Emitir acta o reporte de inspección referencial.
10. Bloquear o liberar procesos según resultado.
11. Actualizar timeline de orden.
12. Relacionar inspección con TOS, transporte y almacenamiento.
13. Generar auditoría de eventos críticos.
14. Enviar notificaciones.
15. Generar reportes y métricas.

---

## 3. Objetivo general

Diseñar e implementar un módulo de inspecciones seguro, trazable, auditable y escalable que permita controlar inspecciones físicas, documentales, fotográficas, aduaneras, de seguridad, de transporte y de almacenamiento dentro del marketplace logístico.

---

## 4. Objetivos específicos

1. Definir el alcance funcional del módulo de inspecciones.
2. Definir entidades operativas principales.
3. Definir tipos de inspección.
4. Definir estados de inspección.
5. Definir resultados posibles.
6. Definir checklists por tipo de inspección.
7. Definir reglas de creación, programación, asignación y ejecución.
8. Definir reglas de aprobación, observación, rechazo y cierre.
9. Definir relación con órdenes de servicio.
10. Definir relación con TOS básico.
11. Definir relación con transporte.
12. Definir relación con almacenamiento.
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

## 5. Alcance del módulo de inspecciones MVP

El MVP debe cubrir el siguiente flujo operativo:

```txt
Orden logística activa
  ↓
Requerimiento de inspección
  ↓
Creación de inspección
  ↓
Asignación de inspector
  ↓
Programación de fecha, lugar y tipo
  ↓
Ejecución de checklist
  ↓
Carga de evidencias
  ↓
Registro de resultado
  ↓
Aprobación, observación o rechazo
  ↓
Actualización de orden, TOS, transporte o almacenamiento
  ↓
Cierre de inspección
  ↓
Auditoría y reportes
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. Integración directa con autoridades oficiales.
2. Certificados oficiales emitidos por autoridad pública.
3. Firma electrónica avanzada.
4. OCR automático de evidencias.
5. IA para detectar daños en fotos.
6. App móvil nativa para inspectores.
7. Integración con básculas, cámaras o sensores.
8. Integración con TOS externo real.
9. Integración directa con Odoo Quality.
10. Integración con laboratorios externos.
11. Inspecciones regulatorias automatizadas.
12. Geolocalización obligatoria en tiempo real.
13. Videoinspección en vivo.
14. Workflow BPM configurable por usuario final.
15. Motor avanzado de riesgos.
16. Validación automática de documentos oficiales.
17. Emisión fiscal o legal de actas.

---

## 7. Principios funcionales del módulo de inspecciones

Antigravity debe respetar los siguientes principios:

1. Toda inspección debe estar asociada a una orden o entidad operativa autorizada.
2. Toda inspección debe tener tipo, estado y responsable.
3. Toda inspección debe tener checklist o motivo justificado si no aplica checklist.
4. Todo resultado debe tener evidencia o comentario justificativo.
5. Inspecciones rechazadas u observadas pueden bloquear órdenes, contenedores, inventario o viajes.
6. Inspecciones aprobadas pueden liberar bloqueos o permitir continuidad.
7. El cliente solo debe ver inspecciones asociadas a sus órdenes.
8. La tienda solo debe ver inspecciones asociadas a sus servicios u órdenes.
9. El inspector solo debe ver inspecciones asignadas.
10. El superadministrador puede ver todas las inspecciones.
11. El auditor puede consultar sin modificar.
12. Cambios críticos deben auditarse.
13. Evidencias críticas no deben eliminarse físicamente.
14. El backend es la fuente de verdad para estados, permisos y validaciones.
15. El diseño debe permitir integración futura con sistemas oficiales o módulos avanzados.

---

## 8. Actores del módulo de inspecciones

| Actor | Perfil | Participación |
|---|---|---|
| Cliente final | `PROF-CLI-001` | Consulta inspecciones asociadas a sus órdenes y resultados visibles |
| Tienda logística | `PROF-TIE-002` | Solicita, consulta o gestiona inspecciones relacionadas con sus servicios |
| Inspector | `PROF-INS-005` | Ejecuta checklist, carga evidencias y registra resultados |
| Empresa inspectora | Tipo tienda `INSPECTION_COMPANY` | Proveedor que ofrece servicios de inspección |
| Operador interno | `PROF-OPE-004` | Coordina, asigna, revisa o gestiona excepciones |
| Transportista | `PROF-TRA-006` | Consulta inspecciones relacionadas con viaje/carga |
| Almacén fiscal | Tipo tienda `BONDED_WAREHOUSE` | Consulta o solicita inspecciones sobre inventario almacenado |
| Agente aduanal | `PROF-ADU-007` | Consulta inspecciones vinculadas a procesos aduanales |
| Superadministrador | `PROF-SUP-003` | Consulta global, configura y corrige casos excepcionales |
| Auditor | `PROF-AUD-008` | Consulta inspecciones, evidencias y auditoría sin modificar |
| Soporte técnico | `PROF-SOP-009` | Atiende incidencias del módulo de inspecciones |

---

## 9. Entidades principales del módulo de inspecciones

| Entidad | Tabla MySQL sugerida | Descripción |
|---|---|---|
| Inspección | `inspections` | Registro principal de la inspección |
| Checklist | `inspection_checklists` | Plantilla o conjunto de puntos a evaluar |
| Ítem de checklist | `inspection_checklist_items` | Preguntas o controles individuales |
| Resultado | `inspection_results` | Resultado general o por ítem |
| Evidencia | `inspection_evidences` / `evidences` | Fotos, documentos o archivos |
| Orden | `orders` | Orden relacionada |
| Servicio | `services` | Servicio de inspección contratado si aplica |
| Contenedor TOS | `tos_containers` | Contenedor inspeccionado si aplica |
| Inventario | `inventory_items` | Mercancía inspeccionada si aplica |
| Viaje | `trips` | Transporte inspeccionado si aplica |
| Documento | `documents` | Documentos revisados |
| Evento de orden | `order_events` | Timeline de orden |
| Auditoría | `audit_logs` | Trazabilidad de cambios críticos |
| Notificación | `notifications` | Avisos a usuarios involucrados |

---

## 10. Modelo operativo general

```txt
Order
  ↓
Inspection Request
  ↓
Inspection Assignment
  ↓
Schedule
  ↓
Checklist Execution
  ↓
Evidence Upload
  ↓
Result
  ↓
Approve / Observe / Reject
  ↓
Order / TOS / Transport / Storage Impact
  ↓
Close Inspection
```

---

## 11. Tipos de inspección

| Código | Nombre | Descripción |
|---|---|---|
| `PHYSICAL` | Física | Inspección visual o física de carga, contenedor o mercancía |
| `DOCUMENTAL` | Documental | Revisión de documentos relacionados |
| `PHOTO` | Fotográfica | Inspección basada en evidencia fotográfica |
| `SECURITY` | Seguridad | Revisión de seguridad, sellos, accesos o condición sensible |
| `CUSTOMS` | Aduanera | Inspección referencial vinculada a proceso aduanero |
| `WAREHOUSE` | Almacén | Inspección de inventario, ubicación o recepción |
| `TRANSPORT` | Transporte | Inspección de unidad, carga, retiro o entrega |
| `DAMAGE` | Daño | Revisión de posibles daños, discrepancias o incidentes |
| `DELIVERY` | Entrega | Validación en punto de entrega |
| `TOS_CONTAINER` | Contenedor TOS | Inspección de contenedor dentro del flujo TOS |

---

## 12. Estados de inspección

| Estado | Código | Descripción |
|---|---|---|
| Creada | `CREATED` | Inspección registrada |
| Asignada | `ASSIGNED` | Inspector o proveedor asignado |
| Programada | `SCHEDULED` | Fecha, hora y lugar definidos |
| En ejecución | `IN_PROGRESS` | Inspección en desarrollo |
| Pendiente de evidencias | `PENDING_EVIDENCE` | Faltan fotos, documentos o soportes |
| En revisión | `IN_REVIEW` | Resultado pendiente de validación |
| Observada | `OBSERVED` | Hay observaciones o correcciones requeridas |
| Aprobada | `APPROVED` | Inspección satisfactoria |
| Rechazada | `REJECTED` | Inspección no satisfactoria |
| Cerrada | `CLOSED` | Inspección finalizada administrativamente |
| Cancelada | `CANCELLED` | Inspección anulada |

---

## 13. Resultados de inspección

| Código | Nombre | Descripción |
|---|---|---|
| `APPROVED` | Aprobado | Cumple con los criterios |
| `REJECTED` | Rechazado | No cumple con los criterios |
| `OBSERVED` | Observado | Requiere corrección, aclaratoria o evidencia adicional |
| `PENDING_EVIDENCE` | Pendiente de evidencia | Falta evidencia obligatoria |
| `NOT_APPLICABLE` | No aplica | El ítem o criterio no aplica |
| `PARTIAL` | Parcial | Algunos ítems cumplen y otros no |
| `DAMAGE_DETECTED` | Daño detectado | Se identificó daño o discrepancia |
| `DOCUMENT_MISMATCH` | Discrepancia documental | Documentos no coinciden con carga/datos |
| `SECURITY_ALERT` | Alerta de seguridad | Observación crítica de seguridad |

---

## 14. Transiciones válidas de inspección

```txt
CREATED → ASSIGNED
CREATED → CANCELLED
ASSIGNED → SCHEDULED
ASSIGNED → CANCELLED
SCHEDULED → IN_PROGRESS
SCHEDULED → CANCELLED
IN_PROGRESS → PENDING_EVIDENCE
IN_PROGRESS → IN_REVIEW
PENDING_EVIDENCE → IN_REVIEW
IN_REVIEW → APPROVED
IN_REVIEW → OBSERVED
IN_REVIEW → REJECTED
OBSERVED → IN_PROGRESS
OBSERVED → PENDING_EVIDENCE
APPROVED → CLOSED
REJECTED → CLOSED
CANCELLED → CLOSED, opcional administrativo
```

---

## 15. Transiciones no permitidas

| Desde | Hacia no permitido | Motivo |
|---|---|---|
| `CREATED` | `APPROVED` | Debe asignarse y ejecutarse antes |
| `ASSIGNED` | `APPROVED` | Falta programación/ejecución |
| `SCHEDULED` | `CLOSED` | Falta ejecución y resultado |
| `IN_PROGRESS` | `CLOSED` | Falta resultado final |
| `CANCELLED` | `IN_PROGRESS` | Inspección cancelada no debe ejecutarse |
| `CLOSED` | `IN_PROGRESS` | Inspección cerrada no debe reabrirse sin autorización especial |
| `APPROVED` | `REJECTED` | Cambio final requiere proceso de corrección excepcional |

---

## 16. Tipos de checklist

| Código | Nombre | Uso |
|---|---|---|
| `CHECKLIST_PHYSICAL_CARGO` | Checklist físico de carga | Estado visible, cantidad, empaque, daños |
| `CHECKLIST_CONTAINER` | Checklist de contenedor | Número, sello, condición, tipo, fotos |
| `CHECKLIST_DOCUMENTAL` | Checklist documental | Factura, packing list, BL, POA, consistencia |
| `CHECKLIST_WAREHOUSE_RECEIPT` | Checklist de recepción en almacén | Cantidad, estado, ubicación, recibo |
| `CHECKLIST_TRANSPORT_PICKUP` | Checklist de retiro | Unidad, conductor, carga, sello, hora |
| `CHECKLIST_DELIVERY` | Checklist de entrega | Receptor, condición, POD, observaciones |
| `CHECKLIST_SECURITY` | Checklist de seguridad | Sellos, accesos, alertas, restricciones |
| `CHECKLIST_DAMAGE` | Checklist de daño | Fotos, descripción, severidad, recomendación |

---

## 17. Datos mínimos de una inspección

| Campo | Descripción | Obligatorio |
|---|---|---|
| `inspection_code` | Código único de inspección | Sí |
| `order_id` | Orden relacionada | Sí en MVP |
| `service_id` | Servicio de inspección si aplica | No, recomendado |
| `store_id` | Empresa inspectora o tienda responsable | No al crear, sí al asignar si aplica |
| `inspector_id` | Inspector asignado | No al crear, sí al asignar |
| `inspection_type_code` | Tipo de inspección | Sí |
| `checklist_code` | Checklist asociado | No, recomendado |
| `related_entity_type` | Entidad inspeccionada | Sí |
| `related_entity_id` | ID de entidad inspeccionada | Sí si aplica |
| `scheduled_at` | Fecha/hora programada | No al crear, sí al programar |
| `location_text` | Lugar de inspección | No, recomendado |
| `status` | Estado de inspección | Sí |
| `result_code` | Resultado final | No hasta cierre |
| `summary` | Resumen de inspección | No |
| `findings` | Hallazgos | No |
| `recommendations` | Recomendaciones | No |
| `started_at` | Inicio real | No |
| `completed_at` | Finalización real | No |
| `closed_at` | Cierre administrativo | No |

---

## 18. Entidades inspeccionables

| Código | Entidad | Tabla relacionada |
|---|---|---|
| `ORDER` | Orden | `orders` |
| `CONTAINER` | Contenedor | `tos_containers` |
| `TRIP` | Viaje | `trips` |
| `INVENTORY_ITEM` | Inventario | `inventory_items` |
| `DOCUMENT` | Documento | `documents` |
| `WAREHOUSE` | Almacén | `warehouses` |
| `STORAGE_LOCATION` | Ubicación | `storage_locations` |
| `DISPATCH` | Despacho | `dispatches` |
| `SERVICE` | Servicio | `services` |

---

## 19. Datos mínimos de checklist

| Campo | Descripción | Obligatorio |
|---|---|---|
| `checklist_code` | Código único del checklist | Sí |
| `checklist_name` | Nombre | Sí |
| `inspection_type_code` | Tipo de inspección relacionado | Sí |
| `description` | Descripción | No |
| `status` | Estado | Sí |

---

## 20. Datos mínimos de ítem de checklist

| Campo | Descripción | Obligatorio |
|---|---|---|
| `item_code` | Código del ítem | Sí |
| `checklist_id` | Checklist padre | Sí |
| `question` | Pregunta o control | Sí |
| `response_type` | yes_no, text, number, photo_required, select | Sí |
| `is_required` | Obligatorio | Sí |
| `order_index` | Orden visual | Sí |
| `failure_blocks_operation` | Si falla, bloquea operación | No |
| `requires_evidence` | Si requiere evidencia | No |

---

## 21. Datos mínimos de resultado por ítem

| Campo | Descripción | Obligatorio |
|---|---|---|
| `inspection_id` | Inspección relacionada | Sí |
| `checklist_item_id` | Ítem de checklist | Sí |
| `response_value` | Respuesta | Sí si aplica |
| `result_code` | Resultado del ítem | Sí |
| `notes` | Observaciones | No |
| `evidence_id` | Evidencia relacionada | No |
| `answered_by` | Usuario inspector | Sí |
| `answered_at` | Fecha/hora | Sí |

---

## 22. Creación de inspección

### 22.1 Precondiciones

1. Orden existe.
2. Orden no está cerrada ni cancelada.
3. Usuario tiene permiso `inspections.create`.
4. Tipo de inspección es válido.
5. Entidad inspeccionada existe si se especifica.
6. Si la inspección nace de un servicio contratado, el servicio debe existir.

### 22.2 Acción

```txt
POST /inspections
```

### 22.3 Resultado

Se crea inspección en estado:

```txt
CREATED
```

### 22.4 Efectos

1. Crear registro `inspections`.
2. Crear evento `inspection.created`.
3. Agregar evento al timeline de orden.
4. Notificar al operador o tienda si aplica.
5. Auditar creación si es crítica.

---

## 23. Asignación de inspección

### 23.1 Precondiciones

1. Inspección existe.
2. Inspección está en `CREATED` o `ASSIGNED`.
3. Usuario tiene permiso `inspections.assign`.
4. Inspector o empresa inspectora existe y está activa.
5. Inspector tiene perfil o rol permitido.

### 23.2 Acción

```txt
PATCH /inspections/:id/assign
```

### 23.3 Resultado

Estado:

```txt
ASSIGNED
```

### 23.4 Efectos

1. Guardar inspector asignado.
2. Crear evento `inspection.assigned`.
3. Notificar al inspector.
4. Actualizar timeline de orden.
5. Auditar asignación.

---

## 24. Programación de inspección

### 24.1 Precondiciones

1. Inspección está `ASSIGNED`.
2. Tiene inspector asignado.
3. Fecha/hora válida.
4. Lugar definido o entidad inspeccionada definida.
5. Usuario tiene permiso `inspections.schedule`.

### 24.2 Acción

```txt
PATCH /inspections/:id/schedule
```

### 24.3 Resultado

Estado:

```txt
SCHEDULED
```

### 24.4 Efectos

1. Registrar `scheduled_at` y lugar.
2. Crear evento `inspection.scheduled`.
3. Notificar a inspector, cliente y tienda según visibilidad.
4. Actualizar timeline de orden.

---

## 25. Inicio de inspección

### 25.1 Precondiciones

1. Inspección está `SCHEDULED`.
2. Usuario es inspector asignado o tiene permiso operativo.
3. Inspección no está cancelada ni cerrada.

### 25.2 Acción

```txt
PATCH /inspections/:id/start
```

### 25.3 Resultado

Estado:

```txt
IN_PROGRESS
```

### 25.4 Efectos

1. Registrar `started_at`.
2. Crear evento `inspection.started`.
3. Notificar a partes interesadas.
4. Habilitar ejecución de checklist.

---

## 26. Ejecución de checklist

### 26.1 Precondiciones

1. Inspección está `IN_PROGRESS`.
2. Usuario tiene permiso `inspections.execute`.
3. Usuario es inspector asignado o admin/operador autorizado.
4. Checklist existe si aplica.

### 26.2 Acción

```txt
POST /inspections/:id/checklist-results
```

### 26.3 Reglas

1. Ítems obligatorios deben responderse.
2. Ítems que requieren evidencia deben tener evidencia asociada.
3. Ítems fallidos pueden generar observación o bloqueo.
4. Las respuestas deben guardarse por ítem.
5. Se debe permitir guardar borrador si se define en MVP.

### 26.4 Resultado

La inspección puede permanecer en:

```txt
IN_PROGRESS
```

O pasar a:

```txt
PENDING_EVIDENCE
IN_REVIEW
```

---

## 27. Carga de evidencias

### 27.1 Tipos de evidencias

1. Fotos de carga.
2. Fotos de contenedor.
3. Fotos de sello.
4. Fotos de daño.
5. Documento PDF.
6. Acta referencial.
7. Checklist firmado simple.
8. Video corto, futuro.
9. Observación escrita.

### 27.2 Reglas

1. Evidencias deben asociarse a inspección.
2. Evidencias pueden asociarse a ítems de checklist.
3. Evidencias críticas no deben eliminarse físicamente.
4. Evidencias deben tener usuario creador y fecha.
5. Archivos deben respetar `FILE_TYPES_ALLOWED`.
6. Debe auditarse carga de evidencias críticas.

---

## 28. Envío a revisión

### 28.1 Precondiciones

1. Checklist obligatorio completo.
2. Evidencias requeridas cargadas.
3. Inspector tiene permiso `inspections.execute`.

### 28.2 Resultado

Estado:

```txt
IN_REVIEW
```

### 28.3 Efectos

1. Crear evento `inspection.submitted_for_review`.
2. Notificar a tienda, operador o admin según flujo.
3. Habilitar aprobación, observación o rechazo.

---

## 29. Aprobación de inspección

### 29.1 Precondiciones

1. Inspección está `IN_REVIEW`.
2. Usuario tiene permiso `inspections.approve`.
3. Evidencias obligatorias están completas.
4. No hay ítems críticos rechazados sin justificación.

### 29.2 Resultado

Estado:

```txt
APPROVED
```

Resultado:

```txt
APPROVED
```

### 29.3 Efectos

1. Crear evento `inspection.approved`.
2. Puede liberar bloqueo de orden, TOS, transporte o almacenamiento.
3. Actualizar timeline de orden.
4. Notificar a cliente, tienda e inspector.
5. Auditar aprobación.

---

## 30. Observación de inspección

### 30.1 Precondiciones

1. Inspección está `IN_REVIEW`.
2. Usuario tiene permiso `inspections.approve` o `inspections.review`.
3. Debe existir motivo de observación.

### 30.2 Resultado

Estado:

```txt
OBSERVED
```

Resultado:

```txt
OBSERVED
```

### 30.3 Efectos

1. Crear evento `inspection.observed`.
2. Notificar al inspector.
3. Puede requerir evidencia adicional.
4. Puede mantener bloqueo operativo.
5. Auditar observación.

---

## 31. Rechazo de inspección

### 31.1 Precondiciones

1. Inspección está `IN_REVIEW`.
2. Usuario tiene permiso `inspections.approve`.
3. Debe existir motivo de rechazo.
4. Deben registrarse hallazgos.

### 31.2 Resultado

Estado:

```txt
REJECTED
```

Resultado:

```txt
REJECTED
```

### 31.3 Efectos

1. Crear evento `inspection.rejected`.
2. Puede poner orden en `ON_HOLD`.
3. Puede bloquear contenedor TOS.
4. Puede bloquear inventario.
5. Puede reportar incidencia de transporte.
6. Notificar a cliente, tienda y operador.
7. Auditar rechazo.

---

## 32. Cierre de inspección

### 32.1 Precondiciones

1. Inspección está `APPROVED` o `REJECTED`.
2. Usuario tiene permiso `inspections.close`.
3. Resultado final definido.
4. Evidencias y resumen final completos.

### 32.2 Resultado

Estado:

```txt
CLOSED
```

### 32.3 Efectos

1. Registrar `closed_at`.
2. Crear evento `inspection.closed`.
3. Notificar cierre.
4. Actualizar métricas.
5. Habilitar reportes.

---

## 33. Cancelación de inspección

### 33.1 Precondiciones

1. Inspección no está cerrada.
2. Usuario tiene permiso `inspections.cancel`.
3. Motivo obligatorio.

### 33.2 Resultado

Estado:

```txt
CANCELLED
```

### 33.3 Efectos

1. Crear evento `inspection.cancelled`.
2. Notificar a partes relacionadas.
3. Auditar cancelación.
4. Si era obligatoria para una orden, debe quedar pendiente una nueva inspección o justificación.

---

## 34. Relación con órdenes de servicio

| Evento de inspección | Efecto en orden |
|---|---|
| Inspección creada | Agrega evento al timeline |
| Inspección programada | Informa fecha prevista |
| Inspección en ejecución | Muestra avance operativo |
| Inspección observada | Puede poner orden en `ON_HOLD` |
| Inspección rechazada | Puede poner orden en `ON_HOLD` |
| Inspección aprobada | Puede permitir continuidad |
| Inspección cerrada | Puede habilitar cierre de orden si era requisito |
| Evidencia cargada | Agrega evidencia a orden |

---

## 35. Relación con TOS básico

| Inspección | TOS |
|---|---|
| Inspección de contenedor | Se vincula con `tos_containers` |
| Rechazo crítico | Puede crear `tos_holds` |
| Aprobación | Puede crear liberación `tos_releases` |
| Evidencia fotográfica | Se vincula a contenedor TOS |
| Inspección de gate | Puede relacionarse con `tos_gates` |

---

## 36. Relación con transporte

| Inspección | Transporte |
|---|---|
| Inspección de pickup | Puede validar retiro |
| Inspección de entrega | Puede validar POD |
| Daño detectado | Puede crear incidencia de viaje |
| Rechazo | Puede poner viaje en `INCIDENT` |
| Aprobación de entrega | Puede habilitar cierre de viaje |

---

## 37. Relación con almacenamiento

| Inspección | Almacenamiento |
|---|---|
| Inspección de recepción | Puede validar ingreso de inventario |
| Daño detectado | Puede crear bloqueo `DAMAGE_HOLD` |
| Inspección aprobada | Puede liberar inventario |
| Inspección documental | Puede validar recibo de almacén |
| Evidencia | Se vincula a inventario y orden |

---

## 38. Relación con documentos y evidencias

### 38.1 Documentos frecuentes

1. Inspection Report.
2. Packing List.
3. Bill of Lading.
4. Commercial Invoice.
5. Warehouse Receipt.
6. Delivery Proof.
7. Photo Evidence.
8. Damage Report.
9. Security Note.
10. Other Document.

### 38.2 Evidencias frecuentes

1. Foto del contenedor.
2. Foto del sello.
3. Foto de la carga.
4. Foto de daño.
5. Foto de ubicación.
6. Checklist ejecutado.
7. Acta referencial.
8. Reporte PDF.
9. Observación escrita.
10. Evidencia de entrega.

### 38.3 Reglas

1. Evidencias requeridas deben estar completas antes de aprobar.
2. Evidencias críticas no deben eliminarse físicamente.
3. Documentos rechazados pueden producir resultado observado o rechazado.
4. Cada evidencia debe tener usuario creador, fecha y entidad relacionada.

---

## 39. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `inspections` | Registro principal de inspección |
| `inspection_checklists` | Plantillas de checklist |
| `inspection_checklist_items` | Ítems del checklist |
| `inspection_results` | Resultados por ítem o resultado final |
| `inspection_evidences` | Evidencias de inspección si se usa tabla especializada |
| `evidences` | Evidencias generales del sistema |
| `orders` | Orden relacionada |
| `order_events` | Timeline de orden |
| `services` | Servicio contratado |
| `stores` | Empresa inspectora o tienda |
| `users` | Inspector, cliente, operador |
| `tos_containers` | Contenedor relacionado |
| `tos_holds` | Bloqueos TOS si aplica |
| `inventory_items` | Inventario relacionado |
| `storage_holds` | Bloqueos de almacenamiento si aplica |
| `trips` | Viaje relacionado |
| `documents` | Documentos revisados |
| `audit_logs` | Auditoría |
| `notifications` | Notificaciones |
| `master_catalog_items` | Catálogos de tipos, estados y resultados |

---

## 40. Modelo de tabla `inspections`

```txt
id
uuid
inspection_code
order_id
service_id
store_id
inspector_id
inspection_type_code
checklist_code
related_entity_type
related_entity_id
scheduled_at
location_text
status
result_code
summary
findings
recommendations
started_at
completed_at
closed_at
created_by
created_at
updated_at
deleted_at
```

---

## 41. Modelo de tabla `inspection_checklists`

```txt
id
uuid
checklist_code
checklist_name
inspection_type_code
description
status
created_at
updated_at
```

---

## 42. Modelo de tabla `inspection_checklist_items`

```txt
id
uuid
checklist_id
item_code
question
response_type
is_required
order_index
failure_blocks_operation
requires_evidence
status
created_at
updated_at
```

---

## 43. Modelo de tabla `inspection_results`

```txt
id
uuid
inspection_id
checklist_item_id
response_value
result_code
notes
evidence_id
answered_by
answered_at
created_at
updated_at
```

---

## 44. Modelo de tabla `inspection_evidences`

```txt
id
uuid
inspection_id
evidence_id
checklist_item_id
evidence_type
notes
created_by
created_at
```

---

## 45. Permisos RBAC del módulo de inspecciones

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `inspections.view` | Ver inspecciones según scope | Cliente, tienda, inspector, operador, admin, auditor |
| `inspections.create` | Crear inspección | Tienda, operador, admin |
| `inspections.assign` | Asignar inspector | Operador, tienda autorizada, admin |
| `inspections.schedule` | Programar inspección | Inspector, operador, tienda, admin |
| `inspections.execute` | Ejecutar checklist | Inspector, operador autorizado |
| `inspections.upload_evidence` | Cargar evidencias | Inspector, operador, tienda autorizada |
| `inspections.review` | Revisar inspección | Operador, tienda autorizada, admin |
| `inspections.approve` | Aprobar, observar o rechazar | Operador autorizado, admin |
| `inspections.close` | Cerrar inspección | Inspector, operador, admin |
| `inspections.cancel` | Cancelar inspección | Operador, admin |
| `inspections.manage_checklists` | Administrar checklists | Admin, operador autorizado |
| `inspections.audit` | Ver auditoría de inspecciones | Admin, auditor |

---

## 46. Scopes de datos

| Perfil | Scope | Regla |
|---|---|---|
| Cliente | `own` | Solo inspecciones asociadas a sus órdenes |
| Tienda logística | `store` | Inspecciones asociadas a sus servicios u órdenes |
| Empresa inspectora | `store` | Inspecciones asignadas a su tienda |
| Inspector | `assigned` | Solo inspecciones asignadas |
| Transportista | `assigned` | Inspecciones relacionadas con sus viajes |
| Almacén fiscal | `store` | Inspecciones relacionadas con su inventario/almacén |
| Agente aduanal | `store` | Inspecciones relacionadas con sus operaciones |
| Operador interno | `module` | Inspecciones autorizadas por operación |
| Superadministrador | `global` | Todas las inspecciones |
| Auditor | `global` de consulta | Todas las inspecciones sin modificar |
| Soporte | `module` limitado | Inspecciones asociadas a tickets |

---

## 47. Endpoints Nest.js del módulo de inspecciones

Base path principal:

```txt
/inspections
```

### 47.1 Inspecciones

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/inspections` | Listar inspecciones según scope | `inspections.view` | No |
| GET | `/inspections/:id` | Ver inspección | `inspections.view` | No |
| POST | `/inspections` | Crear inspección | `inspections.create` | `inspection.created` |
| PATCH | `/inspections/:id/assign` | Asignar inspector | `inspections.assign` | `inspection.assigned` |
| PATCH | `/inspections/:id/schedule` | Programar inspección | `inspections.schedule` | `inspection.scheduled` |
| PATCH | `/inspections/:id/start` | Iniciar inspección | `inspections.execute` | `inspection.started` |
| POST | `/inspections/:id/checklist-results` | Guardar respuestas de checklist | `inspections.execute` | `inspection.checklist.updated` |
| POST | `/inspections/:id/evidences` | Cargar evidencia | `inspections.upload_evidence` | `inspection.evidence.uploaded` |
| GET | `/inspections/:id/evidences` | Ver evidencias | `inspections.view` | No |
| PATCH | `/inspections/:id/submit-review` | Enviar a revisión | `inspections.execute` | `inspection.submitted_for_review` |
| PATCH | `/inspections/:id/approve` | Aprobar inspección | `inspections.approve` | `inspection.approved` |
| PATCH | `/inspections/:id/observe` | Observar inspección | `inspections.approve` | `inspection.observed` |
| PATCH | `/inspections/:id/reject` | Rechazar inspección | `inspections.approve` | `inspection.rejected` |
| PATCH | `/inspections/:id/close` | Cerrar inspección | `inspections.close` | `inspection.closed` |
| PATCH | `/inspections/:id/cancel` | Cancelar inspección | `inspections.cancel` | `inspection.cancelled` |
| GET | `/inspections/:id/timeline` | Timeline de inspección | `inspections.view` | No |
| GET | `/inspections/:id/audit` | Auditoría de inspección | `inspections.audit` | `inspection.audit.viewed` |

### 47.2 Checklists

Base path:

```txt
/inspection-checklists
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/inspection-checklists` | Listar checklists | `inspections.view` |
| GET | `/inspection-checklists/:id` | Ver checklist | `inspections.view` |
| POST | `/inspection-checklists` | Crear checklist | `inspections.manage_checklists` |
| PATCH | `/inspection-checklists/:id` | Actualizar checklist | `inspections.manage_checklists` |
| POST | `/inspection-checklists/:id/items` | Crear ítem | `inspections.manage_checklists` |
| PATCH | `/inspection-checklists/:id/items/:itemId` | Actualizar ítem | `inspections.manage_checklists` |

---

## 48. DTOs sugeridos

### 48.1 `CreateInspectionDto`

```json
{
  "orderId": 1001,
  "serviceId": 80,
  "inspectionTypeCode": "PHYSICAL",
  "checklistCode": "CHECKLIST_PHYSICAL_CARGO",
  "relatedEntityType": "INVENTORY_ITEM",
  "relatedEntityId": 1,
  "locationText": "Demo Bonded Warehouse - Zone A",
  "summary": "Physical inspection requested for received cargo"
}
```

### 48.2 `AssignInspectionDto`

```json
{
  "storeId": 40,
  "inspectorId": 25,
  "assignmentNotes": "Assigned to demo inspector"
}
```

### 48.3 `ScheduleInspectionDto`

```json
{
  "scheduledAt": "2026-02-02T10:00:00.000Z",
  "locationText": "Demo Bonded Warehouse - Location A-01",
  "scheduleNotes": "Inspection scheduled after cargo receipt"
}
```

### 48.4 `ChecklistResultDto`

```json
{
  "results": [
    {
      "checklistItemCode": "PHYS-CARGO-001",
      "responseValue": "YES",
      "resultCode": "APPROVED",
      "notes": "Cargo identification matches documents",
      "evidenceId": 1
    },
    {
      "checklistItemCode": "PHYS-CARGO-002",
      "responseValue": "NO",
      "resultCode": "OBSERVED",
      "notes": "Minor packaging damage observed",
      "evidenceId": 2
    }
  ]
}
```

### 48.5 `ApproveInspectionDto`

```json
{
  "resultCode": "APPROVED",
  "summary": "Inspection approved with no critical findings",
  "findings": "Minor packaging mark observed but cargo acceptable",
  "recommendations": "Proceed with storage process",
  "releaseRelatedHold": true
}
```

### 48.6 `ObserveInspectionDto`

```json
{
  "observationReason": "Additional photo evidence is required for damaged packaging",
  "requiredEvidenceTypes": ["PHOTO_EVIDENCE"]
}
```

### 48.7 `RejectInspectionDto`

```json
{
  "resultCode": "REJECTED",
  "rejectionReason": "Cargo quantity does not match packing list",
  "findings": "Quantity mismatch detected during inspection",
  "createRelatedHold": true,
  "holdType": "INSPECTION_HOLD"
}
```

### 48.8 `CloseInspectionDto`

```json
{
  "closingNotes": "Inspection closed after final result was recorded"
}
```

### 48.9 `CreateInspectionChecklistDto`

```json
{
  "checklistCode": "CHECKLIST_PHYSICAL_CARGO",
  "checklistName": "Physical Cargo Inspection Checklist",
  "inspectionTypeCode": "PHYSICAL",
  "description": "Checklist for physical inspection of cargo condition",
  "items": [
    {
      "itemCode": "PHYS-CARGO-001",
      "question": "Does cargo identification match the documents?",
      "responseType": "YES_NO",
      "isRequired": true,
      "orderIndex": 1,
      "failureBlocksOperation": true,
      "requiresEvidence": true
    }
  ]
}
```

---

## 49. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `InspectionDashboardPage` | Vista general del módulo de inspecciones |
| `InspectionListPage` | Listado de inspecciones |
| `InspectionDetailPage` | Detalle de inspección |
| `InspectionForm` | Crear inspección |
| `InspectionAssignmentPanel` | Asignar inspector |
| `InspectionSchedulePanel` | Programar inspección |
| `InspectionStatusBadge` | Estado de inspección |
| `InspectionResultBadge` | Resultado de inspección |
| `InspectionChecklistRunner` | Ejecutar checklist |
| `InspectionChecklistBuilder` | Crear/editar checklist |
| `InspectionEvidencePanel` | Evidencias de inspección |
| `InspectionTimeline` | Timeline de eventos |
| `InspectionReviewPanel` | Aprobar, observar o rechazar |
| `InspectionCloseModal` | Cerrar inspección |
| `InspectionCancelModal` | Cancelar inspección |
| `InspectionRelatedOrderCard` | Orden relacionada |
| `InspectionRelatedEntityCard` | Entidad inspeccionada |
| `InspectionFiltersBar` | Filtros por estado, tipo, inspector, fecha, orden |
| `InspectionReportPreview` | Vista previa de reporte referencial |

---

## 50. Páginas React.js por perfil

### 50.1 Cliente final

| Ruta | Página | Uso |
|---|---|---|
| `/client/orders/:id/inspections` | `ClientOrderInspectionsTab` | Ver inspecciones asociadas a su orden |
| `/client/inspections/:id` | `ClientInspectionDetailPage` | Consulta limitada de resultado y evidencias permitidas |

### 50.2 Inspector

| Ruta | Página | Uso |
|---|---|---|
| `/inspector/inspections` | `InspectorInspectionsPage` | Ver inspecciones asignadas |
| `/inspector/inspections/:id` | `InspectorInspectionDetailPage` | Ejecutar checklist y cargar evidencias |

### 50.3 Tienda / empresa inspectora

| Ruta | Página | Uso |
|---|---|---|
| `/store/inspections` | `StoreInspectionsPage` | Ver inspecciones de la tienda |
| `/store/inspections/:id` | `StoreInspectionDetailPage` | Gestionar inspecciones según permisos |

### 50.4 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/inspections` | `OperatorInspectionsPage` | Coordinar inspecciones |
| `/operator/inspections/:id` | `OperatorInspectionDetailPage` | Revisar, aprobar u observar según permisos |

### 50.5 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/inspections` | `AdminInspectionsPage` | Vista global de inspecciones |
| `/admin/inspections/:id` | `AdminInspectionDetailPage` | Gestión global y auditoría |
| `/admin/inspection-checklists` | `AdminInspectionChecklistsPage` | Administrar checklists |

### 50.6 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/inspections` | `AuditorInspectionsPage` | Consulta de inspecciones |
| `/auditor/inspections/:id` | `AuditorInspectionDetailPage` | Consulta de evidencias, resultados y logs |

---

## 51. Servicios frontend API

Archivo sugerido:

```txt
/src/services/inspectionsApi.ts
```

Funciones mínimas:

```ts
getInspections(params)
getInspectionById(id)
createInspection(payload)
assignInspection(id, payload)
scheduleInspection(id, payload)
startInspection(id, payload)
submitChecklistResults(id, payload)
uploadInspectionEvidence(id, formData)
getInspectionEvidences(id)
submitInspectionForReview(id, payload)
approveInspection(id, payload)
observeInspection(id, payload)
rejectInspection(id, payload)
closeInspection(id, payload)
cancelInspection(id, payload)
getInspectionTimeline(id)
getInspectionAudit(id)
getInspectionChecklists(params)
getInspectionChecklistById(id)
createInspectionChecklist(payload)
updateInspectionChecklist(id, payload)
createInspectionChecklistItem(id, payload)
updateInspectionChecklistItem(id, itemId, payload)
```

---

## 52. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useInspections` | Listar inspecciones con filtros |
| `useInspectionDetail` | Cargar detalle de inspección |
| `useCreateInspection` | Crear inspección |
| `useAssignInspection` | Asignar inspección |
| `useScheduleInspection` | Programar inspección |
| `useStartInspection` | Iniciar inspección |
| `useInspectionChecklist` | Cargar checklist |
| `useSubmitChecklistResults` | Guardar respuestas |
| `useInspectionEvidences` | Evidencias de inspección |
| `useInspectionReviewActions` | Aprobar, observar o rechazar |
| `useCloseInspection` | Cerrar inspección |
| `useInspectionTimeline` | Timeline de inspección |
| `useInspectionPermissions` | Acciones visibles según permisos |
| `useInspectionFilters` | Filtros de inspección |

---

## 53. Validaciones backend obligatorias

### 53.1 Creación de inspección

1. Usuario autenticado.
2. Usuario tiene `inspections.create`.
3. Orden existe.
4. Orden no está cerrada ni cancelada.
5. Tipo de inspección válido.
6. Entidad relacionada existe si se envía.
7. Checklist existe si se envía.
8. Estado inicial debe ser `CREATED`.

### 53.2 Asignación

1. Usuario tiene `inspections.assign`.
2. Inspección no está cerrada ni cancelada.
3. Inspector existe y está activo.
4. Inspector tiene perfil/rol válido.
5. Tienda inspectora existe y está aprobada si aplica.

### 53.3 Programación

1. Inspección está `ASSIGNED`.
2. Fecha/hora válida.
3. Lugar definido.
4. Usuario tiene permiso.

### 53.4 Inicio

1. Inspección está `SCHEDULED`.
2. Usuario es inspector asignado o autorizado.
3. Inspección no está cancelada.

### 53.5 Checklist

1. Inspección está `IN_PROGRESS`.
2. Ítems enviados pertenecen al checklist correcto.
3. Ítems obligatorios respondidos.
4. Evidencia asociada si el ítem la exige.
5. Respuestas con tipo válido.

### 53.6 Aprobación

1. Inspección está `IN_REVIEW`.
2. Usuario tiene `inspections.approve`.
3. Evidencias obligatorias completas.
4. Resultado final válido.
5. Si libera bloqueos, validar permisos sobre entidad relacionada.

### 53.7 Rechazo

1. Inspección está `IN_REVIEW`.
2. Motivo obligatorio.
3. Hallazgos obligatorios.
4. Si crea bloqueo, validar entidad relacionada.
5. Auditar rechazo.

### 53.8 Cierre

1. Inspección está `APPROVED` o `REJECTED`.
2. Resultado final existe.
3. Usuario tiene `inspections.close`.
4. Evidencias requeridas completas.

### 53.9 Cancelación

1. Inspección no está cerrada.
2. Motivo obligatorio.
3. Usuario tiene `inspections.cancel`.

---

## 54. Transacciones de base de datos

Las siguientes operaciones deben ejecutarse en transacción:

1. Crear inspección con evento inicial.
2. Asignar inspección y notificar inspector.
3. Enviar checklist completo a revisión.
4. Aprobar inspección y liberar bloqueo relacionado si aplica.
5. Rechazar inspección y crear bloqueo relacionado si aplica.
6. Cerrar inspección y actualizar orden si aplica.
7. Cancelar inspección obligatoria y generar evento de orden.
8. Cargar evidencia crítica y vincularla a ítem/inspección/orden.

Si falla una parte, la operación debe hacer rollback.

---

## 55. Auditoría del módulo de inspecciones

| Evento | Descripción | Criticidad |
|---|---|---|
| `inspection.created` | Inspección creada | medium |
| `inspection.assigned` | Inspector asignado | medium |
| `inspection.scheduled` | Inspección programada | medium |
| `inspection.started` | Inspección iniciada | medium |
| `inspection.checklist.updated` | Checklist actualizado | medium |
| `inspection.evidence.uploaded` | Evidencia cargada | medium |
| `inspection.submitted_for_review` | Inspección enviada a revisión | medium |
| `inspection.approved` | Inspección aprobada | high |
| `inspection.observed` | Inspección observada | high |
| `inspection.rejected` | Inspección rechazada | high |
| `inspection.closed` | Inspección cerrada | high |
| `inspection.cancelled` | Inspección cancelada | high |
| `inspection.related_hold.created` | Bloqueo relacionado creado | high |
| `inspection.related_hold.released` | Bloqueo relacionado liberado | high |
| `inspection.unauthorized_access` | Intento no autorizado | high |
| `inspection.override.executed` | Corrección excepcional | critical |

---

## 56. Notificaciones del módulo de inspecciones

| Evento | Destinatario | Mensaje sugerido | Ruta |
|---|---|---|---|
| Inspección creada | Operador / tienda | Nueva inspección creada | `/inspections/:id` |
| Inspección asignada | Inspector | Se te asignó una inspección | `/inspector/inspections/:id` |
| Inspección programada | Cliente / tienda / inspector | Inspección programada | `/orders/:id/inspections` |
| Inspección iniciada | Cliente / tienda | La inspección está en ejecución | `/orders/:id/inspections` |
| Evidencia cargada | Cliente / tienda / operador | Nueva evidencia de inspección cargada | `/orders/:id/inspections` |
| Inspección observada | Inspector / tienda | La inspección requiere corrección | `/inspections/:id` |
| Inspección aprobada | Cliente / tienda / operador | Inspección aprobada | `/orders/:id/inspections` |
| Inspección rechazada | Cliente / tienda / operador | Inspección rechazada | `/orders/:id/inspections` |
| Inspección cerrada | Cliente / tienda | Inspección cerrada | `/orders/:id/inspections` |
| Bloqueo creado | Cliente / tienda / operador | Se creó bloqueo por inspección | `/orders/:id` |
| Bloqueo liberado | Cliente / tienda / operador | Se liberó bloqueo por inspección | `/orders/:id` |

---

## 57. Reportes relacionados

| Reporte | Descripción | Perfil |
|---|---|---|
| Inspecciones por estado | Cantidad por estado | Admin, operador, tienda |
| Inspecciones por tipo | Física, documental, seguridad, etc. | Admin, operador |
| Inspecciones por inspector | Carga de trabajo por inspector | Admin, empresa inspectora |
| Inspecciones aprobadas | Resultados satisfactorios por periodo | Admin, tienda |
| Inspecciones rechazadas | Rechazos y motivos | Admin, auditor |
| Inspecciones observadas | Correcciones pendientes | Admin, operador |
| Evidencias pendientes | Inspecciones sin evidencia obligatoria | Operador, inspector |
| Tiempo promedio de inspección | Desde programación hasta cierre | Admin, empresa inspectora |
| Bloqueos por inspección | Bloqueos creados por rechazo/observación | Admin, auditor |
| Inspecciones por orden | Historial de una orden | Cliente, tienda, admin |

---

## 58. Métricas del dashboard de inspecciones

### 58.1 Inspector

1. Inspecciones asignadas.
2. Inspecciones programadas.
3. Inspecciones en ejecución.
4. Inspecciones pendientes de evidencia.
5. Inspecciones enviadas a revisión.
6. Inspecciones aprobadas.
7. Inspecciones observadas.
8. Inspecciones rechazadas.

### 58.2 Cliente

1. Inspecciones asociadas a sus órdenes.
2. Estado actual de inspección.
3. Resultado final visible.
4. Evidencias disponibles.
5. Inspecciones pendientes.
6. Inspecciones con observación.

### 58.3 Tienda / empresa inspectora

1. Inspecciones recibidas.
2. Inspecciones asignadas a inspectores.
3. Inspecciones por estado.
4. Tiempo promedio de ejecución.
5. Tasa de aprobación.
6. Tasa de rechazo.
7. Evidencias pendientes.

### 58.4 Operador interno

1. Inspecciones pendientes de asignación.
2. Inspecciones pendientes de programación.
3. Inspecciones en revisión.
4. Inspecciones observadas.
5. Inspecciones críticas.
6. Bloqueos derivados.

### 58.5 Superadministrador

1. Inspecciones globales.
2. Inspecciones por tipo.
3. Inspecciones por proveedor.
4. Inspecciones por resultado.
5. Bloqueos críticos.
6. Tiempo promedio de cierre.
7. Incidencias por inspección.

### 58.6 Auditor

1. Inspecciones rechazadas.
2. Inspecciones observadas.
3. Cambios críticos.
4. Evidencias cargadas.
5. Bloqueos creados/liberados.
6. Usuarios que registraron eventos.

---

## 59. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Inspección no existe | `RESOURCE_NOT_FOUND` | 404 |
| Orden no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Estado inválido | `INVALID_STATUS_TRANSITION` | 422 |
| Inspector no disponible | `INSPECTOR_NOT_AVAILABLE` | 422 |
| Checklist no existe | `RESOURCE_NOT_FOUND` | 404 |
| Ítem obligatorio sin respuesta | `VALIDATION_ERROR` | 400 |
| Evidencia requerida faltante | `INSPECTION_EVIDENCE_REQUIRED` | 422 |
| Inspección ya cerrada | `BUSINESS_RULE_ERROR` | 422 |
| Inspección cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Entidad relacionada inválida | `VALIDATION_ERROR` | 400 |
| Orden cerrada o cancelada | `BUSINESS_RULE_ERROR` | 422 |
| Archivo inválido | `FILE_UPLOAD_ERROR` | 400 |
| Rechazo sin motivo | `VALIDATION_ERROR` | 400 |

---

## 60. Estados visuales en frontend

| Estado | Badge sugerido | Acción principal |
|---|---|---|
| `CREATED` | Creada | Asignar |
| `ASSIGNED` | Asignada | Programar |
| `SCHEDULED` | Programada | Iniciar |
| `IN_PROGRESS` | En ejecución | Ejecutar checklist |
| `PENDING_EVIDENCE` | Pendiente evidencia | Cargar evidencia |
| `IN_REVIEW` | En revisión | Aprobar / observar / rechazar |
| `OBSERVED` | Observada | Corregir / agregar evidencia |
| `APPROVED` | Aprobada | Cerrar |
| `REJECTED` | Rechazada | Cerrar / crear bloqueo |
| `CLOSED` | Cerrada | Ver reporte |
| `CANCELLED` | Cancelada | Ver motivo |

---

## 61. Reglas UX del módulo de inspecciones

1. El inspector debe ver claramente sus inspecciones asignadas.
2. El checklist debe ser fácil de completar en desktop y mobile.
3. Los ítems obligatorios deben marcarse visualmente.
4. Los ítems que requieren evidencia deben bloquear avance si no tienen archivo.
5. El resultado final debe mostrarse con badge claro.
6. Cliente debe ver una versión simplificada del resultado.
7. Auditor debe ver modo solo lectura.
8. Operador debe ver inspecciones pendientes de revisión.
9. Evidencias deben tener previsualización cuando sea posible.
10. Rechazos y observaciones deben exigir motivo.
11. Acciones no autorizadas deben ocultarse o deshabilitarse.
12. Timeline debe mostrar creación, asignación, programación, ejecución, resultado y cierre.
13. Reporte referencial debe poder visualizarse antes de exportar en fase futura.

---

## 62. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Dashboard inspecciones | `Operaciones > Inspecciones` |
| Listado inspecciones | `Operaciones > Inspecciones > Listado` |
| Detalle inspección | `Operaciones > Inspecciones > INS-2026-001` |
| Checklists | `Operaciones > Inspecciones > Checklists` |
| Cliente inspecciones orden | `Mis órdenes > ORD-2026-001 > Inspecciones` |
| Inspector asignadas | `Inspector > Inspecciones asignadas` |
| Auditor inspecciones | `Auditoría > Inspecciones` |
| Admin inspecciones | `Panel global > Inspecciones` |

---

## 63. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear:

| Entidad | Código / valor | Descripción |
|---|---|---|
| Inspección | `INS-2026-001` | Inspección física demo |
| Orden | `ORD-2026-001` | Orden demo relacionada |
| Inspector | `inspector.demo@example.com` | Usuario inspector demo |
| Checklist | `CHECKLIST_PHYSICAL_CARGO` | Checklist físico demo |
| Resultado | `APPROVED` | Inspección aprobada |
| Evidencia | `EVD-INS-2026-001` | Evidencia fotográfica demo |
| Ítem 1 | `CHK-001` | Carga identificada correctamente |
| Ítem 2 | `CHK-002` | Documentos coinciden con carga |
| Ítem 3 | `CHK-003` | Evidencia fotográfica cargada |

---

## 64. Ejemplo JSON de inspección demo

```json
{
  "inspectionCode": "INS-2026-001",
  "orderCode": "ORD-2026-001",
  "serviceCode": "SER-INS-001-DEMO",
  "storeCode": "STO-INS-001",
  "inspectorEmail": "inspector.demo@example.com",
  "inspectionTypeCode": "PHYSICAL",
  "checklistCode": "CHECKLIST_PHYSICAL_CARGO",
  "relatedEntityType": "INVENTORY_ITEM",
  "relatedEntityCode": "INV-2026-001",
  "scheduledAt": "2026-02-02T10:00:00.000Z",
  "locationText": "Demo Bonded Warehouse - Location A-01",
  "status": "APPROVED",
  "resultCode": "APPROVED",
  "summary": "Physical inspection approved with no critical findings",
  "findings": "Cargo identification and basic condition were verified",
  "recommendations": "Proceed with storage workflow",
  "isDemo": true
}
```

---

## 65. Ejemplo JSON de checklist demo

```json
{
  "checklistCode": "CHECKLIST_PHYSICAL_CARGO",
  "checklistName": "Physical Cargo Inspection Checklist",
  "inspectionTypeCode": "PHYSICAL",
  "description": "Checklist for physical inspection of received cargo",
  "status": "ACTIVE",
  "items": [
    {
      "itemCode": "CHK-001",
      "question": "Does cargo identification match the documents?",
      "responseType": "YES_NO",
      "isRequired": true,
      "orderIndex": 1,
      "failureBlocksOperation": true,
      "requiresEvidence": true
    },
    {
      "itemCode": "CHK-002",
      "question": "Does cargo condition appear acceptable?",
      "responseType": "YES_NO",
      "isRequired": true,
      "orderIndex": 2,
      "failureBlocksOperation": true,
      "requiresEvidence": true
    },
    {
      "itemCode": "CHK-003",
      "question": "Upload photo evidence of inspected cargo",
      "responseType": "PHOTO_REQUIRED",
      "isRequired": true,
      "orderIndex": 3,
      "failureBlocksOperation": false,
      "requiresEvidence": true
    }
  ],
  "isDemo": true
}
```

---

## 66. Ejemplo JSON de resultado demo

```json
{
  "inspectionCode": "INS-2026-001",
  "results": [
    {
      "checklistItemCode": "CHK-001",
      "responseValue": "YES",
      "resultCode": "APPROVED",
      "notes": "Cargo identification matches packing list and order data",
      "evidenceCode": "EVD-INS-2026-001"
    },
    {
      "checklistItemCode": "CHK-002",
      "responseValue": "YES",
      "resultCode": "APPROVED",
      "notes": "No critical visible damage detected",
      "evidenceCode": "EVD-INS-2026-002"
    },
    {
      "checklistItemCode": "CHK-003",
      "responseValue": "UPLOADED",
      "resultCode": "APPROVED",
      "notes": "Photo evidence uploaded",
      "evidenceCode": "EVD-INS-2026-003"
    }
  ],
  "isDemo": true
}
```

---

## 67. Pruebas funcionales mínimas

### 67.1 Inspector

1. Inspector puede ver inspecciones asignadas.
2. Inspector no ve inspecciones no asignadas.
3. Inspector puede iniciar inspección programada.
4. Inspector puede ejecutar checklist.
5. Inspector puede cargar evidencias.
6. Inspector puede enviar inspección a revisión.
7. Inspector puede corregir inspección observada.

### 67.2 Cliente

1. Cliente ve inspecciones asociadas a sus órdenes.
2. Cliente no ve inspecciones de otros clientes.
3. Cliente ve resultado visible.
4. Cliente ve evidencias permitidas.
5. Cliente no puede modificar inspecciones.

### 67.3 Tienda / empresa inspectora

1. Tienda ve inspecciones de su operación.
2. Tienda puede asignar inspector si tiene permiso.
3. Tienda puede programar inspección si tiene permiso.
4. Tienda no ve inspecciones de otra tienda.

### 67.4 Operador interno

1. Operador puede crear inspección.
2. Operador puede asignar inspector.
3. Operador puede revisar inspección.
4. Operador puede aprobar, observar o rechazar si tiene permiso.
5. Operador puede generar bloqueo relacionado.

### 67.5 Auditor

1. Auditor ve inspecciones y resultados.
2. Auditor ve evidencias.
3. Auditor ve logs.
4. Auditor no puede modificar inspecciones.
5. Auditor puede filtrar por usuario, estado, tipo, inspector y fecha.

### 67.6 Admin

1. Admin ve todas las inspecciones.
2. Admin puede administrar checklists.
3. Admin puede corregir casos excepcionales.
4. Admin ve auditoría completa.

---

## 68. Pruebas técnicas API

1. `POST /inspections` crea inspección válida.
2. `POST /inspections` rechaza orden cerrada.
3. `PATCH /inspections/:id/assign` asigna inspector activo.
4. `PATCH /inspections/:id/schedule` programa inspección válida.
5. `PATCH /inspections/:id/start` valida estado programado.
6. `POST /inspections/:id/checklist-results` rechaza ítems obligatorios sin respuesta.
7. `POST /inspections/:id/checklist-results` rechaza evidencia faltante en ítem obligatorio.
8. `POST /inspections/:id/evidences` carga evidencia válida.
9. `PATCH /inspections/:id/submit-review` valida checklist completo.
10. `PATCH /inspections/:id/approve` aprueba inspección en revisión.
11. `PATCH /inspections/:id/reject` exige motivo y hallazgos.
12. `PATCH /inspections/:id/close` cierra inspección aprobada o rechazada.
13. `GET /inspections` respeta scope.
14. `GET /inspections/:id/timeline` devuelve eventos.
15. Eventos críticos generan `audit_logs`.
16. Eventos principales generan `notifications`.

---

## 69. Criterios de aceptación

El módulo de inspecciones se considera aceptado cuando:

1. Se pueden crear inspecciones asociadas a órdenes.
2. Se pueden asociar inspecciones a entidades operativas.
3. Se pueden administrar checklists.
4. Se puede asignar inspector.
5. Se puede programar inspección.
6. Se puede iniciar inspección.
7. Se puede ejecutar checklist.
8. Se pueden cargar evidencias.
9. Se puede enviar inspección a revisión.
10. Se puede aprobar inspección.
11. Se puede observar inspección con motivo.
12. Se puede rechazar inspección con motivo y hallazgos.
13. Inspecciones rechazadas pueden crear bloqueos relacionados.
14. Inspecciones aprobadas pueden liberar bloqueos relacionados.
15. Se puede cerrar inspección.
16. Los eventos de inspección se reflejan en timeline de orden.
17. Las evidencias se pueden cargar y consultar.
18. Los permisos RBAC se respetan.
19. Los scopes de datos se respetan.
20. Cliente solo consulta inspecciones de sus órdenes.
21. Inspector solo consulta inspecciones asignadas.
22. Tienda solo consulta inspecciones de su operación.
23. Auditor consulta sin modificar.
24. Superadministrador consulta globalmente.
25. Eventos críticos generan auditoría.
26. Eventos principales generan notificaciones.
27. Reportes básicos de inspección funcionan.
28. Endpoints están documentados en Swagger.
29. Pruebas funcionales y API pasan.
30. No existe dependencia técnica con Odoo ni con sistemas oficiales externos.

---

## 70. Tareas técnicas para Antigravity

### 70.1 Base de datos

1. Validar tabla `inspections`.
2. Crear o validar tabla `inspection_checklists`.
3. Crear o validar tabla `inspection_checklist_items`.
4. Crear o validar tabla `inspection_results`.
5. Crear o validar tabla `inspection_evidences` si se usa especializada.
6. Crear índices por orden, inspector, tienda, tipo, estado, resultado y fecha.
7. Crear seeds de checklists demo.
8. Crear seeds de inspección demo.
9. Crear seeds de resultados demo.
10. Crear validaciones de transiciones.

### 70.2 Backend Nest.js

1. Crear módulo `inspections`.
2. Crear `InspectionsController`.
3. Crear `InspectionsService`.
4. Crear `InspectionChecklistsController`.
5. Crear `InspectionChecklistsService`.
6. Crear DTOs de inspecciones.
7. Crear DTOs de checklists.
8. Crear endpoints de inspecciones.
9. Crear endpoints de checklists.
10. Crear endpoints de evidencias.
11. Crear integración con órdenes.
12. Crear integración con TOS.
13. Crear integración con transporte.
14. Crear integración con almacenamiento.
15. Crear integración con documentos y evidencias.
16. Crear validaciones de estado.
17. Crear validaciones de checklist.
18. Crear transacciones críticas.
19. Crear auditoría.
20. Crear notificaciones.
21. Crear pruebas unitarias y API.

### 70.3 Frontend React.js

1. Crear `InspectionDashboardPage`.
2. Crear `InspectionListPage`.
3. Crear `InspectionDetailPage`.
4. Crear `InspectionForm`.
5. Crear `InspectionAssignmentPanel`.
6. Crear `InspectionSchedulePanel`.
7. Crear `InspectionChecklistRunner`.
8. Crear `InspectionChecklistBuilder`.
9. Crear `InspectionEvidencePanel`.
10. Crear `InspectionReviewPanel`.
11. Crear `InspectionTimeline`.
12. Crear modales de aprobación, observación, rechazo, cierre y cancelación.
13. Crear filtros por estado, tipo, inspector, orden y fecha.
14. Crear hooks de inspecciones.
15. Crear guards visuales por permisos.
16. Crear estados loading, empty, error y forbidden.
17. Crear vista de reporte referencial.

### 70.4 QA

1. Probar creación de inspección.
2. Probar asignación.
3. Probar programación.
4. Probar inicio.
5. Probar ejecución de checklist.
6. Probar evidencias obligatorias.
7. Probar envío a revisión.
8. Probar aprobación.
9. Probar observación.
10. Probar rechazo.
11. Probar cierre.
12. Probar cancelación.
13. Probar integración con orden.
14. Probar integración con TOS.
15. Probar integración con transporte.
16. Probar integración con almacenamiento.
17. Probar permisos y scopes.
18. Probar timeline.
19. Probar auditoría.
20. Probar notificaciones.
21. Probar reportes.

---

## 71. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto logístico de inspecciones, backend architect Nest.js, frontend architect React.js, database architect MySQL y QA engineer del Marketplace Logístico TOS.

Usa el documento `23_INSPECTION_OPERATION_PLAN.md` como fuente principal para implementar el módulo de inspecciones del marketplace logístico.

Objetivo:
Implementar un módulo de inspecciones que permita crear inspecciones asociadas a órdenes, asignar inspectores, programar inspecciones, ejecutar checklists, cargar evidencias, enviar a revisión, aprobar, observar, rechazar, cerrar, crear o liberar bloqueos relacionados, actualizar timeline de orden, generar auditoría, notificaciones, reportes y métricas.

Reglas obligatorias:
1. Toda inspección del MVP debe asociarse a una orden o entidad operativa autorizada.
2. Toda inspección debe tener tipo, estado y responsable cuando esté asignada.
3. Validar estados y transiciones en backend.
4. No permitir aprobar inspecciones con evidencias obligatorias faltantes.
5. No permitir cerrar inspecciones sin resultado final.
6. Rechazos y observaciones deben tener motivo.
7. Ítems obligatorios del checklist deben responderse.
8. Ítems que requieren evidencia deben tener evidencia asociada.
9. Inspecciones rechazadas pueden crear bloqueos relacionados.
10. Inspecciones aprobadas pueden liberar bloqueos relacionados.
11. Eventos de inspección deben reflejarse en timeline de orden.
12. Eventos críticos deben auditarse.
13. Eventos principales deben generar notificaciones.
14. Evidencias críticas no deben eliminarse físicamente.
15. Respetar scopes de datos: own, store, assigned, module, global.
16. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
17. Respetar `13_API_SPECIFICATION.md`.
18. Respetar `15_MASTER_CATALOGS_MVP.md`.
19. Respetar `19_ORDER_WORKFLOW.md`.
20. Respetar `20_TOS_OPERATION_PLAN.md`.
21. Respetar `21_TRANSPORT_OPERATION_PLAN.md`.
22. Respetar `22_STORAGE_OPERATION_PLAN.md`.
23. No integrar Odoo ni sistemas oficiales externos; usar referencias solo conceptualmente.

Entregables esperados:
1. Tablas y relaciones validadas.
2. DTOs de inspecciones.
3. DTOs de checklists.
4. Endpoints Nest.js.
5. Servicios backend.
6. Validaciones RBAC y scope.
7. Validaciones de transición de estados.
8. Checklists, ítems, resultados y evidencias.
9. Timeline de eventos.
10. Integración con órdenes, TOS, transporte y almacenamiento.
11. Auditoría.
12. Notificaciones.
13. Componentes React.js.
14. Hooks frontend.
15. Pruebas unitarias y API.
16. Seeds demo de inspecciones.
17. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, catálogos, backend, frontend, permisos, checklists, evidencias, auditoría, notificaciones, reportes y QA.
```

---

## 72. Checklist de uso en Antigravity

- [ ] Guardar este documento como `23_INSPECTION_OPERATION_PLAN.md`.
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
- [ ] Validar consistencia con `22_STORAGE_OPERATION_PLAN.md`.
- [ ] Crear DTOs de inspecciones.
- [ ] Crear DTOs de checklists.
- [ ] Crear endpoints de inspecciones.
- [ ] Crear endpoints de checklists.
- [ ] Crear validaciones de estado.
- [ ] Crear validaciones de checklist.
- [ ] Crear validaciones de permisos.
- [ ] Crear timeline de inspecciones.
- [ ] Crear evidencias de inspección.
- [ ] Crear integración con órdenes.
- [ ] Crear integración con TOS.
- [ ] Crear integración con transporte.
- [ ] Crear integración con almacenamiento.
- [ ] Crear auditoría.
- [ ] Crear notificaciones.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo ni sistemas oficiales externos.

---

## 73. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión operativa de inspecciones | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

