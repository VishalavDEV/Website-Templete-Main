import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { showcaseProjects } from '../data/landingData';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      {/* Background ambient rose glow */}
      <div className="ambient-glow ambient-rose" style={{ top: '25%', left: '10%', width: 550, height: 550 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="glass-pill">
            <Sparkles size={13} color="#c87873" />
            <span>Featured Casework</span>
          </div>

          <h2 className="section-title">
            Transformative Results For <span className="gradient-text-electric">Visionary Brands</span>
          </h2>

          <p className="section-subtitle">
            Explore how we engineered flagship digital products combining atmospheric aura frameworks with ultra-scalable architectures.
          </p>
        </div>

        {/* Showcase Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {showcaseProjects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel project-showcase-card"
                style={{
                  borderRadius: 'clamp(1.5rem, 3vw, 2.5rem)',
                  padding: 'clamp(1.5rem, 3vw, 3rem)',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 25px 60px -15px rgba(200, 120, 115, 0.18)',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
              >
                <div
                  className={`project-grid-inner ${isReversed ? 'grid-reversed' : ''}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                    gap: 'clamp(1.75rem, 3vw, 3.5rem)',
                    alignItems: 'center',
                  }}
                >
                  {/* Visual Preview Side */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '1.25rem',
                      overflow: 'hidden',
                      height: 'clamp(220px, 32vw, 340px)',
                      width: '100%',
                      boxShadow: '0 15px 40px -10px rgba(200, 120, 115, 0.22)',
                      background: 'rgba(200, 120, 115, 0.1)',
                      boxSizing: 'border-box',
                    }}
                  >
                    <motion.img
                      src={proj.image}
                      alt={proj.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                      }}
                    />

                    {/* Warm Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(250, 248, 242, 0.8) 0%, rgba(250, 248, 242, 0.1) 60%, transparent 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Floating Metric Badge on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        maxWidth: 'calc(100% - 2rem)',
                        padding: '0.45rem 1rem',
                        borderRadius: 9999,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(200, 120, 115, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 8px 20px rgba(200, 120, 115, 0.15)',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: '#b35d58', whiteSpace: 'nowrap' }}>
                        {proj.stats.metric}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#5e5750', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {proj.stats.label}
                      </span>
                    </div>
                  </div>

                  {/* Copy & Details Side */}
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#b35d58',
                        }}
                      >
                        {proj.category}
                      </span>
                      <span style={{ color: 'rgba(200, 120, 115, 0.4)' }}>•</span>
                      <span style={{ fontSize: '0.78rem', color: '#766e65', fontWeight: 600 }}>{proj.client}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
                        fontWeight: 800,
                        color: '#1e1b18',
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {proj.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Tags List */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            padding: '0.3rem 0.75rem',
                            borderRadius: 9999,
                            background: 'rgba(200, 120, 115, 0.08)',
                            border: '1px solid rgba(200, 120, 115, 0.2)',
                            color: '#2c2723',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <a
                      href="#contact"
                      className="btn-primary"
                      style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .grid-reversed {
            direction: rtl;
          }
          .grid-reversed > * {
            direction: ltr;
          }
        }
      `}</style>
    </section>
  );
}
