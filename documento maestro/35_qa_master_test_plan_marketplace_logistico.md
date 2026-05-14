# 35_QA_MASTER_TEST_PLAN.md

# Documento Maestro del Plan de QA y Testing
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `35_QA_MASTER_TEST_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Plan maestro de QA, pruebas funcionales, técnicas, seguridad, regresión, E2E y aceptación |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | Demo temprana, MVP completo y base para releases futuros |
| Estilo visual del producto | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, dashboards y diseño responsive |
| Documentos base principales | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `32_ANTIGRAVITY_PROMPTS_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de QA y testing** para validar el Marketplace Logístico TOS construido en React.js, Nest.js y MySQL.

Su propósito es establecer una estrategia de pruebas clara, repetible y verificable para asegurar que cada módulo, sprint, historia y release cumpla los criterios funcionales, técnicos, de seguridad, auditoría, reportes, permisos, scopes y experiencia de usuario definidos en los documentos maestros.

Este plan debe permitir validar:

1. Flujo completo del marketplace.
2. Funcionalidad por módulo.
3. Seguridad y autenticación.
4. RBAC y permisos.
5. Scopes por perfil.
6. Integridad de datos MySQL.
7. Contratos API Nest.js.
8. Pantallas y componentes React.js.
9. Auditoría crítica.
10. Pagos y comisiones.
11. Documentos y evidencias.
12. TOS, transporte, almacenamiento e inspecciones.
13. Reportes y exportaciones.
14. Notificaciones.
15. Soporte e incidencias.
16. Swagger y documentación técnica.
17. Demo temprana.
18. MVP completo.
19. Releases futuros.

---

## 3. Objetivo general

Definir un plan integral de calidad para validar que el Marketplace Logístico TOS funcione correctamente, respete la seguridad por perfil, proteja los datos de clientes y tiendas, registre auditoría crítica, calcule pagos y comisiones desde backend, mantenga integridad de datos y cumpla los criterios de aceptación antes de cada cierre de sprint, demo o release MVP.

---

## 4. Objetivos específicos

1. Definir estrategia QA general.
2. Definir tipos de pruebas.
3. Definir ambientes de prueba.
4. Definir usuarios demo.
5. Definir datos de prueba.
6. Definir pruebas por sprint.
7. Definir pruebas por módulo.
8. Definir pruebas por perfil.
9. Definir pruebas frontend React.js.
10. Definir pruebas backend Nest.js.
11. Definir pruebas MySQL.
12. Definir pruebas API y Swagger.
13. Definir pruebas de seguridad.
14. Definir pruebas RBAC y scopes.
15. Definir pruebas de auditoría.
16. Definir pruebas financieras.
17. Definir pruebas operativas logísticas.
18. Definir pruebas de reportes.
19. Definir pruebas de regresión.
20. Definir criterios de entrada y salida QA.
21. Definir matriz de severidad de bugs.
22. Definir formato de reporte de defectos.
23. Definir criterios de aceptación de demo temprana.
24. Definir criterios de aceptación del MVP completo.
25. Servir como guía ejecutable para Antigravity.

---

## 5. Alcance del plan QA

El plan QA cubre los siguientes módulos:

| Módulo | Cubierto por QA |
|---|---|
| Arquitectura base | Sí |
| Auth, usuarios y sesiones | Sí |
| Roles, permisos y scopes | Sí |
| Catálogos maestros | Sí |
| Seeds iniciales | Sí |
| Diseño visual marketplace | Sí |
| Home público | Sí |
| Tiendas logísticas | Sí |
| Servicios marketplace | Sí |
| Búsqueda y filtros | Sí |
| Cotizaciones | Sí |
| Órdenes | Sí |
| Pagos | Sí |
| Comisiones | Sí |
| Auditoría | Sí |
| Notificaciones | Sí |
| Documentos y evidencias | Sí |
| TOS | Sí, MVP completo |
| Transporte | Sí, MVP completo |
| Almacenamiento | Sí, MVP completo |
| Inspecciones | Sí, MVP completo |
| Reportes y dashboards | Sí |
| Exportaciones | Sí |
| Soporte | Sí, si se incluye |
| Swagger | Sí |
| README y documentación | Sí |
| Release y demo | Sí |

---

## 6. Fuera de alcance QA del MVP

No se validan como parte del MVP inicial:

1. Integración real con Odoo.
2. Pasarela real de pagos.
3. Split payment real.
4. Integración con BI externo.
5. Integración real con TOS portuario externo.
6. Integración con aduanas gubernamentales.
7. Firma digital avanzada.
8. Facturación fiscal oficial.
9. Motor de IA predictiva.
10. Data warehouse.
11. Mobile app nativa.
12. Pruebas de carga masivas de producción.
13. Auditoría legal externa.

Regla:

```txt
Si una funcionalidad está fuera del MVP, QA solo valida que no se prometa como funcionalidad activa.
```

---

## 7. Principios rectores de QA

1. No cerrar historia sin pruebas mínimas.
2. No cerrar sprint con bugs críticos abiertos.
3. No aceptar endpoint privado sin pruebas 401 y 403.
4. No aceptar módulo sensible sin pruebas de scope.
5. No aceptar pago sin auditoría crítica.
6. No aceptar comisión si se calcula en frontend como fuente de verdad.
7. No aceptar reporte si no respeta permisos y scope.
8. No aceptar exportación sin motivo y audit log.
9. No aceptar upload sin validación de archivo.
10. No aceptar frontend sin loading, empty, error y forbidden cuando aplique.
11. No aceptar backend sin validación DTO.
12. No aceptar cambio de estado sin validar transición.
13. No aceptar datos demo si los seeds no cargan desde cero.
14. No aceptar Swagger incompleto para endpoints principales.
15. No aceptar README si no permite levantar el proyecto.
16. No aceptar MVP si falla el flujo E2E cliente-tienda-admin.

---

## 8. Tipos de pruebas

| Tipo de prueba | Objetivo | Obligatorio |
|---|---|---|
| Pruebas funcionales | Validar reglas de negocio | Sí |
| Pruebas E2E | Validar flujos completos | Sí |
| Pruebas de API | Validar endpoints Nest.js | Sí |
| Pruebas frontend | Validar pantallas React.js | Sí |
| Pruebas de base de datos | Validar migraciones, seeds e integridad | Sí |
| Pruebas de seguridad | Validar auth, RBAC, scopes | Sí |
| Pruebas de auditoría | Validar audit logs críticos | Sí |
| Pruebas financieras | Validar pagos y comisiones | Sí |
| Pruebas documentales | Validar upload/download/review | Sí |
| Pruebas operativas | Validar TOS, transporte, almacenamiento, inspecciones | Sí, MVP completo |
| Pruebas de reportes | Validar KPIs, filtros y exportaciones | Sí |
| Pruebas de regresión | Validar que cambios no rompen flujos previos | Sí |
| Pruebas de humo | Validar que el sistema levanta | Sí |
| Pruebas de responsive | Validar UI desktop/tablet/mobile | Sí |
| Pruebas de accesibilidad básica | Validar uso mínimo de labels, contraste y navegación | Recomendado |
| Pruebas de performance básica | Validar tiempos razonables en listados | Recomendado |

---

## 9. Ambientes de prueba

| Ambiente | Uso | Datos |
|---|---|---|
| Local | Desarrollo individual en Antigravity | Seeds demo |
| Demo | Validación funcional y presentaciones | Seeds demo controlados |
| QA | Pruebas integrales y regresión | Seeds + casos QA |
| Staging | Pre-release futuro | Datos simulados cercanos a producción |
| Producción | Fuera del alcance del MVP inicial | Datos reales |

Regla:

```txt
Las pruebas del MVP deben poder ejecutarse al menos en Local/Demo usando seeds reproducibles.
```

---

## 10. Datos de prueba base

### 10.1 Usuarios demo obligatorios

