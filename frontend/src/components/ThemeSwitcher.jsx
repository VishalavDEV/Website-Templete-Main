import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Palette, Moon, Sun, Terminal, Flame, Check } from 'lucide-react';

const iconMap = {
  Moon: Moon,
  Sun: Sun,
  Terminal: Terminal,
  Flame: Flame,
};

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const IconComponent = iconMap[currentTheme.icon] || Palette;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass-pill hover:border-brand-violet/40 text-slate-300 hover:text-white transition-all text-xs font-semibold group shadow-sm"
        title="Change Theme Palette"
        aria-label="Change Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm"
          style={{ backgroundColor: currentTheme.previewColor }}
        />
        <IconComponent className="w-3.5 h-3.5" />
        <span className="hidden sm:inline-block">{currentTheme.name}</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-52 rounded-2xl glass-panel p-2 shadow-2xl border border-white/10 z-50"
          >
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              Select Theme
            </div>

            <div className="space-y-1 mt-1">
              {themes.map((t) => {
                const ItemIcon = iconMap[t.icon] || Palette;
                const isSelected = t.id === theme;

                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-white/15 text-white font-semibold shadow-inner'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: t.previewColor }}
                      />
                      <ItemIcon className="w-3.5 h-3.5 opacity-80" />
                      <span>{t.name}</span>
                    </div>

                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
