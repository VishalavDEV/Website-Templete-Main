import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingBag, CreditCard } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(EcomContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const navigate = useNavigate();

  if (!product) return null;

  const isLiked = wishlist.some((item) => item.id === product.id);

  // Initialize selected values
  if (!selectedSize && product.sizes && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }
  if (!selectedColor && product.colors && product.colors.length > 0) {
    setSelectedColor(product.colors[0]);
  }

  const handleAddToCart = async () => {
    await addToCart(product, 1, selectedSize, selectedColor);
    onClose();
  };

  const handleBuyNow = async () => {
    await addToCart(product, 1, selectedSize, selectedColor);
    onClose();
    navigate('/checkout');
  };

  const finalPrice = product.price * (1 - product.discount / 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(30, 19, 62, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={onClose}
        >
          {/* Main Modal Panel */}
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()} // Stop propagation
            style={{
              width: '100%',
              maxWidth: '850px',
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 30px 70px rgba(124, 92, 255, 0.15)',
              overflow: 'hidden',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                color: '#5c4e8c',
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(124,92,255,0.1)',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>

            {/* Left Side: Product Image */}
            <div
              style={{
                backgroundColor: '#faf8ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: '450px',
              }}
            >
              <motion.img
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {product.discount > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#7c5cff',
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 10px rgba(124,92,255,0.25)',
                  }}
                >
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Right Side: Product details */}
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#8a7db3', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {product.brand}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#1e133e', fontWeight: 700, marginTop: '4px', lineHeight: '1.2' }}>
                  {product.name}
                </h3>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', color: '#ffd700' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#8a7db3', fontWeight: 500 }}>
                    {product.rating} ({product.reviews} customer reviews)
                  </span>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                  {product.discount > 0 ? (
                    <>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7c5cff' }}>
                        ₹{finalPrice.toFixed(0)}
                      </span>
                      <span style={{ fontSize: '1.05rem', textDecoration: 'line-through', color: '#8a7db3' }}>
                        ₹{product.price.toFixed(0)}
                      </span>
                    </>
                  ) : (
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e133e' }}>
                      ₹{product.price.toFixed(0)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: '#5c4e8c', lineHeight: '1.6', marginTop: '16px' }}>
                  {product.description}
                </p>

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div style={{ marginTop: '20px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#1e133e', fontWeight: 600 }}>Select Size:</span>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          style={{
                            minWidth: '40px',
                            height: '40px',
                            border: selectedSize === sz ? '2px solid #7c5cff' : '1.5px solid rgba(124, 92, 255, 0.15)',
                            background: selectedSize === sz ? '#f1edff' : '#fff',
                            color: selectedSize === sz ? '#7c5cff' : '#5c4e8c',
                            borderRadius: '10px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div style={{ marginTop: '20px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#1e133e', fontWeight: 600 }}>Select Color:</span>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                      {product.colors.map((col) => (
                        <button
                          key={col}
                          onClick={() => setSelectedColor(col)}
                          style={{
                            border: selectedColor === col ? '2px solid #7c5cff' : '1.5px solid rgba(124, 92, 255, 0.15)',
                            background: selectedColor === col ? '#f1edff' : '#fff',
                            color: selectedColor === col ? '#7c5cff' : '#5c4e8c',
                            borderRadius: '20px',
                            padding: '6px 14px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {col}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
                <button
                  onClick={handleAddToCart}
                  className="premium-btn"
                  style={{ flex: 1, padding: '14px', justifyContent: 'center' }}
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="premium-btn-outline"
                  style={{ flex: 1, padding: '13px', justifyContent: 'center' }}
                >
                  <CreditCard size={18} /> Buy Now
                </button>
                <button
                  onClick={handleWishlistClick}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(124, 92, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isLiked ? '#f1edff' : '#fff',
                    color: '#7c5cff',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <Heart size={20} fill={isLiked ? '#7c5cff' : 'none'} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