| Usuario demo | Perfil | Uso QA |
|---|---|---|
| `admin.demo@example.com` | Superadministrador | Validar administración global |
| `client.demo@example.com` | Cliente final | Validar flujo comprador |
| `store.demo@example.com` | Tienda logística | Validar proveedor logístico |
| `auditor.demo@example.com` | Auditor | Validar solo lectura y auditoría |
| `operator.demo@example.com` | Operador interno | Validar gestión operativa |
| `carrier.demo@example.com` | Transportista | Validar transporte |
| `warehouse.demo@example.com` | Almacén fiscal | Validar inventario/almacenamiento |
| `inspector.demo@example.com` | Inspector | Validar inspecciones |
| `support.demo@example.com` | Soporte técnico | Validar tickets |

### 10.2 Datos demo obligatorios

| Dato | Cantidad mínima | Uso |
|---|---:|---|
| Tiendas activas | 3 | Búsqueda y servicios |
| Tienda pendiente | 1 | Aprobación admin |
| Tienda suspendida | 1 | Validación de bloqueo operativo |
| Servicios publicados | 10 | Directorio |
| Servicios borrador | 3 | Visibilidad restringida |
| Cotizaciones pendientes | 3 | Cliente/tienda |
| Cotizaciones respondidas | 3 | Aprobación/rechazo |
| Órdenes activas | 3 | Seguimiento |
| Orden pagada | 1 | Finanzas |
| Pago pendiente | 1 | Revisión |
| Pago rechazado | 1 | Motivo rechazo |
| Comisión confirmada | 1 | Reporte financiero |
| Audit logs críticos | 5 | Auditoría |
| Documentos cargados | 3 | Documental |
| Contenedores TOS | 2 | Operación portuaria |
| Viajes | 2 | Transporte |
| Inventario | 2 | Almacenamiento |
| Inspecciones | 2 | Checklists |
| Reportes demo | 5 | Dashboards |

---

## 11. Roles QA

| Rol QA | Responsabilidad |
|---|---|
| QA Lead | Coordinar plan, matriz, cierre y defectos |
| Product Owner | Validar criterios funcionales y alcance |
| Frontend QA | Validar pantallas, componentes, responsive y UX |
| Backend QA | Validar API, DTOs, servicios y errores |
| Security QA | Validar auth, RBAC, scopes y archivos |
| Database QA | Validar migraciones, seeds e integridad |
| Financial QA | Validar pagos, comisiones y reportes financieros |
| Operations QA | Validar TOS, transporte, almacenamiento e inspecciones |
| Audit QA | Validar audit logs y trazabilidad |
| Release QA | Validar demo, release notes y criterios de salida |

---

# SECCIÓN A — CRITERIOS DE ENTRADA Y SALIDA QA

---

## 12. Criterios de entrada QA por historia

Una historia puede entrar a QA cuando:

1. Código implementado.
2. Migraciones ejecutan si aplica.
3. Seeds actualizados si aplica.
4. Endpoint disponible si aplica.
5. Pantalla disponible si aplica.
6. DTOs implementados.
7. Validaciones básicas implementadas.
8. Permisos definidos.
9. Scope definido.
10. Auditoría implementada si aplica.
11. Swagger actualizado si aplica.
12. QA conoce datos de prueba.
13. Criterios de aceptación están claros.

---

## 13. Criterios de salida QA por historia

Una historia sale de QA como aceptada cuando:

1. Caso exitoso pasa.
2. Casos negativos pasan.
3. 401 probado si endpoint privado.
4. 403 probado si requiere permiso.
5. Scope probado si maneja datos por usuario/tienda.
6. DTO inválido devuelve 400.
7. Estado inválido se rechaza.
8. Auditoría existe si acción crítica.
9. Notificación existe si aplica.
10. Frontend muestra estados correctos.
11. Swagger documenta endpoint si aplica.
12. No hay bugs críticos ni altos bloqueantes.

---

## 14. Criterios de entrada QA por sprint

Un sprint entra a QA cuando:

1. Todas las historias comprometidas están implementadas o claramente excluidas.
2. Build frontend pasa.
3. Build backend pasa.
4. Migraciones corren.
5. Seeds corren.
6. Endpoints nuevos están disponibles.
7. Pantallas nuevas están navegables.
8. Roles/permisos están cargados.
9. Datos demo existen.
10. No hay errores de arranque.

---

## 15. Criterios de salida QA por sprint

Un sprint se acepta cuando:

1. Historias P0 pasan QA.
2. Historias P1 del sprint pasan QA o quedan justificadas.
3. No hay bugs críticos abiertos.
4. No hay bugs altos sin plan de mitigación.
5. Flujos principales del sprint pasan.
6. Seguridad del sprint pasa.
7. Scopes del sprint pasan.
8. Auditoría del sprint pasa si aplica.
9. Swagger está actualizado.
10. README o notas técnicas están actualizadas si aplica.
11. Checklist de artefactos está completo para el sprint.

---

## 16. Criterios de salida para demo temprana

La demo temprana se acepta cuando pasan estos flujos:

1. Usuario entra al home público.
2. Usuario busca servicios.
3. Usuario abre perfil de tienda.
4. Usuario abre detalle de servicio.
5. Cliente se registra o inicia sesión.
6. Cliente solicita cotización.
7. Tienda responde cotización.
8. Cliente aprueba cotización.
9. Sistema crea orden.
10. Cliente registra pago con comprobante.
11. Admin confirma pago.
12. Sistema confirma comisión.
13. Sistema genera auditoría crítica.
14. Sistema genera notificaciones básicas.
15. Dashboard cliente muestra la orden.
16. Dashboard tienda muestra la orden y comisión.
17. Dashboard admin muestra KPIs básicos.
18. Auditor puede consultar eventos críticos.

---

## 17. Criterios de salida para MVP completo

El MVP completo se acepta cuando:

1. Todo lo de demo temprana pasa.
2. Documentos y evidencias pasan QA.
3. TOS básico pasa QA.
4. Transporte pasa QA.
5. Almacenamiento pasa QA.
6. Inspecciones pasan QA.
7. Reportes por perfil pasan QA.
8. Exportaciones pasan QA.
9. Soporte básico pasa QA si está incluido.
10. Swagger completo pasa revisión.
11. README permite instalación desde cero.
12. Seeds cargan desde cero.
13. Pruebas RBAC pasan.
14. Pruebas de scopes pasan.
15. Pruebas de auditoría pasan.
16. No hay bugs críticos.
17. Release notes son coherentes con el alcance real.

---

# SECCIÓN B — MATRIZ GENERAL DE PRUEBAS

---

## 18. Matriz de pruebas por módulo

| Módulo | Funcional | API | UI | DB | Seguridad | Scope | Auditoría | E2E | Prioridad |
|---|---|---|---|---|---|---|---|---|---|
| Auth | Sí | Sí | Sí | Sí | Sí | N/A | Sí | Sí | P0 |
| RBAC/Scopes | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Catálogos | Sí | Sí | Sí | Sí | Sí | N/A | No | No | P0 |
| Tiendas | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Servicios | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Búsqueda | Sí | Sí | Sí | Sí | No | No | No | Sí | P0 |
| Cotizaciones | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Órdenes | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Pagos | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P0 |
| Comisiones | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Auditoría | Sí | Sí | Sí | Sí | Sí | Sí | N/A | Sí | P0 |
| Notificaciones | Sí | Sí | Sí | Sí | Sí | Sí | No | Sí | P1 |
| Documentos | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| TOS | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Transporte | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Almacenamiento | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Inspecciones | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Reportes | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | P1 |
| Soporte | Sí | Sí | Sí | Sí | Sí | Sí | Sí | No | P2 |
| Swagger | No | Sí | No | No | Sí | No | No | No | P0 |
| README | No | No | No | No | Sí | No | No | No | P0 |

---

## 19. Matriz de pruebas por perfil

