# 27_AUDIT_TRAIL_MASTER_PLAN.md

# Documento Maestro del Plan de Auditoría y Trazabilidad
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `27_AUDIT_TRAIL_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro de auditoría, trazabilidad, historial, control interno y cumplimiento operativo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Módulo principal | Auditoría y trazabilidad transversal |
| Módulos relacionados | Usuarios, roles, permisos, tiendas, servicios, cotizaciones, órdenes, TOS, transporte, almacenamiento, inspecciones, pagos, comisiones, documentos, reportes, seguridad, soporte |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de auditoría y trazabilidad** del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es guiar a Antigravity en la implementación de una capa transversal que registre, consulte, filtre, proteja y reporte todos los eventos relevantes del sistema, especialmente aquellos relacionados con operaciones críticas, cambios financieros, modificaciones de permisos, cambios de estado, documentos, evidencias, TOS, transporte, almacenamiento, inspecciones, pagos y comisiones.

La auditoría debe permitir responder preguntas como:

1. ¿Quién hizo una acción?
2. ¿Qué acción realizó?
3. ¿Sobre qué entidad se realizó?
4. ¿Cuándo ocurrió?
5. ¿Desde qué IP o sesión ocurrió?
6. ¿Cuál era el valor anterior?
7. ¿Cuál fue el valor nuevo?
8. ¿Qué motivo se registró?
9. ¿Qué módulo fue afectado?
10. ¿Qué tan crítica fue la acción?
11. ¿Qué usuario o perfil tenía permisos para hacerla?
12. ¿Qué documentos o evidencias quedaron vinculados?
13. ¿Qué impacto tuvo en la orden, pago, comisión u operación logística?

---

## 3. Objetivo general

Diseñar e implementar un sistema de auditoría y trazabilidad transversal, seguro, consultable y escalable, que registre eventos críticos del marketplace logístico y permita reconstruir el historial operativo, financiero, documental y de seguridad de cada entidad relevante del sistema.

---

## 4. Objetivos específicos

1. Definir eventos auditables por módulo.
2. Definir estructura técnica de logs de auditoría.
3. Definir niveles de criticidad.
4. Definir entidades auditables.
5. Definir reglas de captura automática de eventos.
6. Definir reglas de auditoría manual o explícita.
7. Definir historial por entidad.
8. Definir consultas para auditor, admin y operador.
9. Definir protección de logs.
10. Definir retención de auditoría.
11. Definir relación con seguridad.
12. Definir relación con documentos y evidencias.
13. Definir relación con pagos y comisiones.
14. Definir relación con operaciones logísticas.
15. Definir permisos RBAC y scopes.
16. Definir endpoints Nest.js.
17. Definir componentes React.js.
18. Definir validaciones backend.
19. Definir reportes y métricas.
20. Definir casos de error.
21. Definir seeds demo.
22. Definir pruebas funcionales y técnicas.
23. Servir como prompt para Antigravity.

---

## 5. Alcance del módulo de auditoría MVP

El MVP debe cubrir el siguiente flujo transversal:

```txt
Usuario autenticado ejecuta acción crítica
  ↓
Backend valida permiso y scope
  ↓
Backend ejecuta la operación
  ↓
Backend registra audit_log con actor, acción, entidad, valores y contexto
  ↓
Si aplica, registra event específico en timeline de entidad
  ↓
Si aplica, genera security_event
  ↓
Auditor o admin consulta historial
  ↓
