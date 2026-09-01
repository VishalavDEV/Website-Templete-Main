import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { Award, Trophy } from 'lucide-react';

export const AwardsPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>AWARDS</span>
            </h1>
            <div className="section-subtitle">TROPHIES, CASH PRIZES & HONORS</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {tournamentData.awards.map((award, idx) => (
              <div key={idx} className="sports-card flame-glow-effect" style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>{award.trophy}</div>
                <h3 className="font-display" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '8px' }}>
                  {award.title}
                </h3>
                <div className="font-display" style={{ fontSize: '1.6rem', color: '#ff4d00', marginBottom: '12px' }}>
                  {award.reward}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray)', lineHeight: 1.5 }}>
                  {award.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
