import { X, ExternalLink, Star, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function ToolDetailModal({ tool, isOpen, onClose }) {
  if (!isOpen || !tool) return null;

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
        maxWidth: '720px', width: '100%',
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge">{tool.category}</span>
              <span className="badge" style={{
                background: tool.status === 'Trending' ? 'rgba(0,229,255,0.1)' : 'rgba(139,92,246,0.1)',
                borderColor: 'currentColor', color: tool.status === 'Trending' ? 'var(--accent-cyan)' : 'var(--accent-violet)'
              }}>{tool.status}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700 }}>
              {tool.name}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 500 }}>
              {tool.tagline}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
              {tool.score}
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Editorial Rating
            </div>
          </div>
        </div>

        {/* Specs Pill Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem',
          backgroundColor: 'var(--surface-color)', padding: '1rem', borderRadius: '10px',
          border: '1px solid var(--border-color)', marginBottom: '1.75rem'
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Developer</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{tool.developer}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pricing</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{tool.pricing}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Launched</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{tool.launched}</div>
          </div>
        </div>

        {/* In-depth breakdown */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem' }}>
            Technical Evaluation
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7' }}>
            {tool.longDescription || tool.description}
          </p>
        </div>

        {/* Key Features */}
        {tool.keyFeatures && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Key Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {tool.keyFeatures.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pros & Cons */}
        {tool.pros && tool.cons && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(0, 229, 255, 0.03)', border: '1px solid rgba(0, 229, 255, 0.15)', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Highlights
              </div>
              {tool.pros.map((p, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  + {p}
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f87171', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Considerations
              </div>
              {tool.cons.map((c, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  - {c}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button onClick={onClose} className="btn-outline">
            Close
          </button>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Visit {tool.name} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
