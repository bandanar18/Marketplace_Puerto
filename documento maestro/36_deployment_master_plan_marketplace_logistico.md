# 36_DEPLOYMENT_MASTER_PLAN.md

# Documento Maestro del Plan de Despliegue
## Marketplace Logístico TOS para Puertos Aduaneros

---

## 1. Identificación del documento

| Campo | Descripción |
|---|---|
| Nombre del documento | `36_DEPLOYMENT_MASTER_PLAN.md` |
| Proyecto | Marketplace Logístico TOS para Puertos Aduaneros |
| Plataforma de desarrollo | Antigravity |
| Tecnologías base | React.js, Nest.js, MySQL |
| Tipo de documento | Plan maestro de despliegue, ambientes, release, CI/CD, migraciones, backups, rollback, monitoreo y operación técnica |
| Versión | 1.0 |
| Estado | Borrador maestro inicial |
| Alcance | Demo temprana, MVP completo y base para despliegue productivo futuro |
| Estilo visual del producto | Marketplace tipo Yelp.com: directorio, tarjetas, filtros, búsqueda, perfiles públicos, dashboards y diseño responsive |
| Documentos base principales | `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `35_QA_MASTER_TEST_PLAN.md`, `37_OPERATIONS_AND_SUPPORT_PLAN.md` |
| Documentos relacionados | `01_PRODUCT_VISION.md`, `02_MVP_SCOPE.md`, `03_ANTIGRAVITY_RULES.md`, `05_USER_PROFILES.md`, `06_MODULE_PROFILE_ACCESS_MATRIX.md`, `07_FUNCTIONAL_MODULES_CATALOG.md`, `08_DESIGN_SYSTEM_MARKETPLACE.md`, `09_FRONTEND_COMPONENT_MAP.md`, `10_NAVIGATION_AND_MENUS.md`, `11_TECHNICAL_ARCHITECTURE.md`, `12_DATABASE_MASTER_SCHEMA.md`, `13_API_SPECIFICATION.md`, `15_MASTER_CATALOGS_MVP.md`, `17_INITIAL_SEEDS_PLAN.md`, `24_PAYMENTS_MASTER_PLAN.md`, `25_COMMISSIONS_MASTER_PLAN.md`, `26_SECURITY_MASTER_PLAN.md`, `27_AUDIT_TRAIL_MASTER_PLAN.md`, `28_REPORTS_MASTER_PLAN.md`, `29_EPICS_STORIES_TASKS_MASTER_BACKLOG.md`, `30_SPRINT_ROADMAP.md`, `31_ACCEPTANCE_CRITERIA_MASTER.md`, `32_ANTIGRAVITY_PROMPTS_MASTER.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `35_QA_MASTER_TEST_PLAN.md`, `37_OPERATIONS_AND_SUPPORT_PLAN.md` |

---

## 2. Propósito del documento

Este documento define el **plan maestro de despliegue** para el Marketplace Logístico TOS desarrollado con React.js, Nest.js y MySQL.

Su propósito es establecer una guía clara para preparar, empaquetar, configurar, probar, desplegar, monitorear, revertir y mantener la plataforma en distintos ambientes: local, demo, QA, staging y producción futura.

Este documento permite controlar:

1. Ambientes de despliegue.
2. Estrategia de release.
3. Preparación de infraestructura.
4. Variables de entorno.
5. Build frontend React.js.
6. Build backend Nest.js.
7. Configuración MySQL.
8. Migraciones de base de datos.
9. Seeds demo y productivos.
10. Manejo de archivos y documentos.
11. Seguridad de despliegue.
12. CI/CD.
13. Backups.
14. Rollback.
15. Monitoreo.
16. Logs.
17. Validación post-despliegue.
18. Checklist de demo temprana.
19. Checklist de MVP completo.
20. Preparación para operación y soporte.

---

## 3. Objetivo general

Definir una estrategia de despliegue segura, ordenada, verificable y reversible para publicar el Marketplace Logístico TOS en ambientes controlados, garantizando estabilidad técnica, integridad de datos, seguridad, trazabilidad, documentación y capacidad de operación posterior al release.

---

## 4. Objetivos específicos

1. Definir ambientes de despliegue.
2. Definir estrategia de despliegue para frontend React.js.
3. Definir estrategia de despliegue para backend Nest.js.
4. Definir estrategia de despliegue para MySQL.
5. Definir manejo de variables de entorno.
6. Definir manejo de archivos/documentos.
7. Definir migraciones y seeds.
8. Definir pipeline CI/CD referencial.
9. Definir checklist pre-deployment.
10. Definir checklist deployment.
11. Definir checklist post-deployment.
12. Definir estrategia de rollback.
13. Definir estrategia de backups.
14. Definir monitoreo mínimo.
15. Definir logs técnicos y audit logs.
16. Definir hardening básico.
17. Definir validación QA antes de liberar.
18. Definir validación operativa después de liberar.
19. Definir release notes.
20. Definir prompts para Antigravity.

---

## 5. Principios rectores de despliegue

1. No desplegar sin QA aprobado.
2. No desplegar sin migraciones probadas.
3. No desplegar sin backup previo si existe data importante.
4. No desplegar secretos en el repositorio.
5. No desplegar `.env` real.
6. No desplegar Swagger público en producción sin protección.
7. No ejecutar seeds demo en producción.
8. No desplegar cambios de pagos/comisiones sin pruebas financieras.
9. No desplegar cambios de roles/scopes sin pruebas de seguridad.
10. No desplegar cambios de auditoría sin validar audit logs.
11. No desplegar frontend que apunte a API equivocada.
12. No desplegar backend con CORS abierto de forma insegura.
13. No desplegar sin plan de rollback.
14. No desplegar si hay bugs críticos abiertos.
15. No desplegar si falla el flujo E2E principal.
16. Todo release debe registrarse en `34_CHANGELOG_AND_DECISION_LOG.md`.
17. Todo release debe tener notas de versión.
18. Todo release debe tener responsable.
19. Todo release debe tener evidencia de validación.
20. Todo release debe ser monitoreado después de publicarse.

---

## 6. Alcance del plan de despliegue

| Componente | Incluido |
|---|---|
| Frontend React.js | Sí |
| Backend Nest.js | Sí |
| MySQL | Sí |
| Migraciones | Sí |
| Seeds | Sí |
| Variables de entorno | Sí |
| Archivos/documentos | Sí |
| Swagger | Sí |
| Logs técnicos | Sí |
| Audit logs | Sí |
| Backups | Sí |
| Rollback | Sí |
| Monitoreo básico | Sí |
| Demo temprana | Sí |
| MVP completo | Sí |
| Producción futura | Base referencial |
| Integración Odoo real | No MVP |
| Pasarela real de pago | No MVP |
| BI externo | No MVP |
| Alta disponibilidad avanzada | Futuro |
| Kubernetes avanzado | Futuro opcional |
| Disaster recovery multi-región | Futuro |

---

## 7. Fuera de alcance del despliegue MVP

No forman parte del despliegue MVP inicial:

1. Integración real con Odoo.
2. Pasarela real de pagos.
3. Split payment real.
4. BI externo.
5. Data warehouse.
6. TOS externo productivo.
7. Integración gubernamental aduanera.
8. Firma digital legal avanzada.
9. Facturación fiscal productiva.
10. Alta disponibilidad multi-región.
11. Balanceo avanzado de carga.
12. Kubernetes productivo obligatorio.
13. CDN empresarial obligatorio.
14. WAF empresarial obligatorio.
15. Observabilidad APM empresarial avanzada.

