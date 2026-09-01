import React, { useState } from 'react';
import { 
  ShoppingBag, Heart, Check, AlertCircle, Sparkles, 
  Ruler, Truck, RotateCcw, ShieldCheck, Zap, ChevronRight, Share2, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProductDetails = ({ 
  product, 
  activeColorway, 
  onSelectColorway, 
  onAddToCart, 
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeSystem, setSizeSystem] = useState('US'); // 'US' | 'UK' | 'EU' | 'CM'
  const [sizeError, setSizeError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Trigger Add to Cart with Size Validation
  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      // Auto-scroll slightly or shake
      const sizeSection = document.getElementById('size-selector-anchor');
      if (sizeSection) {
        sizeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSizeError(false);
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
      setAddedSuccess(true);
      
      // Fire celebratory confetti explosion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: [activeColorway.primaryHex, '#00F0FF', '#FFFFFF']
      });

      onAddToCart({
        id: `${product.id}-${activeColorway.id}-${selectedSize.us}`,
        name: product.name,
        colorway: activeColorway.name,
        colorwayId: activeColorway.id,
        image: activeColorway.heroImage,
        size: selectedSize,
        price: product.price
      });

      setTimeout(() => setAddedSuccess(false), 2500);
    }, 600);
  };

  const getSizeLabel = (sizeObj) => {
    switch (sizeSystem) {
      case 'UK': return `UK ${sizeObj.uk}`;
      case 'EU': return `EU ${sizeObj.eu}`;
      case 'CM': return `${sizeObj.cm} cm`;
      default: return `US ${sizeObj.us}`;
    }
  };

  return (
    <div className="product-details-container glass-panel">
      
      {/* Product Category & Rating Top Row */}
      <div className="details-header-row">
        <div className="details-category-badge">
          <span className="live-pulse-dot"></span>
          <span>{product.category}</span>
        </div>
        <a href="#reviews" className="details-rating-badge">
          <span className="star-icon">★</span>
          <span className="rating-val">{product.rating}</span>
          <span className="rating-count">({product.reviewCount} reviews)</span>
        </a>
      </div>

      {/* Main Title & Storyline */}
      <h1 className="product-title">{product.name}</h1>
      <p className="product-subtitle">{product.subtitle}</p>

      {/* Pricing Module */}
      <div className="pricing-box glass-card">
        <div className="price-main-row">
          <div className="price-tag-wrap">
            <span className="price-currency">$</span>
            <span className="price-amount">{product.price.toFixed(2)}</span>
          </div>
          <div className="price-original-wrap">
            <span className="price-original">${product.originalPrice.toFixed(2)}</span>
            <span className="discount-badge">SAVE {product.discountPercentage}%</span>
          </div>
        </div>
        <div className="price-sub-note">
          <Truck size={14} className="truck-icon" /> Free Express Delivery (2-3 Business Days) • 30-Day Road Trial
        </div>
      </div>

      {/* Colorway Switcher Section */}
      <div className="details-colorway-section">
        <div className="section-label-row">
          <span className="section-title-label">COLOR:</span>
          <span className="active-color-name" style={{ color: activeColorway.primaryHex }}>
            {activeColorway.name}
          </span>
        </div>

        <div className="color-tiles-row">
          {product.colorways.map((cw) => {
            const isSelected = activeColorway.id === cw.id;
            return (
              <button
                key={cw.id}
                className={`color-tile-btn ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectColorway(cw)}
              >
                <div className="tile-img-wrap">
                  <img src={cw.heroImage} alt={cw.name} />
                </div>
                <div className="tile-bar" style={{ backgroundColor: cw.primaryHex }}></div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Selector with Validation */}
      <div id="size-selector-anchor" className={`details-size-section ${sizeError ? 'has-size-error' : ''}`}>
        <div className="size-header-row">
          <div className="size-label-wrap">
            <span className="section-title-label">SELECT SIZE:</span>
            {selectedSize && (
              <span className="selected-size-confirm font-mono">
                {getSizeLabel(selectedSize)}
              </span>
            )}
          </div>

          <div className="size-right-tools">
            {/* Sizing Standard Tabs */}
            <div className="size-system-toggle">
              {['US', 'UK', 'EU', 'CM'].map((sys) => (
                <button
                  key={sys}
                  className={`sys-tab-btn ${sizeSystem === sys ? 'active' : ''}`}
                  onClick={() => setSizeSystem(sys)}
                >
                  {sys}
                </button>
              ))}
            </div>

            {/* Size Guide Trigger */}
            <button 
              className="size-guide-trigger-btn"
              onClick={onOpenSizeGuide}
            >
              <Ruler size={14} />
              <span>Size Guide</span>
            </button>
          </div>
        </div>

        {/* Size Validation Warning Banner */}
        {sizeError && (
          <div className="size-error-banner">
            <AlertCircle size={16} />
            <span>Please select a shoe size before adding to cart.</span>
          </div>
        )}

        {/* Sizes Grid */}
        <div className="sizes-grid">
          {product.sizes.map((sizeObj, idx) => {
            const isSelected = selectedSize?.us === sizeObj.us;
            const isAvailable = sizeObj.inStock;

            return (
              <button
                key={idx}
                disabled={!isAvailable}
                className={`size-btn ${isSelected ? 'selected' : ''} ${!isAvailable ? 'sold-out' : ''} ${sizeObj.isPopular ? 'popular-size' : ''}`}
                onClick={() => {
                  setSelectedSize(sizeObj);
                  setSizeError(false);
                }}
              >
                <span className="size-text">{getSizeLabel(sizeObj)}</span>
                {sizeObj.isPopular && isAvailable && (
                  <span className="popular-dot" title="Most Popular Fit"></span>
                )}
                {!isAvailable && (
                  <span className="sold-out-cross">SOLD OUT</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="fit-recommendation-note">
          <Sparkles size={13} className="sparkle-gold" />
          <span><strong>Fit Guidance:</strong> Fits true to race size. If between sizes or running ultra distances (30k+), order 0.5 size up.</span>
        </div>
      </div>

      {/* CTA Buttons Row */}
      <div className="purchase-actions-group">
        
        {/* Main Add To Cart */}
        <button 
          className={`btn-primary add-to-cart-cta ${isAdding ? 'loading' : ''} ${addedSuccess ? 'success' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <div className="btn-spinner"></div>
          ) : addedSuccess ? (
            <>
              <Check size={20} />
              <span>ADDED TO CART!</span>
            </>
          ) : (
            <>
              <ShoppingBag size={20} />
              <span>ADD TO CART • ${product.price.toFixed(2)}</span>
            </>
          )}
        </button>

        {/* Wishlist Button */}
        <button 
          className={`wishlist-toggle-btn ${isWishlisted ? 'is-active' : ''}`}
          onClick={onToggleWishlist}
          aria-label="Add to Wishlist"
          title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
        >
          <Heart size={22} className={isWishlisted ? 'heart-active-svg' : ''} />
        </button>

      </div>

      {/* Trust & Guarantee Cards */}
      <div className="trust-perks-grid">
        <div className="perk-item">
          <Truck size={18} className="perk-icon" />
          <div>
            <div className="perk-title">Free Express Shipping</div>
            <div className="perk-desc">Carbon-neutral delivery</div>
          </div>
        </div>

        <div className="perk-item">
          <RotateCcw size={18} className="perk-icon" />
          <div>
            <div className="perk-title">30-Day Road Trial</div>
            <div className="perk-desc">Run in them, return if not wowed</div>
          </div>
        </div>

        <div className="perk-item">
          <ShieldCheck size={18} className="perk-icon" />
          <div>
            <div className="perk-title">2-Year Carbon Warranty</div>
            <div className="perk-desc">Guaranteed plate integrity</div>
          </div>
        </div>
      </div>

    </div>
  );
};
