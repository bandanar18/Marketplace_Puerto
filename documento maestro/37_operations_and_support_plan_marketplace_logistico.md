# 37_OPERATIONS_AND_SUPPORT_PLAN.md

# Documento Maestro de Operaciones y Soporte
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `37_OPERATIONS_AND_SUPPORT_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Plan maestro de operación, soporte, monitoreo, mantenimiento, escalamiento, continuidad y atención de incidentes |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | Operación post-demo, post-MVP y base para operación productiva futura |
| Estilo visual del producto | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, dashboards y diseño responsive |
| Documentos base principales | `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `35_QA_MASTER_TEST_PLAN.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `32_ANTIGRAVITY_PROMPTS_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `35_QA_MASTER_TEST_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de operaciones y soporte** para el Marketplace Logístico TOS.

Su propósito es establecer cómo debe operarse, monitorearse, mantenerse y soportarse la plataforma después de la demo temprana, durante el MVP completo y en una futura etapa productiva.

El documento cubre:

1. Operación diaria del marketplace.
2. Soporte a clientes finales.
3. Soporte a tiendas logísticas.
4. Soporte a superadministradores.
5. Soporte a operadores internos.
6. Soporte a transportistas.
7. Soporte a almacenes fiscales.
8. Soporte a inspectores.
9. Gestión de incidentes.
10. Gestión de tickets.
11. Niveles de soporte L1, L2 y L3.
12. Monitoreo técnico.
13. Monitoreo funcional.
14. Monitoreo financiero.
15. Monitoreo de seguridad.
16. Monitoreo de auditoría.
17. Backups.
18. Restauración.
19. Mantenimiento preventivo.
20. Mantenimiento correctivo.
21. Mantenimiento evolutivo.
22. SLAs y tiempos de respuesta.
23. Escalamiento de incidentes.
24. Continuidad operativa.
25. Gestión de cambios.
26. Runbooks operativos.
27. Checklist de soporte.
28. Prompts para Antigravity.

---

## 3. Objetivo general

Definir un modelo integral de operación y soporte para garantizar que el Marketplace Logístico TOS pueda funcionar de manera estable, segura, auditable y mantenible, permitiendo atender incidencias, usuarios, datos, pagos, comisiones, documentos, operaciones logísticas, reportes y módulos críticos con procedimientos claros.

---

## 4. Objetivos específicos

1. Definir roles operativos.
2. Definir niveles de soporte.
3. Definir flujos de atención de incidentes.
4. Definir categorías de tickets.
5. Definir SLAs por severidad.
6. Definir operación diaria del marketplace.
7. Definir monitoreo técnico.
8. Definir monitoreo funcional.
9. Definir monitoreo de seguridad.
10. Definir monitoreo financiero.
11. Definir monitoreo de auditoría.
12. Definir rutinas de backup.
13. Definir rutinas de restauración.
14. Definir mantenimiento preventivo.
15. Definir mantenimiento correctivo.
16. Definir mantenimiento evolutivo.
17. Definir gestión de usuarios y roles.
18. Definir gestión de tiendas y servicios.
19. Definir soporte a cotizaciones, órdenes y pagos.
20. Definir soporte a módulos operativos TOS, transporte, almacenamiento e inspecciones.
21. Definir procedimientos de escalamiento.
22. Definir runbooks operativos.
23. Definir métricas de soporte.
24. Definir checklist de cierre de incidentes.
25. Servir como documento operativo para Antigravity y para el equipo de soporte.

---

## 5. Alcance del plan de operaciones y soporte

El plan cubre la operación de los siguientes módulos:

| Módulo | Cubierto por operación | Cubierto por soporte |
|---|---|---|
| Auth y usuarios | Sí | Sí |
| Roles y permisos | Sí | Sí |
| Catálogos maestros | Sí | Sí |
| Tiendas logísticas | Sí | Sí |
| Servicios marketplace | Sí | Sí |
| Home y búsqueda | Sí | Sí |
| Cotizaciones | Sí | Sí |
| Órdenes | Sí | Sí |
| Pagos manuales | Sí | Sí |
| Comisiones | Sí | Sí |
| Documentos y evidencias | Sí | Sí |
| Auditoría | Sí | Sí |
| Notificaciones | Sí | Sí |
| Reportes y dashboards | Sí | Sí |
| TOS | Sí | Sí |
| Transporte | Sí | Sí |
| Almacenamiento | Sí | Sí |
| Inspecciones | Sí | Sí |
| Soporte e incidencias | Sí | Sí |
| Swagger y documentación | Sí | Sí, técnico |
| Seeds demo | Sí, ambientes no productivos | Sí, técnico |
| Backups y restauración | Sí | Sí, técnico |

---

## 6. Fuera de alcance operativo del MVP

No forman parte de la operación MVP inicial:

1. Integración real con Odoo.
2. Pasarela de pago real.
3. Split payment real automático.
4. BI externo.
5. Integración con aduanas gubernamentales.
6. Integración TOS externa productiva.
7. Mobile app nativa.
8. Mesa de ayuda omnicanal avanzada.
9. Call center formal.
10. Monitoreo APM empresarial avanzado.
11. Disaster recovery multi-región.
12. Alta disponibilidad productiva completa.
13. Facturación fiscal electrónica real.
14. Firma digital legal avanzada.

Regla:

```txt
Todo elemento fuera de alcance puede documentarse como fase futura, pero no debe prometerse como activo en el MVP.
```

---

## 7. Principios rectores de operación

1. Toda operación crítica debe ser trazable.
2. Toda acción sensible debe respetar permisos y scopes.
3. Todo incidente crítico debe tener responsable y tiempo de respuesta.
4. Todo problema financiero debe tratarse como prioridad alta o crítica.
5. Toda modificación de rol, permiso, pago, comisión o estado crítico debe generar auditoría.
6. Todo cambio productivo debe registrarse en `34_CHANGELOG_AND_DECISION_LOG.md`.
7. Todo bug debe registrarse siguiendo `35_QA_MASTER_TEST_PLAN.md`.
8. Todo reporte exportado debe generar audit log.
9. Toda carga o descarga documental debe validar permisos.
10. El soporte no debe saltarse controles de seguridad.
11. El superadministrador no debe eliminar evidencia crítica sin proceso formal.
12. Los datos de clientes y tiendas deben mantenerse aislados por scope.
13. Los cálculos financieros deben mantenerse en backend.
14. El soporte L1 no debe modificar pagos, comisiones ni roles críticos.
15. El soporte L2 puede diagnosticar flujos funcionales.
16. El soporte L3 puede revisar código, API, base de datos y logs técnicos.
17. Ningún incidente debe cerrarse sin evidencia de resolución.
18. Ningún incidente crítico debe cerrarse sin retest.

---

# SECCIÓN A — MODELO OPERATIVO GENERAL

---

## 8. Actores operativos internos

| Actor operativo | Código | Responsabilidad principal |
|---|---|---|
| Superadministrador | `OPS-SUP-001` | Control global, configuración, aprobación, auditoría y monitoreo |
| Operador interno | `OPS-OPE-002` | Supervisión diaria de operaciones, órdenes, documentos y excepciones |
| Soporte L1 | `OPS-L1-003` | Atención inicial, orientación, clasificación y tickets simples |
| Soporte L2 | `OPS-L2-004` | Diagnóstico funcional, seguimiento de flujos y resolución operativa |
| Soporte L3 técnico | `OPS-L3-005` | Backend, frontend, base de datos, logs, errores y correcciones técnicas |
| Administrador financiero | `OPS-FIN-006` | Revisión de pagos, comisiones, estados financieros y reportes |
| Auditor interno | `OPS-AUD-007` | Revisión de audit logs, trazabilidad y cumplimiento operativo |
| Administrador de catálogos | `OPS-CAT-008` | Mantenimiento de catálogos maestros y parámetros funcionales |
| Administrador de contenido | `OPS-CONT-009` | Revisión de tiendas, servicios, fichas y contenido visible |
| Administrador de seguridad | `OPS-SEC-010` | Roles, permisos, sesiones, incidentes de seguridad y hardening |

---

## 9. Actores soportados por la plataforma

| Actor soportado | Necesidad de soporte |
|---|---|
| Cliente final | Registro, búsqueda, cotización, órdenes, pagos, documentos y seguimiento |
| Tienda logística | Registro de tienda, servicios, cotizaciones, órdenes, pagos, comisiones |
| Transportista | Viajes, estados, incidencias, POD y evidencias |
| Almacén fiscal | Inventario, recepción, ubicación, bloqueo, despacho y evidencias |
| Inspector | Asignaciones, checklists, evidencias, resultados y observaciones |
| Agente aduanal | Servicios aduanales, documentos, órdenes y seguimiento |
| Operador interno | Excepciones, órdenes, documentos, TOS y reportes |
| Auditor | Reportes, logs, trazabilidad y exportaciones |
| Superadministrador | Configuración, aprobaciones, monitoreo global y soporte escalado |

---

## 10. Modelo de niveles de soporte

| Nivel | Nombre | Responsabilidad | Ejemplos |
|---|---|---|---|
| L0 | Autoservicio | Ayuda, FAQs, guías y mensajes del sistema | Guía de cómo solicitar cotización |
| L1 | Soporte inicial | Recepción, clasificación, dudas simples, orientación | Usuario no sabe cargar documento |
| L2 | Soporte funcional | Diagnóstico de flujo, revisión de permisos funcionales, validación de estados | Cotización no cambia de estado |
| L3 | Soporte técnico | Revisión de logs, API, DB, bugs, despliegues, correcciones | Endpoint devuelve 500 |
| L4 | Arquitectura / desarrollo | Cambios estructurales, hotfixes, refactor, decisiones técnicas | Error crítico en cálculo de comisiones |
| Auditoría | Revisión independiente | Validar trazabilidad y cumplimiento | Revisión de pago confirmado |

---

## 11. Responsabilidades por nivel de soporte

| Actividad | L0 | L1 | L2 | L3 | L4 | Auditoría |
|---|---|---|---|---|---|---|
| Responder dudas básicas | Sí | Sí | No | No | No | No |
| Crear ticket | Sí | Sí | Sí | Sí | Sí | No |
| Clasificar severidad | No | Sí | Sí | Sí | Sí | No |
| Revisar datos visibles del usuario | No | Sí | Sí | No | No | No |
| Revisar estados de órdenes | No | Parcial | Sí | Sí | No | No |
| Revisar pagos | No | Parcial | Sí | Sí | Sí | Sí |
| Confirmar pagos | No | No | Solo rol financiero autorizado | No | No | Audita |
| Ajustar comisiones | No | No | No | No | Solo autorizado | Audita |
| Revisar logs técnicos | No | No | Parcial | Sí | Sí | Sí, audit logs |
| Modificar roles | No | No | No | No | Admin seguridad | Audita |
| Corregir bug | No | No | No | Sí | Sí | No |
| Aprobar release | No | No | No | No | Sí | Revisa |

---

# SECCIÓN B — CATEGORÍAS DE SOPORTE

---

## 12. Categorías principales de tickets

| Categoría | Código | Descripción |
|---|---|---|
| Acceso y cuenta | `SUP-AUTH` | Login, registro, contraseña, sesión |
| Roles y permisos | `SUP-RBAC` | Accesos incorrectos, acciones no visibles |
| Tienda logística | `SUP-STORE` | Registro, aprobación, perfil, suspensión |
| Servicios | `SUP-SERVICE` | Crear, editar, publicar o ver servicio |
| Búsqueda | `SUP-SEARCH` | Resultados, filtros, visibilidad pública |
| Cotizaciones | `SUP-QUOTE` | Solicitud, respuesta, aprobación, rechazo |
| Órdenes | `SUP-ORDER` | Creación, estado, timeline, cierre, cancelación |
| Pagos | `SUP-PAYMENT` | Comprobante, revisión, confirmación, rechazo |
| Comisiones | `SUP-COMMISSION` | Cálculo, neto proveedor, reglas |
| Documentos | `SUP-DOCUMENT` | Upload, descarga, validación, rechazo |
| TOS | `SUP-TOS` | Contenedores, gate, bloqueos, movimientos |
| Transporte | `SUP-TRANSPORT` | Viajes, estados, incidencias, POD |
| Almacenamiento | `SUP-STORAGE` | Inventario, ubicación, bloqueo, despacho |
| Inspecciones | `SUP-INSPECTION` | Checklists, evidencias, resultados |
| Reportes | `SUP-REPORT` | KPIs, filtros, exportaciones |
| Auditoría | `SUP-AUDIT` | Logs, trazabilidad, eventos críticos |
| Notificaciones | `SUP-NOTIFICATION` | Alertas no recibidas o incorrectas |
| Seguridad | `SUP-SECURITY` | Sospecha de acceso indebido, fuga de datos |
| Técnico | `SUP-TECH` | Errores 500, caídas, rendimiento, API |
| Datos | `SUP-DATA` | Inconsistencia, duplicados, integridad |

---

## 13. Subcategorías sugeridas

| Categoría | Subcategorías |
|---|---|
| `SUP-AUTH` | Login fallido, contraseña, usuario suspendido, sesión expirada |
| `SUP-RBAC` | Acción no visible, 403 inesperado, perfil incorrecto, scope incorrecto |
| `SUP-STORE` | Tienda pendiente, rechazo, suspensión, perfil público, datos comerciales |
| `SUP-SERVICE` | Borrador, publicación, tarifa, documentos requeridos, SLA |
| `SUP-QUOTE` | Solicitud, respuesta, aprobación, rechazo, vencimiento |
| `SUP-ORDER` | Orden no creada, estado incorrecto, timeline, cancelación |
| `SUP-PAYMENT` | Comprobante, monto, confirmación, rechazo, estado financiero |
| `SUP-COMMISSION` | Regla aplicada, comisión incorrecta, neto proveedor, histórico |
| `SUP-DOCUMENT` | Archivo rechazado, descarga, validación, evidencia obligatoria |
| `SUP-TOS` | Gate-in, gate-out, hold, release, contenedor |
| `SUP-TRANSPORT` | Asignación, estado, incidencia, entrega, POD |
| `SUP-STORAGE` | Recepción, movimiento, bloqueo, despacho |
| `SUP-INSPECTION` | Asignación, checklist, evidencia, revisión, rechazo |
| `SUP-REPORT` | Dashboard, exportación, filtro, CSV, permiso |
| `SUP-SECURITY` | Acceso indebido, datos ajenos, token, sospecha de brecha |

---

# SECCIÓN C — SEVERIDAD, PRIORIDAD Y SLA

---

## 14. Niveles de severidad de incidentes

| Severidad | Código | Descripción | Ejemplos |
|---|---|---|---|
| Crítica | `SEV-1` | Bloquea operación principal, seguridad, pagos, datos o auditoría | Cliente ve datos ajenos, pagos no confirman, sistema caído |
| Alta | `SEV-2` | Afecta módulo importante con impacto operativo alto | Tienda no puede responder cotizaciones, error en órdenes |
| Media | `SEV-3` | Afecta funcionalidad secundaria o tiene workaround | Filtro no funciona correctamente |
| Baja | `SEV-4` | Error visual, texto, mejora o consulta simple | Badge mal alineado, texto incorrecto |

---

## 15. Prioridades de atención

| Prioridad | Código | Descripción |
|---|---|---|
| P0 | Crítica inmediata | Requiere atención urgente |
| P1 | Alta | Debe atenderse pronto |
| P2 | Media | Se agenda en cola de soporte |
| P3 | Baja | Mejora o ajuste no bloqueante |

---

## 16. SLA referencial por severidad

| Severidad | Primera respuesta | Diagnóstico inicial | Mitigación | Resolución objetivo MVP |
|---|---:|---:|---:|---:|
| SEV-1 | 15 min | 30 min | 2 h | 24 h o hotfix prioritario |
| SEV-2 | 1 h | 4 h | 8 h | 2 días hábiles |
| SEV-3 | 4 h | 1 día hábil | 2 días hábiles | 5 días hábiles |
| SEV-4 | 1 día hábil | 2 días hábiles | Según backlog | Próximo ciclo planificado |

Nota:

```txt
Estos SLAs son referenciales para el MVP. En producción real deben ajustarse por contrato, capacidad del equipo y criticidad del puerto/logística.
```

---

## 17. Criterios automáticos SEV-1

Un incidente debe clasificarse como `SEV-1` si ocurre:

1. El sistema no permite login a múltiples perfiles.
2. El sistema está caído.
3. Cliente ve datos de otro cliente.
4. Tienda ve datos de otra tienda.
5. Auditor puede modificar datos.
6. Usuario sin permiso confirma pago.
7. Pago confirmado no actualiza orden.
8. Comisión negativa o neto proveedor negativo.
9. Audit log guarda contraseña o token.
10. Endpoint privado permite acceso sin token.
11. Reporte financiero exporta datos fuera de scope.
12. Gate-out permite salida con bloqueo activo.
13. Inventario bloqueado puede despacharse.
14. Error generalizado en creación de órdenes.
15. Pérdida o corrupción de datos críticos.

---

# SECCIÓN D — FLUJO DE GESTIÓN DE TICKETS

---

## 18. Estados de ticket

| Estado | Código | Descripción |
|---|---|---|
| Nuevo | `NEW` | Ticket recién creado |
| Clasificado | `TRIAGED` | Tiene categoría, severidad y responsable |
| En investigación | `INVESTIGATING` | Soporte revisa causa |
| Esperando usuario | `WAITING_USER` | Falta información del usuario |
| Esperando interno | `WAITING_INTERNAL` | Falta revisión de otro rol |
| En progreso | `IN_PROGRESS` | Se está resolviendo |
| Mitigado | `MITIGATED` | Existe solución temporal |
| Resuelto | `RESOLVED` | Se aplicó solución |
| En retest | `RETEST` | QA o usuario valida solución |
| Cerrado | `CLOSED` | Solución confirmada |
| Rechazado | `REJECTED` | No procede o no es incidente |
| Duplicado | `DUPLICATE` | Ya existe ticket relacionado |

---

## 19. Flujo estándar de ticket

```txt
NEW
  ↓
