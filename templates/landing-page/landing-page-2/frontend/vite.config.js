import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/templates/landing-page/landing-page-2/",
  plugins: [react()],
  server: {
    port: 3030,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/ws-busy': {
        target: 'ws://localhost:8080',
        ws: true,
      }
    }
  }
})
