# 34_CHANGELOG_AND_DECISION_LOG.md

# Documento Maestro de Changelog y Registro de Decisiones
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `34_CHANGELOG_AND_DECISION_LOG.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Registro maestro de cambios, decisiones, versiones, riesgos, impacto y trazabilidad del proyecto |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional + evolución futura del marketplace logístico |
| Estilo visual del producto | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, badges y experiencia responsive |
| Documentos base relacionados | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `32_ANTIGRAVITY_PROMPTS_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `32_ANTIGRAVITY_PROMPTS_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |

---

## 2. Propósito del documento

Este documento define el **registro maestro de cambios y decisiones** del Marketplace Logístico TOS.

Su propósito es mantener trazabilidad clara sobre:

1. Qué cambios se realizan.
2. Por qué se realizan.
3. Quién o qué rol los solicita.
4. Qué documentos se ven afectados.
5. Qué módulos se ven afectados.
6. Qué sprints se ven afectados.
7. Qué impacto técnico, funcional, operativo, financiero o de seguridad tiene cada cambio.
8. Qué decisiones arquitectónicas, funcionales o de alcance quedan formalmente aprobadas.
9. Qué decisiones quedan rechazadas o postergadas.
10. Qué riesgos se crean o se mitigan.
11. Qué criterios de aceptación cambian.
12. Qué dependencias se modifican.
13. Qué artefactos deben actualizarse en Antigravity.

Este documento debe actuar como la memoria formal del proyecto para evitar pérdida de contexto, contradicciones entre documentos maestros y decisiones improvisadas durante el desarrollo.

---

## 3. Objetivo general

Establecer un sistema formal de registro de cambios y decisiones para controlar la evolución del Marketplace Logístico TOS, garantizando trazabilidad documental, técnica, funcional, operativa y de producto durante todo el ciclo de desarrollo en Antigravity.

---

## 4. Objetivos específicos

1. Registrar cambios de alcance.
2. Registrar cambios técnicos.
3. Registrar cambios funcionales.
4. Registrar cambios de base de datos.
5. Registrar cambios de API.
6. Registrar cambios frontend.
7. Registrar cambios de seguridad.
8. Registrar cambios de auditoría.
9. Registrar cambios de reportes.
10. Registrar cambios de flujos operativos.
11. Registrar decisiones aceptadas, rechazadas o postergadas.
12. Registrar impacto de cada decisión.
13. Registrar dependencias afectadas.
14. Registrar riesgos asociados.
15. Registrar documentos que deben actualizarse.
16. Registrar relación con sprint, épica e historia.
17. Registrar versiones del MVP.
18. Registrar notas de release.
19. Servir como fuente de verdad para gobernanza del proyecto.
20. Servir como prompt para Antigravity al evaluar cambios futuros.

---

## 5. Principios rectores del changelog y decision log

Antigravity debe respetar los siguientes principios:

1. Todo cambio relevante debe registrarse.
2. Toda decisión arquitectónica debe documentarse.
3. Toda decisión de alcance debe documentarse.
4. Toda decisión de seguridad debe documentarse.
5. Toda decisión financiera debe documentarse.
6. Toda decisión que afecte base de datos debe documentarse.
7. Toda decisión que afecte API debe documentarse.
8. Toda decisión que afecte permisos, roles o scopes debe documentarse.
9. Toda decisión que afecte auditoría debe documentarse.
10. Toda decisión que afecte reportes debe documentarse.
11. Toda decisión que afecte el roadmap debe documentarse.
12. Todo cambio debe indicar documentos impactados.
13. Todo cambio debe indicar módulos impactados.
14. Todo cambio debe indicar riesgo e impacto.
15. No se deben aplicar cambios mayores sin evaluar impacto.
16. No se deben crear integraciones reales fuera del MVP sin decisión aprobada.
17. No se debe cambiar el stack React.js + Nest.js + MySQL sin decisión arquitectónica formal.
18. No se debe eliminar auditoría crítica sin decisión formal.
19. No se debe debilitar RBAC o scopes sin decisión formal.
20. No se debe modificar el alcance MVP sin registro.

---

## 6. Diferencia entre Changelog y Decision Log

| Concepto | Uso | Pregunta que responde |
|---|---|---|
| Changelog | Registro de cambios realizados | ¿Qué cambió? |
| Decision Log | Registro de decisiones tomadas | ¿Por qué se decidió? |
| Release Notes | Resumen de entregas por versión | ¿Qué contiene esta versión? |
| Risk Log | Riesgos asociados | ¿Qué puede salir mal? |
| Impact Log | Impacto por cambio | ¿Qué módulos/documentos se afectan? |

Regla:

```txt
Un cambio puede tener una decisión asociada.
Una decisión puede generar uno o varios cambios.
Una versión puede contener muchos cambios y decisiones.
```

---

## 7. Convenciones de códigos

### 7.1 Código de cambio

```txt
CHG-YYYY-NNN
```

Ejemplo:

```txt
CHG-2026-001
```

### 7.2 Código de decisión

```txt
DEC-YYYY-NNN
```

Ejemplo:

```txt
DEC-2026-001
```

### 7.3 Código de release

```txt
REL-MVP-NNN
```

Ejemplo:

```txt
REL-MVP-001
```

### 7.4 Código de riesgo

```txt
RISK-YYYY-NNN
```

Ejemplo:

```txt
RISK-2026-001
```

### 7.5 Código de impacto

```txt
IMP-YYYY-NNN
```

Ejemplo:

```txt
IMP-2026-001
```

---

## 8. Estados de un cambio

| Estado | Código | Descripción |
|---|---|---|
| Propuesto | `PROPOSED` | Cambio sugerido, aún no aprobado |
| En análisis | `UNDER_REVIEW` | Cambio evaluándose técnicamente |
| Aprobado | `APPROVED` | Cambio autorizado para implementación |
| Rechazado | `REJECTED` | Cambio no aprobado |
| Postergado | `DEFERRED` | Cambio enviado a fase futura |
| En implementación | `IN_PROGRESS` | Cambio en desarrollo |
| Implementado | `IMPLEMENTED` | Cambio aplicado |
| Validado | `VALIDATED` | Cambio probado y aceptado |
| Revertido | `REVERTED` | Cambio deshecho |
| Cancelado | `CANCELLED` | Cambio eliminado del plan |

---

## 9. Estados de una decisión

| Estado | Código | Descripción |
|---|---|---|
| Propuesta | `PROPOSED` | Decisión sugerida |
| Aprobada | `APPROVED` | Decisión aceptada |
| Rechazada | `REJECTED` | Decisión no aceptada |
| Postergada | `DEFERRED` | Decisión para fase futura |
| Reemplazada | `SUPERSEDED` | Decisión sustituida por otra |
| Revocada | `REVOKED` | Decisión anulada |

---

## 10. Tipos de cambios

| Tipo | Código | Ejemplo |
|---|---|---|
| Alcance | `SCOPE` | Agregar o quitar módulo del MVP |
| Arquitectura | `ARCHITECTURE` | Cambiar patrón de backend |
| Frontend | `FRONTEND` | Cambiar diseño de dashboard |
| Backend | `BACKEND` | Agregar nuevo endpoint |
| Base de datos | `DATABASE` | Agregar tabla o columna |
| API | `API` | Cambiar contrato de endpoint |
| Seguridad | `SECURITY` | Cambiar política de roles |
| Auditoría | `AUDIT` | Agregar evento auditable |
| Reportes | `REPORTS` | Agregar KPI |
| Operación TOS | `TOS` | Cambiar regla gate-out |
| Transporte | `TRANSPORT` | Cambiar estado de viaje |
| Almacenamiento | `STORAGE` | Cambiar regla de despacho |
| Inspección | `INSPECTION` | Cambiar checklist obligatorio |
| Pagos | `PAYMENTS` | Cambiar regla de confirmación |
| Comisiones | `COMMISSIONS` | Cambiar cálculo de comisión |
| Documentación | `DOCUMENTATION` | Actualizar documento maestro |
| QA | `QA` | Agregar caso de prueba |
| Release | `RELEASE` | Preparar versión MVP |

---

## 11. Tipos de decisiones

| Tipo | Código | Ejemplo |
|---|---|---|
| Decisión de producto | `PRODUCT` | Mantener diseño tipo Yelp |
| Decisión técnica | `TECHNICAL` | Usar Nest.js modular |
| Decisión de base de datos | `DATABASE` | Usar MySQL como fuente principal |
| Decisión de seguridad | `SECURITY` | Aplicar RBAC y scopes en backend |
| Decisión financiera | `FINANCIAL` | Calcular comisiones en backend |
| Decisión operativa | `OPERATIONAL` | Gate-out bloqueado si hay hold activo |
| Decisión documental | `DOCUMENTATION` | Crear documentos maestros por módulo |
| Decisión de alcance | `SCOPE` | Pasarela real fuera del MVP |
| Decisión de UX/UI | `UX_UI` | Usar cards, filtros y badges estilo Yelp |
| Decisión de QA | `QA` | No cerrar sprint con bugs críticos |
| Decisión de integración | `INTEGRATION` | Odoo solo referencia conceptual |
| Decisión de release | `RELEASE` | Demo temprana hasta Sprint 12 |

---

## 12. Niveles de impacto

| Nivel | Código | Descripción |
|---|---|---|
| Bajo | `LOW` | Cambio menor sin impacto estructural |
| Medio | `MEDIUM` | Cambio limitado a un módulo |
| Alto | `HIGH` | Cambio afecta varios módulos o flujos |
| Crítico | `CRITICAL` | Cambio afecta seguridad, pagos, comisiones, auditoría, base de datos o arquitectura central |

---

## 13. Niveles de riesgo

| Nivel | Código | Descripción |
|---|---|---|
| Bajo | `LOW` | Riesgo controlado |
| Medio | `MEDIUM` | Requiere revisión |
| Alto | `HIGH` | Puede afectar entregables importantes |
| Crítico | `CRITICAL` | Puede bloquear MVP, seguridad, datos o dinero |

---

# SECCIÓN A — PLANTILLAS MAESTRAS

---

## 14. Plantilla maestra de changelog

```md
## CHG-YYYY-NNN — [Título del cambio]

