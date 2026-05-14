# 02_MVP_SCOPE.md

# Documento Maestro de Alcance MVP
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `02_MVP_SCOPE.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documento relacionado | `01_PRODUCT_VISION.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro de alcance MVP |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Definir qué debe desarrollarse primero para obtener una versión mínima funcional |

---

## 2. Propósito del documento

Este documento define el alcance del **Producto Mínimo Viable, MVP**, del **Marketplace Logístico TOS para Puertos Aduaneros**.

Su objetivo es delimitar qué funcionalidades, módulos, perfiles, catálogos, flujos, pantallas, endpoints, tablas y entregables deben desarrollarse primero en **Antigravity** para construir una versión inicial funcional, demostrable y validable del sistema.

El MVP debe permitir validar el flujo principal del marketplace:

1. Registro de usuarios.
2. Registro y aprobación de tiendas logísticas.
3. Publicación de servicios logísticos.
4. Búsqueda de servicios tipo marketplace.
5. Solicitud de cotización.
6. Respuesta de cotización.
7. Aprobación de cotización.
8. Conversión a orden.
9. Carga documental básica.
10. Registro de pago referencial.
11. Cálculo de comisión.
12. Auditoría básica.
13. Reportes básicos.

---

## 3. Definición del MVP

El MVP es la primera versión funcional del marketplace logístico que permite demostrar el valor principal del producto con el menor alcance posible, sin construir todavía todos los módulos avanzados del ecosistema.

El MVP debe responder a esta pregunta:

> ¿Puede un cliente buscar un servicio logístico, solicitar una cotización, recibir respuesta de una tienda logística, aprobarla, generar una orden, cargar documentos, registrar un pago y dejar trazabilidad básica del proceso?

Si la respuesta es sí, el MVP cumple su función inicial.

---

## 4. Objetivo general del MVP

Desarrollar una versión mínima funcional del marketplace logístico que permita conectar clientes con tiendas logísticas, gestionar servicios, cotizaciones, órdenes, documentos, pagos referenciales, comisiones y auditoría básica, usando una arquitectura modular en React.js, Nest.js y MySQL, desarrollada con apoyo de Antigravity.

---

## 5. Objetivos específicos del MVP

1. Implementar autenticación básica de usuarios.
2. Implementar perfiles principales de acceso.
3. Implementar roles y permisos mínimos.
4. Configurar catálogos maestros iniciales.
5. Registrar tiendas logísticas.
6. Aprobar o rechazar tiendas desde el panel del superadministrador.
7. Permitir que tiendas publiquen servicios logísticos.
8. Permitir que el cliente busque servicios por categoría y filtros básicos.
9. Mostrar perfil público de tienda logística.
10. Permitir solicitud de cotización.
11. Permitir respuesta de cotización por parte de la tienda.
12. Permitir aprobación o rechazo de cotización por el cliente.
13. Convertir cotización aprobada en orden.
14. Permitir carga básica de documentos.
15. Registrar pago referencial o manual.
16. Calcular comisión del marketplace.
17. Registrar eventos críticos de auditoría.
18. Generar reportes básicos.
19. Validar el diseño visual tipo marketplace/directorio.
20. Crear una base escalable para futuras fases TOS avanzadas.

---

## 6. Usuarios incluidos en el MVP

| Perfil | Incluido en MVP | Descripción |
|---|---:|---|
| Cliente final | Sí | Usuario que busca servicios, solicita cotizaciones, aprueba, paga y consulta órdenes |
| Tienda logística | Sí | Proveedor que publica servicios, responde cotizaciones y ejecuta órdenes básicas |
| Superadministrador | Sí | Usuario que administra usuarios, tiendas, servicios, catálogos, comisiones y reportes |
| Operador interno | Parcial | Apoyo en seguimiento básico de órdenes y documentos |
| Inspector | Parcial | Solo como tipo de tienda o rol inicial, sin módulo avanzado completo |
| Transportista | Parcial | Solo como tipo de tienda o proveedor de servicios de transporte |
| Agente aduanal | Parcial | Solo como tipo de tienda o proveedor de servicios aduanales |
| Auditor | Parcial | Consulta básica de logs y eventos críticos |
| Soporte técnico | No inicial / fase posterior | Puede quedar como módulo posterior salvo una vista básica de incidencias |

---

## 7. Actores incluidos en el MVP

El MVP debe considerar los siguientes actores como registros maestros o tipos funcionales:

