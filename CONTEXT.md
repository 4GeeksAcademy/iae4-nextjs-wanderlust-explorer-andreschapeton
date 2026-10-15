# ROL
Actúa como un Desarrollador Frontend Senior experto en React, Next.js y Tailwind CSS. Tu objetivo es diseñar e implementar el MVP del explorador de experiencias para **Wanderlust Labs** (startup travel-tech), asegurando una interfaz visual limpia tipo descubrimiento, arquitectura modular y una experiencia de usuario fluida sin recargas de página.

---

# STACK
- **React.js**: Para toda la interactividad, gestión de estado local, lógica de filtros y ciclo de vida de los componentes.
- **Next.js (App Router)**: Para el enrutamiento multipágina del explorador, páginas estáticas y dinámicas, y sincronización client-side con URL query parameters.
- **Tailwind CSS**: De forma estricta y exclusiva para el diseño, colores, espaciados, tipografías y microinteracciones (`hover:`, `focus:`).
- **HTML5 Semántico**: Para estructurar el documento de forma accesible y estándar (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Mobile-first y un CEO que ayude en las busquedas. 
- **TypeScript**: Para el tipado estricto de las estructuras de datos (modelo de experiencia, filtros y props de componentes).

---

# RESTRICCIONES
1. **Límites de tecnologías**:
   - Ceñirse **única y exclusivamente** a React, Next.js, Tailwind CSS y HTML5 semántico.
   - Prohibido el uso de librerías CSS adicionales, frameworks de componentes externos (ej. MUI, Bootstrap) o CSS plano fuera de Tailwind.
2. **Paso previo obligatorio (Design References)**:
   - Antes de escribir cualquier componente o código funcional, debes identificar 2 o 3 interfaces web reales de descubrimiento de experiencias/viajes (ej. Airbnb Experiences, GetYourGuide, Viator).
   - Documenta estas referencias y sus patrones visuales clave en el archivo `README.md` bajo una sección obligatoria titulada `"Design References"`.
3. **Persistencia y Estado**:
   - La lista de favoritos debe manejarse en memoria mediante un `useState` en un nivel superior (ej. Layout o Provider de React) y pasarse como props donde se requiera. No implementar persistencia en base de datos ni `localStorage`.
4. **Navegación e Interactividad**:
   - La navegación y el filtrado deben ser completamente fluidos y sin recargas de página completas (comportamiento client-side).

---

# CONTENIDO

### 1. Dataset de Experiencias (`src/data/experiences.ts`)
- **Interface Experience**Genera un archivo TypeScript con un array tipado de **100 experiencias** generadas con IA.
- Cada objeto debe contener obligatoriamente los siguientes atributos:
  - `id`: Identificador único (string o number).
  - `title`: String; Nombre de la experiencia (ej. *"Ruta de vela por el Adriático"*).
  - `description`: Descripción atractiva de la actividad.
  - `category`: Una de las siguientes categorías exactas: `'Adventure'`, `'Culture'`, `'Food'`, `'Wellness'`, `'Nature'`.
  - `destination`: Formato "Ciudad, País" (ej. *"Dubrovnik, Croacia"*, *"Bangkok, Tailandia"*).
  - `price`: Valor numérico del costo.
  - `rating`: Valor numérico decimal (ej. `4.8`).
  - `imageUrl`: URL de placeholder de imagen de alta calidad.

---

### 2. Estructura de Páginas y Enrutamiento

1. **`/` — Home**:
   - Sección Hero llamativa que transmita el concepto travel-tech de Wanderlust Labs.
   - Botón CTA principal ("Explorar experiencias") que redirija a `/experiences` mediante el componente `<Link>`.

2. **`/experiences` — Explorador**:
   - **Barra de búsqueda**: Input de texto que filtre por título en tiempo real mediante una expresión regular case-insensitive (ej. `/termino/i`).
   - **Sistema de filtros**: Al menos dos selectores independientes (Categoría y Destino) que combinen su criterio con el término de búsqueda.
   - **Sincronización con la URL**: Los filtros y el término de búsqueda deben reflejarse como query parameters (ej. `/experiences?search=vela&category=adventure&destination=Croatia`). Al recargar o compartir la URL, los inputs y selects deben inicializarse con los valores presentes en los query params.
   - **Grilla de resultados**: Listado responsivo de tarjetas de experiencias. Cada tarjeta incluye imagen, título, categoría, destino, precio, rating y botón de favoritos.

3. **`/experiences/[id]` — Detalle de Experiencia**:
   - Ruta dinámica en Next.js.
   - Recupera y muestra la información completa de la experiencia seleccionada buscando por su `id` en el dataset local.
   - Botón para volver al listado conservando los filtros en caso de estar disponibles.

4. **`/favorites` — Favoritos**:
   - Listado de tarjetas de aquellas experiencias marcadas actualmente como favoritas por el usuario.
   - Mensaje de estado vacío ("Aún no has guardado experiencias") si la lista está vacía.

5. **`/profile` — Perfil**:
   - Vista estática con datos simulados del usuario (nombre, avatar, email, biografía breve).
   - Tarjeta de resumen que muestre un contador dinámico con el número total de favoritos guardados.

---

### 3. Funcionalidad del Sistema de Favoritos
- Cada tarjeta de experiencia (en el explorador y en la vista de detalle) debe incluir un botón interactivo con un icono de corazón.
- Al hacer clic, debe alternar el estado (agregar/quitar) en el array de favoritos gestionado en el estado de React.

---

### Entregables Esperados
1. Archivo README.md con la sección ## Design References documentando las 2-3 UIs reales de inspiración.

2. Archivo src/data/experiences.ts que exporte la interface Experience y el array con las 100 experiencias generadas.

3. Componentes modulares con HTML5 semántico y estilos exclusivos de Tailwind CSS.

4. Las 5 páginas requeridas (/, /experiences, /experiences/[id], /favorites, /profile) funcionales en Next.js.