Sistema permite filtrar por usuario, módulo, entidad, fecha, criticidad y acción
```

---

## 6. Fuera de alcance del MVP

No forman parte del MVP inicial, salvo decisión posterior:

1. SIEM empresarial completo.
2. Exportación automática a herramientas externas.
3. Firma criptográfica de logs.
4. Blockchain o hash chain de eventos.
5. WORM storage.
6. Integración con SOC externo.
7. Machine learning para detección de fraude.
8. Correlación avanzada de eventos.
9. Alertas en tiempo real por reglas complejas.
10. Análisis forense automatizado.
11. Auditoría certificada ISO/SOC.
12. Integración directa con Odoo audit logs.
13. Auditoría regulatoria oficial.
14. Versionado completo de cada campo de cada tabla no crítica.
15. Replay automático de eventos.

---

## 7. Principios funcionales de auditoría

Antigravity debe respetar los siguientes principios:

1. Toda acción crítica debe auditarse.
2. La auditoría debe generarse en backend.
3. El frontend no debe crear logs críticos como fuente de verdad.
4. Los logs no deben ser modificables por usuarios normales.
5. Los logs no deben eliminarse físicamente desde flujos estándar.
6. Los logs deben incluir actor, acción, entidad, fecha y contexto.
7. Los logs deben incluir valores anteriores y nuevos cuando aplique.
8. Los logs no deben guardar contraseñas, tokens ni secretos.
9. El auditor debe tener acceso de solo lectura.
10. El superadministrador debe poder consultar globalmente.
11. Las tiendas no deben ver auditoría de otras tiendas.
12. Los clientes no deben ver auditoría interna, salvo eventos visibles en timeline propio.
13. Los eventos financieros deben tener criticidad alta o crítica.
14. Los cambios de permisos deben tener criticidad crítica.
15. Los cambios operativos sensibles deben tener trazabilidad completa.
16. La auditoría debe respetar scope de datos.
17. El diseño debe permitir exportaciones futuras.
18. No debe existir dependencia técnica con Odoo.

---

## 8. Diferencia entre auditoría, timeline y eventos de seguridad

| Concepto | Tabla sugerida | Uso |
|---|---|---|
| Auditoría | `audit_logs` | Registro técnico y formal de cambios críticos |
| Timeline operativo | `order_events`, `trip_events`, `tos_events` opcional | Eventos visibles para usuarios en una entidad |
| Eventos de seguridad | `security_events` | Login, accesos denegados, sesiones, roles, permisos |
| Historial de estado | tablas específicas como `payment_status_history` | Cambios de estado de entidades financieras u operativas |
| Evidencias | `evidences` | Archivos o soportes relacionados a eventos |

Regla:

Un mismo evento puede generar:

```txt
1. audit_log interno
2. timeline visible
3. notification
4. security_event si implica seguridad
5. status_history si cambia estado formal
```

---

## 9. Actores del módulo de auditoría

| Actor | Perfil | Participación |
|---|---|---|
| Superadministrador | `PROF-SUP-003` | Consulta global, reportes, exportaciones y eventos críticos |
| Auditor | `PROF-AUD-008` | Consulta global de solo lectura, filtros, evidencias y trazabilidad |
| Operador interno | `PROF-OPE-004` | Consulta auditoría de módulos autorizados |
| Soporte técnico | `PROF-SOP-009` | Consulta limitada vinculada a tickets o incidencias |
| Tienda logística | `PROF-TIE-002` | Consulta eventos visibles de sus operaciones, no auditoría global |
| Cliente final | `PROF-CLI-001` | Consulta timeline propio, no auditoría interna completa |
| Transportista | `PROF-TRA-006` | Consulta timeline de viajes propios/asignados |
| Inspector | `PROF-INS-005` | Consulta timeline de inspecciones asignadas |
| Agente aduanal | `PROF-ADU-007` | Consulta eventos de sus operaciones aduanales |

---

## 10. Entidades auditables principales

| Entidad | Código | Criticidad |
|---|---|---|
| Usuario | `USER` | Crítica |
| Rol | `ROLE` | Crítica |
| Permiso | `PERMISSION` | Crítica |
| Tienda | `STORE` | Alta |
| Servicio | `SERVICE` | Alta |
| Cotización | `QUOTATION` | Alta |
| Orden | `ORDER` | Crítica |
| Documento | `DOCUMENT` | Alta |
| Evidencia | `EVIDENCE` | Alta |
| Pago | `PAYMENT` | Crítica |
| Comisión | `COMMISSION` | Crítica |
| Regla de comisión | `COMMISSION_RULE` | Crítica |
| Contenedor TOS | `TOS_CONTAINER` | Alta |
| Gate TOS | `TOS_GATE` | Alta |
| Movimiento TOS | `TOS_MOVE` | Alta |
| Bloqueo TOS | `TOS_HOLD` | Alta |
| Viaje | `TRIP` | Alta |
| Vehículo | `VEHICLE` | Media |
| Conductor | `DRIVER` | Media |
| Almacén | `WAREHOUSE` | Alta |
| Inventario | `INVENTORY_ITEM` | Alta |
| Despacho | `DISPATCH` | Alta |
| Inspección | `INSPECTION` | Alta |
| Checklist | `INSPECTION_CHECKLIST` | Media |
| Reporte | `REPORT` | Alta |
| Configuración | `SETTING` | Crítica |
| Sesión | `SESSION` | Alta |

---

## 11. Niveles de criticidad

| Nivel | Código | Uso |
|---|---|---|
| Bajo | `LOW` | Eventos informativos o no críticos |
| Medio | `MEDIUM` | Cambios operativos normales |
| Alto | `HIGH` | Cambios importantes con impacto operativo/documental |
| Crítico | `CRITICAL` | Cambios financieros, seguridad, permisos, cierre, despacho o pagos |

---

## 12. Tipos de acción auditables

| Acción | Código | Descripción |
|---|---|---|
| Crear | `CREATE` | Creación de entidad |
| Actualizar | `UPDATE` | Modificación de datos |
| Eliminar lógico | `SOFT_DELETE` | Desactivación o eliminación lógica |
| Restaurar | `RESTORE` | Restauración de registro |
| Cambiar estado | `STATUS_CHANGE` | Cambio formal de estado |
| Aprobar | `APPROVE` | Aprobación crítica |
| Rechazar | `REJECT` | Rechazo con motivo |
| Cancelar | `CANCEL` | Cancelación de proceso |
| Cerrar | `CLOSE` | Cierre operativo |
| Confirmar | `CONFIRM` | Confirmación financiera u operativa |
| Asignar | `ASSIGN` | Asignación de usuario, rol, vehículo, inspector, etc. |
| Revocar | `REVOKE` | Revocación de sesión, permiso o acceso |
| Subir archivo | `UPLOAD` | Carga de documento/evidencia |
| Descargar archivo | `DOWNLOAD` | Descarga de documento sensible |
| Exportar | `EXPORT` | Exportación de reporte |
| Login | `LOGIN` | Inicio de sesión |
| Logout | `LOGOUT` | Cierre de sesión |
| Acceso denegado | `FORBIDDEN_ACCESS` | Intento no autorizado |
| Violación de scope | `SCOPE_VIOLATION` | Intento de acceder a datos fuera del alcance |
| Ajuste | `ADJUST` | Ajuste financiero u operativo |
| Override | `OVERRIDE` | Corrección excepcional |

---

## 13. Modelo de evento auditable

Todo evento auditable debe intentar capturar:

1. Usuario actor.
2. Perfil del usuario.
3. Rol activo si aplica.
4. Acción realizada.
5. Módulo afectado.
6. Entidad afectada.
7. ID de la entidad.
8. Código de la entidad si existe.
9. Valores anteriores.
10. Valores nuevos.
11. Motivo o razón si aplica.
12. IP.
13. User agent.
14. Request ID.
15. Session ID si aplica.
16. Severidad.
17. Fecha y hora.
18. Resultado de la operación.
19. Mensaje descriptivo.
20. Metadata adicional controlada.

---

## 14. Tabla principal `audit_logs`

Modelo sugerido:

```txt
id
uuid
audit_code
actor_user_id
actor_profile_code
actor_role_code
module_code
action_code
entity_type
entity_id
entity_code
old_values
new_values
change_reason
request_id
session_id
ip_address
user_agent
severity
status
metadata
created_at
```

---

## 15. Estados de audit log

| Estado | Código | Descripción |
|---|---|---|
| Registrado | `RECORDED` | Log creado correctamente |
| Fallido | `FAILED` | Intento de auditoría falló parcialmente |
| Protegido | `PROTECTED` | Log crítico protegido contra alteración estándar |
| Archivado | `ARCHIVED` | Log movido a histórico o almacenamiento de archivo futuro |

---

## 16. Tabla `entity_change_history`

Para entidades que requieran historial más detallado de cambios por campo, se puede usar una tabla complementaria.

```txt
id
uuid
audit_log_id
entity_type
entity_id
field_name
old_value
new_value
created_at
```

Uso recomendado:

1. Cambios de estado.
2. Cambios de montos.
3. Cambios de permisos.
4. Cambios de reglas de comisión.
5. Cambios de documentos validados.
6. Cambios de ubicación o despacho.

---

## 17. Tabla `audit_log_links`

Permite vincular un evento de auditoría con documentos, evidencias u otras entidades.

```txt
id
uuid
audit_log_id
related_entity_type
related_entity_id
related_entity_code
relation_type
created_at
```

Ejemplos de relación:

```txt
ORDER
PAYMENT
DOCUMENT
EVIDENCE
COMMISSION
TOS_CONTAINER
TRIP
INVENTORY_ITEM
INSPECTION
```

---

## 18. Tabla `audit_exports`

Para registrar exportaciones de auditoría o reportes sensibles.

```txt
id
uuid
export_code
exported_by
export_type
filters_used
file_document_id
row_count
status
created_at
```

---

## 19. Eventos auditables por módulo: autenticación y seguridad

| Evento | Código | Criticidad | Tabla principal |
|---|---|---|---|
| Login exitoso | `auth.login.success` | LOW | `security_events` |
| Login fallido | `auth.login.failed` | MEDIUM | `security_events` |
| Logout | `auth.logout` | LOW | `security_events` |
| Refresh token revocado | `auth.refresh_token.revoked` | MEDIUM | `security_events` |
| Reset solicitado | `auth.password.reset.requested` | MEDIUM | `security_events` |
| Password cambiado | `auth.password.reset.completed` | HIGH | `audit_logs` |
| Usuario bloqueado | `security.user.locked` | HIGH | `audit_logs` |
| Usuario desbloqueado | `security.user.unlocked` | HIGH | `audit_logs` |
| Acceso denegado | `security.forbidden_access` | HIGH | `security_events` |
| Violación de scope | `security.scope_violation` | HIGH | `security_events` |
| Rol asignado | `security.role_assigned` | CRITICAL | `audit_logs` |
| Rol removido | `security.role_removed` | CRITICAL | `audit_logs` |
| Permiso modificado | `security.permission_changed` | CRITICAL | `audit_logs` |

---

## 20. Eventos auditables: tiendas y servicios

| Evento | Código | Criticidad |
|---|---|---|
| Tienda creada | `store.created` | MEDIUM |
| Tienda aprobada | `store.approved` | HIGH |
| Tienda rechazada | `store.rejected` | HIGH |
| Tienda suspendida | `store.suspended` | CRITICAL |
| Tienda reactivada | `store.reactivated` | HIGH |
| Servicio creado | `service.created` | MEDIUM |
| Servicio publicado | `service.published` | HIGH |
| Servicio despublicado | `service.unpublished` | HIGH |
| Tarifa de servicio modificada | `service.price_changed` | HIGH |
| Servicio eliminado lógicamente | `service.soft_deleted` | HIGH |

---

## 21. Eventos auditables: cotizaciones

| Evento | Código | Criticidad |
|---|---|---|
| Cotización creada | `quotation.created` | MEDIUM |
| Cotización respondida | `quotation.responded` | HIGH |
| Cotización actualizada | `quotation.updated` | MEDIUM |
| Cotización aprobada | `quotation.approved` | HIGH |
| Cotización rechazada | `quotation.rejected` | MEDIUM |
| Cotización vencida | `quotation.expired` | MEDIUM |
| Cotización convertida a orden | `quotation.converted_to_order` | HIGH |
| Documento de cotización cargado | `quotation.document.uploaded` | MEDIUM |

---

## 22. Eventos auditables: órdenes

| Evento | Código | Criticidad |
|---|---|---|
| Orden creada | `order.created` | HIGH |
| Orden iniciada | `order.started` | MEDIUM |
| Estado de orden cambiado | `order.status_changed` | HIGH |
| Orden en espera | `order.on_hold` | HIGH |
| Orden cerrada | `order.closed` | CRITICAL |
| Orden cancelada | `order.cancelled` | CRITICAL |
| Tarea creada | `order.task.created` | LOW |
| Tarea actualizada | `order.task.updated` | LOW |
| Evidencia de orden cargada | `order.evidence.uploaded` | MEDIUM |
| Documento de orden validado | `order.document.validated` | HIGH |
| Override de orden | `order.override.executed` | CRITICAL |

---

## 23. Eventos auditables: TOS

| Evento | Código | Criticidad |
|---|---|---|
| Patio creado | `tos.yard.created` | MEDIUM |
| Contenedor registrado | `tos.container.created` | MEDIUM |
| Gate-in registrado | `tos.gate_in.created` | HIGH |
| Gate-out registrado | `tos.gate_out.created` | CRITICAL |
| Movimiento TOS registrado | `tos.container.moved` | HIGH |
| Contenedor bloqueado | `tos.container.blocked` | CRITICAL |
| Contenedor liberado | `tos.container.released` | CRITICAL |
| Evidencia TOS cargada | `tos.evidence.uploaded` | MEDIUM |
| Corrección excepcional TOS | `tos.override.executed` | CRITICAL |

---

## 24. Eventos auditables: transporte

| Evento | Código | Criticidad |
|---|---|---|
| Viaje creado | `trip.created` | MEDIUM |
| Viaje asignado | `trip.assigned` | MEDIUM |
| Viaje programado | `trip.scheduled` | MEDIUM |
| Retiro iniciado | `trip.pickup_started` | MEDIUM |
| Retiro completado | `trip.pickup_completed` | HIGH |
| Viaje en tránsito | `trip.in_transit` | MEDIUM |
| Retraso reportado | `trip.delayed` | MEDIUM |
| Incidencia reportada | `trip.incident_reported` | HIGH |
| Entrega completada | `trip.delivered` | HIGH |
| Viaje cerrado | `trip.closed` | HIGH |
| Viaje cancelado | `trip.cancelled` | HIGH |
| Evidencia de transporte cargada | `trip.evidence.uploaded` | MEDIUM |

---

## 25. Eventos auditables: almacenamiento

| Evento | Código | Criticidad |
|---|---|---|
| Almacén creado | `warehouse.created` | MEDIUM |
| Ubicación creada | `storage.location.created` | MEDIUM |
| Inventario registrado | `storage.inventory.created` | MEDIUM |
| Mercancía recibida | `storage.received` | HIGH |
| Mercancía ubicada | `storage.putaway` | MEDIUM |
| Movimiento interno registrado | `storage.moved` | HIGH |
| Inventario bloqueado | `storage.inventory.blocked` | CRITICAL |
| Inventario liberado | `storage.inventory.released` | CRITICAL |
| Mercancía despachada | `storage.dispatched` | CRITICAL |
| Evidencia de almacenamiento cargada | `storage.evidence.uploaded` | MEDIUM |
| Corrección excepcional almacenamiento | `storage.override.executed` | CRITICAL |

---

## 26. Eventos auditables: inspecciones

| Evento | Código | Criticidad |
|---|---|---|
| Inspección creada | `inspection.created` | MEDIUM |
| Inspección asignada | `inspection.assigned` | MEDIUM |
| Inspección programada | `inspection.scheduled` | MEDIUM |
| Inspección iniciada | `inspection.started` | MEDIUM |
| Checklist actualizado | `inspection.checklist.updated` | MEDIUM |
| Evidencia de inspección cargada | `inspection.evidence.uploaded` | MEDIUM |
| Inspección aprobada | `inspection.approved` | HIGH |
| Inspección observada | `inspection.observed` | HIGH |
| Inspección rechazada | `inspection.rejected` | CRITICAL |
| Inspección cerrada | `inspection.closed` | HIGH |
| Bloqueo creado por inspección | `inspection.related_hold.created` | CRITICAL |
| Bloqueo liberado por inspección | `inspection.related_hold.released` | CRITICAL |

---

## 27. Eventos auditables: pagos

| Evento | Código | Criticidad |
|---|---|---|
| Pago creado | `payment.created` | HIGH |
| Pago enviado | `payment.submitted` | HIGH |
| Comprobante cargado | `payment.receipt.uploaded` | HIGH |
| Pago en revisión | `payment.in_review` | MEDIUM |
| Pago confirmado | `payment.confirmed` | CRITICAL |
| Pago rechazado | `payment.rejected` | HIGH |
| Pago cancelado | `payment.cancelled` | HIGH |
| Pago reembolsado | `payment.refunded` | CRITICAL |
| Pago conciliado referencialmente | `payment.reconciled` | CRITICAL |
| Monto de pago cambiado | `payment.amount.changed` | CRITICAL |
| Método de pago cambiado | `payment.method.changed` | HIGH |

---

## 28. Eventos auditables: comisiones

| Evento | Código | Criticidad |
|---|---|---|
| Regla de comisión creada | `commission.rule.created` | CRITICAL |
| Regla de comisión actualizada | `commission.rule.updated` | CRITICAL |
| Regla de comisión activada | `commission.rule.activated` | HIGH |
| Regla de comisión pausada | `commission.rule.paused` | HIGH |
| Comisión calculada | `commission.calculated` | HIGH |
| Comisión confirmada | `commission.confirmed` | HIGH |
| Comisión cancelada | `commission.cancelled` | HIGH |
| Ajuste de comisión creado | `commission.adjustment.created` | CRITICAL |
| Ajuste de comisión aprobado | `commission.adjustment.approved` | CRITICAL |
| Liquidación referencial creada | `commission.settlement.created` | HIGH |
| Liquidación marcada como liquidada | `commission.settlement.settled` | CRITICAL |
| Comisión revertida | `commission.reversed` | CRITICAL |

---

## 29. Eventos auditables: documentos y evidencias

| Evento | Código | Criticidad |
|---|---|---|
| Documento cargado | `document.uploaded` | MEDIUM |
| Documento validado | `document.validated` | HIGH |
| Documento rechazado | `document.rejected` | HIGH |
| Documento reemplazado | `document.replaced` | HIGH |
| Documento descargado | `document.downloaded` | MEDIUM/HIGH |
| Documento eliminado lógicamente | `document.soft_deleted` | HIGH |
| Evidencia cargada | `evidence.uploaded` | MEDIUM |
| Evidencia vinculada | `evidence.linked` | MEDIUM |
| Evidencia eliminada lógicamente | `evidence.soft_deleted` | HIGH |

---

## 30. Eventos auditables: reportes y exportaciones

| Evento | Código | Criticidad |
|---|---|---|
| Reporte consultado | `report.viewed` | LOW/MEDIUM |
| Reporte financiero consultado | `report.financial.viewed` | HIGH |
| Reporte exportado | `report.exported` | HIGH |
| Auditoría exportada | `audit.exported` | CRITICAL |
| Filtros sensibles usados | `report.sensitive_filter.used` | MEDIUM |

---

## 31. Reglas de captura automática

El backend debe registrar auditoría automática para:

1. Acciones decoradas como críticas.
2. Cambios de estado.
3. Cambios de monto.
4. Cambios de permisos.
5. Confirmaciones financieras.
6. Rechazos con motivo.
7. Cancelaciones con motivo.
8. Cargas y validaciones de documentos.
9. Accesos denegados.
10. Exportaciones.
11. Overrides o correcciones excepcionales.

---

## 32. Decorator sugerido para auditoría en Nest.js

Ejemplo conceptual:

```txt
@Audit({
  module: 'payments',
  action: 'payment.confirmed',
  entity: 'PAYMENT',
  severity: 'CRITICAL',
  captureOldValues: true,
  captureNewValues: true
})
```

Reglas:

1. El decorator no reemplaza la lógica de negocio.
2. El servicio debe enviar contexto adicional si aplica.
3. Eventos críticos deben auditarse aunque falle la notificación.
4. Si la auditoría falla en una acción crítica, debe evaluarse rollback según el tipo de operación.

---

## 33. Relación con timelines operativos

No todos los audit logs deben ser visibles en timelines del usuario.

| Evento | Audit log | Timeline visible |
|---|---|---|
| Pago confirmado | Sí | Sí, para cliente/tienda |
| Rol asignado | Sí | No |
| Acceso denegado | Sí/security_event | No |
| Gate-out | Sí | Sí, en orden/TOS |
| Comisión ajustada | Sí | No para cliente, sí para admin/tienda si aplica |
| Orden cerrada | Sí | Sí |
| Documento descargado | Sí si sensible | No |
| Inspección aprobada | Sí | Sí |

---

## 34. Relación con notificaciones

Eventos auditables críticos pueden generar notificaciones, pero auditoría y notificación son responsabilidades distintas.

Regla:

```txt
La auditoría registra el hecho.
La notificación informa a usuarios autorizados.
```

Ejemplos:

1. Pago confirmado: audit log + notificación al cliente y tienda.
2. Rol cambiado: audit log + notificación al admin/auditor si se define.
3. Gate-out: audit log + timeline + notificación.
4. Comisión ajustada: audit log + notificación a admin/tienda.

---

## 35. Relación con documentos y evidencias

Cuando un evento crítico dependa de un documento o evidencia, debe vincularse.

Ejemplos:

1. Pago confirmado vincula comprobante.
2. Inspección aprobada vincula evidencias.
3. Despacho vincula evidencia de salida.
4. Entrega de transporte vincula POD.
5. Documento rechazado vincula documento y motivo.

Regla:

Usar `audit_log_links` para relaciones adicionales cuando un audit log tenga más de una entidad relacionada.

---

## 36. Protección e integridad de logs

Reglas obligatorias:

1. Usuarios normales no pueden modificar logs.
2. El sistema no debe permitir delete físico desde UI.
3. El superadministrador puede consultar, no editar logs.
4. El auditor puede consultar, no editar logs.
5. Si se requiere eliminación legal futura, debe hacerse con procedimiento especial y nuevo audit log.
6. No guardar contraseñas, tokens, secretos o archivos completos en logs.
7. `old_values` y `new_values` deben filtrar campos sensibles.
8. Logs críticos deben tener request ID.
9. Logs deben crearse con timestamp del servidor.
10. Logs deben resistir errores parciales lo mejor posible.

---

## 37. Campos sensibles que no deben registrarse

No registrar en texto claro:

```txt
password
password_hash
access_token
refresh_token
reset_token
api_key
secret
private_key
credit_card_number
cvv
bank_account_full_number
full_raw_payment_provider_secret_response
```

Si se necesita referencia, registrar versión enmascarada.

Ejemplo:

```txt
****1234
```

---

## 38. Permisos RBAC del módulo de auditoría

| Permiso | Descripción | Perfiles típicos |
|---|---|---|
| `audit.view` | Ver auditoría según scope | Admin, auditor, operador autorizado |
| `audit.view_global` | Ver auditoría global | Superadministrador, auditor |
| `audit.view_financial` | Ver auditoría financiera | Admin, auditor |
| `audit.view_security` | Ver eventos de seguridad | Admin, auditor |
| `audit.view_operational` | Ver auditoría operativa | Admin, operador, auditor |
| `audit.export` | Exportar auditoría | Admin, auditor autorizado |
| `audit.link_evidence` | Vincular evidencia a evento | Sistema, admin |
| `audit.archive` | Archivar logs, futuro | Admin técnico autorizado |
| `audit.readonly` | Consulta sin modificación | Auditor |

---

## 39. Scopes de auditoría

| Perfil | Scope | Regla |
|---|---|---|
| Superadministrador | `global` | Puede consultar toda la auditoría |
| Auditor | `global_readonly` | Puede consultar toda la auditoría sin modificar |
| Operador interno | `module` | Puede consultar auditoría de módulos autorizados |
| Tienda logística | `store_limited` | Puede consultar eventos visibles de sus operaciones, no logs internos globales |
| Cliente final | `own_timeline` | Solo timeline visible de sus órdenes, no audit logs internos |
| Soporte técnico | `support_limited` | Solo logs vinculados a tickets autorizados |
| Inspector | `assigned_timeline` | Timeline de inspecciones asignadas |
| Transportista | `assigned_timeline` | Timeline de viajes asignados |

---

## 40. Endpoints Nest.js del módulo de auditoría

Base path principal:

```txt
/audit
```

### 40.1 Auditoría general

| Método | Endpoint | Descripción | Permiso | Auditoría |
|---|---|---|---|---|
| GET | `/audit/logs` | Listar audit logs con filtros | `audit.view` | Opcional `audit.logs.viewed` |
| GET | `/audit/logs/:id` | Ver detalle de audit log | `audit.view` | Opcional |
| GET | `/audit/entities/:entityType/:entityId` | Auditoría de una entidad | `audit.view` | Opcional |
| GET | `/audit/users/:userId` | Auditoría por usuario actor | `audit.view_global` | Sí |
| GET | `/audit/modules/:moduleCode` | Auditoría por módulo | `audit.view` | Opcional |
| GET | `/audit/security-events` | Eventos de seguridad | `audit.view_security` | Sí |
| GET | `/audit/financial-events` | Eventos financieros | `audit.view_financial` | Sí |
| POST | `/audit/export` | Exportar auditoría | `audit.export` | `audit.exported` |

### 40.2 Historial por entidad crítica

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/orders/:id/audit` | Auditoría de orden | `audit.view` |
| GET | `/payments/:id/audit` | Auditoría de pago | `audit.view_financial` |
| GET | `/commissions/:id/audit` | Auditoría de comisión | `audit.view_financial` |
| GET | `/tos/containers/:id/audit` | Auditoría TOS | `audit.view_operational` |
| GET | `/trips/:id/audit` | Auditoría transporte | `audit.view_operational` |
| GET | `/storage/inventory/:id/audit` | Auditoría inventario | `audit.view_operational` |
| GET | `/inspections/:id/audit` | Auditoría inspección | `audit.view_operational` |
| GET | `/documents/:id/audit` | Auditoría documental | `audit.view` |

