import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/shop/ProductCard';

export const CollectionsPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { products } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If specific collection slug is selected
  if (slug) {
    const collection = COLLECTIONS.find(c => c.slug === slug);
    if (!collection) {
      return (
        <main style={{ paddingTop: '120px', textAlign: 'center' }}>
          <h2>Collection not found.</h2>
          <Link to="/collections" className="btn-aurel-primary" style={{ marginTop: '20px' }}>
            VIEW ALL COLLECTIONS
          </Link>
        </main>
      );
    }

    const collectionProducts = products.filter(p => collection.productSlugs.includes(p.slug));

    return (
      <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
        {/* Collection Hero */}
        <section
          style={{
            position: 'relative',
            padding: '120px 0',
            backgroundImage: `url(${collection.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#FFFFFF',
            marginBottom: '60px',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(23, 22, 20, 0.45)' }} />

          <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#EAE5DB', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              {collection.tag}
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 76px)', textTransform: 'uppercase', marginBottom: '16px', color: '#FFFFFF' }}>
              {collection.title}
            </h1>
            <p style={{ fontSize: '16px', maxWidth: '580px', lineHeight: '1.7', opacity: 0.9 }}>
              {collection.description}
            </p>
          </div>
        </section>

        <div className="container-custom" style={{ paddingBottom: '100px' }}>
          <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', textTransform: 'uppercase' }}>
              CURATED PIECES ({collectionProducts.length})
            </h2>
          </div>

          <div className="product-grid">
            {collectionProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // All Collections List Page
  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', paddingBottom: '100px' }}>
      <div className="container-custom" style={{ marginBottom: '60px' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          AUREL CURATIONS
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 64px)', textTransform: 'uppercase' }}>
          SEASONAL COLLECTIONS
        </h1>
      </div>

      <div className="container-custom">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {COLLECTIONS.map((col, index) => (
            <div
              key={col.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              {/* Image */}
              <div
                style={{
                  gridColumn: 'span 12',
                  order: index % 2 === 0 ? 1 : 2,
                }}
                className="col-img-box"
              >
                <div style={{ width: '100%', aspectRatio: '16 / 9', maxHeight: '480px', overflow: 'hidden', borderRadius: '2px' }}>
                  <img
                    src={col.heroImage}
                    alt={col.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                style={{
                  gridColumn: 'span 12',
                  order: index % 2 === 0 ? 2 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                className="col-text-box"
              >
                <span style={{ fontSize: '11px', letterSpacing: '0.18em', fontWeight: '600', color: 'var(--accent-bronze)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {col.tag}
                </span>

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', textTransform: 'uppercase', marginBottom: '16px' }}>
                  {col.title}
                </h2>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '500px' }}>
                  {col.description}
                </p>

                <div>
                  <Link to={`/collections/${col.slug}`} className="btn-aurel-primary">
                    SHOP COLLECTION <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .col-img-box {
            grid-column: span 7 !important;
          }
          .col-text-box {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </main>
  );
};
