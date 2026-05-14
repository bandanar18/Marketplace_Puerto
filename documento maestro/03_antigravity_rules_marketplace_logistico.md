# 03_ANTIGRAVITY_RULES.md

# Documento Maestro de Reglas para Antigravity
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `03_ANTIGRAVITY_RULES.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md` |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro de reglas operativas para agentes de desarrollo |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Uso principal | Establecer reglas obligatorias para que Antigravity desarrolle el software de forma ordenada, segura y controlada |

---

## 2. Propósito del documento

Este documento define las reglas que debe seguir Antigravity al desarrollar el **Marketplace Logístico TOS para Puertos Aduaneros**.

Su objetivo es evitar errores de alcance, arquitectura, seguridad, permisos, base de datos, diseño visual, pruebas y documentación durante el desarrollo del software.

Antigravity debe usar este documento como una guía obligatoria antes de generar código, modificar archivos, crear módulos, escribir endpoints, crear componentes React.js, diseñar tablas MySQL, ejecutar pruebas o proponer cambios de arquitectura.

---

## 3. Principios generales de trabajo

Antigravity debe seguir estos principios en todo momento:

1. Primero entender el alcance.
2. Luego planificar.
3. Luego implementar.
4. Luego probar.
5. Luego documentar.
6. Luego resumir cambios.
7. Nunca modificar archivos críticos sin justificar.
8. Nunca eliminar código sin explicar la razón.
9. Nunca crear funcionalidades fuera del MVP sin marcarlas como fase posterior.
10. Nunca integrar con Odoo en esta fase.
11. Nunca copiar identidad visual de Yelp ni de otra marca.
12. Nunca dejar lógica crítica sin pruebas.
13. Nunca dejar endpoints críticos sin protección.
14. Nunca omitir auditoría en eventos críticos.
15. Nunca asumir reglas de negocio si no están documentadas.

---

## 4. Documentos base que Antigravity debe consultar

Antes de iniciar cualquier módulo, Antigravity debe consultar los documentos maestros disponibles en `/docs`.

| Prioridad | Documento | Uso |
|---:|---|---|
| 1 | `01_PRODUCT_VISION.md` | Entender visión general del producto |
| 2 | `02_MVP_SCOPE.md` | Validar si la funcionalidad pertenece al MVP |
| 3 | `03_ANTIGRAVITY_RULES.md` | Aplicar reglas de trabajo |
| 4 | `04_ECOSYSTEM_ACTORS_MATRIX.md` | Validar actores del ecosistema |
| 5 | `05_USER_PROFILES.md` | Validar perfiles de usuario |
| 6 | `06_MODULE_PROFILE_ACCESS_MATRIX.md` | Validar accesos por perfil |
| 7 | `07_FUNCTIONAL_MODULES_CATALOG.md` | Validar módulos funcionales |
| 8 | `08_DESIGN_SYSTEM_MARKETPLACE.md` | Validar diseño visual |
| 9 | `11_TECHNICAL_ARCHITECTURE.md` | Validar arquitectura técnica |
| 10 | `12_DATABASE_MASTER_SCHEMA.md` | Validar esquema MySQL |
| 11 | `13_API_SPECIFICATION.md` | Validar endpoints Nest.js |
| 12 | `15_MASTER_CATALOGS_MVP.md` | Validar catálogos maestros |
| 13 | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` | Validar backlog |
| 14 | `31_ACCEPTANCE_CRITERIA_MASTER.md` | Validar criterios de aceptación |
| 15 | `32_ANTIGRAVITY_PROMPTS_MASTER.md` | Usar prompts maestros |

Si un documento aún no existe, Antigravity debe proponer su creación antes de implementar módulos que dependan de él.

---

## 5. Reglas de alcance MVP

Antigravity debe respetar estrictamente el alcance definido en `02_MVP_SCOPE.md`.

### 5.1 Permitido dentro del MVP

1. Usuarios.
2. Autenticación.
3. Roles.
4. Permisos.
5. Catálogos maestros mínimos.
6. Tiendas logísticas.
7. Servicios logísticos.
8. Home marketplace.
9. Búsqueda y filtros básicos.
10. Perfil público de tienda.
11. Cotizaciones.
12. Órdenes básicas.
13. Carga documental básica.
14. Pagos referenciales o manuales.
15. Comisiones básicas.
16. Reportes básicos.
17. Auditoría básica.
18. Reviews y ratings básicos.

### 5.2 No permitido dentro del MVP sin autorización

1. Integración real con bancos.
2. Integración directa con Odoo.
3. Integración con aduanas.
4. Integración con navieras.
5. OCR documental.
6. Facturación fiscal automática.
7. GPS en tiempo real.
8. TOS avanzado con mapa completo de patio.
9. Liquidación automática a proveedores.
10. Motor avanzado de reputación.
11. Aplicación móvil nativa.
12. Inteligencia artificial de recomendación.
13. EDI portuario.
14. Blockchain.
15. Microservicios innecesarios para el MVP.

### 5.3 Regla de control de alcance

Si Antigravity detecta que una tarea está fuera del MVP, debe:

1. No implementarla directamente.
2. Registrar la funcionalidad como fase posterior.
3. Explicar por qué queda fuera del MVP.
4. Proponer una versión simplificada si aporta valor al flujo principal.

---

## 6. Reglas de arquitectura general

La arquitectura debe estar separada por capas y dominios.

### 6.1 Estructura base recomendada

```txt
/logistics-marketplace
  /frontend-react
  /backend-nest
  /database-mysql
  /docs
  /scripts
  /tests
  README.md
