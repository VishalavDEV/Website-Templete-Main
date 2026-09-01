import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, clearCart, formatINR } = useShop();
  const navigate = useNavigate();

  const [step, setStep] = useState<'info' | 'delivery' | 'payment' | 'complete'>('info');

  const [formData, setFormData] = useState({
    firstName: 'Rakshana',
    lastName: 'Sharma',
    email: 'rakshana@aurel.com',
    phone: '+91 98765 43210',
    address: '42 Heritage Enclave, Golf Course Road',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122002',
    paymentMethod: 'UPI',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  if (cart.length === 0 && step !== 'complete') {
    return (
      <main style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '120px', minHeight: '70vh', textAlign: 'center' }}>
        <div className="container-custom" style={{ maxWidth: '480px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', textTransform: 'uppercase', marginBottom: '16px' }}>
            YOUR BAG IS EMPTY
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Please add items to your shopping bag before proceeding to checkout.
          </p>
          <button onClick={() => navigate('/shop')} className="btn-aurel-primary">
            EXPLORE THE COLLECTION
          </button>
        </div>
      </main>
    );
  }

  const deliveryFee = cartSubtotal > 10000 || cart.length === 0 ? 0 : 499;
  const grandTotal = cartSubtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('complete');
    clearCart();
  };

  if (step === 'complete') {
    return (
      <main style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '120px', minHeight: '80vh' }}>
        <div className="container-custom" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--accent-bronze)' }}>
            <CheckCircle size={36} />
          </div>

          <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            CONFIRMED
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', textTransform: 'uppercase', marginBottom: '16px' }}>
            THANK YOU FOR YOUR ORDER
          </h1>

          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '32px' }}>
            Order <strong>#AUR-2026-8492</strong> has been placed successfully. A confirmation email has been dispatched to <strong>{formData.email}</strong>.
          </p>

          <div style={{ backgroundColor: 'var(--bg-card)', padding: '24px', textAlign: 'left', marginBottom: '40px', borderRadius: '2px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.12em', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px' }}>
              DELIVERY DETAILS
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {formData.firstName} {formData.lastName}<br />
              {formData.address}, {formData.city}, {formData.state} - {formData.pincode}<br />
              Payment Method: <strong>{formData.paymentMethod}</strong>
            </p>
          </div>

          <Link to="/" className="btn-aurel-primary">
            RETURN TO HOMEPAGE
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', paddingBottom: '100px' }}>
      <div className="container-custom">
        {/* Checkout Header */}
        <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', textTransform: 'uppercase' }}>
            AUREL CHECKOUT
          </h1>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', fontSize: '12px', letterSpacing: '0.12em', fontWeight: '600', textTransform: 'uppercase' }}>
          <span style={{ color: step === 'info' ? 'var(--text-primary)' : 'var(--text-muted)' }}>01 INFORMATION</span>
          <span>→</span>
          <span style={{ color: step === 'delivery' ? 'var(--text-primary)' : 'var(--text-muted)' }}>02 DELIVERY</span>
          <span>→</span>
          <span style={{ color: step === 'payment' ? 'var(--text-primary)' : 'var(--text-muted)' }}>03 PAYMENT</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }}>
          {/* Main Form Column (Cols 1-7) */}
          <div style={{ gridColumn: 'span 12' }} className="chk-form-col">
            <form onSubmit={handlePlaceOrder}>
              {step === 'info' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', textTransform: 'uppercase' }}>
                    CONTACT & ADDRESS INFORMATION
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (+91)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />

                  <input
                    type="text"
                    required
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                    <input
                      type="text"
                      required
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="State"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="PIN Code"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      style={{ padding: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                  </div>

                  <button type="button" onClick={() => setStep('delivery')} className="btn-aurel-primary" style={{ marginTop: '16px' }}>
                    CONTINUE TO DELIVERY <ArrowRight size={15} />
                  </button>
                </div>
              )}

              {step === 'delivery' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', textTransform: 'uppercase' }}>
                    SELECT DELIVERY METHOD
                  </h3>

                  <div style={{ padding: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontWeight: '600', fontSize: '14px', display: 'block' }}>EXPRESS INSURED COURIER</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Estimated 2–4 business days delivery across India</span>
                    </div>
                    <span style={{ fontWeight: '600' }}>{deliveryFee === 0 ? 'FREE' : formatINR(deliveryFee)}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <button type="button" onClick={() => setStep('info')} className="btn-aurel-outline">
                      BACK
                    </button>
                    <button type="button" onClick={() => setStep('payment')} className="btn-aurel-primary" style={{ flex: 1 }}>
                      CONTINUE TO PAYMENT <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', textTransform: 'uppercase' }}>
                    SELECT PAYMENT METHOD
                  </h3>

                  {['UPI', 'CARD', 'NET BANKING', 'COD'].map((method) => (
                    <label
                      key={method}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid',
                        borderColor: formData.paymentMethod === method ? 'var(--text-primary)' : 'var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === method}
                        onChange={() => setFormData({ ...formData, paymentMethod: method })}
                      />
                      <span>{method === 'UPI' ? 'UPI (Google Pay, PhonePe, Paytm)' : method === 'CARD' ? 'CREDIT / DEBIT CARD' : method === 'NET BANKING' ? 'NET BANKING' : 'CASH ON DELIVERY (COD)'}</span>
                    </label>
                  ))}

                  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    <button type="button" onClick={() => setStep('delivery')} className="btn-aurel-outline">
                      BACK
                    </button>
                    <button type="submit" className="btn-aurel-primary" style={{ flex: 1 }}>
                      PLACE ORDER NOW ({formatINR(grandTotal)})
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right Summary Column (Cols 8-12) */}
          <div style={{ gridColumn: 'span 12' }} className="chk-summary-col">
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '32px', border: '1px solid var(--border-light)', borderRadius: '2px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', textTransform: 'uppercase', marginBottom: '20px' }}>
                BAG ITEMS ({cart.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', maxHeight: '300px', overflowY: 'auto' }}>
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img src={item.selectedColor.image || item.product.images.primary} alt={item.product.name} style={{ width: '48px', height: '60px', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: '500' }}>{item.product.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Qty: {item.quantity} | {item.selectedSize}</div>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>
                      {formatINR(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '600' }}>
                <span>Grand Total</span>
                <span>{formatINR(grandTotal)}</span>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '0.08em' }}>
                <ShieldCheck size={16} color="var(--accent-bronze)" />
                <span>256-BIT ENCRYPTED • VERIFIED ATELIER GUARANTEE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .chk-form-col {
            grid-column: span 7 !important;
          }
          .chk-summary-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </main>
  );
};
