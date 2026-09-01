import React from 'react';
import { EXPERTISE_SKILLS } from '../data/portfolioData';
import { Camera, BookOpen, Sliders, Compass, CheckCircle2 } from 'lucide-react';

export default function Expertise() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Camera': return <Camera size={20} />;
      case 'BookOpen': return <BookOpen size={20} />;
      case 'Sliders': return <Sliders size={20} />;
      case 'Compass': return <Compass size={20} />;
      default: return <Camera size={20} />;
    }
  };

  return (
    <section id="chapter-06" className="expertise-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 06</div>
        <h2 className="section-title">Tools of the Story</h2>
        <p className="section-subtitle">
          Technical mastery, field ethics, documentary narrative design, and backcountry operations required for long-form nature projects.
        </p>

        {/* Viewfinder Inspired Frame */}
        <div className="viewfinder-container">
          {/* Corner Viewfinder Marks */}
          <div className="viewfinder-corner top-left"></div>
          <div className="viewfinder-corner top-right"></div>
          <div className="viewfinder-corner bottom-left"></div>
          <div className="viewfinder-corner bottom-right"></div>

          {/* Viewfinder Center Crosshair & Metering Tags */}
          <div className="viewfinder-header">
            <span className="viewfinder-rec">REC [●] 4K RAW</span>
            <span className="viewfinder-shutter">1/1000s f/4.0 ISO 400</span>
            <span className="viewfinder-status">STANDBY FIELD READY</span>
          </div>

          {/* 4 Quadrants Skills Grid */}
          <div className="expertise-quad-grid">
            {EXPERTISE_SKILLS.map((cat, idx) => (
              <div key={cat.category} className="expertise-quad-card">
                <div className="quad-header">
                  <div className="quad-icon-box">{getIcon(cat.icon)}</div>
                  <h3 className="quad-title">{cat.category}</h3>
                </div>

                <ul className="quad-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="skill-badge-item">
                      <CheckCircle2 size={14} className="skill-check" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="viewfinder-footer">
            <span>AF-C MULTI-POINT TRACKING</span>
            <span>WB 5600K NATURAL DAYLIGHT</span>
            <span>BATTERY 98% SOLAR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
