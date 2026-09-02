import React from 'react';
import { LEADERSHIP_PROFILES } from '../data/corporateData';

export default function Leadership() {
  return (
    <section className="section-ivory" id="leadership">
      <div className="container">
        {/* Huge Editorial Testimonial Quotation */}
        <div className="testimonial-huge-wrap">
          <div className="quote-mark-symbol">“</div>
          <blockquote className="testimonial-quote-text">
            Axiom Systems re-architected our core trade matching engine to achieve sub-millisecond determinism without a single second of production downtime.
          </blockquote>
          <div className="testimonial-client-meta">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Dr. Marcus Vance"
              className="testimonial-avatar"
            />
            <div style={{ textAlign: 'left' }}>
              <div className="testimonial-author-name">Dr. Marcus Vance</div>
              <div className="testimonial-author-role">Chief Executive Officer & Founder // AXIOM SYSTEMS</div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'var(--border-light)', margin: '80px 0 60px' }}></div>

        {/* Editorial Leadership Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">EXECUTIVE ARCHITECTS</span>
          </div>
          <h2 className="editorial-heading-lg">ENGINEERING LEADERSHIP</h2>
          <p className="editorial-desc">
            Guided by veteran systems architects, distributed systems researchers, and cybersecurity pioneers.
          </p>
        </div>

        {/* Clean Editorial Leadership Portraits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {LEADERSHIP_PROFILES.map((leader, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '340px', borderRadius: '16px 4px 16px 4px', overflow: 'hidden', marginBottom: '18px', background: 'var(--bg-forest)' }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  loading="lazy"
                />
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: 'var(--bg-forest)', marginBottom: '4px' }}>
                {leader.name}
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-copper)', textTransform: 'uppercase', marginBottom: '10px' }}>
                {leader.role}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-dark-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                {leader.bio}
              </p>
              <div style={{ fontSize: '11px', color: 'var(--text-dark-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
                <strong>FOCUS:</strong> {leader.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
