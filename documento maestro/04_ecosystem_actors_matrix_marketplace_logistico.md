# 04_ECOSYSTEM_ACTORS_MATRIX.md

# Documento Maestro de Matriz de Actores del Ecosistema
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `04_ECOSYSTEM_ACTORS_MATRIX.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro funcional de actores del ecosistema |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Definir los actores que participan en el marketplace logístico y su relación con perfiles, módulos, servicios, documentos, permisos y auditoría |

---

## 2. Propósito del documento

Este documento define la **matriz maestra de actores del ecosistema logístico-portuario** que participarán en el Marketplace Logístico TOS.

Su finalidad es servir como fuente de verdad para que Antigravity pueda desarrollar correctamente:

1. Perfiles de usuario.
2. Tipos de tiendas logísticas.
3. Servicios ofrecidos o consumidos por cada actor.
4. Documentos requeridos por actor.
5. Permisos funcionales.
6. Módulos en los que participa cada actor.
7. Tablas MySQL relacionadas.
8. Modelos Odoo usados solo como referencia conceptual.
9. Eventos de auditoría.
10. Reglas de interacción entre actores.

Este documento no define una integración con Odoo. Odoo se utiliza únicamente como guía conceptual para estructurar entidades propias del sistema.

---

## 3. Objetivo general

Definir todos los actores que intervienen en el ecosistema digital del marketplace logístico para garantizar que el software tenga una estructura coherente de usuarios, tiendas, proveedores, clientes, reguladores, operadores, entidades financieras y administradores.

---

## 4. Objetivos específicos

1. Identificar los actores principales del ecosistema logístico-portuario.
2. Clasificar cada actor según su tipo funcional.
3. Asociar cada actor con perfiles del sistema.
4. Definir qué servicios ofrece o consume cada actor.
5. Definir qué documentos gestiona cada actor.
6. Definir qué módulos usa cada actor.
7. Definir qué permisos requiere cada actor.
8. Definir eventos auditables por actor.
9. Mapear cada actor con tablas MySQL propias.
10. Mapear cada actor con modelos Odoo referenciales.
11. Servir como insumo para el backlog de épicas, historias y tareas.
12. Servir como insumo para prompts de Antigravity.

---

## 5. Alcance del documento

Este documento cubre los actores mínimos necesarios para el diseño funcional del marketplace logístico:

1. Cliente.
2. Importador.
3. Exportador.
4. Agente aduanal.
5. Transportista.
6. Almacén fiscal.
7. Terminal portuaria.
8. Naviera.
9. Aduana.
10. Autoridad portuaria.
11. Inspector.
12. Aseguradora.
13. Banco.
14. Superadministrador.

En el MVP, algunos actores funcionarán de forma completa y otros solo como catálogos, perfiles parciales o referencias operativas.

---

## 6. Clasificación general de actores

| Tipo de actor | Descripción | Ejemplos |
|---|---|---|
| Demandante | Actor que solicita, contrata o consume servicios logísticos | Cliente, Importador, Exportador |
| Proveedor logístico | Actor que ofrece servicios dentro del marketplace | Agente aduanal, Transportista, Almacén fiscal, Terminal portuaria, Naviera, Inspector |
| Proveedor financiero | Actor que interviene en pagos, comprobantes, garantías o conciliaciones | Banco, Aseguradora |
| Regulador | Actor que valida, autoriza, observa o controla operaciones | Aduana, Autoridad portuaria |
| Administrador | Actor que controla el ecosistema digital | Superadministrador |

---

## 7. Matriz maestra de actores del ecosistema

| Código | Actor | Tipo de actor | Perfil asociado | Participación en MVP | Función principal |
|---|---|---|---|---|---|
| ACT-CLI-001 | Cliente | Demandante | Cliente final | Completa | Solicita, compara, cotiza, aprueba, paga y monitorea servicios logísticos |
| ACT-IMP-002 | Importador | Demandante | Cliente final / Cliente comercial | Parcial | Gestiona operaciones de importación y recibe mercancía nacionalizada |
| ACT-EXP-003 | Exportador | Demandante | Cliente final / Cliente comercial | Parcial | Gestiona operaciones de exportación y preparación documental de salida |
| ACT-ADU-004 | Agente aduanal | Proveedor logístico | Tienda logística / Agente aduanal | Completa | Prepara declaraciones, valida documentos y gestiona despacho aduanero |
| ACT-TRA-005 | Transportista | Proveedor logístico | Tienda logística / Transportista | Completa como servicio | Ejecuta traslados terrestres, asigna flota y confirma entregas |
| ACT-ALM-006 | Almacén fiscal | Proveedor logístico | Tienda logística / Almacén | Parcial | Custodia mercancía, controla inventario y permanencia |
| ACT-TER-007 | Terminal portuaria | Proveedor logístico / Operador TOS | Tienda logística / Operador interno | Parcial | Gestiona patio, contenedores, gates y movimientos internos |
| ACT-NAV-008 | Naviera | Proveedor logístico | Tienda logística / Naviera | Referencial | Gestiona booking, manifiestos y confirmación de embarque |
| ACT-REG-009 | Aduana | Regulador | Actor regulador / Auditor | Referencial | Controla selectividad, inspección, bloqueos y levantes |
| ACT-AUP-010 | Autoridad portuaria | Regulador | Actor institucional | Referencial | Controla permisos, tasas y normativa portuaria |
| ACT-INS-011 | Inspector | Proveedor logístico | Inspector / Tienda logística | Completa como servicio | Ejecuta inspecciones físicas, documentales o fotográficas |
| ACT-SEG-012 | Aseguradora | Proveedor financiero | Tienda logística / Aseguradora | Parcial | Emite pólizas, calcula coberturas y gestiona siniestros |
| ACT-BAN-013 | Banco | Proveedor financiero | Banco / Pagos | Parcial | Procesa pagos, comprobantes, conciliaciones o garantías |
| ACT-SUP-014 | Superadministrador | Administrador | Superadministrador | Completa | Controla usuarios, tiendas, servicios, catálogos, comisiones, reportes y auditoría |

---

## 8. Matriz de actores por perfil del sistema

| Actor | Cliente final | Tienda logística | Superadministrador | Operador interno | Inspector | Transportista | Agente aduanal | Auditor | Soporte técnico |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Cliente | Sí | No | Consulta | No | No | No | No | Consulta | Soporte |
| Importador | Sí | No | Consulta | Consulta | No | No | No | Consulta | Soporte |
| Exportador | Sí | No | Consulta | Consulta | No | No | No | Consulta | Soporte |
| Agente aduanal | No | Sí | Administra | Consulta | No | No | Sí | Consulta | Soporte |
| Transportista | No | Sí | Administra | Consulta | No | Sí | No | Consulta | Soporte |
| Almacén fiscal | No | Sí | Administra | Consulta | No | No | No | Consulta | Soporte |
| Terminal portuaria | No | Sí | Administra | Sí | No | No | No | Consulta | Soporte |
| Naviera | No | Sí | Administra | Consulta | No | No | No | Consulta | Soporte |
| Aduana | No | No | Consulta | Consulta | Consulta | No | Consulta | Sí | Soporte |
| Autoridad portuaria | No | No | Consulta | Consulta | No | No | No | Sí | Soporte |
| Inspector | No | Sí | Administra | Consulta | Sí | No | No | Consulta | Soporte |
| Aseguradora | No | Sí | Administra | Consulta | No | No | No | Consulta | Soporte |
| Banco | No | Sí | Administra | Consulta | No | No | No | Consulta | Soporte |
| Superadministrador | No | No | Sí | No | No | No | No | Consulta | Soporte |

---

## 9. Ficha funcional por actor

---

## 9.1 Cliente

| Campo | Descripción |
|---|---|
| Código | ACT-CLI-001 |
| Actor | Cliente |
| Tipo | Demandante |
| Perfil principal | Cliente final |
| Participación en MVP | Completa |
| Función principal | Solicitar, comparar, cotizar, contratar, pagar y monitorear servicios logísticos |
| Servicios que consume | Aduana, transporte, puerto, terminal, almacenamiento, inspección, seguros, pagos, documentación y tecnología |
| Documentos que gestiona | Datos fiscales, documentos de carga, factura comercial, packing list, BL, comprobante de pago |
| Módulos principales | Usuarios, servicios, búsqueda, cotizaciones, órdenes, documentos, pagos, reportes, reviews |
| Permisos principales | Crear solicitud, ver servicios, solicitar cotización, aprobar cotización, cargar documentos, registrar pago, ver orden, calificar servicio |
| Tabla MySQL principal | `customers`, `users`, `customer_requests` |
| Modelo Odoo referencial | `res.partner`, `res.users`, `sale.order` |
| Eventos auditables | Registro, login, solicitud de cotización, aprobación, rechazo, carga documental, pago, review |

---

## 9.2 Importador

| Campo | Descripción |
|---|---|
| Código | ACT-IMP-002 |
| Actor | Importador |
| Tipo | Demandante |
| Perfil principal | Cliente final / Cliente comercial |
| Participación en MVP | Parcial |
| Función principal | Gestionar operaciones de importación y recibir mercancía nacionalizada |
| Servicios que consume | Despacho aduanero, transporte, almacenamiento, inspección, pagos, seguros |
| Documentos que gestiona | Factura comercial, packing list, BL, declaración aduanera, certificado de origen, comprobante de pago |
| Módulos principales | Cotizaciones, órdenes, documentos, pagos, reportes |
| Permisos principales | Solicitar importación, cargar documentos, aprobar despacho, consultar levante |
| Tabla MySQL principal | `importers`, `import_operations`, `import_documents` |
| Modelo Odoo referencial | `res.partner`, `sale.order`, `ir.attachment` |
| Eventos auditables | Carga documental, aprobación, observación, cierre de importación |

---

## 9.3 Exportador

| Campo | Descripción |
|---|---|
| Código | ACT-EXP-003 |
| Actor | Exportador |
| Tipo | Demandante |
| Perfil principal | Cliente final / Cliente comercial |
| Participación en MVP | Parcial |
| Función principal | Gestionar operaciones de exportación y documentación de salida |
| Servicios que consume | Documentación, booking, transporte, inspección, seguros, terminal, puerto |
| Documentos que gestiona | Factura comercial, packing list, certificado de origen, booking, documento de embarque |
| Módulos principales | Cotizaciones, órdenes, documentos, reportes |
| Permisos principales | Solicitar exportación, cargar documentos, confirmar embarque, consultar orden |
| Tabla MySQL principal | `exporters`, `export_operations`, `export_documents` |
| Modelo Odoo referencial | `res.partner`, `sale.order`, `stock.picking`, `ir.attachment` |
| Eventos auditables | Solicitud, carga documental, booking, cierre de exportación |

---

## 9.4 Agente aduanal

| Campo | Descripción |
|---|---|
| Código | ACT-ADU-004 |
| Actor | Agente aduanal |
| Tipo | Proveedor logístico |
| Perfil principal | Tienda logística / Agente aduanal |
| Participación en MVP | Completa como tienda de servicios aduaneros |
| Función principal | Preparar declaraciones, validar documentos y gestionar despacho aduanero |
| Servicios que ofrece | Despacho aduanero de importación, despacho aduanero de exportación, revisión documental, gestión de levante |
| Documentos que gestiona | BL, factura comercial, packing list, autorización del cliente, declaración aduanera |
| Módulos principales | Tiendas, servicios, cotizaciones, órdenes, documentos, reportes, auditoría |
| Permisos principales | Responder cotización, validar documentos, actualizar estado aduanero, cargar evidencias |
| Tabla MySQL principal | `customs_agents`, `customs_declarations`, `service_orders`, `service_evidences` |
| Modelo Odoo referencial | `res.partner`, `product.template`, `sale.order.line`, `ir.attachment` |
| Eventos auditables | Respuesta de cotización, validación documental, cambio de estado, levante, cierre |

---

## 9.5 Transportista

| Campo | Descripción |
|---|---|
| Código | ACT-TRA-005 |
| Actor | Transportista |
| Tipo | Proveedor logístico |
| Perfil principal | Tienda logística / Transportista |
| Participación en MVP | Completa como proveedor de servicio de transporte básico |
| Función principal | Ejecutar traslados terrestres, asignar flota y confirmar entregas |
| Servicios que ofrece | Transporte puerto-almacén, transporte terminal-cliente, traslado de contenedor, retiro de carga |
| Documentos que gestiona | Orden de retiro, carta porte, datos del conductor, placa, evidencia de entrega |
| Módulos principales | Tiendas, servicios, cotizaciones, órdenes, documentos, transporte, reportes |
| Permisos principales | Responder cotización, asignar viaje, iniciar ruta, actualizar estado, cargar evidencia, cerrar entrega |
| Tabla MySQL principal | `carriers`, `vehicles`, `drivers`, `trips`, `trip_events` |
| Modelo Odoo referencial | `fleet.vehicle`, `res.partner`, `project.task`, `sale.order.line` |
| Eventos auditables | Asignación, inicio de ruta, evento de viaje, retiro, entrega, cierre |

---

## 9.6 Almacén fiscal

| Campo | Descripción |
|---|---|
| Código | ACT-ALM-006 |
| Actor | Almacén fiscal |
| Tipo | Proveedor logístico |
| Perfil principal | Tienda logística / Almacén |
| Participación en MVP | Parcial como servicio de almacenamiento |
| Función principal | Custodiar mercancía, controlar inventario, permanencia y despacho |
| Servicios que ofrece | Almacenamiento fiscal temporal, custodia, recepción, despacho, permanencia |
| Documentos que gestiona | Orden de ingreso, documento aduanero, descripción de mercancía, evidencia de recepción |
| Módulos principales | Tiendas, servicios, órdenes, documentos, almacenamiento, reportes |
| Permisos principales | Recibir carga, ubicar, mover, despachar, cerrar custodia |
| Tabla MySQL principal | `fiscal_warehouses`, `storage_locations`, `inventory_items`, `storage_movements` |
| Modelo Odoo referencial | `stock.location`, `stock.quant`, `stock.picking`, `res.partner` |
| Eventos auditables | Recepción, ubicación, movimiento, despacho, ajuste, cierre |

---

## 9.7 Terminal portuaria

| Campo | Descripción |
|---|---|
| Código | ACT-TER-007 |
| Actor | Terminal portuaria |
| Tipo | Proveedor logístico / Operador TOS |
| Perfil principal | Tienda logística / Operador interno |
| Participación en MVP | Parcial, con estructura inicial TOS |
| Función principal | Gestionar patio, contenedores, gates, movimientos y trazabilidad operativa |
| Servicios que ofrece | Movimiento interno de terminal, gate-in, gate-out, almacenamiento en patio, manipulación de contenedores |
| Documentos que gestiona | Orden de movimiento, número de contenedor, ubicación de patio, autorización de salida |
| Módulos principales | TOS, órdenes, documentos, reportes, auditoría |
| Permisos principales | Registrar movimiento, ubicar contenedor, bloquear, liberar, cerrar operación |
| Tabla MySQL principal | `terminal_operators`, `tos_yards`, `tos_containers`, `tos_moves`, `tos_gates` |
| Modelo Odoo referencial | `stock.location`, `stock.move`, `project.task`, `product.template` |
| Eventos auditables | Movimiento, ubicación, bloqueo, liberación, gate-in, gate-out |

---

## 9.8 Naviera

| Campo | Descripción |
|---|---|
| Código | ACT-NAV-008 |
| Actor | Naviera |
| Tipo | Proveedor logístico |
| Perfil principal | Tienda logística / Naviera |
| Participación en MVP | Referencial |
| Función principal | Gestionar bookings, manifiestos, buques y confirmaciones de embarque |
| Servicios que ofrece | Booking, manifiesto, confirmación de embarque, información de buque |
| Documentos que gestiona | Booking, manifiesto, BL, datos de buque, itinerario |
| Módulos principales | Servicios, cotizaciones, documentos, órdenes, reportes |
| Permisos principales | Crear booking, cargar manifiesto, confirmar embarque, actualizar itinerario |
| Tabla MySQL principal | `shipping_lines`, `vessels`, `bookings`, `manifests` |
| Modelo Odoo referencial | `res.partner`, `sale.order.line`, `ir.attachment`, `project.task` |
| Eventos auditables | Booking, manifiesto, cambio de itinerario, confirmación, cierre |

---

## 9.9 Aduana

| Campo | Descripción |
|---|---|
| Código | ACT-REG-009 |
| Actor | Aduana |
| Tipo | Regulador |
| Perfil principal | Actor regulador / Auditor |
| Participación en MVP | Referencial |
| Función principal | Controlar validación, selectividad, inspección, bloqueos y liberaciones |
| Servicios que ofrece | No aplica como tienda comercial en MVP |
| Documentos que gestiona | Declaración, soportes, acta de inspección, levante, observaciones |
| Módulos principales | Documentos, auditoría, estados aduaneros, reportes |
| Permisos principales | Observar, bloquear, liberar, solicitar inspección, consultar expediente |
| Tabla MySQL principal | `customs_authorities`, `customs_holds`, `customs_releases`, `customs_inspections` |
| Modelo Odoo referencial | `res.partner`, `ir.attachment`, `mail.message` |
| Eventos auditables | Bloqueo, observación, selectividad, inspección, liberación |

---

## 9.10 Autoridad portuaria

| Campo | Descripción |
|---|---|
| Código | ACT-AUP-010 |
| Actor | Autoridad portuaria |
| Tipo | Regulador / Institucional |
| Perfil principal | Actor institucional / Auditor |
| Participación en MVP | Referencial |
| Función principal | Supervisar permisos, tasas, normativa portuaria y operación institucional |
| Servicios que ofrece | Gestión de tasas, permisos portuarios, autorizaciones institucionales |
| Documentos que gestiona | Manifiesto, permiso portuario, tasa portuaria, autorización de operación |
| Módulos principales | Documentos, pagos, reportes, auditoría |
| Permisos principales | Validar permiso, registrar tasa, emitir autorización, consultar operación |
| Tabla MySQL principal | `port_authorities`, `port_fees`, `port_permits`, `port_reports` |
| Modelo Odoo referencial | `res.partner`, `account.move`, `account.tax`, `ir.attachment` |
| Eventos auditables | Permiso, tasa, autorización, observación, reporte |

---

## 9.11 Inspector

| Campo | Descripción |
|---|---|
| Código | ACT-INS-011 |
| Actor | Inspector |
| Tipo | Proveedor logístico |
| Perfil principal | Inspector / Tienda logística |
| Participación en MVP | Completa como servicio básico de inspección |
| Función principal | Ejecutar inspecciones físicas, documentales, fotográficas o de seguridad |
| Servicios que ofrece | Inspección física, inspección documental, acta de inspección, evidencia fotográfica |
| Documentos que gestiona | Solicitud de inspección, BL, factura, fotografías, checklist, acta de inspección |
| Módulos principales | Inspecciones, documentos, órdenes, evidencias, reportes |
| Permisos principales | Programar, ejecutar, cargar evidencia, emitir resultado, cerrar inspección |
| Tabla MySQL principal | `inspectors`, `inspections`, `inspection_checklists`, `inspection_evidences` |
| Modelo Odoo referencial | `quality.check`, `project.task`, `ir.attachment`, `res.partner` |
| Eventos auditables | Programación, checklist, evidencia, resultado, cierre |

---

## 9.12 Aseguradora

| Campo | Descripción |
|---|---|
| Código | ACT-SEG-012 |
| Actor | Aseguradora |
| Tipo | Proveedor financiero |
| Perfil principal | Tienda logística / Aseguradora |
| Participación en MVP | Parcial como servicio de seguro básico |
| Función principal | Emitir pólizas, calcular cobertura y gestionar siniestros |
| Servicios que ofrece | Seguro básico de carga, seguro por valor declarado, gestión de reclamo |
| Documentos que gestiona | Valor de mercancía, ruta, factura comercial, póliza, soporte de siniestro |
| Módulos principales | Servicios, cotizaciones, documentos, pagos, reportes |
| Permisos principales | Cotizar seguro, emitir póliza, registrar siniestro, consultar pago |
| Tabla MySQL principal | `insurance_companies`, `policies`, `policy_coverages`, `claims` |
| Modelo Odoo referencial | `res.partner`, `product.template`, `account.move`, `ir.attachment` |
| Eventos auditables | Cotización, póliza, cobertura, siniestro, cierre |

---

## 9.13 Banco

| Campo | Descripción |
|---|---|
| Código | ACT-BAN-013 |
| Actor | Banco |
| Tipo | Proveedor financiero |
| Perfil principal | Banco / Pagos |
| Participación en MVP | Parcial, con pagos referenciales o manuales |
| Función principal | Procesar pagos, comprobantes, conciliaciones, garantías o cartas de crédito |
| Servicios que ofrece | Gestión de pagos, confirmación, conciliación, comprobantes |
| Documentos que gestiona | Factura, comprobante, referencia, orden de servicio, conciliación |
| Módulos principales | Pagos, documentos, reportes, auditoría |
| Permisos principales | Confirmar pago, conciliar, emitir comprobante, consultar transacción |
| Tabla MySQL principal | `banks`, `payments`, `payment_receipts`, `reconciliations` |
| Modelo Odoo referencial | `account.payment`, `account.move`, `account.journal`, `res.partner` |
| Eventos auditables | Pago creado, pago validado, comprobante, conciliación, reverso |

---

## 9.14 Superadministrador

| Campo | Descripción |
|---|---|
| Código | ACT-SUP-014 |
| Actor | Superadministrador |
| Tipo | Administrador |
| Perfil principal | Superadministrador |
| Participación en MVP | Completa |
| Función principal | Controlar usuarios, tiendas, servicios, catálogos, comisiones, reportes y auditoría |
| Servicios que ofrece | Administración global del ecosistema |
| Documentos que gestiona | Políticas, reglas, reportes, configuraciones globales, logs |
| Módulos principales | Todos los módulos |
| Permisos principales | Crear, aprobar, rechazar, suspender, configurar, auditar, exportar, administrar |
| Tabla MySQL principal | `superadmins`, `roles`, `permissions`, `audit_logs`, `global_settings` |
| Modelo Odoo referencial | `res.users`, `res.groups`, `ir.model.access`, `mail.message` |
| Eventos auditables | Cambio de regla, aprobación, suspensión, configuración, exportación, auditoría |

---

## 10. Matriz actor vs servicios principales

| Actor | Aduana | Transporte | Puerto | Terminal | Almacenamiento | Inspección | Seguros | Pagos | Documentación | Tecnología |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Cliente | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume |
| Importador | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume |
| Exportador | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume | Consume |
| Agente aduanal | Ofrece | No | Apoya | Apoya | No | Apoya | No | No | Ofrece | Consulta |
| Transportista | No | Ofrece | Apoya | Apoya | Apoya | No | No | No | Apoya | Consulta |
| Almacén fiscal | No | Apoya | No | Apoya | Ofrece | Apoya | No | No | Apoya | Consulta |
| Terminal portuaria | No | Apoya | Ofrece | Ofrece | Apoya | Apoya | No | No | Apoya | Ofrece |
| Naviera | Apoya | Apoya | Apoya | Apoya | No | No | No | No | Ofrece | Consulta |
| Aduana | Regula | Regula | Regula | Regula | Regula | Regula | No | No | Regula | Consulta |
| Autoridad portuaria | No | Regula | Regula | Regula | Regula | No | No | Regula | Regula | Consulta |
| Inspector | Apoya | No | No | Apoya | Apoya | Ofrece | No | No | Apoya | Consulta |
| Aseguradora | No | No | No | No | No | No | Ofrece | Apoya | Apoya | Consulta |
| Banco | No | No | No | No | No | No | No | Ofrece | Apoya | Consulta |
| Superadministrador | Administra | Administra | Administra | Administra | Administra | Administra | Administra | Administra | Administra | Administra |

---

## 11. Matriz actor vs módulos funcionales

| Actor | Usuarios | Tiendas | Servicios | Cotizaciones | Órdenes | Documentos | Pagos | Comisiones | Reportes | Auditoría | TOS | Transporte | Almacenamiento | Inspecciones |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Cliente | Sí | Consulta | Consulta | Sí | Sí | Sí | Sí | No | Sí | Consulta | Consulta | Consulta | Consulta | Consulta |
| Importador | Sí | Consulta | Consulta | Sí | Sí | Sí | Sí | No | Sí | Consulta | Consulta | Consulta | Consulta | Consulta |
| Exportador | Sí | Consulta | Consulta | Sí | Sí | Sí | Sí | No | Sí | Consulta | Consulta | Consulta | Consulta | Consulta |
| Agente aduanal | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Consulta | No | No | Apoya |
| Transportista | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Consulta | Sí | No | No |
| Almacén fiscal | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Consulta | No | Sí | Apoya |
| Terminal portuaria | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Sí | Apoya | Apoya | Apoya |
| Naviera | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Consulta | No | No | No |
| Aduana | Consulta | No | No | Consulta | Consulta | Sí | No | No | Sí | Sí | Consulta | No | No | Sí |
| Autoridad portuaria | Consulta | No | No | Consulta | Consulta | Sí | Consulta | No | Sí | Sí | Consulta | No | No | No |
| Inspector | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | Consulta | No | No | Sí |
| Aseguradora | Sí | Sí | Sí | Sí | Sí | Sí | Consulta | Consulta | Sí | Consulta | No | No | No | No |
| Banco | Sí | Sí | Sí | Consulta | Consulta | Sí | Sí | Consulta | Sí | Consulta | No | No | No | No |
| Superadministrador | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí |

---

## 12. Matriz actor vs documentos requeridos

| Actor | Documentos principales |
|---|---|
| Cliente | Datos fiscales, autorización de operación, documentos de carga, comprobante de pago |
| Importador | Factura comercial, packing list, BL, declaración aduanera, certificado de origen |
| Exportador | Factura comercial, packing list, certificado de origen, booking, documento de embarque |
| Agente aduanal | BL, factura comercial, packing list, autorización, declaración aduanera |
| Transportista | Orden de retiro, carta porte, datos de conductor, placa, evidencia de entrega |
| Almacén fiscal | Orden de ingreso, documento aduanero, descripción de mercancía, evidencia de recepción |
| Terminal portuaria | Orden de movimiento, número de contenedor, autorización de salida, ubicación de patio |
| Naviera | Booking, manifiesto, BL, datos de buque, itinerario |
| Aduana | Declaración, soportes, acta de inspección, levante, observaciones |
| Autoridad portuaria | Permiso portuario, tasa portuaria, manifiesto, autorización institucional |
| Inspector | Solicitud de inspección, checklist, acta, fotografías, resultado |
| Aseguradora | Factura comercial, valor de mercancía, ruta, póliza, soporte de siniestro |
| Banco | Factura, comprobante, referencia, conciliación, orden de servicio |
| Superadministrador | Reportes, logs, configuraciones, reglas, documentos maestros |

---

## 13. Matriz actor vs permisos principales

| Actor | Permisos principales |
|---|---|
| Cliente | Ver servicios, solicitar cotización, aprobar/rechazar, cargar documentos, registrar pago, consultar orden, calificar |
| Importador | Solicitar importación, cargar documentos, aprobar despacho, consultar levante |
| Exportador | Solicitar exportación, cargar documentos, confirmar embarque, consultar orden |
| Agente aduanal | Responder cotización, validar documentos, actualizar estado aduanero, cargar evidencias |
| Transportista | Responder cotización, asignar viaje, iniciar ruta, actualizar estado, cargar evidencia, cerrar entrega |
| Almacén fiscal | Recibir carga, ubicar, mover, despachar, cerrar custodia |
| Terminal portuaria | Registrar movimiento, ubicar contenedor, bloquear, liberar, registrar gate-in/gate-out |
| Naviera | Crear booking, cargar manifiesto, confirmar embarque, actualizar itinerario |
| Aduana | Observar, bloquear, liberar, solicitar inspección, consultar expediente |
| Autoridad portuaria | Validar permiso, registrar tasa, emitir autorización, consultar operación |
| Inspector | Programar, ejecutar, cargar evidencia, emitir resultado, cerrar inspección |
| Aseguradora | Cotizar seguro, emitir póliza, registrar siniestro, consultar pago |
| Banco | Confirmar pago, conciliar, emitir comprobante, consultar transacción |
| Superadministrador | Administrar usuarios, aprobar tiendas, aprobar servicios, configurar catálogos, configurar comisiones, auditar, exportar |

---

## 14. Matriz actor vs modelos Odoo referenciales

| Actor | Modelos Odoo referenciales | Uso conceptual |
|---|---|---|
| Cliente | `res.partner`, `res.users`, `sale.order` | Usuario, cliente y solicitudes comerciales |
| Importador | `res.partner`, `sale.order`, `ir.attachment` | Cliente comercial, operación y documentos |
| Exportador | `res.partner`, `sale.order`, `stock.picking`, `ir.attachment` | Cliente comercial, despacho y documentos |
| Agente aduanal | `res.partner`, `product.template`, `sale.order.line`, `ir.attachment` | Proveedor, servicio aduanal, línea de servicio, documentos |
| Transportista | `fleet.vehicle`, `res.partner`, `project.task`, `sale.order.line` | Flota, proveedor, tarea logística, línea de servicio |
| Almacén fiscal | `stock.location`, `stock.quant`, `stock.picking`, `res.partner` | Ubicación, inventario, recepción/despacho, proveedor |
| Terminal portuaria | `stock.location`, `stock.move`, `project.task`, `product.template` | Patio, movimiento, tarea, servicio |
| Naviera | `res.partner`, `sale.order.line`, `ir.attachment`, `project.task` | Proveedor, línea de servicio, documentos, booking |
| Aduana | `res.partner`, `ir.attachment`, `mail.message` | Regulador, documentos, trazabilidad |
| Autoridad portuaria | `res.partner`, `account.move`, `account.tax`, `ir.attachment` | Institución, tasas, cargos, documentos |
| Inspector | `quality.check`, `project.task`, `ir.attachment`, `res.partner` | Inspección, tarea, evidencia, proveedor |
| Aseguradora | `res.partner`, `product.template`, `account.move`, `ir.attachment` | Proveedor, póliza como servicio, documento financiero, documentos |
| Banco | `account.payment`, `account.move`, `account.journal`, `res.partner` | Pago, documento financiero, diario, entidad financiera |
| Superadministrador | `res.users`, `res.groups`, `ir.model.access`, `mail.message` | Usuario, rol, permiso, auditoría |

---

## 15. Tablas MySQL recomendadas para actores

### 15.1 Tabla `ecosystem_actors`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_code` | VARCHAR(50) | Código único del actor |
| `actor_name` | VARCHAR(150) | Nombre del actor |
| `actor_type` | VARCHAR(80) | Demandante, proveedor, regulador, financiero o administrador |
| `profile_code` | VARCHAR(50) | Perfil principal asociado |
| `main_function` | TEXT | Función principal |
| `mvp_participation` | VARCHAR(50) | Completa, parcial o referencial |
| `odoo_reference_models` | TEXT | Modelos Odoo referenciales |
| `status` | VARCHAR(30) | Activo, inactivo, referencial |
| `created_at` | DATETIME | Fecha de creación |
| `updated_at` | DATETIME | Fecha de actualización |

