import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { InstagramIcon, TwitterXIcon } from '../ui/SocialIcons';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'gallery', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'About & Gear', href: '#about' },
    { label: 'Press', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#0b0c10]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-6 bg-gradient-to-b from-[#0b0c10]/80 via-[#0b0c10]/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#161b24] border border-[#66fcf1]/30 flex items-center justify-center text-[#66fcf1] group-hover:border-[#66fcf1] group-hover:shadow-[0_0_15px_rgba(102,252,241,0.3)] transition-all duration-300">
            <Aperture className="w-4 h-4 transition-transform duration-500 group-hover:rotate-90" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Syne'] font-bold text-lg tracking-wider text-white flex items-center gap-1">
              LUMINA<span className="text-[#66fcf1]">FRAME</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5c6c7]/60 -mt-1 font-mono">
              Editorial Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#66fcf1]' : 'text-[#c5c6c7]/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#66fcf1] shadow-[0_0_8px_#66fcf1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Social Icons + Book CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c6c7]/70 hover:text-[#66fcf1] transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c6c7]/70 hover:text-[#66fcf1] transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Twitter / X"
            >
              <TwitterXIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:studio@luminaframe.com"
              className="text-[#c5c6c7]/70 hover:text-[#66fcf1] transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Direct Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenBookingModal) {
                onOpenBookingModal();
              } else {
                handleLinkClick('#contact');
              }
            }}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#0b0c10] bg-[#66fcf1] hover:bg-[#86fdf4] rounded-sm transition-all duration-200 shadow-[0_0_15px_rgba(102,252,241,0.25)] hover:shadow-[0_0_22px_rgba(102,252,241,0.5)] cursor-pointer"
          >
            <span>Book Session</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#c5c6c7] hover:text-[#66fcf1] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden bg-[#0b0c10]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm uppercase tracking-widest text-[#c5c6c7] hover:text-[#66fcf1] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#66fcf1]/60" />
                </motion.a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full text-center py-3 text-xs uppercase tracking-widest font-semibold bg-[#66fcf1] text-[#0b0c10] rounded-sm shadow-[0_0_20px_rgba(102,252,241,0.3)]"
              >
                Book Session / Commission
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-[#c5c6c7]/70">
                <a href="https://instagram.com" className="hover:text-[#66fcf1] flex items-center gap-1.5 text-xs">
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
                <a href="mailto:studio@luminaframe.com" className="hover:text-[#66fcf1] flex items-center gap-1.5 text-xs">
                  <Mail className="w-4 h-4" /> Direct
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
