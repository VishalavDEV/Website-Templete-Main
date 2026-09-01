import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bookmark, Menu } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { bookmarks, setIsSearchOpen, setIsBookmarksOpen, setIsMobileMenuOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/' },
    { name: 'Agriculture', path: '/agriculture' },
    { name: 'Technology', path: '/technology' },
    { name: 'AI', path: '/ai' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Stories', path: '/stories' },
    { name: 'Archive', path: '/archive' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-editorial py-3 shadow-md border-b border-neutral-200/80 dark:border-neutral-800/80'
          : 'bg-paper-light/80 dark:bg-paper-dark/80 md:bg-transparent py-4 sm:py-6 backdrop-blur-md md:backdrop-blur-none border-b border-neutral-200/40 dark:border-neutral-800/40 md:border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center space-x-2.5 sm:space-x-3 cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-display-cinzel font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display-cinzel text-base sm:text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              AGROTECH <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">AI</span>
            </span>
            <span className="font-mono-tech text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 -mt-1 hidden sm:block font-bold">
              DIGITAL MAGAZINE
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`relative text-xs font-mono-tech uppercase tracking-widest transition-all py-1 font-bold ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-extrabold scale-105'
                    : 'text-neutral-700 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 sm:p-2.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-white"
            title="Search Articles"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Bookmarks Drawer Trigger */}
          <button
            onClick={() => setIsBookmarksOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-white"
            title="Saved Bookmarks"
            aria-label="Bookmarks"
          >
            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            {bookmarks.length > 0 && (
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-mono-tech flex items-center justify-center font-bold">
                {bookmarks.length}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 sm:p-2.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-white"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
