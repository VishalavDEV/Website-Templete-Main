import React from 'react';
import { ArrowDown, Download, Compass, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image Container with Overlay */}
      <div className="hero-bg-wrapper">
        <img 
          src={PROFILE_DATA.heroImage} 
          alt="Cinematic Alpine Wilderness" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content Container */}
      <div className="hero-content container">
        <div className="hero-badge">
          <span className="dot"></span>
          <span>WILDLIFE PHOTOGRAPHER</span>
          <span className="divider">•</span>
          <span>DOCUMENTARY STORYTELLER</span>
        </div>

        <h1 className="hero-title">
          NOAH <br />
          <span className="title-accent">EVERWOOD</span>
        </h1>

        <p className="hero-tagline">
          "{PROFILE_DATA.tagline}"
        </p>

        <div className="hero-location-badge">
          <MapPin size={14} />
          <span>BASED IN QUEENSTOWN, NEW ZEALAND</span>
        </div>

        <div className="hero-cta-group">
          <a href="#chapter-03" className="btn-hero-primary">
            <Compass size={16} />
            <span>Explore My Work</span>
          </a>

          <button className="btn-hero-secondary" onClick={onOpenCV}>
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-cue">
        <span className="scroll-text">SCROLL TO BEGIN</span>
        <div className="scroll-line-container">
          <div className="scroll-line-pulse"></div>
        </div>
      </div>
    </section>
  );
}
