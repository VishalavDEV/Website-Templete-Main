import React from 'react';
import { X, Award, Calendar, User, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(16px)',
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          padding: 'clamp(1.25rem, 4vw, 2.5rem)',
          borderRadius: '24px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            padding: '0.6rem',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            color: 'var(--text-main)',
            transition: 'background 0.2s ease',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal AI Image Header Banner */}
        <div 
          style={{
            height: 'clamp(170px, 25vh, 260px)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            boxShadow: '0 12px 32px rgba(0, 102, 255, 0.15)'
          }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%)'
            }}
          />
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', color: '#fff' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.25rem 0.75rem', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
              {project.categoryLabel}
            </span>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem', lineHeight: 1.2 }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Meta Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.75rem, 2vw, 1.5rem)', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            <User size={16} color="var(--accent-blue)" />
            <span>Client: <strong style={{ color: 'var(--text-main)' }}>{project.client}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            <Calendar size={16} color="var(--accent-blue)" />
            <span>Year: <strong style={{ color: 'var(--text-main)' }}>{project.year}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            <Award size={16} color="var(--accent-emerald)" />
            <span>Key Outcome: <strong style={{ color: 'var(--accent-emerald)' }}>{project.metrics}</strong></span>
          </div>
        </div>

        {/* Stats Highlight Grid */}
        {project.stats && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.875rem', marginBottom: '1.75rem' }}>
            {project.stats.map((st, sIdx) => (
              <div key={sIdx} style={{ padding: '1rem', borderRadius: '14px', background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-blue)' }}>{st.value}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)', marginTop: '0.25rem' }}>{st.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Extended Description */}
        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
          {project.tagline}
        </h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
          {project.fullDescription || project.description}
        </p>

        {/* Tech Stack */}
        {project.techStack && (
          <div style={{ marginBottom: '2rem' }}>
            <h5 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)' }}>
              Engineered Tech Stack:
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((tech, tIdx) => (
                <span key={tIdx} style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: '#0f172a', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables Checklist */}
        <h5 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)' }}>
          Core Deliverables:
        </h5>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem' }}>
          {project.deliverables.map((item, idx) => (
            <span 
              key={idx}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.12)',
                color: 'var(--accent-emerald)',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <CheckCircle2 size={14} /> {item}
            </span>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          Close Case Study
        </button>
      </div>
    </div>
  );
}
