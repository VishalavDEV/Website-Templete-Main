import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { setCursorHover, resetCursor } = useCustomCursor();

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setCursorHover('TOGGLE THEME')}
      onMouseLeave={resetCursor}
      className="relative p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[var(--accent-color)] transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-color)] transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
};