1. Cliente.
2. Importador.
3. Exportador.
4. Agente aduanal.
5. Transportista.
6. Almacén fiscal.
7. Terminal portuaria.
8. Naviera.
9. Inspector.
10. Aseguradora.
11. Banco.
12. Superadministrador.

Los siguientes actores pueden aparecer como catálogo o referencia, pero no requieren flujos regulatorios avanzados en el MVP:

1. Aduana.
2. Autoridad portuaria.

---

## 8. Módulos incluidos en el MVP

| Nº | Módulo | Incluido | Prioridad | Descripción |
|---:|---|---:|---|---|
| 1 | Usuarios | Sí | Alta | Registro, login, perfil básico y bloqueo |
| 2 | Autenticación | Sí | Alta | Login, logout, JWT y sesión |
| 3 | Roles | Sí | Alta | Roles principales por perfil |
| 4 | Permisos | Sí | Alta | Permisos mínimos por módulo |
| 5 | Catálogos maestros | Sí | Alta | Datos base del MVP |
| 6 | Tiendas logísticas | Sí | Alta | Registro, aprobación y perfil público |
| 7 | Servicios logísticos | Sí | Alta | Fichas de servicios publicables |
| 8 | Buscador marketplace | Sí | Alta | Búsqueda y filtros básicos |
| 9 | Perfil público de tienda | Sí | Alta | Página pública tipo directorio |
| 10 | Cotizaciones | Sí | Alta | Solicitud, respuesta, aprobación y rechazo |
| 11 | Órdenes | Sí | Alta | Orden creada desde cotización aprobada |
| 12 | Documentos | Sí | Alta | Carga y validación básica |
| 13 | Pagos | Sí | Media | Registro referencial/manual de pago |
| 14 | Comisiones | Sí | Media | Cálculo básico de comisión |
| 15 | Reportes | Sí | Media | Reportes básicos por perfil |
| 16 | Auditoría | Sí | Alta | Logs básicos de eventos críticos |
| 17 | Reviews y ratings | Parcial | Media | Rating básico de tienda/servicio |
| 18 | Soporte técnico | No | Baja | Diferido a fase posterior |
| 19 | TOS | Parcial | Media | Solo estructura inicial o vista básica |
| 20 | Transporte | Parcial | Media | Como categoría/servicio, no operación avanzada |
| 21 | Almacenamiento | Parcial | Media | Como categoría/servicio, no inventario avanzado |
| 22 | Inspecciones | Parcial | Media | Como categoría/servicio, no checklist avanzado |

---

## 9. Módulos excluidos del MVP inicial

Los siguientes módulos o funcionalidades quedan fuera del MVP inicial y deben planificarse en fases posteriores:

1. TOS avanzado con mapa gráfico de patio.
2. Control completo de contenedores en tiempo real.
3. Gate-in y gate-out operativo avanzado.
4. Integración GPS de transporte.
5. Gestión avanzada de flota.
6. Inventario avanzado de almacén fiscal.
7. Checklists dinámicos avanzados de inspección.
8. Integración bancaria real.
9. Pasarela de pago automática.
10. Facturación fiscal automática.
11. Conciliación bancaria automática.
12. Integración con sistemas de aduana.
13. Integración con navieras.
14. Integración EDI.
15. OCR documental.
16. Inteligencia artificial para recomendación de proveedores.
17. App móvil nativa.
18. Módulo completo de soporte técnico.
19. Liquidación automática a proveedores.
20. Motor avanzado de reputación.

---

## 10. Flujo principal incluido en el MVP

### 10.1 Flujo cliente final

1. El cliente entra al marketplace.
2. Se registra o inicia sesión.
3. Busca un servicio logístico.
4. Filtra por categoría, puerto, terminal o tarifa.
5. Visualiza tarjetas de servicios y tiendas.
6. Entra al perfil público de una tienda logística.
7. Revisa servicios, rating, documentos requeridos y tarifa referencial.
8. Solicita cotización.
9. Carga documentos básicos si aplica.
10. Recibe respuesta de la tienda.
11. Aprueba o rechaza la cotización.
12. Si aprueba, el sistema genera una orden.
13. Registra pago referencial o sube comprobante.
14. Consulta estado de orden.
15. Descarga evidencias o documentos finales.
16. Califica el servicio.

### 10.2 Flujo tienda logística

