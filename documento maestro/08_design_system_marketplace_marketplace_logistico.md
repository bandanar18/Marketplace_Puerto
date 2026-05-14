# 08_DESIGN_SYSTEM_MARKETPLACE.md

# Documento Maestro de Sistema Visual Marketplace
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `08_DESIGN_SYSTEM_MARKETPLACE.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Documento maestro de diseño visual, UX y componentes UI |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Guiar a Antigravity en la creación de la interfaz visual del marketplace logístico |

---

## 2. Propósito del documento

Este documento define el **sistema visual, UX y UI** del Marketplace Logístico TOS para Puertos Aduaneros.

Su objetivo es establecer una guía clara para que Antigravity pueda desarrollar una experiencia visual profesional, moderna, responsive, orientada a marketplace/directorio de servicios y adaptada al ecosistema logístico-portuario.

La plataforma debe inspirarse en patrones generales de marketplaces y directorios comerciales, como:

1. Buscador principal visible.
2. Categorías destacadas.
3. Filtros laterales.
4. Resultados en tarjetas.
5. Perfil público de proveedor.
6. Ratings y reviews.
7. Solicitud rápida de cotización.
8. Comparación de proveedores.
9. Vista de detalle de servicio.
10. Paneles privados por perfil.

La inspiración visual puede tomar como referencia patrones generales de plataformas tipo directorio, pero **no debe copiar marca, logotipo, colores exactos, íconos propietarios, textos, diseño pixel-perfect ni identidad visual de Yelp ni de ninguna otra plataforma existente**.

---

## 3. Objetivo general

Diseñar un sistema visual propio para el marketplace logístico que permita a clientes, tiendas logísticas, operadores, inspectores, transportistas, agentes aduanales, auditores y superadministradores navegar, buscar, cotizar, gestionar y auditar servicios logísticos de forma clara, confiable, rápida y escalable.

---

## 4. Objetivos específicos

1. Definir identidad visual propia para el sector logístico-portuario.
2. Definir paleta de colores base.
3. Definir tipografía y jerarquías visuales.
4. Definir layout público del marketplace.
5. Definir layouts privados por perfil.
6. Definir componentes UI reutilizables.
7. Definir cards de servicios y tiendas.
8. Definir buscador y filtros.
9. Definir perfil público de tienda logística.
10. Definir dashboards por perfil.
11. Definir tablas administrativas.
12. Definir componentes de estados, badges, ratings y reviews.
13. Definir experiencia responsive.
14. Definir reglas de accesibilidad.
15. Definir criterios de aceptación visual.
16. Servir como prompt maestro para Antigravity.

---

## 5. Principios visuales del producto

El diseño del marketplace debe transmitir:

1. **Confianza:** porque se gestionan documentos, pagos y operaciones críticas.
2. **Claridad:** porque participan múltiples actores y módulos.
3. **Rapidez:** porque el cliente debe buscar y cotizar sin fricción.
4. **Trazabilidad:** porque cada operación debe mostrar estados y evidencias.
5. **Profesionalismo:** porque se dirige a empresas logísticas, portuarias y aduaneras.
6. **Orden:** porque el sistema maneja muchos datos, documentos y procesos.
7. **Escalabilidad:** porque el marketplace crecerá por módulos, perfiles y servicios.
8. **Comparabilidad:** porque el cliente necesita comparar proveedores y servicios.
9. **Transparencia:** porque deben mostrarse tarifas, SLA, documentos, rating y condiciones.
10. **Operatividad:** porque la plataforma no solo vende servicios, también gestiona operaciones.

---

## 6. Restricciones visuales y legales

### 6.1 Permitido

Antigravity puede usar patrones generales de marketplace/directorio, tales como:

1. Buscador principal grande.
2. Cards de resultados.
3. Filtros laterales.
4. Ratings con estrellas.
5. Reviews.
6. Perfil público de proveedor.
7. Galería de fotos.
8. Botón de solicitud de cotización.
9. Listado de categorías.
10. Página de resultados.
11. Vista de mapa o ubicación conceptual.
12. Badges de verificación.
13. Secciones de servicios populares.

### 6.2 Prohibido

Antigravity no debe:

1. Copiar logotipo de Yelp ni de ninguna plataforma existente.
2. Copiar colores exactos de Yelp u otra marca.
3. Copiar diseño pixel-perfect de Yelp u otra plataforma.
4. Copiar textos comerciales protegidos.
5. Copiar íconos propietarios.
6. Usar nombres comerciales de terceros como identidad visual.
7. Replicar estructura visual exacta de una plataforma existente.
8. Usar screenshots de terceros como base directa del diseño.
9. Usar assets no licenciados.
10. Diseñar una interfaz que pueda confundirse con otra marca.

### 6.3 Regla de identidad propia

La plataforma debe construir una identidad visual basada en el sector logístico:

1. Puertos.
2. Contenedores.
3. Buques.
4. Rutas.
5. Aduanas.
6. Documentos.
7. Seguridad.
8. Almacenamiento.
9. Transporte.
10. Tecnología operativa.

---

## 7. Personalidad visual de la marca

| Atributo | Descripción |
|---|---|
| Profesional | Interfaz seria, clara y confiable para operaciones empresariales |
| Moderna | Diseño actual, limpio, con cards, filtros y dashboards visuales |
| Operativa | Prioriza acciones rápidas y estados claros |
| Comercial | Facilita búsqueda, comparación, cotización y contratación |
| Técnica | Permite reportes, auditoría, documentos y trazabilidad |
| Global | Preparada para puertos, terminales, comercio exterior y logística internacional |

---

## 8. Paleta de colores sugerida

> Los colores pueden ajustarse durante la implementación, pero deben mantener identidad propia y diferenciarse de marcas existentes.

| Uso | Color sugerido | HEX | Descripción |
|---|---|---|---|
| Primario | Azul puerto | `#0F3D5E` | Confianza, logística, operación marítima |
| Secundario | Azul tecnológico | `#0EA5E9` | Tecnología, trazabilidad, acción |
| Acento | Naranja carga | `#F97316` | Acción, cotización, alertas comerciales |
| Éxito | Verde operación | `#16A34A` | Aprobado, completado, liberado |
| Advertencia | Amarillo documento | `#F59E0B` | Pendiente, revisión, observación |
| Error | Rojo control | `#DC2626` | Rechazado, bloqueado, vencido |
| Fondo principal | Gris claro | `#F8FAFC` | Limpieza visual |
| Fondo tarjeta | Blanco | `#FFFFFF` | Cards y formularios |
| Texto principal | Slate oscuro | `#0F172A` | Lectura principal |
| Texto secundario | Gris azulado | `#64748B` | Textos auxiliares |
| Bordes | Gris suave | `#E2E8F0` | Separadores y contornos |

