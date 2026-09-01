import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const ProductCard = ({ product, onQuickView, delay = 0 }) => {
  const { toggleWishlist, wishlist, addToCart } = useContext(EcomContext);
  const [isHovered, setIsHovered] = useState(false);
  const [flyEffect, setFlyEffect] = useState(false);
  const navigate = useNavigate();

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setFlyEffect(true);
    setTimeout(() => setFlyEffect(false), 800);
    // Add default first size and color
    const defaultSize = product.sizes ? product.sizes[0] : 'One Size';
    const defaultColor = product.colors ? product.colors[0] : 'Default';
    await addToCart(product, 1, defaultSize, defaultColor);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const finalPrice = product.price * (1 - product.discount / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: '#fff',
        border: '1px solid rgba(124, 92, 255, 0.08)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(124, 92, 255, 0.1)'
          : '0 8px 24px rgba(124, 92, 255, 0.03)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '420px',
        overflow: 'hidden',
      }}
    >
      {/* Product Image Panel */}
      <div
        style={{
          position: 'relative',
          flex: 1.2,
          backgroundColor: '#faf8ff',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Sale Tag */}
        {product.discount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: '#7c5cff',
              color: '#fff',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              padding: '4px 10px',
              borderRadius: '20px',
              zIndex: 3,
              boxShadow: '0 4px 10px rgba(124, 92, 255, 0.25)',
            }}
          >
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: isLiked ? '#7c5cff' : 'rgba(255,255,255,0.7)',
            color: isLiked ? '#fff' : '#7c5cff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(124, 92, 255, 0.1)',
            zIndex: 3,
            transition: 'background-color 0.3s, color 0.3s',
          }}
          className="wishlist-btn"
        >
          <motion.div whileTap={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Heart size={18} fill={isLiked ? '#fff' : 'none'} />
          </motion.div>
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05) rotate(1deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Quick View Button Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(30, 19, 62, 0.8)',
                backdropFilter: 'blur(5px)',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                zIndex: 4,
              }}
            >
              <Eye size={14} /> Quick View
            </motion.button>
          )}
        </AnimatePresence>

        {/* Flying item overlay effect */}
        <AnimatePresence>
          {flyEffect && (
            <motion.div
              initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
              animate={{ scale: 0.1, x: 200, y: -300, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 0 15px rgba(124, 92, 255, 0.5)',
                zIndex: 100,
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Product Info Panel */}
      <div style={{ padding: '16px', flex: 0.8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#8a7db3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {product.brand}
          </span>
          <h3
            style={{
              fontSize: '0.95rem',
              color: '#1e133e',
              fontWeight: 600,
              marginTop: '4px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              height: '38px',
              lineHeight: '1.2',
            }}
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
            <div style={{ display: 'flex', color: '#ffd700' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#8a7db3', fontWeight: 500 }}>
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          {/* Price Tag */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {product.discount > 0 ? (
              <>
                <span style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: '#8a7db3' }}>
                  ₹{product.price.toFixed(0)}
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#7c5cff' }}>
                  ₹{finalPrice.toFixed(0)}
                </span>
              </>
            ) : (
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e133e' }}>
                ₹{product.price.toFixed(0)}
              </span>
            )}
          </div>

          {/* Add To Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#7c5cff',
              color: '#fff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(124, 92, 255, 0.25)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a28eff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7c5cff'}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
