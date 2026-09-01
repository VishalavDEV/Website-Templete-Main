import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useZMag } from '../../context/ZMagContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { LogoCanvas3D } from '../3d/LogoCanvas3D';
import { MagneticButton } from '../motion/MagneticButton';
import { Menu, Bookmark, Sparkles, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const { isMenuOpen, setIsMenuOpen, bookmarks, setIsSearchOpen, setIsSavedOpen } = useZMag();
  const { scrollDirection, isAtTop } = useScrollDirection({ threshold: 20 });
  const shouldReduceMotion = useReducedMotion();

  const isHidden = scrollDirection === 'down' && !isAtTop && !isMenuOpen;

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 24,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const navLinks = [
    { label: 'CULTURE', href: '/category/z-culture' },
    { label: 'FUTURE TECH', href: '/category/future-tech' },
    { label: 'BIO-SPACES', href: '/category/bio-spaces' },
    { label: 'STYLE', href: '/category/hyper-style' },
  ];

  return (
    <motion.header
      initial="visible"
      animate={shouldReduceMotion ? 'visible' : isHidden ? 'hidden' : 'visible'}
      variants={headerVariants}
      className="fixed top-3 sm:top-5 left-0 right-0 z-40 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      <div className="glass-header rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_12px_36px_-6px_rgba(0,85,255,0.08)] pointer-events-auto transition-all duration-300">
        {/* Left: 3D Interactive Logo */}
        <Link to="/" className="flex items-center gap-2">
          <LogoCanvas3D />
        </Link>

        {/* Center: Magnetic Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F3F4F6]/80 p-1 rounded-full border border-white/60">
          {navLinks.map((link, idx) => (
            <MagneticButton key={idx} strength={0.3}>
              <Link
                to={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-heading font-bold tracking-wider text-[#4B5563] hover:text-[#0055FF] hover:bg-white transition-all duration-200 block shadow-xs"
              >
                {link.label}
              </Link>
            </MagneticButton>
          ))}
        </nav>

        {/* Right Action Controls: Search + Bookmark + Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger Button */}
          <MagneticButton strength={0.25}>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#0055FF] text-[#111827] text-xs font-bold transition-all shadow-xs cursor-pointer group"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#0055FF]" />
              <span className="hidden sm:inline font-mono text-[0.6875rem] text-[#6B7280]">
                Search
              </span>
              <kbd className="hidden sm:inline font-mono text-[0.6rem] bg-[#F3F4F6] px-1.5 py-0.5 rounded-sm text-[#4B5563]">
                ⌘K
              </kbd>
            </button>
          </MagneticButton>

          {/* Reading List Pill */}
          <MagneticButton strength={0.25}>
            <button
              onClick={() => setIsSavedOpen(true)}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#0055FF] text-[#111827] text-xs font-bold transition-all shadow-xs cursor-pointer group"
              title="Saved Articles"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#0055FF] group-hover:scale-110 transition-transform fill-[#0055FF]/20" />
              <span className="hidden sm:inline font-mono">Saved</span>
              {bookmarks.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0055FF] text-white text-[0.65rem] flex items-center justify-center font-mono font-bold animate-pulse">
                  {bookmarks.length}
                </span>
              )}
            </button>
          </MagneticButton>

          {/* Full Screen Menu Trigger Button */}
          <MagneticButton strength={0.35}>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white text-xs font-heading font-extrabold uppercase tracking-wider transition-all shadow-[0_8px_20px_-4px_rgba(0,85,255,0.4)] cursor-pointer group"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Menu</span>
            </button>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
