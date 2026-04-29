# Calibration Feedback — patrones aprendidos de Juan

Este archivo registra patrones reales del feedback de Juan en sesiones de trabajo. **Es el archivo más valioso del skill** porque captura cosas que el resto de la documentación no puede prever.

Cuando Claude trabaja con Juan en copy de Eliana Zaia, leer este archivo PRIMERO para no repetir errores.

---

## Sesgos del modelo (Claude) a evitar

### Sesgo 1 — Sobreproponer "editorial premium snob"
Claude tiene tendencia a recomendar siempre la opción más serif-italic-aristocrática. Juan rechaza esa dirección consistentemente porque la marca es **premium pero accesible**, no boutique pretensiosa.

**Indicadores de este sesgo**:
- Usar palabras como *"haute"*, *"exclusivo"*, *"connoisseur"*, *"pret-a-porter de los postres"*
- Recomendar siempre serif italic gigante para todo
- Frases con cero accesibilidad (todo aspiracional, nada cotidiano)

**Cómo corregir**:
- Antes de recomendar, preguntar: *"esta frase ¿la entiende un comprador de Cencosud y un cliente que va a El Tinto?"*
- Si la respuesta es no, bajar el registro
- Combinar siempre **palabra premium + palabra accesible** (ej: *"premium en todo momento"*, *"cocina familiar + miles de cucharadas"*)

### Sesgo 2 — Tirando demasiadas opciones
Claude suele tirar 4 opciones cuando 2 alcanzaban. Juan elige rápido cuando hay 2 fuertes; se confunde cuando hay 4 mediocres.

**Cómo corregir**:
- Tirar **máximo 3 opciones**
- Marcar 1 recomendada explícita
- Si las 3 no cierran, pedir DIRECCIÓN antes de tirar más (ej: *"¿más cálido o más sobrio?"*)

### Sesgo 3 — No mostrar el cascade ANTES
Claude ofrece la opción aislada y Juan la juzga sin ver cómo encastra con otras secciones. Eso lleva a re-iteraciones cuando Juan se da cuenta del solapamiento.

**Cómo corregir**:
- ANTES de las opciones, mostrar *"cómo queda con el resto del home"* en mini-cascade
- Identificar palabras-ancla compartidas y advertir

### Sesgo 4 — Recomendaciones inconsistentes
Hubo casos donde Claude advirtió *"no repetir tradición"* y luego ofreció 4 opciones que repetían tradición. Eso quemó tiempo de Juan.

**Cómo corregir**:
- Después de escribir las opciones, **releerlas verificando coherencia con la advertencia previa**
- Si hay contradicción, decir explícitamente *"sí, sé que dije X, pero las opciones nuevas hacen Y porque Z"*

---

## Patrones de aceptación / rechazo de Juan

### Lo que ACEPTA

| Tipo de frase | Ejemplo aprobado | Por qué funciona |
|---|---|---|
| Dos beats con coma | *"Técnica italiana, dulzura latina."* | Rima + paralelismo + premium accesible |
| Inversión sintáctica | *"Una cocina detrás de cada cucharada."* | Sorprende, no es lo esperado |
| Fragmento de historia | *"Después de la Segunda Guerra, su padre cruzó el océano…"* | Cinematográfico, story-driven |
| Premium + accesible | *"Pastelería premium en todo momento."* | Tensión núcleo de la marca |
| Eco entre secciones | *"...miles de cucharadas"* (Origen) tras *"Miles de cucharadas"* (Servicios) | Cohesión sutil |

### Lo que RECHAZA

| Tipo de frase | Ejemplo rechazado | Por qué falla |
|---|---|---|
| Cliché empresarial | *"Calidad sobre cantidad"* | Demasiado visto |
| Castellano forzado | *"Simplicidad ejecutada"* | Suena traducido del inglés |
| Solo conceptual sin imagen | *"Lo heredado, lo elegido"* | "Muy filosófico, le falta carne" |
| Repite palabra de otra sección | *"Heredada"* en Card 2 cuando ya está en Card 1 | Palabra gastada |
| Plana/sin musicalidad | *"Antojo simple, bien hecho"* (versión sin coma) | Falta ritmo |
| Demasiado snob | *"Alta repostería para los exigentes"* | Pierde accesibilidad |

---

## Frases-clave del feedback de Juan a interpretar

Cuando Juan dice estas frases, significa esto específicamente:

| Frase de Juan | Significa | Acción correcta |
|---|---|---|
| *"Lo siento simple"* | Falta cuerpo, peso, imagen, textura | Tirar opciones más completas (no más cortas) |
| *"No me convence"* | Dirección errada, no palabras | Preguntar qué dirección antes de más opciones |
| *"Más presencia"* | El elemento visual/textual se ve chico | Aumentar tamaño O cambiar tratamiento (no solo bumpeo de tamaño) |
| *"Falta rima"* | Las opciones suenan a folleto | Aplicar reglas de musicalidad de voice-and-tone |
| *"Muy raro suena"* | Algo en la sintaxis no fluye en español | Releer en voz alta, ajustar orden de palabras |
| *"Pierde algo"* | Faltó conservar un elemento del original | Identificar qué se perdió y restituir |
| *"No es premium"* | Cae a registro casual demasiado | Subir registro pero mantener accesibilidad |

---

## Atajos del workflow ya validados

### Cuando Juan da una idea/dirección concreta
**No volver a tirar 4 opciones genéricas.** Tomar su idea y refinarla en 2-3 variantes pulidas. Ejemplo: cuando Juan dijo *"un antojo simple bien hecho"*, lo correcto fue refinar a *"Antojo simple, bien hecho"* + 1-2 variantes con coma para ritmo. NO 4 opciones nuevas que ignoren su input.

### Cuando Juan rechaza varias rondas seguidas
**Pausar y replantear el ángulo**. Si rechazó 3+ veces, no son las palabras, es la dirección. Hacer pregunta meta: *"¿el problema es el tema o las palabras?"*

### Cuando Juan menciona un cambio estructural del negocio
Ejemplo: cuando mencionó la fábrica en Perú → cambió todo el registro geográfico (no solo Colombia). Las menciones de cambios estructurales deben **inmediatamente** revisarse contra el copy existente para detectar inconsistencias.

### Cuando hay duda entre dos opciones
**No empatar diplomáticamente**. Recomendar UNA con razón concreta. Juan elige más rápido cuando hay recomendación clara que cuando hay dos opciones "ambas válidas".

---

## Resumen visual: qué hacer / qué no hacer

### ✅ Hacer
- Tirar máximo 3 opciones, con 1 recomendada clara
- Mostrar cascade de la opción ANTES de las opciones
- Combinar premium + accesible en cada frase importante
- Aplicar reglas de musicalidad y paralelismo
- Verificar STEPPS (al menos 2 palancas activadas)
- Releer las opciones verificando coherencia con advertencias previas

### ❌ No hacer
- Tirar 4+ opciones cuando 2 alcanzaban
- Recomendar siempre la opción más editorial-snob
- Ofrecer opciones que repiten palabras-ancla de otras secciones (sin advertirlo)
- Ignorar la idea concreta que Juan propuso (volver a opciones genéricas)
- Empatar diplomáticamente con dos recomendaciones débiles
