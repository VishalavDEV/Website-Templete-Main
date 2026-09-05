import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';
import { navLinks } from '../data/landingData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = targetId.startsWith('#') ? targetId.slice(1) : targetId;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = targetId;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
          background: isScrolled ? 'rgba(250, 248, 242, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(200, 120, 115, 0.15)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(200, 120, 115, 0.08)' : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Animated Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              color: '#1e1b18',
              flexShrink: 0,
            }}
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.08 }}
              transition={{ duration: 0.4 }}
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #c87873, #dfba89)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(200, 120, 115, 0.3)',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <Layers size={19} />
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
              gap: '0.35rem',
              background: isScrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.55)',
              padding: '0.35rem 0.6rem',
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
                onClick={(e) => handleScrollTo(e, link.href)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  padding: '0.45rem 0.95rem',
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

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <motion.a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary nav-cta-btn"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e1b18',
                border: '1px solid rgba(200, 120, 115, 0.3)',
                boxShadow: '0 2px 8px rgba(200, 120, 115, 0.15)',
                cursor: 'pointer',
                flexShrink: 0,
                zIndex: 1001,
              }}
            >
              {mobileMenuOpen ? <X size={22} color="#c87873" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'rgba(250, 248, 242, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5rem 2rem 3rem 2rem',
              overflowY: 'auto',
            }}
          >
            {/* Ambient Rose Glow in Drawer */}
            <div
              className="ambient-glow ambient-rose"
              style={{ top: '20%', left: '15%', width: 320, height: 320, opacity: 0.5 }}
            />
            <div
              className="ambient-glow ambient-champagne"
              style={{ bottom: '20%', right: '15%', width: 300, height: 300, opacity: 0.4 }}
            />

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: 320,
              }}
            >
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05 }}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: '#1e1b18',
                    padding: '0.4rem 1rem',
                    borderRadius: '12px',
                    width: '100%',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  whileHover={{ scale: 1.05, color: '#c87873', backgroundColor: 'rgba(200, 120, 115, 0.08)' }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-primary"
                style={{
                  marginTop: '1rem',
                  padding: '0.85rem 2rem',
                  fontSize: '1rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <span>Get Started</span>
                <ArrowRight size={17} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-toggle {
          display: flex !important;
        }
        @media (max-width: 640px) {
          .nav-cta-btn {
            display: none !important;
          }
        }
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .nav-cta-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