---

# SECCIÓN A — AMBIENTES DE DESPLIEGUE

---

## 8. Ambientes recomendados

| Ambiente | Código | Propósito | Datos | Acceso |
|---|---|---|---|---|
| Local | `LOCAL` | Desarrollo individual en Antigravity | Seeds demo | Desarrollador |
| Demo | `DEMO` | Presentación funcional y validación comercial | Seeds demo controlados | Equipo interno / stakeholders |
| QA | `QA` | Pruebas funcionales, seguridad y regresión | Datos QA | QA / desarrollo |
| Staging | `STAGING` | Preproducción futura | Datos simulados cercanos a producción | Equipo técnico |
| Producción | `PROD` | Operación real futura | Datos reales | Usuarios reales |

---

## 9. Reglas por ambiente

| Regla | Local | Demo | QA | Staging | Producción |
|---|---|---|---|---|---|
| Seeds demo | Sí | Sí | Sí controlado | No demo libre | No |
| Swagger visible | Sí | Sí protegido | Sí protegido | Protegido | Deshabilitado o protegido |
| Logs detallados | Sí | Medio | Alto | Medio | Controlado |
| Errores con stack trace | Sí local | No | No | No | No |
| Datos reales | No | No | No | No recomendable | Sí |
| Backups obligatorios | Opcional | Recomendado | Recomendado | Sí | Sí |
| Rate limit auth | Recomendado | Sí | Sí | Sí | Sí |
| CORS restringido | Recomendado | Sí | Sí | Sí | Sí |
| Auditoría crítica | Sí | Sí | Sí | Sí | Sí |

---

## 10. Objetivo de cada ambiente

### 10.1 Local

Ambiente para desarrollo y pruebas rápidas.

Debe permitir:

1. Levantar frontend.
2. Levantar backend.
3. Conectar a MySQL local.
4. Ejecutar migraciones.
5. Ejecutar seeds demo.
6. Probar módulos en desarrollo.
7. Ejecutar pruebas básicas.

### 10.2 Demo

Ambiente para mostrar avances funcionales.

Debe permitir:

1. Presentar home.
2. Presentar búsqueda.
3. Presentar flujo cliente-tienda-admin.
4. Presentar cotizaciones.
5. Presentar órdenes.
6. Presentar pagos manuales.
7. Presentar comisiones.
8. Presentar auditoría.
9. Presentar reportes básicos.

### 10.3 QA

Ambiente para validar el sistema antes de release.

Debe permitir:

1. Ejecutar pruebas E2E.
2. Ejecutar pruebas de seguridad.
3. Ejecutar pruebas de scope.
4. Ejecutar pruebas de auditoría.
5. Ejecutar pruebas de pagos y comisiones.
6. Ejecutar regresión.
7. Registrar bugs.

### 10.4 Staging

Ambiente futuro de preproducción.

Debe simular producción con configuración controlada.

### 10.5 Producción

Ambiente futuro para operación real.

Debe operar con datos reales, backups, monitoreo y soporte formal.

---

# SECCIÓN B — ARQUITECTURA REFERENCIAL DE DESPLIEGUE

---

## 11. Arquitectura lógica del despliegue

```txt
Usuario Web
  ↓
Frontend React.js
  ↓ HTTPS
Backend Nest.js API
  ↓
MySQL Database
  ↓
Storage de documentos/evidencias
  ↓
Logs técnicos + Audit logs + Backups
```

---

## 12. Componentes desplegables

| Componente | Tecnología | Artefacto de despliegue |
|---|---|---|
| Frontend | React.js | Build estático `/dist` |
| Backend | Nest.js | Node.js service / Docker container |
| Database | MySQL | Schema + migrations |
| Seeds | SQL/Script | Scripts de carga inicial |
| Storage documental | File system / Object storage futuro | Directorio seguro o bucket futuro |
| Swagger | Nest.js Swagger | Endpoint protegido |
| Logs | App/server/database | Archivos o servicio de logs |
| Backups | MySQL dump / snapshots | Archivos de backup |

---

## 13. Topología mínima para demo/MVP

```txt
Servidor Demo/MVP
  ├── Frontend React build
  ├── Backend Nest.js API
  ├── MySQL database
  ├── Storage local seguro para documentos
  ├── Logs técnicos
  └── Backups programados
```

---

## 14. Topología recomendada para producción futura

```txt
Internet
  ↓
HTTPS / Reverse Proxy
  ↓
Frontend estático
  ↓
Backend API Nest.js
  ↓
MySQL administrado o servidor dedicado
  ↓
Object Storage para documentos
  ↓
Sistema de logs y monitoreo
  ↓
Backups externos
```

---

## 15. Opciones de hosting referenciales

| Opción | Uso sugerido | Ventaja | Riesgo |
|---|---|---|---|
| VPS único | Demo/MVP simple | Bajo costo, control total | Menor alta disponibilidad |
| VPS separado frontend/backend/db | MVP robusto | Separación de responsabilidades | Más configuración |
| Cloud managed DB | Producción futura | Backups y estabilidad | Mayor costo |
| Docker Compose | Demo/MVP técnico | Reproducible | Requiere disciplina operativa |
| Kubernetes | Futuro | Escalabilidad | Complejidad innecesaria para MVP |
| PaaS frontend + API server | Demo rápida | Simplicidad | Dependencia de proveedor |

Recomendación MVP:

```txt
Usar despliegue simple y controlado con Docker Compose o servicios separados en VPS, evitando complejidad prematura.
```

---

# SECCIÓN C — ESTRUCTURA DE REPOSITORIO PARA DESPLIEGUE

---

## 16. Estructura esperada

```txt
marketplace-logistico-tos/
  frontend/
    src/
    public/
    package.json
    vite.config.ts
    .env.example
  backend/
    src/
    package.json
    tsconfig.json
    .env.example
  database/
    migrations/
    seeds/
    schema.sql
    seed-demo.sql
  docs/
    01_PRODUCT_VISION.md
    ...
    36_DEPLOYMENT_MASTER_PLAN.md
    37_OPERATIONS_AND_SUPPORT_PLAN.md
  scripts/
    deploy-demo.sh
    deploy-qa.sh
    backup-db.sh
    restore-db.sh
    run-migrations.sh
    run-seeds-demo.sh
  docker-compose.yml
  README.md
  .env.example
  .gitignore
```

---

## 17. Artefactos obligatorios de despliegue

| Artefacto | Obligatorio | Ambiente |
|---|---|---|
| `README.md` | Sí | Todos |
| `.env.example` raíz | Sí | Todos |
| `.gitignore` | Sí | Todos |
| `frontend/.env.example` | Sí | Todos |
| `backend/.env.example` | Sí | Todos |
| `database/migrations` | Sí | Todos |
| `database/seeds` | Sí | Local/Demo/QA |
| `docker-compose.yml` | Recomendado | Local/Demo/QA |
| `deploy-demo.sh` | Recomendado | Demo |
| `backup-db.sh` | Recomendado | Demo/QA/Staging/Prod |
| `restore-db.sh` | Recomendado | QA/Staging/Prod |
| `run-migrations.sh` | Recomendado | Todos |
| `run-seeds-demo.sh` | Recomendado | Local/Demo/QA |
| Release notes | Sí por release | Demo/MVP |
| QA release report | Sí por release | Demo/MVP |

