import React, { useState } from 'react';
import { Clock, User, Award, CheckCircle, BookOpen } from 'lucide-react';

const WorkshopCard = ({ workshop }) => {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
      <div className="cyber-corner-tl" />
      <div className="cyber-corner-br" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>
          {workshop.time}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#00ff66',
            padding: '0.2rem 0.5rem',
            backgroundColor: 'rgba(0, 255, 102, 0.1)',
            borderRadius: '4px'
          }}
        >
          {workshop.level}
        </span>
      </div>

      <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>{workshop.title}</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
        <User size={14} />
        <span>{workshop.speaker} ({workshop.role})</span>
      </div>

      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1, lineHeight: '1.6' }}>
        {workshop.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
          <Clock size={14} color="#00ff66" />
          <span>Duration: {workshop.duration}</span>
        </div>

        <button
          onClick={() => setEnrolled(!enrolled)}
          className={`btn ${enrolled ? 'btn-secondary' : 'btn-outline'}`}
          style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
        >
          {enrolled ? <><CheckCircle size={14} color="#00ff66" /> ENROLLED</> : <><BookOpen size={14} /> RESERVE SEAT</>}
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;
