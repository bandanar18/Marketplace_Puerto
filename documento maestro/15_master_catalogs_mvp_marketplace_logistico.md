# 15_MASTER_CATALOGS_MVP.md

# Documento Maestro de Catálogos Maestros Mínimos para el MVP
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `15_MASTER_CATALOGS_MVP.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro funcional y técnico de catálogos |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `04_ECOSYSTEM_ACTORS_MATRIX.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `14_ODOO_REFERENCE_MODELS.md` |

---

## 2. Propósito del documento

Este documento define los **catálogos maestros mínimos** necesarios para desarrollar el MVP del Marketplace Logístico TOS para Puertos Aduaneros.

Su propósito es servir como fuente de verdad para que Antigravity pueda crear los seeds, tablas, endpoints, componentes frontend, validaciones backend y selectores de datos que serán utilizados por los módulos funcionales del marketplace.

Los catálogos maestros evitan valores libres, inconsistencias, errores de escritura y duplicidad de datos en procesos como:

1. Registro de tiendas logísticas.
2. Creación de servicios.
3. Solicitud de cotizaciones.
4. Generación de órdenes.
5. Carga documental.
6. Registro de pagos.
7. Cálculo de comisiones.
8. Estados operativos.
9. Estados financieros.
10. Estados aduaneros.
11. Operación TOS básica.
12. Transporte.
13. Almacenamiento.
14. Inspecciones.
15. Reportes.
16. Auditoría.
17. Navegación y permisos.

---

## 3. Objetivo general

Definir, codificar y organizar los catálogos maestros mínimos requeridos para que el MVP funcione de forma ordenada, controlada, validable y escalable, usando MySQL como base de datos, Nest.js como backend y React.js como frontend.

---

## 4. Objetivos específicos

1. Definir la lista mínima de catálogos del MVP.
2. Definir códigos únicos por catálogo.
3. Definir ítems iniciales para seeds.
4. Relacionar catálogos con módulos funcionales.
5. Definir qué formularios usan cada catálogo.
6. Definir validaciones backend por catálogo.
7. Definir componentes React.js de selección.
8. Definir endpoints Nest.js para consulta y administración.
9. Definir permisos para administrar catálogos.
10. Definir auditoría sobre cambios críticos.
11. Definir reglas de activación, inactivación y no eliminación.
12. Definir criterios de aceptación.
13. Servir como prompt maestro para Antigravity.

---

## 5. Principios de diseño de catálogos

Antigravity debe respetar los siguientes principios:

1. Todo catálogo debe tener código único.
2. Todo ítem de catálogo debe tener código único dentro del catálogo.
3. Los formularios críticos deben usar catálogos, no texto libre.
4. Los ítems usados históricamente no deben eliminarse físicamente.
5. Los ítems pueden inactivarse si ya no deben usarse.
6. Los cambios en catálogos críticos deben auditarse.
7. Los catálogos del sistema deben cargarse por seed.
8. Los catálogos editables deben estar disponibles al superadministrador.
9. El frontend debe consumir catálogos desde API o desde estado cacheado.
10. El backend debe validar que los códigos usados existan y estén activos.
11. No hardcodear catálogos críticos en componentes React.
12. Usar nombres claros, estables y entendibles.
13. Separar código técnico de etiqueta visible.
14. Permitir traducción futura si se requiere.
15. Mantener independencia de Odoo.

---

## 6. Modelo técnico base de catálogos

Los catálogos se implementan principalmente con las tablas definidas en `12_DATABASE_MASTER_SCHEMA.md`:

1. `master_catalogs`.
2. `master_catalog_items`.

También existen tablas especializadas cuando se requiere mayor estructura:

1. `service_categories`.
2. `payment_methods`.
3. `access_levels`.
4. `modules`.
5. `permissions`.
6. `roles`.
7. `user_profiles`.
7. `navigation_menus`.
8. `navigation_menu_items`.

---

## 7. Estructura recomendada de `master_catalogs`

| Campo | Descripción |
|---|---|
| `catalog_code` | Código único del catálogo |
| `catalog_name` | Nombre visible del catálogo |
| `description` | Descripción funcional |
| `module_code` | Módulo relacionado |
| `is_system` | Indica si es catálogo base del sistema |
| `status` | active, inactive |

---

## 8. Estructura recomendada de `master_catalog_items`

| Campo | Descripción |
|---|---|
| `catalog_id` | Catálogo padre |
| `item_code` | Código único del ítem dentro del catálogo |
| `item_name` | Nombre visible del ítem |
| `description` | Descripción funcional |
| `parent_item_id` | Ítem padre si aplica |
| `order_index` | Orden visual |
| `metadata` | Datos adicionales en JSON |
| `status` | active, inactive |

---

## 9. Lista maestra de catálogos mínimos del MVP

| Nº | Código catálogo | Nombre | Módulo principal | Tipo | Prioridad MVP |
|---:|---|---|---|---|---|
| 1 | `USER_PROFILES` | Perfiles de usuario | Seguridad | Sistema | Alta |
| 2 | `ROLES` | Roles | Seguridad | Sistema | Alta |
| 3 | `PERMISSIONS` | Permisos | Seguridad | Sistema | Alta |
| 4 | `ACCESS_LEVELS` | Niveles de acceso | Seguridad | Sistema | Alta |
| 5 | `MODULES` | Módulos funcionales | Arquitectura | Sistema | Alta |
| 6 | `SERVICE_CATEGORIES` | Categorías de servicios | Marketplace | Sistema / editable | Alta |
| 7 | `SERVICE_SUBCATEGORIES` | Subcategorías de servicios | Marketplace | Editable | Media |
| 8 | `STORE_TYPES` | Tipos de tiendas logísticas | Marketplace | Sistema / editable | Alta |
| 9 | `ACTOR_TYPES` | Tipos de actores | Ecosistema | Sistema | Alta |
| 10 | `CARGO_TYPES` | Tipos de carga | Cotizaciones / logística | Sistema / editable | Alta |
| 11 | `CONTAINER_TYPES` | Tipos de contenedores | TOS / transporte | Sistema / editable | Alta |
| 12 | `DOCUMENT_TYPES` | Tipos de documentos | Documentos | Sistema / editable | Alta |
| 13 | `UNIT_MEASURES` | Unidades de medida | Servicios / cotizaciones | Sistema / editable | Alta |
| 14 | `CURRENCIES` | Monedas | Finanzas | Sistema | Alta |
| 15 | `PORTS` | Puertos | Marketplace / TOS | Editable | Alta |
| 16 | `TERMINALS` | Terminales | Marketplace / TOS | Editable | Alta |
| 17 | `OPERATIONAL_STATUSES` | Estados operativos | Órdenes / logística | Sistema | Alta |
| 18 | `FINANCIAL_STATUSES` | Estados financieros | Pagos | Sistema | Alta |
| 19 | `DOCUMENT_STATUSES` | Estados documentales | Documentos | Sistema | Alta |
| 20 | `CUSTOMS_STATUSES` | Estados aduaneros | Aduana | Sistema | Media |
| 21 | `QUOTATION_STATUSES` | Estados de cotización | Cotizaciones | Sistema | Alta |
| 22 | `ORDER_STATUSES` | Estados de orden | Órdenes | Sistema | Alta |
| 23 | `STORE_STATUSES` | Estados de tienda | Tiendas | Sistema | Alta |
| 24 | `SERVICE_STATUSES` | Estados de servicio | Servicios | Sistema | Alta |
| 25 | `PAYMENT_METHODS` | Métodos de pago | Pagos | Sistema / editable | Media |
| 26 | `COMMISSION_TYPES` | Tipos de comisión | Comisiones | Sistema | Media |
| 27 | `REVIEW_STATUSES` | Estados de reviews | Reviews | Sistema | Media |
| 28 | `INSPECTION_TYPES` | Tipos de inspección | Inspecciones | Sistema / editable | Media |
| 29 | `INSPECTION_RESULTS` | Resultados de inspección | Inspecciones | Sistema | Media |
| 30 | `TRIP_STATUSES` | Estados de viaje | Transporte | Sistema | Media |
| 31 | `VEHICLE_TYPES` | Tipos de vehículos | Transporte | Editable | Media |
| 32 | `WAREHOUSE_TYPES` | Tipos de almacén | Almacenamiento | Editable | Media |
| 33 | `TOS_CONTAINER_STATUSES` | Estados de contenedor TOS | TOS | Sistema | Media |
| 34 | `SUPPORT_CATEGORIES` | Categorías de soporte | Soporte | Editable | Baja |
| 35 | `SUPPORT_PRIORITIES` | Prioridades de soporte | Soporte | Sistema | Baja |
| 36 | `SUPPORT_STATUSES` | Estados de ticket | Soporte | Sistema | Baja |
| 37 | `NOTIFICATION_TYPES` | Tipos de notificación | Notificaciones | Sistema | Baja |
| 38 | `AUDIT_CRITICALITIES` | Criticidad de auditoría | Auditoría | Sistema | Alta |
| 39 | `EXPORT_FORMATS` | Formatos de exportación | Reportes | Sistema | Media |
| 40 | `FILE_TYPES_ALLOWED` | Tipos de archivos permitidos | Documentos | Sistema | Alta |

