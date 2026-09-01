import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/corporateData';

export default function Industries() {
  const [activeIndIndex, setActiveIndIndex] = useState(0);
  const currentIndustry = INDUSTRIES_DATA[activeIndIndex];

  return (
    <section className="section-warm" id="industries">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">SECTOR SPECIALIZATION</span>
          </div>
          <h2 className="editorial-heading-lg">ENGINEERED FOR INDUSTRY COMPLEXITY</h2>
          <p className="editorial-desc">
            Tailored mission-critical architectures built to satisfy strict regulatory compliance, extreme transaction volumes, and operational durability.
          </p>
        </div>

        {/* Interactive Vertical Split Selector */}
        <div className="industries-vertical-split">
          {/* Left: Vertical Selector List */}
          <div className="industry-vertical-nav">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <button
                key={ind.id}
                className={`industry-v-btn ${activeIndIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndIndex(idx)}
              >
                {ind.title}
              </button>
            ))}
          </div>

          {/* Right: Large Visual & Specification Panel */}
          <div className="industry-display-panel">
            <div className="label-caps" style={{ color: 'var(--color-copper)', marginBottom: '8px' }}>
              SECTOR PORTFOLIO // {currentIndustry.code}
            </div>

            <h3 className="ind-editorial-title">{currentIndustry.title}</h3>
            <div className="ind-editorial-sub">{currentIndustry.subtitle}</div>
            <p className="ind-editorial-desc">{currentIndustry.description}</p>

            {/* Impact Metric Banner */}
            <div className="ind-metric-card-editorial">
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-sage)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  MEASURED OUTCOME
                </div>
                <div className="ind-metric-value-huge">{currentIndustry.metric}</div>
              </div>
              <div style={{ textAlign: 'right', maxWidth: '240px' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-light-secondary)' }}>
                  {currentIndustry.metricLabel}
                </div>
              </div>
            </div>

            {/* Capabilities List */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bg-forest)', marginBottom: '14px' }}>
                KEY ENTERPRISE CAPABILITIES
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentIndustry.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--text-dark-secondary)' }}>
                    <span style={{ color: 'var(--color-copper)', fontWeight: 'bold' }}>✓</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link to="/industries" className="btn-capsule btn-capsule-primary">
                <span>View {currentIndustry.title} Architecture</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
