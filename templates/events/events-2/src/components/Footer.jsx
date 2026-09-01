import React from 'react';
import { Zap } from 'lucide-react';
import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from './SocialIcons';
import '../styles/cards.css';

export const Footer = ({ onNavigate }) => {
  return (
    <footer style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: '1px solid var(--border-light)', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '60px' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--gradient-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Zap size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                CYBER<span style={{ color: 'var(--accent-purple)' }}>NEXUS</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '24px' }}>
              The global summit bringing together AI researchers, cloud platform architects, product designers, and technology investors.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram" style={{ background: '#f1f5f9', color: 'var(--text-primary)' }}>
                <IconInstagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn" style={{ background: '#f1f5f9', color: 'var(--text-primary)' }}>
                <IconLinkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter" style={{ background: '#f1f5f9', color: 'var(--text-primary)' }}>
                <IconTwitter size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube" style={{ background: '#f1f5f9', color: 'var(--text-primary)' }}>
                <IconYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('events')} style={{ padding: 0 }}>
                  Events Catalog
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('speakers')} style={{ padding: 0 }}>
                  Keynote Speakers
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('schedule')} style={{ padding: 0 }}>
                  Summit Schedule
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('gallery')} style={{ padding: 0 }}>
                  Photo Gallery
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('past-events')} style={{ padding: 0 }}>
                  Past Event Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Information</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('about')} style={{ padding: 0 }}>
                  About Summit
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('venue')} style={{ padding: 0 }}>
                  Venue & Directions
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('faq')} style={{ padding: 0 }}>
                  Delegate FAQs
                </button>
              </li>
              <li>
                <button className="btn-ghost" onClick={() => onNavigate('contact')} style={{ padding: 0 }}>
                  Contact Organizers
                </button>
              </li>
            </ul>
          </div>

          {/* Location / Event Card */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Summit Location</h4>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Bangalore International Exhibition Centre</strong>
              <br />
              BIEC, Bengaluru, Karnataka, India.
              <br />
              <span style={{ color: 'var(--accent-purple)', fontWeight: 700, marginTop: '6px', display: 'inline-block' }}>
                November 18–20, 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>© 2026 CYBERNEXUS. All Rights Reserved. Global Technology Summit.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
