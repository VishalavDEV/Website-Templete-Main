import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/templates/resume/resume-3/",
  plugins: [react()],
  server: {
    port: 5178,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})

