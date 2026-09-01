import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const FeaturedToday: React.FC = () => {
  // 6 Spotlight & Editorial products (Laptop, Smartphone, Headphones, Boots, Overcoat, Tote Bag)
  const editorialProducts = [
    PRODUCTS[1], // NOVA X1 Pro 5G Smartphone (₹64,999)
    PRODUCTS[2], // NOVA Book Ultra 14" OLED Laptop (₹94,999)
    PRODUCTS[0], // ORBIT Studio Pro Headphones (₹7,999)
    PRODUCTS[5], // KIVO Italian Leather Chelsea Boots (₹6,999)
    PRODUCTS[6], // KIVO Tailored Wool-Cashmere Overcoat (₹11,999)
    PRODUCTS[7]  // MIRA Structured Leather Minimalist Tote (₹5,499)
  ];

  return (
    <section className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            EDITORIAL PICK
          </span>
          <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>FEATURED TODAY</h2>
        </div>
      </div>

      {/* 6 Balanced Full Product Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {editorialProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
