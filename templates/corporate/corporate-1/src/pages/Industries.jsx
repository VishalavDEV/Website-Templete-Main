import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, Landmark, Stethoscope, ShoppingBag, Factory, Truck, Layers, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import LogoCloud from '../components/LogoCloud';
import { industries } from '../data/industries';
import { caseStudies } from '../data/caseStudies';
import './Industries.css';

const iconMap = {
  Landmark: Landmark,
  Stethoscope: Stethoscope,
  ShoppingBag: ShoppingBag,
  Factory: Factory,
  Truck: Truck,
  Layers: Layers
};

export default function Industries() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find((ind) => ind.id === activeTab) || industries[0];
  const IconComponent = iconMap[activeIndustry.icon] || Landmark;
  const relatedCase = caseStudies.find((cs) => cs.id === activeIndustry.featuredCaseStudy);

  return (
    <div className="industries-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="SECTOR EXPERTISE"
        title="Tailored architectures for critical industries."
        subtitle="We combine deep vertical regulatory understanding with world-class software engineering to solve industry-defining hurdles."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* 2. Industry Selector Tabs */}
      <section className="industries-interactive-section section">
        <div className="container">
          <div className="industry-pills-nav">
            {industries.map((ind) => {
              const TabIcon = iconMap[ind.icon] || Landmark;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`industry-nav-pill ${activeTab === ind.id ? 'active' : ''}`}
                >
                  <TabIcon size={18} />
                  <span>{ind.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep Dive Showcase */}
          <div className="industry-showcase-panel">
            <div className="industry-showcase-grid">
              {/* Left Details */}
              <div className="industry-info-side">
                <div className="ind-header-row">
                  <div className="ind-icon-box">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <span className="ind-tag">VERTICAL FOCUS</span>
                    <h2 className="ind-main-title">{activeIndustry.title}</h2>
                  </div>
                </div>

                <p className="ind-tagline-text">{activeIndustry.subtitle}</p>
                <p className="ind-body-text">{activeIndustry.description}</p>

                {/* Challenges vs NEXORA Approach */}
                <div className="ind-challenges-box">
                  <h4 className="ind-section-subhead">
                    <AlertCircle size={18} className="warn-icon" />
                    <span>Key Sector Challenges We Solve</span>
                  </h4>
                  <div className="challenges-checklist">
                    {activeIndustry.challenges.map((ch, i) => (
                      <div key={i} className="ch-item">
                        <span className="ch-bullet">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ind-approach-box">
                  <h4 className="ind-section-subhead">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>The NEXORA Approach</span>
                  </h4>
                  <p className="approach-text">{activeIndustry.nexoraApproach}</p>
                </div>

                {/* Key Results Stats */}
                <div className="ind-results-grid">
                  {activeIndustry.keyResults.map((kr, idx) => (
                    <div key={idx} className="ind-result-card">
                      <span className="ind-res-stat">{kr.stat}</span>
                      <span className="ind-res-lbl">{kr.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Media & Case Study Box */}
              <div className="industry-media-side">
                <div className="ind-hero-img-wrap">
                  <img src={activeIndustry.heroImage} alt={activeIndustry.title} className="ind-hero-img" loading="lazy" />
                  <div className="ind-img-overlay" />
                  <div className="ind-float-badge">
                    <span>{activeIndustry.title} Focus</span>
                  </div>
                </div>

                {/* Featured Case Study Link if available */}
                {relatedCase && (
                  <div className="ind-case-feature-card">
                    <span className="case-feat-tag">FEATURED TRANSFORMATION</span>
                    <h4 className="case-feat-title">{relatedCase.title}</h4>
                    <p className="case-feat-desc">{relatedCase.summary}</p>
                    <Link to={`/work/${relatedCase.slug}`} className="btn-link">
                      <span>View Full Case Study</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                )}

                <div className="ind-consult-box">
                  <p>Need a confidential architecture briefing for {activeIndustry.title}?</p>
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Schedule Vertical Consultation</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All Industries Grid Overview */}
      <section className="all-industries-overview section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">COMPREHENSIVE SECTORS</span>
            <h2 className="section-title">Serving the global economy.</h2>
            <p className="section-description">
              Select your vertical to explore our tailored technology frameworks and compliance blueprints.
            </p>
          </div>

          <div className="all-industries-cards-grid">
            {industries.map((ind) => {
              const IndIcon = iconMap[ind.icon] || Landmark;
              return (
                <div
                  key={ind.id}
                  className={`overview-ind-card ${activeTab === ind.id ? 'active-card' : ''}`}
                  onClick={() => {
                    setActiveTab(ind.id);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                >
                  <div className="overview-ind-icon">
                    <IndIcon size={24} />
                  </div>
                  <h3 className="overview-ind-name">{ind.title}</h3>
                  <p className="overview-ind-sub">{ind.subtitle}</p>
                  <div className="overview-ind-action">
                    <span>Inspect Focus</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Stats */}
      <Stats />

      {/* 5. Logo Cloud */}
      <LogoCloud />

      {/* 6. CTA */}
      <CTA
        title="Ready to solve your industry's toughest challenges?"
        description="Partner with our dedicated sector specialists and principal engineers today."
      />
    </div>
  );
}
