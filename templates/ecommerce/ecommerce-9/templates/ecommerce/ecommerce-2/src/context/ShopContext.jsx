import React, { createContext, useState, useEffect } from 'react';
import { products } from '../data/products';

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('aurelia_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('aurelia_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      return [];
    }
  });

  // Modals & UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Promo code state
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Toast notification
  const [toast, setToast] = useState(null);

  // Save to localStorage whenever cart or wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message, type = 'gold') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Cart actions
  const addToCart = (product, quantity = 1, size = null, metal = null) => {
    const selectedSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const selectedMetal = metal || product.material || '18K Gold';

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedMetal === selectedMetal
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            product,
            quantity,
            selectedSize,
            selectedMetal,
            id: `${product.id}-${selectedSize}-${selectedMetal}`
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to your Shopping Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from Shopping Bag', 'info');
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast('Shopping Bag cleared', 'info');
  };

  // Wishlist actions
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to your Wishlist`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const moveWishlistToCart = (product) => {
    addToCart(product);
  };

  // Promo code
  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'AURELIA10') {
      setAppliedPromo({ code: 'AURELIA10', discountPercent: 10 });
      showToast('Promo code AURELIA10 applied (10% Off)!');
      return true;
    } else if (cleanCode === 'LUXURY15') {
      setAppliedPromo({ code: 'LUXURY15', discountPercent: 15 });
      showToast('Promo code LUXURY15 applied (15% Off)!');
      return true;
    } else {
      showToast('Invalid promo code. Try "AURELIA10"', 'error');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartDiscount = appliedPromo
    ? Math.round((cartSubtotal * appliedPromo.discountPercent) / 100)
    : 0;

  const freeShippingThreshold = 25000;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        moveWishlistToCart,
        cartSubtotal,
        cartDiscount,
        cartCount,
        freeShippingThreshold,
        isFreeShipping,
        remainingForFreeShipping,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        formatPrice
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
