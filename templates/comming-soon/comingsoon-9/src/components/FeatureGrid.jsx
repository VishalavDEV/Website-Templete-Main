import React from 'react';
import * as Icons from 'lucide-react';

export default function FeatureGrid({ currentPreset, lang = 'en' }) {
  return (
    <div style={{ margin: '60px 0', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Engineered Without Compromise
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
          Breakthrough performance characteristics and proprietary innovations defined for {currentPreset.name}.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}>
        {currentPreset.features.map((feat, idx) => {
          const IconComponent = Icons[feat.icon] || Icons.Sparkles;

          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                background: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-pill)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-1)'
              }}>
                <IconComponent size={22} />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {feat.title}
              </h3>

              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
