import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, cartSubtotal, formatINR } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shipping = cartSubtotal > 10000 || cart.length === 0 ? 0 : 499;
  const grandTotal = cartSubtotal + shipping;

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', minHeight: '80vh', paddingBottom: '100px' }}>
      <div className="container-custom">
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            SHOPPING BAG
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', textTransform: 'uppercase' }}>
            YOUR BAG ({cart.reduce((sum, i) => sum + i.quantity, 0)})
          </h1>
        </div>

        {cart.length === 0 ? (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Your bag is currently empty.
            </p>
            <Link to="/shop" className="btn-aurel-primary">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }}>
            {/* Left Items Column (Cols 1-8) */}
            <div style={{ gridColumn: 'span 12' }} className="cart-items-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '100px 1fr auto',
                      gap: '24px',
                      alignItems: 'center',
                      paddingBottom: '24px',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
                      <img src={item.selectedColor.image || item.product.images.primary} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div>
                      <Link to={`/product/${item.product.slug}`} style={{ fontSize: '16px', fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }}>
                        {item.product.name}
                      </Link>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        COLOR: {item.selectedColor.name} | SIZE: {item.selectedSize}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '600', marginTop: '8px' }}>
                        {formatINR(item.product.price)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                      <button onClick={() => removeFromCart(item.product.id, item.selectedColor.name, item.selectedSize)} style={{ color: 'var(--text-muted)' }}>
                        <Trash2 size={16} />
                      </button>

                      <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-medium)' }}>
                        <button onClick={() => updateCartQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity - 1)} style={{ padding: '6px 10px' }}>
                          <Minus size={12} />
                        </button>
                        <span style={{ padding: '0 12px', fontSize: '13px', fontWeight: '600' }}>{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity + 1)} style={{ padding: '6px 10px' }}>
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Column (Cols 9-12) */}
            <div style={{ gridColumn: 'span 12' }} className="cart-summary-col">
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '32px', border: '1px solid var(--border-light)', borderRadius: '2px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  ORDER SUMMARY
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span style={{ fontWeight: '600' }}>{formatINR(cartSubtotal)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Delivery Fee</span>
                  <span>{shipping === 0 ? 'COMPLIMENTARY' : formatINR(shipping)}</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '600' }}>
                  <span>Total</span>
                  <span>{formatINR(grandTotal)}</span>
                </div>

                <button onClick={() => navigate('/checkout')} className="btn-aurel-primary" style={{ width: '100%' }}>
                  PROCEED TO CHECKOUT <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .cart-items-col {
            grid-column: span 8 !important;
          }
          .cart-summary-col {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </main>
  );
};
