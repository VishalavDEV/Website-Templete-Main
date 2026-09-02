import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, Terminal, Layers } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import LogoCloud from '../components/LogoCloud';
import { solutions } from '../data/solutions';
import './Solutions.css';

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="SYSTEM ARCHITECTURES"
        title="Solutions for the challenges that matter most."
        subtitle="Turnkey technical blueprints and specialized platforms engineered to address high-friction operational, architectural, and data challenges."
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      {/* 2. Solutions Showcase Grid */}
      <section className="solutions-showcase-section section">
        <div className="container">
          <div className="solutions-showcase-list">
            {solutions.map((sol, index) => {
              const isEven = index % 2 === 0;
              const archSpecs = sol.architectureHighlight ? sol.architectureHighlight.split(' + ') : [];

              return (
                <div key={sol.id} className="solution-detailed-block" id={sol.slug}>
                  <div className={`solution-block-grid ${isEven ? '' : 'grid-reversed'}`}>
                    {/* Visual Media Side */}
                    <div className="solution-media-box">
                      <div className="solution-img-wrapper">
                        <img src={sol.image} alt={sol.title} className="solution-img" loading="lazy" />
                        <div className="solution-img-overlay" />
                        <div className="solution-floating-badge">
                          <span>{sol.badge}</span>
                        </div>
                      </div>

                      {/* Architecture Specification Highlight Box */}
                      <div className="architecture-highlight-card">
                        <div className="arch-card-header">
                          <Terminal size={15} className="arch-icon" />
                          <span className="arch-title-text">ARCHITECTURE SPECIFICATION</span>
                        </div>
                        <div className="arch-specs-chips">
                          {archSpecs.map((spec, sIdx) => (
                            <span key={sIdx} className="arch-chip">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Detail Side */}
                    <div className="solution-text-box">
                      <div className="sol-eyebrow-tag">
                        <span>{sol.badge}</span>
                      </div>

                      <h2 className="sol-title">{sol.title}</h2>

                      <p className="sol-lead-statement">{sol.subtitle}</p>
                      <p className="sol-main-desc">{sol.description}</p>

                      {/* Problem vs Solution Comparison Box */}
                      <div className="problem-solution-compare">
                        <div className="compare-col problem-col">
                          <div className="compare-header">
                            <AlertCircle size={15} className="problem-icon" />
                            <span className="compare-label-text">THE CORE FRICTION</span>
                          </div>
                          <p className="compare-desc">{sol.problem}</p>
                        </div>

                        <div className="compare-col solution-col">
                          <div className="compare-header">
                            <CheckCircle2 size={15} className="solution-icon" />
                            <span className="compare-label-text">NEXORA RESOLUTION</span>
                          </div>
                          <p className="compare-desc">{sol.solution}</p>
                        </div>
                      </div>

                      {/* Key Value Checklist / Benefits */}
                      <div className="sol-benefits-list">
                        {sol.keyBenefits.map((b, i) => (
                          <div key={i} className="sol-benefit-row">
                            <div className="benefit-icon-wrap">
                              <CheckCircle2 size={16} className="benefit-icon" />
                            </div>
                            <span className="benefit-text">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Bar */}
                      <div className="sol-metrics-grid">
                        {sol.metrics.map((m, idx) => (
                          <div key={idx} className="sol-metric-card">
                            <span className="sol-metric-val">{m.value}</span>
                            <span className="sol-metric-lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack & Target Verticals */}
                      <div className="sol-meta-footer">
                        <div className="sol-tech-stack">
                          <span className="meta-lbl">TECHNOLOGIES</span>
                          <div className="tech-tags">
                            {sol.techStack.map((t, idx) => (
                              <span key={idx} className="tech-pill">{t}</span>
                            ))}
                          </div>
                        </div>

                        <Link to="/contact" className="btn btn-primary btn-sm sol-btn">
                          <span>Request Blueprint</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <Stats />

      {/* 4. Logo Cloud */}
      <LogoCloud />

      {/* 5. CTA */}
      <CTA
        title="Ready to deploy a specialized solution?"
        description="Our systems architects will evaluate your current infrastructure and present a custom implementation roadmap."
      />
    </div>
  );
}
