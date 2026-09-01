import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { Trophy, Award } from 'lucide-react';

export const TournamentHistoryPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>HISTORY</span>
            </h1>
            <div className="section-subtitle">PREVIOUS CHAMPIONS & HALL OF FAME (2022 — 2026)</div>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tournamentData.history.map((item) => (
              <div key={item.year} className="sports-card flame-glow-effect" style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#ff4d00' }}>
                    {item.year}
                  </div>
                  <div>
                    <span className="badge-live" style={{ background: '#ffd700', color: '#050505', marginBottom: '4px' }}>
                      🏆 CHAMPION: {item.champion}
                    </span>
                    <div style={{ fontSize: '0.95rem', color: 'var(--white)', marginTop: '4px' }}>
                      Runner-up: {item.runnerUp} | Venue: {item.venue}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="font-sports" style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>MVP AWARD</div>
                  <div style={{ fontWeight: 800, color: '#ff7518', fontSize: '1.1rem' }}>{item.mvp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