---

# 10. Catálogo `USER_PROFILES`

## 10.1 Descripción

Define los perfiles funcionales principales del sistema.

## 10.2 Uso

1. Registro de usuarios.
2. Redirección post-login.
3. Menús por perfil.
4. Dashboards por perfil.
5. Matriz de módulos por perfil.
6. RBAC.

## 10.3 Ítems seed

| Código | Nombre | Descripción | Dashboard por defecto | Estado |
|---|---|---|---|---|
| `PROF-CLI-001` | Cliente final | Usuario que busca, cotiza y contrata servicios | `/dashboard/client` | active |
| `PROF-TIE-002` | Tienda logística | Proveedor de servicios dentro del marketplace | `/dashboard/store` | active |
| `PROF-SUP-003` | Superadministrador | Administrador global del marketplace | `/admin` | active |
| `PROF-OPE-004` | Operador interno | Usuario operativo del ecosistema | `/operator` | active |
| `PROF-INS-005` | Inspector | Usuario que ejecuta inspecciones | `/inspector` | active |
| `PROF-TRA-006` | Transportista | Usuario o proveedor de transporte | `/carrier` | active |
| `PROF-ADU-007` | Agente aduanal | Usuario o proveedor de servicios aduanales | `/customs-agent` | active |
| `PROF-AUD-008` | Auditor | Usuario de consulta y control | `/auditor` | active |
| `PROF-SOP-009` | Soporte técnico | Usuario de atención y soporte | `/support` | active |

---

# 11. Catálogo `ACCESS_LEVELS`

## 11.1 Descripción

Define niveles de acceso funcional para la matriz de módulos por perfil.

## 11.2 Ítems seed

| Código | Nombre | Valor | Descripción | Estado |
|---|---|---:|---|---|
| `ACCESS-000` | Sin acceso | 0 | El perfil no puede ver ni operar el módulo | active |
| `ACCESS-001` | Consulta | 1 | Solo lectura | active |
| `ACCESS-002` | Operativo básico | 2 | Crear o editar registros propios | active |
| `ACCESS-003` | Operativo avanzado | 3 | Ejecutar, responder, aprobar o cerrar procesos | active |
| `ACCESS-004` | Administración total | 4 | Administración global del módulo | active |

---

# 12. Catálogo `MODULES`

## 12.1 Descripción

Define los módulos funcionales base del marketplace.

## 12.2 Ítems seed mínimos

| Código | Nombre | Base frontend | Base API | Estado |
|---|---|---|---|---|
| `MOD-USR-001` | Usuarios | `/admin/users` | `/users` | active |
| `MOD-AUT-002` | Autenticación | `/login` | `/auth` | active |
| `MOD-ROL-003` | Roles | `/admin/roles` | `/roles` | active |
| `MOD-PER-004` | Permisos | `/admin/permissions` | `/permissions` | active |
| `MOD-CAT-005` | Catálogos maestros | `/admin/catalogs` | `/catalogs` | active |
| `MOD-ACT-006` | Actores del ecosistema | `/admin/actors` | `/actors` | active |
| `MOD-STO-007` | Tiendas logísticas | `/admin/stores` | `/stores` | active |
| `MOD-SER-008` | Servicios logísticos | `/services` | `/services` | active |
| `MOD-SEA-009` | Búsqueda marketplace | `/search` | `/search` | active |
| `MOD-PUB-010` | Perfil público de tienda | `/stores/:id` | `/stores/:id/public` | active |
| `MOD-REV-011` | Reviews y ratings | `/reviews` | `/reviews` | active |
| `MOD-QUO-012` | Cotizaciones | `/quotations` | `/quotations` | active |
| `MOD-ORD-013` | Órdenes de servicio | `/orders` | `/orders` | active |
| `MOD-DOC-014` | Documentos y evidencias | `/documents` | `/documents` | active |
| `MOD-PAY-015` | Pagos | `/payments` | `/payments` | active |
| `MOD-COM-016` | Comisiones | `/commissions` | `/commissions` | active |
| `MOD-REP-017` | Reportes | `/reports` | `/reports` | active |
| `MOD-AUD-018` | Auditoría | `/audit` | `/audit-logs` | active |
| `MOD-TOS-019` | TOS básico | `/tos` | `/tos` | active |
| `MOD-TRA-020` | Transporte | `/transport` | `/trips` | active |
| `MOD-ALM-021` | Almacenamiento | `/storage` | `/storage` | active |
| `MOD-INS-022` | Inspecciones | `/inspections` | `/inspections` | active |
| `MOD-SOP-023` | Soporte técnico | `/support` | `/support/tickets` | active |
| `MOD-CON-024` | Configuración global | `/admin/settings` | `/settings` | active |
| `MOD-NOT-025` | Notificaciones | `/notifications` | `/notifications` | active |
| `MOD-EXP-026` | Exportaciones | `/exports` | `/exports` | active |
| `MOD-DAS-027` | Dashboards | `/dashboard` | `/dashboard` | active |

---

# 13. Catálogo `SERVICE_CATEGORIES`

## 13.1 Descripción

Define las categorías principales de productos y servicios logísticos que se publican en el marketplace.

## 13.2 Uso

1. Ficha de servicio.
2. Filtros de búsqueda.
3. Perfil de tienda.
4. Cotizaciones.
5. Reportes.
6. Comisiones por categoría.

## 13.3 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `CUSTOMS` | Aduana | Servicios de gestión, trámites y documentación aduanal | active |
| `TRANSPORT` | Transporte | Servicios de traslado terrestre o multimodal | active |
| `PORT` | Puerto | Servicios relacionados con operación portuaria | active |
| `TERMINAL` | Terminal | Servicios de terminal portuaria | active |
| `STORAGE` | Almacenamiento | Servicios de almacén, depósito y custodia | active |
| `INSPECTION` | Inspección | Servicios de inspección física, documental o técnica | active |
| `INSURANCE` | Seguros | Servicios de cobertura y pólizas logísticas | active |
| `PAYMENTS` | Pagos | Servicios financieros o gestión de pagos | active |
| `DOCUMENTATION` | Documentación | Preparación, revisión y gestión documental | active |
| `TECHNOLOGY` | Tecnología | Servicios tecnológicos, trazabilidad, APIs, TOS o soporte digital | active |

---

# 14. Catálogo `SERVICE_SUBCATEGORIES`

## 14.1 Descripción

Define subcategorías asociadas a categorías principales.

## 14.2 Ítems seed referenciales

