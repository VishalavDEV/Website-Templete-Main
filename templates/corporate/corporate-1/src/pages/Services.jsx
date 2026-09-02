import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Code2, CloudCog, ShieldCheck, DatabaseZap, TrendingUp, CheckCircle2, Layers } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import LogoCloud from '../components/LogoCloud';
import { services } from '../data/services';
import './ServicesPage.css';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  CloudCog: CloudCog,
  ShieldCheck: ShieldCheck,
  DatabaseZap: DatabaseZap,
  TrendingUp: TrendingUp
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="OUR CAPABILITIES"
        title="Capabilities that turn complexity into opportunity."
        subtitle="End-to-end architecture, bespoke AI engineering, and modern digital platform design built to withstand high-volume enterprise demands."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* 2. Services Detailed Matrix List */}
      <section className="services-matrix-section section">
        <div className="container">
          <div className="services-detailed-list">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code2;
              const isReversed = index % 2 !== 0;

              return (
                <div key={service.id} className={`service-detail-row ${isReversed ? 'row-reversed' : ''}`}>
                  <div className="service-row-main">
                    <div className="service-row-header">
                      <div className="service-icon-large">
                        <IconComponent size={28} />
                      </div>
                      <span className="service-number-pill">PRACTICE {service.number}</span>
                    </div>

                    <h2 className="service-row-title">{service.title}</h2>
                    <p className="service-row-tagline">{service.tagline}</p>
                    <p className="service-row-desc">{service.heroDescription}</p>

                    <div className="service-row-stats">
                      {service.stats.map((st, i) => (
                        <div key={i} className="service-mini-stat">
                          <span className="mini-stat-val">{st.value}</span>
                          <span className="mini-stat-lbl">{st.label}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/services/${service.slug}`} className="btn btn-primary service-cta-btn">
                      <span>Explore {service.shortTitle} Practice</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Capabilities & Tech Stack Card */}
                  <div className="service-row-card">
                    <h4 className="row-card-title">Core Focus Areas</h4>
                    <div className="capabilities-checklist">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="cap-item">
                          <CheckCircle2 size={18} className="cap-icon" />
                          <div>
                            <span className="cap-name">{cap.title}</span>
                            <p className="cap-desc">{cap.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="tech-stack-row">
                      <span className="tech-stack-lbl">Technologies:</span>
                      <div className="tech-tags">
                        {service.techStack.slice(0, 5).map((t, idx) => (
                          <span key={idx} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="industries-served-row">
                      <span className="ind-lbl">Industries:</span>
                      <span className="ind-list">{service.industriesServed.join(' • ')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Stats Component */}
      <Stats />

      {/* 4. Logo Cloud */}
      <LogoCloud />

      {/* 5. CTA */}
      <CTA
        title="Need a tailored technical assessment?"
        description="Our principal architects conduct comprehensive code, data, and cloud architecture reviews."
      />
    </div>
  );
}
