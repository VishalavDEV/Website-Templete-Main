import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/templates/hotel/hotel-10/',
  plugins: [react()],
});