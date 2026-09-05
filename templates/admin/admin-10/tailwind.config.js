/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7dffff',
          300: '#9ec7ff',
          400: '#6ea6ff',
          500: '#3b76f6',
          600: '#2558eb',
          700: '#1d43d8',
          800: '#1e38af',
          900: '#1e328a',
          950: '#131e54',
        },
        navy: {
          800: '#0f172a',
          850: '#0b1324',
          900: '#090d16',
          950: '#04070d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04), 0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.1)',
        'accent': '0 10px 20px -5px rgba(59, 118, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