1. La tienda se registra.
2. Carga datos básicos de empresa.
3. Carga documentos de validación.
4. Espera aprobación del superadministrador.
5. Una vez aprobada, crea fichas de servicios.
6. Publica servicios sujetos a aprobación.
7. Recibe solicitudes de cotización.
8. Responde con tarifa, tiempo estimado y condiciones.
9. Recibe orden cuando el cliente aprueba.
10. Actualiza estado de orden.
11. Carga evidencias.
12. Cierra operación.
13. Consulta pagos y comisiones.

### 10.3 Flujo superadministrador

1. Inicia sesión en panel global.
2. Consulta usuarios registrados.
3. Aprueba o bloquea tiendas logísticas.
4. Aprueba o desactiva servicios.
5. Configura catálogos maestros.
6. Configura reglas de comisión básica.
7. Consulta cotizaciones y órdenes.
8. Revisa pagos referenciales.
9. Consulta reportes básicos.
10. Consulta auditoría de eventos críticos.

---

## 11. Catálogos maestros mínimos del MVP

El MVP debe incluir los siguientes catálogos iniciales:

| Nº | Catálogo | Cantidad referencial inicial | Prioridad |
|---:|---|---:|---|
| 1 | Categorías de servicios | 10 | Alta |
| 2 | Tipos de tiendas | 8 | Alta |
| 3 | Tipos de carga | 8 | Media |
| 4 | Tipos de contenedores | 7 | Media |
| 5 | Tipos de documentos | 12 | Alta |
| 6 | Estados operativos | 12 | Alta |
| 7 | Estados financieros | 8 | Alta |
| 8 | Estados aduaneros | 8 | Media |
| 9 | Puertos | 5 | Alta |
| 10 | Terminales | 8 | Alta |
| 11 | Tarifas | 10 | Alta |
| 12 | Comisiones | 6 | Alta |
| 13 | Roles | 9 | Alta |
| 14 | Permisos | 16 | Alta |

Estos catálogos deben crearse como seeds iniciales y también deben ser administrables desde el panel del superadministrador.

---

## 12. Servicios mínimos incluidos en el MVP

El MVP debe permitir publicar, buscar y cotizar al menos los siguientes servicios logísticos:

| Código | Servicio | Categoría | Unidad referencial | Tarifa referencial |
|---|---|---|---|---:|
| SERV-ADU-001 | Despacho aduanero de importación | Aduana | Contenedor | USD 450 |
| SERV-TRA-001 | Transporte terrestre puerto-almacén | Transporte | Viaje | USD 650 |
| SERV-PUE-001 | Gestión de tasas portuarias | Puerto | Contenedor | USD 180 |
| SERV-TER-001 | Movimiento interno de terminal | Terminal | Movimiento | USD 120 |
| SERV-ALM-001 | Almacenamiento fiscal temporal | Almacenamiento | Día | USD 35 |
| SERV-INS-001 | Inspección física de carga | Inspección | Inspección | USD 280 |
| SERV-SEG-001 | Seguro básico de carga | Seguros | Póliza | USD 220 |
| SERV-PAG-001 | Gestión de pagos y comprobantes | Pagos | Gestión | USD 65 |
| SERV-DOC-001 | Preparación documental logística | Documentación | Documento | USD 30 |
| SERV-TEC-001 | Tracking digital de operación | Tecnología | Operación | USD 95 |

---

## 13. Reglas de negocio del MVP

1. Solo usuarios autenticados pueden solicitar cotizaciones.
2. Solo tiendas aprobadas pueden publicar servicios.
3. Solo servicios aprobados pueden aparecer en búsqueda pública.
4. Todo servicio debe tener categoría, tarifa, unidad, proveedor y estado.
5. Toda cotización debe estar asociada a cliente, tienda y servicio.
6. Toda cotización debe tener estado.
7. Una cotización aprobada debe poder convertirse en orden.
8. Toda orden debe tener estado operativo.
9. Toda carga documental debe estar asociada a cliente, cotización, orden o servicio.
10. Todo pago debe tener estado financiero.
11. Toda comisión debe calcularse con una regla activa.
12. Todo evento crítico debe registrarse en auditoría.
13. Los permisos deben aplicarse en frontend y backend.
14. El superadministrador puede aprobar, suspender o desactivar tiendas y servicios.
15. El auditor solo consulta; no modifica operaciones.

---

## 14. Estados mínimos del MVP

### 14.1 Estados operativos

