import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [cart, setCart] = useState({ items: [] });
  const [wishlist, setWishlist] = useState({ products: [] });
  const [loading, setLoading] = useState(false);
  
  // Animation triggers
  const [cartAnimationTrigger, setCartAnimationTrigger] = useState(false);

  const loadCart = async () => {
    if (!token || (user && user.role === 'ADMIN')) return;
    try {
      const response = await api.get('/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Failed to load cart', error);
    }
  };

  const loadWishlist = async () => {
    if (!token || (user && user.role === 'ADMIN')) return;
    try {
      const response = await api.get('/wishlist');
      setWishlist(response.data);
    } catch (error) {
      console.error('Failed to load wishlist', error);
    }
  };

  useEffect(() => {
    if (token && user && user.role === 'CUSTOMER') {
      loadCart();
      loadWishlist();
    } else {
      setCart({ items: [] });
      setWishlist({ products: [] });
    }
  }, [token, user]);

  const addToCart = async (productId, quantity = 1) => {
    if (!token) throw new Error('Please login to add items to cart');
    setLoading(true);
    try {
      const response = await api.post('/cart/add', { productId, quantity });
      setCart(response.data);
      // Trigger bouncing cart animation in Navbar
      setCartAnimationTrigger(true);
      setTimeout(() => setCartAnimationTrigger(false), 800);
    } catch (error) {
      console.error('Add to cart failed', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateCartQuantity = async (productId, quantity) => {
    if (!token) return;
    try {
      const response = await api.put('/cart/update', { productId, quantity });
      setCart(response.data);
    } catch (error) {
      console.error('Update quantity failed', error);
    }
  };

  const removeFromCart = async (productId) => {
    if (!token) return;
    try {
      const response = await api.delete(`/cart/remove/${productId}`);
      setCart(response.data);
    } catch (error) {
      console.error('Remove from cart failed', error);
    }
  };

  const clearCart = async () => {
    if (!token) return;
    try {
      await api.delete('/cart/clear');
      setCart({ items: [] });
    } catch (error) {
      console.error('Clear cart failed', error);
    }
  };

  const addToWishlist = async (productId) => {
    if (!token) throw new Error('Please login to use wishlist');
    try {
      const response = await api.post(`/wishlist/add/${productId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Add to wishlist failed', error);
      throw error;
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!token) return;
    try {
      const response = await api.delete(`/wishlist/remove/${productId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Remove from wishlist failed', error);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.products.some(p => p.id === productId);
  };

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      loading,
      cartAnimationTrigger,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      loadCart,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      loadWishlist
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
