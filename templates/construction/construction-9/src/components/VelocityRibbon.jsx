import React from 'react';

export default function VelocityRibbon() {
  return (
    <div style={{
      background: 'var(--bg-surface-elevated)',
      borderTop: '2px solid var(--border-strong)',
      borderBottom: '2px solid var(--border-strong)',
      overflow: 'hidden',
      padding: '18px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {/* Top Stream: Scrolling Left */}
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        width: 'max-content',
        animation: 'tickerLeft 32s linear infinite'
      }}>
        {[1, 2].map((iter) => (
          <div key={iter} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            paddingRight: '36px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }}>
            <span style={{ color: 'var(--accent-orange)' }}>// CHRONOS MONOLITHIC ENGINEERING</span>
            <span style={{ color: 'var(--text-dim)' }}>■</span>
            <span style={{ color: 'var(--text-main)' }}>BOARD-FORMED FAIR-FACED CONCRETE</span>
            <span style={{ color: 'var(--text-dim)' }}>■</span>
            <span style={{ color: 'var(--accent-cyan)' }}>C80 ULTRA-HIGH COMPRESSION STRENGTH</span>
            <span style={{ color: 'var(--text-dim)' }}>■</span>
            <span style={{ color: 'var(--text-muted)' }}>POST-TENSIONED CANTILEVER STRUCTURES</span>
            <span style={{ color: 'var(--text-dim)' }}>■</span>
            <span style={{ color: 'var(--accent-orange)' }}>ZONE 4 SEISMIC ISOLATION JOINTS</span>
            <span style={{ color: 'var(--text-dim)' }}>■</span>
          </div>
        ))}
      </div>

      {/* Bottom Stream: Scrolling Right */}
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        width: 'max-content',
        animation: 'tickerRight 36s linear infinite'
      }}>
        {[1, 2].map((iter) => (
          <div key={iter} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            paddingRight: '36px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)'
          }}>
            <span>STOCKHOLM · BASEL · ROTTERDAM · REYKJAVIK · KYOTO</span>
            <span style={{ color: 'var(--accent-orange)' }}>▲</span>
            <span>HYPER-DENSITY MINERALIZED POZZOLAN</span>
            <span style={{ color: 'var(--accent-orange)' }}>▲</span>
            <span>150-YEAR STRUCTURAL LIFE CYCLE GUARANTEE</span>
            <span style={{ color: 'var(--accent-orange)' }}>▲</span>
            <span>SPRING BOOT + REACT BIM INTEGRATION</span>
            <span style={{ color: 'var(--accent-orange)' }}>▲</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tickerLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes tickerRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
