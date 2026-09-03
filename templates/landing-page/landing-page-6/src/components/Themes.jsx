import React from 'react';
import { Brain, Hourglass, UserCheck, Compass, ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

const iconMap = {
  Brain: Brain,
  Hourglass: Hourglass,
  UserCheck: UserCheck,
  Compass: Compass,
};

export default function Themes() {
  return (
    <section id="themes" className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">CORE MOTIFS</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Themes That Shape The Narrative
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Delve into the philosophical dilemmas at the heart of Mira Rowan's speculative universe.
          </p>
        </div>

        <div className="themes-grid">
          {bookDetailsData.themes.map((theme, idx) => {
            const IconComponent = iconMap[theme.iconName] || Brain;
            return (
              <div 
                key={theme.number}
                className={`theme-card reveal-on-scroll delay-${idx + 1}`}
                style={{ overflow: 'hidden' }}
              >
                <div>
                  {/* Theme Motif Image Banner */}
                  {theme.image && (
                    <div 
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '160px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '18px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <img 
                        src={theme.image} 
                        alt={theme.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(13, 15, 22, 0.95) 0%, rgba(13, 15, 22, 0.2) 60%, transparent 100%)',
                          pointerEvents: 'none'
                        }} 
                      />
                      <span 
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          background: 'rgba(0, 0, 0, 0.65)',
                          backdropFilter: 'blur(6px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#e2e8f0',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          fontWeight: '600'
                        }}
                      >
                        MOTIF {theme.number}
                      </span>
                    </div>
                  )}

                  <div className="theme-card-top">
                    <span className="theme-number">{theme.number}</span>
                    <div className="theme-icon-box">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  <h3 className="theme-title">{theme.title}</h3>
                  <p className="theme-desc">{theme.desc}</p>
                </div>

                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontWeight: '600', fontSize: '0.875rem' }}>
                  <span>Explore Motif</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
