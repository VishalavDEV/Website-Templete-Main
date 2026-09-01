import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from './Icons';
import { BRAND } from '../data/content';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="orion-footer">
      <div className="container">
        
        {/* Top Tier */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--bg-cream)' }}>
              {BRAND.name}
            </Link>
            <p className="italic font-serif" style={{ fontSize: '1.35rem', color: 'rgba(245,243,238,0.9)' }}>
              {BRAND.tagline}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--bg-cream-300)', lineHeight: '1.6', maxWidth: '440px' }}>
              {BRAND.positioning}
            </p>
          </div>

          {/* Monograph Subscription */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Quarterly Monograph
              </p>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--bg-cream)', marginTop: '0.5rem' }}>
                Strategic perspectives delivered to your executive brief.
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--bg-cream-300)', marginTop: '0.25rem' }}>
                Curated macroeconomic analysis, board governance frameworks, and industry research.
              </p>
            </div>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                required
                placeholder="Enter executive email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: 'var(--charcoal-900)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'var(--bg-cream)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.85rem',
                  flexGrow: 1,
                  minWidth: '220px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--bg-cream)',
                  color: 'var(--text-charcoal)',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {subscribed ? (
                  <>
                    <span>Subscribed</span>
                    <Check size={14} />
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2.5rem', padding: '3.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Practice Areas */}
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>What We Do</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--bg-cream-300)' }}>
              <li><Link to="/services" style={{ color: 'inherit' }}>Corporate Strategy</Link></li>
              <li><Link to="/services" style={{ color: 'inherit' }}>Transformation</Link></li>
              <li><Link to="/services" style={{ color: 'inherit' }}>Operations & Supply</Link></li>
              <li><Link to="/services" style={{ color: 'inherit' }}>Digital & Applied AI</Link></li>
              <li><Link to="/services" style={{ color: 'inherit' }}>Organization & Talent</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Industries</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--bg-cream-300)' }}>
              <li><Link to="/industries" style={{ color: 'inherit' }}>Financial Services</Link></li>
              <li><Link to="/industries" style={{ color: 'inherit' }}>Healthcare & Pharma</Link></li>
              <li><Link to="/industries" style={{ color: 'inherit' }}>Manufacturing & Auto</Link></li>
              <li><Link to="/industries" style={{ color: 'inherit' }}>Energy & Utilities</Link></li>
              <li><Link to="/industries" style={{ color: 'inherit' }}>Consumer & Luxury</Link></li>
            </ul>
          </div>

          {/* Work & Solutions */}
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Work & Solutions</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--bg-cream-300)' }}>
              <li><Link to="/work" style={{ color: 'inherit' }}>Selected Case Studies</Link></li>
              <li><Link to="/solutions" style={{ color: 'inherit' }}>Enterprise Turnaround</Link></li>
              <li><Link to="/solutions" style={{ color: 'inherit' }}>Net-Zero Transition</Link></li>
              <li><Link to="/solutions" style={{ color: 'inherit' }}>Sovereign Supply Chains</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--bg-cream-300)' }}>
              <li><Link to="/about" style={{ color: 'inherit' }}>About ORION</Link></li>
              <li><Link to="/team" style={{ color: 'inherit' }}>Partners & Leadership</Link></li>
              <li><Link to="/insights" style={{ color: 'inherit' }}>Perspectives & Research</Link></li>
              <li><Link to="/careers" style={{ color: 'inherit' }}>Careers</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit' }}>Offices & Inquiries</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div style={{ gridColumn: 'span 2' }}>
            <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Global Hubs</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--bg-cream-300)' }}>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--bg-cream)' }}>Zurich (HQ)</p>
                <p>Talstrasse 41, 8001 Zürich</p>
                <p style={{ color: 'var(--text-muted)' }}>+41 44 214 8000</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--bg-cream)' }}>New York</p>
                <p>575 5th Ave, NY 10017</p>
                <p style={{ color: 'var(--text-muted)' }}>+1 212 555 0192</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} {BRAND.name} Strategic Advisory AG. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: 'inherit' }}>Privacy Notice</a>
            <a href="#terms" style={{ color: 'inherit' }}>Terms of Engagement</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              LinkedIn <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Massive Typographic Mark */}
        <div className="footer-huge-mark">
          {BRAND.name}
        </div>

      </div>
    </footer>
  );
}
