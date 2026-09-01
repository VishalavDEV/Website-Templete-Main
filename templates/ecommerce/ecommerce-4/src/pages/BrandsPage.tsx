import React from 'react';
import { BRANDS } from '../data/brands';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BrandsPage: React.FC = () => {
  const { navigate } = useShop();

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            PARTNER BRANDS DIRECTORY
          </span>
          <h1 className="heading-xl" style={{ marginTop: '0.2rem' }}>OUR PARTNER BRANDS</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem', maxWidth: '540px', margin: '0.3rem auto 0' }}>
            Curated partner brands delivering excellence across technology, fashion, home, beauty, and active lifestyle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {BRANDS.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ y: -4, borderColor: 'var(--accent-blue)' }}
              onClick={() => navigate('/shop')}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, letterSpacing: '0.18em', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {b.logoText}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.25rem' }}>{b.name}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{b.tagline}</p>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                SHOP BRAND <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
