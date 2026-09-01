import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LiveProductStrip from './components/LiveProductStrip';
import DiscoverByNeed from './components/DiscoverByNeed';
import FeaturedDevice from './components/FeaturedDevice';
import ProductEcosystem from './components/ProductEcosystem';
import TechnologyStory from './components/TechnologyStory';
import SmartDeals from './components/SmartDeals';
import TrustService from './components/TrustService';
import ShopDeviceIndex from './components/ShopDeviceIndex';
import FilterDrawer from './components/FilterDrawer';
import ProductDetailPage from './components/ProductDetailPage';
import CompareMatrixModal from './components/CompareMatrixModal';
import SearchCommandModal from './components/SearchCommandModal';
import BagDrawer from './components/BagDrawer';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation View State: 'home' | 'shop' | 'pdp'
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeProduct, setActiveProduct] = useState(null);

  // Modals & Drawers State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Filter Criteria State
  const [filterCriteria, setFilterCriteria] = useState({
    maxPrice: 160000,
    category: 'ALL',
    storage: 'ALL',
    minRating: 0
  });

  // LocalStorage Persisted States
  const [bagItems, setBagItems] = useState(() => {
    try {
      const saved = localStorage.getItem('nova_bag_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('nova_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('nova_compare');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('nova_bag_items', JSON.stringify(bagItems));
  }, [bagItems]);

  useEffect(() => {
    localStorage.setItem('nova_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('nova_compare', JSON.stringify(compareList));
  }, [compareList]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  // Cart Functions
  const handleAddToCart = (product) => {
    const color = product.selectedColor || (product.colors?.[0]?.name) || 'Default';
    const storage = product.selectedStorage || (product.storageOptions?.[0]) || 'Standard';

    setBagItems((prev) => {
      const existingIdx = prev.findIndex(
        item => item.id === product.id && item.selectedColor === color && item.selectedStorage === storage
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { ...product, selectedColor: color, selectedStorage: storage, quantity: 1 }];
      }
    });
    showToast(`ADDED ${product.name} TO BAG`);
  };

  const handleUpdateQuantity = (id, color, storage, newQty) => {
    if (newQty <= 0) {
      handleRemoveBagItem(id, color, storage);
      return;
    }
    setBagItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedColor === color && item.selectedStorage === storage
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveBagItem = (id, color, storage) => {
    setBagItems((prev) =>
      prev.filter(
        item => !(item.id === id && item.selectedColor === color && item.selectedStorage === storage)
      )
    );
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  // Wishlist Functions
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('REMOVED FROM WISHLIST');
        return prev.filter(id => id !== productId);
      } else {
        showToast('SAVED TO WISHLIST');
        return [...prev, productId];
      }
    });
  };

  // Compare Functions
  const handleToggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`REMOVED ${product.name} FROM COMPARE`);
        return prev.filter(item => item.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showToast('COMPARE LIMIT REACHED (MAX 4 DEVICES)');
          return prev;
        }
        showToast(`ADDED ${product.name} TO COMPARE MATRIX`);
        return [...prev, product];
      }
    });
  };

  // Product Selection & View Switch
  const handleSelectProduct = (product) => {
    setActiveProduct(product);
    setActiveTab('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered Products computation
  const filteredProducts = PRODUCTS.filter((p) => {
    // Category filter
    if (selectedCategory !== 'ALL' && p.category !== selectedCategory) return false;
    if (filterCriteria.category !== 'ALL' && p.category !== filterCriteria.category) return false;
    // Price filter
    if (p.price > filterCriteria.maxPrice) return false;
    // Storage filter
    if (filterCriteria.storage !== 'ALL' && (!p.storageOptions || !p.storageOptions.includes(filterCriteria.storage))) return false;
    // Rating filter
    if (filterCriteria.minRating > 0 && p.rating < filterCriteria.minRating) return false;
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#08090B', color: '#F4F4F1' }}>

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 400,
          background: 'rgba(16, 18, 22, 0.95)',
          border: '1px solid #00F0FF',
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
          color: '#00F0FF',
          padding: '0.75rem 1.6rem',
          borderRadius: '4px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          animation: 'fadeIn 0.2s ease'
        }}>
          {toastMessage}
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={compareList.length}
        onOpenWishlist={() => {
          setSelectedCategory('ALL');
          setActiveTab('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast(`VIEWING ${wishlist.length} SAVED ITEMS IN INDEX`);
        }}
        wishlistCount={wishlist.length}
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={bagItems.reduce((a, b) => a + b.quantity, 0)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Area */}
      <main>
        {activeTab === 'home' && (
          <>
            <HeroSection
              onExploreDevice={() => handleSelectProduct(PRODUCTS[0])}
              onShopAll={() => { setActiveTab('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            />
            <LiveProductStrip
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
            />
            <DiscoverByNeed
              onSelectCategory={handleSelectCategory}
            />
            <FeaturedDevice
              onExploreX1={() => handleSelectProduct(PRODUCTS[0])}
            />
            <ProductEcosystem
              products={PRODUCTS}
              onAddToCart={handleAddToCart}
              onSelectProduct={handleSelectProduct}
            />
            <TechnologyStory
              onExploreTech={() => { setActiveTab('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            />
            <SmartDeals
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onAddToCart={handleAddToCart}
            />
            <TrustService />
          </>
        )}

        {activeTab === 'shop' && (
          <ShopDeviceIndex
            products={filteredProducts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenFilter={() => setIsFilterOpen(true)}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
          />
        )}

        {activeTab === 'pdp' && activeProduct && (
          <ProductDetailPage
            product={activeProduct}
            onBack={() => setActiveTab('shop')}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlist.includes(activeProduct.id)}
            onToggleCompare={handleToggleCompare}
            isCompared={compareList.some(item => item.id === activeProduct.id)}
            onBuyNow={(prod) => {
              handleAddToCart(prod);
              setIsBagOpen(true);
            }}
          />
        )}
      </main>

      {/* Modals & Drawers */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={setFilterCriteria}
        currentFilters={filterCriteria}
      />

      <CompareMatrixModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareList={compareList}
        onRemoveFromCompare={(id) => setCompareList(prev => prev.filter(item => item.id !== id))}
        onAddToCart={handleAddToCart}
      />

      <SearchCommandModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        bagItems={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveBagItem}
        onClearBag={handleClearBag}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => { setActiveTab('shop'); }}
        wishlistCount={wishlist.length}
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={bagItems.reduce((a, b) => a + b.quantity, 0)}
      />

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}
