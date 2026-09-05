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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manage body scroll locking when mobile drawer is toggled
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Studio', href: '#studio' },
    { label: 'Insights', href: '#insights' }
  ];

  const handleLinkClick = (e, href) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    document.body.style.overflow = 'auto';
    setIsOpen(false);

    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
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
    }, 60);
  };

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
          backgroundColor: isScrolled ? 'rgba(245, 243, 239, 0.92)' : 'transparent',
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
            onClick={(e) => handleLinkClick(e, '#')}
            style={{
              fontFamily: 'var(--font-headings)',
              fontWeight: 800,
              fontSize: '1.5rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              position: 'relative',
              zIndex: 102
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
                  onClick={(e) => handleLinkClick(e, link.href)}
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
              onClick={(e) => handleLinkClick(e, '#contact')}
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
              zIndex: 102,
              padding: '0.5rem',
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Fullscreen Menu Overlay Drawer */}
      <div 
        className="mobile-drawer-overlay"
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
          justifyContent: 'flex-start',
          padding: 'calc(var(--header-height) + 2rem) 2rem 3rem 2rem',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
          boxSizing: 'border-box'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '500px',
            margin: 'auto',
            width: '100%',
            paddingTop: '1rem',
            paddingBottom: '2rem'
          }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: isOpen ? 'translateX(0)' : 'translateX(-40px)',
                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
                opacity: isOpen ? 1 : 0
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={24} style={{ color: 'var(--accent-color)' }} />
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary"
            style={{
              marginTop: '1.5rem',
              justifyContent: 'center',
              width: '100%',
              padding: '1.1rem 2rem',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              opacity: isOpen ? 1 : 0
            }}
          >
            <span>Start a project</span>
          </a>
        </div>
      </div>

      {/* Styled JSX for Responsive Controls */}
      <style>{`
        @media (max-width: 820px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
