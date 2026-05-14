# 32_ANTIGRAVITY_PROMPTS_MASTER.md

# Documento Maestro de Prompts para Antigravity
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `32_ANTIGRAVITY_PROMPTS_MASTER.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Biblioteca maestra de prompts para desarrollo secuencial, modular, auditable y controlado |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional + base escalable para marketplace logístico TOS |
| Estilo visual | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, badges, ratings, categorías y diseño responsive |
| Documentos base principales | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` |

---

## 2. Propósito del documento

Este documento contiene una **biblioteca maestra de prompts listos para Antigravity** con el objetivo de desarrollar el Marketplace Logístico TOS de forma secuencial, modular y controlada.

Su propósito es convertir los documentos maestros del proyecto en instrucciones ejecutables para que Antigravity pueda:

1. Crear la arquitectura inicial.
2. Crear frontend React.js.
3. Crear backend Nest.js.
4. Crear base de datos MySQL.
5. Implementar seguridad, RBAC y scopes.
6. Implementar catálogos y seeds.
7. Implementar el diseño marketplace tipo Yelp.com.
8. Implementar tiendas, servicios y búsqueda.
9. Implementar cotizaciones y órdenes.
10. Implementar pagos y comisiones.
11. Implementar documentos y evidencias.
12. Implementar TOS, transporte, almacenamiento e inspecciones.
13. Implementar auditoría y reportes.
14. Implementar QA, Swagger y documentación.
15. Verificar artefactos, criterios de aceptación y cierre de sprints.

---

## 3. Objetivo general

Definir prompts maestros reutilizables para dirigir a Antigravity en el desarrollo completo del Marketplace Logístico TOS, manteniendo consistencia arquitectónica, funcional, visual, técnica, de seguridad, de auditoría y de calidad durante todos los sprints del proyecto.

---

## 4. Objetivos específicos

1. Crear prompts de inicialización del proyecto.
2. Crear prompts por fase del roadmap.
3. Crear prompts por sprint.
4. Crear prompts por módulo funcional.
5. Crear prompts frontend React.js.
6. Crear prompts backend Nest.js.
7. Crear prompts MySQL.
8. Crear prompts de seguridad, RBAC y scopes.
9. Crear prompts de auditoría y trazabilidad.
10. Crear prompts de reportes y dashboards.
11. Crear prompts de QA y pruebas.
12. Crear prompts de Swagger y documentación.
13. Crear prompts de revisión y cierre de sprint.
14. Crear prompts de demo temprana.
15. Crear prompts de MVP completo.
16. Crear prompts para corrección de errores.
17. Crear prompts de refactorización controlada.
18. Crear prompts de validación contra documentos maestros.

---

## 5. Reglas generales para todos los prompts

Antigravity debe obedecer estas reglas en todos los prompts:

1. Usar React.js para frontend.
2. Usar Nest.js para backend.
3. Usar MySQL para base de datos.
4. Usar arquitectura modular.
5. Usar diseño visual marketplace tipo Yelp.com.
6. Usar tarjetas, filtros, búsqueda, badges, perfiles públicos y navegación clara.
7. Usar catálogos maestros para categorías, estados y tipos.
8. Usar RBAC en backend.
9. Usar scopes en backend.
10. Proteger rutas React por perfil y permiso.
11. Proteger endpoints Nest.js por token, permiso y scope.
12. Validar DTOs en backend.
13. No confiar en validaciones frontend como fuente de verdad.
14. Calcular pagos, comisiones y montos críticos en backend.
15. Generar auditoría en acciones críticas.
16. Generar notificaciones cuando aplique.
17. Documentar endpoints con Swagger.
18. Crear estados frontend: loading, empty, error y forbidden.
19. Crear pruebas mínimas por módulo.
20. No integrar Odoo; usarlo solo como referencia conceptual de normalización.
21. No integrar pasarela de pago real en MVP.
22. No integrar BI externo en MVP.
23. No exponer secretos en código fuente.
24. No guardar contraseñas ni tokens en texto plano.
25. No cerrar historias sin cumplir criterios de aceptación.
26. Validar cada sprint contra `30_SPRINT_ROADMAP.md`.
27. Validar cada historia contra `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
28. Validar cada artefacto contra `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
29. Validar cierre contra `31_ACCEPTANCE_CRITERIA_MASTER.md`.

---

## 6. Cómo usar este documento en Antigravity

El flujo recomendado es:

```txt
1. Cargar documentos maestros en /docs
2. Usar Prompt 00 para inicializar el contexto del proyecto
3. Usar Prompt 01 para crear estructura base
4. Ejecutar prompts por sprint según 30_SPRINT_ROADMAP.md
5. Ejecutar prompts por módulo según necesidad
6. Ejecutar prompts de QA y aceptación
7. Ejecutar prompts de corrección/refactor solo cuando haya fallos
8. Ejecutar prompt de cierre de sprint
9. Avanzar al siguiente sprint
```

---

# SECCIÓN A — PROMPTS MAESTROS DE CONTEXTO

---

## 7. Prompt 00 — Cargar contexto maestro del proyecto

```text
Actúa como product owner, arquitecto full-stack, backend architect Nest.js, frontend architect React.js, database architect MySQL, security engineer, QA lead, scrum master y diseñador UX marketplace tipo Yelp para el proyecto Marketplace Logístico TOS para Puertos Aduaneros.

Vas a desarrollar una plataforma marketplace logística construida con:
- Frontend: React.js
- Backend: Nest.js
- Base de datos: MySQL
- Estilo visual: marketplace tipo Yelp.com
- Arquitectura: modular, segura, auditable y escalable

Lee y usa como fuente principal los documentos ubicados en `/docs`:

1. `01_PRODUCT_VISION.md`
2. `02_MVP_SCOPE.md`
3. `03_ANTIGRAVITY_RULES.md`
4. `04_ECOSYSTEM_ACTORS_MATRIX.md`
5. `05_USER_PROFILES.md`
6. `06_MODULE_PROFILE_ACCESS_MATRIX.md`
7. `07_FUNCTIONAL_MODULES_CATALOG.md`
8. `08_DESIGN_SYSTEM_MARKETPLACE.md`
9. `09_FRONTEND_COMPONENT_MAP.md`
10. `10_NAVIGATION_AND_MENUS.md`
11. `11_TECHNICAL_ARCHITECTURE.md`
12. `12_DATABASE_MASTER_SCHEMA.md`
13. `13_API_SPECIFICATION.md`
14. `14_ODOO_REFERENCE_MODELS.md`
15. `15_MASTER_CATALOGS_MVP.md`
16. `16_SERVICES_MASTER_CATALOG.md`
17. `17_INITIAL_SEEDS_PLAN.md`
18. `18_QUOTATION_WORKFLOW.md`
19. `19_ORDER_WORKFLOW.md`
20. `20_TOS_OPERATION_PLAN.md`
21. `21_TRANSPORT_OPERATION_PLAN.md`
22. `22_STORAGE_OPERATION_PLAN.md`
23. `23_INSPECTION_OPERATION_PLAN.md`
24. `24_PAYMENTS_MASTER_PLAN.md`
25. `25_COMMISSIONS_MASTER_PLAN.md`
26. `26_SECURITY_MASTER_PLAN.md`
27. `27_AUDIT_TRAIL_MASTER_PLAN.md`
28. `28_REPORTS_MASTER_PLAN.md`
29. `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`
30. `30_SPRINT_ROADMAP.md`
31. `31_ACCEPTANCE_CRITERIA_MASTER.md`
32. `32_ANTIGRAVITY_PROMPTS_MASTER.md`
33. `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`

Reglas obligatorias:
1. No crear integraciones reales con Odoo.
2. No crear pasarela de pago real en MVP.
3. No crear BI externo en MVP.
4. No omitir RBAC ni scopes.
5. No omitir auditoría en acciones críticas.
6. No calcular montos financieros críticos en frontend.
7. No cerrar módulos sin pruebas mínimas.
8. No cerrar sprints sin validar criterios de aceptación.

Antes de desarrollar, responde con:
1. Resumen del alcance técnico.
2. Fases principales del roadmap.
3. Módulos prioritarios.
4. Riesgos principales.
5. Primera tarea recomendada.
```

---

## 8. Prompt 01 — Crear estructura inicial del proyecto

```text
Usa los documentos `11_TECHNICAL_ARCHITECTURE.md`, `30_SPRINT_ROADMAP.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` para crear la estructura inicial del proyecto Marketplace Logístico TOS.

Crea la siguiente estructura raíz:

marketplace-logistico-tos/
  frontend/
  backend/
  database/
  docs/
  scripts/
  tests/
  README.md
  .env.example
  .gitignore

Requisitos:
1. Frontend en React.js.
2. Backend en Nest.js.
3. Base de datos MySQL.
4. Carpeta `/docs` para documentos maestros.
5. Carpeta `/database/migrations`.
6. Carpeta `/database/seeds`.
7. README inicial con instrucciones básicas.
8. `.env.example` sin secretos reales.
9. No crear lógica de negocio todavía.
10. Preparar estructura para módulos futuros.

Entregables:
1. Estructura de carpetas.
2. README inicial.
3. `.env.example`.
4. Health check backend básico.
5. Frontend inicial levantando una pantalla de bienvenida.
6. Explicación de archivos creados.
```

---

## 9. Prompt 02 — Validar documentos maestros antes de programar

```text
Antes de programar, revisa la carpeta `/docs` y valida que existan los documentos maestros principales del Marketplace Logístico TOS.

Usa como referencia `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Verifica:
1. Documentos del 01 al 33.
2. Que exista `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
3. Que exista `30_SPRINT_ROADMAP.md`.
4. Que exista `31_ACCEPTANCE_CRITERIA_MASTER.md`.
5. Que exista `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
6. Que los documentos no se contradigan en tecnologías principales.
7. Que el MVP no incluya integraciones reales con Odoo, pasarela externa o BI externo.

