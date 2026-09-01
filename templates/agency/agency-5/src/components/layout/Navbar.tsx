import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';

const navItems = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[var(--nav-glass)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-display text-[var(--text-color)] group-hover:opacity-90 transition-opacity">
              BYTEORA<span className="text-[var(--accent-color)]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 bg-[var(--card-bg)]/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-[var(--border-color)]">
            {navItems.map(item => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive: linkActive }) =>
                    `relative text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                      linkActive
                        ? 'text-[var(--text-color)]'
                        : 'text-[var(--secondary-color)] hover:text-[var(--text-color)]'
                    }`
                  }
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-color)] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:border-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
