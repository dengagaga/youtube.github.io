// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title:"YouTube",
      
    },
    
  },
  devtools: { enabled: true }
})
