import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    "Industry Experts & Thought Leaders",
    "High-Impact Networking Opportunities",
    "Live Interactive Workshops & Masterclasses",
    "Innovation & Deeptech Showcase",
    "Startup Pitch & Investor Zone",
    "Career Acceleration Opportunities"
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Column: Image with Floating Badge */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              alt="Conference Auditorium"
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'var(--bg-glass)', backdropFilter: 'blur(12px)', border: '1px solid var(--border-glow)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                10th Edition
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Where ideas become innovation
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <span className="section-tag">ABOUT EVENTORA</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Where Ideas Become <span className="gradient-text">Innovation</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Eventora brings together visionary software architects, AI researchers, founders, and executives for three days of immersive learning, hands-on masterclasses, and executive networking.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary">
              LEARN MORE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
