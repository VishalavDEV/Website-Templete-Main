import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import ProductImage from '../components/ProductImage';
import { formatINR } from '../services/api';

const Cart = () => {
  const { cart, removeFromCart, updateCartQty } = useContext(AppContext);
  const navigate = useNavigate();

  // Pricing calculations
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalDiscount = cart.reduce((total, item) => total + ((item.oldPrice - item.price) * item.quantity), 0);
  const delivery = subtotal > 15000 || subtotal === 0 ? 0 : 150; // free delivery above ₹15,000
  const finalTotal = subtotal + delivery;

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="glow-text" style={{ fontSize: '30px', fontFamily: 'var(--font-tech)' }}>
            ELECTRONIC CART CONTROL CENTER
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px' }}>
            Telemetry inventory buffer. Review items for transmission checkout.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {cart.length > 0 ? (
            /* Active Cart Layout */
            <motion.div
              key="cart-active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '30px'
              }}
            >
              
              {/* LEFT COLUMN: ITEMS CONTROL PANEL */}
              <div style={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    exit={{ opacity: 0, x: -30 }}
                    className="glass-panel"
                    style={{
                      padding: '20px',
                      borderRadius: '10px',
                      border: '1.5px solid rgba(0, 240, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      flexWrap: 'wrap'
                    }}
                  >
                    {/* Visual */}
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: 'rgba(3, 7, 18, 0.6)',
                      borderRadius: '6px',
                      padding: '5px',
                      flexShrink: '0'
                    }}>
                      <ProductImage id={item.id} category={item.category} style={{ width: '100%', height: '100%' }} />
                    </div>

                    {/* Metadata */}
                    <div style={{ flex: '1 1 200px' }}>
                      <span style={{ fontSize: '10px', fontFamily: 'var(--font-tech)', color: '#00f0ff' }}>{item.brand}</span>
                      <h3 style={{ fontSize: '15px', color: '#fff', fontWeight: 'bold' }}>{item.name}</h3>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
                      {/* Qty Selector */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid rgba(0, 240, 255, 0.25)',
                        borderRadius: '4px'
                      }}>
                        <button
                          onClick={() => updateCartQty(item.id, item.quantity - 1)}
                          style={{ padding: '6px 12px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                        >-</button>
                        <span style={{ width: '24px', textAlign: 'center', fontSize: '12px', fontFamily: 'var(--font-tech)', color: '#fff' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, item.quantity + 1)}
                          style={{ padding: '6px 12px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                        >+</button>
                      </div>

                      {/* Item Total */}
                      <div style={{ width: '90px', textAlign: 'right' }}>
                        <div style={{ fontSize: '16px', fontFamily: 'var(--font-tech)', color: '#fff', fontWeight: 'bold' }}>
                          {formatINR(item.price * item.quantity)}
                        </div>
                        <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{formatINR(item.price)}/unit</div>
                      </div>

                      {/* Trash */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#64748b',
                          cursor: 'pointer',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ff0055'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Continue Shopping button */}
                <div style={{ marginTop: '10px' }}>
                  <Link to="/products" className="cyber-button" style={{ fontSize: '12px' }}>
                    <ArrowLeft size={14} /> CONTINUE SHOPPING
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: PRICE MATRIX DRAWER */}
              <div style={{ flex: '1 1 300px' }}>
                <div className="glass-panel" style={{
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(0, 240, 255, 0.25)',
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-tech)', color: '#00f0ff', letterSpacing: '0.1em' }}>
                    TELEMETRY SUMS
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                      <span>Subtotal Nodes</span>
                      <span style={{ color: '#fff', fontFamily: 'var(--font-tech)' }}>{formatINR(subtotal)}</span>
                    </div>
                    {totalDiscount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ff0055' }}>
                        <span>System Savings</span>
                        <span style={{ fontFamily: 'var(--font-tech)' }}>-{formatINR(totalDiscount)}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                      <span>Transit Delivery</span>
                      <span style={{ color: '#fff', fontFamily: 'var(--font-tech)' }}>
                        {delivery === 0 ? 'FREE' : formatINR(delivery)}
                      </span>
                    </div>
                    
                    <div style={{ height: '1px', backgroundColor: 'rgba(0, 240, 255, 0.15)', margin: '5px 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
                      <span style={{ color: '#fff' }}>TOTAL MATRIX</span>
                      <span style={{ color: '#00f0ff', fontFamily: 'var(--font-tech)', textShadow: '0 0 10px rgba(0,240,255,0.3)' }}>
                        {formatINR(finalTotal)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="cyber-button solid"
                    style={{
                      justifyContent: 'center',
                      padding: '14px',
                      fontSize: '13px',
                      borderRadius: '6px',
                      marginTop: '10px'
                    }}
                  >
                    PROCEED TO CHECKOUT <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </motion.div>
          ) : (
            /* Empty Cart */
            <motion.div
              key="cart-empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{
                padding: '80px 20px',
                textAlign: 'center',
                border: '1.5px dashed rgba(0, 240, 255, 0.15)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              {/* Floating shopping cart */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                style={{
                  color: '#00f0ff',
                  filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.45))'
                }}
              >
                <ShoppingCart size={48} />
              </motion.div>

              <div>
                <h2 style={{ fontSize: '18px', color: '#fff', fontFamily: 'var(--font-tech)' }}>
                  YOUR INVENTORY IS DEPLOYED EMPTY
                </h2>
                <p style={{ color: '#64748b', fontSize: '13px', marginTop: '6px' }}>
                  No active electronic payloads matched. Sync the catalog.
                </p>
              </div>

              <Link to="/products" className="cyber-button solid" style={{ marginTop: '10px' }}>
                LOAD PRODUCT TELEMETRY
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Cart;
