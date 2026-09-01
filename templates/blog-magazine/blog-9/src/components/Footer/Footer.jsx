import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="atlas-footer" aria-label="Site Footer">
      <div className="atlas-container">
        <div className="atlas-footer-top">
          <div className="atlas-footer-brand-col">
            <Link to="/" className="atlas-footer-brand">
              <Compass size={22} color="#c9933b" />
              <span className="atlas-footer-brand-title">ATLAS</span>
            </Link>
            <p className="atlas-footer-desc">
              The independent international journal of natural sciences, planetary observation, deep archaeological time, and visual storytelling.
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-ochre)', letterSpacing: '0.1em', fontWeight: 600 }}>
              ESTABLISHED 1926 · 100 YEARS OF DISCOVERY
            </div>
          </div>

          <div>
            <div className="atlas-footer-heading">Departments</div>
            <ul className="atlas-footer-list">
              <li><Link to="/wildlife" className="atlas-footer-link">Wildlife</Link></li>
              <li><Link to="/planet" className="atlas-footer-link">Planet</Link></li>
              <li><Link to="/science" className="atlas-footer-link">Science</Link></li>
              <li><Link to="/space" className="atlas-footer-link">Space</Link></li>
              <li><Link to="/history" className="atlas-footer-link">History</Link></li>
              <li><Link to="/culture" className="atlas-footer-link">Culture</Link></li>
              <li><Link to="/exploration" className="atlas-footer-link">Exploration</Link></li>
              <li><Link to="/photography" className="atlas-footer-link">Photography</Link></li>
            </ul>
          </div>

          <div>
            <div className="atlas-footer-heading">Magazine</div>
            <ul className="atlas-footer-list">
              <li><Link to="/magazine" className="atlas-footer-link">Current Issue</Link></li>
              <li><Link to="/magazine" className="atlas-footer-link">Issue Archive</Link></li>
              <li><Link to="/saved" className="atlas-footer-link">Field Pass Credential</Link></li>
              <li><Link to="/explore" className="atlas-footer-link">Interactive Narratives</Link></li>
              <li><Link to="/photography" className="atlas-footer-link">Photo Galleries</Link></li>
            </ul>
          </div>

          <div>
            <div className="atlas-footer-heading">About</div>
            <ul className="atlas-footer-list">
              <li><Link to="/about" className="atlas-footer-link">About ATLAS</Link></li>
              <li><Link to="/about" className="atlas-footer-link">Editorial Policy</Link></li>
              <li><Link to="/about" className="atlas-footer-link">Expedition Grants</Link></li>
              <li><Link to="/about" className="atlas-footer-link">Masthead & Fellows</Link></li>
              <li><Link to="/about" className="atlas-footer-link">Contact Desk</Link></li>
            </ul>
          </div>

          <div>
            <div className="atlas-footer-heading">Follow</div>
            <ul className="atlas-footer-list">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="atlas-footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>Instagram</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="atlas-footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>YouTube</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="atlas-footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>X (Twitter)</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="atlas-footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="atlas-footer-bottom">
          <div className="atlas-footer-motto">
            KEEP LOOKING.
          </div>

          <div className="atlas-footer-copy">
            © {new Date().getFullYear()} ATLAS Publishing Guild. All Rights Reserved. Independent Discovery.
          </div>
        </div>
      </div>
    </footer>
  );
}
