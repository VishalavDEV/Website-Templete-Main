import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Truck, RefreshCw, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ReviewsSection from '../components/ReviewsSection';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.05)', borderTopColor: 'var(--accent-gold)', borderRadius: '50%' }}
        />
        <p style={{ color: 'var(--text-secondary)' }}>Loading design specs...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
        <p style={{ color: '#ff4d4d' }}>Error: {error || 'Product specs not available.'}</p>
        <Link to="/" className="btn-secondary">
          BACK TO GALLERY
        </Link>
      </div>
    );
  }

  const specTabs = {
    description: product.description,
    specifications: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Material Composition</span>
          <span style={{ fontWeight: '500' }}>Grade-5 Titanium, Anodised Aluminium, Fine Leather</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Acoustic Drivers</span>
          <span style={{ fontWeight: '500' }}>Custom 40mm Beryllium diaphragms (If applicable)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Stock Status</span>
          <span style={{ fontWeight: '500', color: product.stock > 0 ? '#4caf50' : '#f44336' }}>
            {product.stock > 0 ? `${product.stock} units available` : 'Sold Out'}
          </span>
        </div>
      </div>
    ),
    shipping: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <p>• Complimentary Pan-India standard shipping on all orders over ₹15,000.</p>
        <p>• Delivery timeframe: 3-5 business days for domestic metros; 5-7 business days for rest of India.</p>
        <p>• Fully insured and trackable transport. Signature required upon delivery.</p>
      </div>
    ),
    reviews: (
      <ReviewsSection productId={id} onReviewAdded={fetchProductDetails} />
    )
  };

  return (
    <div style={{ padding: '120px 5% 80px 5%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Back button */}
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }} className="nav-link-hover">
        ← BACK TO GALLERY
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }} className="detail-grid-responsive">
        {/* Left Side: Product Showcase Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel"
          style={{ padding: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', overflow: 'hidden' }}
        >
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Side: Product Details & Buying Control */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* Tags and Stars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {product.category}
            </span>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
              {product.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.1rem' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    fill={s <= Math.floor(product.rating) ? 'var(--accent-gold)' : 'transparent'}
                    color="var(--accent-gold)"
                  />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-gold)' }}>
                {product.rating}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>| Catalog Item No. #{product.id}</span>
            </div>
          </div>

          {/* Pricing */}
          <span style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>

          {/* Quantity and Cart Controls */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-glass)',
                padding: '0.8rem 1.2rem',
                borderRadius: '4px',
                height: '52px'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ cursor: 'pointer', opacity: quantity <= 1 ? 0.4 : 1 }}
              >
                <Minus size={16} />
              </button>
              <span style={{ fontSize: '1rem', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ cursor: 'pointer' }}>
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn-primary"
              disabled={product.stock <= 0}
              style={{
                height: '52px',
                opacity: product.stock <= 0 ? 0.5 : 1,
                cursor: product.stock <= 0 ? 'not-allowed' : 'pointer'
              }}
            >
              {product.stock > 0 ? 'ADD TO BAG' : 'SOLD OUT'} <ShoppingCart size={16} />
            </button>
          </div>

          {/* Specifications and Details Tabbed Panel */}
          <div style={{ marginTop: '1rem' }}>
            {/* Tabs Headers */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', marginBottom: '1.5rem' }}>
              {['description', 'specifications', 'shipping', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: activeTab === tab ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    borderBottom: activeTab === tab ? '2px solid var(--accent-gold)' : 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    marginBottom: '-1px'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div style={{ minHeight: '120px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ lineHeight: 1.6, color: 'var(--text-secondary)', fontSize: '0.95rem' }}
                >
                  {specTabs[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Trust points */}
          <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-glass)', paddingTop: '2rem', marginTop: '1rem' }} className="trust-points-responsive">
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <ShieldCheck size={18} color="var(--accent-gold)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>2 YEAR WARRANTY</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Truck size={18} color="var(--accent-gold)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SECURE INSURED SHIPPING</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .detail-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .detail-grid-responsive div {
            height: auto !important;
          }
        }
        @media (max-width: 600px) {
          .trust-points-responsive {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// Quick helper button components since React standard imports are easier
const Minus = ({ size }) => <span style={{ fontSize: size, fontWeight: '700', userSelect: 'none' }}>-</span>;
const Plus = ({ size }) => <span style={{ fontSize: size, fontWeight: '700', userSelect: 'none' }}>+</span>;

export default ProductDetail;
