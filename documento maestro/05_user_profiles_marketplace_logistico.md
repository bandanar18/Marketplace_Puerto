# 05_USER_PROFILES.md

# Documento Maestro de Perfiles de Usuario
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `05_USER_PROFILES.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro funcional de perfiles de usuario |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Definir perfiles, accesos, dashboards, menús, permisos y restricciones para el marketplace logístico |

---

## 2. Propósito del documento

Este documento define los **perfiles de usuario** que operarán dentro del Marketplace Logístico TOS para Puertos Aduaneros.

Su objetivo es servir como fuente de verdad para que Antigravity pueda construir correctamente:

1. Registro y autenticación de usuarios.
2. Roles y permisos.
3. Menús visibles por perfil.
4. Dashboards por perfil.
5. Rutas protegidas en React.js.
6. Guards RBAC en Nest.js.
7. Tablas MySQL relacionadas con perfiles.
8. Auditoría de acciones por perfil.
9. Reglas de negocio asociadas a cada usuario.
10. Relación entre perfiles, actores, módulos y servicios.

Este documento debe usarse junto con:

- `04_ECOSYSTEM_ACTORS_MATRIX.md`
- `06_MODULE_PROFILE_ACCESS_MATRIX.md`
- `07_FUNCTIONAL_MODULES_CATALOG.md`
- `12_DATABASE_MASTER_SCHEMA.md`
- `13_API_SPECIFICATION.md`

---

## 3. Objetivo general

Definir los perfiles funcionales del sistema para controlar la experiencia de usuario, los permisos, las restricciones, los dashboards, los menús, los módulos disponibles y los eventos auditables dentro del marketplace logístico.

---

## 4. Objetivos específicos

1. Definir los perfiles principales del marketplace.
2. Asociar cada perfil con actores del ecosistema.
3. Definir los módulos visibles por perfil.
4. Definir acciones permitidas por perfil.
5. Definir restricciones funcionales.
6. Definir dashboard principal por perfil.
7. Definir menú lateral o navegación por perfil.
8. Definir reportes disponibles por perfil.
9. Definir eventos auditables.
10. Definir tablas MySQL relacionadas.
11. Definir modelos Odoo referenciales.
12. Servir como base para RBAC.
13. Servir como base para rutas protegidas en React.js.
14. Servir como base para guards de Nest.js.
15. Servir como insumo para prompts de Antigravity.

---

## 5. Perfiles principales del sistema

| Código | Perfil | Tipo | Participación en MVP | Descripción |
|---|---|---|---|---|
| PROF-CLI-001 | Cliente final | Usuario demandante | Completa | Solicita, compara, cotiza, aprueba, paga y monitorea servicios logísticos |
| PROF-TIE-002 | Tienda logística | Proveedor marketplace | Completa | Publica servicios, responde cotizaciones, ejecuta órdenes y carga evidencias |
| PROF-SUP-003 | Superadministrador | Administrador global | Completa | Controla usuarios, tiendas, servicios, catálogos, comisiones, reportes y auditoría |
| PROF-OPE-004 | Operador interno | Operador del ecosistema | Parcial MVP | Da seguimiento operativo a cotizaciones, órdenes, documentos y estados |
| PROF-INS-005 | Inspector | Proveedor especializado | Parcial MVP | Ejecuta inspecciones, checklists, resultados y evidencias |
| PROF-TRA-006 | Transportista | Proveedor especializado | Parcial MVP | Gestiona viajes, vehículos, conductores, rutas y entregas |
| PROF-ADU-007 | Agente aduanal | Proveedor especializado | Parcial MVP | Gestiona documentos, declaraciones, despacho y estados aduaneros |
| PROF-AUD-008 | Auditor | Control y cumplimiento | Parcial MVP | Consulta trazabilidad, logs, reportes y eventos críticos |
| PROF-SOP-009 | Soporte técnico | Soporte funcional/técnico | Fase posterior / básico | Atiende incidencias, usuarios, errores y tickets de soporte |

---

## 6. Clasificación de perfiles

| Clasificación | Perfiles incluidos | Descripción |
|---|---|---|
| Demandantes de servicios | Cliente final | Usuarios que solicitan y pagan servicios logísticos |
| Proveedores de servicios | Tienda logística, Inspector, Transportista, Agente aduanal | Usuarios que ofrecen o ejecutan servicios dentro del marketplace |
| Administración | Superadministrador | Usuario con control global de la plataforma |
| Operación interna | Operador interno | Usuario que coordina procesos internos y seguimiento operativo |
| Control y cumplimiento | Auditor | Usuario que revisa trazabilidad, reportes y auditoría |
| Soporte | Soporte técnico | Usuario que atiende problemas funcionales o técnicos |

---

## 7. Matriz perfil vs actor del ecosistema

| Perfil | Actores relacionados |
|---|---|
| Cliente final | Cliente, Importador, Exportador |
| Tienda logística | Agente aduanal, Transportista, Almacén fiscal, Terminal portuaria, Naviera, Inspector, Aseguradora, Banco |
| Superadministrador | Superadministrador |
| Operador interno | Terminal portuaria, Operador TOS, personal operativo interno |
| Inspector | Inspector |
| Transportista | Transportista |
| Agente aduanal | Agente aduanal |
| Auditor | Aduana, Autoridad portuaria, auditor interno, auditor externo |
| Soporte técnico | Soporte funcional, soporte técnico, mesa de ayuda |

---

## 8. Escala general de acceso

La matriz de módulos por perfil debe usar la siguiente escala:

| Nivel | Nombre | Descripción |
|---:|---|---|
| 0 | Sin acceso | El perfil no ve ni opera el módulo |
| 1 | Consulta | Solo lectura o visualización |
| 2 | Operativo básico | Crear o editar registros propios |
| 3 | Operativo avanzado | Ejecutar, aprobar, responder, cerrar o gestionar procesos |
| 4 | Administración total | Configurar, auditar, anular, aprobar o administrar globalmente |

---

# 9. Fichas maestras por perfil

---

## 9.1 Perfil Cliente final

| Campo | Descripción |
|---|---|
| Código | PROF-CLI-001 |
| Nombre | Cliente final |
| Tipo | Usuario demandante |
| Participación en MVP | Completa |
| Actores relacionados | Cliente, Importador, Exportador |
| Objetivo | Permitir que el usuario busque, compare, cotice, contrate, pague y monitoree servicios logísticos |
| Dashboard principal | Dashboard cliente |
| Modelo Odoo referencial | `res.users`, `res.partner`, `sale.order`, `ir.attachment`, `account.payment` |
| Tablas MySQL relacionadas | `users`, `user_profiles`, `customers`, `quotations`, `orders`, `documents`, `payments`, `reviews` |

### Módulos visibles

1. Home marketplace.
2. Búsqueda de servicios.
3. Perfil público de tiendas.
4. Servicios.
5. Cotizaciones.
6. Órdenes.
7. Documentos.
8. Pagos.
9. Reportes básicos.
10. Reviews y ratings.
11. Perfil de usuario.

### Acciones permitidas

1. Registrarse.
2. Iniciar sesión.
3. Actualizar su perfil.
4. Buscar servicios.
5. Filtrar por categoría, puerto, terminal, precio o rating.
6. Ver perfil público de tienda.
7. Solicitar cotización.
8. Cargar documentos.
9. Aprobar cotización.
10. Rechazar cotización.
11. Consultar órdenes propias.
12. Registrar pago referencial o subir comprobante.
13. Descargar evidencias propias.
14. Calificar una orden cerrada.
15. Consultar reportes propios.

### Restricciones

1. No puede ver cotizaciones de otros clientes.
2. No puede ver órdenes de otros clientes.
3. No puede publicar servicios.
4. No puede aprobar tiendas.
5. No puede configurar catálogos.
6. No puede modificar comisiones.
7. No puede acceder a auditoría global.
8. Solo puede calificar órdenes cerradas propias.

### Menú sugerido

1. Inicio.
2. Buscar servicios.
3. Mis cotizaciones.
4. Mis órdenes.
5. Mis documentos.
6. Mis pagos.
7. Mis reportes.
8. Mis reviews.
9. Mi perfil.

### Eventos auditables

1. Registro.
2. Login.
3. Solicitud de cotización.
4. Carga documental.
5. Aprobación de cotización.
6. Rechazo de cotización.
7. Registro de pago.
8. Creación de review.
9. Descarga de evidencia si aplica.

---

## 9.2 Perfil Tienda logística

| Campo | Descripción |
|---|---|
| Código | PROF-TIE-002 |
| Nombre | Tienda logística |
| Tipo | Proveedor marketplace |
| Participación en MVP | Completa |
| Actores relacionados | Agente aduanal, Transportista, Almacén fiscal, Terminal portuaria, Naviera, Inspector, Aseguradora, Banco |
| Objetivo | Permitir que proveedores logísticos publiquen servicios, respondan cotizaciones, ejecuten órdenes y gestionen evidencias |
| Dashboard principal | Dashboard tienda logística |
| Modelo Odoo referencial | `res.partner`, `product.template`, `sale.order.line`, `ir.attachment`, `account.move` |
| Tablas MySQL relacionadas | `stores`, `store_users`, `store_documents`, `services`, `service_pricing`, `quotations`, `orders`, `documents`, `commissions` |

### Módulos visibles

1. Dashboard tienda.
2. Perfil de tienda.
3. Servicios publicados.
4. Solicitudes de cotización.
5. Órdenes asignadas.
6. Documentos.
7. Evidencias.
8. Pagos.
9. Comisiones.
10. Reviews.
11. Reportes de tienda.

### Acciones permitidas

1. Registrar tienda.
2. Editar perfil de tienda.
3. Cargar documentos de validación.
4. Crear servicios.
5. Editar servicios propios.
6. Pausar servicios propios.
7. Responder cotizaciones dirigidas a su tienda.
8. Aceptar o rechazar solicitudes según disponibilidad.
9. Actualizar estado de órdenes asignadas.
10. Cargar documentos y evidencias.
11. Consultar pagos asociados.
12. Consultar comisiones aplicadas.
13. Responder reviews si está habilitado.
14. Consultar reportes propios.

### Restricciones

1. No puede operar si su tienda no está aprobada.
2. No puede ver información privada de otras tiendas.
3. No puede modificar comisiones globales.
4. No puede aprobar su propia tienda.
5. No puede aprobar globalmente sus propios servicios si requieren revisión del superadministrador.
6. No puede acceder a reportes globales.
7. No puede alterar pagos confirmados.
8. No puede borrar órdenes históricas.

### Menú sugerido

1. Dashboard.
2. Mi tienda.
3. Mis servicios.
4. Cotizaciones recibidas.
5. Órdenes asignadas.
6. Documentos.
7. Evidencias.
8. Pagos.
9. Comisiones.
10. Reviews.
11. Reportes.
12. Configuración de tienda.

### Eventos auditables

1. Registro de tienda.
2. Actualización de perfil.
3. Carga de documentos de tienda.
4. Creación de servicio.
5. Cambio de tarifa.
6. Respuesta de cotización.
7. Cambio de estado de orden.
8. Carga de evidencia.
9. Cierre de orden.
10. Respuesta a review.

---

## 9.3 Perfil Superadministrador

| Campo | Descripción |
|---|---|
| Código | PROF-SUP-003 |
| Nombre | Superadministrador |
| Tipo | Administrador global |
| Participación en MVP | Completa |
| Actores relacionados | Superadministrador |
| Objetivo | Administrar globalmente usuarios, roles, tiendas, servicios, catálogos, comisiones, reportes y auditoría |
| Dashboard principal | Panel global superadministrador |
| Modelo Odoo referencial | `res.users`, `res.groups`, `ir.model.access`, `ir.rule`, `mail.message` |
| Tablas MySQL relacionadas | `users`, `roles`, `permissions`, `stores`, `services`, `master_catalogs`, `commission_rules`, `reports`, `audit_logs` |

### Módulos visibles

1. Dashboard global.
2. Usuarios.
3. Roles.
4. Permisos.
5. Tiendas.
6. Servicios.
7. Catálogos maestros.
8. Cotizaciones.
9. Órdenes.
10. Documentos.
11. Pagos.
12. Comisiones.
13. Reportes.
14. Auditoría.
15. Reviews.
16. Configuración global.

### Acciones permitidas

1. Crear usuarios.
2. Bloquear usuarios.
3. Activar usuarios.
4. Crear roles.
5. Asignar permisos.
6. Aprobar tiendas.
7. Rechazar tiendas.
8. Suspender tiendas.
9. Aprobar servicios.
10. Pausar servicios.
11. Configurar catálogos.
12. Configurar comisiones.
13. Consultar cotizaciones.
14. Consultar órdenes.
15. Revisar pagos.
16. Generar reportes globales.
17. Consultar auditoría.
18. Moderar reviews.
19. Exportar información.

### Restricciones

1. No debe eliminar información histórica crítica sin auditoría.
2. No debe modificar pagos confirmados sin registro de motivo.
3. No debe cambiar reglas globales sin que el evento quede auditado.
4. No debe acceder a secretos técnicos no necesarios desde UI.
5. Sus acciones críticas siempre deben quedar registradas.

### Menú sugerido

1. Panel global.
2. Usuarios.
3. Roles y permisos.
4. Tiendas.
5. Servicios.
6. Cotizaciones.
7. Órdenes.
8. Documentos.
9. Pagos.
10. Comisiones.
11. Catálogos.
12. Reviews.
13. Reportes.
14. Auditoría.
15. Configuración.

### Eventos auditables

1. Login superadministrador.
2. Creación de usuario.
3. Bloqueo de usuario.
4. Cambio de rol.
5. Cambio de permiso.
6. Aprobación de tienda.
7. Rechazo de tienda.
8. Suspensión de tienda.
9. Aprobación de servicio.
10. Cambio de comisión.
11. Cambio de catálogo.
12. Exportación de reporte.
13. Consulta de auditoría crítica.

---

## 9.4 Perfil Operador interno

| Campo | Descripción |
|---|---|
| Código | PROF-OPE-004 |
| Nombre | Operador interno |
| Tipo | Operación interna |
| Participación en MVP | Parcial |
| Actores relacionados | Terminal portuaria, operador TOS, personal operativo interno |
| Objetivo | Monitorear y apoyar el seguimiento operativo de cotizaciones, órdenes, documentos y estados |
| Dashboard principal | Dashboard operativo |
| Modelo Odoo referencial | `project.task`, `stock.move`, `stock.location`, `mail.message` |
| Tablas MySQL relacionadas | `orders`, `order_lines`, `documents`, `audit_logs`, `tos_containers`, `tos_moves` |

### Módulos visibles

1. Órdenes.
2. Documentos.
3. Estados operativos.
4. TOS básico.
5. Transporte básico.
6. Almacenamiento básico.
7. Inspecciones básicas.
8. Reportes operativos.
9. Auditoría limitada.

### Acciones permitidas

1. Consultar órdenes.
2. Actualizar estados operativos autorizados.
3. Revisar documentos.
4. Marcar observaciones.
5. Coordinar tareas operativas.
6. Consultar eventos TOS básicos.
7. Generar reportes operativos.

### Restricciones

1. No puede aprobar tiendas.
2. No puede configurar comisiones.
3. No puede modificar pagos confirmados.
4. No puede modificar permisos globales.
5. No puede eliminar registros históricos.
6. Solo puede operar módulos autorizados.

### Menú sugerido

1. Dashboard operativo.
2. Órdenes.
3. Documentos.
4. Estados operativos.
5. TOS básico.
6. Transporte.
7. Almacenamiento.
8. Inspecciones.
9. Reportes operativos.

### Eventos auditables

1. Cambio de estado operativo.
2. Observación documental.
3. Intervención de orden.
4. Registro de evento operativo.
5. Generación de reporte operativo.

---

## 9.5 Perfil Inspector

| Campo | Descripción |
|---|---|
| Código | PROF-INS-005 |
| Nombre | Inspector |
| Tipo | Proveedor especializado |
| Participación en MVP | Parcial como servicio básico |
| Actores relacionados | Inspector |
| Objetivo | Ejecutar inspecciones, cargar evidencias, emitir resultados y cerrar inspecciones |
| Dashboard principal | Dashboard inspector |
| Modelo Odoo referencial | `quality.check`, `project.task`, `ir.attachment`, `res.partner` |
| Tablas MySQL relacionadas | `inspectors`, `inspections`, `inspection_checklists`, `inspection_results`, `inspection_evidences`, `documents` |

### Módulos visibles

1. Inspecciones asignadas.
2. Órdenes relacionadas.
3. Documentos.
4. Evidencias.
5. Checklists.
6. Reportes de inspección.
7. Perfil de inspector o tienda.

### Acciones permitidas

1. Consultar inspecciones asignadas.
2. Aceptar o confirmar inspección.
3. Ejecutar checklist.
4. Cargar fotos o evidencias.
5. Registrar resultado.
6. Emitir acta de inspección.
7. Cerrar inspección.
8. Consultar reportes propios.

### Restricciones

1. No puede ver inspecciones de otros inspectores salvo autorización.
2. No puede modificar tarifas globales.
3. No puede cambiar pagos.
4. No puede aprobar tiendas.
5. No puede editar documentos del cliente salvo observación autorizada.

### Menú sugerido

1. Dashboard.
2. Mis inspecciones.
3. Checklists.
4. Evidencias.
5. Documentos.
6. Reportes.
7. Mi perfil.

### Eventos auditables

1. Aceptación de inspección.
2. Inicio de inspección.
3. Carga de evidencia.
4. Resultado de inspección.
5. Emisión de acta.
6. Cierre de inspección.

---

## 9.6 Perfil Transportista

| Campo | Descripción |
|---|---|
| Código | PROF-TRA-006 |
| Nombre | Transportista |
| Tipo | Proveedor especializado |
| Participación en MVP | Parcial como tienda o servicio de transporte |
| Actores relacionados | Transportista |
| Objetivo | Gestionar viajes, vehículos, conductores, rutas, estados y evidencias de entrega |
| Dashboard principal | Dashboard transportista |
| Modelo Odoo referencial | `fleet.vehicle`, `res.partner`, `project.task`, `sale.order.line` |
| Tablas MySQL relacionadas | `carriers`, `vehicles`, `drivers`, `trips`, `trip_events`, `orders`, `documents` |

### Módulos visibles

1. Dashboard transporte.
2. Servicios de transporte.
3. Cotizaciones recibidas.
4. Órdenes de transporte.
5. Viajes.
6. Vehículos.
7. Conductores.
8. Documentos.
9. Evidencias de entrega.
10. Reportes de transporte.

### Acciones permitidas

1. Responder cotizaciones de transporte.
2. Ver órdenes asignadas.
3. Crear viaje.
4. Asignar conductor.
5. Asignar vehículo.
6. Actualizar estado de viaje.
7. Cargar evidencia de entrega.
8. Cerrar viaje.
9. Consultar pagos y comisiones propias.

### Restricciones

1. No puede ver viajes de otros transportistas.
2. No puede modificar datos de otras tiendas.
3. No puede aprobar servicios globales.
4. No puede modificar comisiones.
5. No puede cambiar órdenes no asignadas.

### Menú sugerido

1. Dashboard.
2. Mis servicios.
3. Cotizaciones.
4. Órdenes.
5. Viajes.
6. Vehículos.
7. Conductores.
8. Documentos.
9. Evidencias.
10. Reportes.

### Eventos auditables

1. Respuesta de cotización.
2. Asignación de conductor.
3. Asignación de vehículo.
4. Inicio de viaje.
5. Evento de ruta.
6. Carga de evidencia.
7. Cierre de entrega.

---

## 9.7 Perfil Agente aduanal

| Campo | Descripción |
|---|---|
| Código | PROF-ADU-007 |
| Nombre | Agente aduanal |
| Tipo | Proveedor especializado |
| Participación en MVP | Parcial como tienda o servicio aduanal |
| Actores relacionados | Agente aduanal |
| Objetivo | Gestionar servicios aduaneros, documentos, declaraciones, observaciones y despacho |
| Dashboard principal | Dashboard agente aduanal |
| Modelo Odoo referencial | `res.partner`, `product.template`, `sale.order.line`, `ir.attachment`, `mail.message` |
| Tablas MySQL relacionadas | `customs_agents`, `customs_declarations`, `services`, `quotations`, `orders`, `documents`, `audit_logs` |

### Módulos visibles

1. Servicios aduanales.
2. Cotizaciones aduanales.
3. Órdenes aduanales.
4. Documentos.
5. Estados aduaneros.
6. Evidencias.
7. Reportes aduanales.
8. Auditoría limitada.

### Acciones permitidas

1. Publicar servicios aduanales.
2. Responder cotizaciones.
3. Validar documentos.
4. Registrar observaciones.
5. Actualizar estado aduanero.
6. Cargar evidencias.
7. Cerrar servicio aduanal.
8. Consultar reportes propios.

### Restricciones

1. No puede liberar operaciones como autoridad real en el MVP.
2. No puede modificar documentos del cliente sin trazabilidad.
3. No puede ver expedientes de otros agentes.
4. No puede cambiar comisiones globales.
5. No puede aprobar tiendas.

### Menú sugerido

1. Dashboard.
2. Mis servicios aduanales.
3. Cotizaciones.
4. Órdenes.
5. Documentos.
6. Estados aduaneros.
7. Evidencias.
8. Reportes.

### Eventos auditables

1. Respuesta de cotización.
2. Validación documental.
3. Observación documental.
4. Cambio de estado aduanero.
5. Carga de evidencia.
6. Cierre de servicio.

---

## 9.8 Perfil Auditor

| Campo | Descripción |
|---|---|
| Código | PROF-AUD-008 |
| Nombre | Auditor |
| Tipo | Control y cumplimiento |
| Participación en MVP | Parcial |
| Actores relacionados | Aduana, Autoridad portuaria, auditor interno, auditor externo |
| Objetivo | Consultar trazabilidad, logs, reportes y eventos críticos sin modificar operaciones |
| Dashboard principal | Dashboard auditoría |
| Modelo Odoo referencial | `mail.message`, `ir.attachment`, `ir.model.access`, `account.move` |
| Tablas MySQL relacionadas | `audit_logs`, `reports`, `documents`, `payments`, `commissions`, `orders`, `quotations` |

### Módulos visibles

1. Auditoría.
2. Reportes.
3. Cotizaciones en consulta.
4. Órdenes en consulta.
5. Documentos en consulta.
6. Pagos en consulta.
7. Comisiones en consulta.
8. Usuarios en consulta limitada.
9. Tiendas en consulta.
10. Servicios en consulta.

### Acciones permitidas

1. Consultar logs.
2. Filtrar auditoría por usuario.
3. Filtrar auditoría por módulo.
4. Filtrar auditoría por entidad.
5. Consultar reportes.
6. Exportar reportes autorizados.
7. Revisar cambios de estado.
8. Revisar pagos y comisiones.
9. Revisar validaciones documentales.

### Restricciones

1. No puede modificar operaciones.
2. No puede aprobar cotizaciones.
3. No puede aprobar tiendas.
4. No puede cambiar permisos.
5. No puede modificar pagos.
6. No puede eliminar registros.
7. No puede intervenir órdenes.

### Menú sugerido

1. Dashboard auditoría.
2. Logs.
3. Reportes.
4. Cotizaciones.
5. Órdenes.
6. Documentos.
7. Pagos.
8. Comisiones.
9. Usuarios.
10. Exportaciones.

### Eventos auditables

1. Login auditor.
2. Consulta de logs críticos.
3. Exportación de reporte.
4. Consulta de pagos.
5. Consulta de documentos sensibles.

---

## 9.9 Perfil Soporte técnico

| Campo | Descripción |
|---|---|
| Código | PROF-SOP-009 |
| Nombre | Soporte técnico |
| Tipo | Soporte funcional/técnico |
| Participación en MVP | Fase posterior o acceso básico inicial |
| Actores relacionados | Soporte funcional, soporte técnico, mesa de ayuda |
| Objetivo | Atender incidencias, asistir usuarios, revisar errores y escalar problemas técnicos |
| Dashboard principal | Dashboard soporte |
| Modelo Odoo referencial | `res.users`, `mail.message`, `project.task` |
| Tablas MySQL relacionadas | `support_tickets`, `support_ticket_messages`, `users`, `audit_logs` |

### Módulos visibles

1. Tickets de soporte.
2. Usuarios en consulta limitada.
3. Incidencias.
4. Logs técnicos limitados.
5. Base de conocimiento.
6. Reportes de soporte.

### Acciones permitidas

1. Crear ticket.
2. Asignar ticket.
3. Responder ticket.
4. Cambiar estado de ticket.
5. Escalar incidencia.
6. Consultar usuario para soporte.
7. Consultar logs técnicos permitidos.
8. Generar reporte de soporte.

### Restricciones

1. No puede modificar pagos.
2. No puede cambiar comisiones.
3. No puede aprobar tiendas.
4. No puede aprobar servicios.
5. No puede modificar permisos críticos.
6. No puede ver información financiera sensible salvo autorización.
7. No puede eliminar logs.

### Menú sugerido

1. Dashboard soporte.
2. Tickets.
3. Usuarios.
4. Incidencias.
5. Base de conocimiento.
6. Reportes.
7. Escalaciones.

### Eventos auditables

1. Creación de ticket.
2. Asignación de ticket.
3. Cambio de estado de ticket.
4. Escalamiento.
5. Consulta de usuario.
6. Cierre de ticket.

---

## 10. Matriz resumida de módulos por perfil

| Módulo | Cliente final | Tienda logística | Superadmin | Operador | Inspector | Transportista | Agente aduanal | Auditor | Soporte |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Usuarios | 2 | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 3 |
| Roles | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 1 | 1 |
| Tiendas | 1 | 2 | 4 | 1 | 0 | 1 | 1 | 1 | 2 |
| Servicios | 1 | 3 | 4 | 2 | 1 | 2 | 2 | 1 | 1 |
| Cotizaciones | 3 | 3 | 4 | 2 | 1 | 2 | 3 | 1 | 1 |
| Órdenes | 2 | 3 | 4 | 3 | 2 | 3 | 3 | 1 | 1 |
| Documentos | 2 | 3 | 4 | 3 | 3 | 2 | 3 | 1 | 2 |
| Pagos | 3 | 2 | 4 | 1 | 0 | 1 | 1 | 1 | 1 |
| Comisiones | 0 | 1 | 4 | 0 | 0 | 1 | 1 | 1 | 0 |
| Reportes | 1 | 2 | 4 | 2 | 1 | 1 | 2 | 3 | 1 |
| Auditoría | 0 | 1 | 4 | 1 | 1 | 1 | 1 | 4 | 2 |
| TOS | 1 | 2 | 4 | 3 | 1 | 1 | 1 | 1 | 2 |
| Transporte | 1 | 2 | 4 | 2 | 0 | 3 | 0 | 1 | 1 |
| Almacenamiento | 1 | 2 | 4 | 2 | 0 | 0 | 0 | 1 | 1 |
| Inspecciones | 1 | 2 | 4 | 2 | 3 | 0 | 2 | 1 | 1 |

> La matriz completa y definitiva debe mantenerse en `06_MODULE_PROFILE_ACCESS_MATRIX.md`.

---

## 11. Matriz de dashboards por perfil

| Perfil | Dashboard | Métricas principales |
|---|---|---|
| Cliente final | Dashboard cliente | Cotizaciones activas, órdenes en curso, documentos pendientes, pagos, servicios recientes |
| Tienda logística | Dashboard tienda | Solicitudes recibidas, servicios publicados, órdenes asignadas, pagos, comisiones, rating |
| Superadministrador | Panel global | Usuarios, tiendas, servicios, cotizaciones, órdenes, pagos, comisiones, reportes, auditoría |
| Operador interno | Dashboard operativo | Órdenes activas, documentos pendientes, estados críticos, tareas operativas |
| Inspector | Dashboard inspector | Inspecciones asignadas, pendientes, cerradas, evidencias, resultados |
| Transportista | Dashboard transporte | Viajes activos, órdenes de transporte, vehículos, conductores, entregas |
| Agente aduanal | Dashboard aduanal | Expedientes, documentos, cotizaciones aduanales, órdenes, estados aduaneros |
| Auditor | Dashboard auditoría | Logs críticos, reportes, cambios de estado, pagos, documentos sensibles |
| Soporte técnico | Dashboard soporte | Tickets abiertos, tickets vencidos, incidencias, usuarios asistidos, SLA |

---

## 12. Matriz de reportes por perfil

| Reporte | Cliente | Tienda | Superadmin | Operador | Inspector | Transportista | Agente aduanal | Auditor | Soporte |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mis cotizaciones | Sí | No | Sí | Consulta | No | No | No | Consulta | Consulta |
| Mis órdenes | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta |
| Pagos | Sí | Sí | Sí | Consulta | No | Consulta | Consulta | Consulta | No |
| Comisiones | No | Sí | Sí | No | No | Sí | Sí | Consulta | No |
| Documentos | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta |
| Auditoría | No | Limitado | Sí | Limitado | Limitado | Limitado | Limitado | Sí | Limitado |
| Servicios | Consulta | Sí | Sí | Consulta | Consulta | Consulta | Consulta | Consulta | Consulta |
| Tiendas | Consulta | Propia | Sí | Consulta | No | Propia | Propia | Consulta | Consulta |
| Soporte | Propio | Propio | Sí | Consulta | Propio | Propio | Propio | Consulta | Sí |

---

## 13. Matriz de rutas principales por perfil

| Perfil | Rutas principales sugeridas |
|---|---|
| Cliente final | `/`, `/search`, `/stores/:id`, `/services/:id`, `/dashboard/client`, `/client/quotations`, `/client/orders`, `/client/documents`, `/client/payments` |
| Tienda logística | `/dashboard/store`, `/store/profile`, `/store/services`, `/store/quotations`, `/store/orders`, `/store/documents`, `/store/payments`, `/store/commissions` |
| Superadministrador | `/admin`, `/admin/users`, `/admin/roles`, `/admin/stores`, `/admin/services`, `/admin/catalogs`, `/admin/orders`, `/admin/payments`, `/admin/reports`, `/admin/audit` |
| Operador interno | `/operator`, `/operator/orders`, `/operator/documents`, `/operator/tos`, `/operator/reports` |
| Inspector | `/inspector`, `/inspector/inspections`, `/inspector/evidences`, `/inspector/reports` |
| Transportista | `/carrier`, `/carrier/trips`, `/carrier/vehicles`, `/carrier/drivers`, `/carrier/orders`, `/carrier/reports` |
| Agente aduanal | `/customs-agent`, `/customs-agent/orders`, `/customs-agent/documents`, `/customs-agent/statuses`, `/customs-agent/reports` |
| Auditor | `/auditor`, `/auditor/logs`, `/auditor/reports`, `/auditor/orders`, `/auditor/payments`, `/auditor/documents` |
| Soporte técnico | `/support`, `/support/tickets`, `/support/users`, `/support/incidents`, `/support/reports` |

---

## 14. Tablas MySQL recomendadas para perfiles

### 14.1 Tabla `user_profiles`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `profile_code` | VARCHAR(50) | Código único del perfil |
| `profile_name` | VARCHAR(120) | Nombre del perfil |
| `profile_type` | VARCHAR(80) | Tipo funcional |
| `description` | TEXT | Descripción del perfil |
| `default_dashboard_route` | VARCHAR(200) | Ruta del dashboard principal |
| `mvp_participation` | VARCHAR(50) | Completa, parcial o fase posterior |
| `odoo_reference_models` | TEXT | Modelos Odoo referenciales |
| `status` | VARCHAR(30) | Estado del perfil |
| `created_at` | DATETIME | Fecha de creación |
| `updated_at` | DATETIME | Fecha de actualización |

### 14.2 Tabla `profile_modules`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `profile_id` | BIGINT | Relación con perfil |
| `module_code` | VARCHAR(50) | Código del módulo |
| `module_name` | VARCHAR(120) | Nombre del módulo |
| `access_level` | INT | Nivel de acceso 0 a 4 |
| `visible_in_menu` | BOOLEAN | Indica si aparece en menú |
| `status` | VARCHAR(30) | Estado |

### 14.3 Tabla `profile_menu_items`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `profile_id` | BIGINT | Relación con perfil |
| `menu_code` | VARCHAR(50) | Código del menú |
| `menu_label` | VARCHAR(120) | Texto visible |
| `route` | VARCHAR(200) | Ruta frontend |
| `icon_name` | VARCHAR(80) | Nombre de ícono interno |
| `sequence` | INT | Orden en menú |
| `required_permission` | VARCHAR(100) | Permiso requerido |
| `status` | VARCHAR(30) | Estado |

### 14.4 Tabla `profile_reports`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `profile_id` | BIGINT | Relación con perfil |
| `report_code` | VARCHAR(50) | Código del reporte |
| `report_name` | VARCHAR(150) | Nombre del reporte |
| `can_export_pdf` | BOOLEAN | Puede exportar PDF |
| `can_export_excel` | BOOLEAN | Puede exportar Excel |
| `status` | VARCHAR(30) | Estado |

### 14.5 Tabla `profile_audit_events`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `profile_id` | BIGINT | Relación con perfil |
| `event_code` | VARCHAR(50) | Código del evento |
| `event_name` | VARCHAR(150) | Nombre del evento |
| `module_name` | VARCHAR(120) | Módulo relacionado |
| `criticality` | VARCHAR(30) | Baja, media, alta o crítica |
| `track_old_value` | BOOLEAN | Registra valor anterior |
| `track_new_value` | BOOLEAN | Registra valor nuevo |
| `status` | VARCHAR(30) | Estado |

---

## 15. Seeds iniciales sugeridos

```json
[
  {
    "profile_code": "PROF-CLI-001",
    "profile_name": "Cliente final",
    "profile_type": "Usuario demandante",
    "default_dashboard_route": "/dashboard/client",
    "mvp_participation": "Completa",
    "status": "active"
  },
  {
    "profile_code": "PROF-TIE-002",
    "profile_name": "Tienda logística",
    "profile_type": "Proveedor marketplace",
    "default_dashboard_route": "/dashboard/store",
    "mvp_participation": "Completa",
    "status": "active"
  },
  {
    "profile_code": "PROF-SUP-003",
    "profile_name": "Superadministrador",
    "profile_type": "Administrador global",
    "default_dashboard_route": "/admin",
    "mvp_participation": "Completa",
    "status": "active"
  },
  {
    "profile_code": "PROF-OPE-004",
    "profile_name": "Operador interno",
    "profile_type": "Operación interna",
    "default_dashboard_route": "/operator",
    "mvp_participation": "Parcial",
    "status": "active"
  },
  {
    "profile_code": "PROF-INS-005",
    "profile_name": "Inspector",
    "profile_type": "Proveedor especializado",
    "default_dashboard_route": "/inspector",
    "mvp_participation": "Parcial",
    "status": "active"
  },
  {
    "profile_code": "PROF-TRA-006",
    "profile_name": "Transportista",
    "profile_type": "Proveedor especializado",
    "default_dashboard_route": "/carrier",
    "mvp_participation": "Parcial",
    "status": "active"
  },
  {
    "profile_code": "PROF-ADU-007",
    "profile_name": "Agente aduanal",
    "profile_type": "Proveedor especializado",
    "default_dashboard_route": "/customs-agent",
    "mvp_participation": "Parcial",
    "status": "active"
  },
  {
    "profile_code": "PROF-AUD-008",
    "profile_name": "Auditor",
    "profile_type": "Control y cumplimiento",
    "default_dashboard_route": "/auditor",
    "mvp_participation": "Parcial",
    "status": "active"
  },
  {
    "profile_code": "PROF-SOP-009",
    "profile_name": "Soporte técnico",
    "profile_type": "Soporte funcional/técnico",
    "default_dashboard_route": "/support",
    "mvp_participation": "Fase posterior",
    "status": "active"
  }
]
```

---

## 16. Reglas de negocio generales para perfiles

1. Todo usuario debe tener al menos un perfil o rol asociado.
2. Un usuario puede tener más de un rol si el negocio lo permite, pero debe tener un perfil principal.
3. El perfil principal define el dashboard inicial.
4. Los permisos deben validarse en frontend y backend.
5. Los menús visibles dependen del perfil y de los permisos asignados.
6. El superadministrador no debe compartir credenciales con otros usuarios.
7. Las acciones críticas de perfiles administrativos deben auditarse.
8. Los perfiles de proveedor no deben ver información privada de otros proveedores.
9. Los clientes no deben ver operaciones de otros clientes.
10. Los auditores no deben modificar operaciones.
11. Soporte técnico no debe modificar pagos ni comisiones sin permiso especial.
12. Los perfiles parciales del MVP pueden ampliarse en fases posteriores.

---

## 17. Tareas técnicas sugeridas para Antigravity

### 17.1 Backend Nest.js

1. Crear entidad `UserProfile`.
2. Crear módulo `ProfilesModule` si se separa de usuarios.
3. Crear endpoints para listar perfiles.
4. Crear endpoints para consultar detalle de perfil.
5. Crear endpoints para activar/inactivar perfil.
6. Crear relación usuario-perfil.
7. Crear relación perfil-módulos.
8. Crear relación perfil-menús.
9. Crear relación perfil-reportes.
10. Crear auditoría de cambios de perfil.

### 17.2 Frontend React.js

1. Crear componente `ProfileBadge`.
2. Crear componente `ProfileSelector` si un usuario tiene más de un perfil.
3. Crear `DashboardRouterByProfile`.
4. Crear menús dinámicos por perfil.
5. Crear vista administrativa de perfiles.
6. Crear matriz de acceso resumida.
7. Crear filtros por perfil en panel admin.

### 17.3 Base de datos MySQL

1. Crear tabla `user_profiles`.
2. Crear tabla `profile_modules`.
3. Crear tabla `profile_menu_items`.
4. Crear tabla `profile_reports`.
5. Crear tabla `profile_audit_events`.
6. Crear relación `users.profile_id` o tabla `user_profile_assignments`.
7. Crear seeds iniciales de perfiles.

### 17.4 QA

1. Validar que cada perfil tenga código único.
2. Validar que cada perfil tenga dashboard principal.
3. Validar que cada perfil tenga menú consistente.
4. Validar que perfiles sin acceso no vean rutas protegidas.
5. Validar que backend bloquee acciones no autorizadas.
6. Validar auditoría de cambios críticos.

---

## 18. Criterios de aceptación del documento

Este documento se considera completo cuando:

1. Define todos los perfiles principales.
2. Relaciona perfiles con actores del ecosistema.
3. Define participación MVP por perfil.
4. Define módulos visibles por perfil.
5. Define acciones permitidas por perfil.
6. Define restricciones por perfil.
7. Define dashboard principal por perfil.
8. Define menú sugerido por perfil.
9. Define eventos auditables por perfil.
10. Define reportes por perfil.
11. Define rutas principales por perfil.
12. Incluye tablas MySQL recomendadas.
13. Incluye seeds iniciales.
14. Incluye reglas de negocio.
15. Incluye tareas técnicas para Antigravity.

---

## 19. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, analista funcional, experto en RBAC, desarrollador full stack senior y QA técnico.

Usa el documento `05_USER_PROFILES.md` como fuente principal para modelar los perfiles de usuario del Marketplace Logístico TOS.

Objetivo:
Convertir los perfiles definidos en este documento en estructura funcional, base de datos, rutas protegidas, menús dinámicos, dashboards, permisos y seeds iniciales usando React.js, Nest.js y MySQL.

Reglas:
1. Respetar el alcance MVP definido en `02_MVP_SCOPE.md`.
2. Usar los actores definidos en `04_ECOSYSTEM_ACTORS_MATRIX.md`.
3. No integrar directamente con Odoo; usar modelos Odoo solo como referencia conceptual.
4. Implementar permisos en frontend y backend.
5. Crear auditoría para cambios críticos de perfil, rol y permiso.
6. Crear dashboards por perfil.
7. Crear menús dinámicos por perfil.
8. Crear seeds iniciales para los perfiles mínimos.
9. No permitir acceso a rutas privadas sin autenticación.
10. No permitir acciones no autorizadas aunque el usuario manipule el frontend.

Entregables esperados:
1. Tablas MySQL para perfiles.
2. Seeds iniciales de perfiles.
3. Endpoints para consultar perfiles.
4. Relación usuario-perfil.
5. Menús dinámicos por perfil.
6. Rutas protegidas por perfil.
7. Dashboard inicial por perfil.
8. Pruebas de acceso por perfil.
9. Documentación técnica actualizada.

Antes de implementar, valida si los perfiles se manejarán como entidad independiente, como catálogo maestro o como parte del módulo de usuarios y roles.
```

---

## 20. Checklist de uso en Antigravity

- [ ] Guardar este documento como `05_USER_PROFILES.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `01_PRODUCT_VISION.md`.
- [ ] Validar consistencia con `02_MVP_SCOPE.md`.
- [ ] Validar consistencia con `04_ECOSYSTEM_ACTORS_MATRIX.md`.
- [ ] Usarlo como base para `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Crear seeds iniciales de perfiles.
- [ ] Confirmar dashboards por perfil.
- [ ] Confirmar menús por perfil.
- [ ] Confirmar rutas protegidas por perfil.
- [ ] Confirmar eventos auditables por perfil.
- [ ] Confirmar reglas RBAC.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 21. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

