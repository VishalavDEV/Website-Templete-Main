import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/layout/Navbar';
import { MegaMenu } from './components/layout/MegaMenu';
import { MobileNav } from './components/layout/MobileNav';
import { SearchOverlay } from './components/layout/SearchOverlay';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { SmartQuickAddModal } from './components/product/SmartQuickAddModal';
import { QuickViewModal } from './components/product/QuickViewModal';
import { CompareBar } from './components/product/CompareBar';
import { ToastContainer } from './components/common/Toast';
import { BackToTop } from './components/common/BackToTop';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { PageTransition } from './components/animation/PageTransition';
import { CustomCursor } from './components/common/CustomCursor';
import { PageIntroLoader } from './components/animation/PageIntroLoader';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WishlistPage } from './pages/WishlistPage';
import { ComparePage } from './pages/ComparePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { AccountPage } from './pages/AccountPage';
import { DealsPage } from './pages/DealsPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage';
import { BrandsPage } from './pages/BrandsPage';
import { HelpPage } from './pages/HelpPage';
import type { CategoryId } from './types';

const AppContent: React.FC = () => {
  const { currentRoute } = useShop();

  const renderRoute = () => {
    if (currentRoute === '/' || currentRoute === '') return <HomePage />;
    if (currentRoute === '/shop') return <ShopPage />;
    if (currentRoute === '/new') return <NewArrivalsPage />;
    if (currentRoute === '/deals') return <DealsPage />;
    if (currentRoute === '/wishlist') return <WishlistPage />;
    if (currentRoute === '/compare') return <ComparePage />;
    if (currentRoute === '/checkout') return <CheckoutPage />;
    if (currentRoute.startsWith('/order-success')) return <OrderSuccessPage />;
    if (currentRoute === '/account' || currentRoute === '/orders') return <AccountPage />;
    if (currentRoute === '/brands') return <BrandsPage />;
    if (currentRoute === '/help' || currentRoute === '/contact') return <HelpPage />;

    // Category Routes
    const categorySlugs = ['electronics', 'fashion', 'home', 'beauty', 'grocery', 'sports', 'kids', 'travel', 'automotive', 'books', 'pets'];
    const cleanRoute = currentRoute.replace('/', '').split('?')[0];

    if (categorySlugs.includes(cleanRoute)) {
      return <CategoryPage categoryId={cleanRoute as CategoryId} />;
    }

    if (currentRoute.startsWith('/category/')) {
      const cat = currentRoute.replace('/category/', '').split('?')[0] as CategoryId;
      return <CategoryPage categoryId={cat} />;
    }

    if (currentRoute.startsWith('/product/')) {
      const slug = currentRoute.replace('/product/', '');
      return <ProductDetailPage slug={slug} />;
    }

    if (currentRoute.startsWith('/search')) {
      return <ShopPage />;
    }

    return <HomePage />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <PageIntroLoader />
      <ScrollProgress />
      <CustomCursor />
      
      <Navbar />
      <MegaMenu />
      <SearchOverlay />

      <main style={{ flex: 1 }}>
        <PageTransition routeKey={currentRoute}>
          {renderRoute()}
        </PageTransition>
      </main>

      <CompareBar />
      <CartDrawer />
      <SmartQuickAddModal />
      <QuickViewModal />
      <ToastContainer />
      <BackToTop />
      <MobileNav />

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
