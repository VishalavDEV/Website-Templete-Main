import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { PlayerCard } from '../components/PlayerCard';
import { Search } from 'lucide-react';

export const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posFilter, setPosFilter] = useState('ALL');

  const positions = ['ALL', 'GUARDS', 'FORWARDS', 'CENTERS'];

  const filteredPlayers = tournamentData.players.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.team.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPos = posFilter === 'ALL' || p.posGroup === posFilter;
    return matchesSearch && matchesPos;
  });

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>PLAYERS</span>
            </h1>
            <div className="section-subtitle">STAR ATHLETES & ROSTER DIRECTORY</div>
          </div>

          {/* Search & Position Filters */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search player or team..."
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 44px',
                  background: '#111',
                  border: '1px solid var(--border-orange)',
                  color: '#fff',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-sports)',
                  fontSize: '1rem',
                }}
              />
              <Search size={20} color="#ff4d00" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {positions.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setPosFilter(pos)}
                  className={`btn-secondary ${posFilter === pos ? 'active' : ''}`}
                  style={{
                    borderColor: posFilter === pos ? '#ff4d00' : 'var(--border)',
                    color: posFilter === pos ? '#ff7518' : 'var(--white)',
                    padding: '10px 18px',
                    fontSize: '0.9rem',
                  }}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>

          {/* Players Grid */}
          <div className="players-grid">
            {filteredPlayers.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
