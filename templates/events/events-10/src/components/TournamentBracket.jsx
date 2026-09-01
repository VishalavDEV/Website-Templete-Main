import React from 'react';
import { tournamentData } from '../data/tournamentData';
import { Trophy } from 'lucide-react';

export const TournamentBracket = () => {
  const { quarterFinals, semiFinals, final } = tournamentData.bracket;

  return (
    <div className="bracket-wrapper">
      {/* Quarter Finals */}
      <div className="bracket-column">
        <div className="bracket-title">QUARTER FINALS</div>
        {quarterFinals.map((match) => (
          <div key={match.id} className="bracket-match">
            <div className={`bracket-team ${match.winner === match.teamA ? 'winner' : ''}`}>
              <span>{match.teamA}</span>
              <span className="bracket-score">{match.scoreA}</span>
            </div>
            <div className={`bracket-team ${match.winner === match.teamB ? 'winner' : ''}`}>
              <span>{match.teamB}</span>
              <span className="bracket-score">{match.scoreB}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Semi Finals */}
      <div className="bracket-column">
        <div className="bracket-title">SEMI FINALS</div>
        {semiFinals.map((match) => (
          <div key={match.id} className="bracket-match" style={{ margin: '40px 0' }}>
            <div className={`bracket-team ${match.winner === match.teamA ? 'winner' : ''}`}>
              <span>{match.teamA}</span>
              <span className="bracket-score">{match.scoreA}</span>
            </div>
            <div className={`bracket-team ${match.winner === match.teamB ? 'winner' : ''}`}>
              <span>{match.teamB}</span>
              <span className="bracket-score">{match.scoreB}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grand Final */}
      <div className="bracket-column" style={{ justifyContent: 'center' }}>
        <div className="bracket-title" style={{ color: '#ffd700' }}>
          🏆 GRAND FINAL
        </div>
        <div className="bracket-match flame-glow-effect" style={{ border: '2px solid #ff4d00' }}>
          <div className={`bracket-team ${final.winner === final.teamA ? 'winner' : ''}`} style={{ padding: '16px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{final.teamA}</span>
            <span className="bracket-score" style={{ fontSize: '1.5rem', color: '#ff4d00' }}>{final.scoreA}</span>
          </div>
          <div className={`bracket-team ${final.winner === final.teamB ? 'winner' : ''}`} style={{ padding: '16px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{final.teamB}</span>
            <span className="bracket-score" style={{ fontSize: '1.5rem' }}>{final.scoreB}</span>
          </div>
          <div style={{ background: '#ff4d00', color: '#050505', textAlign: 'center', padding: '6px', fontWeight: 900, fontFamily: 'var(--font-sports)', letterSpacing: '1px' }}>
            CHAMPION: {final.winner}
          </div>
        </div>
      </div>
    </div>
  );
};
