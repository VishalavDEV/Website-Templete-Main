import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/shop/ProductCard';

export const MenPage: React.FC = () => {
  const { products } = useShop();
  const [selectedSubcat, setSelectedSubcat] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = ['ALL', 'SHIRTS', 'TROUSERS', 'JACKETS', 'KNITWEAR', 'DENIM'];

  const menProducts = products.filter(p => p.gender === 'men');
  const filteredProducts = selectedSubcat === 'ALL'
    ? menProducts
    : menProducts.filter(p => p.category.toUpperCase() === selectedSubcat);

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Category Hero Banner */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', marginBottom: '40px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            AUREL MEN
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 68px)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            REFINED.<br />RELAXED. CONSIDERED.
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
            Deconstructed blazers, fine gauge polos, Japanese selvedge denim, and relaxed linen resort shirts.
          </p>
        </div>
      </section>

      <div className="container-custom" style={{ paddingBottom: '100px' }}>
        {/* Subcategory Pills */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '40px' }}>
          {subcategories.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubcat(sub)}
              style={{
                padding: '8px 18px',
                fontSize: '11px',
                letterSpacing: '0.12em',
                fontWeight: '600',
                textTransform: 'uppercase',
                borderRadius: '999px',
                backgroundColor: selectedSubcat === sub ? 'var(--text-primary)' : 'var(--bg-card)',
                color: selectedSubcat === sub ? 'var(--bg-primary)' : 'var(--text-primary)',
                border: '1px solid var(--border-medium)',
                whiteSpace: 'nowrap',
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};
