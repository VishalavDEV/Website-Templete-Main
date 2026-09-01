import React, { useState } from 'react';
import { Palette, Code2, Boxes, Cpu, TrendingUp, ShieldCheck, Check, ArrowRight, X, Clock, Tag } from 'lucide-react';
import { servicesData } from '../data/content';

const iconMap = {
  Palette: Palette,
  Code2: Code2,
  Boxes: Boxes,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-tag">
            CAPABILITIES & SERVICES
          </div>
          <h2 className="section-title">
            Engineered Capabilities for <span className="text-gradient">Market Dominance</span>
          </h2>
          <p className="section-subtitle">
            We provide end-to-end digital product design, high-frequency web engineering, spatial UI visualizers, and artificial intelligence integration.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Palette;
            
            return (
              <div 
                key={service.id}
                className="glass-card service-post-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.92)',
                  height: '100%'
                }}
              >
                <div>
                  {/* Top Article / Post Image Frame */}
                  <div 
                    style={{
                      position: 'relative',
                      height: 'clamp(170px, 25vh, 210px)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '1.35rem',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)'
                    }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
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
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.35rem 0.85rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(255, 255, 255, 0.92)',
                          backdropFilter: 'blur(8px)',
                          color: 'var(--text-main)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      >
                        {service.badge}
                      </span>

                      <div 
                        className={`glass-icon-badge ${index % 3 === 1 ? 'cyan' : index % 3 === 2 ? 'violet' : ''}`}
                        style={{ width: '42px', height: '42px' }}
                      >
                        <span style={{ position: 'relative', zIndex: 2, color: index % 3 === 0 ? 'var(--accent-blue)' : index % 3 === 1 ? 'var(--accent-cyan)' : 'var(--accent-violet)', display: 'flex' }}>
                          <IconComponent size={20} strokeWidth={2.2} />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Overlay: Author & Read Time */}
                    <div style={{ position: 'absolute', bottom: '0.85rem', left: '1rem', right: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff', fontSize: '0.75rem', fontWeight: 600 }}>
                      <span style={{ opacity: 0.95 }}>{service.author}</span>
                      <span style={{ padding: '0.2rem 0.65rem', borderRadius: '8px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        {service.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-main)' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 500 }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)', flexShrink: 0 }}>
                          <Check size={12} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.875rem', justifyContent: 'center' }}
                >
                  Explore Specification <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Specification Detail Modal */}
        {selectedService && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(12px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="glass-card"
              style={{
                maxWidth: '620px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: '#ffffff',
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-main)'
                }}
                aria-label="Close specification modal"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  {selectedService.badge}
                </span>

                {selectedService.timeline && (
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} color="var(--accent-blue)" /> {selectedService.timeline}
                  </span>
                )}

                {selectedService.priceRange && (
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Tag size={14} /> {selectedService.priceRange}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
                {selectedService.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: '0.95rem' }}>
                {selectedService.extendedDescription || selectedService.description}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-main)' }}>
                Core Deliverable Architecture:
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {selectedService.features.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', fontWeight: 500 }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--gradient-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                onClick={() => {
                  setSelectedService(null);
                  const el = document.getElementById('contact');
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Book {selectedService.title} Consultation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
