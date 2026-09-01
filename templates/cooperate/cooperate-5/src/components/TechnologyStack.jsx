import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TECH_STACK_LAYERS } from '../data/corporateData';

export default function TechnologyStack() {
  return (
    <section className="section-forest" id="technology">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps-forest">ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="editorial-heading-lg" style={{ color: 'var(--text-light-primary)' }}>
            THE TECHNOLOGY STACK
          </h2>
          <p className="editorial-desc">
            An end-to-end layered architecture designed for extreme scale, sovereign isolation, deterministic computation, and zero downtime.
          </p>
        </div>

        {/* Large Alternating Architectural Panels */}
        <div className="tech-layers-vertical-stack">
          {TECH_STACK_LAYERS.map((layer, index) => {
            const isAlternate = index % 2 === 1;
            return (
              <div key={layer.id} className={`tech-panel-card ${isAlternate ? 'alternate' : ''}`}>
                <div className="tech-panel-content">
                  <div className="tech-panel-num">{layer.layerNumber}</div>
                  <h3 className="tech-panel-title">{layer.name}</h3>
                  <div className="tech-panel-role">{layer.role}</div>
                  <p className="tech-panel-desc">{layer.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {layer.protocols.map((proto, pIdx) => (
                      <span key={pIdx} style={{ fontSize: '11px', color: 'var(--color-sage)', background: 'var(--bg-forest-card)', padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--border-forest)' }}>
                        {proto}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link to="/technology" className="btn-capsule btn-capsule-outline-light" style={{ padding: '8px 20px', fontSize: '11px' }}>
                      <span>View Tier Specs</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                <div className="tech-panel-visual">
                  <div className="tech-visual-metric">
                    <Activity size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--color-copper)' }} />
                    <span>{layer.metrics}</span>
                  </div>

                  <div style={{ fontSize: '11px', color: 'var(--color-sage)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
                    KEY SUBSYSTEMS
                  </div>

                  <div className="tech-components-grid">
                    {layer.components.map((comp, cIdx) => (
                      <div key={cIdx} className="tech-comp-pill">
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
