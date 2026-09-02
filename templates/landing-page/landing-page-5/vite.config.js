import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/templates/landing-page/landing-page-5/',
  plugins: [react()],
  optimizeDeps: {
    entries: ['index.html', 'src/**/*.{js,jsx,ts,tsx}']
  }
})