Entrega:
1. Tabla de documentos encontrados.
2. Tabla de documentos faltantes.
3. Riesgos detectados.
4. Recomendación de siguiente sprint.
```

---

# SECCIÓN B — PROMPTS POR FASE DEL ROADMAP

---

## 10. Prompt Fase 1 — Fundaciones técnicas y seguridad

```text
Desarrolla la Fase 1 del Marketplace Logístico TOS siguiendo `30_SPRINT_ROADMAP.md`.

Fase 1 incluye:
1. Sprint 01: Arquitectura base React/Nest/MySQL.
2. Sprint 02: Auth, RBAC y scopes.
3. Sprint 03: Catálogos, seeds y navegación por perfil.

Reglas obligatorias:
1. Implementar seguridad antes de módulos sensibles.
2. Crear roles, permisos y scopes desde el inicio.
3. Crear catálogos maestros y seeds demo.
4. Crear layouts por perfil.
5. Crear dashboards iniciales cliente, tienda, admin y auditor.
6. Proteger rutas frontend.
7. Proteger endpoints backend.
8. Documentar endpoints con Swagger.
9. Crear pruebas de 401, 403 y scopes.

Entrega por cada sprint:
1. Archivos creados/modificados.
2. Tablas creadas.
3. Endpoints creados.
4. Componentes React creados.
5. Permisos/scopes creados.
6. Seeds creados.
7. Pruebas ejecutadas.
8. Criterios de aceptación cumplidos.
```

---

## 11. Prompt Fase 2 — Marketplace comercial Yelp-like

```text
Desarrolla la Fase 2 del Marketplace Logístico TOS siguiendo `30_SPRINT_ROADMAP.md` y el diseño de `08_DESIGN_SYSTEM_MARKETPLACE.md`.

Fase 2 incluye:
1. Sprint 04: Design system Yelp-like y home público.
2. Sprint 05: Tiendas logísticas y perfiles públicos.
3. Sprint 06: Servicios marketplace y fichas de servicios.
4. Sprint 07: Búsqueda, directorio y filtros.
5. Sprint 08: Cotizaciones.

Objetivo:
Crear la experiencia pública y comercial del marketplace logístico donde los clientes puedan buscar servicios, ver tiendas, revisar fichas de servicios, solicitar cotizaciones y recibir respuestas de tiendas.

Reglas obligatorias:
1. Mantener estilo visual tipo Yelp.com.
2. Usar tarjetas de tienda y servicio.
3. Usar filtros visibles.
4. Usar categorías logísticas.
5. Usar perfil público de tienda.
6. Solo tiendas aprobadas pueden publicar servicios.
7. Solo servicios publicados aparecen en búsqueda.
8. Cotizaciones respetan cliente dueño y tienda dueña.
9. Cotizaciones generan notificaciones.
10. Respuestas de cotización generan auditoría o timeline.

Entrega:
1. Home público.
2. Directorio de búsqueda.
3. Perfil público de tienda.
4. Ficha pública de servicio.
5. Flujo de solicitud de cotización.
6. Flujo de respuesta de cotización.
7. Pruebas de scopes cliente/tienda.
```

---

## 12. Prompt Fase 3 — Órdenes, pagos, comisiones y auditoría

```text
Desarrolla la Fase 3 del Marketplace Logístico TOS siguiendo `30_SPRINT_ROADMAP.md`, `19_ORDER_WORKFLOW.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md` y `27_AUDIT_TRAIL_MASTER_PLAN.md`.

Fase 3 incluye:
1. Sprint 09: Órdenes y timeline operativo.
2. Sprint 10: Pagos manuales con comprobante.
3. Sprint 11: Comisiones y neto proveedor.
4. Sprint 12: Auditoría crítica y notificaciones internas.

Reglas obligatorias:
1. Cotización aprobada crea orden.
2. Orden tiene timeline.
3. Pago se asocia a orden.
4. Confirmar pago requiere permiso crítico.
5. Rechazar pago exige motivo.
6. Confirmar pago actualiza estado financiero de la orden.
7. Comisión se calcula en backend.
8. Neto proveedor no puede ser negativo.
9. Confirmar pago confirma comisión.
10. Confirmar pago genera audit log crítico.
11. Cambiar regla de comisión genera audit log crítico.
12. Cliente no ve comisiones internas.
13. Tienda ve sus comisiones y neto proveedor.

Entrega:
1. Órdenes.
2. Timeline.
3. Pagos.
4. Comprobantes.
5. Comisiones.
6. AuditLoggerService.
7. Notificaciones internas.
8. Pruebas E2E cliente-tienda-admin.
```

---

## 13. Prompt Fase 4 — Operación logística avanzada

```text
Desarrolla la Fase 4 del Marketplace Logístico TOS siguiendo `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md` y `30_SPRINT_ROADMAP.md`.

Fase 4 incluye:
1. Sprint 13: Documentos y evidencias.
2. Sprint 14: TOS básico.
3. Sprint 15: Transporte.
4. Sprint 16: Almacenamiento.
5. Sprint 17: Inspecciones.

Reglas obligatorias:
1. Todo documento debe validar tipo, tamaño y permiso.
2. Todo documento debe vincularse a una entidad.
3. Gate-out TOS no puede ejecutarse con bloqueo activo.
4. Transporte entregado requiere POD.
5. Incidencias requieren motivo.
6. Inventario bloqueado no puede despacharse.
7. Inspección rechazada requiere motivo.
8. Evidencias obligatorias deben cargarse antes de cerrar procesos.
9. Eventos operativos críticos generan auditoría.
10. Timeline de orden debe actualizarse cuando corresponda.

Entrega:
1. Documentos y evidencias.
2. TOS contenedores/gates/bloqueos.
3. Transporte viajes/POD/incidencias.
4. Almacenamiento inventario/despacho/bloqueos.
5. Inspecciones/checklists/evidencias.
6. Pruebas operativas por módulo.
```

---

## 14. Prompt Fase 5 — Reportes, dashboards y soporte

```text
Desarrolla la Fase 5 del Marketplace Logístico TOS siguiendo `28_REPORTS_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `30_SPRINT_ROADMAP.md` y `31_ACCEPTANCE_CRITERIA_MASTER.md`.

Fase 5 incluye:
1. Sprint 18: Reportes y dashboards por perfil.
2. Sprint 19: Reportes financieros, auditoría y exportaciones.
3. Sprint 20: Soporte e incidencias.

Reglas obligatorias:
1. Todo reporte valida autenticación.
2. Todo reporte valida permiso.
3. Todo reporte valida scope.
4. Reportes financieros requieren permiso reforzado.
5. Auditor ve solo lectura.
6. Exportar requiere permiso y motivo.
7. Exportar genera audit log.
8. Exportación respeta scope.
9. Cliente no ve datos globales.
10. Tienda no ve datos de otra tienda.
11. Soporte tiene acceso limitado.

Entrega:
1. Dashboards por perfil.
2. KPIs comerciales.
3. KPIs operativos.
4. KPIs financieros.
5. Reportes de auditoría/seguridad.
6. Exportación CSV.
7. Soporte básico.
8. Pruebas de reportes y scopes.
```

---

## 15. Prompt Fase 6 — QA, hardening y documentación final

```text
Desarrolla la Fase 6 del Marketplace Logístico TOS siguiendo `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` y `30_SPRINT_ROADMAP.md`.

Fase 6 incluye:
1. Sprint 21: QA integral E2E y regresión.
2. Sprint 22: Hardening, Swagger y documentación final.

Reglas obligatorias:
1. Ejecutar prueba E2E cliente-tienda-admin.
2. Ejecutar pruebas RBAC.
3. Ejecutar pruebas de scopes.
4. Ejecutar pruebas de pagos.
5. Ejecutar pruebas de comisiones.
6. Ejecutar pruebas de auditoría.
7. Ejecutar pruebas de archivos.
8. Ejecutar pruebas de reportes.
9. Documentar endpoints en Swagger.
10. Actualizar README final.
11. Validar `.env.example` sin secretos.
12. Validar seeds desde cero.
13. Validar CORS y rate limit auth.
14. Corregir bugs críticos.
15. Preparar demo final.

Entrega:
1. Matriz de pruebas.
2. Bugs encontrados y corregidos.
3. Swagger final.
4. README final.
5. Guía de seeds.
6. Guion de demo.
7. Decisión de aceptación MVP.
```

---

# SECCIÓN C — PROMPTS POR SPRINT

---

## 16. Prompt Sprint 01 — Arquitectura base

```text
Ejecuta el Sprint 01 del documento `30_SPRINT_ROADMAP.md`: Arquitectura base React/Nest/MySQL.

Objetivo:
Crear la estructura técnica inicial del proyecto Marketplace Logístico TOS.

Debes crear:
1. `/frontend` con React.js.
2. `/backend` con Nest.js.
3. `/database` con migraciones y seeds.
4. `/docs` para documentos maestros.
5. `.env.example`.
6. README inicial.
7. Health endpoint backend.
8. Pantalla inicial frontend.

Criterios de aceptación:
1. Frontend levanta localmente.
2. Backend levanta localmente.
3. Backend conecta a MySQL.
4. Health endpoint responde.
5. README explica comandos básicos.
6. No hay secretos reales en código.

Entrega:
1. Archivos creados.
2. Comandos para ejecutar.
3. Evidencia de health check.
4. Riesgos pendientes.
```

---

## 17. Prompt Sprint 02 — Auth, RBAC y scopes

