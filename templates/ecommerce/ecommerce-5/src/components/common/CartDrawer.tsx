import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    formatINR,
  } = useShop();

  const navigate = useNavigate();
  const deliveryFee = cartSubtotal > 10000 || cart.length === 0 ? 0 : 499;
  const grandTotal = cartSubtotal + deliveryFee;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="drawer-backdrop open"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="drawer-panel"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'none' }} // Controlled by framer-motion x
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '24px 32px',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingBag size={18} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  YOUR BAG ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} data-cursor="CLOSE">
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List with Stagger */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
              {cart.length === 0 ? (
                <div style={{ padding: '60px 0', textAlign: 'center' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    Your shopping bag is currently empty.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="btn-aurel-primary"
                  >
                    EXPLORE COLLECTION
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {cart.map((item, idx) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 1fr',
                        gap: '16px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid var(--border-light)',
                      }}
                    >
                      {/* Thumbnail */}
                      <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
                        <img
                          src={item.selectedColor.image || item.product.images.primary}
                          alt={item.product.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Info & Quantity controls */}
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Link
                              to={`/product/${item.product.slug}`}
                              onClick={() => setIsCartOpen(false)}
                              style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }}
                            >
                              {item.product.name}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedColor.name, item.selectedSize)}
                              style={{ color: 'var(--text-muted)' }}
                              title="Remove item"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>

                          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                            COLOR: {item.selectedColor.name} | SIZE: {item.selectedSize}
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-medium)' }}>
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity - 1)}
                              style={{ padding: '4px 8px' }}
                            >
                              <Minus size={12} />
                            </button>
                            <span style={{ padding: '0 10px', fontSize: '12px', fontWeight: '600' }}>{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity + 1)}
                              style={{ padding: '4px 8px' }}
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <span style={{ fontSize: '14px', fontWeight: '600' }}>
                            {formatINR(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div style={{ padding: '24px 32px', borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span style={{ fontWeight: '500' }}>{formatINR(cartSubtotal)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Shipping</span>
                  <span>{deliveryFee === 0 ? 'COMPLIMENTARY' : formatINR(deliveryFee)}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '16px',
                    fontWeight: '600',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-light)',
                    marginBottom: '24px',
                  }}
                >
                  <span>Total</span>
                  <span>{formatINR(grandTotal)}</span>
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="btn-aurel-primary"
                  style={{ width: '100%' }}
                  data-cursor="CHECKOUT"
                >
                  PROCEED TO CHECKOUT <ArrowRight size={15} className="btn-arrow" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
