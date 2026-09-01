import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/corporateData';

export default function Capabilities() {
  const [activeCapId, setActiveCapId] = useState("01");

  const toggleCap = (id) => {
    setActiveCapId(prev => (prev === id ? null : id));
  };

  return (
    <section className="section-ivory" id="capabilities">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps">ENGINEERING MATRIX</span>
          </div>
          <h2 className="editorial-heading-lg">WHAT WE ENGINEER</h2>
          <p className="editorial-desc">
            Multi-disciplinary core capabilities architected to modernize legacy enterprise platforms and deploy high-performance intelligent infrastructure.
          </p>
        </div>

        {/* Large Interactive Accordion / List */}
        <div className="services-accordion-list">
          {CAPABILITIES_DATA.map((cap) => {
            const isExpanded = activeCapId === cap.id;
            return (
              <div key={cap.id} className={`service-accordion-row ${isExpanded ? 'active' : ''}`}>
                <div 
                  className="service-accordion-header"
                  onClick={() => toggleCap(cap.id)}
                >
                  <span className="service-idx-num">{cap.id}</span>
                  <h3 className="service-name-txt">{cap.title}</h3>
                  <span className="service-category-tag">{cap.category}</span>
                  <div className="service-toggle-icon">
                    <Plus size={18} />
                  </div>
                </div>

                {isExpanded && (
                  <div className="service-accordion-body">
                    <div>
                      <p className="service-body-desc">{cap.description}</p>
                      <p style={{ fontSize: '14px', color: 'var(--text-dark-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                        {cap.details}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {cap.specs.map((spec, sIdx) => (
                          <div key={sIdx} style={{ fontSize: '13px', color: 'var(--bg-forest)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--color-copper)' }}>—</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderLeft: '1px solid var(--border-stone)', paddingLeft: '30px' }}>
                      <div className="label-caps" style={{ color: 'var(--text-dark-muted)', marginBottom: '14px' }}>
                        CORE TECHNOLOGIES
                      </div>
                      <div className="service-specs-chips">
                        {cap.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="service-chip">{tech}</span>
                        ))}
                      </div>

                      <div style={{ marginTop: '28px' }}>
                        <Link to="/capabilities" className="btn-capsule btn-capsule-primary" style={{ padding: '10px 22px', fontSize: '11px' }}>
                          <span>Full Specification</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
