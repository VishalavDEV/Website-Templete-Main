import React from 'react';
import { sponsorsTiers } from '../data/sponsors';
import { ShieldCheck, Award } from 'lucide-react';

export default function Sponsors() {
  // Collect all sponsor badges for the marquee
  const allSponsors = sponsorsTiers.flatMap((tier) => tier.sponsors);

  return (
    <section id="sponsors" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <div className="section-tag">
          <ShieldCheck size={14} /> Global Partners
        </div>
        <h2 className="section-title">
          Sponsors & <span className="text-gradient">Industry Allies</span>
        </h2>
        <p className="section-subtitle">
          Backed by world leaders driving innovation in accelerated quantum simulation, mobile robotics, low-power semiconductors, and spatial computing.
        </p>
      </div>

      {/* Infinite Auto-Scroll Logo Marquee */}
      <div className="marquee-wrapper" style={{ marginBottom: '70px' }}>
        <div className="marquee-content">
          {[...allSponsors, ...allSponsors].map((s, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '16px 36px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                whiteSpace: 'nowrap',
                minWidth: '220px',
                justifyContent: 'center',
                border: '1px solid rgba(0, 240, 255, 0.2)'
              }}
            >
              <Award size={20} color="#00f0ff" />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  {s.logoText}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tiered Sponsor Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {sponsorsTiers.map((tierGroup, idx) => (
          <div key={idx}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: idx === 0 ? 'var(--accent-cyan)' : idx === 1 ? '#e2e8f0' : 'var(--text-muted)'
                }}
              >
                — {tierGroup.tier} —
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${idx === 0 ? '240px' : '180px'}, 1fr))`,
                gap: '20px'
              }}
            >
              {tierGroup.sponsors.map((sp, sIdx) => (
                <div
                  key={sIdx}
                  className="glass-card"
                  style={{
                    padding: idx === 0 ? '30px' : '20px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    border: idx === 0 ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid var(--glass-border)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: idx === 0 ? '1.3rem' : '1.05rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '6px'
                    }}
                  >
                    {sp.logoText}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {sp.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