1. Solicitado.
2. Validado.
3. Cotizado.
4. Aprobado.
5. En ejecución.
6. Pendiente documento.
7. Pendiente pago.
8. En inspección.
9. Bloqueado.
10. Liberado.
11. Cerrado.
12. Cancelado.

### 14.2 Estados financieros

1. Pendiente de pago.
2. Pago iniciado.
3. Pago confirmado.
4. Conciliado.
5. Parcialmente pagado.
6. Vencido.
7. Reembolsado.
8. Anulado.

### 14.3 Estados de tienda

1. Registrada.
2. Pendiente de revisión.
3. Aprobada.
4. Rechazada.
5. Suspendida.
6. Inactiva.

### 14.4 Estados de servicio

1. Borrador.
2. Pendiente de aprobación.
3. Publicado.
4. Pausado.
5. Rechazado.
6. Inactivo.

### 14.5 Estados de cotización

1. Solicitada.
2. En revisión.
3. Respondida.
4. Aprobada.
5. Rechazada.
6. Vencida.
7. Convertida en orden.

### 14.6 Estados de orden

1. Creada.
2. En proceso.
3. Pendiente documento.
4. Pendiente pago.
5. En ejecución.
6. Cerrada.
7. Cancelada.

---

## 15. Alcance visual del MVP

El MVP debe tener una interfaz web moderna tipo marketplace/directorio.

### 15.1 Pantallas públicas

1. Home con buscador principal.
2. Página de resultados de búsqueda.
3. Página pública de tienda logística.
4. Página de detalle de servicio.
5. Registro.
6. Login.

### 15.2 Pantallas cliente final

1. Dashboard cliente.
2. Mis cotizaciones.
3. Mis órdenes.
4. Mis documentos.
5. Mis pagos.
6. Detalle de cotización.
7. Detalle de orden.

### 15.3 Pantallas tienda logística

1. Dashboard tienda.
2. Perfil de tienda.
3. Mis servicios.
4. Solicitudes de cotización.
5. Órdenes asignadas.
6. Documentos y evidencias.
7. Pagos y comisiones.

### 15.4 Pantallas superadministrador

1. Dashboard global.
2. Usuarios.
3. Tiendas.
4. Servicios.
5. Catálogos maestros.
6. Cotizaciones.
7. Órdenes.
8. Pagos.
9. Comisiones.
10. Reportes.
11. Auditoría.

### 15.5 Principios visuales

1. Diseño responsive.
2. Buscador visible y dominante.
3. Tarjetas de servicios claras.
4. Filtros laterales simples.
5. Rating y reviews visibles.
6. Botones de acción claros.
7. Estados con badges.
8. Perfil público de tienda tipo directorio.
9. Identidad visual propia del sector logístico.
10. No copiar marca ni diseño exacto de plataformas existentes.

---

## 16. Alcance técnico del MVP

### 16.1 Frontend React.js

Debe incluir:

1. Estructura de rutas públicas y privadas.
2. Layout general.
3. Layout por perfil.
4. Componentes reutilizables.
5. Formularios principales.
6. Tablas con filtros.
7. Cards de servicios.
8. Cards de tiendas.
9. Modal de solicitud de cotización.
10. Dashboard por perfil.
11. Protección de rutas por autenticación.
12. Menús visibles según perfil.

### 16.2 Backend Nest.js

Debe incluir:

1. Módulo de autenticación.
2. Módulo de usuarios.
3. Módulo de roles.
4. Módulo de permisos.
5. Módulo de tiendas.
6. Módulo de servicios.
7. Módulo de búsqueda.
8. Módulo de cotizaciones.
9. Módulo de órdenes.
10. Módulo documental.
11. Módulo de pagos.
12. Módulo de comisiones.
13. Módulo de reportes.
14. Módulo de auditoría.
15. Guards JWT.
16. Guards RBAC.
17. DTOs de validación.
18. Swagger/OpenAPI.

### 16.3 Base de datos MySQL

Debe incluir tablas para:

1. Usuarios.
2. Perfiles.
3. Roles.
4. Permisos.
5. Tiendas.
6. Servicios.
7. Categorías.
8. Cotizaciones.
9. Líneas de cotización.
10. Órdenes.
11. Líneas de orden.
12. Documentos.
13. Pagos.
14. Comisiones.
15. Reviews.
16. Reportes.
17. Auditoría.
18. Catálogos maestros.
19. Ítems de catálogos.
20. Puertos.
21. Terminales.

---

## 17. Tablas MySQL mínimas del MVP