| Campo | Valor |
|---|---|
| Código | CHG-YYYY-NNN |
| Fecha | YYYY-MM-DD |
| Estado | PROPOSED / APPROVED / IMPLEMENTED / VALIDATED / REVERTED |
| Tipo de cambio | SCOPE / FRONTEND / BACKEND / DATABASE / API / SECURITY / AUDIT / REPORTS / ETC. |
| Prioridad | P0 / P1 / P2 / P3 |
| Nivel de impacto | LOW / MEDIUM / HIGH / CRITICAL |
| Nivel de riesgo | LOW / MEDIUM / HIGH / CRITICAL |
| Sprint relacionado | Sprint XX |
| Épica relacionada | EPIC-XXX |
| Historia relacionada | US-XXX-XXX |
| Módulos afectados | Módulos afectados |
| Documentos afectados | Documentos afectados |
| Solicitado por | Rol o fuente |
| Aprobado por | Rol o fuente |

### Descripción del cambio

[Explicar qué cambia]

### Justificación

[Explicar por qué se requiere]

### Impacto funcional

[Explicar impacto en usuarios y flujos]

### Impacto técnico

[Explicar impacto en frontend, backend, DB, API, seguridad]

### Impacto en documentos maestros

[Listar documentos que deben actualizarse]

### Riesgos

[Listar riesgos]

### Plan de implementación

1. Paso 1
2. Paso 2
3. Paso 3

### Criterios de aceptación

1. Criterio 1
2. Criterio 2
3. Criterio 3

### Resultado final

[Pendiente / Implementado / Validado / Revertido]
```

---

## 15. Plantilla maestra de decision log

```md
## DEC-YYYY-NNN — [Título de la decisión]

