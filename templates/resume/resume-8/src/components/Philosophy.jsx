import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section className="editorial-section">
      <div className="section-label">
        <span>01 / PHILOSOPHY</span>
      </div>

      <div className="philosophy-layout">
        <div className="philosophy-text-column">
          <h2 className="philosophy-statement">
            "Fashion becomes interesting when it leaves space for interpretation."
          </h2>

          <p className="philosophy-bio">
            {profileData.bio}
          </p>

          <div className="principles-list">
            {profileData.principles.map((item, idx) => (
              <div key={idx} className="principle-card">
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="philosophy-visual-column">
          <div className="macro-fabric-wrapper">
            <img 
              src={profileData.fabricMacroUrl} 
              alt="Sculpted pleated fabric macro texture study" 
              className="macro-fabric-img"
            />
            <div className="fabric-badge">
              <span>MATERIAL STUDY — MACRO TEXTURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