---

## 9. Uso recomendado de colores

### 9.1 Color primario

Usar azul puerto para:

1. Header principal.
2. Botones primarios institucionales.
3. Títulos destacados.
4. Sidebar administrativo.
5. Estados de navegación activa.

### 9.2 Color secundario

Usar azul tecnológico para:

1. Links.
2. Elementos interactivos.
3. Iconos de tracking.
4. Badges de tecnología.
5. Indicadores de progreso.

### 9.3 Color acento

Usar naranja carga para:

1. Botón “Solicitar cotización”.
2. CTA principal del home.
3. Etiquetas comerciales.
4. Resaltado de tarifa.
5. Acciones de marketplace.

### 9.4 Colores de estado

Usar colores semánticos de manera consistente:

| Estado | Color |
|---|---|
| Aprobado | Verde |
| Publicado | Verde |
| En proceso | Azul |
| Pendiente | Amarillo |
| En revisión | Amarillo |
| Bloqueado | Rojo |
| Rechazado | Rojo |
| Cerrado | Slate oscuro |
| Cancelado | Gris |

---

## 10. Tipografía sugerida

### 10.1 Familia tipográfica

Usar una fuente moderna, legible y profesional.

Opciones recomendadas:

1. Inter.
2. Roboto.
3. system-ui.
4. Segoe UI.
5. Arial.

### 10.2 Jerarquía tipográfica

| Elemento | Tamaño sugerido | Peso | Uso |
|---|---:|---:|---|
| H1 | 40–52 px | 800/900 | Home, títulos principales |
| H2 | 28–36 px | 700/800 | Secciones principales |
| H3 | 22–26 px | 700 | Cards, subsecciones |
| H4 | 18–20 px | 700 | Títulos internos |
| Body | 14–16 px | 400/500 | Texto general |
| Small | 12–13 px | 400/600 | Labels, metadatos |
| Badge | 11–12 px | 700 | Estados y etiquetas |
| Button | 14–15 px | 700 | Acciones |

---

## 11. Sistema de espaciado

Usar una escala consistente basada en múltiplos de 4 px.

| Token | Valor | Uso |
|---|---:|---|
| `space-1` | 4 px | Separación mínima |
| `space-2` | 8 px | Íconos, badges |
| `space-3` | 12 px | Inputs compactos |
| `space-4` | 16 px | Cards pequeñas |
| `space-5` | 20 px | Bloques internos |
| `space-6` | 24 px | Cards principales |
| `space-8` | 32 px | Secciones |
| `space-10` | 40 px | Separación grande |
| `space-12` | 48 px | Hero y layouts principales |
| `space-16` | 64 px | Secciones amplias |

---

## 12. Bordes, radios y sombras

| Elemento | Radio sugerido | Sombra sugerida |
|---|---:|---|
| Botón | 12–16 px | Suave en hover |
| Card de servicio | 20–24 px | Sombra ligera |
| Card de tienda | 20–24 px | Sombra ligera |
| Modal | 24–28 px | Sombra media |
| Input | 12–16 px | Sin sombra o muy ligera |
| Badge | 999 px | Sin sombra |
| Dashboard card | 20–24 px | Sombra ligera |
| Panel lateral | 20–24 px | Sombra suave |

### Regla visual

La interfaz debe sentirse moderna y limpia, evitando bordes excesivamente duros o sombras pesadas.

---

## 13. Iconografía

### 13.1 Estilo recomendado

Usar íconos lineales, simples y consistentes.

Categorías de íconos requeridas:

