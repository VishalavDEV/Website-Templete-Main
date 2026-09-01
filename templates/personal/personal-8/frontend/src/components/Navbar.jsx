import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Send, Code2 } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      zIndex: 9999,
      backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'all 0.25s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '100%',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
          }}>
            MS
          </div>
          <div>
            <span style={{ fontSize: '18px', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.3px' }}>
              MARCUS STERLING
            </span>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'var(--bright-orange)', letterSpacing: '1px' }}>
              FULL STACK & AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={e => e.target.style.color = '#2563EB'}
              onMouseLeave={e => e.target.style.color = 'var(--text-main)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} color="#2563EB" /> : <Sun size={18} color="#F97316" />}
          </button>

          <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
            <Send size={14} /> Let's Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'var(--bg-card)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontSize: '16px',
                  fontWeight: 700
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
