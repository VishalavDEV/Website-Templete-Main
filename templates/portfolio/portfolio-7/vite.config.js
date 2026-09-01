import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/templates/portfolio/portfolio-7/',
  plugins: [react(), tailwindcss()],
});
