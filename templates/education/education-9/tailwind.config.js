/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        education: {
          light: '#e0f2fe',  // Very Light Blue
          sky: '#38bdf8',    // Sky Blue
          cyan: '#06b6d4',   // Soft Cyan
          navy: '#0f172a',   // Soft Navy (text)
          primary: '#0ea5e9' // Light Blue
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-anim 15s ease-in-out infinite',
        'float-medium': 'float-anim 10s ease-in-out infinite',
        'float-fast': 'float-anim 6s ease-in-out infinite',
      },
      keyframes: {
        'float-anim': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        }
      }
    },
  },
  plugins: [],
}
