import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/corporateData';

export default function Footer() {
  return (
    <footer className="asym-footer-section">
      <div className="container-asym">
        {/* Top: Large Statement Left, 4 Navigation Columns Right */}
        <div className="asym-footer-top-split">
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>
                {BRAND.name}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-copper)' }}>
                SYSTEMS
              </span>
            </div>

            <h2 className="asym-footer-statement-left">
              BUILDING BETTER SYSTEMS FOR A CHANGING WORLD.
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--c-stone)', lineHeight: '1.7', marginTop: '20px', maxWidth: '420px' }}>
              We combine technology, intelligence, and engineering to create resilient digital systems for organizations operating at global scale.
            </p>
          </div>

          <div className="asym-footer-4cols-right">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--c-copper)', textTransform: 'uppercase', marginBottom: '16px' }}>
                COMPANY
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/company" style={{ color: 'var(--c-stone)' }}>About</Link></li>
                <li><Link to="/company" style={{ color: 'var(--c-stone)' }}>Leadership</Link></li>
                <li><Link to="/company" style={{ color: 'var(--c-stone)' }}>Governance</Link></li>
                <li><Link to="/contact" style={{ color: 'var(--c-stone)' }}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--c-copper)', textTransform: 'uppercase', marginBottom: '16px' }}>
                CAPABILITIES
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/capabilities" style={{ color: 'var(--c-stone)' }}>Digital Transformation</Link></li>
                <li><Link to="/capabilities" style={{ color: 'var(--c-stone)' }}>AI & Automation</Link></li>
                <li><Link to="/capabilities" style={{ color: 'var(--c-stone)' }}>Cloud Solutions</Link></li>
                <li><Link to="/capabilities" style={{ color: 'var(--c-stone)' }}>Data & Analytics</Link></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--c-copper)', textTransform: 'uppercase', marginBottom: '16px' }}>
                INDUSTRIES
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/industries" style={{ color: 'var(--c-stone)' }}>Financial Services</Link></li>
                <li><Link to="/industries" style={{ color: 'var(--c-stone)' }}>Healthcare</Link></li>
                <li><Link to="/industries" style={{ color: 'var(--c-stone)' }}>Manufacturing</Link></li>
                <li><Link to="/industries" style={{ color: 'var(--c-stone)' }}>Logistics</Link></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--c-copper)', textTransform: 'uppercase', marginBottom: '16px' }}>
                RESOURCES
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/insights" style={{ color: 'var(--c-stone)' }}>Insights</Link></li>
                <li><Link to="/work" style={{ color: 'var(--c-stone)' }}>Case Studies</Link></li>
                <li><Link to="/technology" style={{ color: 'var(--c-stone)' }}>Technology Lab</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal: Copyright Left, Legal Right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-dark)', paddingTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-stone)' }}>
          <span>© 2026 {BRAND.name}. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy" style={{ color: 'var(--c-stone)' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: 'var(--c-stone)' }}>Terms of Service</a>
            <a href="#security" style={{ color: 'var(--c-stone)' }}>Security Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
