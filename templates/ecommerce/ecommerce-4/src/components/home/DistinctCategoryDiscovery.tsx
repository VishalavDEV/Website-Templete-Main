import React, { useState } from 'react';
import { CATEGORIES } from '../../data/categories';
import { useShop } from '../../context/ShopContext';
import { Reveal } from '../animation/Reveal';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const DistinctCategoryDiscovery: React.FC = () => {
  const { navigate } = useShop();

  // 3D Tilt State for active hovered index
  const [tilt, setTilt] = useState<{ [key: string]: { rotateX: number; rotateY: number } }>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (y - 0.5) * -4; // max 2deg tilt
    const rotateY = (x - 0.5) * 4;
    setTilt((prev) => ({ ...prev, [id]: { rotateX, rotateY } }));
  };

  const handleMouseLeave = (id: string) => {
    setTilt((prev) => ({ ...prev, [id]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <section className="container">
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent-cobalt)', textTransform: 'uppercase' }}>
              MARKETPLACE CATALOG
            </span>
            <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>SHOP BY CATEGORY</h2>
          </div>
          <button onClick={() => navigate('/shop')} style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cobalt)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            VIEW ALL CATEGORIES <ArrowRight size={16} />
          </button>
        </div>
      </Reveal>

      {/* Grid of Distinct Layout Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {CATEGORIES.map((cat, idx) => {
          const cardTilt = tilt[cat.id] || { rotateX: 0, rotateY: 0 };
          return (
            <Reveal key={cat.id} delay={idx * 0.04}>
              <motion.div
                className="category-tile"
                onMouseMove={(e) => handleMouseMove(cat.id, e)}
                onMouseLeave={() => handleMouseLeave(cat.id)}
                onClick={() => navigate(`/category/${cat.id}`)}
                animate={{ rotateX: cardTilt.rotateX, rotateY: cardTilt.rotateY }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  perspective: '1000px',
                  position: 'relative'
                }}
              >
                <div className="img-container" style={{ aspectRatio: idx % 3 === 0 ? '16/10' : '4/3' }}>
                  <img src={cat.image} alt={cat.name} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,24,39,0.7) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', color: '#FFFFFF', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                    0{idx + 1}
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.85rem', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {cat.tagline}
                  </p>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cobalt)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    EXPLORE COLLECTION <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
