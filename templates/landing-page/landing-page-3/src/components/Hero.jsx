import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Globe2, 
  ChevronDown,
  Terminal,
  Orbit
} from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export default function Hero({ onOpenModal, onWatchDemo }) {
  const { normalizedX, normalizedY } = useMousePosition();

  // Staggered variants for typography
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      <div className="section-wrapper" style={{ padding: '0 24px', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Kinetic Typography & Action Controls */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 2 }}
          >
            {/* Live Status Pill */}
            <motion.div variants={itemVariants} className="badge-pill badge-pill-pulse" style={{ marginBottom: '22px' }}>
              <Radio size={14} className="animate-spin-slow" />
              <span>SYNAPSE SPATIAL FABRIC V3.4 // LIVE ACROSS 250+ EDGES</span>
            </motion.div>

            {/* Kinetic Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.6rem, 5.4vw, 4.4rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: '-0.038em',
                marginBottom: '24px',
              }}
            >
              Synthesize <br />
              <span className="text-gradient-neon">Spatial Intelligence</span> <br />
              at Sub-Millisecond Speed.
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '560px',
                marginBottom: '38px',
              }}
            >
              The hyper-dimensional neural cloud built for autonomous systems, spatial computing, and zero-latency generative inference. Scale across global GPU clusters with a single command.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                width: '100%',
                marginBottom: '42px',
              }}
            >
              <button
                onClick={() => onOpenModal && onOpenModal('Start Free Trial')}
                className="btn-primary"
                id="hero-primary-cta"
                style={{ padding: '16px 32px', fontSize: '1.02rem', borderRadius: '14px' }}
              >
                <span>Deploy Free Cluster</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollToSection('playground')}
                className="btn-secondary"
                id="hero-secondary-cta"
                style={{ padding: '16px 28px', fontSize: '1.02rem', borderRadius: '14px' }}
              >
                <Play size={16} fill="currentColor" />
                <span>Try Live Playground</span>
              </button>
            </motion.div>

            {/* Developer Trust Proof Badges */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                paddingTop: '22px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
                ].map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Developer avatar ${idx + 1}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '2px solid #040508',
                      marginLeft: idx > 0 ? '-10px' : '0',
                      objectFit: 'cover',
                      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: '0.88rem' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 700 }}>45,000+ engineers</span> & 800+ AI startups deploy daily
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Holographic Parallax Matrix Visual */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '490px',
            }}
          >
            {/* Parallax Container driven by mouse coordinates */}
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '470px',
                aspectRatio: '1 / 1',
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: normalizedX * 14,
                rotateX: -normalizedY * 14,
              }}
              transition={{ type: 'spring', damping: 26, stiffness: 110 }}
            >
              {/* Central Glowing Hologram Glass Enclosure */}
              <div
                style={{
                  position: 'absolute',
                  inset: '8%',
                  borderRadius: '34px',
                  background: 'linear-gradient(145deg, rgba(0, 229, 255, 0.14) 0%, rgba(138, 43, 226, 0.22) 50%, rgba(0, 255, 163, 0.12) 100%)',
                  border: '1px solid rgba(0, 229, 255, 0.45)',
                  backdropFilter: 'blur(24px)',
                  boxShadow: '0 0 70px rgba(0, 229, 255, 0.28), inset 0 0 45px rgba(138, 43, 226, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '26px',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Header Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00FFA3', boxShadow: '0 0 10px #00FFA3' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#00E5FF', fontWeight: 700 }}>SYNAPSE-CORE // ACTIVE</span>
                  </div>
                  <Cpu size={22} color="#00E5FF" />
                </div>

                {/* Central Kinetic Wave Matrix */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 'auto' }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      border: '2px dashed rgba(0, 229, 255, 0.65)',
                      animation: 'spin-slow 16s linear infinite',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 25px rgba(0, 229, 255, 0.25)',
                    }}
                  >
                    <div
                      style={{
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        border: '2px dotted rgba(138, 43, 226, 0.8)',
                        animation: 'spin-slow 9s linear infinite reverse',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Zap size={40} color="#00FFA3" className="animate-float" />
                    </div>
                  </div>

                  <div style={{ marginTop: '18px', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)' }}>THROUGHPUT BANDWIDTH</span>
                    <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>1.48 TB/sec</h3>
                  </div>
                </div>

                {/* Live Real-time Stream Bar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>QUANTUM ACCELERATION</span>
                    <span style={{ color: '#00FFA3' }}>99.9% OPTIMAL</span>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', background: 'linear-gradient(90deg, #00E5FF, #00FFA3)', borderRadius: '3px' }}
                      animate={{ width: ['65%', '99%', '88%', '100%'] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Orbit Card 1: Sub-millisecond latency */}
              <motion.div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-18px',
                  padding: '14px 20px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 229, 255, 0.22)',
                  zIndex: 3,
                }}
                animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.15)', color: '#00E5FF' }}>
                  <Activity size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Avg Latency</div>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, color: '#00E5FF' }}>0.42 ms</div>
                </div>
              </motion.div>

              {/* Floating Orbit Card 2: Global Clusters */}
              <motion.div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '-26px',
                  padding: '14px 20px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(138, 43, 226, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 25px rgba(138, 43, 226, 0.22)',
                  zIndex: 3,
                }}
                animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(138, 43, 226, 0.2)', color: '#8A2BE2' }}>
                  <Globe2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Edge Nodes</div>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, color: '#FFFFFF' }}>250+ Worldwide</div>
                </div>
              </motion.div>

              {/* Floating Orbit Card 3: SOC2 Verified */}
              <motion.div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  right: '25px',
                  padding: '12px 18px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(0, 255, 163, 0.4)',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 163, 0.2)',
                  zIndex: 3,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <ShieldCheck size={18} color="#00FFA3" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#FFFFFF' }}>SOC2 Type II Certified</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Smooth Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          onClick={() => scrollToSection('about')}
          style={{
            marginTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
            SCROLL TO EXPLORE ARCHITECTURE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--neon-cyan)' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
