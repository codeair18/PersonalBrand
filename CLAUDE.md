# CLAUDE.md - Personal Brand Website (Nuxt 3)

## Build Commands
- `npm run dev` - Start development server with HTTPS (uses local SSL certs)
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run postinstall` - Run Nuxt prepare (automatically run after install)

## Code Style Guidelines
- **Vue Components**: Use Vue 3 Composition API with `<script setup lang="ts">` 
- **Typing**: Use TypeScript for all type definitions
- **Imports**: Use `~/` alias for project-level imports
- **CSS/Styling**: Use SCSS with scoped styles in components
- **Error Handling**: Use try/catch for async operations
- **Naming**: 
  - Components: PascalCase (e.g., DayNight.vue)
  - Variables/Methods: camelCase
  - CSS: kebab-case
- **Formatting**: Follow Vue style guide (single quotes, 2 space indent)
- **i18n**: Use `$t()` for translations; keys in i18n.config.ts
- **Dark/Light Theme**: Use `useColorMode()` for theme switching

## Project Structure
- Nuxt 3 with @nuxt/ui and @nuxt/ui-pro for UI components
- i18n for multilingual support (en/pl)
- Uses @vueuse/core for utilities like useMouse