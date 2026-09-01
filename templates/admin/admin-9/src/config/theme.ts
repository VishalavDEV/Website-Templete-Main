export const THEME_CONFIG = {
  defaultTheme: 'light' as 'light' | 'dark',
  allowUserThemeToggle: true,
  designTokens: {
    primaryColor: '#7c82f4', // Periwinkle
    secondaryColor: '#a78bfa', // Lilac
    backgroundColor: '#f4f5fc', // Lavender-white
    textColor: '#0b0a16' // Deep Indigo
  }
} as const;
