import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, CheckCircle, ShieldAlert, ShoppingBag, ArrowRight, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import MagneticButton from '../components/MagneticButton';

const Checkout = () => {
  const {
    cartItems,
    coupon,
    cartSubtotal,
    discountAmount,
    taxAmount,
    shippingCharge,
    cartTotal,
    clearCart
  } = useCart();

  const { authHeaders } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  // Payment method selection: UPI or CARD
  const [paymentMethod, setPaymentMethod] = useState('UPI'); 
  const [upiId, setUpiId] = useState('');

  // Payment mock card states
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', padding: '100px 5% 50px 5%' }}>
        <ShoppingBag size={48} color="var(--accent-gold)" />
        <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>NO ITEMS TO CHECKOUT</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Add items to your bag before proceeding to checkout.</p>
        <Link to="/" className="btn-primary">
          BROWSE GALLERY
        </Link>
      </div>
    );
  }

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (paymentMethod === 'UPI' && !upiId.includes('@')) {
      setError('Please enter a valid UPI ID (e.g. name@upi or phone@ybl)');
      setLoading(false);
      return;
    }

    const orderPayload = {
      shippingAddress: `${fullName}, ${address}, ${city}, ${state} - ${zip}`,
      couponCode: coupon ? coupon.code : null,
      items: cartItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity
      }))
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders()
        },
        body: JSON.stringify(orderPayload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Checkout failed');
      }

      setCreatedOrder(data);
      clearCart();
      setStep(3);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '120px 5% 80px 5%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Progress Steps Header */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3.5rem' }}>
        {[
          { num: 1, label: 'SHIPPING' },
          { num: 2, label: 'PAYMENT' },
          { num: 3, label: 'CONFIRMATION' }
        ].map((s) => {
          const isCurrent = step === s.num;
          const isDone = step > s.num;
          return (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: isCurrent || isDone ? 1 : 0.4 }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isDone || isCurrent ? 'var(--accent-gold)' : 'transparent',
                  border: isCurrent || isDone ? '1px solid var(--accent-gold)' : '1px solid var(--border-glass)',
                  color: isCurrent || isDone ? '#000000' : 'var(--text-secondary)',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}
              >
                {s.num}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: isCurrent ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {step === 3 ? (
          /* Step 3: Success Confirmation Screen */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="glass-panel"
            style={{ maxWidth: '600px', margin: '0 auto', padding: '3.5rem', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: 'var(--shadow-premium)' }}
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
              <CheckCircle size={64} color="var(--accent-gold)" />
            </motion.div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>ORDER CONFIRMED</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px' }}>
              Thank you for archiving your AURA pieces. Your order <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>#{createdOrder?.id}</span> has been processed successfully.
            </p>
            <div style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: '4px', padding: '1.25rem', textAlign: 'left', fontSize: '0.9rem', border: '1px solid var(--border-glass)' }}>
              <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>SHIPPING TO:</p>
              <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{createdOrder?.shippingAddress}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.8rem', marginTop: '0.8rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>DISCOUNT APPLIED:</span>
                  <span>-₹{createdOrder?.discountAmount.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>GST (18%):</span>
                  <span>+₹{createdOrder?.taxAmount.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>SHIPPING:</span>
                  <span>{createdOrder?.shippingCharge === 0 ? 'FREE' : `₹${createdOrder?.shippingCharge.toLocaleString('en-IN')}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.8rem', marginTop: '0.4rem', fontSize: '1rem', fontWeight: '700' }}>
                  <span>TOTAL AMOUNT PAID:</span>
                  <span style={{ color: 'var(--accent-gold)' }}>₹{createdOrder?.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
            <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '1.5rem' }}>
              RETURN TO GALLERY
            </button>
          </motion.div>
        ) : (
          /* Steps 1 & 2: Forms with Sidebar Summary */
          <motion.div
            key="checkout-forms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }}
            className="checkout-grid-responsive"
          >
            {/* Left Column: Form Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {error && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(255, 77, 77, 0.05)', border: '1px solid rgba(255, 77, 77, 0.1)', color: '#ff4d4d', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <ShieldAlert size={16} />
                  <span>{error}</span>
                </div>
              )}

              {step === 1 ? (
                /* Step 1 Form: Shipping Details */
                <form onSubmit={handleShippingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem' }}>
                    1. SHIPPING ADDRESS (INDIA)
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="premium-input"
                    />
                    <input
                      type="text"
                      placeholder="Street Address, Area, Landmark"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="premium-input"
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="premium-input"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                        className="premium-input"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="State (e.g. Maharashtra, Delhi, Karnataka)"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                      className="premium-input"
                    />
                  </div>
                  <MagneticButton type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                    CONTINUE TO PAYMENT <ArrowRight size={16} />
                  </MagneticButton>
                </form>
              ) : (
                /* Step 2 Form: Payment Details (UPI & Card Options) */
                <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem' }}>
                    2. PAYMENT INFORMATION
                  </h3>

                  {/* Payment selector tabs */}
                  <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('UPI')}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        background: paymentMethod === 'UPI' ? 'var(--text-primary)' : 'transparent',
                        color: paymentMethod === 'UPI' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px'
                      }}
                    >
                      UPI (GPAY / PHONEPE)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('CARD')}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        background: paymentMethod === 'CARD' ? 'var(--text-primary)' : 'transparent',
                        color: paymentMethod === 'CARD' ? 'var(--text-secondary)' : 'var(--text-secondary)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '4px'
                      }}
                    >
                      CREDIT / DEBIT CARD
                    </button>
                  </div>

                  {paymentMethod === 'UPI' ? (
                    /* UPI VPA panel */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ position: 'relative' }}>
                        <Smartphone size={18} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                        <input
                          type="text"
                          placeholder="Enter UPI ID (e.g. mobile@ybl, name@oksbi)"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          required
                          className="premium-input"
                          style={{ paddingLeft: '3.25rem' }}
                        />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Ensure your UPI app is ready to approve the request notification.
                      </span>
                    </div>
                  ) : (
                    /* CARD Fields panel */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ position: 'relative' }}>
                        <CreditCard size={18} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                        <input
                          type="text"
                          placeholder="Card Number"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                          className="premium-input"
                          style={{ paddingLeft: '3.25rem' }}
                        />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.25rem' }}>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          required
                          className="premium-input"
                        />
                        <input
                          type="password"
                          placeholder="CVC"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          required
                          maxLength={4}
                          className="premium-input"
                        />
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setStep(1)} className="btn-secondary">
                      BACK
                    </button>
                    <MagneticButton type="submit" className="btn-primary" disabled={loading}>
                      {loading ? 'PROCESSING...' : 'PLACE ORDER'}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Sticky Summary Panel */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', height: 'fit-content', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                ORDER SUMMARY
              </h3>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem', maxHeight: '250px', overflowY: 'auto' }}>
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '4px', overflow: 'hidden', background: 'var(--bg-tertiary)' }}>
                      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{product.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>QTY: {quantity}</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              {/* Summary calculations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>BAG SUBTOTAL</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a88960' }}>
                    <span>DISCOUNT APPLIED</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>GST (18%)</span>
                  <span>₹{taxAmount.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>INSURED SHIPPING</span>
                  <span>{shippingCharge === 0 ? <span style={{ color: '#4caf50' }}>FREE</span> : `₹${shippingCharge.toLocaleString('en-IN')}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem', marginTop: '0.5rem', fontSize: '1.15rem', fontWeight: '700' }}>
                  <span>ORDER TOTAL</span>
                  <span style={{ color: 'var(--accent-gold)' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .checkout-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