| Código | Categoría padre | Nombre | Estado |
|---|---|---|---|
| `CUSTOMS_CLEARANCE` | `CUSTOMS` | Despacho aduanal | active |
| `CUSTOMS_DOCUMENT_REVIEW` | `CUSTOMS` | Revisión documental aduanal | active |
| `IMPORT_PROCESSING` | `CUSTOMS` | Gestión de importación | active |
| `EXPORT_PROCESSING` | `CUSTOMS` | Gestión de exportación | active |
| `DRAYAGE` | `TRANSPORT` | Transporte drayage | active |
| `LOCAL_TRUCKING` | `TRANSPORT` | Transporte local | active |
| `LONG_HAUL_TRUCKING` | `TRANSPORT` | Transporte de larga distancia | active |
| `CONTAINER_STORAGE` | `STORAGE` | Almacenamiento de contenedores | active |
| `BONDED_WAREHOUSE` | `STORAGE` | Almacén fiscal | active |
| `PHYSICAL_INSPECTION` | `INSPECTION` | Inspección física | active |
| `DOCUMENT_INSPECTION` | `INSPECTION` | Inspección documental | active |
| `CARGO_INSURANCE` | `INSURANCE` | Seguro de carga | active |
| `PAYMENT_CONFIRMATION` | `PAYMENTS` | Confirmación de pago | active |
| `DIGITAL_TRACKING` | `TECHNOLOGY` | Trazabilidad digital | active |
| `TOS_SERVICE` | `TECHNOLOGY` | Servicios TOS | active |

---

# 15. Catálogo `STORE_TYPES`

## 15.1 Descripción

Define los tipos de tiendas o proveedores que pueden operar en el marketplace.

## 15.2 Ítems seed

| Código | Nombre | Actor relacionado | Estado |
|---|---|---|---|
| `CUSTOMS_AGENT` | Agente aduanal | Agente aduanal | active |
| `CARRIER` | Transportista | Transportista | active |
| `BONDED_WAREHOUSE` | Almacén fiscal | Almacén fiscal | active |
| `PORT_TERMINAL` | Terminal portuaria | Terminal portuaria | active |
| `SHIPPING_LINE` | Naviera | Naviera | active |
| `INSPECTION_COMPANY` | Empresa inspectora | Inspector | active |
| `INSURANCE_COMPANY` | Aseguradora | Aseguradora | active |
| `PAYMENT_PROVIDER` | Proveedor de pagos | Banco / fintech | active |
| `DOCUMENTATION_PROVIDER` | Gestor documental | Documentación | active |
| `TECH_PROVIDER` | Proveedor tecnológico | Tecnología | active |
| `MARKETPLACE_OPERATOR` | Operador del marketplace | Operador interno | active |

---

# 16. Catálogo `ACTOR_TYPES`

## 16.1 Descripción

Clasifica los actores del ecosistema digital del puerto aduanero.

## 16.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `DEMAND_ACTOR` | Actor demandante | Solicita o consume servicios | active |
| `SERVICE_PROVIDER` | Proveedor de servicios | Ofrece servicios logísticos | active |
| `REGULATORY_AUTHORITY` | Autoridad regulatoria | Supervisa o regula procesos | active |
| `PORT_AUTHORITY` | Autoridad portuaria | Control portuario | active |
| `FINANCIAL_ACTOR` | Actor financiero | Pagos, seguros o bancos | active |
| `INTERNAL_OPERATOR` | Operador interno | Opera procesos internos | active |
| `ADMINISTRATOR` | Administrador | Administra la plataforma | active |
| `AUDITOR` | Auditor | Consulta, controla y audita | active |
| `SUPPORT` | Soporte | Atiende incidencias | active |

---

# 17. Catálogo `CARGO_TYPES`

## 17.1 Descripción

Define tipos de carga para cotizaciones, transporte, almacenamiento e inspecciones.

## 17.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `GENERAL_CARGO` | Carga general | Mercancía general no especializada | active |
| `CONTAINERIZED_CARGO` | Carga contenerizada | Mercancía transportada en contenedor | active |
| `BULK_CARGO` | Carga a granel | Carga sólida o líquida sin empaque individual | active |
| `BREAK_BULK` | Carga fraccionada | Carga no contenerizada de gran tamaño | active |
| `REEFER_CARGO` | Carga refrigerada | Mercancía con control de temperatura | active |
| `HAZMAT_CARGO` | Carga peligrosa | Mercancía regulada o peligrosa | active |
| `OVERSIZED_CARGO` | Carga sobredimensionada | Carga con dimensiones especiales | active |
| `VEHICLES` | Vehículos | Autos, maquinaria o unidades rodantes | active |
| `PROJECT_CARGO` | Carga de proyecto | Carga especializada para proyectos | active |
| `DOCUMENT_ONLY` | Solo documentación | Gestión sin movimiento físico de carga | active |

---

# 18. Catálogo `CONTAINER_TYPES`

## 18.1 Descripción

Define tipos de contenedores para TOS, cotización, transporte y almacenamiento.

## 18.2 Ítems seed

| Código | Nombre | Descripción | TEU referencial | Estado |
|---|---|---|---:|---|
| `20GP` | 20 ft General Purpose | Contenedor estándar 20 pies | 1 | active |
| `40GP` | 40 ft General Purpose | Contenedor estándar 40 pies | 2 | active |
| `40HC` | 40 ft High Cube | Contenedor alto 40 pies | 2 | active |
| `45HC` | 45 ft High Cube | Contenedor alto 45 pies | 2.25 | active |
| `20RF` | 20 ft Reefer | Contenedor refrigerado 20 pies | 1 | active |
| `40RF` | 40 ft Reefer | Contenedor refrigerado 40 pies | 2 | active |
| `20OT` | 20 ft Open Top | Contenedor open top 20 pies | 1 | active |
| `40OT` | 40 ft Open Top | Contenedor open top 40 pies | 2 | active |
| `20FR` | 20 ft Flat Rack | Contenedor flat rack 20 pies | 1 | active |
| `40FR` | 40 ft Flat Rack | Contenedor flat rack 40 pies | 2 | active |
| `TANK` | Tank Container | Contenedor tanque | 1 | active |
| `LCL` | Less than Container Load | Carga consolidada | 0 | active |

---

# 19. Catálogo `DOCUMENT_TYPES`

## 19.1 Descripción

Define documentos requeridos para servicios, cotizaciones, órdenes, aduanas, pagos e inspecciones.

## 19.2 Ítems seed

| Código | Nombre | Uso principal | Requerido frecuente | Estado |
|---|---|---|---|---|
| `COMMERCIAL_INVOICE` | Commercial Invoice | Aduana / cotización | Sí | active |
| `PACKING_LIST` | Packing List | Aduana / carga | Sí | active |
| `BILL_OF_LADING` | Bill of Lading | Transporte marítimo | Sí | active |
| `AIR_WAYBILL` | Air Waybill | Transporte aéreo futuro | No | active |
| `ARRIVAL_NOTICE` | Arrival Notice | Importación | No | active |
| `CUSTOMS_ENTRY` | Customs Entry | Aduana | Sí | active |
| `POWER_OF_ATTORNEY` | Power of Attorney | Agente aduanal | Sí | active |
| `IMPORT_PERMIT` | Import Permit | Regulación | No | active |
| `EXPORT_DECLARATION` | Export Declaration | Exportación | No | active |
| `CERTIFICATE_OF_ORIGIN` | Certificate of Origin | Aduana / tratados | No | active |
| `INSPECTION_REPORT` | Inspection Report | Inspección | No | active |
| `INSURANCE_POLICY` | Insurance Policy | Seguro | No | active |
| `PAYMENT_RECEIPT` | Payment Receipt | Pagos | Sí | active |
| `DELIVERY_PROOF` | Proof of Delivery | Transporte | No | active |
| `WAREHOUSE_RECEIPT` | Warehouse Receipt | Almacenamiento | No | active |
| `PHOTO_EVIDENCE` | Photo Evidence | Evidencia | No | active |
| `OTHER_DOCUMENT` | Other Document | General | No | active |

