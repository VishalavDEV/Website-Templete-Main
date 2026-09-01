import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="match-stage-badge">
        {match.isLive ? (
          <span className="badge-live">
            <span className="badge-live-pulse" /> LIVE NOW
          </span>
        ) : (
          match.stage
        )}
      </div>

      <div className="match-teams-wrapper">
        <div className="match-team-row">
          <span className="match-team-name">{match.teamA}</span>
          <span className="match-team-score">{match.status === 'UPCOMING' ? '-' : match.teamAScore}</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--gray)', margin: '-5px 0' }}>VS</div>
        <div className="match-team-row">
          <span className="match-team-name">{match.teamB}</span>
          <span className="match-team-score">{match.status === 'UPCOMING' ? '-' : match.teamBScore}</span>
        </div>
      </div>

      <div className="match-meta-footer">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <Calendar size={14} color="#ff4d00" />
            <span>{match.date} | {match.time}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} color="#ff4d00" />
            <span>{match.venue}</span>
          </div>
        </div>

        <Link to={`/matches/${match.id}`} className="btn-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
          MATCH DETAILS <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
