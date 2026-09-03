import React from 'react';
import { CheckCircle2, Building, ShieldCheck, Cpu, Compass } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '180+', label: 'Completed Structures' },
    { value: '42', label: 'Global Design Awards' },
    { value: '99.8%', label: 'Computational Efficiency' },
    { value: '15+', label: 'Years Of Innovation' },
  ];

  return (
    <section id="about" style={{
      padding: '120px 0',
      backgroundColor: '#0c0e12',
      borderTop: '1px solid var(--border-dark)',
      borderBottom: '1px solid var(--border-dark)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center'
        }}>
          {/* Left Column: Story & Vision */}
          <div>
            <span className="section-tag">About Asentus</span>
            <h2 className="section-title">
              Pioneering High-Tech Architectural Systems & Digital Engineering
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Asentus is a multidisciplinary engineering and design atelier focused on the intersection of structural minimalism, high-performance web systems, and parametric architecture.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '32px' }}>
              We build intelligent digital interfaces and scalable backend infrastructures tailored for modern enterprises that demand distinction, structural integrity, and computational precision.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '500' }}>Modular Java & React Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '500' }}>Ultra-Responsive Performance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '500' }}>Clean Parametric Design</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '500' }}>Enterprise Scalability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Matrix & Stats */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Asentus High-Tech Architecture"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(12, 14, 18, 0.9) 0%, transparent 60%)'
              }} />
            </div>

            {/* Floating Stat Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginTop: '-40px',
              position: 'relative',
              zIndex: 2,
              padding: '0 16px'
            }}>
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(19, 23, 31, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '6px',
                    padding: '18px 20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '4px'
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
