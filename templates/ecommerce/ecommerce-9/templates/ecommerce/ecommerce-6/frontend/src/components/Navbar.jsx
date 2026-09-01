import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, LogOut, Heart, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = ({ onCartOpen }) => {
  const { user, logout, wishlist, isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        zIndex: 1000
      }}
    >
      {/* Brand Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gold-text-gradient"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.8rem',
            fontWeight: '800',
            letterSpacing: '0.1em'
          }}
        >
          AURA
        </motion.span>
      </Link>

      {/* Nav Links */}
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <Link to="/" className="nav-link-hover" style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.05em' }}>
          COLLECTION
        </Link>
        <Link to="/support" className="nav-link-hover" style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          SUPPORT
        </Link>
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Wishlist Link */}
        <Link to={isAuthenticated ? "/wishlist" : "/auth?redirect=wishlist"} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Heart size={20} className="nav-icon" />
          <AnimatePresence>
            {wishlist.length > 0 && (
              <motion.span
                key={wishlist.length}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: '#ff4d4d',
                  borderRadius: '50%',
                  width: '8px',
                  height: '8px'
                }}
              />
            )}
          </AnimatePresence>
        </Link>

        {/* User Profile / Auth Link */}
        {isAuthenticated ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/profile" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }} className="nav-link-hover">
              HI, <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{user?.username.toUpperCase()}</span>
            </Link>
            <button
              onClick={() => {
                logout();
                navigate('/auth');
              }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <LogOut size={20} className="nav-icon" />
            </button>
          </div>
        ) : (
          <Link to="/auth" style={{ display: 'flex', alignItems: 'center' }}>
            <User size={20} className="nav-icon" />
          </Link>
        )}

        {/* Cart Button */}
        <button
          onClick={onCartOpen}
          style={{
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ShoppingBag size={20} className="nav-icon" />
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                {cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Styled Link Hover Styles */}
      <style>{`
        .nav-link-hover {
          position: relative;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .nav-link-hover:hover {
          color: var(--text-primary);
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent-gold);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .nav-link-hover:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .nav-icon {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .nav-icon:hover {
          color: var(--accent-gold);
          transform: scale(1.08);
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