TRIAGED
  ↓
INVESTIGATING
  ↓
IN_PROGRESS
  ↓
RESOLVED
  ↓
RETEST
  ↓
CLOSED
```

Flujos alternos:

```txt
INVESTIGATING → WAITING_USER → INVESTIGATING
INVESTIGATING → WAITING_INTERNAL → IN_PROGRESS
NEW → DUPLICATE
NEW → REJECTED
IN_PROGRESS → MITIGATED → RESOLVED
RESOLVED → REOPENED → INVESTIGATING
```

---

## 20. Información mínima de un ticket

| Campo | Obligatorio |
|---|---|
| Código de ticket | Sí |
| Fecha de creación | Sí |
| Usuario solicitante | Sí |
| Perfil del usuario | Sí |
| Categoría | Sí |
| Subcategoría | Sí |
| Severidad | Sí |
| Prioridad | Sí |
| Módulo afectado | Sí |
| Descripción | Sí |
| Pasos para reproducir | Si aplica |
| Resultado esperado | Si aplica |
| Resultado observado | Si aplica |
| Evidencia | Recomendado |
| Orden/cotización/pago/documento relacionado | Si aplica |
| Responsable actual | Sí |
| Estado | Sí |
| SLA aplicable | Sí |
| Acciones realizadas | Sí |
| Causa raíz | Si aplica |
| Solución aplicada | Si aplica |
| Validación de cierre | Sí |

---

## 21. Plantilla de ticket operativo

```md
## TICKET-[YYYY]-[NNN] — [Título]

