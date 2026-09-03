import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { statsData } from '../data/landingData';

function AnimatedCounter({ target, suffix = '', duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const totalSteps = 45;
    const stepTime = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += Math.ceil(end / totalSteps);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      {/* Warm Ambient Rose Glows */}
      <div className="ambient-glow ambient-rose" style={{ top: '25%', left: '-5%', width: 500, height: 500 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Asymmetrical 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
        >
          {/* Left Column: Atmospheric Telemetry Sandbox */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Elegant Glass Window Preview */}
            <div
              className="glass-panel interactive-card"
              style={{
                borderRadius: '1.75rem',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 242, 235, 0.82) 100%)',
                overflow: 'hidden',
                boxShadow: '0 30px 70px -15px rgba(200, 120, 115, 0.18)',
              }}
            >
              {/* Window Controls */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid rgba(200, 120, 115, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.65)',
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#5e5750' }}>
                  <Terminal size={14} color="#c87873" />
                  <span>auraflow-multiply-renderer.config</span>
                </div>
                <div style={{ width: 40 }} />
              </div>

              {/* Console Body Content */}
              <div style={{ padding: '2rem 1.75rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                <div style={{ color: '#b35d58', fontWeight: 600, marginBottom: '0.5rem' }}>
                  $ auraflow init --theme "Rose Gold" --blend-mode multiply
                </div>
                <div style={{ color: '#766e65', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  &gt; Layer 1: linear-gradient [multiply / blur: 130px] ... [COMPOSED]
                  <br />
                  &gt; Layer 2: linear-gradient [multiply / blur: 130px] ... [COMPOSED]
                  <br />
                  &gt; Backing canvas: #faf8f2 paper backdrop ... [CALIBRATED]
                </div>

                {/* Simulated Telemetry Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2c2723', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                      <span>Atmospheric Blend Coherence</span>
                      <span style={{ color: '#b35d58', fontWeight: 700 }}>100 / 100</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: 'rgba(200, 120, 115, 0.15)', borderRadius: 9999, overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #c87873, #dfba89)' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2c2723', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                      <span>Hardware GPU Frame Fluidity</span>
                      <span style={{ color: '#b35d58', fontWeight: 700 }}>60.0 FPS</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: 'rgba(200, 120, 115, 0.15)', borderRadius: 9999, overflow: 'hidden' }}>
                      <div style={{ width: '98%', height: '100%', background: 'linear-gradient(90deg, #dfba89, #c87873)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Information Card */}
            <div
              className="glass-panel animate-float-medium interactive-card"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(200, 120, 115, 0.35)',
                boxShadow: '0 20px 45px rgba(200, 120, 115, 0.2)',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(200, 120, 115, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c87873',
                }}
              >
                <TrendingUp size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#766e65', textTransform: 'uppercase' }}>Engagement Lift</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b18' }}>+240% Growth</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-pill">
              <Sparkles size={13} color="#c87873" />
              <span>Architectural Philosophy</span>
            </div>

            <h2 className="section-title">
              Crafting Digital Spaces That <span className="gradient-text-electric">Captivate & Convert</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              We believe digital experiences shouldn't feel sterile. The Rose Gold Aura gradient merges warm atmospheric multiply blend layers with refined typography and micro-interactions that communicate luxury, warmth, and technological mastery.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                'Engineered with layered CSS multiply blend modes over warm #faf8f2 ivory',
                'GPU-accelerated 130px blur filtration with translateZ(0) precision',
                'Warm ivory glassmorphic containers tailored for modern visionary brands',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#2c2723' }}>
                  <CheckCircle2 size={18} color="#c87873" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#projects" className="btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <span>Explore Our Portfolio</span>
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        {/* Four Statistics Cards with Viewport Animated Counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel interactive-card"
              style={{
                padding: '2.25rem 1.75rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(200, 120, 115, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.4rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
                className="gradient-text-electric"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e1b18', marginBottom: '0.35rem' }}>
                {stat.label}
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
