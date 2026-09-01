import React, { useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import type { Product } from '../../types';

interface QuickViewContentProps {
  product: Product;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ product, onClose }) => {
  const { addToCart, isInWishlist, toggleWishlist, formatINR } = useShop();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const isSaved = isInWishlist(product.id);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '860px',
        backgroundColor: 'var(--bg-primary)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        overflow: 'hidden',
        borderRadius: '2px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 10,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
        }}
      >
        <X size={18} />
      </button>

      {/* Product Image */}
      <div style={{ aspectRatio: '4 / 5', backgroundColor: 'var(--bg-secondary)' }}>
        <img
          src={selectedColor?.image || product.images.primary}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Product Info */}
      <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase' }}>
            {product.brand} • {product.category}
          </span>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', marginTop: '4px', marginBottom: '12px' }}>
            {product.name}
          </h2>

          <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>
            {formatINR(product.price)}
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
            {product.description}
          </p>

          {/* Colors */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '10px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              COLOR: <span style={{ color: 'var(--text-secondary)' }}>{selectedColor?.name}</span>
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: c.hex,
                    border: selectedColor?.name === c.name ? '2px solid var(--text-primary)' : '1px solid rgba(0,0,0,0.2)',
                    padding: '2px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '10px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              SELECT SIZE
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  style={{
                    padding: '8px 14px',
                    fontSize: '11px',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: selectedSize === s ? 'var(--text-primary)' : 'var(--border-medium)',
                    backgroundColor: selectedSize === s ? 'var(--text-primary)' : 'transparent',
                    color: selectedSize === s ? 'var(--bg-primary)' : 'var(--text-primary)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              addToCart(product, selectedColor, selectedSize, 1);
              onClose();
            }}
            className="btn-aurel-primary"
            style={{ flex: 1 }}
          >
            <ShoppingBag size={16} /> ADD TO BAG
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className="btn-aurel-outline"
            style={{ width: '48px', padding: 0 }}
            title="Save to wishlist"
          >
            <Heart size={16} fill={isSaved ? "#C2410C" : "none"} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct } = useShop();

  if (!quickViewProduct) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(23, 22, 20, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={() => setQuickViewProduct(null)}
    >
      <QuickViewContent
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
