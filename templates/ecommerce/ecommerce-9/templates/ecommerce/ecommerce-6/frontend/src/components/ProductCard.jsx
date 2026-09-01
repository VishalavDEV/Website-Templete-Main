import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const isWishlisted = wishlist.some((p) => p.id === product.id);

  const handleAddClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      navigate('/auth?redirect=');
      return;
    }
    await toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="glass-panel"
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '420px',
        position: 'relative',
        boxShadow: 'var(--shadow-premium)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.3)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(197, 168, 128, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-glass)';
        e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
      }}
    >
      <Link to={`/product/${product.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Product Image Panel */}
        <div style={{ flex: 1.1, overflow: 'hidden', position: 'relative', background: '#f5f4f0' }}>
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />

          {/* Category Tag */}
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(251, 250, 246, 0.85)',
              backdropFilter: 'blur(4px)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-secondary)',
              fontSize: '0.65rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '4px 8px',
              borderRadius: '2px'
            }}
          >
            {product.category}
          </span>

          {/* Floating Wishlist Button */}
          <motion.button
            onClick={handleWishlistClick}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
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
              zIndex: 3,
              color: isWishlisted ? '#ff4d4d' : 'var(--text-secondary)'
            }}
          >
            <Heart size={15} fill={isWishlisted ? '#ff4d4d' : 'none'} />
          </motion.button>

          {/* Quick Add To Cart Button */}
          <motion.button
            onClick={handleAddClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              border: 'none',
              zIndex: 3
            }}
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>

        {/* Product Info Panel */}
        <div style={{ flex: 0.9, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.3)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {/* Rating Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <Star size={12} fill="var(--accent-gold)" color="var(--accent-gold)" />
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent-gold)' }}>
                {product.rating}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ({product.stock > 0 ? `${product.stock} units` : 'Sold Out'})
              </span>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.01em', lineBreak: 'strict' }}>
              {product.name}
            </h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <span style={{ fontSize: '1.3rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent-gold)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              EXPLORE →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
