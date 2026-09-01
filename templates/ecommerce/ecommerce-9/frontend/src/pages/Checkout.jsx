import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Truck, CreditCard, CheckSquare, ShieldCheck, QrCode } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { submitOrder, formatINR } from '../services/api';
import PageTransition from '../components/PageTransition';

const Checkout = () => {
  const { cart, clearCart, setLastPlacedOrder } = useContext(AppContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0: Address, 1: Delivery, 2: Payment, 3: Confirm

  // Form State
  const [formData, setFormData] = useState({
    name: 'Vishal AV',
    email: 'vishal@bluecore.io',
    address: 'Imperial Tower 42, Vasant Kunj',
    city: 'New Delhi, Delhi',
    zip: '110070',
    deliveryMethod: 'warp-transit', // warp-transit, orbital-droppod
    paymentMethod: 'card', // card, upi
    cardNumber: '4532 8876 1209 4322',
    cardName: 'VISHAL AV',
    cardExpiry: '12/29',
    cardCvv: '422',
    upiId: 'vishal@okaxis'
  });

  const [loading, setLoading] = useState(false);
  const [cardFocused, setCardFocused] = useState(false);

  // Totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCost = formData.deliveryMethod === 'warp-transit' ? 150 : 300;
  const finalTotal = subtotal + deliveryCost;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmitOrder = async () => {
    setLoading(true);
    const orderPayload = {
      customerName: formData.name,
      customerEmail: formData.email,
      shippingAddress: `${formData.address}, ${formData.city} - ${formData.zip}`,
      paymentMethod: formData.paymentMethod.toUpperCase(),
      totalAmount: finalTotal,
      items: cart.map(item => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image
      })),
      paymentDetails: formData.paymentMethod === 'card' 
        ? { cardHolder: formData.cardName, cardNumber: formData.cardNumber }
        : { upiId: formData.upiId }
    };

    try {
      const response = await submitOrder(orderPayload);
      setLastPlacedOrder(response); // Save to context / localStorage
      clearCart(); // Reset cart items
      navigate('/order-success');
    } catch (err) {
      console.error(err);
      alert('Checkout transmission failed. Reconnect console.');
    } finally {
      setLoading(false);
    }
  };

  const stepsList = [
    { name: 'ADDRESS', icon: <MapPin size={14} /> },
    { name: 'DELIVERY', icon: <Truck size={14} /> },
    { name: 'PAYMENT', icon: <CreditCard size={14} /> },
    { name: 'CONFIRM', icon: <CheckSquare size={14} /> }
  ];

  if (cart.length === 0) {
    return (
      <PageTransition>
        <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'var(--font-tech)' }}>
          <h2 style={{ color: '#ff0055' }}>INVENTORY PAYLOAD EXHAUSTED</h2>
          <p style={{ color: '#64748b', marginTop: '10px' }}>Your cart is empty. Checkout system offline.</p>
          <button onClick={() => navigate('/products')} className="cyber-button solid" style={{ marginTop: '20px' }}>
            LOAD CATALOG
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        {/* ================= STEPPER PROGRESS BAR ================= */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '50px',
          padding: '0 10px'
        }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(0, 240, 255, 0.1)',
            zIndex: 0
          }} />
          
          {/* Active Progress Line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${(step / 3) * 100}%`,
            height: '2px',
            backgroundColor: '#00f0ff',
            boxShadow: '0 0 10px #00f0ff',
            zIndex: 1,
            transition: 'width 0.4s ease'
          }} />

          {stepsList.map((s, idx) => {
            const isActive = idx === step;
            const isCompleted = idx < step;
            return (
              <div key={idx} style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: isCompleted || isActive ? '#030712' : '#1e293b',
                  border: isCompleted || isActive ? '2px solid #00f0ff' : '2px solid rgba(0, 240, 255, 0.15)',
                  boxShadow: isActive ? '0 0 15px #00f0ff' : 'none',
                  color: isCompleted || isActive ? '#00f0ff' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  transition: 'all 0.3s'
                }}>
                  {s.icon}
                </div>
                <span style={{
                  fontSize: '9px',
                  fontFamily: 'var(--font-tech)',
                  color: isActive ? '#00f0ff' : '#64748b',
                  letterSpacing: '0.1em'
                }}>
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ================= STEP CONTENT ================= */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '30px',
          alignItems: 'flex-start'
        }}>
          {/* LEFT FORM CAPSULE */}
          <div className="glass-panel" style={{
            flex: '1 1 500px',
            padding: '30px',
            borderRadius: '12px',
            border: '1.5px solid rgba(0, 240, 255, 0.2)'
          }}>
            <AnimatePresence mode="wait">
              {/* STEP 0: ADDRESS FIELDS */}
              {step === 0 && (
                <motion.div
                  key="address-step"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                >
                  <h3 style={{ fontSize: '14px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>COORDINATES DATABASE</h3>
                  
                  <div>
                    <label style={labelStyle}>TELEMETRY FULL NAME</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>COMMS EMAIL PORT</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>TRANSIT DELIVERY ADRESS</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} style={inputStyle} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                    <div>
                      <label style={labelStyle}>METRO GRID CITY</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>SECTOR ZIP</label>
                      <input type="text" name="zip" value={formData.zip} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 1: DELIVERY METRIC */}
              {step === 1 && (
                <motion.div
                  key="delivery-step"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3 style={{ fontSize: '14px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>SELECT TRANSIT PROTOCOL</h3>
                  
                  {/* Warp transit */}
                  <div
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'warp-transit' })}
                    style={getOptionStyle(formData.deliveryMethod === 'warp-transit')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div className="led-blinker" style={{ backgroundColor: formData.deliveryMethod === 'warp-transit' ? '#00f0ff' : '#64748b' }} />
                      <div>
                        <h4 style={{ fontSize: '13px', color: '#fff', fontFamily: 'var(--font-tech)' }}>WARP TRANSIT (STANDARD)</h4>
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Safe, hyper-lane travel delivery. Estimated 3-5 standard cycles.</p>
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-tech)', fontSize: '13px', color: '#00f0ff' }}>{formatINR(150)}</span>
                  </div>

                  {/* Drop Pod */}
                  <div
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'orbital-droppod' })}
                    style={getOptionStyle(formData.deliveryMethod === 'orbital-droppod')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div className="led-blinker" style={{ backgroundColor: formData.deliveryMethod === 'orbital-droppod' ? '#00f0ff' : '#64748b' }} />
                      <div>
                        <h4 style={{ fontSize: '13px', color: '#fff', fontFamily: 'var(--font-tech)' }}>ORBITAL DROP POD (EXPRESS)</h4>
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Atmospheric thermal landing directly to sector. Estimated 1 cycle.</p>
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-tech)', fontSize: '13px', color: '#00f0ff' }}>{formatINR(300)}</span>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: PAYMENT CARD / UPI */}
              {step === 2 && (
                <motion.div
                  key="payment-step"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                >
                  <h3 style={{ fontSize: '14px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>SET PAYMENT TRANSCEIVER</h3>

                  {/* Method toggle */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      style={{
                        flex: '1',
                        padding: '10px 0',
                        backgroundColor: formData.paymentMethod === 'card' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(3, 7, 18, 0.5)',
                        border: formData.paymentMethod === 'card' ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '11px',
                        fontFamily: 'var(--font-tech)',
                        cursor: 'pointer'
                      }}
                    >
                      CYBER DEBIT CARD
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      style={{
                        flex: '1',
                        padding: '10px 0',
                        backgroundColor: formData.paymentMethod === 'upi' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(3, 7, 18, 0.5)',
                        border: formData.paymentMethod === 'upi' ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '11px',
                        fontFamily: 'var(--font-tech)',
                        cursor: 'pointer'
                      }}
                    >
                      QUANTUM UPI PROTOCOL
                    </button>
                  </div>

                  {formData.paymentMethod === 'card' ? (
                    /* Holographic blue digital card + form */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {/* Interactive Blue Card */}
                      <div className="glass-panel" style={{
                        height: '170px',
                        width: '100%',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1.5px solid rgba(0, 240, 255, 0.4)',
                        background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(3, 7, 18, 0.8) 100%)',
                        boxShadow: '0 8px 25px rgba(0, 240, 255, 0.15), inset 0 0 10px rgba(0, 240, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-tech)',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Chip graphic */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ width: '36px', height: '26px', borderRadius: '4px', background: 'linear-gradient(135deg, #a1a1a1, #cbd5e1)', border: '1px solid #00f0ff' }} />
                          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#00f0ff', textShadow: '0 0 5px #00f0ff' }}>BLUECORE PAY</span>
                        </div>

                        {/* Card Number */}
                        <div style={{ fontSize: '16px', letterSpacing: '0.15em', textAlign: 'center', marginTop: '10px' }}>
                          {formData.cardNumber || '•••• •••• •••• ••••'}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8' }}>
                          <div>
                            <div>HOLDER</div>
                            <div style={{ color: '#fff', marginTop: '2px' }}>{formData.cardName || 'NEO V'}</div>
                          </div>
                          <div>
                            <div>EXPIRES</div>
                            <div style={{ color: '#fff', marginTop: '2px' }}>{formData.cardExpiry || 'MM/YY'}</div>
                          </div>
                          <div>
                            <div>CVV</div>
                            <div style={{ color: '#fff', marginTop: '2px' }}>{formData.cardCvv || '•••'}</div>
                          </div>
                        </div>
                      </div>

                      {/* Card inputs */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div>
                          <label style={labelStyle}>CARD NUMBER</label>
                          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>CARDHOLDER NAME</label>
                          <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                          <div>
                            <label style={labelStyle}>EXPIRY DATE</label>
                            <input type="text" name="cardExpiry" placeholder="MM/YY" value={formData.cardExpiry} onChange={handleChange} style={inputStyle} />
                          </div>
                          <div>
                            <label style={labelStyle}>CVV SECURITY</label>
                            <input type="password" name="cardCvv" maxLength="3" value={formData.cardCvv} onChange={handleChange} style={inputStyle} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* UPI scanning QR interface */
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                      <div className="glass-panel" style={{
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 240, 255, 0.25)',
                        position: 'relative'
                      }}>
                        {/* Scanning lasers */}
                        <div style={{
                          position: 'absolute',
                          width: '90%',
                          height: '2px',
                          backgroundColor: '#00f0ff',
                          boxShadow: '0 0 10px #00f0ff',
                          animation: 'led-pulse 2s infinite ease-in-out'
                        }} />
                        <QrCode size={130} color="#00f0ff" />
                      </div>
                      <div style={{ width: '100%' }}>
                        <label style={labelStyle}>UPI INTERFACE ID</label>
                        <input type="text" name="upiId" value={formData.upiId} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: CONFIRM TELEMETRY SUMMARY */}
              {step === 3 && (
                <motion.div
                  key="confirm-step"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3 style={{ fontSize: '14px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>CONFIRM MATRIX LINK</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,240,255,0.1)', paddingBottom: '8px' }}>
                      <span style={{ color: '#64748b' }}>HOLDER</span>
                      <span>{formData.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,240,255,0.1)', paddingBottom: '8px' }}>
                      <span style={{ color: '#64748b' }}>TRANSIT PORT</span>
                      <span>{formData.address}, {formData.city}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,240,255,0.1)', paddingBottom: '8px' }}>
                      <span style={{ color: '#64748b' }}>DELIVERY PROTOCOL</span>
                      <span>{formData.deliveryMethod === 'warp-transit' ? 'WARP TRANSIT (STANDARD)' : 'ORBITAL DROP POD (EXPRESS)'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,240,255,0.1)', paddingBottom: '8px' }}>
                      <span style={{ color: '#64748b' }}>PAYMENT TRANSCEIVER</span>
                      <span>{formData.paymentMethod.toUpperCase()}</span>
                    </div>
                  </div>

                  <div style={{
                    marginTop: '10px',
                    padding: '15px',
                    borderRadius: '6px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '12px',
                    color: '#10b981'
                  }}>
                    <ShieldCheck size={16} /> Transaction secured under SSL-2.8 holographic hash code.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stepper buttons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              {step > 0 && (
                <button onClick={handleBack} className="cyber-button" style={{ flex: '1', justifyContent: 'center' }}>
                  BACK
                </button>
              )}

              {step < 3 ? (
                <button onClick={handleNext} className="cyber-button solid" style={{ flex: '2', justifyContent: 'center' }}>
                  PROCEED
                </button>
              ) : (
                <button
                  onClick={handleSubmitOrder}
                  disabled={loading}
                  className="cyber-button solid"
                  style={{
                    flex: '2',
                    justifyContent: 'center',
                    backgroundColor: '#10b981',
                    borderColor: '#10b981'
                  }}
                >
                  {loading ? 'TRANSMITTING...' : 'CONFIRM & POWER ORDER'}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT ORDER SUMMARY */}
          <div className="glass-panel" style={{
            flex: '1 1 300px',
            padding: '25px',
            borderRadius: '12px',
            border: '1.5px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)'
          }}>
            <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: '#00f0ff', marginBottom: '20px' }}>
              TRANSMISSION MATRIX
            </h3>

            {/* Items list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '180px', overflowY: 'auto', paddingRight: '5px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                  <div style={{ maxWidth: '70%' }}>
                    <div style={{ color: '#fff', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </div>
                    <div style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>QTY: {item.quantity} node(s)</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-tech)', color: '#fff' }}>{formatINR(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(0, 240, 255, 0.15)', margin: '15px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', color: '#94a3b8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal Nodes</span>
                <span style={{ color: '#fff' }}>{formatINR(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Transit Protocol Cost</span>
                <span style={{ color: '#fff' }}>{formatINR(deliveryCost)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>
                <span style={{ color: '#fff' }}>FINAL SUM</span>
                <span style={{ color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>{formatINR(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );

  // Styling properties
  function getOptionStyle(active) {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      borderRadius: '8px',
      backgroundColor: active ? 'rgba(0, 240, 255, 0.08)' : 'rgba(3, 7, 18, 0.4)',
      border: active ? '1.5px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
      boxShadow: active ? '0 0 10px rgba(0,240,255,0.15)' : 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    };
  }
};

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  fontFamily: 'var(--font-tech)',
  color: '#00f0ff',
  marginBottom: '8px',
  letterSpacing: '0.1em'
};

const inputStyle = {
  width: '100%',
  padding: '10px 15px',
  backgroundColor: 'rgba(3, 7, 18, 0.7)',
  border: '1px solid rgba(0, 240, 255, 0.25)',
  borderRadius: '6px',
  color: '#fff',
  outline: 'none',
  fontSize: '13px',
  transition: 'border-color 0.3s'
};

export default Checkout;
