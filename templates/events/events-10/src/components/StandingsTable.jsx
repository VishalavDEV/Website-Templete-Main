import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';

export const StandingsTable = ({ groupFilter = 'ALL' }) => {
  const [activeGroup, setActiveGroup] = useState('GROUP A');
  const groups = ['GROUP A', 'GROUP B', 'GROUP C', 'GROUP D'];

  return (
    <div>
      {/* Group Selector Tabs */}
      <div className="tab-group-container" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {groups.map((grp) => (
          <button
            key={grp}
            onClick={() => setActiveGroup(grp)}
            className={`btn-secondary ${activeGroup === grp ? 'active' : ''}`}
            style={{
              borderColor: activeGroup === grp ? '#ff4d00' : 'var(--border)',
              color: activeGroup === grp ? '#ff7518' : 'var(--white)',
              padding: '10px 20px',
              fontSize: '0.95rem',
            }}
          >
            {grp}
          </button>
        ))}
      </div>

      <div className="table-responsive">
        <table className="standings-table">
          <thead>
            <tr>
              <th>POS</th>
              <th>TEAM</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>PTS</th>
              <th>PF</th>
              <th>PA</th>
              <th>DIFF</th>
              <th>FORM</th>
            </tr>
          </thead>
          <tbody>
            {tournamentData.standings[activeGroup]?.map((row) => (
              <tr key={row.team}>
                <td style={{ fontWeight: 800, color: '#ff4d00' }}>0{row.pos}</td>
                <td style={{ fontWeight: 700 }}>{row.team}</td>
                <td>{row.p}</td>
                <td style={{ color: '#00c853' }}>{row.w}</td>
                <td style={{ color: '#ff1744' }}>{row.l}</td>
                <td style={{ fontWeight: 800, color: '#ff4d00' }}>{row.pts}</td>
                <td>{row.pf}</td>
                <td>{row.pa}</td>
                <td>{row.diff}</td>
                <td>
                  {row.form.map((res, i) => (
                    <span key={i} className={`form-badge ${res}`}>
                      {res}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
