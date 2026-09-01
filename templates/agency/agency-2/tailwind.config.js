/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EE',
        'warm-white': '#FFFDF9',
        'ink-primary': '#181818',
        'ink-secondary': '#68635C',
        'ink-muted': 'rgba(24, 24, 24, 0.55)',
        'ink-border': 'rgba(24, 24, 24, 0.12)',
        'accent-coral': '#E86F51',
        'accent-lavender': '#C8B6FF',
        'soft-coral': '#F1D8CF',
        'soft-lavender': '#E8E1F4',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'glass-subtle': '0 8px 32px rgba(60, 45, 30, 0.05)',
        'glass-elevated': '0 12px 40px rgba(60, 45, 30, 0.08)',
        'glass-hover': '0 20px 50px rgba(60, 45, 30, 0.12)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
      }
    },
  },
  plugins: [],
}
