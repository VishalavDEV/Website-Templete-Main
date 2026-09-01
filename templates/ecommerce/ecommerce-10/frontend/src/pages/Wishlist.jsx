import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useContext(EcomContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
            Your Wishlist
          </h2>
          <p style={{ color: '#5c4e8c', fontSize: '0.9rem', marginTop: '4px' }}>
            Saved items you love ({wishlist.length})
          </p>
        </div>

        <button
          onClick={() => navigate('/products')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: '1.5px solid rgba(124, 92, 255, 0.15)',
            borderRadius: '20px',
            padding: '8px 16px',
            fontSize: '0.85rem',
            color: '#7c5cff',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(124,92,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <ArrowLeft size={16} /> Continue Shopping
        </button>
      </div>

      {/* Grid or Empty state */}
      {wishlist.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '16px' }}>
          <div style={{ color: '#eae3ff', filter: 'drop-shadow(0 0 10px rgba(124,92,255,0.1))' }}>
            <Heart size={80} strokeWidth={1} />
          </div>
          <h3 style={{ color: '#5c4e8c', fontSize: '1.25rem' }}>Your wishlist is empty</h3>
          <p style={{ color: '#8a7db3', fontSize: '0.9rem' }}>Tap the heart on any product to save it here.</p>
          <button
            onClick={() => navigate('/products')}
            className="premium-btn"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          {wishlist.map((product, idx) => (
            <motion.div key={product.id} layout transition={{ duration: 0.3 }}>
              <ProductCard product={product} delay={idx * 0.05} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Wishlist;