### 15.2 Tabla `actor_services`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_id` | BIGINT | Relación con actor |
| `service_category` | VARCHAR(100) | Categoría del servicio |
| `service_name` | VARCHAR(150) | Nombre del servicio |
| `relation_type` | VARCHAR(50) | Ofrece, consume, regula, administra |
| `unit_measure` | VARCHAR(50) | Unidad referencial |
| `status` | VARCHAR(30) | Estado |

### 15.3 Tabla `actor_documents`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_id` | BIGINT | Relación con actor |
| `document_type_code` | VARCHAR(50) | Código del tipo documental |
| `document_name` | VARCHAR(150) | Nombre del documento |
| `required` | BOOLEAN | Indica si es obligatorio |
| `related_module` | VARCHAR(100) | Módulo relacionado |
| `status` | VARCHAR(30) | Estado |

### 15.4 Tabla `actor_permissions`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_id` | BIGINT | Relación con actor |
| `permission_code` | VARCHAR(50) | Código del permiso |
| `permission_name` | VARCHAR(150) | Nombre del permiso |
| `module_name` | VARCHAR(100) | Módulo relacionado |
| `access_level` | INT | Nivel de acceso 0 a 4 |
| `status` | VARCHAR(30) | Estado |

### 15.5 Tabla `actor_modules`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_id` | BIGINT | Relación con actor |
| `module_code` | VARCHAR(50) | Código del módulo |
| `module_name` | VARCHAR(100) | Nombre del módulo |
| `participation_type` | VARCHAR(50) | Consulta, opera, administra, regula |
| `status` | VARCHAR(30) | Estado |

