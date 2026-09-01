import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sun, Moon, RotateCcw, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useIntro } from '../context/IntroContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const { replayIntro } = useIntro();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col justify-between bg-[#FBF9F5] dark:bg-[#0D0E12] p-6 md:hidden animate-fade-in overflow-y-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <Link to="/" onClick={onClose} className="font-serif text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          STRATA<span className="text-blue-600 dark:text-blue-400 font-mono">//</span>AGENCY
        </Link>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200"
          aria-label="Close Menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Primary Links */}
      <nav className="my-8 space-y-4">
        {[
          { label: 'Work', path: '/work', desc: 'Case Studies & Selected Projects' },
          { label: 'Studio', path: '/studio', desc: 'Manifesto, Process & Team' },
          { label: 'Services', path: '/services', desc: 'UI/UX & Creative Development' },
          { label: 'Journal', path: '/journal', desc: 'Articles & Design Insights' },
          { label: 'About', path: '/about', desc: 'Agency Story & Global Clients' },
          { label: 'Contact', path: '/contact', desc: 'Start a Project Inquiry' },
        ].map((item, idx) => (
          <div key={item.label} className="border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3">
            <Link
              to={item.path}
              onClick={onClose}
              className="group flex items-center justify-between text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400">0{idx + 1}</span>
                <span>{item.label}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-1 text-xs text-neutral-500 font-sans pl-7">{item.desc}</p>
          </div>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-xs font-mono text-neutral-800 dark:text-neutral-200"
          >
            {theme === 'light' ? (
              <>
                <Moon className="h-4 w-4 text-violet-600" />
                <span>Dark Theme</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 text-amber-500" />
                <span>Light Theme</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              replayIntro();
            }}
            className="flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 px-4 py-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Replay 3D Intro</span>
          </button>
        </div>

        <div className="text-center font-mono text-[10px] text-neutral-400 uppercase tracking-widest pt-2">
          STRATA AGENCY © 2026
        </div>
      </div>
    </div>
  );
};
