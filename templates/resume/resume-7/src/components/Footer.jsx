import React from 'react';
import { CHEF_PROFILE } from '../data/culinaryData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-initials" style={{ width: '38px', height: '38px', fontSize: '1.25rem' }}>
              {CHEF_PROFILE.initials}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                {CHEF_PROFILE.name.toUpperCase()}
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-charcoal-muted)' }}>
                {CHEF_PROFILE.title}
              </div>
            </div>
          </div>

          <ul className="footer-links">
            <li><a href="#philosophy" className="footer-link">Philosophy</a></li>
            <li><a href="#career" className="footer-link">Career</a></li>
            <li><a href="#signature-work" className="footer-link">Signature Work</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>

          <div className="footer-right">
            &copy; {new Date().getFullYear()} {CHEF_PROFILE.name}. All rights reserved.
          </div>
        </div>

        <div className="footer-disclaimer-box">
          This is a fictional Resume/CV template demonstration. All names, restaurants, organizations, culinary concepts, awards, institutions, and visuals are fictional or AI-generated.
        </div>
      </div>
    </footer>
  );
}
