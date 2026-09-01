import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Insights from './pages/Insights';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll To Top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Sub-component containing cursor follower, progress bar, layouts and routes
function AppContent() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  // Scroll Progress calculations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Show back to top button on scroll
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Track mouse coordinates for cursor follower
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect clickable hover states to inflate the cursor
    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, select, input, textarea, [role="button"], [onClick]');
      setIsHoveringClickable(!!isClickable);
    };

    // Verify pointer capabilities (disable cursor follower on touch screens)
    const pointerQuery = window.matchMedia('(pointer: fine)');
    setHasPointer(pointerQuery.matches);

    const handlePointerChange = (e) => {
      setHasPointer(e.matches);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    pointerQuery.addEventListener('change', handlePointerChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      pointerQuery.removeEventListener('change', handlePointerChange);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Dynamic Cursor Follower (desktop only) */}
      {hasPointer && (
        <>
          <div
            className="custom-cursor"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              backgroundColor: isHoveringClickable ? 'transparent' : 'var(--primary)',
              width: isHoveringClickable ? '24px' : '10px',
              height: isHoveringClickable ? '24px' : '10px',
              border: isHoveringClickable ? '2px solid var(--primary)' : 'none',
              boxShadow: isHoveringClickable ? 'none' : '0 0 10px rgba(249, 115, 22, 0.4)'
            }}
          />
          <div
            className="custom-cursor-ring"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              width: isHoveringClickable ? '48px' : '36px',
              height: isHoveringClickable ? '48px' : '36px',
              borderColor: isHoveringClickable ? 'var(--primary-hover)' : 'var(--primary)',
              transform: `translate(-50%, -50%) scale(${isHoveringClickable ? 1.15 : 1})`
            }}
          />
        </>
      )}

      {/* Background Animated Blobs */}
      <div className="bg-blob-container">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>

      {/* Layout Wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar />

        {/* Routed contents area with Framer Motion transitions */}
        <main style={{ flexGrow: 1 }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={handleBackToTop}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router basename="/templates/buisness/Business-9">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