---

## 41. DTOs sugeridos

### 41.1 `AuditLogFilterDto`

```json
{
  "moduleCode": "payments",
  "actionCode": "payment.confirmed",
  "entityType": "PAYMENT",
  "entityId": 100,
  "actorUserId": 10,
  "severity": "CRITICAL",
  "dateFrom": "2026-02-01",
  "dateTo": "2026-02-28",
  "page": 1,
  "limit": 25
}
```

### 41.2 `CreateAuditLogDto`

```json
{
  "actorUserId": 10,
  "actorProfileCode": "PROF-SUP-003",
  "actorRoleCode": "SUPERADMIN",
  "moduleCode": "payments",
  "actionCode": "payment.confirmed",
  "entityType": "PAYMENT",
  "entityId": 100,
  "entityCode": "PAY-2026-001",
  "oldValues": {
    "status": "IN_REVIEW"
  },
  "newValues": {
    "status": "CONFIRMED"
  },
  "changeReason": "Receipt verified and amount matches order total",
  "severity": "CRITICAL"
}
```

### 41.3 `AuditExportDto`

```json
{
  "exportType": "FINANCIAL_AUDIT",
  "filters": {
    "moduleCode": "payments",
    "severity": "CRITICAL",
    "dateFrom": "2026-02-01",
    "dateTo": "2026-02-28"
  },
  "format": "CSV",
  "exportReason": "Monthly financial audit review"
}
```

