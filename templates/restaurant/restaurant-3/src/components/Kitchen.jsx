import React from 'react';

export default function Kitchen() {
  return (
    <section className="kitchen-section">
      <div className="kitchen-grid">
        <div>
          <span className="section-label"><span className="accent-line"></span>OUR PHILOSOPHY</span>
          <h2 className="kitchen-heading">FRESHNESS<br />NEEDS NO<br />EXPLANATION.</h2>

          <div className="kitchen-facts">
            <div className="fact-item">
              <h4>LOCAL PRODUCE</h4>
              <p>Sourced daily within 30 miles</p>
            </div>
            <div className="fact-item">
              <h4>OPEN FIRE</h4>
              <p>Olive wood & charcoal hearth</p>
            </div>
            <div className="fact-item">
              <h4>SEASONAL MENU</h4>
              <p>Evolves with weather & tide</p>
            </div>
          </div>
        </div>

        <div className="kitchen-visual">
          <img src="assets/images/kitchen.jpg" alt="Dark cinematic kitchen with hearth flames at Lumière" />
        </div>
      </div>
    </section>
  );
}
