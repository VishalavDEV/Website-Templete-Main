import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Percent, Timer, Tag } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';
import ProductCard from '../components/ProductCard';

const Sale = () => {
  const { products } = useContext(EcomContext);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Dynamic Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const saleProducts = products.filter((p) => p.discount > 0);

  // Format helper
  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* Cinematic Sale Hero Header */}
      <div
        style={{
          position: 'relative',
          padding: '60px 40px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #130e26 0%, #3a2b72 100%)',
          color: '#fff',
          textAlign: 'center',
          overflow: 'hidden',
          marginBottom: '50px',
          boxShadow: '0 20px 45px rgba(124, 92, 255, 0.15)',
        }}
      >
        {/* Floating Price tags backgrounds */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="animated-float"
            style={{
              position: 'absolute',
              color: 'rgba(124, 92, 255, 0.12)',
              top: `${10 + i * 20}%`,
              left: `${10 + i * 22}%`,
              transform: `rotate(${i * 15}deg)`,
              pointerEvents: 'none',
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {i % 2 === 0 ? <Percent size={70} /> : <Tag size={80} />}
          </motion.div>
        ))}

        <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffd700', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <Sparkles size={16} /> Flash Sale Underway
          </div>

          <h1
            style={{
              fontFamily: 'Outfit',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '0.05em',
              lineHeight: '1',
              textShadow: '0 0 20px rgba(124,92,255,0.4)',
            }}
          >
            FASHION SALE
          </h1>
          <p style={{ color: '#eae3ff', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Unleash premium fashion trends with up to 50% discount. Limited inventory available.
          </p>

          {/* Countdown timer */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px', alignItems: 'center' }}>
            <Timer size={24} style={{ color: '#ffcbc1' }} />
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { val: timeLeft.hours, label: 'HRS' },
                { val: timeLeft.minutes, label: 'MIN' },
                { val: timeLeft.seconds, label: 'SEC' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '16px',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontFamily: 'Outfit',
                      fontWeight: 800,
                      color: '#fff',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={item.val}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'inline-block' }}
                      >
                        {padZero(item.val)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#ffcbc1', fontWeight: 'bold', alignSelf: 'center' }}>
                    {item.label}
                  </span>
                  {idx < 2 && <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.4)', alignSelf: 'center' }}>:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sale products listings */}
      <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: '#1e133e', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Tag size={20} style={{ color: '#7c5cff' }} /> Exclusive Sale Items
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '30px',
        }}
      >
        {saleProducts.map((prod, idx) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onQuickView={(p) => setQuickViewProduct(p)}
            delay={idx * 0.05}
          />
        ))}
      </div>
    </div>
  );
};

export default Sale;
