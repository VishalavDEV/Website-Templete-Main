import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { MatchCard } from '../components/MatchCard';

export const Matches = () => {
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filters = ['ALL', 'LIVE', 'UPCOMING', 'COMPLETED'];

  const filteredMatches = tournamentData.matches.filter((m) => {
    if (statusFilter === 'ALL') return true;
    return m.status === statusFilter;
  });

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              MATCH <span>SCHEDULE & RESULTS</span>
            </h1>
            <div className="section-subtitle">LIVE, UPCOMING & COMPLETED BASKETBALL FIXTURES</div>
          </div>

          {/* Filter Tabs */}
          <div className="tab-group-container" style={{ display: 'flex', gap: '12px', marginBottom: '35px', justifyContent: 'center' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`btn-secondary ${statusFilter === f ? 'active' : ''}`}
                style={{
                  borderColor: statusFilter === f ? '#ff4d00' : 'var(--border)',
                  color: statusFilter === f ? '#ff7518' : 'var(--white)',
                  padding: '10px 24px',
                  fontSize: '1rem',
                }}
              >
                {f === 'LIVE' ? '🔴 LIVE' : f}
              </button>
            ))}
          </div>

          {/* Matches Grid */}
          <div className="matches-grid">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
