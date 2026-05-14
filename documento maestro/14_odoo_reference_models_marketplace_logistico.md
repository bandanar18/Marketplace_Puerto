# 14_ODOO_REFERENCE_MODELS.md

# Documento Maestro de Modelos Referenciales Odoo
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `14_ODOO_REFERENCE_MODELS.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base del marketplace | React.js, Nest.js, MySQL |
| ERP usado como referencia conceptual | Odoo |
| Tipo de documento | Documento maestro referencial de modelos de datos |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md` |

---

## 2. Propósito del documento

Este documento define el uso de **modelos de datos de Odoo como referencia conceptual** para diseñar el Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es orientar a Antigravity en la construcción de modelos propios en MySQL, entidades Nest.js y componentes funcionales del marketplace usando como inspiración la estructura conceptual de Odoo, sin crear dependencia técnica, integración directa ni acoplamiento con Odoo.

Este documento sirve para:

1. Identificar modelos Odoo relevantes.
2. Mapear modelos Odoo con entidades propias del marketplace.
3. Entender campos conceptuales útiles.
4. Diseñar tablas MySQL propias.
5. Diseñar entidades Nest.js propias.
6. Evitar duplicar innecesariamente todo el ERP.
7. Evitar integraciones prematuras.
8. Mantener independencia tecnológica.
9. Preparar una arquitectura futura integrable si se decide conectar con ERP.
10. Usar buenas prácticas de ERP sin depender del ERP.

---

## 3. Regla principal de uso

Odoo se utiliza **solo como referencia conceptual**.

En el MVP del Marketplace Logístico TOS:

1. No se instala Odoo.
2. No se integra con Odoo.
3. No se consume API de Odoo.
4. No se replica toda la base de datos Odoo.
5. No se usan módulos Odoo como dependencia.
6. No se sincronizan registros con Odoo.
7. No se usa autenticación de Odoo.
8. No se usa contabilidad real de Odoo.
9. No se usa inventario real de Odoo.
10. No se usa facturación real de Odoo.

La plataforma debe tener sus propias tablas MySQL, sus propios endpoints Nest.js y sus propios componentes React.js.

---

## 4. Objetivo general

Crear una guía de referencia entre los modelos funcionales de Odoo y los modelos propios del Marketplace Logístico TOS, para aprovechar conceptos maduros de ERP en usuarios, contactos, productos, servicios, cotizaciones, órdenes, documentos, pagos, inventario, flota, inspecciones, proyectos, auditoría y mensajería, sin generar dependencia técnica con Odoo.

---

## 5. Objetivos específicos

1. Listar modelos Odoo útiles como referencia.
2. Clasificar modelos Odoo por dominio funcional.
3. Mapear modelos Odoo con tablas propias MySQL.
4. Mapear modelos Odoo con módulos funcionales del marketplace.
5. Mapear modelos Odoo con endpoints Nest.js propios.
6. Mapear modelos Odoo con componentes React.js propios.
7. Definir campos conceptuales aprovechables.
8. Definir qué conceptos deben simplificarse para el MVP.
9. Definir qué conceptos deben diferirse para fases futuras.
10. Definir restricciones de uso para Antigravity.
11. Definir criterios de aceptación.
12. Servir como fuente de consulta para arquitectura y base de datos.

---

## 6. Principios de referencia Odoo

Antigravity debe respetar los siguientes principios:

1. Usar Odoo solo como inspiración funcional.
2. Traducir conceptos ERP a modelos propios del marketplace.
3. No copiar tablas Odoo literalmente.
4. No copiar todos los campos Odoo.
5. No crear relaciones innecesariamente complejas.
6. Simplificar el modelo para el MVP.
7. Priorizar el flujo marketplace: buscar, cotizar, ordenar, documentar, pagar y auditar.
8. Mantener independencia de base de datos.
9. Mantener nombres propios del proyecto.
10. Diseñar posibilidad futura de integración sin implementarla ahora.

---

## 7. Clasificación de modelos Odoo por dominio

| Dominio | Modelos Odoo referenciales | Uso conceptual |
|---|---|---|
| Usuarios y seguridad | `res.users`, `res.groups`, `ir.model.access`, `ir.rule` | Usuarios, roles, permisos, reglas de acceso |
| Contactos y empresas | `res.partner`, `res.company` | Clientes, proveedores, tiendas, actores |
| Productos y servicios | `product.template`, `product.product`, `product.category`, `uom.uom` | Fichas de servicios, categorías, unidades |
| Ventas y cotizaciones | `sale.order`, `sale.order.line` | Cotizaciones, órdenes comerciales |
| Compras | `purchase.order`, `purchase.order.line` | Compras futuras o contratación B2B inversa |
| Documentos y adjuntos | `ir.attachment`, `documents.document` | Documentos, evidencias, archivos |
| Contabilidad y pagos | `account.move`, `account.payment`, `account.journal`, `account.move.line` | Pagos, comprobantes, estados financieros |
| Inventario y almacén | `stock.location`, `stock.quant`, `stock.picking`, `stock.move` | Almacenamiento, movimientos, inventario |
| Flota y transporte | `fleet.vehicle`, `fleet.vehicle.model`, `fleet.driver` conceptual | Vehículos, conductores, transporte |
| Proyecto y tareas | `project.project`, `project.task` | Órdenes, tareas operativas, seguimiento |
| Calidad e inspecciones | `quality.check`, `quality.point` | Inspecciones, checklists, resultados |
| Mensajería y auditoría | `mail.message`, `mail.thread`, `mail.activity` | Historial, auditoría, actividades |
| Reportes | `ir.actions.report` | Exportaciones PDF, reportes |
| Configuración | `ir.config_parameter`, `ir.sequence` | Parámetros y secuencias |

---

# 8. Modelos Odoo de seguridad e identidad

