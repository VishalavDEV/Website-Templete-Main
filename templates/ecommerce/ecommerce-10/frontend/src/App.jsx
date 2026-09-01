import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Context
import { EcomProvider } from './context/EcomContext';

// Components
import Navbar from './components/Navbar';
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ToastNotification from './components/ToastNotification';

// Pages
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Girls from './pages/Girls';
import Boys from './pages/Boys';
import Kids from './pages/Kids';
import Babies from './pages/Babies';
import Accessories from './pages/Accessories';
import Footwear from './pages/Footwear';
import NewArrivals from './pages/NewArrivals';
import Trending from './pages/Trending';
import Sale from './pages/Sale';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

// Page Transition Wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -15, filter: 'blur(3px)' }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = ({ onCartOpen, onSearchOpen }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/women" element={<PageTransition><Women /></PageTransition>} />
        <Route path="/men" element={<PageTransition><Men /></PageTransition>} />
        <Route path="/girls" element={<PageTransition><Girls /></PageTransition>} />
        <Route path="/boys" element={<PageTransition><Boys /></PageTransition>} />
        <Route path="/kids" element={<PageTransition><Kids /></PageTransition>} />
        <Route path="/babies" element={<PageTransition><Babies /></PageTransition>} />
        <Route path="/accessories" element={<PageTransition><Accessories /></PageTransition>} />
        <Route path="/footwear" element={<PageTransition><Footwear /></PageTransition>} />
        <Route path="/new-arrivals" element={<PageTransition><NewArrivals /></PageTransition>} />
        <Route path="/trending" element={<PageTransition><Trending /></PageTransition>} />
        <Route path="/sale" element={<PageTransition><Sale /></PageTransition>} />
        <Route path="/products" element={<PageTransition><ProductListing /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
        <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
        <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
        <Route path="/account" element={<PageTransition><Account /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <EcomProvider>
      <Router>
        {/* Animated Custom Cursor */}
        <AnimatedCursor />

        {/* Global Alert Notification Toasts */}
        <ToastNotification />

        <AnimatePresence mode="wait">
          {!loadingComplete ? (
            <LoadingScreen key="loader" onComplete={() => setLoadingComplete(true)} />
          ) : (
            <motion.div
              key="main-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
            >
              {/* Header Navigation */}
              <Navbar
                onCartOpen={() => setCartOpen(true)}
                onSearchOpen={() => setSearchOpen(true)}
              />

              {/* Slidable Cart Panel */}
              <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

              {/* Blurred Search Panel */}
              <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

              {/* Main Routing Render */}
              <main style={{ flex: 1 }}>
                <AnimatedRoutes
                  onCartOpen={() => setCartOpen(true)}
                  onSearchOpen={() => setSearchOpen(true)}
                />
              </main>

              {/* Footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </EcomProvider>
  );
};

export default App;
