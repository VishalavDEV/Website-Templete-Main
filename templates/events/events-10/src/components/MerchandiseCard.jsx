import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

export const MerchandiseCard = ({ item }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="sports-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ height: '240px', width: '100%', position: 'relative' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/arena-bg.jpg';
          }}
        />
        <span className="badge-live" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(5,5,5,0.85)' }}>
          {item.category}
        </span>
      </div>

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="font-display" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
          {item.name}
        </h3>

        <div className="font-display" style={{ fontSize: '2rem', color: '#ff4d00', marginBottom: '16px' }}>
          {item.price}
        </div>

        <button
          onClick={handleAddToCart}
          className={added ? 'btn-secondary' : 'btn-primary'}
          style={{ marginTop: 'auto', width: '100%', fontSize: '0.95rem' }}
        >
          {added ? (
            <>
              <Check size={16} color="#00c853" /> ADDED TO BASKET
            </>
          ) : (
            <>
              <ShoppingBag size={16} /> ADD TO CART
            </>
          )}
        </button>
      </div>
    </div>
  );
};
