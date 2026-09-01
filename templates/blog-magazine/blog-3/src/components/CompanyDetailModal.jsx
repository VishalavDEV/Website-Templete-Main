import { X, Building2, MapPin, DollarSign, Calendar, Users, ExternalLink, Award } from 'lucide-react';

export default function CompanyDetailModal({ company, isOpen, onClose }) {
  if (!isOpen || !company) return null;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '54px', height: '54px', borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', fontWeight: 800, color: 'var(--bg-color)'
          }}>
            {company.name.charAt(0)}
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700 }}>
              {company.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
              <MapPin size={13} /> {company.location}
            </div>
          </div>
        </div>

        {/* Vital Metrics */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem',
          backgroundColor: 'var(--surface-color)', padding: '1rem', borderRadius: '10px',
          border: '1px solid var(--border-color)', marginBottom: '1.75rem'
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Valuation / MCap</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>{company.valuation || '$10B+'}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Founded</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{company.founded || '2020'}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Headcount</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{company.headcount || '500+'}</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
            Mission
          </h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', fontStyle: 'italic', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem', lineHeight: '1.6' }}>
            "{company.mission || company.focus}"
          </p>
        </div>

        {/* Key Product / Flagship */}
        <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(0, 229, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
            <Award size={16} /> Flagship Breakthroughs & Deployments
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {company.flagship || company.focus}
          </p>
        </div>

        {/* Founders */}
        {company.founders && (
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Key Leadership & Founders</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {company.founders.map((f, i) => (
                <span key={i} className="badge" style={{ fontSize: '0.75rem', textTransform: 'none' }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button onClick={onClose} className="btn-outline">
            Close
          </button>
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Visit Portal <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
