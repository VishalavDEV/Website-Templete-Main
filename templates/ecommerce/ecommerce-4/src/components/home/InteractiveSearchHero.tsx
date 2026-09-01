import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Search, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const InteractiveSearchHero: React.FC = () => {
  const { setIsSearchOpen } = useShop();

  const trendingTags = ['Smartphones', 'Sneakers', 'Headphones', 'Kitchen', 'Skincare', 'Gaming'];

  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', padding: '1.5rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
        
        {/* Search Field */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setIsSearchOpen(true)}
          style={{
            flex: 1,
            maxWidth: '680px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.9rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-light)',
            borderRadius: 'var(--radius-full)',
            padding: '0.8rem 1.4rem',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 200ms ease'
          }}
        >
          <Search size={20} color="var(--accent-cobalt)" />
          <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Search products, categories and brands...
          </span>
          <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700, backgroundColor: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
            PRESS SEARCH
          </span>
        </motion.div>

        {/* Trending Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem' }}>
          <span style={{ fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <TrendingUp size={14} color="var(--accent-cobalt)" /> TRENDING:
          </span>
          {trendingTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ y: -2, backgroundColor: '#111827', color: '#FFFFFF' }}
              onClick={() => setIsSearchOpen(true)}
              style={{
                padding: '0.38rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.78rem',
                border: '1px solid var(--border-light)'
              }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