| Perfil | Login | Dashboard | Menú | Datos propios | Datos ajenos bloqueados | Acciones permitidas | Acciones prohibidas | Prioridad |
|---|---|---|---|---|---|---|---|---|
| Cliente final | Sí | Sí | Sí | Sí | Sí | Cotizar, aprobar, pagar | Confirmar pagos, ver comisiones internas | P0 |
| Tienda logística | Sí | Sí | Sí | Sí | Sí | Publicar servicios, responder cotizaciones | Ver otra tienda | P0 |
| Superadministrador | Sí | Sí | Sí | Global | N/A | Aprobar, revisar, configurar | Saltarse auditoría | P0 |
| Operador interno | Sí | Sí | Sí | Según módulo | Sí | Gestionar operaciones autorizadas | Acceso global no asignado | P1 |
| Auditor | Sí | Sí | Sí | Global readonly | N/A | Ver logs/reportes | Modificar datos | P0 |
| Transportista | Sí | Sí | Sí | Viajes propios/asignados | Sí | Actualizar viajes | Ver otros viajes | P1 |
| Almacén fiscal | Sí | Sí | Sí | Inventario propio | Sí | Recibir/despachar | Ver otros almacenes | P1 |
| Inspector | Sí | Sí | Sí | Inspecciones asignadas | Sí | Ejecutar checklist | Ver inspecciones ajenas | P1 |
| Soporte técnico | Sí | Sí | Sí | Tickets autorizados | Sí | Responder tickets | Confirmar pagos | P2 |

---

# SECCIÓN C — CASOS E2E MAESTROS

---

## 20. E2E-001 — Flujo comercial completo cliente-tienda-admin

| Campo | Valor |
|---|---|
| Código | E2E-001 |
| Nombre | Flujo completo marketplace comercial |
| Prioridad | P0 |
| Perfiles | Cliente, tienda, superadministrador, auditor |
| Módulos | Home, búsqueda, servicios, cotizaciones, órdenes, pagos, comisiones, auditoría, notificaciones |

### Precondiciones

1. Cliente demo activo.
2. Tienda demo activa.
3. Servicio demo publicado.
4. Regla de comisión activa.
5. Admin demo activo.
6. Auditor demo activo.

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente abre home | Home carga correctamente |
| 2 | Cliente busca servicio | Se muestran servicios publicados |
| 3 | Cliente abre detalle de servicio | Se muestra tienda, tarifa, SLA y CTA |
| 4 | Cliente inicia sesión | Login exitoso |
| 5 | Cliente solicita cotización | Cotización queda `PENDING` |
| 6 | Tienda inicia sesión | Login exitoso |
| 7 | Tienda responde cotización | Cotización queda `RESPONDED` |
| 8 | Cliente aprueba cotización | Cotización queda aprobada |
| 9 | Sistema crea orden | Orden queda `CREATED` o `IN_PROCESS` |
| 10 | Cliente registra pago | Pago queda `SUBMITTED` |
| 11 | Admin confirma pago | Pago queda `CONFIRMED` |
| 12 | Sistema actualiza orden | Estado financiero confirmado |
| 13 | Sistema calcula comisión | Comisión confirmada |
| 14 | Auditor revisa audit log | Eventos críticos visibles |
| 15 | Cliente revisa notificaciones | Notificaciones propias visibles |
| 16 | Tienda revisa dashboard | Orden y comisión visibles |

### Resultado esperado final

```txt
El flujo debe completarse sin errores críticos, respetando permisos, scopes, auditoría y cálculos backend.
```

---

## 21. E2E-002 — Seguridad por perfil y scope

| Campo | Valor |
|---|---|
| Código | E2E-002 |
| Nombre | Seguridad RBAC y scopes |
| Prioridad | P0 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Usuario sin token consulta endpoint privado | 401 |
| 2 | Cliente intenta entrar a `/admin/dashboard` | 403 o AccessDenied |
| 3 | Cliente A intenta ver orden de Cliente B | 403 |
| 4 | Tienda A intenta ver cotización de Tienda B | 403 |
| 5 | Tienda A intenta confirmar pago | 403 |
| 6 | Auditor intenta modificar comisión | 403 |
| 7 | Transportista A intenta ver viaje de Transportista B | 403 |
| 8 | Inspector A intenta ver inspección de Inspector B | 403 |
| 9 | Admin consulta datos globales | 200 |

### Resultado esperado final

```txt
No debe existir fuga de datos entre clientes, tiendas, transportistas, inspectores o perfiles no autorizados.
```

---

## 22. E2E-003 — Flujo financiero pago y comisión

| Campo | Valor |
|---|---|
| Código | E2E-003 |
| Nombre | Pago, confirmación y comisión |
| Prioridad | P0 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente registra pago válido | Pago `SUBMITTED` |
| 2 | Cliente carga comprobante PDF | Comprobante asociado |
| 3 | Admin revisa pago | Pago `IN_REVIEW` opcional |
| 4 | Admin confirma pago | Pago `CONFIRMED` |
| 5 | Orden actualiza estado financiero | `PAID` o equivalente |
| 6 | Backend calcula comisión | Comisión correcta |
| 7 | Backend calcula neto proveedor | Neto no negativo |
| 8 | Tienda consulta comisión | Ve solo su comisión |
| 9 | Auditor revisa log | Confirmación auditada |

### Casos negativos

| Caso | Resultado esperado |
|---|---|
| Cliente intenta confirmar pago | 403 |
| Rechazo sin motivo | 400 |
| Monto negativo | 400 |
| Comisión mayor al total sin regla válida | 422 |
| Neto proveedor negativo | 422 |

---

## 23. E2E-004 — Flujo documental

| Campo | Valor |
|---|---|
| Código | E2E-004 |
| Nombre | Documentos y evidencias |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Usuario autorizado carga PDF | Documento creado |
| 2 | Usuario autorizado carga imagen | Evidencia creada |
| 3 | Usuario intenta cargar `.exe` | Rechazado |
| 4 | Usuario intenta archivo excedido | Rechazado |
| 5 | Operador valida documento | Estado `VALIDATED` |
| 6 | Operador rechaza documento con motivo | Estado `REJECTED` |
| 7 | Usuario no autorizado descarga documento | 403 |
| 8 | Auditor consulta evento documental | Audit log visible si aplica |

---

## 24. E2E-005 — Flujo TOS básico

| Campo | Valor |
|---|---|
| Código | E2E-005 |
| Nombre | Operación TOS contenedor, gate y bloqueo |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Operador registra contenedor | Contenedor creado |
| 2 | Operador registra gate-in | Estado actualizado |
| 3 | Operador crea bloqueo | Bloqueo activo |
| 4 | Operador intenta gate-out | Falla por bloqueo |
| 5 | Usuario autorizado libera bloqueo | Bloqueo liberado |
| 6 | Operador registra gate-out | Gate-out exitoso |
| 7 | Auditor revisa log | Gate-out auditado |

---

## 25. E2E-006 — Flujo transporte

| Campo | Valor |
|---|---|
| Código | E2E-006 |
| Nombre | Transporte, incidencia y entrega POD |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Transportista crea viaje | Viaje creado |
| 2 | Asigna conductor/vehículo | Asignación exitosa |
| 3 | Cambia a programado | Estado válido |
| 4 | Cambia a en tránsito | Estado válido |
| 5 | Reporta incidencia sin motivo | 400 |
| 6 | Reporta incidencia con motivo | Incidencia registrada |
| 7 | Intenta entregar sin POD | 422 |
| 8 | Carga POD y entrega | Viaje entregado |
| 9 | Orden actualiza timeline | Evento visible |

---

## 26. E2E-007 — Flujo almacenamiento

| Campo | Valor |
|---|---|
| Código | E2E-007 |
| Nombre | Recepción, bloqueo y despacho de inventario |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Almacén recibe inventario | Estado `RECEIVED` |
| 2 | Ubica inventario | Ubicación actualizada |
| 3 | Bloquea inventario | Bloqueo activo |
| 4 | Intenta despachar inventario bloqueado | 422 |
| 5 | Libera bloqueo | Bloqueo liberado |
| 6 | Despacha inventario | Estado `DISPATCHED` |
| 7 | Auditor revisa log | Despacho auditado |

