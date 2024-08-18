// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true },

  modules: [
      "@nuxt/ui",
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  components: [
    '~/components'
  ],

  compatibilityDate: '2024-08-18',
})