| Nº | Tabla | Prioridad | Descripción |
|---:|---|---|---|
| 1 | `users` | Alta | Usuarios del sistema |
| 2 | `user_profiles` | Alta | Perfiles funcionales |
| 3 | `roles` | Alta | Roles del sistema |
| 4 | `permissions` | Alta | Permisos disponibles |
| 5 | `role_permissions` | Alta | Relación roles-permisos |
| 6 | `user_roles` | Alta | Relación usuarios-roles |
| 7 | `stores` | Alta | Tiendas logísticas |
| 8 | `store_users` | Alta | Usuarios asociados a tiendas |
| 9 | `store_documents` | Media | Documentos de tiendas |
| 10 | `services` | Alta | Fichas de servicios |
| 11 | `service_categories` | Alta | Categorías de servicios |
| 12 | `service_pricing` | Alta | Tarifas por servicio |
| 13 | `service_documents` | Alta | Documentos requeridos por servicio |
| 14 | `quotations` | Alta | Cotizaciones |
| 15 | `quotation_lines` | Alta | Líneas de cotización |
| 16 | `quotation_documents` | Media | Documentos asociados a cotización |
| 17 | `orders` | Alta | Órdenes de servicio |
| 18 | `order_lines` | Alta | Líneas de orden |
| 19 | `documents` | Alta | Documentos generales |
| 20 | `document_versions` | Media | Versiones documentales |
| 21 | `payments` | Media | Pagos referenciales |
| 22 | `payment_receipts` | Media | Comprobantes de pago |
| 23 | `commission_rules` | Media | Reglas de comisión |
| 24 | `commissions` | Media | Comisiones calculadas |
| 25 | `reviews` | Media | Reseñas básicas |
| 26 | `ratings` | Media | Calificaciones |
| 27 | `reports` | Media | Reportes generados |
| 28 | `audit_logs` | Alta | Logs de auditoría |
| 29 | `master_catalogs` | Alta | Catálogos maestros |
| 30 | `master_catalog_items` | Alta | Ítems de catálogos |
| 31 | `ports` | Media | Puertos |
| 32 | `terminals` | Media | Terminales |

---

## 18. Endpoints mínimos del MVP

