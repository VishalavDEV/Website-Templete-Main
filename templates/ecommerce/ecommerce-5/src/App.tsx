import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/layout/Header';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { SearchOverlay } from './components/common/SearchOverlay';
import { CartDrawer } from './components/common/CartDrawer';
import { QuickViewModal } from './components/shop/QuickViewModal';
import { ToastContainer } from './components/common/ToastContainer';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { PageLoader } from './components/common/PageLoader';
import { PageTransition } from './components/common/PageTransition';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WishlistPage } from './pages/WishlistPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <PageLoader />
      <CustomCursor />
      <ScrollProgressBar />

      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
          <Header />

          <div style={{ flex: 1 }}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/women" element={<WomenPage />} />
                <Route path="/men" element={<MenPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/collections/:slug" element={<CollectionsPage />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/search" element={<ShopPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </PageTransition>
          </div>

          <Footer />
          <MobileBottomNav />

          <SearchOverlay />
          <CartDrawer />
          <QuickViewModal />
          <ToastContainer />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;