```text
Ejecuta el Sprint 02 del documento `30_SPRINT_ROADMAP.md`: Autenticación, RBAC y scopes.

Objetivo:
Crear la seguridad base del Marketplace Logístico TOS.

Implementa:
1. AuthModule.
2. UsersModule.
3. RolesModule.
4. PermissionsModule.
5. Login.
6. Register.
7. Logout.
8. Endpoint `/auth/me`.
9. JWT access token.
10. Refresh token revocable.
11. Hash de password.
12. JwtAuthGuard.
13. PermissionsGuard.
14. ScopeGuard inicial.
15. ProtectedRoute en React.
16. PermissionGate en React.

Tablas mínimas:
1. `users`
2. `roles`
3. `permissions`
4. `role_permissions`
5. `user_roles`
6. `user_sessions`

Criterios de aceptación:
1. Usuario puede registrarse.
2. Usuario puede iniciar sesión.
3. Token protege endpoints.
4. Endpoint sin token devuelve 401.
5. Endpoint sin permiso devuelve 403.
6. Cliente no accede a admin.
7. Auditor queda preparado como solo lectura.

Entrega:
1. Tablas/migraciones.
2. Endpoints.
3. Componentes React.
4. Guards.
5. Seeds iniciales de roles y permisos.
6. Pruebas 401/403.
```

---

## 18. Prompt Sprint 03 — Catálogos, seeds y navegación

```text
Ejecuta el Sprint 03 del documento `30_SPRINT_ROADMAP.md`: Catálogos, seeds y navegación por perfil.

Objetivo:
Crear catálogos maestros, seeds demo y navegación por perfil.

Implementa:
1. MasterCatalogsModule.
2. Tablas `master_catalogs` y `master_catalog_items`.
3. Seeds de perfiles.
4. Seeds de roles/permisos.
5. Seeds de categorías de servicios.
6. Seeds de tipos de tienda.
7. Seeds de tipos de carga.
8. Seeds de documentos.
9. Seeds de estados operativos, financieros y aduaneros.
10. Seeds de puertos y terminales demo.
11. Layouts por perfil.
12. Dashboards iniciales cliente, tienda, admin y auditor.
13. Menús por perfil.

Criterios de aceptación:
1. Catálogos se consultan desde backend.
2. Seeds cargan desde cero.
3. Cliente ve menú cliente.
4. Tienda ve menú tienda.
5. Admin ve menú global.
6. Auditor ve navegación de solo lectura.

Entrega:
1. Migraciones.
2. Seeds.
3. Endpoints de catálogos.
4. Páginas dashboard.
5. Menús por perfil.
6. Pruebas de navegación.
```

---

## 19. Prompt Sprint 04 — Design system y home Yelp-like

```text
Ejecuta el Sprint 04 del documento `30_SPRINT_ROADMAP.md`: Design system marketplace tipo Yelp y home público.

Objetivo:
Crear la base visual del marketplace logístico.

Implementa componentes UI:
1. Button.
2. Input.
3. Select.
4. Textarea.
5. Card.
6. Badge.
7. Table.
8. Modal.
9. Pagination.
10. LoadingSkeleton.
11. EmptyState.
12. ErrorState.
13. ForbiddenState.

Implementa componentes marketplace:
1. MarketplaceHeader.
2. MarketplaceFooter.
3. HeroSearchSection.
4. CategoryCard.
5. StoreCard.
6. ServiceCard.
7. DirectoryFilters.
8. SearchResultsList.

Implementa:
1. HomePage.
2. Categorías destacadas.
3. Tiendas destacadas demo.
4. Servicios destacados demo.

Criterios de aceptación:
1. Home carga públicamente.
2. Diseño se parece a marketplace tipo Yelp.
3. Componentes son reutilizables.
4. Diseño es responsive.
5. Filtros visuales existen.
6. No se usan librerías externas innecesarias para iconos si generan fallos de CDN.

Entrega:
1. Componentes UI.
2. HomePage.
3. Header/footer.
4. Cards marketplace.
5. Capturas o descripción de validación responsive.
```

---

## 20. Prompt Sprint 05 — Tiendas logísticas

```text
Ejecuta el Sprint 05 del documento `30_SPRINT_ROADMAP.md`: Tiendas logísticas y perfiles públicos.

Objetivo:
Crear el módulo de tiendas logísticas que representan actores del ecosistema portuario aduanero.

Implementa:
1. StoresModule.
2. StoresController.
3. StoresService.
4. CreateStoreDto.
5. ApproveStoreDto.
6. RejectStoreDto.
7. SuspendStoreDto.
8. Tablas `stores` y `store_users`.
9. StoreRegistrationPage.
10. StoreManagementPage.
11. AdminStoreApprovalPage.
12. StorePublicProfilePage.
13. StoreCard conectado.

Estados de tienda:
1. PENDING.
2. ACTIVE.
3. REJECTED.
4. SUSPENDED.
5. INACTIVE.

Reglas:
1. Tienda nueva inicia PENDING.
2. Solo admin aprueba/rechaza/suspende.
3. Tienda suspendida no opera.
4. Usuario tienda solo ve su tienda.
5. Aprobación/rechazo/suspensión genera audit log.

Entrega:
1. Tablas.
2. Endpoints.
3. Páginas React.
4. Permisos.
5. Auditoría.
6. Pruebas de scope tienda.
```

---

## 21. Prompt Sprint 06 — Servicios marketplace

```text
Ejecuta el Sprint 06 del documento `30_SPRINT_ROADMAP.md`: Servicios marketplace y fichas de servicios.

Objetivo:
Crear fichas de servicios logísticos publicables por tiendas.

Implementa:
1. ServicesModule.
2. ServicesController.
3. ServicesService.
4. CreateServiceDto.
5. UpdateServiceDto.
6. PublishServiceDto.
7. Tabla `services`.
8. Relaciones con stores y catálogos.
9. ServiceForm.
10. StoreServicesPage.
11. ServiceDetailPage.
12. ServiceCard conectado.

Campos mínimos del servicio:
1. Código.
2. Nombre.
3. Categoría.
4. Subcategoría.
5. Tienda proveedora.
6. Descripción.
7. Alcance.
8. Documentos requeridos.
9. Tarifa.
10. Unidad de medida.
11. Tiempo estimado.
12. Estado.
13. Reglas.
14. Comisión referencial.
15. SLA.

Reglas:
1. Solo tienda aprobada crea servicios.
2. Solo tienda dueña edita.
3. Servicio publicado aparece públicamente.
4. Servicio inactivo no aparece en búsqueda.
5. Publicar/despublicar genera auditoría.

Entrega:
1. Tablas.
2. Endpoints.
3. Formulario.
4. Detalle público.
5. Publicación.
6. Pruebas de visibilidad.
```

---

## 22. Prompt Sprint 07 — Búsqueda y directorio

```text
Ejecuta el Sprint 07 del documento `30_SPRINT_ROADMAP.md`: Búsqueda, directorio y filtros.

Objetivo:
Crear el buscador público del marketplace logístico.

Implementa:
1. SearchModule.
2. Endpoint `/search/services`.
3. Endpoint `/search/stores` si aplica.
4. Filtros por texto.
5. Filtros por categoría.
6. Filtros por tipo de tienda.
7. Filtros por puerto/terminal demo.
8. Filtros por estado publicado.
9. SearchResultsPage.
10. SearchBar conectado.
11. FilterSidebar conectado.
12. Paginación básica.
13. Loading, empty y error states.

Reglas:
1. Solo servicios publicados aparecen.
2. Solo tiendas activas aparecen.
3. Filtros se validan en backend.
4. Resultados muestran proveedor, categoría, tarifa referencial y CTA.

Entrega:
1. Endpoints de búsqueda.
2. UI de resultados.
3. Filtros conectados.
4. Pruebas de búsqueda.
```

---

## 23. Prompt Sprint 08 — Cotizaciones

```text
Ejecuta el Sprint 08 del documento `30_SPRINT_ROADMAP.md`: Cotizaciones.

Objetivo:
Implementar solicitud, respuesta y aprobación/rechazo de cotizaciones.

Implementa:
1. QuotationsModule.
2. QuotationsController.
3. QuotationsService.
4. CreateQuotationDto.
5. RespondQuotationDto.
6. ApproveQuotationDto.
7. RejectQuotationDto.
8. Tablas `quotations` y `quotation_lines`.
9. QuotationRequestForm.
10. ClientQuotationsPage.
11. StoreQuotationsPage.
12. QuotationDetailPage.
13. QuotationResponseForm.

Estados:
1. PENDING.
2. RESPONDED.
3. APPROVED.
4. REJECTED.
5. EXPIRED.
6. CONVERTED_TO_ORDER.

Reglas:
1. Cliente solicita desde servicio publicado.
2. Tienda dueña responde.
3. Cliente dueño aprueba/rechaza.
4. Otra tienda no ve cotización.
5. Cotización aprobada queda lista para crear orden.
6. Eventos generan notificaciones.
7. Respuesta/aprobación genera audit log o timeline.

Entrega:
1. Tablas.
2. Endpoints.
3. UI cliente y tienda.
4. Notificaciones.
5. Pruebas cliente-tienda.
```

---

## 24. Prompt Sprint 09 — Órdenes

```text
Ejecuta el Sprint 09 del documento `30_SPRINT_ROADMAP.md`: Órdenes y timeline operativo.

Objetivo:
Crear órdenes desde cotizaciones aprobadas y permitir seguimiento por perfil.

Implementa:
1. OrdersModule.
2. OrdersController.
3. OrdersService.
4. CreateOrderFromQuotation logic.
5. UpdateOrderStatusDto.
6. CloseOrderDto.
7. CancelOrderDto.
8. Tablas `orders`, `order_lines`, `order_events`.
9. OrdersListPage.
10. OrderDetailPage.
11. OrderTimeline.
12. OrderStatusBadge.
13. CloseOrderModal.
14. CancelOrderModal.

Estados mínimos:
1. CREATED.
2. IN_PROCESS.
3. ON_HOLD.
4. COMPLETED.
5. CLOSED.
6. CANCELLED.

Reglas:
1. Cotización aprobada crea orden.
2. Cliente ve órdenes propias.
3. Tienda ve órdenes de sus servicios.
4. Admin ve todas.
5. Auditor ve solo lectura.
6. Cancelar exige motivo.
7. Cerrar/cancelar genera audit log.
8. Timeline se actualiza en eventos principales.

Entrega:
1. Tablas.
2. Endpoints.
3. UI de órdenes.
4. Timeline.
5. Pruebas de scope.
```