---

# 20. Catálogo `UNIT_MEASURES`

## 20.1 Descripción

Define unidades de medida para tarifas, cantidades y servicios.

## 20.2 Ítems seed

| Código | Nombre | Uso | Estado |
|---|---|---|---|
| `SERVICE` | Servicio | Tarifa por servicio completo | active |
| `CONTAINER` | Contenedor | Tarifa por contenedor | active |
| `SHIPMENT` | Embarque | Tarifa por embarque | active |
| `DOCUMENT` | Documento | Tarifa por documento | active |
| `HOUR` | Hora | Tarifa por hora | active |
| `DAY` | Día | Tarifa por día | active |
| `TRIP` | Viaje | Tarifa por viaje | active |
| `TON` | Tonelada | Carga por tonelada | active |
| `KG` | Kilogramo | Carga por kilogramo | active |
| `CBM` | Metro cúbico | Volumen | active |
| `TEU` | TEU | Capacidad portuaria | active |
| `PALLET` | Paleta | Almacenamiento / carga | active |

---

# 21. Catálogo `CURRENCIES`

## 21.1 Descripción

Define monedas aceptadas o visualizadas en el MVP.

## 21.2 Ítems seed

| Código | Nombre | Símbolo | Estado |
|---|---|---|---|
| `USD` | United States Dollar | `$` | active |
| `EUR` | Euro | `€` | inactive |
| `MXN` | Mexican Peso | `$` | inactive |

### Regla MVP

La moneda base del MVP será `USD`. Otras monedas quedan como referencia futura.

---

# 22. Catálogo `PORTS`

## 22.1 Descripción

Define puertos disponibles para búsqueda, cotización, servicios, TOS y operación logística.

## 22.2 Ítems seed referenciales

| Código | Nombre | País | Estado/Región | Estado catálogo |
|---|---|---|---|---|
| `PORT-HOUSTON` | Port Houston | USA | Texas | active |
| `PORT-MIAMI` | PortMiami | USA | Florida | active |
| `PORT-EVERGLADES` | Port Everglades | USA | Florida | active |
| `PORT-LA` | Port of Los Angeles | USA | California | active |
| `PORT-LB` | Port of Long Beach | USA | California | active |
| `PORT-NY-NJ` | Port of New York and New Jersey | USA | NY/NJ | active |
| `PORT-SAVANNAH` | Port of Savannah | USA | Georgia | active |
| `PORT-NEW-ORLEANS` | Port of New Orleans | USA | Louisiana | active |
| `PORT-TAMPA-BAY` | Port Tampa Bay | USA | Florida | active |
| `PORT-JACKSONVILLE` | JAXPORT | USA | Florida | active |

### Regla

Los puertos pueden ampliarse posteriormente desde el panel del superadministrador.

---

# 23. Catálogo `TERMINALS`

## 23.1 Descripción

Define terminales asociadas a puertos.

## 23.2 Ítems seed referenciales

| Código | Puerto padre | Nombre | Estado |
|---|---|---|---|
| `TERM-HOU-BAYPORT` | `PORT-HOUSTON` | Bayport Container Terminal | active |
| `TERM-HOU-BARB` | `PORT-HOUSTON` | Barbours Cut Terminal | active |
| `TERM-MIA-CARGO` | `PORT-MIAMI` | PortMiami Cargo Terminal | active |
| `TERM-PEV-CONTAINER` | `PORT-EVERGLADES` | Port Everglades Container Terminal | active |
| `TERM-LA-001` | `PORT-LA` | Los Angeles Terminal 1 | active |
| `TERM-LB-001` | `PORT-LB` | Long Beach Terminal 1 | active |
| `TERM-NYNJ-001` | `PORT-NY-NJ` | NY/NJ Terminal 1 | active |
| `TERM-SAV-001` | `PORT-SAVANNAH` | Savannah Terminal 1 | active |
| `TERM-GENERAL` | null | Terminal general / no especificada | active |

---

# 24. Catálogo `STORE_STATUSES`

## 24.1 Descripción

Controla el ciclo de vida de una tienda logística.

## 24.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `REGISTERED` | Registrada | Tienda creada pero no revisada | active |
| `PENDING_REVIEW` | Pendiente de revisión | En revisión por superadministrador | active |
| `APPROVED` | Aprobada | Puede publicar servicios | active |
| `REJECTED` | Rechazada | No aprobada | active |
| `SUSPENDED` | Suspendida | Temporalmente bloqueada | active |
| `INACTIVE` | Inactiva | No operativa | active |

---

# 25. Catálogo `SERVICE_STATUSES`

## 25.1 Descripción

Controla aprobación y publicación de servicios.

## 25.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `DRAFT` | Borrador | Servicio en edición | active |
| `PENDING_APPROVAL` | Pendiente de aprobación | En revisión | active |
| `APPROVED` | Aprobado | Servicio aprobado | active |
| `REJECTED` | Rechazado | Servicio rechazado | active |
| `PUBLISHED` | Publicado | Visible en búsqueda pública | active |
| `PAUSED` | Pausado | Temporalmente no disponible | active |
| `INACTIVE` | Inactivo | No disponible | active |

---

# 26. Catálogo `QUOTATION_STATUSES`

## 26.1 Descripción

Controla el ciclo de vida de una cotización.

## 26.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `REQUESTED` | Solicitada | Cliente envió solicitud | active |
| `IN_REVIEW` | En revisión | Tienda está revisando | active |
| `RESPONDED` | Respondida | Tienda respondió tarifa y condiciones | active |
| `APPROVED` | Aprobada | Cliente aprobó cotización | active |
| `REJECTED` | Rechazada | Cliente o tienda rechazó | active |
| `EXPIRED` | Vencida | Cotización vencida | active |
| `CONVERTED` | Convertida en orden | Generó orden de servicio | active |
| `CANCELLED` | Cancelada | Cancelada antes de aprobar | active |

---

# 27. Catálogo `ORDER_STATUSES`

## 27.1 Descripción

Controla el ciclo operativo de una orden.

## 27.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `CREATED` | Creada | Orden generada | active |
| `IN_PROCESS` | En proceso | Orden en preparación | active |
| `PENDING_DOCUMENTS` | Pendiente de documentos | Faltan documentos | active |
| `PENDING_PAYMENT` | Pendiente de pago | Falta pago o confirmación | active |
| `EXECUTING` | En ejecución | Servicio en ejecución | active |
| `ON_HOLD` | En espera | Detenida por observación | active |
| `CLOSED` | Cerrada | Servicio completado | active |
| `CANCELLED` | Cancelada | Orden cancelada | active |

---

# 28. Catálogo `DOCUMENT_STATUSES`

## 28.1 Descripción

Controla estado de documentos y evidencias.

## 28.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `PENDING` | Pendiente | Documento requerido aún no cargado | active |
| `UPLOADED` | Cargado | Documento cargado | active |
| `IN_REVIEW` | En revisión | Documento en revisión | active |
| `VALIDATED` | Validado | Documento aceptado | active |
| `REJECTED` | Rechazado | Documento rechazado | active |
| `VERSIONED` | Versionado | Documento reemplazado por nueva versión | active |
| `EXPIRED` | Vencido | Documento vencido | active |

---

# 29. Catálogo `FINANCIAL_STATUSES`

## 29.1 Descripción

Controla estados financieros de pagos y órdenes.

## 29.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `UNPAID` | No pagado | No hay pago registrado | active |
| `PENDING` | Pendiente | Pago pendiente de revisión | active |
| `SUBMITTED` | Enviado | Comprobante enviado | active |
| `CONFIRMED` | Confirmado | Pago confirmado | active |
| `REJECTED` | Rechazado | Pago rechazado | active |
| `REFUNDED` | Reembolsado | Pago reembolsado | active |
| `PARTIAL` | Parcial | Pago parcial | active |

