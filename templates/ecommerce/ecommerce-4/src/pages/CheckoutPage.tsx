import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, cartDiscount, cartTotal, amountToFreeShipping, createOrder, navigate } = useShop();

  const [step, setStep] = useState<'delivery' | 'payment' | 'review'>('delivery');

  const [formData, setFormData] = useState({
    fullName: 'Aarav Sharma',
    phone: '+91 98765 43210',
    email: 'aarav.sharma@example.com',
    street: '42 MG Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038'
  });

  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'CARD' | 'NETBANKING' | 'COD'>('UPI');

  const isFreeDelivery = amountToFreeShipping === 0;
  const shippingFee = isFreeDelivery ? 0 : 199;
  const finalTotal = cartTotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = createOrder(formData, paymentMethod);
    navigate(`/order-success?id=${newOrder.id}`);
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2 className="heading-md" style={{ marginBottom: '1rem' }}>YOUR SHOPPING BAG IS EMPTY</h2>
        <button onClick={() => navigate('/shop')} className="btn btn-accent">
          RETURN TO SHOP →
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        {/* Header Steps */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            SECURE CHECKOUT
          </span>
          <h1 className="heading-lg" style={{ marginTop: '0.2rem', marginBottom: '1.5rem' }}>COMPLETE YOUR ORDER</h1>

          <div style={{ display: 'inline-flex', gap: '2rem', fontSize: '0.85rem', fontWeight: 800 }}>
            <span style={{ color: step === 'delivery' ? 'var(--accent-blue)' : 'var(--text-muted)' }}>1. DELIVERY ADDRESS</span>
            <span style={{ color: step === 'payment' ? 'var(--accent-blue)' : 'var(--text-muted)' }}>2. PAYMENT</span>
            <span style={{ color: step === 'review' ? 'var(--accent-blue)' : 'var(--text-muted)' }}>3. REVIEW & ORDER</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {/* Main Form Box */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            {step === 'delivery' && (
              <form onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem' }}>DELIVERY ADDRESS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>PHONE</label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>PINCODE</label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>STREET ADDRESS</label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>CITY</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '0.3rem' }}>STATE</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-accent" style={{ marginTop: '1rem', padding: '0.9rem' }}>
                    CONTINUE TO PAYMENT →
                  </button>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem' }}>SELECT PAYMENT METHOD</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  {[
                    { id: 'UPI', title: 'UPI / GPay / PhonePe / Paytm', desc: 'Instant 1-click payment' },
                    { id: 'CARD', title: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                    { id: 'NETBANKING', title: 'Net Banking', desc: 'All major Indian banks' },
                    { id: 'COD', title: 'Cash on Delivery', desc: 'Pay when delivered to your door' }
                  ].map((pm) => (
                    <div
                      key={pm.id}
                      onClick={() => setPaymentMethod(pm.id as any)}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: paymentMethod === pm.id ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                        backgroundColor: paymentMethod === pm.id ? '#EEF2FF' : 'var(--bg-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>{pm.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{pm.desc}</div>
                      </div>
                      {paymentMethod === pm.id && <CheckCircle2 size={20} color="var(--accent-blue)" />}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setStep('delivery')} className="btn btn-outline">BACK</button>
                  <button onClick={() => setStep('review')} className="btn btn-accent" style={{ flex: 1 }}>
                    REVIEW ORDER →
                  </button>
                </div>
              </div>
            )}

            {step === 'review' && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem' }}>FINAL ORDER REVIEW</h3>
                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 800, marginBottom: '0.2rem' }}>Shipping To:</div>
                  <div>{formData.fullName}</div>
                  <div>{formData.street}, {formData.city}, {formData.state} - {formData.pincode}</div>
                  <div style={{ marginTop: '0.5rem', fontWeight: 800 }}>Payment Mode: {paymentMethod}</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setStep('payment')} className="btn btn-outline">BACK</button>
                  <button onClick={handleSubmitOrder} className="btn btn-accent" style={{ flex: 1, padding: '0.9rem' }}>
                    PLACE ORDER NOW (₹{finalTotal.toLocaleString('en-IN')})
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Summary */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2rem', height: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem' }}>ORDER SUMMARY</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
              {cart.map((item) => (
                <div key={item.product.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img src={item.product.images[0]} alt="" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, lineClamp: 1, overflow: 'hidden' }}>{item.product.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Qty: {item.quantity}</div>
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#15803D', fontWeight: 700 }}>
                  <span>Discount</span>
                  <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping Fee</span>
                <span>{shippingFee === 0 ? 'FREE' : '₹199'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 900, paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                <span>Total Amount</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
