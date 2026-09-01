import React from 'react';

export default function Signature() {
  return (
    <section className="signature-section">
      <img className="signature-bg-image" src="assets/images/dish_seabass.jpg" alt="Charred Sea Bass Signature Dish" />

      <div className="signature-card">
        <span className="signature-tag">TODAY'S SIGNATURE</span>
        <h2 className="signature-title">Charred Sea Bass</h2>
        <p className="signature-ingredients">Citrus · Shaved Fennel · Maldon Sea Salt</p>
        <span className="signature-price">₹1,150</span>
      </div>
    </section>
  );
}
