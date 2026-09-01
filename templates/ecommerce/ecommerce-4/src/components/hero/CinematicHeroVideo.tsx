import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const CinematicHeroVideo: React.FC = () => {
  const { navigate, setQuickViewProduct } = useShop();

  const categoryLabels = ['TECH', 'STYLE', 'HOME', 'BEAUTY', 'LIFE'];
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  // Mouse Parallax Coordinates State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Floating hover preview product
  const [hoveredProduct, setHoveredProduct] = useState<typeof PRODUCTS[0] | null>(null);

  useEffect(() => {
    const labelTimer = setInterval(() => {
      setCurrentLabelIndex((prev) => (prev + 1) % categoryLabels.length);
    }, 2800);

    return () => clearInterval(labelTimer);
  }, [categoryLabels.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePos({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroProducts = [
    { product: PRODUCTS[0], tag: 'FLAGSHIP 5G', depth: 2, image: PRODUCTS[0].images[0] },
    { product: PRODUCTS[1], tag: 'PURE AUDIO ANC', depth: 5, image: PRODUCTS[1].images[0] },
    { product: PRODUCTS[4], tag: 'ITALIAN CHELSEA', depth: 8, image: PRODUCTS[4].images[0] },
    { product: PRODUCTS[10], tag: 'COPENHAGEN CHAIR', depth: 6, image: PRODUCTS[10].images[0] }
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        backgroundColor: '#111827',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* 01 & 02: Cinematic Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.38,
          transform: `scale(1.05) translate(${mousePos.x * 3}px, ${mousePos.y * 3}px)`,
          transition: 'transform 300ms ease-out'
        }}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-abstract-glowing-lines-4813/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* 03: Gradient Overlay & Subtle Film-Grain Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.75) 50%, rgba(17, 24, 39, 0.4) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Text Box */}
          <div style={{ maxWidth: '580px' }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                color: 'var(--accent-amber)',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <Sparkles size={14} /> THE FUTURE OF SHOPPING
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-xl"
              style={{ color: '#FFFFFF', lineHeight: 1.05, marginBottom: '1.25rem' }}
            >
              EVERYTHING. <br />
              <span style={{ color: 'var(--accent-cobalt-light)' }}>CURATED FOR YOU.</span>
            </motion.h1>

            {/* Category Ticker Transition */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', height: '32px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9CA3AF' }}>DISCOVER:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLabelIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-amber)',
                    backgroundColor: 'rgba(217, 119, 6, 0.15)',
                    padding: '0.2rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(217, 119, 6, 0.3)'
                  }}
                >
                  {categoryLabels[currentLabelIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-lead"
              style={{ color: '#9CA3AF', marginBottom: '2.5rem', maxWidth: '500px' }}
            >
              Discover technology, style, home, beauty and everything in between — intelligently curated for the way you live.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
            >
              <MagneticButton variant="accent" onClick={() => navigate('/shop')} style={{ padding: '1rem 2.25rem' }}>
                SHOP NOW <ArrowRight size={18} />
              </MagneticButton>

              <MagneticButton variant="outline" onClick={() => navigate('/deals')} style={{ padding: '1rem 2rem' }}>
                EXPLORE DEALS
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Floating Product Multi-Depth Parallax Collage */}
          <div
            style={{
              position: 'relative',
              minHeight: '450px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem'
            }}
          >
            {heroProducts.map((item, idx) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-float)',
                  cursor: 'pointer',
                  transform: `translate(${mousePos.x * item.depth}px, ${mousePos.y * item.depth}px)`,
                  transition: 'transform 300ms ease-out',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={() => setHoveredProduct(item.product)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setQuickViewProduct(item.product)}
              >
                <div style={{ aspectRatio: '1/1', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(17, 24, 39, 0.85)', backdropFilter: 'blur(4px)', color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                    {item.tag}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Hover Floating Product Information Card Popup */}
            <AnimatePresence>
              {hoveredProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.25rem',
                    boxShadow: 'var(--shadow-float)',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    minWidth: '260px'
                  }}
                  onClick={() => setQuickViewProduct(hoveredProduct)}
                >
                  <img
                    src={hoveredProduct.images[0]}
                    alt=""
                    style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-cobalt)' }}>{hoveredProduct.brand}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2 }}>{hoveredProduct.name}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, marginTop: '2px' }}>₹{hoveredProduct.price.toLocaleString('en-IN')}</div>
                  </div>
                  <ArrowRight size={16} color="var(--accent-cobalt)" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