---

## 8.1 `res.users`

### Descripción Odoo

Modelo conceptual de usuarios internos del sistema.

### Uso conceptual en el marketplace

Sirve como referencia para diseñar usuarios autenticados del marketplace.

### Tabla propia sugerida

`users`

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido | Descripción |
|---|---|---|
| Usuario | `id`, `uuid` | Identificador interno y público |
| Login/email | `email` | Correo de acceso |
| Nombre | `first_name`, `last_name` | Nombre del usuario |
| Estado activo | `status` | active, inactive, blocked, pending |
| Grupos | `user_roles` | Roles asignados |
| Empresa relacionada | `store_users` | Tienda asociada si aplica |

### No usar en MVP

1. Preferencias avanzadas de Odoo.
2. Multiempresa completa de Odoo.
3. Menús técnicos de Odoo.
4. Reglas de acceso internas de Odoo.

---

## 8.2 `res.groups`

### Descripción Odoo

Modelo conceptual para grupos de usuarios y permisos.

### Uso conceptual en el marketplace

Sirve como referencia para roles funcionales.

### Tabla propia sugerida

`roles`

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido |
|---|---|
| Grupo | `role_name` |
| Código de grupo | `role_code` |
| Usuarios del grupo | `user_roles` |
| Permisos asociados | `role_permissions` |

### Ejemplos propios

1. `ROLE-CLIENT`.
2. `ROLE-STORE-OWNER`.
3. `ROLE-SUPERADMIN`.
4. `ROLE-OPERATOR`.
5. `ROLE-AUDITOR`.

---

## 8.3 `ir.model.access`

### Descripción Odoo

Modelo conceptual para permisos CRUD sobre modelos.

### Uso conceptual en el marketplace

Sirve como referencia para permisos explícitos por módulo.

### Tablas propias sugeridas

1. `permissions`.
2. `role_permissions`.
3. `profile_module_access`.

### Ejemplos propios

1. `users.view`.
2. `stores.approve`.
3. `services.publish`.
4. `quotations.respond`.
5. `orders.close`.
6. `payments.confirm`.
7. `audit.view`.

---

## 8.4 `ir.rule`

### Descripción Odoo

Modelo conceptual para reglas de acceso por dominio o filtro.

### Uso conceptual en el marketplace

Sirve como referencia para scopes de datos.

### Scopes propios sugeridos

| Scope propio | Descripción |
|---|---|
| `own` | Registros propios del usuario |
| `store` | Registros de la tienda asociada |
| `assigned` | Registros asignados al usuario |
| `module` | Registros del módulo autorizado |
| `global` | Registros globales |

---

# 9. Modelos Odoo de contactos, empresas y actores

---

## 9.1 `res.partner`

### Descripción Odoo

Modelo central para contactos, clientes, proveedores y direcciones.

### Uso conceptual en el marketplace

Referencia para:

1. Clientes.
2. Importadores.
3. Exportadores.
4. Tiendas logísticas.
5. Transportistas.
6. Agentes aduanales.
7. Almacenes.
8. Inspectores.
9. Aseguradoras.
10. Bancos.
11. Autoridades referenciales.

### Tablas propias sugeridas

1. `users`.
2. `stores`.
3. `ecosystem_actors`.
4. `store_users`.

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido | Aplicación |
|---|---|---|
| Nombre | `store_name`, `actor_name`, `first_name` | Tiendas, actores, usuarios |
| Nombre legal | `legal_name` | Tiendas |
| Email | `email` | Usuarios y tiendas |
| Teléfono | `phone` | Usuarios y tiendas |
| Dirección | `address` | Tiendas y almacenes |
| Tipo contacto | `actor_type`, `store_type_code` | Clasificación |
| Imagen | `logo_url`, `cover_image_url` | Perfil público |

### Simplificación MVP

No crear una tabla genérica única tipo `partners` para todo. En el MVP es más claro separar:

1. `users` para usuarios.
2. `stores` para proveedores del marketplace.
3. `ecosystem_actors` para actores conceptuales.

---

## 9.2 `res.company`

### Descripción Odoo

Modelo conceptual para compañías o entidades empresariales.

### Uso conceptual en el marketplace

Referencia para tiendas logísticas o empresas proveedoras.

### Tabla propia sugerida

`stores`

### Campos conceptuales aprovechables

1. Nombre comercial.
2. Razón social.
3. Identificación fiscal.
4. Dirección.
5. Contacto.
6. Estado.
7. Logo.
8. Moneda.

### No usar en MVP

1. Multiempresa avanzada.
2. Consolidación contable.
3. Configuración fiscal compleja.

---

# 10. Modelos Odoo de productos y servicios

---

## 10.1 `product.template`

### Descripción Odoo

Modelo conceptual de producto o servicio base.

### Uso conceptual en el marketplace

Referencia principal para la ficha de servicio logístico.

### Tabla propia sugerida

`services`

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido | Descripción |
|---|---|---|
| Nombre producto | `service_name` | Nombre del servicio |
| Tipo producto | `service_type` conceptual | Servicio logístico |
| Categoría | `category_id` | Categoría logística |
| Precio venta | `base_price` | Tarifa base |
| Unidad | `unit_measure` | Unidad de medida |
| Descripción | `description` | Descripción comercial |
| Activo | `publication_status` | Publicado, pausado, inactivo |

### Ejemplo propio

| Campo | Ejemplo |
|---|---|
| `service_code` | `SER-ADU-001` |
| `service_name` | `Customs Clearance Basic Service` |
| `category_id` | Aduana |
| `base_price` | 450.00 |
| `unit_measure` | service |
| `sla_hours` | 48 |

---

## 10.2 `product.product`

### Descripción Odoo

Modelo conceptual de variante específica de producto.

### Uso conceptual en el marketplace