| Campo | Valor |
|---|---|
| Código | DEC-YYYY-NNN |
| Fecha | YYYY-MM-DD |
| Estado | PROPOSED / APPROVED / REJECTED / DEFERRED / SUPERSEDED |
| Tipo de decisión | PRODUCT / TECHNICAL / DATABASE / SECURITY / FINANCIAL / OPERATIONAL / SCOPE / UX_UI / QA / INTEGRATION |
| Nivel de impacto | LOW / MEDIUM / HIGH / CRITICAL |
| Nivel de riesgo | LOW / MEDIUM / HIGH / CRITICAL |
| Sprint relacionado | Sprint XX |
| Épica relacionada | EPIC-XXX |
| Módulos afectados | Módulos afectados |
| Documentos afectados | Documentos afectados |
| Decisión tomada por | Rol o fuente |
| Fecha de revisión futura | YYYY-MM-DD o N/A |

### Contexto

[Explicar situación que llevó a la decisión]

### Opciones evaluadas

| Opción | Descripción | Ventajas | Desventajas |
|---|---|---|---|
| Opción A | ... | ... | ... |
| Opción B | ... | ... | ... |

### Decisión

[Explicar la decisión tomada]

### Justificación

[Explicar por qué se tomó]

### Consecuencias positivas

1. Consecuencia 1
2. Consecuencia 2

### Consecuencias negativas o trade-offs

1. Trade-off 1
2. Trade-off 2

### Impacto en arquitectura

[Impacto técnico]

### Impacto en producto

[Impacto funcional]

### Impacto en seguridad/auditoría

[Impacto si aplica]

### Acciones derivadas

1. Acción 1
2. Acción 2

### Decisiones relacionadas

- DEC-YYYY-NNN

### Cambios relacionados

- CHG-YYYY-NNN
```

---

## 16. Plantilla maestra de release note

```md
## REL-MVP-NNN — [Nombre de release]

| Campo | Valor |
|---|---|
| Código | REL-MVP-NNN |
| Fecha | YYYY-MM-DD |
| Estado | DRAFT / READY / RELEASED / ROLLED_BACK |
| Sprint inicial | Sprint XX |
| Sprint final | Sprint XX |
| Tipo | Demo temprana / MVP completo / Hotfix / Release técnico |
| Responsable | Rol o fuente |

### Resumen ejecutivo

[Resumen de la entrega]

### Funcionalidades incluidas

1. Funcionalidad 1
2. Funcionalidad 2

### Funcionalidades excluidas

1. Exclusión 1
2. Exclusión 2

### Módulos incluidos

1. Módulo 1
2. Módulo 2

### Cambios incluidos

- CHG-YYYY-NNN

### Decisiones relevantes

- DEC-YYYY-NNN

### Bugs corregidos

1. Bug 1
2. Bug 2

### Riesgos conocidos

1. Riesgo 1
2. Riesgo 2

### Criterios de aceptación del release

1. Criterio 1
2. Criterio 2

### Resultado QA

[PASS / FAIL / ACCEPTED WITH OBSERVATIONS]
```

---

# SECCIÓN B — DECISIONES FUNDACIONALES DEL PROYECTO

---

## 17. DEC-2026-001 — Usar React.js como frontend principal

| Campo | Valor |
|---|---|
| Código | DEC-2026-001 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | TECHNICAL |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 01 |
| Épica relacionada | EPIC-001 |
| Módulos afectados | Frontend completo |
| Documentos afectados | `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `11_TECHNICAL_ARCHITECTURE.md`, `30_SPRINT_ROADMAP.md` |

### Contexto

El marketplace logístico requiere una experiencia visual moderna, modular, responsive, orientada a tarjetas, filtros, perfiles públicos y dashboards por perfil.

### Opciones evaluadas

| Opción | Ventajas | Desventajas |
|---|---|---|
| React.js | Ecosistema amplio, componentes reutilizables, ideal para dashboards y marketplace | Requiere disciplina en arquitectura |
| Vue.js | Simplicidad y productividad | No es el stack definido por el proyecto |
| Angular | Estructura robusta | Mayor complejidad inicial |

### Decisión

Usar **React.js** como frontend principal.

### Justificación

React.js permite construir la experiencia tipo Yelp.com, dashboards por perfil, componentes reutilizables y flujos modulares.

### Consecuencias

1. Todos los componentes frontend se desarrollan en React.js.
2. Los prompts de Antigravity deben generar React.js.
3. El diseño se organiza por componentes, hooks, services y layouts.

---

## 18. DEC-2026-002 — Usar Nest.js como backend principal

| Campo | Valor |
|---|---|
| Código | DEC-2026-002 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | TECHNICAL |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 01 |
| Épica relacionada | EPIC-001 |
| Módulos afectados | Backend completo |
| Documentos afectados | `11_TECHNICAL_ARCHITECTURE.md`, `13_API_SPECIFICATION.md`, `30_SPRINT_ROADMAP.md` |

### Contexto

El marketplace requiere backend modular, escalable, con validaciones, DTOs, guards, servicios, controllers, Swagger y arquitectura clara.

### Decisión

Usar **Nest.js** como backend principal.

### Justificación

Nest.js facilita arquitectura modular, inyección de dependencias, guards, interceptors, pipes, DTOs y documentación API.

### Consecuencias

1. Cada módulo debe tener Module, Controller, Service y DTOs.
2. Los endpoints deben documentarse en Swagger.
3. RBAC, scopes y auditoría deben implementarse en backend.

---

## 19. DEC-2026-003 — Usar MySQL como base de datos principal

| Campo | Valor |
|---|---|
| Código | DEC-2026-003 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | DATABASE |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 01 |
| Épica relacionada | EPIC-001 |
| Módulos afectados | Base de datos completa |
| Documentos afectados | `12_DATABASE_MASTER_SCHEMA.md`, `15_MASTER_CATALOGS_MVP.md`, `17_INITIAL_SEEDS_PLAN.md` |

### Contexto

El marketplace requiere una base relacional para usuarios, tiendas, servicios, cotizaciones, órdenes, pagos, comisiones, documentos, auditoría y reportes.

### Decisión

Usar **MySQL** como base de datos principal.

### Justificación

MySQL permite normalización relacional, integridad referencial, consultas por módulos y soporte a reportes internos.

