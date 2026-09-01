import React from 'react';
import Button from './Button';

const ProgramCard = ({ title, category, duration, difficulty, coach, desc, image }) => {
  return (
    <div className="diagonal-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'var(--color-purple)',
          color: '#FFF',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: '800',
          fontSize: '0.75rem',
          padding: '0.3rem 0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {category}
        </div>
      </div>

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '0.5rem' }}>{title}</h3>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--color-yellow)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          <span>⏱ {duration}</span>
          <span>⚡ {difficulty}</span>
          <span>🏋 {coach}</span>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
          {desc}
        </p>

        <Button to="/programs" variant="outline" style={{ padding: '0.75rem', width: '100%', fontSize: '0.85rem' }}>
          VIEW PROGRAM
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
