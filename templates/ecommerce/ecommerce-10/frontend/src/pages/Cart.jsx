import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(EcomContext);
  const navigate = useNavigate();

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

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800, marginBottom: '30px' }}>
        Shopping Bag
      </h2>

      {cart.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '16px' }}>
          <div style={{ color: '#eae3ff', filter: 'drop-shadow(0 0 10px rgba(124,92,255,0.1))' }}>
            <ShoppingBag size={80} strokeWidth={1} />
          </div>
          <h3 style={{ color: '#5c4e8c', fontSize: '1.25rem' }}>Your shopping bag is empty</h3>
          <button
            onClick={() => navigate('/products')}
            className="premium-btn"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1.8fr 1fr))', gap: '40px', alignItems: 'start' }} className="cart-grid">
          
          {/* Items Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(124,92,255,0.08)',
                  borderRadius: '20px',
                  padding: '20px',
                  position: 'relative',
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{ width: '100px', height: '115px', objectFit: 'cover', borderRadius: '16px' }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#1e133e', fontWeight: 600, paddingRight: '24px' }}>
                      {item.product.name}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: '#8a7db3', display: 'block', marginTop: '2px' }}>
                      Brand: {item.product.brand}
                    </span>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#faf8ff', border: '1px solid rgba(124,92,255,0.08)', padding: '4px 10px', borderRadius: '8px', color: '#5c4e8c' }}>
                        Size: {item.size}
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#faf8ff', border: '1px solid rgba(124,92,255,0.08)', padding: '4px 10px', borderRadius: '8px', color: '#5c4e8c' }}>
                        Color: {item.color}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(124, 92, 255, 0.15)', borderRadius: '20px', overflow: 'hidden' }}>
                      <button
                        onClick={() => item.quantity > 1 && updateCartQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '6px 12px',
                          cursor: item.quantity > 1 ? 'pointer' : 'default',
                          color: item.quantity > 1 ? '#7c5cff' : '#ccc',
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ padding: '0 8px', fontSize: '0.9rem', fontWeight: 600, color: '#1e133e' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '6px 12px',
                          cursor: 'pointer',
                          color: '#7c5cff',
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Price tag */}
                    <div style={{ textAlign: 'right' }}>
                      {item.product.discount > 0 ? (
                        <>
                          <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#8a7db3', marginRight: '8px' }}>
                            ₹{(item.product.price * item.quantity).toFixed(0)}
                          </span>
                          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#7c5cff' }}>
                            ₹{(item.product.price * (1 - item.product.discount / 100) * item.quantity).toFixed(0)}
                          </span>
                        </>
                      ) : (
                        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e133e' }}>
                          ₹{(item.product.price * item.quantity).toFixed(0)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: '#ffcbc1',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff4d4d'}
                  onMouseLeave={(e) => e.target.style.color = '#ffcbc1'}
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pricing Column Card */}
          <div
            style={{
              padding: '30px',
              borderRadius: '24px',
              backgroundColor: '#fff',
              border: '1px solid rgba(124, 92, 255, 0.12)',
              boxShadow: '0 10px 30px rgba(124, 92, 255, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', color: '#1e133e', borderBottom: '1px solid rgba(124, 92, 255, 0.08)', paddingBottom: '14px' }}>
              Order Details
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#5c4e8c' }}>
              <span>Subtotal</span>
              <span>₹{rawSubtotal.toFixed(0)}</span>
            </div>
            {discountTotal > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#7c5cff', fontWeight: 500 }}>
                <span>Discount</span>
                <span>-₹{discountTotal.toFixed(0)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#5c4e8c' }}>
              <span>Delivery Charge</span>
              <span>{shippingCharge === 0 ? 'FREE' : `₹${shippingCharge.toFixed(0)}`}</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1e133e',
                borderTop: '1px dashed rgba(124, 92, 255, 0.15)',
                paddingTop: '16px',
                marginTop: '6px',
              }}
            >
              <span>Total Amount</span>
              <span style={{ color: '#7c5cff' }}>₹{grandTotal.toFixed(0)}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="premium-btn"
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '16px' }}
            >
              Checkout <ArrowRight size={18} />
            </button>
          </div>

        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cart-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
