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

    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = -((y - centerY) / centerY) * 7;

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
              gap: '0.5rem',
              padding: '0.4rem',
              background: 'rgba(255, 255, 255, 0.75)',
              borderRadius: 9999,
              border: '1px solid rgba(200, 120, 115, 0.22)',
              marginTop: '1.5rem',
              boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.1)',
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
                  padding: '0.5rem 1.25rem',
                  borderRadius: 9999,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: activeTab === tab.id ? '#ffffff' : '#5e5750',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #c87873, #dfba89)' : 'transparent',
                  boxShadow: activeTab === tab.id ? '0 4px 15px rgba(200, 120, 115, 0.35)' : 'none',
                  transition: 'all 0.25s ease',
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
          }}
        >
          <motion.div
            animate={{
              rotateX: rotation.x,
              rotateY: rotation.y,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="glass-panel"
            style={{
              transformStyle: 'preserve-3d',
              borderRadius: '2.5rem',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 244, 237, 0.85) 100%)',
              boxShadow: '0 40px 100px -20px rgba(200, 120, 115, 0.25), 0 0 50px rgba(252, 219, 216, 0.4)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '1.75rem',
                borderBottom: '1px solid rgba(200, 120, 115, 0.15)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #c87873, #dfba89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Cpu size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#1e1b18' }}>Aura Autonomous Mesh v2.8</h4>
                  <p style={{ fontSize: '0.8rem', color: '#766e65' }}>Theme: Rose Gold Blend Mode Architecture</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="glass-pill" style={{ marginBottom: 0 }}>
                  <Radio size={12} color="#10b981" />
                  <span>ONLINE 99.99%</span>
                </span>
              </div>
            </div>

            {/* Dashboard Visual Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                marginBottom: '2rem',
              }}
            >
              {/* Telemetry Block 1 */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#766e65', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span>Atmospheric Aura Throughput</span>
                  <Activity size={16} color="#c87873" />
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1e1b18', marginBottom: '0.5rem' }}>
                  4.82M <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>+18.4%</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#766e65' }}>Processed in the last 60 seconds with zero frame drop.</div>
              </div>

              {/* Telemetry Block 2 */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#766e65', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span>P99 Blend Pipeline Latency</span>
                  <Network size={16} color="#dfba89" />
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1e1b18', marginBottom: '0.5rem' }}>
                  0.38ms <span style={{ fontSize: '0.9rem', color: '#b35d58', fontWeight: 600 }}>Optimal</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#766e65' }}>Hardware-accelerated CSS filter compositor active.</div>
              </div>

              {/* Telemetry Block 3 */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(200, 120, 115, 0.18)',
                  boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#766e65', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span>Shader Purity & Integrity</span>
                  <ShieldAlert size={16} color="#10b981" />
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1e1b18', marginBottom: '0.5rem' }}>
                  100% <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>Zero Artifacts</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#766e65' }}>Full multiply composite over base #faf8f2 color.</div>
              </div>
            </div>

            {/* Bottom Graphic Matrix Wave */}
            <div
              style={{
                padding: '1.75rem',
                borderRadius: '1.5rem',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(200, 120, 115, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e1b18', marginBottom: '0.25rem' }}>
                  Real-Time Neural Synchronizer
                </div>
                <div style={{ fontSize: '0.85rem', color: '#766e65' }}>
                  Interactive reactive stream updating synchronously with mouse tracking.
                </div>
              </div>

              {/* Graphical equalizer bars in rose gold and champagne */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 42 }}>
                {[45, 68, 85, 30, 92, 100, 75, 60, 88, 52, 70, 95, 80, 65, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: `${h}%`,
                      borderRadius: 3,
                      background: i % 2 === 0 ? '#c87873' : '#dfba89',
                      boxShadow: i % 3 === 0 ? '0 0 8px rgba(200, 120, 115, 0.4)' : 'none',
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
