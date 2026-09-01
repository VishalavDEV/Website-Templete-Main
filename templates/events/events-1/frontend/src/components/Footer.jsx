import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Globe, Share2, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderTop: '1px solid var(--border)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" className="navbar-logo" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <div className="logo-icon">
                <Calendar size={22} />
              </div>
              <div className="logo-text">
                EVENT<span>ORA</span>
              </div>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Connect. Learn. Experience. The premier event management and technology conference platform.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="theme-toggle-btn" title="LinkedIn">
                <Share2 size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="theme-toggle-btn" title="Instagram">
                <Globe size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="theme-toggle-btn" title="YouTube">
                <MessageCircle size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="theme-toggle-btn" title="X / Twitter">
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>EXPLORE</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events Directory</Link></li>
              <li><Link to="/speakers">Keynote Speakers</Link></li>
              <li><Link to="/schedule">Conference Schedule</Link></li>
              <li><Link to="/about">About Platform</Link></li>
            </ul>
          </div>

          {/* EVENT */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>EVENT</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <li><Link to="/venue">Venue & Hotels</Link></li>
              <li><Link to="/tickets">Ticket Pricing</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact Organizers</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>LEGAL</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-dim)', fontSize: '0.9rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© 2026 EVENTORA. All Rights Reserved.</div>
          <div>Connect. Learn. Experience.</div>
        </div>
      </div>
    </footer>
  );
}
