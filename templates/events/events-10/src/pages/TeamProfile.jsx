import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { PlayerCard } from '../components/PlayerCard';
import { MatchCard } from '../components/MatchCard';
import { Trophy, Shield, User, ArrowLeft } from 'lucide-react';

export const TeamProfile = () => {
  const { id } = useParams();
  const team = tournamentData.teams.find((t) => t.id === id) || tournamentData.teams[0];

  const teamRoster = tournamentData.players.filter((p) => p.teamId === team.id || p.team === team.name);
  const teamMatches = tournamentData.matches.filter((m) => m.teamA === team.name || m.teamB === team.name);

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <Link to="/teams" className="btn-outline" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> BACK TO TEAMS
          </Link>

          {/* Team Profile Banner */}
          <div className="sports-card" style={{ padding: '40px', marginBottom: '50px', background: team.bgGradient || 'linear-gradient(135deg, #111, #1a0800)' }}>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '110px', height: '110px', fontSize: '4rem', background: '#050505', borderRadius: '50%', border: '3px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {team.logo}
              </div>

              <div>
                <span className="badge-live" style={{ background: '#ff4d00', color: '#050505', marginBottom: '8px' }}>
                  {team.group} | {team.city}
                </span>
                <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
                  {team.name}
                </h1>
                <p style={{ color: 'var(--gray)', fontSize: '1.1rem', marginTop: '8px' }}>
                  {team.description}
                </p>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginTop: '30px', background: 'rgba(5,5,5,0.7)', padding: '20px', borderRadius: '6px', border: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', fontFamily: 'var(--font-sports)' }}>HEAD COACH</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{team.coach}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', fontFamily: 'var(--font-sports)' }}>TEAM CAPTAIN</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{team.captain}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', fontFamily: 'var(--font-sports)' }}>WINS / LOSSES</div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#00c853' }}>{team.wins}W - {team.losses}L</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', fontFamily: 'var(--font-sports)' }}>WIN PERCENTAGE</div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ff4d00' }}>{team.winPct}</div>
              </div>
            </div>
          </div>

          {/* Roster Section */}
          <div className="section-header">
            <h2 className="section-title">
              TEAM <span>ROSTER</span>
            </h2>
          </div>

          <div className="players-grid" style={{ marginBottom: '60px' }}>
            {teamRoster.length > 0 ? (
              teamRoster.map((p) => <PlayerCard key={p.id} player={p} />)
            ) : (
              tournamentData.players.slice(0, 3).map((p) => <PlayerCard key={p.id} player={{ ...p, team: team.name }} />)
            )}
          </div>

          {/* Team Matches */}
          <div className="section-header">
            <h2 className="section-title">
              TEAM <span>MATCHES</span>
            </h2>
          </div>

          <div className="matches-grid">
            {teamMatches.length > 0 ? (
              teamMatches.map((m) => <MatchCard key={m.id} match={m} />)
            ) : (
              <p style={{ color: 'var(--gray)', textCenter: 'center' }}>No recent matches scheduled.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
