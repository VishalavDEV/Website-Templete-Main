import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, WishlistItem, ProductColor } from '../types';
import { PRODUCTS } from '../data/products';

interface Toast {
  id: string;
  message: string;
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: WishlistItem[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  quickViewProduct: Product | null;
  toasts: Toast[];
  addToCart: (product: Product, color?: ProductColor, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string, colorName: string, size: string) => void;
  updateCartQuantity: (productId: string, colorName: string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  showToast: (message: string) => void;
  cartCount: number;
  cartSubtotal: number;
  formatINR: (amount: number) => string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('aurel_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const savedWishlist = localStorage.getItem('aurel_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('aurel_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aurel_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const formatINR = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const addToCart = (
    product: Product,
    selectedColor?: ProductColor,
    selectedSize?: string,
    quantity = 1
  ) => {
    const color = selectedColor || product.colors[0];
    const size = selectedSize || product.sizes[0];

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.selectedColor.name === color.name && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { product, selectedColor: color, selectedSize: size, quantity }];
      }
    });

    showToast(`Added "${product.name}" to your Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, colorName: string, size: string) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedColor.name === colorName && item.selectedSize === size)
    ));
    showToast('Item removed from Bag');
  };

  const updateCartQuantity = (productId: string, colorName: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, colorName, size);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedColor.name === colorName && item.selectedSize === size) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.product.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.product.id !== product.id));
      showToast(`Removed "${product.name}" from Wishlist`);
    } else {
      setWishlist(prev => [...prev, { product, addedAt: new Date().toISOString() }]);
      showToast(`Saved "${product.name}" to Wishlist`);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.product.id === productId);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        isCartOpen,
        isSearchOpen,
        quickViewProduct,
        toasts,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
        setIsSearchOpen,
        setQuickViewProduct,
        showToast,
        cartCount,
        cartSubtotal,
        formatINR
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
