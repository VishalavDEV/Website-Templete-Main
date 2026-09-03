import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { navLinks } from '../data/landingData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '0.85rem 0' : '1.5rem 0',
          background: isScrolled ? 'rgba(250, 248, 242, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(200, 120, 115, 0.15)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(200, 120, 115, 0.08)' : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Animated Brand Logo */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '1.4rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              color: '#1e1b18',
            }}
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.08 }}
              transition={{ duration: 0.4 }}
              style={{
                width: 38,
                height: 38,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #c87873, #dfba89)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(200, 120, 115, 0.3)',
                color: '#ffffff',
              }}
            >
              <Layers size={20} />
            </motion.div>
            <span>
              AURA<span style={{ color: '#c87873' }}>FLOW</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              background: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.5)',
              padding: '0.4rem 0.6rem',
              borderRadius: 9999,
              border: '1px solid rgba(200, 120, 115, 0.2)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px -5px rgba(200, 120, 115, 0.1)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  padding: '0.45rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: hoveredIdx === idx ? '#b35d58' : '#5e5750',
                  transition: 'color 0.2s ease',
                  borderRadius: 9999,
                }}
              >
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="navPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(200, 120, 115, 0.12)',
                      border: '1px solid rgba(200, 120, 115, 0.3)',
                      borderRadius: 9999,
                      zIndex: -1,
                    }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{ padding: '0.65rem 1.45rem', fontSize: '0.9rem' }}
            >
              <span>Get Started</span>
              <ArrowRight size={15} />
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Mobile Menu"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e1b18',
                border: '1px solid rgba(200, 120, 115, 0.2)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: '#faf8f2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            {/* Ambient Rose Glow in Drawer */}
            <div
              className="ambient-glow ambient-rose"
              style={{ top: '30%', left: '20%', width: 350, height: 350 }}
            />

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', position: 'relative', zIndex: 1 }}>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: '#1e1b18',
                  }}
                  whileHover={{ scale: 1.1, color: '#c87873' }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary"
                style={{ marginTop: '1.5rem', padding: '0.85rem 2.25rem', fontSize: '1.1rem' }}
              >
                <span>Get Started Now</span>
                <ArrowRight size={18} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
