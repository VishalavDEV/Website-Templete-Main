import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import ProductImage from './ProductImage';
import { formatINR } from '../services/api';

const ProductCard = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);
  const [showParticleEffect, setShowParticleEffect] = useState(false);

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setShowParticleEffect(true);
    setTimeout(() => setShowParticleEffect(false), 800);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none', position: 'relative' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="glass-panel" style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: hovered ? '1.5px solid rgba(0, 240, 255, 0.45)' : '1px solid rgba(0, 240, 255, 0.12)',
        boxShadow: hovered ? '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
        background: 'rgba(11, 19, 43, 0.4)',
        padding: '18px',
        height: '380px',
        justifyContent: 'space-between',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s'
      }}>
        {/* Floating particles effect on click/add to cart */}
        <AnimatePresence>
          {showParticleEffect && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 15,
                background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 60%)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#00f0ff',
                    boxShadow: '0 0 10px #00f0ff',
                    top: '50%',
                    left: '50%'
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 140,
                    y: (Math.random() - 0.5) * 140,
                    scale: [1, 0],
                    opacity: [1, 0]
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Header: Badge & Wishlist Heart */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
          {product.badge ? (
            <span style={{
              fontSize: '9px',
              fontFamily: 'var(--font-tech)',
              backgroundColor: product.badge.toLowerCase().includes('premium') || product.badge.toLowerCase().includes('hologram') ? '#0066ff' : 'rgba(0, 240, 255, 0.1)',
              color: '#00f0ff',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              padding: '2px 6px',
              borderRadius: '4px',
              letterSpacing: '0.05em'
            }}>
              {product.badge}
            </span>
          ) : <div />}

          <button
            onClick={handleWishlistToggle}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isLiked ? '#ff0055' : '#94a3b8',
              filter: isLiked ? 'drop-shadow(0 0 5px #ff0055)' : 'none',
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
            onMouseEnter={(e) => { if (!isLiked) e.currentTarget.style.color = '#00f0ff'; }}
            onMouseLeave={(e) => { if (!isLiked) e.currentTarget.style.color = '#94a3b8'; }}
          >
            <Heart size={18} fill={isLiked ? '#ff0055' : 'none'} />
          </button>
        </div>

        {/* Product Image Viewer */}
        <Link to={`/product/${product.id}`} style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', height: '160px', marginTop: '10px' }}>
          <motion.div
            style={{ width: '100%', height: '100%' }}
            animate={{
              scale: hovered ? 1.08 : 1,
              rotate: hovered ? -2 : 0
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ProductImage id={product.id} category={product.category} hovered={hovered} />
          </motion.div>
        </Link>

        {/* Product Meta */}
        <div style={{ zIndex: 5, marginTop: '10px' }}>
          <p style={{ fontSize: '10px', fontFamily: 'var(--font-tech)', color: '#00f0ff', opacity: 0.8 }}>
            {product.brand}
          </p>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#fff',
              marginTop: '4px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px', fontSize: '12px', color: '#94a3b8' }}>
            <span style={{ color: '#00f0ff' }}>★</span>
            <span style={{ fontWeight: '500', color: '#fff' }}>{product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>

          {/* Price Container */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
            <span style={{
              fontSize: '18px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: hovered ? '0 0 8px rgba(255,255,255,0.2)' : 'none'
            }}>
              {formatINR(product.price)}
            </span>
            {product.oldPrice > product.price && (
              <>
                <span style={{ fontSize: '12px', color: '#64748b', textDecoration: 'line-through' }}>
                  {formatINR(product.oldPrice)}
                </span>
                <span style={{ fontSize: '10px', color: '#ff0055', fontFamily: 'var(--font-tech)' }}>
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>

        {/* Hover Action Drawer */}
        <div style={{
          position: 'relative',
          height: '42px',
          marginTop: '15px',
          overflow: 'hidden',
          zIndex: 6
        }}>
          <AnimatePresence initial={false}>
            {!hovered ? (
              /* Default state: rating & category info */
              <motion.div
                key="rating-label"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: -45 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: '11px',
                  color: '#64748b',
                  fontFamily: 'var(--font-tech)'
                }}
              >
                <span>STOCK: {product.stock > 0 ? `${product.stock} UNITS` : 'OUT OF STOCK'}</span>
                <span style={{ textTransform: 'uppercase' }}>{product.category}</span>
              </motion.div>
            ) : (
              /* Hover state: Quick actions drawer (Quick View + Add to Cart) */
              <motion.div
                key="action-drawer"
                initial={{ y: 45 }}
                animate={{ y: 0 }}
                exit={{ y: 45 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  gap: '8px',
                  height: '100%',
                  width: '100%'
                }}
              >
                <Link to={`/product/${product.id}`} className="cyber-button" style={{
                  flex: '1',
                  padding: '0 8px',
                  fontSize: '11px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '6px'
                }}>
                  <Eye size={12} /> DETAILS
                </Link>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className="cyber-button solid"
                  style={{
                    flex: '2',
                    padding: '0 8px',
                    fontSize: '11px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '6px'
                  }}
                >
                  <ShoppingCart size={12} /> ADD
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
