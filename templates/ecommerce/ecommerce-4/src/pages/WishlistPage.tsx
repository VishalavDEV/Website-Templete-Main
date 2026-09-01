import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigate } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
            <Heart size={16} fill="var(--accent-blue)" /> SAVED ITEMS
          </div>
          <h1 className="heading-xl">SAVED FOR LATER</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
            You have {savedProducts.length} items saved in your ORVANA list.
          </p>
        </div>

        {savedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <Heart size={48} color="var(--text-muted)" style={{ margin: '0 auto 1.25rem', opacity: 0.3 }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>YOUR SAVED LIST IS EMPTY</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
              Save items you love by clicking the heart icon while browsing products across technology, style, and home.
            </p>
            <button onClick={() => navigate('/shop')} className="btn btn-accent">
              DISCOVER PRODUCTS <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {savedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
