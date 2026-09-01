import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('bluecore_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('bluecore_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [introSeen, setIntroSeen] = useState(() => {
    // If you want to show it every session, use sessionStorage. If you want to persist, use localStorage.
    // Let's show it on fresh page reload (in-memory initial false, reset on mount) so user always gets the cool intro!
    return false;
  });

  const [lastPlacedOrder, setLastPlacedOrder] = useState(() => {
    const saved = localStorage.getItem('bluecore_last_order');
    return saved ? JSON.parse(saved) : null;
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('bluecore_cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('bluecore_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Save last order
  useEffect(() => {
    if (lastPlacedOrder) {
      localStorage.setItem('bluecore_last_order', JSON.stringify(lastPlacedOrder));
    } else {
      localStorage.removeItem('bluecore_last_order');
    }
  }, [lastPlacedOrder]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += qty;
        return updated;
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });

    // Trigger visual feedback (e.g. cart notification)
    triggerCartPulse();
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const triggerCartPulse = () => {
    const cartBtn = document.getElementById('navbar-cart-btn');
    if (cartBtn) {
      cartBtn.classList.remove('wave-glow');
      void cartBtn.offsetWidth; // trigger reflow
      cartBtn.classList.add('wave-glow');
      setTimeout(() => {
        cartBtn.classList.remove('wave-glow');
      }, 1000);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        wishlist,
        toggleWishlist,
        searchOpen,
        setSearchOpen,
        introSeen,
        setIntroSeen,
        lastPlacedOrder,
        setLastPlacedOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
