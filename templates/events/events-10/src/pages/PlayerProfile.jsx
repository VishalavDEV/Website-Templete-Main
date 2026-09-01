import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { ArrowLeft, Award, Activity, Shield, User } from 'lucide-react';

export const PlayerProfile = () => {
  const { id } = useParams();
  const player = tournamentData.players.find((p) => p.id === id) || tournamentData.players[0];

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <Link to="/players" className="btn-outline" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> BACK TO PLAYERS
          </Link>

          {/* Hero Profile Banner */}
          <div className="sports-card" style={{ padding: '40px', marginBottom: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: '360px', borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--orange)' }}>
                <img
                  src={player.avatar}
                  alt={player.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/jordan-sterling.svg';
                  }}
                />
                <div className="player-number-badge" style={{ fontSize: '3rem', top: '20px', right: '20px' }}>
                  #{player.number}
                </div>
              </div>

              <div>
                <span className="badge-live" style={{ background: '#ff4d00', color: '#050505', marginBottom: '12px' }}>
                  {player.position} | {player.team}
                </span>

                <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 0.95, marginBottom: '10px' }}>
                  {player.name}
                </h1>

                <div style={{ fontSize: '1.05rem', color: 'var(--orange-light)', fontFamily: 'var(--font-sports)', letterSpacing: '1px', marginBottom: '16px' }}>
                  HEIGHT: {player.height} | AGE: {player.age} YEARS
                </div>

                <p style={{ fontSize: '1.05rem', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {player.bio}
                </p>

                {/* Primary Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', background: 'rgba(5,5,5,0.8)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="font-display" style={{ fontSize: '2.4rem', color: '#ff4d00' }}>{player.pointsPerGame}</div>
                    <div className="font-sports" style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>POINTS PER GAME</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div className="font-display" style={{ fontSize: '2.4rem', color: '#fff' }}>{player.assistsPerGame}</div>
                    <div className="font-sports" style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>ASSISTS PER GAME</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div className="font-display" style={{ fontSize: '2.4rem', color: '#fff' }}>{player.reboundsPerGame}</div>
                    <div className="font-sports" style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>REBOUNDS PER GAME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Shooting & Defensive Percentages */}
          <div className="section-header">
            <h2 className="section-title">
              SHOOTING & <span>ADVANCED METRICS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.5rem', color: '#ff4d00' }}>{player.fgPct}</div>
              <div className="font-sports" style={{ fontSize: '1rem', color: 'var(--white)' }}>FIELD GOAL %</div>
            </div>
            <div className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.5rem', color: '#ff7518' }}>{player.threePtPct}</div>
              <div className="font-sports" style={{ fontSize: '1rem', color: 'var(--white)' }}>3-POINT %</div>
            </div>
            <div className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.5rem', color: '#00c853' }}>{player.ftPct}</div>
              <div className="font-sports" style={{ fontSize: '1rem', color: 'var(--white)' }}>FREE THROW %</div>
            </div>
            <div className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.5rem', color: '#fff' }}>{player.steals}</div>
              <div className="font-sports" style={{ fontSize: '1rem', color: 'var(--white)' }}>STEALS PER GAME</div>
            </div>
            <div className="sports-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.5rem', color: '#fff' }}>{player.blocks}</div>
              <div className="font-sports" style={{ fontSize: '1rem', color: 'var(--white)' }}>BLOCKS PER GAME</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
