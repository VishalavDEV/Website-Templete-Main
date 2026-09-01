import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Truck, CreditCard, Sparkles, CheckCircle2, ChevronRight, Heart } from 'lucide-react';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const items = cart.items || [];
  
  // Pricing
  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = items.reduce((acc, item) => {
    const finalPrice = item.product.price * (1 - item.product.discountPercentage / 100);
    return acc + ((item.product.price - finalPrice) * item.quantity);
  }, 0);
  const [shippingCost, setShippingCost] = useState(subtotal > 2000.0 ? 0.0 : 99.00);
  const total = subtotal - discount + shippingCost;

  // Checkout step state
  const [step, setStep] = useState(1); // 1: Address, 2: Delivery, 3: Payment, 4: Confirmation

  // Form states - Address
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('India');

  // Form states - Payment
  const [paymentMethod, setPaymentMethod] = useState('CARD'); // CARD or UPI
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Success state
  const [createdOrder, setCreatedOrder] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState('');

  const handleNextStep = () => {
    if (step === 1 && (!street || !city || !state || !zipCode)) {
      alert('Please fill in all shipping fields');
      return;
    }
    setStep(s => s + 1);
  };

  const handleBackStep = () => {
    setStep(s => Math.max(1, s - 1));
  };

  const handlePlaceOrder = async () => {
    setSubmitting(true);
    setOrderError('');
    try {
      const shippingAddress = { street, city, state, zipCode, country };
      const response = await api.post('/orders', {
        shippingAddress,
        paymentMethod
      });
      setCreatedOrder(response.data);
      setStep(4); // Trigger packing/bike animation
    } catch (err) {
      setOrderError(err.response?.data?.message || err.message || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  // Steps indicator configuration
  const stepsList = [
    { num: 1, name: 'Address', icon: <MapPin size={16} /> },
    { num: 2, name: 'Delivery', icon: <Truck size={16} /> },
    { num: 3, name: 'Payment', icon: <CreditCard size={16} /> }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      
      {/* 1. Header & Timeline (Hide if step is 4 - Confirmation) */}
      {step < 4 && (
        <>
          <div className="text-left mb-10">
            <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
              Gateway
            </span>
            <h1 className="text-3xl font-display font-extrabold text-gray-800 mt-4">Checkout</h1>
          </div>

          {/* Timeline progress line */}
          <div className="flex items-center justify-between max-w-md mx-auto mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-pink-100 -translate-y-1/2 -z-10" />
            {stepsList.map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all font-semibold text-sm ${
                  step === s.num
                    ? 'bg-pink-500 border-transparent text-white shadow-premium scale-110'
                    : step > s.num
                    ? 'bg-pink-100 border-pink-300 text-pink-600'
                    : 'bg-white border-pink-100 text-gray-400'
                }`}>
                  {s.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  step === s.num ? 'text-pink-600' : 'text-gray-400'
                }`}>{s.name}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Main Form content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Form: Step dependent panels */}
        {step < 4 && (
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-pink-100 shadow-premium">
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-4"
                >
                  <h2 className="font-display font-bold text-gray-800 text-lg text-left">Shipping Address</h2>
                  
                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-xs font-semibold text-gray-500 ml-1">Street Address</label>
                    <input 
                      type="text" 
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="123 Pink Lane"
                      className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-xs font-semibold text-gray-500 ml-1">City</label>
                      <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Rose City"
                        className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-xs font-semibold text-gray-500 ml-1">State / Region</label>
                      <input 
                        type="text" 
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="CA"
                        className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-xs font-semibold text-gray-500 ml-1">Zip Code</label>
                      <input 
                        type="text" 
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="90210"
                        className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-xs font-semibold text-gray-500 ml-1">Country</label>
                      <select 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3.5 outline-none text-sm text-gray-700 cursor-pointer focus:border-pink-300 transition-colors"
                      >
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-premium flex items-center justify-center gap-2 group transition-all"
                  >
                    <span>Continue to Delivery</span>
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-4 text-left"
                >
                  <h2 className="font-display font-bold text-gray-800 text-lg">Delivery Method</h2>
                  
                  {/* Standard option */}
                  <div 
                    onClick={() => setShippingCost(subtotal > 2000.0 ? 0.0 : 99.00)}
                    className={`border rounded-2xl p-4 flex justify-between items-center cursor-pointer transition-all ${
                      shippingCost !== 299.00
                        ? 'border-pink-500 bg-pink-50/30'
                        : 'border-pink-100 bg-white hover:bg-pink-50/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">Standard Delivery</h4>
                      <p className="text-xs text-gray-400 mt-1">Leaves the hangar. Arrives in 3 to 5 business days.</p>
                    </div>
                    <span className="font-display font-bold text-pink-600">
                      {subtotal > 2000.0 ? 'FREE' : '₹99.00'}
                    </span>
                  </div>

                  {/* Express option */}
                  <div 
                    onClick={() => setShippingCost(299.00)}
                    className={`border rounded-2xl p-4 flex justify-between items-center cursor-pointer transition-all ${
                      shippingCost === 299.00
                        ? 'border-pink-500 bg-pink-50/30'
                        : 'border-pink-100 bg-white hover:bg-pink-50/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">Pink Courier Express</h4>
                      <p className="text-xs text-gray-400 mt-1">First-class priority handling. Arrives in 1 to 2 business days.</p>
                    </div>
                    <span className="font-display font-bold text-pink-600">₹299.00</span>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={handleBackStep}
                      className="flex-grow bg-white border border-pink-200 text-pink-600 font-bold py-4 rounded-2xl transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="flex-grow bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-premium transition-all"
                    >
                      Continue to Payment
                    </button>
                  </div>

                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6 text-left"
                >
                  <h2 className="font-display font-bold text-gray-800 text-lg">Payment Information</h2>

                  {/* Payment Method Switcher */}
                  <div className="flex bg-pink-50 rounded-2xl border border-pink-100 p-1">
                    <button
                      onClick={() => setPaymentMethod('CARD')}
                      className={`flex-grow py-3.5 rounded-xl font-bold text-xs transition-all ${
                        paymentMethod === 'CARD' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'
                      }`}
                    >
                      Credit Card Mock
                    </button>
                    <button
                      onClick={() => setPaymentMethod('UPI')}
                      className={`flex-grow py-3.5 rounded-xl font-bold text-xs transition-all ${
                        paymentMethod === 'UPI' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'
                      }`}
                    >
                      UPI / Scan Code Mock
                    </button>
                  </div>

                  {paymentMethod === 'CARD' ? (
                    <div className="flex flex-col gap-4">
                      
                      {/* Interactive Credit Card display */}
                      <div className="flex justify-center mb-4">
                        <motion.div 
                          className="w-80 h-44 rounded-3xl bg-gradient-to-tr from-pink-400 via-rose-500 to-accent-magenta text-white p-6 shadow-premium relative flex flex-col justify-between overflow-hidden cursor-pointer"
                          animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                          transition={{ duration: 0.6 }}
                          onClick={() => setIsCardFlipped(!isCardFlipped)}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {!isCardFlipped ? (
                            // Front side
                            <div className="flex flex-col justify-between h-full" style={{ backfaceVisibility: 'hidden' }}>
                              <div className="flex justify-between items-start">
                                <span className="text-xl">💳</span>
                                <span className="font-display font-bold text-xs tracking-widest italic">PINK CARD</span>
                              </div>
                              <div className="font-mono text-lg tracking-widest mt-4">
                                {cardNumber || '•••• •••• •••• ••••'}
                              </div>
                              <div className="flex justify-between items-end mt-4">
                                <div className="text-left">
                                  <p className="text-[8px] uppercase tracking-wider text-pink-100">Card Holder</p>
                                  <p className="text-xs font-bold font-display uppercase tracking-wide">{cardName || 'Sarah Jenkins'}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-[8px] uppercase tracking-wider text-pink-100">Expires</p>
                                  <p className="text-xs font-mono font-bold">{expiry || 'MM/YY'}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Back side
                            <div className="flex flex-col justify-between h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                              <div className="w-full h-8 bg-gray-800 -mx-6 mt-2" />
                              <div className="flex justify-end pr-4 mt-4">
                                <div className="bg-white text-gray-800 font-mono text-xs px-3 py-1 rounded w-16 text-right">
                                  {cvv || '•••'}
                                </div>
                              </div>
                              <div className="text-[8px] text-pink-100 text-left leading-tight mt-4">
                                This card is a mock simulation representing secure API payment processing in the Pink Delivery universe.
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>

                      {/* Inputs */}
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500 ml-1">Cardholder Name</label>
                        <input 
                          type="text" 
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Sarah Jenkins"
                          className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500 ml-1">Card Number</label>
                        <input 
                          type="text" 
                          value={cardNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
                            setCardNumber(val);
                          }}
                          placeholder="4111 2222 3333 4444"
                          className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-semibold text-gray-500 ml-1">Expiry Date</label>
                          <input 
                            type="text" 
                            value={expiry}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').replace(/(.{2})/g, '$1/').trim().substring(0, 5);
                              setExpiry(val);
                            }}
                            placeholder="MM/YY"
                            className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-semibold text-gray-500 ml-1">CVV</label>
                          <input 
                            type="text" 
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                            onFocus={() => setIsCardFlipped(true)}
                            onBlur={() => setIsCardFlipped(false)}
                            placeholder="123"
                            className="bg-pink-50/50 border border-pink-100 rounded-2xl px-4 py-3 outline-none text-sm text-gray-700 focus:border-pink-300 transition-colors"
                          />
                        </div>
                      </div>

                    </div>
                  ) : (
                    // UPI Scan layout
                    <div className="flex flex-col items-center gap-4 py-4 text-center">
                      <div className="relative w-40 h-40 bg-white border border-pink-100 rounded-2xl p-4 shadow-md flex items-center justify-center overflow-hidden">
                        
                        {/* Mock QR image */}
                        <div className="w-full h-full border border-gray-200 border-dashed rounded-lg bg-[radial-gradient(#ddd_20%,transparent_20%)] bg-[length:10px_10px] relative flex items-center justify-center text-4xl">
                          📱
                        </div>

                        {/* Scanner Line */}
                        <motion.div 
                          className="absolute left-0 right-0 h-[2px] bg-pink-500"
                          animate={{ top: ['0%', '100%', '0%'] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        />
                      </div>
                      
                      <div className="text-xs text-gray-400">
                        Scan the code using any mock UPI application. The payment will settle instantly.
                      </div>
                    </div>
                  )}

                  {orderError && (
                    <div className="bg-red-50 text-red-500 text-xs font-semibold p-3 rounded-xl border border-red-100 mt-2">
                      ❌ {orderError}
                    </div>
                  )}

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleBackStep}
                      disabled={submitting}
                      className="flex-grow bg-white border border-pink-200 text-pink-600 font-bold py-4 rounded-2xl transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={submitting}
                      className="flex-grow bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 rounded-2xl shadow-premium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Sparkles size={16} /> Place Order (₹{total.toFixed(2)})
                        </>
                      )}
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}

        {/* Right Sidebar: Item summary (Hide if step is 4 - Confirmation) */}
        {step < 4 && (
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 border border-pink-100 shadow-premium text-left">
            <h3 className="font-display font-bold text-gray-800 text-sm mb-4 border-b border-pink-100/50 pb-2">
              Cart Items
            </h3>
            
            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs gap-3">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-10 h-10 object-cover rounded-xl" />
                  <div className="flex-grow min-w-0">
                    <p className="font-bold text-gray-700 truncate">{item.product.name}</p>
                    <p className="text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-pink-600">
                    ₹{(item.product.price * (1 - item.product.discountPercentage / 100) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs border-t border-pink-100/50 pt-4 text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discounts</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-display font-bold text-sm text-gray-800 pt-2 border-t border-dashed border-pink-100">
                <span>Total</span>
                <span className="text-pink-600">₹{total.toFixed(2)}</span>
              </div>
            </div>

          </div>
        )}

        {/* Extraordinary Full-Screen step 4 confirmation animation */}
        {step === 4 && createdOrder && (
          <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-10 px-4">
            
            {/* Box packaging/Bike riding animation sequence */}
            <div className="relative w-full max-w-lg h-60 bg-pink-100/40 rounded-3xl border border-pink-200/50 overflow-hidden mb-12 shadow-inner">
              
              {/* Rolling hills/road layout */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-200 to-pink-50/20" />
              <div className="absolute bottom-8 left-0 right-0 h-[2px] border-t border-dashed border-pink-300" />
              
              {/* Clouds moving */}
              <motion.div 
                animate={{ x: [-100, 500] }} 
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute top-8 left-0 text-xl opacity-30 select-none"
              >
                ☁️
              </motion.div>

              {/* Bike rider riding away from left to right */}
              <motion.div
                initial={{ x: '-100px' }}
                animate={{ x: '500px' }}
                transition={{ duration: 4.5, ease: "easeOut", delay: 1 }}
                className="absolute bottom-6 text-5xl select-none"
              >
                🏍️
              </motion.div>

              {/* Box packaging folding animation at center */}
              <motion.div
                initial={{ scale: 0, y: 50 }}
                animate={{ scale: [0, 1.2, 1], y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
              >
                {/* Packing sparkles */}
                <motion.span 
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-lg text-yellow-500 absolute -top-8 -right-4"
                >
                  ✨
                </motion.span>
                <div className="text-6xl animate-float select-none">📦</div>
              </motion.div>

            </div>

            {/* Confirmation Texts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6 shadow-md border border-green-200">
                <CheckCircle2 size={32} />
              </div>

              <h2 className="text-3xl font-display font-bold text-gray-800">
                Your order is on its way! 💗
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
                Thank you for your purchase! We have successfully packed your parcel and handed it off to our **Pink Courier** delivery rider.
              </p>

              {/* Tracking details card */}
              <div className="bg-white border border-pink-100 rounded-3xl p-6 mt-8 shadow-premium text-left max-w-md mx-auto">
                <div className="flex justify-between items-center border-b border-pink-50 pb-3 mb-3 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">Tracking Number</span>
                  <span className="font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">
                    {createdOrder.shipment?.trackingNumber}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Order ID</span>
                    <span className="font-semibold text-gray-800">#{createdOrder.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Courier</span>
                    <span className="font-semibold text-gray-800">{createdOrder.shipment?.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Arrival</span>
                    <span className="font-semibold text-gray-800">In 3 business days</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-sm mx-auto">
                <button
                  onClick={() => navigate(`/track?trackingNumber=${createdOrder.shipment?.trackingNumber}`)}
                  className="flex-grow bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 rounded-xl shadow-premium transition-all text-xs"
                >
                  Track Your Parcel
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-grow bg-white border border-pink-200 text-pink-600 font-bold py-3.5 rounded-xl transition-all text-xs"
                >
                  Back to Homepage
                </button>
              </div>

            </motion.div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Checkout;