| Campo | Valor |
|---|---|
| Código | TICKET-YYYY-NNN |
| Fecha | YYYY-MM-DD HH:mm |
| Solicitante | Usuario / Perfil |
| Categoría | SUP-XXXX |
| Subcategoría | Subcategoría |
| Severidad | SEV-1 / SEV-2 / SEV-3 / SEV-4 |
| Prioridad | P0 / P1 / P2 / P3 |
| Estado | NEW / TRIAGED / INVESTIGATING / IN_PROGRESS / RESOLVED / CLOSED |
| Módulo afectado | Módulo |
| Entidad relacionada | Orden / Pago / Cotización / Documento / N/A |
| Responsable actual | L1 / L2 / L3 / Admin / Finanzas / Seguridad |
| SLA | Tiempo aplicable |

### Descripción

[Descripción clara del problema]

### Pasos para reproducir

1. Paso 1
2. Paso 2
3. Paso 3

### Resultado esperado

[Qué debía ocurrir]

### Resultado observado

[Qué ocurrió]

### Evidencia

[Capturas, logs, ID de orden, payload, mensaje]

### Análisis inicial

[Diagnóstico preliminar]

### Acciones realizadas

1. Acción 1
2. Acción 2

### Causa raíz

[Si se identifica]

### Solución aplicada

[Solución]

### Validación de cierre

[Quién validó y cómo]
```

---

# SECCIÓN E — FLUJOS DE ESCALAMIENTO

---

## 22. Regla general de escalamiento

Un ticket debe escalarse cuando:

1. Supera el SLA de primera respuesta.
2. Supera el SLA de diagnóstico.
3. El soporte actual no tiene permiso para resolver.
4. Afecta pagos, comisiones, auditoría o seguridad.
5. Afecta datos de otros usuarios o tiendas.
6. Afecta integridad de base de datos.
7. Requiere revisión de logs backend.
8. Requiere cambio de código.
9. Requiere hotfix.
10. Requiere decisión de producto o arquitectura.

---

## 23. Matriz de escalamiento por categoría

| Categoría | L1 | L2 | L3 | Escalamiento especial |
|---|---|---|---|---|
| Acceso | Orienta usuario | Revisa estado/perfil | Revisa auth/logs | Seguridad si sospecha de brecha |
| Roles/permisos | Identifica perfil | Revisa matriz permisos | Revisa guards/scopes | Admin seguridad |
| Tiendas | Guía usuario | Revisa estado tienda | Revisa API/DB | Superadmin |
| Servicios | Guía edición | Revisa estado/publicación | Revisa API/DB | Admin contenido |
| Cotizaciones | Guía flujo | Revisa estados/scope | Revisa API/DB | Operador interno |
| Órdenes | Revisa información | Diagnóstico funcional | Revisa API/DB | Operador interno |
| Pagos | Recibe evidencia | Revisa flujo | Revisa API/DB | Finanzas + Auditoría |
| Comisiones | No modifica | Revisa visualización | Revisa cálculo backend | Finanzas + Arquitectura |
| Documentos | Guía upload | Revisa validación | Revisa storage/API | Seguridad si archivo sospechoso |
| TOS | Registra caso | Diagnóstico operativo | Revisa reglas/API | Operador TOS |
| Transporte | Registra caso | Diagnóstico viaje | Revisa API/DB | Operador transporte |
| Almacenamiento | Registra caso | Diagnóstico inventario | Revisa API/DB | Operador almacén |
| Inspecciones | Registra caso | Diagnóstico checklist | Revisa API/DB | Operador inspección |
| Reportes | Guía filtros | Revisa permisos | Revisa queries/API | Auditoría si datos sensibles |
| Seguridad | No resuelve | Escala inmediato | Revisa técnica | Admin seguridad + auditoría |

---

## 24. Escalamiento SEV-1

Todo `SEV-1` debe seguir este flujo:

```txt
L1 detecta o recibe incidente
  ↓
Clasifica SEV-1
  ↓
Notifica L2 + L3 + Superadministrador
  ↓
Si afecta pagos/comisiones → Finanzas + Auditoría
  ↓
Si afecta seguridad/datos → Seguridad + Auditoría
  ↓
Se activa mitigación
  ↓
Se ejecuta diagnóstico raíz
  ↓
Se aplica hotfix o workaround
  ↓
QA retest
  ↓
Cierre con evidencia
  ↓
