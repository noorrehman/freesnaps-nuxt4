// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/icon',],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  future: {
    compatibilityVersion: 4,
  },

  ui: {
    // Optional: set default theme here
    defaultTheme: 'light',
  },
  colorMode: {
    preference: 'light', // default theme on first load
    fallback: 'light', // fallback when no preference is found
    classSuffix: '', // use `light` or `dark` as class, not `-light`
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