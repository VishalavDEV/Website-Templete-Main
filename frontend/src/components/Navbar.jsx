import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section Spy
      const sections = ['home', 'services', 'about', 'portfolio', 'client', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Navigation Links */}
        <nav className="nav-group nav-group-left" aria-label="Primary Left Navigation">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
        </nav>

        {/* Centered Brand Logo */}
        <div className="navbar-brand">
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => scrollToSection(e, 'home')}
            aria-label="Ben Carson Portfolio"
          >
            <span className="brand-accent-dot"></span>
            Ben Carson<span className="brand-dot">.</span>
          </a>
        </div>

        {/* Right Navigation Links */}
        <nav className="nav-group nav-group-right" aria-label="Primary Right Navigation">
          <a
            href="#portfolio"
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#client"
            className={`nav-link ${activeSection === 'client' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'client')}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Action Controls (Theme Toggle & CTA) */}
        <div className="navbar-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="nav-hire-btn"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links">
            <a
              href="#home"
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'home')}
            >
              Home
            </a>
            <a
              href="#services"
              className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>
            <a
              href="#about"
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a
              href="#portfolio"
              className={`mobile-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'portfolio')}
            >
              Portfolio
            </a>
            <a
              href="#client"
              className={`mobile-nav-link ${activeSection === 'client' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'client')}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <button
              className="mobile-theme-btn"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} /> <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} /> <span>Switch to Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
