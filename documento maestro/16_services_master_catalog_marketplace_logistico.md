# 16_SERVICES_MASTER_CATALOG.md

# Documento Maestro del Catálogo Maestro de Servicios Logísticos
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `16_SERVICES_MASTER_CATALOG.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional, técnico y comercial |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documento base relacionado | `15_MASTER_CATALOGS_MVP.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md`, `15_MASTER_CATALOGS_MVP.md` |

---

## 2. Propósito del documento

Este documento define el **catálogo maestro de servicios logísticos** que será utilizado por el Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como fuente de verdad para que Antigravity pueda crear, organizar y desarrollar las fichas maestras de servicios que las tiendas logísticas publicarán dentro del marketplace.

Este documento define:

1. Categorías principales de servicios logísticos.
2. Subcategorías de servicios.
3. Fichas maestras de servicios.
4. Códigos únicos de servicios.
5. Campos funcionales de cada ficha.
6. Reglas comerciales.
7. Tarifas referenciales.
8. Unidades de medida.
9. Documentos requeridos.
10. SLA referenciales.
11. Comisiones sugeridas.
12. Evidencias requeridas.
13. Estados del servicio.
14. Permisos asociados.
15. Endpoints Nest.js.
16. Componentes React.js.
17. Tablas MySQL relacionadas.
18. Relación conceptual con Odoo.
19. Seeds iniciales.
20. Criterios de aceptación.
21. Prompt para Antigravity.

---

## 3. Objetivo general

Definir el catálogo maestro de servicios logísticos del MVP, estableciendo una estructura ordenada, codificada y reutilizable para que cada tienda logística pueda publicar servicios consistentes, comparables y cotizables dentro del marketplace.

---

## 4. Objetivos específicos

1. Definir las categorías maestras de servicios.
2. Definir subcategorías maestras.
3. Definir fichas maestras de servicios por categoría.
4. Estandarizar códigos de servicios.
5. Estandarizar campos comerciales y operativos.
6. Definir documentos requeridos por tipo de servicio.
7. Definir tarifas referenciales y unidades de medida.
8. Definir SLA por servicio.
9. Definir reglas y restricciones.
10. Definir comisiones sugeridas.
11. Definir evidencias requeridas por servicio.
12. Definir servicios MVP y servicios posteriores.
13. Definir relación con módulos funcionales.
14. Definir relación con tablas MySQL.
15. Definir endpoints API.
16. Definir componentes React.js.
17. Definir seeds iniciales.
18. Definir criterios de aceptación.
19. Servir como guía directa para Antigravity.

---

## 5. Alcance del catálogo de servicios

El catálogo maestro cubre servicios relacionados con el ecosistema digital de un puerto aduanero, incluyendo:

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
11. TOS básico.
12. Evidencias operativas.
13. Soporte logístico.

---

## 6. Principios del catálogo maestro de servicios

Antigravity debe respetar los siguientes principios:

1. Todo servicio debe tener código único.
2. Todo servicio debe pertenecer a una categoría.
3. Todo servicio debe pertenecer a una tienda logística aprobada para publicarse.
4. Todo servicio debe tener nombre, descripción, alcance, tarifa, unidad, SLA y estado.
5. Todo servicio debe indicar documentos requeridos cuando aplique.
6. Todo servicio debe indicar reglas comerciales y operativas.
7. Todo servicio debe indicar comisión referencial.
8. Todo servicio debe tener estado de aprobación y publicación.
9. Todo cambio de tarifa debe generar auditoría.
10. Todo servicio publicado debe aparecer en búsqueda pública.
11. Todo servicio pausado no debe poder cotizarse públicamente.
12. Todo servicio rechazado no debe publicarse.
13. Los servicios deben ser comparables entre tiendas.
14. Los catálogos deben evitar texto libre en campos controlados.
15. Odoo se usa solo como referencia conceptual, no como integración.

---

## 7. Modelo conceptual de ficha maestra de servicio

Cada ficha maestra de servicio debe tener los siguientes campos:

| Campo | Descripción |
|---|---|
| Código | Código único del servicio |
| Nombre | Nombre comercial del servicio |
| Categoría | Categoría principal |
| Subcategoría | Subcategoría específica |
| Proveedor / tienda | Tienda logística que ofrece el servicio |
| Descripción | Explicación comercial del servicio |
| Alcance | Qué incluye y qué no incluye |
| Documentos requeridos | Documentos que debe cargar el cliente |
| Tarifa | Precio base o rango referencial |
| Moneda | Moneda de la tarifa |
| Unidad de medida | Servicio, contenedor, documento, viaje, hora, día, etc. |
| Tiempo estimado | Tiempo operativo estimado |
| SLA | Compromiso de respuesta o ejecución |
| Estado | Borrador, pendiente, aprobado, publicado, pausado, rechazado |
| Reglas | Condiciones comerciales y operativas |
| Comisión | Comisión del marketplace |
| Evidencias | Evidencias requeridas para cierre o validación |
| Módulo relacionado | Módulo funcional que consume el servicio |
| Endpoint relacionado | API relacionada |
| Componente React relacionado | Componente visual principal |
| Modelo Odoo referencial | Modelo conceptual equivalente |

---

## 8. Estructura de código de servicios

Formato recomendado:

```txt
SER-[CATEGORIA]-[SECUENCIAL]
```

Ejemplos:

| Código | Significado |
|---|---|
| `SER-ADU-001` | Servicio aduanal 001 |
| `SER-TRA-001` | Servicio de transporte 001 |
| `SER-PUE-001` | Servicio portuario 001 |
| `SER-TER-001` | Servicio de terminal 001 |
| `SER-ALM-001` | Servicio de almacenamiento 001 |
| `SER-INS-001` | Servicio de inspección 001 |
| `SER-SEG-001` | Servicio de seguro 001 |
| `SER-PAG-001` | Servicio de pago 001 |
| `SER-DOC-001` | Servicio documental 001 |
| `SER-TEC-001` | Servicio tecnológico 001 |
| `SER-TOS-001` | Servicio TOS 001 |

---

## 9. Categorías maestras de servicios

| Código | Categoría | Descripción | Prioridad MVP |
|---|---|---|---|
| `CUSTOMS` | Aduana | Servicios de gestión, revisión y trámite aduanal | Alta |
| `TRANSPORT` | Transporte | Servicios de traslado de carga o contenedores | Alta |
| `PORT` | Puerto | Servicios relacionados con operación portuaria | Media |
| `TERMINAL` | Terminal | Servicios operativos de terminal portuaria | Media |
| `STORAGE` | Almacenamiento | Almacén fiscal, depósito, custodia e inventario | Alta |
| `INSPECTION` | Inspección | Inspecciones físicas, documentales o técnicas | Alta |
| `INSURANCE` | Seguros | Coberturas y pólizas logísticas | Media |
| `PAYMENTS` | Pagos | Registro, confirmación o soporte de pagos | Media |
| `DOCUMENTATION` | Documentación | Preparación, revisión y gestión documental | Alta |
| `TECHNOLOGY` | Tecnología | Servicios digitales, trazabilidad, TOS y soporte tecnológico | Media |

---

## 10. Relación categoría, actor y tipo de tienda

| Categoría | Actor principal | Tipo de tienda sugerida |
|---|---|---|
| Aduana | Agente aduanal | `CUSTOMS_AGENT` |
| Transporte | Transportista | `CARRIER` |
| Puerto | Autoridad portuaria / operador portuario | `MARKETPLACE_OPERATOR` / `PORT_TERMINAL` |
| Terminal | Terminal portuaria | `PORT_TERMINAL` |
| Almacenamiento | Almacén fiscal | `BONDED_WAREHOUSE` |
| Inspección | Inspector / empresa inspectora | `INSPECTION_COMPANY` |
| Seguros | Aseguradora | `INSURANCE_COMPANY` |
| Pagos | Banco / proveedor de pago | `PAYMENT_PROVIDER` |
| Documentación | Gestor documental / agente | `DOCUMENTATION_PROVIDER` |
| Tecnología | Proveedor tecnológico / marketplace | `TECH_PROVIDER` |

---

# 11. Catálogo maestro de servicios MVP

---

## 11.1 Servicios de Aduana

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-ADU-001` | Despacho aduanal básico de importación | `CUSTOMS_CLEARANCE` | Servicio | 450.00 | 48 h | Sí |
| `SER-ADU-002` | Revisión documental aduanal | `CUSTOMS_DOCUMENT_REVIEW` | Documento | 85.00 | 24 h | Sí |
| `SER-ADU-003` | Gestión de importación | `IMPORT_PROCESSING` | Embarque | 650.00 | 72 h | Sí |
| `SER-ADU-004` | Gestión de exportación | `EXPORT_PROCESSING` | Embarque | 600.00 | 72 h | Sí |
| `SER-ADU-005` | Clasificación arancelaria referencial | `CUSTOMS_DOCUMENT_REVIEW` | Servicio | 120.00 | 48 h | Sí |
| `SER-ADU-006` | Asistencia para permisos de importación | `IMPORT_PROCESSING` | Servicio | 250.00 | 5 días | Posterior |
| `SER-ADU-007` | Gestión de observación aduanera | `CUSTOMS_CLEARANCE` | Caso | 300.00 | 72 h | Posterior |

