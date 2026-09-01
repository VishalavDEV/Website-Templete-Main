import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { ArrowRight, Sparkles, Truck, Box, RotateCcw } from 'lucide-react';
import axios from 'axios';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../context/ToyCartContext';
import './Home.css';

const LOCAL_FEATURED_BACKUP: Product[] = [
  {
    id: "p1", name: "Hot Wheels Die-Cast Supercar", brand: "Hot Wheels", category: "cars-vehicles",
    price: 1499.00, discount: 10, rating: 4.8, description: "A premium die-cast racer featuring active wheel spin mechanics.",
    image: "/hotwheels_car.jpg", animationType: "car", stock: 15, variants: ["Electric Blue", "Racer Red"]
  },
  {
    id: "p3", name: "LEGO Creator Spaceship Explorer", brand: "LEGO", category: "building-toys",
    price: 2999.00, discount: 0, rating: 4.9, description: "Assemble your own galactic cruiser with LEGO creator bricks.",
    image: "/lego_spaceship.jpg", animationType: "lego", stock: 20, variants: ["Original Space Kit"]
  },
  {
    id: "p5", name: "Barbie Ballerina Dreamer", brand: "Barbie", category: "dolls",
    price: 1999.00, discount: 20, rating: 4.6, description: "The magic ballerina doll with high-speed pirouettes.",
    image: "/barbie_doll.jpg", animationType: "doll", stock: 25, variants: ["Pink Tutu"]
  }
];

