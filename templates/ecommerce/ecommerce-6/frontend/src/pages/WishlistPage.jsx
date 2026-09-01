import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import MagneticButton from '../components/MagneticButton';

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useAuth();
  const { addToCart } = useCart();

  const handleMoveToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toggleWishlist(product); // Remove from wishlist after moving to cart
  };

  return (
    <div style={{ padding: '120px 5% 80px 5%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em' }}>
          YOUR INTEREST LOGS
        </span>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>MY WISHLIST</h1>
        <div style={{ width: '45px', height: '1px', background: 'var(--accent-gold)', margin: '0.5rem auto 0 auto' }} />
      </div>

      <AnimatePresence mode="wait">
        {wishlist.length === 0 ? (
          /* Empty state */
          <motion.div
            key="empty-wishlist"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              textAlign: 'center',
              padding: '4rem 0'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <Heart size={48} color="#ff4d4d" style={{ opacity: 0.8 }} />
            </motion.div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>YOUR WISHLIST IS EMPTY</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '300px', margin: '0 auto' }}>
                Save design items while exploring the collection for easy checkout access.
              </p>
            </div>
            <Link to="/" className="btn-primary" style={{ marginTop: '1rem' }}>
              DISCOVER PIECES
            </Link>
          </motion.div>
        ) : (
          /* Wishlisted Items Grid */
          <motion.div
            key="wishlist-grid"
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            <AnimatePresence>
              {wishlist.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-panel"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '420px',
                    boxShadow: 'var(--shadow-premium)',
                    position: 'relative'
                  }}
                >
                  <Link to={`/product/${product.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Image */}
                    <div style={{ flex: 1.1, overflow: 'hidden', position: 'relative', background: '#f5f4f0' }}>
                      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                      {/* Remove Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'rgba(255, 255, 255, 0.85)',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid var(--border-glass)',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                          color: '#ff4d4d',
                          zIndex: 3
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {/* Details */}
                    <div style={{ flex: 0.9, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255,255,255,0.2)' }}>
                      <div>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {product.category}
                        </span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '0.25rem' }}>{product.name}</h3>
                        <span style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '0.5rem', display: 'block' }}>
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Action direct add to cart */}
                      <MagneticButton
                        onClick={(e) => handleMoveToCart(product, e)}
                        className="btn-primary"
                        style={{ width: '100%', display: 'flex' }}
                      >
                        MOVE TO BAG <ShoppingCart size={14} />
                      </MagneticButton>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WishlistPage;