---

# 30. Catálogo `CUSTOMS_STATUSES`

## 30.1 Descripción

Controla estados aduaneros referenciales.

## 30.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `NOT_STARTED` | No iniciado | Proceso aduanero no iniciado | active |
| `DOCUMENTS_PENDING` | Documentos pendientes | Faltan documentos | active |
| `DOCUMENTS_SUBMITTED` | Documentos enviados | Documentos presentados | active |
| `UNDER_REVIEW` | En revisión | Revisión aduanera | active |
| `OBSERVED` | Observado | Requiere corrección | active |
| `CLEARED` | Liberado | Proceso aduanero liberado | active |
| `HELD` | Retenido | Carga retenida | active |
| `REJECTED` | Rechazado | Proceso rechazado | active |

---

# 31. Catálogo `PAYMENT_METHODS`

## 31.1 Descripción

Define métodos de pago disponibles o referenciales del MVP.

## 31.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `BANK_TRANSFER` | Transferencia bancaria | Pago mediante transferencia | active |
| `MANUAL_RECEIPT` | Comprobante manual | Registro manual con comprobante | active |
| `WIRE_TRANSFER` | Wire transfer | Transferencia wire | active |
| `ACH` | ACH | Transferencia ACH | active |
| `CASH_REFERENCE` | Referencia efectivo | Referencial, no recomendado para MVP | inactive |
| `PAYMENT_GATEWAY_FUTURE` | Pasarela futura | Reservado para integración futura | inactive |

---

# 32. Catálogo `COMMISSION_TYPES`

## 32.1 Descripción

Define cómo se calcula una comisión.

## 32.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `PERCENTAGE` | Porcentaje | Comisión calculada sobre subtotal | active |
| `FIXED` | Fija | Comisión fija por operación | active |
| `MIXED` | Mixta | Comisión fija más porcentaje | inactive |
| `CATEGORY_BASED` | Por categoría | Comisión según categoría de servicio | active |
| `STORE_TYPE_BASED` | Por tipo de tienda | Comisión según proveedor | active |

---

# 33. Catálogo `INSPECTION_TYPES`

## 33.1 Descripción

Define tipos de inspección.

## 33.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `PHYSICAL` | Física | Inspección física de carga o contenedor | active |
| `DOCUMENTAL` | Documental | Revisión de documentos | active |
| `PHOTO` | Fotográfica | Evidencia mediante fotografías | active |
| `SECURITY` | Seguridad | Revisión de seguridad | active |
| `CUSTOMS` | Aduanera | Inspección relacionada con aduana | active |
| `WAREHOUSE` | Almacén | Inspección en almacén | active |
| `DELIVERY` | Entrega | Inspección al momento de entrega | active |

---

# 34. Catálogo `INSPECTION_RESULTS`

## 34.1 Descripción

Define resultados posibles de una inspección.

## 34.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `APPROVED` | Aprobado | Inspección satisfactoria | active |
| `REJECTED` | Rechazado | Inspección no satisfactoria | active |
| `OBSERVED` | Observado | Requiere corrección o aclaratoria | active |
| `PENDING_EVIDENCE` | Pendiente de evidencia | Falta evidencia | active |
| `NOT_APPLICABLE` | No aplica | Ítem no aplicable | active |

---

# 35. Catálogo `TRIP_STATUSES`

## 35.1 Descripción

Define estados del viaje de transporte.

## 35.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `CREATED` | Creado | Viaje creado | active |
| `ASSIGNED` | Asignado | Vehículo/conductor asignado | active |
| `SCHEDULED` | Programado | Viaje programado | active |
| `IN_TRANSIT` | En tránsito | Viaje en curso | active |
| `DELIVERED` | Entregado | Entrega realizada | active |
| `CANCELLED` | Cancelado | Viaje cancelado | active |
| `DELAYED` | Retrasado | Viaje con retraso | active |

---

# 36. Catálogo `VEHICLE_TYPES`

## 36.1 Descripción

Define tipos de vehículos usados por transportistas.

## 36.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `TRACTOR_TRAILER` | Tracto camión | Unidad para contenedores | active |
| `FLATBED` | Plataforma | Transporte de carga abierta | active |
| `BOX_TRUCK` | Camión cerrado | Transporte local | active |
| `REEFER_TRUCK` | Camión refrigerado | Carga refrigerada | active |
| `CHASSIS_20` | Chassis 20 ft | Chassis para contenedor 20 pies | active |
| `CHASSIS_40` | Chassis 40 ft | Chassis para contenedor 40 pies | active |
| `LOWBOY` | Lowboy | Carga pesada o sobredimensionada | active |
| `VAN` | Van | Transporte menor | active |

---

# 37. Catálogo `WAREHOUSE_TYPES`

## 37.1 Descripción

Define tipos de almacenes.

## 37.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `BONDED` | Fiscal / Bonded | Almacén fiscal o autorizado | active |
| `GENERAL` | General | Almacén general | active |
| `REEFER` | Refrigerado | Almacén con temperatura controlada | active |
| `CONTAINER_YARD` | Patio de contenedores | Área para contenedores | active |
| `CFS` | Container Freight Station | Estación de consolidación/desconsolidación | active |
| `TEMPORARY_STORAGE` | Almacenamiento temporal | Almacén temporal | active |

---

# 38. Catálogo `TOS_CONTAINER_STATUSES`

## 38.1 Descripción

Controla estados del contenedor dentro del TOS básico.

## 38.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `REGISTERED` | Registrado | Contenedor registrado | active |
| `GATE_IN` | Gate in | Ingresó a terminal/patio | active |
| `IN_YARD` | En patio | Ubicado en patio | active |
| `MOVED` | Movido | Movimiento interno registrado | active |
| `BLOCKED` | Bloqueado | No disponible para salida | active |
| `RELEASED` | Liberado | Disponible para salida | active |
| `GATE_OUT` | Gate out | Salió de terminal/patio | active |

---

# 39. Catálogo `SUPPORT_CATEGORIES`

## 39.1 Descripción

Define categorías de tickets de soporte.

## 39.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `TECHNICAL_SUPPORT` | Soporte técnico | Problemas técnicos de plataforma | active |
| `DOCUMENT_SUPPORT` | Soporte documental | Problemas con documentos | active |
| `PAYMENT_SUPPORT` | Soporte de pagos | Problemas relacionados con pagos | active |
| `ACCOUNT_SUPPORT` | Soporte de cuenta | Problemas de usuario, acceso o perfil | active |
| `ORDER_SUPPORT` | Soporte de orden | Problemas con órdenes | active |
| `STORE_SUPPORT` | Soporte de tienda | Problemas de proveedor | active |
| `OTHER` | Otro | Otros casos | active |

---

# 40. Catálogo `SUPPORT_PRIORITIES`

## 40.1 Descripción

Define prioridades de tickets.

## 40.2 Ítems seed

| Código | Nombre | Tiempo respuesta sugerido | Estado |
|---|---|---:|---|
| `LOW` | Baja | 48 horas | active |
| `MEDIUM` | Media | 24 horas | active |
| `HIGH` | Alta | 8 horas | active |
| `CRITICAL` | Crítica | 2 horas | active |

---

# 41. Catálogo `SUPPORT_STATUSES`

## 41.1 Descripción

Define estados de tickets.

## 41.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `OPEN` | Abierto | Ticket creado | active |
| `ASSIGNED` | Asignado | Responsable asignado | active |
| `IN_PROGRESS` | En progreso | En atención | active |
| `WAITING_USER` | Esperando usuario | Requiere respuesta del usuario | active |
| `RESOLVED` | Resuelto | Solución entregada | active |
| `CLOSED` | Cerrado | Ticket cerrado | active |
| `CANCELLED` | Cancelado | Ticket cancelado | active |

---

# 42. Catálogo `NOTIFICATION_TYPES`

## 42.1 Descripción

Define tipos de notificaciones internas.

