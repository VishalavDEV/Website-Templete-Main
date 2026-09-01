import React from 'react';

const BOTANICALS = [
  { name: 'BASIL', img: 'assets/images/hero.jpg', alt: 'Garden Basil' },
  { name: 'HEIRLOOM TOMATO', img: 'assets/images/kitchen.jpg', alt: 'Heirloom Tomato' },
  { name: 'THYME', img: 'assets/images/dish_octopus.jpg', alt: 'Wild Thyme' },
  { name: 'MICRO GREENS', img: 'assets/images/signature.jpg', alt: 'Micro Greens' }
];

export default function GardenSection() {
  return (
    <section id="garden" className="garden-section-sage" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="garden-header-text">
          <span className="house-meta-tag" style={{ color: 'var(--color-light-sage)' }}>BOTANICAL ARCHIVE</span>
          <h2 className="garden-title-sage">
            FROM THE GARDEN<br />
            TO THE TABLE.
          </h2>
        </div>
        <div className="garden-botanical-grid">
          {BOTANICALS.map((item, idx) => (
            <div key={idx} className="botanical-card" data-cursor="EXPLORE">
              <div className="botanical-img-frame">
                <img src={item.img} alt={item.alt} className="botanical-img" />
              </div>
              <div className="botanical-floating-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
