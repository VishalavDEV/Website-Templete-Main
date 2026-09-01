import React from 'react';
import { Link } from 'react-router-dom';
import WeddingVideo from './WeddingVideo';
import ImageCollage from './ImageCollage';
import { weddingData } from '../data/weddingData';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* BACKGROUND WEDDING VIDEO */}
      <WeddingVideo />

      {/* HERO MAIN CONTENT CONTAINER */}
      <div className="hero-content">
        {/* EDITORIAL TOP TYPOGRAPHY */}
        <div className="hero-editorial-title">
          <span className="hero-word">OUR</span>
          <span className="hero-word">WEDDING</span>
          <span className="hero-word">PLANNER</span>
          <span className="hero-subtitle-tag">{weddingData.brand.tagline}</span>
        </div>

        {/* ASYMMETRIC THREE-IMAGE COLLAGE */}
        <ImageCollage />

        {/* COUPLE NAMES & UNDERLINE */}
        <h1 className="hero-couple-names">{weddingData.couple.namesCombined}</h1>
        <div className="hero-underline"></div>

        {/* DATE & LOCATION META */}
        <div className="hero-meta">
          <span>{weddingData.details.date}</span>
          <span className="meta-dot"></span>
          <span>{weddingData.details.locationFull}</span>
        </div>

        {/* CTA BUTTONS */}
        <div className="hero-cta-group">
          <Link to="/rsvp" className="btn-primary">
            RSVP NOW
          </Link>
          <Link to="/our-story" className="btn-secondary">
            EXPLORE OUR STORY →
          </Link>
        </div>

        {/* SCROLL INDICATOR */}
        <a href="#welcome-section" className="scroll-indicator" aria-label="Scroll down">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </a>
      </div>
    </section>
  );
}