1. Usuario.
2. Tienda.
3. Servicio.
4. Cotización.
5. Orden.
6. Documento.
7. Pago.
8. Comisión.
9. Reporte.
10. Auditoría.
11. Puerto.
12. Contenedor.
13. Camión.
14. Almacén.
15. Inspección.
16. Seguridad.
17. Soporte.
18. Búsqueda.
19. Filtro.
20. Rating.

### 13.2 Regla de implementación

Antigravity debe usar librerías disponibles localmente en el proyecto o componentes SVG propios. Si el entorno bloquea CDN externos, no debe depender de importaciones remotas.

---

## 14. Layout general público

El layout público debe servir para usuarios no autenticados y clientes que buscan servicios.

### 14.1 Estructura recomendada

1. Header público.
2. Logo propio del marketplace.
3. Navegación principal.
4. Botón de login.
5. Botón de registro.
6. Hero con buscador.
7. Categorías destacadas.
8. Servicios populares.
9. Tiendas destacadas.
10. Puertos populares.
11. Cómo funciona.
12. Confianza y seguridad.
13. Footer.

### 14.2 Header público

Debe incluir:

1. Logo propio.
2. Link a buscar servicios.
3. Link a registrar tienda.
4. Link a cómo funciona.
5. Botón login.
6. Botón crear cuenta.

### 14.3 Footer público

Debe incluir:

1. Categorías.
2. Puertos.
3. Recursos.
4. Soporte.
5. Legal.
6. Contacto.
7. Redes sociales si aplica.

---

## 15. Layout privado por perfil

El layout privado debe estar disponible para usuarios autenticados.

### 15.1 Estructura base

1. Sidebar lateral.
2. Header interno.
3. Breadcrumbs.
4. Área de contenido.
5. Notificaciones.
6. Perfil del usuario.
7. Acciones rápidas.

### 15.2 Sidebar

Debe cambiar según el perfil:

1. Cliente final.
2. Tienda logística.
3. Superadministrador.
4. Operador interno.
5. Inspector.
6. Transportista.
7. Agente aduanal.
8. Auditor.
9. Soporte técnico.

### 15.3 Header interno

Debe incluir:

1. Nombre del módulo actual.
2. Buscador interno si aplica.
3. Notificaciones.
4. Perfil.
5. Selector de tienda si el usuario pertenece a varias tiendas.
6. Accesos rápidos.

---

## 16. Home del marketplace

### 16.1 Objetivo

Permitir que el cliente encuentre rápidamente servicios logísticos.

### 16.2 Componentes requeridos

1. `HomeHeroSearch`.
2. `ServiceCategoryGrid`.
3. `FeaturedLogisticsStores`.
4. `PopularPortsSection`.
5. `HowItWorksSection`.
6. `TrustAndSecuritySection`.
7. `MarketplaceStatsSection`.
8. `CallToActionProviderSection`.

### 16.3 Hero principal

Debe contener:

1. Título principal.
2. Subtítulo.
3. Campo de búsqueda de servicio.
4. Campo de ubicación, puerto o terminal.
5. Botón principal “Buscar servicios”.
6. Botón secundario “Registrar mi tienda logística”.
7. Chips de categorías populares.

### 16.4 Ejemplo de texto sugerido

Título:

> Encuentra, cotiza y gestiona servicios logísticos portuarios en un solo lugar

Subtítulo:

> Conecta con agentes aduanales, transportistas, terminales, almacenes, inspectores y proveedores logísticos verificados.

---

## 17. Página de resultados de búsqueda

### 17.1 Objetivo

Mostrar resultados comparables de servicios y tiendas logísticas.

### 17.2 Componentes requeridos

1. `SearchResultsPage`.
2. `SearchSummaryBar`.
3. `FilterSidebar`.
4. `ServiceResultCard`.
5. `StoreResultCard`.
6. `SortDropdown`.
7. `MapPreviewPanel`.
8. `PaginationControls`.
9. `EmptyState`.

### 17.3 Filtros principales

1. Categoría de servicio.
2. Puerto.
3. Terminal.
4. Tipo de carga.
5. Tipo de contenedor.
6. Rango de tarifa.
7. Tiempo estimado.
8. Rating.
9. Disponibilidad.
10. Tienda verificada.
11. Documentos requeridos.
12. SLA.

### 17.4 Ordenamiento

1. Relevancia.
2. Mejor rating.
3. Menor tarifa.
4. Menor tiempo estimado.
5. Más reciente.
6. Tiendas verificadas primero.

---

## 18. Card de servicio logístico

### 18.1 Objetivo

Permitir comparar servicios rápidamente.

### 18.2 Componente

`ServiceResultCard`

### 18.3 Contenido mínimo

1. Nombre del servicio.
2. Categoría.
3. Tienda proveedora.
4. Rating de tienda.
5. Tarifa referencial.
6. Unidad de medida.
7. Tiempo estimado.
8. SLA.
9. Puerto o terminal relacionada.
10. Documentos requeridos principales.
11. Estado de disponibilidad.
12. Botón “Ver detalle”.
13. Botón “Solicitar cotización”.

### 18.4 Estados visuales

1. Disponible.
2. Bajo revisión.
3. Pausado.
4. No disponible.
5. Verificado.
6. Requiere documentos.

---

