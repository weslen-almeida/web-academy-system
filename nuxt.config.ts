import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    }
  },

  css:[
    // "vuetify/styles/main.sass", 
    "@mdi/font/css/materialdesignicons.css"
  ],
  
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    "@pinia/nuxt",
  ],

  plugins: [
    '@/plugins/vuetify',
  ],
  // Usar as Stores Globalmente (não precisa importar)
  // pinia: {
  //   storesDirs: ['./stores/**']
  // }
})
