/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          text: '#17202A',
          muted: '#667085',
          accent: '#D4A253', // Warm gold/amber
          light: '#F7F7F5',
          border: '#E7E5E1',
          dark: '#111827',
        }
      },
      fontFamily: {
        corporate: ['"Playfair Display"', 'serif'],
        tech: ['"Outfit"', 'sans-serif'],
        creative: ['"Syne"', 'sans-serif'],
        consulting: ['"Inter"', 'sans-serif'],
        startup: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
