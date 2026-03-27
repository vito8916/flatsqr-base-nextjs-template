# PRD: FLATSQR Next.js Base Template

## 1. Documento

- Estado: Draft v1
- Tipo: PRD + Implementation Spec
- Objetivo: servir como documento base para humanos y AI Code Agents
- Proyecto: `flatsqr-base-nextjs-template`
- Stack base actual detectado: `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS 4`, `shadcn`, `react-hook-form`, `zod`, `sonner`, `next-themes`

## 2. Vision del producto

Crear un template general de `Next.js` que permita iniciar nuevos proyectos con un simple `git clone`, evitando reinstalar y reconfigurar manualmente dependencias, estructura, UI base, SEO y archivos generales.

El template debe sentirse listo para produccion desde el dia cero, pero sin forzar decisiones de infraestructura que no siempre aplican. La base debe ser potente, minimalista, moderna y extensible.

## 3. Problema

Hoy, al iniciar un nuevo proyecto con `Next.js`, se pierde tiempo en:

- reinstalar dependencias recurrentes
- recrear configuraciones comunes
- volver a montar una landing page base
- rehacer patrones de formularios, validacion, theming y componentes UI
- reconfigurar SEO, analytics y archivos generales

Esto agrega friccion innecesaria y retrasa el inicio del trabajo real del producto.

## 4. Resultado deseado

Despues de clonar el repositorio, cualquier proyecto nuevo debe arrancar con:

- una base tecnica estable
- una UI moderna y reutilizable
- una landing page completa y editable
- estructura de configuracion general
- SEO listo para usar
- integraciones opcionales desacopladas

## 5. Objetivos

### Objetivos principales

- Reducir a casi cero la configuracion inicial de nuevos proyectos.
- Estandarizar una base reutilizable para productos de `FLATSQR`.
- Incluir el stack frontend que mas se reutiliza.
- Mantener el template agnostico respecto a base de datos, auth y BaaS por defecto.
- Facilitar que un agente de codigo pueda continuar la implementacion sin tener que inferir decisiones clave.

### Objetivos operativos

- `pnpm install` y `pnpm dev` deben ser suficientes para empezar.
- El proyecto debe incluir una landing page production-ready.
- El proyecto debe incluir una capa de SEO configurable.
- El proyecto debe tener convenciones claras de carpetas, configuracion y extensibilidad.

## 6. No objetivos

- No crear un SaaS completo.
- No acoplar el template por defecto a un ORM especifico.
- No acoplar el template por defecto a un proveedor de auth.
- No instalar todas las opciones posibles si no son necesarias para el core.
- No convertir el template en un boilerplate excesivamente complejo.

## 7. Principios del template

- `Clone and build fast`: debe ser util inmediatamente.
- `Production-minded`: no solo demo, sino base realista.
- `Provider-agnostic by default`: integraciones opcionales, no obligatorias.
- `Config-driven`: textos, metadata, links y opciones deben centralizarse.
- `Composable`: piezas pequenas, desacopladas y faciles de reemplazar.
- `Minimal but powerful`: opinionado donde aporta velocidad, flexible donde importa.

## 8. Requerimientos no negociables

### 8.1 SEO ready

El template debe incluir una arquitectura SEO lista para:

- metadata global con `Metadata` API de `Next.js`
- metadata por pagina
- Open Graph
- Twitter cards
- `robots.ts`
- `sitemap.ts`
- canonical URLs
- imagen social por defecto
- soporte opcional para:
  - `Vercel Analytics`
  - `Google Analytics`
  - `Facebook Pixel`

Estas integraciones deben activarse por configuracion o variables de entorno, no mediante codigo hardcodeado.

### 8.2 Landing page completa

El template debe traer una landing page funcional, moderna, minimalista y facil de rebrandear.

Secciones minimas:

- navbar
- hero principal
- prueba de valor o propuesta principal
- grid de features
- seccion de beneficios o casos de uso
- social proof o testimonios placeholder
- CTA principal
- FAQ
- contacto o lead form
- footer

La landing no debe parecer un ejemplo generico de IA. Debe ser limpia, elegante y lista para adaptarse rapido a otros proyectos.

### 8.3 Archivos de configuracion general

