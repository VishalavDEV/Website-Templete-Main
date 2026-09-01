import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { LiveMatch } from '../components/LiveMatch';
import { ArrowLeft, Activity, Shield, Clock } from 'lucide-react';

export const MatchDetails = () => {
  const { id } = useParams();
  const match = tournamentData.matches.find((m) => m.id === id) || tournamentData.matches[0];
  const liveStats = tournamentData.liveMatch.stats;

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <Link to="/matches" className="btn-outline" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> BACK TO MATCHES
          </Link>

          <div className="section-header">
            <h1 className="section-title">
              MATCH <span>CENTER</span>
            </h1>
            <div className="section-subtitle">{match.stage} | {match.venue}</div>
          </div>

          <LiveMatch />

          {/* Stats Comparison Grid */}
          <div className="section-header" style={{ marginTop: '50px' }}>
            <h2 className="section-title">
              TEAM STATS <span>COMPARISON</span>
            </h2>
          </div>

          <div className="sports-card" style={{ padding: '30px', maxWidth: '850px', margin: '0 auto 50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'FIELD GOAL %', key: 'fieldGoals' },
                { label: '3-POINT %', key: 'threePointers' },
                { label: 'FREE THROW %', key: 'freeThrows' },
                { label: 'REBOUNDS', key: 'rebounds' },
                { label: 'ASSISTS', key: 'assists' },
                { label: 'STEALS', key: 'steals' },
                { label: 'BLOCKS', key: 'blocks' },
                { label: 'TURNOVERS', key: 'turnovers' },
                { label: 'POSSESSION', key: 'possession' },
              ].map((item, idx) => {
                const valA = liveStats[item.key]?.teamA || liveStats[item.key] || '0';
                const valB = liveStats[item.key]?.teamB || liveStats[item.key] || '0';

                return (
                  <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontFamily: 'var(--font-sports)', fontSize: '1.05rem', fontWeight: 800 }}>
                      <span style={{ color: '#ff4d00' }}>{typeof valA === 'object' ? valA : valA}</span>
                      <span style={{ color: 'var(--gray)' }}>{item.label}</span>
                      <span style={{ color: '#00a2ff' }}>{typeof valB === 'object' ? valB : valB}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Play-by-Play Timeline */}
          <div className="section-header">
            <h2 className="section-title">
              PLAY-BY-PLAY <span>TIMELINE</span>
            </h2>
          </div>

          <div className="commentary-feed" style={{ maxWidth: '850px', margin: '0 auto' }}>
            {tournamentData.liveMatch.commentary.map((item, index) => (
              <div key={index} className={`commentary-item ${item.type === 'highlight' ? 'highlight' : ''}`}>
                <div className="commentary-time">{item.time}</div>
                <div className="commentary-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