### 15.6 Tabla `actor_audit_events`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | BIGINT | Identificador interno |
| `actor_id` | BIGINT | Relación con actor |
| `event_code` | VARCHAR(50) | Código del evento |
| `event_name` | VARCHAR(150) | Nombre del evento |
| `module_name` | VARCHAR(100) | Módulo relacionado |
| `criticality` | VARCHAR(30) | Baja, media, alta, crítica |
| `track_old_value` | BOOLEAN | Guarda valor anterior |
| `track_new_value` | BOOLEAN | Guarda valor nuevo |
| `status` | VARCHAR(30) | Estado |

---

## 16. Eventos de auditoría por actor

| Actor | Eventos principales |
|---|---|
| Cliente | Registro, login, solicitud, aprobación, rechazo, carga documental, pago, review |
| Importador | Carga documental, aprobación, observación, cierre de importación |
| Exportador | Solicitud, carga documental, booking, cierre de exportación |
| Agente aduanal | Respuesta, validación documental, levante, cambio de estado, cierre |
| Transportista | Asignación, inicio de ruta, evento de viaje, retiro, entrega, cierre |
| Almacén fiscal | Recepción, ubicación, movimiento, despacho, ajuste |
| Terminal portuaria | Movimiento, ubicación, bloqueo, liberación, gate-in, gate-out |
| Naviera | Booking, manifiesto, cambio de itinerario, confirmación, cierre |
| Aduana | Bloqueo, observación, selectividad, inspección, liberación |
| Autoridad portuaria | Permiso, tasa, autorización, observación, reporte |
| Inspector | Programación, checklist, evidencia, resultado, cierre |
| Aseguradora | Cotización, póliza, cobertura, siniestro, cierre |
| Banco | Pago creado, pago validado, comprobante, conciliación, reverso |
| Superadministrador | Cambio de regla, aprobación, suspensión, configuración, exportación, auditoría |

