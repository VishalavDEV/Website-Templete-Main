import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { HeartHandshake } from 'lucide-react';

export const SponsorGrid = () => {
  const { title, platinum, gold, silver, officialPartners } = tournamentData.sponsors;

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Title Sponsor */}
      <div style={{ marginBottom: '40px' }}>
        <div className="font-sports" style={{ fontSize: '1rem', color: '#ff4d00', letterSpacing: '2px', marginBottom: '10px' }}>
          {title.tier}
        </div>
        <div
          className="sports-card flame-glow-effect"
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.15), var(--dark))',
            border: '2px solid var(--orange)',
          }}
        >
          <div className="font-display" style={{ fontSize: '3rem', color: '#fff', letterSpacing: '2px' }}>
            {title.logo}
          </div>
        </div>
      </div>

      {/* Platinum Partners */}
      <div style={{ marginBottom: '40px' }}>
        <div className="font-sports" style={{ fontSize: '0.95rem', color: 'var(--gray)', letterSpacing: '2px', marginBottom: '16px' }}>
          PLATINUM PARTNERS
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {platinum.map((item, i) => (
            <div key={i} className="sports-card" style={{ padding: '24px 40px', minWidth: '240px' }}>
              <div className="font-display" style={{ fontSize: '1.8rem' }}>{item.logo}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gold & Silver */}
      <div style={{ marginBottom: '40px' }}>
        <div className="font-sports" style={{ fontSize: '0.95rem', color: 'var(--gray)', letterSpacing: '2px', marginBottom: '16px' }}>
          GOLD & SILVER PARTNERS
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[...gold, ...silver].map((item, i) => (
            <div key={i} className="sports-card" style={{ padding: '16px 28px', minWidth: '200px' }}>
              <div className="font-display" style={{ fontSize: '1.4rem', color: 'var(--gray)' }}>{item.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
