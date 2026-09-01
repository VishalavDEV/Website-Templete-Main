import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { isScrolled } = useScrollProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
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

  // Keyboard shortcut Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { label: 'WORK', path: '/work' },
    { label: 'SERVICES', path: '/services' },
    { label: 'STUDIO', path: '/studio' },
    { label: 'INSIGHTS', path: '/insights' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-white/85 backdrop-blur-lg border-b border-ink-border/80 shadow-glass-subtle py-3.5'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tighter text-ink-primary select-none"
            aria-label="VALENCE Homepage"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-accent-coral group-hover:scale-150 transition-transform duration-300" />
            <span className="tracking-tight">VALENCE</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-normal tracking-[0.2em] text-ink-muted uppercase border-l border-ink-border pl-2.5 ml-0.5">
              STUDIO
            </span>
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 glass-panel-subtle px-6 py-2 rounded-full border border-ink-border/60">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-mono tracking-[0.14em] font-medium transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-accent-coral font-bold' : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-coral rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-border/80 text-xs font-mono text-ink-secondary hover:text-ink-primary hover:border-ink-primary transition-all bg-warm-white/60"
              aria-label="Open global search (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-accent-coral" />
              <span>Search</span>
              <kbd className="text-[10px] bg-paper px-1.5 py-0.5 rounded border border-ink-border text-ink-muted">
                ⌘K
              </kbd>
            </button>

            {/* Let's Talk CTA */}
            <MagneticButton
              variant="primary"
              size="sm"
              onClick={() => navigate('/contact')}
            >
              LET&rsquo;S TALK
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Actions: Search & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full border border-ink-border bg-warm-white/70 text-ink-primary"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full border border-ink-border bg-warm-white/70 text-ink-primary"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden bg-warm-white/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-28 animate-fadeIn"
        >
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted">Navigation Index</span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className="font-display text-3xl font-semibold text-ink-primary hover:text-accent-coral transition-colors flex items-center justify-between border-b border-ink-border/50 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-accent-coral opacity-60" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-ink-border">
            <MagneticButton
              variant="secondary"
              size="lg"
              className="w-full justify-center"
              onClick={() => navigate('/contact')}
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <div className="flex justify-between items-center text-xs font-mono text-ink-secondary">
              <span>hello@valence.studio</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
