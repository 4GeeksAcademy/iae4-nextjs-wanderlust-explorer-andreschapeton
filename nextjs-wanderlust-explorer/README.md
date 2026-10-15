# Wanderlust Explorer - MVP Travel Experience Discovery Platform

Wanderlust Explorer es una plataforma web de descubrimiento de experiencias de viaje construida con React, Next.js, Tailwind CSS y HTML5 semántico. Proporciona una interfaz moderna y fluida para explorar, filtrar y guardar experiencias de viaje únicas alrededor del mundo.

## 🎯 Características Principales

### 1. **Explorador de Experiencias**
- Catálogo de 100+ experiencias de viaje curadas
- Sistema de búsqueda en tiempo real
- Filtros por categoría y destino
- Sincronización de filtros con URL query parameters
- Interfaz responsiva y moderna

### 2. **Sistema de Favoritos**
- Guardar experiencias favoritas en memoria
- Contador dinámico en la navegación
- Persisencia mediante React Context
- Gestión sin recargas de página

### 3. **Detalle de Experiencias**
- Información completa de cada experiencia
- Imagen de alta calidad
- Rating y precio
- Botón para guardar favoritos
- Información sobre lo que incluye

### 4. **Perfil de Usuario**
- Datos personales del usuario
- Estadísticas de viaje
- Contador de favoritos guardados
- Enlaces a configuración

## 📑 Páginas del Proyecto

1. **Home (`/`)**: Landing page con propuesta de valor y CTA principal
2. **Explorador (`/experiences`)**: Búsqueda y filtrado de experiencias
3. **Detalle (`/experiences/[id]`)**: Información completa de una experiencia
4. **Favoritos (`/favorites`)**: Lista de experiencias guardadas
5. **Perfil (`/profile`)**: Información del usuario y estadísticas

## 🎨 Design References

Este proyecto se inspira en tres plataformas líderes de descubrimiento de experiencias:

### 1. **Airbnb Experiences**
- **URL**: https://www.airbnb.com/experiences
- **Patrones visuales clave**:
  - Tarjetas de experiencia con imágenes de alta calidad
  - Rating y reviews prominentes
  - Sistema de categorías clara
  - Hero section inspirador
  - Paleta de colores cálida y acogedora
  - Transiciones suaves al pasar el ratón

### 2. **GetYourGuide**
- **URL**: https://www.getyourguide.com/
- **Patrones visuales clave**:
  - Barra de búsqueda central y destacada
  - Filtros laterales intuitivos
  - Grillas de experiencias responsivas
  - Información de precio prominente
  - Iconografía clara y moderna
  - CTA botones destacados

### 3. **Viator**
- **URL**: https://www.viator.com/
- **Patrones visuales clave**:
  - Navegación clara y accesible
  - Tarjetas con información dinámica
  - Destinos agrupados por ubicación
  - Sistema de filtros avanzados
  - Información de descuento destacada
  - Mobile-first responsive design

## 🛠️ Stack Tecnológico

- **React 19.3.0**: Librería de interfaz de usuario
- **Next.js 16.4.1**: Framework de React con App Router
- **Tailwind CSS 4**: Framework de utilidades CSS
- **TypeScript 5**: Tipado estricto
- **Lucide React**: Iconografía moderna
- **HTML5 Semántico**: Estructura accesible

## 📊 Dataset

El proyecto incluye un archivo `src/data/experiences.ts` con 100 experiencias generadas con IA. Cada experiencia contiene:

```typescript
interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
```

### Categorías de Experiencias
- **Adventure**: Actividades de aventura y deportes extremos
- **Culture**: Tours culturales y experiencias artísticas
- **Food**: Experiencias gastronómicas y culinarias
- **Wellness**: Retiros de bienestar y meditación
- **Nature**: Experiencias de naturaleza y ecoturismo

## 🚀 Instalación y Desarrollo

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm build

# Iniciar servidor de producción
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx                 # Layout raíz con Context de favoritos
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Estilos globales
│   ├── experiences/
│   │   ├── page.tsx               # Explorador de experiencias
│   │   └── [id]/
│   │       └── page.tsx           # Detalle de experiencia
│   ├── favorites/
│   │   └── page.tsx               # Página de favoritos
│   └── profile/
│       └── page.tsx               # Página de perfil
├── components/
│   ├── Header.tsx                 # Navegación principal
│   ├── Footer.tsx                 # Pie de página
│   └── ExperienceCard.tsx         # Tarjeta reutilizable
└── data/
    └── experiences.ts             # Dataset de 100 experiencias
```

## ✨ Características Técnicas

### 1. **Navegación Fluida**
- Sin recargas de página completas
- Sincronización de URL con estado
- Conservación de filtros al navegar

### 2. **Componentes Modulares**
- Componentes reutilizables
- Separación de responsabilidades
- HTML5 semántico en cada componente

### 3. **Gestión de Estado**
- React Context para favoritos
- useState para filtros locales
- useMemo para optimización

### 4. **Diseño Responsivo**
- Mobile-first approach
- Breakpoints Tailwind CSS
- Adaptación a todos los tamaños de pantalla

### 5. **Accesibilidad**
- HTML5 semántico
- ARIA labels donde sea necesario
- Navegación con teclado
- Alto contraste de colores

## 🎯 Casos de Uso Principales

1. **Exploración de Experiencias**
   - Usuario accede a la home
   - Hace clic en "Explorar Experiencias"
   - Filtra por categoría y destino
   - Guarda favoritos con un clic

2. **Búsqueda Específica**
   - Usuario busca una experiencia en la barra
   - Los resultados se filtran en tiempo real
   - URL se actualiza con los parámetros

3. **Gestión de Favoritos**
   - Usuario guarda experiencias
   - Accede a favoritos desde el ícono en el header
   - Ve todas sus experiencias guardadas
   - Puede quitarlas de favoritos

## 🎨 Paleta de Colores

- **Primario**: Azul (`#0066FF`) - Confianza y profesionalismo
- **Secundario**: Púrpura (`#7B68EE`) - Creatividad e innovación
- **Acentos**: Rojo (`#FF4444`) para favoritos
- **Neutrals**: Grises naturales para fondo y texto

## 📱 Dispositivos Soportados

- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Mejoras Futuras

- [ ] Implementar autenticación de usuarios
- [ ] Persistencia de favoritos en base de datos
- [ ] Sistema de reviews y ratings
- [ ] Integración con sistema de pagos
- [ ] Búsqueda avanzada con más filtros
- [ ] Mapa interactivo de destinos
- [ ] Sistema de recomendaciones personalizadas
- [ ] Chat en tiempo real con guías

## 📄 Licencia

Este proyecto es parte de Wanderlust Labs - Innovación en Travel-Tech

---

**Desarrollado con ❤️ por el equipo de Wanderlust Labs**

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
