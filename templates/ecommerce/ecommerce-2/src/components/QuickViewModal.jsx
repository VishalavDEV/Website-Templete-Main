import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Star, ShieldCheck, Truck, ExternalLink } from 'lucide-react';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, formatPrice } = useContext(ShopContext);

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    quickViewProduct && quickViewProduct.sizes ? quickViewProduct.sizes[0] : 'Standard'
  );
  const [selectedMetal, setSelectedMetal] = useState(
    quickViewProduct ? quickViewProduct.material : '18K Yellow Gold'
  );
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = isInWishlist(quickViewProduct.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setSelectedImg(0);
    setQty(1);
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, qty, selectedSize, selectedMetal);
    handleClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(20, 19, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease forwards'
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          backgroundColor: '#FAF7F2',
          border: '1px solid var(--border-gold)',
          boxShadow: 'var(--shadow-lg)',
          overflowY: 'auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid var(--border-gold)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Gallery Column */}
        <div style={{ gridColumn: 'span 12', padding: '1.5rem' }} className="modal-img-col">
          <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: 'var(--bg-beige)', marginBottom: '1rem' }}>
            <img
              src={quickViewProduct.images[selectedImg] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000';
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {quickViewProduct.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  style={{
                    width: '60px',
                    height: '60px',
                    border: selectedImg === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-light)',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div style={{ gridColumn: 'span 12', padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="modal-info-col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="badge-gold">{quickViewProduct.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.8rem', color: 'var(--gold-dark)' }}>
                <Star size={14} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} />
                <span>{quickViewProduct.rating} ({quickViewProduct.reviews} reviews)</span>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              {quickViewProduct.name}
            </h2>

            <div style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '1rem' }}>
              {formatPrice(quickViewProduct.price)}
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {quickViewProduct.description}
            </p>

            {/* Metal Options */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>
                Precious Metal: <span style={{ color: 'var(--gold-dark)', fontWeight: '400' }}>{selectedMetal}</span>
              </label>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {['18K Yellow Gold', '18K Rose Gold', 'Platinum'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMetal(m)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      border: selectedMetal === m ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                      background: selectedMetal === m ? 'var(--gold-glow)' : '#ffffff',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            {quickViewProduct.sizes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>
                  Select Size:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      style={{
                        padding: '0.4rem 0.8rem',
                        border: selectedSize === s ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                        background: selectedSize === s ? 'var(--text-main)' : '#ffffff',
                        color: selectedSize === s ? '#ffffff' : 'var(--text-main)',
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
              <button
                onClick={handleAddToCart}
                className="btn-gold"
                style={{ flexGrow: 1 }}
              >
                <ShoppingBag size={18} /> Add to Shopping Bag
              </button>
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                style={{
                  width: '50px',
                  border: '1px solid var(--border-gold)',
                  background: '#ffffff',
                  color: isWishlisted ? 'var(--gold-primary)' : 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title="Wishlist"
              >
                <Heart size={20} fill={isWishlisted ? 'var(--gold-primary)' : 'none'} />
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                to={`/product/${quickViewProduct.id}`}
                onClick={handleClose}
                style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'underline' }}
              >
                View Full Product Specs & Certification <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .modal-img-col { grid-column: span 6 !important; }
          .modal-info-col { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
}
