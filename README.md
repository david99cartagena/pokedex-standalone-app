# 🦑 Pokedex Standalone

Aplicación web moderna desarrollada con **Angular 16** que consume la [PokéAPI](https://pokeapi.co/) para mostrar una colección interactiva de Pokémons. El proyecto destaca por el uso de **Componentes Standalone**, un sistema de rutas dinámico y una interfaz pulida con animaciones 3D.

Este proyecto se desarrolló para implementar y reforzar conceptos clave:

- **Arquitectura Standalone:** Eliminación de `NgModules` para una estructura más ligera y mantenible.
- **Consumo de APIs REST:** Uso de `HttpClient` y el operador `forkJoin` para realizar múltiples peticiones simultáneas.
- **Reactividad con RxJS:** Manejo de estados globales de carga y datos mediante `BehaviorSubject`.
- **UI Interactiva:** Animaciones CSS avanzadas (efecto flip 3D) y diseño adaptativo con **Bootstrap 5**.
- **Pipes Personalizados:** Transformación de datos en tiempo real para capitalizar textos y procesar rutas de imágenes complejas.

## 📸 Demo

🔗 **Visita la demo en línea:** [Pokedex Standalone en Netlify](https://leafy-kitten-674af2.netlify.app)

- **Pantalla principal**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_1.png)
- **Ver Pokémon**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_2.png)
- **Efecto Flip**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_3.png)
- **Botón Refresh**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_4.png)
- **Validación de ID** - Existente
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_5.png)
- **Validación de ID** - No Existente
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-standalone-app/refs/heads/main/media/Screenshot_6.png)

## 🚀 Tecnologías Utilizadas

- **Angular 16:** Framework principal utilizando la nueva API de Standalone Components.
- **TypeScript / RxJS:** Programación reactiva y tipado fuerte para los modelos de datos.
- **Bootstrap 5:** Framework de estilos para la estructura de rejilla (Grid) y componentes básicos.
- **CSS3:** Uso de `@keyframes`, `backface-visibility` y `preserve-3d` para la experiencia visual.
- **PokéAPI:** API externa para la obtención de datos en tiempo real.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── loader/          # Spinner de carga personalizado
│   └── pokemon-detail/  # Modal interactivo con lógica de volteo (flip)
├── pages/               # Componentes de página (Routed components)
│   └── pokemon-list/    # Contenedor principal y gestión de la lista
├── models/              # Interfaces de datos (Pokemon, Sprites, Ability)
├── services/            # Lógica de negocio y comunicación
│   ├── pokemon.service.ts            # Peticiones HTTP y flujo de datos
│   └── pokemon-type-color.service.ts # Lógica visual de tipos
├── pipes/               # Transformadores de plantillas
│   ├── capitalize.pipe.ts            # Formateo de nombres
│   └── pokemon-image.pipe.ts         # Resolución de rutas de imagen
├── app.routes.ts        # Definición de rutas standalone
└── app.config.ts        # Configuración global y proveedores (HttpClient)
```

## 🔑 Funcionalidades

✅ **Carga Aleatoria:** Algoritmo que selecciona 30 IDs únicos en cada sesión o refresco.
✅ **Navegación por URL:** El estado del modal está sincronizado con la ruta `/pokemon/:id`.
✅ **Filtro de Imágenes:** Pipe inteligente que prioriza el _Official Artwork_ sobre los _Sprites_ frontales.
✅ **Sistema de Colores Dinámico:** Servicio dedicado que asigna clases de Bootstrap según el tipo de Pokémon (Fuego, Agua, etc.).
✅ **Diseño Responsive:** Ajustes específicos para dispositivos móviles en modales y tarjetas.
✅ **Loader Integrado:** Feedback visual mientras se procesan las peticiones a la API.

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/pokedex-standalone-app.git
```

```bash
cd pokedex-standalone-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`
