import React from 'react';
import { VALUES_DATA, PROFILE_DATA } from '../data/portfolioData';

export default function VisualPhilosophy() {
  return (
    <section id="chapter-02" className="philosophy-section">
      <div className="container text-center">
        <div className="chapter-badge">CHAPTER 02</div>
        
        {/* Main Immersive Statement */}
        <blockquote className="philosophy-quote">
          "The most powerful stories are often the ones happening quietly."
        </blockquote>

        <div className="philosophy-author">
          — NOAH EVERWOOD, DOCUMENTARY PHILOSOPHY
        </div>
      </div>

      {/* Full-Width Atmospheric Visual Banner */}
      <div className="full-width-visual-banner">
        <img 
          src={PROFILE_DATA.heroImage} 
          alt="Full width wilderness ecosystem landscape" 
          className="banner-img"
        />
        <div className="banner-overlay"></div>
        <div className="banner-caption container">
          <span>SILENT BASIN CORRIDOR</span>
          <span>ECOLOGICAL FIELD SURVEY</span>
        </div>
      </div>

      {/* Narrow Column Text Philosophy */}
      <div className="container narrow-container">
        <div className="philosophy-text-body">
          <p>
            Modern nature storytelling often prioritizes high-octane spectacle over true ecological listening. My documentary philosophy is built on prolonged immersion—spending weeks in a single watershed until the resident wildlife grows accustomed to my silent presence.
          </p>

          <p>
            By adhering to non-invasive field techniques, we capture unaltered behavioral patterns. Authentic visual storytelling does not require manipulating the environment; it requires humility, patience, and a deep respect for the intrinsic rhythms of the wild.
          </p>

          <div className="philosophy-pillars">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <div>
                <h4 className="pillar-title">Observation over Intrusion</h4>
                <p className="pillar-desc">Maintaining ethical distance so animal behaviors remain purely uninfluenced by human observation.</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <div>
                <h4 className="pillar-title">Environmental Authenticity</h4>
                <p className="pillar-desc">Preserving natural lighting, organic soundscapes, and unmanipulated habitat conditions.</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <div>
                <h4 className="pillar-title">Long-form Narrative Depth</h4>
                <p className="pillar-desc">Moving past single isolated snapshots to build comprehensive multi-season ecological studies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
