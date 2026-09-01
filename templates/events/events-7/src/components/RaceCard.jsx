import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Clock, MapPin, ChevronRight, Award, Flame } from 'lucide-react';

export default function RaceCard({ race }) {
  const getAccentColor = (id) => {
    switch (id) {
      case 'half-marathon': return 'var(--marathon-red)';
      case 'city-run': return 'var(--bright-orange)';
      case 'fun-run': return '#38BDF8';
      case 'family-run': return '#10B981';
      default: return 'var(--bright-orange)';
    }
  };

  const accentColor = getAccentColor(race.id);

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
        borderTop: `4px solid ${accentColor}`,
        boxShadow: race.popular ? '0 10px 40px rgba(233, 43, 43, 0.25)' : 'none',
        background: race.popular 
          ? 'linear-gradient(180deg, rgba(28,31,38,0.95) 0%, rgba(21,23,27,0.95) 100%)'
          : 'rgba(21, 23, 27, 0.75)'
      }}
    >
      {/* Popular Badge */}
      {race.popular && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))',
          color: '#FFFFFF',
          fontSize: '0.68rem',
          fontWeight: 800,
          padding: '4px 10px',
          borderRadius: '20px',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Flame size={12} /> {race.badge}
        </div>
      )}

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: accentColor, letterSpacing: '2px', textTransform: 'uppercase' }}>
            CATEGORY
          </span>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
            {race.price}
          </span>
        </div>

        <h3 className="font-display" style={{ fontSize: '2.5rem', lineHeight: 1, color: '#FFFFFF', marginBottom: '8px' }}>
          {race.shortTitle}
        </h3>

        <div style={{
          display: 'inline-block',
          fontSize: '1.2rem',
          fontWeight: 900,
          color: accentColor,
          marginBottom: '16px',
          fontFamily: 'var(--font-display)',
          letterSpacing: '1px'
        }}>
          {race.distance}
        </div>

        <p style={{ color: 'var(--soft-grey)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
          {race.tagline}
        </p>

        {/* Quick Meta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--warm-white)' }}>
            <Clock size={14} color={accentColor} />
            <span>Start: <strong>{race.startTime}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--warm-white)' }}>
            <MapPin size={14} color={accentColor} />
            <span>Cut-Off: <strong>{race.cutOffTime}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--warm-white)' }}>
            <Award size={14} color={accentColor} />
            <span>Includes Official T-Shirt & Medal</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Link 
          to="/race-info" 
          className="btn-secondary"
          style={{ flex: 1, padding: '12px 16px', fontSize: '0.8rem' }}
        >
          VIEW DETAILS
        </Link>
        <Link 
          to={`/register?race=${race.id}`}
          className="btn-primary"
          style={{ flex: 1, padding: '12px 16px', fontSize: '0.8rem', background: race.popular ? undefined : 'rgba(255,255,255,0.1)', border: race.popular ? undefined : `1px solid ${accentColor}`, color: '#FFFFFF' }}
        >
          REGISTER <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