---

## 27. E2E-008 — Flujo inspecciones

| Campo | Valor |
|---|---|
| Código | E2E-008 |
| Nombre | Inspección con checklist y evidencia |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Operador crea inspección | Inspección creada |
| 2 | Operador asigna inspector | Estado `ASSIGNED` |
| 3 | Inspector abre inspección | Solo asignadas visibles |
| 4 | Inspector completa checklist parcial | No permite enviar si obligatorio incompleto |
| 5 | Inspector carga evidencia obligatoria | Evidencia asociada |
| 6 | Inspector envía a revisión | Estado `IN_REVIEW` |
| 7 | Operador rechaza sin motivo | 400 |
| 8 | Operador rechaza con motivo | Estado `REJECTED` |
| 9 | Auditor revisa log | Rechazo auditado |

---

## 28. E2E-009 — Reportes y exportaciones

| Campo | Valor |
|---|---|
| Código | E2E-009 |
| Nombre | Dashboards, reportes y exportación controlada |
| Prioridad | P1 |

### Pasos

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente abre dashboard | Solo KPIs propios |
| 2 | Tienda abre dashboard | Solo KPIs de tienda |
| 3 | Admin abre dashboard global | KPIs globales |
| 4 | Auditor abre reportes | Solo lectura |
| 5 | Tienda intenta ver reporte de otra tienda | 403 |
| 6 | Usuario exporta sin permiso | 403 |
| 7 | Usuario exporta sin motivo | 400 |
| 8 | Admin exporta con motivo | CSV generado |
| 9 | Auditor revisa audit log | Exportación auditada |

---

# SECCIÓN D — PRUEBAS POR MÓDULO

---

## 29. QA-AUTH — Pruebas de autenticación

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Registrar usuario válido | P0 | Usuario creado |
| Registrar email duplicado | P0 | 409 o error controlado |
| Login válido | P0 | Token generado |
| Login con password incorrecta | P0 | 401 |
| Login con usuario inexistente | P0 | 401 genérico |
| Logout | P0 | Sesión revocada |
| `/auth/me` con token válido | P0 | Usuario actual |
| `/auth/me` sin token | P0 | 401 |
| Token expirado | P0 | 401 |
| Usuario suspendido | P0 | 403 |

---

## 30. QA-RBAC — Pruebas de roles y permisos

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Admin accede panel global | P0 | 200 |
| Cliente accede panel admin | P0 | 403 |
| Auditor modifica pago | P0 | 403 |
| Tienda confirma pago | P0 | 403 |
| Operador sin permiso ve reportes financieros | P0 | 403 |
| Soporte intenta ajustar comisión | P1 | 403 |
| PermissionGate oculta acción no permitida | P1 | Acción no visible |
| Endpoint sin permission guard detectado | P0 | Falla QA |

---

## 31. QA-SCOPE — Pruebas de scope

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Cliente A ve orden propia | P0 | 200 |
| Cliente A ve orden Cliente B | P0 | 403 |
| Tienda A ve servicio propio | P0 | 200 |
| Tienda A edita servicio Tienda B | P0 | 403 |
| Tienda A ve pago Tienda B | P0 | 403 |
| Transportista A ve viaje propio | P1 | 200 |
| Transportista A ve viaje ajeno | P1 | 403 |
| Inspector A ve inspección asignada | P1 | 200 |
| Inspector A ve inspección ajena | P1 | 403 |
| Auditor ve global readonly | P0 | 200 sin acciones de edición |

---

## 32. QA-CATALOGS — Pruebas de catálogos

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Listar catálogos activos | P0 | 200 |
| Listar ítems por catálogo | P0 | 200 |
| Ítem inactivo no aparece en selects | P1 | Oculto |
| Código duplicado | P0 | Error de integridad |
| Seeds cargan desde cero | P0 | Sin errores |

---

## 33. QA-STORES — Pruebas de tiendas

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear tienda válida | P0 | Estado `PENDING` |
| Admin aprueba tienda | P0 | Estado `ACTIVE` |
| Admin rechaza con motivo | P0 | Estado `REJECTED` |
| Admin suspende tienda | P0 | Estado `SUSPENDED` |
| Tienda suspendida crea servicio | P0 | 403 o 422 |
| Usuario tienda ve su tienda | P0 | 200 |
| Usuario tienda ve otra tienda privada | P0 | 403 |
| Perfil público tienda activa | P0 | Visible |
| Perfil público tienda suspendida | P0 | Oculto o no operativa |
| Aprobación genera audit log | P0 | Log creado |

---

## 34. QA-SERVICES — Pruebas de servicios

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear servicio válido | P0 | Servicio creado |
| Crear servicio sin categoría | P0 | 400 |
| Tienda no aprobada crea servicio | P0 | 403/422 |
| Publicar servicio | P0 | Estado `PUBLISHED` |
| Despublicar servicio | P0 | Estado `DRAFT/INACTIVE` |
| Servicio publicado aparece en búsqueda | P0 | Visible |
| Servicio inactivo no aparece | P0 | Oculto |
| Tienda A edita servicio Tienda B | P0 | 403 |
| Publicación genera audit log | P1 | Log creado |

---

## 35. QA-SEARCH — Pruebas de búsqueda

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Buscar por palabra clave existente | P0 | Resultados |
| Buscar por palabra inexistente | P0 | Empty state |
| Filtrar por categoría | P0 | Resultados filtrados |
| Filtrar por tipo de tienda | P1 | Resultados filtrados |
| Filtrar por puerto/terminal | P1 | Resultados filtrados |
| Resultado abre detalle | P0 | Página detalle |
| Servicio inactivo no aparece | P0 | Oculto |
| Página responsive | P1 | Layout correcto |

---

## 36. QA-QUOTATIONS — Pruebas de cotizaciones

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Cliente solicita cotización | P0 | `PENDING` |
| Solicitud sin servicio válido | P0 | 400/404 |
| Tienda dueña responde | P0 | `RESPONDED` |
| Tienda no dueña responde | P0 | 403 |
| Cliente dueño aprueba | P0 | `APPROVED` y orden creada/lista |
| Cliente no dueño aprueba | P0 | 403 |
| Cliente rechaza | P1 | `REJECTED` |
| Respuesta notifica al cliente | P1 | Notificación creada |
| Aprobación genera audit/timeline | P0 | Evento creado |

---

## 37. QA-ORDERS — Pruebas de órdenes

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear orden desde cotización aprobada | P0 | Orden creada |
| Crear orden desde cotización pendiente | P0 | 422 |
| Cliente lista órdenes propias | P0 | Solo propias |
| Tienda lista órdenes propias | P0 | Solo su tienda |
| Admin lista todas | P0 | Global |
| Auditor ve orden readonly | P0 | Sin edición |
| Ver timeline | P0 | Eventos visibles |
| Cancelar sin motivo | P0 | 400 |
| Cancelar con motivo | P0 | Cancelada + audit log |
| Cerrar orden en estado inválido | P1 | 422 |

---

## 38. QA-PAYMENTS — Pruebas de pagos

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Cliente crea pago válido | P0 | Pago creado |
| Pago con monto cero | P0 | 400 |
| Pago con monto negativo | P0 | 400 |
| Pago de orden ajena | P0 | 403 |
| Cargar comprobante válido | P0 | Archivo asociado |
| Confirmar pago como admin | P0 | `CONFIRMED` |
| Confirmar pago como cliente | P0 | 403 |
| Rechazar pago sin motivo | P0 | 400 |
| Rechazar pago con motivo | P0 | `REJECTED` |
| Confirmación actualiza orden | P0 | Estado financiero actualizado |
| Confirmación genera audit log | P0 | Log crítico |

---

