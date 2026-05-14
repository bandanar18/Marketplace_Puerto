# 01_PRODUCT_VISION.md

# Documento Maestro de Visión del Producto
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `01_PRODUCT_VISION.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Modelo referencial | ERP Odoo solo como referencia conceptual de datos |
| Tipo de documento | Documento maestro de visión del producto |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Responsable funcional | Product Owner / Dirección del proyecto |
| Uso principal | Guiar a Antigravity en la planificación, generación y desarrollo del software |

---

## 2. Resumen ejecutivo

El proyecto consiste en desarrollar un **Marketplace Logístico TOS** orientado al ecosistema de puertos aduaneros, donde clientes finales, importadores, exportadores, agentes aduanales, transportistas, almacenes fiscales, terminales portuarias, navieras, inspectores, aseguradoras, bancos y administradores puedan interactuar dentro de una misma plataforma digital.

La solución combina la lógica de un **marketplace de servicios logísticos** con funcionalidades propias de un **Terminal Operating System, TOS**, permitiendo buscar servicios, solicitar cotizaciones, contratar proveedores, gestionar órdenes, cargar documentos, realizar pagos, controlar comisiones, monitorear operaciones portuarias, administrar transporte, almacenamiento, inspecciones, reportes y auditoría.

El software será desarrollado usando **React.js** para el frontend, **Nest.js** para el backend y **MySQL** como base de datos relacional. El ERP **Odoo** será usado únicamente como referencia conceptual para organizar modelos de datos, tales como usuarios, contactos, productos/servicios, cotizaciones, documentos, pagos, inventario, flota, reportes y auditoría. No se contempla integración directa con Odoo en esta etapa.

El diseño visual del marketplace tomará como inspiración patrones de plataformas tipo directorio y marketplace, como búsqueda central, filtros, tarjetas de proveedores, calificaciones, reseñas, fotos, ubicación, perfil público y solicitud rápida de cotización, sin copiar marca, identidad, colores exactos, logotipo ni elementos protegidos de terceros.

---

## 3. Problema que resuelve

En el ecosistema logístico-portuario existen múltiples actores que participan en una misma operación: clientes, importadores, exportadores, agentes aduanales, transportistas, almacenes, terminales, navieras, autoridades, inspectores, aseguradoras y bancos. Normalmente, estos actores trabajan con sistemas separados, procesos manuales, correos, hojas de cálculo, llamadas, documentos dispersos y poca trazabilidad.

Los principales problemas identificados son:

1. Fragmentación de proveedores logísticos.
2. Dificultad para comparar tarifas y servicios.
3. Falta de trazabilidad documental.
4. Procesos lentos para solicitar cotizaciones.
5. Ausencia de un flujo centralizado desde cotización hasta cierre.
6. Poca visibilidad del estado operativo de una orden.
7. Descontrol en documentos requeridos y evidencias.
8. Falta de auditoría de pagos, comisiones y cambios de estado.
9. Dificultad para integrar actores del puerto en un mismo ecosistema.
10. Falta de un marketplace especializado en servicios logísticos portuarios y aduaneros.

---

## 4. Solución propuesta

La solución propuesta es una plataforma web tipo marketplace donde el cliente pueda buscar, comparar, cotizar y contratar servicios logísticos relacionados con operaciones portuarias y aduaneras.

La plataforma permitirá que cada actor del ecosistema opere desde un perfil especializado:

- El **cliente final** solicita servicios, carga documentos, aprueba cotizaciones, paga y monitorea órdenes.
- La **tienda logística** publica servicios, responde cotizaciones, ejecuta órdenes y carga evidencias.
- El **superadministrador** controla usuarios, tiendas, servicios, comisiones, reportes, auditoría y configuración global.
- El **operador interno** monitorea y gestiona operaciones en curso.
- El **inspector** ejecuta inspecciones y carga resultados.
- El **transportista** gestiona viajes, vehículos, conductores y entregas.
- El **agente aduanal** gestiona declaraciones, documentos y estados aduaneros.
- El **auditor** revisa logs, trazabilidad y eventos críticos.
- El **soporte técnico** atiende incidencias y ayuda a los usuarios.

La solución integrará módulos de búsqueda, catálogos, perfiles públicos de proveedores, reviews, cotizaciones, órdenes, documentos, pagos, comisiones, TOS, transporte, almacenamiento, inspecciones, reportes y auditoría.

---

## 5. Objetivo general del producto

Desarrollar un **Marketplace Logístico TOS** que permita centralizar la contratación, gestión, ejecución, seguimiento y auditoría de servicios logísticos en puertos aduaneros, mediante una plataforma web modular, escalable y preparada para operar con múltiples perfiles, actores, servicios, documentos, pagos y procesos logísticos.

---

## 6. Objetivos específicos

1. Crear un marketplace de servicios logísticos por categorías.
2. Permitir que proveedores logísticos publiquen fichas de servicios.
3. Permitir que clientes soliciten cotizaciones a una o varias tiendas logísticas.
4. Gestionar cotizaciones desde la solicitud hasta la aprobación o rechazo.
5. Convertir cotizaciones aprobadas en órdenes de servicio.
6. Gestionar documentos requeridos por servicio, actor y operación.
7. Permitir pagos, comprobantes y conciliaciones.
8. Calcular comisiones del marketplace.
9. Administrar perfiles, roles y permisos.
10. Implementar un módulo TOS básico para patio, contenedores, movimientos y gates.
11. Gestionar transporte, almacenamiento e inspecciones.
12. Crear reportes operativos, financieros y administrativos.
13. Registrar auditoría de eventos críticos.
14. Preparar una arquitectura modular para desarrollo incremental en Antigravity.
15. Usar modelos Odoo solo como referencia conceptual para el diseño de datos.

---

## 7. Mercado objetivo

El producto está dirigido a empresas y actores que participan en operaciones logísticas, portuarias y aduaneras.

### 7.1 Usuarios objetivo

1. Empresas importadoras.
2. Empresas exportadoras.
3. Clientes que necesitan servicios logísticos integrales.
4. Agentes aduanales.
5. Empresas transportistas.
6. Almacenes fiscales.
7. Terminales portuarias.
8. Navieras.
9. Inspectores de carga.
10. Aseguradoras de carga.
11. Bancos y proveedores financieros.
12. Operadores logísticos.
13. Administradores de marketplace.
14. Auditores y personal de cumplimiento.

### 7.2 Nicho inicial sugerido para el MVP

El MVP debe iniciar con servicios logísticos básicos relacionados con:

1. Despacho aduanero.
2. Transporte terrestre puerto-almacén.
3. Gestión portuaria básica.
4. Movimiento de terminal.
5. Almacenamiento fiscal.
6. Inspección física o documental.
7. Seguro básico de carga.
8. Gestión de pagos y comprobantes.
9. Preparación documental.
10. Tracking digital de operación.

---

## 8. Propuesta de valor

### 8.1 Para el cliente final

- Buscar proveedores logísticos en una sola plataforma.
- Comparar servicios, tarifas, ratings y tiempos.
- Solicitar cotizaciones rápidamente.
- Cargar documentos una sola vez.
- Aprobar o rechazar ofertas.
- Realizar seguimiento de órdenes.
- Acceder a reportes y evidencias.
- Reducir tiempos de gestión.
- Mejorar control sobre costos logísticos.

### 8.2 Para tiendas logísticas

- Publicar servicios especializados.
- Recibir solicitudes de clientes.
- Responder cotizaciones.
- Gestionar órdenes asignadas.
- Cargar evidencias de ejecución.
- Recibir pagos o liquidaciones.
- Mejorar reputación mediante reviews.
- Tener perfil público profesional.

### 8.3 Para el superadministrador

- Controlar todo el ecosistema.
- Aprobar tiendas y servicios.
- Configurar catálogos, tarifas y comisiones.
- Monitorear pagos, órdenes y reportes.
- Auditar eventos críticos.
- Gestionar usuarios, roles y permisos.
- Visualizar métricas globales del marketplace.

### 8.4 Para operadores internos

- Monitorear operaciones en curso.
- Validar documentos.
- Gestionar estados operativos.
- Coordinar eventos logísticos.
- Intervenir órdenes críticas.

### 8.5 Para auditores

- Consultar trazabilidad completa.
- Revisar cambios de estado.
- Revisar carga documental.
- Auditar pagos y comisiones.
- Exportar reportes de control.

---

## 9. Alcance funcional general

El producto completo debe contemplar los siguientes módulos funcionales:

1. Usuarios.
2. Autenticación.
3. Roles.
4. Permisos.
5. Tiendas logísticas.
6. Perfiles públicos de tiendas.
7. Servicios logísticos.
8. Productos complementarios.
9. Categorías de servicios.
10. Buscador tipo marketplace.
11. Filtros por categoría, puerto, terminal, precio, rating y disponibilidad.
12. Reviews y ratings.
13. Solicitud rápida de cotización.
14. Cotizaciones formales.
15. Órdenes de servicio.
16. Documentos.
17. Evidencias.
18. Pagos.
19. Comisiones.
20. Reportes.
21. Auditoría.
22. Soporte técnico.
23. TOS básico.
24. Transporte.
25. Almacenamiento.
26. Inspecciones.
27. Catálogos maestros.
28. Configuración global.

---

## 10. Alcance del MVP

El MVP debe ser una versión funcional mínima que permita validar el flujo principal del marketplace.

### 10.1 Módulos incluidos en el MVP

1. Usuarios y autenticación.
2. Roles y permisos básicos.
3. Catálogos maestros mínimos.
4. Registro y aprobación de tiendas logísticas.
5. Publicación de servicios logísticos.
6. Home con buscador tipo marketplace.
7. Resultados de búsqueda con filtros.
8. Perfil público de tienda logística.
9. Solicitud de cotización.
10. Respuesta de cotización.
11. Aprobación o rechazo de cotización.
12. Conversión de cotización a orden.
13. Carga documental básica.
14. Estados operativos básicos.
15. Pagos manuales o referenciales.
16. Cálculo de comisión.
17. Reportes básicos.
18. Auditoría básica.

### 10.2 Módulos diferidos para fases posteriores

1. TOS avanzado.
2. Mapa gráfico de patio.
3. Integración con GPS.
4. Integración bancaria real.
5. Integración con navieras.
6. Integración con aduanas.
7. Motor avanzado de reputación.
8. Facturación automática.
9. Conciliación bancaria automática.
10. Inteligencia artificial para recomendación de proveedores.

---

## 11. Perfiles principales del sistema

| Perfil | Descripción | Nivel funcional |
|---|---|---|
| Cliente final | Usuario que busca, cotiza, contrata y paga servicios logísticos | Operativo |
| Tienda logística | Proveedor que publica servicios y ejecuta órdenes | Operativo avanzado |
| Superadministrador | Control global del marketplace | Administración total |
| Operador interno | Usuario que gestiona operaciones internas | Operativo avanzado |
| Inspector | Ejecuta inspecciones y carga evidencias | Operativo especializado |
| Transportista | Gestiona viajes, rutas, conductores y entregas | Operativo especializado |
| Agente aduanal | Gestiona operaciones aduaneras | Operativo especializado |
| Auditor | Consulta trazabilidad y reportes de control | Consulta/auditoría |
| Soporte técnico | Atiende incidencias y revisa soporte funcional | Soporte |

---

## 12. Actores del ecosistema logístico-portuario

El sistema debe reconocer los siguientes actores del ecosistema:

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

Cada actor debe poder asociarse a:

- Perfil de usuario.
- Servicios que ofrece o consume.
- Documentos requeridos.
- Permisos.
- Módulos en los que participa.
- Eventos de auditoría.
- Modelos Odoo referenciales.
- Tablas MySQL propias.

---

## 13. Experiencia visual del marketplace

La plataforma debe tener una experiencia visual tipo marketplace/directorio de servicios.

### 13.1 Elementos visuales principales

1. Buscador central en el home.
2. Filtros laterales.
3. Tarjetas de servicios.
4. Tarjetas de tiendas logísticas.
5. Ratings con estrellas.
6. Reviews de clientes.
7. Fotos de proveedores.
8. Perfil público de tienda.
9. Botón de solicitud de cotización.
10. Vista lista y vista mapa.
11. Badges de verificación.
12. Estados operativos visibles.
13. Precios o tarifas referenciales.
14. Tiempo estimado del servicio.
15. Indicadores de SLA.

### 13.2 Restricción visual importante

El diseño puede inspirarse en patrones generales de marketplace tipo Yelp, pero no debe copiar:

1. Logotipo.
2. Marca.
3. Colores exactos.
4. Íconos propietarios.
5. Textos comerciales protegidos.
6. Diseño pixel-perfect.
7. Estructura visual idéntica.

La plataforma debe tener identidad propia para el sector logístico-portuario.

---

## 14. Arquitectura tecnológica propuesta

### 14.1 Frontend

| Elemento | Tecnología |
|---|---|
| Framework | React.js |
| Estilo visual | Tailwind CSS o CSS modular |
| Estado global | Context API, Zustand o Redux Toolkit |
| Formularios | React Hook Form o solución equivalente |
| Validación | Zod, Yup o validaciones propias |
| Componentes | Diseño modular reutilizable |
| Rutas | React Router |

### 14.2 Backend

| Elemento | Tecnología |
|---|---|
| Framework | Nest.js |
| Lenguaje | TypeScript |
| Arquitectura | Modular por dominio |
| Autenticación | JWT |
| Autorización | RBAC |
| Validaciones | DTOs y pipes |
| Documentación API | Swagger/OpenAPI |
| Auditoría | Interceptors / middleware |

### 14.3 Base de datos

| Elemento | Tecnología |
|---|---|
| Motor | MySQL |
| Modelo | Relacional |
| Migraciones | Según ORM elegido |
| Datos iniciales | Seeds |
| Auditoría | Tablas de logs |
| Relaciones | Llaves foráneas e índices |

### 14.4 Plataforma de desarrollo

| Elemento | Uso |
|---|---|
| Antigravity | Generación, planificación, desarrollo y validación de módulos |
| Git | Control de versiones |
| Docker | Contenedores opcionales |
| QA | Pruebas unitarias, integración y aceptación |

---

## 15. Modelo referencial Odoo

Odoo se usará únicamente como referencia conceptual para diseñar las entidades propias del marketplace.

| Modelo Odoo referencial | Uso conceptual en el marketplace |
|---|---|
| `res.users` | Usuarios del sistema |
| `res.partner` | Clientes, tiendas, proveedores y actores |
| `res.groups` | Roles |
| `ir.model.access` | Permisos |
| `ir.rule` | Reglas de acceso |
| `product.template` | Servicios y productos logísticos |
| `product.product` | Variantes o códigos internos |
| `product.category` | Categorías de servicios |
| `sale.order` | Cotizaciones y órdenes |
| `sale.order.line` | Líneas de servicios |
| `ir.attachment` | Documentos y evidencias |
| `account.payment` | Pagos |
| `account.move` | Documentos financieros |
| `stock.location` | Puertos, terminales, almacenes y ubicaciones |
| `stock.move` | Movimientos logísticos y TOS |
| `stock.quant` | Inventario y existencia física |
| `stock.picking` | Recepción y despacho |
| `fleet.vehicle` | Vehículos de transporte |
| `quality.check` | Inspecciones |
| `project.task` | Tareas operativas |
| `mail.message` | Auditoría y trazabilidad |

### 15.1 Restricción

No se desarrollará integración directa con Odoo en esta fase. Los modelos anteriores solo sirven como guía de diseño para construir tablas MySQL propias.

---

## 16. Módulos funcionales principales

### 16.1 Usuarios

Permite registrar, autenticar, consultar, editar, bloquear y administrar usuarios del sistema.

### 16.2 Roles y permisos

Permite configurar acceso por perfil, módulo, acción y nivel de permiso.

### 16.3 Tiendas logísticas

Permite registrar proveedores logísticos, aprobarlos, publicar su perfil y asociarlos a servicios.

### 16.4 Servicios

Permite crear fichas de servicios logísticos con tarifa, unidad, documentos requeridos, SLA, comisión y evidencias.

### 16.5 Búsqueda marketplace

Permite buscar servicios por categoría, puerto, terminal, proveedor, rating, precio y disponibilidad.

### 16.6 Cotizaciones

Permite solicitar, responder, aprobar, rechazar y convertir cotizaciones en órdenes.

### 16.7 Órdenes

Permite ejecutar servicios contratados, cambiar estados, asignar tareas y cerrar operaciones.

### 16.8 Documentos

Permite cargar, validar, rechazar, versionar y consultar documentos.

### 16.9 Pagos

Permite registrar pagos, comprobantes, estados financieros y conciliaciones.

### 16.10 Comisiones

Permite calcular comisión del marketplace y neto del proveedor.

### 16.11 TOS

Permite gestionar patios, contenedores, movimientos, gates, bloqueos y liberaciones.

### 16.12 Transporte

Permite gestionar viajes, vehículos, conductores, rutas y eventos de entrega.

### 16.13 Almacenamiento

Permite gestionar recepción, inventario, ubicaciones, permanencia y despacho.

### 16.14 Inspecciones

Permite programar, ejecutar, documentar y cerrar inspecciones.

### 16.15 Reportes

Permite generar reportes operativos, financieros, administrativos y de auditoría.

### 16.16 Auditoría

Permite registrar eventos críticos, cambios de estado, usuarios responsables y trazabilidad.

### 16.17 Reviews y ratings

Permite calificar tiendas, servicios y experiencias operativas.

### 16.18 Soporte técnico

Permite gestionar tickets, incidencias, mensajes y SLA de soporte.

---

## 17. Catálogos maestros mínimos del MVP

El MVP debe incluir los siguientes catálogos maestros:

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

Estos catálogos deben cargarse mediante seeds iniciales en MySQL y deben ser administrables desde el panel del superadministrador.

---

## 18. Flujo funcional principal del MVP

### 18.1 Flujo cliente

1. Cliente entra al marketplace.
2. Busca servicio logístico.
3. Filtra por categoría, puerto, terminal, tarifa o proveedor.
4. Revisa perfiles de tiendas logísticas.
5. Selecciona servicio.
6. Solicita cotización.
7. Carga documentos requeridos.
8. Recibe respuesta de la tienda.
9. Aprueba o rechaza cotización.
10. Si aprueba, se crea una orden.
11. Realiza o registra pago.
12. Monitorea ejecución.
13. Descarga documentos y evidencias.
14. Califica el servicio.

### 18.2 Flujo tienda logística

1. Tienda se registra.
2. Carga documentos de validación.
3. Superadministrador aprueba la tienda.
4. Tienda crea fichas de servicios.
5. Superadministrador aprueba servicios.
6. Tienda recibe solicitudes de cotización.
7. Tienda responde con tarifa y condiciones.
8. Si cliente aprueba, recibe orden.
9. Ejecuta servicio.
10. Carga evidencias.
11. Cierra operación.
12. Consulta pagos y comisiones.

### 18.3 Flujo superadministrador

1. Administra usuarios.
2. Administra roles y permisos.
3. Aprueba tiendas.
4. Aprueba servicios.
5. Configura catálogos.
6. Configura comisiones.
7. Monitorea órdenes.
8. Consulta reportes.
9. Audita eventos críticos.
10. Gestiona incidencias.

---

## 19. Reglas de negocio iniciales

1. Ningún usuario puede operar sin autenticación.
2. Ninguna tienda puede publicar servicios sin aprobación.
3. Ningún servicio puede ser visible públicamente sin aprobación.
4. Toda cotización debe tener cliente, tienda, servicio y estado.
5. Toda orden debe originarse desde una cotización aprobada o ser creada por un perfil autorizado.
6. Toda operación debe tener estado operativo.
7. Todo documento debe tener tipo, propietario, estado y versión.
8. Todo pago debe tener estado financiero.
9. Toda comisión debe calcularse según regla vigente.
10. Todo cambio crítico debe registrarse en auditoría.
11. Los permisos deben controlar frontend y backend.
12. El superadministrador puede intervenir operaciones críticas.
13. El auditor puede consultar información, pero no modificar operaciones.
14. El soporte técnico puede asistir, pero no debe cambiar reglas financieras sin permiso.

---

## 20. Entidades principales de datos

1. Usuarios.
2. Perfiles.
3. Roles.
4. Permisos.
5. Tiendas.
6. Actores.
7. Servicios.
8. Categorías.
9. Tarifas.
10. Cotizaciones.
11. Líneas de cotización.
12. Órdenes.
13. Líneas de orden.
14. Documentos.
15. Evidencias.
16. Pagos.
17. Comisiones.
18. Reportes.
19. Auditoría.
20. Reviews.
21. Tickets de soporte.
22. Puertos.
23. Terminales.
24. Contenedores.
25. Movimientos TOS.
26. Viajes.
27. Vehículos.
28. Conductores.
29. Almacenes.
30. Inventario.
31. Inspecciones.
32. Catálogos maestros.

---

## 21. Documentos maestros relacionados

Este documento debe conectarse con los siguientes documentos del plan maestro:

| Documento | Archivo |
|---|---|
| Alcance MVP | `02_MVP_SCOPE.md` |
| Reglas para Antigravity | `03_ANTIGRAVITY_RULES.md` |
| Matriz de actores | `04_ECOSYSTEM_ACTORS_MATRIX.md` |
| Perfiles de usuario | `05_USER_PROFILES.md` |
| Matriz módulos por perfil | `06_MODULE_PROFILE_ACCESS_MATRIX.md` |
| Catálogo de módulos | `07_FUNCTIONAL_MODULES_CATALOG.md` |
| Sistema visual marketplace | `08_DESIGN_SYSTEM_MARKETPLACE.md` |
| Mapa de componentes React | `09_FRONTEND_COMPONENT_MAP.md` |
| Arquitectura técnica | `11_TECHNICAL_ARCHITECTURE.md` |
| Esquema MySQL | `12_DATABASE_MASTER_SCHEMA.md` |
| Especificación API | `13_API_SPECIFICATION.md` |
| Modelos Odoo referenciales | `14_ODOO_REFERENCE_MODELS.md` |
| Catálogos MVP | `15_MASTER_CATALOGS_MVP.md` |
| Catálogo de servicios | `16_SERVICES_MASTER_CATALOG.md` |
| Backlog maestro | `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md` |
| Prompts Antigravity | `32_ANTIGRAVITY_PROMPTS_MASTER.md` |

---

## 22. Requerimientos no funcionales

### 22.1 Seguridad

1. Autenticación segura.
2. Contraseñas cifradas.
3. Protección de endpoints.
4. Control RBAC.
5. Validación de DTOs.
6. Sanitización de entradas.
7. Protección de archivos.
8. Auditoría de eventos críticos.

### 22.2 Escalabilidad

1. Arquitectura modular.
2. Separación por dominios.
3. Base de datos normalizada.
4. Servicios backend independientes por módulo.
5. Componentes frontend reutilizables.

### 22.3 Usabilidad

1. Interfaz clara.
2. Diseño responsive.
3. Búsqueda rápida.
4. Filtros visibles.
5. Estados comprensibles.
6. Formularios simples.
7. Dashboards por perfil.

### 22.4 Auditoría

1. Registro de cambios críticos.
2. Historial de usuario.
3. Valor anterior y valor nuevo.
4. Fecha y hora.
5. Entidad afectada.
6. Módulo afectado.

### 22.5 Mantenibilidad

1. Código modular.
2. Nombres consistentes.
3. Documentación técnica.
4. Pruebas unitarias.
5. Pruebas de integración.
6. Changelog.

---

## 23. Métricas de éxito del MVP

1. El cliente puede registrarse e iniciar sesión.
2. Una tienda puede registrarse y ser aprobada.
3. Una tienda puede publicar servicios.
4. Un cliente puede buscar servicios.
5. Un cliente puede solicitar cotización.
6. Una tienda puede responder cotización.
7. Un cliente puede aprobar cotización.
8. El sistema puede crear una orden.
9. Se pueden cargar documentos.
10. Se puede registrar un pago referencial.
11. Se calcula comisión.
12. Se genera auditoría de eventos críticos.
13. El superadministrador puede consultar reportes básicos.
14. El sistema respeta roles y permisos.
15. El diseño es usable en desktop y mobile.

---

## 24. Fuera de alcance inicial

Los siguientes elementos no forman parte del MVP inicial:

1. Integración directa con Odoo.
2. Integración bancaria real.
3. Integración con aduana real.
4. Integración con navieras reales.
5. Integración con GPS en tiempo real.
6. Facturación fiscal automática.
7. Liquidaciones automáticas a proveedores.
8. Motor IA de recomendación.
9. OCR documental.
10. App móvil nativa.
11. Blockchain o contratos inteligentes.
12. EDI portuario.

Estos elementos pueden considerarse en fases posteriores.

---

## 25. Riesgos principales

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Alcance demasiado amplio | Alto | Priorizar MVP por fases |
| Complejidad del ecosistema portuario | Alto | Documentar actores y módulos antes de codificar |
| Permisos mal definidos | Alto | Crear matriz módulos por perfil |
| Datos maestros inconsistentes | Medio | Crear catálogos MVP desde el inicio |
| Diseño visual copiado de otra marca | Medio | Crear identidad propia inspirada en patrones generales |
| Falta de auditoría | Alto | Implementar logs desde el MVP |
| Errores en cálculos financieros | Alto | Crear pruebas unitarias de pagos y comisiones |
| Falta de documentación para Antigravity | Alto | Mantener documentos maestros actualizados |

---

## 26. Criterios de aceptación de este documento

Este documento se considera completo cuando:

1. Define claramente el problema.
2. Define la solución propuesta.
3. Explica el objetivo general.
4. Define objetivos específicos.
5. Identifica usuarios y actores.
6. Define el alcance funcional general.
7. Define el alcance MVP.
8. Define módulos principales.
9. Define tecnologías base.
10. Define uso referencial de Odoo.
11. Define experiencia visual esperada.
12. Define métricas de éxito.
13. Define riesgos iniciales.
14. Sirve como entrada para generar épicas, historias y tareas en Antigravity.

---

## 27. Prompt sugerido para Antigravity

```text
Actúa como arquitecto de software, product owner y desarrollador full stack senior.

