import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Ticket } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import MagneticButton from './MagneticButton';

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    coupon,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    removeCoupon,
    cartSubtotal,
    discountAmount,
    taxAmount,
    shippingCharge,
    cartTotal
  } = useCart();

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const handleCheckoutClick = () => {
    onClose();
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/auth?redirect=checkout');
    }
  };

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    setError(null);
    if (!code) return;
    const res = await applyCoupon(code);
    if (res.success) {
      setCode('');
    } else {
      setError(res.error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 2000
            }}
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="glass-panel"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '450px',
              height: '100vh',
              zIndex: 2001,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 35px rgba(0,0,0,0.05)',
              borderLeft: '1px solid var(--border-glass)',
              background: 'var(--bg-glass-heavy)'
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 2rem',
                borderBottom: '1px solid var(--border-glass)'
              }}
            >
              <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>YOUR CART</h2>
              <button
                onClick={onClose}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--text-secondary)'
                }}
                className="close-hover"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
              {cartItems.length === 0 ? (
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  >
                    <ShoppingBag size={48} color="var(--accent-gold)" style={{ opacity: 0.8 }} />
                  </motion.div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>YOUR CART IS EMPTY</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Browse our collection and find your premium design assets.
                    </p>
                  </div>
                  <button onClick={onClose} className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <AnimatePresence>
                    {cartItems.map(({ product, quantity }) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          paddingBottom: '1.5rem',
                          borderBottom: '1px solid rgba(0,0,0,0.04)'
                        }}
                      >
                        {/* Item Photo */}
                        <div
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            background: 'var(--bg-tertiary)'
                          }}
                        >
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>

                        {/* Item Details */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                                {product.name}
                              </h4>
                              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{product.category}</p>
                            </div>
                            <span style={{ fontSize: '0.95rem', fontWeight: '700' }}>
                              ₹{(product.price * quantity).toLocaleString('en-IN')}
                            </span>
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {/* Quantity Adjusters */}
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-glass)',
                                padding: '4px 8px',
                                borderRadius: '4px'
                              }}
                            >
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                style={{ cursor: 'pointer', opacity: quantity <= 1 ? 0.4 : 1 }}
                              >
                                <Minus size={14} />
                              </button>
                              <span style={{ fontSize: '0.85rem', fontWeight: '600', minWidth: '15px', textAlign: 'center' }}>
                                {quantity}
                              </span>
                              <button onClick={() => updateQuantity(product.id, quantity + 1)} style={{ cursor: 'pointer' }}>
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => removeFromCart(product.id)}
                              style={{ cursor: 'pointer', color: 'var(--text-muted)' }}
                              className="remove-hover"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer summary */}
            {cartItems.length > 0 && (
              <div
                style={{
                  padding: '1.5rem 2rem',
                  borderTop: '1px solid var(--border-glass)',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Coupon application form */}
                {!coupon ? (
                  <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <Ticket size={14} style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        placeholder="PROMO CODE"
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        className="premium-input"
                        style={{ padding: '0.5rem 1rem 0.5rem 2.25rem', fontSize: '0.75rem', borderRadius: '4px' }}
                      />
                    </div>
                    <button type="submit" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                      APPLY
                    </button>
                  </form>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(197, 168, 128, 0.08)', border: '1px solid rgba(197, 168, 128, 0.2)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.8rem', color: '#a88960', marginBottom: '0.5rem' }}>
                    <span>CODE: <strong>{coupon.code}</strong> (-{(coupon.discountPercent * 100)}%)</span>
                    <button onClick={removeCoupon} style={{ cursor: 'pointer', fontWeight: 'bold' }}>REMOVE</button>
                  </div>
                )}

                {error && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: '-0.5rem' }}>{error}</span>}

                {/* Subtotals sheets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>BAG SUBTOTAL</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a88960' }}>
                      <span>DISCOUNT</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>GST (18%)</span>
                    <span>₹{taxAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>SHIPPING CHARGE</span>
                    <span>{shippingCharge === 0 ? <span style={{ color: '#4caf50' }}>FREE</span> : `₹${shippingCharge.toLocaleString('en-IN')}`}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.8rem', marginTop: '0.4rem', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                    <span>ORDER TOTAL</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <MagneticButton
                  onClick={handleCheckoutClick}
                  className="btn-primary"
                  style={{ width: '100%', display: 'flex', marginTop: '0.5rem' }}
                >
                  PROCEED TO CHECKOUT <CreditCard size={16} />
                </MagneticButton>
              </div>
            )}
          </motion.div>
        </>
      )}

      <style>{`
        .close-hover:hover {
          color: var(--accent-gold) !important;
          transform: rotate(90deg);
          transition: transform 0.4s ease, color 0.3s ease;
        }
        .remove-hover:hover {
          color: #ff4d4d !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default CartDrawer;
