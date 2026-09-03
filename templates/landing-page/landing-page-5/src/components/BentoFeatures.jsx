import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, BarChart3, Smartphone, CloudRain, ArrowUpRight, Sparkles } from 'lucide-react';
import { bentoFeatures } from '../data/landingData';

const featureIcons = {
  tech: <Cpu size={28} color="#c87873" />,
  perf: <Zap size={28} color="#dfba89" />,
  sec: <ShieldCheck size={28} color="#b35d58" />,
  analytics: <BarChart3 size={28} color="#c87873" />,
  responsive: <Smartphone size={28} color="#dfba89" />,
  scale: <CloudRain size={28} color="#e08a85" />,
};

export default function BentoFeatures() {
  return (
    <section id="features" className="section" style={{ position: 'relative' }}>
      {/* Warm Ambient Background Glows */}
      <div className="ambient-glow ambient-rose" style={{ top: '20%', right: '5%', width: 500, height: 500 }} />
      <div className="ambient-glow ambient-champagne" style={{ bottom: '10%', left: '5%', width: 500, height: 500 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="glass-pill">
            <Sparkles size={13} color="#c87873" />
            <span>Futuristic Primitives</span>
          </div>

          <h2 className="section-title">
            Engineered For <span className="gradient-text-electric">Extreme Velocity</span>
          </h2>

          <p className="section-subtitle">
            Every layer of our component framework is designed to deliver breathtaking visual fidelity with uncompromised engineering rigor.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
        >
          {bentoFeatures.map((feat, idx) => {
            const isWide = feat.span === 'col-span-2';

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -7, scale: 1.01 }}
                className="glass-panel interactive-card"
                style={{
                  gridColumn: isWide ? 'span 8' : 'span 4',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: isWide ? 340 : 310,
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.82)',
                  border: '1px solid rgba(200, 120, 115, 0.22)',
                }}
              >
                {/* Subtle Rose Gold Card Flare */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40%',
                    right: '-20%',
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: isWide
                      ? 'radial-gradient(circle, rgba(200, 120, 115, 0.18) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(223, 186, 137, 0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Row: Icon and Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(200, 120, 115, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(200, 120, 115, 0.12)',
                    }}
                  >
                    {featureIcons[feat.id]}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 9999,
                      background: 'rgba(200, 120, 115, 0.1)',
                      border: '1px solid rgba(200, 120, 115, 0.25)',
                      color: '#b35d58',
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>

                {/* Middle: Content */}
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#766e65', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem', fontWeight: 600 }}>
                    {feat.subtitle}
                  </div>
                  <h3
                    style={{
                      fontSize: isWide ? '1.85rem' : '1.5rem',
                      fontWeight: 700,
                      color: '#1e1b18',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: isWide ? 580 : '100%' }}>
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b35d58', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>Explore capability</span>
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #features .glass-panel {
            grid-column: span 12 !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