```

### 6.2 Reglas de separación

1. El frontend no debe contener lógica de negocio crítica.
2. El backend debe validar toda entrada recibida.
3. La base de datos debe mantener integridad referencial.
4. Los cálculos financieros deben realizarse o validarse en backend.
5. Los permisos deben aplicarse en frontend y backend.
6. La auditoría debe registrarse desde backend.
7. Los catálogos maestros deben vivir en base de datos.
8. Los archivos cargados deben tener metadata registrada.
9. Las respuestas de API deben ser consistentes.
10. Los errores deben manejarse de forma controlada.

---

## 7. Reglas de frontend React.js

### 7.1 Estructura frontend recomendada

```txt
/frontend-react
  /src
    /app
    /assets
    /components
    /features
    /hooks
    /layouts
    /lib
    /pages
    /routes
    /services
    /store
    /types
    /utils
```

### 7.2 Reglas obligatorias React.js

1. Usar componentes reutilizables.
2. Separar páginas, layouts y componentes.
3. No duplicar lógica de formularios.
4. Centralizar llamadas a API en servicios.
5. Usar rutas protegidas para paneles privados.
6. Validar formularios en frontend y backend.
7. Mostrar estados de carga, error y vacío.
8. Crear componentes responsive.
9. Usar nombres claros y consistentes.
10. No usar datos hardcodeados si deben venir de API o catálogos.
11. Usar mocks solo en etapas iniciales y marcarlos claramente.
12. No exponer tokens, secretos ni variables sensibles.
13. Crear pruebas para componentes críticos.
14. Mantener diseño visual consistente con `08_DESIGN_SYSTEM_MARKETPLACE.md`.

### 7.3 Componentes mínimos a respetar

1. `AppLayout`.
2. `AuthLayout`.
3. `DashboardLayout`.
4. `HomeHeroSearch`.
5. `ServiceCategoryGrid`.
6. `SearchResultsPage`.
7. `FilterSidebar`.
8. `ServiceResultCard`.
9. `StoreResultCard`.
10. `StorePublicProfile`.
11. `RequestQuoteModal`.
12. `QuotationForm`.
13. `OrderTimeline`.
14. `DocumentUploader`.
15. `PaymentSummaryCard`.
16. `AuditTimeline`.
17. `AdminDataTable`.
18. `RolePermissionMatrix`.
19. `CatalogManager`.
20. `ReportExportButton`.

---

## 8. Reglas de backend Nest.js

### 8.1 Estructura backend recomendada

```txt
/backend-nest
  /src
    /auth
    /users
    /roles
    /permissions
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
    /common
    /config
    /database
