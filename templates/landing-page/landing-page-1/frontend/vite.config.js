import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  base: "/templates/landing-page/landing-page-1/",
  plugins: [react()],
})
