import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Cpu } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { cart, wishlist, setSearchOpen } = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '15px 5%' : '25px 5%',
      backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 240, 255, 0.05)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
      fontFamily: "'Orbitron', sans-serif"
    }}>
      {/* Brand Logo */}
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '22px',
        letterSpacing: '0.15em'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid #00f0ff',
          boxShadow: '0 0 8px rgba(0, 240, 255, 0.5)',
          color: '#00f0ff',
          fontSize: '18px',
          textShadow: '0 0 5px #00f0ff'
        }}>
          ⚡
        </div>
        <span style={{ textShadow: '0 0 10px rgba(0, 240, 255, 0.3)' }}>BLUECORE</span>
      </Link>

      {/* Nav links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
      }}>
        <NavLink to="/" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#00f0ff' : '#94a3b8',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: isActive ? '0 0 8px rgba(0,240,255,0.4)' : 'none',
          transition: 'all 0.3s ease'
        })}>
          HOME
        </NavLink>
        <NavLink to="/products" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#00f0ff' : '#94a3b8',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: isActive ? '0 0 8px rgba(0,240,255,0.4)' : 'none',
          transition: 'all 0.3s ease'
        })}>
          PRODUCTS
        </NavLink>
        <NavLink to="/offers" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#00f0ff' : '#94a3b8',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: isActive ? '0 0 8px rgba(0,240,255,0.4)' : 'none',
          transition: 'all 0.3s ease'
        })}>
          OFFERS
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#00f0ff' : '#94a3b8',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: isActive ? '0 0 8px rgba(0,240,255,0.4)' : 'none',
          transition: 'all 0.3s ease'
        })}>
          SUPPORT
        </NavLink>
      </div>

      {/* Right Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Search */}
        <button 
          onClick={() => setSearchOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '5px',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <Search size={20} />
        </button>

        {/* Wishlist */}
        <Link to="/wishlist" style={{
          color: '#94a3b8',
          position: 'relative',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <Heart size={20} />
          {wishlist.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              background: '#0066ff',
              color: '#fff',
              fontSize: '10px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 5px rgba(0,240,255,0.5)',
              fontWeight: 'bold'
            }}>
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" id="navbar-cart-btn" style={{
          color: '#94a3b8',
          position: 'relative',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50%',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <ShoppingCart size={20} />
          {totalCartItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              background: '#00f0ff',
              color: '#030712',
              fontSize: '10px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 8px #00f0ff',
              fontWeight: 'bold'
            }}>
              {totalCartItems}
            </span>
          )}
        </Link>

        {/* Profile */}
        <Link to="/profile" style={{
          color: '#94a3b8',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <User size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
