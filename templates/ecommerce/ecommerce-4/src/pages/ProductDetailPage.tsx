import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { DeliveryChecker } from '../components/common/DeliveryChecker';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductGalleryModal } from '../components/product/ProductGalleryModal';
import { Star, ShoppingBag, Heart, SlidersHorizontal, CheckCircle2, Maximize2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const { addToCart, toggleWishlist, isInWishlist, addToCompare, isInCompare, navigate } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'specs' | 'desc' | 'reviews'>('specs');

  const isSaved = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/checkout');
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', gap: '0.4rem' }}>
          <button onClick={() => navigate('/')} style={{ color: 'var(--text-secondary)' }}>Home</button> /
          <button onClick={() => navigate(`/${product.category}`)} style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
            {product.category}
          </button> /
          <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{product.name}</span>
        </div>

        {/* Top Product Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Gallery Container */}
          <div>
            <div
              onClick={() => setIsGalleryModalOpen(true)}
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                marginBottom: '1rem',
                border: '1px solid var(--border-light)',
                cursor: 'zoom-in'
              }}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(22, 22, 22, 0.75)',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <Maximize2 size={14} /> TAP TO ENLARGE
              </div>
            </div>

            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '72px',
                      height: '72px',
                      aspectRatio: '1 / 1',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImageIndex === idx ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                      opacity: activeImageIndex === idx ? 1 : 0.7,
                      cursor: 'pointer'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buy Box */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                  {product.brand}
                </span>
                {product.badge && <span className="badge badge-new">{product.badge}</span>}
              </div>

              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                {product.name}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', backgroundColor: '#FFF8EF', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #FCD34D' }}>
                  <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
                  <span style={{ fontWeight: 800 }}>{product.rating}</span>
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>({product.reviewCount} customer reviews)</span>
                <span style={{ color: 'var(--border-light)' }}>|</span>
                <span style={{ color: '#15803D', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={14} /> In Stock ({product.stock} units)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="badge badge-sale">SAVE {product.discount}%</span>
                  </>
                )}
              </div>

              {/* Color Picker */}
              {product.colors && product.colors.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                    COLOR: <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{selectedColor}</span>
                  </label>
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: selectedColor === c.name ? '3px solid var(--accent-blue)' : '1px solid var(--border-light)',
                          outline: selectedColor === c.name ? '2px solid #FFFFFF' : 'none',
                          cursor: 'pointer'
                        }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Picker */}
              {product.sizes && product.sizes.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                    SELECT SIZE:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        style={{
                          padding: '0.5rem 1.1rem',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: selectedSize === s ? 'var(--text-primary)' : 'var(--bg-primary)',
                          color: selectedSize === s ? '#FFFFFF' : 'var(--text-primary)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 800 }}>QUANTITY:</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '0.5rem 1rem', fontWeight: 800 }}>-</button>
                  <span style={{ padding: '0.5rem 1rem', fontSize: '0.95rem', fontWeight: 800 }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '0.5rem 1rem', fontWeight: 800 }}>+</button>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <button
                    onClick={() => addToCart(product, quantity, selectedColor, selectedSize)}
                    className="btn btn-accent"
                    style={{ flex: 1, padding: '1rem' }}
                  >
                    <ShoppingBag size={18} /> ADD TO BAG
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '1rem' }}
                  >
                    BUY NOW
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.82rem' }}
                  >
                    <Heart size={16} fill={isSaved ? '#DC2626' : 'none'} color={isSaved ? '#DC2626' : 'currentColor'} />
                    {isSaved ? 'SAVED TO WISHLIST' : 'SAVE TO WISHLIST'}
                  </button>

                  <button
                    onClick={() => addToCompare(product)}
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.82rem' }}
                  >
                    <SlidersHorizontal size={16} color={isCompared ? 'var(--accent-blue)' : 'currentColor'} />
                    {isCompared ? 'IN COMPARE' : 'ADD TO COMPARE'}
                  </button>
                </div>
              </div>
            </div>

            <DeliveryChecker />
          </div>
        </div>

        {/* Specifications & Reviews Accordion */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            marginBottom: '4rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Specifications */}
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <button
              onClick={() => setExpandedSection(expandedSection === 'specs' ? 'desc' : 'specs')}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>PRODUCT SPECIFICATIONS</h3>
              <ChevronDown size={20} style={{ transform: expandedSection === 'specs' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} />
            </button>
            <AnimatePresence>
              {expandedSection === 'specs' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden', paddingTop: '1rem' }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-primary)' : '#FFFFFF' }}>
                          <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: 'var(--text-primary)', width: '35%', borderBottom: '1px solid var(--border-light)' }}>
                            {key}
                          </td>
                          <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-light)' }}>
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Description */}
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <button
              onClick={() => setExpandedSection(expandedSection === 'desc' ? 'specs' : 'desc')}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>DESCRIPTION & HIGHLIGHTS</h3>
              <ChevronDown size={20} style={{ transform: expandedSection === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} />
            </button>
            <AnimatePresence>
              {expandedSection === 'desc' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden', paddingTop: '1rem' }}
                >
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {product.description}
                  </p>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Features & Performance:</h4>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {product.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reviews */}
          <div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'reviews' ? 'specs' : 'reviews')}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>VERIFIED REVIEWS ({product.reviewCount})</h3>
              <ChevronDown size={20} style={{ transform: expandedSection === 'reviews' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} />
            </button>
            <AnimatePresence>
              {expandedSection === 'reviews' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden', paddingTop: '1rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', minWidth: '180px' }}>
                      <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)' }}>{product.rating}</div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginBottom: '0.4rem' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                        ))}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Based on {product.reviewCount} reviews</div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flex: 1 }}>
                      100% verified authentic customer purchases from ORVANA department store shoppers.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>RELATED PRODUCTS</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>

      <ProductGalleryModal
        images={product.images}
        initialIndex={activeImageIndex}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
};