Puede inspirar variantes de servicios en fases futuras.

### Posible uso futuro

1. Servicio básico.
2. Servicio express.
3. Servicio por tipo de contenedor.
4. Servicio por puerto.
5. Servicio por terminal.
6. Servicio por tipo de carga.

### Tabla propia futura sugerida

`service_variants`

### MVP

No es obligatorio crear variantes en el MVP. Puede resolverse con `service_pricing` y filtros.

---

## 10.3 `product.category`

### Descripción Odoo

Modelo conceptual de categorías de productos.

### Uso conceptual en el marketplace

Referencia para categorías de servicios logísticos.

### Tabla propia sugerida

`service_categories`

### Categorías propias mínimas

1. Aduana.
2. Transporte.
3. Puerto.
4. Terminal.
5. Almacenamiento.
6. Inspección.
7. Seguros.
8. Pagos.
9. Documentación.
10. Tecnología.

---

## 10.4 `uom.uom`

### Descripción Odoo

Modelo conceptual para unidades de medida.

### Uso conceptual en el marketplace

Referencia para unidades tarifarias.

### Catálogo propio sugerido

`master_catalog_items` dentro de `UNIT_MEASURES`.

### Unidades sugeridas

1. `service`.
2. `container`.
3. `shipment`.
4. `document`.
5. `hour`.
6. `day`.
7. `ton`.
8. `kg`.
9. `cbm`.
10. `trip`.

---

# 11. Modelos Odoo de ventas, cotizaciones y órdenes

---

## 11.1 `sale.order`

### Descripción Odoo

Modelo conceptual usado para cotizaciones y pedidos de venta.

### Uso conceptual en el marketplace

Referencia para:

1. Cotizaciones.
2. Órdenes de servicio.
3. Estados comerciales.
4. Totales financieros.
5. Cliente.
6. Proveedor.
7. Líneas de servicio.

### Tablas propias sugeridas

1. `quotations`.
2. `orders`.

### Diferencia clave en el marketplace

En Odoo, `sale.order` puede representar cotización y orden confirmada en el mismo modelo. En el marketplace se recomienda separar:

1. `quotations` para solicitudes y respuestas.
2. `orders` para ejecución del servicio aprobado.

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido |
|---|---|
| Cliente | `customer_id` |
| Fecha | `created_at`, `requested_date` |
| Estado | `status`, `operational_status` |
| Total | `total_amount` |
| Moneda | `currency_code` |
| Líneas | `quotation_lines`, `order_lines` |
| Observaciones | `customer_notes`, `provider_notes` |

---

## 11.2 `sale.order.line`

### Descripción Odoo

Modelo conceptual para líneas de cotización o pedido.

### Uso conceptual en el marketplace

Referencia para líneas de cotización y orden.

### Tablas propias sugeridas

1. `quotation_lines`.
2. `order_lines`.

### Campos conceptuales aprovechables

1. Servicio.
2. Descripción.
3. Cantidad.
4. Unidad.
5. Precio unitario.
6. Subtotal.
7. Estado.

---

# 12. Modelos Odoo de compras

---

## 12.1 `purchase.order`

### Descripción Odoo

Modelo conceptual para órdenes de compra.

### Uso conceptual futuro

Puede servir para fases futuras donde el marketplace compre o subcontrate servicios logísticos a proveedores.

### Uso en MVP

No requerido.

### Posibles tablas futuras

1. `purchase_requests`.
2. `provider_purchase_orders`.
3. `supplier_settlements`.

### Regla

No desarrollar compras en el MVP salvo que el alcance cambie explícitamente.

---

# 13. Modelos Odoo de documentos y adjuntos

---

## 13.1 `ir.attachment`

### Descripción Odoo

Modelo conceptual para archivos adjuntos vinculados a cualquier entidad.

### Uso conceptual en el marketplace

Referencia principal para documentos y evidencias.

### Tablas propias sugeridas

1. `documents`.
2. `document_versions`.
3. `document_validations`.
4. `evidences`.

### Campos conceptuales aprovechables

| Concepto Odoo | Campo propio sugerido |
|---|---|
| Nombre de archivo | `original_filename` |
| Archivo almacenado | `stored_filename` |
| Tipo MIME | `mime_type` |
| Tamaño | `file_size_bytes` |
| Modelo relacionado | `entity_type` |
| ID relacionado | `entity_id` |
| Usuario que sube | `uploaded_by` |

### Diferencia clave

En el marketplace se debe agregar:

1. Estado de validación.
2. Versionamiento documental.
3. Motivo de rechazo.
4. Tipo documental.
5. Evidencia operativa.
6. Auditoría explícita.

---

## 13.2 `documents.document`

### Descripción Odoo

Modelo conceptual del módulo de documentos de Odoo.

### Uso conceptual

Referencia para gestión documental más organizada.

### Uso MVP

Implementar solo lo necesario:

1. Carga.
2. Metadata.
3. Validación.
4. Rechazo.
5. Versionamiento.
6. Descarga controlada.

No implementar gestor documental avanzado en MVP.

---

# 14. Modelos Odoo contables y pagos

---

## 14.1 `account.payment`

### Descripción Odoo

Modelo conceptual para pagos recibidos o enviados.

### Uso conceptual en el marketplace

Referencia para pagos manuales o referenciales.

### Tabla propia sugerida

`payments`

### Campos conceptuales aprovechables

1. Monto.
2. Moneda.
3. Método de pago.
4. Fecha de pago.
5. Referencia.
6. Estado.
7. Orden relacionada.
8. Comprobante.

### Regla MVP

El marketplace MVP no ejecuta contabilidad real. Solo registra pagos referenciales o comprobantes.

---

## 14.2 `account.move`

### Descripción Odoo

Modelo conceptual para asientos contables, facturas y documentos contables.

