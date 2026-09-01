import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AuthPage from './pages/AuthPage';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import WishlistPage from './pages/WishlistPage';
import ForgotPassword from './pages/ForgotPassword';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>


      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', position: 'relative' }}>
            {/* Top Navigation */}
            <Navbar onCartOpen={() => setCartOpen(true)} />

            {/* Shopping Cart Drawer */}
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

            {/* Main Pages Router */}
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </main>

            {/* Premium Footer */}
            <footer
              id="about"
              style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-glass)',
                padding: '4.5rem 5% 3rem 5%',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                  gap: '4rem',
                  marginBottom: '4rem'
                }}
                className="footer-grid-responsive"
              >
                {/* Brand Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 className="gold-text-gradient" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '0.1em' }}>
                    AURA
                  </h3>
                  <p style={{ lineHeight: 1.6, maxWidth: '280px' }}>
                    A design archive dedicated to premium acoustics, luxury timepieces, and structural apparel. Elevating spaces since 2026.
                  </p>
                </div>

                {/* Navigation Links Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '0.05em' }}>COLLECTION</h4>
                  <a href="#" className="nav-link-hover">HEADPHONES</a>
                  <a href="#" className="nav-link-hover">CHRONOGRAPHS</a>
                  <a href="#" className="nav-link-hover">APPAREL</a>
                </div>

                {/* Support Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '0.05em' }}>SUPPORT</h4>
                  <a href="#" className="nav-link-hover">CLIENT ASSISTANCE</a>
                  <a href="#" className="nav-link-hover">RETURNS & LIFETIME WARRANTY</a>
                  <a href="#" className="nav-link-hover">SHIPPING INFO</a>
                </div>

                {/* Newsletter Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '0.05em' }}>NEWSLETTER</h4>
                  <p style={{ fontSize: '0.8rem' }}>Subscribe to unlock early allocations and design drops.</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="email" placeholder="EMAIL" className="premium-input" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }} />
                    <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>GO</button>
                  </div>
                </div>
              </div>

              {/* Copyright Row */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                  paddingTop: '2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>© 2026 AURA STUDIO INC. ALL RIGHTS RESERVED.</span>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href="#" className="nav-link-hover">PRIVACY POLICY</a>
                  <a href="#" className="nav-link-hover">TERMS OF SERVICE</a>
                </div>
              </div>
            </footer>
            
            <style>{`
              @media (max-width: 820px) {
                .footer-grid-responsive {
                  grid-template-columns: 1fr !important;
                  gap: 2.5rem !important;
                }
              }
            `}</style>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