---

# SECCIÓN D — VARIABLES DE ENTORNO

---

## 18. Principios de variables de entorno

1. No subir `.env` real al repositorio.
2. Subir solo `.env.example`.
3. Mantener variables separadas por frontend y backend.
4. No exponer secretos en frontend.
5. El frontend solo debe tener variables públicas seguras.
6. El backend maneja secretos, credenciales y configuración sensible.
7. Las credenciales MySQL deben estar solo en backend/infraestructura.
8. Tokens, claves y secretos deben rotarse si se filtran.
9. Producción debe usar secretos seguros del proveedor o gestor de secretos.
10. Cambios de variables críticas deben registrarse en changelog si afectan release.

---

## 19. Variables frontend referenciales

```env
VITE_APP_NAME=Marketplace Logistico TOS
VITE_APP_ENV=demo
VITE_API_BASE_URL=https://api-demo.example.com/api
VITE_PUBLIC_SITE_URL=https://demo.example.com
VITE_ENABLE_DEMO_MODE=true
VITE_ENABLE_SWAGGER_LINK=false
```

### Reglas frontend

| Variable | Regla |
|---|---|
| `VITE_API_BASE_URL` | Debe apuntar al backend correcto del ambiente |
| `VITE_ENABLE_DEMO_MODE` | Solo activo en local/demo |
| `VITE_ENABLE_SWAGGER_LINK` | No mostrar en producción pública |
| Variables con secretos | Prohibidas en frontend |

---

## 20. Variables backend referenciales

```env
NODE_ENV=demo
PORT=3000
API_PREFIX=/api
APP_NAME=Marketplace Logistico TOS
APP_URL=https://api-demo.example.com
FRONTEND_URL=https://demo.example.com

DB_HOST=localhost
DB_PORT=3306
DB_NAME=marketplace_logistico_tos
DB_USER=marketplace_user
DB_PASSWORD=change_me_securely

JWT_ACCESS_SECRET=change_me_access_secret
JWT_REFRESH_SECRET=change_me_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

CORS_ALLOWED_ORIGINS=https://demo.example.com
RATE_LIMIT_TTL=60
RATE_LIMIT_MAX=100

UPLOAD_STORAGE_DRIVER=local
UPLOAD_BASE_PATH=/var/app/uploads
UPLOAD_MAX_SIZE_MB=10
UPLOAD_ALLOWED_MIME_TYPES=application/pdf,image/png,image/jpeg

SWAGGER_ENABLED=true
SWAGGER_PATH=/api/docs
SWAGGER_PROTECTED=true

AUDIT_LOG_ENABLED=true
LOG_LEVEL=info
```

---

## 21. Variables prohibidas en repositorio

Nunca deben estar en código o `.env.example` con valores reales:

1. `DB_PASSWORD` real.
2. `JWT_ACCESS_SECRET` real.
3. `JWT_REFRESH_SECRET` real.
4. SMTP password real.
5. API keys reales.
6. Private keys.
7. Cloud secrets.
8. Production tokens.
9. Passwords de usuarios reales.
10. Credenciales de pasarelas futuras.

---

## 22. Checklist de variables antes de desplegar

| Validación | Obligatorio |
|---|---|
| `.env` real existe en servidor | Sí |
| `.env` real no está en git | Sí |
| `.env.example` actualizado | Sí |
| `NODE_ENV` correcto | Sí |
| `VITE_API_BASE_URL` correcto | Sí |
| `DB_HOST` correcto | Sí |
| Secrets JWT no son default | Sí |
| CORS apunta al frontend correcto | Sí |
| Upload path existe | Sí |
| Swagger protegido según ambiente | Sí |
| Rate limit configurado | Sí |

---

# SECCIÓN E — BUILD Y DESPLIEGUE FRONTEND

---

## 23. Flujo de build frontend

```txt
Instalar dependencias
  ↓
Validar variables frontend
  ↓
Ejecutar lint/test si aplica
  ↓
Ejecutar build
  ↓
Generar carpeta dist
  ↓
Publicar dist en servidor/CDN/static hosting
  ↓
Validar carga del home
  ↓
Validar conexión con API
```

---

## 24. Comandos referenciales frontend

```bash
cd frontend
npm install
npm run build
npm run preview
```

Si existen pruebas:

```bash
npm run test
npm run lint
```

---

## 25. Checklist frontend pre-deployment

| Validación | Obligatorio |
|---|---|
| Build sin errores | Sí |
| Variables correctas | Sí |
| API base URL correcta | Sí |
| Home carga | Sí |
| Login page carga | Sí |
| Dashboard routes protegidas | Sí |
| Estados loading/empty/error funcionan | Sí |
| Forbidden page funciona | Sí |
| Diseño responsive revisado | Sí |
| No hay console errors críticos | Sí |
| No hay secretos en build | Sí |

---

## 26. Validación frontend post-deployment

| Ruta | Resultado esperado |
|---|---|
| `/` | Home público carga |
| `/search` | Página de búsqueda carga |
| `/login` | Login carga |
| `/register` | Registro carga |
| `/stores/:slug` | Perfil público tienda carga |
| `/services/:slug` | Detalle servicio carga |
| `/client/dashboard` | Requiere login cliente |
| `/store/dashboard` | Requiere login tienda |
| `/admin/dashboard` | Requiere admin |
| `/403` | Página de acceso denegado |
| Ruta inexistente | 404 controlado |

---

# SECCIÓN F — BUILD Y DESPLIEGUE BACKEND

---

## 27. Flujo de build backend

```txt
Instalar dependencias
  ↓
Validar variables backend
  ↓
Ejecutar lint/test si aplica
  ↓
Ejecutar build Nest.js
  ↓
Ejecutar migraciones
  ↓
Ejecutar seeds si ambiente lo permite
  ↓
Iniciar servicio backend
  ↓
Validar health check
  ↓
Validar Swagger si aplica
  ↓
Validar endpoints críticos
```

---

## 28. Comandos referenciales backend

```bash
cd backend
npm install
npm run build
npm run start:prod
```

Si existen pruebas:

```bash
npm run test
npm run test:e2e
npm run lint
```

---

## 29. Checklist backend pre-deployment

| Validación | Obligatorio |
|---|---|
| Build sin errores | Sí |
| Variables backend configuradas | Sí |
| Conexión MySQL validada | Sí |
| Migraciones probadas | Sí |
| Seeds controlados por ambiente | Sí |
| JWT secrets configurados | Sí |
| CORS restringido | Sí |
| Rate limit auth activo | Sí |
| Swagger protegido | Sí |
| Upload path existe | Sí |
| Logs configurados | Sí |
| Errores seguros en modo no local | Sí |
| Audit log activo | Sí |

---

## 30. Validación backend post-deployment

| Endpoint | Resultado esperado |
|---|---|
| `GET /health` | 200 OK |
| `GET /health/db` | 200 OK si existe |
| `POST /auth/login` | Login válido funciona |
| `GET /auth/me` sin token | 401 |
| `GET /auth/me` con token | Usuario actual |
| Endpoint admin con cliente | 403 |
| `GET /catalogs` | Catálogos activos |
| `GET /search/services` | Servicios publicados |
| `POST /quotations` | Requiere cliente autenticado |
| `GET /audit/logs` con auditor | 200 |
| `GET /audit/logs` con cliente | 403 |

---

# SECCIÓN G — MYSQL, MIGRACIONES Y SEEDS

