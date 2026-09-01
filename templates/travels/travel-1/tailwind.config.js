/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        travel: {
          sky: '#a5f3fc', // sky blue
          turquoise: '#0d9488', // ocean turquoise
          lavender: '#818cf8', // lavender
          purple: '#6366f1', // purple
          sunset: '#f97316', // sunset orange
          yellow: '#f59e0b', // warm yellow
          navy: '#0f172a', // dark navy
          glass: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drive-loop': 'drive 12s linear infinite',
        'fly-loop': 'fly 15s linear infinite',
        'wave-bob': 'wave-bob 4s ease-in-out infinite',
        'wind-sway': 'wind-sway 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6', boxShadow: '0 0 0 10px rgba(99, 102, 241, 0)' },
        },
        drive: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        fly: {
          '0%': { transform: 'translate(-10%, 10%) rotate(-5deg)' },
          '50%': { transform: 'translate(50%, -20%) rotate(5deg)' },
          '100%': { transform: 'translate(110%, 10%) rotate(-5deg)' },
        },
        'wave-bob': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'wind-sway': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}