### Consecuencias

1. Todas las tablas MVP se diseñan en MySQL.
2. Los montos usan DECIMAL.
3. Se usan migraciones y seeds.
4. No se usa base documental como fuente principal del MVP.

---

## 20. DEC-2026-004 — Odoo solo como referencia conceptual, no integración

| Campo | Valor |
|---|---|
| Código | DEC-2026-004 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | INTEGRATION |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Todos |
| Épica relacionada | EPIC-001 / EPIC-004 / EPIC-017 |
| Módulos afectados | Base de datos, productos/servicios, pagos, comisiones, usuarios |
| Documentos afectados | `14_ODOO_REFERENCE_MODELS.md`, `12_DATABASE_MASTER_SCHEMA.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |

### Contexto

El proyecto usa modelos de Odoo como referencia de normalización de datos, pero no busca integración real con Odoo en el MVP.

### Decisión

Usar Odoo **solo como referencia conceptual de normalización**, sin integración técnica real.

### Justificación

Evita complejidad, dependencias externas y retrasos del MVP.

### Consecuencias

1. No se crean conectores Odoo.
2. No se consumen APIs Odoo.
3. No se sincronizan datos con Odoo.
4. Se pueden usar conceptos como `res.partner`, `product.template`, `sale.order`, `account.move` como inspiración de modelos.

---

## 21. DEC-2026-005 — Pasarela de pago real fuera del MVP

| Campo | Valor |
|---|---|
| Código | DEC-2026-005 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | SCOPE |
| Nivel de impacto | HIGH |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 10 / Fase futura |
| Épica relacionada | EPIC-016 |
| Módulos afectados | Pagos, comisiones, órdenes, reportes |
| Documentos afectados | `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `02_MVP_SCOPE.md` |

### Contexto

El marketplace requiere pagos, pero el MVP se enfoca en flujo manual con comprobante y arquitectura preparada para pasarela futura.

### Decisión

No integrar pasarela de pago real en el MVP. Implementar pagos manuales con comprobante.

### Justificación

Permite validar el flujo comercial y financiero sin bloquear el MVP con integraciones externas.

### Consecuencias

1. El pago MVP es manual con comprobante.
2. Confirmación de pago la realiza usuario autorizado.
3. Se prepara arquitectura futura para pasarelas.
4. No hay split payment real en MVP.

---

## 22. DEC-2026-006 — BI externo fuera del MVP

| Campo | Valor |
|---|---|
| Código | DEC-2026-006 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | SCOPE |
| Nivel de impacto | MEDIUM |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 18 / Sprint 19 |
| Épica relacionada | EPIC-019 |
| Módulos afectados | Reportes, dashboards, exportaciones |
| Documentos afectados | `28_REPORTS_MASTER_PLAN.md`, `02_MVP_SCOPE.md` |

### Contexto

El proyecto requiere reportes y dashboards, pero no requiere Power BI, Tableau, Looker ni data warehouse en MVP.

### Decisión

Crear reportes internos en React.js + Nest.js + MySQL. Dejar BI externo fuera del MVP.

### Justificación

Reduce complejidad y mantiene el control del MVP dentro de la aplicación.

### Consecuencias

1. KPIs se calculan en backend.
2. Dashboards se renderizan en React.js.
3. Exportación inicial en CSV.
4. BI externo queda para fase futura.

---

## 23. DEC-2026-007 — Diseño visual tipo Yelp.com

| Campo | Valor |
|---|---|
| Código | DEC-2026-007 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | UX_UI |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 04 |
| Épica relacionada | EPIC-002 / EPIC-008 |
| Módulos afectados | Home, búsqueda, tiendas, servicios, dashboards |
| Documentos afectados | `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md` |

### Contexto

El marketplace logístico debe sentirse como un directorio comercial claro, confiable y orientado a búsqueda, similar a Yelp.

### Decisión

Usar un diseño visual inspirado en Yelp.com: cards, filtros, directorio, perfiles públicos, badges, búsqueda y social proof.

### Justificación

Este estilo es adecuado para un marketplace de servicios donde el usuario compara proveedores.

### Consecuencias

1. Home debe priorizar búsqueda y categorías.
2. Tiendas deben tener perfiles públicos claros.
3. Servicios deben mostrarse en tarjetas comparables.
4. Filtros deben estar visibles.
5. Dashboards deben mantener claridad visual.

---

## 24. DEC-2026-008 — RBAC y scopes obligatorios en backend

| Campo | Valor |
|---|---|
| Código | DEC-2026-008 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | SECURITY |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | CRITICAL |
| Sprint relacionado | Sprint 02 |
| Épica relacionada | EPIC-003 |
| Módulos afectados | Todos los módulos privados |
| Documentos afectados | `26_SECURITY_MASTER_PLAN.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` |

### Contexto

El marketplace maneja datos de clientes, tiendas, pagos, comisiones, documentos, auditoría y operación logística.

### Decisión

RBAC y scopes se validan obligatoriamente en backend. El frontend solo oculta acciones, pero no es fuente de seguridad.

### Justificación

Evita exposición de datos entre clientes, tiendas, transportistas, inspectores y operadores.

### Consecuencias

1. Todo endpoint privado requiere auth.
2. Acciones requieren permisos.
3. Datos requieren scope.
4. Cliente solo ve datos propios.
5. Tienda solo ve datos de su tienda.
6. Auditor solo lectura.

---

## 25. DEC-2026-009 — Auditoría crítica transversal obligatoria

| Campo | Valor |
|---|---|
| Código | DEC-2026-009 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | AUDIT |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | HIGH |
| Sprint relacionado | Sprint 12 |
| Épica relacionada | EPIC-018 |
| Módulos afectados | Seguridad, pagos, comisiones, órdenes, TOS, almacenamiento, inspecciones, reportes |
| Documentos afectados | `27_AUDIT_TRAIL_MASTER_PLAN.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` |

### Contexto

El marketplace requiere trazabilidad para pagos, comisiones, permisos, órdenes, TOS, despachos e inspecciones.

### Decisión

Toda acción crítica debe generar audit log en backend.

