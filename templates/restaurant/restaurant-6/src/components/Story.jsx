import React from 'react';

export default function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-grid">
        <div className="story-visuals">
          <img className="story-img-large" src="assets/images/story_portrait.jpg" alt="Architectural sunlit dining room at Lumière" />
          <img className="story-img-small" src="assets/images/story_landscape.jpg" alt="Terracotta balcony overlooking blue Mediterranean sea" />
        </div>

        <div className="story-content">
          <span className="section-label"><span className="accent-line"></span>RESTAURANT STORY</span>
          <h2 className="editorial-heading-large story-title">A TABLE SHAPED<br />BY THE SEA</h2>
          <p className="story-body">
            Founded in 2018 along the coastal stretch of East Coast Road, Lumière was built as a sanctuary of light and flavor. Architecturally crafted from native limestone and reclaimed teak, our space frames the horizon while our kitchen celebrates the daily catch brought in at dawn.
          </p>
          <div className="story-badges">
            <div className="badge-item">
              <h5>EST. 2018</h5>
              <p>FOUNDED</p>
            </div>
            <div class="badge-item">
              <h5>CHENNAI</h5>
              <p>LOCATION</p>
            </div>
            <div className="badge-item">
              <h5>DAILY</h5>
              <p>HARVEST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