### Uso conceptual futuro

Referencia para facturación y contabilidad futura.

### Uso MVP

No desarrollar contabilidad completa ni facturación fiscal automática.

### Posibles tablas futuras

1. `invoices`.
2. `invoice_lines`.
3. `accounting_entries`.
4. `settlements`.

---

## 14.3 `account.move.line`

### Descripción Odoo

Modelo conceptual para líneas contables.

### Uso conceptual en marketplace

Referencia para desglose financiero futuro.

### Uso propio actual

Puede inspirar:

1. `commission_logs`.
2. `payment_receipts`.
3. `order_lines`.
4. `financial_breakdowns` futuro.

---

## 14.4 `account.journal`

### Descripción Odoo

Modelo conceptual de diarios contables o métodos de registro financiero.

### Uso conceptual en marketplace

Referencia para métodos de pago.

### Tabla propia sugerida

`payment_methods`

### Ejemplos propios

1. Transferencia bancaria.
2. Pago manual.
3. Comprobante externo.
4. Pasarela futura.

---

# 15. Modelos Odoo de inventario y almacenamiento

---

## 15.1 `stock.location`

### Descripción Odoo

Modelo conceptual para ubicaciones de inventario.

### Uso conceptual en marketplace

Referencia para:

1. Patios TOS.
2. Almacenes.
3. Ubicaciones internas.
4. Terminales.
5. Zonas de carga.

### Tablas propias sugeridas

1. `tos_yards`.
2. `warehouses`.
3. `storage_locations`.

---

## 15.2 `stock.quant`

### Descripción Odoo

Modelo conceptual para existencias por ubicación.

### Uso conceptual en marketplace

Referencia para inventario básico en almacenamiento.

### Tabla propia sugerida

`inventory_items`

### Simplificación MVP

No implementar inventario complejo con valorización. Solo registrar:

1. Mercancía.
2. Cantidad.
3. Unidad.
4. Ubicación.
5. Estado.
6. Fechas de ingreso y despacho.

---

## 15.3 `stock.picking`

### Descripción Odoo

Modelo conceptual para transferencias, recepciones y entregas.

### Uso conceptual en marketplace

Referencia para:

1. Recepción en almacén.
2. Despacho.
3. Movimientos logísticos.
4. Entrega.

### Tablas propias sugeridas

1. `dispatches`.
2. `storage_movements`.
3. `trips`.
4. `order_events`.

---

## 15.4 `stock.move`

### Descripción Odoo

Modelo conceptual para movimiento de inventario.

### Uso conceptual en marketplace

Referencia para movimientos de almacenamiento y TOS.

### Tablas propias sugeridas

1. `storage_movements`.
2. `tos_moves`.
3. `trip_events`.

---

# 16. Modelos Odoo de transporte y flota

---

## 16.1 `fleet.vehicle`

### Descripción Odoo

Modelo conceptual para vehículos.

### Uso conceptual en marketplace

Referencia para transporte terrestre.

### Tabla propia sugerida

`vehicles`

### Campos conceptuales aprovechables

1. Placa.
2. Tipo de vehículo.
3. Capacidad.
4. Estado.
5. Propietario o tienda.

---

## 16.2 `fleet.vehicle.model`

### Descripción Odoo

Modelo conceptual para modelos de vehículos.

### Uso MVP

No se requiere tabla avanzada de modelos de vehículos. Se puede usar catálogo `VEHICLE_TYPES`.

---

## 16.3 Conductores en Odoo

Odoo puede representar conductores como contactos relacionados.

### Uso propio sugerido

Tabla `drivers`.

### Campos propios

1. Nombre.
2. Teléfono.
3. Licencia.
4. Tienda transportista.
5. Estado.

---

# 17. Modelos Odoo de proyectos y tareas

---

## 17.1 `project.project`

### Descripción Odoo

Modelo conceptual para proyectos.

### Uso conceptual en marketplace

Puede inspirar grupos de trabajo o proyectos logísticos complejos.

### Uso MVP

No se requiere tabla de proyectos separada. La entidad principal es `orders`.

---

## 17.2 `project.task`

### Descripción Odoo

Modelo conceptual para tareas operativas.

### Uso conceptual en marketplace

Referencia directa para tareas de órdenes.

### Tabla propia sugerida

`order_tasks`

### Campos conceptuales aprovechables

1. Nombre tarea.
2. Responsable.
3. Fecha límite.
4. Estado.
5. Orden relacionada.
6. Fecha de cierre.

---

# 18. Modelos Odoo de calidad e inspecciones

---

## 18.1 `quality.check`

### Descripción Odoo

Modelo conceptual para controles de calidad o inspecciones.

### Uso conceptual en marketplace

Referencia para inspecciones físicas, documentales y operativas.

### Tablas propias sugeridas

1. `inspections`.
2. `inspection_checklists`.
3. `inspection_results`.
4. `inspection_evidences`.

### Campos conceptuales aprovechables

1. Tipo de control.
2. Resultado.
3. Responsable.
4. Fecha.
5. Evidencias.
6. Observaciones.

---

## 18.2 `quality.point`

### Descripción Odoo

Modelo conceptual para puntos o criterios de calidad.

### Uso conceptual en marketplace

Referencia para checklists de inspección.

### Tabla propia sugerida

`inspection_checklists`

### Simplificación MVP

Los checklists pueden ser simples ítems asociados a una inspección. No se requiere motor avanzado de calidad.

---

# 19. Modelos Odoo de mensajería, actividades y auditoría

---

## 19.1 `mail.message`

### Descripción Odoo

Modelo conceptual para mensajes, historial y chatter.

### Uso conceptual en marketplace

Referencia para auditoría y timeline de eventos.

### Tablas propias sugeridas

