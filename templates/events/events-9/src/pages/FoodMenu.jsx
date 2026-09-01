import React from 'react';
import MenuSection from '../components/MenuSection';

export default function FoodMenu() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">A CULINARY EXPERIENCE</span>
          <h1 className="serif-title">FOOD & FEAST MENU</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            Curated by master chefs uniting North Indian heritage recipes with authentic South Indian delicacies.
          </p>
        </div>

        <MenuSection />
      </div>
    </div>
  );
}