---

## 31. Principios de despliegue de base de datos

1. Toda migración debe probarse antes del despliegue.
2. No modificar manualmente producción sin registro.
3. No ejecutar seeds demo en producción.
4. Hacer backup antes de migraciones críticas.
5. Usar transacciones cuando sea posible.
6. Mantener compatibilidad entre backend y schema.
7. Registrar cambios de schema en changelog.
8. Validar índices de tablas críticas.
9. Validar foreign keys.
10. Validar campos monetarios DECIMAL.

---

## 32. Flujo de migración

```txt
Crear migración
  ↓
Probar migración en local
  ↓
Probar migración en QA
  ↓
Hacer backup del ambiente destino
  ↓
Ejecutar migración
  ↓
Validar schema
  ↓
Validar aplicación
  ↓
Registrar resultado
```

---

## 33. Checklist pre-migración

| Validación | Obligatorio |
|---|---|
| Migración revisada | Sí |
| Backup previo | Sí en demo/QA/staging/prod |
| Ambiente correcto | Sí |
| Backend compatible | Sí |
| Rollback considerado | Sí |
| Datos críticos identificados | Sí |
| Tiempo de ejecución estimado | Recomendado |
| Foreign keys revisadas | Sí |
| Índices revisados | Sí |
| Prueba local exitosa | Sí |

---

## 34. Checklist post-migración

| Validación | Obligatorio |
|---|---|
| Migración finalizó sin errores | Sí |
| Tablas esperadas existen | Sí |
| Columnas esperadas existen | Sí |
| Índices esperados existen | Sí |
| Foreign keys válidas | Sí |
| Seeds cargan si aplica | Sí |
| Backend conecta | Sí |
| Health check OK | Sí |
| Flujo crítico probado | Sí |
| No hay errores 500 nuevos | Sí |

---

## 35. Uso de seeds por ambiente

| Seed | Local | Demo | QA | Staging | Producción |
|---|---|---|---|---|---|
| Roles base | Sí | Sí | Sí | Sí | Sí |
| Permisos base | Sí | Sí | Sí | Sí | Sí |
| Catálogos maestros | Sí | Sí | Sí | Sí | Sí |
| Usuarios demo | Sí | Sí | Sí | No recomendado | No |
| Tiendas demo | Sí | Sí | Sí | No recomendado | No |
| Servicios demo | Sí | Sí | Sí | No recomendado | No |
| Cotizaciones demo | Sí | Sí | Sí | No | No |
| Órdenes demo | Sí | Sí | Sí | No | No |
| Pagos demo | Sí | Sí | Sí | No | No |
| Audit logs demo | Sí | Sí | Sí | No | No |

---

## 36. Checklist de seeds

| Validación | Obligatorio |
|---|---|
| Seeds idempotentes o controlados | Sí |
| Roles base creados | Sí |
| Permisos base creados | Sí |
| Catálogos creados | Sí |
| Usuario admin demo solo en demo/QA/local | Sí |
| Usuarios demo no existen en producción | Sí |
| Contraseñas demo no usadas en producción | Sí |
| Servicios demo solo en ambientes permitidos | Sí |
| Seeds documentados | Sí |

---

# SECCIÓN H — ARCHIVOS, DOCUMENTOS Y STORAGE

---

## 37. Estrategia MVP de archivos

Para el MVP se puede usar almacenamiento local seguro en el servidor.

Estructura sugerida:

```txt
/var/app/marketplace-logistico/uploads/
  documents/
  evidences/
  payment-receipts/
  reports/
  temp/
```

---

## 38. Reglas de almacenamiento documental

1. No guardar archivos en carpetas públicas sin control.
2. Descargar archivos mediante endpoint protegido.
3. Validar MIME type.
4. Validar extensión.
5. Validar tamaño máximo.
6. Generar nombres internos seguros.
7. Mantener nombre original como metadato, no como ruta confiable.
8. Aplicar permisos y scope antes de descargar.
9. Auditar descarga si es sensible.
10. Respaldar archivos junto a la base de datos.

---

## 39. Checklist storage deployment

| Validación | Obligatorio |
|---|---|
| Directorio upload existe | Sí |
| Permisos de escritura backend | Sí |
| No es público directamente | Sí |
| Límite de tamaño configurado | Sí |
| MIME types configurados | Sí |
| Extensiones peligrosas bloqueadas | Sí |
| Backup de archivos configurado | Recomendado demo / obligatorio prod |
| Limpieza de temporales | Recomendado |
| Endpoint download protegido | Sí |

---

# SECCIÓN I — CI/CD REFERENCIAL

---

## 40. Objetivo del pipeline CI/CD

El pipeline debe automatizar validaciones mínimas para evitar desplegar código roto o inseguro.

Debe validar:

1. Instalación de dependencias.
2. Build frontend.
3. Build backend.
4. Tests unitarios si existen.
5. Tests E2E si existen.
6. Lint si existe.
7. Validación de variables example.
8. Generación de artefactos.
9. Despliegue controlado por ambiente.
10. Health check post-deploy.

---

## 41. Pipeline mínimo recomendado

```txt
Pull / commit
  ↓
Install dependencies
  ↓
Lint frontend/backend
  ↓
Test frontend/backend
  ↓
Build frontend
  ↓
Build backend
  ↓
Run migrations in target environment
  ↓
Deploy backend
  ↓
Deploy frontend
  ↓
Post-deployment smoke test
  ↓
Notify result
```

---

## 42. Pipeline por ambiente

| Etapa | Local | Demo | QA | Staging | Producción |
|---|---|---|---|---|---|
| Build frontend | Manual | Automático/recomendado | Automático | Automático | Automático |
| Build backend | Manual | Automático/recomendado | Automático | Automático | Automático |
| Tests | Manual | Recomendado | Obligatorio | Obligatorio | Obligatorio |
| Migraciones | Manual | Controladas | Controladas | Controladas | Controladas con backup |
| Seeds demo | Sí | Sí | Sí | No | No |
| Approval manual | No | Recomendado | Recomendado | Sí | Sí |
| Smoke test | Recomendado | Sí | Sí | Sí | Sí |
| Rollback plan | No | Sí | Sí | Sí | Sí |

---

## 43. Checklist CI/CD

| Validación | Obligatorio |
|---|---|
| Build frontend | Sí |
| Build backend | Sí |
| Tests críticos | Sí en QA/staging/prod |
| Migraciones probadas | Sí |
| Variables por ambiente | Sí |
| Secrets no impresos en logs | Sí |
| Deploy con registro | Sí |
| Health check post-deploy | Sí |
| Smoke test post-deploy | Sí |
| Notificación de resultado | Recomendado |
| Rollback documentado | Sí |

---

# SECCIÓN J — ESTRATEGIA DE RELEASE

---

## 44. Tipos de release

| Tipo | Código | Uso |
|---|---|---|
| Demo temprana | `REL-DEMO` | Mostrar flujo comercial hasta Sprint 12 |
| MVP completo | `REL-MVP` | Entrega completa Sprint 00 a Sprint 22 |
| Hotfix | `REL-HOTFIX` | Corregir error crítico |
| Release técnico | `REL-TECH` | Cambios internos, seguridad, migraciones |
| Release funcional | `REL-FUNC` | Nuevas funcionalidades |
| Release de documentación | `REL-DOC` | Actualización documental |

---

## 45. Convención de versiones

Formato sugerido:

```txt
vMAJOR.MINOR.PATCH-ambiente
```

Ejemplos:

```txt
v0.1.0-demo
v0.2.0-qa
v1.0.0-mvp
v1.0.1-hotfix
```

---

## 46. Estrategia de release demo temprana

| Campo | Valor |
|---|---|
| Release | `REL-DEMO-001` |
| Sprints incluidos | Sprint 00 a Sprint 12 |
| Objetivo | Validar flujo comercial marketplace |
| Datos | Seeds demo |
| Usuarios | Usuarios demo |
| Requiere pagos reales | No |
| Requiere Odoo real | No |
| Requiere BI externo | No |
| Requiere QA E2E | Sí |

Debe incluir:

1. Home público.
2. Búsqueda.
3. Tiendas.
4. Servicios.
5. Cotizaciones.
6. Órdenes.
7. Pagos manuales.
8. Comisiones.
9. Auditoría.
10. Notificaciones.
11. Dashboards básicos.

---

## 47. Estrategia de release MVP completo

| Campo | Valor |
|---|---|
| Release | `REL-MVP-001` |
| Sprints incluidos | Sprint 00 a Sprint 22 |
| Objetivo | Entregar MVP operativo completo |
| Datos | Seeds demo completos / data controlada |
| Usuarios | Todos los perfiles demo |
| Requiere pagos reales | No |
| Requiere Odoo real | No |
| Requiere BI externo | No |
| Requiere QA integral | Sí |

Debe incluir:

1. Demo temprana completa.
2. Documentos y evidencias.
3. TOS básico.
4. Transporte.
5. Almacenamiento.
6. Inspecciones.
7. Reportes.
8. Exportaciones.
9. Soporte básico.
10. Swagger.
11. README.
12. QA integral.
13. Backups y monitoreo básico.

---

# SECCIÓN K — PRE-DEPLOYMENT CHECKLIST

---

## 48. Checklist general antes de desplegar

| Validación | Responsable | Obligatorio |
|---|---|---|
| QA aprobado | QA Lead | Sí |
| No hay bugs críticos | QA Lead | Sí |
| Release registrado | Product Owner | Sí |
| Changelog actualizado | Product Owner | Sí |
| Release notes creadas | Product Owner | Sí |
| Variables configuradas | L3/DevOps | Sí |
| Build frontend exitoso | Frontend/L3 | Sí |
| Build backend exitoso | Backend/L3 | Sí |
| Migraciones probadas | Backend/DBA | Sí |
| Backup previo | DBA/L3 | Sí en demo/QA/staging/prod |
| Seeds correctos por ambiente | Backend/DBA | Sí |
| CORS configurado | Seguridad/L3 | Sí |
| Rate limit configurado | Seguridad/L3 | Sí |
| Swagger protegido | Backend/L3 | Sí |
| Upload path validado | Backend/L3 | Sí |
| Smoke test definido | QA | Sí |
| Rollback plan listo | L3/DevOps | Sí |

---

## 49. Checklist específico de seguridad pre-deployment

| Validación | Obligatorio |
|---|---|
| JWT secrets no son default | Sí |
| Passwords no están en logs | Sí |
| `.env` real fuera de git | Sí |
| CORS no usa `*` en producción | Sí |
| Swagger protegido/deshabilitado en producción | Sí |
| Rate limit auth activo | Sí |
| Errores sin stack trace en producción | Sí |
| Audit log activo | Sí |
| Roles y permisos cargados | Sí |
| Scopes probados | Sí |
| Upload seguro | Sí |
| Archivos ejecutables bloqueados | Sí |
| Exportaciones auditadas | Sí |

---

## 50. Checklist específico financiero pre-deployment

| Validación | Obligatorio |
|---|---|
| Pagos manuales probados | Sí |
| Confirmación de pago probada | Sí |
| Rechazo con motivo probado | Sí |
| Estado financiero de orden probado | Sí |
| Reglas de comisión cargadas | Sí |
| Cálculo de comisión probado | Sí |
| Neto proveedor no negativo | Sí |
| Cliente no ve comisiones internas | Sí |
| Tienda ve solo sus comisiones | Sí |
| Audit log financiero probado | Sí |

---

# SECCIÓN L — DEPLOYMENT CHECKLIST

---

## 51. Pasos de despliegue general

```txt
1. Confirmar release aprobado
2. Confirmar ventana de despliegue
3. Crear backup previo
4. Descargar/actualizar código
5. Instalar dependencias
6. Build backend
7. Build frontend
8. Ejecutar migraciones
9. Ejecutar seeds permitidos por ambiente
10. Reiniciar backend
11. Publicar frontend
12. Validar health check
13. Validar login
14. Validar flujo crítico
15. Monitorear logs
16. Registrar resultado
```

---

## 52. Checklist durante despliegue

| Paso | Resultado esperado | Estado |
|---|---|---|
| Backup realizado | Archivo backup generado | Pendiente |
| Código actualizado | Versión correcta | Pendiente |
| Dependencias instaladas | Sin errores | Pendiente |
| Backend build | Exitoso | Pendiente |
| Frontend build | Exitoso | Pendiente |
| Migraciones | Exitosas | Pendiente |
| Seeds permitidos | Exitosos | Pendiente |
| Backend iniciado | Servicio activo | Pendiente |
| Frontend publicado | Sitio carga | Pendiente |
| Health check | 200 OK | Pendiente |
| Smoke test | PASS | Pendiente |
| Logs revisados | Sin errores críticos | Pendiente |

---

# SECCIÓN M — POST-DEPLOYMENT CHECKLIST

---

## 53. Smoke test post-deployment

| Prueba | Resultado esperado | Obligatorio |
|---|---|---|
| Home carga | 200 / UI visible | Sí |
| Backend health | 200 OK | Sí |
| Login admin demo | Exitoso en demo/QA | Sí |
| Login cliente demo | Exitoso en demo/QA | Sí |
| Buscar servicio | Resultados o empty controlado | Sí |
| Crear cotización | Funciona si demo/QA | Sí para demo |
| Responder cotización | Funciona si demo/QA | Sí para demo |
| Crear orden | Funciona si demo/QA | Sí para demo |
| Registrar pago | Funciona si demo/QA | Sí para demo |
| Confirmar pago | Funciona si demo/QA | Sí para demo |
| Audit log | Evento generado | Sí |
| Dashboard admin | Carga | Sí |
| Swagger | Accesible/protegido según ambiente | Sí |

---

## 54. Monitoreo post-deployment inmediato

Durante las primeras horas posteriores al despliegue, revisar:

1. Errores 500.
2. Errores 401/403 anormales.
3. Fallos de login.
4. Fallos en búsqueda.
5. Fallos en cotizaciones.
6. Fallos en órdenes.
7. Fallos en pagos.
8. Fallos en comisiones.
9. Fallos en upload/download.
10. Errores de base de datos.
11. Uso de CPU/memoria.
12. Tiempo de respuesta API.
13. Logs de auditoría.
14. Tickets nuevos.
15. Feedback de usuarios demo.

---

## 55. Criterio de éxito post-deployment

Un despliegue se considera exitoso cuando:

1. Frontend carga correctamente.
2. Backend responde health check.
3. MySQL está conectado.
4. Login funciona.
5. Flujo crítico probado funciona.
6. No hay errores 500 críticos.
7. No hay bugs SEV-1 nuevos.
8. Audit log funciona.
9. Reportes básicos cargan.
10. No hay fugas de datos por scope.
11. Release notes están registradas.
12. Changelog actualizado.