---

## 25. Prompt Sprint 10 — Pagos

```text
Ejecuta el Sprint 10 del documento `30_SPRINT_ROADMAP.md`: Pagos manuales con comprobante.

Objetivo:
Implementar pagos manuales asociados a órdenes.

Implementa:
1. PaymentsModule.
2. PaymentsController.
3. PaymentsService.
4. CreatePaymentDto.
5. ConfirmPaymentDto.
6. RejectPaymentDto.
7. UploadPaymentReceiptDto.
8. Tablas `payments`, `payment_receipts`, `payment_status_history`.
9. PaymentForm.
10. PaymentReceiptUpload.
11. PaymentReviewPanel.
12. PaymentStatusBadge.
13. PaymentDetailPage.

Estados:
1. CREATED.
2. SUBMITTED.
3. IN_REVIEW.
4. CONFIRMED.
5. REJECTED.
6. CANCELLED.
7. REFUNDED_REFERENTIAL.

Reglas:
1. Cliente registra pago de orden propia.
2. Comprobante es obligatorio cuando aplique.
3. Confirmar pago requiere permiso crítico.
4. Rechazar pago exige motivo.
5. Confirmar pago actualiza estado financiero de orden.
6. Confirmar pago genera audit log crítico.
7. Cliente no puede confirmar pago.
8. Tienda solo consulta pagos relacionados.

Entrega:
1. Tablas.
2. Endpoints.
3. Upload de comprobante.
4. Panel de revisión.
5. Auditoría.
6. Pruebas de pago confirmado/rechazado.
```

---

## 26. Prompt Sprint 11 — Comisiones

```text
Ejecuta el Sprint 11 del documento `30_SPRINT_ROADMAP.md`: Comisiones y neto proveedor.

Objetivo:
Implementar reglas de comisión, cálculo de comisión y neto proveedor.

Implementa:
1. CommissionsModule.
2. CommissionRulesModule.
3. CommissionsController.
4. CommissionRulesController.
5. CreateCommissionRuleDto.
6. UpdateCommissionRuleDto.
7. CalculateCommissionDto.
8. Tablas `commission_rules`, `commissions`, `commission_status_history`.
9. Motor de selección de regla.
10. Motor de cálculo decimal.
11. CommissionRuleForm.
12. CommissionSummaryCard.
13. StoreCommissionsPage.
14. AdminCommissionsPage.

Reglas:
1. Admin crea reglas.
2. Regla tiene prioridad.
3. Comisión se calcula en backend.
4. Comisión no puede ser negativa.
5. Neto proveedor no puede ser negativo.
6. Comisión se asocia a orden y tienda.
7. Pago confirmado confirma comisión.
8. Cliente no ve reglas internas.
9. Cambios de regla generan auditoría crítica.

Entrega:
1. Tablas.
2. Endpoints.
3. Motor de cálculo.
4. UI admin/tienda.
5. Integración con pagos.
6. Pruebas de cálculo.
```

---

## 27. Prompt Sprint 12 — Auditoría y notificaciones

```text
Ejecuta el Sprint 12 del documento `30_SPRINT_ROADMAP.md`: Auditoría crítica y notificaciones internas.

Objetivo:
Consolidar auditoría transversal y notificaciones internas.

Implementa auditoría:
1. AuditModule.
2. AuditController.
3. AuditService.
4. AuditLoggerService.
5. AuditLogFilterDto.
6. Tabla `audit_logs`.
7. Tabla `entity_change_history` opcional.
8. Sanitizador de campos sensibles.
9. Endpoint `/audit/logs`.
10. Endpoint `/audit/entities/:entityType/:entityId`.
11. AuditLogListPage.
12. AuditLogDetailPage opcional.
13. AuditDiffViewer opcional.

Implementa notificaciones:
1. NotificationsModule.
2. NotificationsController.
3. NotificationsService.
4. Tabla `notifications`.
5. NotificationsDropdown.
6. NotificationsPage.
7. Mark as read.

Reglas:
1. Audit logs no guardan password, tokens ni secrets.
2. Confirmación de pago se audita.
3. Cambio de regla de comisión se audita.
4. Cambio de rol se audita.
5. Cierre/cancelación de orden se audita.
6. Usuario ve solo notificaciones propias.

Entrega:
1. AuditLoggerService.
2. Notificaciones.
3. Endpoints.
4. UI.
5. Pruebas de auditoría y notificaciones.
```

---

## 28. Prompt Sprint 13 — Documentos y evidencias

```text
Ejecuta el Sprint 13 del documento `30_SPRINT_ROADMAP.md`: Documentos y evidencias transversales.

Objetivo:
Implementar carga, validación, rechazo y descarga segura de documentos/evidencias.

Implementa:
1. DocumentsModule.
2. DocumentsController.
3. DocumentsService.
4. UploadDocumentDto.
5. ReviewDocumentDto.
6. Tablas `documents` y `evidences`.
7. Upload seguro.
8. Validación MIME.
9. Validación extensión.
10. Validación tamaño.
11. DocumentUpload.
12. DocumentReviewPanel.
13. EntityDocumentsPanel.
14. Download protegido.

Reglas:
1. Solo tipos permitidos.
2. Bloquear extensiones peligrosas.
3. Descargar requiere permiso y scope.
4. Documento se vincula a entidad.
5. Rechazo exige motivo.
6. Validación/rechazo genera auditoría.

Entrega:
1. Tablas.
2. Endpoints upload/download/review.
3. UI documentos.
4. Seguridad de archivos.
5. Pruebas de archivo válido/inválido.
```

---

## 29. Prompt Sprint 14 — TOS básico

```text
Ejecuta el Sprint 14 del documento `30_SPRINT_ROADMAP.md`: TOS básico.

Objetivo:
Implementar operación portuaria básica con contenedores, gate-in, gate-out, movimientos y bloqueos.

Implementa:
1. TosModule.
2. TosController.
3. TosService.
4. CreateTosContainerDto.
5. GateInDto.
6. GateOutDto.
7. CreateTosHoldDto.
8. ReleaseTosHoldDto.
9. Tablas `tos_containers`, `tos_gates`, `tos_movements`, `tos_holds`.
10. TosDashboardPage.
11. TosContainerDetailPage.
12. TosGateForm.
13. TosHoldPanel.

Reglas:
1. Contenedor se asocia a orden.
2. Gate-in cambia estado.
3. Gate-out no permite bloqueo activo.
4. Bloqueo exige motivo.
5. Liberación requiere permiso.
6. Gate-out, bloqueo y liberación generan auditoría crítica.
7. Timeline de orden se actualiza.

Entrega:
1. Tablas TOS.
2. Endpoints.
3. UI TOS.
4. Auditoría.
5. Prueba gate-out con bloqueo activo.
```

---

## 30. Prompt Sprint 15 — Transporte

```text
Ejecuta el Sprint 15 del documento `30_SPRINT_ROADMAP.md`: Transporte.

Objetivo:
Implementar viajes, asignación, estados, incidencias, entrega y POD.

Implementa:
1. TransportModule.
2. TransportController.
3. TransportService.
4. CreateTripDto.
5. AssignTripDto.
6. UpdateTripStatusDto.
7. ReportTripIncidentDto.
8. UploadPodDto.
9. Tablas `trips`, `trip_events`, `vehicles`, `drivers`.
10. TripsListPage.
11. TripDetailPage.
12. TripStatusActions.
13. PodUploadPanel.

Reglas:
1. Viaje se asocia a orden.
2. Transportista ve viajes propios/asignados.
3. Estados siguen transición válida.
4. Incidencia exige motivo.
5. Entrega requiere POD.
6. Entrega e incidencia generan auditoría.
7. Timeline de orden se actualiza.

Entrega:
1. Tablas.
2. Endpoints.
3. UI viajes.
4. POD.
5. Pruebas de transición y scopes.
```

---

## 31. Prompt Sprint 16 — Almacenamiento

```text
Ejecuta el Sprint 16 del documento `30_SPRINT_ROADMAP.md`: Almacenamiento.

Objetivo:
Implementar inventario, recepción, ubicación, movimientos, bloqueos y despacho.

Implementa:
1. StorageModule.
2. StorageController.
3. StorageService.
4. ReceiveInventoryDto.
5. MoveInventoryDto.
6. CreateStorageHoldDto.
7. ReleaseStorageHoldDto.
8. DispatchInventoryDto.
9. Tablas `warehouses`, `storage_locations`, `inventory_items`, `storage_movements`, `storage_holds`, `dispatches`.
10. StorageDashboardPage.
11. InventoryListPage.
12. InventoryDetailPage.
13. ReceiveInventoryForm.
14. DispatchForm.

Reglas:
1. Inventario se asocia a orden.
2. Inventario se asocia a almacén.
3. Inventario bloqueado no puede despacharse.
4. Despacho requiere permiso.
5. Despacho genera auditoría crítica.
6. Almacén solo ve inventario propio.
7. Timeline de orden se actualiza.

Entrega:
1. Tablas.
2. Endpoints.
3. UI almacenamiento.
4. Auditoría.
5. Prueba despacho con bloqueo.
```

---

## 32. Prompt Sprint 17 — Inspecciones