### 41.4 `EntityAuditQueryDto`

```json
{
  "entityType": "ORDER",
  "entityId": 1001,
  "includeLinkedEntities": true,
  "includeFieldChanges": true
}
```

---

## 42. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `AuditDashboardPage` | Vista general de auditoría |
| `AuditLogListPage` | Listado de logs |
| `AuditLogDetailPage` | Detalle de un log |
| `AuditFiltersBar` | Filtros por módulo, usuario, acción, fecha, severidad |
| `AuditSeverityBadge` | Badge de criticidad |
| `AuditActionBadge` | Badge de acción |
| `AuditEntityCard` | Entidad auditada |
| `AuditActorCard` | Usuario actor |
| `AuditDiffViewer` | Comparador de valores anteriores/nuevos |
| `AuditTimeline` | Timeline de auditoría por entidad |
| `EntityAuditPanel` | Panel embebido en detalle de entidad |
| `FinancialAuditPage` | Auditoría financiera |
| `SecurityAuditPage` | Auditoría de seguridad |
| `OperationalAuditPage` | Auditoría operativa |
| `AuditExportModal` | Exportar auditoría |
| `AuditLinkedEvidencePanel` | Evidencias/documentos vinculados |
| `AuditEmptyState` | Estado sin logs |
| `AuditForbiddenState` | Estado sin permisos |

