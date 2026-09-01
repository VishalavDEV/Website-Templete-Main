import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToyCart } from '../context/ToyCartContext';
import { ProductCard } from '../components/ProductCard';
import { Compass, Sparkles } from 'lucide-react';
import './Wishlist.css';

export const Wishlist: React.FC = () => {
  const { wishlist } = useToyCart();
  const navigate = useNavigate();

  return (
    <div className="wishlist-page app-container">
      <div className="stars-bg" />

      <div className="wishlist-header">
        <h1 className="wishlist-title">MY TOY COLLECTION</h1>
        <p className="wishlist-subtitle">Your assembled playmates are kept here, alive and well.</p>
      </div>

      <main className="wishlist-main">
        {wishlist.length === 0 ? (
          /* Empty state: Teddy Bear looking for toys */
          <div className="wishlist-empty glass-panel">
            <span className="bear-avatar">🧸🔍</span>
            <h3>Your collection is empty!</h3>
            <p>Mr. Teddy searched all over but couldn't find any toys. Go add some magic to your box.</p>
            <button className="btn btn-primary shop-redir-btn" onClick={() => navigate('/shop')} data-cursor="drive">
              <Compass size={18} /> EXPLORE THE SHOP
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {wishlist.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={(p) => navigate(`/product/${p.id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
