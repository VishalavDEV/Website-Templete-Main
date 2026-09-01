import React from 'react';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <span className="section-label"><span className="accent-line"></span>ATMOSPHERE</span>
        <h2 className="editorial-heading-large">THREE WAYS TO DINE</h2>
      </div>

      <div className="experience-track-wrapper">
        <div className="experience-track">
          {/* 01 */}
          <div className="experience-card" data-cursor="VIEW">
            <span className="exp-num">01</span>
            <div className="exp-img-wrapper">
              <img src="assets/images/exp_terrace.jpg" alt="The Terrace dining at sunset" />
            </div>
            <h3 className="exp-title">THE TERRACE</h3>
            <p className="exp-desc">Open-air coastal seating framing golden sunsets over the Bay of Bengal with gentle ocean breezes.</p>
            <a href="#reservation" className="exp-link">RESERVE TERRACE →</a>
          </div>

          {/* 02 */}
          <div className="experience-card" data-cursor="VIEW">
            <span className="exp-num">02</span>
            <div className="exp-img-wrapper">
              <img src="assets/images/exp_chefstable.jpg" alt="The Chef's Table experience" />
            </div>
            <h3 className="exp-title">THE CHEF'S TABLE</h3>
            <p className="exp-desc">An intimate front-row counter facing our open fire kitchen with custom multi-course tasting pairings.</p>
            <a href="#reservation" className="exp-link">RESERVE COUNTER →</a>
          </div>

          {/* 03 */}
          <div className="experience-card" data-cursor="VIEW">
            <span className="exp-num">03</span>
            <div className="exp-img-wrapper">
              <img src="assets/images/story_portrait.jpg" alt="Private Dining room" />
            </div>
            <h3 className="exp-title">PRIVATE DINING</h3>
            <p className="exp-desc">A secluded architectural room designed for celebrations, private family gatherings, and wine lunches.</p>
            <a href="#reservation" className="exp-link">ENQUIRE PRIVATE →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
