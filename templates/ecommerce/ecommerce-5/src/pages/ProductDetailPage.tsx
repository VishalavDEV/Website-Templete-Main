import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ChevronDown, ChevronUp, RefreshCw, Truck, Plus, Minus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SizeGuideModal } from '../components/product/SizeGuideModal';
import { ProductCard } from '../components/shop/ProductCard';
import type { Product } from '../types';

interface ProductDetailContentProps {
  product: Product;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ product }) => {
  const { products, addToCart, isInWishlist, toggleWishlist, formatINR } = useShop();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('desc');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(prev => prev === key ? null : key);
  };

  const isSaved = isInWishlist(product.id);

  const galleryImages = [
    product.images.primary,
    product.images.secondary,
    ...(product.images.lifestyle ? [product.images.lifestyle] : [])
  ];

  const relatedProducts = products.filter(p => p.gender === product.gender && p.id !== product.id).slice(0, 4);

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', paddingBottom: '100px' }}>
      <div className="container-custom">
        {/* Breadcrumb */}
        <div style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '24px' }}>
          <Link to="/">HOME</Link> / <Link to={`/${product.gender}`}>{product.gender}</Link> / <span>{product.name}</span>
        </div>

        {/* Product Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT: Large Image Gallery (Cols 1-7) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            className="pdp-gallery-col"
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  backgroundColor: 'var(--bg-secondary)',
                  overflow: 'hidden',
                  borderRadius: '2px',
                }}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Product Information (Cols 8-12) */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'sticky',
              top: 'calc(var(--header-height) + 20px)',
            }}
            className="pdp-info-col"
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              {product.brand}
            </span>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 42px)', textTransform: 'uppercase', marginBottom: '12px' }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '22px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {formatINR(product.price)}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--accent-bronze)' }}>
                <Star size={14} fill="currentColor" />
                <span style={{ fontWeight: '600' }}>{product.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount} REVIEWS)</span>
              </div>
            </div>

            {/* Colors */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '11px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                COLOR: <span style={{ color: 'var(--text-secondary)' }}>{selectedColor.name}</span>
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: selectedColor.name === c.name ? '2px solid var(--text-primary)' : '1px solid rgba(0,0,0,0.2)',
                      padding: '2px',
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '11px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase' }}>
                  SELECT SIZE
                </label>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--accent-bronze)', textDecoration: 'underline' }}
                >
                  SIZE GUIDE
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      minWidth: '44px',
                      padding: '10px 16px',
                      fontSize: '12px',
                      fontWeight: '600',
                      border: '1px solid',
                      borderColor: selectedSize === s ? 'var(--text-primary)' : 'var(--border-medium)',
                      backgroundColor: selectedSize === s ? 'var(--text-primary)' : 'transparent',
                      color: selectedSize === s ? 'var(--bg-primary)' : 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-medium)', height: '52px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '0 14px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span style={{ padding: '0 12px', fontSize: '13px', fontWeight: '600', minWidth: '24px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '0 14px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, selectedColor, selectedSize, quantity)}
                className="btn-aurel-primary"
                style={{ flex: 1, padding: '16px', height: '52px' }}
              >
                <ShoppingBag size={16} /> ADD TO BAG →
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="btn-aurel-outline"
                style={{ padding: '0 20px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title="Save item"
              >
                <Heart size={18} fill={isSaved ? "#C2410C" : "none"} strokeWidth={1.5} />
              </button>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: '1px solid var(--border-light)' }}>
              {/* DESCRIPTION */}
              <div>
                <button className="accordion-header" onClick={() => toggleAccordion('desc')}>
                  <span>DESCRIPTION</span>
                  {openAccordion === 'desc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'desc' && (
                  <div className="accordion-content">
                    {product.description}
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div>
                <button className="accordion-header" onClick={() => toggleAccordion('details')}>
                  <span>DETAILS & MATERIAL</span>
                  {openAccordion === 'details' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'details' && (
                  <div className="accordion-content">
                    <p style={{ marginBottom: '8px' }}><strong>Material:</strong> {product.material}</p>
                    <p><strong>Origin:</strong> Crafted in Portugal</p>
                  </div>
                )}
              </div>

              {/* CARE */}
              <div>
                <button className="accordion-header" onClick={() => toggleAccordion('care')}>
                  <span>CARE INSTRUCTIONS</span>
                  {openAccordion === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'care' && (
                  <div className="accordion-content">
                    {product.care}
                  </div>
                )}
              </div>

              {/* DELIVERY */}
              <div>
                <button className="accordion-header" onClick={() => toggleAccordion('delivery')}>
                  <span>DELIVERY & RETURNS</span>
                  {openAccordion === 'delivery' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'delivery' && (
                  <div className="accordion-content">
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Truck size={16} color="var(--accent-bronze)" /> Estimated delivery: 2–5 business days across India.
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <RefreshCw size={16} color="var(--accent-bronze)" /> Easy 7-day complimentary home return pickup.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '120px' }}>
          <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', textTransform: 'uppercase' }}>
              YOU MAY ALSO LIKE
            </h2>
          </div>
          <div className="product-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        gender={product.gender}
      />

      <style>{`
        @media (min-width: 1024px) {
          .pdp-gallery-col {
            grid-column: span 7 !important;
          }
          .pdp-info-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </main>
  );
};

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useShop();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-aurel-primary" style={{ marginTop: '24px' }}>
          RETURN TO SHOP
        </Link>
      </main>
    );
  }

  return <ProductDetailContent key={product.id} product={product} />;
};