```text
Ejecuta el Sprint 17 del documento `30_SPRINT_ROADMAP.md`: Inspecciones.

Objetivo:
Implementar creación, asignación, checklist, evidencias, revisión, aprobación, observación y rechazo de inspecciones.

Implementa:
1. InspectionsModule.
2. InspectionsController.
3. InspectionsService.
4. CreateInspectionDto.
5. AssignInspectionDto.
6. UpdateChecklistDto.
7. SubmitInspectionResultDto.
8. ReviewInspectionDto.
9. Tablas `inspections`, `inspection_checklists`, `inspection_checklist_items`, `inspection_results`.
10. InspectionListPage.
11. InspectionDetailPage.
12. InspectionChecklistRunner.
13. InspectionReviewPanel.

Reglas:
1. Inspección se asocia a orden o entidad operativa.
2. Inspector solo ve inspecciones asignadas.
3. Checklist obligatorio debe completarse.
4. Evidencia obligatoria debe cargarse.
5. Rechazo exige motivo.
6. Rechazo puede crear bloqueo relacionado.
7. Aprobación/rechazo genera auditoría.

Entrega:
1. Tablas.
2. Endpoints.
3. UI inspecciones.
4. Checklists.
5. Pruebas de evidencia obligatoria y rechazo.
```

---

## 33. Prompt Sprint 18 — Dashboards y reportes por perfil

```text
Ejecuta el Sprint 18 del documento `30_SPRINT_ROADMAP.md`: Reportes y dashboards por perfil.

Objetivo:
Implementar reportes y KPIs por perfil.

Implementa:
1. ReportsModule.
2. ReportsController.
3. ReportsService.
4. ReportDefinitionsService.
5. ReportFilterDto.
6. Tabla `report_definitions`.
7. Endpoint `/reports/dashboard`.
8. Endpoint `/reports/client-dashboard`.
9. Endpoint `/reports/store-dashboard`.
10. Endpoint `/reports/admin-dashboard`.
11. Endpoint `/reports/auditor-dashboard`.
12. ReportsDashboardPage.
13. ReportSummaryCard.
14. ReportMetricGrid.
15. ReportFiltersBar.

KPIs mínimos:
1. Órdenes activas.
2. Cotizaciones pendientes.
3. Pagos pendientes.
4. Pagos confirmados.
5. Comisiones confirmadas.
6. Neto proveedor.
7. Servicios publicados.
8. Tiendas activas.
9. Eventos críticos.

Reglas:
1. Reportes validan permisos.
2. Reportes validan scopes.
3. Cliente ve datos propios.
4. Tienda ve datos propios.
5. Admin ve global.
6. Auditor ve solo lectura.

Entrega:
1. Endpoints.
2. Dashboards.
3. KPIs.
4. Pruebas de scope.
```

---

## 34. Prompt Sprint 19 — Reportes financieros y exportaciones

```text
Ejecuta el Sprint 19 del documento `30_SPRINT_ROADMAP.md`: Reportes financieros, auditoría y exportaciones.

Objetivo:
Implementar reportes financieros, auditoría, seguridad y exportación CSV controlada.

Implementa:
1. Tabla `report_exports`.
2. ExportReportDto.
3. ReportExportService.
4. Exportador CSV.
5. Endpoint `/reports/financial`.
6. Endpoint `/reports/audit`.
7. Endpoint `/reports/security`.
8. Endpoint `/reports/export`.
9. FinancialReportPage.
10. SecurityReportPage.
11. AuditReportPage.
12. ReportExportModal.

Reglas:
1. Reportes financieros requieren permiso reforzado.
2. Exportar requiere permiso.
3. Exportar requiere motivo.
4. Exportación respeta scope.
5. Exportación genera audit log.
6. Archivo exportado queda protegido.
7. Cliente no exporta datos globales.
8. Tienda no exporta datos de otra tienda.

Entrega:
1. Reportes financieros.
2. Reportes auditoría/seguridad.
3. CSV export.
4. Audit log exportación.
5. Pruebas de permisos.
```

---

## 35. Prompt Sprint 20 — Soporte e incidencias

```text
Ejecuta el Sprint 20 del documento `30_SPRINT_ROADMAP.md`: Soporte e incidencias.

Objetivo:
Implementar soporte básico mediante tickets.

Implementa:
1. SupportModule.
2. SupportController.
3. SupportService.
4. CreateSupportTicketDto.
5. AddSupportCommentDto.
6. UpdateSupportTicketStatusDto.
7. Tablas `support_tickets` y `support_ticket_comments`.
8. SupportTicketForm.
9. SupportTicketsPage.
10. SupportTicketDetailPage.

Reglas:
1. Usuario crea ticket propio.
2. Ticket puede vincularse a orden, pago o documento.
3. Soporte ve tickets autorizados.
4. Usuario no ve tickets ajenos.
5. Soporte no confirma pagos ni ajusta comisiones.

Entrega:
1. Tablas.
2. Endpoints.
3. UI soporte.
4. Pruebas de scope.
```

---

## 36. Prompt Sprint 21 — QA integral

```text
Ejecuta el Sprint 21 del documento `30_SPRINT_ROADMAP.md`: QA integral E2E y regresión.

Objetivo:
Validar el MVP completo.

Ejecuta pruebas:
1. Flujo cliente-tienda-admin.
2. Login/logout.
3. RBAC.
4. Scopes.
5. Tiendas.
6. Servicios.
7. Búsqueda.
8. Cotizaciones.
9. Órdenes.
10. Pagos.
11. Comisiones.
12. Auditoría.
13. Notificaciones.
14. Documentos.
15. TOS.
16. Transporte.
17. Almacenamiento.
18. Inspecciones.
19. Reportes.
20. Exportaciones.

Entrega:
1. Matriz de pruebas.
2. Resultado por prueba: PASS/FAIL.
3. Bugs críticos.
4. Bugs altos.
5. Correcciones aplicadas.
6. Riesgos remanentes.
7. Decisión de aceptación.
```

---

## 37. Prompt Sprint 22 — Hardening, Swagger y documentación

```text
Ejecuta el Sprint 22 del documento `30_SPRINT_ROADMAP.md`: Hardening, Swagger y documentación final.

Objetivo:
Preparar el MVP para demo final.

Implementa y valida:
1. Swagger completo.
2. README final.
3. `.env.example` final.
4. Guía de instalación.
5. Guía de migraciones.
6. Guía de seeds.
7. Guía de usuarios demo.
8. Guion de demo.
9. CORS seguro.
10. Rate limit auth.
11. Errores seguros.
12. Variables de entorno.
13. No secretos en código.
14. Seeds desde cero.
15. Demo final.

Entrega:
1. Swagger actualizado.
2. README final.
3. Guía de demo.
4. Checklist de MVP.
5. Decisión final: ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

# SECCIÓN D — PROMPTS POR CAPA TÉCNICA

---

## 38. Prompt frontend React.js general

```text
Actúa como frontend architect React.js y diseñador UX marketplace tipo Yelp.

Crea o mejora el frontend del módulo indicado respetando:
1. React.js.
2. Componentes reutilizables.
3. Layouts por perfil.
4. Diseño marketplace tipo Yelp.
5. Cards, badges, filtros, tablas y modales.
6. Estados loading, empty, error y forbidden.
7. Validaciones de formulario en frontend.
8. Consumo de API desde servicios centralizados.
9. Hooks reutilizables.
10. Protección de rutas.
11. PermissionGate para acciones.
12. Responsive desktop/tablet/mobile.

No hagas:
1. No calcular montos críticos como fuente de verdad.
2. No exponer secretos.
3. No confiar en el frontend para seguridad.
4. No usar dependencias externas innecesarias que puedan fallar por CDN.

Entrega:
1. Componentes creados.
2. Páginas creadas.
3. Hooks creados.
4. Servicios API frontend.
5. Estados visuales.
6. Pruebas manuales sugeridas.
```

---

## 39. Prompt backend Nest.js general

```text
Actúa como backend architect Nest.js.

Crea o mejora el backend del módulo indicado respetando:
1. Arquitectura modular Nest.js.
2. Controller.
3. Service.
4. DTOs.
5. Entities/modelos.
6. Validación DTO.
7. Guards de auth, permisos y scope.
8. Manejo de errores controlado.
9. Paginación en listados.
10. Filtros validados.
11. Transacciones en acciones críticas.
12. Auditoría en acciones críticas.
13. Notificaciones cuando aplique.
14. Swagger decorators.

No hagas:
1. No crear endpoints privados sin auth.
2. No omitir permisos.
3. No omitir scopes.
4. No guardar secretos.
5. No exponer stack traces.
6. No integrar Odoo ni pasarelas reales en MVP.

Entrega:
1. Archivos backend creados/modificados.
2. Endpoints.
3. DTOs.
4. Validaciones.
5. Permisos/scopes.
6. Swagger.
7. Pruebas sugeridas.
```

---

## 40. Prompt MySQL/database general

```text
Actúa como database architect MySQL.

Diseña o mejora las tablas del módulo indicado respetando `12_DATABASE_MASTER_SCHEMA.md` y `14_ODOO_REFERENCE_MODELS.md` solo como referencia conceptual de normalización.

Reglas:
1. Usar MySQL.
2. Crear claves primarias.
3. Crear códigos públicos únicos cuando aplique.
4. Usar `created_at` y `updated_at`.
5. Usar `deleted_at` si aplica soft delete.
6. Usar DECIMAL para montos.
7. Crear índices por `status`, `store_id`, `customer_id`, `order_id` y fechas cuando aplique.
8. Crear foreign keys cuando corresponda.
9. No guardar password en texto plano.
10. No guardar tokens en texto plano.
11. Usar estados normalizados o catálogos cuando aplique.
12. Preparar seeds demo.

