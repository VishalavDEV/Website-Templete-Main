import React from 'react';
import { ArrowRight, Shield, Cpu, Sparkles } from 'lucide-react';
import ImageWithLoader from './ImageWithLoader';

export default function TechnologyStory({ onExploreTech }) {
  return (
    <section style={{
      padding: '7rem 0',
      background: '#101216',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '5rem',
          alignItems: 'center'
        }} className="story-split-grid">
          
          {/* Left: Cinematic Technology Image */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)'
          }}>
            <ImageWithLoader
              src="/images/nova_book_air_open.webp"
              alt="NOVA Technology Architecture"
              aspectRatio="16/9"
              style={{ borderRadius: '12px' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(8, 9, 11, 0.85) 100%)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#00F0FF'
            }}>
              <span>NOVA LABS / TOKYO & ZURICH</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Right: Editorial Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#00F0FF',
              letterSpacing: '0.2em'
            }}>
              DESIGN PHILOSOPHY
            </div>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              lineHeight: 1.1,
              color: '#F4F4F1',
              fontWeight: 800,
              letterSpacing: '-0.03em'
            }}>
              ENGINEERED<br />
              FOR EVERY<br />
              MOMENT.
            </h2>

            <p style={{
              fontSize: '1.15rem',
              color: '#8E94A0',
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: '460px'
            }}>
              From focused work to late-night creation, NOVA devices are designed to move with you quietly, efficiently, and without friction.
            </p>

            <div style={{ display: 'flex', gap: '2.5rem', margin: '0.5rem 0' }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#F4F4F1' }}>
                  100% Recycled
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
                  AEROSPACE METALS
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#F4F4F1' }}>
                  Zero Fan
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
                  SILENT COMPUTE
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onExploreTech}
                className="btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <span>EXPLORE THE TECHNOLOGY</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