---

# SECCIÓN N — ROLLBACK Y RECUPERACIÓN

---

## 56. Principios de rollback

1. Todo despliegue debe tener plan de rollback.
2. El rollback debe ser probado si el cambio es crítico.
3. Rollback de código no siempre implica rollback de base de datos.
4. Migraciones destructivas deben evitarse en MVP.
5. Si una migración no es reversible, debe documentarse.
6. Antes de rollback, preservar logs y evidencia.
7. Rollback por seguridad o datos debe clasificarse como incidente.
8. El rollback debe registrarse en changelog.

---

## 57. Criterios para activar rollback

Activar rollback si ocurre:

1. Sistema no inicia después del despliegue.
2. Backend health check falla.
3. Frontend no carga.
4. Login falla para todos.
5. Flujo principal queda bloqueado.
6. Pagos no funcionan.
7. Comisiones incorrectas generalizadas.
8. Fuga de datos por scope.
9. Errores 500 críticos generalizados.
10. Migración rompe datos críticos.
11. Auditoría crítica deja de funcionar.
12. Upload/download crítico deja de funcionar.

---

## 58. Flujo de rollback

```txt
Detectar falla crítica
  ↓
Clasificar severidad
  ↓
Preservar evidencia
  ↓
Notificar responsables
  ↓
Detener despliegue si sigue en curso
  ↓
Restaurar versión anterior de backend/frontend
  ↓
Evaluar necesidad de rollback DB
  ↓
Restaurar backup si aplica
  ↓
Ejecutar smoke test
  ↓
Registrar rollback en changelog
  ↓
Abrir bug o incidente
```

---

## 59. Rollback frontend

| Paso | Acción |
|---|---|
| 1 | Identificar versión frontend anterior |
| 2 | Restaurar build anterior |
| 3 | Confirmar API base URL |
| 4 | Publicar build anterior |
| 5 | Validar home/login/search |
| 6 | Revisar consola/logs |

---

## 60. Rollback backend

| Paso | Acción |
|---|---|
| 1 | Identificar versión backend anterior |
| 2 | Detener servicio actual |
| 3 | Restaurar build/imagen anterior |
| 4 | Confirmar variables entorno |
| 5 | Iniciar servicio anterior |
| 6 | Validar health check |
| 7 | Validar endpoints críticos |

---

## 61. Rollback base de datos

| Paso | Acción |
|---|---|
| 1 | Confirmar si rollback DB es necesario |
| 2 | Preservar backup actual post-fallo |
| 3 | Identificar backup previo válido |
| 4 | Restaurar en ambiente controlado si es posible |
| 5 | Validar integridad |
| 6 | Ejecutar restauración autorizada |
| 7 | Ejecutar smoke test |
| 8 | Registrar pérdida de datos si aplica |

Advertencia:

```txt
Rollback de base de datos puede implicar pérdida de datos recientes. Debe ser aprobado por responsable técnico y de negocio.
```

---

# SECCIÓN O — BACKUPS

---

## 62. Estrategia de backup por ambiente

| Ambiente | DB backup | Files backup | Frecuencia sugerida |
|---|---|---|---|
| Local | Opcional | Opcional | Manual |
| Demo | Recomendado | Recomendado | Diario o antes de release |
| QA | Recomendado | Recomendado | Antes de pruebas críticas |
| Staging | Sí | Sí | Diario |
| Producción | Sí obligatorio | Sí obligatorio | Diario mínimo / más frecuente futuro |

---

## 63. Backup antes de release

Antes de desplegar en Demo/QA/Staging/Producción:

1. Backup de MySQL.
2. Backup de archivos/documentos.
3. Backup de `.env` seguro si aplica.
4. Registrar timestamp.
5. Registrar versión actual.
6. Confirmar que backup existe.
7. Confirmar que backup no está vacío.
8. Guardar fuera de carpeta pública.

---

## 64. Comando referencial backup MySQL

```bash
mysqldump -u marketplace_user -p marketplace_logistico_tos > backup_marketplace_logistico_YYYYMMDD_HHMM.sql
```

---

## 65. Comando referencial restauración MySQL

```bash
mysql -u marketplace_user -p marketplace_logistico_tos < backup_marketplace_logistico_YYYYMMDD_HHMM.sql
```

---

## 66. Checklist de backup

| Validación | Obligatorio |
|---|---|
| Backup generado | Sí |
| Backup con timestamp | Sí |
| Backup no vacío | Sí |
| Backup protegido | Sí |
| Backup fuera del web root | Sí |
| Backup documentado | Sí |
| Restauración probada periódicamente | Sí en staging/prod, recomendado demo |

---

# SECCIÓN P — SEGURIDAD DE DESPLIEGUE

---

## 67. Hardening mínimo MVP

| Control | Obligatorio |
|---|---|
| HTTPS | Sí en demo pública/prod |
| CORS restringido | Sí |
| Rate limit auth | Sí |
| JWT secrets fuertes | Sí |
| Errores sin stack trace | Sí |
| `.env` fuera de git | Sí |
| Swagger protegido | Sí |
| Upload seguro | Sí |
| Logs sin secretos | Sí |
| Audit log activo | Sí |
| Backups protegidos | Sí |
| Acceso servidor restringido | Recomendado |
| Usuario DB con mínimos privilegios | Recomendado |
| Firewall básico | Recomendado |

---

## 68. Checklist seguridad post-deployment

| Validación | Resultado esperado |
|---|---|
| Endpoint privado sin token | 401 |
| Endpoint sin permiso | 403 |
| Scope cliente | No ve datos ajenos |
| Scope tienda | No ve otra tienda |
| Auditor | Solo lectura |
| Upload `.exe` | Rechazado |
| Exportar sin permiso | 403 |
| Exportar sin motivo | 400 |
| Confirmar pago sin permiso | 403 |
| Audit log sin secretos | Correcto |

---

# SECCIÓN Q — MONITOREO Y LOGS

---

## 69. Monitoreo mínimo post-release

| Métrica | Responsable | Acción si falla |
|---|---|---|
| Frontend disponible | L3/Operaciones | Revisar hosting/build |
| Backend health | L3/Operaciones | Revisar servicio/API |
| MySQL conexión | L3/DBA | Revisar DB/credenciales |
| Errores 500 | L3 | Revisar logs |
| Login fallido masivo | Seguridad | Revisar auth/rate limit |
| Errores 403 inusuales | Seguridad/L3 | Revisar permisos/scopes |
| Tiempo respuesta API | L3 | Revisar DB/API |
| Fallos upload | L3 | Revisar storage/permisos |
| Pagos pendientes anómalos | Finanzas | Revisar flujo pagos |
| Audit logs críticos | Auditoría | Revisar eventos |

---

## 70. Logs que deben revisarse después del despliegue

1. Logs backend.
2. Logs de errores API.
3. Logs de auth.
4. Logs de base de datos.
5. Logs de upload/documentos.
6. Logs de pagos.
7. Logs de comisiones.
8. Audit logs críticos.
9. Logs de exportaciones.
10. Logs del servidor/reverse proxy.

---

## 71. Alertas mínimas sugeridas

