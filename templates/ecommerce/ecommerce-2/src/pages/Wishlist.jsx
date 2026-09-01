import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Heart, ShoppingBag, Trash2, ChevronRight } from 'lucide-react';

export default function Wishlist() {
  const { wishlist, toggleWishlist, moveWishlistToCart } = useContext(ShopContext);

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Top Banner */}
      <div
        style={{
          background: '#064E3B',
          color: '#FAF7F0',
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '600' }}>
          SAVED CREATIONS
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            letterSpacing: '0.15em',
            marginTop: '0.4rem',
            color: '#FAF7F0'
          }}
        >
          YOUR WISHLIST ({wishlist.length})
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: '#D4DEC9' }}>
          Your curated selection of timeless emerald and gold desires.
        </p>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        {wishlist.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: '#FAF7F0',
              border: '1px solid var(--border-gold)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <Heart size={28} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--emerald-deep)' }}>Your Wishlist is Empty</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Explore our jewellery collections and click the heart icon on any design to save it for later.
            </p>
            <Link to="/shop" className="btn-emerald">
              DISCOVER COLLECTIONS <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
            </Link>
          </div>
        ) : (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
              {wishlist.map((product) => (
                <div key={product.id} style={{ position: 'relative' }}>
                  <ProductCard product={product} />
                  <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => moveWishlistToCart(product)}
                      className="btn-emerald"
                      style={{ flexGrow: 1, padding: '0.6rem 0.8rem', fontSize: '0.72rem' }}
                    >
                      <ShoppingBag size={14} style={{ color: 'var(--gold-primary)' }} /> Move to Bag
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      style={{ padding: '0.6rem 0.8rem', background: '#ffffff', border: '1px solid var(--border-gold)', cursor: 'pointer', color: 'var(--text-muted)' }}
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
