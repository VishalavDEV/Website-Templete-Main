import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronDown, Target, Compass, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Team from '../components/Team';
import LogoCloud from '../components/LogoCloud';
import CTA from '../components/CTA';
import { companyInfo } from '../data/company';
import './About.css';

export default function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <div className="about-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="ABOUT NEXORA"
        title="We build technology with purpose."
        subtitle="Bridging the gap between executive business strategy and high-velocity engineering to deliver software systems designed for enterprise longevity."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 2. Story Section (Editorial Split) */}
      <section className="about-story-section section">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXORA Global Engineering Practice"
                className="story-main-img"
                loading="lazy"
              />
              <div className="story-image-caption">
                <span className="caption-bold">San Francisco • London • Zurich</span>
                <span className="caption-sub">Founded in 2014 by distributed systems architects</span>
              </div>
            </div>

            <div className="story-content">
              <span className="section-tag">01 / OUR ORIGIN</span>
              <h2 className="story-title">Born out of the frustration with legacy consulting.</h2>
              <p className="story-p">
                A decade ago, our founders saw a recurring pattern: traditional consulting firms produced thick PowerPoint decks with lofty strategies, but lacked the engineering depth to execute them. Meanwhile, development shops wrote code without understanding unit economics or board-level imperatives.
              </p>
              <p className="story-p">
                We founded <strong>NEXORA</strong> to unite elite strategy with relentless engineering execution. We don't just advise; we engineer, deploy, and scale mission-critical architectures alongside your internal teams.
              </p>

              <div className="story-pillars">
                <div className="story-pillar-item">
                  <div className="pillar-num">01</div>
                  <div>
                    <h4 className="pillar-h">Strategy Grounded in Reality</h4>
                    <p className="pillar-p">Every architectural recommendation is vetted against real latency, cost, and compliance constraints.</p>
                  </div>
                </div>
                <div className="story-pillar-item">
                  <div className="pillar-num">02</div>
                  <div>
                    <h4 className="pillar-h">High-Caliber Principal Talent</h4>
                    <p className="pillar-p">No junior bait-and-switch. Your projects are staffed directly with senior architects and domain fellows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="mission-vision-section section section-alt">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon-box">
                <Target size={28} />
              </div>
              <span className="mv-tag">OUR MISSION</span>
              <h3 className="mv-title">To turn technological complexity into enduring commercial advantage.</h3>
              <p className="mv-desc">
                We exist to empower enterprise leaders to navigate disruptive technology shifts—from generative AI to zero-trust cloud architectures—with clarity, speed, and uncompromising reliability.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-box">
                <Compass size={28} />
              </div>
              <span className="mv-tag">OUR VISION</span>
              <h3 className="mv-title">The undisputed global standard for enterprise technical engineering.</h3>
              <p className="mv-desc">
                A future where organizations operate with autonomous, self-healing digital systems that eliminate manual friction, respect user data sovereignty, and accelerate human innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why NEXORA — Editorial Sticky Layout with Expandable Principles */}
      <section className="why-nexora-section section">
        <div className="container">
          <div className="why-nexora-grid">
            <div className="why-sticky-left">
              <span className="section-tag">CORE PRINCIPLES</span>
              <h2 className="why-sticky-title">The principles that anchor our engineering.</h2>
              <p className="why-sticky-desc">
                How we approach every architectural decision, client engagement, and production commit.
              </p>
            </div>

            <div className="why-principles-list">
              {companyInfo.values.map((v, idx) => {
                const isOpen = activePrinciple === idx;
                return (
                  <div
                    key={v.number}
                    className={`luxury-principle-row ${isOpen ? 'is-open' : ''}`}
                    onClick={() => setActivePrinciple(isOpen ? null : idx)}
                  >
                    <div className="principle-row-header">
                      <span className="principle-num">{v.number}</span>
                      <h3 className="principle-title">{v.title}</h3>
                      <ChevronDown size={20} className="principle-chevron" />
                    </div>
                    {isOpen && (
                      <div className="principle-body-reveal">
                        <p>{v.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Timeline */}
      <section className="timeline-section section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">MILESTONES</span>
            <h2 className="section-title">Our journey of sustained innovation.</h2>
            <p className="section-description">
              From a boutique systems lab to a global technology and digital transformation practice.
            </p>
          </div>

          <div className="progressive-timeline-track">
            {companyInfo.timeline.map((item, idx) => (
              <div key={idx} className="timeline-node-card">
                <div className="node-year-badge">{item.year}</div>
                <h3 className="node-title">{item.title}</h3>
                <p className="node-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <Stats />

      {/* 7. Leadership & Team */}
      <Team limit={4} showFilters={false} title="Meet our executive leadership." subtitle="Seasoned engineering leaders and former tech executives committed to client success." />

      {/* 8. Global Workplaces */}
      <section className="about-culture-section section section-alt">
        <div className="container">
          <div className="about-culture-grid">
            <div className="culture-text">
              <span className="section-tag">GLOBAL HUBS</span>
              <h2 className="culture-title">Global presence. Distributed engineering power.</h2>
              <p className="culture-p">
                With innovation hubs in San Francisco, New York, London, and Zurich, our team operates seamlessly across time zones to provide 24/7 delivery resilience.
              </p>

              <div className="offices-grid-luxury">
                {companyInfo.offices.map((office, i) => (
                  <div key={i} className="office-luxury-card">
                    <div className="office-city-row">
                      <h4 className="office-city">{office.city}</h4>
                      {office.isHQ && <span className="hq-pill">Global HQ</span>}
                    </div>
                    <p className="office-addr">{office.address}</p>
                    <p className="office-contact">{office.phone} • {office.email}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="culture-visual">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="NEXORA Global Headquarters"
                className="culture-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Logo Cloud */}
      <LogoCloud title="Trusted by global leaders worldwide" />

      {/* 10. CTA */}
      <CTA
        title="Ready to engineer your next leap forward?"
        description="Schedule a 45-minute confidential architecture exploration with our practice leads."
      />
    </div>
  );
}
