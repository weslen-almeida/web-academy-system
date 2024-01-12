// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    }
  },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
  ],
  // Usar as Stores Globalmente (não precisa importar)
  // pinia: {
  //   storesDirs: ['./stores/**']
  // }
})
