import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  base: '/templates/coming-soon/comingsoon-10/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
})
