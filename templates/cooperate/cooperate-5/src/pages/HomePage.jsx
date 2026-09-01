import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAND, CAPABILITIES_DATA, CASE_STUDIES, INDUSTRIES_DATA, TECH_STACK_LAYERS, INSIGHTS_ARTICLES } from '../data/corporateData';

export default function HomePage() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState(0);
  const [selectedTechNode, setSelectedTechNode] = useState(TECH_STACK_LAYERS[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentIndustry = INDUSTRIES_DATA[selectedIndustryIdx];

  const PROCESS_STAGES_JOURNEY = [
    { num: "01", name: "DISCOVER", desc: "Audit existing telemetry, system latency, and vulnerabilities across enterprise systems.", side: "node-left" },
    { num: "02", name: "DEFINE", desc: "Formulate deterministic architecture contracts and multi-region failover models.", side: "node-right" },
    { num: "03", name: "DESIGN", desc: "Engineer sub-millisecond execution kernels and high-throughput data lakehouses.", side: "node-left" },
    { num: "04", name: "BUILD", desc: "Deploy polyglot microservices, event-driven pipelines, and zero-trust security enclaves.", side: "node-right" },
    { num: "05", name: "LAUNCH", desc: "Zero-downtime cutover with automated shadow canary verification.", side: "node-left" },
    { num: "06", name: "SCALE", desc: "Autonomous capacity rebalancing and continuous 24/7 telemetry optimization.", side: "node-right" }
  ];

  // Alternating offsets for services (left, slight offset, right-shifted, left, center-offset, right-shifted)
  const SERVICE_RHYTHM_CLASSES = [
    "offset-left",
    "offset-slight",
    "offset-right",
    "offset-left",
    "offset-slight",
    "offset-right"
  ];

  return (
    <div>
      {/* 3 & 4. Homepage Hero — Repositioned Composition */}
      <section className="asym-hero-section">
        <div className="container-asym">
          <div style={{ marginBottom: '20px' }}>
            <span className="meta-tag-copper">01 / CORPORATE TECHNOLOGY</span>
          </div>

          <div className="asym-hero-body-grid">
            {/* Heading starting 10-15% from left edge with bounded widths */}
            <div style={{ paddingLeft: '8%' }}>
              <h1 className="asym-hero-heading-bounded">
                Engineering the systems that power modern business.
              </h1>

              <p className="asym-hero-desc-bounded">
                We combine technology, intelligence, and engineering to create resilient digital systems for organizations operating at scale.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-copper-primary">
                  <span>Start a Conversation</span>
                  <ArrowRight size={14} />
                </Link>

                <Link to="/capabilities" className="btn-charcoal-outline">
                  <span>Explore Capabilities</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Large Image extending vertically */}
            <div style={{ position: 'relative' }}>
              <img
                src="/images/hero_architecture.jpg"
                alt="Architectural Systems Engineering"
                className="asym-hero-large-img"
              />

              <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '12px 18px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '2px', zIndex: 3 }}>
                EST. 2014 // GLOBAL DEPLOYMENTS
              </div>
            </div>
          </div>

          {/* Bottom Rail */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '20px', marginTop: '40px' }}>
            <span className="meta-tag-eucalyptus">01 / INTRODUCTION</span>
            <span className="meta-tag-copper">SCROLL ↓</span>
          </div>
        </div>
      </section>

      {/* 5 & 6. About Section — 3-Column Asymmetric Structure */}
      <section className="asym-about-section">
        <div className="container-asym">
          <div className="asym-about-3col-grid">
            {/* Left Col: Section Number & Label */}
            <div className="asym-about-col-num">
              <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>ABOUT</div>
              01
            </div>

            {/* Center Col: Text Narrative */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--c-charcoal)', marginBottom: '22px', maxWidth: '580px' }}>
                Technology becomes powerful when strategy, design, and engineering move as one.
              </h2>

              <p style={{ fontSize: '17px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '18px', maxWidth: '520px' }}>
                Axiom Systems partners with Fortune 500 enterprises and critical infrastructure operators to design, engineer, and deploy high-concurrency systems that remain deterministic under extreme scale.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '30px', maxWidth: '520px' }}>
                When operational stakes are non-negotiable—from real-time financial clearing to distributed manufacturing telemetry—we engineer platforms that eliminate systemic fragility.
              </p>

              <Link to="/company" className="btn-copper-primary">
                <span>Read Complete Dossier</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right Col: Large Image with Different Starting Position */}
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Enterprise Architecture"
                className="asym-about-img"
              />

              <div className="asym-about-overlap-stat">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', fontWeight: 700, color: 'var(--c-copper)', lineHeight: 1 }}>
                  150+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--c-eucalyptus-light)', textTransform: 'uppercase', marginTop: '4px' }}>
                  PROJECTS DELIVERED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. Services — Full-Width Rows with Alternating Rhythms */}
      <section className="asym-services-section">
        <div className="container-asym">
          {/* Section Heading Style B (Right-Aligned / Centered-Offset) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', marginBottom: '40px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>02 / SERVICES</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 50px)', fontWeight: 700, color: '#FFFFFF' }}>
              WHAT WE ENGINEER
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-dark)' }}>
            {CAPABILITIES_DATA.map((cap, idx) => {
              const isActive = activeServiceIdx === idx;
              return (
                <div
                  key={cap.id}
                  className={`asym-service-row ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveServiceIdx(idx)}
                  onMouseEnter={() => setActiveServiceIdx(idx)}
                >
                  <span className="asym-service-row-num">{cap.id}</span>
                  <div>
                    <h3 className="asym-service-row-title">{cap.title}</h3>
                    <p className="asym-service-row-desc" style={{ marginTop: '6px', maxWidth: '580px' }}>
                      {cap.description}
                    </p>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--c-eucalyptus-light)', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>
                    {cap.code}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--c-copper)' }}>
                    <ArrowRight size={22} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Specification Detail Card */}
          <div style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '36px', marginTop: '30px', borderRadius: '2px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
            <div>
              <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>
                ACTIVE SPECIFICATION // {CAPABILITIES_DATA[activeServiceIdx].code}
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                {CAPABILITIES_DATA[activeServiceIdx].title}
              </h4>
              <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6', marginBottom: '18px' }}>
                {CAPABILITIES_DATA[activeServiceIdx].details}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {CAPABILITIES_DATA[activeServiceIdx].specs.map((spec, sIdx) => (
                  <div key={sIdx} style={{ fontSize: '13px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--c-copper)' }}>▸</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-dark)', paddingLeft: '30px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-eucalyptus-light)', textTransform: 'uppercase', marginBottom: '12px' }}>
                CORE TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {CAPABILITIES_DATA[activeServiceIdx].technologies.map((t, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-copper)', background: 'var(--c-charcoal)', padding: '6px 12px', borderRadius: '2px', border: '1px solid var(--border-dark)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <Link to="/capabilities" className="btn-copper-primary" style={{ padding: '12px 22px', fontSize: '11px' }}>
                <span>View Complete Specifications</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Solutions — Command Platform Architecture (Asymmetric Command Split) */}
      <section className="asym-solutions-section">
        <div className="container-asym">
          <div style={{ marginBottom: '36px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>03 / SOLUTIONS</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
              COMMAND PLATFORM ARCHITECTURE →
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '36px', alignItems: 'stretch' }}>
            {/* Left: Nucleus Command Hub */}
            <div style={{ background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '40px 36px', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(23, 34, 27, 0.15)' }}>
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
                  NUCLEUS // SYSTEM ENGINE
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                  BUSINESS CORE
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.65', marginBottom: '24px' }}>
                  Unified determinism coordinating distributed microservices, edge inference kernels, and multi-region data meshes.
                </p>

                <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-copper)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    ACTIVE LAYER // {selectedTechNode.layerNumber}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {selectedTechNode.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.5' }}>
                    {selectedTechNode.role}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <Link to="/technology" className="btn-copper-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Inspect Tech Stack</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: 6 Clean Architectural Nodes (3x2 Grid) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
              {TECH_STACK_LAYERS.map((node) => {
                const isSelected = selectedTechNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    className={`asym-radial-node-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedTechNode(node)}
                    style={{
                      background: isSelected ? '#FFFFFF' : 'var(--c-ivory-pure)',
                      borderColor: isSelected ? 'var(--c-copper)' : 'var(--border-light)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="meta-tag-copper">{node.layerNumber}</span>
                        {isSelected && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-copper)' }} />}
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '4px' }}>
                        {node.name}
                      </h4>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus)', lineHeight: '1.45' }}>
                      {node.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Industries — Left Navigation + Right Content */}
      <section className="asym-industries-section">
        <div className="container-asym">
          {/* Section Heading Style C (Header Left + Supporting Description Right) */}
          <div className="heading-style-c">
            <div>
              <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>04 / INDUSTRIES</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 50px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
                SECTORS WE TRANSFORM
              </h2>
            </div>
            <p style={{ fontSize: '17px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>
              Specialized architectural blueprints engineered for strict compliance, high concurrency, and extreme reliability.
            </p>
          </div>

          <div className="asym-industries-split">
            {/* Left Vertical Industry Selector (Parallel Alignment) */}
            <div className="asym-industry-nav-list">
              {INDUSTRIES_DATA.map((ind, idx) => (
                <button
                  key={ind.id}
                  className={`asym-industry-nav-item ${selectedIndustryIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedIndustryIdx(idx)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--c-copper)', fontWeight: 700 }}>
                      0{idx + 1}
                    </span>
                    <span>{ind.title}</span>
                  </span>
                  <span style={{ color: selectedIndustryIdx === idx ? 'var(--c-copper)' : 'transparent', transition: 'all 0.2s ease', fontSize: '18px' }}>
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Right Selected Content Showcase (Compact & Balanced) */}
            <div className="asym-industry-showcase-pane">
              {/* Industry Architectural Photo */}
              <div style={{ marginBottom: '18px', overflow: 'hidden', borderRadius: '2px', height: '170px', position: 'relative' }}>
                <img
                  src={
                    selectedIndustryIdx === 0
                      ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                      : selectedIndustryIdx === 1
                      ? "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                      : selectedIndustryIdx === 2
                      ? "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1000&q=80"
                      : selectedIndustryIdx === 3
                      ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                      : selectedIndustryIdx === 4
                      ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                      : "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  }
                  alt={currentIndustry.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                />
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '2px' }}>
                  {currentIndustry.code}
                </div>
              </div>

              <div className="meta-tag-copper" style={{ marginBottom: '6px' }}>
                SPECIFICATION // {currentIndustry.code}
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '4px' }}>
                {currentIndustry.title}
              </h3>

              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-copper)', marginBottom: '12px' }}>
                {currentIndustry.subtitle}
              </div>

              <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus)', lineHeight: '1.6', marginBottom: '18px' }}>
                {currentIndustry.description}
              </p>

              {/* Benchmark Metric Card (Compact) */}
              <div style={{ background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '16px 20px', borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <div className="meta-tag-eucalyptus" style={{ color: 'var(--c-eucalyptus-light)', fontSize: '10px', marginBottom: '2px' }}>
                    MEASURED BENCHMARK
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--c-copper)' }}>
                    {currentIndustry.metric}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--c-eucalyptus-light)', textAlign: 'right', maxWidth: '200px' }}>
                  {currentIndustry.metricLabel}
                </div>
              </div>

              <Link to="/industries" className="btn-copper-primary" style={{ padding: '12px 22px', fontSize: '12px' }}>
                <span>View {currentIndustry.title} Blueprints</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Projects — 4 Distinct Asymmetric Compositions */}
      <section style={{ padding: '130px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>05 / PORTFOLIO</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 50px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
              CASE STUDY PRESENTATIONS
            </h2>
          </div>

          <div className="asym-projects-stream">
            {/* Project 01: Text Left / Image Right */}
            <div className="asym-proj-comp-01">
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 01 // {CASE_STUDIES[0].industry}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[0].title}
                </h3>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '16px' }}>CLIENT: {CASE_STUDIES[0].client}</div>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '22px' }}>
                  {CASE_STUDIES[0].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '16px', marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[0].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[0].impactLabel}</div>
                </div>
                <Link to="/work" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80" alt={CASE_STUDIES[0].title} className="asym-proj-img" />
              </div>
            </div>

            {/* Project 02: Image Left / Text Right */}
            <div className="asym-proj-comp-02">
              <div>
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt={CASE_STUDIES[1].title} className="asym-proj-img" />
              </div>
              <div>
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 02 // {CASE_STUDIES[1].industry}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[1].title}
                </h3>
                <div className="meta-tag-eucalyptus" style={{ marginBottom: '16px' }}>CLIENT: {CASE_STUDIES[1].client}</div>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '22px' }}>
                  {CASE_STUDIES[1].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '16px', marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[1].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[1].impactLabel}</div>
                </div>
                <Link to="/work" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 03: Image Centered / Text Positioned Below-Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80" alt={CASE_STUDIES[2].title} className="asym-proj-img" />
              <div style={{ maxWidth: '650px' }}>
                <div className="meta-tag-copper" style={{ marginBottom: '6px' }}>PROJECT 03 // {CASE_STUDIES[2].industry}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                  {CASE_STUDIES[2].title}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.65', marginBottom: '18px' }}>
                  {CASE_STUDIES[2].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '16px', marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[2].impactMetric}</div>
                  <div className="meta-tag-eucalyptus">{CASE_STUDIES[2].impactLabel}</div>
                </div>
                <Link to="/work" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 04: Full-Width Image with Overlapping High-Contrast Card */}
            <div className="asym-proj-comp-03">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80" alt={CASE_STUDIES[3].title} className="asym-proj-bg-img" />
              <div className="asym-proj-overlap-card">
                <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>PROJECT 04 // {CASE_STUDIES[3].industry}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                  {CASE_STUDIES[3].title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {CASE_STUDIES[3].subtitle}
                </p>
                <div style={{ borderLeft: '3px solid var(--c-copper)', paddingLeft: '16px', marginBottom: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', fontWeight: 700, color: 'var(--c-copper)' }}>{CASE_STUDIES[3].impactMetric}</div>
                  <div className="meta-tag-on-dark">{CASE_STUDIES[3].impactLabel}</div>
                </div>
                <Link to="/work" className="btn-copper-primary">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Statistics — Long Horizontal Arrangement with Uneven Spacing */}
      <section className="asym-stats-section">
        <div className="container-asym">
          <div className="asym-stats-long-row">
            <div className="asym-stat-col-uneven elevated">
              <div className="asym-stat-num-serif">150+</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>PROJECTS</div>
              <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', marginTop: '6px' }}>Production-grade distributed platforms deployed globally.</p>
            </div>

            <div className="asym-stat-col-uneven">
              <div className="asym-stat-num-serif">50+</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>CLIENTS</div>
              <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', marginTop: '6px' }}>Fortune 500 institutions and sovereign operators.</p>
            </div>

            <div className="asym-stat-col-uneven">
              <div className="asym-stat-num-serif">12+</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>YEARS</div>
              <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', marginTop: '6px' }}>Continuous engineering innovation and formal verification.</p>
            </div>

            <div className="asym-stat-col-uneven">
              <div className="asym-stat-num-serif">98%</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>SATISFACTION</div>
              <p style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', marginTop: '6px' }}>Measured operational reliability score across deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Process — Structured 6-Stage Process Journey */}
      <section className="asym-process-section">
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>06 / TIMELINE</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
              SYSTEMS EXECUTION FRAMEWORK →
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {PROCESS_STAGES_JOURNEY.map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'var(--c-ivory-pure)',
                  border: '1px solid var(--border-light)',
                  borderTop: '3px solid var(--c-copper)',
                  padding: '32px 28px',
                  borderRadius: '2px',
                  boxShadow: '0 4px 20px rgba(23, 34, 27, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '180px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--c-copper)', lineHeight: 1 }}>{step.num}</span>
                  <span className="meta-tag-copper">{step.name}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Testimonial — Quote 20% from Left, Client Information Far Right */}
      <section className="asym-testimonial-section">
        <div className="container-asym">
          <div className="asym-testimonial-20pct-grid">
            <div>
              <div className="meta-tag-copper" style={{ marginBottom: '16px' }}>EXECUTIVE PERSPECTIVE</div>
              <blockquote className="asym-quote-text-800px">
                “Axiom Systems re-architected our core trade matching engine to achieve sub-millisecond determinism without a single second of production downtime.”
              </blockquote>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Executive Portrait"
                className="asym-testimonial-portrait-edge"
              />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: 'var(--c-charcoal)', marginTop: '16px' }}>
                Dr. Marcus Vance
              </div>
              <div className="meta-tag-eucalyptus">
                Chief Executive Officer & Founder // AXIOM SYSTEMS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Insights — Horizontal Editorial List */}
      <section className="asym-insights-section">
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '30px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '8px' }}>07 / PAPERS</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 50px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
              DISPATCHES & RESEARCH
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)' }}>
            {INSIGHTS_ARTICLES.map((art, idx) => (
              <Link key={art.id} to="/insights" className="asym-article-row">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--c-copper)' }}>0{idx + 1}</span>
                <span className="meta-tag-eucalyptus">{art.category}</span>
                <h3 className="asym-article-title">{art.title}</h3>
                <span style={{ fontSize: '13px', color: 'var(--c-eucalyptus)', fontFamily: 'var(--font-mono)' }}>
                  {art.date} // {art.readTime}
                </span>
                <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--c-copper)' }}>
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. CTA — Left Heading/Description, Far-Right Circular CTA */}
      <section className="asym-cta-section">
        <div className="container-asym">
          <div className="asym-cta-wide-split">
            <div>
              <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>START AN ENGAGEMENT</div>
              <h2 className="asym-cta-heading-left">
                Ready to build what's next?
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6', maxWidth: '540px' }}>
                Let's discuss the technology challenges shaping your next stage of enterprise scale.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link to="/contact" className="btn-copper-circle" aria-label="Start Conversation">
                <ArrowRight size={28} />
              </Link>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                INITIATE TRANSMISSION →
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
