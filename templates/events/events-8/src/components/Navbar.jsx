import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Terminal, Menu, X, ChevronRight, Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();

  // 15 menu links in exact specified page order
  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'hero' },
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Schedule', path: '/schedule', sectionId: 'schedule' },
    { name: 'Challenges', path: '/challenges', sectionId: 'challenges' },
    { name: 'Teams', path: '/teams', sectionId: 'teams' },
    { name: 'Mentors', path: '/mentors', sectionId: 'mentors' },
    { name: 'Prizes', path: '/prizes', sectionId: 'prizes' },
    { name: 'Leaderboard', path: '/leaderboard', sectionId: 'leaderboard' },
    { name: 'Workshops', path: '/workshops', sectionId: 'workshops' },
    { name: 'Food & Breaks', path: '/food', sectionId: 'food' },
    { name: 'Venue', path: '/venue', sectionId: 'venue' },
    { name: 'Rules', path: '/rules', sectionId: 'rules' },
    { name: 'Sponsors', path: '/sponsors', sectionId: 'sponsors' },
    { name: 'FAQ', path: '/faq', sectionId: 'faq' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' }
  ];

  // Scroll detection & Scroll-Spy when scrolling down the page
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update scrolled state for sticky background opacity shift
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Active Scroll Spy on Home Page
      if (location.pathname === '/') {
        const sections = navLinks.map((l) => document.getElementById(l.sectionId)).filter(Boolean);
        const scrollPosition = window.scrollY + 200;

        let currentActive = '/';
        for (let i = 0; i < sections.length; i++) {
          const sec = sections[i];
          if (sec && scrollPosition >= sec.offsetTop && scrollPosition < sec.offsetTop + sec.offsetHeight) {
            const matchingLink = navLinks.find((l) => l.sectionId === sec.id);
            if (matchingLink) {
              currentActive = matchingLink.path;
            }
          }
        }
        setActiveSection(currentActive);
      } else {
        setActiveSection(location.pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Sync active route on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
    }
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    if (location.pathname === '/' && link.sectionId) {
      const targetSec = document.getElementById(link.sectionId);
      if (targetSec) {
        e.preventDefault();
        targetSec.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(link.path);
        setMobileMenuOpen(false);
        return;
      }
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--nav-height)',
        backgroundColor: scrolled ? 'rgba(5, 8, 6, 0.98)' : 'rgba(5, 5, 5, 0.85)',
        borderBottom: `1px solid ${scrolled ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`,
        boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 255, 102, 0.25)' : 'none',
        backdropFilter: 'blur(16px)',
        zIndex: 9000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div
        style={{
          width: '98%',
          maxWidth: '1580px',
          height: '100%',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            flexShrink: 0
          }}
          className="interactive"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'rgba(0, 255, 102, 0.12)',
              border: '1.5px solid #00ff66',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00ff66',
              boxShadow: '0 0 12px rgba(0, 255, 102, 0.4)'
            }}
          >
            <Terminal size={20} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: '900',
                color: '#ffffff',
                lineHeight: '1',
                letterSpacing: '1px'
              }}
            >
              NEXORA
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: '700',
                color: '#00ff66',
                letterSpacing: '2.5px'
              }}
            >
              AFTERDARK
            </div>
          </div>
        </Link>

        {/* Desktop Menu Links — Moves & Updates active highlight as user scrolls down */}
        <div
          className="desktop-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            gap: '0.2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flex: 1,
              gap: '0.15rem'
            }}
          >
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#00ff66' : '#e2e8f0',
                    textDecoration: 'none',
                    padding: '0.4rem 0.45rem',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    borderBottom: isActive ? '2px solid #00ff66' : '2px solid transparent',
                    boxShadow: isActive ? '0 2px 10px rgba(0, 255, 102, 0.5)' : 'none',
                    textShadow: isActive ? '0 0 8px rgba(0, 255, 102, 0.6)' : 'none'
                  }}
                  className="interactive"
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#00ff66';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#e2e8f0';
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Highlighted Register Button */}
          <Link
            to="/register"
            className="btn btn-primary interactive pulse-glow"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.78rem',
              whiteSpace: 'nowrap',
              marginLeft: '0.5rem',
              flexShrink: 0
            }}
          >
            <Zap size={14} /> REGISTER NOW
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="mobile-hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid rgba(0, 255, 102, 0.4)',
            color: '#00ff66',
            padding: '0.45rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            width: '100vw',
            height: 'calc(100vh - var(--nav-height))',
            backgroundColor: 'rgba(5, 8, 6, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid #00ff66',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            overflowY: 'auto',
            zIndex: 9999
          }}
        >
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.path;
            return (
              <Link
                key={idx}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: isActive ? '#00ff66' : '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  backgroundColor: isActive ? 'rgba(0, 255, 102, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? '#00ff66' : 'rgba(255, 255, 255, 0.05)'}`,
                  borderRadius: '6px'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} color={isActive ? '#00ff66' : '#64748b'} />
              </Link>
            );
          })}

          <Link
            to="/register"
            className="btn btn-primary"
            style={{
              marginTop: '0.75rem',
              width: '100%',
              padding: '0.9rem',
              fontSize: '0.95rem'
            }}
          >
            <Zap size={18} /> REGISTER YOUR TEAM NOW
          </Link>
        </div>
      )}

      {/* Responsive Breakpoint CSS */}
      <style>{`
        @media (max-width: 1280px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
