import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="section-ivory" style={{ padding: '80px 0 120px' }}>
      <div className="container">
        <div className="dramatic-cta-box">
          <div className="editorial-tag" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <div className="editorial-tag-line" style={{ background: 'var(--color-copper)' }}></div>
            <span className="label-caps-forest" style={{ color: 'var(--color-copper-light)' }}>ENGAGE OUR ARCHITECTS</span>
          </div>

          <h2 className="dramatic-cta-heading">
            READY TO ENGINEER WHAT'S NEXT?
          </h2>

          <p className="dramatic-cta-desc">
            Let's discuss the technology challenges shaping your next stage of growth.
          </p>

          <div className="dramatic-cta-actions">
            <Link to="/contact" className="btn-capsule btn-capsule-copper" style={{ padding: '18px 36px', fontSize: '14px' }}>
              <span>Start a Conversation</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={14} />
              </div>
            </Link>

            <Link to="/capabilities" className="btn-capsule btn-capsule-outline-light" style={{ padding: '18px 32px', fontSize: '14px' }}>
              <span>View Our Capabilities</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
