import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToyCart } from '../context/ToyCartContext';
import { ShoppingBag, Heart, Search, User, Compass, Info, Home } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const { cartCount, wishlist } = useToyCart();
  const location = useLocation();
  const [animateCart, setAnimateCart] = useState(false);

  // Trigger cart icon shake animation when cart count changes
  useEffect(() => {
    if (cartCount === 0) return;
    setAnimateCart(true);
    const timer = setTimeout(() => setAnimateCart(false), 600);
    return () => clearTimeout(timer);
  }, [cartCount]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="main-header glass-panel">
      <div className="header-container">
        <Link to="/" className="logo" data-cursor="play">
          <span className="logo-icon">🧱</span>
          <span className="logo-text">TOY<span className="text-accent">WORLD</span></span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} data-cursor="play">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`} data-cursor="drive">
            <Compass size={18} />
            <span>Shop</span>
          </Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories') ? 'active' : ''}`} data-cursor="build">
            <span>Categories</span>
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} data-cursor="play">
            <Info size={18} />
            <span>Workshop</span>
          </Link>
        </nav>

        <div className="header-actions">
          <Link to="/search" className={`action-btn ${isActive('/search') ? 'active' : ''}`} title="Search Toys" data-cursor="play">
            <Search size={22} />
          </Link>

          <Link to="/profile" className={`action-btn ${isActive('/profile') ? 'active' : ''}`} title="My Profile" data-cursor="activate">
            <User size={22} />
          </Link>

          <Link to="/wishlist" className={`action-btn wishlist-icon ${isActive('/wishlist') ? 'active' : ''}`} title="My Toy Collection" data-cursor="collect">
            <Heart size={22} fill={wishlist.length > 0 ? 'var(--secondary)' : 'none'} stroke={wishlist.length > 0 ? 'var(--secondary)' : 'currentColor'} />
            {wishlist.length > 0 && <span className="action-badge bg-secondary">{wishlist.length}</span>}
          </Link>

          <Link to="/cart" className={`action-btn cart-icon ${animateCart ? 'shake-anim' : ''} ${isActive('/cart') ? 'active' : ''}`} title="Your Toy Box" data-cursor="add-cart">
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="action-badge bg-accent">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};