| Alerta | Condición |
|---|---|
| Backend down | Health check falla |
| DB down | Health DB falla |
| Error 500 alto | Más de X errores en Y minutos |
| Login fallido alto | Más de X intentos fallidos |
| Pago error | Confirmación de pago falla |
| Comisión error | Cálculo falla |
| Upload error | Múltiples fallos de archivo |
| Scope violation | Intentos 403 repetidos anormales |
| Backup failed | Backup no se genera |
| Disk high | Uso disco > 80% |

---

# SECCIÓN R — DOCUMENTACIÓN DE RELEASE

---

## 72. Documentos requeridos por release

| Documento | Obligatorio |
|---|---|
| Release notes | Sí |
| QA release report | Sí |
| Changelog actualizado | Sí |
| Deployment checklist completado | Sí |
| Rollback plan | Sí |
| Variables validadas | Sí |
| Backup confirmado | Sí en ambientes con data |
| Smoke test report | Sí |
| Incidentes conocidos | Sí si existen |
| Limitaciones del release | Sí |

---

## 73. Plantilla de release notes

```md
# Release Notes — [VERSIÓN]

| Campo | Valor |
|---|---|
| Versión | vX.Y.Z |
| Fecha | YYYY-MM-DD |
| Ambiente | Demo / QA / Staging / Producción |
| Tipo de release | Demo / MVP / Hotfix / Técnico / Funcional |
| Responsable | Nombre/Rol |
| Estado | Draft / Released / Rolled Back |

## 1. Resumen

[Resumen del release]

## 2. Funcionalidades incluidas

1. Funcionalidad 1
2. Funcionalidad 2

## 3. Cambios técnicos

1. Cambio 1
2. Cambio 2

## 4. Migraciones incluidas

1. Migración 1
2. Migración 2

## 5. Bugs corregidos

1. Bug 1
2. Bug 2

## 6. Exclusiones del MVP

1. Sin integración Odoo real
2. Sin pasarela real
3. Sin BI externo

## 7. Riesgos conocidos

1. Riesgo 1
2. Riesgo 2

## 8. Validación QA

[PASS / FAIL / PARTIAL]

## 9. Rollback plan

[Resumen]
```

---

## 74. Plantilla de deployment report

```md
# Deployment Report — [VERSIÓN]

| Campo | Valor |
|---|---|
| Versión | vX.Y.Z |
| Ambiente | Demo / QA / Staging / Producción |
| Fecha inicio | YYYY-MM-DD HH:mm |
| Fecha fin | YYYY-MM-DD HH:mm |
| Responsable | Nombre/Rol |
| Estado | SUCCESS / FAILED / ROLLED_BACK |

## 1. Checklist pre-deployment

| Item | Estado |
|---|---|
| QA aprobado | PASS/FAIL |
| Backup realizado | PASS/FAIL |
| Variables validadas | PASS/FAIL |

## 2. Pasos ejecutados

1. Paso 1
2. Paso 2

## 3. Migraciones ejecutadas

1. Migración 1
2. Migración 2

## 4. Smoke test

| Prueba | Resultado |
|---|---|
| Health check | PASS |
| Login | PASS |

## 5. Incidentes

[Incidentes detectados]

## 6. Resultado final

[SUCCESS / FAILED / ROLLED_BACK]
```

---

# SECCIÓN S — PLAN DE DESPLIEGUE POR SPRINT

---

## 75. Sprint 01 — Despliegue arquitectura base

Validar despliegue de:

1. Frontend inicial.
2. Backend inicial.
3. Health endpoint.
4. MySQL conexión.
5. README básico.

Criterio:

```txt
El sistema arranca y responde health check.
```

---

## 76. Sprint 02 — Despliegue seguridad base

Validar despliegue de:

1. Auth.
2. JWT.
3. RBAC.
4. Scopes iniciales.
5. Login/register.
6. 401/403.

Criterio:

```txt
Ningún endpoint privado queda expuesto sin token.
```

---

## 77. Sprint 03 — Despliegue catálogos y seeds

Validar despliegue de:

1. Catálogos.
2. Roles.
3. Permisos.
4. Usuarios demo.
5. Dashboards iniciales.

Criterio:

```txt
Seeds cargan correctamente en ambientes permitidos.
```

---

## 78. Sprint 04 — Despliegue home y diseño

Validar:

1. Home público.
2. Cards.
3. Filtros visuales.
4. Responsive.
5. Assets.

---

## 79. Sprint 05 a Sprint 08 — Despliegue marketplace comercial

Validar:

1. Tiendas.
2. Servicios.
3. Búsqueda.
4. Cotizaciones.
5. Perfiles públicos.
6. Scopes tienda/cliente.

---

## 80. Sprint 09 a Sprint 12 — Despliegue flujo comercial-financiero

Validar:

1. Órdenes.
2. Pagos.
3. Comisiones.
4. Auditoría.
5. Notificaciones.
6. Dashboards básicos.

Este bloque habilita la demo temprana.

---

## 81. Sprint 13 a Sprint 17 — Despliegue operación logística

Validar:

1. Documentos.
2. TOS.
3. Transporte.
4. Almacenamiento.
5. Inspecciones.
6. Evidencias.
7. Auditoría operativa.

---

## 82. Sprint 18 a Sprint 20 — Despliegue reportes y soporte

Validar:

1. Dashboards por perfil.
2. Reportes financieros.
3. Exportaciones.
4. Auditoría de exportación.
5. Soporte/tickets.

---

## 83. Sprint 21 a Sprint 22 — Despliegue final MVP

Validar:

1. QA integral.
2. Swagger.
3. README.
4. Hardening.
5. Seeds finales.
6. Demo final.
7. Release notes.
8. Operación preparada.

---

# SECCIÓN T — CRITERIOS DE ACEPTACIÓN DEL DESPLIEGUE

---

## 84. Criterios de aceptación para despliegue demo

El despliegue demo se acepta cuando:

1. Home carga.
2. API responde health check.
3. MySQL conecta.
4. Seeds demo cargan.
5. Login demo funciona.
6. Búsqueda funciona.
7. Tienda demo visible.
8. Servicio demo visible.
9. Cotización demo se puede solicitar.
10. Tienda puede responder.
11. Cliente puede aprobar.
12. Orden se crea.
13. Pago se registra.
14. Admin confirma pago.
15. Comisión se calcula.
16. Audit log se genera.
17. No hay bugs críticos.
18. Release notes existen.

---

## 85. Criterios de aceptación para despliegue MVP completo

El despliegue MVP se acepta cuando:

1. Todo lo de demo pasa.
2. Documentos funcionan.
3. TOS básico funciona.
4. Transporte funciona.
5. Almacenamiento funciona.
6. Inspecciones funcionan.
7. Reportes funcionan.
8. Exportaciones funcionan.
9. Soporte funciona si está incluido.
10. Swagger está actualizado.
11. README permite levantar el sistema.
12. Backups están configurados.
13. Smoke test post-deploy pasa.
14. QA release report está aprobado.
15. Operaciones tiene runbooks mínimos.
16. No hay SEV-1 abiertos.

---

# SECCIÓN U — RIESGOS DE DESPLIEGUE

---