---

## 43. Páginas React.js por perfil

### 43.1 Superadministrador

| Ruta | Página | Uso |
|---|---|---|
| `/admin/audit` | `AdminAuditDashboardPage` | Vista global de auditoría |
| `/admin/audit/logs` | `AdminAuditLogsPage` | Listado global de logs |
| `/admin/audit/logs/:id` | `AdminAuditLogDetailPage` | Detalle de log |
| `/admin/audit/financial` | `AdminFinancialAuditPage` | Auditoría financiera |
| `/admin/audit/security` | `AdminSecurityAuditPage` | Auditoría de seguridad |
| `/admin/audit/operational` | `AdminOperationalAuditPage` | Auditoría operativa |

### 43.2 Auditor

| Ruta | Página | Uso |
|---|---|---|
| `/auditor/audit` | `AuditorAuditDashboardPage` | Dashboard de auditoría |
| `/auditor/audit/logs` | `AuditorAuditLogsPage` | Consulta global de logs |
| `/auditor/audit/logs/:id` | `AuditorAuditLogDetailPage` | Detalle de log |
| `/auditor/audit/financial` | `AuditorFinancialAuditPage` | Consulta financiera |
| `/auditor/audit/security` | `AuditorSecurityAuditPage` | Consulta de seguridad |
| `/auditor/audit/operational` | `AuditorOperationalAuditPage` | Consulta operativa |

### 43.3 Operador interno

| Ruta | Página | Uso |
|---|---|---|
| `/operator/audit` | `OperatorAuditPage` | Auditoría de módulos autorizados |
| `/operator/audit/logs/:id` | `OperatorAuditLogDetailPage` | Detalle permitido |

### 43.4 Embebido en módulos

| Ruta / Ubicación | Componente | Uso |
|---|---|---|
| Detalle de orden | `EntityAuditPanel` | Auditoría de orden |
| Detalle de pago | `EntityAuditPanel` | Auditoría de pago |
| Detalle de comisión | `EntityAuditPanel` | Auditoría de comisión |
| Detalle TOS | `EntityAuditPanel` | Auditoría TOS |
| Detalle inspección | `EntityAuditPanel` | Auditoría de inspección |

---

## 44. Servicios frontend API

Archivo sugerido:

```txt
/src/services/auditApi.ts
```

Funciones mínimas:

```ts
getAuditLogs(params)
getAuditLogById(id)
getEntityAudit(entityType, entityId, params)
getUserAudit(userId, params)
getModuleAudit(moduleCode, params)
getSecurityEvents(params)
getFinancialAuditEvents(params)
getOperationalAuditEvents(params)
exportAuditLogs(payload)
getOrderAudit(orderId)
getPaymentAudit(paymentId)
getCommissionAudit(commissionId)
getTosContainerAudit(containerId)
getTripAudit(tripId)
getInventoryAudit(inventoryId)
getInspectionAudit(inspectionId)
getDocumentAudit(documentId)
```

---

## 45. Hooks frontend sugeridos

| Hook | Uso |
|---|---|
| `useAuditLogs` | Listar logs con filtros |
| `useAuditLogDetail` | Cargar detalle de log |
| `useEntityAudit` | Auditoría por entidad |
| `useUserAudit` | Auditoría por usuario |
| `useModuleAudit` | Auditoría por módulo |
| `useSecurityAudit` | Eventos de seguridad |
| `useFinancialAudit` | Eventos financieros |
| `useOperationalAudit` | Eventos operativos |
| `useAuditExport` | Exportar auditoría |
| `useAuditPermissions` | Acciones visibles según permisos |
| `useAuditFilters` | Manejo de filtros |

---

## 46. Validaciones backend obligatorias

### 46.1 Crear audit log

