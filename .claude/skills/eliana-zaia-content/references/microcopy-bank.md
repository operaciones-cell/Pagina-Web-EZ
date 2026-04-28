# Microcopy Bank — banco aprobado

Texto pequeño con voz de marca. Si una situación no está aquí, redactar siguiendo el principio: **claridad por encima de personalidad, pero ambas pueden coexistir**.

---

## Botones (CTAs)

### CTAs principales (acción de conversión)

| Contexto | Texto |
|---|---|
| Hero global | "Hablemos de tu evento" |
| Sección eventos | "Cuéntanos tu ocasión" |
| Sección B2B | "Conversemos como aliados" |
| Productos | "Encargar para mi mesa" |
| Contacto enviado | "Enviar mensaje" |
| Suscripción newsletter | "Recibir la carta" |

### CTAs secundarios (link / ghost)

| Contexto | Texto |
|---|---|
| Ver más productos | "Ver la carta completa" |
| Ver puntos de venta | "Ver puntos de venta →" |
| Volver al inicio | "Volver al inicio" |
| Conocer la historia | "Conocer el oficio" |
| Ver galería | "Ver más piezas" |
| Descargar carta | "Descargar carta en PDF" |

### Lo que NO usamos como CTA

- ❌ "Click aquí"
- ❌ "Más info"
- ❌ "Comprar ahora"
- ❌ "Saber más"
- ❌ "Empezar"
- ❌ "¡Quiero!"

---

## Formularios

### Placeholders (en lugar de labels formales)

| Campo | Placeholder |
|---|---|
| Nombre | "tu nombre" |
| Email | "tu correo" |
| Teléfono | "tu teléfono (opcional)" |
| Mensaje | "cuéntanos qué tienes en mente" |
| Empresa (B2B) | "tu casa o restaurante" |
| Fecha del evento | "fecha del evento" |
| Cantidad de personas | "personas aproximadas" |
| Tipo de evento | "tipo de ocasión" |

### Labels obligatorios (para accesibilidad — visualmente sr-only, pero presentes en HTML)

Siempre incluir `<label>` con el nombre del campo aunque el placeholder sea más casual. Es por accesibilidad, no se ve.

### Texto de ayuda bajo el campo

| Caso | Texto |
|---|---|
| Email | "no compartimos tu correo" |
| Teléfono opcional | "solo si prefieres que te llamemos" |
| Fecha | "podemos trabajar con flexibilidad" |

---

## Estados (carga, éxito, error, vacío)

### Cargando

- Botón en proceso: "Enviando…"
- Página cargando: "Un momento" (sin spinner agresivo, mejor skeleton sutil)

### Éxito

| Acción | Mensaje |
|---|---|
| Formulario contacto enviado | "Recibimos tu mensaje. Te escribimos en menos de 24 horas." |
| Suscripción newsletter | "Listo. Recibirás la carta cada estación." |
| Pedido enviado | "Recibimos tu encargo. Te confirmamos los detalles por correo." |

### Error

Tono: claro, sin culpar al usuario, sin minimizar.

| Caso | Mensaje |
|---|---|
| Email inválido | "Revisa el formato del correo" |
| Campo vacío requerido | "Falta este dato" |
| Error de servidor | "Algo no funcionó. Intenta de nuevo en un momento, o escríbenos por WhatsApp." |
| Sin conexión | "Parece que no hay conexión. Revisa tu internet." |
| Archivo muy grande | "El archivo supera los 5MB. Comprímelo o envíanos un enlace." |

### Estados vacíos

| Caso | Mensaje |
|---|---|
| Carrito vacío (si aplica) | "Tu mesa está vacía. [Ver la carta]" |
| Búsqueda sin resultados | "No encontramos esa pieza. ¿Probamos con otro nombre?" |
| Galería sin imágenes | "Pronto compartiremos imágenes de esta sección." |
| Lista de aliados (en mantenimiento) | "Estamos actualizando los puntos de venta. Escríbenos para conocer el más cercano." |

---

## Navegación / wayfinding

| Contexto | Texto |
|---|---|
| Volver atrás | "← Volver" |
| Ir al inicio | "Inicio" |
| Skip to content | (no usar — Juan lo eliminó del sitio) |
| Cerrar modal | "Cerrar" o ícono ✕ con `aria-label="Cerrar"` |
| Menú móvil abierto | "Cerrar menú" |
| Menú móvil cerrado | "Abrir menú" |

---

## Tooltips y ayudas contextuales

Tono: neutro, informativo, sin emoji.

| Contexto | Texto |
|---|---|
| Ícono WhatsApp | "Hablar por WhatsApp" |
| Ícono Instagram | "Ver Instagram" |
| Ícono email | "Escribir un correo" |
| Ícono ubicación | "Ver dirección" |

---

## Cookies / privacidad / legal (si aplica)

Tono: claro y honesto, sin "valoramos tu privacidad" genérico.

| Contexto | Texto |
|---|---|
| Banner cookies | "Usamos cookies para entender qué partes del sitio funcionan. Puedes [aceptar] o [solo esenciales]." |
| Política privacidad CTA | "Leer política de privacidad" |
| Términos | "Leer términos" |

---

## Confirmaciones de acción destructiva

| Contexto | Texto |
|---|---|
| Eliminar item del carrito | "¿Quitamos esta pieza?" |
| Cerrar formulario sin enviar | "Si sales ahora, perderás lo escrito. ¿Continuar?" |
| Cancelar pedido | "¿Cancelamos el pedido? No se podrá deshacer." |

---

## Footer

| Sección | Texto |
|---|---|
| Tagline | "Postres artesanales premium · Zipaquirá, desde 2010" |
| Copyright | "© 2026 Eliana Zaia. Todos los derechos reservados." |
| Suscripción newsletter en footer | "Recibe la carta cada estación" + campo email + CTA "Suscribirme" |

---

## Reglas de microcopy

1. **Una idea por mensaje**: no apilar información en errores o confirmaciones.
2. **Verbos descriptivos, no imperativos vacíos**: "Hablemos" > "Contáctanos".
3. **Sin emojis** en microcopy del sitio (sí en redes).
4. **Sin signos de exclamación** salvo casos muy específicos (nunca en errores ni en confirmaciones de éxito).
5. **Personalidad solo cuando suma**: si una situación es seria (error de pago), claridad pura. Si es ligera (vacío, suscripción), un toque de voz.
