import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    amountToFreeShipping,
    freeShippingThreshold,
    navigate
  } = useShop();

  if (!isCartOpen) return null;

  const isFreeShippingUnlocked = amountToFreeShipping === 0;
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 400,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
        onClick={() => setIsCartOpen(false)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '100%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-float)'
          }}
        >
          {/* Header */}
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShoppingBag size={20} color="var(--accent-blue)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>YOUR BAG ({cart.length})</h3>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="btn-icon" style={{ border: 'none' }}>
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.85rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {isFreeShippingUnlocked ? (
                <span style={{ color: '#15803D', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={14} /> FREE EXPRESS DELIVERY UNLOCKED!
                </span>
              ) : (
                <span>ADD ₹{amountToFreeShipping.toLocaleString('en-IN')} MORE FOR FREE EXPRESS DELIVERY</span>
              )}
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border-light)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  height: '100%',
                  backgroundColor: isFreeShippingUnlocked ? '#15803D' : 'var(--accent-blue)',
                  borderRadius: 'var(--radius-full)'
                }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <ShoppingBag size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>YOUR BAG IS EMPTY</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Explore top items in technology, fashion, and home decor.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="btn btn-accent"
                >
                  START SHOPPING →
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-light)',
                    alignItems: 'center'
                  }}
                >
                  {/* Full-Frame Thumbnail */}
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      aspectRatio: '1 / 1',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      backgroundColor: 'var(--bg-secondary)',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                      {item.product.brand}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '0.25rem' }}>
                      {item.product.name}
                    </div>

                    {(item.selectedColor || item.selectedSize) && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                        {item.selectedColor && `Color: ${item.selectedColor}`} {item.selectedSize && `| Size: ${item.selectedSize}`}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor, item.selectedSize)}
                          style={{ padding: '0.2rem 0.5rem', fontWeight: 800, fontSize: '0.8rem' }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0.2rem 0.6rem', fontSize: '0.82rem', fontWeight: 800 }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor, item.selectedSize)}
                          style={{ padding: '0.2rem 0.5rem', fontWeight: 800, fontSize: '0.8rem' }}
                        >
                          +
                        </button>
                      </div>

                      <div style={{ fontSize: '0.95rem', fontWeight: 900 }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                        style={{ color: 'var(--text-muted)', padding: '0.2rem' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {cartDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#15803D', fontWeight: 700 }}>
                    <span>Savings</span>
                    <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 900, paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <span>Total Amount</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/checkout');
                }}
                className="btn btn-accent"
                style={{ width: '100%', padding: '1rem' }}
              >
                PROCEED TO CHECKOUT <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                <ShieldCheck size={14} color="#15803D" /> 256-Bit SSL Encrypted Secure Checkout
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
