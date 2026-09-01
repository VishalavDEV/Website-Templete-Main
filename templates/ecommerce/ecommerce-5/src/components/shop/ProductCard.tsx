import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist, setQuickViewProduct, formatINR } = useShop();
  const isSaved = isInWishlist(product.id);

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container */}
      <div className="product-card-image-wrapper" data-cursor="QUICK VIEW">
        <Link to={`/product/${product.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={product.images.primary}
            alt={product.name}
            className="product-card-image primary"
            loading="lazy"
          />
          <img
            src={product.images.secondary || product.images.primary}
            alt={`${product.name} lifestyle`}
            className="product-card-image secondary"
            loading="lazy"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 10,
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '9px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              padding: '4px 8px',
              textTransform: 'uppercase',
              border: '1px solid var(--border-light)',
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Button with Heart Pulse Animation */}
        <motion.button
          whileTap={{ scale: 1.25 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`wishlist-icon-btn ${isSaved ? 'active' : ''}`}
          aria-label="Toggle Wishlist"
          title={isSaved ? "Saved in Wishlist" : "Save to Wishlist"}
          data-cursor="♡"
        >
          <Heart size={16} fill={isSaved ? "#C2410C" : "none"} strokeWidth={1.5} />
        </motion.button>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="quick-view-btn"
        >
          QUICK VIEW →
        </button>
      </div>

      {/* Info Block */}
      <div style={{ paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              fontWeight: '600',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            {product.brand}
          </span>

          <span
            style={{
              fontSize: '10px',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
            }}
          >
            {product.colors[0]?.name}
          </span>
        </div>

        <Link
          to={`/product/${product.slug}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: '500',
            color: 'var(--text-primary)',
            lineHeight: '1.4',
            textDecoration: 'none',
          }}
        >
          {product.name}
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
            {formatINR(product.price)}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
              {formatINR(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
          {product.colors.map((col, idx) => (
            <span
              key={idx}
              title={col.name}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: col.hex,
                border: '1px solid rgba(0,0,0,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
