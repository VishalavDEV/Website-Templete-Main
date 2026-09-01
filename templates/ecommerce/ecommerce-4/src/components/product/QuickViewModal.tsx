import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Star, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, navigate } = useShop();

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!quickViewProduct) return null;

  const isSaved = isInWishlist(quickViewProduct.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
        onClick={() => setQuickViewProduct(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '860px',
            maxHeight: '90vh',
            overflowY: 'auto',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-float)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="btn-icon"
            style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)' }}
          >
            <X size={18} />
          </button>

          {/* Left Full-Frame Image Container */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', minHeight: '340px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
              <img
                src={quickViewProduct.images[activeImageIdx] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>

            {quickViewProduct.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem', overflowX: 'auto' }}>
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    style={{
                      width: '56px',
                      height: '56px',
                      aspectRatio: '1 / 1',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImageIdx === idx ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                      opacity: activeImageIdx === idx ? 1 : 0.7,
                      cursor: 'pointer'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                {quickViewProduct.brand}
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.25 }}>
                {quickViewProduct.name}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', backgroundColor: '#FFF8EF', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FCD34D' }}>
                  <Star size={13} fill="var(--accent-amber)" color="var(--accent-amber)" />
                  <span style={{ fontWeight: 800 }}>{quickViewProduct.rating}</span>
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>({quickViewProduct.reviewCount} reviews)</span>
              </div>

              <div style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                {quickViewProduct.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, 1);
                    setQuickViewProduct(null);
                  }}
                  className="btn btn-accent"
                  style={{ flex: 1, padding: '0.85rem' }}
                >
                  <ShoppingBag size={16} /> ADD TO BAG
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className="btn btn-outline"
                  style={{ padding: '0.85rem' }}
                  title="Wishlist"
                >
                  <Heart size={16} fill={isSaved ? '#DC2626' : 'none'} color={isSaved ? '#DC2626' : 'currentColor'} />
                </button>
              </div>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  navigate(`/product/${quickViewProduct.slug}`);
                }}
                style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'center' }}
              >
                VIEW FULL DETAILS <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
