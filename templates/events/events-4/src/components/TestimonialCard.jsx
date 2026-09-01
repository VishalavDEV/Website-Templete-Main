import React from 'react';

const TestimonialCard = ({ name, photo, role, text, rating = 5 }) => {
  return (
    <div className="diagonal-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--color-yellow)', fontSize: '1.1rem' }}>
        {'★'.repeat(rating)}
      </div>
      <p style={{ color: '#E0E0EC', fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', flexGrow: 1 }}>
        "{text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
        <img
          src={photo}
          alt={name}
          style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-yellow)' }}
        />
        <div>
          <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>{name}</h4>
          <span style={{ color: 'var(--color-yellow)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
