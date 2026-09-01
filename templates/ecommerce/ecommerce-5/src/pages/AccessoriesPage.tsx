import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/shop/ProductCard';

export const AccessoriesPage: React.FC = () => {
  const { products } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accProducts = products.filter(p => p.gender === 'accessories');

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Category Hero Banner */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', marginBottom: '40px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            AUREL OBJECTS
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 68px)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            CURATED ACCESSORIES
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
            Handcrafted calfskin totes, bio-acetate eyewear, cashmere fringe scarves, and minimalist timepieces.
          </p>
        </div>
      </section>

      <div className="container-custom" style={{ paddingBottom: '100px' }}>
        <div className="product-grid">
          {accProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};
