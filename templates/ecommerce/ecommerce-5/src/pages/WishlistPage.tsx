import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, formatINR } = useShop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', minHeight: '80vh', paddingBottom: '100px' }}>
      <div className="container-custom">
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            PERSONAL SELECTION
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', textTransform: 'uppercase' }}>
            SAVED PIECES ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Your wishlist is currently empty.
            </p>
            <Link to="/shop" className="btn-aurel-primary">
              EXPLORE COLLECTION
            </Link>
          </div>
        ) : (
          <div className="product-grid">
            {wishlist.map(({ product }) => (
              <div key={product.id} className="product-card" style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border-light)' }}>
                <div className="product-card-image-wrapper">
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.images.primary} alt={product.name} className="product-card-image primary" />
                  </Link>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="wishlist-icon-btn active"
                    title="Remove from saved"
                  >
                    <Trash2 size={16} color="#C2410C" />
                  </button>
                </div>

                <div style={{ paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link to={`/product/${product.slug}`} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {product.name}
                  </Link>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>
                    {formatINR(product.price)}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-aurel-primary"
                    style={{ marginTop: '8px', padding: '10px', fontSize: '11px' }}
                  >
                    <ShoppingBag size={14} /> ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
