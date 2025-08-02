# Personal Brand Website

A modern personal portfolio and CV website built with Nuxt 3, showcasing professional experience, skills, and projects with multilingual support and responsive design.

## Features

- **Multilingual Support** - Polish and English localization
- **Dark/Light Mode** - Theme switcher with custom CSS variables
- **Responsive Design** - Mobile-first approach with interactive elements
- **Portfolio & CV Pages** - Dedicated layouts for different content types
- **HTTPS Development** - Secure local development environment

## Technology Stack

- **Nuxt 3** - Vue.js framework with SSR/SSG support
- **Vue 3** - Frontend framework with Composition API
- **TypeScript** - Type-safe JavaScript
- **Nuxt UI** - Component library with Tailwind CSS
- **Sass** - CSS preprocessor
- **VueUse** - Composition utilities

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation

```bash
npm install
```

### Development Server

Start the development server with HTTPS on port 3001:

```bash
npm run dev
```

The site will be available at `https://localhost:3001`

### Build Commands

```bash
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## Project Structure

```
├── components/
│   └── switcher/           # Theme switcher components
├── pages/
│   ├── index.vue          # Main portfolio page
│   └── cv.vue             # CV/resume page
├── public/
│   └── static/            # Static assets
├── server/                # Server-side code
├── app.vue               # Root component
├── nuxt.config.ts        # Nuxt configuration
├── app.config.ts         # App configuration
├── i18n.config.ts        # Internationalization config
└── CLAUDE.md             # Development guidelines
```

## Development

The project uses:
- Self-signed SSL certificates for HTTPS development
- Custom CSS variables for theming
- Reactive data structures for experience and skills
- Auto-imported components

For detailed development guidelines, see [CLAUDE.md](./CLAUDE.md).
