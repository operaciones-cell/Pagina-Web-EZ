# Output Template

Plantillas exactas de las 6 secciones del output. Copiar y rellenar — no inventar formato nuevo.

---

## 1. Diagnóstico sección por sección (Referencia)

| # | Bloque | Función UX | Patrón clave |
|---|---|---|---|
| 1 | [nombre del bloque] | [qué resuelve para el usuario] | [técnica visual/interactiva específica] |
| 2 | … | … | … |

---

## 2. Lo que hace bien estructuralmente

- **[Categoría]**: [descripción breve del patrón reutilizable].
- **[Categoría]**: …

Categorías típicas: jerarquía por altura, respiración, color discipline, tipografía, hover, kickers, CTAs, ritmo.

---

## 3. Mapeo a Eliana Zaia

| Referencia | Equivalente Eliana Zaia | Estado | Prioridad |
|---|---|---|---|
| [bloque ref] | [componente / página actual o propuesto] | ✅ existe / ⚠️ parcial / ❌ no existe | Alta / Media / Baja |

---

## 4. Orden de implementación

1. **[Acción]** — [qué se construye]. Insertar en `[path/Componente.tsx]` entre `[Componente A]` y `[Componente B]`. Fondo: `[cream / cream-soft / midnight]`. Razón de prioridad: [impacto vs. esfuerzo].
2. …

---

## 5. Qué NO copiar

- ❌ **[Patrón de la referencia]**: [razón corta — viola brand lock / no encaja con posicionamiento boutique / etc.].
- ❌ …

---

## 6. Validaciones

### Contraste WCAG

| Texto | Fondo | Ratio | Nivel |
|---|---|---|---|
| `#fbf9f4` | `#00101f` | ~15:1 | AAA ✅ |
| `#c7a84b` | `#00101f` | ~6.2:1 | AA ✅ |
| `[hex]` | `[hex]` | ~X:1 | AAA / AA / **FAIL** |

Marcar **FAIL** en rojo si <4.5:1 para body o <3:1 para large text.

### Ritmo tonal

Secuencia propuesta tras inserciones:
`HeroVideo (claro) → [...] → AlliesMarquee (cream)`

✅ alternancia respetada / ⚠️ dos secciones consecutivas con mismo fondo en posición [X] — proponer reorden.

### Performance flags

- ⚠️ [item con costo de performance, ej: video adicional, librería nueva, animación que repinta layout]
- ✅ [si todo limpio]

---

## (Opcional) Implementación

Solo si el usuario pidió código explícitamente o el modo es `diagnose+code`. Generar componente del **paso 1** del orden de implementación, listo para pegar.

```tsx
// components/home/NuevoComponente.tsx
"use client";

import { motion } from "framer-motion";
// …
```

Cerrar con: "¿Querés que arme el código del paso 2?"
