import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import { CASE_STUDIES } from '../data/content';

export default function WorkShowcase({ cases = CASE_STUDIES, limit = null }) {
  const displayCases = limit ? cases.slice(0, limit) : cases;

  return (
    <div>
      {displayCases.map((item, index) => {
        const layoutType = index % 3;

        // Project 01 Composition: Large Right-Offset Image with Information on Left
        if (layoutType === 0) {
          return (
            <div key={item.id} className="work-comp-right-offset">
              {/* Information Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                    {item.number} / {item.sector}
                  </p>
                  <Link
                    to={`/case-studies/${item.id}`}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: 'var(--text-charcoal)', display: 'block', lineHeight: '1.1' }}
                  >
                    {item.title}
                  </Link>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.summary}
                </p>

                <div className="work-metric-box">
                  <div className="work-metric-number">{item.headlineMetric}</div>
                  <div className="work-metric-label">{item.metricLabel}</div>
                  {item.secondaryMetric && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                      {item.secondaryMetric}
                    </p>
                  )}
                </div>

                <div>
                  <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                    <span>View case study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Large Image on Right */}
              <div>
                <Link to={`/case-studies/${item.id}`} className="work-main-img-wrap" style={{ display: 'block' }}>
                  <img src={item.image} alt={item.title} />
                  <div className="work-badge">
                    {item.number} / {item.sector}
                  </div>
                </Link>
              </div>
            </div>
          );
        }

        // Project 02 Composition: Left Large Image + Overlapping Secondary Detail Image
        if (layoutType === 1) {
          return (
            <div key={item.id} className="work-comp-overlapping">
              {/* Layered Image Group on Left */}
              <div className="layered-image-group">
                <Link to={`/case-studies/${item.id}`} className="layered-primary-frame" style={{ display: 'block' }}>
                  <img src={item.image} alt={item.title} />
                  <div className="work-badge">
                    {item.number} / {item.sector}
                  </div>
                </Link>

                <div className="layered-secondary-frame">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                    alt="Operational Infrastructure Detail"
                  />
                </div>
              </div>

              {/* Information Column on Right */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                    {item.number} / {item.sector}
                  </p>
                  <Link
                    to={`/case-studies/${item.id}`}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: 'var(--text-charcoal)', display: 'block', lineHeight: '1.1' }}
                  >
                    {item.title}
                  </Link>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.summary}
                </p>

                <div className="work-metric-box">
                  <div className="work-metric-number">{item.headlineMetric}</div>
                  <div className="work-metric-label">{item.metricLabel}</div>
                  {item.secondaryMetric && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                      {item.secondaryMetric}
                    </p>
                  )}
                </div>

                <div>
                  <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                    <span>View case study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        }

        // Project 03 Composition: Wide Panoramic Landscape Image with Information Underneath
        return (
          <div key={item.id} className="work-comp-panoramic">
            {/* Wide Panoramic Image */}
            <Link to={`/case-studies/${item.id}`} className="panoramic-img-wrap" style={{ display: 'block' }}>
              <img src={item.image} alt={item.title} />
              <div className="work-badge">
                {item.number} / {item.sector}
              </div>
            </Link>

            {/* Split Information Underneath */}
            <div className="panoramic-content-grid">
              <div>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                  {item.number} / {item.sector}
                </p>
                <Link
                  to={`/case-studies/${item.id}`}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', color: 'var(--text-charcoal)', display: 'block', lineHeight: '1.1' }}
                >
                  {item.title}
                </Link>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem' }}>
                  {item.summary}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                <div className="work-metric-box" style={{ margin: 0 }}>
                  <div className="work-metric-number">{item.headlineMetric}</div>
                  <div className="work-metric-label">{item.metricLabel}</div>
                  {item.secondaryMetric && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                      {item.secondaryMetric}
                    </p>
                  )}
                </div>

                <div>
                  <Link to={`/case-studies/${item.id}`} className="btn-editorial-underline">
                    <span>View case study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
