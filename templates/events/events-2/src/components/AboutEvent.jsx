import React, { useState } from 'react';
import { Target, Lightbulb, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import '../styles/cards.css';

export const AboutEvent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">ABOUT CYBERNEXUS</div>
          <h2 className="section-title">Where Ideas Become Impact</h2>
          <p className="section-subtitle">
            CYBERNEXUS is built to accelerate innovation at the intersection of AI, Cloud Infrastructure, Product Design, and Emerging Venture Capital.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Left Column: Image with floating stats */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                alt="About CYBERNEXUS Stage"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            {/* Floating Highlight Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--gradient-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Sparkles size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>3 Days of Immersion</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Keynotes, Demos & VIP Lounges</div>
              </div>
            </div>
          </div>

          {/* Right Column: Objectives & Expandable details */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>
              Empowering the Next Generation of Global Tech Leaders
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Our mission is to foster cross-disciplinary collaboration among developers, AI researchers, corporate executives, and startup founders. Through curated keynotes, peer-led workshops, and structured investor office hours, CYBERNEXUS delivers actionable blueprints rather than generic talks.
            </p>

            {/* Highlight Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Target size={22} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Pioneering Technical Tracks</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Deep dives into Sovereign LLMs, Zero-Trust Defense, and Spatial UI paradigms.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Lightbulb size={22} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Structured Networking & Office Hours</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Direct access to global VC partners, cloud architects, and corporate tech buyers.
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Read More Box */}
            {expanded && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  marginBottom: '24px',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Global Impact Statistics</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Over 14,000 technology leaders have attended CYBERNEXUS summits across Asia and Europe since 2022. Over $1.5M in equity investments and cloud credits have been awarded directly to ecosystem founders through our summit pitch arenas.
                </p>
              </div>
            )}

            <button
              className="btn btn-secondary"
              onClick={() => setExpanded(!expanded)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {expanded ? 'Read Less' : 'Read Full Vision'}
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
