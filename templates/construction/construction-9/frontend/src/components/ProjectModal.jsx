import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(8, 9, 12, 0.88)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }} onClick={onClose}>
      <div style={{
        background: 'var(--bg-surface)',
        border: '2px solid var(--border-strong)',
        maxWidth: '880px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)',
        padding: '32px'
      }} onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-main)',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            fontWeight: 800
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span className="brutalist-badge">
            {project.category}
          </span>
          <span className="brutalist-badge badge-cyan">
            {project.concreteGrade}
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          {project.title}
        </h2>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--accent-orange)',
          marginBottom: '24px'
        }}>
          LOCATION: {project.location}
        </div>

        {/* Project Image */}
        <div style={{
          width: '100%',
          height: '360px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          marginBottom: '24px'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Summary Description */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '28px'
        }}>
          {project.summary}
        </p>

        {/* Specs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          background: 'var(--bg-main)',
          padding: '20px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '28px'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>HEIGHT PROFILE</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginTop: '4px' }}>{project.height}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>GROSS FLOOR AREA</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginTop: '4px' }}>{project.grossFloorArea}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>SPECIFICATION</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginTop: '4px' }}>{project.specs}</div>
          </div>
        </div>

        {/* Technical Highlights */}
        {project.technicalHighlights && (
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              // STRUCTURAL & CIVIL ENGINEERING HIGHLIGHTS:
            </div>
            <ul style={{
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: 'var(--text-muted)',
              fontSize: '0.94rem'
            }}>
              {project.technicalHighlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
          <a
            href="#rfq"
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            REQUEST RFQ ON THIS TYPOLOGY
          </a>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            CLOSE BLUEPRINT
          </button>
        </div>
      </div>
    </div>
  );
}
