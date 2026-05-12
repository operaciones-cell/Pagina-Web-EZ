# DESIGN.md — Eliana Zaia

> Sistema de diseño consolidado de Eliana Zaia — repostería artesanal premium, Zipaquirá (Colombia) desde 1998, próxima apertura en Lima (Perú).
>
> Este archivo es la **fuente única de verdad visual** del proyecto. Cualquier agente IA, desarrollador o diseñador debe leerlo antes de generar UI nueva o modificar lo existente.

---

## 1. Overview

### Atmósfera de marca
Premium boutique editorial. Tradición italiana heredada cruzada con sabor latino. Marca con escala nacional (31 de 32 departamentos de Colombia, 6.500+ puntos de venta) que mantiene identidad artesanal.

### Tensión núcleo
**Premium pero accesible** · *Artesanal pero escalable* · *Tradicional pero moderna*

Toda decisión visual debe sostener las dos dimensiones simultáneamente:
- Si una pieza visual suena solo premium (snob, exclusivo, aristocrática) → falla
- Si suena solo accesible (genérico, plano, sin oficio) → falla

### Referencias visuales aspiracionales
- **Hermès**: jerarquía editorial, color discipline
- **Aesop**: minimalismo cálido, italic ancla
- **Ladurée**: estructura "casa de [marca] / el arte de X / nacida en Y"
- **Vogue / Monocle**: tipografía editorial seria

### Lo que NUNCA hacemos
- ❌ Pasteles, gradientes saturados, neón
- ❌ Sombras pesadas tipo SaaS
- ❌ Iconografía e-commerce genérica (cart, heart, user)
- ❌ Badges píldora con fill de color ("NEW", "BESTSELLER")
- ❌ CTAs con fill de color (más allá del primario de conversión)

---

## 2. Color Palette & Roles

### Paleta core (única paleta de marca)

| Token | Hex | Rol |
|---|---|---|
| `--color-midnight` | `#00101f` | Fondo dramático · Texto sobre cream · Color primario de marca |
| `--color-gold` | `#c7a84b` | Acento · Italic ancla · CTA primario fondo · Bordes |
| `--color-cream` | `#fbf9f4` | Fondo claro principal · Texto sobre midnight |

### Derivados permitidos

| Token | Hex | Uso |
|---|---|---|
| `--color-cream-soft` | `#f5f3ee` | Variante para alternar bloques claros (Origen, Aliados) |
| `--color-ink-soft` | `#4a5560` | Body text en fondo claro (alternativa a midnight cuando es demasiado contraste) |
| `--color-gold-dark` | `#9a7f14` | Variante oscura para texto sobre cream (mejor contraste) |
| `--color-gold-light` | `#e0c470` | Solo para halos / acentos sutiles, máximo 60% opacity |

### Reglas de uso de color

