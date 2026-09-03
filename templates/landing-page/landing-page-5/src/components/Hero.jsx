import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, Shield, Cpu, Activity, Play } from 'lucide-react';
import { heroData } from '../data/landingData';

export default function Hero() {
  const headlineWords = heroData.headline.split(' ');

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Soft Rose Gold Glow Orbs */}
      <div
        className="ambient-glow ambient-rose animate-pulse-glow"
        style={{ top: '10%', right: '15%', width: 550, height: 550 }}
      />
      <div
        className="ambient-glow ambient-champagne animate-pulse-glow"
        style={{ bottom: '5%', left: '5%', width: 500, height: 500, animationDelay: '3s' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Editorial Hero Copy */}
          <div>
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-pill"
            >
              <Sparkles size={14} color="#c87873" />
              <span>Next-Generation Motion Platform</span>
            </motion.div>

            {/* Word-by-Word Reveal Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.75rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.75rem',
                color: '#1e1b18',
              }}
            >
              {headlineWords.map((word, i) => {
                const isHighlight = i >= 3; // "START TODAY."
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: 'inline-block',
                      marginRight: '0.3em',
                    }}
                    className={isHighlight ? 'gradient-text-electric' : ''}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: '560px',
                marginBottom: '2.75rem',
              }}
            >
              {heroData.subheadline}
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <a href="#about" className="btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
                <span>{heroData.ctaPrimary}</span>
                <ArrowRight size={18} />
              </a>

              <a href="#showcase" className="btn-secondary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
                <Play size={16} color="#c87873" fill="#c87873" />
                <span>{heroData.ctaSecondary}</span>
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Layered Floating Glass Telemetry Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 480,
            }}
          >
            {/* Concentric Rotating Orbital Rings in Rose Gold */}
            <div
              className="animate-spin-slow"
              style={{
                position: 'absolute',
                width: 440,
                height: 440,
                borderRadius: '50%',
                border: '1.5px dashed rgba(200, 120, 115, 0.3)',
                pointerEvents: 'none',
              }}
            />
            <div
              className="animate-spin-slow"
              style={{
                position: 'absolute',
                width: 340,
                height: 340,
                borderRadius: '50%',
                border: '1.5px dashed rgba(223, 186, 137, 0.35)',
                animationDirection: 'reverse',
                pointerEvents: 'none',
              }}
            />

            {/* Central Main Glass Console */}
            <div
              className="glass-panel animate-float-slow interactive-card"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 380,
                padding: '2.5rem 2rem',
                zIndex: 2,
                borderRadius: '2rem',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.88) 0%, rgba(250, 244, 238, 0.78) 100%)',
                boxShadow: '0 30px 60px -15px rgba(200, 120, 115, 0.2), 0 0 30px rgba(252, 219, 216, 0.4)',
              }}
            >
              {/* Header inside console */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: 'linear-gradient(135deg, #c87873, #dfba89)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e1b18' }}>Aura Neural Mesh</h3>
                    <p style={{ fontSize: '0.75rem', color: '#766e65' }}>Rose Gold Atmospheric Core</p>
                  </div>
                </div>

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                  }}
                  className="animate-pulse-beacon"
                />
              </div>

              {/* Graphical Metric Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#5e5750', marginBottom: '0.35rem' }}>
                    <span>Aura Blend Density</span>
                    <span style={{ color: '#b35d58', fontWeight: 700 }}>99.98%</span>
                  </div>
                  <div style={{ height: 6, backgroundColor: 'rgba(200, 120, 115, 0.15)', borderRadius: 9999, overflow: 'hidden' }}>
                    <div style={{ width: '99%', height: '100%', background: 'linear-gradient(90deg, #c87873, #dfba89)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#5e5750', marginBottom: '0.35rem' }}>
                    <span>Fluid Kinetic Refresh</span>
                    <span style={{ color: '#b35d58', fontWeight: 700 }}>120 FPS</span>
                  </div>
                  <div style={{ height: 6, backgroundColor: 'rgba(200, 120, 115, 0.15)', borderRadius: 9999, overflow: 'hidden' }}>
                    <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, #dfba89, #c87873)' }} />
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 14,
                  background: 'rgba(200, 120, 115, 0.08)',
                  border: '1px solid rgba(200, 120, 115, 0.2)',
                  fontSize: '0.8rem',
                  color: '#1e1b18',
                  fontWeight: 600,
                }}
              >
                <span>Atmospheric GPU Multiply Mode</span>
                <span style={{ color: '#b35d58' }}>Active</span>
              </div>
            </div>

            {/* Satellite Floating Card 1: Top Left */}
            <div
              className="glass-panel animate-float-medium interactive-card"
              style={{
                position: 'absolute',
                top: 10,
                left: -20,
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 3,
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 15px 35px -5px rgba(200, 120, 115, 0.15)',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'rgba(200, 120, 115, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c87873',
                }}
              >
                <Activity size={17} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#766e65', textTransform: 'uppercase' }}>Atmosphere</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b18' }}>Rose Gold</div>
              </div>
            </div>

            {/* Satellite Floating Card 2: Bottom Right */}
            <div
              className="glass-panel animate-float-fast interactive-card"
              style={{
                position: 'absolute',
                bottom: 20,
                right: -25,
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 3,
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 15px 35px -5px rgba(200, 120, 115, 0.15)',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'rgba(223, 186, 137, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#b35d58',
                }}
              >
                <Shield size={17} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#766e65', textTransform: 'uppercase' }}>Blend Mode</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b18' }}>Multiply 130px</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
