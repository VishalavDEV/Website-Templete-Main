import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { ShoppingBag, Trash2, Plus, Minus, Sparkles, Tag, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartDiscount,
    freeShippingThreshold,
    isFreeShipping,
    remainingForFreeShipping,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    clearCart,
    formatPrice
  } = useContext(ShopContext);

  const [promoInput, setPromoInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const finalTotal = Math.max(0, cartSubtotal - cartDiscount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  const handleSimulateCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsOrderComplete(true);
      clearCart();
    }, 1800);
  };

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Top Banner */}
      <div
        style={{
          background: '#064E3B',
          color: '#FAF7F0',
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '600' }}>
          YOUR ATELIER BAG
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            letterSpacing: '0.15em',
            marginTop: '0.4rem',
            color: '#FAF7F0'
          }}
        >
          SHOPPING BAG ({cart.reduce((s, i) => s + i.quantity, 0)})
        </h1>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        {isOrderComplete ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', maxWidth: '650px', margin: '0 auto' }}>
            <CheckCircle2 size={54} style={{ color: 'var(--gold-primary)', margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '0.8rem', color: 'var(--emerald-deep)' }}>Order Confirmed</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Your order has been logged into our atelier dispatch queue. You will receive an insured tracking link once your custom velvet gift packaging is finalized.
            </p>
            <Link to="/shop" className="btn-emerald">
              CONTINUE BROWSING <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', background: '#FAF7F0', border: '1px solid var(--border-gold)', maxWidth: '600px', margin: '0 auto' }}>
            <ShoppingBag size={48} style={{ color: 'var(--gold-primary)', opacity: 0.5, margin: '0 auto 1.2rem auto' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--emerald-deep)' }}>Your Bag is Empty</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Discover our signature emerald and solid gold pieces to add to your bag.
            </p>
            <Link to="/shop" className="btn-emerald">
              EXPLORE SHOP
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            {/* Items Column */}
            <div style={{ gridColumn: 'span 12' }} className="cart-items-col">
              {/* Free Shipping Gold Meter */}
              <div style={{ background: '#F5F0E6', padding: '1.2rem 1.8rem', border: '1px solid var(--border-gold)', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--emerald-deep)', marginBottom: '0.5rem', fontWeight: '600' }}>
                  {isFreeShipping ? (
                    <span style={{ color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={16} /> You qualify for Complimentary Insured Worldwide Express Shipping!
                    </span>
                  ) : (
                    `Add ${formatPrice(remainingForFreeShipping)} more to receive complimentary express shipping.`
                  )}
                </p>
                <div style={{ width: '100%', height: '6px', background: 'rgba(6,78,59,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100))}%`, background: 'linear-gradient(90deg, var(--gold-light), var(--gold-primary))', transition: 'width 0.4s ease' }} />
                </div>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      gap: '1.5rem',
                      alignItems: 'center',
                      background: '#FAF7F0',
                      padding: '1.5rem',
                      border: '1px solid var(--border-gold)'
                    }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', background: '#F5F0E6', border: '1px solid var(--border-gold)' }}
                    />

                    <div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--emerald-deep)', marginBottom: '0.3rem' }}>
                        {item.product.name}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Metal: {item.selectedMetal} | Size: {item.selectedSize}
                      </p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: '600', marginTop: '0.4rem' }}>
                        {formatPrice(item.product.price)} each
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.8rem' }}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                        title="Remove"
                      >
                        <Trash2 size={18} />
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-gold)', background: '#ffffff' }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '0.3rem 0.7rem', background: 'none', border: 'none', cursor: 'pointer' }}>-</button>
                        <span style={{ padding: '0 0.8rem', fontWeight: '600', fontSize: '0.9rem' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.3rem 0.7rem', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                      </div>

                      <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--gold-dark)' }}>
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div style={{ gridColumn: 'span 12' }} className="cart-summary-col">
              <div style={{ background: '#FAF7F0', border: '1px solid var(--border-gold)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.6rem', color: 'var(--emerald-deep)' }}>
                  Order Summary
                </h3>

                <form onSubmit={handleApplyPromo} style={{ marginBottom: '1.5rem' }}>
                  {appliedPromo ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(212, 175, 55, 0.15)', padding: '0.6rem 0.8rem', fontSize: '0.8rem', border: '1px solid var(--gold-primary)' }}>
                      <span style={{ color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600' }}>
                        <Tag size={14} /> {appliedPromo.code} ({appliedPromo.discountPercent}% Off)
                      </span>
                      <button type="button" onClick={removePromoCode} style={{ background: 'none', border: 'none', color: 'red', fontSize: '0.75rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="Promo Code (AURELIA10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        style={{ flexGrow: 1, padding: '0.6rem 0.8rem', border: '1px solid var(--border-gold)', fontSize: '0.8rem', outline: 'none', background: '#ffffff' }}
                      />
                      <button type="submit" className="btn-outline-gold" style={{ padding: '0.6rem 1rem', fontSize: '0.75rem' }}>Apply</button>
                    </div>
                  )}
                </form>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>Bag Subtotal</span>
                    <span>{formatPrice(cartSubtotal)}</span>
                  </div>

                  {cartDiscount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-dark)' }}>
                      <span>Discount</span>
                      <span>-{formatPrice(cartDiscount)}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>Insured Shipping</span>
                    <span>{isFreeShipping ? 'COMPLIMENTARY' : formatPrice(500)}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.25rem', color: 'var(--emerald-deep)', borderTop: '1px solid var(--border-gold)', paddingTop: '0.8rem' }}>
                    <span>Total Amount</span>
                    <span style={{ color: 'var(--gold-dark)' }}>{formatPrice(finalTotal + (isFreeShipping ? 0 : 500))}</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulateCheckout}
                  disabled={isProcessing}
                  className="btn-emerald"
                  style={{ width: '100%', padding: '1.1rem' }}
                >
                  {isProcessing ? 'Processing Order...' : 'PROCEED TO CHECKOUT'}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.2rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--gold-primary)' }} />
                  <span>256-bit Bank Grade Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .cart-items-col { grid-column: span 8 !important; }
          .cart-summary-col { grid-column: span 4 !important; }
        }
      `}</style>
    </div>
  );
}
