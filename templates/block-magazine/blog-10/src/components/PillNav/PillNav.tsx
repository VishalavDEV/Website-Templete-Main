import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import {
  Compass,
  Search,
  Bookmark,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Globe,
  Camera,
  BookOpen
} from 'lucide-react';
import { useAppContext } from '../../store/AppContext';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'EXPLORE', path: '/explore' },
  { label: 'WILDLIFE', path: '/wildlife' },
  { label: 'PLANET', path: '/planet' },
  { label: 'SCIENCE', path: '/science' },
  { label: 'SPACE', path: '/space' },
  { label: 'HISTORY', path: '/history' },
  { label: 'PHOTOGRAPHY', path: '/photography' },
  { label: 'MAGAZINE', path: '/magazine' }
];

export const PillNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookmarks, setIsSearchOpen, setIsSubscribeModalOpen } = useAppContext();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const pillIndicatorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Scroll detection for backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP indicator animation on route change or hover
  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => {
      if (item.path === '/') return location.pathname === '/';
      return location.pathname.startsWith(item.path);
    });

    if (activeIndex !== -1 && linksRef.current[activeIndex] && pillIndicatorRef.current) {
      const activeEl = linksRef.current[activeIndex]!;
      gsap.to(pillIndicatorRef.current, {
        x: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out'
      });
    } else if (pillIndicatorRef.current) {
      gsap.to(pillIndicatorRef.current, {
        opacity: 0,
        duration: 0.2
      });
    }
  }, [location.pathname]);

  const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if (pillIndicatorRef.current) {
      gsap.to(pillIndicatorRef.current, {
        x: target.offsetLeft,
        width: target.offsetWidth,
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out'
      });
    }
  };

  const handleNavMouseLeave = () => {
    const activeIndex = navItems.findIndex((item) => {
      if (item.path === '/') return location.pathname === '/';
      return location.pathname.startsWith(item.path);
    });
    if (activeIndex !== -1 && linksRef.current[activeIndex] && pillIndicatorRef.current) {
      const activeEl = linksRef.current[activeIndex]!;
      gsap.to(pillIndicatorRef.current, {
        x: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else if (pillIndicatorRef.current) {
      gsap.to(pillIndicatorRef.current, {
        opacity: 0,
        duration: 0.2
      });
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo */}
        <Link
          to="/"
          id="terra-brand-logo"
          className="group flex items-center gap-3 px-4 py-2 rounded-full bg-[#121214]/90 hover:bg-[#18181b] border border-zinc-800 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/50"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#F27D26]" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-black tracking-tighter text-base sm:text-lg text-white group-hover:text-[#F27D26] transition-colors leading-none">
              TERRA.
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-500 hidden sm:inline">
              026
            </span>
          </div>
        </Link>

        {/* Desktop Floating Pill Navigation */}
        <nav
          ref={navContainerRef}
          onMouseLeave={handleNavMouseLeave}
          className={`hidden xl:flex items-center relative p-1.5 rounded-full border transition-all duration-500 shadow-2xl ${
            isScrolled
              ? 'bg-[#0a0a0a]/95 border-zinc-800 backdrop-blur-xl shadow-black/80'
              : 'bg-[#121214]/85 border-zinc-800 backdrop-blur-md shadow-black/40'
          }`}
        >
          {/* GSAP animated sliding active indicator pill */}
          <div
            ref={pillIndicatorRef}
            className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-white/10 border border-zinc-700 pointer-events-none opacity-0 transition-opacity"
            style={{ width: 0 }}
          />

          {navItems.map((item, idx) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                ref={(el) => (linksRef.current[idx] = el)}
                onMouseEnter={handleLinkMouseEnter}
                className={`relative z-10 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] font-bold transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            id="nav-search-button"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search articles"
            className="flex items-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#121214]/90 hover:bg-[#18181b] border border-zinc-800 backdrop-blur-md text-zinc-300 hover:text-white transition-all shadow-md"
          >
            <Search className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-400">SEARCH</span>
          </button>

          {/* Saved Stories Bookmark Button */}
          <Link
            to="/saved"
            id="nav-saved-button"
            aria-label="View saved stories"
            className="relative flex items-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#121214]/90 hover:bg-[#18181b] border border-zinc-800 backdrop-blur-md text-zinc-300 hover:text-white transition-all shadow-md"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-400">SAVED</span>
            {bookmarks.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#F27D26] text-black text-[9px] font-black font-mono flex items-center justify-center">
                {bookmarks.length}
              </span>
            )}
          </Link>

          {/* Subscribe CTA */}
          <button
            id="nav-subscribe-button"
            onClick={() => setIsSubscribeModalOpen(true)}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black text-[10px] uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-lg shadow-[#F27D26]/25"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>MEMBERSHIP</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="xl:hidden p-2.5 rounded-full bg-[#121214]/90 border border-zinc-800 backdrop-blur-md text-white hover:bg-white/10 transition-colors shadow-md"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] bg-[#0a0a0a]/98 backdrop-blur-2xl border-t border-zinc-800 z-40 p-6 flex flex-col justify-between overflow-y-auto pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#F27D26]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500">
                DISPATCH DIRECTORY
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-[#F27D26]/10 border-[#F27D26]/40 text-[#F27D26] font-bold'
                        : 'bg-[#121214] border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span className="font-bold tracking-tight text-sm uppercase">{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#121214] border border-zinc-700 text-white text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                <Search className="w-3.5 h-3.5 text-[#F27D26]" />
                SEARCH TERRA
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSubscribeModalOpen(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F27D26] text-black text-[10px] uppercase tracking-[0.2em] font-black"
              >
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                MEMBERSHIP
              </button>
            </div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              AVNT-GARDE EXPEDITIONARY JOURNAL
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
