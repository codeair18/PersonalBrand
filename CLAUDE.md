# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal brand website built with Nuxt 3, featuring a portfolio/CV layout. The site showcases professional experience, skills, and projects with multilingual support (Polish/English) and dark/light mode theming.

## Development Commands

### Development Server
```bash
npm run dev
```
Note: Development server runs with HTTPS using self-signed certificates (localhost.crt/localhost.key) on port 3001.

### Build Commands
```bash
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

### Dependency Management
```bash
npm install        # Install dependencies
npm run postinstall # Nuxt preparation (runs automatically after install)
```

## Architecture & Technology Stack

### Core Framework
- **Nuxt 3** - Vue.js framework with SSR/SSG support
- **Vue 3** - Frontend framework with Composition API
- **TypeScript** - Type-safe JavaScript (configured via tsconfig.json)

### UI & Styling
- **Nuxt UI** - Component library (@nuxt/ui)
- **Nuxt UI Pro** - Premium component library (@nuxt/ui-pro)
- **Sass** - CSS preprocessor
- **Tailwind CSS** - Utility-first CSS framework (via Nuxt UI)

### Key Features
- **Internationalization** - @nuxtjs/i18n module with Polish/English support
- **Dark/Light Mode** - Theme switcher with custom CSS variables
- **VueUse** - Composition utilities (@vueuse/core, @vueuse/nuxt)
- **Responsive Design** - Mobile-first approach with radial gradient mouse tracking

## Project Structure

```
├── components/
│   └── switcher/           # Theme switcher components
│       ├── DayNight.vue
│       └── DayNight2.vue
├── pages/
│   ├── index.vue          # Main portfolio page
│   └── cv.vue             # CV/resume page
├── public/
│   └── static/            # Static assets
├── server/                # Server-side code
├── app.vue               # Root component
├── nuxt.config.ts        # Nuxt configuration
├── app.config.ts         # App configuration (UI theme)
├── i18n.config.ts        # Internationalization config
└── tsconfig.json         # TypeScript configuration
```

## Configuration Details

### Nuxt Configuration
- Extends @nuxt/ui-pro
- Modules: @nuxt/ui, @vueuse/nuxt, @nuxtjs/i18n
- Auto-imports components from ~/components
- DevTools enabled for development

### UI Theme Configuration
- Primary color: lime
- Gray color: neutral
- Custom CSS variables for light/dark themes

### Internationalization
- Default locale: Polish (pl)
- Supported locales: Polish (pl), English (en)
- Legacy mode disabled (uses Vue I18n v9+)

## Development Notes

### Page Structure
- `pages/index.vue` - Main portfolio page with experience timeline, skills, and social links
- `pages/cv.vue` - Dedicated CV page with structured resume format
- Both pages share similar data structures but with different layouts

### Data Management
- Experience data defined in-component with reactive refs
- Skills automatically aggregated from experience entries
- Bilingual content with i18n integration

### Styling Approach
- Custom CSS variables for theme switching
- Responsive design with mobile-first approach
- Mouse tracking radial gradient effect on desktop
- SCSS for advanced styling features

### SSL Development
The development server uses HTTPS with self-signed certificates for local development. The certificates (localhost.crt, localhost.key) are already configured in the npm dev script.

## Common Tasks

When working with this codebase:
1. **Adding new experience entries** - Update the experience array in the relevant page component
2. **Modifying themes** - Update CSS variables in the style sections
3. **Internationalization** - Add new translations to i18n.config.ts
4. **Component development** - Place new components in appropriate subdirectories under /components
5. **Styling changes** - Use existing CSS variable system for consistency

## Important Files to Understand

- `pages/index.vue:238-396` - Main experience data structure
- `pages/cv.vue:7-314` - CV page experience data
- `i18n.config.ts:4-42` - All translatable content
- `nuxt.config.ts` - Core framework configuration
- `app.config.ts` - UI theme settings
# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.