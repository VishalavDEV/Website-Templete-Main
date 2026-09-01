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
        neura: {
          bg: '#050816',
          panel: '#0B1020',
          panelBorder: 'rgba(255, 255, 255, 0.10)',
          card: 'rgba(255, 255, 255, 0.05)',
          cardHover: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00f0ff',
          purple: '#7000ff',
          blue: '#3b82f6',
          green: '#10b981',
          amber: '#f59e0b',
          red: '#ef4444',
          textMuted: '#94a3b8',
          textBright: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.35)',
        'glow-purple': '0 0 25px rgba(112, 0, 255, 0.35)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(112,0,255,0.15) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.12) 0%, rgba(112, 0, 255, 0.08) 45%, transparent 70%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float-slow': 'floatSlow 6s infinite ease-in-out',
        'rotate-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
