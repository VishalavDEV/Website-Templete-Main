import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  base: '/templates/personal/personal-7/',
  plugins: [react()],
})
