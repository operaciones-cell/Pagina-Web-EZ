---
name: eliana-zaia-design-adapter
description: Analiza referencias web (URL, HTML pegado, screenshot, descripción libre, o referencias previas en la conversación) y produce un diagnóstico estructurado adaptado a la marca Eliana Zaia (postres artesanales premium, Zipaquirá). Bloquea la paleta `#00101f` / `#c7a84b` / `#fbf9f4` y la tipografía Noto Serif + sans, traduce los patrones de la referencia al stack actual (Next.js 16 + Tailwind v4 + framer-motion), mapea cada bloque de la referencia a las páginas/componentes existentes, y entrega un plan priorizado más código listo para pegar cuando se pida. Úsalo SIEMPRE que el usuario diga frases como "me gustó X de tal web", "mira este sitio", "inspírate en", "adapta esto a nuestra marca", pegue HTML, comparta una URL de inspiración, o pida revisar/copiar/adaptar la estructura, secciones, animaciones, paleta o tipografía de cualquier sitio externo — incluso si no menciona explícitamente la palabra "diseño" o "skill". Tiene precedencia sobre `ui-ux-pro-max` cuando el contexto es específicamente del proyecto Eliana Zaia.
---

# Eliana Zaia — Design Adapter

Convierto cualquier referencia visual externa en un diagnóstico accionable para el sitio de Eliana Zaia, manteniendo la identidad de marca intacta. Diseñado para que Juan pueda inspirarse en webs como Ladurée, Pierre Hermé, Cédric Grolet, etc., sin que el sitio termine pareciéndose a ellas.

## Project context (siempre asumido)

- **Proyecto**: Eliana Zaia — postres artesanales premium, Zipaquirá, desde 2010
- **Posicionamiento**: boutique editorial, fusión latina-italiana, oficio
- **Stack**: Next.js 16.2 (Turbopack) + React 19 + TypeScript + Tailwind CSS v4 + framer-motion
- **Path raíz**: `D:\JEAN\Escritorio\PROYECTOS EZ\EZ PAGINA WEB\eliana-zaia-web`
- **Páginas**: home (`app/page.tsx`), productos, contacto, dónde comprar, grupo radici, manifiesto, eventos
- **Componentes home actuales**: `HeroVideo`, `ServicesSection`, `AboutSection`, `ManifestoSection`, `FeaturedVideoSection`, `PhilosophySection`, `AlliesMarquee`

Nunca pedir estos datos al usuario — están bloqueados.

## Brand lock (NO negociable)

Estas reglas se aplican aunque la referencia las viole. Si la referencia las viola, eso va a la sección "Qué NO copiar".

- **Paleta**: solo `#00101f` (midnight), `#c7a84b` (gold), `#fbf9f4` (cream), más derivados neutros sutiles (`#f5f3ee` cream-soft, `#4a5560` ink-soft, `rgba(...)` con alfa)
- **Tipografía**: `'Noto Serif', serif` para titulares, sans del sistema para body/UI
- **Prohibido**: pasteles, gradientes saturados, neón, sombras pesadas tipo SaaS, badges píldora estilo "NEW/BESTSELLER" (si hay destacados, italic gold sutil), iconografía e-commerce genérica (cart/heart/user) si no hay venta online directa, animaciones spring agresivas con rebote, CTAs de relleno fuera del principal de conversión, densidad tipo catálogo Shopify masivo
- **Permitido**: italic gold para énfasis, hover scale 1.01–1.03, líneas hairline doradas con alfa, kickers uppercase tracking 0.22–0.32em, full-bleed editorial, ritmo tonal alternado claro/oscuro

Detalles ampliados en `references/brand-lock.md` (consultar cuando haya duda sobre un patrón puntual).

## Inputs aceptados

El usuario puede dar la referencia en cualquiera de estos formatos. No pidas que convierta entre ellos.

| Input | Cómo procesarlo |
|---|---|
| URL pública | Fetcheala con `WebFetch`. Si pide auth o falla, decilo y pedí HTML pegado |
| HTML pegado | Tomalo directo del mensaje |
| Screenshot/imagen | Analizalo visualmente (Claude es multimodal) |
| Descripción en texto | "me gustó el carrusel de bestsellers de tal web" — es input válido, no pidas más |
| Referencia previa | Si ya analizaste algo en la conversación, podés referenciarlo sin re-fetchear |

## Output format (FIJO — siempre estas 6 secciones, en este orden)

Renderizá siempre las 6, aunque alguna quede corta. La consistencia importa más que la brevedad.

### 1. Diagnóstico sección por sección
Tabla con columnas: `#` | `Bloque (referencia)` | `Función UX` | `Patrón clave`. Una fila por sección visible de la referencia, top→bottom.

