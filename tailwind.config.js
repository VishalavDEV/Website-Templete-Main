/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04110B',
          900: '#081C15',
          850: '#112F24',
          800: '#1B4332',
          700: '#2D6A4F',
          600: '#40916C',
          500: '#52B788',
          400: '#74C69D',
          300: '#95D5B2',
          200: '#B7E4C7',
          100: '#D8F3DC',
          50: '#E8F8F0',
        },
        wheat: {
          900: '#8C5311',
          800: '#A36517',
          700: '#BC6C25',
          600: '#DDA15E',
          500: '#E9C46A',
          400: '#F4D388',
          300: '#F8E2AC',
          200: '#FBF0D2',
          100: '#FDF7E7',
          50: '#FEFDF8',
        },
        earth: {
          900: '#281E19',
          800: '#43342E',
          700: '#604A41',
          600: '#8B6B5C',
          500: '#B39180',
          100: '#EBE4DE',
          50: '#F7F4F1',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F9F6EE',
          200: '#F4EFE6',
          300: '#EBE3D5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(82, 183, 136, 0.35)',
        'glow-amber': '0 0 25px -5px rgba(233, 196, 106, 0.35)',
        'card-hover': '0 20px 35px -10px rgba(8, 28, 21, 0.12), 0 10px 15px -5px rgba(8, 28, 21, 0.06)',
      }
    },
  },
  plugins: [],
}
