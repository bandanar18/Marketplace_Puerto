# 31_ACCEPTANCE_CRITERIA_MASTER.md

# Documento Maestro de Criterios de Aceptación
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `31_ACCEPTANCE_CRITERIA_MASTER.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro de criterios de aceptación, validación funcional, técnica, seguridad, QA y cierre de historias/sprints |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | MVP funcional + base escalable del marketplace logístico |
| Documento base principal | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md` |
| Estilo visual esperado | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, badges, navegación clara y diseño responsive |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md`, `16_SERVICES_MASTER_CATALOG.md`, `17_INITIAL_SEEDS_PLAN.md`, `18_QUOTATION_WORKFLOW.md`, `19_ORDER_WORKFLOW.md`, `20_TOS_OPERATION_PLAN.md`, `21_TRANSPORT_OPERATION_PLAN.md`, `22_STORAGE_OPERATION_PLAN.md`, `23_INSPECTION_OPERATION_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md` |

---

## 2. Propósito del documento

Este documento define los **criterios de aceptación maestros** que deben usarse para validar cada épica, historia, tarea, módulo, sprint y release del Marketplace Logístico TOS.

Su propósito es servir como guía objetiva para que Antigravity pueda determinar cuándo una funcionalidad está realmente terminada, probada y lista para avanzar al siguiente sprint.

Este documento permite validar:

1. Requisitos funcionales.
2. Requisitos técnicos.
3. Requisitos de frontend React.js.
4. Requisitos de backend Nest.js.
5. Requisitos de base de datos MySQL.
6. Requisitos de seguridad.
7. Requisitos de RBAC y scopes.
8. Requisitos de auditoría.
9. Requisitos de reportes.
10. Requisitos de documentos y evidencias.
11. Requisitos de pagos y comisiones.
12. Requisitos operativos TOS, transporte, almacenamiento e inspecciones.
13. Requisitos de QA.
14. Requisitos de documentación.
15. Requisitos de demo MVP.

---

## 3. Objetivo general

Establecer una matriz maestra de criterios de aceptación para garantizar que cada módulo del marketplace logístico sea entregado con calidad funcional, técnica, visual, segura, auditable, documentada y alineada al alcance MVP definido en los documentos maestros del proyecto.

---

## 4. Objetivos específicos

1. Definir criterios generales de aceptación del proyecto.
2. Definir criterios por épica.
3. Definir criterios por módulo funcional.
4. Definir criterios por perfil de usuario.
5. Definir criterios frontend.
6. Definir criterios backend.
7. Definir criterios de base de datos.
8. Definir criterios de seguridad.
9. Definir criterios de RBAC y scopes.
10. Definir criterios de auditoría.
11. Definir criterios de reportes.
12. Definir criterios de documentos y evidencias.
13. Definir criterios de pagos y comisiones.
14. Definir criterios operativos TOS, transporte, almacenamiento e inspecciones.
15. Definir criterios de QA y pruebas.
16. Definir criterios para cierre de sprint.
17. Definir criterios para demo temprana.
18. Definir criterios para MVP completo.

---

## 5. Principios rectores de aceptación

Antigravity debe aplicar los siguientes principios:

1. Una funcionalidad no está terminada si solo existe frontend sin backend real o mock controlado documentado.
2. Una funcionalidad no está terminada si el backend no valida permisos.
3. Una funcionalidad no está terminada si no valida scope de datos.
4. Una funcionalidad crítica no está terminada si no genera auditoría.
5. Una acción financiera no está terminada si el cálculo se realiza solo en frontend.
6. Una acción operativa crítica no está terminada si no valida estado y transición.
7. Una carga documental no está terminada si no valida archivo, permiso y relación con entidad.
8. Un reporte no está terminado si no respeta permisos y scopes.
9. Una pantalla no está terminada si no tiene estados loading, empty, error y forbidden cuando apliquen.
10. Un endpoint no está terminado si no está documentado en Swagger o contrato API equivalente.
11. Una historia no está terminada si no tiene pruebas mínimas.
12. Un sprint no está terminado si deja bugs críticos abiertos.
13. Una funcionalidad no debe depender de Odoo ni de integraciones externas reales en el MVP.
14. El diseño visual debe respetar el sistema tipo marketplace Yelp-like.
15. Los datos maestros deben venir de catálogos cuando corresponda.

---

## 6. Definición de listo para desarrollar una historia

Una historia está lista para desarrollo cuando cumple:

| Criterio | Obligatorio |
|---|---|
| Tiene código de historia | Sí |
| Tiene perfil de usuario definido | Sí |
| Tiene objetivo funcional claro | Sí |
| Tiene módulo asociado | Sí |
| Tiene prioridad | Sí |
| Tiene criterios de aceptación iniciales | Sí |
| Tiene dependencias identificadas | Sí |
| Tiene permisos requeridos definidos | Sí, si aplica |
| Tiene scope requerido definido | Sí, si aplica |
| Tiene tablas MySQL identificadas | Sí, si aplica |
| Tiene endpoints Nest.js identificados | Sí, si aplica |
| Tiene componentes React.js identificados | Sí, si aplica |
| Tiene eventos de auditoría definidos | Sí, si es crítica |
| Tiene datos demo o seeds necesarios identificados | Sí, si aplica |

---

## 7. Definición de terminado de una historia

Una historia se considera terminada cuando cumple:

| Criterio | Obligatorio |
|---|---|
| Funcionalidad implementada según historia | Sí |
| Frontend conectado al backend o mock controlado documentado | Sí |
| Backend implementado con validaciones | Sí, si aplica |
| Base de datos actualizada | Sí, si aplica |
| Permisos RBAC aplicados | Sí |
| Scope de datos aplicado | Sí |
| Errores controlados | Sí |
| Estados visuales loading, empty, error y forbidden | Sí, si aplica |
| Auditoría implementada | Sí, si es acción crítica |
| Notificaciones implementadas | Sí, si aplica |
| Pruebas funcionales ejecutadas | Sí |
| Pruebas negativas ejecutadas | Sí |
| Swagger actualizado | Sí, si hay endpoint |
| No rompe historias anteriores | Sí |
| Seeds actualizados | Sí, si aplica |
| No usa integración externa real no autorizada | Sí |

---

## 8. Definición de terminado de un sprint

Un sprint se considera terminado cuando:

1. Todas las historias P0 comprometidas están completas.
2. Todas las historias P1 críticas del sprint están completas o justificadas como pendientes.
3. No existen bugs críticos abiertos.
4. Las migraciones de base de datos funcionan.
5. Los seeds cargan sin errores.
6. Los endpoints nuevos están protegidos.
7. Los endpoints nuevos están documentados.
8. Las pantallas nuevas cargan correctamente.
9. Los permisos por perfil fueron probados.
10. Los scopes fueron probados.
11. Las acciones críticas generan auditoría.
12. El flujo principal del sprint tiene prueba funcional.
13. El README o notas técnicas se actualizaron si aplica.
14. La demo del sprint puede ejecutarse.
15. El siguiente sprint no queda bloqueado por entregables incompletos.

---

## 9. Formato recomendado de criterios de aceptación por historia

Cada historia debe documentar criterios en formato claro.

### 9.1 Formato simple

```txt
Dado que [contexto]
Cuando [acción]
Entonces [resultado esperado]
```

### 9.2 Ejemplo

```txt
Dado que un cliente autenticado está viendo un servicio publicado,
Cuando solicita una cotización,
Entonces el sistema crea una cotización en estado PENDING y notifica a la tienda propietaria del servicio.
```

### 9.3 Formato de tabla

| Dado | Cuando | Entonces |
|---|---|---|
| Cliente autenticado | Solicita cotización | Se crea cotización pendiente |
| Tienda dueña | Responde cotización | Estado cambia a RESPONDED |
| Cliente dueño | Aprueba cotización | Se crea orden |

---

## 10. Criterios globales de aceptación del MVP

El MVP se considera aceptado cuando:

1. Existe autenticación funcional.
2. Existen roles y permisos.
3. Existen scopes por perfil.
4. Cliente solo ve datos propios.
5. Tienda solo ve datos de su tienda.
6. Superadministrador ve datos globales.
7. Auditor ve modo solo lectura.
8. Existe home público tipo marketplace.
9. Existen tiendas logísticas aprobables.
10. Existen perfiles públicos de tienda.
11. Existen servicios publicados.
12. Existe búsqueda de servicios.
13. Existe solicitud de cotización.
14. Existe respuesta de cotización por tienda.
15. Existe aprobación de cotización por cliente.
16. Existe creación de orden.
17. Existe detalle de orden y timeline.
18. Existe pago manual con comprobante.
19. Existe confirmación y rechazo de pago.
20. Existe cálculo básico de comisión.
21. Existe auditoría crítica.
22. Existen notificaciones internas básicas.
23. Existen documentos y evidencias básicas.
24. Existen dashboards básicos por perfil.
25. Existen reportes básicos.
26. Existen pruebas mínimas de flujo completo.
27. Swagger documenta endpoints principales.
28. README permite ejecutar el proyecto.
29. No hay bugs críticos abiertos.
30. No existe integración real con Odoo, pasarela externa o BI externo en MVP.

---

# CRITERIOS DE ACEPTACIÓN POR ÉPICA

---

## 11. EPIC-001 — Arquitectura inicial del proyecto

### Criterios funcionales

1. Existe estructura `/frontend`, `/backend`, `/database` y `/docs`.
2. El frontend React.js levanta localmente.
3. El backend Nest.js levanta localmente.
4. Backend se conecta a MySQL.
5. Existe endpoint de health check.
6. Existe README inicial.
7. Existe `.env.example` sin secretos reales.

### Criterios técnicos

1. El backend está organizado por módulos.
2. El frontend está organizado por páginas, componentes, hooks y servicios.
3. Las variables de entorno se cargan desde configuración centralizada.
4. La base de datos tiene carpeta de migraciones/seeds.
5. No hay secretos en código fuente.

### Criterios de prueba

1. Ejecutar frontend sin errores.
2. Ejecutar backend sin errores.
3. Probar health endpoint.
4. Probar conexión MySQL.

---

## 12. EPIC-002 — Diseño visual marketplace tipo Yelp

### Criterios funcionales

1. Existe home público.
2. Existe header público.
3. Existe footer público.
4. Existe hero con buscador.
5. Existen cards de tiendas.
6. Existen cards de servicios.
7. Existen filtros visuales.
8. Existe diseño responsive.

### Criterios visuales

1. El diseño usa tarjetas limpias.
2. El diseño usa badges de categoría y estado.
3. El diseño usa jerarquía visual clara.
4. El diseño facilita búsqueda y exploración.
5. El diseño es coherente con marketplace tipo Yelp.
6. El diseño no está saturado.

### Criterios de prueba

1. Home carga en desktop.
2. Home carga en mobile.
3. Cards se ven correctamente.
4. Filtros no rompen layout.
5. Navegación pública funciona.

---

## 13. EPIC-003 — Seguridad, autenticación, roles y permisos

### Criterios funcionales

1. Usuario puede registrarse.
2. Usuario puede iniciar sesión.
3. Usuario puede cerrar sesión.
4. Existe endpoint `/auth/me`.
5. Existen roles.
6. Existen permisos.
7. Existen scopes.
8. Rutas privadas requieren autenticación.
9. Endpoints privados requieren token.
10. Endpoints críticos requieren permiso.

### Criterios de seguridad

1. Contraseñas se almacenan con hash seguro.
2. Tokens expiran.
3. Refresh tokens pueden revocarse.
4. Usuario suspendido no puede operar.
5. Tienda suspendida no puede operar.
6. Errores no exponen secretos.
7. Endpoints sin token devuelven 401.
8. Endpoints sin permiso devuelven 403.
9. Violación de scope devuelve 403.

### Criterios de prueba

1. Login correcto.
2. Login incorrecto.
3. Token inválido.
4. Token expirado.
5. Cliente intentando acceder a admin.
6. Tienda intentando ver datos de otra tienda.
7. Auditor intentando modificar datos.

---

## 14. EPIC-004 — Catálogos maestros y seeds iniciales

### Criterios funcionales

1. Existen catálogos maestros.
2. Existen ítems de catálogo.
3. Los ítems tienen código, nombre, estado y tipo.
4. Los módulos consumen catálogos activos.
5. Existen seeds de perfiles.
6. Existen seeds de roles/permisos.
7. Existen seeds de categorías logísticas.
8. Existen seeds de estados operativos/financieros/aduaneros.
9. Existen seeds de puertos y terminales demo.

### Criterios técnicos

1. Seeds pueden ejecutarse desde cero.
2. Seeds son idempotentes o controlados.
3. Los códigos son únicos.
4. No hay duplicados críticos.
5. Las migraciones crean tablas necesarias.

### Criterios de prueba

1. Ejecutar seeds en base vacía.
2. Consultar catálogo activo.
3. Validar que módulos usan catálogo.
4. Probar estado inactivo no disponible.

---

## 15. EPIC-005 — Usuarios, perfiles y navegación

### Criterios funcionales

1. Cliente tiene dashboard propio.
2. Tienda tiene dashboard propio.
3. Superadministrador tiene panel global.
4. Operador tiene panel operativo.
5. Auditor tiene panel solo lectura.
6. Transportista, inspector y almacén tienen navegación según perfil si están activos.
7. Menús se ajustan por perfil.
8. Acciones se ocultan si no hay permiso.

### Criterios de prueba

1. Login como cliente muestra menú cliente.
2. Login como tienda muestra menú tienda.
3. Login como admin muestra menú global.
4. Login como auditor no permite editar.
5. Rutas no autorizadas muestran 403.

---

## 16. EPIC-006 — Tiendas logísticas y actores del ecosistema

### Criterios funcionales

1. Usuario puede solicitar creación de tienda.
2. Tienda tiene tipo de actor logístico.
3. Tienda inicia pendiente.
4. Admin puede aprobar tienda.
5. Admin puede rechazar tienda con motivo.
6. Admin puede suspender tienda.
7. Tienda aprobada puede publicar servicios.
8. Tienda suspendida no puede publicar ni responder cotizaciones.
9. Perfil público de tienda muestra datos principales.

### Criterios de seguridad

1. Usuario solo administra su tienda asociada.
2. Admin tiene acceso global.
3. Aprobación y suspensión generan auditoría.
4. Tienda no ve información privada de otras tiendas.

### Criterios de prueba

1. Crear tienda pendiente.
2. Aprobar tienda.
3. Rechazar tienda.
4. Suspender tienda.
5. Validar perfil público.
6. Validar scope de tienda.

---

## 17. EPIC-007 — Servicios y fichas marketplace

### Criterios funcionales

1. Tienda aprobada puede crear servicio.
2. Servicio tiene código, nombre, categoría y subcategoría.
3. Servicio tiene descripción y alcance.
4. Servicio tiene tarifa, unidad y SLA.
5. Servicio puede tener documentos requeridos.
6. Servicio puede estar en borrador, publicado o inactivo.
7. Servicio publicado aparece en directorio.
8. Servicio inactivo no aparece públicamente.
9. Cliente puede abrir detalle de servicio.
10. Cliente puede solicitar cotización desde el servicio.

### Criterios de seguridad

1. Solo tienda dueña edita servicio.
2. Admin puede moderar.
3. Publicar/despublicar genera auditoría.

### Criterios de prueba

1. Crear servicio válido.
2. Intentar crear servicio con tienda no aprobada.
3. Publicar servicio.
4. Despublicar servicio.
5. Buscar servicio publicado.

---

## 18. EPIC-008 — Home, búsqueda, directorio y filtros

### Criterios funcionales

1. Usuario puede buscar servicios por texto.
2. Usuario puede filtrar por categoría.
3. Usuario puede filtrar por tipo de tienda.
4. Usuario puede filtrar por puerto/terminal si aplica.
5. Resultados muestran servicios publicados.
6. Resultados muestran proveedor.
7. Resultados enlazan al detalle.
8. Búsqueda tiene estado vacío.
9. Búsqueda tiene estado de carga.
10. Búsqueda tiene paginación o límite.

### Criterios de prueba

1. Buscar por palabra clave existente.
2. Buscar sin resultados.
3. Combinar filtros.
4. Ver detalle desde resultado.
5. Validar que servicio inactivo no aparece.

---

## 19. EPIC-009 — Cotizaciones

### Criterios funcionales

1. Cliente solicita cotización desde servicio publicado.
2. Cotización se crea en estado pendiente.
3. Tienda dueña ve cotización recibida.
4. Otra tienda no ve la cotización.
5. Tienda responde monto, condiciones y tiempo estimado.
6. Cliente ve respuesta.
7. Cliente puede aprobar cotización.
8. Cliente puede rechazar cotización.
9. Cotización aprobada crea orden.
10. Cotización rechazada no crea orden.

### Criterios de seguridad

1. Cliente solo ve cotizaciones propias.
2. Tienda solo ve cotizaciones de sus servicios.
3. Responder cotización requiere permiso.
4. Aprobar cotización requiere cliente dueño.

### Criterios de auditoría

1. Respuesta de cotización genera evento.
2. Aprobación genera evento.
3. Conversión a orden genera evento.

### Criterios de prueba

1. Flujo solicitud → respuesta → aprobación.
2. Flujo solicitud → respuesta → rechazo.
3. Tienda no dueña recibe 403.
4. Cliente no dueño recibe 403.

---

## 20. EPIC-010 — Órdenes

### Criterios funcionales

1. Orden se crea desde cotización aprobada.
2. Orden tiene código único.
3. Orden tiene cliente, tienda y servicio.
4. Orden tiene estado operativo.
5. Orden tiene estado financiero inicial.
6. Orden tiene timeline.
7. Cliente ve sus órdenes.
8. Tienda ve órdenes de sus servicios.
9. Admin ve todas las órdenes.
10. Auditor ve solo lectura.
11. Orden puede cerrarse si cumple estado válido.
12. Orden puede cancelarse con motivo.

### Criterios de seguridad

1. Cliente no ve órdenes de otros clientes.
2. Tienda no ve órdenes de otra tienda.
3. Cerrar/cancelar requiere permiso.
4. Cancelar exige motivo.

### Criterios de auditoría

1. Orden creada genera audit log o timeline.
2. Cambio de estado genera audit log.
3. Cierre genera audit log crítico.
4. Cancelación genera audit log crítico.

### Criterios de prueba

1. Crear orden desde cotización.
2. Ver detalle por cliente.
3. Ver detalle por tienda.
4. Probar acceso no autorizado.
5. Cerrar orden.
6. Cancelar orden con motivo.

---

## 21. EPIC-011 — Documentos y evidencias

### Criterios funcionales

1. Usuario autorizado puede cargar documento.
2. Documento se vincula a entidad.
3. Documento tiene tipo, estado y archivo.
4. Evidencia se vincula a entidad o evento.
5. Operador autorizado puede validar documento.
6. Operador autorizado puede rechazar documento con motivo.
7. Usuario ve documentos según scope.
8. Documento rechazado muestra motivo.

### Criterios de seguridad

1. Validar tipo de archivo.
2. Validar tamaño de archivo.
3. Bloquear extensiones peligrosas.
4. Descargar archivo requiere autorización.
5. No exponer ruta física insegura.
6. Documentos críticos no se eliminan físicamente desde UI.

### Criterios de auditoría

1. Carga de documento crítico genera auditoría.
2. Validación genera auditoría.
3. Rechazo genera auditoría.
4. Descarga sensible puede auditarse.

### Criterios de prueba

1. Subir PDF válido.
2. Subir imagen válida.
3. Rechazar `.exe`.
4. Rechazar archivo excedido.
5. Validar documento.
6. Rechazar documento con motivo.
7. Probar descarga no autorizada.

---

## 22. EPIC-012 — TOS operación portuaria

### Criterios funcionales

1. Operador puede registrar contenedor.
2. Contenedor se asocia a orden.
3. Contenedor tiene estado TOS.
4. Operador puede registrar gate-in.
5. Operador puede registrar gate-out.
6. Gate-out no permite bloqueos activos.
7. Operador puede crear bloqueo con motivo.
8. Operador puede liberar bloqueo con permiso.
9. Movimientos actualizan ubicación.
10. Eventos aparecen en timeline.

### Criterios de seguridad

1. Operador requiere permiso TOS.
2. Tienda solo ve operaciones propias o asignadas.
3. Gate-out requiere permiso crítico.

### Criterios de auditoría

1. Gate-out genera audit log crítico.
2. Bloqueo genera audit log crítico.
3. Liberación genera audit log crítico.
4. Corrección excepcional genera audit log crítico.

### Criterios de prueba

1. Registrar contenedor.
2. Registrar gate-in.
3. Crear bloqueo.
4. Intentar gate-out con bloqueo activo.
5. Liberar bloqueo.
6. Registrar gate-out.

---

## 23. EPIC-013 — Transporte

### Criterios funcionales

1. Transportista u operador puede crear viaje.
2. Viaje se asocia a orden.
3. Viaje tiene origen y destino.
4. Viaje puede asignarse a conductor y vehículo.
5. Estados siguen transición válida.
6. Incidencia exige motivo.
7. Entrega requiere evidencia POD.
8. Cliente/tienda pueden ver avance según scope.
9. Timeline de orden se actualiza.

### Criterios de seguridad

1. Transportista ve viajes propios/asignados.
2. Otra tienda no ve viajes ajenos.
3. Actualizar viaje requiere permiso.

### Criterios de auditoría

1. Incidencia genera auditoría.
2. Entrega genera auditoría.
3. Cancelación genera auditoría.

### Criterios de prueba

1. Crear viaje.
2. Asignar conductor/vehículo.
3. Cambiar a programado.
4. Cambiar a en tránsito.
5. Reportar incidencia.
6. Completar entrega con POD.
7. Intentar entregar sin POD.

---

## 24. EPIC-014 — Almacenamiento

### Criterios funcionales

1. Almacén puede recibir inventario.
2. Inventario se asocia a orden.
3. Inventario se asocia a almacén y ubicación.
4. Inventario puede moverse internamente.
5. Inventario puede bloquearse con motivo.
6. Inventario puede liberarse con permiso.
7. Inventario bloqueado no puede despacharse.
8. Despacho cambia estado.
9. Despacho puede requerir evidencia.

### Criterios de seguridad

1. Almacén solo ve inventario propio.
2. Despacho requiere permiso.
3. Liberación de bloqueo requiere permiso.

### Criterios de auditoría

1. Recepción genera auditoría o timeline.
2. Bloqueo genera auditoría crítica.
3. Liberación genera auditoría crítica.
4. Despacho genera auditoría crítica.

### Criterios de prueba

1. Recibir inventario.
2. Ubicar inventario.
3. Mover inventario.
4. Bloquear inventario.
5. Intentar despachar bloqueado.
6. Liberar inventario.
7. Despachar inventario.

---

## 25. EPIC-015 — Inspecciones

### Criterios funcionales

1. Operador puede crear inspección.
2. Inspección se asocia a orden o entidad operativa.
3. Inspección tiene tipo.
4. Inspección se asigna a inspector.
5. Inspector solo ve inspecciones asignadas.
6. Inspector ejecuta checklist.
7. Checklist obligatorio debe completarse.
8. Evidencias obligatorias deben cargarse.
9. Inspector envía resultado a revisión.
10. Operador aprueba, observa o rechaza.
11. Rechazo exige motivo.
12. Rechazo puede crear bloqueo relacionado.

### Criterios de auditoría

1. Asignación genera evento.
2. Aprobación genera auditoría.
3. Rechazo genera auditoría crítica.
4. Bloqueo por inspección genera auditoría crítica.

### Criterios de prueba

1. Crear inspección.
2. Asignar inspector.
3. Completar checklist.
4. Intentar enviar sin evidencia obligatoria.
5. Aprobar inspección.
6. Rechazar con motivo.
7. Validar bloqueo relacionado.

---

## 26. EPIC-016 — Pagos

### Criterios funcionales

1. Cliente puede registrar pago de su orden.
2. Pago tiene monto, moneda, método y estado.
3. Cliente puede cargar comprobante.
4. Pago queda enviado o en revisión.
5. Admin/operador autorizado puede confirmar.
6. Admin/operador autorizado puede rechazar.
7. Rechazo exige motivo.
8. Confirmación actualiza estado financiero de orden.
9. Pago confirmado no puede volver a pendiente sin proceso controlado.
10. Pago rechazado puede reenviarse si se permite.

### Criterios de seguridad

1. Cliente solo ve sus pagos.
2. Tienda solo ve pagos de sus órdenes.
3. Confirmar pago requiere permiso crítico.
4. Rechazar pago requiere permiso.

### Criterios de auditoría

1. Pago creado genera auditoría o historial.
2. Comprobante cargado genera auditoría.
3. Confirmación genera audit log crítico.
4. Rechazo genera audit log.

### Criterios de prueba

1. Registrar pago válido.
2. Cargar comprobante válido.
3. Confirmar pago.
4. Rechazar pago sin motivo debe fallar.
5. Rechazar con motivo debe funcionar.
6. Cliente no puede confirmar pago.
7. Confirmación actualiza orden.

---

## 27. EPIC-017 — Comisiones

### Criterios funcionales

1. Admin puede crear regla de comisión.
2. Regla tiene tipo: porcentaje, monto fijo, mixta o cero según MVP.
3. Regla tiene prioridad.
4. Regla tiene estado.
5. Backend selecciona regla aplicable.
6. Backend calcula comisión.
7. Comisión no puede ser negativa.
8. Neto proveedor no puede ser negativo.
9. Comisión se asocia a orden.
10. Comisión se confirma cuando el pago se confirma.
11. Tienda ve comisión y neto proveedor de sus órdenes.
12. Cliente no ve reglas internas de comisión.

### Criterios de auditoría

1. Crear regla genera auditoría.
2. Editar regla genera auditoría crítica.
3. Confirmar comisión genera auditoría.
4. Ajustar comisión genera auditoría crítica.

### Criterios de prueba

1. Crear regla porcentaje.
2. Crear regla fija.
3. Calcular comisión.
4. Probar neto proveedor.
5. Probar regla de prioridad.
6. Probar cambio de regla no altera comisión histórica confirmada.

---

## 28. EPIC-018 — Auditoría y trazabilidad

### Criterios funcionales

1. Existe tabla `audit_logs`.
2. Acciones críticas generan audit log.
3. Logs incluyen actor, acción, entidad, fecha y severidad.
4. Logs incluyen old_values y new_values cuando aplica.
5. Auditor puede consultar logs.
6. Admin puede consultar logs globales.
7. Operador consulta logs autorizados.
8. Cliente no ve auditoría interna.
9. Tienda no ve auditoría de otra tienda.
10. Exportar auditoría requiere permiso y motivo.

### Criterios de seguridad

1. Logs no guardan contraseñas.
2. Logs no guardan tokens.
3. Logs no guardan secretos.
4. Logs no se editan desde UI.
5. Logs no se eliminan físicamente desde UI.

### Criterios de prueba

1. Confirmar pago genera log.
2. Cambiar rol genera log.
3. Gate-out genera log.
4. Despacho genera log.
5. Ajustar comisión genera log.
6. Consultar logs por entidad.
7. Verificar sanitización de campos sensibles.

---

## 29. EPIC-019 — Reportes y dashboards

### Criterios funcionales

1. Cliente ve dashboard propio.
2. Tienda ve dashboard de tienda.
3. Admin ve dashboard global.
4. Auditor ve dashboard de auditoría/seguridad solo lectura.
5. Existen KPIs comerciales.
6. Existen KPIs operativos.
7. Existen KPIs financieros.
8. Existen KPIs TOS, transporte, almacenamiento e inspecciones si módulos activos.
9. Filtros por fecha funcionan.
10. Exportación requiere permiso y motivo.
11. Exportación genera audit log.

### Criterios de seguridad

1. Reportes respetan permisos.
2. Reportes respetan scopes.
3. Reportes financieros requieren permiso reforzado.
4. Reportes de auditoría requieren permiso de auditoría.

### Criterios de prueba

1. Cliente no ve datos globales.
2. Tienda no ve datos de otra tienda.
3. Admin ve global.
4. Auditor no modifica.
5. Exportación sin motivo falla.
6. Exportación con permiso genera archivo protegido.

---

## 30. EPIC-020 — Notificaciones

### Criterios funcionales

1. Sistema crea notificaciones por eventos relevantes.
2. Usuario ve notificaciones propias.
3. Notificación tiene estado leído/no leído.
4. Notificación tiene ruta relacionada.
5. Usuario puede marcar como leída.
6. Notificaciones no exponen datos sensibles indebidos.

### Eventos mínimos aceptados

1. Cotización recibida por tienda.
2. Cotización respondida para cliente.
3. Cotización aprobada.
4. Orden creada.
5. Pago enviado.
6. Pago confirmado.
7. Pago rechazado.
8. Comisión confirmada para tienda/admin.
9. Inspección asignada si módulo activo.
10. Ticket de soporte actualizado si módulo activo.

### Criterios de prueba

1. Crear cotización genera notificación.
2. Responder cotización genera notificación.
3. Confirmar pago genera notificación.
4. Usuario no ve notificaciones de otro usuario.
5. Marcar como leída funciona.

---

## 31. EPIC-021 — Soporte e incidencias

### Criterios funcionales

1. Usuario puede crear ticket.
2. Ticket tiene categoría o módulo relacionado.
3. Ticket tiene prioridad.
4. Ticket tiene estado.
5. Soporte puede responder.
6. Usuario puede ver sus tickets.
7. Soporte ve tickets autorizados.
8. Ticket puede vincularse a orden, pago o documento.

### Criterios de seguridad

1. Usuario no ve tickets de otro usuario.
2. Soporte no tiene acceso global por defecto.
3. Soporte no confirma pagos ni ajusta comisiones.

### Criterios de prueba

1. Crear ticket.
2. Responder ticket.
3. Cambiar estado.
4. Validar scope.

---

## 32. EPIC-022 — QA, pruebas integrales y hardening

### Criterios funcionales

1. Existe matriz de pruebas.
2. Existe flujo E2E cliente-tienda-admin.
3. Se prueban permisos y scopes.
4. Se prueban pagos y comisiones.
5. Se prueba auditoría crítica.
6. Se prueban documentos/evidencias.
7. Se prueban reportes.
8. No hay bugs críticos abiertos.

### Criterios de seguridad

1. 401 probado.
2. 403 probado.
3. Violación de scope probada.
4. Archivos prohibidos probados.
5. Errores seguros probados.

### Criterios de prueba

1. Ejecutar pruebas funcionales.
2. Ejecutar pruebas negativas.
3. Ejecutar regresión principal.
4. Validar demo final.

---

## 33. EPIC-023 — Swagger y documentación técnica

### Criterios funcionales

1. Swagger existe.
2. Endpoints están agrupados por módulo.
3. DTOs están documentados.
4. Endpoints protegidos indican auth.
5. README explica instalación.
6. README explica variables de entorno.
7. README explica migraciones.
8. README explica seeds.
9. README explica ejecución frontend/backend.
10. README explica usuarios demo.

### Criterios de seguridad

1. Swagger no se expone inseguro en producción.
2. `.env.example` no contiene secretos reales.
3. README no contiene claves privadas.

### Criterios de prueba

1. Levantar proyecto desde README.
2. Ejecutar migraciones.
3. Ejecutar seeds.
4. Probar endpoints desde Swagger.

---

# CRITERIOS DE ACEPTACIÓN TÉCNICOS TRANSVERSALES

---

## 34. Criterios frontend React.js

Toda pantalla React.js debe cumplir:

1. Usa layout correspondiente al perfil.
2. Respeta diseño visual del sistema.
3. Es responsive.
4. Tiene estado loading si consume API.
5. Tiene estado empty si no hay datos.
6. Tiene estado error si falla API.
7. Tiene estado forbidden si recibe 403.
8. Oculta acciones no permitidas.
9. No contiene lógica financiera crítica como fuente de verdad.
10. No contiene secretos.
11. Usa servicios API centralizados.
12. Usa hooks reutilizables cuando aplica.
13. Muestra badges de estado.
14. Formatea fechas y montos de forma consistente.
15. Valida formularios en frontend, pero no reemplaza validación backend.

---

## 35. Criterios backend Nest.js

Todo endpoint Nest.js debe cumplir:

1. Tiene controller, service y DTO si aplica.
2. Valida DTO de entrada.
3. Valida autenticación si no es público.
4. Valida permisos si es privado.
5. Valida scope si consulta datos de negocio.
6. Valida transiciones de estado.
7. Devuelve errores controlados.
8. No expone stack trace en producción.
9. Usa transacciones en operaciones críticas.
10. Genera auditoría si la acción es crítica.
11. Genera notificación si aplica.
12. Está documentado en Swagger.
13. Tiene paginación en listados.
14. Tiene filtros validados.
15. No duplica cálculos críticos en frontend.

---

## 36. Criterios MySQL

Toda tabla o migración debe cumplir:

1. Tiene clave primaria.
2. Tiene timestamps `created_at` y `updated_at` si aplica.
3. Tiene `deleted_at` si requiere soft delete.
4. Tiene índices en campos de búsqueda frecuentes.
5. Tiene claves foráneas cuando corresponde.
6. Usa tipos DECIMAL para montos.
7. Usa códigos únicos para entidades principales.
8. Usa estados normalizados por catálogo cuando aplica.
9. No almacena contraseñas en texto plano.
10. No almacena refresh tokens en texto plano.
11. Permite seeds demo sin duplicados críticos.
12. Mantiene integridad referencial.

---

## 37. Criterios API y Swagger

1. Todo endpoint nuevo debe documentarse.
2. Todo DTO debe tener descripción clara.
3. Endpoints protegidos deben indicar autenticación.
4. Endpoints deben responder códigos HTTP consistentes.
5. Errores deben usar `errorCode`.
6. Listados deben documentar filtros y paginación.
7. Endpoints críticos deben documentar permisos requeridos.
8. Endpoints de upload deben documentar tipos permitidos.
9. Swagger no debe exponer secretos.
10. Swagger debe poder probarse en entorno local/demo.

---

## 38. Criterios de seguridad transversal

1. Autenticación requerida para módulos privados.
2. RBAC aplicado en backend.
3. Scope aplicado en backend.
4. Frontend oculta acciones no permitidas.
5. Backend no confía en frontend.
6. Contraseñas hasheadas.
7. Tokens expirables.
8. Refresh tokens revocables.
9. Variables sensibles en `.env`.
10. `.env` real no se sube al repositorio.
11. CORS configurado.
12. Rate limit en endpoints de auth.
13. Archivos validados.
14. Errores seguros.
15. Logs sin secretos.

---

## 39. Criterios de RBAC y scopes

### 39.1 Cliente final

1. Solo ve sus cotizaciones.
2. Solo ve sus órdenes.
3. Solo ve sus pagos.
4. Solo ve sus documentos.
5. No ve comisiones internas.
6. No accede a panel tienda/admin.

### 39.2 Tienda logística

1. Solo ve su tienda.
2. Solo ve sus servicios.
3. Solo ve cotizaciones de sus servicios.
4. Solo ve órdenes de sus servicios.
5. Solo ve pagos relacionados con sus órdenes.
6. Solo ve sus comisiones.
7. No ve datos de otras tiendas.

### 39.3 Superadministrador

1. Accede globalmente.
2. Puede aprobar tiendas.
3. Puede gestionar reglas.
4. Puede ver reportes globales.
5. Puede consultar auditoría global.

### 39.4 Auditor

1. Consulta global de solo lectura.
2. No crea, edita, elimina ni confirma operaciones.
3. Puede ver auditoría y reportes autorizados.
4. No modifica reglas financieras.

### 39.5 Operador interno

1. Accede solo a módulos autorizados.
2. No tiene permisos globales por defecto.
3. Puede revisar operaciones si tiene permiso.

### 39.6 Inspector

1. Ve inspecciones asignadas.
2. No ve inspecciones ajenas.
3. No aprueba su propia inspección si la regla exige revisión separada.

### 39.7 Transportista

1. Ve viajes propios/asignados.
2. No ve viajes de otros transportistas.
3. Puede actualizar estados permitidos.

---

## 40. Criterios de auditoría transversal

Acciones que deben generar auditoría:

1. Asignar rol.
2. Cambiar permiso.
3. Aprobar tienda.
4. Suspender tienda.
5. Publicar/despublicar servicio.
6. Aprobar cotización.
7. Crear orden.
8. Cerrar orden.
9. Cancelar orden.
10. Confirmar pago.
11. Rechazar pago.
12. Reembolsar pago referencial.
13. Crear/modificar regla de comisión.
14. Ajustar comisión.
15. Gate-out.
16. Bloquear/liberar contenedor.
17. Despachar inventario.
18. Rechazar inspección.
19. Exportar reporte.
20. Exportar auditoría.

El audit log debe incluir:

1. Actor.
2. Perfil.
3. Acción.
4. Módulo.
5. Entidad.
6. ID/código de entidad.
7. Valores anteriores y nuevos si aplica.
8. Motivo si aplica.
9. IP si disponible.
10. User agent si disponible.
11. Severidad.
12. Fecha del servidor.

---

## 41. Criterios de pagos y comisiones

### Pagos

1. Pago se asocia a orden válida.
2. Monto mayor a cero.
3. Moneda válida.
4. Método de pago válido.
5. Comprobante requerido si método lo exige.
6. Confirmación requiere permiso.
7. Rechazo requiere motivo.
8. Confirmación actualiza orden.
9. Confirmación genera auditoría crítica.
10. Pago confirmado no se elimina.

### Comisiones

1. Comisión se calcula en backend.
2. Comisión se asocia a orden.
3. Comisión se asocia a tienda.
4. Comisión se asocia a regla aplicada.
5. Comisión no es negativa.
6. Neto proveedor no es negativo.
7. Regla histórica queda congelada.
8. Comisión se confirma al confirmar pago.
9. Ajuste requiere motivo.
10. Cambios generan auditoría.

---

## 42. Criterios de documentos y archivos

1. Se aceptan solo tipos permitidos.
2. Se rechazan extensiones peligrosas.
3. Se valida tamaño máximo.
4. Se genera nombre interno seguro.
5. Archivo se vincula a entidad.
6. Descarga requiere permiso.
7. Documento tiene estado.
8. Validar documento requiere permiso.
9. Rechazar documento requiere motivo.
10. Eventos críticos generan auditoría.

---

## 43. Criterios de reportes

1. Reporte requiere autenticación.
2. Reporte requiere permiso.
3. Reporte aplica scope.
4. Reporte financiero requiere permiso reforzado.
5. Reporte de auditoría requiere permiso de auditoría.
6. Filtros se validan.
7. Listados se paginan.
8. Montos se calculan en backend.
9. Exportación requiere motivo.
10. Exportación genera auditoría.
11. Exportación respeta scope.
12. Archivo exportado queda protegido.

---

# CRITERIOS DE ACEPTACIÓN POR SPRINT

---

## 44. Sprint 00 — Preparación Antigravity

Aceptado cuando:

1. Documentos maestros están listados.
2. Roadmap está definido.
3. Backlog está definido.
4. Carpeta `/docs` está preparada.
5. Prompt inicial de Antigravity está listo.

---

## 45. Sprint 01 — Arquitectura base

Aceptado cuando:

1. Frontend levanta.
2. Backend levanta.
3. MySQL conecta.
4. Health check responde.
5. README inicial existe.
6. `.env.example` existe.

---

## 46. Sprint 02 — Auth, RBAC y scopes

Aceptado cuando:

1. Login funciona.
2. Logout funciona.
3. Registro funciona.
4. Token protege endpoints.
5. Permisos protegen endpoints.
6. Scope inicial funciona.
7. Frontend protege rutas.
8. 401 y 403 se manejan correctamente.

---

## 47. Sprint 03 — Catálogos, seeds y navegación

Aceptado cuando:

1. Catálogos existen.
2. Seeds cargan.
3. Menús por perfil funcionan.
4. Dashboards iniciales cargan.
5. Cliente, tienda y admin ven navegación distinta.

---

## 48. Sprint 04 — Design system y home

Aceptado cuando:

1. Home público existe.
2. UI tipo marketplace Yelp está implementada.
3. Cards y filtros visuales existen.
4. Layout responsive funciona.
5. Header y footer existen.

---

## 49. Sprint 05 — Tiendas

Aceptado cuando:

1. Usuario crea tienda.
2. Admin aprueba/rechaza.
3. Tienda aprobada tiene perfil público.
4. Tienda suspendida no opera.
5. Eventos críticos se auditan.

---

## 50. Sprint 06 — Servicios

Aceptado cuando:

1. Tienda crea servicio.
2. Servicio se publica.
3. Servicio aparece en directorio.
4. Servicio tiene detalle público.
5. Solo tienda dueña edita.

---

## 51. Sprint 07 — Búsqueda

Aceptado cuando:

1. Búsqueda por texto funciona.
2. Filtros funcionan.
3. Resultados muestran servicios publicados.
4. Empty state funciona.
5. Paginación o límite funciona.

---

## 52. Sprint 08 — Cotizaciones

Aceptado cuando:

1. Cliente solicita cotización.
2. Tienda responde.
3. Cliente aprueba o rechaza.
4. Scopes funcionan.
5. Notificaciones básicas funcionan.

---

## 53. Sprint 09 — Órdenes

Aceptado cuando:

1. Cotización aprobada crea orden.
2. Orden tiene detalle.
3. Orden tiene timeline.
4. Cliente ve sus órdenes.
5. Tienda ve sus órdenes.
6. Cancelación exige motivo.

---

## 54. Sprint 10 — Pagos

Aceptado cuando:

1. Cliente registra pago.
2. Cliente carga comprobante.
3. Admin confirma pago.
4. Admin rechaza con motivo.
5. Orden actualiza estado financiero.
6. Audit log crítico se genera.

---

## 55. Sprint 11 — Comisiones

Aceptado cuando:

1. Admin crea regla.
2. Backend calcula comisión.
3. Neto proveedor se calcula.
4. Pago confirmado confirma comisión.
5. Tienda ve su comisión.
6. Cambios se auditan.

---

## 56. Sprint 12 — Auditoría y notificaciones

Aceptado cuando:

1. AuditLogger funciona.
2. Campos sensibles se sanitizan.
3. Logs pueden consultarse.
4. Notificaciones se crean.
5. Usuario ve notificaciones propias.
6. Notificación puede marcarse como leída.

---

## 57. Sprint 13 — Documentos

Aceptado cuando:

1. Upload seguro funciona.
2. Archivos inválidos se rechazan.
3. Documentos se vinculan.
4. Validación/rechazo funciona.
5. Descarga respeta permisos.

---

## 58. Sprint 14 — TOS

Aceptado cuando:

1. Contenedor se registra.
2. Gate-in funciona.
3. Bloqueo funciona.
4. Gate-out con bloqueo falla.
5. Liberación funciona.
6. Gate-out se audita.

---

## 59. Sprint 15 — Transporte

Aceptado cuando:

1. Viaje se crea.
2. Viaje se asigna.
3. Estados cambian correctamente.
4. Incidencia exige motivo.
5. Entrega exige POD.
6. Timeline se actualiza.

---

## 60. Sprint 16 — Almacenamiento

Aceptado cuando:

1. Inventario se recibe.
2. Inventario se mueve.
3. Inventario se bloquea.
4. Despacho bloqueado falla.
5. Despacho válido funciona.
6. Despacho se audita.

---

## 61. Sprint 17 — Inspecciones

Aceptado cuando:

1. Inspección se crea.
2. Inspector se asigna.
3. Checklist funciona.
4. Evidencia obligatoria se valida.
5. Rechazo exige motivo.
6. Rechazo se audita.

---

## 62. Sprint 18 — Dashboards

Aceptado cuando:

1. Dashboards por perfil funcionan.
2. KPIs respetan scope.
3. KPIs financieros respetan permisos.
4. Filtros básicos funcionan.

---

## 63. Sprint 19 — Reportes y exportaciones

Aceptado cuando:

1. Reportes financieros funcionan.
2. Reportes de seguridad/auditoría funcionan.
3. Exportar requiere motivo.
4. Exportar genera auditoría.
5. Archivo exportado queda protegido.

---

## 64. Sprint 20 — Soporte

Aceptado cuando:

1. Usuario crea ticket.
2. Soporte responde.
3. Ticket cambia estado.
4. Usuario ve tickets propios.
5. Scope funciona.

---

## 65. Sprint 21 — QA integral

Aceptado cuando:

1. Flujo E2E completo funciona.
2. RBAC probado.
3. Scopes probados.
4. Pagos probados.
5. Comisiones probadas.
6. Auditoría probada.
7. Bugs críticos cerrados.

---

## 66. Sprint 22 — Hardening y documentación

Aceptado cuando:

1. Swagger está actualizado.
2. README final funciona.
3. `.env.example` está limpio.
4. Seeds cargan desde cero.
5. Rate limit auth existe.
6. CORS está configurado.
7. Demo final puede ejecutarse.

---

# CASOS DE PRUEBA MAESTROS

---

## 67. Caso E2E principal del marketplace

### Escenario: cliente contrata servicio logístico completo

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente entra al home | Ve buscador y categorías |
| 2 | Cliente busca servicio | Ve resultados publicados |
| 3 | Cliente abre servicio | Ve detalle y tienda |
| 4 | Cliente solicita cotización | Cotización queda pendiente |
| 5 | Tienda responde | Cotización queda respondida |
| 6 | Cliente aprueba | Se crea orden |
| 7 | Cliente registra pago | Pago queda enviado |
| 8 | Admin confirma pago | Orden queda pagada |
| 9 | Sistema calcula comisión | Comisión queda confirmada |
| 10 | Auditor consulta log | Ve eventos críticos |

Criterio final:

```txt
El flujo debe completarse sin errores críticos y respetando permisos/scopes.
```

---

## 68. Caso E2E de seguridad

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente intenta acceder a admin | 403 |
| 2 | Tienda intenta ver orden de otra tienda | 403 |
| 3 | Auditor intenta confirmar pago | 403 |
| 4 | Usuario sin token accede a endpoint privado | 401 |
| 5 | Usuario suspendido intenta operar | 403 |

---

## 69. Caso E2E financiero

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Cliente registra pago | Estado `SUBMITTED` |
| 2 | Admin revisa comprobante | Estado `IN_REVIEW` |
| 3 | Admin confirma pago | Estado `CONFIRMED` |
| 4 | Orden actualiza estado financiero | `CONFIRMED` |
| 5 | Comisión se confirma | `CONFIRMED` |
| 6 | Audit log se genera | Severidad `CRITICAL` |

---

## 70. Caso E2E documental

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Usuario carga PDF | Documento creado |
| 2 | Usuario carga `.exe` | Rechazado |
| 3 | Operador valida documento | Estado `VALIDATED` |
| 4 | Operador rechaza documento | Motivo obligatorio |
| 5 | Usuario no autorizado descarga | 403 |

---

## 71. Caso E2E operativo TOS

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Operador registra contenedor | Contenedor creado |
| 2 | Operador registra gate-in | Estado actualizado |
| 3 | Operador crea bloqueo | Bloqueo activo |
| 4 | Operador intenta gate-out | Falla por bloqueo |
| 5 | Usuario autorizado libera bloqueo | Bloqueo liberado |
| 6 | Operador registra gate-out | Gate-out exitoso y auditado |

---

## 72. Caso E2E transporte

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Transportista crea viaje | Viaje creado |
| 2 | Asigna conductor/vehículo | Asignación exitosa |
| 3 | Cambia a en tránsito | Estado actualizado |
| 4 | Reporta incidencia sin motivo | Falla |
| 5 | Reporta incidencia con motivo | Éxito y auditoría |
| 6 | Entrega sin POD | Falla |
| 7 | Entrega con POD | Éxito |

---

## 73. Caso E2E almacenamiento

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Almacén recibe inventario | Estado `RECEIVED` |
| 2 | Ubica inventario | Estado/location actualizado |
| 3 | Bloquea inventario | Bloqueo activo |
| 4 | Intenta despacho | Falla por bloqueo |
| 5 | Libera inventario | Bloqueo liberado |
| 6 | Despacha inventario | Estado `DISPATCHED` y auditoría |

---

## 74. Caso E2E inspecciones

| Paso | Acción | Resultado esperado |
|---|---|---|
| 1 | Operador crea inspección | Estado `CREATED` |
| 2 | Asigna inspector | Estado `ASSIGNED` |
| 3 | Inspector ejecuta checklist | Items completados |
| 4 | Envía sin evidencia obligatoria | Falla |
| 5 | Carga evidencia | Éxito |
| 6 | Envía a revisión | Estado `IN_REVIEW` |
| 7 | Operador rechaza con motivo | Estado `REJECTED` y auditoría |

---

# MATRIZ DE VALIDACIÓN POR PERFIL

---

## 75. Matriz de aceptación por perfil

| Perfil | Debe poder | No debe poder |
|---|---|---|
| Cliente final | Buscar, cotizar, aprobar, pagar, ver sus órdenes | Ver datos de otros clientes, confirmar pagos, ver comisiones internas |
| Tienda logística | Gestionar tienda, servicios, cotizaciones recibidas, órdenes propias | Ver datos de otra tienda, aprobarse a sí misma, cambiar reglas globales |
| Superadministrador | Ver y gestionar globalmente | Saltarse auditoría crítica |
| Operador interno | Gestionar módulos autorizados | Acceder a módulos no asignados |
| Auditor | Consultar auditoría y reportes | Modificar datos operativos o financieros |
| Transportista | Gestionar viajes propios/asignados | Ver viajes de otros transportistas |
| Inspector | Ejecutar inspecciones asignadas | Ver/modificar inspecciones ajenas |
| Soporte técnico | Atender tickets autorizados | Confirmar pagos, ajustar comisiones, cambiar roles críticos |

---

# MATRIZ DE SEVERIDAD DE BUGS

---

## 76. Severidades

| Severidad | Definición | Bloquea release |
|---|---|---|
| Crítico | Rompe flujo principal, seguridad, pagos, datos o auditoría | Sí |
| Alto | Afecta módulo importante pero tiene workaround | Depende |
| Medio | Error funcional menor | No, si está documentado |
| Bajo | UI, texto o mejora menor | No |

### Bugs críticos típicos

1. Cliente ve datos de otro cliente.
2. Tienda ve datos de otra tienda.
3. Usuario sin permiso confirma pago.
4. Auditor modifica datos.
5. Pago confirmado no actualiza orden.
6. Comisión negativa.
7. Neto proveedor negativo.
8. Gate-out con bloqueo activo.
9. Despacho con inventario bloqueado.
10. Logs guardan contraseñas o tokens.
11. Endpoint privado permite acceso sin token.
12. Exportación financiera no respeta scope.

---

# CRITERIOS DE DEMO

---

## 77. Criterios de aceptación para demo temprana

La demo temprana se acepta cuando funciona:

1. Home público.
2. Búsqueda de servicios.
3. Perfil público de tienda.
4. Detalle de servicio.
5. Registro/login.
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

---

## 78. Criterios de aceptación para MVP completo

El MVP completo se acepta cuando además de la demo temprana funciona:

1. Documentos y evidencias.
2. TOS básico.
3. Transporte.
4. Almacenamiento.
5. Inspecciones.
6. Reportes por perfil.
7. Reportes financieros.
8. Exportaciones con auditoría.
9. Soporte básico.
10. Swagger actualizado.
11. README final.
12. QA integral aprobado.
13. No hay bugs críticos.

---

# PROMPT PARA ANTIGRAVITY

---

## 79. Prompt maestro de criterios de aceptación

```text
Actúa como QA lead, product owner, scrum master, arquitecto full-stack, security engineer, backend architect Nest.js, frontend architect React.js y database architect MySQL del Marketplace Logístico TOS para Puertos Aduaneros.

