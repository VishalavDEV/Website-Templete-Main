import { X, Cpu, Check, Layers, BarChart3, ShieldCheck } from 'lucide-react';

export default function ModelDetailModal({ model, isOpen, onClose }) {
  if (!isOpen || !model) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      backgroundColor: 'rgba(16, 14, 24, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.25s var(--ease-out-expo)'
    }}>
      <div style={{
        backgroundColor: 'var(--surface-color-solid)',
        border: '1px solid var(--border-strong)',
        borderRadius: '16px',
        maxWidth: '750px', width: '100%',
        maxHeight: '90vh', overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 40px var(--accent-cyan-glow)',
        padding: '2.5rem 2rem',
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            padding: '0.45rem', borderRadius: '50%', color: 'var(--text-muted)',
            backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          className="hover-text-cyan hover-border-cyan"
        >
          <X size={18} />
        </button>

        {/* Top Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span className="badge badge-violet">{model.modality}</span>
            <span className="badge" style={{
              background: model.status === 'Production' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
              borderColor: 'currentColor', color: model.status === 'Production' ? 'var(--accent-cyan)' : 'var(--accent-violet)'
            }}>{model.status}</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700 }}>
            {model.name}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Architected by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{model.developer}</span> &middot; Released {model.releaseDate}
          </p>
        </div>

        {/* Benchmark Radar Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem',
          backgroundColor: 'rgba(0, 229, 255, 0.03)', padding: '1.25rem', borderRadius: '12px',
          border: '1px solid rgba(0, 229, 255, 0.15)', marginBottom: '1.75rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>MMLU (General)</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
              {model.mmluScore || '88.7%'}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>HumanEval (Code)</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
              {model.humanEvalScore || '92.0%'}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>MATH 500</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
              {model.mathScore || '76.6%'}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Context Window</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {model.contextWindow}
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem',
          backgroundColor: 'var(--surface-color)', padding: '1.25rem', borderRadius: '10px',
          border: '1px solid var(--border-color)', marginBottom: '1.75rem', fontSize: '0.85rem'
        }}>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Architecture</div>
            <div style={{ fontWeight: 500, marginTop: '0.15rem' }}>{model.architecture}</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Parameters</div>
            <div style={{ fontWeight: 500, marginTop: '0.15rem' }}>{model.parameters}</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>API Pricing</div>
            <div style={{ fontWeight: 500, marginTop: '0.15rem' }}>{model.pricing}</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>License</div>
            <div style={{ fontWeight: 500, marginTop: '0.15rem' }}>{model.license}</div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Editorial Overview
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7' }}>
            {model.description}
          </p>
        </div>

        {/* Key Strengths */}
        {model.keyStrengths && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Key Strengths & Architectural Highlights
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {model.keyStrengths.map((str, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} style={{ color: 'var(--accent-violet)', flexShrink: 0 }} />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button onClick={onClose} className="btn-cyan" style={{ padding: '0.6rem 1.5rem' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
