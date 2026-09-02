import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    id: 'dark',
    name: 'Deep Nebula',
    type: 'dark',
    icon: 'Moon',
    previewColor: '#8B5CF6',
    accent: 'from-brand-violet via-brand-indigo to-brand-cyan',
  },
  {
    id: 'light',
    name: 'Clean Light',
    type: 'light',
    icon: 'Sun',
    previewColor: '#6366F1',
    accent: 'from-indigo-600 via-blue-600 to-cyan-500',
  },
  {
    id: 'cyber',
    name: 'Cyber Emerald',
    type: 'dark',
    icon: 'Terminal',
    previewColor: '#10B981',
    accent: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    id: 'sunset',
    name: 'Cosmic Sunset',
    type: 'dark',
    icon: 'Flame',
    previewColor: '#F43F5E',
    accent: 'from-rose-500 via-purple-500 to-amber-400',
  }
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('antigravity_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('antigravity_theme', theme);
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  const currentThemeConfig = themes.find((t) => t.id === theme) || themes[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, currentThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
