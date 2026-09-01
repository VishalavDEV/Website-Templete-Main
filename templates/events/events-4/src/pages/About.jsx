import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="BUILT FOR THOSE WHO REFUSE TO QUIT" title="ABOUT VORTEX FORGE FITNESS" />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-yellow)', marginBottom: '1rem' }}>
              OUR HISTORY & LEGACY
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Founded in 2016, Vortex Forge Fitness started as an underground powerlifting warehouse and has grown into a premier 25,000 sq. ft. athletic performance facility. Built on raw iron, sweat, and scientific periodization, we empower members to surpass physical standards.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
              alt="Gym History"
              style={{ width: '100%', borderRadius: '6px', border: '2px solid var(--color-yellow)' }}
            />
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          <div className="diagonal-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.4rem', marginBottom: '1rem' }}>🎯 OUR MISSION</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              To forge resilient minds and unbreakable bodies through elite strength coaching and scientific programming.
            </p>
          </div>
          <div className="diagonal-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ color: 'var(--color-purple)', fontSize: '1.4rem', marginBottom: '1rem' }}>👁 OUR VISION</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              To become the global standard for competitive fitness event execution and high-performance training.
            </p>
          </div>
          <div className="diagonal-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ color: 'var(--color-yellow)', fontSize: '1.4rem', marginBottom: '1rem' }}>⚡ CORE VALUES</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Integrity, Discipline, Scientific Rigor, Inclusivity, and Unrelenting Passion.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button to="/registration" variant="primary">JOIN VORTEX FORGE TODAY</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