1. Debe existir actor si la acción requiere usuario.
2. Acción debe tener código válido.
3. Módulo debe tener código válido.
4. Entidad debe tener tipo válido.
5. Severidad debe ser válida.
6. No registrar campos sensibles.
7. Timestamp debe ser del servidor.
8. Si la acción es crítica, debe incluir request ID si está disponible.
9. Si hay motivo obligatorio, debe registrarse.

### 46.2 Consultar audit logs

1. Usuario autenticado.
2. Usuario tiene `audit.view` o permiso específico.
3. Aplicar scope.
4. Auditor tiene solo lectura.
5. Paginación obligatoria.
6. Filtros validados.
7. No devolver campos sensibles.
8. No permitir búsqueda sin límites.

### 46.3 Exportar auditoría

1. Usuario tiene `audit.export`.
2. Debe indicar motivo de exportación.
3. Debe registrar `audit.exported`.
4. Debe aplicar filtros y scope.
5. Debe limitar volumen si aplica.
6. Exportaciones financieras requieren permiso reforzado.
7. Archivo exportado debe protegerse como documento sensible.

### 46.4 Vincular evidencia

1. Audit log existe.
2. Evidencia/documento existe.
3. Usuario o sistema tiene permiso para vincular.
4. Entidad relacionada debe ser válida.
5. Registrar relación en `audit_log_links`.

---

## 47. Transacciones de auditoría

Deben ser transaccionales cuando la auditoría sea parte indispensable del evento:

1. Confirmar pago + audit log.
2. Ajustar comisión + audit log.
3. Asignar rol + audit log.
4. Suspender tienda + audit log.
5. Gate-out + audit log.
6. Despachar inventario + audit log.
7. Rechazar inspección + audit log.
8. Cerrar orden + audit log.

Regla:

Si la auditoría crítica falla en una acción crítica, el sistema debe:

```txt
1. Hacer rollback, o
2. Registrar fallback en security_events/error log interno, según criticidad y diseño técnico.
```

Para MVP, se recomienda rollback en pagos, comisiones, roles, permisos, despachos, gate-out y cierre de órdenes.

---

## 48. Reportes de auditoría

| Reporte | Descripción | Perfil |
|---|---|---|
| Eventos críticos | Logs HIGH y CRITICAL | Admin, auditor |
| Auditoría financiera | Pagos, comisiones, reembolsos, ajustes | Admin, auditor |
| Auditoría operativa | Órdenes, TOS, transporte, almacenamiento, inspecciones | Admin, auditor, operador |
| Auditoría de seguridad | Login, roles, permisos, accesos denegados | Admin, auditor |
| Auditoría por usuario | Acciones ejecutadas por usuario | Admin, auditor |
| Auditoría por tienda | Eventos relacionados con una tienda | Admin, auditor, tienda limitada |
| Auditoría por orden | Historial completo de orden | Admin, auditor, operador |
| Auditoría documental | Documentos cargados, validados, rechazados, descargados | Admin, auditor |
| Exportaciones | Registro de exportaciones de reportes | Admin, auditor |
| Overrides | Correcciones excepcionales | Admin, auditor |

---

## 49. Métricas del dashboard de auditoría

### 49.1 Superadministrador

1. Eventos críticos de hoy.
2. Eventos críticos por módulo.
3. Pagos confirmados.
4. Comisiones ajustadas.
5. Roles modificados.
6. Accesos denegados.
7. Gate-outs registrados.
8. Despachos registrados.
9. Inspecciones rechazadas.
10. Exportaciones realizadas.
11. Usuarios con más acciones críticas.
12. Tiendas con más eventos críticos.

### 49.2 Auditor

1. Eventos por severidad.
2. Eventos por usuario actor.
3. Eventos por entidad.
4. Cambios financieros.
5. Cambios de seguridad.
6. Cambios operativos críticos.
7. Exportaciones.
8. Overrides.
9. Eventos sin motivo cuando debería existir.
10. Eventos fuera de horario, futuro.

### 49.3 Operador interno

1. Eventos operativos de su módulo.
2. Órdenes cerradas/canceladas.
3. Bloqueos y liberaciones.
4. Incidencias de transporte.
5. Inspecciones observadas/rechazadas.
6. Despachos y movimientos críticos.

---

## 50. Filtros mínimos de auditoría

El listado de auditoría debe permitir filtrar por:

1. Fecha desde.
2. Fecha hasta.
3. Usuario actor.
4. Perfil actor.
5. Módulo.
6. Acción.
7. Entidad.
8. ID de entidad.
9. Código de entidad.
10. Severidad.
11. Estado.
12. IP.
13. Tienda relacionada, si aplica.
14. Orden relacionada, si aplica.
15. Pago relacionado, si aplica.

---

## 51. Casos de error

| Caso | Código de error | Respuesta esperada |
|---|---|---|
| Audit log no existe | `RESOURCE_NOT_FOUND` | 404 |
| Usuario sin permiso | `FORBIDDEN` | 403 |
| Token ausente | `UNAUTHORIZED` | 401 |
| Violación de scope | `SCOPE_VIOLATION` | 403 |
| Filtro inválido | `VALIDATION_ERROR` | 400 |
| Rango de fechas inválido | `VALIDATION_ERROR` | 400 |
| Exportación sin motivo | `REASON_REQUIRED` | 400 |
| Exportación demasiado grande | `EXPORT_LIMIT_EXCEEDED` | 422 |
| Entidad inválida | `VALIDATION_ERROR` | 400 |
| Campo sensible detectado | `SENSITIVE_FIELD_NOT_ALLOWED` | 400 |
| Error al crear audit log crítico | `AUDIT_LOG_REQUIRED_FAILED` | 500 o rollback |

---

## 52. Estados visuales en frontend

| Severidad | Badge sugerido | Uso visual |
|---|---|---|
| `LOW` | Bajo | Información normal |
| `MEDIUM` | Medio | Cambio operativo menor |
| `HIGH` | Alto | Cambio importante |
| `CRITICAL` | Crítico | Cambio financiero, seguridad u operación sensible |

| Estado | Badge sugerido |
|---|---|
| `RECORDED` | Registrado |
| `FAILED` | Fallido |
| `PROTECTED` | Protegido |
| `ARCHIVED` | Archivado |

---

## 53. Reglas UX del módulo de auditoría

1. El auditor debe ver una interfaz de solo lectura.
2. El admin debe poder filtrar rápidamente eventos críticos.
3. El detalle del log debe mostrar actor, acción, entidad, fecha, IP y severidad.
4. Cambios de valores deben visualizarse en formato comparativo.
5. Campos sensibles deben aparecer ocultos o no aparecer.
6. Los eventos financieros deben estar claramente identificados.
7. Los eventos de seguridad deben estar separados o filtrables.
8. La auditoría por entidad debe poder abrirse desde el detalle de cada módulo.
9. Exportar debe pedir motivo.
10. Exportar debe mostrar advertencia de datos sensibles.
11. No mostrar botones de edición o eliminación de logs.
12. Las rutas de auditoría deben mostrar `ForbiddenState` cuando aplique.
13. El sistema debe paginar listados grandes.

---

## 54. Breadcrumbs sugeridos

| Pantalla | Breadcrumb |
|---|---|
| Admin auditoría | `Panel global > Auditoría` |
| Logs globales | `Panel global > Auditoría > Logs` |
| Detalle log | `Panel global > Auditoría > Logs > AUD-2026-001` |
| Auditoría financiera | `Panel global > Auditoría > Financiera` |
| Auditoría seguridad | `Panel global > Auditoría > Seguridad` |
| Auditoría operativa | `Panel global > Auditoría > Operativa` |
| Auditor auditoría | `Auditoría > Logs` |
| Auditoría de orden | `Órdenes > ORD-2026-001 > Auditoría` |
| Auditoría de pago | `Pagos > PAY-2026-001 > Auditoría` |

