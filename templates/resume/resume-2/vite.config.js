import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Template 3 — Dr. Maya Ellison | Consultant Cardiologist
// Self-contained Vite config. Do NOT share or merge with other template configs.
export default defineConfig({
  base: "/templates/resume/resume-2/",
  plugins: [react()],
  // Scoped build output keeps dist isolated from other templates
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // Fixed dev port prevents collisions when running multiple templates simultaneously
  server: {
    port: 5176,
    strictPort: true,
  },
  preview: {
    port: 4176,
    strictPort: true,
  },
})

