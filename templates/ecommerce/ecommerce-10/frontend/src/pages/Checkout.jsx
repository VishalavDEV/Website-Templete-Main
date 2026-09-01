import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, ShoppingBag, MapPin, Truck, Award, Sparkles } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const Checkout = () => {
  const { cart, placeOrder } = useContext(EcomContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Address, 2: Delivery, 3: Payment, 4: Success
  const [addressForm, setAddressForm] = useState({ name: '', street: '', city: '', zip: '', phone: '' });
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // standard | express
  const [paymentMethod, setPaymentMethod] = useState('card'); // card | upi | cod
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null);

  // Price calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * (1 - item.product.discount / 100) * item.quantity,
    0
  );
  const deliveryCost = deliveryMethod === 'express' ? 150.0 : (subtotal > 2000.0 ? 0.0 : 99.0);
  const total = Math.round(subtotal + deliveryCost);

  const handleNextStep = () => {
    if (step === 1 && (!addressForm.name || !addressForm.street || !addressForm.city || !addressForm.zip)) {
      alert('Please fill out the shipping address details');
      return;
    }
    setStep(step + 1);
  };

  const handlePayment = async () => {
    const orderAddress = `${addressForm.street}, ${addressForm.city}, ${addressForm.zip}`;
    const orderPayment = paymentMethod.toUpperCase();
    const placed = await placeOrder(orderAddress, orderPayment);
    if (placed) {
      setPlacedOrderDetails(placed);
      setStep(4);
    }
  };

  const stepsList = [
    { num: 1, label: 'Address', icon: <MapPin size={16} /> },
    { num: 2, label: 'Delivery', icon: <Truck size={16} /> },
    { num: 3, label: 'Payment', icon: <CreditCard size={16} /> },
  ];

  if (cart.length === 0 && step < 4) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', minHeight: '80vh' }}>
        <h3 style={{ color: '#5c4e8c' }}>Your cart is empty</h3>
        <button onClick={() => navigate('/products')} className="premium-btn" style={{ marginTop: '20px' }}>
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
      
      {/* Step Progress indicators */}
      {step < 4 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', position: 'relative' }}>
          <div style={{ display: 'flex', width: '100%', maxWidth: '500px', justifyContent: 'space-between', position: 'relative' }}>
            
            {/* Progress line */}
            <div style={{ position: 'absolute', top: '18px', left: '0', right: '0', height: '3px', backgroundColor: '#e9e6f2', zIndex: 1 }} />
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / 2) * 100}%` }}
              style={{ position: 'absolute', top: '18px', left: '0', height: '3px', backgroundColor: '#7c5cff', zIndex: 2 }}
            />

            {stepsList.map((item) => (
              <div key={item.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3, position: 'relative' }}>
                <motion.div
                  animate={{
                    backgroundColor: step >= item.num ? '#7c5cff' : '#fff',
                    borderColor: step >= item.num ? '#7c5cff' : '#e9e6f2',
                    color: step >= item.num ? '#fff' : '#8a7db3',
                  }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '2px solid',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                  }}
                >
                  {step > item.num ? <Check size={16} /> : item.icon}
                </motion.div>
                <span style={{ fontSize: '0.78rem', marginTop: '6px', color: step >= item.num ? '#7c5cff' : '#8a7db3', fontWeight: 600 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps Content Grid */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}
            className="checkout-grid"
          >
            {/* Address fields form */}
            <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.1)', borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.35rem', color: '#1e133e' }}>Shipping Address</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={addressForm.name}
                  onChange={(e) => setAddressForm({ ...addressForm, name: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Street Address</label>
                <input
                  type="text"
                  placeholder="45, Lavender Heights, Bandra West"
                  value={addressForm.street}
                  onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>City</label>
                  <input
                    type="text"
                    placeholder="Mumbai"
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                    style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Zip Code</label>
                  <input
                    type="text"
                    placeholder="400050"
                    value={addressForm.zip}
                    onChange={(e) => setAddressForm({ ...addressForm, zip: e.target.value })}
                    style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  value={addressForm.phone}
                  onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <button onClick={handleNextStep} className="premium-btn" style={{ justifyContent: 'center', marginTop: '10px' }}>
                Continue to Delivery
              </button>
            </div>

            {/* Price review card */}
            <OrderSummaryCard subtotal={subtotal} deliveryCost={deliveryCost} total={total} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}
            className="checkout-grid"
          >
            {/* Delivery Methods selection */}
            <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.1)', borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.35rem', color: '#1e133e' }}>Select Delivery Method</h3>

              <div
                onClick={() => setDeliveryMethod('standard')}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  border: deliveryMethod === 'standard' ? '2.5px solid #7c5cff' : '1.5px solid rgba(124,92,255,0.15)',
                  backgroundColor: deliveryMethod === 'standard' ? '#f1edff' : '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600 }}>Standard Shipping</h4>
                  <span style={{ fontSize: '0.8rem', color: '#5c4e8c', marginTop: '2px', display: 'block' }}>Delivers in 3-5 business days</span>
                </div>
                <strong style={{ color: '#7c5cff' }}>FREE</strong>
              </div>

              <div
                onClick={() => setDeliveryMethod('express')}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  border: deliveryMethod === 'express' ? '2.5px solid #7c5cff' : '1.5px solid rgba(124,92,255,0.15)',
                  backgroundColor: deliveryMethod === 'express' ? '#f1edff' : '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600 }}>Express Courier</h4>
                  <span style={{ fontSize: '0.8rem', color: '#5c4e8c', marginTop: '2px', display: 'block' }}>Delivers in 24-48 hours</span>
                </div>
                <strong style={{ color: '#7c5cff' }}>₹150</strong>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button onClick={() => setStep(1)} className="premium-btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  Back
                </button>
                <button onClick={handleNextStep} className="premium-btn" style={{ flex: 2, justifyContent: 'center' }}>
                  Continue to Payment
                </button>
              </div>
            </div>

            <OrderSummaryCard subtotal={subtotal} deliveryCost={deliveryCost} total={total} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}
            className="checkout-grid"
          >
            {/* Payment method selection */}
            <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.1)', borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.35rem', color: '#1e133e' }}>Choose Payment Option</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['card', 'upi', 'cod'].map((mode) => (
                  <div
                    key={mode}
                    onClick={() => setPaymentMethod(mode)}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      border: paymentMethod === mode ? '2.5px solid #7c5cff' : '1.5px solid rgba(124,92,255,0.15)',
                      backgroundColor: paymentMethod === mode ? '#f1edff' : '#fff',
                      cursor: 'pointer',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      color: paymentMethod === mode ? '#7c5cff' : '#5c4e8c',
                    }}
                  >
                    {mode}
                  </div>
                ))}
              </div>

              {paymentMethod === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                  <input
                    type="text"
                    placeholder="Card Number (mocked)"
                    style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div style={{ marginTop: '10px' }}>
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g. user@okaxis)"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(124,92,255,0.15)', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>
              )}

              {paymentMethod === 'cod' && (
                <p style={{ fontSize: '0.82rem', color: '#8a7db3', backgroundColor: '#faf8ff', padding: '12px', borderRadius: '8px', border: '1px solid rgba(124,92,255,0.05)' }}>
                  Cash On Delivery: Please make sure to keep exact change handy during delivery.
                </p>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button onClick={() => setStep(2)} className="premium-btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  Back
                </button>
                <button onClick={handlePayment} className="premium-btn" style={{ flex: 2, justifyContent: 'center' }}>
                  Place Order & Pay
                </button>
              </div>
            </div>

            <OrderSummaryCard subtotal={subtotal} deliveryCost={deliveryCost} total={total} />
          </motion.div>
        )}

        {/* Animated Order Success Screen */}
        {step === 4 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 40px',
              backgroundColor: '#fff',
              border: '1px solid rgba(124,92,255,0.12)',
              borderRadius: '30px',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(124,92,255,0.05)',
            }}
          >
            {/* Shopping Bag pop out package animations */}
            <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContainer: 'center' }}>
              
              {/* Confetti particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                    x: Math.cos((i * 30 * Math.PI) / 180) * 120,
                    y: Math.sin((i * 30 * Math.PI) / 180) * 120,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: i % 2 === 0 ? '#7c5cff' : '#ffcbc1',
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}

              <motion.div
                initial={{ y: 50, scale: 0 }}
                animate={{ y: 0, scale: [0, 1.2, 1] }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{ color: '#7c5cff', display: 'flex', margin: 'auto' }}
              >
                <ShoppingBag size={100} strokeWidth={1} />
              </motion.div>

              {/* Package pops out */}
              <motion.div
                initial={{ y: 20, scale: 0, opacity: 0 }}
                animate={{ y: -50, scale: 1.2, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#ffd700',
                  color: '#130e26',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 15px rgba(255, 215, 0, 0.4)',
                }}
              >
                <Award size={20} />
              </motion.div>
            </div>

            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800, marginTop: '20px' }}>
              ORDER CONFIRMED!
            </h2>
            <p style={{ color: '#5c4e8c', fontSize: '1.1rem', marginTop: '8px' }}>
              Your fashion journey has begun.
            </p>

            {placedOrderDetails && (
              <div style={{ marginTop: '24px', backgroundColor: '#faf8ff', border: '1px solid rgba(124,92,255,0.05)', borderRadius: '16px', padding: '16px 30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#8a7db3' }}>
                  Order ID: <strong style={{ color: '#1e133e' }}>{placedOrderDetails.id}</strong>
                </span>
                <span style={{ fontSize: '0.85rem', color: '#8a7db3' }}>
                  Shipping To: <strong style={{ color: '#1e133e' }}>{addressForm.name}</strong>
                </span>
                <span style={{ fontSize: '0.85rem', color: '#8a7db3' }}>
                  Amount Paid: <strong style={{ color: '#7c5cff' }}>₹{placedOrderDetails.total.toFixed(0)}</strong>
                </span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
              <button onClick={() => navigate('/account')} className="premium-btn">
                Track Order
              </button>
              <button onClick={() => navigate('/products')} className="premium-btn-outline">
                Continue Shopping
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

// Internal helper summary card
const OrderSummaryCard = ({ subtotal, deliveryCost, total }) => {
  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '24px',
        backgroundColor: '#fff',
        border: '1px solid rgba(124, 92, 255, 0.12)',
        boxShadow: '0 10px 30px rgba(124, 92, 255, 0.04)',
        alignSelf: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h4 style={{ color: '#1e133e', fontWeight: 600, borderBottom: '1px solid rgba(124, 92, 255, 0.08)', paddingBottom: '10px' }}>
        Summary
      </h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#5c4e8c' }}>
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(0)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#5c4e8c' }}>
        <span>Shipping Charge</span>
        <span>{deliveryCost === 0 ? 'FREE' : `₹${deliveryCost.toFixed(0)}`}</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '1.15rem',
          fontWeight: 'bold',
          color: '#1e133e',
          borderTop: '1px dashed rgba(124, 92, 255, 0.15)',
          paddingTop: '12px',
          marginTop: '4px',
        }}
      >
        <span>Total Due</span>
        <span style={{ color: '#7c5cff' }}>₹{total.toFixed(0)}</span>
      </div>
    </div>
  );
};

export default Checkout;
