import React from 'react';
import { MapPin, Calendar, Globe, Camera, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function StorytellerProfile() {
  return (
    <section id="chapter-01" className="storyteller-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 01</div>
        <h2 className="section-title">{PROFILE_DATA.bioHeadline}</h2>

        <div className="storyteller-grid">
          {/* Left Column: Portrait & Badge Overlay */}
          <div className="portrait-wrapper">
            <div className="portrait-frame">
              <img 
                src={PROFILE_DATA.portraitImage} 
                alt="Noah Everwood — Fictional Wildlife Photographer" 
                className="portrait-img"
              />
              <div className="portrait-caption">
                <span className="caption-tag">FICTIONAL PROFILE</span>
                <span className="caption-name">Noah Everwood</span>
                <span className="caption-loc">Queenstown, New Zealand</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Field Stats */}
          <div className="bio-content">
            <p className="lead-paragraph">
              {PROFILE_DATA.bioParagraphs[0]}
            </p>

            <div className="bio-body">
              <p>{PROFILE_DATA.bioParagraphs[1]}</p>
              <p>{PROFILE_DATA.bioParagraphs[2]}</p>
            </div>

            {/* Field Profile Stats Box */}
            <div className="field-profile-card">
              <h3 className="field-card-title">FIELD PROFILE METRICS</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <MapPin className="stat-icon" size={18} />
                  <div>
                    <span className="stat-label">BASED IN</span>
                    <span className="stat-value">{PROFILE_DATA.location}</span>
                  </div>
                </div>

                <div className="stat-item">
                  <Calendar className="stat-icon" size={18} />
                  <div>
                    <span className="stat-label">YEARS IN FIELD</span>
                    <span className="stat-value">{PROFILE_DATA.experienceYears} Years</span>
                  </div>
                </div>

                <div className="stat-item">
                  <Globe className="stat-icon" size={18} />
                  <div>
                    <span className="stat-label">REGIONS DOCUMENTED</span>
                    <span className="stat-value">{PROFILE_DATA.documentedRegions}</span>
                  </div>
                </div>

                <div className="stat-item">
                  <Camera className="stat-icon" size={18} />
                  <div>
                    <span className="stat-label">PRIMARY SPECIALTY</span>
                    <span className="stat-value">{PROFILE_DATA.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
