import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Sparkles, Tag, CheckCircle2 } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
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
    formatPrice,
    clearCart
  } = useContext(ShopContext);

  const [promoInput, setPromoInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const finalTotal = Math.max(0, cartSubtotal - cartDiscount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
    }, 1800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'rgba(3, 59, 44, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease forwards'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#FAF7F0',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header in Emerald */}
        <div
          style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--border-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#064E3B',
            color: '#FAF7F0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} style={{ color: 'var(--gold-primary)' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FAF7F0' }}>
              YOUR BAG ({cart.reduce((sum, i) => sum + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold-primary)', padding: '0.4rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {checkoutComplete ? (
          <div style={{ padding: '3rem 2rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.8rem', color: 'var(--emerald-deep)' }}>Order Placed Successfully!</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you for choosing Aurelia. Your personal concierge is preparing your emerald-embossed luxury packaging.
            </p>
            <button
              onClick={() => {
                setCheckoutComplete(false);
                setIsCartOpen(false);
              }}
              className="btn-emerald"
            >
              Continue Shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div style={{ padding: '3rem 2rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <ShoppingBag size={48} style={{ color: 'var(--gold-primary)', opacity: 0.5, marginBottom: '1.2rem' }} />
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--emerald-deep)' }}>Your Bag is Empty</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Explore our emerald and gold jewellery collections to add timeless pieces.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-emerald"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          <>
            {/* Free Shipping Gold Meter */}
            <div
              style={{
                background: '#F5F0E6',
                padding: '0.9rem 1.5rem',
                borderBottom: '1px solid var(--border-gold)'
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--emerald-deep)', marginBottom: '0.4rem', fontWeight: '600' }}>
                {isFreeShipping ? (
                  <span style={{ color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={14} /> You have unlocked Complimentary Express Shipping!
                  </span>
                ) : (
                  `You're ${formatPrice(remainingForFreeShipping)} away from complimentary shipping.`
                )}
              </div>
              <div style={{ width: '100%', height: '5px', backgroundColor: 'rgba(6, 78, 59, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${progressPercent}%`,
                    background: 'linear-gradient(90deg, var(--gold-light), var(--gold-primary))',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.2rem',
                    borderBottom: '1px solid var(--border-gold)'
                  }}
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    style={{ width: '80px', height: '80px', objectFit: 'cover', background: '#F5F0E6', border: '1px solid var(--border-gold)' }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: '600', color: 'var(--emerald-deep)' }}>
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {item.selectedMetal} • Size: {item.selectedSize}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-gold)',
                          background: '#ffffff'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '0.25rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ padding: '0 0.5rem', fontSize: '0.82rem', fontWeight: '600' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '0.25rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--gold-dark)' }}>
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Checkout */}
            <div
              style={{
                padding: '1.5rem',
                borderTop: '1px solid var(--border-gold)',
                background: '#F5F0E6'
              }}
            >
              <form onSubmit={handleApplyPromo} style={{ marginBottom: '1rem' }}>
                {appliedPromo ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(212, 175, 55, 0.15)', padding: '0.6rem 0.8rem', fontSize: '0.8rem', border: '1px solid var(--gold-primary)' }}>
                    <span style={{ color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600' }}>
                      <Tag size={14} /> Promo {appliedPromo.code} ({appliedPromo.discountPercent}% Off) Applied
                    </span>
                    <button type="button" onClick={removePromoCode} style={{ background: 'none', border: 'none', color: 'red', fontSize: '0.75rem', cursor: 'pointer' }}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="Promo Code (AURELIA10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      style={{
                        flexGrow: 1,
                        padding: '0.6rem 0.8rem',
                        border: '1px solid var(--border-gold)',
                        fontSize: '0.8rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    />
                    <button type="submit" className="btn-outline-gold" style={{ padding: '0.6rem 1rem', fontSize: '0.72rem' }}>
                      Apply
                    </button>
                  </div>
                )}
              </form>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Subtotal</span>
                  <span>{formatPrice(cartSubtotal)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-dark)' }}>
                    <span>Discount</span>
                    <span>-{formatPrice(cartDiscount)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Shipping</span>
                  <span>{isFreeShipping ? 'COMPLIMENTARY' : formatPrice(500)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.15rem', color: 'var(--emerald-deep)', borderTop: '1px solid var(--border-gold)', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
                  <span>Estimated Total</span>
                  <span style={{ color: 'var(--gold-dark)' }}>{formatPrice(finalTotal + (isFreeShipping ? 0 : 500))}</span>
                </div>
              </div>

              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                className="btn-emerald"
                style={{ width: '100%', padding: '1rem' }}
              >
                {isCheckingOut ? 'Processing Luxury Checkout...' : 'PROCEED TO CHECKOUT'}
              </button>

              <div style={{ textAlign: 'center', marginTop: '0.8rem' }}>
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: '600' }}
                >
                  View Detailed Shopping Bag
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
