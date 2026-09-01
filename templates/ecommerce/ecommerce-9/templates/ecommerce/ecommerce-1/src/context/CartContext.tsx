'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, ShadeOption, CartItem } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  isLoginOpen: boolean;
  searchQuery: string;
  toastMessage: string | null;
  addToCart: (product: Product, shade?: ShadeOption) => void;
  removeFromCart: (productId: string, shadeId: string) => void;
  updateQuantity: (productId: string, shadeId: string, delta: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openLogin: () => void;
  closeLogin: () => void;
  setSearchQuery: (query: string) => void;
  clearToast: () => void;
  cartTotal: number;
  cartCount: number;
  freeShippingTarget: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQueryState] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize cart with default item
  useEffect(() => {
    import('@/data/products').then(({ PRODUCTS }) => {
      const defaultProduct = PRODUCTS[0];
      setCartItems([
        {
          product: defaultProduct,
          selectedShade: defaultProduct.shades[0],
          quantity: 1,
        },
      ]);
    });
  }, []);

  const addToCart = (product: Product, shade?: ShadeOption) => {
    const selectedShade = shade || product.shades[0];

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedShade.id === selectedShade.id
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prevItems, { product, selectedShade, quantity: 1 }];
    });

    setToastMessage(`Added ${product.name} to your bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, shadeId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedShade.id === shadeId))
    );
  };

  const updateQuantity = (productId: string, shadeId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedShade.id === shadeId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const setSearchQuery = (query: string) => {
    setSearchQueryState(query);
  };

  const clearToast = () => setToastMessage(null);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingTarget = 999; // Free express shipping above ₹999

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        isLoginOpen,
        searchQuery,
        toastMessage,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        openLogin,
        closeLogin,
        setSearchQuery,
        clearToast,
        cartTotal,
        cartCount,
        freeShippingTarget,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