### Justificación

Permite reconstruir eventos y controlar riesgos operativos, financieros y de seguridad.

### Consecuencias

1. Confirmar pago genera audit log.
2. Ajustar comisión genera audit log.
3. Cambiar roles/permisos genera audit log.
4. Gate-out genera audit log.
5. Despacho genera audit log.
6. Exportar reportes genera audit log.

---

## 26. DEC-2026-010 — Demo temprana hasta Sprint 12

| Campo | Valor |
|---|---|
| Código | DEC-2026-010 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de decisión | RELEASE |
| Nivel de impacto | HIGH |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 00 a Sprint 12 |
| Épica relacionada | EPIC-001 a EPIC-020 |
| Módulos afectados | Marketplace comercial, cotizaciones, órdenes, pagos, comisiones, auditoría, notificaciones |
| Documentos afectados | `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |

### Contexto

Se requiere una primera versión demostrable antes de completar módulos operativos avanzados.

### Decisión

La demo temprana se considera lista al completar Sprint 00 a Sprint 12.

### Justificación

Permite validar valor comercial del marketplace antes de finalizar TOS, transporte, almacenamiento e inspecciones.

### Consecuencias

La demo temprana debe incluir:

1. Home.
2. Búsqueda.
3. Tiendas.
4. Servicios.
5. Cotizaciones.
6. Órdenes.
7. Pagos manuales.
8. Comisiones.
9. Auditoría.
10. Notificaciones.
11. Dashboards básicos.

---

# SECCIÓN C — CHANGELOG INICIAL DEL PLAN MAESTRO

---

## 27. CHG-2026-001 — Creación del plan maestro documental del proyecto

| Campo | Valor |
|---|---|
| Código | CHG-2026-001 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | DOCUMENTATION |
| Prioridad | P0 |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-023 |
| Módulos afectados | Documentación general |
| Documentos afectados | Documentos `01` a `34` |
| Solicitado por | Dirección del proyecto |
| Aprobado por | Dirección del proyecto |

### Descripción del cambio

Se crea un conjunto de documentos maestros para desarrollar el Marketplace Logístico TOS en Antigravity.

### Justificación

El proyecto requiere una base documental estructurada para evitar improvisación y permitir desarrollo secuencial.

### Impacto funcional

Permite guiar a Antigravity por módulos, sprints y criterios de aceptación.

### Impacto técnico

Define stack, arquitectura, base de datos, API, seguridad, auditoría, reportes y QA.

### Documentos impactados

1. `01_PRODUCT_VISION.md`
2. `02_MVP_SCOPE.md`
3. `03_ANTIGRAVITY_RULES.md`
4. `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`
5. `30_SPRINT_ROADMAP.md`
6. `31_ACCEPTANCE_CRITERIA_MASTER.md`
7. `32_ANTIGRAVITY_PROMPTS_MASTER.md`
8. `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`
9. `34_CHANGELOG_AND_DECISION_LOG.md`

### Resultado final

Implementado como base documental maestra.

---

## 28. CHG-2026-002 — Definición del stack React.js + Nest.js + MySQL

| Campo | Valor |
|---|---|
| Código | CHG-2026-002 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de cambio | ARCHITECTURE |
| Prioridad | P0 |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 01 |
| Épica relacionada | EPIC-001 |
| Módulos afectados | Frontend, backend, database |
| Documentos afectados | `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md` |

### Descripción del cambio

Se formaliza el stack principal del proyecto: React.js para frontend, Nest.js para backend y MySQL para base de datos.

### Justificación

El stack permite desarrollo modular, escalable y adecuado para marketplace con dashboards.

### Resultado final

Aprobado como stack oficial.

---

## 29. CHG-2026-003 — Definición de diseño visual tipo Yelp.com

| Campo | Valor |
|---|---|
| Código | CHG-2026-003 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de cambio | FRONTEND |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 04 |
| Épica relacionada | EPIC-002 |
| Módulos afectados | Home, búsqueda, tiendas, servicios |
| Documentos afectados | `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md` |

### Descripción del cambio

Se define que la experiencia visual del marketplace debe inspirarse en Yelp.com.

### Justificación

El marketplace requiere exploración, comparación de proveedores, tarjetas, filtros y perfiles públicos.

### Resultado final

Aprobado como criterio visual transversal.

---

## 30. CHG-2026-004 — Definición de pagos manuales con comprobante para MVP

| Campo | Valor |
|---|---|
| Código | CHG-2026-004 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de cambio | PAYMENTS |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | MEDIUM |
| Sprint relacionado | Sprint 10 |
| Épica relacionada | EPIC-016 |
| Módulos afectados | Pagos, órdenes, comisiones, auditoría |
| Documentos afectados | `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md` |

### Descripción del cambio

Se establece que el MVP manejará pagos manuales con comprobante, revisión y confirmación por usuario autorizado.

### Justificación

Evita dependencia temprana de pasarelas externas.

### Resultado final

Aprobado para MVP.

---

## 31. CHG-2026-005 — Definición de comisiones calculadas en backend

| Campo | Valor |
|---|---|
| Código | CHG-2026-005 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de cambio | COMMISSIONS |
| Prioridad | P1 |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | HIGH |
| Sprint relacionado | Sprint 11 |
| Épica relacionada | EPIC-017 |
| Módulos afectados | Comisiones, pagos, reportes |
| Documentos afectados | `25_COMMISSIONS_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md` |

### Descripción del cambio

Las comisiones y netos proveedor se calculan exclusivamente en backend.

### Justificación

Evita manipulación desde frontend y garantiza trazabilidad financiera.

### Resultado final

Aprobado como regla financiera crítica.

---

## 32. CHG-2026-006 — Definición de auditoría crítica transversal

| Campo | Valor |
|---|---|
| Código | CHG-2026-006 |
| Fecha | 2026-05-12 |
| Estado | APPROVED |
| Tipo de cambio | AUDIT |
| Prioridad | P0 |
| Nivel de impacto | CRITICAL |
| Nivel de riesgo | HIGH |
| Sprint relacionado | Sprint 12 |
| Épica relacionada | EPIC-018 |
| Módulos afectados | Todos los módulos críticos |
| Documentos afectados | `27_AUDIT_TRAIL_MASTER_PLAN.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` |

### Descripción del cambio

Se formaliza la auditoría crítica obligatoria para pagos, comisiones, roles, órdenes, TOS, despachos, inspecciones y exportaciones.

### Resultado final

Aprobado como requisito transversal.

---

## 33. CHG-2026-007 — Creación del backlog maestro por épicas, historias y tareas

| Campo | Valor |
|---|---|
| Código | CHG-2026-007 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | DOCUMENTATION |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-023 |
| Módulos afectados | Todos |
| Documentos afectados | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` |