## 86. Riesgos principales

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Variables mal configuradas | HIGH | Checklist variables por ambiente |
| Frontend apunta a API incorrecta | HIGH | Validar `VITE_API_BASE_URL` |
| Migración rompe schema | CRITICAL | Backup + prueba QA |
| Seeds demo en producción | HIGH | Bloquear por `NODE_ENV` |
| Swagger expuesto públicamente | MEDIUM/HIGH | Proteger o deshabilitar |
| CORS abierto inseguro | HIGH | Lista blanca por ambiente |
| JWT secrets default | CRITICAL | Validar secrets antes de iniciar |
| Upload path sin permisos | MEDIUM | Checklist storage |
| Fuga de datos por scope | CRITICAL | QA seguridad post-deploy |
| Pago/comisión incorrecta | CRITICAL | QA financiero pre-release |
| Rollback no probado | HIGH | Plan rollback obligatorio |
| Backup no válido | CRITICAL | Validar backup y restauración |

---

# SECCIÓN V — PROMPTS PARA ANTIGRAVITY

---

## 87. Prompt maestro para preparar despliegue

```text
Actúa como DevOps engineer, backend architect Nest.js, frontend architect React.js, database architect MySQL, QA lead y release manager del Marketplace Logístico TOS.

Usa `36_DEPLOYMENT_MASTER_PLAN.md`, `35_QA_MASTER_TEST_PLAN.md`, `34_CHANGELOG_AND_DECISION_LOG.md`, `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md` y `37_OPERATIONS_AND_SUPPORT_PLAN.md` para preparar el despliegue del siguiente release:

Release:
[PEGAR RELEASE]

Ambiente destino:
[LOCAL / DEMO / QA / STAGING / PROD]

Debes validar:
1. QA aprobado.
2. Bugs críticos cerrados.
3. Variables de entorno.
4. Build frontend.
5. Build backend.
6. Migraciones.
7. Seeds permitidos.
8. Backup previo.
9. CORS.
10. Rate limit.
11. Swagger.
12. Upload path.
13. Audit log.
14. Rollback plan.
15. Smoke test.
16. Release notes.

Entrega:
1. Checklist pre-deployment.
2. Plan de despliegue paso a paso.
3. Riesgos.
4. Rollback plan.
5. Criterio de aceptación.
```

---

## 88. Prompt para validar variables de entorno

```text
Actúa como security engineer y DevOps del Marketplace Logístico TOS.

Valida las variables de entorno para el ambiente:
[AMBIENTE]

Usa `36_DEPLOYMENT_MASTER_PLAN.md` y `26_SECURITY_MASTER_PLAN.md`.

Verifica:
1. Variables frontend.
2. Variables backend.
3. DB config.
4. JWT secrets.
5. CORS.
6. Rate limit.
7. Swagger.
8. Upload path.
9. Logs.
10. Audit log.
11. Ausencia de secretos en repositorio.
12. Variables prohibidas en frontend.

Entrega:
1. Tabla PASS/FAIL.
2. Riesgos críticos.
3. Correcciones requeridas.
```

---

## 89. Prompt para ejecutar checklist post-deployment

```text
Actúa como QA lead y release manager.

Ejecuta el checklist post-deployment del Marketplace Logístico TOS para el ambiente:
[AMBIENTE]

Release:
[VERSIÓN]

Valida:
1. Home.
2. Health check backend.
3. MySQL conexión.
4. Login.
5. Búsqueda.
6. Cotización.
7. Orden.
8. Pago.
9. Comisión.
10. Audit log.
11. Dashboard.
12. Swagger.
13. Logs técnicos.
14. Errores 500.
15. Scopes básicos.

Entrega:
1. Resultado PASS/FAIL por prueba.
2. Bugs encontrados.
3. Severidad.
4. Decisión: DEPLOYMENT ACCEPTED, REJECTED o ROLLBACK REQUIRED.
```

---

## 90. Prompt para preparar rollback

```text
Actúa como DevOps engineer y release manager.

Prepara un plan de rollback para el siguiente release del Marketplace Logístico TOS:

Release:
[VERSIÓN]
Ambiente:
[AMBIENTE]

Debes definir:
1. Versión anterior estable.
2. Backup previo disponible.
3. Rollback frontend.
4. Rollback backend.
5. Rollback database si aplica.
6. Riesgo de pérdida de datos.
7. Validaciones post-rollback.
8. Responsables.
9. Criterio para activar rollback.
10. Registro en changelog.

Entrega:
1. Plan paso a paso.
2. Riesgos.
3. Checklist de ejecución.
```

---

## 91. Prompt para generar release notes

```text
Genera las release notes del Marketplace Logístico TOS para el release:
[VERSIÓN]

Usa:
- `34_CHANGELOG_AND_DECISION_LOG.md`
- `35_QA_MASTER_TEST_PLAN.md`
- `36_DEPLOYMENT_MASTER_PLAN.md`

Incluye:
1. Resumen.
2. Ambiente.
3. Funcionalidades incluidas.
4. Cambios técnicos.
5. Migraciones.
6. Bugs corregidos.
7. Exclusiones MVP.
8. Riesgos conocidos.
9. QA status.
10. Rollback plan.
11. Estado final.

Reglas:
1. No afirmar Odoo real.
2. No afirmar pasarela real.
3. No afirmar BI externo.
4. Indicar exclusiones claramente.
```

---

## 92. Prompt para generar deployment report

```text
Genera el Deployment Report del Marketplace Logístico TOS.

Release:
[VERSIÓN]
Ambiente:
[AMBIENTE]
Fecha:
[FECHA]

Incluye:
1. Checklist pre-deployment.
2. Pasos ejecutados.
3. Build frontend/backend.
4. Migraciones ejecutadas.
5. Seeds ejecutados.
6. Backup realizado.
7. Smoke test.
8. Incidentes.
9. Logs relevantes.
10. Decisión final.

Estado posible:
SUCCESS / FAILED / ROLLED_BACK / ACCEPTED_WITH_OBSERVATIONS
```

---

# SECCIÓN W — CHECKLIST DE USO DEL DOCUMENTO

---

## 93. Checklist de uso

- [ ] Guardar este documento como `36_DEPLOYMENT_MASTER_PLAN.md`.
- [ ] Colocarlo dentro de `/docs`.
- [ ] Referenciarlo desde `00_MASTER_PLAN_MARKETPLACE_LOGISTICS.md`.
- [ ] Usarlo antes de release demo.
- [ ] Usarlo antes de release MVP.
- [ ] Usarlo junto a `35_QA_MASTER_TEST_PLAN.md`.
- [ ] Usarlo junto a `34_CHANGELOG_AND_DECISION_LOG.md`.
- [ ] Usarlo junto a `33_ANTIGRAVITY_ARTIFACTS_CHECKLIST.md`.
- [ ] Usarlo junto a `37_OPERATIONS_AND_SUPPORT_PLAN.md`.
- [ ] Validar variables antes de desplegar.
- [ ] Validar migraciones antes de desplegar.
- [ ] Crear backup antes de desplegar.
- [ ] Ejecutar smoke test después de desplegar.
- [ ] Registrar release notes.
- [ ] Registrar deployment report.
- [ ] Tener rollback plan.
- [ ] Confirmar que no se despliegan integraciones fuera del MVP.

---

## 94. Estado del documento

| Campo | Estado |
|---|---|
| Documento creado | Sí |
| Pendiente de revisión funcional | Sí |
| Pendiente de revisión técnica backend | Sí |
| Pendiente de revisión frontend | Sí |
| Pendiente de revisión database | Sí |
| Pendiente de revisión seguridad | Sí |
| Pendiente de revisión QA | Sí |
| Pendiente de revisión operaciones | Sí |
| Pendiente de validación con roadmap | Sí |
| Listo para usar en Antigravity | Sí, como plan maestro inicial de despliegue |

---

# Fin del documento