Registro en changelog si aplica
```

---

# SECCIÓN F — OPERACIÓN DIARIA DEL MARKETPLACE

---

## 25. Checklist diario de operación

| Actividad | Responsable | Frecuencia |
|---|---|---|
| Verificar disponibilidad del sistema | L1/L3 | Diario |
| Verificar login de perfiles demo/críticos | L1 | Diario |
| Revisar tickets nuevos | L1 | Diario |
| Revisar tickets SEV-1/SEV-2 abiertos | L2/L3 | Diario |
| Revisar cotizaciones pendientes | Operador | Diario |
| Revisar órdenes activas | Operador | Diario |
| Revisar pagos en revisión | Finanzas | Diario |
| Revisar pagos rechazados | Finanzas | Diario |
| Revisar comisiones confirmadas | Finanzas | Diario |
| Revisar documentos pendientes | Operador | Diario |
| Revisar audit logs críticos | Auditoría | Diario |
| Revisar errores backend | L3 | Diario |
| Revisar backups | L3/DBA | Diario |
| Revisar reportes principales | Superadmin | Diario |

---

## 26. Checklist semanal de operación

| Actividad | Responsable | Frecuencia |
|---|---|---|
| Revisar usuarios nuevos | Superadmin | Semanal |
| Revisar tiendas pendientes | Superadmin | Semanal |
| Revisar servicios publicados | Admin contenido | Semanal |
| Revisar catálogos maestros | Admin catálogos | Semanal |
| Revisar reglas de comisión | Finanzas | Semanal |
| Revisar tickets recurrentes | L2 | Semanal |
| Revisar bugs abiertos | L3/QA | Semanal |
| Revisar KPIs de soporte | L1/L2 | Semanal |
| Revisar reportes de auditoría | Auditoría | Semanal |
| Revisar eventos de seguridad | Seguridad | Semanal |
| Probar restauración de backup en ambiente controlado | L3/DBA | Semanal o quincenal |

---

## 27. Checklist mensual de operación

| Actividad | Responsable | Frecuencia |
|---|---|---|
| Revisión de roles y permisos | Seguridad | Mensual |
| Revisión de usuarios inactivos | Seguridad | Mensual |
| Revisión de tiendas suspendidas/inactivas | Superadmin | Mensual |
| Revisión de reportes financieros | Finanzas | Mensual |
| Revisión de comisiones | Finanzas | Mensual |
| Revisión de auditoría crítica | Auditoría | Mensual |
| Revisión de cumplimiento de SLAs | Soporte | Mensual |
| Revisión de bugs recurrentes | QA/L3 | Mensual |
| Revisión de backlog de mejoras | Product Owner | Mensual |
| Revisión de changelog y decisiones | Product Owner/Arquitectura | Mensual |
| Revisión de backups y restauración | L3/DBA | Mensual |
| Revisión de documentación operativa | L2/L3 | Mensual |

---

# SECCIÓN G — MONITOREO TÉCNICO

---

## 28. Métricas técnicas mínimas

| Métrica | Umbral de alerta | Responsable |
|---|---|---|
| Disponibilidad backend | < 99% demo/MVP | L3 |
| Disponibilidad frontend | < 99% demo/MVP | L3 |
| Errores 500 | > 5 en 15 minutos | L3 |
| Errores 401 inusuales | Pico anormal | Seguridad |
| Errores 403 inusuales | Pico anormal | Seguridad/L3 |
| Tiempo respuesta API | > 2s promedio en endpoints críticos | L3 |
| Tiempo de búsqueda | > 3s | L3 |
| Uso de CPU servidor | > 80% sostenido | L3 |
| Uso de memoria | > 80% sostenido | L3 |
| Uso de disco | > 80% | L3/DBA |
| Conexiones MySQL | Cercanas al límite | L3/DBA |
| Fallo de backup | Cualquier fallo | L3/DBA |
| Jobs fallidos | Cualquier fallo crítico | L3 |

---

## 29. Endpoints técnicos de monitoreo sugeridos

| Endpoint | Uso | Acceso |
|---|---|---|
| `GET /health` | Salud general backend | Público restringido o interno |
| `GET /health/db` | Conexión MySQL | Interno/admin |
| `GET /health/storage` | Estado de almacenamiento documental | Interno/admin |
| `GET /health/version` | Versión del sistema | Interno/admin |
| `GET /metrics` | Métricas técnicas futuras | Interno/admin |

---

## 30. Logs técnicos mínimos

| Log | Contenido | Uso |
|---|---|---|
| Application log | Errores backend, requests críticos | Diagnóstico L3 |
| Auth log | Login, logout, fallos | Seguridad |
| API error log | 400/401/403/500 | QA y soporte |
| Payment operation log | Flujo de pagos | Finanzas/L3 |
| Commission calculation log | Regla aplicada, monto | Finanzas/L3 |
| Upload log | Cargas documentales | Seguridad/L3 |
| Export log | Exportaciones | Auditoría |
| Audit log | Acciones críticas | Auditoría |

Regla:

```txt
Los logs técnicos nunca deben almacenar contraseñas, tokens, claves privadas o secretos.
```

---

# SECCIÓN H — MONITOREO FUNCIONAL

---

## 31. Métricas funcionales del marketplace

| Métrica | Uso operativo |
|---|---|
| Usuarios registrados | Crecimiento |
| Usuarios activos | Actividad real |
| Tiendas pendientes | Cola de aprobación |
| Tiendas activas | Oferta disponible |
| Servicios publicados | Catálogo operativo |
| Servicios inactivos | Revisión de calidad |
| Búsquedas realizadas | Demanda |
| Cotizaciones pendientes | Riesgo de demora |
| Cotizaciones respondidas | Productividad de tiendas |
| Órdenes activas | Carga operativa |
| Órdenes canceladas | Riesgo funcional/comercial |
| Pagos en revisión | Carga financiera |
| Pagos rechazados | Problemas documentales/financieros |
| Comisiones confirmadas | Monetización |
| Documentos pendientes | Cola documental |
| Tickets abiertos | Carga soporte |
| Tickets vencidos SLA | Riesgo operativo |

---

## 32. Alertas funcionales sugeridas

| Alerta | Condición | Responsable |
|---|---|---|
| Muchas cotizaciones sin respuesta | > X horas pendientes | Operador/L2 |
| Órdenes sin actualización | > X días sin evento | Operador |
| Pagos en revisión atrasados | > SLA financiero | Finanzas |
| Documentos pendientes atrasados | > SLA documental | Operador |
| Tiendas pendientes acumuladas | > X pendientes | Superadmin |
| Alta tasa de pagos rechazados | > umbral semanal | Finanzas/L2 |
| Alta tasa de tickets por módulo | > umbral semanal | L2/L3 |
| Exportaciones frecuentes | > umbral inusual | Auditoría/Seguridad |
| Errores de permisos recurrentes | > umbral | Seguridad/L3 |

---

# SECCIÓN I — OPERACIÓN FINANCIERA

---

## 33. Soporte operativo de pagos

### Flujo de revisión de pago

```txt
Cliente registra pago
  ↓
Cliente carga comprobante
  ↓
Pago queda SUBMITTED / IN_REVIEW
  ↓
Finanzas revisa comprobante
  ↓
Finanzas confirma o rechaza
  ↓
Si confirma: orden actualiza estado financiero + comisión se confirma
  ↓
Si rechaza: se registra motivo + cliente recibe notificación
  ↓
Audit log crítico
```

### Reglas de soporte

1. L1 puede orientar al cliente sobre cómo cargar comprobante.
2. L1 no puede confirmar pagos.
3. L2 puede revisar estado del flujo.
4. Finanzas confirma o rechaza pagos.
5. Rechazo requiere motivo.
6. Confirmación genera audit log crítico.
7. Si hay inconsistencia de monto, escalar a Finanzas + L3.
8. Si hay sospecha de fraude, escalar a Seguridad + Auditoría.

---

## 34. Soporte operativo de comisiones

### Reglas

1. Las comisiones se calculan en backend.
2. El soporte no debe modificar comisiones manualmente.
3. Ajustes de comisión requieren permiso especial.
4. Cambios de regla requieren aprobación de superadministrador o finanzas.
5. Todo ajuste genera audit log crítico.
6. Tienda solo ve sus comisiones.
7. Cliente no ve reglas internas de comisión.
8. Incidencias de comisión incorrecta se clasifican como mínimo SEV-2.

### Flujo de revisión

```txt
Tienda reporta comisión incorrecta
  ↓
L1 registra ticket SUP-COMMISSION
  ↓
L2 revisa orden, pago y regla visible
  ↓
L3 revisa cálculo backend y datos
  ↓
Finanzas valida resultado
  ↓
Si procede ajuste: decisión autorizada + audit log
  ↓
QA retest financiero
  ↓
