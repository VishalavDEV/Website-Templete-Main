import React, { useState } from 'react';
import type { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, Star, SlidersHorizontal, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    setQuickAddProduct,
    toggleWishlist,
    isInWishlist,
    addToCompare,
    isInCompare,
    setQuickViewProduct,
    navigate
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const isSaved = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const secondaryImage = product.images[1] || product.images[0];

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ((product.colors && product.colors.length > 0) || (product.sizes && product.sizes.length > 0)) {
      setQuickAddProduct(product);
    } else {
      addToCart(product, 1);
    }
  };

  return (
    <motion.div
      className="card-premium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Full-Frame Image Container (4:5 Aspect Ratio) */}
      <div
        className="img-container"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 5',
          backgroundColor: 'var(--bg-secondary)',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => navigate(`/product/${product.slug}`)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            opacity: isHovered && secondaryImage !== product.images[0] ? 0 : 1,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 300ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {secondaryImage !== product.images[0] && (
          <img
            src={secondaryImage}
            alt={`${product.name} alternate`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1.05)' : 'scale(1.06)',
              transition: 'opacity 300ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        )}

        {/* Badges */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 2 }}>
          {product.badge === 'NEW' && <span className="badge badge-new">NEW</span>}
          {product.badge === 'BESTSELLER' && <span className="badge badge-bestseller">BESTSELLER</span>}
          {product.badge === 'SALE' && <span className="badge badge-sale">{product.discount}% OFF</span>}
          {product.badge === 'ORVANA SHELF' && <span className="badge badge-shelf">THE SHELF</span>}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          title={isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
            border: 'none'
          }}
        >
          <Heart
            size={16}
            fill={isSaved ? '#DC2626' : 'none'}
            color={isSaved ? '#DC2626' : '#161616'}
          />
        </motion.button>

        {/* Hover Quick Actions */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            right: '10px',
            display: 'flex',
            gap: '6px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 220ms ease',
            zIndex: 3
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              color: 'var(--text-primary)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <Eye size={13} /> QUICK VIEW
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCompare(product);
            }}
            title={isCompared ? 'In Compare' : 'Add to Compare'}
            style={{
              width: '34px',
              height: '34px',
              backgroundColor: isCompared ? 'var(--accent-blue)' : '#FFFFFF',
              color: isCompared ? '#FFFFFF' : 'var(--text-primary)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <SlidersHorizontal size={13} />
          </button>
        </div>
      </div>

      {/* Card Content Details */}
      <div style={{ padding: '0.9rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
              {product.brand}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.72rem', fontWeight: 700 }}>
              <Star size={12} fill="var(--accent-amber)" color="var(--accent-amber)" />
              <span>{product.rating}</span>
              <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount})</span>
            </div>
          </div>

          <h3
            onClick={() => navigate(`/product/${product.slug}`)}
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: isHovered ? 'var(--accent-blue)' : 'var(--text-primary)',
              lineHeight: 1.3,
              marginBottom: '0.6rem',
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              transition: 'color 180ms ease'
            }}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing Row & Compact + ADD Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)' }}>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice > product.price && (
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* Compact + ADD CTA Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleAddClick}
            style={{
              backgroundColor: 'var(--accent-blue)',
              color: '#FFFFFF',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.2rem',
              boxShadow: '0 2px 6px rgba(56,87,255,0.25)'
            }}
          >
            <Plus size={14} /> ADD
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
