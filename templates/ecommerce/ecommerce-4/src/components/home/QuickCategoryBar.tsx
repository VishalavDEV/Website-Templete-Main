import React from 'react';
import { useShop } from '../../context/ShopContext';

export const QuickCategoryBar: React.FC = () => {
  const { navigate, currentRoute } = useShop();

  const categories = [
    { label: 'ALL PRODUCTS', route: '/shop' },
    { label: 'NEW ARRIVALS', route: '/new' },
    { label: 'ELECTRONICS', route: '/electronics' },
    { label: 'FASHION', route: '/fashion' },
    { label: 'HOME & LIVING', route: '/home' },
    { label: 'BEAUTY', route: '/beauty' },
    { label: 'SPORTS', route: '/sports' },
    { label: 'KIDS', route: '/kids' },
    { label: 'TRAVEL', route: '/travel' },
    { label: 'FLASH DEALS', route: '/deals' }
  ];

  return (
    <section className="container">
      <div
        style={{
          display: 'flex',
          gap: '0.65rem',
          overflowX: 'auto',
          padding: '0.75rem 0',
          scrollbarWidth: 'none'
        }}
      >
        {categories.map((c) => {
          const isActive = currentRoute === c.route;
          return (
            <button
              key={c.label}
              onClick={() => navigate(c.route)}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isActive ? 'var(--text-primary)' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                transition: 'all 180ms ease'
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
