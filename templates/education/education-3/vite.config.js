import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.js.org/config/
export default defineConfig({
  base: './',
  base: "/templates/education/education-3/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
