import React from 'react';
import { Download, ArrowDownRight, Compass } from 'lucide-react';
import { CHEF_PROFILE } from '../data/culinaryData';

export default function Hero({ onOpenCV }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="hero-label">EXECUTIVE CHEF &bull; CULINARY DIRECTOR</span>
          
          <h1 className="hero-title">
            LUCIEN<br />
            <span>MOREAU</span>
          </h1>

          <div className="hero-tagline">
            "{CHEF_PROFILE.tagline}"
          </div>

          <p className="hero-intro">
            {CHEF_PROFILE.intro}
          </p>

          <div className="hero-cta">
            <a href="#signature-work" className="btn-primary">
              Explore My Work <ArrowDownRight size={16} />
            </a>
            <button className="btn-secondary" onClick={onOpenCV}>
              <Download size={16} /> Download CV
            </button>
          </div>

          <div className="hero-meta-grid">
            <div className="hero-meta-item">
              <span className="hero-meta-label">BASED IN</span>
              <span className="hero-meta-value">{CHEF_PROFILE.location}</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">EXPERIENCE</span>
              <span className="hero-meta-value">{CHEF_PROFILE.experienceYears} Years</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">FOCUS</span>
              <span className="hero-meta-value">Seasonal Cuisine</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-portrait-wrapper">
            <img 
              src={CHEF_PROFILE.portrait} 
              alt="Executive Chef Lucien Moreau" 
              className="hero-portrait-img" 
            />
            <div className="hero-portrait-caption">
              <span>FIG. 01 &mdash; PORTRAIT</span>
              <span>LYON STUDIO, 2026</span>
            </div>

            <div className="hero-decorative-seal">
              <span className="seal-text">FICTIONAL PROFILE &bull; DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
