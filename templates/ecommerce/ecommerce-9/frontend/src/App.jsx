import React, { useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { AppContext, AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import AnimatedIntro from './components/AnimatedIntro';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Offers from './pages/Offers';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import TrackOrder from './pages/TrackOrder';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function MainApp() {
  const { introSeen, setIntroSeen } = useContext(AppContext);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {!introSeen ? (
          <AnimatedIntro key="intro" onComplete={() => setIntroSeen(true)} />
        ) : (
          <div key="showroom-app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            
            {/* Holographic glowing grids and lines globally */}
            <div className="scanlines" style={{ opacity: 0.1 }} />

            <Navbar />
            <SearchOverlay />

            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/category/:categoryName" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                {/* Search fallback maps to general products */}
                <Route path="/search" element={<Products />} />
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;
