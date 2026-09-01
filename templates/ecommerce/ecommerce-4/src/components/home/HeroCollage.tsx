import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroCollage: React.FC = () => {
  const { navigate } = useShop();

  const heroItems = [
    { label: 'SMARTPHONES', category: 'electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[1] },
    { label: 'AUDIO GEAR', category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[0] },
    { label: 'ITALIAN FOOTWEAR', category: 'fashion', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[5] },
    { label: 'MODERN LIVING', category: 'home', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[9] },
    { label: 'BOTANICAL BEAUTY', category: 'beauty', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[12] },
    { label: 'MATCHICAL TEA', category: 'grocery', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80', product: PRODUCTS[15] }
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: 'clamp(2rem, 4vw, 4.5rem)', margin: '1rem 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left Copy */}
        <div style={{ maxWidth: '520px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#FFFFFF', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-blue)', marginBottom: '1.25rem', border: '1px solid var(--border-light)' }}>
            <Sparkles size={14} /> DIGITAL DEPARTMENT STORE
          </div>

          <h1 className="heading-xl" style={{ lineHeight: 1.08, marginBottom: '1.25rem' }}>
            EVERYTHING <br />
            <span style={{ color: 'var(--accent-blue)' }}>WORTH DISCOVERING.</span>
          </h1>

          <p className="body-lead" style={{ marginBottom: '2.25rem', maxWidth: '460px' }}>
            Technology, style, home and everyday essentials — beautifully brought together.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/shop')} className="btn btn-accent" style={{ padding: '0.95rem 2.25rem' }}>
              SHOP NOW <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/electronics')} className="btn btn-outline" style={{ padding: '0.95rem 2rem' }}>
              EXPLORE CATEGORIES
            </button>
          </div>
        </div>

        {/* Right Product Grid Collage with Full-Frame Aspect-Ratio Images */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}
        >
          {heroItems.map((item, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => navigate(`/product/${item.product.slug}`)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-primary)'
              }}
            >
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(22,22,22,0.65)',
                  backdropFilter: 'blur(3px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  textAlign: 'center',
                  opacity: hoveredIdx === idx ? 1 : 0,
                  transition: 'opacity 200ms ease',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  SHOP <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
