import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, Bookmark, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setIsSearchOpen, setIsBookmarksOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Agriculture', path: '/agriculture' },
    { name: 'Technology', path: '/technology' },
    { name: 'Artificial Intelligence', path: '/ai' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Stories', path: '/stories' },
    { name: 'Archive Issues', path: '/archive' },
    { name: 'About Magazine', path: '/about' },
    { name: 'Contact & Press', path: '/contact' },
  ];

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-forest-950 text-white flex flex-col justify-between p-8 overflow-y-auto animate-fade-in">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-emerald-900/60 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-display-cinzel font-bold text-white">
            A
          </div>
          <span className="font-display-cinzel text-lg font-bold">AGROTECH AI</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2.5 rounded-full bg-emerald-900/40 hover:bg-emerald-800 text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="my-auto py-8 space-y-5">
        {links.map((link, idx) => {
          const isActive = location.pathname === link.path;
          return (
            <div key={link.path} className="overflow-hidden">
              <Link
                to={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`group flex items-center justify-between text-2xl md:text-3xl font-serif-editorial font-bold transition-all ${
                  isActive ? 'text-emerald-400 pl-2' : 'text-neutral-200 hover:text-emerald-400'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-400" />
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Quick Action Bar */}
      <div className="pt-6 border-t border-emerald-900/60 flex items-center justify-between text-xs font-mono-tech uppercase tracking-widest text-emerald-400">
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsSearchOpen(true);
          }}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Search className="w-4 h-4" /> Search
        </button>
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsBookmarksOpen(true);
          }}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Bookmark className="w-4 h-4" /> Saved List
        </button>
      </div>
    </div>
  );
};
