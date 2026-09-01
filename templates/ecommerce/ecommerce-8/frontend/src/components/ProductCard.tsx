import React, { useState } from 'react';
import { useToyCart, Product } from '../context/ToyCartContext';
import { ToyRenderer } from './toys/ToyRenderer';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isWishlisted } = useToyCart();
  const [toyState, setToyState] = useState<'idle' | 'hover' | 'click' | 'cart'>('idle');
  const [isWiggling, setIsWiggling] = useState(false);

  const isFavorite = isWishlisted(product.id);

  const handleCardHover = (hovering: boolean) => {
    if (toyState === 'click' || toyState === 'cart') return;
    setToyState(hovering ? 'hover' : 'idle');
  };

  const handleToyClick = () => {
    if (toyState === 'cart') return;
    setToyState('click');
    // Reset to hover or idle after click animation completes
    setTimeout(() => {
      setToyState('idle');
    }, 1800);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (toyState === 'cart') return;
    
    // Set to cart animation state
    setToyState('cart');
    
    // Trigger visual context update after animation finishes (approx 1s)
    setTimeout(() => {
      addToCart(product, 1);
      setToyState('idle');
    }, 1000);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 500);

    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Determine cursor prompt for the toy type
  const getCursorPrompt = (type: string) => {
    switch (type.toLowerCase()) {
      case 'car': return 'drive';
      case 'doll': return 'play';
      case 'robot': return 'activate';
      case 'lego': return 'build';
      case 'airplane': return 'fly';
      case 'train': return 'steer';
      case 'dinosaur': return 'roar';
      case 'rocket': return 'launch';
      case 'ball': return 'bounce';
      default: return 'play';
    }
  };

  const finalPrice = product.price * (1 - product.discount / 100);

  return (
    <div 
      className="product-card glass-panel"
      onMouseEnter={() => handleCardHover(true)}
      onMouseLeave={() => handleCardHover(false)}
      onClick={handleToyClick}
      data-cursor={getCursorPrompt(product.animationType)}
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <span className="card-discount-badge">-{product.discount}%</span>
      )}

      {/* Toy Animation Arena */}
      <div className="card-toy-container">
        {toyState === 'idle' && product.image.endsWith('.jpg') ? (
          <img src={product.image.startsWith('/') ? `${import.meta.env.BASE_URL}${product.image.substring(1)}` : product.image} alt={product.name} className="card-toy-img" />
        ) : (
          <ToyRenderer type={product.animationType} state={toyState} />
        )}
      </div>

      {/* Product metadata */}
      <div className="card-details">
        <span className="card-brand">{product.brand}</span>
        <h3 className="card-title">{product.name}</h3>
        
        {/* Rating stars */}
        <div className="card-rating">
          <span className="stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(product.rating) ? 'var(--warning)' : 'none'} 
                stroke={i < Math.floor(product.rating) ? 'var(--warning)' : 'var(--text-muted)'} 
              />
            ))}
          </span>
          <span className="rating-value">{product.rating}</span>
        </div>

        {/* Pricing */}
        <div className="card-pricing">
          <span className="card-price-final">₹{finalPrice.toFixed(2)}</span>
          {product.discount > 0 && (
            <span className="card-price-original">₹{product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Quick action buttons */}
        <div className="card-actions">
          <button 
            className={`card-btn fav-btn ${isFavorite ? 'active' : ''} ${isWiggling ? 'wiggle' : ''}`}
            onClick={handleWishlistToggle}
            title="Add to Collection"
            data-cursor="collect"
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          
          <button 
            className="card-btn view-btn"
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            title="Quick View"
            data-cursor="play"
          >
            <Eye size={18} />
          </button>

          <button 
            className="card-btn add-btn glow-accent"
            onClick={handleAddToCart}
            title="Add to Toy Box"
            data-cursor="add-cart"
          >
            <ShoppingCart size={18} />
            <span>ADD TO BOX</span>
          </button>
        </div>
      </div>
    </div>
  );
};