---

## 55. Retención de auditoría

### 55.1 Reglas MVP

1. Logs críticos no se eliminan desde la UI.
2. Logs deben conservarse durante todo el MVP.
3. Puede existir archivado futuro.
4. Exportaciones deben registrarse.
5. Borrado físico solo por proceso técnico autorizado futuro.

### 55.2 Retención sugerida futura

| Tipo de evento | Retención sugerida |
|---|---|
| Seguridad crítica | 5 años o política empresarial |
| Financiera crítica | 5 a 7 años según política |
| Operativa crítica | 3 a 5 años |
| Eventos bajos | 1 a 2 años |
| Exportaciones | 5 años |

---

## 56. Seeds demo recomendados

Según `17_INITIAL_SEEDS_PLAN.md`, se recomienda crear eventos demo:

| Código | Evento | Entidad |
|---|---|---|
| `AUD-2026-001` | Pago confirmado | `PAYMENT` |
| `AUD-2026-002` | Comisión confirmada | `COMMISSION` |
| `AUD-2026-003` | Orden cerrada | `ORDER` |
| `AUD-2026-004` | Gate-out registrado | `TOS_CONTAINER` |
| `AUD-2026-005` | Inventario despachado | `INVENTORY_ITEM` |
| `AUD-2026-006` | Inspección aprobada | `INSPECTION` |
| `AUD-2026-007` | Rol asignado | `USER` |
| `AUD-2026-008` | Reporte exportado | `REPORT` |

---

## 57. Ejemplo JSON de audit log demo

```json
{
  "auditCode": "AUD-2026-001",
  "actorEmail": "admin.demo@example.com",
  "actorProfileCode": "PROF-SUP-003",
  "actorRoleCode": "SUPERADMIN",
  "moduleCode": "payments",
  "actionCode": "payment.confirmed",
  "entityType": "PAYMENT",
  "entityCode": "PAY-2026-001",
  "oldValues": {
    "status": "IN_REVIEW",
    "confirmedAt": null
  },
  "newValues": {
    "status": "CONFIRMED",
    "confirmedAt": "2026-02-01T16:00:00.000Z"
  },
  "changeReason": "Receipt verified and amount matches order total",
  "requestId": "REQ-2026-0001",
  "ipAddress": "127.0.0.1",
  "severity": "CRITICAL",
  "status": "RECORDED",
  "isDemo": true
}
```

---

## 58. Ejemplo JSON de auditoría de comisión

```json
{
  "auditCode": "AUD-2026-002",
  "actorEmail": "system@marketplace.local",
  "actorProfileCode": "SYSTEM",
  "actorRoleCode": "SYSTEM",
  "moduleCode": "commissions",
  "actionCode": "commission.confirmed",
  "entityType": "COMMISSION",
  "entityCode": "COM-2026-001",
  "oldValues": {
    "status": "PENDING"
  },
  "newValues": {
    "status": "CONFIRMED",
    "commissionAmount": 45.00,
    "providerNetAmount": 405.00
  },
  "changeReason": "Payment PAY-2026-001 confirmed",
  "severity": "HIGH",
  "status": "RECORDED",
  "isDemo": true
}
```

---

## 59. Ejemplo JSON de exportación de auditoría

```json
{
  "exportCode": "AEXP-2026-001",
  "exportedByEmail": "auditor.demo@example.com",
  "exportType": "FINANCIAL_AUDIT",
  "filtersUsed": {
    "moduleCode": "payments",
    "severity": "CRITICAL",
    "dateFrom": "2026-02-01",
    "dateTo": "2026-02-28"
  },
  "rowCount": 25,
  "status": "COMPLETED",
  "isDemo": true
}
```

---

## 60. Pruebas funcionales mínimas

### 60.1 Superadministrador

1. Admin puede ver dashboard de auditoría.
2. Admin puede filtrar logs por módulo.
3. Admin puede filtrar logs por usuario.
4. Admin puede ver logs financieros.
5. Admin puede ver logs de seguridad.
6. Admin puede ver logs operativos.
7. Admin puede exportar auditoría si tiene permiso.
8. Admin no puede editar logs desde UI.

### 60.2 Auditor

1. Auditor puede consultar logs globales.
2. Auditor puede ver detalle de log.
3. Auditor puede ver old_values y new_values filtrados.
4. Auditor puede filtrar por severidad.
5. Auditor puede filtrar por entidad.
6. Auditor puede exportar si tiene permiso.
7. Auditor no puede modificar entidades desde auditoría.
8. Auditor no puede eliminar logs.

### 60.3 Operador interno

1. Operador ve logs de módulos autorizados.
2. Operador no ve auditoría financiera si no tiene permiso.
3. Operador no ve auditoría global de seguridad si no tiene permiso.
4. Operador puede ver auditoría embebida de órdenes autorizadas.

### 60.4 Tienda logística

1. Tienda no accede a auditoría global.
2. Tienda puede ver timeline operativo de sus órdenes.
3. Tienda no ve logs internos de otras tiendas.
4. Tienda no ve cambios de roles o permisos.

### 60.5 Cliente final

1. Cliente no accede a auditoría interna.
2. Cliente ve timeline propio de órdenes.
3. Cliente no ve logs de pagos internos más allá del estado visible.

---

## 61. Pruebas técnicas API

1. `GET /audit/logs` requiere autenticación.
2. `GET /audit/logs` requiere permiso `audit.view`.
3. `GET /audit/logs` aplica scope.
4. `GET /audit/logs/:id` devuelve detalle sin campos sensibles.
5. `GET /audit/entities/ORDER/:id` devuelve auditoría de entidad.
6. `GET /audit/users/:userId` requiere permiso global.
7. `GET /audit/financial-events` requiere permiso financiero.
8. `POST /audit/export` exige motivo.
9. `POST /audit/export` genera audit log `audit.exported`.
10. Confirmar pago genera audit log crítico.
11. Ajustar comisión genera audit log crítico.
12. Gate-out genera audit log crítico.
13. Despachar inventario genera audit log crítico.
14. Asignar rol genera audit log crítico.
15. `old_values` y `new_values` no contienen password ni tokens.
16. Listados tienen paginación.
17. Filtros inválidos devuelven 400.

---

## 62. Criterios de aceptación

El módulo de auditoría se considera aceptado cuando:

1. Existe tabla `audit_logs` funcional.
2. Las acciones críticas generan audit logs.
3. Los cambios financieros generan auditoría crítica.
4. Los cambios de permisos generan auditoría crítica.
5. Los eventos TOS críticos generan auditoría.
6. Los despachos generan auditoría.
7. Los cierres y cancelaciones de órdenes generan auditoría.
8. Se pueden consultar logs por módulo.
9. Se pueden consultar logs por usuario actor.
10. Se pueden consultar logs por entidad.
11. Se pueden filtrar logs por fecha y severidad.
12. Se pueden ver old_values y new_values sin campos sensibles.
13. Se puede ver auditoría embebida por entidad autorizada.
14. Auditor tiene acceso de solo lectura.
15. Superadministrador tiene consulta global.
16. Operador solo ve módulos autorizados.
17. Tienda no ve auditoría global.
18. Cliente no ve auditoría interna.
19. Exportaciones requieren permiso y motivo.
20. Exportaciones generan audit log.
21. Logs no se pueden editar desde UI.
22. Logs no se pueden borrar físicamente desde UI.
23. Endpoints están documentados en Swagger.
24. Pruebas funcionales y API pasan.
25. No existe dependencia técnica con Odoo.

