import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Compass, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: 'hero', name: 'Home', href: '#hero' },
    { id: 'story', name: 'Story', href: '#story' },
    { id: 'themes', name: 'Themes', href: '#themes' },
    { id: 'timeline', name: 'Timeline', href: '#timeline' },
    { id: 'author', name: 'Author', href: '#author' },
    { id: 'preview', name: 'Preview', href: '#preview' },
    { id: 'reviews', name: 'Reviews', href: '#reviews' },
    { id: 'specs', name: 'Specs', href: '#specs' },
    { id: 'purchase', name: 'Pricing', href: '#purchase' },
    { id: 'faq', name: 'FAQ', href: '#faq' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  // Active section observer & scroll state listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy logic
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled-wrapper' : ''}`}>
        <nav className={`navbar-pill ${isScrolled ? 'scrolled-pill' : ''}`}>
          {/* Brand Logo Text */}
          <a href="#hero" className="nav-brand-box">
            <span className="brand-title">Lunara<span>Press</span>.</span>
          </a>

          {/* Desktop Navigation Links in Page Order */}
          <ul className="nav-pill-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-pill-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.name}
                  {activeSection === link.id && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Action Button */}
          <div className="nav-right-actions">
            <a href="#purchase" className="nav-pill-cta">
              <span>Buy Book</span>
              <ArrowRight size={14} />
            </a>

            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="nav-brand-box">
            <span className="brand-title">Lunara<span>Press</span>.</span>
          </div>
          <button 
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ padding: '8px', color: 'var(--text-primary)' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileOpen(false);
                }}
              >
                <span>{link.name}</span>
                {activeSection === link.id && <span className="mobile-active-badge">ACTIVE</span>}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto' }}>
          <a 
            href="#purchase" 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Buy The Book <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
