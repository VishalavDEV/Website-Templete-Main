import React, { useState } from 'react';
import { Trophy, Users, ShieldAlert, Cpu, Eye, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ChallengeModal = ({ challenge, onClose }) => {
  if (!challenge) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10002,
        padding: '1rem',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0a0e0a',
          border: '1px solid #00ff66',
          borderRadius: '12px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 0 50px rgba(0, 255, 102, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
          TRACK: {challenge.category}
        </div>

        <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>{challenge.title}</h2>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          <div style={{ color: '#00ff66' }}>
            <Trophy size={16} style={{ display: 'inline', marginRight: '4px' }} /> Prize: {challenge.prize}
          </div>
          <div style={{ color: '#ffb700' }}>
            <ShieldAlert size={16} style={{ display: 'inline', marginRight: '4px' }} /> Difficulty: {challenge.difficulty}
          </div>
          <div style={{ color: '#00f0ff' }}>
            <Users size={16} style={{ display: 'inline', marginRight: '4px' }} /> {challenge.participants} Teams
          </div>
        </div>

        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>{challenge.description}</p>

        <h4 style={{ color: '#00ff66', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
          PROBLEM STATEMENT REQUIREMENTS:
        </h4>
        <ul style={{ color: '#94a3b8', fontSize: '0.9rem', paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
          <li>Must utilize open APIs, machine learning pipelines, or secure cloud infrastructure.</li>
          <li>Solution should demonstrate real-world scalability and production-ready code architecture.</li>
          <li>Include functional UI demo video, architecture documentation, and clean GitHub repository.</li>
        </ul>

        <h4 style={{ color: '#00ff66', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
          RECOMMENDED TECH STACK:
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {challenge.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'rgba(0, 255, 102, 0.1)',
                border: '1px solid rgba(0, 255, 102, 0.3)',
                color: '#00ff66',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.3rem 0.65rem',
                borderRadius: '4px'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          onClick={onClose}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          SELECT THIS CHALLENGE TRACK <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const ChallengeCard = ({ challenge }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="cyber-corner-tl" />
        <div className="cyber-corner-br" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>
            {challenge.category}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: challenge.difficulty === 'HARD' ? '#ff0055' : challenge.difficulty === 'MEDIUM' ? '#ffb700' : '#00ff66',
              fontWeight: '700'
            }}
          >
            ● {challenge.difficulty}
          </span>
        </div>

        <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.75rem', lineHeight: '1.3' }}>
          {challenge.title}
        </h3>

        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>
          {challenge.description}
        </p>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {challenge.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#64748b',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '0.2rem 0.5rem',
                borderRadius: '3px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>TRACK PRIZE</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#00ff66', fontSize: '1rem' }}>
              {challenge.prize}
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-outline"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
          >
            VIEW CHALLENGE <Eye size={14} />
          </button>
        </div>
      </div>

      {modalOpen && <ChallengeModal challenge={challenge} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ChallengeCard;
