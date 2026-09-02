import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('nexus_admin_theme');
    if (saved) return saved;
    return 'light'; // Default to clean light mode as specified in design direction
  });

  const [compactMode, setCompactMode] = useState(() => {
    return localStorage.getItem('nexus_admin_compact') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('nexus_admin_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('nexus_admin_compact', compactMode);
  }, [compactMode]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleCompactMode = () => {
    setCompactMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, compactMode, toggleCompactMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
