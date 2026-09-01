import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/templates/onepage/onepage-4/",
  plugins: [react()],
})