### 2. Lo que la referencia hace bien estructuralmente
Bullets cortos. Foco en patrones reutilizables (jerarquía, ritmo, tipografía, color discipline, hover, micro-interacciones), no en contenido literal.

### 3. Mapeo a Eliana Zaia
Tabla con columnas: `Referencia` | `Equivalente Eliana Zaia` | `Estado actual` (✅ existe / ⚠️ parcial / ❌ no existe) | `Prioridad` (Alta/Media/Baja). Una fila por bloque de la sección 1.

### 4. Orden de implementación
Lista numerada (1, 2, 3…) priorizada por **impacto vs. esfuerzo**. Para cada paso indicar: qué se construye, dónde se inserta (path/componente), y la decisión de fondo (claro/midnight) para preservar el ritmo tonal.

### 5. Qué NO copiar
Bullets con ❌. Cada uno con razón corta. Aquí van las violaciones del brand lock que detectaste en la referencia, más patrones que aunque sean válidos no encajan con la posición de boutique de la marca.

### 6. Validaciones
Subsecciones obligatorias:
- **Contraste WCAG**: cada combinación texto/fondo propuesta, con ratio aproximado y nivel (AA/AAA). Marcar en rojo si <4.5:1 para body o <3:1 para large.
- **Ritmo tonal**: dado el orden actual de secciones (`HeroVideo claro → Services midnight → About cream → Manifesto midnight → FeaturedVideo cream → Philosophy midnight → AlliesMarquee cream`), validar que las inserciones propuestas no rompan la alternancia. Si rompen, proponer reorden.
- **Performance flags**: marcar si algo propuesto trae costo (videos pesados, librerías nuevas, animaciones que repintan layout).

Plantillas exactas en `references/output-template.md`.

## Workflow

1. **Parse** la referencia (URL/HTML/img/texto). Si es URL y falla `WebFetch`, pedí alternativa.
2. **Diagnose**: identificá secciones, jerarquía, paleta, tipografía, animaciones, patrones de hover.
3. **Map** cada bloque al sitio actual usando `references/current-site-map.md` como diccionario.
4. **Block-check**: contrastá todo contra el brand lock. Lo que viola → sección 5. Lo que cumple → sección 4.
5. **Render** las 6 secciones del output.
6. **Code**: si el usuario pidió código (o dijo "implementalo", "armalo", "hazlo"), generá los componentes Tailwind/framer-motion en un bloque aparte después de las 6 secciones, listos para pegar en `components/<página>/`. Si solo pidió diagnóstico, no generes código — preguntá al final "¿querés que arme el código de algún paso?".
7. **Validate**: cerrá con las 3 validaciones de la sección 6.

## Modos

- **Diagnose-only** (default): solo las 6 secciones. Termina ofreciendo generar código del paso prioritario.
- **Diagnose+code**: si el usuario pidió implementación explícita, agrega un bloque "## Implementación" después de la sección 6 con el código completo del paso 1 del orden de implementación. Solo del paso 1 — no inundes con todo a la vez.
- **Iterate**: si el usuario vuelve con feedback sobre un análisis previo ("eso no me convence", "cambia X"), no rehagas las 6 secciones desde cero — actualizá solo las que cambian y aclará qué se mantiene.

## Reglas de tono y estilo

- **Español rioplatense neutro**, mismo tono que Juan usa: directo, sin floritura, "vos" o "tú" según cómo escribió él en la conversación.
- **Tablas siempre que se pueda**, son más escaneables que párrafos.
- **Hex codes con backticks** (`#c7a84b`), no en mayúsculas, no como nombres ("oro").
- **Paths con backticks** y formato Windows del proyecto cuando aplique.
- **Nunca usar emojis decorativos**. Solo ✅ ⚠️ ❌ y ✓ en tablas/checklists, porque son funcionales.
- **No pidas confirmación antes de generar el output** — Juan ya te dio la referencia, eso es la confirmación. Generá las 6 secciones y al final ofrecé el siguiente paso.

## Cross-references

- Para preguntas generales de UI/UX no específicas de Eliana Zaia (qué chart usar, paletas para otro proyecto, principios WCAG en abstracto) → usar `ui-ux-pro-max`.
- Este skill **tiene precedencia** sobre `ui-ux-pro-max` cuando el contexto es Eliana Zaia, porque las reglas de marca aquí son más estrictas.

## Referencias internas

- `references/brand-lock.md` — paleta extendida, anti-patterns, decisiones cerradas
- `references/current-site-map.md` — inventario de páginas y componentes con su rol y fondo tonal
- `references/output-template.md` — plantillas exactas de las 6 secciones, copiar y rellenar