---

## 17. Reglas de negocio por actor

### 17.1 Cliente

1. Solo puede solicitar cotizaciones si está autenticado.
2. Solo puede ver sus propias cotizaciones, órdenes, documentos y pagos.
3. Solo puede aprobar o rechazar cotizaciones dirigidas a él.
4. Solo puede calificar órdenes cerradas.

### 17.2 Tienda logística / proveedor

1. No puede publicar servicios si la tienda no está aprobada.
2. Solo puede ver solicitudes dirigidas a su tienda.
3. Solo puede responder cotizaciones de sus propios servicios.
4. Solo puede cargar evidencias en órdenes asignadas.
5. No puede ver información comercial de otras tiendas.

### 17.3 Superadministrador

1. Puede aprobar, rechazar o suspender tiendas.
2. Puede aprobar, pausar o rechazar servicios.
3. Puede configurar catálogos, comisiones y permisos.
4. Puede consultar reportes globales.
5. Toda acción crítica debe ser auditada.

### 17.4 Auditor

1. Puede consultar logs y reportes.
2. No debe modificar operaciones comerciales.
3. No debe cambiar pagos ni comisiones.
4. No debe aprobar tiendas ni servicios.

### 17.5 Reguladores

1. Pueden aparecer como actores referenciales.
2. Sus acciones pueden modelarse como estados o eventos.
3. En el MVP no requieren integración externa.
4. Deben poder asociarse a documentos, observaciones o bloqueos si aplica.

