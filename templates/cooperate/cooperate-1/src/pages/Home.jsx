import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud';
import Services from '../components/Services';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Section (#11110F) */}
      <Hero />

      {/* 2. Logo Cloud (#181714) */}
      <LogoCloud />

      {/* 3. Editorial About Section (Light Luxury Section #F0ECE3) */}
      <section className="home-about-editorial-section section section-light-about">
        <div className="container">
          <div className="about-editorial-grid">
            {/* Left Big Statement */}
            <div className="about-statement-col">
              <span className="section-tag-light">02 / PHILOSOPHY</span>
              <h2 className="editorial-main-statement-light">
                Technology should create <br />
                <span className="text-gradient-light">clarity, not complexity.</span>
              </h2>
              <p className="about-body-paragraph-light">
                NEXORA is a premier technology and digital transformation practice. We partner with visionary executives to untangle legacy architecture, engineer proprietary AI capabilities, and build resilient digital products that scale seamlessly.
              </p>
              <p className="about-body-paragraph-light">
                Our multidisciplinary squads embed with your engineering and product organizations to establish sustainable technical excellence, cut cloud waste, and accelerate your time-to-market.
              </p>
              <div className="about-action-wrap">
                <Link to="/about" className="btn btn-outline-dark">
                  <span>Read Our Full Story</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Media Panel & Minimalist Stats */}
            <div className="about-visual-col">
              <div className="about-editorial-card-light">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="NEXORA Engineering Squad Collaborating"
                  className="about-editorial-img"
                  loading="lazy"
                />
                <div className="about-img-gradient-overlay-light" />
                <div className="about-floating-efficiency-badge-light">
                  <Zap size={18} className="badge-zap-icon-light" />
                  <div>
                    <div className="eff-number-light">3.8x</div>
                    <div className="eff-label-light">Engineering Velocity Surge</div>
                  </div>
                </div>
              </div>

              {/* Minimalist Editorial Numbers Row with Thin Dividers */}
              <div className="editorial-stats-row-light">
                <div className="editorial-stat-unit">
                  <span className="ed-stat-val-light">12+</span>
                  <span className="ed-stat-lbl-light">YEARS</span>
                </div>
                <div className="ed-divider-light" />
                <div className="editorial-stat-unit">
                  <span className="ed-stat-val-light">180+</span>
                  <span className="ed-stat-lbl-light">PROJECTS</span>
                </div>
                <div className="ed-divider-light" />
                <div className="editorial-stat-unit">
                  <span className="ed-stat-val-light">35+</span>
                  <span className="ed-stat-lbl-light">CLIENTS</span>
                </div>
                <div className="ed-divider-light" />
                <div className="editorial-stat-unit">
                  <span className="ed-stat-val-light">14</span>
                  <span className="ed-stat-lbl-light">COUNTRIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services (#181714 - Dark Warm) */}
      <Services />

      {/* 5. Solutions (#211F1A - Deep Surface) */}
      <section className="home-solutions-section section section-solutions-warm">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">STRATEGIC ARCHITECTURES</span>
            <h2 className="section-title">Solutions for the challenges that matter most.</h2>
            <p className="section-description">
              Engineered blueprints combining proprietary IP and cloud-native frameworks to solve high-friction enterprise hurdles.
            </p>
          </div>

          <div className="editorial-solutions-showcase">
            {solutions.slice(0, 3).map((sol, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div key={sol.id} className={`editorial-solution-block ${isReversed ? 'is-reversed' : ''}`}>
                  {/* Visual 50% */}
                  <div className="solution-media-half">
                    <img src={sol.image} alt={sol.title} className="sol-half-img" loading="lazy" />
                    <div className="sol-half-overlay" />
                    <span className="sol-pill-badge">{sol.badge}</span>
                  </div>

                  {/* Content 50% */}
                  <div className="solution-content-half">
                    <span className="sol-number-indicator">0{index + 1}</span>
                    <h3 className="sol-editorial-title">{sol.title}</h3>
                    <p className="sol-editorial-subtitle">{sol.subtitle}</p>

                    <div className="sol-benefits-checklist">
                      {sol.keyBenefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="sol-benefit-line">
                          <CheckCircle2 size={16} className="sol-check" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="sol-action-row">
                      <Link to="/solutions" className="btn btn-primary">
                        <span>Explore Solution</span>
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="solutions-view-more">
            <Link to="/solutions" className="btn btn-secondary btn-lg">
              <span>View All 5 Enterprise Solutions</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Industries Showcase */}
      <section className="home-industries-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">04 / DOMAIN MASTERY</span>
            <h2 className="section-title">Deep expertise across mission-critical sectors.</h2>
            <p className="section-description">
              We understand the specialized regulatory, security, and architectural constraints of your vertical.
            </p>
          </div>

          <div className="luxury-industries-grid">
            {industries.map((ind) => (
              <Link to="/industries" key={ind.id} className="luxury-industry-card">
                <div className="ind-card-img-wrap">
                  <img src={ind.heroImage} alt={ind.title} className="ind-card-img" loading="lazy" />
                  <div className="ind-card-gradient" />
                </div>
                <div className="ind-card-body">
                  <h4 className="ind-card-title">{ind.title}</h4>
                  <p className="ind-card-desc">{ind.subtitle}</p>
                  <div className="ind-card-arrow-circle">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dramatic Statistics Section (#141310 - Deep Charcoal) */}
      <Stats />

      {/* 8. Featured Case Studies (#EFEAE0 - Light Luxury Agency Portfolio) */}
      <div className="home-case-studies-wrapper">
        <CaseStudies limit={3} />
      </div>

      {/* 9. Editorial Testimonials (#E7E1D5 - Warm Light Ivory) */}
      <Testimonials />

      {/* 10. Concluding Final CTA */}
      <CTA />
    </div>
  );
}
