import React from 'react';

const INGREDIENTS = [
  { num: '01', name: 'TOMATO', desc: 'Heirloom varieties grown in organic soil, sun-ripened and served with cold-pressed olive oil.' },
  { num: '02', name: 'HERB', desc: 'Wild basil, lemon thyme, and sea rosemary hand-foraged daily from our rooftop garden.' },
  { num: '03', name: 'SEA', desc: 'Sustainably line-caught sea bass and bay prawns from local coastal fishermen.' },
  { num: '04', name: 'FIRE', desc: 'Wood-fired embers using mango and tamarind logs for gentle, aromatic caramelization.' },
  { num: '05', name: 'GRAIN', desc: 'Heritage millets and ancient grains milled in-house for artisanal breads and pastas.' }
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="ingredients-section">
      <div className="container">
        <div className="ingredients-header">
          <span className="house-meta-tag">SEASONAL HARVEST</span>
          <h2 className="ingredients-title-main">THE FIVE ELEMENTS</h2>
        </div>
        <div className="ingredients-sticky-container">
          {INGREDIENTS.map((item) => (
            <div key={item.num} className="ingredient-card-node" data-cursor="VIEW">
              <span className="ingredient-num">{item.num}</span>
              <h3 className="ingredient-name">{item.name}</h3>
              <p className="ingredient-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
