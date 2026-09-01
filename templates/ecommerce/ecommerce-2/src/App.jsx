import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchOverlay from './components/SearchOverlay';
import ToastNotification from './components/ToastNotification';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Collections from './pages/Collections';
import Bridal from './pages/Bridal';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/bridal" element={<Bridal />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />

          {/* Interactive Modals & Drawers */}
          <CartDrawer />
          <QuickViewModal />
          <SearchOverlay />
          <ToastNotification />
        </div>
      </Router>
    </ShopProvider>
  );
}
