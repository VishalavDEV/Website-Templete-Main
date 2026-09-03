import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  base: "/templates/landing-page/landing-page-9/",
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  }
})
