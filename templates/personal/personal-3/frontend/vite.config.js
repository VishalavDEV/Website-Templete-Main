import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/personal/personal-3/',
  plugins: [react()],
  server: {
    port: 5176,
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

