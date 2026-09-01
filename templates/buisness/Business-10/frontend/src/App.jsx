import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Lazy-load pages for performance
const Home     = lazy(() => import('./pages/Home'));
const About    = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact  = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback while lazy pages load
const PageLoader = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg)',
    }}
    aria-label="Loading page"
    role="status"
  >
    <motion.div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '3px solid rgba(99,102,241,0.2)',
        borderTopColor: 'var(--color-primary)',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    />
  </div>
);

// Page transition wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

// Inner app that has access to location for AnimatePresence
const AppInner = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<PageTransition><Home /></PageTransition>}
            />
            <Route
              path="/about"
              element={<PageTransition><About /></PageTransition>}
            />
            <Route
              path="/services"
              element={<PageTransition><Services /></PageTransition>}
            />
            <Route
              path="/projects"
              element={<PageTransition><Projects /></PageTransition>}
            />
            <Route
              path="/contact"
              element={<PageTransition><Contact /></PageTransition>}
            />
            <Route
              path="*"
              element={<PageTransition><NotFound /></PageTransition>}
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
};

const App = () => (
  <Router basename="/templates/buisness/Business-10">
    <AppInner />
  </Router>
);

export default App;
