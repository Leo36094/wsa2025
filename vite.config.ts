import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/variables.scss" as *;
        @use "@/assets/styles/mixins.scss" as *;
        `
      }
    },
  },
  base: process.env.BUILD_ENV === 'live' ? '/' : '/wsa2025/',
})
