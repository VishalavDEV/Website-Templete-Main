import React from 'react';
import { METRICS } from '../data/medicalData';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Stethoscope, Award, Activity } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onScrollToAnatomy, onOpenSymptomChecker }) {
  return (
    <section style={{ padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Editorial Copy */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Human Anatomy — Reimagined</span>
            </div>

            <h1 className="heading-editorial" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              color: '#0f172a'
            }}>
              Precision Medical Care, <br />
              <span className="gradient-text">Designed Around You.</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              marginBottom: '2.25rem',
              lineHeight: 1.65
            }}>
              Experience next-generation healthcare combining interactive body diagnostics, 
              world-class surgical faculty, and Arctic Frost clinical comfort.
            </p>

            {/* CTA Group */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <span>Book Doctor Consultation</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onScrollToAnatomy}
                className="btn-secondary"
                style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}
              >
                <Activity size={18} style={{ color: 'var(--primary-cyan)' }} />
                <span>Explore Anatomy Map</span>
              </button>

              <button
                onClick={onOpenSymptomChecker}
                style={{
                  background: 'rgba(13, 148, 136, 0.08)',
                  color: 'var(--accent-teal)',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  padding: '0.9rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Stethoscope size={16} />
                <span>Symptom Checker</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(226, 232, 240, 0.7)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span>JCI Accredited Hospital</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                <Award size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Top 10 National Medical Center</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }}>
            <div className="glass-panel" style={{
              padding: '2rem',
              position: 'relative',
              boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
              borderColor: 'rgba(255, 255, 255, 0.9)'
            }}>
              {/* Floating Doctor Profile Teaser */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '1.5rem'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Aura Health Clinical Suite"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-md)' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      7T Intraoperative Suite Active
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Live Diagnostics • Ultra Precision
                    </div>
                  </div>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    background: 'var(--accent-teal-light)',
                    color: 'var(--accent-teal)'
                  }}>
                    READY
                  </span>
                </div>
              </div>

              {/* Stats Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                {METRICS.slice(0, 4).map((m, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(226, 232, 240, 0.6)'
                  }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-cyan)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-main)' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.2', marginTop: '2px' }}>
                      {m.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