```

### 8.2 Reglas obligatorias Nest.js

1. Cada dominio debe tener su propio módulo.
2. Cada módulo debe tener controller, service y DTOs cuando aplique.
3. Los endpoints deben validar entradas.
4. Los endpoints privados deben requerir JWT.
5. Los endpoints críticos deben requerir RBAC.
6. Los cambios críticos deben generar auditoría.
7. No permitir acceso directo a datos sin autorización.
8. No devolver contraseñas ni datos sensibles.
9. Manejar errores con excepciones controladas.
10. Documentar endpoints con Swagger/OpenAPI.
11. Crear pruebas unitarias de services.
12. Crear pruebas de integración para flujos críticos.
13. No mezclar lógica de distintos módulos.
14. No implementar integraciones externas fuera del MVP.

### 8.3 Módulos backend mínimos

1. `AuthModule`.
2. `UsersModule`.
3. `RolesModule`.
4. `PermissionsModule`.
5. `StoresModule`.
6. `ServicesModule`.
7. `SearchModule`.
8. `QuotationsModule`.
9. `OrdersModule`.
10. `DocumentsModule`.
11. `PaymentsModule`.
12. `CommissionsModule`.
13. `ReportsModule`.
14. `AuditModule`.
15. `CatalogsModule`.

---

## 9. Reglas de base de datos MySQL

### 9.1 Principios de diseño

1. Usar nombres de tablas en plural y snake_case.
2. Usar claves primarias consistentes.
3. Usar llaves foráneas donde aplique.
4. Crear índices para búsquedas frecuentes.
5. Usar catálogos maestros para valores controlados.
6. Evitar campos libres cuando exista catálogo.
7. Registrar timestamps de creación y actualización.
8. Usar eliminación lógica cuando aplique.
9. No borrar datos críticos sin auditoría.
10. Diseñar tablas pensando en reportes y trazabilidad.

### 9.2 Campos estándar sugeridos

Para tablas principales, usar campos como:

```txt
id
uuid
created_at
updated_at
deleted_at
created_by
updated_by
status
```

### 9.3 Tablas mínimas MVP

1. `users`.
2. `user_profiles`.
3. `roles`.
4. `permissions`.
5. `role_permissions`.
6. `user_roles`.
7. `stores`.
8. `store_users`.
9. `store_documents`.
10. `services`.
11. `service_categories`.
12. `service_pricing`.
13. `service_documents`.
14. `quotations`.
15. `quotation_lines`.
16. `quotation_documents`.
17. `orders`.
18. `order_lines`.
19. `documents`.
20. `document_versions`.
21. `payments`.
22. `payment_receipts`.
23. `commission_rules`.
24. `commissions`.
25. `reviews`.
26. `ratings`.
27. `reports`.
28. `audit_logs`.
29. `master_catalogs`.
30. `master_catalog_items`.
31. `ports`.
32. `terminals`.

---

## 10. Reglas de uso de Odoo como referencia

Odoo se debe usar únicamente como referencia conceptual de modelos de datos.

### 10.1 Permitido

1. Usar `res.users` como referencia para usuarios.
2. Usar `res.partner` como referencia para clientes, tiendas y actores.
3. Usar `res.groups` como referencia para roles.
4. Usar `ir.model.access` como referencia para permisos.
5. Usar `product.template` como referencia para servicios.
6. Usar `product.category` como referencia para categorías.
7. Usar `sale.order` como referencia para cotizaciones y órdenes.
8. Usar `ir.attachment` como referencia para documentos.
9. Usar `account.payment` como referencia para pagos.
10. Usar `mail.message` como referencia para auditoría.

### 10.2 Prohibido en esta fase

1. No instalar Odoo.
2. No crear conectores con Odoo.
3. No depender de APIs de Odoo.
4. No replicar toda la estructura interna de Odoo.
5. No usar nomenclatura Odoo si afecta claridad del sistema propio.
6. No asumir comportamiento técnico de Odoo como requisito obligatorio.

### 10.3 Regla de documentación

Cuando se use un modelo Odoo como referencia, Antigravity debe documentar:

1. Modelo Odoo referencial.
2. Entidad propia equivalente.
3. Diferencias relevantes.
4. Tabla MySQL propia.
5. Justificación del mapeo.

---

## 11. Reglas de diseño visual marketplace

El diseño visual debe ser tipo marketplace/directorio de servicios logísticos.

### 11.1 Permitido

1. Buscador principal grande.
2. Filtros laterales.
3. Tarjetas de servicios.
4. Tarjetas de proveedores.
5. Rating con estrellas.
6. Reviews.
7. Perfil público de tienda.
8. Botón de solicitud de cotización.
9. Vista lista.
10. Vista mapa conceptual o panel de ubicación.
11. Badges de verificación.
12. Fotos de tiendas o servicios.
13. Categorías destacadas.
14. Estados visuales.

### 11.2 Prohibido

1. Copiar logotipo de Yelp o de otra marca.
2. Copiar colores exactos de una marca protegida.
3. Copiar diseño pixel-perfect de una plataforma existente.
4. Copiar textos comerciales protegidos.
5. Usar íconos propietarios sin licencia.
6. Usar nombres comerciales de terceros como identidad del producto.

### 11.3 Regla de identidad propia

La plataforma debe tener identidad visual propia para el sector logístico-portuario, usando elementos visuales relacionados con:

1. Puertos.
2. Contenedores.
3. Transporte.
4. Aduana.
5. Documentos.
6. Operaciones.
7. Confianza.
8. Trazabilidad.
9. Tecnología logística.

---

## 12. Reglas de seguridad

### 12.1 Autenticación

1. Usar autenticación segura.
2. Usar JWT o mecanismo equivalente.
3. No guardar contraseñas en texto plano.
4. Usar hashing seguro para contraseñas.
5. Implementar expiración de sesión o token.
6. Proteger rutas privadas.

### 12.2 Autorización

1. Implementar RBAC.
2. Validar permisos por endpoint.
3. Validar permisos por menú visible.
4. No confiar solo en frontend.
5. Bloquear acciones no autorizadas desde backend.
6. Registrar intentos de acceso no autorizado.

### 12.3 Validación

1. Validar DTOs.
2. Sanitizar entradas.
3. Validar tipos de archivo.
4. Validar tamaños de archivo.
5. Validar estados permitidos.
6. Validar transiciones de estado.

### 12.4 Datos sensibles

1. No exponer contraseñas.
2. No exponer tokens.
3. No exponer secretos.
4. No registrar información sensible en logs innecesarios.
5. No subir `.env` al repositorio.
6. No hardcodear credenciales.

---

## 13. Reglas de auditoría

Antigravity debe implementar auditoría para eventos críticos.

### 13.1 Eventos mínimos auditables

1. Registro de usuario.
2. Inicio de sesión.
3. Cierre de sesión.
4. Cambio de contraseña.
5. Cambio de rol.
6. Cambio de permiso.
7. Registro de tienda.
8. Aprobación de tienda.
9. Rechazo de tienda.
10. Suspensión de tienda.
11. Creación de servicio.
12. Aprobación de servicio.
13. Cambio de tarifa.
14. Solicitud de cotización.
15. Respuesta de cotización.
16. Aprobación de cotización.
17. Rechazo de cotización.
18. Conversión a orden.
19. Cambio de estado de orden.
20. Carga documental.
21. Validación documental.
22. Rechazo documental.
23. Registro de pago.
24. Confirmación de pago.
25. Cálculo de comisión.
26. Generación de reporte.
27. Exportación de reporte.

### 13.2 Datos mínimos de auditoría

Cada log debe guardar:

1. Usuario responsable.
2. Perfil del usuario.
3. Acción ejecutada.
4. Módulo afectado.
5. Entidad afectada.
6. ID de entidad.
7. Valor anterior si aplica.
8. Valor nuevo si aplica.
9. Fecha y hora.
10. IP o metadata técnica si está disponible.
11. Resultado de la acción.

---

## 14. Reglas de control de cambios

### 14.1 Antes de modificar

Antigravity debe identificar:

1. Archivo a modificar.
2. Motivo del cambio.
3. Impacto esperado.
4. Riesgo del cambio.
5. Pruebas necesarias.

### 14.2 Después de modificar

Antigravity debe reportar:

1. Archivos creados.
2. Archivos modificados.
3. Archivos eliminados, si aplica.
4. Resumen de cambios.
5. Pruebas ejecutadas.
6. Errores encontrados.
7. Pendientes.
8. Siguiente paso recomendado.

### 14.3 Prohibiciones

1. No eliminar archivos sin justificación.
2. No renombrar carpetas críticas sin actualizar referencias.
3. No cambiar contratos API sin actualizar frontend.
4. No cambiar base de datos sin migración.
5. No cambiar permisos sin actualizar matriz RBAC.
6. No modificar diseño visual global sin actualizar documento de diseño.

---

## 15. Reglas de testing y QA

### 15.1 Pruebas obligatorias

Antigravity debe crear o actualizar pruebas cuando implemente:

1. Autenticación.
2. Roles y permisos.
3. Cálculos de tarifas.
4. Cálculos de comisiones.
5. Cálculos de pagos.
6. Cambio de estados.
7. Conversión de cotización a orden.
8. Carga documental.
9. Auditoría.
10. Reportes.

### 15.2 Tipos de prueba

1. Pruebas unitarias frontend.
2. Pruebas unitarias backend.
3. Pruebas de integración.
4. Pruebas de API.
5. Pruebas de permisos.
6. Pruebas de validación.
7. Pruebas de cálculo.
8. Pruebas responsive.
9. Pruebas de flujo completo.

### 15.3 Regla de corrección de errores

Cuando se corrija un error:

1. Identificar causa raíz.
2. Corregir el código.
3. Agregar prueba que cubra el error.
4. Ejecutar pruebas relacionadas.
5. Documentar la corrección.
6. Verificar que no se rompió otro flujo.

---

## 16. Reglas de documentación

Todo módulo debe tener documentación mínima.

### 16.1 Documentación funcional

1. Objetivo del módulo.
2. Perfiles que lo usan.
3. Historias de usuario.
4. Reglas de negocio.
5. Estados.
6. Permisos.
7. Criterios de aceptación.

### 16.2 Documentación técnica

1. Tablas MySQL.
2. Endpoints Nest.js.
3. DTOs.
4. Services.
5. Components React.
6. Guards.
7. Eventos de auditoría.
8. Pruebas.
9. Seeds.

### 16.3 Documentación de entrega

Cada entrega debe incluir:

1. Qué se hizo.
2. Dónde se hizo.
3. Cómo probarlo.
4. Qué falta.
5. Riesgos.
6. Próximos pasos.

---

## 17. Reglas de prompts para Antigravity

Cada prompt enviado a Antigravity debe contener:

1. Contexto.
2. Objetivo.
3. Alcance.
4. Módulo relacionado.
5. Perfil de usuario relacionado.
6. Archivos a crear o modificar.
7. Tablas MySQL relacionadas.
8. Endpoints Nest.js relacionados.
9. Componentes React.js relacionados.
10. Reglas de negocio.
11. Criterios de aceptación.
12. Pruebas requeridas.
13. Restricciones.
14. Resultado esperado.
15. Checklist final.

### 17.1 Prompt incompleto

Si un prompt no tiene información suficiente, Antigravity debe:

1. Identificar las ambigüedades.
2. Proponer supuestos razonables.
3. No bloquear el avance si el supuesto es de bajo riesgo.
4. Solicitar revisión solo si la ambigüedad afecta arquitectura, seguridad, datos o finanzas.

---

## 18. Reglas de artifacts esperados

Al finalizar una tarea, Antigravity debe entregar o actualizar artifacts.

### 18.1 Artifacts mínimos

1. Plan de implementación.
2. Lista de tareas ejecutadas.
3. Archivos creados.
4. Archivos modificados.
5. Resumen técnico.
6. Pruebas ejecutadas.
7. Resultado de pruebas.
8. Errores encontrados.
9. Soluciones aplicadas.
10. Riesgos pendientes.
11. Siguiente paso recomendado.

### 18.2 Si hay frontend

Agregar:

1. Captura de pantalla o descripción visual.
2. Estados responsive probados.
3. Componentes afectados.
4. Rutas afectadas.
5. Validación visual.

### 18.3 Si hay backend

Agregar:

1. Endpoints creados.
2. DTOs creados.
3. Guards aplicados.
4. Services implementados.
5. Swagger actualizado.
6. Pruebas API.

### 18.4 Si hay base de datos

Agregar:

1. Migraciones creadas.
2. Tablas afectadas.
3. Índices creados.
4. Llaves foráneas.
5. Seeds modificados.
6. Riesgos de migración.

---

## 19. Reglas de nombres y convenciones

### 19.1 Archivos

Usar nombres claros y consistentes.

Ejemplos:

```txt
auth.controller.ts
auth.service.ts
create-user.dto.ts
users.module.ts
ServiceResultCard.tsx
RequestQuoteModal.tsx
```

### 19.2 Tablas MySQL

Usar snake_case y plural.

Ejemplos:

```txt
users
stores
services
quotations
quotation_lines
orders
order_lines
audit_logs
master_catalog_items
```

### 19.3 Endpoints

Usar nombres REST claros.

Ejemplos:

```txt
GET /services
POST /quotations
PATCH /quotations/:id/approve
POST /quotations/:id/convert-to-order
GET /audit-logs
```

### 19.4 Componentes React

Usar PascalCase.

Ejemplos:

```txt
HomeHeroSearch
ServiceResultCard
StorePublicProfile
DocumentUploader
RolePermissionMatrix
```

---

## 20. Reglas de manejo de estados

Los cambios de estado deben estar controlados.

### 20.1 Regla general

No se debe permitir cualquier cambio de estado libre. Cada transición debe validarse.

### 20.2 Ejemplo de cotización

Permitido:

```txt
Solicitada → En revisión
En revisión → Respondida
Respondida → Aprobada
Respondida → Rechazada
Aprobada → Convertida en orden
```

No permitido sin regla especial:

```txt
Rechazada → Aprobada
Convertida en orden → Solicitada
```

### 20.3 Ejemplo de orden

Permitido:

```txt
Creada → En proceso
En proceso → En ejecución
En ejecución → Cerrada
Creada → Cancelada
```

Cada cambio de estado debe generar auditoría.

---

## 21. Reglas financieras

### 21.1 Cálculos mínimos

Toda cotización u orden debe poder calcular:

1. Subtotal.
2. Comisión marketplace.
3. Neto proveedor.
4. Impuesto referencial si aplica.
5. Total cliente.

### 21.2 Regla de comisión

La comisión debe calcularse con una regla activa en `commission_rules`.

Ejemplo:

```txt
commission_amount = subtotal * commission_percentage / 100
provider_net = subtotal - commission_amount
total_client = subtotal + tax_amount
```

### 21.3 Restricciones

1. No hardcodear porcentajes de comisión en componentes React.
2. No calcular montos finales solo en frontend.
3. No permitir montos negativos.
4. No modificar pagos confirmados sin auditoría.
5. No eliminar comprobantes de pago sin registro.

---

## 22. Reglas documentales

### 22.1 Carga de documentos

Todo documento debe tener:

1. Tipo.
2. Propietario.
3. Entidad relacionada.
4. Estado.
5. Versión.
6. Fecha de carga.
7. Usuario que cargó.
8. Ruta o referencia de almacenamiento.

### 22.2 Validación documental

Los estados mínimos son:

1. Cargado.
2. En revisión.
3. Aprobado.
4. Rechazado.
5. Reemplazado.

### 22.3 Auditoría documental

Auditar:

1. Carga.
2. Descarga si aplica.
3. Validación.
4. Rechazo.
5. Reemplazo.
6. Eliminación lógica.

---

## 23. Reglas para catálogos maestros

1. Los catálogos deben estar en tablas, no hardcodeados.
2. Los catálogos deben tener estado activo/inactivo.
3. Los ítems deben tener código único.
4. Los ítems deben tener secuencia.
5. Los catálogos deben poder cargarse por seeds.
6. Los catálogos deben poder administrarse desde panel superadmin.
7. No borrar ítems usados por operaciones históricas.
8. Si un ítem ya fue usado, debe desactivarse en lugar de eliminarse.

Catálogos mínimos:

1. Categorías de servicios.
2. Tipos de tiendas.
3. Tipos de carga.
4. Tipos de contenedores.
5. Tipos de documentos.
6. Estados operativos.
7. Estados financieros.
8. Estados aduaneros.
9. Puertos.
10. Terminales.
11. Tarifas.
12. Comisiones.
13. Roles.
14. Permisos.

---

## 24. Reglas para reviews y ratings

1. Solo clientes con órdenes cerradas deben poder calificar.
2. Una orden cerrada solo debe admitir una review principal por cliente.
3. La tienda puede responder reviews si está habilitado.
4. El superadministrador puede moderar reviews.
5. El rating promedio debe calcularse desde registros válidos.
6. Reviews eliminadas deben quedar como desactivadas, no borradas físicamente.
7. Los cambios críticos deben auditarse.

---

## 25. Reglas de soporte técnico

Si se implementa soporte en el MVP o fase posterior:

1. Todo ticket debe tener código.
2. Todo ticket debe tener usuario creador.
3. Todo ticket debe tener categoría.
4. Todo ticket debe tener estado.
5. Todo ticket debe tener prioridad.
6. Todo ticket debe tener responsable si fue asignado.
7. Todo cambio de estado debe auditarse.
8. El soporte no debe modificar reglas financieras sin permiso.
9. El soporte no debe cambiar roles críticos sin permiso superadmin.

---

## 26. Reglas de manejo de errores

### 26.1 Backend

1. Usar respuestas de error consistentes.
2. No exponer stack traces en producción.
3. Registrar errores críticos.
4. Validar entradas antes de procesar.
5. Usar códigos HTTP correctos.

### 26.2 Frontend

1. Mostrar mensajes comprensibles.
2. Manejar estados de carga.
3. Manejar estados vacíos.
4. Manejar errores de red.
5. Manejar permisos insuficientes.
6. No mostrar errores técnicos crudos al usuario final.

---

## 27. Reglas de performance

1. Paginar listados grandes.
2. Filtrar desde backend cuando aplique.
3. Indexar campos de búsqueda frecuentes.
4. Evitar cargar todos los registros en una sola respuesta.
5. Optimizar imágenes.
6. Evitar renders innecesarios.
7. Usar lazy loading cuando aplique.
8. Mantener endpoints de búsqueda eficientes.

---

## 28. Reglas de accesibilidad y responsive

1. La plataforma debe funcionar en desktop y mobile.
2. Botones deben tener texto claro.
3. Formularios deben tener labels.
4. Estados de error deben ser visibles.
5. Contraste visual debe ser suficiente.
6. Navegación debe funcionar con teclado cuando sea posible.
7. Tablas deben tener alternativas responsive.
8. Modales deben poder cerrarse claramente.

---

## 29. Reglas de Git y control de versiones

### 29.1 Commits

Usar mensajes claros:

```txt
feat(auth): add login endpoint
fix(quotations): correct commission calculation
docs(mvp): update scope document
test(rbac): add permission guard tests
```

### 29.2 Ramas sugeridas

```txt
main
develop
feature/auth
feature/stores
feature/services
feature/quotations
fix/payments-calculation
```

### 29.3 Prohibiciones

1. No hacer commits con secretos.
2. No mezclar múltiples módulos sin relación en un mismo cambio grande.
3. No subir archivos temporales innecesarios.
4. No ignorar errores de pruebas.

---

## 30. Reglas para migraciones y seeds

1. Toda tabla nueva requiere migración.
2. Todo cambio estructural requiere migración.
3. Todo catálogo inicial requiere seed.
4. Los seeds deben ser repetibles o seguros.
5. No usar datos reales sensibles en seeds.
6. Los datos demo deben identificarse como demo.
7. Las migraciones deben probarse en ambiente local antes de integrarse.

---

## 31. Reglas de entregas por módulo

Cada módulo debe entregarse con:

1. Descripción funcional.
2. Tablas MySQL.
3. Migraciones.
4. Seeds si aplica.
5. Endpoints.
6. DTOs.
7. Guards si aplica.
8. Componentes React.
9. Rutas frontend.
10. Permisos.
11. Auditoría.
12. Pruebas.
13. Documentación.
14. Resumen de entrega.

---

## 32. Definition of Ready para tareas de Antigravity

Una tarea está lista para Antigravity cuando:

1. Tiene objetivo claro.
2. Tiene módulo relacionado.
3. Tiene perfil relacionado.
4. Tiene alcance definido.
5. Tiene criterios de aceptación.
6. Tiene archivos esperados o área del proyecto.
7. Tiene tablas relacionadas si aplica.
8. Tiene endpoints relacionados si aplica.
9. Tiene componentes relacionados si aplica.
10. Tiene restricciones claras.
11. Tiene pruebas esperadas.

---

## 33. Definition of Done para tareas de Antigravity

Una tarea se considera terminada cuando:

1. El código compila.
2. No hay errores críticos.
3. Se cumplen criterios de aceptación.
4. Las pruebas relacionadas pasan.
5. La documentación fue actualizada.
6. Los endpoints están protegidos si aplica.
7. Los permisos fueron validados si aplica.
8. La auditoría fue implementada si aplica.
9. La UI es responsive si aplica.
10. Se entregó resumen de archivos creados/modificados.
11. Se documentaron riesgos pendientes.

---

## 34. Prompt maestro para usar este documento en Antigravity

```text
Actúa como arquitecto de software, desarrollador full stack senior, QA técnico y product owner.