Cierre con evidencia
```

---

# SECCIÓN J — OPERACIÓN DOCUMENTAL

---

## 35. Soporte de documentos y evidencias

### Incidencias comunes

| Incidencia | Acción soporte |
|---|---|
| Archivo rechazado por tipo | Verificar extensión/MIME permitido |
| Archivo rechazado por tamaño | Indicar límite y compresión/reducción |
| Usuario no puede descargar | Revisar permiso y scope |
| Documento pendiente | Escalar a operador documental |
| Documento rechazado sin entender motivo | Revisar motivo y orientar usuario |
| Evidencia obligatoria faltante | Indicar campo obligatorio |
| Archivo sospechoso | Escalar a seguridad |

### Reglas

1. No aceptar ejecutables.
2. No saltarse validación de tipo/tamaño.
3. No compartir archivos fuera de la plataforma.
4. No descargar documentos de otro cliente/tienda sin permiso.
5. Validación y rechazo generan auditoría si aplica.

---

# SECCIÓN K — OPERACIÓN LOGÍSTICA

---

## 36. Soporte TOS

### Incidencias comunes TOS

| Incidencia | Acción soporte |
|---|---|
| Contenedor no se registra | Revisar formato y orden asociada |
| Gate-in falla | Revisar estado del contenedor |
| Gate-out falla | Revisar bloqueos activos |
| Bloqueo no se libera | Revisar permiso y motivo |
| Movimiento no actualiza timeline | Escalar a L3 |
| Gate-out con bloqueo permitido | SEV-1 |

### Reglas

1. Gate-out con bloqueo activo debe fallar.
2. Liberación de bloqueo requiere permiso.
3. Gate-out genera audit log crítico.
4. Cambios manuales de estado TOS requieren autorización.

---

## 37. Soporte transporte

### Incidencias comunes transporte

| Incidencia | Acción soporte |
|---|---|
| Viaje no aparece al transportista | Revisar asignación/scope |
| Estado no puede cambiar | Revisar transición válida |
| Incidencia sin motivo falla | Orientar sobre motivo obligatorio |
| Entrega sin POD falla | Orientar carga de evidencia |
| POD no carga | Revisar documentos/upload |
| Transportista ve viajes ajenos | SEV-1 |

### Reglas

1. Transportista solo ve viajes propios/asignados.
2. Entrega requiere POD.
3. Incidencias requieren motivo.
4. Entrega genera auditoría si aplica.

---

## 38. Soporte almacenamiento

### Incidencias comunes almacenamiento

| Incidencia | Acción soporte |
|---|---|
| Inventario no aparece | Revisar almacén/scope/orden |
| No permite despacho | Revisar estado y bloqueos |
| Despacho con bloqueo falla | Comportamiento correcto |
| Movimiento no se registra | Escalar a L3 |
| Almacén ve inventario ajeno | SEV-1 |
| Despacho bloqueado permitido | SEV-1 |

### Reglas

1. Inventario bloqueado no puede despacharse.
2. Almacén solo ve inventario propio.
3. Despacho genera audit log crítico.

---

## 39. Soporte inspecciones

### Incidencias comunes inspecciones

| Incidencia | Acción soporte |
|---|---|
| Inspector no ve inspección | Revisar asignación |
| Checklist no permite enviar | Revisar campos obligatorios |
| Evidencia obligatoria faltante | Orientar upload |
| Rechazo sin motivo falla | Comportamiento correcto |
| Inspector ve inspección ajena | SEV-1 |
| Rechazo no genera auditoría | SEV-2 |

### Reglas

1. Inspector solo ve inspecciones asignadas.
2. Checklist obligatorio debe completarse.
3. Evidencia obligatoria debe cargarse.
4. Rechazo requiere motivo.
5. Rechazo genera auditoría.

---

# SECCIÓN L — SEGURIDAD OPERATIVA

---

## 40. Incidentes de seguridad

| Incidente | Severidad mínima | Acción |
|---|---|---|
| Usuario ve datos ajenos | SEV-1 | Escalar seguridad + L3 + auditoría |
| Token expuesto | SEV-1 | Revocar sesiones y revisar logs |
| Password expuesto en log | SEV-1 | Sanitizar logs, cambiar credenciales |
| Acceso no autorizado a pago | SEV-1 | Bloquear, auditar, investigar |
| Auditor puede modificar datos | SEV-1 | Corregir permisos inmediatamente |
| Exportación fuera de scope | SEV-1 | Bloquear exportaciones y auditar |
| Archivo malicioso subido | SEV-2/SEV-1 | Bloquear archivo, revisar seguridad |
| Ataques repetidos a login | SEV-2 | Activar rate limit/revisión IP |

---

## 41. Procedimiento ante incidente de seguridad

```txt
Detectar incidente
  ↓
Clasificar severidad
  ↓
Bloquear o mitigar acceso si aplica
  ↓
Preservar evidencias
  ↓
Notificar seguridad + auditoría + superadmin
  ↓
Revisar logs técnicos y audit logs
  ↓
Identificar alcance de datos afectados
  ↓
Aplicar corrección o hotfix
  ↓
Ejecutar QA de seguridad
  ↓
Registrar cambio en changelog si aplica
  ↓
Cerrar incidente con reporte
```

---

## 42. Checklist operativo de seguridad

| Actividad | Frecuencia | Responsable |
|---|---|---|
| Revisar usuarios suspendidos | Semanal | Seguridad |
| Revisar roles críticos | Mensual | Seguridad |
| Revisar permisos de admin | Mensual | Seguridad |
| Revisar sesiones activas sospechosas | Semanal | Seguridad/L3 |
| Revisar errores 401/403 anormales | Diario/Semanal | Seguridad |
| Revisar exportaciones | Semanal | Auditoría |
| Revisar audit logs críticos | Diario/Semanal | Auditoría |
| Revisar archivos rechazados | Semanal | Seguridad |
| Revisar variables de entorno | Por release | L3/Seguridad |
| Revisar Swagger en producción | Por release | L3/Seguridad |

---

# SECCIÓN M — BACKUPS, RESTAURACIÓN Y CONTINUIDAD

---

## 43. Política de backups MVP

| Elemento | Backup requerido | Frecuencia sugerida |
|---|---|---|
| Base de datos MySQL | Sí | Diario mínimo en demo/MVP |
| Archivos/documentos | Sí | Diario mínimo |
| Variables de entorno | No como archivo público; resguardo seguro | Según cambio |
| Código fuente | Git/repo | Cada commit |
| Documentos maestros | Repo/docs | Cada cambio |
| Seeds | Repo/database/seeds | Cada cambio |
| Migraciones | Repo/database/migrations | Cada cambio |

---

## 44. Regla de restauración

Toda estrategia de backup debe incluir prueba de restauración.

```txt
Backup no probado = backup no confiable.
```

---

## 45. Procedimiento de restauración referencial

```txt
Identificar incidente de datos
  ↓
Detener operación afectada si es necesario
  ↓
Preservar evidencia/logs
  ↓
Identificar último backup válido
  ↓
Restaurar en ambiente controlado
  ↓
Validar integridad
  ↓
Comparar con datos actuales
  ↓
Definir estrategia de recuperación
  ↓
Ejecutar restauración autorizada
  ↓
QA de datos críticos
  ↓
