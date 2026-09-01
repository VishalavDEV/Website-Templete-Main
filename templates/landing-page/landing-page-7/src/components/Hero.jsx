import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import HeroVisual from './HeroVisual';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="product">
      {/* Background glow filters */}
      <div className="glow-blur glow-purple hero-glow-1"></div>
      <div className="glow-blur glow-blue hero-glow-2"></div>
      <div className="grid-bg"></div>

      <div className="container hero-grid">
        {/* Left Hand: Hero Copy */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-tag">New</span>
            <span>The intelligent workspace for modern teams</span>
          </div>
          <h1 className="hero-title">
            Your work, finally working together.
          </h1>
          <p className="hero-desc">
            Flowly AI brings your tasks, meetings, notes, and workflows into one intelligent workspace, helping teams focus on what actually matters.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Start for free <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary">
              <Play size={16} fill="currentColor" /> Watch demo
            </button>
          </div>
        </div>

        {/* Right Hand: New Interactive Workflow visual */}
        <div className="hero-mockup-wrapper">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