## 39. QA-COMMISSIONS — Pruebas de comisiones

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear regla porcentaje | P1 | Regla activa |
| Crear regla fija | P1 | Regla activa |
| Regla con porcentaje inválido | P1 | 400 |
| Calcular comisión | P0 | Monto correcto |
| Neto proveedor negativo | P0 | 422 |
| Pago confirmado confirma comisión | P0 | Comisión confirmada |
| Tienda ve comisión propia | P1 | 200 |
| Tienda ve comisión ajena | P0 | 403 |
| Cliente ve comisión interna | P0 | No visible |
| Cambio de regla genera audit log | P0 | Log crítico |

---

## 40. QA-AUDIT — Pruebas de auditoría

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Confirmar pago genera audit log | P0 | Log crítico |
| Cambiar rol genera audit log | P0 | Log crítico |
| Ajustar comisión genera audit log | P0 | Log crítico |
| Gate-out genera audit log | P1 | Log crítico |
| Despacho genera audit log | P1 | Log crítico |
| Exportar reporte genera audit log | P1 | Log crítico |
| Audit log no guarda password | P0 | Sanitizado |
| Audit log no guarda tokens | P0 | Sanitizado |
| Auditor consulta logs | P0 | 200 |
| Cliente consulta logs internos | P0 | 403 |

---

## 41. QA-NOTIFICATIONS — Pruebas de notificaciones

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Cotización creada notifica tienda | P1 | Notificación creada |
| Cotización respondida notifica cliente | P1 | Notificación creada |
| Pago confirmado notifica cliente/tienda | P1 | Notificación creada |
| Usuario ve notificaciones propias | P1 | 200 |
| Usuario ve notificaciones ajenas | P0 | 403 |
| Marcar como leída | P1 | Estado actualizado |
| Click abre ruta relacionada | P2 | Navega correctamente |

---

## 42. QA-DOCUMENTS — Pruebas de documentos

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Subir PDF válido | P1 | Documento creado |
| Subir imagen válida | P1 | Evidencia creada |
| Subir `.exe` | P0 | Rechazado |
| Subir archivo excedido | P0 | Rechazado |
| Descargar con permiso | P1 | Archivo descargado |
| Descargar sin permiso | P0 | 403 |
| Validar documento | P1 | `VALIDATED` |
| Rechazar sin motivo | P0 | 400 |
| Rechazar con motivo | P1 | `REJECTED` |
| Revisión genera audit log | P1 | Log creado |

---

## 43. QA-TOS — Pruebas TOS

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Registrar contenedor | P1 | Contenedor creado |
| Número contenedor inválido | P1 | 400 |
| Gate-in | P1 | Estado actualizado |
| Crear bloqueo | P1 | Bloqueo activo |
| Gate-out con bloqueo | P0 | 422 |
| Liberar bloqueo sin permiso | P0 | 403 |
| Liberar bloqueo con permiso | P1 | Liberado |
| Gate-out válido | P1 | Salida registrada |
| Gate-out genera audit log | P0 | Log crítico |

---

## 44. QA-TRANSPORT — Pruebas transporte

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear viaje | P1 | Viaje creado |
| Asignar conductor/vehículo | P1 | Asignado |
| Estado inválido | P1 | 422 |
| Reportar incidencia sin motivo | P0 | 400 |
| Reportar incidencia con motivo | P1 | Incidencia creada |
| Entrega sin POD | P0 | 422 |
| Entrega con POD | P1 | Entregado |
| Transportista ve viaje ajeno | P0 | 403 |
| Entrega genera audit log | P1 | Log creado |

---

## 45. QA-STORAGE — Pruebas almacenamiento

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Recibir inventario | P1 | `RECEIVED` |
| Mover inventario | P1 | Ubicación actualizada |
| Bloquear inventario | P1 | Bloqueo activo |
| Despachar inventario bloqueado | P0 | 422 |
| Liberar bloqueo | P1 | Liberado |
| Despachar inventario válido | P1 | `DISPATCHED` |
| Almacén ve inventario ajeno | P0 | 403 |
| Despacho genera audit log | P1 | Log crítico |

---

## 46. QA-INSPECTIONS — Pruebas inspecciones

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Crear inspección | P1 | Creada |
| Asignar inspector | P1 | `ASSIGNED` |
| Inspector ve asignada | P1 | 200 |
| Inspector ve ajena | P0 | 403 |
| Enviar checklist incompleto | P0 | 422 |
| Enviar sin evidencia obligatoria | P0 | 422 |
| Enviar a revisión | P1 | `IN_REVIEW` |
| Rechazar sin motivo | P0 | 400 |
| Rechazar con motivo | P1 | `REJECTED` |
| Rechazo genera audit log | P1 | Log crítico |

---

## 47. QA-REPORTS — Pruebas reportes

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Cliente dashboard | P1 | Datos propios |
| Tienda dashboard | P1 | Datos de tienda |
| Admin dashboard | P1 | Global |
| Auditor dashboard | P1 | Readonly |
| Reporte financiero sin permiso | P0 | 403 |
| Exportar sin permiso | P0 | 403 |
| Exportar sin motivo | P0 | 400 |
| Exportar con permiso y motivo | P1 | CSV creado |
| Exportación genera audit log | P1 | Log crítico |
| Tienda exporta datos ajenos | P0 | 403 |

---

## 48. QA-SUPPORT — Pruebas soporte

| Caso | Prioridad | Resultado esperado |
|---|---|---|
| Usuario crea ticket | P2 | Ticket creado |
| Usuario ve tickets propios | P2 | 200 |
| Usuario ve ticket ajeno | P0 | 403 |
| Soporte responde ticket | P2 | Comentario creado |
| Cambiar estado ticket | P2 | Estado actualizado |
| Soporte confirma pago | P0 | 403 |

---

# SECCIÓN E — PRUEBAS FRONTEND REACT.JS

---

## 49. Checklist QA frontend por pantalla

Cada pantalla debe validarse con:

| Criterio | Obligatorio |
|---|---|
| Carga inicial correcta | Sí |
| Loading state | Sí, si consume API |
| Empty state | Sí, si lista datos |
| Error state | Sí |
| Forbidden state | Sí, si pantalla protegida |
| Responsive desktop | Sí |
| Responsive tablet | Recomendado |
| Responsive mobile | Sí |
| Acciones visibles según permiso | Sí |
| Formularios validan campos requeridos | Sí |
| Mensajes de error claros | Sí |
| No expone datos sensibles | Sí |
| Navegación consistente | Sí |
| Badges de estado correctos | Sí |
| Montos y fechas formateados | Sí |

---

## 50. Pruebas visuales marketplace tipo Yelp

| Caso | Resultado esperado |
|---|---|
| Home muestra hero con buscador | Visible y funcional |
| Categorías se muestran como cards | Correcto |
| Servicios se muestran como cards | Correcto |
| Tiendas se muestran como cards | Correcto |
| Filtros son visibles | Correcto |
| Perfil público de tienda tiene encabezado claro | Correcto |
| Detalle de servicio tiene CTA de cotización | Correcto |
| Badges de estado/categoría son consistentes | Correcto |
| UI no se rompe en mobile | Correcto |

---

# SECCIÓN F — PRUEBAS API NEST.JS

---

## 51. Checklist QA API por endpoint

Cada endpoint debe probar:

| Prueba | Obligatorio |
|---|---|
| 200/201 caso exitoso | Sí |
| 400 DTO inválido | Sí |
| 401 sin token | Sí, si privado |
| 403 sin permiso | Sí, si privado |
| 403 fuera de scope | Sí, si maneja datos |
| 404 recurso inexistente | Sí |
| 409 conflicto si aplica | Sí |
| 422 transición/estado inválido | Sí, si aplica |
| Paginación | Sí, si listado |
| Filtros | Sí, si listado |
| Swagger documentado | Sí |
| Audit log si crítico | Sí |

---

## 52. Convención de respuesta esperada de error

```json
{
  "statusCode": 403,
  "errorCode": "FORBIDDEN",
  "message": "You do not have permission to perform this action",
  "timestamp": "2026-05-12T12:00:00.000Z",
  "path": "/api/orders/123"
}
```