Registrar incidente y decisión
```

---

## 46. Objetivos referenciales de continuidad

| Métrica | MVP demo | Producción futura |
|---|---:|---:|
| RPO | 24 horas | 1-4 horas según criticidad |
| RTO | 24-48 horas | 4-8 horas según criticidad |
| Backup DB | Diario | Horario/diario |
| Backup archivos | Diario | Diario/continuo |
| Prueba restauración | Mensual | Semanal/mensual |

Definiciones:

| Sigla | Significado |
|---|---|
| RPO | Máxima pérdida de datos tolerable |
| RTO | Tiempo máximo objetivo de recuperación |

---

# SECCIÓN N — MANTENIMIENTO

---

## 47. Tipos de mantenimiento

| Tipo | Descripción | Ejemplo |
|---|---|---|
| Preventivo | Evitar fallos futuros | Revisar backups, logs, índices |
| Correctivo | Corregir fallos existentes | Hotfix de error 500 |
| Evolutivo | Mejorar o ampliar funcionalidades | Nueva regla de comisión |
| Adaptativo | Ajustar por cambios externos | Nueva normativa/documento |
| Perfectivo | Mejorar UX, rendimiento o calidad | Mejorar filtros de búsqueda |

---

## 48. Checklist de mantenimiento preventivo

| Actividad | Frecuencia | Responsable |
|---|---|---|
| Revisar errores backend | Diario | L3 |
| Revisar tiempo de respuesta API | Semanal | L3 |
| Revisar índices de DB | Mensual | DBA/L3 |
| Revisar crecimiento de tablas | Mensual | DBA/L3 |
| Revisar backups | Diario | L3/DBA |
| Probar restauración | Mensual | L3/DBA |
| Revisar roles críticos | Mensual | Seguridad |
| Revisar logs críticos | Semanal | Auditoría |
| Revisar dependencias frontend/backend | Mensual | L3 |
| Revisar documentación | Mensual | L2/L3 |

---

## 49. Checklist de mantenimiento correctivo

| Paso | Descripción |
|---|---|
| 1 | Registrar bug o incidente |
| 2 | Clasificar severidad |
| 3 | Reproducir error |
| 4 | Revisar logs |
| 5 | Identificar causa raíz |
| 6 | Proponer corrección |
| 7 | Aplicar corrección en rama controlada |
| 8 | Ejecutar pruebas QA |
| 9 | Actualizar changelog si aplica |
| 10 | Desplegar corrección |
| 11 | Retest |
| 12 | Cerrar ticket con evidencia |

---

## 50. Checklist de mantenimiento evolutivo

| Paso | Descripción |
|---|---|
| 1 | Registrar solicitud de mejora |
| 2 | Evaluar impacto |
| 3 | Registrar decisión o cambio si aplica |
| 4 | Definir historia/tareas |
| 5 | Agregar al backlog |
| 6 | Priorizar sprint |
| 7 | Implementar |
| 8 | Ejecutar QA |
| 9 | Actualizar documentación |
| 10 | Publicar release notes |

---

# SECCIÓN O — GESTIÓN DE CAMBIOS OPERATIVOS

---

## 51. Cambios que requieren registro formal

Deben registrarse en `34_CHANGELOG_AND_DECISION_LOG.md`:

1. Cambios en reglas de pago.
2. Cambios en reglas de comisión.
3. Cambios en roles o permisos críticos.
4. Cambios en scopes.
5. Cambios en flujos de órdenes.
6. Cambios en reglas TOS.
7. Cambios en reglas de despacho.
8. Cambios en checklists de inspección.
9. Cambios en reportes financieros.
10. Cambios en auditoría.
11. Cambios en base de datos.
12. Cambios en API.
13. Cambios de arquitectura.
14. Hotfixes críticos.
15. Releases.

---

## 52. Flujo de cambio operativo

```txt
Solicitud de cambio
  ↓
Registro CHG propuesto
  ↓
Análisis de impacto
  ↓
Aprobación o rechazo
  ↓
Plan de implementación
  ↓
Desarrollo o configuración
  ↓
QA
  ↓
Actualización documental
  ↓
Release
  ↓