1. `audit_logs`.
2. `order_events`.
3. `quotation_status_history`.
4. `support_ticket_messages`.

### Diferencia clave

El marketplace debe separar:

1. Auditoría técnica y funcional en `audit_logs`.
2. Eventos operativos en `order_events`.
3. Mensajes de soporte en `support_ticket_messages`.

---

## 19.2 `mail.thread`

### Descripción Odoo

Mixin conceptual para entidades con historial de conversación.

### Uso conceptual

Referencia para entidades que necesitan historial:

1. Tiendas.
2. Servicios.
3. Cotizaciones.
4. Órdenes.
5. Documentos.
6. Pagos.
7. Inspecciones.
8. Tickets.

### Implementación propia

Usar `audit_logs` y tablas de eventos por dominio.

---

## 19.3 `mail.activity`

### Descripción Odoo

Modelo conceptual para actividades pendientes.

### Uso conceptual en marketplace

Referencia para tareas, notificaciones y pendientes.

### Tablas propias sugeridas

1. `notifications`.
2. `order_tasks`.
3. `support_tickets`.
4. `inspection_checklists`.

---

# 20. Modelos Odoo de reportes y configuración

---

## 20.1 `ir.actions.report`

### Descripción Odoo

Modelo conceptual para definición de reportes.

### Uso conceptual en marketplace

Referencia para exportaciones PDF/Excel.

### Tablas propias sugeridas

1. `reports`.
2. `report_templates`.
3. `report_exports`.

### Reportes propios MVP

1. Reporte de cotizaciones.
2. Reporte de órdenes.
3. Reporte de pagos.
4. Reporte de comisiones.
5. Reporte de auditoría.
6. Reporte de tiendas.
7. Reporte de servicios.

---

## 20.2 `ir.config_parameter`

### Descripción Odoo

Modelo conceptual para parámetros globales.

### Uso conceptual en marketplace

Referencia para configuración global.

### Tabla propia sugerida

`global_settings`

### Ejemplos propios

1. Moneda base.
2. Tamaño máximo de archivo.
3. Comisión general por defecto.
4. Nombre del marketplace.
5. Estado de mantenimiento.

---

## 20.3 `ir.sequence`

### Descripción Odoo

Modelo conceptual para secuencias automáticas.

### Uso conceptual en marketplace

Referencia para códigos internos.

### Posibles códigos propios

1. `USR-000001`.
2. `STO-000001`.
3. `SER-000001`.
4. `COT-000001`.
5. `ORD-000001`.
6. `DOC-000001`.
7. `PAY-000001`.
8. `COM-000001`.
9. `INS-000001`.
10. `TCK-000001`.

### Implementación sugerida

Crear servicio interno de generación de códigos en Nest.js. No es obligatorio crear tabla de secuencias en MVP, pero puede hacerse si se desea control centralizado.

---

# 21. Matriz general de equivalencia Odoo vs Marketplace

| Dominio marketplace | Modelo propio | Modelo Odoo referencial | Uso en MVP |
|---|---|---|---|
| Usuario | `users` | `res.users` | Sí |
| Perfil | `user_profiles` | Conceptual sobre grupos/usuarios | Sí |
| Rol | `roles` | `res.groups` | Sí |
| Permiso | `permissions` | `ir.model.access`, `ir.rule` | Sí |
| Cliente | `users` + perfil cliente | `res.partner` | Sí |
| Tienda logística | `stores` | `res.partner`, `res.company` | Sí |
| Actor ecosistema | `ecosystem_actors` | `res.partner` | Sí |
| Servicio | `services` | `product.template` | Sí |
| Categoría | `service_categories` | `product.category` | Sí |
| Unidad | catálogo `UNIT_MEASURES` | `uom.uom` | Sí |
| Cotización | `quotations` | `sale.order` | Sí |
| Línea cotización | `quotation_lines` | `sale.order.line` | Sí |
| Orden | `orders` | `sale.order`, `project.task` | Sí |
| Tarea orden | `order_tasks` | `project.task` | Sí |
| Documento | `documents` | `ir.attachment` | Sí |
| Pago | `payments` | `account.payment` | Sí, referencial |
| Comisión | `commissions` | Conceptual financiero | Sí |
| Reporte | `reports` | `ir.actions.report` | Sí básico |
| Auditoría | `audit_logs` | `mail.message` | Sí |
| Contenedor | `tos_containers` | `stock.quant` conceptual | Parcial |
| Patio | `tos_yards` | `stock.location` | Parcial |
| Movimiento TOS | `tos_moves` | `stock.move` | Parcial |
| Vehículo | `vehicles` | `fleet.vehicle` | Parcial |
| Viaje | `trips` | `stock.picking`, `project.task` conceptual | Parcial |
| Almacén | `warehouses` | `stock.location`, `stock.warehouse` | Parcial |
| Inventario | `inventory_items` | `stock.quant` | Parcial |
| Inspección | `inspections` | `quality.check` | Parcial |
| Checklist | `inspection_checklists` | `quality.point` | Parcial |
| Ticket soporte | `support_tickets` | `project.task`, `mail.message` | Básico/posterior |
| Notificación | `notifications` | `mail.activity` | Básico/posterior |
| Configuración | `global_settings` | `ir.config_parameter` | Parcial |

---

# 22. Modelos Odoo que NO deben implementarse en el MVP

Los siguientes modelos o conceptos no deben implementarse en el MVP, salvo que el alcance cambie explícitamente:

1. Contabilidad completa de `account.move`.
2. Conciliación bancaria avanzada.
3. Facturación fiscal automática.
4. Compras completas con `purchase.order`.
5. Inventario completo con valorización.
6. Manufactura.
7. CRM completo.
8. Email marketing.
9. Website builder.
10. Portal Odoo.
11. POS.
12. Payroll.
13. HR completo.
14. Multiempresa avanzada.
15. Multi-moneda contable compleja.
16. Reglas fiscales avanzadas.
17. Motor completo de actividades Odoo.
18. Automatizaciones Odoo.
19. Studio / campos dinámicos Odoo.
20. Integraciones Odoo API.

