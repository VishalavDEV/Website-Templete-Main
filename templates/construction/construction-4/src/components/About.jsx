import React from 'react';

export default function About() {
  return (
    <section className="knack-section" id="about">
      <div className="container">
        <div className="about-grid-layout">
          <div className="about-text-side">
            <span className="k-tag">THE PEOPLE</span>
            <h2 className="k-title">A Relentless Commitment to Architectural Perfection</h2>
            <p className="about-body">
              At knack | DESIGN + BUILD, we reject the conventional fragmentation between architect and builder. By housing world-class architectural designers, structural engineers, and master builders under one roof, we guarantee that every detail of your residence is executed with mathematical precision.
            </p>
            <div className="stat-pills-row">
              <div className="s-pill">
                <span className="s-num">18+</span>
                <span className="s-txt">Years Excellence</span>
              </div>
              <div className="s-pill">
                <span className="s-num">340+</span>
                <span className="s-txt">Residences Built</span>
              </div>
              <div className="s-pill">
                <span className="s-num">100%</span>
                <span className="s-txt">On-Time Milestones</span>
              </div>
            </div>
          </div>

          <div className="about-img-side">
            <img
              src="./assets/images/knack-hero-villa.jpg"
              alt="Knack luxury architecture"
              className="about-featured-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