---

## 11.2 Servicios de Transporte

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-TRA-001` | Transporte drayage local por contenedor | `DRAYAGE` | Viaje | 350.00 | 24 h | Sí |
| `SER-TRA-002` | Transporte local de carga general | `LOCAL_TRUCKING` | Viaje | 280.00 | 24 h | Sí |
| `SER-TRA-003` | Transporte de larga distancia | `LONG_HAUL_TRUCKING` | Milla / viaje | 2.50 por milla | 48 h | Posterior |
| `SER-TRA-004` | Transporte refrigerado | `LOCAL_TRUCKING` | Viaje | 550.00 | 24 h | Posterior |
| `SER-TRA-005` | Transporte de carga sobredimensionada | `LONG_HAUL_TRUCKING` | Viaje | 950.00 | 72 h | Posterior |
| `SER-TRA-006` | Evidencia de entrega digital | `DIGITAL_TRACKING` | Entrega | 35.00 | 4 h | Sí |

---

## 11.3 Servicios Portuarios

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-PUE-001` | Gestión de acceso portuario referencial | `PORT_SERVICE` | Servicio | 150.00 | 48 h | Posterior |
| `SER-PUE-002` | Coordinación operativa con puerto | `PORT_SERVICE` | Caso | 250.00 | 48 h | Posterior |
| `SER-PUE-003` | Consulta de disponibilidad operativa | `PORT_SERVICE` | Consulta | 50.00 | 12 h | Posterior |

---

## 11.4 Servicios de Terminal

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-TER-001` | Registro de gate-in referencial | `TERMINAL_SERVICE` | Contenedor | 40.00 | 4 h | Sí, parcial |
| `SER-TER-002` | Registro de gate-out referencial | `TERMINAL_SERVICE` | Contenedor | 40.00 | 4 h | Sí, parcial |
| `SER-TER-003` | Movimiento interno de contenedor | `TERMINAL_SERVICE` | Movimiento | 85.00 | 8 h | Sí, parcial |
| `SER-TER-004` | Bloqueo o liberación referencial de contenedor | `TERMINAL_SERVICE` | Contenedor | 65.00 | 8 h | Sí, parcial |
| `SER-TER-005` | Consulta de ubicación de contenedor | `TERMINAL_SERVICE` | Consulta | 25.00 | 2 h | Sí, parcial |

---

## 11.5 Servicios de Almacenamiento

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-ALM-001` | Recepción de mercancía en almacén | `BONDED_WAREHOUSE` | Embarque | 180.00 | 24 h | Sí |
| `SER-ALM-002` | Almacenamiento por día | `CONTAINER_STORAGE` | Día | 45.00 | N/A | Sí |
| `SER-ALM-003` | Movimiento interno de almacén | `BONDED_WAREHOUSE` | Movimiento | 65.00 | 8 h | Sí |
| `SER-ALM-004` | Despacho de mercancía | `BONDED_WAREHOUSE` | Embarque | 160.00 | 24 h | Sí |
| `SER-ALM-005` | Emisión de recibo de almacén | `BONDED_WAREHOUSE` | Documento | 35.00 | 12 h | Sí |
| `SER-ALM-006` | Custodia especial de carga | `CONTAINER_STORAGE` | Día | 120.00 | N/A | Posterior |

---

## 11.6 Servicios de Inspección

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-INS-001` | Inspección física de carga | `PHYSICAL_INSPECTION` | Inspección | 220.00 | 48 h | Sí |
| `SER-INS-002` | Inspección documental | `DOCUMENT_INSPECTION` | Documento | 75.00 | 24 h | Sí |
| `SER-INS-003` | Inspección fotográfica con evidencia | `PHYSICAL_INSPECTION` | Inspección | 180.00 | 24 h | Sí |
| `SER-INS-004` | Inspección de seguridad | `PHYSICAL_INSPECTION` | Inspección | 300.00 | 72 h | Posterior |
| `SER-INS-005` | Acta digital de inspección | `DOCUMENT_INSPECTION` | Documento | 50.00 | 12 h | Sí |

---

## 11.7 Servicios de Seguros

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-SEG-001` | Cotización de seguro de carga | `CARGO_INSURANCE` | Cotización | 35.00 | 24 h | Sí, parcial |
| `SER-SEG-002` | Emisión de póliza de carga | `CARGO_INSURANCE` | Póliza | 150.00 | 48 h | Posterior |
| `SER-SEG-003` | Revisión de cobertura de seguro | `CARGO_INSURANCE` | Documento | 60.00 | 24 h | Posterior |

