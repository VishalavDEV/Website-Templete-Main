import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToyCart } from '../context/ToyCartContext';
import { motion } from 'framer-motion';
import { Check, CreditCard, Landmark, Truck, MapPin, Wallet, Sparkles } from 'lucide-react';
import './Checkout.css';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart, cartTotal } = useToyCart();

  // Retrieve pricing sums from route state or fall back
  const checkoutMeta = location.state as { discountPercent: number; shippingRate: number; grandTotal: number } || {
    discountPercent: 0,
    shippingRate: cartTotal > 1999 ? 0 : 99.00,
    grandTotal: cartTotal + (cartTotal > 1999 ? 0 : 99.00)
  };

  // Steps state: 1: ADDRESS, 2: DELIVERY, 3: PAYMENT
  const [step, setStep] = useState(1);

  // Form Fields State
  const [addressForm, setAddressForm] = useState({
    name: '', phone: '', addressLine: '', city: '', state: '', pinCode: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('STANDARD');
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleAddressNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressForm.name || !addressForm.phone || !addressForm.addressLine || !addressForm.city || !addressForm.state || !addressForm.pinCode) {
      setValidationError('Please fill out all address fields.');
      return;
    }
    setValidationError('');
    setStep(2);
  };

  const handleDeliveryNext = () => {
    setStep(3);
  };

  // Calculate adjusted delivery pricing
  const getDeliveryPrice = () => {
    if (deliveryMethod === 'EXPRESS') return 250.00;
    if (deliveryMethod === 'SAMEDAY') return 490.00;
    return checkoutMeta.shippingRate;
  };

  const finalGrandTotal = checkoutMeta.grandTotal - checkoutMeta.shippingRate + getDeliveryPrice();

  const handleOrderSubmit = async () => {
    setLoading(true);
    
    // Map cart items for API payload
    const apiItems = cart.map(item => ({
      productId: item.id,
      productName: item.name,
      price: item.price,
      quantity: item.quantity,
      animationType: item.animationType
    }));

    const orderPayload = {
      items: apiItems,
      shippingAddress: addressForm,
      deliveryMethod,
      paymentMethod,
      totalAmount: finalGrandTotal
    };

    try {
      const res = await axios.post('http://localhost:8080/api/orders', orderPayload);
      if (res.data && res.data.orderId) {
        clearCart();
        navigate('/confirmation', { state: { order: res.data } });
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (err) {
      console.warn('API error during order submission. Creating fallback order detail.', err);
      // Fallback order detail if API is offline
      const mockOrder = {
        orderId: "TYW-" + Math.floor(100000 + Math.random() * 900000),
        items: apiItems,
        shippingAddress: addressForm,
        deliveryMethod,
        paymentMethod,
        totalAmount: finalGrandTotal,
        orderDate: new Date().toISOString().replace('T', ' ').substring(0, 19),
        deliveryDate: new Date(Date.now() + 3*24*60*60*1000).toISOString().substring(0, 10),
        status: "PLACED"
      };
      clearCart();
      navigate('/confirmation', { state: { order: mockOrder } });
    } finally {
      setLoading(false);
    }
  };

  // Package box offset mapping (Address step = 20%, Delivery = 50%, Payment = 80%)
  const packageLeftOffset = step === 1 ? '16%' : step === 2 ? '50%' : '84%';

  return (
    <div className="checkout-page app-container">
      <div className="stars-bg" />

      <div className="checkout-header">
        <h1 className="checkout-title">TOY CHECKOUT</h1>
        <p className="checkout-subtitle">Secure dispatch system. Follow steps to route your toys home.</p>
      </div>

      {/* Package Pipeline progress indicator */}
      <div className="checkout-stepper-container glass-panel">
        <div className="stepper-track" />
        
        {/* Little package moving */}
        <motion.div 
          className="stepper-package"
          animate={{ left: packageLeftOffset }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          📦
        </motion.div>

        <div className="stepper-nodes">
          <div className={`stepper-node ${step >= 1 ? 'active' : ''}`}>
            <span className="node-icon">{step > 1 ? <Check size={14} /> : '1'}</span>
            <span className="node-label">Address</span>
          </div>
          <div className={`stepper-node ${step >= 2 ? 'active' : ''}`}>
            <span className="node-icon">{step > 2 ? <Check size={14} /> : '2'}</span>
            <span className="node-label">Delivery</span>
          </div>
          <div className={`stepper-node ${step >= 3 ? 'active' : ''}`}>
            <span className="node-icon">3</span>
            <span className="node-label">Payment</span>
          </div>
        </div>
      </div>

      <div className="checkout-main-grid">
        {/* Step Views */}
        <div className="checkout-form-panel glass-panel">
          {step === 1 && (
            <form onSubmit={handleAddressNext} className="checkout-form">
              <h3>Shipping Destination</h3>
              {validationError && <p className="form-error-msg">{validationError}</p>}
              
              <div className="form-grid-2">
                <div className="input-field">
                  <label>Recipient Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rajesh Kumar"
                    value={addressForm.name} 
                    onChange={e => setAddressForm({ ...addressForm, name: e.target.value })} 
                  />
                </div>
                <div className="input-field">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543210"
                    value={addressForm.phone} 
                    onChange={e => setAddressForm({ ...addressForm, phone: e.target.value })} 
                  />
                </div>
              </div>

              <div className="input-field">
                <label>Street Address</label>
                <input 
                  type="text" 
                  placeholder="Apartment, suite, unit, building, floor, street details"
                  value={addressForm.addressLine} 
                  onChange={e => setAddressForm({ ...addressForm, addressLine: e.target.value })} 
                />
              </div>

              <div className="form-grid-3">
                <div className="input-field">
                  <label>City</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mumbai"
                    value={addressForm.city} 
                    onChange={e => setAddressForm({ ...addressForm, city: e.target.value })} 
                  />
                </div>
                <div className="input-field">
                  <label>State / Union Territory</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Maharashtra"
                    value={addressForm.state} 
                    onChange={e => setAddressForm({ ...addressForm, state: e.target.value })} 
                  />
                </div>
                <div className="input-field">
                  <label>PIN Code</label>
                  <input 
                    type="text" 
                    placeholder="6-digit PIN"
                    value={addressForm.pinCode} 
                    onChange={e => setAddressForm({ ...addressForm, pinCode: e.target.value })} 
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary step-next-btn" data-cursor="play">
                CONTINUE TO DELIVERY
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="checkout-form">
              <h3>Choose Shipping Speed</h3>
              
              <div className="delivery-options">
                <div 
                  className={`delivery-option-card ${deliveryMethod === 'STANDARD' ? 'active' : ''}`}
                  onClick={() => setDeliveryMethod('STANDARD')}
                >
                  <Truck size={24} className="del-icon" />
                  <div className="del-details">
                    <h4>IndiaPost Ground Dispatch</h4>
                    <p>ETA: 3 to 5 business days</p>
                  </div>
                  <span className="del-price">₹{checkoutMeta.shippingRate.toFixed(2)}</span>
                </div>

                <div 
                  className={`delivery-option-card ${deliveryMethod === 'EXPRESS' ? 'active' : ''}`}
                  onClick={() => setDeliveryMethod('EXPRESS')}
                >
                  <Sparkles size={24} className="del-icon text-accent" />
                  <div className="del-details">
                    <h4>BlueDart Air Express</h4>
                    <p>ETA: 1 to 2 business days</p>
                  </div>
                  <span className="del-price">₹250.00</span>
                </div>

                <div 
                  className={`delivery-option-card ${deliveryMethod === 'SAMEDAY' ? 'active' : ''}`}
                  onClick={() => setDeliveryMethod('SAMEDAY')}
                >
                  <Sparkles size={24} className="del-icon text-secondary" />
                  <div className="del-details">
                    <h4>Dunzo Local Express</h4>
                    <p>ETA: Delivered within 24 hours</p>
                  </div>
                  <span className="del-price">₹490.00</span>
                </div>
              </div>

              <div className="step-back-forward-btns">
                <button className="btn btn-outline" onClick={() => setStep(1)} data-cursor="play">BACK</button>
                <button className="btn btn-primary" onClick={handleDeliveryNext} data-cursor="play">CONTINUE TO PAYMENT</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="checkout-form">
              <h3>Secure Payment Portal</h3>
              
              <div className="payment-options">
                <div 
                  className={`payment-option-card ${paymentMethod === 'UPI' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('UPI')}
                >
                  <Landmark size={22} />
                  <span>UPI (Google Pay, Paytm, PhonePe)</span>
                </div>

                <div 
                  className={`payment-option-card ${paymentMethod === 'CARD' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('CARD')}
                >
                  <CreditCard size={22} />
                  <span>Credit / Debit Card (RuPay, Visa, MC)</span>
                </div>

                <div 
                  className={`payment-option-card ${paymentMethod === 'WALLET' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('WALLET')}
                >
                  <Wallet size={22} />
                  <span>Mobile Wallet (Paytm, Mobikwik)</span>
                </div>

                <div 
                  className={`payment-option-card ${paymentMethod === 'COD' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('COD')}
                >
                  <MapPin size={22} />
                  <span>Cash on Delivery (COD)</span>
                </div>
              </div>

              {paymentMethod === 'CARD' && (
                <div className="card-input-fields">
                  <div className="input-field">
                    <label>Card Number</label>
                    <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
                  </div>
                  <div className="form-grid-2">
                    <div className="input-field">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="input-field">
                      <label>CVV</label>
                      <input type="password" placeholder="***" />
                    </div>
                  </div>
                </div>
              )}

              <div className="step-back-forward-btns">
                <button className="btn btn-outline" onClick={() => setStep(2)} disabled={loading} data-cursor="play">BACK</button>
                <button className="btn btn-secondary glow-secondary" onClick={handleOrderSubmit} disabled={loading} data-cursor="play">
                  {loading ? 'SUBMITTING ORDER...' : `AUTHORIZE & PLACE ORDER (₹{finalGrandTotal.toFixed(2)})`}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Small Cart Summary Sidebar */}
        <div className="checkout-summary-sidebar glass-panel">
          <h3>Squad Checklist</h3>
          <div className="checkout-summary-items">
            {cart.map(item => (
              <div key={item.id} className="checkout-summary-row">
                <span>{item.quantity}x {item.name}</span>
                <span>₹{(item.price * (1 - item.discount/100) * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="checkout-summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping Speed</span>
              <span>₹{getDeliveryPrice().toFixed(2)}</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row grand-total-row">
              <span>Total amount</span>
              <span className="total-amount">₹{finalGrandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