Criterios:

1. Debe tener `statusCode`.
2. Debe tener `errorCode`.
3. Debe tener `message`.
4. No debe exponer stack trace en producción.
5. No debe exponer SQL crudo.
6. No debe exponer secretos.

---

# SECCIÓN G — PRUEBAS MYSQL Y DATOS

---

## 53. Checklist QA database

| Prueba | Obligatorio |
|---|---|
| Migraciones desde cero | Sí |
| Seeds desde cero | Sí |
| Foreign keys válidas | Sí |
| Índices principales existen | Sí |
| Campos monetarios DECIMAL | Sí |
| Password no texto plano | Sí |
| Tokens no texto plano | Sí |
| Códigos únicos | Sí |
| Estados válidos | Sí |
| Soft delete si aplica | Sí |
| Integridad orden-pago-comisión | Sí |
| Integridad tienda-servicio-cotización | Sí |
| Integridad documento-entidad | Sí |

---

## 54. Pruebas de integridad financiera

| Caso | Resultado esperado |
|---|---|
| Pago asociado a orden existente | Válido |
| Pago asociado a orden inexistente | FK/error |
| Comisión asociada a orden existente | Válido |
| Comisión sin regla aplicada cuando se requiere | Error o regla default |
| Comisión negativa | Error |
| Neto proveedor negativo | Error |
| Montos con más decimales de lo permitido | Redondeo/control backend |

---

# SECCIÓN H — PRUEBAS DE SEGURIDAD

---

## 55. Checklist QA seguridad

| Prueba | Prioridad | Resultado esperado |
|---|---|---|
| Endpoint privado sin token | P0 | 401 |
| Token inválido | P0 | 401 |
| Token expirado | P0 | 401 |
| Usuario suspendido | P0 | 403 |
| Usuario sin permiso | P0 | 403 |
| Violación de scope | P0 | 403 |
| Auditor intenta modificar | P0 | 403 |
| Upload ejecutable | P0 | Rechazado |
| Error backend no expone stack | P0 | Error seguro |
| Audit log sin secretos | P0 | Sanitizado |
| `.env.example` sin secretos reales | P0 | Correcto |
| Swagger no expone producción insegura | P1 | Correcto |

---

## 56. Pruebas de campos sensibles

Los siguientes campos nunca deben aparecer en respuesta API, logs o audit logs:

1. `password`
2. `password_hash`
3. `access_token` en logs
4. `refresh_token` en logs
5. `reset_token`
6. `api_key`
7. `secret`
8. `private_key`
9. `database_password`
10. `smtp_password`

---

# SECCIÓN I — PRUEBAS DE AUDITORÍA

---

## 57. Checklist QA auditoría crítica

| Acción | Audit log obligatorio | Prioridad |
|---|---|---|
| Confirmar pago | Sí | P0 |
| Rechazar pago | Sí | P0 |
| Cambiar regla de comisión | Sí | P0 |
| Ajustar comisión | Sí | P0 |
| Asignar rol | Sí | P0 |
| Cambiar permiso | Sí | P0 |
| Aprobar tienda | Sí | P0 |
| Suspender tienda | Sí | P0 |
| Publicar servicio | Sí | P1 |
| Cancelar orden | Sí | P0 |
| Cerrar orden | Sí | P0 |
| Gate-out TOS | Sí | P1 |
| Bloquear contenedor | Sí | P1 |
| Despachar inventario | Sí | P1 |
| Rechazar inspección | Sí | P1 |
| Exportar reporte | Sí | P1 |

---

## 58. Validación mínima de audit log

Cada audit log debe contener:

1. Actor.
2. Perfil.
3. Acción.
4. Módulo.
5. Entidad.
6. Entity ID o código.
7. Fecha servidor.
8. Severidad.
9. Motivo si aplica.
10. Old values si aplica.
11. New values si aplica.
12. IP si disponible.
13. User agent si disponible.

---

# SECCIÓN J — PRUEBAS DE REPORTES

---

## 59. Checklist QA reportes

| Prueba | Prioridad | Resultado esperado |
|---|---|---|
| Dashboard cliente | P1 | Solo datos propios |
| Dashboard tienda | P1 | Solo datos de tienda |
| Dashboard admin | P1 | Datos globales |
| Dashboard auditor | P1 | Readonly |
| Filtro por fecha | P1 | Datos filtrados |
| Reporte financiero con permiso | P1 | 200 |
| Reporte financiero sin permiso | P0 | 403 |
| Reporte exportable | P1 | CSV |
| Exportar sin motivo | P0 | 400 |
| Exportar genera audit log | P1 | Log crítico |
| Exportación respeta scope | P0 | Correcto |

---

## 60. KPIs mínimos a validar

| KPI | Fórmula esperada |
|---|---|
| Órdenes activas | Conteo de órdenes en estados activos |
| Cotizaciones pendientes | Conteo de cotizaciones `PENDING` |
| Pagos confirmados | Suma de pagos `CONFIRMED` |
| Pagos pendientes | Suma de pagos pendientes/revisión |
| Comisiones confirmadas | Suma de comisiones `CONFIRMED` |
| Neto proveedor | Total orden - comisión aplicada |
| Servicios publicados | Conteo de servicios `PUBLISHED` |
| Tiendas activas | Conteo de tiendas `ACTIVE` |
| Eventos críticos | Conteo audit logs `CRITICAL` |

---

# SECCIÓN K — PRUEBAS DE REGRESIÓN

---

## 61. Suite de regresión mínima por sprint

Después de cada sprint desde Sprint 08, ejecutar:

1. Login cliente.
2. Login tienda.
3. Login admin.
4. Buscar servicio.
5. Solicitar cotización.
6. Responder cotización.
7. Aprobar cotización.
8. Ver orden.
9. Validar scopes cliente/tienda.
10. Validar endpoint privado sin token.

Después de Sprint 10, agregar:

11. Registrar pago.
12. Confirmar pago.
13. Ver audit log.

Después de Sprint 11, agregar:

14. Validar comisión.
15. Validar neto proveedor.

Después de Sprint 18, agregar:

16. Validar dashboards.
17. Validar reportes.

Después de Sprint 19, agregar:

18. Validar exportación con motivo.
19. Validar audit log de exportación.

---

# SECCIÓN L — BUGS, SEVERIDAD Y REPORTE

---

## 62. Severidad de defectos

| Severidad | Código | Definición | Bloquea release |
|---|---|---|---|
| Crítico | `CRITICAL` | Rompe flujo principal, seguridad, pagos, comisiones, datos o auditoría | Sí |
| Alto | `HIGH` | Afecta módulo importante, tiene workaround difícil | Depende |
| Medio | `MEDIUM` | Error funcional menor con workaround | No necesariamente |
| Bajo | `LOW` | Error visual, texto o mejora | No |

---

## 63. Bugs críticos automáticos

Se considera bug crítico si ocurre cualquiera de estos casos:

1. Cliente ve datos de otro cliente.
2. Tienda ve datos de otra tienda.
3. Usuario sin permiso confirma pago.
4. Auditor modifica datos.
5. Pago confirmado no actualiza orden.
6. Comisión negativa.
7. Neto proveedor negativo.
8. Gate-out con bloqueo activo.
9. Despacho de inventario bloqueado.
10. Exportación financiera fuera de scope.
11. Audit log guarda contraseña o token.
12. Endpoint privado permite acceso sin token.
13. Backend expone secretos o stack trace en producción.
14. Seeds no cargan y bloquean demo.
15. Frontend no permite completar el flujo principal.

---

## 64. Plantilla de bug report

