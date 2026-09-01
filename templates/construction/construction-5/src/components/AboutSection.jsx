import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-split-section" id="about">
      {/* Center Vertical Copper Hairline Divider */}
      <div className="center-vertical-divider"></div>

      <div className="container about-grid-container">
        {/* Left Column: ABOUT PROJECT with Thin Copper Line */}
        <div className="about-left-col">
          <div className="about-title-line-wrap">
            <span className="about-title-label">ABOUT PROJECT</span>
            <span className="copper-horiz-line"></span>
          </div>
        </div>

        {/* Right Column: Description Paragraph Matching Screenshot */}
        <div className="about-right-col">
          <p className="about-lead-desc">
            Design concept of a website for a builder company, New House. The company is engaged in the construction and design of modern and elite houses.
          </p>

          {/* Extended Credentials Strip */}
          <div className="about-stats-grid">
            <div className="a-stat-item">
              <strong>48+</strong>
              <span>Elite Villas Built</span>
            </div>
            <div className="a-stat-item">
              <strong>100%</strong>
              <span>Custom Engineering</span>
            </div>
            <div className="a-stat-item">
              <strong>7 Yrs</strong>
              <span>Uncompromising Legacy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center ANIMATION Tag */}
      <div className="animation-center-tag">
        <span className="anim-label">ANIMATION</span>
        <div className="anim-scroll-indicator">
          <span className="anim-dot"></span>
        </div>
      </div>
    </section>
  );
}
