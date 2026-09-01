import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function SponsorCard({ sponsor, tier }) {
  return (
    <div 
      className="glass-panel"
      style={{
        padding: tier === 'title' ? '40px' : tier === 'gold' ? '28px' : '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
        border: tier === 'title' ? '2px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div 
        className="font-display text-gradient-fire"
        style={{
          fontSize: tier === 'title' ? '3.5rem' : tier === 'gold' ? '2.2rem' : '1.5rem',
          lineHeight: 1,
          fontWeight: 900,
          letterSpacing: '2px',
          marginBottom: '8px'
        }}
      >
        {sponsor.logoText || sponsor.name}
      </div>

      <div style={{
        fontSize: '0.72rem',
        fontWeight: 800,
        color: 'var(--soft-grey)',
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
      }}>
        {sponsor.category || sponsor.tier}
      </div>

      {sponsor.description && (
        <p style={{ color: 'var(--warm-white)', fontSize: '0.9rem', marginTop: '12px', maxWidth: '600px' }}>
          {sponsor.description}
        </p>
      )}
    </div>
  );
}
