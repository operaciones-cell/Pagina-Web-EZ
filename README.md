# Eliana Zaia — Sitio Web Oficial

> **Para Ángelo:** Lee este documento completo antes de iniciar. Tiene todo el contexto de lo que se construyó, por qué, y qué sigue.

---

## Contexto del Proyecto

**Cliente:** Eliana Zaia — Fábrica de postres artesanales premium, Zipaquirá, Colombia
**Dominio:** `eliana-zaia.com` (DNS en Cloudflare, hosting en Vercel)
**Sitio en vivo:** https://eliana-zaia-web.vercel.app
**Dashboard Vercel:** https://vercel.com/juan-5212s-projects/eliana-zaia-web
**Contacto:** juan@elianazaia.com / WhatsApp: +57 321 460 1590

---

## Stack Tecnológico

| Tecnología | Uso | Por qué |
|---|---|---|
| **Next.js 16** (App Router) | Framework principal | SSG, SEO, performance |
| **TypeScript** | Todo el código | Tipado estricto |
| **Tailwind CSS v4** | Estilos | Utility-first, tokens de diseño |
| **Framer Motion** | Animaciones UI | ScrollReveal, PageTransition |
| **GSAP + ScrollTrigger** | Animaciones avanzadas | Manifesto, DeepDive |
| **Three.js** | Loader de partículas EZ | Efecto premium de entrada |
| **next-mdx-remote** | Blog | Artículos en MDX |
| **Vercel** | Hosting | Free tier, edge functions |
| **Cloudflare** | DNS + CDN | Ya configurado por el cliente |
| **n8n** | Webhook de formularios | El cliente ya tiene instancia corriendo |

### Comandos esenciales
```bash
npm install          # instala dependencias
npm run dev          # servidor local → http://localhost:3000
npm run build        # build de producción (verifica errores antes de deploy)
vercel --prod        # deploy a producción
```

---

## Arquitectura del Proyecto

```
eliana-zaia-web/
├── app/                        # App Router de Next.js
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Layout global (Navbar, Footer, Cursor, WhatsApp)
│   ├── globals.css             # Tokens de diseño (colores, fuentes)
│   ├── api/contact/route.ts    # API endpoint → n8n webhook
│   ├── blog/                   # Blog (estructura lista, sin artículos)
│   ├── contacto/               # Formulario de contacto general
│   ├── donde-comprar/          # Logos de cadenas aliadas
│   ├── grupo-radici/           # Grupo empresarial Radici
│   ├── nosotros/               # Historia y valores
│   ├── para-empresas/          # Landing B2B principal
│   │   ├── maquila/            # Producción bajo marca blanca
│   │   └── distribucion/       # Ser distribuidor
│   ├── productos/              # Catálogo filtrable (12 productos)
│   │   └── [slug]/             # Páginas individuales SSG
│   ├── quiero-ser-proveedor/   # Formulario para proveedores de insumos
│   ├── robots.ts               # robots.txt autogenerado
│   ├── sitemap.ts              # sitemap.xml autogenerado
│   └── trabaja-con-nosotros/   # Formulario de empleo
│
├── components/
│   ├── forms/                  # 4 formularios + hook compartido + API
│   │   ├── ContactForm.tsx
│   │   ├── B2BForm.tsx
│   │   ├── ProveedorForm.tsx
│   │   ├── EmpleoForm.tsx
│   │   ├── FormField.tsx
│   │   ├── FormSelect.tsx
│   │   └── useContactForm.ts   # Hook: valida y hace POST a /api/contact
│   ├── home/                   # Secciones exclusivas de la homepage
│   │   ├── Loader.tsx          # Three.js: partículas que forman "EZ"
│   │   ├── Manifesto.tsx       # GSAP: texto línea por línea al scroll
│   │   ├── DeepDive.tsx        # GSAP ScrollTrigger: 3 productos featured
│   │   └── AlliesMarquee.tsx   # CSS: marquee infinito de logos aliados
│   ├── layout/
│   │   ├── Navbar.tsx          # Transparente → blur al scroll, hamburger mobile
│   │   └── Footer.tsx          # Dark, links SEO, schema LocalBusiness
│   ├── products/
│   │   ├── ProductCard.tsx     # Card con hover, link a /productos/[slug]
│   │   ├── ProductFilter.tsx   # Filtro por categoría (client component)
│   │   └── RelatedProducts.tsx # 4 productos relacionados
│   ├── seo/
│   │   ├── SchemaOrg.tsx       # Inyecta JSON-LD en <head>
│   │   └── Breadcrumbs.tsx     # Breadcrumbs con schema BreadcrumbList
│   └── ui/
│       ├── ClientProviders.tsx # Wrapper client: cursor + page transitions
│       ├── CustomCursor.tsx    # Cursor dorado (solo desktop, pointer: fine)
│       ├── MagneticButton.tsx  # Botón con efecto magnético hover
│       ├── PageTransition.tsx  # Fade entre rutas con Framer Motion
│       ├── ScrollReveal.tsx    # Wrapper fade-in al entrar en viewport
│       └── WhatsAppFloat.tsx   # Botón flotante WhatsApp (siempre visible)
│
├── content/
│   └── blog/                   # Aquí van los artículos .mdx (vacío por ahora)
│
├── lib/
│   ├── types.ts                # Interfaces TypeScript (Product, Ally, etc.)
│   ├── constants.ts            # TODOS los datos: productos, aliados, grupo, contacto
│   ├── seo.ts                  # Schema.org helpers (Organization, Product, Blog...)
│   ├── blog.ts                 # Utilidades MDX (getAllPosts, getPostBySlug)
│   └── animations.ts           # Variantes de Framer Motion reutilizables
│
├── public/
│   ├── images/products/        # Imágenes extraídas del catálogo PDF (placeholders)
│   ├── images/allies/          # SVGs placeholder para logos aliados
│   └── images/grupo/           # SVGs placeholder para logos grupo Radici
│
├── .env.local                  # Variables de entorno (NO está en git — ver abajo)
├── next.config.ts              # Config Next.js (WebP/AVIF)
└── CLAUDE.md                   # Configuración para Claude Code
```

