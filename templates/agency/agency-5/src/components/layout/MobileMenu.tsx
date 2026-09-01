import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Studio', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Team', href: '/team' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
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

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] px-6 py-8 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6 mb-8">
            <NavLink to="/" onClick={onClose} className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter uppercase font-display">
                BYTEORA<span className="text-[var(--accent-color)]">.</span>
              </span>
            </NavLink>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="Close Mobile Navigation Menu"
                className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-3 my-4">
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={itemVariants}>
                <NavLink
                  to={link.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-3xl sm:text-4xl font-extrabold uppercase tracking-tight py-2 transition-colors duration-200 font-display ${
                      isActive ? 'text-[var(--accent-color)]' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--secondary-color)]">0{index + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-6 h-6 opacity-60" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Footer Info & CTA */}
          <div className="border-t border-[var(--border-color)] pt-6 mt-8 space-y-6">
            <NavLink
              to="/contact"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[var(--accent-color)] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <div className="flex items-center justify-between text-xs text-[var(--secondary-color)] font-mono uppercase tracking-wider">
              <span>Tokyo · Zurich · NY · London</span>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--text-color)]">IN</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--text-color)]">TW</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-[var(--text-color)]">DR</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
