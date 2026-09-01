import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ShieldAlert, Award, Sparkles, RefreshCw } from 'lucide-react';
import { fetchProduct, formatINR } from '../services/api';
import { AppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import ProductImage from '../components/ProductImage';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useContext(AppContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // 360 Drag-to-Rotate tracking variables
  const [rotateYDeg, setRotateYDeg] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentRotation.current = rotateYDeg;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    // Map movement to rotation degrees
    const sensitivity = 0.8; 
    setRotateYDeg(currentRotation.current + deltaX * sensitivity);
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 0) return;
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    currentRotation.current = rotateYDeg;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const sensitivity = 0.8;
    setRotateYDeg(currentRotation.current + deltaX * sensitivity);
  };

  if (loading) {
    return (
      <PageTransition>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
          <div className="led-blinker" style={{ width: '20px', height: '20px' }} />
        </div>
      </PageTransition>
    );
  }

  if (error || !product) {
    return (
      <PageTransition>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          fontFamily: 'var(--font-tech)',
          gap: '20px'
        }}>
          <h2 style={{ color: '#ff0055' }}>SIGNAL LOST: DEVICE UNREACHABLE</h2>
          <p style={{ color: '#64748b' }}>Error communicating with the showroom terminal server.</p>
          <button onClick={() => navigate('/products')} className="cyber-button">
            BACK TO DIRECTORY
          </button>
        </div>
      </PageTransition>
    );
  }

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        {/* Outer Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '50px',
          justifyContent: 'center'
        }}>
          
          {/* LEFT COLUMN: 360 VIEWER */}
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Main Holographic Container */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUpOrLeave}
              className="glass-panel hologram-effect"
              style={{
                height: '420px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                userSelect: 'none',
                position: 'relative',
                borderRadius: '16px',
                border: '1.5px solid rgba(0, 240, 255, 0.25)'
              }}
            >
              {/* Outer HUD elements for design flair */}
              <div style={{ position: 'absolute', top: '15px', left: '20px', fontSize: '9px', fontFamily: 'var(--font-tech)', color: '#00f0ff', opacity: 0.6 }}>
                TERMINAL ID: {product.id.toUpperCase()}<br />
                ROTATION: {Math.round(rotateYDeg % 360)}°
              </div>
              <div style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '9px', fontFamily: 'var(--font-tech)', color: '#00f0ff', opacity: 0.6, textAlign: 'right' }}>
                STATUS: SYNCED<br />
                RENDER: VECTOR V2
              </div>

              {/* Product Vector Image rotated dynamically */}
              <div style={{ width: '80%', height: '80%' }}>
                <ProductImage id={product.id} category={product.category} rotateYDeg={rotateYDeg} />
              </div>

              {/* DRAG TO EXPLORE prompt */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                fontFamily: 'var(--font-tech)',
                color: '#94a3b8',
                letterSpacing: '0.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                pointerEvents: 'none'
              }}>
                <RefreshCw size={12} className="led-blinker" /> DRAG TO EXPLORE (360° VIEW)
              </div>
            </div>

            {/* Futuristic warranty specifications */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
              <div className="glass-panel" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldAlert size={20} color="#00f0ff" />
                <div>
                  <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', color: '#fff' }}>BLUECORE WARRANTY</h4>
                  <p style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>3-Year Technical Shield Coverage</p>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Award size={20} color="#00f0ff" />
                <div>
                  <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', color: '#fff' }}>CERTIFIED NODE</h4>
                  <p style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>100% Quality Inspected</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INFO DRAWER */}
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            fontFamily: 'var(--font-body)'
          }}>
            
            {/* Title / Brand */}
            <div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', color: '#00f0ff', letterSpacing: '0.15em' }}>
                {product.brand.toUpperCase()} DIRECTORY
              </span>
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '6px', lineHeight: '1.2', color: '#fff' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', fontSize: '14px', color: '#94a3b8' }}>
                <span style={{ color: '#00f0ff' }}>★★★★★</span>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>{product.rating}</span>
                <span>({product.reviews} customer reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              {product.description}
            </p>

            {/* Specifications panel */}
            <div>
              <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', color: '#00f0ff', letterSpacing: '0.1em', marginBottom: '12px' }}>
                CORE TELEMETRY SPECIFICATIONS
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px',
                      background: 'rgba(11, 19, 43, 0.3)',
                      borderLeft: '2px solid #00f0ff',
                      borderRadius: '0 4px 4px 0',
                      fontSize: '12px'
                    }}
                  >
                    <span style={{ color: '#94a3b8', fontWeight: '500' }}>{key.toUpperCase()}</span>
                    <span style={{ color: '#fff', fontFamily: 'var(--font-tech)', fontWeight: 'bold' }}>{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing & Cart controls */}
            <div className="glass-panel" style={{ padding: '25px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontSize: '26px', fontFamily: 'var(--font-tech)', fontWeight: 'bold', color: '#00f0ff' }}>
                  {formatINR(product.price)}
                </span>
                {product.oldPrice > product.price && (
                  <>
                    <span style={{ fontSize: '16px', color: '#64748b', textDecoration: 'line-through' }}>
                      {formatINR(product.oldPrice)}
                    </span>
                    <span style={{ fontSize: '12px', color: '#ff0055', fontFamily: 'var(--font-tech)', fontWeight: 'bold' }}>
                      SAVE {product.discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock availability */}
              <div style={{ fontSize: '13px', color: product.stock > 0 ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="led-blinker" style={{ backgroundColor: product.stock > 0 ? '#10b981' : '#ef4444' }} />
                {product.stock > 0 ? `SYNCED SYSTEM STOCK: ${product.stock} ACTIVE NODES` : 'SYSTEM DEPLETED / OUT OF STOCK'}
              </div>

              {/* Action Buttons */}
              {product.stock > 0 && (
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {/* Qty selector */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1.5px solid rgba(0, 240, 255, 0.25)',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}>
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      style={{ padding: '10px 15px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >-</button>
                    <span style={{ width: '30px', textAlign: 'center', color: '#fff', fontFamily: 'var(--font-tech)', fontSize: '13px' }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                      style={{ padding: '10px 15px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >+</button>
                  </div>

                  <button onClick={handleAddToCart} className="cyber-button" style={{ flex: '1', justifyContent: 'center' }}>
                    <ShoppingCart size={16} /> ADD TO CART
                  </button>

                  <button onClick={handleBuyNow} className="cyber-button solid" style={{ flex: '1.2', justifyContent: 'center' }}>
                    BUY NOW
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    style={{
                      background: 'rgba(3, 7, 18, 0.4)',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                      borderRadius: '6px',
                      color: isLiked ? '#ff0055' : '#94a3b8',
                      padding: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Heart size={16} fill={isLiked ? '#ff0055' : 'none'} />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetails;