## 19. Card de tienda logística

### 19.1 Objetivo

Mostrar proveedores logísticos de forma comparable.

### 19.2 Componente

`StoreResultCard`

### 19.3 Contenido mínimo

1. Logo o avatar de tienda.
2. Nombre comercial.
3. Tipo de tienda.
4. Rating promedio.
5. Número de reviews.
6. Categorías principales.
7. Puerto o ciudad principal.
8. Estado de verificación.
9. Tiempo promedio de respuesta.
10. Servicios destacados.
11. Botón “Ver perfil”.
12. Botón “Solicitar cotización”.

---

## 20. Perfil público de tienda logística

### 20.1 Objetivo

Crear una página pública para que el cliente evalúe una tienda logística antes de cotizar.

### 20.2 Componente principal

`StorePublicProfile`

### 20.3 Secciones requeridas

1. Header de tienda.
2. Información comercial.
3. Rating y reviews.
4. Badges de verificación.
5. Servicios publicados.
6. Galería de fotos.
7. Documentos o certificaciones visibles si aplica.
8. Ubicación o puertos donde opera.
9. Horarios de atención.
10. Tiempo promedio de respuesta.
11. Botón “Solicitar cotización”.
12. Preguntas frecuentes.
13. Reviews de clientes.
14. Servicios relacionados.

### 20.4 Header de tienda

Debe incluir:

1. Imagen de portada.
2. Logo.
3. Nombre de tienda.
4. Tipo de proveedor.
5. Rating.
6. Número de reviews.
7. Estado verificado.
8. Botón CTA.

---

## 21. Página de detalle de servicio

### 21.1 Objetivo

Mostrar información completa del servicio antes de solicitar cotización.

### 21.2 Componentes requeridos

1. `ServiceDetailPage`.
2. `ServiceHeader`.
3. `ServicePricingBox`.
4. `ServiceDocumentChecklist`.
5. `ServiceSlaPanel`.
6. `ServiceProviderCard`.
7. `RequestQuoteModal`.
8. `RelatedServicesSection`.

### 21.3 Contenido mínimo

1. Nombre del servicio.
2. Descripción.
3. Alcance.
4. Proveedor.
5. Categoría.
6. Subcategoría.
7. Tarifa referencial.
8. Unidad de medida.
9. SLA.
10. Tiempo estimado.
11. Documentos requeridos.
12. Evidencias esperadas.
13. Reglas.
14. Comisión si aplica para administración.
15. Botón de cotización.

---

## 22. Modal de solicitud de cotización

### 22.1 Objetivo

Permitir que un cliente solicite cotización de forma rápida.

### 22.2 Componente

`RequestQuoteModal`

### 22.3 Campos mínimos

1. Servicio seleccionado.
2. Tienda seleccionada.
3. Puerto.
4. Terminal.
5. Tipo de carga.
6. Tipo de contenedor.
7. Cantidad.
8. Fecha estimada.
9. Comentarios.
10. Documentos opcionales.
11. Botón enviar.

### 22.4 Estados

1. Formulario inicial.
2. Validando datos.
3. Enviando solicitud.
4. Solicitud enviada.
5. Error de validación.
6. Error de servidor.

---

## 23. Dashboards por perfil

### 23.1 Dashboard cliente

Componentes:

1. `ClientDashboard`.
2. `MetricCard`.
3. `RecentQuotationsList`.
4. `ActiveOrdersPanel`.
5. `PendingDocumentsPanel`.
6. `PaymentSummaryCard`.
7. `RecommendedServicesSection`.

Métricas:

1. Cotizaciones activas.
2. Órdenes en curso.
3. Documentos pendientes.
4. Pagos pendientes.
5. Servicios recientes.

### 23.2 Dashboard tienda logística

Componentes:

1. `StoreDashboard`.
2. `StorePerformanceCards`.
3. `QuotationRequestsPanel`.
4. `AssignedOrdersPanel`.
5. `ServiceStatusSummary`.
6. `ReviewSummaryCard`.
7. `CommissionSummaryCard`.

Métricas:

1. Solicitudes recibidas.
2. Cotizaciones respondidas.
3. Órdenes activas.
4. Servicios publicados.
5. Rating promedio.
6. Comisiones.

### 23.3 Dashboard superadministrador

Componentes:

1. `AdminDashboard`.
2. `GlobalMetricsGrid`.
3. `StoresApprovalPanel`.
4. `ServicesApprovalPanel`.
5. `FinancialSummaryPanel`.
6. `AuditAlertsPanel`.
7. `SystemHealthPanel`.

Métricas:

1. Usuarios activos.
2. Tiendas pendientes.
3. Servicios publicados.
4. Cotizaciones totales.
5. Órdenes en proceso.
6. Pagos registrados.
7. Comisiones acumuladas.
8. Eventos críticos.

### 23.4 Dashboard operador interno

Componentes:

1. `OperatorDashboard`.
2. `OperationalOrdersPanel`.
3. `DocumentReviewQueue`.
4. `StatusAlertPanel`.
5. `TosSummaryCard`.

### 23.5 Dashboard auditor

Componentes:

