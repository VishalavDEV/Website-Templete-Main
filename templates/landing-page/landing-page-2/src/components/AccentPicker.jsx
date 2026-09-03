import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { ACCENT_THEMES } from '../data/landingData';
import { useToast } from './Toast';

export default function AccentPicker() {
  const [currentTheme, setCurrentTheme] = useState('violet');
  const [isOpen, setIsOpen] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    document.body.classList.remove('theme-cyan', 'theme-emerald', 'theme-rose');
    if (currentTheme !== 'violet') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  const selectTheme = (themeId, themeName) => {
    setCurrentTheme(themeId);
    setIsOpen(false);
    addToast(`Accent switched to ${themeName}`, 'info');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel-subtle text-xs font-medium text-slate-200 hover:text-white hover:border-white/20 transition-all cursor-pointer"
        aria-label="Change Accent Color"
        title="Customize Neon Accent Color"
      >
        <Palette className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute right-0 mt-2 p-3 rounded-2xl glass-panel bg-[#0d121f]/95 border border-white/15 shadow-2xl z-50 min-w-[200px]"
          >
            <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Neon Palette
            </div>
            <div className="space-y-1.5">
              {ACCENT_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id, theme.name)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    currentTheme === theme.id
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                        boxShadow: `0 0 10px ${theme.primary}`
                      }}
                    />
                    <span>{theme.name}</span>
                  </div>
                  {currentTheme === theme.id && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
