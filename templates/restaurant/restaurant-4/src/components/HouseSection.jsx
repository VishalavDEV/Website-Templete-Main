import React from 'react';

export default function HouseSection() {
  return (
    <section id="house" className="house-section" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="house-grid-asymmetric">
          <div className="house-left-images">
            <img src="assets/images/kitchen.jpg" alt="Architectural Garden House" className="house-img-vertical" data-cursor="VIEW" />
            <img src="assets/images/dish_beef.jpg" alt="Organic Craft Dish" className="house-img-circle" data-cursor="VIEW" />
          </div>
          <div className="house-right-content">
            <span className="house-meta-tag">THE HOUSE &bull; EST. 2018</span>
            <h2 className="house-heading">A HOUSE BUILT AROUND THE TABLE.</h2>
            <p className="house-paragraph">
              Nestled amidst lush botanical greenery in Chennai, our space seamlessly blends contemporary indoor architecture with open garden dining. Every element—from hand-carved stone pillars to artisanal linen—is curated to encourage slow, mindful dining.
            </p>
            <div className="house-badge-row">
              <span>EST. 2018</span>
              <span>CHENNAI, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
