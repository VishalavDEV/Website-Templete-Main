import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToyCart } from '../context/ToyCartContext';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { Trash2, ShoppingBag, ArrowRight, Sparkles, Compass } from 'lucide-react';
import './Cart.css';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useToyCart();
  const navigate = useNavigate();

  // Coupon states
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'toyworld20') {
      setDiscountPercent(20);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon! Try TOYWORLD20');
      setCouponApplied(false);
    }
  };

  const shippingRate = cartTotal > 50 ? 0 : 5.99;
  const discountAmount = cartTotal * (discountPercent / 100);
  const grandTotal = cartTotal - discountAmount + shippingRate;

  const handleCheckoutRedirect = () => {
    // Navigate to checkout and pass calculations
    navigate('/checkout', {
      state: {
        discountPercent,
        shippingRate,
        grandTotal
      }
    });
  };

  return (
    <div className="cart-page app-container">
      <div className="stars-bg" />

      <div className="cart-header">
        <h1 className="cart-title">YOUR TOY BOX</h1>
        <p className="cart-subtitle">Verify your squad before initiating packing and delivery.</p>
      </div>

      {cart.length === 0 ? (
        /* Empty State: Open Box */
        <div className="cart-empty glass-panel">
          <span className="empty-box-icon">📦🕸️</span>
          <h3>Your toy box is empty!</h3>
          <p>No active toys are sleeping here. Go select some toys to fill up the chest.</p>
          <Link to="/shop" className="btn btn-primary empty-shop-btn" data-cursor="drive">
            <Compass size={18} /> Adopt Some Toys
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Toy Box List (Left Column) */}
          <div className="cart-items-panel glass-panel">
            <div className="toybox-lid">
              <span className="lid-label">📦 ACTIVE TOYS IN BOX ({cart.length})</span>
            </div>

            <div className="cart-items-list">
              {cart.map(item => {
                const itemFinalPrice = item.price * (1 - item.discount / 100);
                return (
                  <div key={item.id} className="cart-item-row">
                    {/* Live Toy preview */}
                    <div className="cart-item-toy-stage">
                      <ToyRenderer type={item.animationType} state="hover" />
                    </div>

                    {/* Metadata */}
                    <div className="cart-item-details">
                      <span className="cart-item-brand">{item.brand}</span>
                      <h4 className="cart-item-title">{item.name}</h4>
                      <span className="cart-item-price-each">Unit Price: ₹{itemFinalPrice.toFixed(2)}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>

                    {/* Total Row Price */}
                    <div className="cart-item-total">
                      <span>₹{(itemFinalPrice * item.quantity).toFixed(2)}</span>
                    </div>

                    {/* Delete action */}
                    <button 
                      className="cart-item-delete-btn" 
                      onClick={() => removeFromCart(item.id)}
                      title="Remove Toy"
                      data-cursor="play"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checkout Checkout Panel (Right Column) */}
          <div className="cart-summary-panel glass-panel">
            <h3>Order Summary</h3>
            
            <div className="summary-rates">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>

              {couponApplied && (
                <div className="summary-row text-success">
                  <span>Coupon Discount (20%)</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="summary-row">
                <span>Toy Delivery Shipping</span>
                <span>{shippingRate === 0 ? 'FREE' : `₹${shippingRate.toFixed(2)}`}</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-row grand-total-row">
                <span>Grand Total</span>
                <span className="total-amount">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon Application Code */}
            <div className="coupon-box">
              <label>Promo Coupon Code</label>
              <div className="coupon-input-group">
                <input 
                  type="text" 
                  placeholder="e.g. TOYWORLD20" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                  disabled={couponApplied}
                />
                <button 
                  onClick={handleApplyCoupon} 
                  className="btn btn-outline coupon-apply-btn"
                  disabled={couponApplied}
                  data-cursor="play"
                >
                  APPLY
                </button>
              </div>
              {couponApplied && (
                <span className="coupon-success-msg">✓ 20% discount applied successfully!</span>
              )}
              {couponError && (
                <span className="coupon-error-msg">{couponError}</span>
              )}
            </div>

            <button 
              className="btn btn-secondary checkout-redirect-btn glow-secondary"
              onClick={handleCheckoutRedirect}
              data-cursor="play"
            >
              GO TO CHECKOUT <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
