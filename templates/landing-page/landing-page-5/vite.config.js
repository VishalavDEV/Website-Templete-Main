import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {
      plugins: []
    }
  },
  server: {
    port: 5178,
    host: '0.0.0.0'
  }
})