Monitoreo post-release
```

---

# SECCIÓN P — RUNBOOKS OPERATIVOS

---

## 53. Runbook 01 — Sistema no responde

| Paso | Acción |
|---|---|
| 1 | Confirmar si falla frontend, backend o ambos |
| 2 | Probar `/health` |
| 3 | Revisar logs backend |
| 4 | Revisar conexión MySQL |
| 5 | Revisar espacio en disco |
| 6 | Revisar último despliegue/cambio |
| 7 | Escalar a L3 si no se resuelve |
| 8 | Clasificar SEV-1 si afecta operación general |
| 9 | Aplicar mitigación o rollback si aplica |
| 10 | Registrar incidente y cierre |

---

## 54. Runbook 02 — Usuario no puede iniciar sesión

| Paso | Acción |
|---|---|
| 1 | Validar email de usuario |
| 2 | Confirmar si usuario existe |
| 3 | Confirmar estado activo/suspendido |
| 4 | Revisar errores de login |
| 5 | Validar si contraseña es incorrecta |
| 6 | Sugerir reset de contraseña si aplica |
| 7 | Revisar si hay rate limit/bloqueo |
| 8 | Escalar a seguridad si hay sospecha |
| 9 | Cerrar con evidencia |

---

## 55. Runbook 03 — Cliente no ve su orden

| Paso | Acción |
|---|---|
| 1 | Confirmar usuario cliente |
| 2 | Confirmar código de orden |
| 3 | Revisar si orden pertenece al cliente |
| 4 | Revisar estado de la orden |
| 5 | Revisar filtros aplicados en UI |
| 6 | Revisar endpoint de órdenes |
| 7 | Revisar scope `own` |
| 8 | Escalar a L3 si hay inconsistencia |
| 9 | Cerrar con evidencia |

---

## 56. Runbook 04 — Tienda no puede responder cotización

| Paso | Acción |
|---|---|
| 1 | Confirmar tienda activa |
| 2 | Confirmar usuario asociado a tienda |
| 3 | Confirmar que cotización pertenece a servicio de la tienda |
| 4 | Revisar estado de cotización |
| 5 | Revisar permiso `quotations.respond` |
| 6 | Revisar scope `store` |
| 7 | Revisar errores API |
| 8 | Escalar a L3 si persiste |

---

## 57. Runbook 05 — Pago no puede confirmarse

| Paso | Acción |
|---|---|
| 1 | Confirmar pago existente |
| 2 | Confirmar orden relacionada |
| 3 | Confirmar estado del pago |
| 4 | Confirmar comprobante cargado |
| 5 | Confirmar permiso del usuario financiero |
| 6 | Revisar motivo si rechazo |
| 7 | Revisar logs backend |
| 8 | Revisar cálculo de comisión asociado |
| 9 | Clasificar SEV-1 o SEV-2 según impacto |
| 10 | Escalar a Finanzas + L3 si aplica |

---

## 58. Runbook 06 — Comisión incorrecta

| Paso | Acción |
|---|---|
| 1 | Confirmar orden y pago |
| 2 | Confirmar regla de comisión aplicada |
| 3 | Revisar base de cálculo |
| 4 | Revisar tipo de regla: porcentaje/fija/mixta |
| 5 | Recalcular manualmente como referencia |
| 6 | Comparar con cálculo backend |
| 7 | Revisar si regla cambió después de la orden |
| 8 | Escalar a Finanzas + L3 |
| 9 | Si requiere ajuste, registrar cambio y auditoría |
| 10 | Ejecutar retest financiero |

---

## 59. Runbook 07 — Exportación de reporte falla

| Paso | Acción |
|---|---|
| 1 | Confirmar usuario y perfil |
| 2 | Confirmar permiso de exportación |
| 3 | Confirmar motivo de exportación |
| 4 | Revisar filtros aplicados |
| 5 | Revisar volumen de datos |
| 6 | Revisar endpoint export |
| 7 | Revisar logs backend |
| 8 | Confirmar si audit log se creó |
| 9 | Escalar a L3 si error técnico |
| 10 | Escalar a auditoría si hay exportación sospechosa |

---

## 60. Runbook 08 — Gate-out TOS falla

| Paso | Acción |
|---|---|
| 1 | Confirmar contenedor |
| 2 | Confirmar orden asociada |
| 3 | Confirmar estado TOS |
| 4 | Revisar bloqueos activos |
| 5 | Si hay bloqueo activo, falla es esperada |
| 6 | Confirmar permiso de liberación si aplica |
| 7 | Revisar audit logs |
| 8 | Escalar a operador TOS si hay excepción |
| 9 | Escalar a L3 si hay inconsistencia |

---

## 61. Runbook 09 — Documento no carga

| Paso | Acción |
|---|---|
| 1 | Confirmar tipo de archivo |
| 2 | Confirmar tamaño |
| 3 | Confirmar entidad asociada |
| 4 | Confirmar permiso de carga |
| 5 | Revisar error frontend |
| 6 | Revisar error backend |
| 7 | Revisar almacenamiento |
| 8 | Escalar a seguridad si archivo sospechoso |
| 9 | Escalar a L3 si falla técnica |

---

## 62. Runbook 10 — Incidente de fuga de datos

| Paso | Acción |
|---|---|
| 1 | Clasificar SEV-1 |
| 2 | Preservar evidencia |
| 3 | Identificar usuarios afectados |
| 4 | Bloquear acceso si aplica |
| 5 | Revisar endpoint involucrado |
| 6 | Revisar scope guard |
| 7 | Revisar audit logs |
| 8 | Escalar seguridad + L3 + auditoría |
| 9 | Aplicar hotfix |
| 10 | Ejecutar QA de scope |
| 11 | Registrar incidente y decisión |

---

# SECCIÓN Q — MÉTRICAS DE SOPORTE

---

## 63. KPIs de soporte

| KPI | Fórmula / Uso |
|---|---|
| Tickets abiertos | Conteo por estado abierto |
| Tickets cerrados | Conteo por periodo |
| Tickets por severidad | Conteo SEV-1/2/3/4 |
| Tiempo primera respuesta | Creación → primera respuesta |
| Tiempo resolución | Creación → cierre |
| Cumplimiento SLA | Tickets dentro de SLA / total |
| Tickets reabiertos | Reabiertos / cerrados |
| Tickets por módulo | Volumen por módulo |
| Tickets por perfil | Cliente/tienda/admin/etc. |
| Incidentes críticos | Conteo SEV-1 |
| Bugs derivados de soporte | Tickets convertidos en bugs |
| Cambios derivados de soporte | Tickets convertidos en CHG |
| Satisfacción soporte | Evaluación post-cierre futura |

---

## 64. Reportes operativos sugeridos

| Reporte | Usuario objetivo |
|---|---|
| Reporte diario de tickets | L1/L2 |
| Reporte semanal de incidentes | Superadmin |
| Reporte mensual de SLAs | Dirección del proyecto |
| Reporte de bugs recurrentes | L3/QA |
| Reporte de seguridad operativa | Seguridad/Auditoría |
| Reporte de pagos en revisión | Finanzas |
| Reporte de comisiones | Finanzas/Superadmin |
| Reporte de órdenes sin actualización | Operador interno |
| Reporte de documentos pendientes | Operador documental |
| Reporte de exportaciones | Auditoría |

---

# SECCIÓN R — SOPORTE A USUARIOS POR PERFIL

---

## 65. Soporte a cliente final

### Temas comunes

1. Registro e inicio de sesión.
2. Búsqueda de servicios.
3. Solicitud de cotización.
4. Aprobación de cotización.
5. Consulta de orden.
6. Carga de comprobante de pago.
7. Consulta de documentos.
8. Notificaciones.
9. Soporte general.

### Acciones permitidas al soporte

| Acción | L1 | L2 | L3 |
|---|---|---|---|
| Orientar búsqueda | Sí | Sí | No |
| Orientar cotización | Sí | Sí | No |
| Revisar estado visible | Sí | Sí | No |
| Revisar error técnico | No | Parcial | Sí |
| Confirmar pago | No | No | No, solo finanzas autorizado |
| Modificar datos críticos | No | No | No sin proceso formal |

---

## 66. Soporte a tienda logística

### Temas comunes

1. Registro de tienda.
2. Aprobación o rechazo.
3. Publicación de servicios.
4. Respuesta de cotizaciones.
5. Consulta de órdenes.
6. Consulta de pagos relacionados.
7. Consulta de comisiones.
8. Documentos y evidencias.
9. Reportes de tienda.

### Reglas

1. Tienda no debe ver datos de otra tienda.
2. Soporte no debe compartir información de otra tienda.
3. Comisiones se revisan con Finanzas si hay discrepancia.
4. Tienda suspendida no debe operar hasta regularización.

---

## 67. Soporte a superadministrador

### Temas comunes

1. Gestión global.
2. Aprobación de tiendas.
3. Configuración de catálogos.
4. Reglas de comisión.
5. Reportes globales.
6. Auditoría.
7. Seguridad y permisos.

### Reglas

1. Cambios críticos deben registrarse en changelog.
2. Cambios de permisos deben auditarse.
3. Cambios de reglas financieras deben auditarse.
4. Exportaciones globales deben auditarse.

---

## 68. Soporte a auditor

### Temas comunes

1. Acceso a logs.
2. Reportes de auditoría.
3. Exportación controlada.
4. Filtros por entidad.
5. Validación de trazabilidad.

### Reglas

1. Auditor solo lectura.
2. Auditor no modifica datos.
3. Auditor no confirma pagos.
4. Auditor no cambia comisiones.
5. Exportaciones de auditoría requieren motivo.

---

# SECCIÓN S — DOCUMENTACIÓN DE SOPORTE

---

## 69. Documentos de ayuda recomendados

| Documento | Público objetivo |
|---|---|
| Guía de inicio para cliente | Cliente final |
| Guía de búsqueda y cotización | Cliente final |
| Guía de carga de comprobante | Cliente final |
| Guía de registro de tienda | Tienda logística |
| Guía de publicación de servicios | Tienda logística |
| Guía de respuesta de cotizaciones | Tienda logística |
| Guía de seguimiento de órdenes | Cliente/Tienda |
| Guía de documentos y evidencias | Todos |
| Guía de transporte | Transportista |
| Guía de almacenamiento | Almacén |
| Guía de inspecciones | Inspector |
| Guía de reportes | Admin/Auditor/Tienda |
| Guía de soporte y tickets | Todos |
| Guía de roles y permisos | Admin/Seguridad |
| Guía de operación diaria | Operador interno |

---

## 70. Base de conocimiento mínima L0

Debe contener:

1. Cómo registrarse.
2. Cómo iniciar sesión.
3. Cómo buscar un servicio.
4. Cómo solicitar cotización.
5. Cómo responder cotización.
6. Cómo aprobar cotización.
7. Cómo consultar una orden.
8. Cómo cargar comprobante.
9. Cómo cargar documentos.
10. Cómo revisar notificaciones.
11. Cómo crear ticket.
12. Qué hacer si aparece 403.
13. Qué hacer si un archivo es rechazado.
14. Qué hacer si un pago fue rechazado.
15. Qué hacer si una tienda está pendiente.

---

# SECCIÓN T — MODELO DE DATOS PARA SOPORTE

---

## 71. Tablas sugeridas para soporte

| Tabla | Uso |
|---|---|
| `support_tickets` | Tickets principales |
| `support_ticket_comments` | Comentarios internos/externos |
| `support_ticket_attachments` | Evidencias del ticket |
| `support_ticket_status_history` | Historial de estados |
| `support_ticket_assignments` | Asignaciones a responsables |
| `support_ticket_links` | Relación con orden, pago, documento, etc. |
| `support_sla_policies` | Políticas SLA |
| `support_categories` | Categorías de soporte |

---

## 72. Campos mínimos de `support_tickets`

| Campo | Tipo referencial | Descripción |
|---|---|---|
| `id` | BIGINT | ID interno |
| `code` | VARCHAR | Código público del ticket |
| `created_by_user_id` | BIGINT | Usuario solicitante |
| `assigned_to_user_id` | BIGINT | Responsable actual |
| `profile_type` | VARCHAR | Perfil del solicitante |
| `category_code` | VARCHAR | Categoría soporte |
| `subcategory_code` | VARCHAR | Subcategoría |
| `severity` | VARCHAR | SEV-1/2/3/4 |
| `priority` | VARCHAR | P0/P1/P2/P3 |
| `status` | VARCHAR | Estado del ticket |
| `module_code` | VARCHAR | Módulo afectado |
| `related_entity_type` | VARCHAR | Tipo entidad relacionada |
| `related_entity_id` | BIGINT | ID entidad relacionada |
| `title` | VARCHAR | Título |
| `description` | TEXT | Descripción |
| `expected_result` | TEXT | Resultado esperado |
| `observed_result` | TEXT | Resultado observado |
| `root_cause` | TEXT | Causa raíz |
| `resolution` | TEXT | Resolución |
| `sla_due_at` | DATETIME | Fecha límite SLA |
| `resolved_at` | DATETIME | Fecha resolución |
| `closed_at` | DATETIME | Fecha cierre |
| `created_at` | DATETIME | Creación |
| `updated_at` | DATETIME | Actualización |
| `deleted_at` | DATETIME | Soft delete si aplica |

---

# SECCIÓN U — CRITERIOS DE ACEPTACIÓN OPERATIVA

---

## 73. Criterios generales de aceptación del soporte

El módulo y proceso de soporte se consideran aceptados cuando:

1. Usuario puede crear ticket.
2. Ticket tiene categoría.
3. Ticket tiene severidad.
4. Ticket tiene prioridad.
5. Ticket tiene estado.
6. Ticket puede asignarse.
7. Ticket puede comentarse.
8. Ticket puede vincularse a entidad.
9. Usuario solo ve tickets propios.
10. Soporte ve tickets autorizados.
11. Soporte no puede ejecutar acciones críticas sin permiso.
12. Cambios de estado quedan registrados.
13. Incidentes SEV-1 pueden escalarse.
14. Tickets cerrados tienen evidencia de resolución.
15. Reportes de soporte muestran tickets abiertos, cerrados y vencidos.

---

## 74. Criterios de aceptación de operación diaria

La operación diaria se considera correcta si:

1. Sistema disponible.
2. Health check exitoso.
3. Login funcional.
4. No hay SEV-1 sin atender.
5. Backups ejecutados.
6. Pagos en revisión monitoreados.
7. Cotizaciones pendientes monitoreadas.
8. Órdenes activas monitoreadas.
9. Audit logs críticos revisados.
10. Tickets nuevos clasificados.
11. Errores 500 revisados.
12. Reportes operativos disponibles.

---

## 75. Criterios de aceptación de soporte SEV-1

Un incidente SEV-1 se considera correctamente gestionado cuando:

1. Fue clasificado como SEV-1.
2. Fue escalado a L2/L3/superadmin.
3. Si afectó seguridad, se notificó a seguridad/auditoría.
4. Si afectó pagos/comisiones, se notificó a finanzas/auditoría.
5. Se preservó evidencia.
6. Se aplicó mitigación.
7. Se identificó causa raíz o causa probable.
8. Se aplicó corrección o workaround.
9. QA ejecutó retest.
10. Se registró en changelog si corresponde.
11. Se cerró con evidencia.

---

# SECCIÓN V — PROMPTS PARA ANTIGRAVITY

---

## 76. Prompt maestro para crear módulo de soporte

```text
Actúa como arquitecto full-stack, product owner, QA lead y responsable de operaciones del Marketplace Logístico TOS.

