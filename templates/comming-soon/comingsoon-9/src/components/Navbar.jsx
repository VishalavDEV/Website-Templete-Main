import React from 'react';
import { Sparkles, Shield, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPreset, onScrollToWaitlist }) {
  return (
    <header style={{
      position: 'sticky',
      top: '16px',
      zIndex: 50,
      width: '100%',
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '0 24px'
    }}>
      <div className="glass-panel" style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 'var(--radius-full)',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Brand identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '15px'
          }}>
            {currentPreset.name.charAt(0)}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '17px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}>
              {currentPreset.name}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
              {currentPreset.categoryLabel}
            </div>
          </div>
        </div>

        {/* Live Status Pill & Waitlist Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="glass-pill" style={{
            padding: '6px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--text-secondary)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'inline-block'
            }} className="animate-radar" />
            <span className="hidden-mobile">VIP Cohort 01 Open</span>
          </div>

          <button
            onClick={onScrollToWaitlist}
            className="glow-btn"
            style={{
              padding: '8px 18px',
              fontSize: '12px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span>Request Access</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