Usa este documento `01_PRODUCT_VISION.md` como fuente principal de visión del producto para desarrollar un Marketplace Logístico TOS para puertos aduaneros.

Objetivo:
Convertir esta visión de producto en un plan técnico y funcional ejecutable dentro del proyecto, usando React.js para frontend, Nest.js para backend y MySQL para base de datos.

Reglas:
1. No integrar directamente con Odoo; usar Odoo solo como referencia conceptual de modelos de datos.
2. No copiar identidad visual de Yelp ni de ninguna marca; usar solo patrones generales de marketplace/directorio.
3. Mantener arquitectura modular.
4. Crear documentación antes de implementar código.
5. Crear pruebas para toda lógica crítica.
6. Proteger endpoints con autenticación y permisos RBAC.
7. Registrar auditoría en eventos críticos.
8. Separar claramente frontend, backend y base de datos.

Entregables esperados:
1. Resumen técnico de la visión.
2. Lista de módulos funcionales.
3. Propuesta de estructura de carpetas.
4. Backlog inicial de épicas, historias y tareas.
5. Lista de tablas MySQL iniciales.
6. Lista de endpoints Nest.js iniciales.
7. Lista de componentes React.js iniciales.
8. Riesgos técnicos detectados.
9. Próximos pasos recomendados.

Antes de escribir código, genera un plan de implementación y solicita revisión si detectas ambigüedades críticas.
```

---

## 28. Checklist para usar este documento en Antigravity

- [ ] Guardar como `01_PRODUCT_VISION.md`.
- [ ] Colocar dentro de la carpeta `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo como base para `02_MVP_SCOPE.md`.
- [ ] Usarlo como base para `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`.
- [ ] Usarlo como entrada para prompts en `32_ANTIGRAVITY_PROMPTS_MASTER.md`.
- [ ] Confirmar que el alcance MVP esté alineado con el presupuesto y tiempos disponibles.
- [ ] Confirmar que los perfiles y actores sean correctos.
- [ ] Confirmar que no se esté copiando identidad visual de terceros.
- [ ] Confirmar que Odoo sea solo referencia conceptual.

---

## 29. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica | Sí |
| Pendiente de aprobación final | Sí |
| Listo para usar en Antigravity | Sí, como borrador maestro inicial |

---

# Fin del documento

