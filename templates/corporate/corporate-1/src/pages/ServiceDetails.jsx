import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown, BrainCircuit, Code2, CloudCog, ShieldCheck, DatabaseZap, TrendingUp, Layers, Terminal, HelpCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import './ServiceDetails.css';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  CloudCog: CloudCog,
  ShieldCheck: ShieldCheck,
  DatabaseZap: DatabaseZap,
  TrendingUp: TrendingUp
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const service = services[currentIndex];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  const IconComponent = iconMap[service.icon] || Code2;
  const relatedCases = caseStudies.filter((cs) => cs.serviceCategory.toLowerCase().includes(service.shortTitle.toLowerCase().split(' ')[0]) || cs.category.toLowerCase() === service.slug.split('-')[0]).slice(0, 2);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="service-details-page">
      {/* 1. Header with Breadcrumbs */}
      <PageHeader
        tag={`PRACTICE ${service.number} • OVERVIEW`}
        title={service.title}
        subtitle={service.heroDescription}
        breadcrumbs={[
          { label: 'Services', link: '/services' },
          { label: service.shortTitle }
        ]}
      />

      {/* 2. Key Metrics & Value Proposition */}
      <section className="service-overview-section section">
        <div className="container">
          <div className="service-overview-grid">
            <div className="overview-left">
              <span className="section-tag">ENGINEERING DEPTH</span>
              <h2 className="overview-title">Why enterprise leaders choose our {service.shortTitle} practice.</h2>
              <p className="overview-text">{service.description}</p>

              <div className="service-key-benefits-box">
                <h4 className="benefits-box-title">Key Architectural Outcomes</h4>
                <div className="benefits-list">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="benefit-row">
                      <CheckCircle2 size={18} className="benefit-check-icon" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overview-right">
              <div className="service-stats-panel">
                <div className="panel-header">
                  <div className="panel-icon">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h4 className="panel-title">{service.shortTitle} Metrics</h4>
                    <p className="panel-sub">Audited client benchmarks</p>
                  </div>
                </div>

                <div className="panel-stats-list">
                  {service.stats.map((st, idx) => (
                    <div key={idx} className="panel-stat-item">
                      <span className="stat-val">{st.value}</span>
                      <span className="stat-lbl">{st.label}</span>
                    </div>
                  ))}
                </div>

                <div className="panel-tech-box">
                  <span className="tech-box-label">Production Technology Stack</span>
                  <div className="tech-pills-wrap">
                    {service.techStack.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="panel-cta-wrap">
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Consult on {service.shortTitle}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Capabilities Grid */}
      <section className="service-capabilities-section section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">CORE CAPABILITIES</span>
            <h2 className="section-title">Specialized {service.shortTitle} Offerings</h2>
            <p className="section-description">
              Modular components tailored to your organizational scale and existing architecture.
            </p>
          </div>

          <div className="capabilities-detailed-grid">
            {service.capabilities.map((cap, i) => (
              <div key={i} className="cap-card-detailed">
                <div className="cap-card-num">0{i + 1}</div>
                <h3 className="cap-card-title">{cap.title}</h3>
                <p className="cap-card-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Proven 4-Step Engineering Process */}
      <section className="service-process-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">METHODOLOGY</span>
            <h2 className="section-title">How We Deliver Excellence</h2>
            <p className="section-description">
              A battle-tested 4-stage execution framework ensuring risk mitigation and accelerated ROI.
            </p>
          </div>

          <div className="process-flow-grid">
            {service.process.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="process-step-top">
                  <span className="process-step-num">{step.step}</span>
                  <div className="process-line" />
                </div>
                <h4 className="process-step-name">{step.name}</h4>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="service-related-cases section section-alt">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">REAL-WORLD IMPACT</span>
              <h2 className="section-title">Related Case Studies</h2>
              <p className="section-description">
                Explore real client transformations in {service.shortTitle}.
              </p>
            </div>

            <div className="related-cases-grid">
              {relatedCases.map((cs) => (
                <div key={cs.id} className="related-case-card">
                  <div className="related-case-img-wrap">
                    <img src={cs.heroImage} alt={cs.title} className="related-case-img" loading="lazy" />
                  </div>
                  <div className="related-case-body">
                    <span className="badge badge-brand">{cs.industry}</span>
                    <h3 className="related-case-title">{cs.title}</h3>
                    <p className="related-case-desc">{cs.summary}</p>
                    <Link to={`/work/${cs.slug}`} className="btn-link">
                      <span>Read Case Study</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ Accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service-faq-section section">
          <div className="container container-narrow">
            <div className="section-header text-center">
              <span className="section-tag">FREQUENTLY ASKED</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="faq-accordion-list">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-q-text">{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Next & Prev Service Navigation */}
      <section className="service-pagination-nav">
        <div className="container">
          <div className="service-nav-grid">
            <Link to={`/services/${prevService.slug}`} className="service-nav-card prev">
              <span className="nav-dir"><ArrowLeft size={16} /> Previous Practice</span>
              <span className="nav-title">{prevService.title}</span>
            </Link>

            <Link to={`/services/${nextService.slug}`} className="service-nav-card next">
              <span className="nav-dir">Next Practice <ArrowRight size={16} /></span>
              <span className="nav-title">{nextService.title}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTA
        title={`Accelerate your ${service.shortTitle} roadmap.`}
        description="Speak directly with our practice principal to explore custom architecture specifications and engagement models."
      />
    </div>
  );
}