- **Sobre fondo cream**: midnight para texto principal, gold (#c7a84b o #9a7f14 según contraste necesario) para acentos
- **Sobre fondo midnight**: cream para texto principal, gold para acentos
- **Italic gold**: una sola palabra ancla por titular, máximo
- **Gold + alpha**: para bordes (rgba(199, 168, 75, 0.4) — 40%)

### Ritmo tonal del sitio
Las secciones alternan **cream / midnight / cream / midnight / cream**. Dos secciones consecutivas nunca pueden compartir fondo.

Ejemplo home actual:
```
Hero (cream) → Servicios (midnight) → Origen (cream-soft) → Alcance (midnight) → Aliados (cream-soft)
```

---

## 3. Typography Rules

### Familias

| Familia | Uso |
|---|---|
| `'Noto Serif', serif` | Titulares, brand statements, kickers grandes |
| sans system (default Tailwind) | Body, UI, microcopy, kickers chicos |

**Prohibida**: cualquier serif decorativa (Playfair Display, Cormorant, etc.). Noto Serif es la elegida.

### Escala tipográfica

| Token | Mobile | Desktop | Peso | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `display-hero` | text-5xl (48px) | text-8xl/9xl (96-128px) | 400 | -0.02em | H1 hero |
| `display-section` | text-4xl (36px) | text-7xl/8xl (72-96px) | 400 | -0.02em | H2 sección protagonista (Manifesto, Filosofía) |
| `headline-md` | text-3xl (30px) | text-5xl/6xl (48-60px) | 400 | -0.02em | H2 sección estándar |
| `headline-sm` | text-3xl (30px) | text-4xl (36px) | 400 | -0.01em | Brand statement (ej: "Eliana Zaia" en Origen) |
| `kicker-large` | text-3xl (30px) italic | text-4xl (36px) italic | 400 | -0.01em | Kicker tipo "Desde 1998" o brand name |
| `kicker-small` | text-xs (12px) uppercase | text-xs (12px) uppercase | 400 | tracking-[0.28em / 0.32em] | Section labels |
| `body-large` | text-base (16px) | text-lg (18px) | 400 | normal | Párrafos editoriales |
| `body-base` | text-sm (14px) | text-base (16px) | 400 | normal | Body estándar |
| `body-small` | text-xs (12px) | text-sm (14px) | 400 | normal | Microcopy, labels |

### Reglas de italic gold

- **Una palabra italic gold por titular máximo** (excepción: manifiesto con stagger de palabras)
- Color: `#c7a84b` sobre fondos claros, `#c7a84b` o `#e0c470` sobre fondos oscuros
- Funciona como **palabra ancla** — la más evocativa del titular
- Ejemplos: *"El arte de lo **dulce***", *"con dos **raíces***", *"el **arte** de la pastelería"*

### Tracking

- Headlines: -0.02em (apretado, editorial)
- Brand statements / kickers grandes: -0.01em
- Kickers chicos uppercase: 0.22em - 0.32em (espaciado generoso)
- Body: default

### Reglas de musicalidad y rima

Las frases importantes deben tener **musicalidad**. No siempre rima estricta, pero sí ritmo, paralelismo, balance entre cláusulas.

**Patrón A — Dos beats con coma**: *"Técnica italiana, dulzura latina."*
**Patrón B — Inversión sintáctica**: *"Una cocina detrás de cada cucharada."*
**Patrón C — Tres golpes**: *"Para tu cadena. Con tu marca. Desde tu idea."*

Test: leer la frase **en voz alta**. Si suena recitada, OK. Si suena folleto, falla.

---

## 4. Component Stylings

### CTA Primario (botón gold sólido)

```yaml
cta-primary:
  background: "#c7a84b"
  color: "#00101f"
  padding: px-10 py-4
  border-radius: rounded-full
  font-size: text-base md:text-lg
  font-weight: 600 (semibold)
  shadow: "0 6px 24px rgba(199, 168, 75, 0.35)"
  hover: scale-[1.03]
  transition: all
```

**Uso**: 1 por viewport (acción de conversión principal). Ejemplos: *"Ver nuestros postres"*, *"Hablemos de tu evento"*.

### CTA Secundario (botón gold con borde)

```yaml
cta-secondary:
  background: transparent
  color: "#00101f" (sobre cream) | "#fbf9f4" (sobre midnight)
  border: 2px solid #c7a84b
  padding: px-10 py-4 (hero) | px-8 py-3 (sección)
  border-radius: rounded-full
  font-size: text-base md:text-lg
  font-weight: 600 (semibold)
  hover: scale-[1.03]
```

**Uso**: acción complementaria al CTA primario. Ejemplos: *"Trabajemos juntos"*, *"Conocer la historia"*.

### Card (servicio / oferta)

```yaml
card:
  background: "#ffffff" (sobre fondo midnight)
  border-radius: rounded-3xl
  shadow: ambient-shadow (clase custom Tailwind)
  aspect-ratio: aspect-square (para cards con imagen 1:1)
  hover: -translate-y-1, scale-105 (en imagen interna)
  transition: 500ms

card-image:
  position: top
  object-fit: cover
  object-position: customizable per image
  gradient-overlay: "linear-gradient(180deg, rgba(0,16,31,0) 60%, rgba(0,16,31,0.35) 100%)"

card-content:
  padding: p-4 md:p-5
  flex-direction: column
  flex: 1 (para que cards tengan misma altura)
```

### Pilar (con borde lateral gold)

```yaml
pillar:
  border-left: 1px solid rgba(199, 168, 75, 0.4) | (0.5) sobre midnight
  padding-left: pl-5
  
pillar-title:
  font-size: text-xs uppercase
  letter-spacing: tracking-[0.28em]
  color: "#c7a84b"
  margin-bottom: mb-2
  
pillar-body:
  font-size: text-sm
  color: "#4a5560" | "rgba(251,249,244,0.7)" sobre midnight
  line-height: relaxed
```

### Kicker (section label)

**Variante A — Sans uppercase (la mayoría de secciones)**:
```yaml
kicker-uppercase:
  font-family: sans
  font-size: text-xs (12px)
  text-transform: uppercase
  letter-spacing: tracking-[0.28em] | tracking-[0.32em]
  color: "#c7a84b"
  margin-bottom: mb-4 to mb-6
```

**Variante B — Serif italic (brand statements)**:
```yaml
kicker-serif-italic:
  font-family: 'Noto Serif', serif
  font-style: italic
  font-size: text-3xl md:text-4xl (30-36px)
  font-weight: 400
  letter-spacing: -0.01em
  color: "#c7a84b" | "#9a7f14" según contexto
```

Uso de Variante B: para nombre de marca o frases ancla tipo *"Desde 1998"*. NO para section labels comunes.

### Botón flecha de card (decorativo)

```yaml
arrow-pill:
  background: rgba(199, 168, 75, 0.15)
  color: "#c7a84b"
  padding: p-1.5 (chico) | p-2 (mediano)
  border-radius: rounded-full
  icon: ArrowUpRight (lucide-react), size: 14-18px
  hover: scale-110
```

---

## 5. Layout Principles

### Container max-widths

| Width | Token | Uso |
|---|---|---|
| `max-w-3xl` (768px) | sección con texto principal | Origen |
| `max-w-4xl` (896px) | sección estándar | usado anteriormente |
| `max-w-5xl` (1024px) | sección con grid 3 columnas | Alcance |
| `max-w-6xl` (1152px) | sección con grid 2 columnas grande | Servicios |
| `max-w-7xl` (1280px) | sección full-width editorial | Aliados marquee |

Container siempre con `mx-auto` para centrado horizontal + `relative` para context.

### Padding de sección

```yaml
section-padding:
  base: px-6 (horizontal en todos los breakpoints)
  vertical-mobile: pt-12 to pt-24 / pb-10 to pb-16
  vertical-desktop: md:pt-20 to md:pt-36 / md:pb-12 to md:pb-20
```

Excepción: secciones con video full-bleed o con LampContainer pueden usar min-h-[Xvh].

### Grid

- 2 columnas: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`
- 3 columnas: `grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8`
- Mobile: siempre stack vertical (grid-cols-1)

### Spacing entre elementos

| Tipo | Valor mobile | Valor desktop |
|---|---|---|
| Kicker → headline | mb-4 to mb-6 | igual |
| Headline → body | mt-8 to mt-12 | mt-12 to mt-16 |
| Body → cierre italic | mt-6 to mt-10 | mt-10 to mt-12 |
| Cierre → CTA | mt-8 to mt-10 | mt-10 |

---

## 6. Depth & Elevation

### Sombras

**Card (sutil ambient)**:
```css
.ambient-shadow {
  box-shadow: 0 4px 24px rgba(0, 16, 31, 0.08);
}
```

**Botón primario (halo dorado)**:
```css
box-shadow: 0 6px 24px rgba(199, 168, 75, 0.35);
```

**Texto sobre fondo claro (halo cream tight)**:
```css
text-shadow: 0 0 2px rgba(251, 249, 244, 0.85),
             0 0 5px rgba(251, 249, 244, 0.4);
```

**Texto sobre video / fondo dinámico**:
```css
text-shadow: 0 2px 16px rgba(0, 16, 31, 0.6);
```

### Bordes

- **Hairline gold** (separadores/pilares): `border-color: rgba(199, 168, 75, 0.4)` (sobre cream) | `0.5` (sobre midnight)
- **Borde sólido CTA**: `border-2 border-#c7a84b`
- **Sin sombras pesadas**: no usar shadow-xl, shadow-2xl ni Tailwind shadows agresivas

### Z-index

- Navbar: z-40
- Modales / overlays: z-50
- Contenido normal: z-10 o sin z definido
- Video background: z-0 con opacity controlado

---

## 7. Do's and Don'ts

### ✅ Do (siempre)

1. **Mantener la paleta de 3 colores + derivados validados**
2. **Alternar fondos cream y midnight entre secciones consecutivas**
3. **Una palabra italic gold por titular, en la palabra ancla**
4. **Noto Serif para titulares editoriales**
5. **Letter-spacing -0.02em en headlines grandes**
6. **`rounded-full` en CTAs, `rounded-3xl` en cards**
7. **Hover sutil: scale-[1.03] o -translate-y-1**
8. **Mobile-first: stack vertical, padding reducido**
9. **Aspect ratios consistentes en grids (`aspect-square` para cards similares)**
10. **Usar palabras ancla de la marca**: oficio, pieza, repostería, herencia, equilibrio, autoría, casa

### ❌ Don't (nunca)

1. **No introducir colores fuera de la paleta** (ni siquiera tonos cercanos del navegador)
2. **No usar pasteles, neón, gradientes saturados con más de 2 stops**
3. **No usar negro puro `#000` ni blanco puro `#fff`** — siempre midnight y cream
4. **No usar serif decorativas** (Playfair, Cormorant, etc.) en lugar de Noto Serif
5. **No usar más de 2 familias tipográficas** en una página
6. **No usar sombras blur > 30px** (excepto en halos de CTA primario)
7. **No usar emojis en copy del sitio** (sí en redes sociales)
8. **No usar signos de exclamación múltiples** ni preguntas retóricas de venta
9. **No usar diminutivos de marca** ("tortica", "postrecito")
10. **No usar adjetivos vacíos**: "increíble", "espectacular", "exclusivo", "premium" como adjetivo (sí "premium" como categoría/posicionamiento)
11. **No repetir la misma palabra ancla en 4+ secciones** del home
12. **No saturar con CTAs de fill**: máximo uno por viewport

---

## 8. Responsive Behavior

### Breakpoints (Tailwind defaults)

| Breakpoint | Min-width | Uso |
|---|---|---|
| `sm` | 640px | Smartphones grandes en landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop pequeño |
| `xl` | 1280px | Desktop estándar |

### Comportamiento de secciones

**Mobile (< md)**:
- Grids colapsan a `grid-cols-1`
- Padding vertical reducido (~30%)
- Tipografía reduce tamaño (1-2 niveles)
- CTAs apilan vertical (`flex-col gap-3`)
- Cards a 100% del ancho

**Desktop (md+)**:
- Grids activan multi-column
- Padding generoso
- Tipografía full size
- CTAs lado a lado (`flex-row gap-4`)
- Container max-w aplica

### Imágenes

- Usar `next/image` con `fill` + `sizes="(min-width: 768px) 50vw, 100vw"`
- Aspect ratios responsive: típicamente fijos en todos los breakpoints (`aspect-square`)
- Object-position custom por imagen cuando el sujeto no está centrado

### Navbar

- Fixed en top
- Translúcido al scrollear: `rgba(0, 16, 31, 0.35)` + `blur(32px)`
- Mobile: hamburger menu con overlay full-screen

---

## 9. Agent Prompt Guide

### Cómo usar este archivo

Si sos un agente IA o desarrollador asignado a Eliana Zaia, leé este archivo **antes** de cualquier tarea de UI. Tus reglas:

#### 1. Verificación pre-implementación
Antes de generar código nuevo, confirmá:
- ¿Estoy usando los colores de la paleta? Solo midnight, gold, cream y derivados validados.
- ¿Estoy usando Noto Serif para titulares? Sí.
- ¿Estoy respetando el ritmo tonal del sitio? Si la sección anterior es cream, esta debe ser midnight (o viceversa).
- ¿Mi propuesta tiene 1 palabra italic gold por titular? Sí.

#### 2. Para crear secciones nuevas

Estructura recomendada:
```
section
└── div container (max-w-X mx-auto)
    ├── motion.p kicker (sans uppercase O serif italic)
    ├── motion.h2 headline (Noto Serif con italic gold ancla)
    ├── motion.p body (max-w-2xl o sin limit en max-w-3xl container)
    ├── motion.div grid (si aplica)
    │   └── pillars / cards
    ├── motion.p cierre italic gold (opcional)
    └── motion.div CTA (opcional)
```

#### 3. Para textos nuevos

- Aplicar regla de musicalidad (test en voz alta)
- Usar palabras ancla del glosario de marca
- Combinar premium + accesible en cada frase importante
- Activar al menos 2 palancas STEPPS (ver `eliana-zaia-content/references/stepps-virality.md`)
- Sin emojis, sin signos de exclamación, sin adjetivos vacíos

#### 4. Para componentes nuevos

- Reutilizar tokens de la sección 4 (CTAs, cards, pilares, kickers)
- Usar la clase `ambient-shadow` para sombras sutiles
- Animaciones con `framer-motion`: `initial / animate / transition` con `viewport={{ once: true }}`
- Hover sutil: scale-[1.03] o translate-y-1

#### 5. Iteración Guide

- **Foco en UN componente a la vez**. No reformes toda la página de un golpe.
- **Cita tokens de este archivo** cuando justifiques una decisión.
- **Nunca documentes hover en producción** salvo que sea esencial. Default y active states alcanzan.
- **Si una decisión rompe alguna regla de Do's and Don'ts**, justificá explícitamente el por qué antes de aplicarla.
- **Pedí confirmación al usuario** antes de cambios estructurales (eliminación de secciones, cambio de paleta, cambio de tipografía).

---

## 10. Known Gaps

Lo que aún no está documentado en detalle (pendiente):

- **Sistema de iconos**: actualmente usamos lucide-react (ArrowUpRight). No hay biblioteca de iconos propia.
- **Animaciones complejas**: el efecto LampContainer del Manifesto tiene posiciones absolutas, requiere ajuste manual cuando cambia el viewport.
- **Sistema de spacing tokens** estricto: actualmente usamos las clases de Tailwind directamente, no hay tokens semánticos (`spacing-section`, `spacing-element`, etc.).
- **Dark mode**: el sitio NO tiene dark mode separado. Los fondos midnight son intencionales por sección, no por tema.
- **Imágenes**: política de optimización pendiente. Próximo paso: comprimir las fotos de productos antes de subir (actualmente 20MB+ por foto, se optimizan en runtime con `next/image`).

---

## 11. Cambios futuros pendientes

| Cambio | Estado |
|---|---|
| Sección Aliados — copy + logos | 🟡 esperando logos |
| Página `/nosotros` — historia extendida | 🟡 sin afinar |
| Sección Manifesto — descomentar si se reincorpora al home | ❌ removida |
| Sección Filosofía — descomentar si se reincorpora al home | ❌ removida |
| Sección FeaturedVideo — eliminar archivo si no se usará | ❌ removida del home |
| Apertura Lima, Perú — actualizar Alcance cuando esté operativa | 🟡 anuncio en cierre |

---

## Versionado

- **v1.0** (sesión actual) — primera consolidación de DESIGN.md
- Última actualización: día de creación

Cualquier cambio significativo a paleta, tipografía o componentes core debe **actualizar este archivo** y el campo de versionado.

---

## Recursos relacionados

- `.claude/skills/eliana-zaia-design-adapter/` — skill para adaptar referencias visuales externas a este sistema
- `.claude/skills/eliana-zaia-content/` — skill para escribir copy alineado con la voz de marca
- `components/` — implementación viva del sistema de diseño en código

