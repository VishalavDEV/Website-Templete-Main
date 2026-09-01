import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PROMO_CODES } from '../data/products';

export default function BagDrawer({
  isOpen,
  onClose,
  bagItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag
}) {
  const [step, setStep] = useState('BAG'); // 'BAG' | 'DELIVERY' | 'PAYMENT' | 'CONFIRMED'
  const [promoInput, setPromoInput] = useState('');
  const [activePromo, setActivePromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Delivery Form State
  const [address, setAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    pincode: ''
  });

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState('CARD');

  // Confirmation Order Object
  const [orderReceipt, setOrderReceipt] = useState(null);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = bagItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (activePromo) {
    if (activePromo.discountPercent) {
      discountAmount = Math.round((subtotal * activePromo.discountPercent) / 100);
    } else if (activePromo.discountAmount) {
      discountAmount = activePromo.discountAmount;
    }
  }

  const deliveryFee = subtotal > 10000 ? 0 : 499;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setActivePromo(PROMO_CODES[code]);
      setPromoError('');
    } else {
      setPromoError('Invalid privilege promo code.');
    }
  };

  const handleCompleteOrder = () => {
    const newReceipt = {
      orderId: `NVA-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...bagItems],
      total: grandTotal,
      address: { ...address }
    };
    setOrderReceipt(newReceipt);
    setStep('CONFIRMED');
    onClearBag();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        background: '#101216',
        borderLeft: '1px solid rgba(0, 240, 255, 0.3)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-25px 0 60px rgba(0,0,0,0.9)'
      }}>

        {/* Top Header & Progress Stepper */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.3rem', color: '#F4F4F1' }}>
              YOUR TECHNOLOGY
            </h3>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#8E94A0', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          {step !== 'CONFIRMED' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem'
            }}>
              <span style={{ color: step === 'BAG' ? '#00F0FF' : '#F4F4F1', fontWeight: 700 }}>01 BAG</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>───</span>
              <span style={{ color: step === 'DELIVERY' ? '#00F0FF' : step === 'PAYMENT' ? '#F4F4F1' : '#505662', fontWeight: 700 }}>02 DELIVERY</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>───</span>
              <span style={{ color: step === 'PAYMENT' ? '#00F0FF' : '#505662', fontWeight: 700 }}>03 PAYMENT</span>
            </div>
          )}
        </div>

        {/* Step 1: BAG ITEMS LIST */}
        {step === 'BAG' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {bagItems.length === 0 ? (
              <div style={{ textAlign: 'center', margin: 'auto', color: '#8E94A0' }}>
                <ShoppingBag size={48} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '1rem', color: '#F4F4F1', marginBottom: '0.4rem' }}>YOUR BAG IS EMPTY</p>
                <p style={{ fontSize: '0.8rem' }}>Explore the catalog and select hardware for your workspace.</p>
              </div>
            ) : (
              bagItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedColor}-${item.selectedStorage}`}
                  style={{
                    background: 'rgba(8, 9, 11, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '6px',
                    padding: '1rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ width: '70px', height: '70px', borderRadius: '4px', overflow: 'hidden', background: '#08090B', flexShrink: 0 }}>
                    <img src={item.images[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#F4F4F1' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
                      {item.selectedColor && `FINISH: ${item.selectedColor}`} {item.selectedStorage && `• ${item.selectedStorage}`}
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#00F0FF', fontWeight: 700, marginTop: '0.2rem' }}>
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedColor, item.selectedStorage)}
                      style={{ background: 'none', border: 'none', color: '#505662', cursor: 'pointer' }}
                    >
                      <Trash2 size={14} />
                    </button>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedStorage, item.quantity - 1)}
                        style={{ background: 'none', border: 'none', color: '#8E94A0', cursor: 'pointer' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: '#F4F4F1' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedStorage, item.quantity + 1)}
                        style={{ background: 'none', border: 'none', color: '#8E94A0', cursor: 'pointer' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Promo Code Input */}
            {bagItems.length > 0 && (
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'rgba(8, 9, 11, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px'
              }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#00F0FF', marginBottom: '0.5rem' }}>
                  PROMO PRIVILEGE CODE
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Enter code (e.g. NOVA2026)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'rgba(16, 18, 22, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F4F4F1',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  />
                  <button
                    onClick={handleApplyPromo}
                    style={{
                      background: 'rgba(0, 240, 255, 0.15)',
                      border: '1px solid #00F0FF',
                      color: '#00F0FF',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      cursor: 'pointer'
                    }}
                  >
                    APPLY
                  </button>
                </div>
                {activePromo && (
                  <div style={{ fontSize: '0.72rem', color: '#00F0FF', marginTop: '0.4rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    ✓ Applied: {activePromo.label}
                  </div>
                )}
                {promoError && (
                  <div style={{ fontSize: '0.72rem', color: '#FF4D4D', marginTop: '0.4rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    {promoError}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Step 2: DELIVERY ADDRESS FORM */}
        {step === 'DELIVERY' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F4F4F1' }}>DESTINATION TELEMETRY</h4>
            
            <input
              type="text"
              placeholder="Full Name"
              value={address.fullName}
              onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={address.email}
              onChange={(e) => setAddress({ ...address, email: e.target.value })}
              style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
            />
            <input
              type="tel"
              placeholder="Phone Number (+91)"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
            />
            <input
              type="text"
              placeholder="Street Address"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
              />
              <input
                type="text"
                placeholder="PIN Code"
                value={address.pincode}
                onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                style={{ background: 'rgba(8,9,11,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#F4F4F1', padding: '0.7rem', borderRadius: '4px', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        )}

        {/* Step 3: PAYMENT OPTION */}
        {step === 'PAYMENT' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F4F4F1' }}>SELECT PAYMENT PROTOCOL</h4>
            
            {['CARD', 'UPI', 'NETBANKING', 'NOVA_PAY'].map((method) => (
              <div
                key={method}
                onClick={() => setPaymentMethod(method)}
                style={{
                  padding: '1.2rem',
                  borderRadius: '6px',
                  background: paymentMethod === method ? 'rgba(0, 240, 255, 0.08)' : 'rgba(8, 9, 11, 0.6)',
                  border: `1px solid ${paymentMethod === method ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#F4F4F1', fontWeight: 700 }}>
                  {method === 'CARD' && 'CREDIT / DEBIT CARD'}
                  {method === 'UPI' && 'UPI INSTANT PAY (GPay, PhonePe)'}
                  {method === 'NETBANKING' && 'NET BANKING / WIRE'}
                  {method === 'NOVA_PAY' && 'NOVA PAY 0% INTEREST EMI'}
                </div>
                {paymentMethod === method && <Check size={16} color="#00F0FF" />}
              </div>
            ))}
          </div>
        )}

        {/* Step 4: ORDER CONFIRMED RECEIPT */}
        {step === 'CONFIRMED' && orderReceipt && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '2.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(0, 240, 255, 0.15)',
              border: '1px solid #00F0FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem'
            }}>
              <Check size={32} color="#00F0FF" />
            </div>

            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00F0FF', letterSpacing: '0.2em' }}>
              TRANSACTION CONFIRMED
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#F4F4F1', marginTop: '0.3rem', marginBottom: '1.2rem' }}>
              THANK YOU FOR YOUR ORDER
            </h2>

            <div style={{
              width: '100%',
              background: 'rgba(8, 9, 11, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'left',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8E94A0' }}>
                <span>ORDER ID:</span>
                <span style={{ color: '#00F0FF', fontWeight: 700 }}>{orderReceipt.orderId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8E94A0' }}>
                <span>DISPATCH DATE:</span>
                <span style={{ color: '#F4F4F1' }}>{orderReceipt.date}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8E94A0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem' }}>
                <span>TOTAL AMOUNT PAID:</span>
                <span style={{ color: '#00F0FF', fontWeight: 800 }}>₹{orderReceipt.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="btn-primary"
              style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}
            >
              RETURN TO SHOWROOM
            </button>
          </div>
        )}

        {/* Bottom Summary Bar & Stepper Buttons */}
        {step !== 'CONFIRMED' && (
          <div style={{
            padding: '1.5rem 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(8, 9, 11, 0.9)'
          }}>
            {/* Price Calculations */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              marginBottom: '1.2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8E94A0' }}>
                <span>SUBTOTAL</span>
                <span style={{ color: '#F4F4F1' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00F0FF' }}>
                  <span>PRIVILEGE DISCOUNT</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8E94A0' }}>
                <span>INSURED DELIVERY</span>
                <span style={{ color: '#F4F4F1' }}>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#F4F4F1',
                fontSize: '1.1rem',
                fontWeight: 800,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '0.6rem',
                marginTop: '0.2rem'
              }}>
                <span>TOTAL</span>
                <span style={{ color: '#00F0FF' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Step Action Buttons */}
            {step === 'BAG' && (
              <button
                disabled={bagItems.length === 0}
                onClick={() => setStep('DELIVERY')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: bagItems.length === 0 ? 0.5 : 1 }}
              >
                <span>PROCEED TO DELIVERY</span>
                <ArrowRight size={16} />
              </button>
            )}

            {step === 'DELIVERY' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                <button onClick={() => setStep('BAG')} className="btn-secondary">
                  BACK
                </button>
                <button onClick={() => setStep('PAYMENT')} className="btn-primary" style={{ justifyContent: 'center' }}>
                  PROCEED TO PAYMENT →
                </button>
              </div>
            )}

            {step === 'PAYMENT' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                <button onClick={() => setStep('DELIVERY')} className="btn-secondary">
                  BACK
                </button>
                <button onClick={handleCompleteOrder} className="btn-primary" style={{ justifyContent: 'center' }}>
                  COMPLETE PURCHASE →
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