---

# 23. Modelos propios que sustituyen conceptos Odoo

| Necesidad funcional | No usar directamente | Usar modelo propio |
|---|---|---|
| Usuario | `res.users` | `users` |
| Proveedor | `res.partner` | `stores` |
| Actor | `res.partner` | `ecosystem_actors` |
| Servicio | `product.template` | `services` |
| Categoría | `product.category` | `service_categories` |
| Cotización | `sale.order` | `quotations` |
| Orden | `sale.order` confirmado | `orders` |
| Documento | `ir.attachment` | `documents` |
| Pago | `account.payment` | `payments` |
| Comisión | contabilidad personalizada | `commissions` |
| Mensaje | `mail.message` | `audit_logs`, `support_ticket_messages` |
| Actividad | `mail.activity` | `notifications`, `order_tasks` |
| Inventario | `stock.quant` | `inventory_items` |
| Movimiento | `stock.move` | `storage_movements`, `tos_moves` |
| Vehículo | `fleet.vehicle` | `vehicles` |
| Inspección | `quality.check` | `inspections` |

---

# 24. Reglas para traducir modelos Odoo a modelos propios

## 24.1 Regla de simplificación

Si Odoo tiene 100 campos, el marketplace debe usar solo los campos necesarios para el MVP.

## 24.2 Regla de separación

Si Odoo usa un mismo modelo para varias funciones, el marketplace puede separar modelos para claridad.

Ejemplo:

```txt
Odoo sale.order → Marketplace quotations + orders
```

## 24.3 Regla de independencia

Cada modelo propio debe poder funcionar sin Odoo.

## 24.4 Regla de trazabilidad

Los modelos propios críticos deben tener auditoría aunque Odoo lo haga con chatter.

## 24.5 Regla de nombres propios

Usar nombres propios del dominio logístico, no nombres técnicos Odoo.

Ejemplo:

```txt
Correcto: services
Incorrecto: product_template
```

---

# 25. Ejemplo aplicado: Servicio logístico basado en `product.template`

## 25.1 Concepto Odoo

`product.template` representa un producto o servicio comercializable.

## 25.2 Modelo propio

`services`

## 25.3 Ejemplo numérico referencial

| Campo propio | Valor ejemplo |
|---|---|
| `service_code` | `SER-ADU-001` |
| `service_name` | `Customs Clearance Basic Service` |
| `store_id` | 20 |
| `category_id` | 1 |
| `base_price` | 450.00 |
| `currency_code` | `USD` |
| `unit_measure` | `service` |
| `estimated_time` | `24-48 hours` |
| `sla_hours` | 48 |
| `commission_percentage` | 10.00 |
| `approval_status` | `approved` |
| `publication_status` | `published` |

## 25.4 Componentes relacionados

1. `ServiceForm`.
2. `ServiceResultCard`.
3. `ServiceDetailPage`.
4. `ServicePricingBox`.
5. `ServiceDocumentChecklist`.

## 25.5 Endpoints relacionados

1. `POST /services`.
2. `GET /services`.
3. `GET /services/:id`.
4. `PATCH /services/:id`.
5. `PATCH /services/:id/approve`.
6. `PATCH /services/:id/publish`.

---

# 26. Ejemplo aplicado: Cotización basada en `sale.order`

## 26.1 Concepto Odoo

`sale.order` puede representar cotización y pedido confirmado.

## 26.2 Modelo propio separado

1. `quotations`.
2. `quotation_lines`.
3. `orders` cuando se aprueba y convierte.

## 26.3 Ejemplo numérico referencial

| Campo propio | Valor ejemplo |
|---|---|
| `quotation_code` | `COT-000001` |
| `customer_id` | 10 |
| `store_id` | 20 |
| `service_id` | 50 |
| `quantity` | 1 |
| `unit_measure` | `container` |
| `subtotal_amount` | 450.00 |
| `commission_amount` | 45.00 |
| `total_amount` | 450.00 |
| `currency_code` | `USD` |
| `status` | `responded` |

## 26.4 Conversión

```txt
quotation.status = approved
↓
crear order
↓
quotation.status = converted
```

---

# 27. Ejemplo aplicado: Documento basado en `ir.attachment`

## 27.1 Concepto Odoo

`ir.attachment` permite adjuntar archivos a cualquier modelo.

## 27.2 Modelo propio

`documents`

## 27.3 Ejemplo numérico referencial

| Campo propio | Valor ejemplo |
|---|---|
| `document_code` | `DOC-000001` |
| `document_type_code` | `COMMERCIAL_INVOICE` |
| `original_filename` | `commercial_invoice.pdf` |
| `stored_filename` | `DOC-000001-v1.pdf` |
| `entity_type` | `quotation` |
| `entity_id` | 1001 |
| `version_number` | 1 |
| `validation_status` | `pending` |
| `uploaded_by` | 10 |

---

# 28. Ejemplo aplicado: Auditoría basada en `mail.message`

## 28.1 Concepto Odoo

`mail.message` registra mensajes e historial en documentos.

## 28.2 Modelo propio

`audit_logs`

## 28.3 Ejemplo numérico referencial

| Campo propio | Valor ejemplo |
|---|---|
| `user_id` | 1 |
| `profile_code` | `PROF-SUP-003` |
| `module_name` | `stores` |
| `action` | `store.approved` |
| `entity_type` | `store` |
| `entity_id` | 20 |
| `old_value` | `{ "verification_status": "pending" }` |
| `new_value` | `{ "verification_status": "approved" }` |
| `result` | `success` |
| `criticality` | `high` |