---

## 63. Tareas técnicas para Antigravity

### 63.1 Base de datos

1. Crear o validar tabla `audit_logs`.
2. Crear o validar tabla `entity_change_history`.
3. Crear o validar tabla `audit_log_links`.
4. Crear o validar tabla `audit_exports`.
5. Crear índices por usuario actor.
6. Crear índices por módulo.
7. Crear índices por acción.
8. Crear índices por entidad.
9. Crear índices por fecha.
10. Crear índices por severidad.
11. Crear seeds demo de audit logs.
12. Crear constraints básicas de integridad.

### 63.2 Backend Nest.js

1. Crear módulo `audit`.
2. Crear `AuditController`.
3. Crear `AuditService`.
4. Crear `AuditLoggerService` transversal.
5. Crear decorator `@Audit()`.
6. Crear interceptor opcional de auditoría.
7. Crear sanitizador de campos sensibles.
8. Crear endpoints de consulta.
9. Crear endpoints por entidad.
10. Crear endpoint de exportación.
11. Crear validaciones RBAC y scope.
12. Integrar auditoría con pagos.
13. Integrar auditoría con comisiones.
14. Integrar auditoría con órdenes.
15. Integrar auditoría con TOS.
16. Integrar auditoría con transporte.
17. Integrar auditoría con almacenamiento.
18. Integrar auditoría con inspecciones.
19. Integrar auditoría con documentos.
20. Crear pruebas unitarias y API.

### 63.3 Frontend React.js

1. Crear `AuditDashboardPage`.
2. Crear `AuditLogListPage`.
3. Crear `AuditLogDetailPage`.
4. Crear `AuditFiltersBar`.
5. Crear `AuditSeverityBadge`.
6. Crear `AuditActionBadge`.
7. Crear `AuditDiffViewer`.
8. Crear `AuditTimeline`.
9. Crear `EntityAuditPanel`.
10. Crear `FinancialAuditPage`.
11. Crear `SecurityAuditPage`.
12. Crear `OperationalAuditPage`.
13. Crear `AuditExportModal`.
14. Crear hooks de auditoría.
15. Crear guards visuales por permisos.
16. Crear estados loading, empty, error y forbidden.
17. Crear vistas por perfil.

### 63.4 QA

1. Probar creación de audit logs críticos.
2. Probar filtros.
3. Probar auditoría por entidad.
4. Probar auditoría por usuario.
5. Probar permisos.
6. Probar scopes.
7. Probar sanitización de campos sensibles.
8. Probar exportación con motivo.
9. Probar que exportación genera auditoría.
10. Probar que logs no se editan.
11. Probar que logs no se eliminan desde UI.
12. Probar auditoría de pagos.
13. Probar auditoría de comisiones.
14. Probar auditoría de roles.
15. Probar auditoría de TOS.
16. Probar auditoría de almacenamiento.
17. Probar auditoría de inspecciones.

---

## 64. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto de auditoría, backend architect Nest.js, frontend architect React.js, database architect MySQL, security engineer y QA engineer del Marketplace Logístico TOS.

Usa el documento `27_AUDIT_TRAIL_MASTER_PLAN.md` como fuente principal para implementar el módulo transversal de auditoría y trazabilidad del marketplace logístico.

Objetivo:
Implementar un sistema de auditoría que registre acciones críticas del sistema, permita consultar logs por módulo, usuario, entidad, fecha y severidad, proteja campos sensibles, respete permisos y scopes, permita auditoría financiera, operativa y de seguridad, habilite vistas de solo lectura para auditores, integre auditoría por entidad en módulos críticos y registre exportaciones de auditoría.

Reglas obligatorias:
1. La auditoría se genera en backend.
2. El frontend no es fuente de verdad de auditoría crítica.
3. Toda acción crítica debe generar audit log.
4. Pagos, comisiones, roles, permisos, órdenes, TOS, almacenamiento e inspecciones deben auditar eventos críticos.
5. Los audit logs deben registrar actor, acción, entidad, módulo, severidad, fecha y contexto.
6. Registrar old_values y new_values cuando aplique.
7. No registrar contraseñas, tokens, secrets ni datos sensibles prohibidos.
8. Auditoría debe respetar RBAC y scopes.
9. Auditor tiene modo solo lectura.
10. Superadministrador tiene consulta global.
11. Tienda no ve auditoría de otra tienda.
12. Cliente no ve auditoría interna, solo timeline visible.
13. Exportar auditoría requiere permiso y motivo.
14. Exportar auditoría genera un audit log.
15. Logs no deben editarse ni borrarse físicamente desde UI.
16. Acciones críticas deben considerar rollback si la auditoría falla.
17. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
18. Respetar `13_API_SPECIFICATION.md`.
19. Respetar `19_ORDER_WORKFLOW.md`.
20. Respetar `24_PAYMENTS_MASTER_PLAN.md`.
21. Respetar `25_COMMISSIONS_MASTER_PLAN.md`.
22. Respetar `26_SECURITY_MASTER_PLAN.md`.
23. No integrar Odoo; usarlo solo como referencia conceptual si aplica.

Entregables esperados:
1. Tabla `audit_logs`.
2. Tabla `entity_change_history`.
3. Tabla `audit_log_links`.
4. Tabla `audit_exports`.
5. Módulo Audit Nest.js.
6. `AuditLoggerService` transversal.
7. Decorator `@Audit()`.
8. Sanitizador de campos sensibles.
9. Endpoints de consulta.
10. Endpoints por entidad.
11. Endpoint de exportación.
12. Validaciones RBAC y scope.
13. Integración con módulos críticos.
14. Componentes React.js de auditoría.
15. `AuditDiffViewer`.
16. `EntityAuditPanel`.
17. Dashboard de auditoría.
18. Pruebas unitarias y API.
19. Seeds demo de auditoría.
20. Documentación Swagger.

Antes de implementar, genera un plan por fases: base de datos, backend audit service, integración con módulos críticos, frontend dashboard, filtros, exportación, seguridad, scopes, pruebas y hardening final.
```

---

## 65. Checklist de uso en Antigravity

- [ ] Guardar este documento como `27_AUDIT_TRAIL_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
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
- [ ] Crear tablas de auditoría.
- [ ] Crear módulo Audit.
- [ ] Crear AuditLoggerService.
- [ ] Crear decorator de auditoría.
- [ ] Crear sanitizador de campos sensibles.
- [ ] Crear endpoints de auditoría.
- [ ] Crear endpoint de exportación.
- [ ] Integrar con pagos.
- [ ] Integrar con comisiones.
- [ ] Integrar con órdenes.
- [ ] Integrar con TOS.
- [ ] Integrar con transporte.
- [ ] Integrar con almacenamiento.
- [ ] Integrar con inspecciones.
- [ ] Integrar con seguridad.
- [ ] Crear componentes React.
- [ ] Crear pruebas.
- [ ] Confirmar que no existe integración real con Odoo.

---

## 66. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión de auditoría | Sí |
| Pendiente de revisión de seguridad | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