export const Home: React.FC = () => {
  // Sequence states: 'car-drive' | 'teddy-wave' | 'doll-dance' | 'plane-fly' | 'package-drop' | 'robot-walk' | 'train-chug'
  const [seqPhase, setSeqPhase] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/products');
        if (res.data && res.data.length > 0) {
          setFeaturedProducts(res.data.slice(0, 3));
        } else {
          setFeaturedProducts(LOCAL_FEATURED_BACKUP);
        }
      } catch (err) {
        console.warn('API error on home page, loading local backup.', err);
        setFeaturedProducts(LOCAL_FEATURED_BACKUP);
      }
    };
    fetchFeatured();
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setSeqPhase(1), 1000),  // 1: Car drives in
      setTimeout(() => setSeqPhase(2), 3000),  // 2: Teddy bear waves
      setTimeout(() => setSeqPhase(3), 5000),  // 3: Doll dances
      setTimeout(() => setSeqPhase(4), 7000),  // 4: Plane flies overhead
      setTimeout(() => setSeqPhase(5), 8500),  // 5: Package drops
      setTimeout(() => setSeqPhase(6), 10000), // 6: Robot walks by
      setTimeout(() => setSeqPhase(7), 12000), // 7: Train chugs across
      setTimeout(() => setSeqPhase(8), 15000), // 8: Loop/rest
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleReplay = () => {
    setSeqPhase(0);
    setTimeout(() => setSeqPhase(1), 1000);
    setTimeout(() => setSeqPhase(2), 3000);
    setTimeout(() => setSeqPhase(3), 5000);
    setTimeout(() => setSeqPhase(4), 7000);
    setTimeout(() => setSeqPhase(5), 8500);
    setTimeout(() => setSeqPhase(6), 10000);
    setTimeout(() => setSeqPhase(7), 12000);
    setTimeout(() => setSeqPhase(8), 15000);
  };

  return (
    <div className="home-page app-container">
      {/* Background stars floating */}
      <div className="stars-bg" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text-container">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              WELCOME TO THE <br />
              <span className="text-glow-primary">WORLD OF TOYS</span>
            </h1>
            <p className="hero-subtitle">Where every toy comes alive.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-ctas"
          >
            <Link to="/shop" className="btn btn-primary" data-cursor="drive">
              EXPLORE TOYS <ArrowRight size={18} />
            </Link>
            <button onClick={handleReplay} className="btn btn-outline" data-cursor="play">
              PLAY SHOWCASE <RotateCcw size={18} />
            </button>
          </motion.div>

          {/* Banner notification for sequence phases */}
          <div className="sequence-banner">
            <Sparkles size={16} className="sparkle-icon" />
            <span>
              {seqPhase === 0 && 'Constructing Toy City...'}
              {seqPhase === 1 && 'Look! A racer supercar is driving onto the road!'}
              {seqPhase === 2 && 'Hi there! Mr. Teddy bear is waving hello!'}
              {seqPhase === 3 && 'The ballerina doll is dancing under the spotlight!'}
              {seqPhase === 4 && 'Jet stream airplane flying in from the sky!'}
              {seqPhase === 5 && 'Incoming delivery! Package dropping from the plane!'}
              {seqPhase === 6 && 'Beep-boop! Cyberbot robot is scanning the city!'}
              {seqPhase === 7 && 'Choo-choo! The railway train bridge is active!'}
              {seqPhase >= 8 && 'The toy world is fully alive! Tap Replay to watch again.'}
            </span>
          </div>
        </div>

        {/* Animated Toy City Environment Canvas */}
        <div className="toy-city-canvas glass-panel">
          {/* Static elements: Sky, clouds, sun */}
          <div className="clouds-bg">
            <div className="cloud cloud-1">☁️</div>
            <div className="cloud cloud-2">☁️</div>
            <div className="cloud cloud-3">☁️</div>
          </div>
          <div className="sun-glow" />

          {/* Toy Store Building */}
          <div className="city-building toy-store">
            <div className="building-roof">🎪</div>
            <div className="building-sign">TOY SHOP</div>
            <div className="building-windows">
              <span className="window-glow">💡</span>
              <span className="window-glow">💡</span>
            </div>
          </div>

          {/* Landscape bridges and roads */}
          <div className="city-railway-bridge">
            <div className="bridge-arch" />
            <div className="rail-line" />
          </div>
          <div className="city-road" />

          {/* Interactive active elements based on sequence phase */}
          {/* Phase 1: Car */}
          {seqPhase >= 1 && (
            <motion.div
              initial={{ x: -180, y: 200, scale: 0.8 }}
              animate={seqPhase === 1 ? { x: 30, y: 155, scale: 0.9 } : { x: 30, y: 155, scale: 0.9 }}
              transition={{ duration: 1.5, type: 'spring' }}
              className="canvas-toy car-slot"
            >
              <ToyRenderer type="car" state={seqPhase === 1 ? 'hover' : 'idle'} />
            </motion.div>
          )}

          {/* Phase 2: Teddy */}
          {seqPhase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className="canvas-toy teddy-slot"
            >
              <ToyRenderer type="teddy" state={seqPhase === 2 ? 'hover' : 'idle'} />
            </motion.div>
          )}

          {/* Phase 3: Doll */}
          {seqPhase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 0.9 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="canvas-toy doll-slot"
            >
              <ToyRenderer type="doll" state={seqPhase === 3 ? 'click' : 'idle'} />
            </motion.div>
          )}

          {/* Phase 4: Airplane */}
          {seqPhase >= 4 && (
            <motion.div
              initial={{ x: 350, y: -80, scale: 0.7 }}
              animate={{ x: -280, y: -20, scale: 0.8 }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
              className="canvas-toy airplane-slot"
            >
              <ToyRenderer type="airplane" state="idle" />
            </motion.div>
          )}

          {/* Phase 5: Package Drop */}
          {seqPhase >= 5 && (
            <AnimatePresence>
              {seqPhase < 7 && (
                <motion.div
                  initial={{ x: -80, y: -20, scale: 0.8, opacity: 1 }}
                  animate={{ y: 140, opacity: [1, 1, 1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeIn' }}
                  className="canvas-package"
                >
                  📦
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Phase 6: Robot */}
          {seqPhase >= 6 && (
            <motion.div
              initial={{ x: -160, y: 180, scale: 0.7 }}
              animate={{ x: 180, y: 180, scale: 0.7 }}
              transition={{ duration: 3.5, ease: 'linear' }}
              className="canvas-toy robot-slot"
            >
              <ToyRenderer type="robot" state="click" />
            </motion.div>
          )}

          {/* Phase 7: Train */}
          {seqPhase >= 7 && (
            <motion.div
              initial={{ x: -260, y: 46, scale: 0.65 }}
              animate={{ x: 260, y: 46, scale: 0.65 }}
              transition={{ duration: 4.0, ease: 'linear' }}
              className="canvas-toy train-slot"
            >
              <ToyRenderer type="train" state="click" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Showcase Grid */}
      <section className="features-section">
        <h2 className="section-title">THE BRANDS WE LOVE</h2>
        <div className="brands-marquee">
          <div className="brands-scroll">
            <span>LEGO</span>
            <span>HOT WHEELS</span>
            <span>BARBIE</span>
            <span>HASBRO</span>
            <span>NERF</span>
            <span>TRANSFORMERS</span>
            <span>MATTEL</span>
            <span>FISHER-PRICE</span>
            <span>PLAY-DOH</span>
            <span>DISNEY</span>
          </div>
        </div>

        {/* Featured Products Showcase Section */}
        <div className="home-featured-products-container">
          <h3 className="featured-section-subtitle">FEATURED SQUAD</h3>
          <div className="featured-products-grid">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={(p) => navigate('/product/' + p.id)} 
              />
            ))}
          </div>
          <div className="view-all-cta-row">
            <Link to="/shop" className="btn btn-secondary" data-cursor="play">
              VIEW ALL TOYS <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-panel" data-cursor="play">
            <div className="feature-icon">✨</div>
            <h3>Interactive Showcase</h3>
            <p>Every toy contains a unique animation state. Hover over product cards to make the toy engine roar or doll spin!</p>
          </div>

          <div className="feature-card glass-panel" data-cursor="add-cart">
            <div className="feature-icon">📦</div>
            <h3>Giant Toy Box</h3>
            <p>Throw toys into your cart and watch them physically glide, roll, or fly into the large animated Toy Box container.</p>
          </div>

          <div className="feature-card glass-panel" data-cursor="drive">
            <div className="feature-icon">🚚</div>
            <h3>Track Deliveries</h3>
            <p>Watch a delivery motorcycle navigate across a dynamic toy tracking route, shifting live as progress updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
