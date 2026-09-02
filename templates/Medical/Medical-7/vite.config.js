import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  base: '/templates/medical/medical-7/',
  plugins: [react()],
});