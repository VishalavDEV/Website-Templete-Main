import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext(null);

const API_URL = 'http://localhost:5000/api';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('aura_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        const newQty = existingItem.quantity + quantity;
        if (newQty > product.stock) {
          alert(`Cannot add more. Only ${product.stock} items available in stock.`);
          return prevItems;
        }
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product.id === productId) {
          if (newQuantity > item.product.stock) {
            alert(`Only ${item.product.stock} items available in stock.`);
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const applyCoupon = async (code) => {
    try {
      const response = await fetch(`${API_URL}/coupons/validate?code=${code}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Invalid coupon code');
      }
      setCoupon(data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
  };

  // Pricing math helpers
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = coupon ? cartSubtotal * coupon.discountPercent : 0.0;
  const taxableAmount = Math.max(0.0, cartSubtotal - discountAmount);
  const taxAmount = Math.round((taxableAmount * 0.18) * 100.0) / 100.0; // 18% GST (CGST 9% + SGST 9%)
  const shippingCharge = taxableAmount > 15000.0 || taxableAmount === 0 ? 0.0 : 350.0; // free over ₹15,000
  
  const cartTotal = Math.round((taxableAmount + taxAmount + shippingCharge) * 100.0) / 100.0;

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        coupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyCoupon,
        removeCoupon,
        clearCart,
        cartSubtotal,
        discountAmount,
        taxAmount,
        shippingCharge,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