---

## Variables de Entorno

Crear `.env.local` en la raíz del proyecto (pedir a Juan):

```env
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
NEXT_PUBLIC_WHATSAPP_NUMBER=573214601590
NEXT_PUBLIC_SITE_URL=https://eliana-zaia.com
```

> ⚠️ Este archivo NO está en git (está en `.gitignore`). Pedirle a Juan la URL real del webhook n8n.
> En Vercel también hay que configurar estas variables: Dashboard → proyecto → Settings → Environment Variables.

---

## Flujo de Formularios

Todos los formularios hacen POST a `/api/contact` con un campo `type`:

```
Frontend → POST /api/contact → n8n webhook
                                   ├→ WhatsApp (+57 321 460 1590)
                                   ├→ Email (juan@elianazaia.com)
                                   └→ Google Sheet (pestaña por tipo)
```

| Formulario | Ruta | `type` |
|---|---|---|
| Contacto general | `/contacto` | `"contacto"` |
| B2B | `/para-empresas` | `"b2b"` |
| Maquila | `/para-empresas/maquila` | `"maquila"` |
| Distribución | `/para-empresas/distribucion` | `"distribucion"` |
| Proveedor | `/quiero-ser-proveedor` | `"proveedor"` |
| Empleo | `/trabaja-con-nosotros` | `"empleo"` |

---

## Datos del Negocio (en `lib/constants.ts`)

### Productos (12 total)
Crème Brûlée, Cheesecake, Leche Asada, Tres Leches, Flan de Chocolate, Mosaico, Arroz con Leche, Postre de Natas, Galletas, Gelitas, Flan de Caramelo, Postre de Natas Premium.

Los 3 **featured** (aparecen en Deep Dive de homepage): Crème Brûlée, Cheesecake, Leche Asada.

### Aliados — 8 cadenas
Éxito, Jumbo, PriceSmart, D1, ARA, Mercaldas, Kokoriko, Cencosud.

### Grupo Radici — 5 empresas
Eliana Zaia, El Tinto, EZ Treats (Lima, Perú), Moldeza, Radici Wealth Management.

---

## Diseño Visual

### Paleta de colores (tokens en `globals.css`)
```
--color-bg-dark:        #0A0A0A   (fondo oscuro principal)
--color-bg-warm:        #F5F0EB   (beige cálido)
--color-bg-cream:       #FAF7F2   (crema)
--color-accent-gold:    #C8A96E   (dorado premium — color principal de marca)
--color-accent-caramel: #D4883A   (caramelo)
--color-accent-cocoa:   #4A2C2A   (cacao oscuro)
--color-text-primary:   #1A1A1A
--color-text-light:     #F5F0EB
--color-text-muted:     #6B6B6B
```

