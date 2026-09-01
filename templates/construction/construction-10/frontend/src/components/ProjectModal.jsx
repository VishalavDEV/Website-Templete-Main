import React from 'react';
import { X, CheckCircle2, Wind, Layers, Send } from 'lucide-react';

export default function ProjectModal({ project, onClose, onCommission }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'var(--bg-overlay)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '12px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            zIndex: 10,
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Hero Image */}
        <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, var(--bg-surface) 100%)'
            }}
          />
          <div style={{ position: 'absolute', bottom: '24px', left: '32px', right: '32px' }}>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 700 }}>
              {project.category} · {project.location}
            </div>
            <h2 style={{ fontSize: '2rem', lineHeight: 1.2, color: 'var(--text-main)' }}>{project.title}</h2>
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '32px' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '28px' }}>
            {project.summary}
          </p>

          {/* Key Engineering Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>HEIGHT</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>{project.height}</div>
            </div>

            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>DRAG COEFFICIENT</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>{project.dragCoefficient}</div>
            </div>

            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>KINETIC LOUVERS</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>{project.kineticLouverCount}</div>
            </div>

            <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>SOLAR GENERATION</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>{project.energyHarvest}</div>
            </div>
          </div>

          {/* Aerodynamic Innovations */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
              <Wind size={18} /> Aerodynamic & Computational Fluid Features
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {project.aerodynamicInnovations?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="var(--text-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Specifications */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
              <Layers size={18} /> Superstructure & Material Engineering
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {project.structuralSpecs?.map((spec, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="var(--text-main)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button onClick={onClose} className="btn btn-secondary">
              Close Blueprint
            </button>
            <button
              onClick={() => {
                onClose();
                onCommission(project);
              }}
              className="btn btn-primary"
            >
              <Send size={16} /> Commission Similar Skyrise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
