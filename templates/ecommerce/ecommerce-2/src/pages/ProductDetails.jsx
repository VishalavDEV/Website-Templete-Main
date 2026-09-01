import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, isInWishlist, formatPrice, setIsCartOpen } = useContext(ShopContext);

  const product = products.find((p) => p.id === id) || products[0];

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState(product.material || '18K Yellow Gold & Emerald');
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : 'Standard'
  );
  const [qty, setQty] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    setSelectedImgIndex(0);
    setSelectedMetal(product.material || '18K Yellow Gold & Emerald');
    setSelectedSize(product.sizes ? product.sizes[0] : 'Standard');
    setQty(1);
  }, [id, product]);

  const isWishlisted = isInWishlist(product.id);

  const handleBuyNow = () => {
    addToCart(product, qty, selectedSize, selectedMetal);
    setIsCartOpen(true);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Header */}
      <div style={{ background: '#F5F0E6', padding: '1rem 0', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Shop</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{product.category}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--emerald-deep)', fontWeight: '600' }}>{product.name}</span>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem' }}>
          
          {/* Gallery */}
          <div style={{ gridColumn: 'span 12' }} className="pdp-img-col">
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column-reverse' }}>
              {product.images && product.images.length > 1 && (
                <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto' }}>
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      style={{
                        width: '80px',
                        height: '80px',
                        padding: 0,
                        border: selectedImgIndex === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                        background: '#ffffff',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.1',
                  overflow: 'hidden',
                  backgroundColor: '#F5F0E6',
                  border: '1px solid var(--border-gold)'
                }}
              >
                <img
                  src={product.images[selectedImgIndex] || product.images[0]}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Product Details Right */}
          <div style={{ gridColumn: 'span 12' }} className="pdp-info-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem' }}>
              <span className="badge-emerald">{product.category}</span>
              <span className="badge-gold">{product.collection} COLLECTION</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                color: 'var(--emerald-deep)',
                lineHeight: 1.15,
                marginBottom: '0.6rem'
              }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '2px', color: 'var(--gold-primary)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--gold-primary)" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {product.rating} ({product.reviews} verified reviews)
              </span>
            </div>

            {/* Price in Gold */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: '700', color: 'var(--gold-dark)' }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span style={{ textDecoration: 'line-through', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span style={{ fontSize: '0.75rem', color: 'var(--emerald-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                Inclusive of all taxes & BIS Hallmarking
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {product.description}
            </p>

            {/* Metals */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--emerald-deep)', fontWeight: '700', display: 'block', marginBottom: '0.6rem' }}>
                Select Precious Metal: <span style={{ color: 'var(--gold-dark)', fontWeight: '600' }}>{selectedMetal}</span>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {['18K Yellow Gold & Emerald', '18K Yellow Gold', 'Platinum & Emerald'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMetal(m)}
                    style={{
                      padding: '0.6rem 1.2rem',
                      border: selectedMetal === m ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                      background: selectedMetal === m ? 'rgba(212, 175, 55, 0.15)' : '#ffffff',
                      color: 'var(--emerald-deep)',
                      fontSize: '0.82rem',
                      fontWeight: selectedMetal === m ? '700' : '400',
                      cursor: 'pointer'
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--emerald-deep)', fontWeight: '700', display: 'block', marginBottom: '0.6rem' }}>
                  Select Size:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      style={{
                        minWidth: '50px',
                        padding: '0.6rem 1rem',
                        border: selectedSize === s ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                        background: selectedSize === s ? 'var(--emerald-deep)' : '#ffffff',
                        color: selectedSize === s ? '#ffffff' : 'var(--emerald-deep)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-gold)', background: '#ffffff' }}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '0.8rem 1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>-</button>
                  <span style={{ padding: '0 1rem', fontWeight: '600' }}>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} style={{ padding: '0.8rem 1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>+</button>
                </div>

                <button
                  onClick={() => addToCart(product, qty, selectedSize, selectedMetal)}
                  className="btn-emerald"
                  style={{ flexGrow: 1, padding: '0.9rem 1.5rem' }}
                >
                  <ShoppingBag size={18} style={{ color: 'var(--gold-primary)' }} /> ADD TO BAG
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  style={{
                    width: '54px',
                    border: '1px solid var(--border-gold)',
                    background: '#ffffff',
                    color: isWishlisted ? 'var(--gold-primary)' : 'var(--emerald-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  title="Save to Wishlist"
                >
                  <Heart size={22} fill={isWishlisted ? 'var(--gold-primary)' : 'none'} />
                </button>
              </div>

              <button onClick={handleBuyNow} className="btn-gold-sweep" style={{ width: '100%' }}>
                INSTANT BUY NOW
              </button>
            </div>

            {/* Value Guarantees */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid var(--border-gold)', paddingTop: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <ShieldCheck size={22} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.3rem auto' }} />
                <span style={{ fontSize: '0.72rem', display: 'block', fontWeight: '600', color: 'var(--emerald-deep)' }}>BIS Hallmarked</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>100% Certified Gold & Gems</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Truck size={22} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.3rem auto' }} />
                <span style={{ fontSize: '0.72rem', display: 'block', fontWeight: '600', color: 'var(--emerald-deep)' }}>Complimentary Shipping</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Insured Transit</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <RotateCcw size={22} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.3rem auto' }} />
                <span style={{ fontSize: '0.72rem', display: 'block', fontWeight: '600', color: 'var(--emerald-deep)' }}>15-Day Returns</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Hassle-free Exchanges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Accordion */}
        <div style={{ marginTop: '5rem', maxWidth: '850px', margin: '5rem auto 0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ border: '1px solid var(--border-gold)', background: '#ffffff' }}>
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'description' ? '' : 'description')}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--emerald-deep)',
                  cursor: 'pointer'
                }}
              >
                <span>DESCRIPTION & DETAILS</span>
                {activeAccordion === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {activeAccordion === 'description' && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-gold)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  <p style={{ marginBottom: '1rem' }}>{product.description}</p>
                  {product.details && (
                    <ul style={{ listStyle: 'square', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <li><strong>Gemstone:</strong> {product.details.stone}</li>
                      <li><strong>Metal Weight:</strong> {product.details.metalWeight}</li>
                      <li><strong>Certification:</strong> {product.details.hallmark}</li>
                      <li><strong>Warranty:</strong> {product.details.warranty}</li>
                    </ul>
                  )}
                </div>
              )}
            </div>

            <div style={{ border: '1px solid var(--border-gold)', background: '#ffffff' }}>
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'materials' ? '' : 'materials')}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--emerald-deep)',
                  cursor: 'pointer'
                }}
              >
                <span>MATERIALS & GEM CERTIFICATION</span>
                {activeAccordion === 'materials' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {activeAccordion === 'materials' && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-gold)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Every Zambian and Colombian emerald embedded in Aurelia jewellery complies strictly with international ethical gemstone sourcing. Gold used is 100% recycled 18K solid gold (750 purity), hallmarked by government laboratories.
                </div>
              )}
            </div>

            <div style={{ border: '1px solid var(--border-gold)', background: '#ffffff' }}>
              <button
                onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--emerald-deep)',
                  cursor: 'pointer'
                }}
              >
                <span>SHIPPING & RETURNS</span>
                {activeAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {activeAccordion === 'shipping' && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-gold)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Dispatched via tamper-evident security courier within 48 hours. Orders above ₹25,000 qualify for complimentary insured express transit. Enjoy a 15-day complimentary return window.
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
                CURATED ACCOMPANIMENTS
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginTop: '0.4rem', color: 'var(--emerald-deep)' }}>
                Pairs Beautifully With
              </h2>
              <div className="gold-divider" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.8rem' }}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .pdp-img-col { grid-column: span 6 !important; }
          .pdp-info-col { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
}
