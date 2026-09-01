import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero({ onOpenCv }) {
  return (
    <section id="profile" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left-content animate-fade-in">
          <div className="section-label">
            <span>FASHION DESIGNER & CREATIVE DIRECTOR</span>
          </div>

          <div className="hero-title-group">
            <h1 className="hero-main-title">
              ELARA<br />VOSS
            </h1>
            <p className="hero-tagline">
              "{profileData.tagline}"
            </p>
          </div>

          <p className="hero-intro-text">
            {profileData.intro}
          </p>

          <div className="hero-actions">
            <a href="#collections" className="btn-editorial-primary">
              <span>View Collections</span>
              <ArrowDownRight size={16} />
            </a>

            <button onClick={onOpenCv} className="btn-editorial-secondary">
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="hero-metadata-grid">
            <div className="hero-meta-item">
              <span className="meta-label">BASED IN</span>
              <span className="meta-value">{profileData.location}</span>
            </div>
            <div className="hero-meta-item">
              <span className="meta-label">EXPERIENCE</span>
              <span className="meta-value">{profileData.experience}</span>
            </div>
            <div className="hero-meta-item">
              <span className="meta-label">FOCUS</span>
              <span className="meta-value">Contemporary Fashion</span>
            </div>
          </div>
        </div>

        <div className="hero-right-visual">
          <div className="hero-portrait-wrapper">
            <img 
              src={profileData.portraitUrl} 
              alt="Elara Voss — Fictional Fashion Designer & Creative Director" 
              className="hero-portrait-img"
            />
          </div>
          <div className="hero-overlapping-text">
            BERLIN — 2026
          </div>
        </div>
      </div>
    </section>
  );
}