```md
## BUG-[YYYY]-[NNN] — [Título]

| Campo | Valor |
|---|---|
| Código | BUG-YYYY-NNN |
| Fecha | YYYY-MM-DD |
| Reportado por | QA / Usuario / Antigravity |
| Módulo | Módulo afectado |
| Sprint | Sprint relacionado |
| Severidad | CRITICAL / HIGH / MEDIUM / LOW |
| Prioridad | P0 / P1 / P2 / P3 |
| Estado | OPEN / IN_PROGRESS / FIXED / RETEST / CLOSED / REJECTED |
| Ambiente | Local / Demo / QA / Staging |

### Descripción

[Qué ocurre]

### Pasos para reproducir

1. Paso 1
2. Paso 2
3. Paso 3

### Resultado esperado

[Qué debía pasar]

### Resultado observado

[Qué pasó]

### Evidencia

[Captura, log, payload, endpoint, usuario demo]

### Impacto

[Impacto funcional, técnico, seguridad, financiero]

### Causa probable

[Opcional]

### Corrección aplicada

[Cuando se corrija]

### Prueba de retest

[Resultado de nueva prueba]
```

---

# SECCIÓN M — PLAN QA POR SPRINT

---

## 65. Sprint 01 — QA arquitectura base

Validar:

1. Frontend levanta.
2. Backend levanta.
3. Health endpoint responde.
4. MySQL conecta.
5. `.env.example` existe.
6. README inicial funciona.

Criterio de salida:

```txt
El proyecto puede arrancar localmente sin errores críticos.
```

---

## 66. Sprint 02 — QA Auth, RBAC y scopes

Validar:

1. Registro.
2. Login.
3. Logout.
4. `/auth/me`.
5. Hash de contraseña.
6. JWT guard.
7. Permission guard.
8. Scope guard inicial.
9. 401.
10. 403.
11. Rutas protegidas React.

Criterio de salida:

```txt
Ningún endpoint privado debe permitir acceso sin token o sin permiso.
```

---

## 67. Sprint 03 — QA catálogos, seeds y navegación

Validar:

1. Seeds cargan.
2. Catálogos se consultan.
3. Roles demo existen.
4. Usuarios demo existen.
5. Menús por perfil.
6. Dashboards iniciales.

---

## 68. Sprint 04 — QA design system y home

Validar:

1. Home público.
2. Header.
3. Footer.
4. Cards.
5. Filtros.
6. Responsive.
7. Estilo Yelp-like.

---

## 69. Sprint 05 — QA tiendas

Validar:

1. Crear tienda.
2. Aprobar tienda.
3. Rechazar tienda.
4. Suspender tienda.
5. Perfil público.
6. Scope tienda.
7. Audit log aprobación/suspensión.

---

## 70. Sprint 06 — QA servicios

Validar:

1. Crear servicio.
2. Editar servicio.
3. Publicar.
4. Despublicar.
5. Visibilidad pública.
6. Scope tienda.
7. CTA cotización.

---

## 71. Sprint 07 — QA búsqueda

Validar:

1. Buscar por texto.
2. Filtrar por categoría.
3. Filtrar por tipo de tienda.
4. Empty state.
5. Loading state.
6. Servicio inactivo oculto.

---

## 72. Sprint 08 — QA cotizaciones

Validar:

1. Solicitud cliente.
2. Respuesta tienda.
3. Aprobación cliente.
4. Rechazo cliente.
5. Scope cliente.
6. Scope tienda.
7. Notificaciones.

---

## 73. Sprint 09 — QA órdenes

Validar:

1. Crear orden desde cotización.
2. Listar órdenes cliente.
3. Listar órdenes tienda.
4. Detalle.
5. Timeline.
6. Cancelación con motivo.
7. Auditoría.

---

## 74. Sprint 10 — QA pagos

Validar:

1. Crear pago.
2. Cargar comprobante.
3. Confirmar pago.
4. Rechazar pago.
5. Estado financiero de orden.
6. Auditoría crítica.
7. Cliente no confirma pago.

---

## 75. Sprint 11 — QA comisiones

Validar:

1. Regla de comisión.
2. Cálculo backend.
3. Comisión no negativa.
4. Neto proveedor no negativo.
5. Confirmación con pago.
6. Tienda ve comisión propia.
7. Cliente no ve reglas internas.

---

## 76. Sprint 12 — QA auditoría y notificaciones

Validar:

1. AuditLoggerService.
2. Logs críticos.
3. Sanitización.
4. Consulta auditor.
5. Notificaciones propias.
6. Marcar leída.

---

## 77. Sprint 13 — QA documentos

Validar:

1. Upload válido.
2. Upload inválido.
3. Descarga autorizada.
4. Descarga no autorizada.
5. Validar documento.
6. Rechazar con motivo.
7. Auditoría.

---

## 78. Sprint 14 — QA TOS

Validar:

1. Contenedor.
2. Gate-in.
3. Bloqueo.
4. Gate-out bloqueado falla.
5. Liberación.
6. Gate-out válido.
7. Auditoría.

---

## 79. Sprint 15 — QA transporte

Validar:

1. Crear viaje.
2. Asignar conductor/vehículo.
3. Transiciones.
4. Incidencia con motivo.
5. Entrega con POD.
6. Scope transportista.

---

## 80. Sprint 16 — QA almacenamiento

Validar:

1. Recepción.
2. Ubicación.
3. Movimiento.
4. Bloqueo.
5. Despacho bloqueado falla.
6. Despacho válido.
7. Scope almacén.

---

## 81. Sprint 17 — QA inspecciones

Validar:

1. Crear inspección.
2. Asignar inspector.
3. Checklist obligatorio.
4. Evidencia obligatoria.
5. Revisión.
6. Rechazo con motivo.
7. Auditoría.

---

## 82. Sprint 18 — QA dashboards y reportes

Validar:

1. Dashboard cliente.
2. Dashboard tienda.
3. Dashboard admin.
4. Dashboard auditor.
5. KPIs correctos.
6. Filtros por fecha.
7. Scopes.

---

## 83. Sprint 19 — QA exportaciones

Validar:

1. Reportes financieros.
2. Reportes auditoría/seguridad.
3. Exportar sin permiso.
4. Exportar sin motivo.
5. Exportar con motivo.
6. Audit log exportación.
7. Scope exportación.

---

## 84. Sprint 20 — QA soporte

Validar:

1. Crear ticket.
2. Ver ticket propio.
3. Responder ticket.
4. Cambiar estado.
5. Scope soporte.
6. Soporte no puede confirmar pagos.

---

## 85. Sprint 21 — QA integral

Validar:

1. E2E-001.
2. E2E-002.
3. E2E-003.
4. E2E-004.
5. E2E-005.
6. E2E-006.
7. E2E-007.
8. E2E-008.
9. E2E-009.
10. Regresión completa.
11. Bugs críticos cerrados.

---

## 86. Sprint 22 — QA hardening y documentación

Validar:

1. Swagger completo.
2. README final.
3. `.env.example` sin secretos.
4. Seeds desde cero.
5. CORS.
6. Rate limit auth.
7. Errores seguros.
8. Demo final ejecutable.

---

# SECCIÓN N — PRUEBAS DE SWAGGER Y DOCUMENTACIÓN

---

## 87. Checklist Swagger QA

| Criterio | Obligatorio |
|---|---|
| Swagger disponible en local/demo | Sí |
| Endpoints agrupados por módulo | Sí |
| DTOs documentados | Sí |
| Bearer auth documentado | Sí |
| Respuestas 400/401/403 documentadas | Recomendado |
| Upload documentado | Sí |
| Exportaciones documentadas | Sí |
| Swagger no expone secretos | Sí |
| Swagger restringido/deshabilitado en producción | Sí |

---

## 88. Checklist README QA

| Criterio | Obligatorio |
|---|---|
| Describe proyecto | Sí |
| Lista tecnologías | Sí |
| Explica variables de entorno | Sí |
| Explica instalación frontend | Sí |
| Explica instalación backend | Sí |
| Explica MySQL | Sí |
| Explica migraciones | Sí |
| Explica seeds | Sí |
| Lista usuarios demo | Sí |
| Explica pruebas | Sí |
| Explica Swagger | Sí |
| Aclara exclusiones MVP | Sí |
| No contiene secretos | Sí |

---

# SECCIÓN O — REPORTE QA Y MÉTRICAS