1. `AuditorDashboard`.
2. `AuditLogTable`.
3. `AuditFilterPanel`.
4. `CriticalEventsCard`.
5. `ExportAuditButton`.

---

## 24. Tablas administrativas

### 24.1 Componente base

`AdminDataTable`

### 24.2 Funciones requeridas

1. Búsqueda.
2. Filtros.
3. Ordenamiento.
4. Paginación.
5. Acciones por fila.
6. Selección múltiple si aplica.
7. Exportación si el permiso lo permite.
8. Estados visuales.
9. Columnas configurables si aplica.
10. Empty state.

### 24.3 Usos principales

1. Usuarios.
2. Tiendas.
3. Servicios.
4. Cotizaciones.
5. Órdenes.
6. Documentos.
7. Pagos.
8. Comisiones.
9. Reportes.
10. Auditoría.
11. Catálogos.

---

## 25. Formularios

### 25.1 Principios de formularios

1. Labels visibles.
2. Mensajes de error claros.
3. Validación inmediata cuando aplique.
4. Campos agrupados por sección.
5. Botón primario claro.
6. Botón cancelar o volver.
7. Estados de carga.
8. Confirmación de éxito.
9. Protección contra doble envío.
10. Campos obligatorios marcados.

### 25.2 Formularios principales

1. Registro de usuario.
2. Login.
3. Registro de tienda.
4. Ficha de servicio.
5. Solicitud de cotización.
6. Respuesta de cotización.
7. Carga documental.
8. Registro de pago.
9. Configuración de comisión.
10. Catálogo maestro.
11. Review.
12. Ticket de soporte.

---

## 26. Estados visuales y badges

### 26.1 Componente base

`StatusBadge`

### 26.2 Estados de tienda

| Estado | Color |
|---|---|
| Registrada | Azul |
| Pendiente de revisión | Amarillo |
| Aprobada | Verde |
| Rechazada | Rojo |
| Suspendida | Rojo |
| Inactiva | Gris |

### 26.3 Estados de servicio

| Estado | Color |
|---|---|
| Borrador | Gris |
| Pendiente de aprobación | Amarillo |
| Publicado | Verde |
| Pausado | Amarillo |
| Rechazado | Rojo |
| Inactivo | Gris |

### 26.4 Estados de cotización

| Estado | Color |
|---|---|
| Solicitada | Azul |
| En revisión | Amarillo |
| Respondida | Azul tecnológico |
| Aprobada | Verde |
| Rechazada | Rojo |
| Vencida | Rojo |
| Convertida en orden | Slate oscuro |

### 26.5 Estados de orden

| Estado | Color |
|---|---|
| Creada | Azul |
| En proceso | Azul tecnológico |
| Pendiente documento | Amarillo |
| Pendiente pago | Amarillo |
| En ejecución | Azul tecnológico |
| Cerrada | Verde |
| Cancelada | Gris/Rojo suave |

---

## 27. Ratings y reviews

### 27.1 Componente base

`RatingStars`

### 27.2 Reglas visuales

1. Mostrar rating promedio con una cifra decimal.
2. Mostrar número de reviews.
3. Mostrar estrellas llenas, medias o vacías si se implementa.
4. Mostrar fecha de review.
5. Mostrar nombre o empresa del cliente según privacidad.
6. Permitir respuesta de tienda si el módulo está habilitado.
7. Mostrar badge de review verificada cuando venga de orden cerrada.

### 27.3 Componentes relacionados

1. `ReviewList`.
2. `ReviewForm`.
3. `ReviewReplyBox`.
4. `ReviewModerationPanel`.
5. `RatingSummaryCard`.

---

## 28. Componentes de documentos

### 28.1 Componentes requeridos

1. `DocumentUploader`.
2. `DocumentList`.
3. `DocumentViewer`.
4. `DocumentStatusBadge`.
5. `DocumentValidationPanel`.
6. `EvidenceUploader`.

### 28.2 Reglas visuales

1. Mostrar tipo de documento.
2. Mostrar estado.
3. Mostrar fecha de carga.
4. Mostrar usuario que cargó.
5. Mostrar versión.
6. Mostrar botón validar si el usuario tiene permiso.
7. Mostrar botón rechazar si el usuario tiene permiso.
8. Mostrar motivo de rechazo.
9. Mostrar evidencia asociada.

---

## 29. Componentes financieros

### 29.1 Componentes requeridos

1. `PaymentSummaryCard`.
2. `PaymentForm`.
3. `PaymentReceiptUploader`.
4. `PaymentStatusBadge`.
5. `CommissionSummaryCard`.
6. `CommissionRuleForm`.
7. `FinancialBreakdownTable`.

### 29.2 Visualización de montos

Toda visualización financiera debe separar:

1. Subtotal.
2. Comisión.
3. Impuesto si aplica.
4. Neto proveedor.
5. Total cliente.
6. Estado del pago.

### 29.3 Regla visual

Los montos críticos deben ser claros, alineados a la derecha en tablas y con formato de moneda.

---

## 30. Componentes de auditoría

### 30.1 Componentes requeridos

1. `AuditTimeline`.
2. `AuditLogTable`.
3. `AuditFilterPanel`.
4. `AuditDetailDrawer`.
5. `CriticalEventBadge`.

### 30.2 Información mínima

