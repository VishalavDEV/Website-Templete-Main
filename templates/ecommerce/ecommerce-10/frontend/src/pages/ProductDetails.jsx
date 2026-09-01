import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingBag, CreditCard, ChevronRight, Sparkles, Check, Info } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, wishlist } = useContext(EcomContext);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });

  useEffect(() => {
    // Find matching product
    const found = products.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(found.image);
      if (found.sizes && found.sizes.length > 0) setSelectedSize(found.sizes[0]);
      if (found.colors && found.colors.length > 0) setSelectedColor(found.colors[0]);
      setQuantity(1);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <span className="spinner" style={{ width: '40px', height: '40px', border: '4px solid #7c5cff', borderTop: '4px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  const isLiked = wishlist.some((item) => item.id === product.id);
  const finalPrice = product.price * (1 - product.discount / 100);

  const handleAddToCart = async () => {
    await addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = async () => {
    await addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/checkout');
  };

  // Magnifying Glass Zoom Effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${activeImage})`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  // Get similar products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Breadcrumbs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#8a7db3', marginBottom: '40px' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
        <ChevronRight size={12} />
        <span style={{ cursor: 'pointer' }} onClick={() => navigate(`/products?category=${product.category}`)}>{product.category}</span>
        <ChevronRight size={12} />
        <span style={{ color: '#1e133e', fontWeight: 500 }}>{product.name}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'start' }}>
        
        {/* Gallery Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Main Zoomable Image Frame */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#faf8ff',
              border: '1px solid rgba(124,92,255,0.08)',
              height: '500px',
              cursor: 'zoom-in',
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Glowing Magnifying overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundSize: '200%',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                ...zoomStyle,
              }}
            />
          </div>

          {/* Thumbnails Row */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[product.image, 'https://images.unsplash.com/photo-1574164904299-3a102b110380?w=600&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80'].slice(0, 3).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                style={{
                  width: '80px',
                  height: '90px',
                  border: activeImage === img ? '2px solid #7c5cff' : '1px solid rgba(124,92,255,0.12)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  padding: 0,
                  backgroundColor: '#fff',
                }}
              >
                <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: '#7c5cff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {product.brand}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(124,92,255,0.06)', padding: '2px 8px', borderRadius: '10px' }}>
                <Sparkles size={10} style={{ color: '#7c5cff' }} />
                <span style={{ fontSize: '0.65rem', color: '#7c5cff', fontWeight: 'bold' }}>Featured</span>
              </div>
            </div>

            <h1 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', color: '#1e133e', fontWeight: 800, marginTop: '8px', lineHeight: '1.15' }}>
              {product.name}
            </h1>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
              <div style={{ display: 'flex', color: '#ffd700' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>
                {product.rating} ({product.reviews} customer ratings)
              </span>
            </div>
          </div>

          {/* Pricing Card */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: '#faf8ff',
              border: '1px solid rgba(124,92,255,0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              width: 'fit-content',
            }}
          >
            {product.discount > 0 ? (
              <>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: '#7c5cff' }}>
                  ₹{finalPrice.toFixed(0)}
                </span>
                <span style={{ fontSize: '1.25rem', textDecoration: 'line-through', color: '#8a7db3' }}>
                  ₹{product.price.toFixed(0)}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#ffcbc1', backgroundColor: '#130e26', padding: '4px 10px', borderRadius: '10px', fontWeight: 'bold' }}>
                  SAVE {product.discount}%
                </span>
              </>
            ) : (
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1e133e' }}>
                ₹{product.price.toFixed(0)}
              </span>
            )}
          </div>

          <p style={{ fontSize: '0.95rem', color: '#5c4e8c', lineHeight: '1.6' }}>
            {product.description}
          </p>

          {/* Size Select */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <span style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600 }}>Select Size:</span>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      minWidth: '46px',
                      height: '46px',
                      border: selectedSize === sz ? '2.5px solid #7c5cff' : '1.5px solid rgba(124, 92, 255, 0.15)',
                      background: selectedSize === sz ? '#f1edff' : '#fff',
                      color: selectedSize === sz ? '#7c5cff' : '#5c4e8c',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Select */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <span style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600 }}>Select Color:</span>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {product.colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    style={{
                      border: selectedColor === col ? '2.5px solid #7c5cff' : '1.5px solid rgba(124, 92, 255, 0.15)',
                      background: selectedColor === col ? '#f1edff' : '#fff',
                      color: selectedColor === col ? '#7c5cff' : '#5c4e8c',
                      borderRadius: '30px',
                      padding: '8px 18px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600 }}>Quantity:</span>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(124,92,255,0.15)', borderRadius: '30px', overflow: 'hidden', width: 'fit-content' }}>
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                style={{ background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer', color: '#7c5cff' }}
              >
                -
              </button>
              <span style={{ padding: '0 10px', fontWeight: 600, color: '#1e133e' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ background: 'none', border: 'none', padding: '8px 16px', cursor: 'pointer', color: '#7c5cff' }}
              >
                +
              </button>
            </div>
          </div>

          {/* Core Checkout Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={handleAddToCart}
              className="premium-btn"
              style={{ flex: 1.5, justifyContent: 'center', padding: '16px' }}
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="premium-btn-outline"
              style={{ flex: 1.5, justifyContent: 'center', padding: '15px' }}
            >
              <CreditCard size={20} /> Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                border: '1.5px solid rgba(124, 92, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isLiked ? '#f1edff' : '#fff',
                color: '#7c5cff',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Heart size={22} fill={isLiked ? '#7c5cff' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products row */}
      {relatedProducts.length > 0 && (
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.75rem', color: '#1e133e', marginBottom: '30px' }}>
            You May Also Like
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
            {relatedProducts.map((prod, index) => (
              <ProductCard
                key={prod.id}
                product={prod}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
