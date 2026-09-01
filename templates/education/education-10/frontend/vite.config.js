import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/education/education-10/',
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
})
