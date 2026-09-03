import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Radio, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Playground', href: '#playground' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenModal }) {
  const { isScrolled, scrollProgress } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollY = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '12px 20px' : '20px 24px',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Top Scroll Progress Indicator */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '2.5px',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #00E5FF, #8A2BE2, #00FFA3)',
            boxShadow: '0 0 12px #00E5FF',
            transition: 'width 0.1s linear',
            zIndex: 1001,
          }}
        />

        {/* Floating Glass Island Container */}
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: isScrolled ? '8px 16px 8px 20px' : '10px 20px 10px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '100px',
            background: isScrolled ? 'rgba(8, 11, 20, 0.85)' : 'rgba(13, 17, 28, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isScrolled ? '1px solid rgba(0, 229, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled 
              ? '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 229, 255, 0.12)' 
              : '0 8px 24px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.35s ease',
          }}
        >
          {/* Brand Logo & Version Pill */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(138, 43, 226, 0.35))',
                border: '1px solid rgba(0, 229, 255, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(0, 229, 255, 0.4)',
              }}
            >
              <Zap size={20} color="#00E5FF" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '0.06em',
                  color: '#FFFFFF',
                }}
              >
                SYNAPSE
              </span>
              <span
                style={{
                  fontSize: '0.66rem',
                  padding: '2px 8px',
                  borderRadius: '100px',
                  background: 'rgba(0, 229, 255, 0.12)',
                  border: '1px solid rgba(0, 229, 255, 0.4)',
                  color: 'var(--neon-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                }}
              >
                v3.4
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '100px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '100px',
                        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.16) 0%, rgba(138, 43, 226, 0.16) 100%)',
                        border: '1px solid rgba(0, 229, 255, 0.45)',
                        boxShadow: '0 0 16px rgba(0, 229, 255, 0.25)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Live Ping Beacon + Launch Cloud CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Live Telemetry Ping Pill */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '100px',
                background: 'rgba(0, 255, 163, 0.08)',
                border: '1px solid rgba(0, 255, 163, 0.25)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--neon-emerald)',
              }}
              className="desktop-ping-badge"
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00FFA3', boxShadow: '0 0 6px #00FFA3' }} />
              <span>0.42ms RTT</span>
            </div>

            <button
              onClick={() => onOpenModal && onOpenModal('Launch Console')}
              className="btn-primary"
              style={{
                display: 'none',
                padding: '9px 20px',
                fontSize: '0.86rem',
                borderRadius: '100px',
              }}
              id="desktop-launch-btn"
            >
              <Sparkles size={15} />
              <span>Launch Studio</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} color="var(--neon-cyan)" /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Responsive CSS helper */}
        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            .desktop-ping-badge { display: inline-flex !important; }
            #desktop-launch-btn { display: inline-flex !important; }
            .mobile-toggle-btn { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '16px',
              right: '16px',
              background: 'rgba(8, 11, 20, 0.96)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              zIndex: 999,
              padding: '24px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 229, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: activeSection === link.href.substring(1) ? 'var(--neon-cyan)' : '#FFFFFF',
                    background: activeSection === link.href.substring(1) ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} color="rgba(255, 255, 255, 0.4)" />
                </motion.a>
              ))}
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal && onOpenModal('Launch Console');
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', borderRadius: '12px' }}
              >
                <Sparkles size={18} />
                <span>Launch Neural Studio</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