### Descripción del cambio

Se crea el backlog maestro con épicas, historias, tareas, criterios de aceptación y roadmap de trabajo.

### Resultado final

Implementado.

---

## 34. CHG-2026-008 — Creación del roadmap por sprints

| Campo | Valor |
|---|---|
| Código | CHG-2026-008 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | DOCUMENTATION |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-023 |
| Módulos afectados | Todos |
| Documentos afectados | `30_SPRINT_ROADMAP.md` |

### Descripción del cambio

Se crea un roadmap de Sprint 00 a Sprint 22 para ejecutar el desarrollo secuencial del MVP.

### Resultado final

Implementado.

---

## 35. CHG-2026-009 — Creación de criterios maestros de aceptación

| Campo | Valor |
|---|---|
| Código | CHG-2026-009 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | QA |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-022 |
| Módulos afectados | Todos |
| Documentos afectados | `31_ACCEPTANCE_CRITERIA_MASTER.md` |

### Descripción del cambio

Se crea el documento maestro de criterios de aceptación para validar historias, sprints, demo temprana y MVP completo.

### Resultado final

Implementado.

---

## 36. CHG-2026-010 — Creación de biblioteca maestra de prompts Antigravity

| Campo | Valor |
|---|---|
| Código | CHG-2026-010 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | DOCUMENTATION |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-023 |
| Módulos afectados | Todos |
| Documentos afectados | `32_ANTIGRAVITY_PROMPTS_MASTER.md` |

### Descripción del cambio

Se crea la biblioteca de prompts para dirigir a Antigravity por fases, sprints, módulos, frontend, backend, database, QA, seguridad, auditoría y release.

### Resultado final

Implementado.

---

## 37. CHG-2026-011 — Creación de checklist maestro de artefactos

