import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Bookmark,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  SlidersHorizontal,
  Mail
} from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { useBookmarks } from '../../hooks/useBookmarks';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenSubscribe }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { bookmarkCount } = useBookmarks();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Latest', path: '/stories', icon: TrendingUp },
    { name: 'Desks', path: '/categories', icon: SlidersHorizontal },
    { name: 'Authors', path: '/authors' },
    { name: 'About', path: '/about' },
    { name: 'Pitch', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F9F6F0]/90 dark:bg-[#151311]/90 backdrop-blur-md border-b border-[#E8E2D5] dark:border-[#3A342E] shadow-xs'
            : 'bg-[#F9F6F0] dark:bg-[#151311] border-b border-[#E8E2D5] dark:border-[#3A342E]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Brand Title */}
            <div className="flex items-center space-x-3 shrink-0">
              <Link
                to="/"
                className="group flex items-center space-x-2.5 transition-transform hover:opacity-90"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1C1917] dark:bg-[#C85A32] flex items-center justify-center text-white shadow-xs group-hover:rotate-6 transition-transform">
                  <span className="font-display font-black text-xl tracking-tighter">S</span>
                </div>
                <span className="font-display font-black text-2xl tracking-tight text-[#1C1917] dark:text-[#F7F4EE]">
                  STORIVA
                </span>
              </Link>
            </div>

            {/* Zone 2: Navigation Links (4-6 links, single-line, clean) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-[#C85A32] dark:text-[#E27453] bg-[#C85A32]/10 dark:bg-[#C85A32]/20 font-semibold'
                        : 'text-[#44403C] dark:text-[#D7D1C6] hover:text-[#1C1917] dark:hover:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Search, Bookmarks, Theme, Subscribe) */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <button
                onClick={onOpenSearch}
                aria-label="Search articles (Ctrl+K or Cmd+K)"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-xs font-medium text-[#78716C] dark:text-[#A39C90] hover:border-[#C85A32] dark:hover:border-[#E27453] hover:text-[#1C1917] dark:hover:text-[#F7F4EE] transition-colors cursor-pointer shadow-xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded-md bg-[#E8E2D5]/50 dark:bg-[#282420] text-[#78716C] dark:text-[#A39C90]">
                  ⌘K
                </kbd>
              </button>

              <Link
                to="/bookmarks"
                aria-label={`View bookmarks (${bookmarkCount} saved)`}
                className="relative p-2 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#44403C] dark:text-[#D7D1C6] hover:text-[#C85A32] dark:hover:text-[#E27453] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors shadow-xs"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#C85A32] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {bookmarkCount > 9 ? '9+' : bookmarkCount}
                  </span>
                )}
              </Link>

              <ThemeToggle />

              <button
                onClick={onOpenSubscribe}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#C85A32] hover:bg-[#B34722] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#44403C] dark:text-[#D7D1C6] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-30 bg-[#151311]/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-[#F9F6F0] dark:bg-[#151311] border-b border-[#E8E2D5] dark:border-[#3A342E] p-6 space-y-4 shadow-xl animate-in slide-in-from-top-4">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#C85A32]/10 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E27453]'
                        : 'text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E8E2D5] dark:border-[#3A342E] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSubscribe();
                }}
                className="w-full py-3 rounded-xl bg-[#C85A32] hover:bg-[#B34722] text-white text-sm font-semibold flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Join Dispatches (Free Newsletter)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
