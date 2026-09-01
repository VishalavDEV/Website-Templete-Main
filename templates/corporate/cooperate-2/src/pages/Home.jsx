import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';
import { HERO_DATA, BRAND } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import ServicesAccordion from '../components/ServicesAccordion';
import WorkShowcase from '../components/WorkShowcase';
import IndustriesExplorer from '../components/IndustriesExplorer';
import ValuesDarkSection from '../components/ValuesDarkSection';
import EditorialStatement from '../components/EditorialStatement';
import TestimonialQuote from '../components/TestimonialQuote';
import TeamShowcase from '../components/TeamShowcase';
import InsightsGrid from '../components/InsightsGrid';
import CareersCTA from '../components/CareersCTA';
import ContactFormSection from '../components/ContactFormSection';

export default function Home() {
  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* HERO SECTION — Striking Asymmetric Editorial Layout           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Column: Asymmetric Typography */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Eyebrow */}
              <div className="hero-label">
                <span className="hero-label-sq"></span>
                <span>{HERO_DATA.label}</span>
              </div>

              {/* Huge 80–110px Headline */}
              <h1 className="hero-heading">
                {HERO_DATA.headlineLine1} <br />
                {HERO_DATA.headlineLine2} <br />
                {HERO_DATA.headlineLine3} <br />
                <span className="serif-highlight">
                  {HERO_DATA.headlineSerifWord}
                </span>
              </h1>

              {/* Subtext */}
              <p className="hero-subtext">
                {HERO_DATA.subtext}
              </p>

              {/* Actions */}
              <div className="hero-actions">
                <Link to="/work" className="btn-editorial-primary">
                  <span>Explore our work</span>
                  <ArrowRight size={14} />
                </Link>

                <Link to="/about" className="btn-editorial-underline">
                  <span>What we believe</span>
                  <span className="text-terracotta font-mono">›</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Asymmetric Layered Editorial Photography */}
            <div>
              <div className="hero-editorial-comp">
                {/* Main 4:5 Editorial Image */}
                <div className="hero-main-frame">
                  <img src={HERO_DATA.image} alt="Corporate Architecture" />
                  <div className="hero-image-caption-tag">
                    {HERO_DATA.imageCaption}
                  </div>
                </div>

                {/* Secondary Overlapping Image */}
                <div className="hero-secondary-frame">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                    alt="Strategic Advisory Working Session"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* EDITORIAL STATEMENT                                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <EditorialStatement />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* STATS STRIP                                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <StatsStrip />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SERVICES (Numbered Expandable List)                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <SectionHeader
            eyebrow="01 / WHAT WE DO"
            title="Practices engineered for systemic advantage."
            serifWord="advantage."
            description="We architect and execute high-stakes transformations across five core strategic disciplines."
            linkText="All Practice Areas"
            linkTo="/services"
          />

          <ServicesAccordion />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SELECTED WORK (Alternating Layout)                            */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-y">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <SectionHeader
            eyebrow="02 / SELECTED WORK"
            title="Measured by enduring enterprise impact."
            serifWord="impact."
            description="A selection of recent strategic, operational, and technological engagements across global institutions."
            linkText="View All Case Studies"
            linkTo="/work"
          />

          <WorkShowcase limit={3} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* INDUSTRIES (Interactive Category Navigation)                 */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          <SectionHeader
            eyebrow="03 / SECTORS"
            title="Deep domain expertise across critical industries."
            serifWord="industries."
            description="Our partners possess decades of specialized operational and boardroom experience in the global economy's most vital verticals."
            linkText="Explore Industries"
            linkTo="/industries"
          />

          <IndustriesExplorer />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* VALUES SECTION (Dark Charcoal)                                */}
      {/* ───────────────────────────────────────────────────────────── */}
      <ValuesDarkSection />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TESTIMONIAL QUOTE                                             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <TestimonialQuote />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LEADERSHIP (Oversized Portraits)                             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          <SectionHeader
            eyebrow="04 / LEADERSHIP"
            title="Partners with skin in the game."
            serifWord="game."
            description="Every engagement is led directly by senior partners who have run operations, founded companies, and advised sovereign boards."
            linkText="Meet All Partners"
            linkTo="/team"
          />

          <TeamShowcase limit={3} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* INSIGHTS (Editorial Publication)                              */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          <SectionHeader
            eyebrow="05 / PERSPECTIVES"
            title="Intelligence for executive decision-makers."
            serifWord="makers."
            description="Our latest research, macroeconomic monographs, and strategic frameworks."
            linkText="All Publications"
            linkTo="/insights"
          />

          <InsightsGrid limit={4} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CAREERS CTA                                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <CareersCTA />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CONTACT FORM                                                  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="container">
        <ContactFormSection />
      </div>

    </div>
  );
}
