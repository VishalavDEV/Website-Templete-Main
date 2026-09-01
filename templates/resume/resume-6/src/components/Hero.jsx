import React, { useEffect, useState } from 'react';
import { profile } from '../data.js';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="em-hero">
      <div className="em-hero__container container">

        {/* Left: Text Content */}
        <div className={`em-hero__content ${loaded ? 'em-hero__content--visible' : ''}`}>
          <div className="em-hero__eyebrow">
            <span className="section-label">Portfolio 2026</span>
            <div className="em-hero__eyebrow-line"></div>
          </div>

          <h1 className="em-hero__headline">
            <span className="em-hero__headline-line em-hero__headline-line--1">Creative</span>
            <span className="em-hero__headline-line em-hero__headline-line--2">Director</span>
            <span className="em-hero__headline-ampersand">&amp;</span>
            <span className="em-hero__headline-line em-hero__headline-line--3">Brand</span>
            <span className="em-hero__headline-line em-hero__headline-line--4">Strategist</span>
          </h1>

          <div className="em-hero__name-block">
            <div className="em-hero__name-line"></div>
            <p className="em-hero__name">Elena Marlowe</p>
          </div>

          <p className="em-hero__tagline">
            "Creating identities, experiences, and stories that move people."
          </p>

          <p className="em-hero__intro body-lg">{profile.intro}</p>

          <div className="em-hero__ctas">
            <a
              href="#work"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Selected Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="btn-outline">Download CV</a>
          </div>
        </div>

        {/* Right: Portrait + Details */}
        <div className={`em-hero__visual ${loaded ? 'em-hero__visual--visible' : ''}`}>
          <div className="em-hero__portrait-wrap">
            <div className="em-hero__portrait-frame">
              <img
                src="images/elena_portrait.jpg"
                alt="Elena Marlowe — Creative Director & Brand Strategist"
                className="em-hero__portrait-img"
              />
            </div>
            <div className="em-hero__portrait-accent"></div>
          </div>

          <div className="em-hero__details">
            <div className="em-hero__detail-item">
              <span className="section-label">Based In</span>
              <span className="em-hero__detail-value">Amsterdam, NL</span>
            </div>
            <div className="em-hero__detail-divider"></div>
            <div className="em-hero__detail-item">
              <span className="section-label">Focus</span>
              <span className="em-hero__detail-value">Brand / Digital / Culture</span>
            </div>
            <div className="em-hero__detail-divider"></div>
            <div className="em-hero__detail-item">
              <span className="section-label">Available For</span>
              <span className="em-hero__detail-value">Selected Collaborations</span>
            </div>
          </div>
        </div>

      </div>

      <div className={`em-hero__scroll ${loaded ? 'em-hero__scroll--visible' : ''}`}>
        <div className="em-hero__scroll-line"></div>
        <span className="section-label">Scroll</span>
      </div>
    </section>
  );
}