## 42.2 Ítems seed

| Código | Nombre | Módulo | Estado |
|---|---|---|---|
| `QUOTATION_RESPONDED` | Cotización respondida | Cotizaciones | active |
| `QUOTATION_APPROVED` | Cotización aprobada | Cotizaciones | active |
| `ORDER_CREATED` | Orden creada | Órdenes | active |
| `ORDER_STATUS_CHANGED` | Estado de orden actualizado | Órdenes | active |
| `DOCUMENT_REJECTED` | Documento rechazado | Documentos | active |
| `DOCUMENT_VALIDATED` | Documento validado | Documentos | active |
| `PAYMENT_CONFIRMED` | Pago confirmado | Pagos | active |
| `SERVICE_APPROVED` | Servicio aprobado | Servicios | active |
| `STORE_APPROVED` | Tienda aprobada | Tiendas | active |
| `REVIEW_RECEIVED` | Review recibida | Reviews | active |
| `TICKET_UPDATED` | Ticket actualizado | Soporte | active |
| `AUDIT_CRITICAL_EVENT` | Evento crítico de auditoría | Auditoría | active |

---

# 43. Catálogo `AUDIT_CRITICALITIES`

## 43.1 Descripción

Define niveles de criticidad de auditoría.

## 43.2 Ítems seed

| Código | Nombre | Descripción | Estado |
|---|---|---|---|
| `LOW` | Baja | Evento informativo | active |
| `MEDIUM` | Media | Evento operativo relevante | active |
| `HIGH` | Alta | Evento crítico funcional o financiero | active |
| `CRITICAL` | Crítica | Evento de seguridad, permisos o riesgo alto | active |

---

# 44. Catálogo `EXPORT_FORMATS`

## 44.1 Descripción

Define formatos de exportación permitidos.

## 44.2 Ítems seed

| Código | Nombre | MIME referencial | Estado |
|---|---|---|---|
| `PDF` | PDF | `application/pdf` | active |
| `XLSX` | Excel XLSX | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` | active |
| `CSV` | CSV | `text/csv` | active |

---

# 45. Catálogo `FILE_TYPES_ALLOWED`

## 45.1 Descripción

Define tipos de archivos permitidos para documentos y evidencias.

## 45.2 Ítems seed

| Código | Nombre | MIME | Extensión | Estado |
|---|---|---|---|---|
| `PDF` | PDF | `application/pdf` | `.pdf` | active |
| `JPG` | JPG Image | `image/jpeg` | `.jpg` / `.jpeg` | active |
| `PNG` | PNG Image | `image/png` | `.png` | active |
| `DOCX` | Word Document | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | `.docx` | active |
| `XLSX` | Excel Spreadsheet | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` | `.xlsx` | active |

---

# 46. Relación catálogo vs módulo funcional

| Catálogo | Módulos que lo usan |
|---|---|
| `USER_PROFILES` | Usuarios, roles, permisos, navegación, dashboards |
| `ROLES` | Usuarios, roles, permisos |
| `PERMISSIONS` | Roles, permisos, navegación, API |
| `ACCESS_LEVELS` | Matriz perfil-módulo |
| `MODULES` | Permisos, navegación, auditoría, reportes |
| `SERVICE_CATEGORIES` | Servicios, búsqueda, cotizaciones, comisiones |
| `SERVICE_SUBCATEGORIES` | Servicios, búsqueda |
| `STORE_TYPES` | Tiendas, actores, servicios, comisiones |
| `ACTOR_TYPES` | Actores del ecosistema |
| `CARGO_TYPES` | Cotizaciones, transporte, almacenamiento, inspecciones |
| `CONTAINER_TYPES` | Cotizaciones, TOS, transporte |
| `DOCUMENT_TYPES` | Servicios, cotizaciones, órdenes, documentos |
| `UNIT_MEASURES` | Servicios, cotizaciones, órdenes, tarifas |
| `CURRENCIES` | Servicios, cotizaciones, pagos, comisiones |
| `PORTS` | Tiendas, servicios, búsqueda, TOS |
| `TERMINALS` | Tiendas, servicios, búsqueda, TOS |
| `OPERATIONAL_STATUSES` | Órdenes, TOS, transporte, almacenamiento |
| `FINANCIAL_STATUSES` | Pagos, órdenes, reportes |
| `DOCUMENT_STATUSES` | Documentos, cotizaciones, órdenes |
| `CUSTOMS_STATUSES` | Aduana, órdenes, documentos |
| `QUOTATION_STATUSES` | Cotizaciones |
| `ORDER_STATUSES` | Órdenes |
| `STORE_STATUSES` | Tiendas |
| `SERVICE_STATUSES` | Servicios |
| `PAYMENT_METHODS` | Pagos |
| `COMMISSION_TYPES` | Comisiones |
| `REVIEW_STATUSES` | Reviews |
| `INSPECTION_TYPES` | Inspecciones |
| `INSPECTION_RESULTS` | Inspecciones |
| `TRIP_STATUSES` | Transporte |
| `VEHICLE_TYPES` | Transporte |
| `WAREHOUSE_TYPES` | Almacenamiento |
| `TOS_CONTAINER_STATUSES` | TOS |
| `SUPPORT_CATEGORIES` | Soporte |
| `SUPPORT_PRIORITIES` | Soporte |
| `SUPPORT_STATUSES` | Soporte |
| `NOTIFICATION_TYPES` | Notificaciones |
| `AUDIT_CRITICALITIES` | Auditoría |
| `EXPORT_FORMATS` | Reportes, exportaciones |
| `FILE_TYPES_ALLOWED` | Documentos, evidencias |

---

# 47. Componentes React.js relacionados

| Componente | Uso |
|---|---|
| `CatalogManager` | Administración de catálogos por superadministrador |
| `CatalogItemForm` | Crear o editar ítem de catálogo |
| `CatalogSelect` | Selector reusable de ítems |
| `ServiceCategorySelect` | Selección de categoría de servicio |
| `StoreTypeSelect` | Selección de tipo de tienda |
| `CargoTypeSelect` | Selección de tipo de carga |
| `ContainerTypeSelect` | Selección de tipo de contenedor |
| `DocumentTypeSelect` | Selección de tipo documental |
| `UnitMeasureSelect` | Selección de unidad |
| `CurrencySelect` | Selección de moneda |
| `PortSelect` | Selección de puerto |
| `TerminalSelect` | Selección de terminal |
| `StatusBadge` | Render de estados por catálogo |
| `PaymentMethodSelect` | Selección de método de pago |
| `InspectionTypeSelect` | Selección de tipo de inspección |
| `SupportCategorySelect` | Selección de categoría de soporte |

---

# 48. Endpoints Nest.js relacionados

Base path:

```txt
/catalogs
```

| Método | Endpoint | Descripción | Permiso |
|---|---|---|---|
| GET | `/catalogs` | Listar catálogos | `catalogs.view` |
| GET | `/catalogs/:id` | Ver catálogo | `catalogs.view` |
| GET | `/catalogs/code/:catalogCode` | Ver catálogo por código | `catalogs.view` |
| GET | `/catalogs/:id/items` | Listar ítems | `catalogs.view` |
| GET | `/catalogs/code/:catalogCode/items` | Listar ítems por código de catálogo | `catalogs.view` |
| POST | `/catalogs` | Crear catálogo | `catalogs.create` |
| PATCH | `/catalogs/:id` | Actualizar catálogo | `catalogs.update` |
| POST | `/catalogs/:id/items` | Crear ítem | `catalogs.manage_items` |
| PATCH | `/catalogs/:id/items/:itemId` | Actualizar ítem | `catalogs.manage_items` |
| PATCH | `/catalogs/:id/items/:itemId/disable` | Inactivar ítem | `catalogs.manage_items` |
| PATCH | `/catalogs/:id/items/:itemId/enable` | Activar ítem | `catalogs.manage_items` |

---

# 49. Servicios frontend relacionados

