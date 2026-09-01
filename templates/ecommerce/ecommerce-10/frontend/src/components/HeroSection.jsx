import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Watch, Glasses, Footprints, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 40px 60px 40px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #eae3ff 0%, #faf8ff 100%)',
      }}
    >
      {/* Background Floating Dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="animated-float"
          style={{
            position: 'absolute',
            width: `${15 + i * 10}px`,
            height: `${15 + i * 10}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(124, 92, 255, 0.04)',
            boxShadow: '0 0 30px rgba(124, 92, 255, 0.1)',
            top: `${10 + i * 12}%`,
            left: `${5 + i * 12}%`,
            animationDelay: `${i * 0.4}s`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Hero Left Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(124, 92, 255, 0.08)',
              border: '1px solid rgba(124, 92, 255, 0.15)',
              padding: '6px 14px',
              borderRadius: '20px',
              width: 'fit-content',
            }}
          >
            <Sparkles size={14} style={{ color: '#7c5cff' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#7c5cff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Winter / Autumn Collection '26
            </span>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Outfit',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                color: '#1e133e',
              }}
            >
              STYLE YOUR <br />
              <span style={{ background: 'linear-gradient(135deg, #7c5cff 0%, #c49eff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                WORLD
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#5c4e8c',
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Experience the Lavender Fashion Universe. Futuristic designs, premium sustainable fabrics, and fluid style tailored for everyone.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}
          >
            <button
              onClick={() => navigate('/products')}
              className="premium-btn"
            >
              Shop Now <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/products?featured=true')}
              className="premium-btn-outline"
            >
              Explore Collection
            </button>
          </motion.div>
        </div>

        {/* Hero Right Cinematic Layout */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          
          {/* Main Central Model Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            style={{
              position: 'relative',
              width: '320px',
              height: '420px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(124, 92, 255, 0.15)',
              border: '4px solid #fff',
              zIndex: 3,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
              alt="Model Hero"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Glass Card Overlay Info */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 18px',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', color: '#7c5cff', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Aura Coat
                </span>
                <h4 style={{ fontSize: '1rem', color: '#1e133e', fontWeight: 600 }}>₹4,999</h4>
              </div>
              <button
                onClick={() => navigate('/products/M001')}
                style={{
                  background: '#7c5cff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Floating Product Accessories */}
          
          {/* 1. Footwear */}
          <motion.div
            className="animated-float"
            style={{
              position: 'absolute',
              top: '10%',
              left: '-20px',
              zIndex: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(124, 92, 255, 0.1)',
              borderRadius: '20px',
              padding: '12px',
              boxShadow: '0 10px 25px rgba(124, 92, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/footwear')}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1edff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c5cff' }}>
              <Footprints size={20} />
            </div>
            <div style={{ paddingRight: '10px' }}>
              <h5 style={{ fontSize: '0.85rem', color: '#1e133e' }}>Footwear</h5>
              <span style={{ fontSize: '0.7rem', color: '#8a7db3' }}>New Haze Sneaker</span>
            </div>
          </motion.div>

          {/* 2. Bags */}
          <motion.div
            className="animated-float-opposite"
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '-40px',
              zIndex: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(124, 92, 255, 0.1)',
              borderRadius: '20px',
              padding: '12px',
              boxShadow: '0 10px 25px rgba(124, 92, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/products?category=Bags')}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1edff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c5cff' }}>
              <ShoppingBag size={20} />
            </div>
            <div style={{ paddingRight: '10px' }}>
              <h5 style={{ fontSize: '0.85rem', color: '#1e133e' }}>Bags Collection</h5>
              <span style={{ fontSize: '0.7rem', color: '#8a7db3' }}>15% Discount</span>
            </div>
          </motion.div>

          {/* 3. Watches */}
          <motion.div
            className="animated-float"
            style={{
              position: 'absolute',
              top: '50%',
              left: '-50px',
              zIndex: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(124, 92, 255, 0.1)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              boxShadow: '0 8px 20px rgba(124, 92, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7c5cff',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/products?category=Watches')}
          >
            <Watch size={24} />
          </motion.div>

          {/* 4. Sunglasses */}
          <motion.div
            className="animated-float-opposite"
            style={{
              position: 'absolute',
              top: '5%',
              right: '-10px',
              zIndex: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(124, 92, 255, 0.1)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              boxShadow: '0 8px 20px rgba(124, 92, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7c5cff',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/accessories')}
          >
            <Glasses size={24} />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
