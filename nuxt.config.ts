// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','shadcn-nuxt'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  devtools: {
    timeline: {
      enabled: true
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})