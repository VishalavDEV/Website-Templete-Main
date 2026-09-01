import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from './Icons';
import { BRAND } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'What We Do', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Insights', path: '/insights' },
    { name: 'Industries', path: '/industries' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header className={`orion-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span>{BRAND.name}</span>
            <span className="navbar-logo-dot"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link link-editorial ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action */}
          <div className="navbar-cta">
            <Link to="/contact" className="btn-editorial-outline">
              <span>Contact</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div>
          <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
            Navigation Index
          </p>
          <nav className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <Link key={link.path} to={link.path} className="mobile-nav-item">
                <span>{link.name}</span>
                <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>0{idx + 1}</span>
              </Link>
            ))}
            <Link to="/team" className="mobile-nav-item">
              <span>Leadership Team</span>
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>07</span>
            </Link>
            <Link to="/careers" className="mobile-nav-item">
              <span>Careers</span>
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>08</span>
            </Link>
          </nav>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <Link to="/contact" className="btn-editorial-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
            <span>Start a conversation</span>
            <ArrowUpRight size={16} />
          </Link>
          <div className="flex justify-between items-center" style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <span>Zurich · New York · London · Tokyo</span>
            <span>© {new Date().getFullYear()} {BRAND.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
