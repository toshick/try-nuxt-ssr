// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image'],
  css: ['~/assets/global.css'],
  nitro: {
    preset: 'node-server',
  },
});