| Campo | Valor |
|---|---|
| Código | CHG-2026-011 |
| Fecha | 2026-05-12 |
| Estado | IMPLEMENTED |
| Tipo de cambio | QA |
| Prioridad | P0 |
| Nivel de impacto | HIGH |
| Nivel de riesgo | LOW |
| Sprint relacionado | Sprint 00 |
| Épica relacionada | EPIC-022 |
| Módulos afectados | Todos |
| Documentos afectados | `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |

### Descripción del cambio

Se crea checklist maestro de artefactos para validar documentos, frontend, backend, DB, seguridad, auditoría, reportes, QA y sprints.

### Resultado final

Implementado.

---

# SECCIÓN D — MATRIZ DE DECISIONES POR MÓDULO

---

## 38. Matriz de decisiones principales por módulo

| Módulo | Decisión principal | Código | Estado |
|---|---|---|---|
| Arquitectura | React.js + Nest.js + MySQL | DEC-2026-001 / 002 / 003 | APPROVED |
| Integraciones | Odoo solo referencia conceptual | DEC-2026-004 | APPROVED |
| Pagos | Pago manual con comprobante en MVP | DEC-2026-005 | APPROVED |
| Reportes | BI externo fuera del MVP | DEC-2026-006 | APPROVED |
| UX/UI | Diseño tipo Yelp.com | DEC-2026-007 | APPROVED |
| Seguridad | RBAC y scopes en backend | DEC-2026-008 | APPROVED |
| Auditoría | Audit logs críticos obligatorios | DEC-2026-009 | APPROVED |
| Release | Demo temprana hasta Sprint 12 | DEC-2026-010 | APPROVED |

---

## 39. Matriz de cambios por sprint

| Sprint | Cambios esperados | Tipo |
|---|---|---|
| Sprint 00 | Documentos maestros, backlog, roadmap, prompts, criterios | DOCUMENTATION |
| Sprint 01 | Arquitectura base | ARCHITECTURE |
| Sprint 02 | Auth, RBAC, scopes | SECURITY |
| Sprint 03 | Catálogos, seeds, navegación | DATABASE / FRONTEND |
| Sprint 04 | Design system y home | FRONTEND |
| Sprint 05 | Tiendas | BACKEND / FRONTEND / DATABASE |
| Sprint 06 | Servicios | BACKEND / FRONTEND / DATABASE |
| Sprint 07 | Búsqueda | API / FRONTEND |
| Sprint 08 | Cotizaciones | BACKEND / FRONTEND / DATABASE |
| Sprint 09 | Órdenes | BACKEND / FRONTEND / DATABASE |
| Sprint 10 | Pagos | PAYMENTS / AUDIT |
| Sprint 11 | Comisiones | COMMISSIONS / FINANCIAL |
| Sprint 12 | Auditoría y notificaciones | AUDIT / BACKEND / FRONTEND |
| Sprint 13 | Documentos | SECURITY / DOCUMENTS |
| Sprint 14 | TOS | TOS / OPERATIONAL |
| Sprint 15 | Transporte | TRANSPORT |
| Sprint 16 | Almacenamiento | STORAGE |
| Sprint 17 | Inspecciones | INSPECTION |
| Sprint 18 | Dashboards | REPORTS |
| Sprint 19 | Exportaciones | REPORTS / AUDIT |
| Sprint 20 | Soporte | SUPPORT |
| Sprint 21 | QA integral | QA |
| Sprint 22 | Swagger y hardening | DOCUMENTATION / SECURITY |

---

# SECCIÓN E — REGLAS PARA REGISTRAR CAMBIOS FUTUROS

---

## 40. Cuándo registrar un cambio

Se debe registrar un cambio cuando:

1. Se agrega un módulo nuevo.
2. Se elimina un módulo del MVP.
3. Se cambia una tabla.
4. Se cambia un endpoint.
5. Se cambia un DTO.
6. Se cambia un flujo de negocio.
7. Se cambia un permiso.
8. Se cambia un scope.
9. Se cambia una regla de comisión.
10. Se cambia una regla de pago.
11. Se cambia una regla TOS.
12. Se cambia una regla de despacho.
13. Se cambia un checklist de inspección.
14. Se agrega una integración externa.
15. Se posterga una funcionalidad.
16. Se cambia el roadmap.
17. Se cambia el criterio de aceptación.
18. Se modifica un documento maestro.
19. Se corrige un bug crítico.
20. Se publica un release.

---

## 41. Cuándo registrar una decisión

Se debe registrar una decisión cuando:

1. Se elige entre varias alternativas técnicas.
2. Se define una regla de negocio importante.
3. Se acepta o rechaza un cambio de alcance.
4. Se define una política de seguridad.
5. Se define una política financiera.
6. Se define una política de auditoría.
7. Se define una integración futura.
8. Se cambia una dependencia estratégica.
9. Se decide postergar una funcionalidad.
10. Se cambia una arquitectura aprobada.
11. Se decide revertir un cambio.
12. Se decide liberar una versión.

---

## 42. Regla de control de impacto

Antes de aprobar un cambio, Antigravity debe responder:

1. ¿Qué módulos afecta?
2. ¿Qué tablas afecta?
3. ¿Qué endpoints afecta?
4. ¿Qué componentes React afecta?
5. ¿Qué permisos afecta?
6. ¿Qué scopes afecta?
7. ¿Qué audit logs afecta?
8. ¿Qué reportes afecta?
9. ¿Qué documentos maestros deben actualizarse?
10. ¿Qué sprint se retrasa o cambia?
11. ¿Qué pruebas deben agregarse?
12. ¿El cambio introduce riesgo financiero?
13. ¿El cambio introduce riesgo de seguridad?
14. ¿El cambio rompe compatibilidad con lo ya construido?
15. ¿El cambio pertenece al MVP o a fase futura?

---

## 43. Regla de aprobación por impacto

| Impacto | Revisión requerida |
|---|---|
| LOW | Revisión técnica simple |
| MEDIUM | Revisión de módulo y QA |
| HIGH | Revisión de arquitectura, producto y QA |
| CRITICAL | Revisión de arquitectura, seguridad, producto, QA y decisión formal |

---

# SECCIÓN F — RIESGOS Y MITIGACIONES RELACIONADOS CON CAMBIOS

---

## 44. Riesgos comunes al cambiar el alcance

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Agregar demasiados módulos al MVP | HIGH | Usar MoSCoW y roadmap |
| Introducir integración externa prematura | HIGH | Registrar decisión y diferir a fase futura |
| Cambiar stack tecnológico | CRITICAL | Requiere decisión arquitectónica formal |
| Eliminar auditoría crítica | CRITICAL | No permitido sin decisión formal de seguridad |
| Debilitar scopes | CRITICAL | Revisión de seguridad obligatoria |
| Cambiar pagos sin QA financiero | CRITICAL | Pruebas obligatorias de pagos/comisiones |
| Cambiar DB sin migración controlada | HIGH | Crear migración y pruebas desde cero |
| Cambiar API sin actualizar frontend | HIGH | Actualizar contratos y servicios API |
| Cambiar frontend sin respetar diseño | MEDIUM | Validar contra design system |
| Cambiar reportes sin validar scope | HIGH | QA de permisos y scopes |

---

## 45. Registro inicial de riesgos

| Código | Riesgo | Nivel | Estado | Mitigación |
|---|---|---|---|---|
| RISK-2026-001 | Desarrollar módulos sin RBAC/scopes | CRITICAL | Abierto | Sprint 02 obligatorio antes de módulos sensibles |
| RISK-2026-002 | Exponer datos entre tiendas/clientes | CRITICAL | Abierto | ScopeGuard y pruebas por perfil |
| RISK-2026-003 | Calcular comisiones en frontend | HIGH | Mitigado por decisión | DEC-2026-005 y DEC-2026-009 |
| RISK-2026-004 | Integrar pasarela real demasiado pronto | HIGH | Mitigado por decisión | DEC-2026-005 |
| RISK-2026-005 | No auditar cambios críticos | HIGH | Mitigado por decisión | DEC-2026-009 |
| RISK-2026-006 | Reportes con datos fuera de scope | HIGH | Abierto | QA en Sprint 18 y Sprint 19 |
| RISK-2026-007 | Archivos inseguros | HIGH | Abierto | Validación Sprint 13 |
| RISK-2026-008 | Roadmap demasiado amplio | MEDIUM | Controlado | Demo temprana hasta Sprint 12 |

---

# SECCIÓN G — RELEASE LOG

---

## 46. REL-MVP-001 — Demo temprana del Marketplace Logístico

| Campo | Valor |
|---|---|
| Código | REL-MVP-001 |
| Estado | PLANNED |
| Sprint inicial | Sprint 00 |
| Sprint final | Sprint 12 |
| Tipo | Demo temprana |
| Responsable | Dirección del proyecto / Antigravity |

### Resumen ejecutivo

Primera demo funcional del marketplace logístico enfocada en el flujo comercial completo: búsqueda, tienda, servicio, cotización, orden, pago, comisión, auditoría y notificaciones.

### Funcionalidades incluidas

1. Home público.
2. Búsqueda de servicios.
3. Perfil público de tienda.
4. Ficha de servicio.
5. Registro/login.
6. Dashboard cliente.
7. Dashboard tienda.
8. Dashboard admin.
9. Solicitud de cotización.
10. Respuesta de cotización.
11. Aprobación de cotización.
12. Orden creada.
13. Pago manual con comprobante.
14. Confirmación de pago.
15. Comisión básica.
16. Auditoría crítica.
17. Notificaciones básicas.

### Funcionalidades excluidas

1. Pasarela de pago real.
2. Split payment real.
3. Odoo real.
4. BI externo.
5. TOS completo.
6. Transporte completo.
7. Almacenamiento completo.
8. Inspecciones completas.

---

## 47. REL-MVP-002 — MVP completo operativo

| Campo | Valor |
|---|---|
| Código | REL-MVP-002 |
| Estado | PLANNED |
| Sprint inicial | Sprint 00 |
| Sprint final | Sprint 22 |
| Tipo | MVP completo |
| Responsable | Dirección del proyecto / Antigravity |

### Resumen ejecutivo

Release completo del MVP con marketplace comercial, pagos, comisiones, auditoría, documentos, TOS, transporte, almacenamiento, inspecciones, reportes, soporte, QA y documentación.

### Funcionalidades incluidas

1. Todo lo incluido en REL-MVP-001.
2. Documentos y evidencias.
3. TOS básico.
4. Transporte.
5. Almacenamiento.
6. Inspecciones.
7. Reportes por perfil.
8. Reportes financieros.
9. Exportaciones CSV.
10. Auditoría de exportaciones.
11. Soporte básico.
12. Swagger completo.
13. README final.
14. QA integral.
15. Seeds demo completos.
16. Hardening básico.

---

# SECCIÓN H — PROMPTS PARA ANTIGRAVITY

---

## 48. Prompt maestro para registrar un cambio

```text
Actúa como product owner, arquitecto full-stack, QA lead, security engineer y auditor técnico del Marketplace Logístico TOS.

