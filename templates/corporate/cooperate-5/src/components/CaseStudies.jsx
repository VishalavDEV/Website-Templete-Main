import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/corporateData';

const CASE_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
];

export default function CaseStudies() {
  return (
    <section className="section-ivory" id="cases">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">PROVEN DELIVERIES</span>
          </div>
          <h2 className="editorial-heading-lg">ENGINEERING IN ACTION</h2>
          <p className="editorial-desc">
            Measurable operational transformations across mission-critical enterprise environments.
          </p>
        </div>

        {/* Full-Width Horizontal Case Study Gallery */}
        <div className="case-gallery-stack">
          {CASE_STUDIES.map((cs, idx) => {
            const isReversed = idx % 2 === 1;
            const imgUrl = CASE_IMAGES[idx % CASE_IMAGES.length];

            return (
              <div key={cs.id} className={`case-gallery-item ${isReversed ? 'reversed' : ''}`}>
                <div className="case-gallery-info">
                  <div>
                    <div className="case-gallery-num">0{idx + 1}</div>
                    <h3 className="case-gallery-title">{cs.title}</h3>
                    <div style={{ fontSize: '13px', color: 'var(--color-copper)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                      {cs.client} // {cs.industry}
                    </div>

                    <p className="case-gallery-sub">{cs.subtitle}</p>

                    <div className="case-gallery-impact">
                      <div className="case-impact-num-lg">{cs.impactMetric}</div>
                      <div className="case-impact-txt-sm">{cs.impactLabel}</div>
                    </div>

                    <p style={{ fontSize: '14px', color: 'var(--text-dark-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                      {cs.overview}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {cs.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="service-chip" style={{ fontSize: '11px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link to="/work" className="btn-capsule btn-capsule-primary" style={{ padding: '10px 24px', fontSize: '11px' }}>
                      <span>View Project Architecture</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                <div className="case-gallery-image">
                  <img
                    src={imgUrl}
                    alt={cs.title}
                    className="case-img-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
