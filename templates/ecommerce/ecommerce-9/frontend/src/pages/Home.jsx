import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fetchProducts } from '../services/api';
import PageTransition from '../components/PageTransition';
import AnimatedTV from '../components/AnimatedTV';
import FloatingProduct from '../components/FloatingProduct';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductCard from '../components/ProductCard';

const sizeOrderedItems = [
  { type: 'watch', path: '/products?category=smart-watches', label: 'Watch' },
  { type: 'smartphone', path: '/products?category=mobiles', label: 'Phone' },
  { type: 'speaker', path: '/products?category=audio', label: 'Speaker' },
  { type: 'headphones', path: '/products?category=audio', label: 'Headphones' },
  { type: 'camera', path: '/products?category=cameras', label: 'Camera' },
  { type: 'controller', path: '/products?category=gaming', label: 'Gaming' },
  { type: 'laptop', path: '/products?category=laptops', label: 'Laptop' }
];

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // For "Technology in Motion" slider section
  const [motionIndex, setMotionIndex] = useState(0);
  const motionItems = [
    { name: "OLED-X Cinematic TV", category: "tv", desc: "65 inches of self-lit pixel perfection with advanced neural processor cores.", id: "tv-oled-x", brand: "BLUECORE" },
    { name: "CyberPhone Foldable", category: "mobiles", desc: "Dual screen holographic system with micro liquid crystal hinge mechanics.", id: "phone-cyber-fold", brand: "BLUECORE" },
    { name: "CoreBook Pro 16", category: "laptops", desc: "RTX 4090 Mobile powered dev rig wrapped in aluminum-titanium architecture.", id: "lap-corebook-pro", brand: "BLUECORE" },
    { name: "SoundSphere ANC", category: "audio", desc: "Neuro-feedback spatial soundstage mapping high fidelity audio.", id: "audio-corephone", brand: "BLUECORE" }
  ];

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await fetchProducts(true); // get featured = true
        setFeaturedProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  // Set interval to rotate "Technology in Motion" product showcase every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMotionIndex((prev) => (prev + 1) % motionItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '50px' }}>
        
        {/* CIRCUIT BACKGROUND TRAILS */}
        <div className="circuit-bg" />

        {/* ================= HERO SECTION ================= */}
        <section style={{
          position: 'relative',
          padding: '60px 5% 100px 5%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          zIndex: 10
        }}>
          {/* Hero text branding */}
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '20px',
                color: '#00f0ff',
                fontSize: '11px',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.15em',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={12} /> SHOWROOM NOW ONLINE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: '900',
                lineHeight: '1.1',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.05em'
              }}
            >
              POWER YOUR <span className="glow-text-cyan">FUTURE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#cbd5e1',
                marginTop: '15px',
                lineHeight: '1.6',
                fontFamily: 'var(--font-body)'
              }}
            >
              Discover intelligent electronics engineered for the next generation of computing and home automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                marginTop: '25px',
                flexWrap: 'wrap'
              }}
            >
              <Link to="/products" className="cyber-button solid">
                EXPLORE PRODUCTS <ArrowRight size={14} />
              </Link>
              <Link to="/offers" className="cyber-button">
                VIEW BLUE DEALS
              </Link>
            </motion.div>
          </div>

          {/* INTERACTIVE SIZE-ORDERED PRODUCT DOCK */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            margin: '40px auto 30px auto',
            padding: '12px 25px',
            background: 'rgba(3, 7, 18, 0.45)',
            border: '1.5px solid rgba(0, 240, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 240, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            width: 'fit-content',
            zIndex: 100,
            flexWrap: 'wrap',
            pointerEvents: 'auto'
          }}>
            {sizeOrderedItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path} 
                title={`Access ${item.label} Nodes`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  padding: '10px 15px',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)';
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.06)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 240, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FloatingProduct 
                  type={item.type} 
                  style={{ 
                    position: 'relative', 
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }} 
                />
                <span style={{ 
                  fontSize: '10px', 
                  color: '#94a3b8', 
                  fontFamily: 'var(--font-tech)', 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* THE INTERACTIVE SMART TV */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <AnimatedTV />
          </div>
        </section>

        {/* ================= CATEGORIES SECTION ================= */}
        <section style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <CategoryShowcase />
        </section>

        {/* ================= TECHNOLOGY IN MOTION (SHOWCASE) ================= */}
        <section style={{
          padding: '100px 5%',
          background: 'radial-gradient(circle at 10% 50%, rgba(0, 102, 255, 0.05) 0%, transparent 80%)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="glow-text-cyan" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '50px' }}>
              TECHNOLOGY IN MOTION
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Rotating Showcase Screen */}
              <div style={{
                flex: '1 1 450px',
                height: '350px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(0, 240, 255, 0.25)',
                  animation: 'spin 20s infinite linear',
                  zIndex: 0
                }} />
                
                <div style={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 66, 255, 0.2)',
                  animation: 'spin 10s infinite linear reverse',
                  zIndex: 0
                }} />

                <div style={{ width: '100%', height: '100%', zIndex: 1 }}>
                  {motionItems.map((item, index) => (
                    index === motionIndex && (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <ProductCard product={{ id: item.id, category: item.category, brand: item.brand, name: item.name, price: 0, rating: 5, reviews: 0 }} />
                      </motion.div>
                    )
                  ))}
                </div>
              </div>

              {/* Showcase Info panel */}
              <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {motionItems.map((item, index) => {
                  const isActive = index === motionIndex;
                  return (
                    <motion.div
                      key={item.id}
                      onClick={() => setMotionIndex(index)}
                      style={{
                        padding: '20px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        border: isActive ? '1.5px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.1)',
                        background: isActive ? 'rgba(11, 19, 43, 0.5)' : 'transparent',
                        boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.15)' : 'none',
                        transition: 'all 0.4s'
                      }}
                    >
                      <h3 style={{
                        fontSize: '16px',
                        color: isActive ? '#00f0ff' : '#fff',
                        fontFamily: 'var(--font-tech)',
                        textShadow: isActive ? '0 0 8px rgba(0, 240, 255, 0.3)' : 'none'
                      }}>
                        {item.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED PRODUCTS SECTION ================= */}
        <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 className="glow-text-cyan" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '50px' }}>
            FEATURED INNOVATIONS
          </h2>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '50px 0' }}>
              <div style={{
                width: '40px',
                height: '40px',
                margin: '0 auto',
                border: '2px solid rgba(0, 240, 255, 0.2)',
                borderTopColor: '#00f0ff',
                borderRadius: '50%',
                animation: 'spin 1s infinite linear'
              }} />
            </div>
          ) : (
            <div className="showroom-grid">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
