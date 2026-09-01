import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(EcomContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const rawSubtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountedSubtotal = cart.reduce(
    (acc, item) =>
      acc +
      item.product.price *
        (1 - item.product.discount / 100) *
        item.quantity,
    0
  );

  const discountTotal = rawSubtotal - discountedSubtotal;
  const shippingCharge = discountedSubtotal > 150 || discountedSubtotal === 0 ? 0.00 : 15.00;
  const grandTotal = discountedSubtotal + shippingCharge;

  const handleCheckoutClick = () => {
    onClose();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(30, 19, 62, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 10000,
        }}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()} // Stop propagation
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            maxWidth: '460px',
            height: '100vh',
            backgroundColor: '#ffffff',
            boxShadow: '-10px 0 40px rgba(124, 92, 255, 0.12)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '24px',
              borderBottom: '1px solid rgba(124, 92, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag size={22} style={{ color: '#7c5cff' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#1e133e' }}>Your Cart</h3>
              <span style={{ fontSize: '0.85rem', color: '#5c4e8c', background: '#f1edff', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>
                {cart.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#5c4e8c',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cart.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px' }}>
                <div style={{ color: '#eae3ff', filter: 'drop-shadow(0 0 10px rgba(124,92,255,0.1))' }}>
                  <ShoppingBag size={80} strokeWidth={1} />
                </div>
                <h4 style={{ color: '#5c4e8c', fontSize: '1.1rem' }}>Your shopping bag is empty</h4>
                <button
                  onClick={onClose}
                  className="premium-btn"
                  style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '16px',
                    backgroundColor: '#faf8ff',
                    border: '1px solid rgba(124,92,255,0.05)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: '80px', height: '90px', objectFit: 'cover', borderRadius: '12px' }}
                  />

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600, paddingRight: '20px' }}>
                        {item.product.name}
                      </h4>
                      <span style={{ fontSize: '0.8rem', color: '#8a7db3', display: 'block', marginTop: '2px' }}>
                        Brand: {item.product.brand}
                      </span>
                      <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                        <span style={{ fontSize: '0.75rem', background: '#fff', border: '1px solid rgba(124,92,255,0.1)', padding: '2px 8px', borderRadius: '6px', color: '#5c4e8c' }}>
                          Size: {item.size}
                        </span>
                        <span style={{ fontSize: '0.75rem', background: '#fff', border: '1px solid rgba(124,92,255,0.1)', padding: '2px 8px', borderRadius: '6px', color: '#5c4e8c' }}>
                          Color: {item.color}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(124, 92, 255, 0.15)', borderRadius: '20px', overflow: 'hidden' }}>
                        <button
                          onClick={() => item.quantity > 1 && updateCartQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '4px 8px',
                            cursor: item.quantity > 1 ? 'pointer' : 'default',
                            color: item.quantity > 1 ? '#7c5cff' : '#ccc',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ padding: '0 8px', fontSize: '0.85rem', fontWeight: 600, color: '#1e133e' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            color: '#7c5cff',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Prices */}
                      <div style={{ textAlign: 'right' }}>
                        {item.product.discount > 0 ? (
                          <>
                            <span style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: '#8a7db3', marginRight: '6px' }}>
                              ₹{(item.product.price * item.quantity).toFixed(0)}
                            </span>
                            <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#7c5cff' }}>
                              ₹{(item.product.price * (1 - item.product.discount / 100) * item.quantity).toFixed(0)}
                            </span>
                          </>
                        ) : (
                          <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1e133e' }}>
                            ₹{(item.product.price * item.quantity).toFixed(0)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'none',
                      border: 'none',
                      color: '#ffcbc1',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff4d4d'}
                    onMouseLeave={(e) => e.target.style.color = '#ffcbc1'}
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div
              style={{
                padding: '24px',
                borderTop: '1px solid rgba(124, 92, 255, 0.08)',
                backgroundColor: '#faf8ff',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#5c4e8c' }}>
                <span>Subtotal</span>
                <span>₹{rawSubtotal.toFixed(0)}</span>
              </div>
              {discountTotal > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#7c5cff', fontWeight: 500 }}>
                  <span>Discount</span>
                  <span>-₹{discountTotal.toFixed(0)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#5c4e8c' }}>
                <span>Delivery Charge</span>
                <span>{shippingCharge === 0 ? 'FREE' : `₹${shippingCharge.toFixed(0)}`}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#1e133e',
                  borderTop: '1px dashed rgba(124, 92, 255, 0.15)',
                  paddingTop: '12px',
                  marginTop: '4px',
                }}
              >
                <span>Total Amount</span>
                <span style={{ color: '#7c5cff' }}>₹{grandTotal.toFixed(0)}</span>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="premium-btn"
                style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '16px' }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartDrawer;
