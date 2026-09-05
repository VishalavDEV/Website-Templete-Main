import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Radio, Cpu, Network, ShieldAlert } from 'lucide-react';

export default function InteractiveShowcase() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('telemetry');

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="showcase" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient rose orbs */}
      <div className="ambient-glow ambient-rose animate-pulse-glow" style={{ top: '30%', left: '15%', width: 600, height: 600 }} />
      <div className="ambient-glow ambient-champagne animate-pulse-glow" style={{ bottom: '15%', right: '15%', width: 600, height: 600, animationDelay: '2s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="glass-pill">
            <Sparkles size={13} color="#c87873" />
            <span>Tactile Visual Depth</span>
          </div>

          <h2 className="section-title">
            DESIGNED TO MAKE <span className="gradient-text-electric">AN IMPACT.</span>
          </h2>

          <p className="section-subtitle">
            Hover and move your cursor across the command console below to experience real-time 3D parallax depth and dynamic reactive lighting.
          </p>

          {/* Interactive Navigation Pills */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.4rem',
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: 9999,
              border: '1px solid rgba(200, 120, 115, 0.22)',
              marginTop: '1.5rem',
              boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.1)',
              maxWidth: '100%',
            }}
          >
            {[
              { id: 'telemetry', label: 'Atmosphere Mesh' },
              { id: 'nodes', label: 'Neural Blend' },
              { id: 'vitals', label: 'Core Vitals' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 9999,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: activeTab === tab.id ? '#ffffff' : '#5e5750',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #c87873, #dfba89)' : 'transparent',
                  boxShadow: activeTab === tab.id ? '0 4px 15px rgba(200, 120, 115, 0.35)' : 'none',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Wrapper */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 1200,
            cursor: 'crosshair',
            width: '100%',
          }}
        >
          <motion.div
            animate={{
              rotateX: rotation.x,
              rotateY: rotation.y,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="glass-panel showcase-console-panel"
            style={{
              transformStyle: 'preserve-3d',
              borderRadius: 'clamp(1.5rem, 3vw, 2.5rem)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 244, 237, 0.85) 100%)',
              boxShadow: '0 40px 100px -20px rgba(200, 120, 115, 0.25), 0 0 50px rgba(252, 219, 216, 0.4)',
              padding: 'clamp(1.25rem, 3vw, 2.5rem)',
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Header Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid rgba(200, 120, 115, 0.15)',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #c87873, #dfba89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#1e1b18', margin: 0, fontWeight: 700 }}>
                    Aura Autonomous Mesh v2.8
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#766e65', margin: 0 }}>
                    Theme: Rose Gold Blend Mode Architecture
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="glass-pill" style={{ marginBottom: 0, padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}>
                  <Radio size={12} color="#10b981" />
                  <span>ONLINE 99.99%</span>
                </span>
              </div>
            </div>

            {/* Dashboard Visual Grid - 3 Metric Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1.25rem',
                marginBottom: '1.75rem',
              }}
            >
              {/* Telemetry Block 1 */}
              <div
                className="metric-card"
                style={{
                  padding: '1.35rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.82)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#766e65', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: 600 }}>Atmospheric Aura Throughput</span>
                  <Activity size={16} color="#c87873" style={{ flexShrink: 0 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#1e1b18', lineHeight: 1.1 }}>
                    4.82M
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: 9999 }}>
                    +18.4%
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#766e65', lineHeight: 1.45 }}>
                  Processed in the last 60 seconds with zero frame drop.
                </div>
              </div>

              {/* Telemetry Block 2 */}
              <div
                className="metric-card"
                style={{
                  padding: '1.35rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.82)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#766e65', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: 600 }}>P99 Blend Pipeline Latency</span>
                  <Network size={16} color="#dfba89" style={{ flexShrink: 0 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#1e1b18', lineHeight: 1.1 }}>
                    0.38ms
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#b35d58', fontWeight: 700, background: 'rgba(200, 120, 115, 0.12)', padding: '0.2rem 0.5rem', borderRadius: 9999 }}>
                    Optimal
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#766e65', lineHeight: 1.45 }}>
                  Hardware-accelerated CSS filter compositor active.
                </div>
              </div>

              {/* Telemetry Block 3 */}
              <div
                className="metric-card"
                style={{
                  padding: '1.35rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.82)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#766e65', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: 600 }}>Shader Purity & Integrity</span>
                  <ShieldAlert size={16} color="#10b981" style={{ flexShrink: 0 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#1e1b18', lineHeight: 1.1 }}>
                    100%
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: 9999 }}>
                    Zero Artifacts
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#766e65', lineHeight: 1.45 }}>
                  Full multiply composite over base #faf8f2 color.
                </div>
              </div>
            </div>

            {/* Bottom Graphic Matrix Wave */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1.25rem',
                background: 'rgba(255, 255, 255, 0.78)',
                border: '1px solid rgba(200, 120, 115, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ minWidth: 200, flex: '1 1 220px' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e1b18', marginBottom: '0.2rem' }}>
                  Real-Time Neural Synchronizer
                </div>
                <div style={{ fontSize: '0.8rem', color: '#766e65', lineHeight: 1.4 }}>
                  Interactive reactive stream updating synchronously with mouse tracking.
                </div>
              </div>

              {/* Graphical equalizer bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 36, flexShrink: 0 }}>
                {[45, 68, 85, 30, 92, 100, 75, 60, 88, 52, 70, 95, 80, 65, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      height: `${h}%`,
                      borderRadius: 3,
                      background: i % 2 === 0 ? '#c87873' : '#dfba89',
                      boxShadow: i % 3 === 0 ? '0 0 6px rgba(200, 120, 115, 0.35)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