Usa el documento `03_ANTIGRAVITY_RULES.md` como conjunto obligatorio de reglas para desarrollar el Marketplace Logístico TOS.

Antes de implementar cualquier tarea:
1. Verifica si la tarea pertenece al MVP definido en `02_MVP_SCOPE.md`.
2. Verifica si existe documentación funcional relacionada.
3. Crea un plan de implementación.
4. Identifica archivos a crear o modificar.
5. Identifica tablas MySQL, endpoints Nest.js y componentes React.js afectados.
6. Identifica permisos y eventos de auditoría.
7. Define pruebas necesarias.

Durante la implementación:
1. Mantén arquitectura modular.
2. Separa frontend, backend y base de datos.
3. Protege endpoints con JWT y RBAC.
4. Valida DTOs.
5. Registra auditoría en eventos críticos.
6. Respeta catálogos maestros.
7. No integres con Odoo; úsalo solo como referencia conceptual.
8. No copies diseño de Yelp ni identidad visual de terceros.

Después de implementar:
1. Ejecuta pruebas relacionadas.
2. Corrige errores encontrados.
3. Actualiza documentación.
4. Resume archivos creados y modificados.
5. Indica riesgos pendientes.
6. Indica próximos pasos.

No elimines archivos ni cambies arquitectura crítica sin justificarlo claramente.
```

---

## 35. Checklist de uso del documento

- [ ] Guardar como `03_ANTIGRAVITY_RULES.md`.
- [ ] Colocar dentro de `/docs`.
- [ ] Referenciarlo en `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Referenciarlo en prompts de desarrollo.
- [ ] Revisarlo antes de crear cada módulo.
- [ ] Confirmar que el módulo está dentro del MVP.
- [ ] Confirmar que las reglas de seguridad se aplican.
- [ ] Confirmar que las reglas RBAC se aplican.
- [ ] Confirmar que los eventos críticos se auditan.
- [ ] Confirmar que las pruebas se crean o actualizan.
- [ ] Confirmar que no se copia identidad visual de terceros.
- [ ] Confirmar que Odoo se usa solo como referencia conceptual.
- [ ] Confirmar que la documentación se actualiza después de cada entrega.

---

## 36. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

