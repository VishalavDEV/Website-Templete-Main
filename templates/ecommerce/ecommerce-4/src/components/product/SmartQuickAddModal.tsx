import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SmartQuickAddModal: React.FC = () => {
  const { quickAddProduct, setQuickAddProduct, addToCart } = useShop();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (quickAddProduct) {
      setSelectedColor(quickAddProduct.colors?.[0]?.name || '');
      setSelectedSize(quickAddProduct.sizes?.[0] || '');
    }
  }, [quickAddProduct]);

  if (!quickAddProduct) return null;

  const handleConfirmAdd = () => {
    addToCart(quickAddProduct, 1, selectedColor, selectedSize);
    setQuickAddProduct(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setQuickAddProduct(null)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-float)',
            width: '100%',
            maxWidth: '380px',
            padding: '1.5rem',
            position: 'relative'
          }}
        >
          <button
            onClick={() => setQuickAddProduct(null)}
            className="btn-icon"
            style={{ position: 'absolute', top: '12px', right: '12px' }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            <img
              src={quickAddProduct.images[0]}
              alt={quickAddProduct.name}
              style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
            />
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--accent-blue)' }}>{quickAddProduct.brand}</div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {quickAddProduct.name}
              </h4>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                ₹{quickAddProduct.price.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Color Variant Selector */}
          {quickAddProduct.colors && quickAddProduct.colors.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                COLOR: <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {quickAddProduct.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: selectedColor === c.name ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                      outline: selectedColor === c.name ? '2px solid #FFFFFF' : 'none',
                      cursor: 'pointer'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Variant Selector */}
          {quickAddProduct.sizes && quickAddProduct.sizes.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                SELECT SIZE:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {quickAddProduct.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: selectedSize === s ? 'var(--text-primary)' : 'var(--bg-primary)',
                      color: selectedSize === s ? '#FFFFFF' : 'var(--text-primary)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleConfirmAdd}
            className="btn btn-accent"
            style={{ width: '100%', padding: '0.8rem' }}
          >
            <ShoppingBag size={16} /> ADD TO BAG
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
