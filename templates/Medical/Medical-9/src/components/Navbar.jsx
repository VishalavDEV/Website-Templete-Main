import React, { useState } from 'react';
import { Activity, Search, PhoneCall, Calendar, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenBooking, activeSection, setActiveSection, onOpenSymptomChecker }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'anatomy', label: 'Human Anatomy' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'doctors', label: 'Doctors & Faculty' },
    { id: 'stories', label: 'Patient Stories' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      {/* Top Urgent Care Alert Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0284c7 0%, #0d9488 100%)',
        color: '#ffffff',
        fontSize: '0.8125rem',
        padding: '0.35rem 1rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }}></span>
            <span>AURA CLINIC STATUS: OPEN • 24/7 Level 1 Trauma & Cardiac Care Center</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button 
              onClick={onOpenSymptomChecker}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              ⚡ Quick Symptom Checker
            </button>
            <a href="tel:18005552872" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <PhoneCall size={12} /> Emergency Hotline: 1-800-555-AURA
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Nav */}
      <div className="section-container">
        <div className="nav-content">
          {/* Logo */}
          <a href="#" className="logo-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon-wrap">
              <Activity size={24} />
            </div>
            <div>
              <div style={{ lineHeight: 1.1 }}>AURA HEALTH</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary-cyan)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Human Anatomy — Reimagined
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    style={{ background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Trigger Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-secondary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
              title="Search Doctors, Conditions & Specialties (Ctrl+K)"
            >
              <Search size={16} />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Search <kbd style={{ background: '#e2e8f0', padding: '1px 5px', borderRadius: '4px', fontSize: '0.7rem' }}>Ctrl+K</kbd>
              </span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.98)',
          borderBottom: '1px solid var(--border-light)',
          padding: '1rem 1.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: 'var(--text-main)',
                    textAlign: 'left',
                    width: '100%',
                    padding: '0.5rem 0'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
