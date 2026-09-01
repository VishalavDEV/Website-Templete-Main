import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Sparkles } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '120px 40px 80px 40px',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
      }}
    >
      <div style={{ position: 'relative', width: '180px', height: '180px' }}>
        
        {/* Sparkles */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'rgba(124, 92, 255, 0.2)' }}>
          <Sparkles size={20} />
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', color: 'rgba(124, 92, 255, 0.2)' }}>
          <Sparkles size={24} />
        </div>

        {/* Shopping bag looking around */}
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            y: [0, -6, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
          style={{
            color: '#eae3ff',
            filter: 'drop-shadow(0 0 20px rgba(124,92,255,0.25))',
            display: 'flex',
            margin: 'auto',
            width: 'fit-content',
            height: 'fit-content',
            marginTop: '20px',
          }}
        >
          <ShoppingBag size={100} strokeWidth={1} />
        </motion.div>

        {/* Searching lens */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            color: '#7c5cff',
            filter: 'drop-shadow(0 0 10px rgba(124,92,255,0.4))',
          }}
        >
          <Search size={36} />
        </motion.div>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2.25rem', color: '#1e133e', fontWeight: 800 }}>
          Oops! This Style Went Missing.
        </h2>
        <p style={{ color: '#5c4e8c', fontSize: '1rem', maxWidth: '400px', margin: '0 auto', lineHeight: '1.5' }}>
          We searched high and low in our Lavender universe but couldn't find the page you are looking for.
        </p>
      </div>

      <button
        onClick={() => navigate('/products')}
        className="premium-btn"
        style={{ marginTop: '10px' }}
      >
        Back to Shopping
      </button>
    </div>
  );
};

export default NotFound;