---

## 18. Alcance MVP de los actores

| Actor | Alcance MVP |
|---|---|
| Cliente | Registro, búsqueda, cotización, aprobación, documentos, pagos, órdenes y reviews |
| Importador | Opera como cliente comercial con documentos de importación |
| Exportador | Opera como cliente comercial con documentos de exportación |
| Agente aduanal | Opera como tienda logística de servicios aduanales |
| Transportista | Opera como tienda logística de servicios de transporte |
| Almacén fiscal | Opera como tienda logística de almacenamiento básico |
| Terminal portuaria | Opera como proveedor o referencia TOS básica |
| Naviera | Referencial o tienda logística básica según fase |
| Aduana | Referencial para estados aduaneros y auditoría |
| Autoridad portuaria | Referencial para tasas, permisos y estados |
| Inspector | Opera como proveedor de inspección básica |
| Aseguradora | Opera como tienda de seguro básico |
| Banco | Opera como referencia de pago manual o comprobante |
| Superadministrador | Opera completo en administración global |

---

## 19. Historias de usuario base por actor

### Cliente

1. Como cliente, quiero buscar servicios logísticos para comparar opciones.
2. Como cliente, quiero solicitar una cotización para conocer el costo del servicio.
3. Como cliente, quiero aprobar una cotización para generar una orden.
4. Como cliente, quiero cargar documentos para completar mi operación.
5. Como cliente, quiero registrar un pago para avanzar la orden.
6. Como cliente, quiero calificar el servicio recibido.