---

## 11.8 Servicios de Pagos

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-PAG-001` | Registro de comprobante de pago | `PAYMENT_CONFIRMATION` | Comprobante | 0.00 | 4 h | Sí |
| `SER-PAG-002` | Confirmación manual de pago | `PAYMENT_CONFIRMATION` | Pago | 15.00 | 24 h | Sí |
| `SER-PAG-003` | Conciliación referencial de pago | `PAYMENT_CONFIRMATION` | Pago | 25.00 | 48 h | Posterior |

---

## 11.9 Servicios de Documentación

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-DOC-001` | Preparación de paquete documental | `CUSTOMS_DOCUMENT_REVIEW` | Embarque | 180.00 | 48 h | Sí |
| `SER-DOC-002` | Revisión de Commercial Invoice | `CUSTOMS_DOCUMENT_REVIEW` | Documento | 45.00 | 12 h | Sí |
| `SER-DOC-003` | Revisión de Packing List | `CUSTOMS_DOCUMENT_REVIEW` | Documento | 45.00 | 12 h | Sí |
| `SER-DOC-004` | Validación de Bill of Lading | `CUSTOMS_DOCUMENT_REVIEW` | Documento | 60.00 | 24 h | Sí |
| `SER-DOC-005` | Organización de documentos por orden | `CUSTOMS_DOCUMENT_REVIEW` | Orden | 90.00 | 24 h | Sí |
| `SER-DOC-006` | Corrección documental asistida | `CUSTOMS_DOCUMENT_REVIEW` | Documento | 80.00 | 24 h | Posterior |

---

