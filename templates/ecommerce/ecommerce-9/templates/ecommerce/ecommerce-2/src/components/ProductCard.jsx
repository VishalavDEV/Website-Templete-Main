import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, formatPrice } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  const isWishlisted = isInWishlist(product.id);
  const hasSecondaryImg = product.images && product.images.length > 1;

  return (
    <div
      style={{
        position: 'relative',
        background: '#FAF7F0',
        border: isHovered ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-sm)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1.15',
          overflow: 'hidden',
          backgroundColor: '#F5F0E6'
        }}
      >
        {/* Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {product.isNew && <span className="badge-emerald">NEW RELEASE</span>}
          {product.isBestseller && <span className="badge-gold">BESTSELLER</span>}
        </div>

        {/* Wishlist Button */}
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
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 247, 240, 0.9)',
            border: '1px solid var(--border-gold)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isWishlisted ? 'var(--gold-primary)' : 'var(--emerald-deep)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s ease'
          }}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? 'var(--gold-primary)' : 'none'} />
        </button>

        {/* Product Image Link */}
        <Link to={`/product/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={isHovered && hasSecondaryImg ? product.images[1] : product.images[0]}
            alt={product.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.06)' : 'scale(1.0)'
            }}
            loading="lazy"
          />
        </Link>

        {/* Quick View Button */}
        <button
          onClick={() => setQuickViewProduct(product)}
          style={{
            position: 'absolute',
            bottom: isHovered ? '56px' : '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            padding: '0.5rem 1rem',
            background: 'rgba(250, 247, 240, 0.95)',
            border: '1px solid var(--gold-primary)',
            color: 'var(--emerald-deep)',
            fontSize: '0.72rem',
            fontWeight: '700',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            whiteSpace: 'nowrap'
          }}
        >
          <Eye size={14} style={{ color: 'var(--gold-primary)' }} /> Quick View
        </button>

        {/* Slide-Up Emerald Add to Bag Button */}
        <button
          onClick={() => addToCart(product)}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 9,
            padding: '0.85rem',
            background: 'var(--emerald-deep)',
            color: 'var(--gold-light)',
            borderTop: '1px solid var(--gold-primary)',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: 'none',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <ShoppingBag size={15} style={{ color: 'var(--gold-primary)' }} /> Add to Bag
        </button>
      </div>

      {/* Product Info Section */}
      <div style={{ padding: '1.2rem 1.4rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--emerald-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>
              {product.category}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.72rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
              <Star size={12} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Name in Dark Emerald */}
          <Link
            to={`/product/${product.id}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              fontWeight: '500',
              color: 'var(--emerald-deep)',
              textDecoration: 'none',
              lineHeight: 1.25,
              display: 'block',
              marginBottom: '0.3rem'
            }}
          >
            {product.name}
          </Link>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{product.material}</p>
        </div>

        {/* Price in Gold */}
        <div style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--gold-dark)' }}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span style={{ textDecoration: 'line-through', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