---

# 29. Referencia Odoo para módulos funcionales del marketplace

| Módulo marketplace | Modelo Odoo referencial principal | Modelo propio principal |
|---|---|---|
| Usuarios | `res.users` | `users` |
| Roles | `res.groups` | `roles` |
| Permisos | `ir.model.access`, `ir.rule` | `permissions`, `role_permissions` |
| Actores | `res.partner` | `ecosystem_actors` |
| Tiendas | `res.partner`, `res.company` | `stores` |
| Servicios | `product.template` | `services` |
| Catálogos | `product.category`, `uom.uom` | `master_catalogs`, `service_categories` |
| Cotizaciones | `sale.order` | `quotations` |
| Órdenes | `sale.order`, `project.task` | `orders`, `order_tasks` |
| Documentos | `ir.attachment` | `documents` |
| Pagos | `account.payment` | `payments` |
| Comisiones | `account.move.line` conceptual | `commission_rules`, `commissions` |
| Reportes | `ir.actions.report` | `reports`, `report_exports` |
| Auditoría | `mail.message` | `audit_logs` |
| TOS | `stock.location`, `stock.move` | `tos_yards`, `tos_moves` |
| Transporte | `fleet.vehicle` | `vehicles`, `trips` |
| Almacenamiento | `stock.location`, `stock.quant` | `warehouses`, `inventory_items` |
| Inspecciones | `quality.check` | `inspections` |
| Soporte | `project.task`, `mail.message` | `support_tickets` |

---

# 30. Referencia Odoo para anexos del marketplace

## 30.1 Anexo 1 — Ficha de producto o servicio

Modelos Odoo referenciales:

1. `product.template`.
2. `product.category`.
3. `uom.uom`.
4. `res.partner`.
5. `ir.attachment`.

Modelos propios:

1. `services`.
2. `service_categories`.
3. `service_pricing`.
4. `service_documents`.
5. `stores`.
6. `documents`.

---

## 30.2 Anexo 2 — Ficha de módulo funcional

Modelos Odoo referenciales:

1. `ir.model` conceptual.
2. `ir.model.access`.
3. `ir.rule`.
4. `ir.actions.act_window` conceptual.

Modelos propios:

1. `modules`.
2. `permissions`.
3. `profile_module_access`.
4. `navigation_menu_items`.

---

## 30.3 Anexo 3 — Listado maestro de fichas de servicios

Modelos Odoo referenciales:

1. `product.template`.
2. `product.category`.

Modelos propios:

1. `services`.
2. `service_categories`.
3. `master_catalog_items`.

---

## 30.4 Anexo 4 — Listado maestro de fichas de módulos

Modelos Odoo referenciales:

1. `ir.model` conceptual.
2. `ir.actions.act_window` conceptual.

Modelos propios:

1. `modules`.
2. `profile_module_access`.
3. `permissions`.

---

## 30.5 Anexo 5 — Matriz de actores del ecosistema

Modelos Odoo referenciales:

1. `res.partner`.
2. `res.users`.
3. `res.company`.

Modelos propios:

1. `ecosystem_actors`.
2. `actor_services`.
3. `actor_documents`.
4. `actor_modules`.

---

## 30.6 Anexo 6 — Matriz de módulos por perfil

Modelos Odoo referenciales:

1. `res.groups`.
2. `ir.model.access`.
3. `ir.rule`.

Modelos propios:

1. `user_profiles`.
2. `modules`.
3. `profile_module_access`.
4. `permissions`.
5. `roles`.

---

## 30.7 Anexo 7 — Catálogos maestros mínimos para MVP

Modelos Odoo referenciales:

1. `product.category`.
2. `uom.uom`.
3. `res.groups`.
4. `ir.config_parameter`.

Modelos propios:

1. `master_catalogs`.
2. `master_catalog_items`.
3. `service_categories`.
4. `global_settings`.

---

# 31. Reglas para Antigravity al usar este documento

Antigravity debe:

1. Usar este documento solo como referencia conceptual.
2. Crear tablas propias según `12_DATABASE_MASTER_SCHEMA.md`.
3. Crear endpoints propios según `13_API_SPECIFICATION.md`.
4. Crear componentes propios según `09_FRONTEND_COMPONENT_MAP.md`.
5. Respetar el MVP definido en `02_MVP_SCOPE.md`.
6. No instalar paquetes Odoo.
7. No consumir Odoo API.
8. No crear conectores Odoo.
9. No copiar nombres de tablas Odoo en MySQL propio.
10. No implementar contabilidad completa.
11. No implementar inventario completo.
12. No implementar multiempresa avanzada.
13. No implementar facturación fiscal automática.
14. Mantener el marketplace como sistema independiente.
15. Documentar cualquier decisión futura de integración en otro documento.

---

# 32. Posible estrategia futura de integración con Odoo

Aunque no aplica al MVP, una fase futura podría integrar el marketplace con Odoo mediante adaptadores.

## 32.1 Integración futura posible

1. Exportar clientes a Odoo.
2. Exportar proveedores a Odoo.
3. Exportar servicios a productos Odoo.
4. Exportar órdenes confirmadas a ventas Odoo.
5. Exportar pagos confirmados a contabilidad Odoo.
6. Exportar facturas futuras.
7. Sincronizar inventario si aplica.

## 32.2 Arquitectura futura recomendada

```txt
Marketplace Core
   ↓
Integration Adapter Layer
   ↓
Odoo API / External ERP
```

## 32.3 Regla futura

La integración debe estar desacoplada del core mediante adaptadores, colas o servicios externos. Nunca debe mezclarse la lógica principal del marketplace con dependencias directas de Odoo.

---

