import React, { createContext, useContext, useEffect, useState } from 'react';
import { soundFx } from '../utils/audio';

interface ThemeContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aura_sound_fx');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  useEffect(() => {
    soundFx.enabled = soundEnabled;
    localStorage.setItem('aura_sound_fx', String(soundEnabled));
  }, [soundEnabled]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.enabled = next;
    if (next) soundFx.playClick();
  };

  return (
    <ThemeContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
