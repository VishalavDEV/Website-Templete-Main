import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShopByWorld: React.FC = () => {
  const { navigate } = useShop();

  const worlds = [
    { id: 'electronics', title: 'TECH WORLD', subtitle: 'FLAGSHIP INNOVATION', image: CATEGORIES[0].image, route: '/electronics' },
    { id: 'fashion', title: 'STYLE WORLD', subtitle: 'ITALIAN TAILORING', image: CATEGORIES[1].image, route: '/fashion' },
    { id: 'home', title: 'HOME WORLD', subtitle: 'ARCHITECTURAL LIVING', image: CATEGORIES[2].image, route: '/home' },
    { id: 'beauty', title: 'BEAUTY WORLD', subtitle: 'BOTANICAL RITUALS', image: CATEGORIES[3].image, route: '/beauty' },
    { id: 'sports', title: 'SPORT WORLD', subtitle: 'PEAK PERFORMANCE', image: CATEGORIES[5].image, route: '/sports' },
    { id: 'grocery', title: 'EVERYDAY WORLD', subtitle: 'ESSENTIAL PANTRY', image: CATEGORIES[4].image, route: '/grocery' }
  ];

  return (
    <section className="container">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
          EXPLORE DEPARTMENTS
        </span>
        <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>SHOP BY WORLD</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {worlds.map((w) => (
          <motion.div
            key={w.id}
            whileHover={{ y: -6 }}
            onClick={() => navigate(w.route)}
            className="category-tile"
            style={{
              position: 'relative',
              height: '320px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-light)'
            }}
          >
            {/* Full-Frame Cover Background Image */}
            <img
              src={w.image}
              alt={w.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Dark Overlay Gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(22, 22, 22, 0.9) 0%, rgba(22, 22, 22, 0.25) 60%, rgba(0,0,0,0) 100%)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#FFFFFF'
              }}
            >
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-amber)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                {w.subtitle}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>{w.title}</h3>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#FFFFFF', padding: '0.45rem 1rem', borderRadius: 'var(--radius-full)', width: 'fit-content' }}>
                DISCOVER WORLD <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
