import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/cooperate/cooperate-1/',
  plugins: [react()],
})