1. Usuario.
2. Perfil.
3. Acción.
4. Módulo.
5. Entidad.
6. Fecha.
7. Valor anterior.
8. Valor nuevo.
9. Resultado.
10. Nivel de criticidad.

---

## 31. Componentes TOS y operación logística

### 31.1 TOS básico

Componentes:

1. `TosDashboard`.
2. `ContainerList`.
3. `ContainerStatusBadge`.
4. `YardSummaryCard`.
5. `TosMoveForm`.
6. `GateEventPanel`.

### 31.2 Transporte

Componentes:

1. `TransportDashboard`.
2. `TripList`.
3. `TripStatusBadge`.
4. `VehicleSelector`.
5. `DriverSelector`.
6. `DeliveryEvidenceUploader`.

### 31.3 Almacenamiento

Componentes:

1. `StorageDashboard`.
2. `InventoryTable`.
3. `StorageLocationSelector`.
4. `StorageMovementForm`.
5. `DispatchForm`.

### 31.4 Inspecciones

Componentes:

1. `InspectionDashboard`.
2. `InspectionChecklist`.
3. `InspectionEvidenceUploader`.
4. `InspectionResultPanel`.
5. `InspectionStatusBadge`.

---

## 32. Sistema de navegación

### 32.1 Navegación pública

1. Inicio.
2. Buscar servicios.
3. Categorías.
4. Registrar tienda.
5. Cómo funciona.
6. Login.
7. Crear cuenta.

### 32.2 Navegación privada

La navegación privada debe generarse a partir de permisos y perfil.

Componentes:

1. `DynamicSidebarMenu`.
2. `MobileNavigationDrawer`.
3. `Breadcrumbs`.
4. `ProfileMenu`.
5. `NotificationMenu`.

### 32.3 Regla de seguridad visual

Ocultar un menú no es suficiente. El backend debe validar permisos. Este documento solo define el comportamiento visual.

---

## 33. Responsive design

### 33.1 Breakpoints sugeridos

| Nombre | Ancho |
|---|---:|
| Mobile | 320–767 px |
| Tablet | 768–1023 px |
| Desktop | 1024–1439 px |
| Wide | 1440 px o más |

### 33.2 Reglas mobile

1. Sidebar se convierte en drawer.
2. Filtros se abren en modal o drawer.
3. Cards ocupan ancho completo.
4. Tablas se convierten en cards o scroll horizontal.
5. Botones principales deben ser fáciles de tocar.
6. Formularios deben tener una columna.
7. Modales deben ocupar casi todo el ancho.

### 33.3 Reglas desktop

1. Sidebar persistente en dashboards.
2. Filtros visibles lateralmente en búsqueda.
3. Cards en grid flexible.
4. Tablas con columnas completas.
5. Paneles de resumen a la derecha si aplica.

---

## 34. Accesibilidad

Antigravity debe seguir reglas básicas de accesibilidad:

1. Usar labels en formularios.
2. Mantener contraste suficiente.
3. Usar texto alternativo en imágenes.
4. Permitir navegación con teclado cuando sea posible.
5. Mostrar errores de forma clara.
6. No depender solo del color para comunicar estados.
7. Usar aria-labels en íconos interactivos.
8. Permitir cerrar modales con botón visible.
9. Mantener tamaños táctiles adecuados en mobile.
10. Evitar textos demasiado pequeños.

---

## 35. Estados de interfaz

Cada pantalla debe considerar:

1. Estado cargando.
2. Estado vacío.
3. Estado error.
4. Estado sin permisos.
5. Estado éxito.
6. Estado pendiente.
7. Estado bloqueado.
8. Estado offline si aplica.

### 35.1 Componentes relacionados

1. `LoadingState`.
2. `EmptyState`.
3. `ErrorState`.
4. `ForbiddenState`.
5. `SuccessMessage`.
6. `InlineAlert`.
7. `ToastNotification`.

---

## 36. Sistema de botones

### 36.1 Tipos de botón

| Tipo | Uso |
|---|---|
| Primario | Acción principal |
| Secundario | Acción alternativa |
| Outline | Acción menos importante |
| Ghost | Acciones discretas |
| Danger | Eliminar, rechazar, cancelar |
| Success | Aprobar, confirmar, cerrar |
| Warning | Observar, pausar, revisar |

### 36.2 CTAs principales

1. Buscar servicios.
2. Solicitar cotización.
3. Registrar tienda logística.
4. Aprobar cotización.
5. Responder cotización.
6. Crear servicio.
7. Cargar documento.
8. Confirmar pago.
9. Cerrar orden.

---

## 37. Sistema de cards

### 37.1 Cards principales

1. Card de servicio.
2. Card de tienda.
3. Card de cotización.
4. Card de orden.
5. Card de documento.
6. Card de pago.
7. Card de comisión.
8. Card de métrica.
9. Card de alerta.
10. Card de review.

### 37.2 Reglas de card

1. Título claro.
2. Metadatos visibles.
3. Estado destacado.
4. Acción principal.
5. Acción secundaria.
6. Información escaneable.
7. Uso moderado de iconos.
8. Separación visual clara.

---

## 38. Sistema de tablas

### 38.1 Reglas de tablas

