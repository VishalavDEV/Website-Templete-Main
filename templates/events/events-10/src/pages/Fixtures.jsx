import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Fixtures = () => {
  const [activeGroup, setActiveGroup] = useState('ALL');

  const groups = ['ALL', 'GROUP A', 'GROUP B', 'GROUP C', 'GROUP D', 'QUARTER FINALS', 'SEMI FINALS', 'FINAL'];

  const filteredFixtures = tournamentData.fixtures.filter((f) => {
    if (activeGroup === 'ALL') return true;
    return f.group === activeGroup;
  });

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>FIXTURES</span>
            </h1>
            <div className="section-subtitle">COMPLETE DATE-WISE MATCH SCHEDULE</div>
          </div>

          {/* Group Filters */}
          <div className="tab-group-container" style={{ display: 'flex', gap: '10px', marginBottom: '35px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {groups.map((grp) => (
              <button
                key={grp}
                onClick={() => setActiveGroup(grp)}
                className={`btn-secondary ${activeGroup === grp ? 'active' : ''}`}
                style={{
                  borderColor: activeGroup === grp ? '#ff4d00' : 'var(--border)',
                  color: activeGroup === grp ? '#ff7518' : 'var(--white)',
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                }}
              >
                {grp}
              </button>
            ))}
          </div>

          {/* Fixtures List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {filteredFixtures.map((f) => (
              <div key={f.id} className="sports-card" style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,77,0,0.15)', border: '1px solid var(--orange)', color: '#ff4d00', padding: '8px 14px', borderRadius: '4px', textAlign: 'center', fontFamily: 'var(--font-display)' }}>
                    <div style={{ fontSize: '1.4rem', lineHeight: 1 }}>{f.date.split(' ')[0]}</div>
                    <div style={{ fontSize: '0.8rem' }}>{f.date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <span className="badge-live" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>{f.group}</span>
                    <div className="font-sports" style={{ fontSize: '1.2rem', color: 'var(--white)', fontWeight: 800 }}>
                      {f.teamA} VS {f.teamB}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.9rem', color: 'var(--gray)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} color="#ff4d00" />
                    <span>{f.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} color="#ff4d00" />
                    <span>{f.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
