import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Studio', href: '#studio' },
    { label: 'Insights', href: '#insights' }
  ];

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 100,
          transition: 'var(--transition-fast)',
          backgroundColor: isScrolled ? 'rgba(245, 243, 239, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          {/* Logo */}
          <a 
            href="#" 
            style={{
              fontFamily: 'var(--font-headings)',
              fontWeight: 800,
              fontSize: '1.5rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            VANTA<span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
            }}
            className="desktop-menu"
          >
            <div 
              style={{
                display: 'flex',
                gap: '2.5rem',
              }}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    opacity: 0.8,
                    position: 'relative',
                    padding: '0.25rem 0',
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.8}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.85rem'
              }}
            >
              <span>Start a project</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              zIndex: 101,
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#F5F3EF',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem 4rem',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Subtle grid line context in mobile menu */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '500px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'between',
                alignItems: 'center',
                transform: isOpen ? 'translateX(0)' : 'translateX(-50px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
                opacity: isOpen ? 1 : 0
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={24} style={{ color: 'var(--accent-color)', marginLeft: 'auto' }} />
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{
              marginTop: '1.5rem',
              justifyContent: 'center',
              transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
              opacity: isOpen ? 1 : 0
            }}
          >
            <span>Start a project</span>
          </a>
        </div>
      </div>

      {/* Styled JSX for Responsive Controls */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
