import React, { useState, useEffect } from 'react';
import { PRODUCT_DATA } from './data/products';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductShowcase } from './components/ProductShowcase';
import { VideoMotionShowcase } from './components/VideoMotionShowcase';
import { ProductDetails } from './components/ProductDetails';
import { SpecsBreakdown } from './components/SpecsBreakdown';
import { CustomerReviews } from './components/CustomerReviews';
import { RelatedProducts } from './components/RelatedProducts';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { SpecsDocumentationModal } from './components/SpecsDocumentationModal';
import { Footer } from './components/Footer';

export function App() {
  const [activeColorway, setActiveColorway] = useState(PRODUCT_DATA.colorways[0]);
  const [cartItems, setCartItems] = useState([
    {
      id: `${PRODUCT_DATA.id}-cyber-volt-9.5`,
      name: PRODUCT_DATA.name,
      colorway: PRODUCT_DATA.colorways[0].name,
      colorwayId: 'cyber-volt',
      image: PRODUCT_DATA.colorways[0].heroImage,
      size: { us: '9.5', uk: '9.0', eu: '43.0', cm: '27.5' },
      price: PRODUCT_DATA.price,
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState(['aerostride-x-pro']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Dynamically update CSS custom properties whenever colorway changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-accent', activeColorway.primaryHex);
    root.style.setProperty('--theme-glow', activeColorway.accentGlow);
    root.style.setProperty('--theme-subtle', `${activeColorway.primaryHex}1f`);
  }, [activeColorway]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    showToast(`✓ Added ${newItem.name} (${newItem.size.us} US) to Cart`);
  };

  const handleUpdateQty = (itemId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from cart');
  };

  const handleQuickAddRelated = (gearItem) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `${gearItem.id}-${Date.now()}`,
        name: gearItem.name,
        colorway: activeColorway.name,
        colorwayId: activeColorway.id,
        image: gearItem.image,
        size: { us: 'Standard', uk: 'Std', eu: 'Std', cm: '-' },
        price: gearItem.price,
        quantity: 1
      }
    ]);
    showToast(`✓ Added ${gearItem.name} to Cart`);
  };

  // Wishlist toggle
  const handleToggleWishlist = () => {
    if (wishlist.includes(PRODUCT_DATA.id)) {
      setWishlist(wishlist.filter((id) => id !== PRODUCT_DATA.id));
      showToast('Removed from Wishlist');
    } else {
      setWishlist([...wishlist, PRODUCT_DATA.id]);
      showToast('❤️ Saved AEROSTRIDE X-PRO to Wishlist');
    }
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="app-root">
      
      {/* Dynamic Header & Navigation */}
      <Header 
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => showToast(`You have ${wishlist.length} item saved in Wishlist`)}
        onOpenSpecsModal={() => setIsSpecsModalOpen(true)}
        activeColorway={activeColorway}
      />

      {/* Main Content Flow */}
      <main className="main-content">
        
        {/* 1. Hero Launch Section with Live Drop Countdown */}
        <HeroSection 
          product={PRODUCT_DATA}
          activeColorway={activeColorway}
          onSelectColorway={setActiveColorway}
          onExploreClick={() => {
            const el = document.getElementById('showcase');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Primary Product Showcase & Purchase Engine (Split Layout) */}
        <section id="showcase" className="showcase-and-purchase-section">
          <div className="showcase-purchase-grid">
            
            {/* Left 55%: Interactive 360/Angle Image Showcase with Loupe Zoom */}
            <div className="showcase-col-left">
              <ProductShowcase 
                product={PRODUCT_DATA}
                activeColorway={activeColorway}
                onSelectColorway={setActiveColorway}
              />
            </div>

            {/* Right 45%: Product Details, Size Selector, Specs & Add to Cart */}
            <div className="showcase-col-right">
              <ProductDetails 
                product={PRODUCT_DATA}
                activeColorway={activeColorway}
                onSelectColorway={setActiveColorway}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.includes(PRODUCT_DATA.id)}
                onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
              />
            </div>

          </div>
        </section>

        {/* 3. Core Feature: Synchronized Running-Back Video & Front Display Showcase */}
        <VideoMotionShowcase 
          product={PRODUCT_DATA}
          activeColorway={activeColorway}
          onOpenSpecsModal={() => setIsSpecsModalOpen(true)}
        />

        {/* 4. Deep Technical Architecture & Biomechanics Breakdown */}
        <SpecsBreakdown 
          product={PRODUCT_DATA}
          activeColorway={activeColorway}
        />

        {/* 5. Verified Runner Reviews & Scorecard */}
        <CustomerReviews 
          product={PRODUCT_DATA}
          activeColorway={activeColorway}
        />

        {/* 6. Companion Gear & Apparel Recommendations */}
        <RelatedProducts 
          products={PRODUCT_DATA.relatedProducts}
          onQuickAdd={handleQuickAddRelated}
        />

      </main>

      {/* Footer */}
      <Footer onOpenSpecsModal={() => setIsSpecsModalOpen(true)} />

      {/* Interactive Modals & Drawers */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('🚀 Redirecting to Express Checkout...');
        }}
      />

      <SizeGuideModal 
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        sizes={PRODUCT_DATA.sizes}
        onSelectSizeFromGuide={(selected) => {
          showToast(`Selected size US ${selected.us}`);
        }}
      />

      <SpecsDocumentationModal 
        isOpen={isSpecsModalOpen}
        onClose={() => setIsSpecsModalOpen(false)}
      />

      {/* Global Toast Alert Notification */}
      {toastMessage && (
        <div className="global-toast glass-panel">
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