Entrega:
1. Tablas propuestas.
2. Campos.
3. Índices.
4. Relaciones.
5. Migraciones.
6. Seeds mínimos.
7. Riesgos de integridad.
```

---

## 41. Prompt seguridad, RBAC y scopes

```text
Actúa como security engineer del Marketplace Logístico TOS.

Implementa o revisa seguridad del módulo indicado usando `26_SECURITY_MASTER_PLAN.md`.

Valida:
1. Autenticación.
2. RBAC.
3. Scopes.
4. Permisos por acción.
5. Rutas protegidas.
6. Endpoints protegidos.
7. Usuario activo.
8. Tienda activa si aplica.
9. Auditor solo lectura.
10. Cliente solo datos propios.
11. Tienda solo datos de su tienda.
12. Transportista/inspector solo asignaciones.
13. Errores seguros.
14. Logs sin secretos.
15. Rate limit si aplica.

Entrega:
1. Permisos necesarios.
2. Scopes necesarios.
3. Guards aplicados.
4. Casos 401/403.
5. Pruebas de seguridad.
6. Riesgos encontrados.
```

---

## 42. Prompt auditoría y trazabilidad

```text
Actúa como auditor técnico y backend architect.

Implementa o revisa auditoría del módulo indicado usando `27_AUDIT_TRAIL_MASTER_PLAN.md`.

Valida que las acciones críticas generen audit log con:
1. Actor.
2. Perfil.
3. Acción.
4. Módulo.
5. Entidad.
6. Entity ID/code.
7. Old values.
8. New values.
9. Motivo si aplica.
10. IP si disponible.
11. User agent si disponible.
12. Severidad.
13. Fecha del servidor.

Campos prohibidos en audit log:
1. password.
2. password_hash.
3. access_token.
4. refresh_token.
5. reset_token.
6. api_key.
7. secret.
8. private_key.

Entrega:
1. Eventos auditables.
2. Código de eventos.
3. Severidad.
4. Tablas involucradas.
5. Integración con AuditLoggerService.
6. Pruebas de auditoría.
```

---

## 43. Prompt QA general

```text
Actúa como QA lead del Marketplace Logístico TOS.

Valida el módulo o sprint indicado usando `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Ejecuta o define pruebas para:
1. Caso exitoso.
2. Caso sin autenticación.
3. Caso sin permiso.
4. Caso fuera de scope.
5. Caso DTO inválido.
6. Caso estado inválido.
7. Caso error controlado.
8. Caso auditoría si aplica.
9. Caso notificación si aplica.
10. Caso frontend loading/empty/error/forbidden.

Entrega:
1. Matriz de pruebas.
2. Resultado esperado.
3. Resultado observado.
4. Bugs.
5. Severidad.
6. Recomendación: ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

## 44. Prompt Swagger y documentación API

```text
Actúa como backend architect y technical writer.

Documenta los endpoints del módulo indicado con Swagger siguiendo `13_API_SPECIFICATION.md`.

Cada endpoint debe incluir:
1. Tag del módulo.
2. Descripción.
3. DTO de entrada.
4. Respuesta esperada.
5. Códigos de error.
6. Auth requerida si aplica.
7. Permiso requerido si aplica.
8. Scope aplicado si aplica.
9. Ejemplo de payload.
10. Ejemplo de respuesta.

Entrega:
1. Swagger decorators agregados.
2. DTOs documentados.
3. Endpoints agrupados.
4. Notas de seguridad.
5. Prueba desde Swagger local.
```

---

# SECCIÓN E — PROMPTS POR MÓDULO FUNCIONAL

---

## 45. Prompt módulo Auth

```text
Desarrolla el módulo Auth del Marketplace Logístico TOS.

Usa:
- `26_SECURITY_MASTER_PLAN.md`
- `12_DATABASE_MASTER_SCHEMA.md`
- `13_API_SPECIFICATION.md`

Implementa:
1. Registro.
2. Login.
3. Logout.
4. Refresh token.
5. `/auth/me`.
6. Hash de contraseña.
7. Sesiones revocables.
8. Rate limit login.
9. LoginPage.
10. RegisterPage.
11. useAuth.
12. authApi.

Criterios:
1. Password hasheada.
2. Token expira.
3. Endpoint privado sin token devuelve 401.
4. Login inválido no filtra si email existe.
5. Logout revoca sesión.
```

---

## 46. Prompt módulo Tiendas

```text
Desarrolla el módulo Stores del Marketplace Logístico TOS.

Usa:
- `04_ECOSYSTEM_ACTORS_MATRIX.md`
- `05_USER_PROFILES.md`
- `16_SERVICES_MASTER_CATALOG.md`
- `26_SECURITY_MASTER_PLAN.md`

Implementa:
1. Crear tienda.
2. Aprobar tienda.
3. Rechazar tienda.
4. Suspender tienda.
5. Perfil público de tienda.
6. Gestión interna de tienda.
7. StoreCard estilo Yelp.
8. Scopes de tienda.
9. Auditoría de aprobación/rechazo/suspensión.

Criterios:
1. Tienda inicia PENDING.
2. Solo admin aprueba.
3. Tienda suspendida no opera.
4. Usuario tienda solo ve su tienda.
5. Perfil público muestra tienda activa.
```

---

## 47. Prompt módulo Servicios

```text
Desarrolla el módulo Services del Marketplace Logístico TOS.

Usa:
- `16_SERVICES_MASTER_CATALOG.md`
- `08_DESIGN_SYSTEM_MARKETPLACE.md`
- `18_QUOTATION_WORKFLOW.md`

Implementa:
1. Crear servicio.
2. Editar servicio.
3. Publicar servicio.
4. Despublicar servicio.
5. Detalle público de servicio.
6. Tarjeta de servicio.
7. Documentos requeridos.
8. SLA.
9. Tarifa referencial.
10. CTA solicitar cotización.

Criterios:
1. Solo tienda aprobada publica.
2. Solo tienda dueña edita.
3. Servicio publicado aparece en búsqueda.
4. Servicio inactivo no aparece públicamente.
5. Publicación genera auditoría.
```

---

## 48. Prompt módulo Cotizaciones

```text
Desarrolla el módulo Quotations del Marketplace Logístico TOS.

Usa:
- `18_QUOTATION_WORKFLOW.md`
- `19_ORDER_WORKFLOW.md`
- `26_SECURITY_MASTER_PLAN.md`

Implementa:
1. Solicitar cotización.
2. Responder cotización.
3. Aprobar cotización.
4. Rechazar cotización.
5. Listado cliente.
6. Listado tienda.
7. Detalle cotización.
8. Notificaciones.
9. Auditoría.

Criterios:
1. Cliente solo cotizaciones propias.
2. Tienda solo cotizaciones de sus servicios.
3. Aprobar cotización crea orden o deja lista la creación según sprint.
4. Rechazo requiere motivo si se define.
5. Eventos principales se registran.
```

---

## 49. Prompt módulo Órdenes

```text
Desarrolla el módulo Orders del Marketplace Logístico TOS.

Usa:
- `19_ORDER_WORKFLOW.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Crear orden desde cotización aprobada.
2. Listado por perfil.
3. Detalle de orden.
4. Timeline.
5. Estados operativos.
6. Estados financieros.
7. Cierre.
8. Cancelación con motivo.
9. Audit log de cierre/cancelación.

Criterios:
1. Cliente solo ve sus órdenes.
2. Tienda solo ve órdenes de sus servicios.
3. Admin ve global.
4. Auditor solo lectura.
5. Cierre/cancelación genera auditoría.
```

---

## 50. Prompt módulo Pagos

```text
Desarrolla el módulo Payments del Marketplace Logístico TOS.

Usa:
- `24_PAYMENTS_MASTER_PLAN.md`
- `25_COMMISSIONS_MASTER_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Crear pago.
2. Cargar comprobante.
3. Enviar a revisión.
4. Confirmar pago.
5. Rechazar pago.
6. Historial de estado.
7. Actualización financiera de orden.
8. Integración con comisión.
9. Auditoría crítica.

Criterios:
1. Confirmar pago requiere permiso.
2. Rechazar pago requiere motivo.
3. Cliente no confirma pago.
4. Confirmación actualiza orden.
5. Confirmación confirma comisión si aplica.
6. Confirmación genera audit log crítico.
```

---

## 51. Prompt módulo Comisiones

```text
Desarrolla el módulo Commissions del Marketplace Logístico TOS.

Usa:
- `25_COMMISSIONS_MASTER_PLAN.md`
- `24_PAYMENTS_MASTER_PLAN.md`
- `28_REPORTS_MASTER_PLAN.md`

Implementa:
1. Reglas de comisión.
2. Jerarquía de aplicación.
3. Cálculo decimal backend.
4. Comisión por orden.
5. Neto proveedor.
6. Estado de comisión.
7. Confirmación de comisión.
8. Reporte de comisiones.
9. Auditoría de reglas y ajustes.

Criterios:
1. Comisión no negativa.
2. Neto proveedor no negativo.
3. Cliente no ve reglas internas.
4. Tienda ve sus comisiones.
5. Cambio de regla genera auditoría.
```

---

## 52. Prompt módulo Documentos

```text
Desarrolla el módulo Documents del Marketplace Logístico TOS.

Usa:
- `26_SECURITY_MASTER_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Upload seguro.
2. Descarga protegida.
3. Validar documento.
4. Rechazar documento.
5. Motivo de rechazo.
6. Vinculación a entidad.
7. Panel de documentos por entidad.
8. Evidencias.
9. Auditoría documental.

Criterios:
1. PDF e imágenes permitidas.
2. Ejecutables bloqueados.
3. Tamaño máximo validado.
4. Descarga requiere permiso.
5. Rechazo requiere motivo.
```

---

## 53. Prompt módulo TOS

