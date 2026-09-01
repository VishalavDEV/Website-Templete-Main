import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { CAPABILITIES_DATA, PROCESS_STAGES } from '../data/corporateData';

export default function CapabilitiesPage() {
  const [activeCapId, setActiveCapId] = useState("01");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCap = (id) => {
    setActiveCapId(prev => (prev === id ? null : id));
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* 10. Header */}
      <section style={{ padding: '80px 0 90px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>
            CAPABILITIES // SYSTEM ENGINEERING
          </div>
          <h1 className="edit-heading-display" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.8vw, 68px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
            What we engineer.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--c-eucalyptus)', maxWidth: '780px', marginTop: '20px', lineHeight: '1.6' }}>
            Comprehensive technical capabilities designed to architect, modernize, and maintain resilient digital backbones for Fortune 500 organizations.
          </p>
        </div>
      </section>

      {/* 10. Primarily Horizontal Service Directory Rows */}
      <section style={{ background: 'var(--c-charcoal)', color: 'var(--c-ivory)', padding: '90px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-asym">
          <div style={{ borderTop: '1px solid var(--border-dark)' }}>
            {CAPABILITIES_DATA.map((cap) => {
              const isExpanded = activeCapId === cap.id;
              return (
                <div key={cap.id} style={{ borderBottom: '1px solid var(--border-dark)', background: isExpanded ? 'var(--c-charcoal-surface)' : 'transparent', transition: 'all 0.3s ease' }}>
                  <div
                    onClick={() => toggleCap(cap.id)}
                    style={{ display: 'grid', gridTemplateColumns: '80px 1.2fr 1fr 50px', alignItems: 'center', padding: '36px 20px', cursor: 'pointer' }}
                  >
                    <span className="asym-service-row-num">{cap.id}</span>
                    <h3 className="asym-service-row-title">{cap.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-eucalyptus-light)', textTransform: 'uppercase' }}>{cap.category}</span>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', color: isExpanded ? 'var(--c-copper)' : 'var(--c-stone)' }}>
                      <ChevronDown
                        size={22}
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div style={{ padding: '0 32px 48px 100px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }}>
                      <div>
                        <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
                          SPECIFICATION // {cap.code}
                        </div>
                        <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.6', marginBottom: '16px', fontWeight: 600 }}>
                          {cap.description}
                        </p>
                        <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.65', marginBottom: '22px' }}>
                          {cap.details}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {cap.specs.map((spec, sIdx) => (
                            <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                              <Check size={14} color="var(--c-copper)" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ background: 'var(--c-charcoal)', border: '1px solid var(--border-dark)', padding: '32px', borderRadius: '2px' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-eucalyptus-light)', textTransform: 'uppercase', marginBottom: '14px' }}>
                          CORE TECHNOLOGIES
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                          {cap.technologies.map((tech, tIdx) => (
                            <span key={tIdx} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-copper)', background: 'var(--c-charcoal-surface)', padding: '6px 12px', borderRadius: '2px', border: '1px solid var(--border-dark)' }}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link to="/contact" className="btn-copper-primary" style={{ padding: '12px 22px', fontSize: '11px' }}>
                          <span>Request Architecture Specs</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Lifecycle */}
      <section style={{ padding: '120px 0' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>EXECUTION FRAMEWORK</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>SYSTEMS ENGINEERING LIFECYCLE</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {PROCESS_STAGES.map((stage) => (
              <div key={stage.step} style={{ background: 'var(--c-ivory-pure)', border: '1px solid var(--border-light)', padding: '30px 20px', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--c-copper)', marginBottom: '8px' }}>
                  {stage.step}
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '6px' }}>
                  {stage.name}
                </h4>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '10px' }}>
                  {stage.tagline}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus)', lineHeight: '1.5' }}>
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
