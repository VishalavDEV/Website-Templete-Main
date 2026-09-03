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

        {/* 3 Showcase Cards with Unique Layout Variations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {showcaseProjects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel interactive-card"
                style={{
                  borderRadius: '2.5rem',
                  padding: '3rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 25px 60px -15px rgba(200, 120, 115, 0.18)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3.5rem',
                    alignItems: 'center',
                    direction: isReversed ? 'rtl' : 'ltr',
                  }}
                >
                  {/* Visual Preview Side */}
                  <div
                    style={{
                      direction: 'ltr',
                      position: 'relative',
                      borderRadius: '1.75rem',
                      overflow: 'hidden',
                      height: 360,
                      boxShadow: '0 20px 50px -10px rgba(200, 120, 115, 0.25)',
                    }}
                  >
                    <motion.img
                      src={proj.image}
                      alt={proj.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Warm Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(250, 248, 242, 0.7) 0%, rgba(250, 248, 242, 0.1) 60%, transparent 100%)',
                      }}
                    />

                    {/* Floating Metric Badge on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        left: '1.5rem',
                        padding: '0.65rem 1.25rem',
                        borderRadius: 9999,
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(200, 120, 115, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        boxShadow: '0 10px 25px rgba(200, 120, 115, 0.15)',
                      }}
                    >
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#b35d58' }}>{proj.stats.metric}</span>
                      <span style={{ fontSize: '0.8rem', color: '#5e5750', fontWeight: 600 }}>{proj.stats.label}</span>
                    </div>
                  </div>

                  {/* Copy & Details Side */}
                  <div style={{ direction: 'ltr' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#b35d58',
                        }}
                      >
                        {proj.category}
                      </span>
                      <span style={{ color: 'rgba(200, 120, 115, 0.4)' }}>•</span>
                      <span style={{ fontSize: '0.8rem', color: '#766e65', fontWeight: 600 }}>{proj.client}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
                        fontWeight: 800,
                        color: '#1e1b18',
                        marginBottom: '1.25rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {proj.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                        marginBottom: '2rem',
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Tags List */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            padding: '0.35rem 0.85rem',
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
                      style={{ padding: '0.75rem 1.65rem' }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