## 11.10 Servicios de Tecnología

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-TEC-001` | Trazabilidad digital de orden | `DIGITAL_TRACKING` | Orden | 25.00 | 4 h | Sí |
| `SER-TEC-002` | Configuración de perfil de tienda | `DIGITAL_TRACKING` | Tienda | 0.00 | 24 h | Sí |
| `SER-TEC-003` | Activación de dashboard operativo | `DIGITAL_TRACKING` | Usuario | 0.00 | 24 h | Sí |
| `SER-TEC-004` | Soporte técnico marketplace | `DIGITAL_TRACKING` | Ticket | 0.00 | 24 h | Sí |
| `SER-TEC-005` | Integración API futura | `DIGITAL_TRACKING` | Proyecto | 1500.00 | 15 días | Posterior |

---

## 11.11 Servicios TOS básicos

| Código | Servicio | Subcategoría | Unidad | Tarifa referencial USD | SLA | MVP |
|---|---|---|---|---:|---|---|
| `SER-TOS-001` | Registro de contenedor en TOS básico | `TOS_SERVICE` | Contenedor | 20.00 | 2 h | Sí, parcial |
| `SER-TOS-002` | Movimiento de contenedor en patio | `TOS_SERVICE` | Movimiento | 85.00 | 8 h | Sí, parcial |
| `SER-TOS-003` | Bloqueo de contenedor | `TOS_SERVICE` | Contenedor | 35.00 | 4 h | Sí, parcial |
| `SER-TOS-004` | Liberación de contenedor | `TOS_SERVICE` | Contenedor | 35.00 | 4 h | Sí, parcial |
| `SER-TOS-005` | Consulta de estado de contenedor | `TOS_SERVICE` | Consulta | 15.00 | 1 h | Sí, parcial |

---

# 12. Fichas maestras detalladas por servicio MVP

---

## 12.1 Ficha `SER-ADU-001` — Despacho aduanal básico de importación

| Campo | Valor referencial |
|---|---|
| Código | `SER-ADU-001` |
| Nombre | Despacho aduanal básico de importación |
| Categoría | Aduana |
| Subcategoría | Despacho aduanal |
| Tipo de tienda | Agente aduanal |
| Descripción | Servicio de gestión básica para el despacho aduanal de una operación de importación. |
| Alcance | Revisión inicial, preparación de datos, coordinación documental y seguimiento básico del trámite. |
| No incluye | Impuestos, aranceles, multas, costos oficiales, almacenaje, demoras ni transporte. |
| Documentos requeridos | Commercial Invoice, Packing List, Bill of Lading, Power of Attorney, Arrival Notice si aplica. |
| Tarifa referencial | 450.00 USD |
| Unidad de medida | Servicio |
| Tiempo estimado | 24 a 48 horas hábiles después de recibir documentos completos. |
| SLA | Respuesta inicial en 24 horas, ejecución referencial en 48 horas. |
| Estado inicial | Borrador / pendiente de aprobación. |
| Comisión marketplace | 10% referencial. |
| Evidencias | Confirmación de recepción documental, actualización de estado, documento de cierre o reporte. |
| Reglas | El servicio requiere documentos completos. La tarifa puede variar por complejidad. |
| Módulo relacionado | Cotizaciones, órdenes, documentos, aduana. |
| Endpoint principal | `POST /quotations`, `POST /services` |
| Componente React | `ServiceDetailPage`, `RequestQuoteModal`, `ServiceDocumentChecklist` |
| Modelo Odoo referencial | `product.template`, `sale.order`, `ir.attachment` |

---

## 12.2 Ficha `SER-ADU-002` — Revisión documental aduanal

| Campo | Valor referencial |
|---|---|
| Código | `SER-ADU-002` |
| Nombre | Revisión documental aduanal |
| Categoría | Aduana |
| Subcategoría | Revisión documental |
| Tipo de tienda | Agente aduanal / gestor documental |
| Descripción | Revisión básica de documentos comerciales y logísticos antes del trámite aduanal. |
| Alcance | Validación de consistencia entre factura, packing list, BL y datos de carga. |
| No incluye | Correcciones legales, emisión de documentos ni presentación formal ante autoridad. |
| Documentos requeridos | Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin si aplica. |
| Tarifa referencial | 85.00 USD |
| Unidad de medida | Documento / paquete documental |
| Tiempo estimado | 12 a 24 horas. |
| SLA | Respuesta en 12 horas, entrega de observaciones en 24 horas. |
| Comisión marketplace | 10% referencial. |
| Evidencias | Checklist documental, observaciones y resultado de revisión. |
| Reglas | Documentos ilegibles o incompletos pueden generar rechazo. |
| Modelo Odoo referencial | `ir.attachment`, `product.template`, `sale.order` |

---

## 12.3 Ficha `SER-TRA-001` — Transporte drayage local por contenedor

| Campo | Valor referencial |
|---|---|
| Código | `SER-TRA-001` |
| Nombre | Transporte drayage local por contenedor |
| Categoría | Transporte |
| Subcategoría | Drayage |
| Tipo de tienda | Transportista |
| Descripción | Servicio de transporte local de contenedor desde terminal o puerto hacia destino cercano. |
| Alcance | Coordinación de unidad, conductor, retiro, traslado y evidencia de entrega. |
| No incluye | Demoras, almacenaje, citas especiales, peajes especiales, multas ni costos de terminal. |
| Documentos requeridos | Delivery Order, Bill of Lading, autorización de retiro, datos de contenedor. |
| Tarifa referencial | 350.00 USD |
| Unidad de medida | Viaje |
| Tiempo estimado | 24 horas según disponibilidad. |
| SLA | Asignación en 24 horas. |
| Comisión marketplace | 8% referencial. |
| Evidencias | Prueba de retiro, prueba de entrega, fotos si aplica. |
| Reglas | La tarifa depende de distancia, cita, peso y restricciones de carga. |
| Modelo Odoo referencial | `fleet.vehicle`, `stock.picking`, `project.task` |

---

## 12.4 Ficha `SER-ALM-001` — Recepción de mercancía en almacén

| Campo | Valor referencial |
|---|---|
| Código | `SER-ALM-001` |
| Nombre | Recepción de mercancía en almacén |
| Categoría | Almacenamiento |
| Subcategoría | Almacén fiscal |
| Tipo de tienda | Almacén fiscal |
| Descripción | Recepción operativa de mercancía o contenedor en almacén autorizado. |
| Alcance | Registro de ingreso, asignación de ubicación, evidencia de recepción y estado inicial. |
| No incluye | Almacenamiento prolongado, inspecciones adicionales, manipulación especial o despacho. |
| Documentos requeridos | Packing List, Warehouse Instruction, Bill of Lading, identificación de carga. |
| Tarifa referencial | 180.00 USD |
| Unidad de medida | Embarque |
| Tiempo estimado | 24 horas. |
| SLA | Registro de recepción en 24 horas. |
| Comisión marketplace | 8% referencial. |
| Evidencias | Recibo de almacén, fotos, ubicación asignada. |
| Reglas | Mercancía debe estar identificada y documentada. |
| Modelo Odoo referencial | `stock.location`, `stock.quant`, `stock.picking` |

---

## 12.5 Ficha `SER-INS-001` — Inspección física de carga

| Campo | Valor referencial |
|---|---|
| Código | `SER-INS-001` |
| Nombre | Inspección física de carga |
| Categoría | Inspección |
| Subcategoría | Inspección física |
| Tipo de tienda | Empresa inspectora |
| Descripción | Inspección física básica de carga, contenedor o mercancía. |
| Alcance | Programación, revisión visual, checklist, fotografías y resultado básico. |
| No incluye | Certificaciones oficiales, análisis de laboratorio ni servicios regulatorios especializados. |
| Documentos requeridos | Orden de servicio, Packing List, instrucciones de inspección. |
| Tarifa referencial | 220.00 USD |
| Unidad de medida | Inspección |
| Tiempo estimado | 24 a 48 horas. |
| SLA | Programación en 24 horas, resultado en 48 horas. |
| Comisión marketplace | 10% referencial. |
| Evidencias | Checklist, fotos, resultado de inspección. |
| Reglas | Requiere acceso físico a la carga y autorización del cliente. |
| Modelo Odoo referencial | `quality.check`, `quality.point`, `ir.attachment` |

---

## 12.6 Ficha `SER-DOC-001` — Preparación de paquete documental

| Campo | Valor referencial |
|---|---|
| Código | `SER-DOC-001` |
| Nombre | Preparación de paquete documental |
| Categoría | Documentación |
| Subcategoría | Revisión documental |
| Tipo de tienda | Gestor documental / agente aduanal |
| Descripción | Organización de documentos necesarios para una operación logística o aduanal. |
| Alcance | Revisión de presencia, ordenamiento, checklist y preparación para envío a proveedor. |
| No incluye | Emisión legal de documentos, certificaciones oficiales ni correcciones de fondo. |
| Documentos requeridos | Commercial Invoice, Packing List, BL, POA si aplica. |
| Tarifa referencial | 180.00 USD |
| Unidad de medida | Embarque |
| Tiempo estimado | 24 a 48 horas. |
| SLA | Checklist inicial en 24 horas. |
| Comisión marketplace | 10% referencial. |
| Evidencias | Checklist documental y paquete cargado. |
| Reglas | La preparación depende de que el cliente suministre documentos completos. |
| Modelo Odoo referencial | `ir.attachment`, `documents.document`, `sale.order` |

---

## 12.7 Ficha `SER-TOS-001` — Registro de contenedor en TOS básico

| Campo | Valor referencial |
|---|---|
| Código | `SER-TOS-001` |
| Nombre | Registro de contenedor en TOS básico |
| Categoría | Tecnología / TOS |
| Subcategoría | TOS Service |
| Tipo de tienda | Operador marketplace / terminal / proveedor tecnológico |
| Descripción | Registro referencial de contenedor dentro del módulo TOS básico. |
| Alcance | Alta de contenedor, tipo, patio, ubicación inicial y estado. |
| No incluye | Integración real con terminal, EDI, GPS ni automatización portuaria. |
| Documentos requeridos | Datos del contenedor, orden relacionada, BL si aplica. |
| Tarifa referencial | 20.00 USD |
| Unidad de medida | Contenedor |
| Tiempo estimado | 2 horas. |
| SLA | Registro en 2 horas. |
| Comisión marketplace | 0% si es servicio interno, 5% si es proveedor externo. |
| Evidencias | Registro TOS, ubicación inicial y estado. |
| Reglas | Servicio referencial para MVP, no sustituye sistema portuario oficial. |
| Modelo Odoo referencial | `stock.location`, `stock.move`, `stock.quant` |

---

# 13. Documentos requeridos por categoría de servicio

| Categoría | Documentos frecuentes |
|---|---|
| Aduana | Commercial Invoice, Packing List, Bill of Lading, Power of Attorney, Arrival Notice, Customs Entry |
| Transporte | Delivery Order, Bill of Lading, datos de contenedor, dirección origen/destino, autorización de retiro |
| Puerto | Autorización portuaria, datos de carga, documentos de operación, identificación de contenedor |
| Terminal | Número de contenedor, BL, booking, gate instruction, autorización |
| Almacenamiento | Packing List, Warehouse Instruction, BL, identificación de carga, Warehouse Receipt |
| Inspección | Orden de inspección, Packing List, instrucciones, fotos previas si aplica |
| Seguros | Commercial Invoice, Packing List, valor declarado, descripción de mercancía |
| Pagos | Payment Receipt, referencia bancaria, orden relacionada |
| Documentación | Commercial Invoice, Packing List, BL, Certificate of Origin, POA |
| Tecnología | Datos de orden, datos de usuario, datos de tienda, parámetros operativos |
| TOS | Número de contenedor, tipo de contenedor, patio, ubicación, orden relacionada |

---

# 14. Evidencias requeridas por tipo de servicio

| Tipo de servicio | Evidencias sugeridas |
|---|---|
| Aduana | Checklist documental, estado aduanero, reporte de cierre, observaciones |
| Transporte | Prueba de retiro, fotos, ubicación referencial, prueba de entrega |
| Almacenamiento | Recibo de almacén, ubicación asignada, fotos de mercancía, salida/despacho |
| Inspección | Checklist, fotos, resultado, acta digital |
| Documentación | Checklist, paquete documental, observaciones |
| Pagos | Comprobante, confirmación, estado financiero |
| TOS | Registro de contenedor, movimiento, bloqueo, liberación, gate event |
| Tecnología | Ticket, log operativo, confirmación de configuración |

---

# 15. Reglas de tarifa y comisión

## 15.1 Tipos de tarifa

| Código | Descripción |
|---|---|
| `FIXED` | Tarifa fija por unidad |
| `RANGE` | Rango referencial |
| `QUOTE_REQUIRED` | Requiere cotización manual |
| `PER_DAY` | Por día |
| `PER_HOUR` | Por hora |
| `PER_CONTAINER` | Por contenedor |
| `PER_TRIP` | Por viaje |
| `PER_DOCUMENT` | Por documento |

## 15.2 Comisiones referenciales por categoría

| Categoría | Comisión referencial MVP |
|---|---:|
| Aduana | 10% |
| Transporte | 8% |
| Puerto | 5% |
| Terminal | 5% |
| Almacenamiento | 8% |
| Inspección | 10% |
| Seguros | 7% |
| Pagos | 0% a 3% |
| Documentación | 10% |
| Tecnología | 0% a 12% |
| TOS interno | 0% |
| TOS proveedor externo | 5% |

## 15.3 Reglas

1. La comisión debe calcularse en backend.
2. El frontend solo muestra el resultado calculado.
3. No se deben hardcodear comisiones en componentes React.
4. Cambios de comisión deben generar auditoría.
5. Las comisiones pueden depender de categoría, tipo de tienda o regla global.
6. Los servicios internos del marketplace pueden tener comisión cero.

---

# 16. Estados del servicio

| Estado | Descripción | Acción permitida |
|---|---|---|
| `DRAFT` | Servicio en edición | Editar |
| `PENDING_APPROVAL` | En revisión | Esperar aprobación |
| `APPROVED` | Aprobado por superadministrador | Publicar |
| `REJECTED` | Rechazado | Corregir o archivar |
| `PUBLISHED` | Visible en marketplace | Cotizar |
| `PAUSED` | Temporalmente pausado | Reactivar |
| `INACTIVE` | Inactivo | No cotizable |

---

# 17. Reglas de publicación

Un servicio puede publicarse únicamente si cumple:

1. La tienda está aprobada.
2. El servicio tiene categoría activa.
3. El servicio tiene subcategoría válida si aplica.
4. El servicio tiene nombre.
5. El servicio tiene descripción.
6. El servicio tiene alcance.
7. El servicio tiene tarifa o indica que requiere cotización.
8. El servicio tiene unidad de medida.
9. El servicio tiene SLA o tiempo estimado.
10. El servicio tiene documentos requeridos definidos cuando aplique.
11. El servicio fue aprobado por un usuario con permiso.
12. No está pausado ni inactivo.

---

# 18. Reglas de cotización de servicios

1. Solo servicios publicados pueden cotizarse públicamente.
2. El cliente debe estar autenticado para crear cotización.
3. La cotización debe asociarse a servicio, tienda y cliente.
4. El servicio puede requerir documentos antes de responder.
5. La tienda solo puede responder cotizaciones de sus servicios.
6. El precio final puede ser diferente a la tarifa base si el servicio requiere cotización.
7. Todo cambio de estado de cotización debe auditarse.
8. El servicio pausado no debe aceptar nuevas cotizaciones.
9. Las cotizaciones históricas conservan el precio respondido aunque cambie la tarifa del servicio.

---

# 19. Tablas MySQL relacionadas

| Tabla | Uso |
|---|---|
| `services` | Ficha principal del servicio |
| `service_categories` | Categorías de servicios |
| `service_pricing` | Tarifas y reglas de precio |
| `service_documents` | Documentos requeridos por servicio |
| `stores` | Tienda proveedora |
| `store_users` | Usuarios asociados a tienda |
| `commission_rules` | Reglas de comisión |
| `commissions` | Comisiones calculadas |
| `quotations` | Cotizaciones generadas desde servicios |
| `quotation_lines` | Líneas de cotización |
| `orders` | Órdenes generadas desde cotizaciones aprobadas |
| `documents` | Documentos cargados |
| `evidences` | Evidencias operativas |
| `reviews` | Reviews del servicio o tienda |
| `audit_logs` | Auditoría de cambios críticos |
| `master_catalogs` | Catálogos generales |
| `master_catalog_items` | Ítems de catálogos |

---

# 20. Endpoints Nest.js relacionados

## 20.1 Servicios

| Método | Endpoint | Uso | Permiso |
|---|---|---|---|
| GET | `/services` | Listar servicios | `services.view` o público filtrado |
| GET | `/services/:id` | Ver servicio | Público si publicado |
| POST | `/services` | Crear servicio | `services.create` |
| PATCH | `/services/:id` | Editar servicio | `services.update_own` |
| PATCH | `/services/:id/submit-approval` | Enviar a aprobación | `services.update_own` |
| PATCH | `/services/:id/approve` | Aprobar servicio | `services.approve` |
| PATCH | `/services/:id/reject` | Rechazar servicio | `services.approve` |
| PATCH | `/services/:id/publish` | Publicar servicio | `services.publish` |
| PATCH | `/services/:id/pause` | Pausar servicio | `services.pause` |
| PATCH | `/services/:id/reactivate` | Reactivar servicio | `services.publish` |
| GET | `/services/:id/documents-required` | Documentos requeridos | Público si publicado |
| GET | `/services/:id/pricing` | Tarifas del servicio | `services.view` |
| POST | `/services/:id/pricing` | Crear tarifa | `services.update_own` |

## 20.2 Búsqueda

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/search/services` | Buscar servicios publicados |
| GET | `/search/categories` | Categorías públicas |
| GET | `/search/suggestions` | Sugerencias |