```text
Desarrolla el módulo TOS del Marketplace Logístico TOS.

Usa:
- `20_TOS_OPERATION_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Contenedores.
2. Gate-in.
3. Gate-out.
4. Movimientos.
5. Bloqueos.
6. Liberaciones.
7. Evidencias.
8. Timeline.
9. Auditoría crítica.

Criterios:
1. Gate-out falla si hay bloqueo activo.
2. Bloqueo exige motivo.
3. Liberación requiere permiso.
4. Gate-out genera auditoría.
5. Orden se actualiza con eventos TOS.
```

---

## 54. Prompt módulo Transporte

```text
Desarrolla el módulo Transport del Marketplace Logístico TOS.

Usa:
- `21_TRANSPORT_OPERATION_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Viajes.
2. Vehículos.
3. Conductores.
4. Asignación.
5. Estados del viaje.
6. Incidencias.
7. Entrega.
8. POD.
9. Timeline.
10. Auditoría.

Criterios:
1. Transportista solo ve viajes propios/asignados.
2. Incidencia exige motivo.
3. Entrega exige POD.
4. Entrega genera auditoría.
```

---

## 55. Prompt módulo Almacenamiento

```text
Desarrolla el módulo Storage del Marketplace Logístico TOS.

Usa:
- `22_STORAGE_OPERATION_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Almacenes.
2. Ubicaciones.
3. Inventario.
4. Recepción.
5. Movimiento.
6. Bloqueo.
7. Liberación.
8. Despacho.
9. Evidencias.
10. Auditoría.

Criterios:
1. Inventario bloqueado no se despacha.
2. Despacho requiere permiso.
3. Despacho genera auditoría.
4. Almacén ve inventario propio.
```

---

## 56. Prompt módulo Inspecciones

```text
Desarrolla el módulo Inspections del Marketplace Logístico TOS.

Usa:
- `23_INSPECTION_OPERATION_PLAN.md`
- `27_AUDIT_TRAIL_MASTER_PLAN.md`

Implementa:
1. Crear inspección.
2. Asignar inspector.
3. Programar inspección.
4. Checklist.
5. Evidencias.
6. Enviar a revisión.
7. Aprobar.
8. Observar.
9. Rechazar.
10. Cerrar.
11. Crear bloqueo relacionado si aplica.

Criterios:
1. Inspector solo ve asignadas.
2. Checklist obligatorio completo.
3. Evidencia obligatoria cargada.
4. Rechazo requiere motivo.
5. Rechazo genera auditoría.
```

---

## 57. Prompt módulo Reportes

```text
Desarrolla el módulo Reports del Marketplace Logístico TOS.

Usa:
- `28_REPORTS_MASTER_PLAN.md`
- `31_ACCEPTANCE_CRITERIA_MASTER.md`

Implementa:
1. Dashboards por perfil.
2. KPIs comerciales.
3. KPIs operativos.
4. KPIs financieros.
5. KPIs auditoría/seguridad.
6. Filtros por fecha.
7. Reportes por módulo.
8. Exportación CSV.
9. Audit log de exportación.

Criterios:
1. Reportes respetan permisos.
2. Reportes respetan scopes.
3. Reportes financieros requieren permiso reforzado.
4. Exportación exige motivo.
5. Exportación genera audit log.
```

---

# SECCIÓN F — PROMPTS DE QA, REVISIÓN Y CIERRE

---

## 58. Prompt validar una historia antes de cerrar

```text
Valida la historia indicada usando `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Historia a validar:
[PEGAR CÓDIGO Y DESCRIPCIÓN DE HISTORIA]

Verifica:
1. Criterios funcionales.
2. Criterios frontend.
3. Criterios backend.
4. Criterios MySQL.
5. Criterios de seguridad.
6. Criterios RBAC.
7. Criterios de scope.
8. Criterios de auditoría.
9. Criterios de notificación.
10. Criterios Swagger.
11. Criterios QA.

Entrega una tabla:
- Criterio.
- Estado: PASS/FAIL/PARTIAL.
- Evidencia.
- Acción requerida.

Decisión final:
1. ACCEPTED.
2. REJECTED.
3. ACCEPTED WITH OBSERVATIONS.
```

---

## 59. Prompt validar un sprint antes de cerrar

```text
Valida el sprint indicado usando `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Sprint a validar:
[PEGAR SPRINT]

Verifica:
1. Historias comprometidas.
2. Entregables del sprint.
3. Archivos frontend.
4. Archivos backend.
5. Tablas/migraciones.
6. Seeds.
7. Endpoints.
8. Swagger.
9. Permisos.
10. Scopes.
11. Auditoría.
12. Notificaciones.
13. QA.
14. Bugs críticos.
15. Riesgos pendientes.

Entrega:
1. Resumen del sprint.
2. Tabla de entregables PASS/FAIL.
3. Bugs abiertos.
4. Riesgos.
5. Recomendación para siguiente sprint.
6. Decisión: SPRINT ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

## 60. Prompt validar demo temprana

```text
Valida la demo temprana del Marketplace Logístico TOS usando `31_ACCEPTANCE_CRITERIA_MASTER.md` y `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

La demo temprana debe incluir:
1. Home público.
2. Búsqueda de servicios.
3. Perfil público de tienda.
4. Detalle de servicio.
5. Login/register.
6. Dashboard cliente.
7. Dashboard tienda.
8. Dashboard admin.
9. Solicitud de cotización.
10. Respuesta de cotización.
11. Aprobación de cotización.
12. Orden creada.
13. Pago con comprobante.
14. Confirmación de pago.
15. Comisión básica.
16. Auditoría crítica.
17. Notificaciones básicas.

Entrega:
1. Checklist PASS/FAIL.
2. Bugs críticos.
3. Bugs altos.
4. Riesgos.
5. Decisión de demo.
```

---

## 61. Prompt validar MVP completo

```text
Valida el MVP completo del Marketplace Logístico TOS usando `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` y `30_SPRINT_ROADMAP.md`.

El MVP completo debe incluir:
1. Demo temprana completa.
2. Documentos y evidencias.
3. TOS básico.
4. Transporte.
5. Almacenamiento.
6. Inspecciones.
7. Reportes por perfil.
8. Reportes financieros.
9. Exportaciones CSV.
10. Auditoría de exportaciones.
11. Soporte básico si está incluido.
12. Swagger completo.
13. README final.
14. QA integral.
15. Seeds demo completos.
16. Hardening básico.
17. Sin bugs críticos.

Entrega:
1. Estado general del MVP.
2. Tabla de módulos PASS/FAIL/PARTIAL.
3. Tabla de riesgos.
4. Bugs críticos.
5. Bugs altos.
6. Recomendación de release.
7. Decisión final: MVP ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

## 62. Prompt corrección de bug

```text
Actúa como desarrollador senior y debugger.

Analiza el bug siguiente en el Marketplace Logístico TOS:

Bug:
[PEGAR DESCRIPCIÓN DEL ERROR]

Contexto:
[MÓDULO, SPRINT, ARCHIVOS RELACIONADOS, PASOS PARA REPRODUCIR]

Reglas:
1. No cambies pruebas existentes salvo que estén claramente equivocadas.
2. Agrega pruebas si no existen.
3. No rompas RBAC ni scopes.
4. No elimines auditoría crítica.
5. No muevas cálculo financiero al frontend.
6. No introduzcas integraciones externas no autorizadas.
7. Si el error es por una dependencia externa o CDN, reemplaza por implementación local o componente interno.

Entrega:
1. Causa probable.
2. Archivos afectados.
3. Solución propuesta.
4. Código corregido.
5. Pruebas agregadas.
6. Validación final.
```

---

## 63. Prompt refactorización controlada

```text
Actúa como arquitecto full-stack.

Refactoriza el módulo indicado sin cambiar el comportamiento funcional aprobado.

Módulo:
[PEGAR MÓDULO]

Reglas:
1. No cambiar contratos API sin documentarlo.
2. No cambiar nombres de rutas públicas sin justificación.
3. No eliminar validaciones.
4. No eliminar guards.
5. No eliminar scopes.
6. No eliminar auditoría.
7. No romper pruebas existentes.
8. Mantener criterios de aceptación.
9. Mantener estilo visual marketplace.

Entrega:
1. Problemas detectados.
2. Refactor propuesto.
3. Archivos modificados.
4. Riesgos.
5. Pruebas de regresión.
```

---

# SECCIÓN G — PROMPTS DE ARTEFACTOS Y DOCUMENTACIÓN

---

## 64. Prompt crear README final

```text
Crea el README final del Marketplace Logístico TOS.

Debe incluir:
1. Descripción del proyecto.
2. Tecnologías.
3. Estructura del repositorio.
4. Requisitos previos.
5. Variables de entorno.
6. Instalación frontend.
7. Instalación backend.
8. Configuración MySQL.
9. Migraciones.
10. Seeds.
11. Usuarios demo.
12. Ejecutar frontend.
13. Ejecutar backend.
14. Ejecutar pruebas.
15. Swagger.
16. Flujos principales.
17. Limitaciones del MVP.
18. Exclusiones: sin Odoo real, sin pasarela real, sin BI externo.

Entrega:
1. `README.md` completo.
2. Comandos claros.
3. Advertencias de seguridad.
```

---

## 65. Prompt crear guía de seeds

```text
Crea la guía de seeds del Marketplace Logístico TOS.

Debe documentar:
1. Cómo ejecutar seeds.
2. Orden recomendado.
3. Usuarios demo.
4. Roles demo.
5. Permisos demo.
6. Catálogos demo.
7. Tiendas demo.
8. Servicios demo.
9. Cotizaciones demo.
10. Órdenes demo.
11. Pagos demo.
12. Comisiones demo.
13. Audit logs demo.
14. Reportes demo.
15. Cómo reiniciar base de datos demo.

Reglas:
1. No incluir contraseñas reales.
2. Marcar credenciales demo como solo desarrollo.
3. No mezclar datos demo con producción.
```

