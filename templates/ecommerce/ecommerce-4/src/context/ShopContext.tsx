import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, ToastMessage, CategoryId } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  // Navigation
  currentRoute: string;
  navigate: (route: string) => void;

  // Cart & Drawer
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: string, color?: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, color?: string, size?: string) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  freeShippingThreshold: number;
  amountToFreeShipping: number;
  appliedPromo: { code: string; discountPercent: number } | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };

  // Smart Quick Add Modal
  quickAddProduct: Product | null;
  setQuickAddProduct: (product: Product | null) => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Compare
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;

  // Quick View Modal
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Search Overlay
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Mega Menu State
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (open: boolean) => void;
  activeMegaCategory: CategoryId;
  setActiveMegaCategory: (cat: CategoryId) => void;

  // Recently Viewed & Personalization
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;

  // Orders & Toasts
  orders: Order[];
  createOrder: (shippingDetails: any, paymentMethod: string) => Order;
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Router
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.hash.replace('#', '') || '/';
  });

  const navigate = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('orvana_cart');
    return saved ? JSON.parse(saved) : [
      { product: PRODUCTS[0], quantity: 1, selectedColor: 'Matte Charcoal' },
      { product: PRODUCTS[5], quantity: 1, selectedColor: 'Espresso Brown', selectedSize: 'UK 8' }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>({ code: 'ORVANA10', discountPercent: 10 });

  useEffect(() => {
    localStorage.setItem('orvana_cart', JSON.stringify(cart));
  }, [cart]);

  const freeShippingThreshold = 999;

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartDiscount = appliedPromo ? Math.round((cartSubtotal * appliedPromo.discountPercent) / 100) : 0;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedColor === color && i.selectedSize === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: color || product.colors?.[0]?.name, selectedSize: size || product.sizes?.[0] }];
    });
    addToast('✓ ADDED TO BAG', `${product.name} has been added to your shopping bag.`);
  };

  const removeFromCart = (productId: string, color?: string, size?: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedColor === color && item.selectedSize === size)));
  };

  const updateQuantity = (productId: string, quantity: number, color?: string, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId && item.selectedColor === color && item.selectedSize === size ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const applyPromoCode = (code: string) => {
    if (code.trim().toUpperCase() === 'ORVANA10') {
      setAppliedPromo({ code: 'ORVANA10', discountPercent: 10 });
      return { success: true, message: 'Promo code ORVANA10 applied (10% OFF).' };
    }
    if (code.trim().toUpperCase() === 'FIRST20') {
      setAppliedPromo({ code: 'FIRST20', discountPercent: 20 });
      return { success: true, message: 'Promo code FIRST20 applied (20% OFF).' };
    }
    return { success: false, message: 'Invalid promo code.' };
  };

  // Smart Quick Add Modal
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('orvana_wishlist');
    return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[6].id];
  });

  useEffect(() => {
    localStorage.setItem('orvana_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    const exists = wishlist.includes(productId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addToast('REMOVED FROM WISHLIST', 'Item removed from your saved list.', 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      addToast('SAVED TO WISHLIST', 'Item added to your saved list.');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Compare List
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    if (compareList.some((p) => p.id === product.id)) return;
    if (compareList.length >= 4) {
      addToast('COMPARE LIMIT REACHED', 'You can compare up to 4 products at once.', 'warning');
      return;
    }
    setCompareList((prev) => [...prev, product]);
    addToast('ADDED TO COMPARE', `${product.name} added to compare list.`);
  };

  const removeFromCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const isInCompare = (productId: string) => compareList.some((p) => p.id === productId);

  // Quick View Modal
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Search Overlay
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mega Menu State
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<CategoryId>('electronics');

  // Recently Viewed History
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>(() => {
    const saved = localStorage.getItem('orvana_recently_viewed');
    return saved ? JSON.parse(saved) : [PRODUCTS[2], PRODUCTS[3], PRODUCTS[7]];
  });

  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, 8);
      localStorage.setItem('orvana_recently_viewed', JSON.stringify(updated));
      return updated;
    });
  };

  // Mock Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orvana_orders');
    return saved ? JSON.parse(saved) : [
      {
        id: 'ORV-849201',
        date: '2026-08-18',
        items: [
          { product: PRODUCTS[0], quantity: 1, price: 7999, color: 'Matte Charcoal' }
        ],
        subtotal: 7999,
        discount: 800,
        shipping: 0,
        total: 7199,
        status: 'Delivered',
        estimatedDelivery: '2026-08-20',
        shippingAddress: {
          fullName: 'Aarav Sharma',
          phone: '+91 98765 43210',
          street: '42 MG Road, Indiranagar',
          city: 'Bengaluru',
          state: 'Karnataka',
          pincode: '560038'
        },
        paymentMethod: 'UPI (GPay)'
      }
    ];
  });

  const createOrder = (shippingDetails: any, paymentMethod: string): Order => {
    const newOrder: Order = {
      id: `ORV-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toISOString().split('T')[0],
      items: cart.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        price: item.product.price,
        color: item.selectedColor,
        size: item.selectedSize
      })),
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: amountToFreeShipping === 0 ? 0 : 199,
      total: cartTotal + (amountToFreeShipping === 0 ? 0 : 199),
      status: 'Confirmed',
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      shippingAddress: shippingDetails,
      paymentMethod
    };

    setOrders((prev) => [newOrder, ...prev]);
    localStorage.setItem('orvana_orders', JSON.stringify([newOrder, ...orders]));
    clearCart();
    return newOrder;
  };

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{
        currentRoute,
        navigate,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        freeShippingThreshold,
        amountToFreeShipping,
        appliedPromo,
        applyPromoCode,
        quickAddProduct,
        setQuickAddProduct,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isMegaMenuOpen,
        setIsMegaMenuOpen,
        activeMegaCategory,
        setActiveMegaCategory,
        recentlyViewed,
        addRecentlyViewed,
        orders,
        createOrder,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
