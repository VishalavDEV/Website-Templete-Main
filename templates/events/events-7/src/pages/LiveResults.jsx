import React, { useState } from 'react';
import { MOCK_RESULTS } from '../data/results';
import { Search, Trophy, Activity, RefreshCw } from 'lucide-react';

export default function LiveResults() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredResults = MOCK_RESULTS.filter(item => {
    const matchesSearch = item.runner.toLowerCase().includes(search.toLowerCase()) || 
                          item.bib.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category.includes(categoryFilter);
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(233,43,43,0.15)',
            border: '1px solid rgba(233,43,43,0.4)',
            color: 'var(--marathon-red)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--marathon-red)', display: 'inline-block' }} className="animate-pulse-live" />
            LIVE TIMING SYSTEM OPERATIONAL
          </div>

          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            LIVE RACE LEADERBOARD
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
            Real-time RFID timing chip results from timing mats placed along the 21.1K and 10K courses.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px'
        }}>
          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="SEARCH RUNNER NAME OR BIB..."
              style={{
                width: '100%',
                padding: '12px 16px 12px 42px',
                background: 'rgba(21, 23, 27, 0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                color: '#FFFFFF',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
            <Search size={18} color="var(--bright-orange)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Results' },
              { id: 'Half', label: '21.1K Half' },
              { id: 'City', label: '10K City' },
              { id: 'Fun', label: '5K Fun' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                style={{
                  background: categoryFilter === tab.id ? 'var(--marathon-red)' : 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.8rem'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Table */}
        <div className="glass-panel" style={{ padding: '20px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--warm-white)', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--bright-orange)', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>RANK</th>
                <th style={{ padding: '12px' }}>RUNNER NAME</th>
                <th style={{ padding: '12px' }}>BIB</th>
                <th style={{ padding: '12px' }}>CATEGORY</th>
                <th style={{ padding: '12px' }}>OFFICIAL TIME</th>
                <th style={{ padding: '12px' }}>AVG PACE</th>
                <th style={{ padding: '12px' }}>10K SPLIT</th>
                <th style={{ padding: '12px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map(item => (
                <tr key={item.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px', fontWeight: 900, color: item.rank <= 3 ? 'var(--bright-orange)' : '#FFF' }}>
                    {item.rank <= 3 ? `🏆 0${item.rank}` : `#${item.rank}`}
                  </td>
                  <td style={{ padding: '12px', fontWeight: 700 }}>
                    {item.flag} {item.runner}
                  </td>
                  <td style={{ padding: '12px', color: 'var(--soft-grey)', fontFamily: 'monospace' }}>
                    {item.bib}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: 'rgba(255,107,44,0.12)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.78rem', color: 'var(--bright-orange)' }}>
                      {item.category}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    {item.time}
                  </td>
                  <td style={{ padding: '12px', color: 'var(--soft-grey)' }}>
                    {item.pace}
                  </td>
                  <td style={{ padding: '12px', color: 'var(--soft-grey)' }}>
                    {item.split10k}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ color: '#10B981', fontWeight: 800, fontSize: '0.75rem' }}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
