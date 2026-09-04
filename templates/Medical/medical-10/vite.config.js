import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: path.resolve(__dirname, '../../frontend/public/templates/medical/medical-10'),
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
})
