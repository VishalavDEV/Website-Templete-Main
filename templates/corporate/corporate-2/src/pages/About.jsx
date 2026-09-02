import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from '../components/Icons';
import { BRAND, STATS } from '../data/content';
import ValuesDarkSection from '../components/ValuesDarkSection';

export default function About() {
  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                ABOUT ORION / EST. {BRAND.established}
              </p>
              <h1 className="page-hero-title">
                We believe better business <br />
                starts with <span className="italic font-serif">better questions.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                Founded in Zurich in 2008, ORION was built on a single premise: that high-stakes strategic advice must be anchored in operational reality and intellectual independence.
              </p>
            </div>

            <div>
              <div className="page-hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="ORION Global Advisory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* EDITORIAL STORYTELLING FLOW                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container about-story-flow">
        
        {/* Large Statement */}
        <div>
          <span className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>THE FOUNDING THESIS</span>
          <h2 className="about-story-hero-statement" style={{ marginTop: '1rem' }}>
            “We created ORION because we saw too many institutions handed 300-page decks that gathered dust while markets shifted under their feet.”
          </h2>
          <p className="font-mono text-secondary" style={{ fontSize: '0.85rem', textTransform: 'uppercase', marginTop: '1.25rem' }}>
            Maya Shah — Managing Partner & Co-Founder
          </p>
        </div>

        {/* Large Wide Visual */}
        <div className="about-story-wide-image-frame">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt="ORION Strategy Working Session"
          />
        </div>

        {/* Supporting Narrative Split */}
        <div className="about-story-text-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-charcoal)' }}>
              Skin in the game. <br />
              <span className="italic font-serif">Zero vanity metrics.</span>
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Over the past 18 years, the global business landscape has moved from predictable linear growth to continuous volatility. Geopolitical fragmentation, capital cost shocks, and artificial intelligence have rendered standard consulting playbooks obsolete.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We intentionally limit the number of engagements we accept each year, ensuring every client receives the undivided attention and direct working leadership of senior partners.
            </p>
          </div>

          <div>
            <div className="about-story-secondary-image-frame">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Partner Advisory Session"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600 }}>Independence</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.5' }}>
                  Zero commercial affiliations with software vendors or system integrators.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600 }}>Aligned Fees</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.5' }}>
                  Advisory milestones tied directly to realized balance sheet targets.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* OFFSET STATISTICS SECTION (NO CARDS, THIN DIVIDERS)           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div className="about-offset-stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="about-offset-stat-col">
              <span className="about-offset-stat-num">
                {stat.value}{stat.suffix}
              </span>
              <p className="font-mono" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* VALUES SECTION (HOW WE WORK)                                  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <ValuesDarkSection />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* GLOBAL ADVISORY HUBS                                          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Global Presence</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Five strategic financial capitals.
              </h2>
            </div>
            <Link to="/contact" className="btn-editorial-underline">
              <span>Initiate Executive Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {BRAND.offices.map((office) => (
              <div key={office.city} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>{office.city}</h3>
                  <Globe size={16} className="text-terracotta" />
                </div>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>{office.country}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{office.address}</p>
                <p className="font-mono" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