# 33. Riesgos de usar Odoo como referencia y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Copiar demasiada complejidad Odoo | Alto | Simplificar para MVP |
| Crear tablas con nombres Odoo | Medio | Usar nombres propios del marketplace |
| Integrar prematuramente | Alto | Prohibir integración en MVP |
| Mezclar contabilidad real con pagos referenciales | Alto | Mantener pagos simples |
| Replicar inventario completo | Alto | Usar almacenamiento básico |
| Sobrecargar RBAC | Medio | Usar permisos explícitos y scopes simples |
| Confundir cotización con orden | Alto | Separar `quotations` y `orders` |
| No auditar cambios críticos | Alto | Usar `audit_logs` transversal |
| Crear dependencias futuras difíciles | Alto | Diseñar adaptadores futuros |

---

# 34. Criterios de aceptación del documento

Este documento se considera aceptado cuando:

1. Lista modelos Odoo relevantes.
2. Clasifica modelos Odoo por dominio.
3. Define equivalencias con modelos propios.
4. Aclara que Odoo solo es referencia conceptual.
5. Prohíbe integración Odoo en MVP.
6. Relaciona modelos Odoo con tablas MySQL propias.
7. Relaciona modelos Odoo con módulos funcionales.
8. Relaciona modelos Odoo con anexos trabajados.
9. Identifica modelos que no deben implementarse en MVP.
10. Define reglas para Antigravity.
11. Define riesgos y mitigaciones.
12. Propone estrategia futura de integración desacoplada.
13. Mantiene consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
14. Mantiene consistencia con `13_API_SPECIFICATION.md`.
15. Mantiene independencia técnica del marketplace.

---

# 35. Tareas técnicas para Antigravity

## 35.1 Análisis conceptual

1. Leer este documento antes de modelar entidades.
2. Identificar modelo Odoo referencial por módulo.
3. Traducirlo a modelo propio.
4. Validar que la tabla propia exista en `12_DATABASE_MASTER_SCHEMA.md`.
5. Validar que el endpoint propio exista en `13_API_SPECIFICATION.md`.
6. Validar que el componente frontend exista en `09_FRONTEND_COMPONENT_MAP.md`.

## 35.2 Base de datos

1. No crear tablas con nombres Odoo.
2. Crear tablas propias del marketplace.
3. Usar campos simplificados para MVP.
4. Crear relaciones necesarias, no todas las de Odoo.
5. Crear seeds propios.

## 35.3 Backend

1. Crear entidades propias Nest.js.
2. Crear servicios propios.
3. Crear DTOs propios.
4. Crear endpoints propios.
5. No importar SDK Odoo.
6. No crear cliente Odoo.

## 35.4 Frontend

1. Usar componentes propios.
2. Usar lenguaje del marketplace logístico.
3. No mostrar terminología técnica de Odoo al usuario final.
4. No exponer nombres de modelos Odoo en UI.

## 35.5 QA

1. Validar que no exista dependencia Odoo.
2. Validar que no existan imports Odoo.
3. Validar que no haya endpoints Odoo.
4. Validar que no haya tablas Odoo copiadas literalmente.
5. Validar que los modelos propios cumplen el MVP.

---

# 36. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software senior, analista ERP, experto en Odoo a nivel conceptual, backend architect Nest.js, database architect MySQL y product owner del Marketplace Logístico TOS.

Usa el documento `14_ODOO_REFERENCE_MODELS.md` como fuente conceptual para entender qué modelos de Odoo pueden inspirar los modelos propios del marketplace.

Objetivo:
Diseñar y desarrollar modelos propios en MySQL, entidades Nest.js, endpoints REST y componentes React.js tomando como referencia conceptual modelos Odoo, pero sin integrar, instalar, consumir ni depender técnicamente de Odoo.

Reglas obligatorias:
1. Odoo es solo referencia conceptual.
2. No instalar Odoo.
3. No consumir API de Odoo.
4. No crear conectores Odoo.
5. No copiar tablas Odoo literalmente.
6. No nombrar tablas propias como modelos Odoo.
7. Usar los modelos propios definidos en `12_DATABASE_MASTER_SCHEMA.md`.
8. Usar endpoints propios definidos en `13_API_SPECIFICATION.md`.
9. Usar componentes propios definidos en `09_FRONTEND_COMPONENT_MAP.md`.
10. Respetar el alcance MVP de `02_MVP_SCOPE.md`.
11. Simplificar modelos complejos de Odoo.
12. Separar cotizaciones y órdenes en modelos propios.
13. Mantener pagos como registros referenciales en MVP.
14. Mantener inventario y TOS como estructura básica en MVP.
15. Registrar auditoría propia en `audit_logs`.

Entregables esperados:
1. Mapeo conceptual Odoo → modelo propio.
2. Tablas MySQL propias.
3. Entidades Nest.js propias.
4. DTOs propios.
5. Endpoints REST propios.
6. Componentes React.js propios.
7. Seeds propios.
8. Validación de que no hay dependencia técnica con Odoo.

Antes de implementar cualquier módulo, identifica el modelo Odoo referencial, tradúcelo a modelo propio y verifica consistencia con los documentos maestros del proyecto.
```

---

# 37. Checklist de uso en Antigravity

- [ ] Guardar este documento como `14_ODOO_REFERENCE_MODELS.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.
- [ ] Confirmar que no se instala Odoo.
- [ ] Confirmar que no se consume API de Odoo.
- [ ] Confirmar que no se crean conectores Odoo.
- [ ] Confirmar que no se copian tablas Odoo literalmente.
- [ ] Confirmar que las tablas propias tienen nombres del marketplace.
- [ ] Confirmar que los endpoints propios no dependen de Odoo.
- [ ] Confirmar que el frontend no muestra terminología técnica Odoo.
- [ ] Confirmar que los modelos complejos se simplifican para MVP.

---

## 38. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de revisión de arquitectura | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

