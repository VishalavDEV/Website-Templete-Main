import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Cpu, Compass, Layers, ShieldCheck } from 'lucide-react';
import { aboutData } from '../data/content';

export default function About() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1800;
    const startTime = performance.now();

    const updateFrame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);

      const nextVal0 = Math.floor(ease * 99.4 * 10) / 10;
      const nextVal1 = Math.floor(ease * 250);
      const nextVal2 = Math.floor(ease * 14);
      const nextVal3 = Math.floor(ease * 45);

      setCounters((prev) => {
        if (
          prev[0] === nextVal0 &&
          prev[1] === nextVal1 &&
          prev[2] === nextVal2 &&
          prev[3] === nextVal3
        ) {
          return prev; // Skip state update if values haven't changed
        }
        return [nextVal0, nextVal1, nextVal2, nextVal3];
      });

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      }
    };

    requestAnimationFrame(updateFrame);
  };

  return (
    <section id="about" ref={sectionRef} className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag">
            {aboutData.tag}
          </div>
          <h2 className="section-title">
            {aboutData.heading}
          </h2>
          <p className="section-subtitle">
            {aboutData.description}
          </p>
        </div>

        {/* Grid Layout: Left Content & Right Interactive Visual Card */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          
          {/* Feature Highlight List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {aboutData.features.map((feature, idx) => (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: 'clamp(1.15rem, 2.5vw, 1.75rem)',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  background: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                <div 
                  className={`glass-icon-badge ${idx === 1 ? 'cyan' : idx === 2 ? 'violet' : ''}`}
                  style={{ width: '48px', height: '48px' }}
                >
                  <span style={{ position: 'relative', zIndex: 2, color: idx === 0 ? 'var(--accent-blue)' : idx === 1 ? 'var(--accent-cyan)' : 'var(--accent-violet)', display: 'flex' }}>
                    {idx === 0 && <Cpu size={24} strokeWidth={2.2} />}
                    {idx === 1 && <Compass size={24} strokeWidth={2.2} />}
                    {idx === 2 && <Layers size={24} strokeWidth={2.2} />}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Futuristic Visual Card Mockup */}
          <div 
            className="glass-card animate-float"
            style={{
              padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.85))',
              border: '1px solid rgba(0, 102, 255, 0.25)',
              position: 'relative'
            }}
          >
            {/* Visual Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                AETHERIA v4.8 System Engine
              </span>
            </div>

            {/* Inner Dashboard Wireframe Graphic */}
            <div style={{ background: '#0f172a', borderRadius: '16px', padding: '1.25rem', color: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#06b6d4" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Quantum Latency Telemetry</span>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', background: 'rgba(16,185,129,0.2)', color: '#34d399', fontWeight: 600 }}>
                  ACTIVE 60FPS
                </span>
              </div>

              {/* Progress bars visual */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem', color: '#94a3b8' }}>
                    <span>Memory Optimization</span>
                    <span>99.8%</span>
                  </div>
                  <div style={{ height: '6px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '99.8%', height: '100%', background: 'linear-gradient(90deg, #0066ff, #06b6d4)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem', color: '#94a3b8' }}>
                    <span>Asset Stream Throughput</span>
                    <span>4.8 GB/s</span>
                  </div>
                  <div style={{ height: '6px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #7c3aed, #e11d48)' }} />
                  </div>
                </div>

                <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Security Audit Standard</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>SOC2 TYPE II PASSED</span>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-subtle)', textAlign: 'center', fontStyle: 'italic' }}>
              "Benchmarked daily against global enterprise standards."
            </p>
          </div>

        </div>

        {/* Animated Counter Stats Bar */}
        <div 
          className="glass-card"
          style={{
            padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem)',
            background: 'var(--bg-surface-glass)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}
        >
          {aboutData.stats.map((stat, idx) => (
            <div key={stat.id}>
              <div 
                style={{
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.25rem'
                }}
                className={idx % 2 === 0 ? "text-gradient" : "text-gradient-cyan"}
              >
                {counters[idx]}{stat.suffix}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