El template debe incluir archivos y capas base para:

- configuracion del sitio
- variables de entorno
- metadata SEO
- analytics
- feature flags simples
- utilidades compartidas
- validaciones comunes
- documentacion inicial

## 9. Stack base requerido

Estas dependencias o capacidades deben estar listas en el core del template:

- `shadcn/ui` y componentes base realmente utiles
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `date-fns`
- libreria de animaciones: preferentemente `motion` o `framer-motion`
- soporte para data tables, idealmente con `@tanstack/react-table`
- theming con `next-themes`
- feedback UI con `sonner`
- iconografia consistente, por ejemplo `lucide-react`
- utilidades de clases como `clsx`, `tailwind-merge`, `class-variance-authority`

## 10. Requerimientos opcionales

Estos bloques deben ser opcionales y desacoplados del core.

### 10.1 ORM

Opciones soportadas a futuro:

- `Prisma`
- `Drizzle`
- `Supabase`

Regla:

- no instalar un ORM por defecto en el template general
- preparar una arquitectura para agregar uno sin refactor grande
- documentar como activar cada opcion

### 10.2 BaaS / backend managed

Opciones soportadas a futuro:

- `Supabase`
- `Convex`
- `Neon`

Regla:

- no acoplar la app base a ninguno
- exponer puntos claros de integracion

### 10.3 Auth

Opciones soportadas a futuro:

- `Supabase Auth`
- `Better Auth`

Regla:

- el template base no debe romper si no hay auth
- auth debe vivir detras de una capa clara de adaptacion

## 11. Arquitectura objetivo

### 11.1 Core obligatorio

El core del template debe incluir:

- `app/` con App Router
- `components/` segmentado por dominio y por `ui`
- `lib/` para helpers, config, adapters y validaciones
- `hooks/` para hooks reutilizables
- `public/` para assets base
- `doc/` para documentacion operativa y de producto

### 11.2 Capas recomendadas

- `lib/config/`: configuracion central del sitio
- `lib/seo/`: helpers SEO y metadata builders
- `lib/analytics/`: adapters para analytics
- `lib/env/`: validacion de variables de entorno
- `lib/forms/` o `lib/validations/`: schemas y helpers
- `components/marketing/`: componentes de landing
- `components/shared/`: componentes cross-app
- `content/` o `lib/content/`: copy, links y datos editables de la landing

### 11.3 Filosofia de extensibilidad

Todo proveedor opcional debe entrar mediante:

- adapter
- provider wrapper
- config
- feature flag o env flag

Nunca debe requerirse reestructurar el proyecto entero para agregar una opcion como `Prisma` o `Better Auth`.

## 12. Estado actual y gaps detectados

### Ya existe

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `shadcn`
- `react-hook-form`
- `zod`
- `next-themes`
- `sonner`
- layout base

### Falta o esta incompleto

- landing page real
- SEO production-ready
- adapters de analytics
- `date-fns`
- data table base
- libreria de motion
- config central del sitio
- env validation formal
- documentacion del template
- arquitectura clara para modulos opcionales

## 13. Definicion funcional del template v1

La primera version util del template debe incluir:

### Experiencia inicial

- clonar
- instalar dependencias
- correr localmente
- editar textos e identidad desde un solo lugar

### UI y frontend

- design system base con `shadcn`
- componentes compartidos de alta reutilizacion
- pagina principal lista para marketing
- formularios con validacion
- feedback visual y tema claro/oscuro
- tabla reusable para dashboards o backoffice
- animaciones sutiles y modernas

### SEO y growth

- metadata global editable
- metadata por pagina
- OG defaults
- sitemap
- robots
- analytics adapters
- hooks o helpers para eventos basicos

### DX

- convenciones documentadas
- archivos de ejemplo
- variables de entorno documentadas
- README enfocado en uso real del template

## 14. Archivos objetivo recomendados

Estos archivos o equivalentes deberian existir en la version madura del template:

