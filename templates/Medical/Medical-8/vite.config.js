import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: path.resolve(__dirname, '../../frontend/public/templates/medical/medical-8'),
    emptyOutDir: true,
  },
  plugins: [react()],
})
