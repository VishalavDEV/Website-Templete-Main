import React, { useState } from 'react';
import { Zap, Users, Activity, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { whyUsData } from '../data/content';

const iconMap = {
  Zap: Zap,
  Users: Users,
  Activity: Activity,
  Layers: Layers
};

export default function WhyUs() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="why-us" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-tag">
            {whyUsData.tag}
          </div>
          <h2 className="section-title">
            {whyUsData.title}
          </h2>
          <p className="section-subtitle">
            {whyUsData.subtitle}
          </p>
        </div>

        {/* 4 Differentiators Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '6rem'
          }}
        >
          {whyUsData.items.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Zap;

            return (
              <div 
                key={item.id}
                className="glass-card service-post-card"
                style={{
                  padding: '1.15rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Article / Post Image Frame */}
                <div 
                  style={{
                    position: 'relative',
                    height: '170px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }} 
                    className="post-frame-img"
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 65%)'
                    }}
                  />

                  {/* Top Overlay: Category Badge & 3D Glass Icon Badge */}
                  <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', right: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span 
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--text-main)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.category}
                    </span>

                    <div 
                      className={`glass-icon-badge ${idx === 1 ? 'cyan' : idx === 2 ? 'violet' : ''}`}
                      style={{ width: '38px', height: '38px' }}
                    >
                      <span style={{ position: 'relative', zIndex: 2, color: idx === 0 ? 'var(--accent-blue)' : idx === 1 ? 'var(--accent-cyan)' : idx === 2 ? 'var(--accent-violet)' : 'var(--accent-pink)', display: 'flex' }}>
                        <IconComponent size={18} strokeWidth={2.2} />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Overlay: Read Time */}
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.85rem', right: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: '#ffffff', fontSize: '0.725rem', fontWeight: 600 }}>
                    <span style={{ padding: '0.15rem 0.55rem', borderRadius: '6px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      {item.readTime}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '0.25rem 0.5rem 0.5rem 0.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology Interactive Stepper */}
        <div 
          className="glass-card"
          style={{
            padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.5rem)',
            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
            border: '1px solid rgba(0, 102, 255, 0.2)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
              OUR 4-STAGE METHODOLOGY
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginTop: '0.5rem' }}>
              How We Execute With Precision
            </h3>
          </div>

          {/* Stepper Tabs */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            {whyUsData.methodology.map((m, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={m.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '1rem 0.875rem',
                    borderRadius: '16px',
                    background: isActive ? 'var(--bg-surface)' : 'transparent',
                    border: isActive ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                    textAlign: 'left',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: isActive ? 'var(--accent-blue)' : 'var(--text-subtle)' }}>
                    PHASE {m.step}
                  </span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {m.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Content */}
          <div 
            style={{
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              borderRadius: '16px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span 
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--gradient-primary)',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 800
                  }}
                >
                  Phase {whyUsData.methodology[activeStep].step}
                </span>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 700 }}>
                  {whyUsData.methodology[activeStep].name}
                </h4>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '700px', lineHeight: 1.6 }}>
                {whyUsData.methodology[activeStep].detail}
              </p>
            </div>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              Start Phase 1 <ArrowRight size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
