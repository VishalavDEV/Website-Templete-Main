import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/templates/cooperate/cooperate-5/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
})
