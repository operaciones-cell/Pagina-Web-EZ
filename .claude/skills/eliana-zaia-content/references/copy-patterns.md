# Copy Patterns — plantillas exactas

Plantillas a copiar y rellenar. No inventar formato nuevo cuando ya existe uno aprobado aquí.

---

## Patrón A — Hero / sección destacada

**Estructura**: KICKER + HEADLINE + (subtítulo opcional) + CTA

```
[KICKER en mayúsculas, 8–24 chars]

[Headline serif, 30–70 chars, una idea, 
puede llevar UNA palabra en *italic*]

[Subtítulo body, 80–160 chars, aclara o complementa — 
nunca repite la idea del headline]

[CTA principal, 8–22 chars, verbo descriptivo + objeto]
```

**Ejemplo aprobado** (manifiesto home):
```
MANIFIESTO

Cada postre es una *conversación*
entre la paciencia de la *tradición*
y la curiosidad de lo *contemporáneo*

Desde 2010, en Zipaquirá, cultivamos el oficio
de los postres artesanales.
```

**Cuando entrego este patrón**: 3 opciones, cada una con razón breve de por qué funciona.

---

## Patrón B — Descripción de producto

**Estructura**: nombre + tagline italic + 2 párrafos + tabla de detalles

```markdown
# [Nombre del postre]

*[Tagline evocativa, 20–50 chars, en italic]*

[Párrafo 1: origen / inspiración / herencia. 
2–3 frases. Por qué este postre existe.]

[Párrafo 2: la sensación o experiencia. 
2–3 frases. Cómo se siente probarlo, sin caer en 
"explosión de sabor" o frases hechas.]

| Detalle | |
|---|---|
| Ingredientes destacados | … |
| Tiempo de preparación | … |
| Conservación | … |
| Porciones | … |
```

**Ejemplo aprobado** (formato):
```
# Tiramisú

*paciencia italiana, sin atajos.*

Llegó a Zipaquirá por una tarde de invierno y se quedó 
porque encontró su propia voz. El nuestro respeta la 
receta de la región del Veneto y, al mismo tiempo, 
conversa con el café de altura colombiano.

La primera cucharada es café fuerte, mascarpone fresco 
y bizcocho que se deshace. La segunda es memoria.
```

---

## Patrón C — Sección editorial intermedia (about / philosophy / oficio)

**Estructura**: kicker + headline + cuerpo en 1–2 párrafos + cierre conceptual

```
[KICKER]

[Headline serif, 25–55 chars, idea fuerte sin 
adornos — puede tener italic gold en una palabra]

[Párrafo 1, máximo 3 frases. Establece el contexto.]

[Párrafo 2, máximo 3 frases. Profundiza con una imagen 
concreta o un número específico.]

[Cierre opcional: una frase breve que sintetice — 
puede ir como italic divider]
```

---

## Patrón D — Meta SEO (title + description)

**Estructura**:
- Title: 50–60 chars. Formato: `[Promesa concreta] | Eliana Zaia`
- Description: 140–155 chars. Promesa + diferencial + acción suave (sin "compra ya").

**Ejemplos**:

```
Title: Postres artesanales premium en Zipaquirá | Eliana Zaia
Description: Desde 2010 cultivamos el oficio de los postres 
artesanales. Tradición latina con técnica italiana. 
Eventos, aliados y carta de temporada.
```

```
Title: Tiramisú artesanal — receta del Veneto | Eliana Zaia
Description: Tiramisú con mascarpone fresco y café de altura 
colombiano. Receta italiana respetada, voz propia. Encárgalo 
para tu mesa o evento.
```

**Cuando entrego**: el principal + 1 alternativa.

---

## Patrón E — Reordenamiento de página

**Output**: tabla con la estructura propuesta.

| # | Sección | Kicker | Headline | Fondo | Intención narrativa |
|---|---|---|---|---|---|
| 1 | Hero | — | "Fusionamos la tradición latina con la técnica italiana" | claro | hook + identidad |
| 2 | Servicios | LO QUE HACEMOS | "Una pieza para cada ocasión" | midnight | promesa concreta |
| 3 | About | DESDE 2010 | "Un oficio de Zipaquirá para el mundo" | cream | autoridad de origen |
| … | … | … | … | … | … |

Después de la tabla, un párrafo corto explicando la lógica narrativa: por qué este orden y no otro.

---

## Patrón F — Revisión de texto existente

Cuando el usuario pega un texto y pide mejorarlo:

```markdown
**Versión revisada**

[texto reescrito]

**Cambios principales**

- Saqué "[X]" porque [razón en términos de voz de marca].
- Cambié "[Y]" por "[Z]" para [efecto buscado].
- Acorté el párrafo 2 a 3 frases (regla de longitud).
- [otros cambios]

**Lo que mantuve y por qué**

- [aspecto que ya funcionaba bien]
```

---

## Patrón G — Página nueva completa

**Paso 1**: outline de secciones (sin escribir copy todavía).

```markdown
**Outline propuesto para [nombre de página]**

1. Hero — [idea]
2. [Sección 2] — [idea]
3. …

¿Procedo con el copy de las 5 secciones, o ajustamos el outline primero?
```

**Esperar OK del usuario.** No escribir el copy completo si el outline no fue aprobado — es trabajo desperdiciado si la estructura cambia.

**Paso 2**: una vez aprobado el outline, copy completo en orden, sección por sección, usando los patrones A/B/C según corresponda.

---

## Reglas comunes a todos los patrones

- **Italic gold** (`*palabra*`) máximo una vez por titular. Es énfasis, no decoración.
- **Punto final**: sí en párrafos de body, no en kickers/headlines/CTAs.
- **Una idea por línea visual**: si una frase ocupa dos líneas en desktop, partirla en el lugar correcto con `<br />` o estructura de párrafo.
- **Números como cifra**: 2010, 13 años, 12 piezas. Solo escribir en letra cuando es parte del estilo ("desde dos mil diez" → no usar).
- **Marca solo cuando suma**: no repetir "Eliana Zaia" cada 2 frases. La marca es contexto, no producto.