### 18.1 Autenticación

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /auth/logout`
4. `GET /auth/me`
5. `POST /auth/forgot-password`

### 18.2 Usuarios

1. `GET /users`
2. `GET /users/:id`
3. `PATCH /users/:id`
4. `PATCH /users/:id/block`
5. `PATCH /users/:id/activate`

### 18.3 Roles y permisos

1. `GET /roles`
2. `POST /roles`
3. `PATCH /roles/:id`
4. `GET /permissions`
5. `POST /roles/:id/permissions`

### 18.4 Tiendas

1. `POST /stores`
2. `GET /stores`
3. `GET /stores/:id`
4. `GET /stores/:id/public`
5. `PATCH /stores/:id`
6. `PATCH /stores/:id/approve`
7. `PATCH /stores/:id/reject`
8. `PATCH /stores/:id/suspend`

### 18.5 Servicios

1. `POST /services`
2. `GET /services`
3. `GET /services/:id`
4. `PATCH /services/:id`
5. `PATCH /services/:id/approve`
6. `PATCH /services/:id/publish`
7. `PATCH /services/:id/pause`

### 18.6 Búsqueda

1. `GET /search/services`
2. `GET /search/stores`
3. `GET /search/categories`

### 18.7 Cotizaciones

1. `POST /quotations`
2. `GET /quotations`
3. `GET /quotations/:id`
4. `PATCH /quotations/:id/respond`
5. `PATCH /quotations/:id/approve`
6. `PATCH /quotations/:id/reject`
7. `POST /quotations/:id/convert-to-order`

### 18.8 Órdenes

1. `GET /orders`
2. `GET /orders/:id`
3. `PATCH /orders/:id/status`
4. `PATCH /orders/:id/start`
5. `PATCH /orders/:id/close`
6. `PATCH /orders/:id/cancel`

### 18.9 Documentos

1. `POST /documents`
2. `GET /documents/:id`
3. `PATCH /documents/:id/validate`
4. `PATCH /documents/:id/reject`
5. `GET /documents/by-order/:orderId`

### 18.10 Pagos

1. `POST /payments`
2. `GET /payments`
3. `GET /payments/:id`
4. `PATCH /payments/:id/confirm`

### 18.11 Comisiones

1. `GET /commission-rules`
2. `POST /commission-rules`
3. `PATCH /commission-rules/:id`
4. `GET /commissions`
5. `POST /commissions/calculate`

### 18.12 Reportes

1. `GET /reports/summary`
2. `GET /reports/orders`
3. `GET /reports/payments`
4. `GET /reports/commissions`

### 18.13 Auditoría

1. `GET /audit-logs`
2. `GET /audit-logs/:id`
3. `GET /audit-logs/by-entity/:entityType/:entityId`

### 18.14 Catálogos maestros

1. `GET /catalogs`
2. `GET /catalogs/:id/items`
3. `POST /catalogs`
4. `POST /catalogs/:id/items`
5. `PATCH /catalogs/:id/items/:itemId`

---

## 19. Componentes React mínimos del MVP

| Nº | Componente | Prioridad | Uso |
|---:|---|---|---|
| 1 | `AppLayout` | Alta | Layout general |
| 2 | `AuthLayout` | Alta | Login y registro |
| 3 | `DashboardLayout` | Alta | Paneles privados |
| 4 | `HomeHeroSearch` | Alta | Buscador principal |
| 5 | `ServiceCategoryGrid` | Alta | Categorías del home |
| 6 | `SearchResultsPage` | Alta | Resultados de búsqueda |
| 7 | `FilterSidebar` | Alta | Filtros de búsqueda |
| 8 | `ServiceResultCard` | Alta | Tarjeta de servicio |
| 9 | `StoreResultCard` | Alta | Tarjeta de tienda |
| 10 | `StorePublicProfile` | Alta | Perfil público de tienda |
| 11 | `RatingStars` | Media | Rating visual |
| 12 | `ReviewList` | Media | Reviews básicas |
| 13 | `RequestQuoteModal` | Alta | Solicitud rápida de cotización |
| 14 | `QuotationForm` | Alta | Formulario de cotización |
| 15 | `QuotationDetail` | Alta | Detalle de cotización |
| 16 | `OrderTimeline` | Alta | Línea de tiempo de orden |
| 17 | `DocumentUploader` | Alta | Carga documental |
| 18 | `PaymentSummaryCard` | Media | Resumen de pago |
| 19 | `CommissionSummaryCard` | Media | Resumen de comisión |
| 20 | `AuditTimeline` | Media | Trazabilidad básica |
| 21 | `AdminDataTable` | Alta | Tablas administrativas |
| 22 | `RolePermissionMatrix` | Alta | Matriz de permisos |
| 23 | `CatalogManager` | Alta | Gestión de catálogos |
| 24 | `ReportExportButton` | Media | Exportación de reportes |

---

## 20. Entregables del MVP

### 20.1 Entregables funcionales

1. Registro e inicio de sesión.
2. Panel cliente.
3. Panel tienda logística.
4. Panel superadministrador.
5. CRUD de tiendas.
6. Aprobación de tiendas.
7. CRUD de servicios.
8. Aprobación de servicios.
9. Home marketplace.
10. Búsqueda de servicios.
11. Filtros básicos.
12. Perfil público de tienda.
13. Solicitud de cotización.
14. Respuesta de cotización.
15. Conversión a orden.
16. Carga documental.
17. Registro de pago.
18. Cálculo de comisión.
19. Reportes básicos.
20. Auditoría básica.

### 20.2 Entregables técnicos

1. Frontend React.js funcional.
2. Backend Nest.js funcional.
3. Base de datos MySQL inicial.
4. Migraciones.
5. Seeds iniciales.
6. Swagger/OpenAPI.
7. Guards de autenticación.
8. Guards RBAC.
9. Validaciones DTO.
10. Pruebas unitarias mínimas.
11. Pruebas de integración críticas.
12. Documentación técnica.

### 20.3 Entregables documentales

1. `01_PRODUCT_VISION.md`.
2. `02_MVP_SCOPE.md`.
3. `03_ANTIGRAVITY_RULES.md`.
4. `07_FUNCTIONAL_MODULES_CATALOG.md`.
5. `08_DESIGN_SYSTEM_MARKETPLACE.md`.
6. `11_TECHNICAL_ARCHITECTURE.md`.
7. `12_DATABASE_MASTER_SCHEMA.md`.
8. `13_API_SPECIFICATION.md`.
9. `15_MASTER_CATALOGS_MVP.md`.
10. `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
11. `31_ACCEPTANCE_CRITERIA_MASTER.md`.
12. `32_ANTIGRAVITY_PROMPTS_MASTER.md`.