### Tienda logística

1. Como tienda logística, quiero registrar mi empresa para ofrecer servicios.
2. Como tienda logística, quiero publicar servicios para recibir solicitudes.
3. Como tienda logística, quiero responder cotizaciones.
4. Como tienda logística, quiero ejecutar órdenes asignadas.
5. Como tienda logística, quiero cargar evidencias de cierre.

### Superadministrador

1. Como superadministrador, quiero aprobar tiendas para controlar el ecosistema.
2. Como superadministrador, quiero aprobar servicios para garantizar calidad.
3. Como superadministrador, quiero configurar catálogos para normalizar datos.
4. Como superadministrador, quiero configurar comisiones para monetizar el marketplace.
5. Como superadministrador, quiero auditar eventos críticos.

### Auditor

1. Como auditor, quiero consultar logs por actor.
2. Como auditor, quiero revisar cambios de estado.
3. Como auditor, quiero revisar pagos y comisiones.
4. Como auditor, quiero exportar reportes de trazabilidad.

---

## 20. Tareas técnicas sugeridas para Antigravity

### 20.1 Backend Nest.js

1. Crear módulo `ActorsModule` si se desea administrar actores como entidad propia.
2. Crear endpoints para consultar actores.
3. Crear endpoints para asociar actores con servicios.
4. Crear endpoints para asociar actores con documentos.
5. Crear endpoints para asociar actores con permisos.
6. Crear validaciones DTO.
7. Crear auditoría de cambios de actores.

