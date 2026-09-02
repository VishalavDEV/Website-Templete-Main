import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { FullscreenMobileMenu } from './global/FullscreenMobileMenu';
import { CursorType } from '../types';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenProjectModal,
  setCursorType,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/work', route: '/work' },
    { name: 'About', href: '/about', route: '/about' },
    { name: 'Services', href: '/services', route: '/services' },
    { name: 'Insights', href: '/insights', route: '/insights' },
    { name: 'Team', href: '/team', route: '/team' },
    { name: 'Careers', href: '/careers', route: '/careers' },
    { name: 'Stories', href: '/testimonials', route: '/testimonials' },
    { name: 'Contact', href: '/contact', route: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'py-3.5 bg-[#080808]/90 backdrop-blur-md border-b border-[#ffffff15] shadow-2xl shadow-black/80'
            : 'py-5 sm:py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Studio Brand */}
          <a
            href="/"
            id="brand-logo"
            onClick={handleLogoClick}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="group flex items-center gap-3 text-[#FAF9F6] tracking-tighter font-display font-bold text-xl sm:text-2xl transition-opacity cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
            </span>
            <span className="tracking-tighter uppercase font-bold">
              STUDIO
            </span>
          </a>

          {/* Desktop Navigation Links with Micro-Interaction (Dimming Others on Hover) */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden lg:flex items-center space-x-1 border border-[#ffffff15] bg-[#080808]/60 backdrop-blur-md rounded-full px-4 py-1.5"
          >
            {navLinks.map((link) => {
              const isActive =
                link.route === '/'
                  ? currentRoute === '/'
                  : currentRoute === link.route || currentRoute.startsWith(`${link.route}/`);

              const isDimmed = hoveredLink !== null && hoveredLink !== link.name;

              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.route)}
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    setCursorType('pointer');
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  className={`relative px-3.5 py-1 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 rounded-full cursor-pointer select-none ${
                    isActive
                      ? 'text-[#FAF9F6] font-semibold opacity-100'
                      : isDimmed
                      ? 'text-[#FAF9F6]/40 opacity-40'
                      : 'text-[#999999] hover:text-[#FAF9F6] opacity-90'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA Button & Mobile / Tablet Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block">
              <MagneticButton
                id="header-start-project-btn"
                onClick={() => onNavigate('/contact')}
                onCursorEnter={() => setCursorType('button', 'START ↗')}
                onCursorLeave={() => setCursorType('default')}
                className="group relative inline-flex items-center gap-2 border border-[#ffffff20] px-5 sm:px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-semibold text-[#FAF9F6] bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>

            {/* Menu Trigger Button */}
            <button
              id="fullscreen-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              onMouseEnter={() => setCursorType('pointer', 'MENU')}
              onMouseLeave={() => setCursorType('default')}
              className="lg:hidden p-2.5 rounded-full bg-white/[0.04] border border-white/15 text-[#FAF9F6] hover:bg-white/10 hover:border-white/30 transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#0066FF] cursor-pointer"
              aria-label="Open fullscreen navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Bespoke Fullscreen Mobile Menu Overlay */}
      <FullscreenMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentRoute={currentRoute}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />
    </>
  );
};
