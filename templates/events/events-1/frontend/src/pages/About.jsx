import React from 'react';
import EventStats from '../components/EventStats';
import WhyAttend from '../components/WhyAttend';

export default function About({ onOpenRegisterModal }) {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">OUR MISSION & VISION</span>
          <h1 className="page-title">
            About <span className="gradient-text">EVENTORA</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Connect. Learn. Experience. Empowering developers, researchers, and founders worldwide.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Bridging Technology, Leadership & Community
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Founded a decade ago, Eventora has grown into one of Asia's premier annual technology conference platforms. Each year, thousands of engineers, researchers, and executive pioneers gather to explore solutions to complex computing challenges.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our 2026 edition in Chennai features 50+ keynote speakers across 3 dedicated tracks: Frontier AI Systems, High-Scale Cloud Architectures, and Developer Product Leadership.
              </p>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                alt="Conference Audience"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <EventStats />
      <WhyAttend />
    </div>
  );
}
