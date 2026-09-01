import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, ChevronDown, RotateCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useIntro } from '../context/IntroContext';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { replayIntro } = useIntro();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState<'work' | 'studio' | 'services' | 'journal' | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMegaMenu = (menu: 'work' | 'studio' | 'services' | 'journal') => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 dark:border-neutral-800/60 bg-[#FBF9F5]/90 dark:bg-[#0D0E12]/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          onClick={() => setActiveMenu(null)}
          className="group flex items-center space-x-2 text-xl md:text-2xl font-serif font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
          data-cursor="HOME"
        >
          <span>STRATA</span>
          <span className="font-mono text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform inline-block">
            //
          </span>
          <span>AGENCY</span>
        </Link>

        {/* Center: Desktop Navigation Links with MegaMenu triggers */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium">
          <div className="relative" onMouseEnter={() => setActiveMenu('work')}>
            <button
              onClick={() => toggleMegaMenu('work')}
              className={`flex items-center space-x-1 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname.startsWith('/work') || activeMenu === 'work'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              <span>Work</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'work' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="relative" onMouseEnter={() => setActiveMenu('studio')}>
            <button
              onClick={() => toggleMegaMenu('studio')}
              className={`flex items-center space-x-1 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/studio' || activeMenu === 'studio'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              <span>Studio</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'studio' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="relative" onMouseEnter={() => setActiveMenu('services')}>
            <button
              onClick={() => toggleMegaMenu('services')}
              className={`flex items-center space-x-1 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname === '/services' || activeMenu === 'services'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="relative" onMouseEnter={() => setActiveMenu('journal')}>
            <button
              onClick={() => toggleMegaMenu('journal')}
              className={`flex items-center space-x-1 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                location.pathname.startsWith('/journal') || activeMenu === 'journal'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              <span>Journal</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'journal' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link
            to="/about"
            onClick={() => setActiveMenu(null)}
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              location.pathname === '/about'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-neutral-800 dark:text-neutral-200'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Replay Intro Icon */}
          <button
            onClick={replayIntro}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all shadow-2xs"
            title="Replay 3D Intro Experience"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-2xs"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 text-violet-600" />
            ) : (
              <Sun className="h-4 w-4 text-amber-500" />
            )}
          </button>

          {/* Start Project CTA Button */}
          <Link
            to="/contact"
            onClick={() => setActiveMenu(null)}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-white dark:text-neutral-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-md"
            data-cursor="CONTACT"
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 md:hidden"
            aria-label="Open Mobile Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* MegaMenu Dropdown */}
      <MegaMenu activeMenu={activeMenu} closeMenu={() => setActiveMenu(null)} />

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};
