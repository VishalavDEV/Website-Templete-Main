import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyIntro() {
  return (
    <section className="section-forest">
      <div className="container">
        <div className="about-asymmetric-wrap">
          {/* Column 1: Oversized Architectural Image + Background Number Watermark */}
          <div className="about-image-col">
            <div className="about-watermark-num">01</div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"
              alt="Engineering & Complex Systems Architecture"
              className="about-oversized-img"
            />
          </div>

          {/* Column 2: Editorial Text & Narrative */}
          <div className="about-content-col">
            <div className="editorial-tag">
              <div className="editorial-tag-line"></div>
              <span className="label-caps-forest">COMPANY // SYSTEM PRINCIPLES</span>
            </div>

            <h2 className="editorial-heading-lg" style={{ color: 'var(--text-light-primary)' }}>
              Technology built for complexity.
            </h2>

            <p className="about-lead-text">
              Axiom Systems partners with Fortune 500 enterprises and critical infrastructure operators to design, engineer, and deploy high-concurrency systems that remain deterministic under extreme scale.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '28px' }}>
              When operational stakes are non-negotiable—from real-time financial clearing to distributed manufacturing telemetry and sovereign cloud enclaves—we engineer platforms that eliminate systemic fragility.
            </p>

            {/* Principles List */}
            <div className="about-principles-list">
              <div className="about-principle-row">
                <div className="principle-bullet"></div>
                <div>
                  <div className="principle-title">DETERMINISTIC ARCHITECTURE</div>
                  <div className="principle-desc">Eliminating unpredictable state divergence through formal mathematical verification.</div>
                </div>
              </div>

              <div className="about-principle-row">
                <div className="principle-bullet"></div>
                <div>
                  <div className="principle-title">HYPERSCALE CONCURRENCY</div>
                  <div className="principle-desc">Sub-millisecond event streaming topologies handling millions of transactions per second.</div>
                </div>
              </div>

              <div className="about-principle-row">
                <div className="principle-bullet"></div>
                <div>
                  <div className="principle-title">SOVEREIGN SECURITY</div>
                  <div className="principle-desc">Zero-trust cryptographic isolation and hardware root-of-trust protection across all operating layers.</div>
                </div>
              </div>
            </div>

            <div>
              <Link to="/company" className="btn-capsule btn-capsule-outline-light">
                <span>Explore Our Architecture Philosophy</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