---

## 21. Roadmap sugerido del MVP por sprints

| Sprint | Objetivo | Entregables principales |
|---:|---|---|
| Sprint 1 | Arquitectura base | Estructura frontend, backend, MySQL, documentación inicial |
| Sprint 2 | Usuarios y autenticación | Registro, login, JWT, perfil básico |
| Sprint 3 | Roles y permisos | RBAC, matriz de acceso, guards, menú dinámico |
| Sprint 4 | Catálogos maestros | Catálogos MVP, seeds, CRUD admin |
| Sprint 5 | Tiendas logísticas | Registro, aprobación, perfil público |
| Sprint 6 | Servicios | Fichas de servicios, tarifas, documentos, aprobación |
| Sprint 7 | Home y búsqueda | Home, buscador, filtros, resultados |
| Sprint 8 | Cotizaciones | Solicitud, respuesta, aprobación, rechazo |
| Sprint 9 | Órdenes | Conversión a orden, estados, timeline |
| Sprint 10 | Documentos | Upload, validación, documentos por orden |
| Sprint 11 | Pagos y comisiones | Pago referencial, comprobante, comisión |
| Sprint 12 | Reportes y auditoría | Logs, reportes básicos, exportación inicial |
| Sprint 13 | Reviews básicas | Rating, review, perfil de tienda |
| Sprint 14 | QA integral | Pruebas, correcciones, validación MVP |
| Sprint 15 | Despliegue demo | Build, ambiente demo, documentación final |

---

## 22. Criterios de aceptación generales del MVP

El MVP se considera aceptado cuando:

1. El usuario puede registrarse e iniciar sesión.
2. El sistema diferencia perfiles de cliente, tienda y superadministrador.
3. El superadministrador puede crear roles y permisos básicos.
4. El superadministrador puede cargar y editar catálogos maestros.
5. Una tienda puede registrarse.
6. El superadministrador puede aprobar una tienda.
7. Una tienda aprobada puede publicar servicios.
8. El superadministrador puede aprobar servicios.
9. Un cliente puede buscar servicios.
10. Un cliente puede filtrar resultados.
11. Un cliente puede ver perfil público de tienda.
12. Un cliente puede solicitar cotización.
13. Una tienda puede responder cotización.
14. Un cliente puede aprobar cotización.
15. El sistema puede crear una orden desde cotización aprobada.
16. El cliente o tienda puede cargar documentos básicos.
17. Se puede registrar un pago referencial.
18. El sistema calcula comisión básica.
19. El sistema registra auditoría de eventos críticos.
20. El superadministrador puede ver reportes básicos.
21. El sistema respeta permisos en frontend y backend.
22. El MVP funciona en vista desktop y mobile.
23. Las rutas protegidas no son accesibles sin autenticación.
24. Los endpoints críticos están protegidos por JWT y RBAC.
25. Existen pruebas básicas para lógica crítica.

---

## 23. Criterios de exclusión

Una funcionalidad debe excluirse del MVP si cumple cualquiera de estas condiciones:

1. Requiere integración externa compleja.
2. No es necesaria para validar el flujo cotización-orden-pago.
3. Requiere operación en tiempo real avanzada.
4. Aumenta significativamente la complejidad sin validar valor inmediato.
5. Puede simularse manualmente en el MVP.
6. Puede resolverse con datos referenciales.
7. Depende de acuerdos externos con terceros.
8. Requiere cumplimiento regulatorio específico aún no definido.

---

## 24. Riesgos del MVP

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Alcance crece demasiado | Alto | Mantener lista de exclusiones |
| Catálogos incompletos | Medio | Usar seeds iniciales revisables |
| Permisos mal configurados | Alto | Probar RBAC por perfil |
| Cálculos de comisión erróneos | Alto | Pruebas unitarias de cálculos |
| Diseño visual poco claro | Medio | Validar flujo tipo marketplace temprano |
| Documentos sin trazabilidad | Alto | Registrar auditoría documental básica |
| Demora por módulos TOS avanzados | Alto | Mantener TOS avanzado fuera del MVP |
| Integraciones externas bloquean avance | Alto | No incluir integraciones externas en MVP |
| Falta de datos demo | Medio | Crear seeds desde el inicio |
| Antigravity modifica sin control | Alto | Usar `03_ANTIGRAVITY_RULES.md` |

---

## 25. Dependencias del MVP

### 25.1 Dependencias funcionales

