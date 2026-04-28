# Brand Lock — Eliana Zaia

Reglas duras de marca. Si una referencia las viola, esa violación va a la sección "Qué NO copiar" del output.

## Paleta

### Core (única paleta de marca)
- `#00101f` — midnight (fondos oscuros, texto sobre crema)
- `#c7a84b` — gold (acentos, kickers, italic, CTAs principales, líneas decorativas)
- `#fbf9f4` — cream (fondo claro principal, texto sobre midnight)

### Derivados permitidos
- `#f5f3ee` — cream-soft (variante para alternar bloques claros)
- `#4a5560` — ink-soft (body en fondo claro cuando midnight es demasiado contraste)
- `#e0c470` — gold-light (solo para halos/acentos sutiles, máximo 60% opacity)
- Cualquier `rgba()` derivado de los anteriores con alfa entre 0.05 y 0.92

### Prohibido
- Pasteles (rosa, lavanda, mint, peach)
- Gradientes saturados o con más de 2 stops de color
- Neón, fluo, cualquier color con saturación >70%
- Negro puro `#000` (siempre midnight) y blanco puro `#fff` (siempre cream)
- Colores funcionales rojo/verde/azul tipo dashboard (error/success/info)

## Tipografía

### Permitida
- **Titulares**: `'Noto Serif', serif`, weight 400, letter-spacing -0.02em
- **Body / UI**: sans del sistema (stack default de Tailwind)
- **Kickers**: sans, uppercase, tracking 0.22em–0.32em, tamaño xs/sm

### Prohibida
- Cualquier serif decorativa (Playfair Display, Cormorant, etc.) — Noto Serif es la elegida
- Sans display modernas (Inter Tight, Geist, Satoshi) en titulares
- Monospace excepto en código real
- Más de 2 familias en una página

## Animaciones

### Permitidas
- `framer-motion` con `whileInView` + `staggerChildren` para reveal de texto
- Hover scale 1.01–1.03
- Fade + translate Y de 12–24px en entrada
- Easing suave: `[0.25, 0.1, 0.25, 1]` o `easeInOut`
- Marquee horizontal lineal infinito

### Prohibidas
- Spring con bounce alto (`stiffness > 200` con `damping < 15`)
- Animaciones scroll-driven complejas con sticky pins (frágiles, ya tuvimos problemas)
- Parallax agresivo
- Cursor custom o trails
- Auto-playing carousels que rotan solos sin acción del usuario

## Componentes / patrones

### Permitidos
- Hairline gold con alfa 0.3–0.5 como divider
- Italic gold para énfasis dentro de titulares
- Full-bleed editorial con texto sobre imagen y overlay sutil
- Ritmo tonal alternado (claro / oscuro / claro / oscuro)
- CTAs fantasma (borde + texto, sin fill) excepto el principal de conversión
- Cards sin sombra, separadas por aire o por divider hairline

### Prohibidos
- Sombras `box-shadow` con blur >20px
- Drop-shadow tipo SaaS / Material / Tailwind UI default
- Badges píldora estilo "NEW" "BESTSELLER" "SOLD OUT" con fill de color → si hay destacados, italic gold sutil
- Iconografía e-commerce genérica (cart, heart, user) — no hay venta online directa hoy
- Más de un CTA con fill de color por viewport
- Densidad tipo catálogo Shopify masivo (grids 4×N de productos)
- Mega-menus con dropdowns de >6 items
- Footer denso de 6+ columnas — máximo 3 columnas

## CTAs

- **Principal de conversión** (1 por viewport): fill `#c7a84b`, texto `#00101f`, rounded-full, padding generoso
- **Secundarios**: ghost con borde `#c7a84b` + texto `#c7a84b`, o link underline
- **En navbar**: el botón "Contacto" sí puede ser fill — ese es el principal de conversión global

## Reglas de fondo por sección

Cada sección tiene un fondo asignado del set `{cream, cream-soft, midnight}`. Dos secciones consecutivas nunca pueden compartir fondo. Esto crea ritmo visual y evita la fatiga.

Ver `current-site-map.md` para el mapa de fondos vigente.