| Archivo | Función |
|---|---|
| `catalogsApi.ts` | Consumir endpoints de catálogos |
| `useCatalogs.ts` | Hook para cargar catálogos |
| `useCatalogItems.ts` | Hook para cargar ítems por código |
| `catalogCache.ts` | Cache local temporal de catálogos |
| `catalogLabels.ts` | Utilidad para mostrar etiquetas por código |

---

# 50. DTOs sugeridos

## 50.1 `CreateCatalogDto`

```json
{
  "catalogCode": "CARGO_TYPES",
  "catalogName": "Tipos de carga",
  "description": "Clasificación de tipos de carga",
  "moduleCode": "MOD-QUO-012",
  "isSystem": true,
  "status": "active"
}
```

## 50.2 `CreateCatalogItemDto`

```json
{
  "itemCode": "GENERAL_CARGO",
  "itemName": "Carga general",
  "description": "Mercancía general no especializada",
  "parentItemId": null,
  "orderIndex": 1,
  "metadata": {},
  "status": "active"
}
```

## 50.3 `UpdateCatalogItemDto`

```json
{
  "itemName": "Carga general",
  "description": "Mercancía general no especializada",
  "orderIndex": 1,
  "metadata": {},
  "status": "active"
}
```

---

# 51. Reglas de validación backend

1. `catalog_code` debe ser único.
2. `item_code` debe ser único dentro del catálogo.
3. No permitir crear ítem sin catálogo activo.
4. No permitir usar ítems inactivos en nuevos registros operativos.
5. No eliminar físicamente ítems usados históricamente.
6. Validar que `service.category_code` exista si se usa código.
7. Validar que `store_type_code` exista.
8. Validar que `document_type_code` exista.
9. Validar que `port_code` exista.
10. Validar que `terminal_code` exista y corresponda al puerto si aplica.
11. Validar que `currency_code` exista y esté activo.
12. Validar que `unit_measure` exista.
13. Validar que estados pertenezcan al catálogo correspondiente.
14. Validar transiciones de estados en servicios backend, no solo por catálogo.
15. Auditar cambios en catálogos críticos.

---

# 52. Auditoría de catálogos

## 52.1 Eventos auditables

| Evento | Descripción | Criticidad |
|---|---|---|
| `catalog.created` | Catálogo creado | medium |
| `catalog.updated` | Catálogo actualizado | medium |
| `catalog.disabled` | Catálogo inactivado | high |
| `catalog.item.created` | Ítem creado | medium |
| `catalog.item.updated` | Ítem actualizado | medium |
| `catalog.item.disabled` | Ítem inactivado | high |
| `catalog.item.enabled` | Ítem reactivado | high |
| `catalog.seed.executed` | Seed ejecutado | high |
| `catalog.system_item.modified` | Ítem del sistema modificado | critical |

## 52.2 Reglas

1. Los cambios en catálogos del sistema deben auditarse.
2. Los cambios en estados deben auditarse.
3. Los cambios en permisos, roles, módulos y perfiles deben auditarse con criticidad alta o crítica.
4. Los cambios en puertos, terminales, documentos y comisiones deben auditarse.

---

# 53. Seeds iniciales por fases

## 53.1 Fase 1 — Seguridad y arquitectura

1. `USER_PROFILES`.
2. `ROLES`.
3. `PERMISSIONS`.
4. `ACCESS_LEVELS`.
5. `MODULES`.

## 53.2 Fase 2 — Marketplace base

1. `SERVICE_CATEGORIES`.
2. `SERVICE_SUBCATEGORIES`.
3. `STORE_TYPES`.
4. `ACTOR_TYPES`.
5. `UNIT_MEASURES`.
6. `CURRENCIES`.

## 53.3 Fase 3 — Operación logística

1. `CARGO_TYPES`.
2. `CONTAINER_TYPES`.
3. `PORTS`.
4. `TERMINALS`.
5. `DOCUMENT_TYPES`.

## 53.4 Fase 4 — Estados operativos

1. `STORE_STATUSES`.
2. `SERVICE_STATUSES`.
3. `QUOTATION_STATUSES`.
4. `ORDER_STATUSES`.
5. `DOCUMENT_STATUSES`.
6. `FINANCIAL_STATUSES`.
7. `CUSTOMS_STATUSES`.

## 53.5 Fase 5 — Finanzas, soporte y control

1. `PAYMENT_METHODS`.
2. `COMMISSION_TYPES`.
3. `REVIEW_STATUSES`.
4. `SUPPORT_CATEGORIES`.
5. `SUPPORT_PRIORITIES`.
6. `SUPPORT_STATUSES`.
7. `NOTIFICATION_TYPES`.
8. `AUDIT_CRITICALITIES`.
9. `EXPORT_FORMATS`.
10. `FILE_TYPES_ALLOWED`.

## 53.6 Fase 6 — Operación avanzada parcial

1. `INSPECTION_TYPES`.
2. `INSPECTION_RESULTS`.
3. `TRIP_STATUSES`.
4. `VEHICLE_TYPES`.
5. `WAREHOUSE_TYPES`.
6. `TOS_CONTAINER_STATUSES`.

---

# 54. Ejemplo de seed JSON global

```json
{
  "catalogCode": "SERVICE_CATEGORIES",
  "catalogName": "Categorías de servicios",
  "description": "Categorías principales del marketplace logístico",
  "moduleCode": "MOD-SER-008",
  "isSystem": true,
  "status": "active",
  "items": [
    {
      "itemCode": "CUSTOMS",
      "itemName": "Aduana",
      "description": "Servicios de gestión, trámites y documentación aduanal",
      "orderIndex": 1,
      "metadata": {
        "icon": "customs",
        "publicVisible": true
      },
      "status": "active"
    },
    {
      "itemCode": "TRANSPORT",
      "itemName": "Transporte",
      "description": "Servicios de traslado terrestre o multimodal",
      "orderIndex": 2,
      "metadata": {
        "icon": "truck",
        "publicVisible": true
      },
      "status": "active"
    }
  ]
}
```

---

# 55. Relación con Odoo como referencia conceptual

| Catálogo propio | Modelo Odoo referencial | Uso conceptual |
|---|---|---|
| `USER_PROFILES` | `res.users`, `res.groups` | Perfiles funcionales |
| `ROLES` | `res.groups` | Roles |
| `PERMISSIONS` | `ir.model.access`, `ir.rule` | Permisos |
| `SERVICE_CATEGORIES` | `product.category` | Categorías de productos/servicios |
| `UNIT_MEASURES` | `uom.uom` | Unidades de medida |
| `STORE_TYPES` | `res.partner`, `res.company` | Tipos de proveedores |
| `DOCUMENT_TYPES` | `ir.attachment` conceptual | Tipos documentales |
| `PAYMENT_METHODS` | `account.journal` | Métodos de pago |
| `CURRENCIES` | `res.currency` | Monedas |
| `WAREHOUSE_TYPES` | `stock.location`, `stock.warehouse` | Tipos de almacén |
| `VEHICLE_TYPES` | `fleet.vehicle` | Tipos de vehículos |
| `INSPECTION_TYPES` | `quality.check` | Tipos de inspección |
| `EXPORT_FORMATS` | `ir.actions.report` | Reportes |

### Restricción

No se deben copiar tablas Odoo ni crear dependencia técnica con Odoo. Odoo solo inspira el diseño conceptual.

---

# 56. Reglas de administración de catálogos

1. Solo el superadministrador puede administrar catálogos del sistema.
2. Usuarios con permiso `catalogs.view` pueden consultar catálogos.
3. Usuarios con permiso `catalogs.manage_items` pueden administrar ítems si el catálogo lo permite.
4. Los catálogos marcados como `is_system = true` no deben eliminarse.
5. Los ítems del sistema pueden editarse solo con auditoría crítica.
6. Los ítems usados en registros históricos deben inactivarse, no eliminarse.
7. Cada cambio debe mostrar usuario, fecha y motivo si aplica.
8. El frontend debe advertir si un cambio afecta formularios críticos.
9. Los catálogos públicos pueden ser cacheados en frontend.
10. Los catálogos de permisos no deben ser modificados sin control técnico.