## 20.3 Cotización desde servicio

| Método | Endpoint | Uso | Permiso |
|---|---|---|---|
| POST | `/quotations` | Crear cotización desde servicio | `quotations.create` |
| POST | `/quotations/:id/convert-to-order` | Convertir cotización aprobada en orden | `quotations.convert_to_order` |

---

# 21. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `ServiceListPage` | Listado privado o administrativo de servicios |
| `ServiceForm` | Crear o editar ficha de servicio |
| `ServiceDetailPage` | Detalle público del servicio |
| `ServiceResultCard` | Card de búsqueda |
| `ServicePricingBox` | Visualizar tarifa y unidad |
| `ServiceDocumentChecklist` | Mostrar documentos requeridos |
| `ServiceSlaPanel` | Mostrar tiempo estimado y SLA |
| `ServiceProviderCard` | Mostrar tienda proveedora |
| `ServiceApprovalPanel` | Aprobar o rechazar servicio |
| `ServiceStatusBadge` | Estado del servicio |
| `RelatedServicesSection` | Servicios relacionados |
| `RequestQuoteModal` | Solicitar cotización desde servicio |
| `ServiceCategorySelect` | Selector de categoría |
| `ServiceSubcategorySelect` | Selector de subcategoría |
| `UnitMeasureSelect` | Selector de unidad de medida |
| `DocumentTypeSelect` | Selector de documentos requeridos |
| `CommissionPreviewCard` | Vista previa de comisión |