- `README.md`
- `.env.example`
- `app/layout.tsx`
- `app/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `lib/config/site.ts`
- `lib/config/marketing.ts`
- `lib/env.ts`
- `lib/seo/metadata.ts`
- `lib/analytics/index.ts`
- `lib/analytics/providers/`
- `lib/validations/`
- `components/marketing/`
- `components/shared/`
- `components/ui/`

## 15. Requisitos de configuracion centralizada

El template debe permitir cambiar rapidamente:

- nombre del proyecto
- descripcion
- dominio base
- enlaces sociales
- CTA principal
- contenido de la landing
- imagen social
- proveedor de analytics activo
- flags de features

Sin necesidad de buscar texto hardcodeado por toda la app.

## 16. Reglas para modulos opcionales

### Estrategia recomendada

No incluir todas las opciones instaladas de fabrica. En su lugar:

- dejar el core limpio
- definir interfaces o puntos de extension
- documentar recipes de instalacion
- considerar subtemplates, ramas o scripts de bootstrap en el futuro

### Ejemplo de criterio

- `core`: UI, forms, SEO, marketing, analytics abstraction
- `optional-db`: `Prisma`, `Drizzle`, `Supabase`
- `optional-auth`: `Better Auth`, `Supabase Auth`
- `optional-baas`: `Supabase`, `Convex`, `Neon`

## 17. Criterios de aceptacion

El template se considera exitoso si cumple lo siguiente:

1. Un proyecto nuevo puede arrancar con `git clone`, `pnpm install` y `pnpm dev`.
2. La home inicial ya funciona como landing page usable y presentable.
3. El proyecto incluye SEO base real, no placeholders vacios.
4. El contenido principal puede editarse desde archivos centralizados.
5. Formularios, tablas, toast, tema y validacion ya estan listos.
6. Las integraciones opcionales no contaminan ni rompen el core.
7. Un AI Code Agent puede continuar el desarrollo siguiendo este PRD sin tener que adivinar arquitectura ni prioridades.

## 18. Plan de implementacion recomendado

### Fase 1. Core del template

- consolidar dependencias base del frontend
- normalizar estructura de carpetas
- crear configuracion central del sitio
- reemplazar placeholders del repo

### Fase 2. Landing page

- definir narrativa base
- implementar secciones de marketing
- hacer el contenido editable desde config
- asegurar calidad visual alta

### Fase 3. SEO y analytics

- metadata global
- helpers de metadata por pagina
- `robots.ts`
- `sitemap.ts`
- adapters de analytics activables por env

### Fase 4. DX y documentacion

- `.env.example`
- README real del template
- guias de uso
- convenciones de extensibilidad

### Fase 5. Opcionales

- recipes para ORM
- recipes para auth
- recipes para BaaS

## 19. Instrucciones explicitas para AI Code Agents

Si eres un agente implementando este template, debes asumir estas reglas:

1. Prioriza el `core reusable` antes que integraciones especificas.
2. No instales por defecto `Prisma`, `Drizzle`, `Supabase`, `Convex`, `Neon` o `Better Auth` salvo que el usuario lo pida.
3. El template debe quedar limpio, opinionado y facil de rebrandear.
4. Evita hardcodear copy, metadata o links en multiples archivos.
5. Toda decision de proveedor debe quedar aislada detras de config, adapters o wrappers.
6. La landing page debe sentirse de producto real, no de demo tecnica.
7. SEO debe implementarse con primitives nativas de `Next.js` y configuracion centralizada.
8. Cualquier dependencia agregada al core debe justificar su reutilizacion frecuente.
9. Favorece componentes reutilizables sobre implementaciones one-off.
10. Si una parte es opcional, preparala como extension y documentala, no la impongas.

## 20. Backlog inicial sugerido

- agregar `date-fns`
- agregar soporte base de data table
- agregar libreria de motion
- crear `site config`
- crear `env validation`
- crear `analytics abstraction`
- implementar landing page completa
- reemplazar metadata placeholder
- agregar `robots.ts`
- agregar `sitemap.ts`
- reescribir `README.md`
- documentar recipes opcionales

## 21. Definicion de exito

Este template habra cumplido su objetivo cuando permita iniciar un proyecto nuevo sin sentir que primero hay que reconstruir la base del proyecto.

El valor principal no sera solo ahorrar minutos de instalacion, sino estandarizar una forma de arrancar rapido con calidad, consistencia y criterio tecnico.
