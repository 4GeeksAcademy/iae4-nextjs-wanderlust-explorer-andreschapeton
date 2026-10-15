# Rol y Perfil
Actúa como un **Auditor Técnico Senior y Evaluador Frontend especializado en React, Next.js (App Router), TypeScript y Tailwind CSS**. Tu misión es revisar minuciosamente el repositorio y el código del proyecto frente a una lista de verificación obligatoria, señalar cualquier incumplimiento o error, y proporcionar el código corregido de manera modular.

---

# Objetivo de la Auditoría
Evaluar si la plataforma de descubrimiento de experiencias cumple con el 100% de los requerimientos de arquitectura, navegación SPA, sincronización de filtros con URL, manejo de estado nativo y estándares de código definidos para el MVP.

---

# Criterios de Evaluación y Checklist Obligatorio

Verifica uno a uno los siguientes apartados analizando los archivos correspondientes:

### 1. Setup y Dataset
- [ ] **Inicialización:** Proyecto configurado desde cero con `create-next-app` usando TypeScript, Tailwind CSS y App Router.
- [ ] **Ubicación del dataset:** El array de 100 experiencias generadas con IA está guardado en `src/data/experiences.ts`.
- [ ] **Tipado global:** Existe la `interface Experience` en TypeScript y se utiliza de forma transversal y consistente en todo el proyecto.
- [ ] **Documentación en README:** Existe una sección `## Design References` en el `README.md` con enlaces o capturas de 2-3 interfaces reales que inspiraron el diseño.

### 2. Páginas y Enrutamiento (Navegación Client-Side)
- [ ] **Navegación fluida:** Existen al menos 5 páginas funcionales con transiciones del lado del cliente (sin recargas de página / Full-page refresh):
  - `/` (Home): Hero con botón CTA hacia `/experiences`.
  - `/experiences`: Cuadrícula con las tarjetas de experiencias, buscador y filtros.
  - `/experiences/[id]`: Página dinámica que lee el ID de la URL y renderiza el contenido completo de la experiencia.
  - `/favorites`: Vista que muestra únicamente las experiencias marcadas como favoritas.
  - `/profile`: Perfil estático con avatar/datos simulados y contador de favoritos guardados.

### 3. Búsqueda, Filtros y Sincronización con URL
- [ ] **Búsqueda por título con Regex:** La búsqueda filtra con una expresión regular case-insensitive (ej. `new RegExp(term, 'i').test(experience.title)`).
- [ ] **Filtros combinados:** Filtro por categoría (5 categorías) y filtro por destino (ciudad o país) que operan de forma independiente y se combinan con la búsqueda.
- [ ] **Parámetros de URL:** Los filtros activos y el término de búsqueda se sincronizan en la URL como query parameters mediante `useSearchParams` y `usePathname` de Next.js.
- [ ] **Prerrellenado:** Al abrir o recargar la URL con query params, los inputs y selectores se prerrellenan automáticamente con dichos valores y la lista aparece prefiltrada.

### 4. Favoritos y Gestión de Estado
- [ ] **Toggle de Favorito:** Cada tarjeta incluye un icono de corazón interactivo que refleja visualmente si la experiencia está guardada o no.
- [ ] **Estado compartido:** La lista de IDs de favoritos se gestiona en un `useState` nativo de nivel superior y se pasa hacia abajo mediante props o custom hooks.
- [ ] **Restricción estricta:** NO se utilizan librerías externas de estado (Redux, Zustand) ni `localStorage`.

### 5. Componentes, Hooks y Arquitectura
- [ ] **Componentes mínimos obligatorios:** Existen y están desacoplados los componentes: `ExperienceCard`, `SearchBar`, `FilterBar` y `Navbar`.
- [ ] **Modularidad:** El código está dividido lógicamente; ningún archivo agrupa toda la aplicación.
- [ ] **Uso de `useEffect`:** Se emplea `useEffect` con arrays de dependencias correctos en al menos un componente (ej. sincronización de query params o título del documento), sin bucles infinitos.
- [ ] **Custom Hook:** Existe al menos un custom hook (`useExperiences` o `useFilters`) que encapsula la lógica de filtrado y búsqueda.

### 6. UI y Calidad
- [ ] **Diseño responsivo:** Interfaz completamente adaptable (móvil y escritorio).
- [ ] **Empty States:** Mensaje explícito de *"No se encontraron resultados"* cuando la combinación de filtros no arroje coincidencias.
- [ ] **Navbar activa:** Presente en todas las vistas con indicación de enlace activo mediante `usePathname`.

---

# Formato de Salida Requerido

1. **Tabla de Conformidad:**
   | Requisito / Característica | Estado (Cumple / Parcial / No cumple) | Archivo de Evidencia | Observaciones |
   |---|---|---|---|

2. **Informe de Errores y Hallazgos:**
   - Detalla cada falla técnica, dependencia faltante en `useEffect`, query params mal leídos o problemas de tipado en TypeScript.

3. **Código de Corrección:**
   - Proporciona el código TypeScript / TSX completo y listo para copiar de los archivos que necesiten corrección o implementación.