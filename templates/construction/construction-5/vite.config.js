import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
