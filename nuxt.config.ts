// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: true }
})