1. Encabezados claros.
2. Paginación.
3. Ordenamiento.
4. Filtros.
5. Acciones por fila.
6. Badges de estado.
7. Fechas formateadas.
8. Montos formateados.
9. Empty state.
10. Scroll horizontal en mobile si es necesario.

### 38.2 Tablas principales

1. Usuarios.
2. Tiendas.
3. Servicios.
4. Cotizaciones.
5. Órdenes.
6. Documentos.
7. Pagos.
8. Comisiones.
9. Reportes.
10. Auditoría.
11. Catálogos.

---

## 39. Sistema de formularios por módulo

| Módulo | Formulario principal |
|---|---|
| Usuarios | `UserForm` |
| Tiendas | `StoreRegistrationForm` |
| Servicios | `ServiceForm` |
| Cotizaciones | `QuotationForm` |
| Órdenes | `OrderStatusForm` |
| Documentos | `DocumentUploader` |
| Pagos | `PaymentForm` |
| Comisiones | `CommissionRuleForm` |
| Catálogos | `CatalogItemForm` |
| Reviews | `ReviewForm` |
| Soporte | `TicketForm` |

---

## 40. Sistema de notificaciones

### 40.1 Tipos de notificación

1. Éxito.
2. Error.
3. Advertencia.
4. Información.
5. Acción requerida.
6. Documento pendiente.
7. Pago pendiente.
8. Cotización respondida.
9. Orden actualizada.
10. Servicio aprobado.

### 40.2 Componentes

1. `ToastNotification`.
2. `NotificationBell`.
3. `NotificationList`.
4. `InlineAlert`.

---

## 41. Sistema de mapas y ubicación

En el MVP puede implementarse una vista conceptual o panel de ubicación, no necesariamente un mapa avanzado.

### 41.1 Usos

1. Mostrar puerto principal.
2. Mostrar terminal.
3. Mostrar zona de servicio.
4. Mostrar rutas referenciales.
5. Mostrar ubicación de tienda si aplica.

### 41.2 Componentes

1. `MapPreviewPanel`.
2. `PortLocationCard`.
3. `TerminalLocationBadge`.
4. `ServiceAreaList`.

---

## 42. Tokens de diseño recomendados

### 42.1 Colores

```txt
--color-primary: #0F3D5E;
--color-secondary: #0EA5E9;
--color-accent: #F97316;
--color-success: #16A34A;
--color-warning: #F59E0B;
--color-danger: #DC2626;
--color-background: #F8FAFC;
--color-surface: #FFFFFF;
--color-text: #0F172A;
--color-muted: #64748B;
--color-border: #E2E8F0;
```

### 42.2 Radios

```txt
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 999px;
```

### 42.3 Sombras

```txt
--shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
--shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
--shadow-lg: 0 18px 45px rgba(15, 23, 42, 0.12);
```

---

## 43. Estructura recomendada de frontend

```txt
/frontend-react
  /src
    /assets
    /components
      /ui
      /layout
      /marketplace
      /dashboard
      /forms
      /tables
      /status
      /documents
      /finance
      /audit
    /features
      /auth
      /users
      /stores
      /services
      /search
      /quotations
      /orders
      /documents
      /payments
      /commissions
      /reports
      /audit
      /catalogs
    /layouts
    /pages
    /routes
    /services
    /hooks
    /types
    /utils
```

---

## 44. Componentes UI base obligatorios

1. `Button`.
2. `Input`.
3. `Select`.
4. `Textarea`.
5. `Checkbox`.
6. `RadioGroup`.
7. `Modal`.
8. `Drawer`.
9. `Card`.
10. `Badge`.
11. `Tabs`.
12. `Table`.
13. `Pagination`.
14. `Tooltip`.
15. `Dropdown`.
16. `Toast`.
17. `Avatar`.
18. `Breadcrumbs`.
19. `StatusBadge`.
20. `MetricCard`.
21. `EmptyState`.
22. `LoadingState`.
23. `ErrorState`.
24. `ForbiddenState`.

---

## 45. Componentes marketplace obligatorios

1. `HomeHeroSearch`.
2. `ServiceCategoryGrid`.
3. `FeaturedLogisticsStores`.
4. `PopularPortsSection`.
5. `SearchResultsPage`.
6. `FilterSidebar`.
7. `ServiceResultCard`.
8. `StoreResultCard`.
9. `StorePublicProfile`.
10. `ServiceDetailPage`.
11. `RequestQuoteModal`.
12. `RatingStars`.
13. `ReviewList`.
14. `MapPreviewPanel`.
15. `SortDropdown`.

---

## 46. Componentes dashboard obligatorios

1. `ClientDashboard`.
2. `StoreDashboard`.
3. `AdminDashboard`.
4. `OperatorDashboard`.
5. `AuditorDashboard`.
6. `MetricCard`.
7. `RecentActivityList`.
8. `StatusSummaryPanel`.
9. `ApprovalQueuePanel`.
10. `FinancialSummaryPanel`.
11. `AuditAlertsPanel`.

---

## 47. Criterios de aceptación visual

El diseño se considera aceptado cuando:

