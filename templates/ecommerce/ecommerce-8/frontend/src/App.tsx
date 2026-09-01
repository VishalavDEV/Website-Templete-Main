import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToyCartProvider } from './context/ToyCartContext';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Categories } from './pages/Categories';
import { ProductDetails } from './pages/ProductDetails';
import { Search } from './pages/Search';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { OrderTracking } from './pages/OrderTracking';
import { UserProfile } from './pages/UserProfile';
import { AboutSupport } from './pages/AboutSupport';

import './App.css';

const App: React.FC = () => {
  return (
    <ToyCartProvider>
      <Router>
        <div className="app-container">
          {/* Custom Toy Theme Cursor */}
          <CustomCursor />

          {/* Sticky Header */}
          <Header />

          {/* Core Content Routing */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirmation" element={<OrderConfirmation />} />
              <Route path="/tracking/:id" element={<OrderTracking />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<AboutSupport />} />
            </Routes>
          </main>

          {/* Footer bar */}
          <Footer />
        </div>
      </Router>
    </ToyCartProvider>
  );
};

export default App;