Usa el documento `31_ACCEPTANCE_CRITERIA_MASTER.md` como fuente principal para validar si una historia, tarea, épica, sprint o release está terminada.

Objetivo:
Aplicar criterios de aceptación funcionales, técnicos, frontend, backend, base de datos, seguridad, RBAC, scopes, auditoría, reportes, documentos, pagos, comisiones y operación logística antes de marcar cualquier entregable como DONE.

Reglas obligatorias:
1. No marcar historia como DONE si no cumple permisos y scopes.
2. No marcar acción crítica como DONE si no genera auditoría.
3. No marcar pago como DONE si no actualiza orden y genera audit log.
4. No marcar comisión como DONE si no se calcula en backend.
5. No marcar reporte como DONE si no respeta scope.
6. No marcar exportación como DONE si no exige motivo y genera auditoría.
7. No marcar upload como DONE si no valida archivo y permisos.
8. No marcar pantalla como DONE si no tiene loading, empty, error y forbidden cuando aplique.
9. No marcar endpoint como DONE si no valida DTO, auth, permisos y scope.
10. No marcar sprint como DONE si hay bugs críticos abiertos.
11. No usar Odoo como integración real; solo referencia conceptual.
12. No usar pasarela real ni BI externo en MVP.
13. Respetar diseño marketplace tipo Yelp.
14. Validar cada sprint contra este documento y `30_SPRINT_ROADMAP.md`.
15. Validar cada historia contra `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.

Antes de cerrar cada historia, generar una checklist con:
1. Criterios funcionales cumplidos.
2. Criterios frontend cumplidos.
3. Criterios backend cumplidos.
4. Criterios MySQL cumplidos.
5. Criterios de seguridad cumplidos.
6. Criterios de auditoría cumplidos.
7. Criterios de QA cumplidos.
8. Evidencias de prueba.
9. Bugs abiertos.
10. Decisión final: ACCEPTED, REJECTED o ACCEPTED WITH OBSERVATIONS.
```

---

# CHECKLIST DE USO DEL DOCUMENTO

---

## 80. Checklist

- [ ] Guardar este documento como `31_ACCEPTANCE_CRITERIA_MASTER.md`.
- [ ] Colocarlo en `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo junto a `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Usarlo junto a `30_SPRINT_ROADMAP.md`.
- [ ] Aplicarlo antes de cerrar historias.
- [ ] Aplicarlo antes de cerrar sprints.
- [ ] Aplicarlo antes de aceptar demo temprana.
- [ ] Aplicarlo antes de aceptar MVP completo.
- [ ] Usarlo como checklist QA en Antigravity.
- [ ] Validar permisos y scopes en cada módulo.
- [ ] Validar auditoría en acciones críticas.
- [ ] Validar frontend, backend, DB y Swagger.
- [ ] Confirmar que no hay integración real con Odoo, pasarela externa ni BI externo en MVP.

---

## 81. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de revisión de seguridad | Sí |
| Pendiente de validación con backlog | Sí |
| Listo para usar en Antigravity | Sí, como documento maestro inicial |

---

# Fin del documento