1. `01_PRODUCT_VISION.md` aprobado.
2. Perfiles principales definidos.
3. Catálogos maestros definidos.
4. Servicios iniciales definidos.
5. Reglas de comisión inicial definidas.
6. Estados operativos y financieros definidos.

### 25.2 Dependencias técnicas

1. Proyecto React.js creado.
2. Proyecto Nest.js creado.
3. MySQL configurado.
4. Variables de entorno definidas.
5. Migraciones iniciales disponibles.
6. Seeds iniciales disponibles.
7. Autenticación implementada.
8. RBAC implementado.

### 25.3 Dependencias documentales

1. Documento de visión.
2. Documento de alcance MVP.
3. Reglas Antigravity.
4. Arquitectura técnica.
5. Esquema de base de datos.
6. Especificación API.
7. Backlog maestro.
8. Criterios de aceptación.

---

## 26. Definition of Ready del MVP

Una historia del MVP está lista para desarrollo cuando:

1. Tiene descripción clara.
2. Tiene perfil de usuario definido.
3. Tiene módulo asociado.
4. Tiene criterios de aceptación.
5. Tiene tareas frontend, backend y base de datos si aplica.
6. Tiene tablas relacionadas identificadas.
7. Tiene endpoints relacionados identificados.
8. Tiene permisos requeridos definidos.
9. Tiene eventos de auditoría definidos si aplica.
10. No depende de información crítica faltante.

---

## 27. Definition of Done del MVP

Una historia del MVP se considera terminada cuando:

1. El código está implementado.
2. El frontend compila sin errores.
3. El backend compila sin errores.
4. Las migraciones se ejecutan correctamente.
5. Los endpoints responden correctamente.
6. Las validaciones funcionan.
7. Los permisos funcionan.
8. Los eventos críticos se auditan.
9. Existen pruebas mínimas.
10. La UI es responsive.
11. La documentación fue actualizada.
12. El flujo fue probado manualmente.
13. No hay errores críticos abiertos.

---

## 28. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, product owner, desarrollador full stack senior y QA técnico.

Usa este documento `02_MVP_SCOPE.md` como fuente principal para delimitar el alcance del MVP del Marketplace Logístico TOS.

Objetivo:
Convertir este alcance MVP en un backlog técnico ejecutable dentro de Antigravity, usando React.js para frontend, Nest.js para backend y MySQL para base de datos.

Reglas obligatorias:
1. No desarrollar funcionalidades fuera del MVP sin registrarlas como fase posterior.
2. No integrar directamente con Odoo; usar modelos Odoo solo como referencia conceptual.
3. No copiar identidad visual de Yelp ni de ninguna marca; usar solo patrones generales de marketplace/directorio.
4. Mantener arquitectura modular.
5. Crear pruebas para lógica crítica.
6. Proteger endpoints con JWT y RBAC.
7. Registrar auditoría en eventos críticos.
8. Crear documentación antes de implementar módulos complejos.
9. Separar frontend, backend y base de datos.
10. Mantener catálogos maestros como datos iniciales configurables.

Entregables esperados:
1. Backlog MVP por épicas.
2. Historias de usuario del MVP.
3. Tareas frontend por módulo.
4. Tareas backend por módulo.
5. Tareas MySQL por módulo.
6. Tareas QA por módulo.
7. Lista de pantallas MVP.
8. Lista de endpoints MVP.
9. Lista de tablas MVP.
10. Lista de componentes React MVP.
11. Roadmap por sprints.
12. Riesgos y dependencias.
13. Criterios de aceptación por historia.

Antes de escribir código, genera un plan de implementación y valida que todas las tareas estén dentro del alcance del MVP.
```

---

## 29. Checklist de uso en Antigravity

- [ ] Guardar este documento como `02_MVP_SCOPE.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Confirmar que el alcance está alineado con `01_PRODUCT_VISION.md`.
- [ ] Confirmar módulos incluidos en el MVP.
- [ ] Confirmar módulos excluidos.
- [ ] Confirmar perfiles incluidos.
- [ ] Confirmar catálogos mínimos.
- [ ] Confirmar servicios iniciales.
- [ ] Confirmar pantallas mínimas.
- [ ] Confirmar endpoints mínimos.
- [ ] Confirmar tablas mínimas.
- [ ] Confirmar criterios de aceptación.
- [ ] Usarlo como entrada para el backlog maestro.
- [ ] Usarlo como guía para prompts de Antigravity.

---

## 30. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