### 20.2 Frontend React.js

1. Crear componente `ActorMatrixTable`.
2. Crear componente `ActorProfileCard`.
3. Crear vista administrativa de actores.
4. Crear filtros por tipo de actor.
5. Crear detalle de actor.
6. Crear relación actor-servicio.
7. Crear relación actor-documento.

### 20.3 Base de datos MySQL

1. Crear tabla `ecosystem_actors`.
2. Crear tabla `actor_services`.
3. Crear tabla `actor_documents`.
4. Crear tabla `actor_permissions`.
5. Crear tabla `actor_modules`.
6. Crear tabla `actor_audit_events`.
7. Crear seeds iniciales de actores.

### 20.4 QA

1. Validar que todos los actores tengan código único.
2. Validar que todos los actores tengan tipo.
3. Validar que todos los actores tengan perfil asociado.
4. Validar que los actores MVP estén disponibles en catálogos.
5. Validar que los permisos estén alineados con perfiles.
6. Validar que las acciones críticas generen auditoría.

---

## 21. Seeds iniciales sugeridos

```json
[
  { "actor_code": "ACT-CLI-001", "actor_name": "Cliente", "actor_type": "Demandante", "profile_code": "PROF-CLI-001", "mvp_participation": "Completa" },
  { "actor_code": "ACT-IMP-002", "actor_name": "Importador", "actor_type": "Demandante", "profile_code": "PROF-CLI-001", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-EXP-003", "actor_name": "Exportador", "actor_type": "Demandante", "profile_code": "PROF-CLI-001", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-ADU-004", "actor_name": "Agente aduanal", "actor_type": "Proveedor logístico", "profile_code": "PROF-ADU-007", "mvp_participation": "Completa" },
  { "actor_code": "ACT-TRA-005", "actor_name": "Transportista", "actor_type": "Proveedor logístico", "profile_code": "PROF-TRA-006", "mvp_participation": "Completa" },
  { "actor_code": "ACT-ALM-006", "actor_name": "Almacén fiscal", "actor_type": "Proveedor logístico", "profile_code": "PROF-TIE-002", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-TER-007", "actor_name": "Terminal portuaria", "actor_type": "Proveedor logístico / Operador TOS", "profile_code": "PROF-TIE-002", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-NAV-008", "actor_name": "Naviera", "actor_type": "Proveedor logístico", "profile_code": "PROF-TIE-002", "mvp_participation": "Referencial" },
  { "actor_code": "ACT-REG-009", "actor_name": "Aduana", "actor_type": "Regulador", "profile_code": "PROF-AUD-008", "mvp_participation": "Referencial" },
  { "actor_code": "ACT-AUP-010", "actor_name": "Autoridad portuaria", "actor_type": "Regulador", "profile_code": "PROF-AUD-008", "mvp_participation": "Referencial" },
  { "actor_code": "ACT-INS-011", "actor_name": "Inspector", "actor_type": "Proveedor logístico", "profile_code": "PROF-INS-005", "mvp_participation": "Completa" },
  { "actor_code": "ACT-SEG-012", "actor_name": "Aseguradora", "actor_type": "Proveedor financiero", "profile_code": "PROF-TIE-002", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-BAN-013", "actor_name": "Banco", "actor_type": "Proveedor financiero", "profile_code": "PROF-TIE-002", "mvp_participation": "Parcial" },
  { "actor_code": "ACT-SUP-014", "actor_name": "Superadministrador", "actor_type": "Administrador", "profile_code": "PROF-SUP-003", "mvp_participation": "Completa" }
]
```