Usa el documento `34_CHANGELOG_AND_DECISION_LOG.md` para registrar el siguiente cambio:

Cambio solicitado:
[PEGAR CAMBIO]

Antes de aprobarlo, analiza:
1. Tipo de cambio.
2. Nivel de impacto.
3. Nivel de riesgo.
4. Módulos afectados.
5. Tablas afectadas.
6. Endpoints afectados.
7. Componentes React afectados.
8. Permisos afectados.
9. Scopes afectados.
10. Auditoría afectada.
11. Reportes afectados.
12. Documentos maestros afectados.
13. Sprint afectado.
14. Épica/historia afectada.
15. Pruebas requeridas.
16. Si pertenece al MVP o fase futura.

Entrega:
1. Registro CHG completo.
2. Recomendación: APPROVE, REJECT o DEFER.
3. Acciones requeridas.
4. Documentos a actualizar.
```

---

## 49. Prompt maestro para registrar una decisión

```text
Actúa como arquitecto de producto y tecnología del Marketplace Logístico TOS.

Usa el documento `34_CHANGELOG_AND_DECISION_LOG.md` para registrar una decisión formal.

Decisión a evaluar:
[PEGAR DECISIÓN]

Analiza:
1. Contexto.
2. Opciones evaluadas.
3. Ventajas.
4. Desventajas.
5. Decisión recomendada.
6. Justificación.
7. Consecuencias positivas.
8. Trade-offs.
9. Impacto técnico.
10. Impacto funcional.
11. Impacto en seguridad.
12. Impacto en auditoría.
13. Impacto en roadmap.
14. Acciones derivadas.

Entrega:
1. Registro DEC completo.
2. Estado recomendado: APPROVED, REJECTED o DEFERRED.
3. Cambios derivados.
4. Riesgos.
```

---

## 50. Prompt para evaluar impacto de un cambio

```text
Evalúa el impacto del siguiente cambio en el Marketplace Logístico TOS:

Cambio:
[PEGAR CAMBIO]

Usa:
- `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`
- `30_SPRINT_ROADMAP.md`
- `31_ACCEPTANCE_CRITERIA_MASTER.md`
- `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`
- `34_CHANGELOG_AND_DECISION_LOG.md`

Entrega una matriz con:
1. Módulos afectados.
2. Historias afectadas.
3. Sprints afectados.
4. Tablas afectadas.
5. Endpoints afectados.
6. Componentes afectados.
7. Permisos afectados.
8. Scopes afectados.
9. Auditoría afectada.
10. Reportes afectados.
11. Riesgos.
12. Pruebas requeridas.
13. Recomendación final.
```

---

## 51. Prompt para generar release notes

```text
Genera release notes para el Marketplace Logístico TOS usando `34_CHANGELOG_AND_DECISION_LOG.md`.

Release:
[PEGAR CÓDIGO DE RELEASE]

Incluye:
1. Resumen ejecutivo.
2. Funcionalidades incluidas.
3. Funcionalidades excluidas.
4. Cambios incluidos.
5. Decisiones relevantes.
6. Bugs corregidos.
7. Riesgos conocidos.
8. Limitaciones del MVP.
9. Pruebas realizadas.
10. Estado final.

Reglas:
1. No afirmar integración Odoo real si no existe.
2. No afirmar pasarela real si no existe.
3. No afirmar BI externo si no existe.
4. Indicar claramente exclusiones del MVP.
```

---

# SECCIÓN I — CHECKLIST DE USO DEL DOCUMENTO

---

## 52. Checklist de uso

- [ ] Guardar este documento como `34_CHANGELOG_AND_DECISION_LOG.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo antes de aprobar cambios de alcance.
- [ ] Usarlo antes de cambiar arquitectura.
- [ ] Usarlo antes de cambiar base de datos.
- [ ] Usarlo antes de cambiar API.
- [ ] Usarlo antes de cambiar reglas de pagos.
- [ ] Usarlo antes de cambiar reglas de comisiones.
- [ ] Usarlo antes de cambiar seguridad, permisos o scopes.
- [ ] Usarlo antes de cambiar reglas de auditoría.
- [ ] Usarlo antes de publicar releases.
- [ ] Registrar toda decisión crítica.
- [ ] Registrar todo cambio crítico.
- [ ] Vincular cambios con épicas, historias y sprints.
- [ ] Actualizar documentos maestros afectados.
- [ ] Validar cambios contra criterios de aceptación.
- [ ] Confirmar que no se introducen integraciones externas no aprobadas.

---

## 53. Estado del documento

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
| Listo para usar en Antigravity | Sí, como documento maestro inicial |

---

# Fin del documento

