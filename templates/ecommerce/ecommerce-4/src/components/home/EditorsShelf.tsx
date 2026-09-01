import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export const EditorsShelf: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DESK EDIT' | 'HOME EDIT' | 'TRAVEL EDIT' | 'SELF CARE EDIT' | 'WEEKEND EDIT'>('DESK EDIT');

  const filteredProducts = PRODUCTS.filter((p) => p.editCategory === activeTab || p.badge === 'ORVANA SHELF').slice(0, 4);

  return (
    <section className="container">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
          CURATED COLLECTIONS
        </span>
        <h2 className="heading-lg" style={{ marginTop: '0.3rem', marginBottom: '1.5rem' }}>THE ORVANA SHELF</h2>

        <div style={{ display: 'inline-flex', gap: '0.5rem', backgroundColor: 'var(--bg-secondary)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', flexWrap: 'wrap' }}>
          {(['DESK EDIT', 'HOME EDIT', 'TRAVEL EDIT', 'SELF CARE EDIT', 'WEEKEND EDIT'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.55rem 1.4rem',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                borderRadius: 'var(--radius-full)',
                backgroundColor: activeTab === tab ? '#161616' : 'transparent',
                color: activeTab === tab ? '#FFFFFF' : 'var(--text-primary)',
                transition: 'all 200ms ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
