import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/rooms', label: 'Rooms' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/dining', label: 'Dining' },
  { path: '/spa', label: 'Spa' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/offers', label: 'Offers' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(197, 168, 128, 0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            letterSpacing: '2px', 
            color: scrolled ? '#ffffff' : '#ffffff', 
            textDecoration: 'none',
            textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          AURELIA <span style={{ color: '#c5a880', fontWeight: '400' }}>HAVEN</span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', className: 'hidden lg:flex' }} className="hidden lg:flex">
          {NAV_LINKS.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: isActive ? '#c5a880' : '#ffffff',
                  textDecoration: 'none',
                  textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '6px 0'
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: '#c5a880'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Menu Toggler */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            to="/booking"
            className="hidden sm:flex"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              backgroundColor: '#c5a880',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '0px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid #c5a880',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#c5a880';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#c5a880';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Book Now <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex lg:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(17, 17, 17, 0.98)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              padding: '40px',
              boxSizing: 'border-box'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '600', letterSpacing: '2px', color: '#ffffff' }}>
                AURELIA <span style={{ color: '#c5a880', fontWeight: '400' }}>HAVEN</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1, justifyContent: 'center' }}>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.5, ease: 'easeOut' }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      fontWeight: '400',
                      color: location.pathname === link.path ? '#c5a880' : '#ffffff',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <Link
                to="/booking"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  backgroundColor: '#c5a880',
                  color: '#ffffff',
                  padding: '16px',
                  borderRadius: '0px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Book Your Stay <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
