import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Activity, Play, Shield } from 'lucide-react';
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
        paddingTop: 'clamp(6.5rem, 12vh, 8.5rem)',
        paddingBottom: 'clamp(3rem, 6vh, 5rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(2.5rem, 4vw, 4rem)',
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
                fontSize: 'clamp(2.4rem, 4.8vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
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
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2.25rem',
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
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a href="#about" className="btn-primary" style={{ padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}>
                <span>{heroData.ctaPrimary}</span>
                <ArrowRight size={17} />
              </a>

              <a href="#showcase" className="btn-secondary" style={{ padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}>
                <Play size={15} color="#c87873" fill="#c87873" />
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
              minHeight: 'clamp(360px, 45vw, 480px)',
              width: '100%',
              maxWidth: 420,
              margin: '0 auto',
            }}
          >
            {/* Concentric Rotating Orbital Rings */}
            <div
              className="animate-spin-slow"
              style={{
                position: 'absolute',
                width: 'min(440px, 90vw)',
                height: 'min(440px, 90vw)',
                borderRadius: '50%',
                border: '1.5px dashed rgba(200, 120, 115, 0.25)',
                pointerEvents: 'none',
              }}
            />
            <div
              className="animate-spin-slow"
              style={{
                position: 'absolute',
                width: 'min(340px, 75vw)',
                height: 'min(340px, 75vw)',
                borderRadius: '50%',
                border: '1.5px dashed rgba(223, 186, 137, 0.3)',
                animationDirection: 'reverse',
                pointerEvents: 'none',
              }}
            />

            {/* Central Main Glass Console */}
            <div
              className="glass-panel animate-float-slow"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 360,
                padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 2.5vw, 1.85rem)',
                zIndex: 2,
                borderRadius: '1.75rem',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.88) 0%, rgba(250, 244, 238, 0.78) 100%)',
                boxShadow: '0 30px 60px -15px rgba(200, 120, 115, 0.2), 0 0 30px rgba(252, 219, 216, 0.4)',
                boxSizing: 'border-box',
              }}
            >
              {/* Header inside console */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
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
                      flexShrink: 0,
                    }}
                  >
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e1b18', margin: 0 }}>Aura Neural Mesh</h3>
                    <p style={{ fontSize: '0.75rem', color: '#766e65', margin: 0 }}>Rose Gold Atmospheric Core</p>
                  </div>
                </div>

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    flexShrink: 0,
                  }}
                  className="animate-pulse-beacon"
                />
              </div>

              {/* Graphical Metric Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#5e5750', marginBottom: '0.3rem' }}>
                    <span>Aura Blend Density</span>
                    <span style={{ color: '#b35d58', fontWeight: 700 }}>99.98%</span>
                  </div>
                  <div style={{ height: 6, backgroundColor: 'rgba(200, 120, 115, 0.15)', borderRadius: 9999, overflow: 'hidden' }}>
                    <div style={{ width: '99%', height: '100%', background: 'linear-gradient(90deg, #c87873, #dfba89)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#5e5750', marginBottom: '0.3rem' }}>
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
                  padding: '0.65rem 0.85rem',
                  borderRadius: 12,
                  background: 'rgba(200, 120, 115, 0.08)',
                  border: '1px solid rgba(200, 120, 115, 0.2)',
                  fontSize: '0.78rem',
                  color: '#1e1b18',
                  fontWeight: 600,
                }}
              >
                <span>GPU Multiply Mode</span>
                <span style={{ color: '#b35d58' }}>Active</span>
              </div>
            </div>

            {/* Satellite Floating Card 1: Top Left */}
            <div
              className="glass-panel animate-float-medium hero-satellite-1"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '0.65rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 3,
                borderRadius: '0.85rem',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 10px 25px -5px rgba(200, 120, 115, 0.15)',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: 'rgba(200, 120, 115, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c87873',
                  flexShrink: 0,
                }}
              >
                <Activity size={15} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#766e65', textTransform: 'uppercase' }}>Atmosphere</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e1b18' }}>Rose Gold</div>
              </div>
            </div>

            {/* Satellite Floating Card 2: Bottom Right */}
            <div
              className="glass-panel animate-float-fast hero-satellite-2"
              style={{
                position: 'absolute',
                bottom: 10,
                right: 0,
                padding: '0.65rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 3,
                borderRadius: '0.85rem',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 10px 25px -5px rgba(200, 120, 115, 0.15)',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: 'rgba(223, 186, 137, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#b35d58',
                  flexShrink: 0,
                }}
              >
                <Shield size={15} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#766e65', textTransform: 'uppercase' }}>Blend Mode</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e1b18' }}>Multiply 130px</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