---

# 57. Reglas de uso en formularios

| Formulario | Catálogos usados |
|---|---|
| Registro de tienda | `STORE_TYPES`, `PORTS`, `TERMINALS` |
| Ficha de servicio | `SERVICE_CATEGORIES`, `SERVICE_SUBCATEGORIES`, `UNIT_MEASURES`, `CURRENCIES`, `DOCUMENT_TYPES`, `COMMISSION_TYPES` |
| Solicitud de cotización | `PORTS`, `TERMINALS`, `CARGO_TYPES`, `CONTAINER_TYPES`, `UNIT_MEASURES` |
| Respuesta de cotización | `CURRENCIES`, `UNIT_MEASURES` |
| Orden | `ORDER_STATUSES`, `DOCUMENT_STATUSES`, `FINANCIAL_STATUSES` |
| Carga documental | `DOCUMENT_TYPES`, `FILE_TYPES_ALLOWED`, `DOCUMENT_STATUSES` |
| Registro de pago | `PAYMENT_METHODS`, `CURRENCIES`, `FINANCIAL_STATUSES` |
| Comisión | `COMMISSION_TYPES`, `SERVICE_CATEGORIES`, `STORE_TYPES`, `CURRENCIES` |
| Transporte | `TRIP_STATUSES`, `VEHICLE_TYPES`, `CONTAINER_TYPES` |
| Almacenamiento | `WAREHOUSE_TYPES`, `CARGO_TYPES`, `UNIT_MEASURES` |
| Inspección | `INSPECTION_TYPES`, `INSPECTION_RESULTS`, `DOCUMENT_TYPES` |
| Soporte | `SUPPORT_CATEGORIES`, `SUPPORT_PRIORITIES`, `SUPPORT_STATUSES` |
| Auditoría | `AUDIT_CRITICALITIES`, `MODULES` |
| Exportaciones | `EXPORT_FORMATS` |

---

# 58. Criterios de aceptación

El documento y la implementación de catálogos se consideran aceptados cuando:

1. Existen los catálogos mínimos del MVP.
2. Cada catálogo tiene código único.
3. Cada ítem tiene código único dentro del catálogo.
4. Los catálogos críticos se cargan por seed.
5. Los formularios usan catálogos en vez de texto libre.
6. El backend valida códigos de catálogos.
7. El frontend tiene selectores reutilizables.
8. El superadministrador puede consultar catálogos.
9. El superadministrador puede administrar catálogos permitidos.
10. Los ítems usados históricamente no se eliminan físicamente.
11. Los cambios críticos generan auditoría.
12. Los catálogos de estado controlan visualmente badges.
13. Las categorías de servicio aparecen en búsqueda.
14. Los tipos de tienda se usan en registro de proveedores.
15. Los tipos de documentos se usan en carga documental.
16. Los métodos de pago se usan en pagos.
17. Los tipos de comisión se usan en reglas de comisión.
18. Los catálogos de puertos y terminales se usan en búsqueda y cotización.
19. Los catálogos son consistentes con `12_DATABASE_MASTER_SCHEMA.md`.
20. No existe dependencia técnica con Odoo.

---

# 59. Tareas técnicas para Antigravity

## 59.1 Base de datos

1. Crear migración `master_catalogs`.
2. Crear migración `master_catalog_items`.
3. Crear índices por `catalog_code`.
4. Crear índices por `item_code`.
5. Crear índice compuesto `catalog_id + item_code`.
6. Crear seeds por fases.
7. Crear seeds de estados.
8. Crear seeds de categorías.
9. Crear seeds de documentos.
10. Crear seeds de puertos y terminales.

## 59.2 Backend Nest.js

1. Crear módulo `catalogs`.
2. Crear controller `CatalogsController`.
3. Crear service `CatalogsService`.
4. Crear DTOs de catálogo.
5. Crear DTOs de ítems.
6. Crear endpoints de consulta por código.
7. Crear endpoint de administración de ítems.
8. Crear validación de ítem activo.
9. Crear servicio reusable `CatalogValidationService`.
10. Crear auditoría de cambios.

## 59.3 Frontend React.js

1. Crear `CatalogManager`.
2. Crear `CatalogItemForm`.
3. Crear `CatalogSelect`.
4. Crear selectores específicos.
5. Crear hook `useCatalogs`.
6. Crear hook `useCatalogItems`.
7. Crear cache de catálogos.
8. Crear badges por estados.
9. Conectar formularios con catálogos.
10. Manejar loading, empty y error en selectores.

## 59.4 QA

1. Probar seeds.
2. Probar consulta de catálogos.
3. Probar consulta por código.
4. Probar creación de ítem.
5. Probar inactivación de ítem.
6. Probar validación de ítem activo.
7. Probar formularios con selectores.
8. Probar auditoría de cambios.
9. Probar que no se eliminen ítems históricos.
10. Probar consistencia con catálogos en API.

---

# 60. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de datos, backend architect Nest.js, frontend architect React.js y product owner del Marketplace Logístico TOS.

Usa el documento `15_MASTER_CATALOGS_MVP.md` como fuente principal para crear los catálogos maestros mínimos del MVP.

Objetivo:
Implementar los catálogos maestros del marketplace logístico usando MySQL, Nest.js y React.js, con seeds iniciales, endpoints de consulta, endpoints de administración, validaciones backend, selectores frontend, auditoría y reglas de no eliminación histórica.

Reglas obligatorias:
1. Crear catálogos en `master_catalogs`.
2. Crear ítems en `master_catalog_items`.
3. Usar códigos únicos.
4. Cargar catálogos mínimos por seeds.
5. No hardcodear catálogos críticos en frontend.
6. Validar códigos de catálogos en backend.
7. No permitir usar ítems inactivos en nuevos registros.
8. No eliminar ítems usados históricamente.
9. Auditar cambios en catálogos críticos.
10. Respetar `12_DATABASE_MASTER_SCHEMA.md`.
11. Respetar `13_API_SPECIFICATION.md`.
12. Respetar `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
13. No integrar Odoo; usarlo solo como referencia conceptual.

Entregables esperados:
1. Migraciones de catálogos.
2. Seeds por fases.
3. Módulo Nest.js de catálogos.
4. DTOs de catálogos.
5. Endpoints REST.
6. Servicio de validación de catálogos.
7. Componentes React de administración.
8. Selectores React reutilizables.
9. Hooks frontend de catálogos.
10. Auditoría de cambios.
11. Pruebas de backend y frontend.

Antes de implementar, genera un plan de catálogos por fase y valida qué formularios dependen de cada catálogo.
```

---

# 61. Checklist de uso en Antigravity

- [ ] Guardar este documento como `15_MASTER_CATALOGS_MVP.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `12_DATABASE_MASTER_SCHEMA.md`.
- [ ] Validar consistencia con `13_API_SPECIFICATION.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Crear migraciones de catálogos.
- [ ] Crear seeds fase 1 seguridad.
- [ ] Crear seeds fase 2 marketplace.
- [ ] Crear seeds fase 3 operación logística.
- [ ] Crear seeds fase 4 estados.
- [ ] Crear seeds fase 5 finanzas, soporte y control.
- [ ] Crear seeds fase 6 operación avanzada parcial.
- [ ] Crear módulo backend de catálogos.
- [ ] Crear endpoints de consulta.
- [ ] Crear endpoints de administración.
- [ ] Crear componentes React de selección.
- [ ] Conectar formularios con catálogos.
- [ ] Crear auditoría de cambios.
- [ ] Crear pruebas.
- [ ] Confirmar que Odoo solo se usa como referencia conceptual.

---

## 62. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de revisión de seeds | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

