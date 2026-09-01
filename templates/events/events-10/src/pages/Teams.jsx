import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { TeamCard } from '../components/TeamCard';
import { Search } from 'lucide-react';

export const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupFilter, setGroupFilter] = useState('ALL');

  const groups = ['ALL', 'Group A', 'Group B', 'Group C', 'Group D'];

  const filteredTeams = tournamentData.teams.filter((team) => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) || team.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = groupFilter === 'ALL' || team.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>TEAMS</span>
            </h1>
            <div className="section-subtitle">16 PARTICIPATING BASKETBALL FRANCHISES</div>
          </div>

          {/* Search & Filter Bar */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search team or city..."
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
              {groups.map((grp) => (
                <button
                  key={grp}
                  onClick={() => setGroupFilter(grp)}
                  className={`btn-secondary ${groupFilter === grp ? 'active' : ''}`}
                  style={{
                    borderColor: groupFilter === grp ? '#ff4d00' : 'var(--border)',
                    color: groupFilter === grp ? '#ff7518' : 'var(--white)',
                    padding: '10px 16px',
                    fontSize: '0.9rem',
                  }}
                >
                  {grp}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Teams */}
          <div className="teams-grid">
            {filteredTeams.map((t) => (
              <TeamCard key={t.id} team={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
