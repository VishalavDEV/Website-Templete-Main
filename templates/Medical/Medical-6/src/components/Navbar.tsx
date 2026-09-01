import React, { useState } from 'react';
import type { UserRole } from '../types';
import { Activity, CalendarPlus, PhoneCall, Menu, X, User, Stethoscope, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentRole: UserRole;
  activeView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRole, activeView, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'doctors', label: 'Find Doctors' },
    { id: 'departments', label: 'Departments' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Health Knowledge' }
  ];

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)',
            color: '#ffffff',
            padding: '0.55rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
          }}>
            <Activity size={24} />
          </div>
          <div>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', display: 'block', lineHeight: 1 }}>
              Apex<span style={{ color: '#0d9488' }}>Health</span>
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Dynamic Medical Platform
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.92rem',
                  color: isActive ? '#0d9488' : '#334155',
                  borderBottom: isActive ? '2px solid #0d9488' : '2px solid transparent',
                  padding: '0.4rem 0',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Portal Shortcuts */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Emergency Hotline preview */}
          <a
            href="tel:+18009994325"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#0f766e',
              background: '#f0fdfa',
              padding: '0.4rem 0.8rem',
              borderRadius: '9999px',
              border: '1px solid #ccfbf1'
            }}
            className="hotline-badge"
          >
            <PhoneCall size={14} color="#0d9488" />
            24/7 Hotline
          </a>

          {/* Role specific workspace button */}
          {currentRole === 'patient' && (
            <button
              onClick={() => onNavigate('patient')}
              className={activeView === 'patient' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <User size={15} /> Patient Portal
            </button>
          )}

          {currentRole === 'doctor' && (
            <button
              onClick={() => onNavigate('doctor')}
              className={activeView === 'doctor' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <Stethoscope size={15} /> Doctor Portal
            </button>
          )}

          {currentRole === 'admin' && (
            <button
              onClick={() => onNavigate('admin')}
              className={activeView === 'admin' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            >
              <ShieldCheck size={15} /> Admin Portal
            </button>
          )}

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
          >
            <CalendarPlus size={16} />
            <span>Book Visit</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '0.5rem', color: '#334155' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 840px) {
          .desktop-nav { display: flex !important; }
          .hotline-badge { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.06)'
        }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              style={{
                textAlign: 'left',
                padding: '0.6rem 0',
                fontWeight: activeView === link.id ? 700 : 500,
                color: activeView === link.id ? '#0d9488' : '#334155',
                fontSize: '1rem',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
            <button
              onClick={() => { onNavigate('patient'); setMobileMenuOpen(false); }}
              className="btn-outline"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Patient Portal
            </button>
            <button
              onClick={() => { onNavigate('doctor'); setMobileMenuOpen(false); }}
              className="btn-outline"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Doctor Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
