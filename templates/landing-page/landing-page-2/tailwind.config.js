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
          orange: '#FF5A1F',
          orangeHover: '#FF723B',
          orangeDark: '#E0480F',
          orangeGlow: 'rgba(255, 90, 31, 0.4)',
        },
        dark: {
          950: '#07090D',
          900: '#0C0E14',
          850: '#11141D',
          800: '#171B26',
          750: '#1E2330',
          700: '#262D3D',
          600: '#3D465C',
        },
        matrix: {
          orange: '#FF5A1F',
          amber: '#F59E0B',
          red: '#EF4444',
          green: '#10B981',
          cyan: '#06B6D4',
          purple: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        pixel: ['"VT323"', '"Press Start 2P"', 'monospace']
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 90, 31, 0.45)',
        'glow-orange-lg': '0 0 60px 5px rgba(255, 90, 31, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
        'glow-green': '0 0 30px -5px rgba(16, 185, 129, 0.4)',
        'led-panel': 'inset 0 2px 8px rgba(0,0,0,0.8), 0 20px 40px -15px rgba(0,0,0,0.7)',
        'device-3d': '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 18px 36px -18px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'device-float': '0 45px 75px -15px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 90, 31, 0.12)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'blink-fast': 'blink 0.8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        }
      }
    },
  },
  plugins: [],
}
