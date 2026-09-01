import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const CategoryWorldSections: React.FC = () => {
  const { navigate } = useShop();

  const techProducts = PRODUCTS.filter((p) => p.category === 'electronics').slice(0, 4);
  const styleProducts = PRODUCTS.filter((p) => p.category === 'fashion').slice(0, 4);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* Tech World Showcase */}
      <section className="container">
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                ELECTRONICS & TECH
              </span>
              <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>SMARTER EVERYDAY</h2>
            </div>
            <button onClick={() => navigate('/electronics')} className="btn btn-accent">
              SHOP TECH →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {techProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Style World Showcase */}
      <section className="container">
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                FASHION & APPAREL
              </span>
              <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>YOUR EVERYDAY EDIT</h2>
            </div>
            <button onClick={() => navigate('/fashion')} className="btn btn-primary">
              SHOP STYLE →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {styleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