---

# 22. Permisos relacionados

| Permiso | Descripción |
|---|---|
| `services.view` | Ver servicios |
| `services.create` | Crear servicios |
| `services.update_own` | Editar servicios propios de tienda |
| `services.update` | Editar cualquier servicio |
| `services.submit_approval` | Enviar servicio a aprobación |
| `services.approve` | Aprobar o rechazar servicios |
| `services.publish` | Publicar o reactivar servicios |
| `services.pause` | Pausar servicios |
| `services.delete` | Eliminar lógicamente o inactivar servicios |
| `services.manage_pricing` | Administrar tarifas |
| `services.manage_documents` | Administrar documentos requeridos |
| `services.audit` | Ver auditoría del servicio |

---

# 23. Auditoría de servicios

## 23.1 Eventos auditables

| Evento | Descripción | Criticidad |
|---|---|---|
| `service.created` | Servicio creado | medium |
| `service.updated` | Servicio actualizado | medium |
| `service.price.changed` | Tarifa modificada | high |
| `service.submitted_for_approval` | Servicio enviado a aprobación | medium |
| `service.approved` | Servicio aprobado | high |
| `service.rejected` | Servicio rechazado | high |
| `service.published` | Servicio publicado | high |
| `service.paused` | Servicio pausado | medium |
| `service.reactivated` | Servicio reactivado | medium |
| `service.document_required.added` | Documento requerido agregado | medium |
| `service.document_required.removed` | Documento requerido removido | high |
| `service.commission.changed` | Comisión modificada | high |
| `service.viewed` | Servicio visto por usuario autenticado | low |

## 23.2 Reglas

1. Cambios de tarifa siempre se auditan.
2. Cambios de comisión siempre se auditan.
3. Cambios de estado se auditan.
4. Aprobaciones y rechazos requieren usuario autorizado.
5. Rechazos deben tener motivo.

---

# 24. DTOs sugeridos

## 24.1 `CreateServiceDto`

```json
{
  "storeId": 20,
  "categoryCode": "CUSTOMS",
  "subcategoryCode": "CUSTOMS_CLEARANCE",
  "serviceName": "Customs Clearance Basic Service",
  "description": "Servicio básico de gestión aduanal",
  "scope": "Revisión documental, preparación y seguimiento básico",
  "exclusions": "No incluye impuestos, aranceles, multas ni costos oficiales",
  "basePrice": 450.00,
  "currencyCode": "USD",
  "unitMeasure": "SERVICE",
  "estimatedTime": "24-48 hours",
  "slaHours": 48,
  "rules": "Cliente debe cargar documentos completos",
  "commissionPercentage": 10.00,
  "requiredDocuments": [
    "COMMERCIAL_INVOICE",
    "PACKING_LIST",
    "BILL_OF_LADING",
    "POWER_OF_ATTORNEY"
  ],
  "evidenceRequirements": [
    "DOCUMENT_CHECKLIST",
    "CLOSING_REPORT"
  ]
}
```

## 24.2 `UpdateServiceDto`

```json
{
  "serviceName": "Customs Clearance Basic Service",
  "description": "Updated service description",
  "scope": "Updated scope",
  "basePrice": 475.00,
  "estimatedTime": "24-48 hours",
  "slaHours": 48,
  "rules": "Updated rules"
}
```

## 24.3 `UpdateServiceStatusDto`

```json
{
  "newStatus": "PUBLISHED",
  "reason": "Service approved and ready for publication"
}
```

## 24.4 `CreateServicePricingDto`

```json
{
  "priceType": "FIXED",
  "priceAmount": 450.00,
  "minAmount": null,
  "maxAmount": null,
  "currencyCode": "USD",
  "unitMeasure": "SERVICE"
}
```

---

# 25. Seeds sugeridos para catálogo de servicios

## 25.1 Seed general de servicio

```json
{
  "serviceCode": "SER-ADU-001",
  "serviceName": "Despacho aduanal básico de importación",
  "categoryCode": "CUSTOMS",
  "subcategoryCode": "CUSTOMS_CLEARANCE",
  "description": "Servicio de gestión básica para despacho aduanal de importación.",
  "scope": "Revisión inicial, preparación de datos, coordinación documental y seguimiento básico.",
  "basePrice": 450.00,
  "currencyCode": "USD",
  "unitMeasure": "SERVICE",
  "estimatedTime": "24-48 hours",
  "slaHours": 48,
  "commissionPercentage": 10.00,
  "approvalStatus": "APPROVED",
  "publicationStatus": "PUBLISHED",
  "requiredDocuments": [
    "COMMERCIAL_INVOICE",
    "PACKING_LIST",
    "BILL_OF_LADING",
    "POWER_OF_ATTORNEY"
  ],
  "evidenceRequirements": [
    "DOCUMENT_CHECKLIST",
    "CLOSING_REPORT"
  ]
}
```

## 25.2 Regla

Los servicios seed pueden crearse como plantillas maestras del marketplace. Luego cada tienda logística aprobada puede crear sus propios servicios a partir de estas plantillas.

