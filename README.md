
# 🥘 Mister Paella

Una aplicación web para compartir la receta tradicional de paella de mi padre. Descubre los secretos de una auténtica paella española con ingredientes calculados automáticamente, temporizador integrado y guía paso a paso.

🌐 **Sitio web:** [misterpaella.es](https://misterpaella.es)

## ✨ Características

- 🧮 **Calculadora inteligente**: Calcula automáticamente las cantidades de ingredientes según el número de comensales
- ⏱️ **Temporizador integrado**: Temporizadores para cada paso de la cocción
- 📋 **Lista de ingredientes**: Checklist interactivo para no olvidar nada
- 👨‍🍳 **Guía paso a paso**: Instrucciones detalladas siguiendo la receta tradicional
- 🎉 **Experiencia interactiva**: Animaciones y efectos sonoros
- 📱 **Diseño responsive**: Optimizada para móviles y escritorio

## 🛠️ Tecnologías

- **Framework:** [Nuxt 3](https://nuxt.com/) con Vue 3
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) adaptado para Vue
- **Autenticación:** [Supabase](https://supabase.com/)
- **Estado:** [Pinia](https://pinia.vuejs.org/)
- **Animaciones:** [Vue3 Lottie](https://github.com/megasanjay/vue3-lottie)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 🚀 Instalación y Desarrollo

### Prerequisitos
- Node.js (versión 18 o superior)
- npm, yarn o pnpm

### Configuración inicial

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd misterpaella
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Scripts disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción (Cloudflare Pages)
npm run build

# Generar sitio estático
npm run generate

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del proyecto

```
misterpaella/
├── components/          # Componentes Vue reutilizables
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── Calculator.vue  # Calculadora de ingredientes
│   ├── Timer.vue       # Temporizador de cocción
│   └── ...
├── pages/              # Páginas de la aplicación
├── stores/             # Estado global (Pinia)
├── layouts/            # Layouts de la aplicación
├── assets/             # Assets estáticos
│   ├── css/           # Estilos globales
│   └── sound/         # Efectos de sonido
└── public/             # Archivos públicos
```

## 🍚 Sobre la receta

Esta aplicación preserva y comparte la receta tradicional de paella transmitida de generación en generación. Incluye:

- Ingredientes auténticos y proporciones exactas
- Técnicas tradicionales de cocción
- Consejos y trucos del maestro paellero
- Tiempos precisos para cada paso

## 🤝 Contribuciones

Este es un proyecto personal para honrar la tradición familiar, pero las mejoras técnicas son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

*Hecho con ❤️ para preservar las tradiciones familiares y compartir el amor por la auténtica paella española.*
