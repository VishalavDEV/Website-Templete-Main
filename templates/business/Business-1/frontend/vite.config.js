import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/buisness/Business-1/',
  plugins: [react()],
})
