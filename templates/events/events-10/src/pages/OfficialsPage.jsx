import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { Users, ShieldCheck } from 'lucide-react';

export const OfficialsPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              MATCH <span>OFFICIALS</span>
            </h1>
            <div className="section-subtitle">FIBA CERTIFIED REFEREES, TECHNICAL DIRECTORS & SCOREKEEPERS</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            {tournamentData.officials.map((off, idx) => (
              <div key={idx} className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
                <img src={off.photo} alt={off.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--orange)' }} />
                <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '4px' }}>{off.name}</h3>
                <div className="font-sports" style={{ fontSize: '1rem', color: '#ff4d00', marginBottom: '8px' }}>{off.role}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>{off.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
