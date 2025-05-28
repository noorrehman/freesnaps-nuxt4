// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/icon', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },

  image: {
    provider: process.env.PROVIDER,
    cloudinary: {
      baseURL: 'https://freesnaps.s3.eu-north-1.amazonaws.com/web/front_web_images'
    },
    providers: {
      s3Provider: {
        name: 's3Provider',
        provider: '~/providers/s3-provider.ts',
        options: {
          baseURL: "https://freesnaps.s3.eu-north-1.amazonaws.com/web/front_web_images"
        }
      }
    }
  },
})