---

# 26. Modelo de plantillas de servicios vs servicios de tienda

## 26.1 Plantilla maestra de servicio

Representa una definición estándar del marketplace.

Ejemplo:

```txt
SER-ADU-001 — Despacho aduanal básico de importación
```

## 26.2 Servicio publicado por tienda

Representa la oferta real de una tienda logística.

Ejemplo:

```txt
Tienda: Port Logistics Services LLC
Servicio publicado: Despacho aduanal básico de importación
Precio: 475.00 USD
SLA: 48 h
```

## 26.3 Recomendación técnica

Para el MVP se puede iniciar con una sola tabla `services`, pero se recomienda preparar una estructura futura:

1. `service_templates` para plantillas maestras.
2. `services` para servicios publicados por tiendas.

## 26.4 Regla MVP

Si no se crea `service_templates` en el MVP, los servicios seed deben marcarse como referencias o ejemplos y no como servicios publicados reales sin tienda aprobada.

---

# 27. Tabla futura opcional `service_templates`

## 27.1 Propósito

Permitir que el superadministrador mantenga un catálogo maestro de servicios reutilizable por las tiendas.

## 27.2 Campos sugeridos

| Campo | Descripción |
|---|---|
| `id` | Identificador |
| `template_code` | Código maestro |
| `template_name` | Nombre del servicio maestro |
| `category_code` | Categoría |
| `subcategory_code` | Subcategoría |
| `description` | Descripción estándar |
| `default_scope` | Alcance estándar |
| `default_documents` | Documentos sugeridos |
| `default_unit_measure` | Unidad sugerida |
| `default_sla_hours` | SLA sugerido |
| `default_commission_percentage` | Comisión sugerida |
| `status` | Estado |

## 27.3 Estado MVP

Opcional. Puede quedar para fase posterior si se desea simplificar.

---

# 28. Relación con módulos funcionales

| Módulo | Relación con servicios |
|---|---|
| Tiendas | Cada tienda crea y administra sus servicios |
| Servicios | Módulo principal del catálogo de servicios |
| Búsqueda | Los servicios publicados aparecen en resultados |
| Perfil público de tienda | Lista servicios publicados de la tienda |
| Cotizaciones | El cliente solicita cotización sobre un servicio |
| Órdenes | Una cotización aprobada genera orden de servicio |
| Documentos | Cada servicio puede exigir documentos |
| Pagos | Las órdenes de servicio generan pagos |
| Comisiones | Cada servicio puede tener comisión |
| Reportes | Servicios generan métricas y reportes |
| Auditoría | Cambios críticos del servicio se auditan |
| TOS | Algunos servicios activan flujos TOS |
| Transporte | Servicios de transporte activan viajes |
| Almacenamiento | Servicios de almacén activan inventario básico |
| Inspecciones | Servicios de inspección activan checklists y evidencias |

---

# 29. Relación conceptual con Odoo

| Concepto marketplace | Modelo Odoo referencial | Uso conceptual |
|---|---|---|
| Servicio logístico | `product.template` | Ficha principal del servicio |
| Variante futura | `product.product` | Variantes por puerto, contenedor o modalidad |
| Categoría | `product.category` | Clasificación de servicios |
| Unidad | `uom.uom` | Unidad de medida |
| Cotización | `sale.order` | Solicitud comercial |
| Línea de cotización | `sale.order.line` | Servicio cotizado |
| Documento | `ir.attachment` | Documentos requeridos |
| Precio | Lista de precios conceptual | Tarifa base o rango |
| Auditoría | `mail.message` | Historial de cambios |

### Restricción

No se debe integrar Odoo ni copiar tablas Odoo. Este mapeo es únicamente conceptual.

---

# 30. Servicios mínimos recomendados para demo MVP

Para una demo funcional del MVP, se recomienda cargar inicialmente estos servicios:

| Código | Servicio | Categoría |
|---|---|---|
| `SER-ADU-001` | Despacho aduanal básico de importación | Aduana |
| `SER-ADU-002` | Revisión documental aduanal | Aduana |
| `SER-TRA-001` | Transporte drayage local por contenedor | Transporte |
| `SER-TRA-006` | Evidencia de entrega digital | Transporte |
| `SER-ALM-001` | Recepción de mercancía en almacén | Almacenamiento |
| `SER-ALM-002` | Almacenamiento por día | Almacenamiento |
| `SER-INS-001` | Inspección física de carga | Inspección |
| `SER-INS-003` | Inspección fotográfica con evidencia | Inspección |
| `SER-DOC-001` | Preparación de paquete documental | Documentación |
| `SER-DOC-004` | Validación de Bill of Lading | Documentación |
| `SER-PAG-001` | Registro de comprobante de pago | Pagos |
| `SER-TOS-001` | Registro de contenedor en TOS básico | TOS |
| `SER-TOS-002` | Movimiento de contenedor en patio | TOS |
| `SER-TEC-001` | Trazabilidad digital de orden | Tecnología |

---

# 31. Reglas de búsqueda y filtros de servicios

Los servicios publicados deben poder filtrarse por:

1. Texto de búsqueda.
2. Categoría.
3. Subcategoría.
4. Tipo de tienda.
5. Puerto.
6. Terminal.
7. Tipo de carga.
8. Tipo de contenedor.
9. Rango de tarifa.
10. Unidad de medida.
11. Tiempo estimado.
12. SLA.
13. Rating de tienda.
14. Tienda verificada.
15. Estado publicado.

---

# 32. Reglas para cards de servicios

Cada `ServiceResultCard` debe mostrar como mínimo:

1. Nombre del servicio.
2. Categoría.
3. Tienda proveedora.
4. Rating de tienda.
5. Precio desde.
6. Unidad de medida.
7. Tiempo estimado.
8. SLA.
9. Badges de verificación.
10. Botón “Ver detalle”.
11. Botón “Solicitar cotización”.

---

# 33. Reglas para detalle público del servicio

La página `ServiceDetailPage` debe mostrar:

1. Nombre del servicio.
2. Categoría y subcategoría.
3. Tienda proveedora.
4. Descripción.
5. Alcance.
6. Exclusiones.
7. Tarifa referencial.
8. Unidad de medida.
9. Tiempo estimado.
10. SLA.
11. Documentos requeridos.
12. Reglas.
13. Evidencias requeridas.
14. Reviews si aplica.
15. Servicios relacionados.
16. Botón de cotización.

---

# 34. Reglas de validación backend

