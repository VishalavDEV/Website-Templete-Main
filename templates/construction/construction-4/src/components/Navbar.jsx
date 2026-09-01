import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenConsultModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'People', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Kitchens & Bathrooms', href: '#services' },
    { id: 'estimator', label: 'Contact Us', href: '#estimator' },
  ];

  const handleLinkClick = (id, href) => {
    setActiveTab(id);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="knack-header" id="knackHeader">
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#home" className="knack-logo" onClick={() => handleLinkClick('home', '#home')}>
            <span className="logo-bold">knack</span>
            <span className="logo-pipe">|</span>
            <span className="logo-caps">DESIGN + BUILD</span>
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Header Action */}
          <div className="nav-actions">
            <button 
              className="btn-outline-pill trigger-consult-modal" 
              onClick={onOpenConsultModal}
            >
              Get In Touch
            </button>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-panel">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id, link.href)}
              style={{ color: activeTab === link.id ? 'var(--gold-honey)' : 'inherit' }}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="btn-honey-gold" 
            style={{ marginTop: '12px' }}
            onClick={() => {
              setMobileOpen(false);
              onOpenConsultModal();
            }}
          >
            Get In Touch →
          </button>
        </div>
      )}
    </header>
  );
}