Usa `37_OPERATIONS_AND_SUPPORT_PLAN.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` y `35_QA_MASTER_TEST_PLAN.md` para crear el módulo de soporte e incidencias.

Implementa:
1. SupportModule en Nest.js.
2. SupportController.
3. SupportService.
4. DTOs: CreateSupportTicketDto, AddSupportCommentDto, UpdateSupportTicketStatusDto, AssignSupportTicketDto.
5. Tablas: support_tickets, support_ticket_comments, support_ticket_status_history, support_ticket_attachments si aplica.
6. Frontend: SupportTicketsPage, SupportTicketDetailPage, SupportTicketForm, SupportTicketStatusBadge.
7. Permisos RBAC para soporte.
8. Scopes para que usuarios solo vean tickets propios.
9. Auditoría para cambios críticos de estado.
10. Notificaciones para cambios de ticket.
11. Reportes básicos de tickets.
12. Swagger.
13. Pruebas de seguridad y scope.

Reglas:
1. Usuario solo ve tickets propios.
2. Soporte ve tickets autorizados.
3. Soporte L1 no confirma pagos ni modifica comisiones.
4. Tickets SEV-1 requieren escalamiento.
5. Cambios de estado se registran.
6. Tickets cerrados requieren resolución.

Entrega:
1. Archivos creados.
2. Tablas/migraciones.
3. Endpoints.
4. Componentes React.
5. Permisos.
6. Casos de prueba.
```

---

## 77. Prompt para diagnosticar incidente operativo

```text
Actúa como soporte L2/L3 del Marketplace Logístico TOS.

Diagnostica el siguiente incidente usando `37_OPERATIONS_AND_SUPPORT_PLAN.md` y `35_QA_MASTER_TEST_PLAN.md`:

Incidente:
[PEGAR DESCRIPCIÓN]

Debes determinar:
1. Categoría de soporte.
2. Severidad.
3. Prioridad.
4. Módulo afectado.
5. Perfil afectado.
6. Entidad relacionada.
7. Pasos para reproducir.
8. Resultado esperado.
9. Resultado observado.
10. Posible causa.
11. Nivel de soporte requerido.
12. Escalamiento requerido.
13. Riesgo de seguridad o financiero.
14. Pruebas de validación.
15. Criterio de cierre.

Entrega:
1. Ticket estructurado.
2. Diagnóstico inicial.
3. Acciones recomendadas.
4. Si debe registrarse bug o cambio.
```

---

## 78. Prompt para crear runbook operativo

```text
Actúa como responsable de operaciones del Marketplace Logístico TOS.

Crea un runbook para el siguiente escenario:

Escenario:
[PEGAR ESCENARIO]

El runbook debe incluir:
1. Objetivo.
2. Cuándo usarlo.
3. Severidad sugerida.
4. Roles involucrados.
5. Precondiciones.
6. Pasos de diagnóstico.
7. Pasos de mitigación.
8. Escalamiento.
9. Evidencias requeridas.
10. Pruebas de cierre.
11. Documentos relacionados.
12. Riesgos.
```

---

## 79. Prompt para reporte mensual de soporte

```text
Actúa como responsable de soporte del Marketplace Logístico TOS.

Genera un reporte mensual de soporte usando `37_OPERATIONS_AND_SUPPORT_PLAN.md`.

Incluye:
1. Total de tickets abiertos.
2. Total de tickets cerrados.
3. Tickets por severidad.
4. Tickets por categoría.
5. Tickets por perfil.
6. Tiempo promedio de primera respuesta.
7. Tiempo promedio de resolución.
8. Cumplimiento SLA.
9. Tickets reabiertos.
10. Incidentes críticos.
11. Bugs derivados.
12. Cambios derivados.
13. Módulos con más incidencias.
14. Riesgos recurrentes.
15. Acciones preventivas recomendadas.
```

---

## 80. Prompt para revisar operación diaria

```text
Actúa como operador interno y QA operativo del Marketplace Logístico TOS.

Ejecuta la revisión diaria usando `37_OPERATIONS_AND_SUPPORT_PLAN.md`.

Valida:
1. Sistema disponible.
2. Health check.
3. Login básico.
4. Tickets nuevos.
5. Tickets SEV-1/SEV-2.
6. Cotizaciones pendientes.
7. Órdenes activas.
8. Pagos en revisión.
9. Comisiones confirmadas.
10. Documentos pendientes.
11. Audit logs críticos.
12. Errores backend.
13. Backups.
14. Reportes operativos.

Entrega:
1. Checklist diario PASS/FAIL.
2. Incidentes detectados.
3. Escalamientos.
4. Acciones recomendadas.
```

---

## 81. Prompt para evaluar preparación operativa de release

```text
Actúa como Release Manager, QA Lead y responsable de operaciones del Marketplace Logístico TOS.

Evalúa si el release está preparado operativamente usando:
- `35_QA_MASTER_TEST_PLAN.md`
- `37_OPERATIONS_AND_SUPPORT_PLAN.md`
- `34_CHANGELOG_AND_DECISION_LOG.md`
- `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`

Release:
[PEGAR RELEASE]

Valida:
1. QA aprobado.
2. Bugs críticos cerrados.
3. Runbooks mínimos creados.
4. Soporte preparado.
5. Usuarios demo o productivos definidos.
6. Backups configurados.
7. Restauración probada o planificada.
8. Monitoreo mínimo activo.
9. Documentación de soporte creada.
10. Changelog actualizado.
11. Release notes creadas.
12. Riesgos conocidos documentados.

Entrega:
1. Matriz de preparación operativa.
2. Bloqueos.
3. Riesgos.
4. Decisión: READY, NOT READY o READY WITH OBSERVATIONS.
```

---

# SECCIÓN W — CHECKLIST DE USO DEL DOCUMENTO

---

## 82. Checklist de uso

- [ ] Guardar este documento como `37_OPERATIONS_AND_SUPPORT_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo junto con `35_QA_MASTER_TEST_PLAN.md`.
- [ ] Usarlo junto con `34_CHANGELOG_AND_DECISION_LOG.md`.
- [ ] Usarlo junto con `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Usarlo para diseñar el módulo de soporte.
- [ ] Usarlo para definir SLAs.
- [ ] Usarlo para clasificar tickets.
- [ ] Usarlo para escalar incidentes.
- [ ] Usarlo para crear runbooks.
- [ ] Usarlo para operación diaria.
- [ ] Usarlo para reportes de soporte.
- [ ] Usarlo antes de release productivo.
- [ ] Confirmar que soporte no puede saltarse RBAC, scopes ni auditoría.
- [ ] Confirmar que operaciones críticas tienen trazabilidad.

---

## 83. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión database | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de revisión operaciones | Sí |
| Pendiente de validación con roadmap | Sí |
| Listo para usar en Antigravity | Sí, como plan maestro inicial de operaciones y soporte |

---

# Fin del documento

