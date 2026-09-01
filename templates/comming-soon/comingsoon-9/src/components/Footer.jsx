import React from 'react';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ currentPreset }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '40px 0 120px 0',
      width: '100%',
      background: 'var(--bg-primary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Left info */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '16px',
            fontWeight: 800,
            color: 'var(--text-primary)'
          }}>
            {currentPreset.name}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
            © {new Date().getFullYear()} {currentPreset.name} Inc. All rights reserved. Global Patent & Trademark Protected.
          </div>
        </div>

        {/* Center System Status */}
        <div className="glass-pill" style={{
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: 'var(--text-secondary)'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          <span>Core Infrastructure Operational (99.99% SLA)</span>
        </div>

        {/* Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Privacy Policy • Security Whitepaper • Terms
          </span>
          <button
            onClick={scrollToTop}
            className="glass-pill"
            title="Scroll to Top"
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-secondary)'
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
