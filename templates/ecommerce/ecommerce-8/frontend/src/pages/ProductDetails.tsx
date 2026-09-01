import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToyCart, Product } from '../context/ToyCartContext';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { ArrowLeft, Star, ShoppingCart, Heart, ShieldAlert, Sparkles, Play } from 'lucide-react';
import { BACKUP_PRODUCTS } from './Shop';
import './ProductDetails.css';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isWishlisted } = useToyCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [toyState, setToyState] = useState<'idle' | 'hover' | 'click' | 'cart'>('idle');
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('');

  const isFavorite = product ? isWishlisted(product.id) : false;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        if (res.data) {
          setProduct(res.data);
          if (res.data.variants && res.data.variants.length > 0) {
            setSelectedVariant(res.data.variants[0]);
          }
        } else {
          // Find in backup list
          const backup = BACKUP_PRODUCTS.find(p => p.id === id) || BACKUP_PRODUCTS[0];
          setProduct(backup);
          setSelectedVariant(backup.variants[0]);
        }
      } catch (err) {
        console.warn('API error, using backup detail data.', err);
        const backup = BACKUP_PRODUCTS.find(p => p.id === id) || BACKUP_PRODUCTS[0];
        setProduct(backup);
        setSelectedVariant(backup.variants[0]);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handlePlayToy = () => {
    if (toyState === 'cart') return;
    setToyState('click');
    setTimeout(() => {
      setToyState('idle');
    }, 1800);
  };

  const handleAddToCart = () => {
    if (!product) return;
    setToyState('cart');
    setTimeout(() => {
      addToCart(product, quantity);
      setToyState('idle');
    }, 1000);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (loading) {
    return (
      <div className="detail-loading-page">
        <div className="loader-lego">🧱 Tuning Engines...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="detail-error-page">
        <h3>Toy not found!</h3>
        <button className="btn btn-primary" onClick={() => navigate('/shop')}>
          RETURN TO SHOP
        </button>
      </div>
    );
  }

  const finalPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="product-details-page app-container">
      <div className="stars-bg" />

      <button className="back-nav-btn" onClick={() => navigate(-1)} data-cursor="play">
        <ArrowLeft size={18} /> Back to Catalog
      </button>

      <div className="details-grid">
        {/* Environment / Stage Arena */}
        <div className="toy-showcase-arena glass-panel">
          {/* Circular 3D Pedestal Stage */}
          <div className="stunt-track-pedestal">
            <div className="pedestal-hologram-glow" />
            <div className="pedestal-surface" />
          </div>

          {/* Interactive floating elements */}
          <div className="showcase-toy-wrapper">
            {toyState === 'idle' && product.image.endsWith('.jpg') ? (
              <img src={product.image.startsWith('/') ? `${import.meta.env.BASE_URL}${product.image.substring(1)}` : product.image} alt={product.name} className="pedestal-toy-img" />
            ) : (
              <ToyRenderer type={product.animationType} state={toyState} />
            )}
          </div>

          <button 
            className="btn btn-secondary play-stunt-btn glow-secondary" 
            onClick={handlePlayToy}
            data-cursor="play"
          >
            <Play size={18} fill="currentColor" /> PLAY INTERACTIVE STUNT
          </button>
        </div>

        {/* Checkout panel details */}
        <div className="toy-specs-panel glass-panel">
          <span className="specs-brand">{product.brand}</span>
          <h1 className="specs-title">{product.name}</h1>

          {/* Rating */}
          <div className="specs-rating">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                fill={i < Math.floor(product.rating) ? 'var(--warning)' : 'none'} 
                stroke={i < Math.floor(product.rating) ? 'var(--warning)' : 'var(--text-muted)'} 
              />
            ))}
            <span>({product.rating} Stars / Verified Reviews)</span>
          </div>

          <div className="specs-pricing">
            <span className="specs-price-final">₹{finalPrice.toFixed(2)}</span>
            {product.discount > 0 && (
              <span className="specs-price-original">₹{product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="specs-desc">{product.description}</p>

          {/* Variant select */}
          {product.variants && product.variants.length > 0 && (
            <div className="specs-options">
              <h4>Choose Theme / Color:</h4>
              <div className="variant-badges">
                {product.variants.map(v => (
                  <button 
                    key={v}
                    className={`variant-badge ${selectedVariant === v ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selection */}
          <div className="specs-qty-row">
            <h4>Quantity:</h4>
            <div className="quantity-selectors">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="specs-ctas">
            <button className="btn btn-primary cart-cta glow-primary" onClick={handleAddToCart} data-cursor="add-cart">
              <ShoppingCart size={18} /> ADD TO TOY BOX
            </button>
            <button className="btn btn-secondary buy-cta glow-secondary" onClick={handleBuyNow} data-cursor="play">
              BUY NOW
            </button>
            <button 
              className={`btn btn-outline fav-cta ${isFavorite ? 'active' : ''}`} 
              onClick={handleWishlistToggle}
              data-cursor="collect"
            >
              <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
