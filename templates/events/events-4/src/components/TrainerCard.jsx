import React from 'react';

const TrainerCard = ({ name, role, exp, spec, image, bio }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-img-wrapper">
        <img src={image} alt={name} className="trainer-img" />
        <div className="trainer-info-overlay">
          <h3 className="trainer-name">{name}</h3>
          <div className="trainer-role">{role}</div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', letterSpacing: '1px' }}>
            EXP: {exp} | SPEC: {spec}
          </div>

          <div className="trainer-details-reveal">
            <p style={{ marginTop: '0.5rem', lineHeight: '1.4' }}>{bio}</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
              {['IG', 'FB', 'YT'].map((s) => (
                <span key={s} style={{
                  background: 'var(--color-yellow)',
                  color: '#000',
                  fontSize: '0.7rem',
                  fontWeight: '900',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '2px'
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
