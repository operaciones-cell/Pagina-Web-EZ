# Current Site Map — Eliana Zaia

Inventario vigente del sitio. Úsalo como diccionario para mapear bloques de la referencia → equivalente Eliana Zaia.

## Páginas

| Ruta | Archivo | Rol |
|---|---|---|
| `/` | `app/page.tsx` | Home — entrada de marca |
| `/productos` | `app/productos/page.tsx` | Catálogo de postres |
| `/contacto` | `app/contacto/page.tsx` | Conversión / contacto directo |
| `/donde-comprar` | `app/donde-comprar/page.tsx` | Puntos de venta físicos |
| `/grupo-radici` | `app/grupo-radici/page.tsx` | Sección dedicada al grupo Radici |
| `/manifiesto` | `app/manifiesto/page.tsx` | Página dedicada al manifiesto extendido |
| `/eventos` | `app/eventos/page.tsx` | Eventos / catering |

## Componentes home (orden actual)

| # | Componente | Path | Fondo tonal | Rol |
|---|---|---|---|---|
| 1 | `HeroVideo` | `components/home/HeroVideo.tsx` | claro | Hero con video loop + frase "Fusionamos la tradición latina con la técnica italiana" |
| 2 | `ServicesSection` | `components/home/ServicesSection.tsx` | midnight | Servicios / colecciones |
| 3 | `AboutSection` | `components/home/AboutSection.tsx` | cream `#f5f3ee` | Origen Zipaquirá 2010, storytelling |
| 4 | `ManifestoSection` | `components/home/ManifestoSection.tsx` | midnight `#00101f` | Manifiesto con `LampContainer` (línea dorada animada) |
| 5 | `FeaturedVideoSection` | `components/home/FeaturedVideoSection.tsx` | cream `#fbf9f4` | Video editorial destacado |
| 6 | `PhilosophySection` | `components/home/PhilosophySection.tsx` | midnight | Filosofía / oficio |
| 7 | `AlliesMarquee` | `components/home/AlliesMarquee.tsx` | cream `#f5f3ee` | Marquee de aliados / puntos de venta |

**Ritmo tonal actual**: claro → midnight → cream → midnight → cream → midnight → cream. Alternancia válida — cualquier inserción debe respetarla.

## Layout global

| Componente | Path | Notas |
|---|---|---|
| `Navbar` | `components/layout/Navbar.tsx` | Sticky, scroll-aware (sólido top → translúcido al scrollear), logo "Eliana *Zaia*" izquierda, links centro, CTA "Contacto" derecha |
| `Footer` | `components/layout/Footer.tsx` | Fondo midnight forzado, 3 columnas |

## UI primitives

| Componente | Path | Uso |
|---|---|---|
| `LampContainer` | `components/ui/lamp.tsx` | Solo línea dorada minimalista, usado en `ManifestoSection` |

## Tokens / constantes

- `lib/constants.ts` → `NAV_LINKS`, `CONTACT`, `ALLIES`
- Variables CSS Tailwind v4: `--color-gold`, `--color-ink`, `--color-text-subtle` (definidas en `app/globals.css`)

## Gaps conocidos (oportunidades de inserción)

Bloques que el usuario probablemente quiera agregar inspirándose en otras webs:

- ❌ **Product carousel de bestsellers** — no existe, gap grande
- ❌ **Newsletter band** — no existe
- ❌ **Announcement bar** top — no existe
- ⚠️ **Category tiles** estilo editorial — `ServicesSection` cumple parcialmente, falta foto protagonista
- ❌ **Testimonios / press mentions** — no existe
- ❌ **Instagram feed grid** — no existe

Cuando el mapeo de la referencia caiga en uno de estos, marcarlo con prioridad **Alta**.
