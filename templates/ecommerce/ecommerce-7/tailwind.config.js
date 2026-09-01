/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff5f7',
          100: '#ffe6eb',
          200: '#ffccd6',
          300: '#ffaec0',
          400: '#ff7d97',
          500: '#ff4d73',
          600: '#ff1a4d',
          700: '#d90030',
          800: '#a60022',
          900: '#730014',
        },
        rose: {
          50: '#fff0f2',
          100: '#ffe0e4',
          200: '#ffc7ce',
          300: '#ffa3ae',
          400: '#ff6b8b',
          500: '#ff3865',
          600: '#e6154b',
          700: '#c00037',
          800: '#99002a',
          900: '#73001c',
        },
        accent: {
          magenta: '#d81b60',
          rose: '#ff6b8b',
          peach: '#ffe6e8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(244, 63, 94, 0.08)',
        'glass-hover': '0 8px 32px 0 rgba(244, 63, 94, 0.15)',
        premium: '0 12px 40px -12px rgba(244, 63, 94, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