---

## 89. Métricas QA recomendadas

| Métrica | Objetivo |
|---|---|
| Casos ejecutados | Medir cobertura funcional |
| Casos PASS | Medir estabilidad |
| Casos FAIL | Detectar defectos |
| Bugs críticos abiertos | Bloqueo release |
| Bugs altos abiertos | Riesgo release |
| Cobertura E2E | Validar flujos principales |
| Cobertura RBAC | Validar seguridad por permiso |
| Cobertura scope | Validar aislamiento de datos |
| Cobertura auditoría | Validar trazabilidad |
| Cobertura API | Validar contratos |
| Cobertura frontend | Validar UX |
| Cobertura database | Validar integridad |

---

## 90. Plantilla de reporte QA por sprint

```md
# QA Report — Sprint XX

| Campo | Valor |
|---|---|
| Sprint | Sprint XX |
| Fecha | YYYY-MM-DD |
| Responsable QA | Nombre/Rol |
| Estado QA | PASS / FAIL / PARTIAL |
| Ambiente | Local / Demo / QA |

## 1. Resumen

[Resumen de lo probado]

## 2. Casos ejecutados

| Código | Caso | Resultado | Observaciones |
|---|---|---|---|
| QA-XXX | Caso | PASS/FAIL | Observación |

## 3. Bugs encontrados

| Código | Severidad | Módulo | Estado |
|---|---|---|---|
| BUG-XXX | CRITICAL/HIGH/MEDIUM/LOW | Módulo | OPEN/FIXED |

## 4. Riesgos

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Riesgo | HIGH | Mitigación |

## 5. Decisión QA

- [ ] Sprint accepted
- [ ] Sprint rejected
- [ ] Sprint accepted with observations

## 6. Acciones siguientes

1. Acción 1
2. Acción 2
```

---

## 91. Plantilla de reporte QA de release

```md
# QA Release Report — [Release]

| Campo | Valor |
|---|---|
| Release | REL-MVP-XXX |
| Fecha | YYYY-MM-DD |
| Estado | ACCEPTED / REJECTED / ACCEPTED WITH OBSERVATIONS |
| Ambiente | Demo / QA / Staging |

## 1. Resumen ejecutivo

[Resumen general]

## 2. Módulos validados

| Módulo | Resultado | Observaciones |
|---|---|---|
| Auth | PASS |  |
| Tiendas | PASS |  |

## 3. Flujos E2E

| Código | Flujo | Resultado |
|---|---|---|
| E2E-001 | Flujo comercial | PASS |

## 4. Bugs abiertos

| Código | Severidad | Estado | Bloquea release |
|---|---|---|---|
| BUG-XXX | HIGH | OPEN | Sí/No |

## 5. Riesgos conocidos

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Riesgo | MEDIUM | Acción |

## 6. Decisión final

[ACCEPTED / REJECTED / ACCEPTED WITH OBSERVATIONS]
```

---

# SECCIÓN P — PROMPTS PARA ANTIGRAVITY

---

## 92. Prompt maestro para ejecutar QA de una historia

```text
Actúa como QA Lead del Marketplace Logístico TOS.

Usa `35_QA_MASTER_TEST_PLAN.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` para validar la siguiente historia:

Historia:
[PEGAR HISTORIA]

Debes verificar:
1. Caso exitoso.
2. Casos negativos.
3. Validación DTO.
4. Auth.
5. Permisos.
6. Scope.
7. Auditoría si aplica.
8. Notificaciones si aplica.
9. Frontend loading/empty/error/forbidden si aplica.
10. Swagger si aplica.
11. Seeds si aplica.

Entrega:
1. Matriz de pruebas.
2. Resultado PASS/FAIL/PARTIAL.
3. Bugs encontrados.
4. Severidad.
5. Recomendación de cierre.
```

---

## 93. Prompt maestro para ejecutar QA de un sprint

```text
Actúa como QA Lead y Scrum Master del Marketplace Logístico TOS.

Valida el sprint siguiente usando `35_QA_MASTER_TEST_PLAN.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Sprint:
[PEGAR SPRINT]

Verifica:
1. Historias comprometidas.
2. Entregables esperados.
3. Artefactos creados.
4. Pruebas funcionales.
5. Pruebas API.
6. Pruebas frontend.
7. Pruebas DB.
8. Pruebas seguridad.
9. Pruebas scopes.
10. Pruebas auditoría.
11. Bugs abiertos.
12. Riesgos.

Entrega:
1. QA Report del sprint.
2. Tabla PASS/FAIL por caso.
3. Bugs críticos.
4. Bugs altos.
5. Decisión: ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

## 94. Prompt maestro para ejecutar QA E2E

```text
Ejecuta la validación E2E del Marketplace Logístico TOS usando `35_QA_MASTER_TEST_PLAN.md`.

Ejecuta los flujos:
1. E2E-001 Flujo comercial cliente-tienda-admin.
2. E2E-002 Seguridad RBAC y scopes.
3. E2E-003 Pago y comisión.
4. E2E-004 Documentos.
5. E2E-005 TOS.
6. E2E-006 Transporte.
7. E2E-007 Almacenamiento.
8. E2E-008 Inspecciones.
9. E2E-009 Reportes y exportaciones.

Entrega:
1. Resultado por flujo.
2. Evidencia de cada paso.
3. Bugs encontrados.
4. Severidad.
5. Bloqueos.
6. Decisión general.
```

---

## 95. Prompt maestro para reporte de bugs

```text
Actúa como QA Lead y debugger.

Registra el siguiente bug usando la plantilla de `35_QA_MASTER_TEST_PLAN.md`:

Bug:
[PEGAR BUG]

Incluye:
1. Código de bug.
2. Módulo.
3. Sprint.
4. Severidad.
5. Prioridad.
6. Ambiente.
7. Pasos para reproducir.
8. Resultado esperado.
9. Resultado observado.
10. Evidencia.
11. Impacto.
12. Causa probable.
13. Recomendación de corrección.
14. Prueba de retest.

Indica si bloquea release.
```

---

## 96. Prompt maestro para QA de release

```text
Actúa como Release QA Lead.

Valida el release del Marketplace Logístico TOS usando `35_QA_MASTER_TEST_PLAN.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Release:
[PEGAR RELEASE]

Valida:
1. Módulos incluidos.
2. Flujos E2E.
3. Seguridad.
4. RBAC.
5. Scopes.
6. Auditoría.
7. Pagos.
8. Comisiones.
9. Reportes.
10. Exportaciones.
11. Documentos.
12. Operación logística.
13. Swagger.
14. README.
15. Seeds.
16. Bugs críticos.
17. Bugs altos.
18. Riesgos conocidos.

Entrega:
1. QA Release Report.
2. Decisión final: ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

# SECCIÓN Q — CHECKLIST DE USO DEL DOCUMENTO

---

## 97. Checklist de uso

- [ ] Guardar este documento como `35_QA_MASTER_TEST_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo junto con `30_SPRINT_ROADMAP.md`.
- [ ] Usarlo junto con `31_ACCEPTANCE_CRITERIA_MASTER.md`.
- [ ] Usarlo junto con `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Usarlo junto con `34_CHANGELOG_AND_DECISION_LOG.md`.
- [ ] Ejecutar QA por historia.
- [ ] Ejecutar QA por sprint.
- [ ] Ejecutar QA E2E.
- [ ] Ejecutar QA de seguridad.
- [ ] Ejecutar QA de pagos y comisiones.
- [ ] Ejecutar QA de auditoría.
- [ ] Ejecutar QA de reportes.
- [ ] Ejecutar QA de release.
- [ ] Registrar bugs críticos.
- [ ] No cerrar release con bugs críticos abiertos.
- [ ] Confirmar que no se probaron como activas funcionalidades fuera de alcance MVP.

---

## 98. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión database | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de validación con roadmap | Sí |
| Listo para usar en Antigravity | Sí, como plan maestro inicial de QA |

---

# Fin del documento

