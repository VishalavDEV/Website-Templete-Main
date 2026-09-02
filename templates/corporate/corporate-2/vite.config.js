import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/cooperate/cooperate-2/',
  plugins: [react()],
})
