import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Zap, Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection({ onExploreDevice, onShopAll }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / 40;
    const moveY = (clientY - centerY) / 40;
    setMouseOffset({ x: moveX, y: moveY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        paddingTop: '90px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 70% 40%, rgba(0, 240, 255, 0.07) 0%, rgba(8, 9, 11, 1) 70%)'
      }}
      className="tech-grid-bg"
    >
      {/* Background Circular Tech Radar */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 240, 255, 0.12)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          border: '1px dashed rgba(255, 255, 255, 0.08)'
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 240, 255, 0.2)'
        }} />
      </div>

      <div style={{
        maxWidth: '1380px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }} className="hero-grid-container">

        {/* LEFT COLUMN: Asymmetric Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00F0FF', boxShadow: '0 0 10px #00F0FF' }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              color: '#00F0FF',
              textTransform: 'uppercase'
            }}>
              NOVA TECHNOLOGY / 2026
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            color: '#F4F4F1',
            letterSpacing: '-0.04em'
          }}>
            THE FUTURE<br />
            <span style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              FITS IN YOUR
            </span><br />
            HANDS.
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#8E94A0',
            maxWidth: '440px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Powerful technology.<br />
            Quietly designed.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginTop: '0.8rem' }}>
            <button
              onClick={onExploreDevice}
              className="btn-primary"
            >
              <span>DISCOVER X1</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onShopAll}
              className="btn-secondary"
            >
              <span>VIEW ALL DEVICES</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#F4F4F1' }}>
                4.9<span style={{ fontSize: '0.9rem', color: '#00F0FF' }}>/5</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#8E94A0' }}>
                EXPERT RATING
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#F4F4F1' }}>
                4nm
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#8E94A0' }}>
                QUANTUM CHIP
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#F4F4F1' }}>
                100W
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#8E94A0' }}>
                FAST CHARGING
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Parallax Device Showcase */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '520px'
        }}>
          {/* Main 3D Floating Phone Frame */}
          <div
            style={{
              transform: `translate3d(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px, 0px) rotateY(${mouseOffset.x * 0.3}deg) rotateX(${-mouseOffset.y * 0.3}deg)`,
              transition: 'transform 0.15s ease-out',
              position: 'relative',
              zIndex: 3
            }}
          >
            <div
              style={{
                width: '320px',
                height: '560px',
                borderRadius: '32px',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                background: 'rgba(16, 18, 22, 0.85)',
                boxShadow: '0 25px 60px -10px rgba(0, 240, 255, 0.25), 0 0 30px rgba(0, 0, 0, 0.8)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src="/images/nova_x1_hero.webp"
                alt="NOVA X1 Smartphone"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Subtle Tech Overlay Gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,240,255,0.05) 0%, transparent 60%, rgba(8,9,11,0.8) 100%)',
                pointerEvents: 'none'
              }} />
            </div>
          </div>

          {/* Floating Specification Label 1 - Top Left */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '-4%',
              transform: `translate3d(${mouseOffset.x * 2.8}px, ${mouseOffset.y * 2.8}px, 0px)`,
              transition: 'transform 0.15s ease-out',
              zIndex: 4,
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: 'rgba(16, 18, 22, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00F0FF' }} />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: '#F4F4F1' }}>
                6.7" OLED
              </div>
              <div style={{ fontSize: '0.65rem', color: '#8E94A0' }}>120Hz LTPO 3.0</div>
            </div>
          </div>

          {/* Floating Specification Label 2 - Top Right */}
          <div
            style={{
              position: 'absolute',
              top: '22%',
              right: '-6%',
              transform: `translate3d(${mouseOffset.x * 2.2}px, ${mouseOffset.y * 2.2}px, 0px)`,
              transition: 'transform 0.15s ease-out',
              zIndex: 4,
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: 'rgba(16, 18, 22, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <Cpu size={14} color="#00F0FF" />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: '#F4F4F1' }}>
                256 GB
              </div>
              <div style={{ fontSize: '0.65rem', color: '#8E94A0' }}>UFS 4.0 Storage</div>
            </div>
          </div>

          {/* Floating Specification Label 3 - Bottom Left */}
          <div
            style={{
              position: 'absolute',
              bottom: '24%',
              left: '-8%',
              transform: `translate3d(${mouseOffset.x * 3.2}px, ${mouseOffset.y * 3.2}px, 0px)`,
              transition: 'transform 0.15s ease-out',
              zIndex: 4,
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: 'rgba(16, 18, 22, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <Sparkles size={14} color="#00F0FF" />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: '#F4F4F1' }}>
                50 MP
              </div>
              <div style={{ fontSize: '0.65rem', color: '#8E94A0' }}>Dual Pixel Optics</div>
            </div>
          </div>

          {/* Floating Specification Label 4 - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '14%',
              right: '-4%',
              transform: `translate3d(${mouseOffset.x * 2.5}px, ${mouseOffset.y * 2.5}px, 0px)`,
              transition: 'transform 0.15s ease-out',
              zIndex: 4,
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              background: 'rgba(16, 18, 22, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <Zap size={14} color="#00F0FF" />
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: '#F4F4F1' }}>
                5000 mAh
              </div>
              <div style={{ fontSize: '0.65rem', color: '#8E94A0' }}>65W Super Charge</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
