import React from 'react';
import { useShop } from '../../context/ShopContext';
import { SlidersHorizontal, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CompareBar: React.FC = () => {
  const { compareList, removeFromCompare, navigate } = useShop();

  if (compareList.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--accent-blue)',
          boxShadow: 'var(--shadow-float)',
          padding: '0.85rem 1.25rem',
          zIndex: 450,
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          maxWidth: '90vw'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={18} color="var(--accent-blue)" />
          <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>COMPARE ({compareList.length}/4)</span>
        </div>

        {/* Selected Product Thumbs */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          {compareList.map((prod) => (
            <div key={prod.id} style={{ position: 'relative' }}>
              <img
                src={prod.images[0]}
                alt={prod.name}
                style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
              />
              <button
                onClick={() => removeFromCompare(prod.id)}
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: '#161616',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem'
                }}
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>

        {/* Compare CTA */}
        <button
          onClick={() => navigate('/compare')}
          className="btn btn-accent"
          style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}
        >
          COMPARE NOW <ArrowRight size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