1. Tiene identidad visual propia.
2. No copia marca ni diseño exacto de terceros.
3. El home permite buscar servicios fácilmente.
4. La búsqueda tiene filtros claros.
5. Las cards permiten comparar servicios.
6. El perfil público de tienda es claro y profesional.
7. Los dashboards se adaptan al perfil del usuario.
8. Los estados operativos son visualmente claros.
9. La interfaz funciona en desktop y mobile.
10. Los formularios muestran errores claros.
11. Las tablas tienen filtros y paginación.
12. Los permisos visuales ocultan acciones no autorizadas.
13. Los componentes son reutilizables.
14. El diseño respeta accesibilidad básica.
15. Los montos financieros son legibles.
16. Los documentos muestran estado y versión.
17. La auditoría muestra trazabilidad comprensible.
18. El sistema tiene estados de carga, vacío y error.

---

## 48. Tareas técnicas para Antigravity

### 48.1 Diseño base

1. Crear tokens de diseño.
2. Crear componentes UI base.
3. Crear layout público.
4. Crear layout privado.
5. Crear sistema de navegación.
6. Crear sistema de badges.
7. Crear sistema de cards.
8. Crear sistema de formularios.
9. Crear sistema de tablas.
10. Crear estados de interfaz.

### 48.2 Marketplace público

1. Crear home.
2. Crear buscador.
3. Crear categorías.
4. Crear resultados.
5. Crear filtros.
6. Crear cards de servicios.
7. Crear cards de tiendas.
8. Crear perfil público de tienda.
9. Crear detalle de servicio.
10. Crear modal de cotización.

### 48.3 Dashboards

1. Crear dashboard cliente.
2. Crear dashboard tienda.
3. Crear dashboard superadministrador.
4. Crear dashboard operador.
5. Crear dashboard auditor.
6. Crear cards de métricas.
7. Crear paneles de actividad.
8. Crear paneles de aprobación.

### 48.4 Validación visual

1. Probar desktop.
2. Probar tablet.
3. Probar mobile.
4. Probar estados vacíos.
5. Probar errores.
6. Probar permisos visuales.
7. Probar formularios.
8. Probar tablas.

---

## 49. Prompt sugerido para Antigravity

```text
Actúa como diseñador UX/UI senior, frontend architect y desarrollador React.js experto.

Usa el documento `08_DESIGN_SYSTEM_MARKETPLACE.md` como fuente principal para construir el sistema visual del Marketplace Logístico TOS.

Objetivo:
Crear una interfaz moderna tipo marketplace/directorio para servicios logísticos portuarios, usando React.js, componentes reutilizables, diseño responsive, cards de servicios, perfiles públicos de tiendas, buscador, filtros, ratings, dashboards por perfil y estados visuales claros.

Reglas obligatorias:
1. No copiar logotipo, colores exactos, textos, íconos propietarios ni diseño pixel-perfect de Yelp ni de ninguna marca existente.
2. Usar identidad visual propia basada en logística, puertos, contenedores, aduana, transporte y tecnología.
3. Respetar los perfiles definidos en `05_USER_PROFILES.md`.
4. Respetar la matriz RBAC definida en `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
5. Respetar los módulos definidos en `07_FUNCTIONAL_MODULES_CATALOG.md`.
6. Crear componentes reutilizables.
7. Crear diseño responsive mobile, tablet y desktop.
8. Crear estados loading, empty, error y forbidden.
9. No depender de CDN externos para íconos o assets críticos.
10. Ocultar acciones visuales si el usuario no tiene permiso, sin olvidar que el backend debe validar seguridad.

Entregables esperados:
1. Tokens de diseño.
2. Componentes UI base.
3. Layout público.
4. Layout privado.
5. Home marketplace.
6. Página de búsqueda.
7. Cards de servicios y tiendas.
8. Perfil público de tienda.
9. Detalle de servicio.
10. Modal de solicitud de cotización.
11. Dashboards por perfil.
12. Sistema de badges, estados, ratings y reviews.
13. Pruebas visuales básicas.
14. Documentación de componentes.

Antes de implementar, genera un plan de componentes y una estructura de carpetas frontend.
```

---

## 50. Checklist de uso en Antigravity

- [ ] Guardar este documento como `08_DESIGN_SYSTEM_MARKETPLACE.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Validar consistencia con `01_PRODUCT_VISION.md`.
- [ ] Validar consistencia con `02_MVP_SCOPE.md`.
- [ ] Validar consistencia con `05_USER_PROFILES.md`.
- [ ] Validar consistencia con `06_MODULE_PROFILE_ACCESS_MATRIX.md`.
- [ ] Validar consistencia con `07_FUNCTIONAL_MODULES_CATALOG.md`.
- [ ] Crear tokens de diseño.
- [ ] Crear componentes UI base.
- [ ] Crear layout público.
- [ ] Crear layout privado.
- [ ] Crear home marketplace.
- [ ] Crear búsqueda y filtros.
- [ ] Crear cards de servicios y tiendas.
- [ ] Crear perfil público de tienda.
- [ ] Crear dashboards por perfil.
- [ ] Validar responsive.
- [ ] Validar accesibilidad básica.
- [ ] Confirmar que no se copia identidad visual de terceros.

---

## 51. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión visual | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