### Tipografía
- **Headlines:** Playfair Display (Google Fonts, serif)
- **Body:** Inter (Google Fonts, sans-serif)

---

## Decisiones de Arquitectura Importantes

1. **App Router sobre Pages Router** — Para aprovechar SSG con `generateStaticParams`, layouts anidados y React Server Components.

2. **SSG para productos** — Los 12 slugs se generan en build time. Para cambiar contenido hay que redeploy (o migrar a ISR con `revalidate`).

3. **No hay CMS** — Todo el contenido vive en `lib/constants.ts`. Si el cliente quiere editar sin tocar código, migrar a Contentful o Sanity.

4. **Three.js lazy-loaded** — El loader se importa dinámicamente para no inflar el bundle principal. Hay fallback CSS para mobile y `prefers-reduced-motion`.

5. **GSAP versión npm gratuita** — ScrollTrigger incluido. Suficiente para los efectos actuales.

6. **Imágenes son placeholders** — Las fotos se extrajeron automáticamente del PDF. Juan tiene las fotos originales en alta resolución para reemplazar.

7. **Blog vacío** — Estructura MDX lista en `content/blog/`. Solo hay que agregar archivos `.mdx` con frontmatter correcto.

8. **Sin CAPTCHA** — Rate limiting básico en `/api/contact` (5 req/15min por IP). Suficiente para MVP.

9. **Sin GA4 por ahora** — El cliente decidió agregar analytics después del lanzamiento inicial.

---

## SEO Implementado

- `<html lang="es-CO">` en layout global
- H1 único por página (semántico o `sr-only` en homepage)
- Meta description y Open Graph en cada página
- `sitemap.xml` y `robots.txt` autogenerados por Next.js
- Schema JSON-LD: Organization, Product (x12), Breadcrumbs, ContactPage, BlogPosting
- Canonical URLs
- Fuentes con `display: swap`
- `next/image` con formatos WebP/AVIF automáticos

---

## Deploy

```bash
# El proyecto ya está vinculado a Vercel (carpeta .vercel/)
vercel --prod        # deploy a producción
vercel logs          # ver logs del servidor
```

### Conectar el dominio `eliana-zaia.com`
1. Ir a Vercel Dashboard → proyecto → Settings → Domains
2. Agregar `eliana-zaia.com`
3. Copiar el CNAME o A record que Vercel indique
4. Configurarlo en el panel de Cloudflare (DNS del cliente)

---

## Pendiente — Fase 2 (visual polish)

- [ ] Reemplazar imágenes placeholder con fotos reales (Juan tiene los archivos)
- [ ] Logos reales para aliados y grupo Radici (SVG o PNG)
- [ ] Configurar URL real del webhook n8n en `.env.local` y en Vercel
- [ ] Conectar dominio `eliana-zaia.com` en Vercel + Cloudflare
- [ ] Hero con video loop o imagen hero de alta calidad

## Pendiente — Fase 3 (contenido y optimización)

- [ ] Descripciones SEO extendidas para cada producto (250-400 palabras)
- [ ] FAQ por producto (schema FAQPage)
- [ ] Primeros artículos de blog en `content/blog/`
- [ ] Contenido de `/nosotros` (historia, equipo, valores con fechas reales)
- [ ] Contenido de `/grupo-radici` (logos reales, descripción de cada empresa)
- [ ] Configurar GA4 (Measurement ID `G-XXXXXXX`)
- [ ] Lighthouse audit y optimización final
- [ ] Revisar tildes y caracteres especiales en textos

---

## Cómo agregar un artículo de blog

Crear `content/blog/nombre-del-articulo.mdx`:

```mdx
---
title: "Título del artículo"
description: "Descripción SEO (150-160 caracteres)"
date: "2026-04-15"
image: "/images/blog/nombre-del-articulo.jpg"
category: "Industria"
---

Contenido en Markdown aquí...
```

---

## Comandos Útiles

```bash
npm run dev          # Desarrollo local (http://localhost:3000)
npm run build        # Build producción (detecta errores TypeScript)
npm run lint         # ESLint
vercel --prod        # Deploy a producción
vercel env pull      # Sincronizar variables de entorno desde Vercel
```

---

*Proyecto iniciado en abril de 2026. Construido con Claude Code (Opus 4.6).*
