import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Palette, Code, Rocket } from 'lucide-react';
import { processSteps } from '../data/landingData';

const stepIcons = [
  <Compass size={24} color="#c87873" />,
  <Palette size={24} color="#dfba89" />,
  <Code size={24} color="#b35d58" />,
  <Rocket size={24} color="#10b981" />,
];

export default function Process() {
  return (
    <section id="process" className="section" style={{ position: 'relative' }}>
      {/* Background ambient rose glow */}
      <div className="ambient-glow ambient-rose" style={{ top: '20%', right: '10%', width: 500, height: 500 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="glass-pill">
            <Sparkles size={13} color="#c87873" />
            <span>Execution Roadmap</span>
          </div>

          <h2 className="section-title">
            From Conceptual Spark To <span className="gradient-text-electric">Global Launch</span>
          </h2>

          <p className="section-subtitle">
            A battle-tested four-phase methodology designed to turn ambitious concepts into world-class digital products with velocity and precision.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-panel interactive-card"
              style={{
                padding: '2.5rem 1.75rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.82)',
                border: '1px solid rgba(200, 120, 115, 0.22)',
              }}
            >
              {/* Step Number Top Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(200, 120, 115, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(200, 120, 115, 0.12)',
                  }}
                >
                  {stepIcons[idx]}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: 'rgba(200, 120, 115, 0.25)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#b35d58', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {step.tagline}
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1e1b18', marginBottom: '0.85rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>

              {/* Connecting indicator bar */}
              <div
                style={{
                  marginTop: '2rem',
                  height: 3,
                  width: '100%',
                  background: 'rgba(200, 120, 115, 0.15)',
                  borderRadius: 9999,
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #c87873, #dfba89)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
