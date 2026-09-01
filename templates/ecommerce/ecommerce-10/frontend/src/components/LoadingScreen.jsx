import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Shirt, Watch, Sparkles, Glasses, Footprints } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('initial'); // initial, open, products, logo, complete

  useEffect(() => {
    // Stage triggers
    const timers = [
      setTimeout(() => setStage('open'), 800),
      setTimeout(() => setStage('products'), 1400),
      setTimeout(() => setStage('logo'), 2200),
    ];

    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStage('complete');
            setTimeout(onComplete, 500); // Trigger page reveal
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  // Product floating positions around bag
  const flyingItems = [
    { icon: <Shirt size={28} />, x: -120, y: -100, delay: 0.1, color: '#ffb5e8' },
    { icon: <Watch size={28} />, x: 120, y: -80, delay: 0.3, color: '#b5fffc' },
    { icon: <Glasses size={28} />, x: -80, y: -180, delay: 0.5, color: '#aff8db' },
    { icon: <Footprints size={28} />, x: 80, y: -160, delay: 0.7, color: '#ffcbc1' },
    { icon: <Sparkles size={28} />, x: 0, y: -220, delay: 0.9, color: '#ffebb3' },
  ];

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#130e26', // Premium dark purple/navy background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        overflow: 'hidden',
      }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Particle Stars */}
        <AnimatePresence>
          {stage === 'products' && (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    x: Math.cos((i * 30 * Math.PI) / 180) * 160,
                    y: Math.sin((i * 30 * Math.PI) / 180) * 160,
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1 }}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#eae3ff',
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Central Shopping Bag */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={
            stage === 'initial'
              ? { scale: 1, rotate: 0 }
              : stage === 'open'
              ? { scale: 1.1, rotate: [0, -5, 5, 0] }
              : { scale: 0.9 }
          }
          transition={{ duration: 0.6, type: 'spring' }}
          style={{
            color: '#eae3ff',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 0 20px rgba(124, 92, 255, 0.4))',
          }}
        >
          <ShoppingBag size={80} strokeWidth={1.5} />
        </motion.div>

        {/* Flying Fashion items */}
        {stage !== 'initial' && stage !== 'open' && (
          <div style={{ position: 'absolute', zIndex: 5 }}>
            {flyingItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 0, y: 0, scale: 0.2, opacity: 0, rotate: 0 }}
                animate={{
                  x: item.x,
                  y: item.y,
                  scale: 1,
                  opacity: 1,
                  rotate: [0, 360],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 10,
                  delay: item.delay,
                }}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: `1.5px solid ${item.color}`,
                  color: item.color,
                  boxShadow: `0 0 15px ${item.color}50`,
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Brand Logo & Progress */}
      <div style={{ height: '140px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence>
          {stage === 'logo' && (
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#eae3ff',
                  textShadow: '0 0 20px rgba(124, 92, 255, 0.6)',
                }}
              >
                LAVENDER
              </h2>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.3em',
                  color: '#8a7db3',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                Fashion Universe
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glowing Progress Circle */}
        <div style={{ position: 'relative', marginTop: '30px', width: '50px', height: '50px' }}>
          <svg width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="3"
              fill="transparent"
            />
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              stroke="#7c5cff"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="126"
              animate={{ strokeDashoffset: 126 - (126 * progress) / 100 }}
              transition={{ ease: 'linear' }}
              style={{
                filter: 'drop-shadow(0 0 5px #7c5cff)',
              }}
            />
          </svg>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '0.7rem',
              color: '#8a7db3',
              fontWeight: 500,
            }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