---

## 66. Prompt crear guion de demo

```text
Crea un guion de demo para presentar el MVP del Marketplace Logístico TOS.

La demo debe mostrar:
1. Home público.
2. Búsqueda de servicio.
3. Perfil de tienda.
4. Detalle de servicio.
5. Login cliente.
6. Solicitud de cotización.
7. Login tienda.
8. Respuesta de cotización.
9. Login cliente.
10. Aprobación de cotización.
11. Orden creada.
12. Pago con comprobante.
13. Login admin.
14. Confirmación de pago.
15. Comisión confirmada.
16. Auditoría crítica.
17. Reporte básico.
18. Notificaciones.

Entrega:
1. Script paso a paso.
2. Usuario demo usado en cada paso.
3. Resultado esperado por paso.
4. Mensaje comercial de valor.
```

---

# SECCIÓN H — PROMPTS DE VALIDACIÓN CRUZADA

---

## 67. Prompt validar contra checklist de artefactos

```text
Valida el estado actual del proyecto contra `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.

Revisa:
1. Estructura raíz.
2. Documentos.
3. Frontend.
4. Backend.
5. Database.
6. Seeds.
7. Seguridad.
8. Auditoría.
9. Reportes.
10. QA.
11. Swagger.
12. README.

Entrega:
1. Artefactos completos.
2. Artefactos incompletos.
3. Artefactos faltantes.
4. Riesgos.
5. Prioridad de corrección.
6. Siguiente acción recomendada.
```

---

## 68. Prompt validar contra criterios de aceptación

```text
Valida el estado actual del proyecto contra `31_ACCEPTANCE_CRITERIA_MASTER.md`.

Revisa:
1. Criterios generales del MVP.
2. Criterios por épica.
3. Criterios por sprint.
4. Criterios frontend.
5. Criterios backend.
6. Criterios MySQL.
7. Criterios seguridad.
8. Criterios RBAC/scopes.
9. Criterios auditoría.
10. Criterios reportes.
11. Criterios QA.

Entrega:
1. Tabla PASS/FAIL/PARTIAL.
2. Incumplimientos críticos.
3. Incumplimientos altos.
4. Acciones correctivas.
5. Decisión final.
```

---

## 69. Prompt validar contra roadmap

```text
Valida el avance actual contra `30_SPRINT_ROADMAP.md`.

Identifica:
1. Sprint actual.
2. Sprints completados.
3. Sprints incompletos.
4. Dependencias rotas.
5. Historias pendientes.
6. Artefactos faltantes.
7. Riesgos para el siguiente sprint.
8. Recomendación de avance.

Entrega:
1. Estado del roadmap.
2. Tabla por sprint.
3. Próximo sprint recomendado.
4. Bloqueos.
```

---

# SECCIÓN I — PROMPTS DE SEGURIDAD ESPECÍFICOS

---

## 70. Prompt prueba de permisos por perfil

```text
Ejecuta una validación de permisos por perfil para el Marketplace Logístico TOS.

Perfiles:
1. Cliente final.
2. Tienda logística.
3. Superadministrador.
4. Operador interno.
5. Auditor.
6. Transportista.
7. Inspector.
8. Soporte.

Verifica para cada perfil:
1. Rutas permitidas.
2. Rutas prohibidas.
3. Endpoints permitidos.
4. Endpoints prohibidos.
5. Datos visibles.
6. Datos no visibles.
7. Acciones permitidas.
8. Acciones prohibidas.

Entrega:
1. Matriz de permisos PASS/FAIL.
2. Violaciones de seguridad.
3. Acciones correctivas.
```

---

## 71. Prompt prueba de scopes

```text
Ejecuta una validación de scopes de datos.

Casos obligatorios:
1. Cliente A no ve órdenes de Cliente B.
2. Tienda A no ve cotizaciones de Tienda B.
3. Tienda A no ve pagos de Tienda B.
4. Transportista A no ve viajes de Transportista B.
5. Inspector A no ve inspecciones de Inspector B.
6. Auditor ve global pero no modifica.
7. Admin ve global.
8. Soporte ve solo tickets autorizados.

Entrega:
1. Caso.
2. Resultado esperado.
3. Resultado observado.
4. Estado PASS/FAIL.
5. Corrección requerida.
```

---

# SECCIÓN J — PROMPTS DE RELEASE

---

## 72. Prompt preparar release MVP

```text
Prepara el release MVP del Marketplace Logístico TOS.

Valida:
1. Demo temprana completa.
2. MVP completo según alcance.
3. Seguridad.
4. RBAC.
5. Scopes.
6. Pagos.
7. Comisiones.
8. Auditoría.
9. Reportes.
10. Documentos.
11. Módulos operativos.
12. Swagger.
13. README.
14. Seeds.
15. QA.
16. Bugs críticos.

Entrega:
1. Release checklist.
2. Módulos incluidos.
3. Módulos excluidos.
4. Limitaciones conocidas.
5. Bugs abiertos.
6. Riesgos.
7. Recomendación final de release.
```

---

## 73. Prompt generar release notes

```text
Genera las release notes del MVP del Marketplace Logístico TOS.

Incluye:
1. Nombre de release.
2. Fecha.
3. Resumen ejecutivo.
4. Funcionalidades incluidas.
5. Módulos incluidos.
6. Funcionalidades excluidas del MVP.
7. Mejoras de seguridad.
8. Reportes incluidos.
9. Usuarios demo.
10. Limitaciones conocidas.
11. Riesgos pendientes.
12. Próximos pasos.

Reglas:
1. No afirmar integraciones externas reales si no existen.
2. Indicar que Odoo es referencia conceptual, no integración.
3. Indicar que pasarela real queda para fase futura.
```

---

# SECCIÓN K — PROMPTS CORTOS REUTILIZABLES

---

## 74. Prompt corto para crear módulo

```text
Crea el módulo [NOMBRE_MODULO] siguiendo la arquitectura Nest.js + React.js + MySQL del Marketplace Logístico TOS.

Incluye:
1. Tablas MySQL.
2. Migraciones.
3. Backend Nest.js: Module, Controller, Service, DTOs.
4. Frontend React.js: páginas, componentes, hooks, services API.
5. Permisos RBAC.
6. Scopes.
7. Auditoría si aplica.
8. Notificaciones si aplica.
9. Swagger.
10. Pruebas.

Valida contra:
- `31_ACCEPTANCE_CRITERIA_MASTER.md`
- `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`
```

---

## 75. Prompt corto para crear endpoint

```text
Crea el endpoint [MÉTODO + RUTA] del módulo [MÓDULO].

Debe incluir:
1. Controller.
2. Service.
3. DTO.
4. Validación.
5. Auth guard.
6. Permission guard.
7. Scope guard si aplica.
8. Auditoría si es crítico.
9. Swagger.
10. Pruebas de 200/400/401/403.
```

---

## 76. Prompt corto para crear pantalla React

```text
Crea la pantalla React [NOMBRE_PANTALLA] para el módulo [MÓDULO].

Debe incluir:
1. Layout correcto por perfil.
2. Consumo de API.
3. Loading state.
4. Empty state.
5. Error state.
6. Forbidden state.
7. PermissionGate para acciones.
8. Diseño responsive.
9. Estilo marketplace tipo Yelp cuando aplique.
10. Validación de formularios si aplica.
```

---

## 77. Prompt corto para crear tabla MySQL

```text
Crea la tabla MySQL [NOMBRE_TABLA] para el módulo [MÓDULO].

Debe incluir:
1. Primary key.
2. UUID o código público si aplica.
3. Campos de negocio.
4. Foreign keys.
5. Índices.
6. created_at.
7. updated_at.
8. deleted_at si aplica.
9. Tipos DECIMAL para montos.
10. Restricciones de integridad.
11. Seed demo si aplica.
```

---

## 78. Prompt corto para revisar seguridad

```text
Revisa la seguridad del módulo [MÓDULO].

Verifica:
1. Auth.
2. Permisos.
3. Scopes.
4. Validación DTO.
5. Errores seguros.
6. Auditoría.
7. Archivos si aplica.
8. Campos sensibles.
9. Pruebas 401/403.
10. Riesgos.
```

---

## 79. Prompt corto para generar pruebas

```text
Genera pruebas para el módulo [MÓDULO].

Incluye:
1. Caso exitoso.
2. DTO inválido.
3. Sin token.
4. Sin permiso.
5. Fuera de scope.
6. Estado inválido.
7. Auditoría si aplica.
8. Notificación si aplica.
9. Frontend states si aplica.
```

---

# SECCIÓN L — CHECKLIST DE USO DEL DOCUMENTO

---

## 80. Checklist de uso

- [ ] Guardar este documento como `32_ANTIGRAVITY_PROMPTS_MASTER.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo antes de iniciar Sprint 01.
- [ ] Usarlo junto a `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Usarlo junto a `30_SPRINT_ROADMAP.md`.
- [ ] Usarlo junto a `31_ACCEPTANCE_CRITERIA_MASTER.md`.
- [ ] Usarlo junto a `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Usar prompts por sprint para desarrollo secuencial.
- [ ] Usar prompts por módulo para desarrollo específico.
- [ ] Usar prompts QA antes de cerrar historias.
- [ ] Usar prompts de validación antes de cerrar sprint.
- [ ] Usar prompts de release antes de demo final.
- [ ] Confirmar que no se integró Odoo, pasarela real ni BI externo en MVP.

---

## 81. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de validación con roadmap | Sí |
| Listo para usar en Antigravity | Sí, como biblioteca maestra inicial de prompts |

---

# Fin del documento

