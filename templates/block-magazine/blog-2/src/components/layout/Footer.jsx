import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowUpRight, Mail } from 'lucide-react';
import categoriesData from '../../data/categories.json';

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="container">
        {/* Main Responsive Footer Grid */}
        <div className="footer-grid">
          {/* Brand & Manifesto Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-classic)', fontSize: 'clamp(1.75rem, 4vw, 2.1rem)', fontWeight: 800, letterSpacing: '0.12em', color: '#fffaf1' }}>
                ELEMENTAL
              </span>
              <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', color: 'var(--accent-amber)', textTransform: 'uppercase', marginTop: '2px' }}>
                STORIES BEHIND THE SCIENCE
              </span>
            </Link>
            <p style={{ fontSize: '0.88rem', color: '#d5c8be', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>
              "Science didn't happen in a vacuum. It happened through people, mistakes, accidents, ambition, politics, culture, money, experimentation, failure, and persistence."
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(217, 108, 74, 0.15)', border: '1px solid rgba(217, 108, 74, 0.3)', borderRadius: '2px' }}>
              <Shield size={14} color="var(--accent-amber)" />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--accent-amber)' }}>
                ISSUE 01 • 2026 EDITION
              </span>
            </div>
          </div>

          {/* EXPLORE COLUMN */}
          <div className="footer-col">
            <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '1.25rem' }}>
              EXPLORE ARCHIVE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {categoriesData.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/topic/${cat.slug}`} style={{ fontSize: '0.85rem', color: '#d5c8be', transition: 'color 0.2s', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/stories" style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 600, display: 'inline-block', paddingTop: '4px' }}>
                  View All 10 Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* CURATION & FEATURES COLUMN */}
          <div className="footer-col">
            <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '1.25rem' }}>
              FEATURES & LABS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/collection" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  The Visual Collection (3D Dome)
                </Link>
              </li>
              <li>
                <Link to="/archive" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  The Archive Lab (GridScan)
                </Link>
              </li>
              <li>
                <Link to="/authors" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  Contributing Historians
                </Link>
              </li>
              <li>
                <Link to="/saved" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  Personal Reading List
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  Editorial Philosophy & Masthead
                </Link>
              </li>
              <li>
                <Link to="/subscribe" style={{ fontSize: '0.85rem', color: '#d5c8be', display: 'inline-block', padding: '2px 0' }} className="footer-link">
                  The Weekly Element Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT & SOCIAL COLUMN */}
          <div className="footer-col">
            <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '1.25rem' }}>
              EDITORIAL DESK
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#d5c8be', lineHeight: 1.5, marginBottom: '1rem' }}>
              Published quarterly in digital edition. Independent historical journalism dedicated to the human narrative of science.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <a href="mailto:desk@elemental-magazine.org" style={{ fontSize: '0.82rem', color: 'var(--accent-amber)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={13} />
                <span>desk@elemental-magazine.org</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Instagram', 'YouTube', 'X / Twitter', 'LinkedIn'].map((social) => (
                <span
                  key={social}
                  style={{
                    fontSize: '0.72rem',
                    color: '#d5c8be',
                    backgroundColor: 'rgba(255, 250, 241, 0.08)',
                    padding: '4px 9px',
                    borderRadius: '2px',
                    border: '1px solid rgba(255, 250, 241, 0.12)'
                  }}
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="footer-colophon">
          <p>© {new Date().getFullYear()} ELEMENTAL Magazine. All original narrative science content.</p>
          <div className="footer-legal-links">
            <Link to="/about" style={{ color: 'inherit' }}>Editorial Policy</Link>
            <Link to="/about" style={{ color: 'inherit' }}>Privacy Charter</Link>
            <Link to="/about" style={{ color: 'inherit' }}>Terms of Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
