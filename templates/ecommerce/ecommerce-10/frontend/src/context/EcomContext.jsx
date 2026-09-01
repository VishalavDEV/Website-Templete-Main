import React, { createContext, useState, useEffect } from 'react';

export const EcomContext = createContext();

const API_BASE = 'http://localhost:8080/api';

export const EcomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Add Toast Notification
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  // Fetch cart
  const fetchCart = async () => {
    try {
      const res = await fetch(`${API_BASE}/cart`);
      if (res.ok) {
        const data = await res.json();
        setCart(data);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  // Fetch wishlist
  const fetchWishlist = async () => {
    try {
      const res = await fetch(`${API_BASE}/wishlist`);
      if (res.ok) {
        const data = await res.json();
        setWishlist(data);
      }
    } catch (err) {
      console.error('Error fetching wishlist:', err);
    }
  };

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_BASE}/orders`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  // Check auth session
  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/me`);
      if (res.status === 200) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.error('Error checking auth:', err);
    }
  };

  // Initialize
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await fetchProducts();
      await checkAuth();
      await fetchCart();
      await fetchWishlist();
      await fetchOrders();
      setLoading(false);
    };
    init();
  }, []);

  // Add to cart
  const addToCart = async (product, quantity, size, color) => {
    try {
      const res = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, quantity, size, color }),
      });
      if (res.ok) {
        await fetchCart();
        addToast(`Added "${product.name}" to cart!`);
        return true;
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
    addToast('Failed to add item to cart', 'error');
    return false;
  };

  // Update cart quantity
  const updateCartQuantity = async (itemId, quantity) => {
    try {
      const res = await fetch(`${API_BASE}/cart/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
      });
      if (res.ok) {
        await fetchCart();
        return true;
      }
    } catch (err) {
      console.error('Error updating cart quantity:', err);
    }
    return false;
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    try {
      const res = await fetch(`${API_BASE}/cart/${itemId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        await fetchCart();
        addToast('Removed item from cart');
        return true;
      }
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
    return false;
  };

  // Toggle wishlist
  const toggleWishlist = async (product) => {
    try {
      const res = await fetch(`${API_BASE}/wishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (res.ok) {
        const toggledProduct = await res.json();
        await fetchWishlist();
        if (toggledProduct) {
          addToast(`Added "${product.name}" to wishlist!`);
        } else {
          addToast(`Removed "${product.name}" from wishlist`);
        }
        return true;
      }
    } catch (err) {
      console.error('Error toggling wishlist:', err);
    }
    return false;
  };

  // Auth Operations
  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        addToast(`Welcome back, ${data.name}!`);
        await fetchCart();
        await fetchWishlist();
        await fetchOrders();
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      console.error('Error logging in:', err);
      return { success: false, message: 'Server connection error' };
    }
  };

  const register = async (name, email, phone, password) => {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        addToast(`Account created! Welcome, ${name}!`);
        await fetchCart();
        await fetchWishlist();
        await fetchOrders();
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      console.error('Error registering:', err);
      return { success: false, message: 'Server connection error' };
    }
  };

  const logout = async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
      if (res.ok) {
        setUser(null);
        setCart([]);
        setWishlist([]);
        setOrders([]);
        addToast('Logged out successfully');
      }
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  // Place order
  const placeOrder = async (shippingAddress, paymentMethod) => {
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shippingAddress, paymentMethod }),
      });
      if (res.ok) {
        const placed = await res.json();
        await fetchOrders();
        setCart([]); // Clear cart locally since order completed
        addToast('Order placed successfully!', 'success');
        return placed;
      }
    } catch (err) {
      console.error('Error placing order:', err);
    }
    addToast('Failed to place order', 'error');
    return null;
  };

  return (
    <EcomContext.Provider
      value={{
        products,
        cart,
        wishlist,
        orders,
        user,
        toasts,
        loading,
        searchQuery,
        setSearchQuery,
        addToast,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        toggleWishlist,
        login,
        register,
        logout,
        placeOrder,
        fetchOrders
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