---

## 22. Criterios de aceptación del documento

Este documento se considera completo cuando:

1. Lista todos los actores principales del ecosistema.
2. Clasifica cada actor por tipo.
3. Asocia cada actor con un perfil.
4. Define participación de cada actor en el MVP.
5. Define función principal por actor.
6. Define servicios ofrecidos o consumidos.
7. Define documentos gestionados.
8. Define módulos relacionados.
9. Define permisos principales.
10. Define tablas MySQL recomendadas.
11. Define modelos Odoo referenciales.
12. Define eventos auditables.
13. Incluye matriz actor-servicio.
14. Incluye matriz actor-módulo.
15. Incluye tareas para Antigravity.
16. Incluye seeds iniciales.

---

## 23. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, analista funcional, product owner y desarrollador full stack senior.

Usa el documento `04_ECOSYSTEM_ACTORS_MATRIX.md` como fuente principal para modelar los actores del ecosistema del Marketplace Logístico TOS.

Objetivo:
Convertir la matriz de actores en entidades, catálogos, relaciones, permisos, módulos y seeds iniciales dentro del proyecto desarrollado con React.js, Nest.js y MySQL.

Reglas:
1. No integrar directamente con Odoo; usar modelos Odoo solo como referencia conceptual.
2. Respetar el alcance MVP definido en `02_MVP_SCOPE.md`.
3. Crear tablas propias en MySQL.
4. Crear seeds iniciales para los actores mínimos.
5. Proteger endpoints con JWT y RBAC.
6. Registrar auditoría para cambios críticos de actores.
7. No duplicar actores si ya existen como perfiles o tiendas; relacionarlos correctamente.
8. Mantener consistencia con catálogos maestros y perfiles de usuario.

Entregables esperados:
1. Propuesta de tablas MySQL para actores.
2. Migraciones relacionadas.
3. Seeds iniciales de actores.
4. Endpoints Nest.js para consultar o administrar actores si aplica.
5. Componentes React.js para visualizar la matriz de actores.
6. Pruebas básicas de validación.
7. Documentación técnica actualizada.

Antes de implementar, verifica si el módulo de actores será una entidad administrativa propia o si se manejará inicialmente como catálogo maestro.
```

---

## 24. Checklist de uso en Antigravity

- [ ] Guardar este documento como `04_ECOSYSTEM_ACTORS_MATRIX.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `01_PRODUCT_VISION.md`.
- [ ] Validar consistencia con `02_MVP_SCOPE.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Crear seeds iniciales de actores.
- [ ] Confirmar si actores serán catálogo o módulo propio.
- [ ] Confirmar permisos por actor.
- [ ] Confirmar documentos por actor.
- [ ] Confirmar eventos auditables por actor.
- [ ] Confirmar mapeo con modelos Odoo referenciales.
- [ ] Confirmar que no existe integración directa con Odoo.

---

## 25. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