1. `service_code` debe ser único.
2. `service_name` es obligatorio.
3. `store_id` es obligatorio para servicios publicados por tienda.
4. `category_code` debe existir y estar activo.
5. `subcategory_code` debe existir si se usa.
6. `base_price` no puede ser negativo.
7. `currency_code` debe existir y estar activo.
8. `unit_measure` debe existir y estar activo.
9. `commission_percentage` no puede ser negativo.
10. `sla_hours` no puede ser negativo.
11. No se puede publicar un servicio de tienda no aprobada.
12. No se puede cotizar un servicio no publicado.
13. No se puede eliminar físicamente un servicio con cotizaciones u órdenes.
14. Cambios de tarifa deben auditarse.
15. Cambios de estado deben auditarse.

---

# 35. Criterios de aceptación

El catálogo maestro de servicios se considera aceptado cuando:

1. Existen categorías maestras de servicios.
2. Existen subcategorías maestras.
3. Cada servicio tiene código único.
4. Cada servicio tiene categoría y subcategoría.
5. Cada servicio tiene tarifa o regla de cotización.
6. Cada servicio tiene unidad de medida.
7. Cada servicio tiene SLA o tiempo estimado.
8. Cada servicio define documentos requeridos cuando aplica.
9. Cada servicio define evidencias sugeridas cuando aplica.
10. Cada servicio tiene comisión referencial.
11. Las tiendas pueden crear servicios propios.
12. El superadministrador puede aprobar servicios.
13. Servicios aprobados pueden publicarse.
14. Servicios publicados aparecen en búsqueda.
15. Servicios pausados no pueden cotizarse públicamente.
16. Cotizaciones se crean desde servicios publicados.
17. Cambios de tarifa generan auditoría.
18. Cambios de estado generan auditoría.
19. Los componentes React muestran la información del servicio.
20. Los endpoints Nest.js permiten CRUD, aprobación, publicación y pausa.
21. Las tablas MySQL soportan servicios, tarifas y documentos.
22. Odoo se usa solo como referencia conceptual.

---

# 36. Tareas técnicas para Antigravity

## 36.1 Base de datos

1. Validar tabla `services`.
2. Validar tabla `service_categories`.
3. Validar tabla `service_pricing`.
4. Validar tabla `service_documents`.
5. Crear seeds de categorías.
6. Crear seeds de subcategorías.
7. Crear seeds de servicios demo.
8. Crear índices por categoría, tienda, estado y precio.
9. Preparar tabla futura `service_templates` si se decide implementarla.

## 36.2 Backend Nest.js

1. Crear módulo `services`.
2. Crear `ServicesController`.
3. Crear `ServicesService`.
4. Crear DTOs de servicio.
5. Crear endpoints de CRUD.
6. Crear endpoints de aprobación.
7. Crear endpoints de publicación.
8. Crear endpoints de tarifas.
9. Crear validaciones de categoría, tienda y estado.
10. Crear auditoría de cambios de tarifa y estado.
11. Crear integración con búsqueda.
12. Crear integración con cotizaciones.

## 36.3 Frontend React.js

1. Crear `ServiceListPage`.
2. Crear `ServiceForm`.
3. Crear `ServiceDetailPage`.
4. Crear `ServiceResultCard`.
5. Crear `ServicePricingBox`.
6. Crear `ServiceDocumentChecklist`.
7. Crear `ServiceApprovalPanel`.
8. Crear `ServiceStatusBadge`.
9. Crear `RequestQuoteModal`.
10. Conectar filtros de búsqueda.
11. Conectar formularios con catálogos.
12. Crear estados loading, empty, error y forbidden.

## 36.4 QA

1. Probar creación de servicio.
2. Probar edición de servicio.
3. Probar aprobación de servicio.
4. Probar rechazo con motivo.
5. Probar publicación.
6. Probar pausa.
7. Probar búsqueda pública.
8. Probar cotización desde servicio.
9. Probar validación de documentos requeridos.
10. Probar auditoría de cambio de tarifa.
11. Probar que tienda no aprobada no publique servicios.
12. Probar que servicio pausado no permita cotización.

---

# 37. Prompt sugerido para Antigravity

```text
Actúa como product owner, arquitecto funcional de marketplace logístico, backend architect Nest.js, frontend architect React.js y database architect MySQL.

Usa el documento `16_SERVICES_MASTER_CATALOG.md` como fuente principal para implementar el catálogo maestro de servicios logísticos del Marketplace Logístico TOS.

Objetivo:
Crear un catálogo maestro de servicios logísticos con categorías, subcategorías, fichas maestras, tarifas, documentos requeridos, SLA, comisiones, reglas, evidencias, endpoints, componentes frontend, validaciones backend, auditoría y seeds para demo MVP.

Reglas obligatorias:
1. Todo servicio debe tener código único.
2. Todo servicio debe pertenecer a una categoría activa.
3. Todo servicio publicado debe pertenecer a una tienda aprobada.
4. Los servicios publicados aparecen en búsqueda.
5. Los servicios pausados no permiten nuevas cotizaciones.
6. Los cambios de tarifa generan auditoría.
7. Los cambios de estado generan auditoría.
8. Las tarifas y comisiones se validan en backend.
9. El frontend no debe hardcodear catálogos críticos.
10. Usar `12_DATABASE_MASTER_SCHEMA.md` para tablas.
11. Usar `13_API_SPECIFICATION.md` para endpoints.
12. Usar `15_MASTER_CATALOGS_MVP.md` para catálogos base.
13. Usar Odoo solo como referencia conceptual, sin integración.

Entregables esperados:
1. Seeds de servicios MVP.
2. DTOs de servicios.
3. Endpoints Nest.js.
4. Validaciones backend.
5. Componentes React.js.
6. Filtros de búsqueda.
7. Cards de servicios.
8. Detalle público del servicio.
9. Formulario de creación y edición.
10. Panel de aprobación.
11. Auditoría de cambios.
12. Pruebas funcionales.

Antes de implementar, genera un plan por fases: catálogos, base de datos, backend, frontend, búsqueda, cotización, auditoría y QA.
```

---

# 38. Checklist de uso en Antigravity

- [ ] Guardar este documento como `16_SERVICES_MASTER_CATALOG.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `15_MASTER_CATALOGS_MVP.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Crear categorías y subcategorías de servicios.
- [ ] Crear seeds de servicios MVP.
- [ ] Crear DTOs de servicios.
- [ ] Crear endpoints de servicios.
- [ ] Crear validaciones de publicación.
- [ ] Crear validaciones de tienda aprobada.
- [ ] Crear auditoría de tarifa y estado.
- [ ] Crear componentes React de servicios.
- [ ] Crear cards de búsqueda.
- [ ] Crear detalle público.
- [ ] Crear modal de cotización.
- [ ] Crear pruebas.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 39. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de revisión comercial | Sí |
| Pendiente de revisión de seeds | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

