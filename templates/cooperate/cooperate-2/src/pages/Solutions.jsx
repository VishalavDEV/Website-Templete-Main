import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';
import { SOLUTIONS } from '../data/content';

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'TRANSFORMATION', 'SUSTAINABILITY & ENERGY', 'OPERATIONS & GEOSTRATEGY', 'TECHNOLOGY', 'CORPORATE STRATEGY'];

  const filteredSolutions = activeCategory === 'ALL'
    ? SOLUTIONS
    : SOLUTIONS.filter(s => s.category.includes(activeCategory));

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                STRATEGIC SOLUTIONS & PLAYBOOKS
              </p>
              <h1 className="page-hero-title">
                Cross-functional solutions for <br />
                <span className="italic font-serif">mission-critical mandates.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                When complex challenges cross traditional divisional lines, ORION deploys integrated task forces combining capital strategy, industrial engineering, and autonomous technologies.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                  alt="Global Systems Architecture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODULAR FILTER TABS                                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                backgroundColor: activeCategory === cat ? 'var(--text-charcoal)' : 'transparent',
                color: activeCategory === cat ? 'var(--bg-cream)' : 'var(--text-secondary)',
                fontWeight: activeCategory === cat ? 700 : 400,
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LARGE HORIZONTAL SOLUTION ROWS                                */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container section-py">
        <div className="solutions-editorial-list">
          {filteredSolutions.map((sol, index) => (
            <React.Fragment key={sol.id}>
              <Link to="/contact" className="solutions-editorial-row">
                <div className="solutions-row-grid">
                  
                  {/* Number */}
                  <div className="solutions-row-num">
                    0{index + 1}
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="font-mono text-terracotta" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {sol.category}
                    </span>
                    <h3 className="solutions-row-title" style={{ marginTop: '0.25rem' }}>
                      {sol.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="solutions-row-desc">
                    <p>{sol.description}</p>
                    <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
                      Impact: {sol.impact}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="solutions-row-action">
                    <span>Briefing</span>
                    <ArrowRight size={14} />
                  </div>

                </div>
              </Link>

              {/* Large Visual Section between selected rows */}
              {index === 2 && (
                <div className="solutions-visual-break">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                    alt="Strategic Enterprise Infrastructure"
                  />
                  <div className="work-badge">
                    CROSS-DISCIPLINARY EXECUTION
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* BESPOKE TASK FORCE BANNER                                     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="values-dark-section">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '580px' }}>
            <p className="font-mono text-ochre" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Custom Mandates</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--bg-cream)' }}>
              Need a bespoke cross-functional task force?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--bg-cream-300)', marginTop: '0.5rem', lineHeight: '1.6' }}>
              We design specialized advisory squads for unique geopolitical, regulatory, and hostile market scenarios.
            </p>
          </div>
          <Link to="/contact" className="btn-editorial-primary" style={{ backgroundColor: 'var(--bg-cream)', color: 'var(--text-charcoal)' }}>
            <span>Consult Managing Partner</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
