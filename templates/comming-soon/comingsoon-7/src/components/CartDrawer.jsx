import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';

export const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQty, 
  onRemoveItem,
  onCheckout 
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // 0 to 1
  const [promoMessage, setPromoMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const freeShippingThreshold = 150.00;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = isFreeShipping || items.length === 0 ? 0 : 15.00;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'STRIDE2026' || code === 'MARATHON10') {
      setAppliedDiscount(0.10);
      setPromoMessage('✓ 10% Launch Discount Applied!');
    } else if (code === 'VIP20') {
      setAppliedDiscount(0.20);
      setPromoMessage('✓ 20% Athlete VIP Discount Applied!');
    } else {
      setPromoMessage('✗ Invalid promo code');
    }
  };

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div className="cart-drawer-content glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="drawer-title-wrap">
            <ShoppingBag size={20} />
            <h3 className="drawer-title">YOUR RACE CART</h3>
            <span className="cart-total-badge font-mono">({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="free-shipping-tracker glass-card">
          <div className="shipping-text-row">
            <Truck size={15} />
            <span>
              {isFreeShipping 
                ? <strong className="green-text">You have unlocked Free Express Shipping!</strong> 
                : <span>Add <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for Free Worldwide Shipping</span>
              }
            </span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-scroll">
          {items.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h4>Your Cart is Empty</h4>
              <p>Your fastest marathon starts with the AEROSTRIDE X-PRO.</p>
              <button className="btn-primary" onClick={onClose}>
                <span>Explore Drops</span>
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item-card glass-card">
                <div className="cart-item-thumb">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <button 
                      className="cart-remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                      title="Remove Item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div className="cart-item-variant font-mono">
                    Color: {item.colorway.split('/')[0]} • US {item.size.us} (EU {item.size.eu})
                  </div>

                  <div className="cart-item-bottom">
                    <div className="quantity-stepper">
                      <button 
                        className="stepper-btn"
                        onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus size={13} />
                      </button>
                      <span className="stepper-val font-mono">{item.quantity}</span>
                      <button 
                        className="stepper-btn"
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div className="cart-item-price font-display">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Drawer Footer */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            
            {/* Promo Code Box */}
            <form onSubmit={handleApplyPromo} className="promo-form-row">
              <div className="promo-input-wrap">
                <Tag size={15} className="promo-tag-icon" />
                <input 
                  type="text" 
                  placeholder="Promo Code (STRIDE2026)" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-input font-mono"
                />
              </div>
              <button type="submit" className="apply-promo-btn">Apply</button>
            </form>
            {promoMessage && (
              <div className={`promo-msg ${appliedDiscount > 0 ? 'success' : 'error'}`}>
                {promoMessage}
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="cart-totals-breakdown">
              <div className="total-row">
                <span>Subtotal:</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="total-row discount-row">
                  <span>Discount ({(appliedDiscount * 100).toFixed(0)}%):</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="total-row">
                <span>Express Shipping:</span>
                <span className="font-mono">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="total-row grand-total-row">
                <span>Estimated Total:</span>
                <span className="grand-total-val font-display">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="btn-primary full-width-btn checkout-btn" onClick={onCheckout}>
              <span>PROCEED TO EXPRESS CHECKOUT</span>
              <ArrowRight size={18} />
            </button>

            <div className="cart-security-note">
              <ShieldCheck size={14} />
              <span>256-Bit Encrypted Secure Checkout • 30-Day Money Back</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
