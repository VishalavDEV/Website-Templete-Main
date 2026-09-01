import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const Navbar = ({ onCartOpen, onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'women' | 'men' | 'kids' | null
  const { cart, wishlist, user } = useContext(EcomContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const categories = [
    { name: 'Home', path: '/' },
    { name: 'Women', path: '/women', hasMega: true, type: 'women' },
    { name: 'Men', path: '/men', hasMega: true, type: 'men' },
    { name: 'Girls', path: '/girls' },
    { name: 'Boys', path: '/boys' },
    { name: 'Kids & Babies', path: '/kids' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Footwear', path: '/footwear' },
    { name: 'Sale', path: '/sale', highlight: true },
  ];

  // Mega Menu Data
  const megaMenuData = {
    women: {
      sections: [
        { title: 'Clothing', items: ['Dresses', 'Tops & Tees', 'Jeans & Trousers', 'Kurtis & Ethnic', 'Sarees'] },
        { title: 'Bags & Accessories', items: ['Handbags', 'Clutches & Wallets', 'Sunglasses', 'Jewelry', 'Scarves'] },
      ],
      promo: {
        title: 'Lavender Breeze Collection',
        subtitle: 'UP TO 30% OFF',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&auto=format&fit=crop&q=80',
        path: '/women',
      },
    },
    men: {
      sections: [
        { title: 'Apparel', items: ['Shirts', 'T-Shirts', 'Jeans', 'Jackets & Coats', 'Trousers'] },
        { title: 'Gear & Watch', items: ['Watches', 'Bags & Backpacks', 'Belts & Wallets', 'Sunglasses', 'Activewear'] },
      ],
      promo: {
        title: 'Modern Streetwear Edition',
        subtitle: 'NEW IN STOCK',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&auto=format&fit=crop&q=80',
        path: '/men',
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: scrolled ? '15px' : '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? '90%' : '100%',
          maxWidth: '1400px',
          zIndex: 9999,
          borderRadius: scrolled ? '30px' : '0px',
          padding: scrolled ? '12px 24px' : '20px 40px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(124, 92, 255, 0.15)' : '1px solid rgba(124, 92, 255, 0.05)',
          boxShadow: scrolled ? '0 10px 30px rgba(124, 92, 255, 0.08)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{ color: '#7c5cff', display: 'flex', alignItems: 'center' }}
          >
            <Sparkles size={24} />
          </motion.div>
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: scrolled ? '1.5rem' : '1.75rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #7c5cff 0%, #a28eff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'font-size 0.3s',
            }}
          >
            LAVENDER
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'none', gap: '24px', alignItems: 'center' }} className="md-flex-desktop">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => cat.hasMega ? setActiveMegaMenu(cat.type) : setActiveMegaMenu(null)}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Link
                to={cat.path}
                className="nav-link"
                style={{
                  color: cat.highlight ? '#7c5cff' : '#1e133e',
                  fontWeight: cat.highlight ? '700' : '500',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 0',
                }}
              >
                {cat.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Action Button Controls */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Search Trigger */}
          <button
            onClick={onSearchOpen}
            style={{ background: 'none', border: 'none', color: '#1e133e', cursor: 'pointer', display: 'flex', padding: '6px' }}
            className="hover-scale"
          >
            <Search size={22} />
          </button>

          {/* Account Icon */}
          <button
            onClick={() => navigate(user ? '/account' : '/login')}
            style={{ background: 'none', border: 'none', color: '#1e133e', cursor: 'pointer', display: 'flex', padding: '6px' }}
            className="hover-scale"
          >
            <User size={22} />
          </button>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            style={{ color: '#1e133e', textDecoration: 'none', display: 'flex', padding: '6px', position: 'relative' }}
            className="hover-scale"
          >
            <Heart size={22} />
            {wishlist.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: '#7c5cff',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                {wishlist.length}
              </motion.span>
            )}
          </Link>

          {/* Shopping Cart Trigger */}
          <button
            onClick={onCartOpen}
            style={{
              background: 'none',
              border: 'none',
              color: '#1e133e',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px',
              position: 'relative',
            }}
            className="hover-scale"
          >
            <ShoppingBag size={22} />
            {totalCartItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: '#7c5cff',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                {totalCartItems}
              </motion.span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: '#1e133e', cursor: 'pointer', display: 'flex', padding: '6px' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onMouseLeave={() => setActiveMegaMenu(null)}
            style={{
              position: 'fixed',
              top: scrolled ? '65px' : '75px',
              left: '5%,',
              width: '90%',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(124, 92, 255, 0.12)',
              boxShadow: '0 30px 60px rgba(124, 92, 255, 0.12)',
              zIndex: 9998,
              padding: '30px 40px',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '40px',
            }}
          >
            {/* Mega Left Sections */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {megaMenuData[activeMegaMenu].sections.map((sec, idx) => (
                <div key={idx}>
                  <h4 style={{ color: '#7c5cff', marginBottom: '14px', fontSize: '1.05rem', fontWeight: 600 }}>
                    {sec.title}
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {sec.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={`/products?category=${activeMegaMenu}&sub=${item.toLowerCase()}`}
                          onClick={() => setActiveMegaMenu(null)}
                          style={{
                            textDecoration: 'none',
                            color: '#5c4e8c',
                            fontSize: '0.9rem',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => e.target.style.color = '#7c5cff'}
                          onMouseLeave={(e) => e.target.style.color = '#5c4e8c'}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mega Right Promo Panel */}
            <Link
              to={megaMenuData[activeMegaMenu].promo.path}
              onClick={() => setActiveMegaMenu(null)}
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'block',
                height: '180px',
                boxShadow: '0 8px 24px rgba(124, 92, 255, 0.08)',
              }}
            >
              <img
                src={megaMenuData[activeMegaMenu].promo.image}
                alt="promo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 19, 62, 0.8), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  color: '#fff',
                }}
              >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#ffcbc1', fontWeight: 'bold' }}>
                  {megaMenuData[activeMegaMenu].promo.subtitle}
                </span>
                <h4 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', marginTop: '4px' }}>
                  {megaMenuData[activeMegaMenu].promo.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              maxWidth: '350px',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 99999,
              boxShadow: '-10px 0 40px rgba(124, 92, 255, 0.15)',
              padding: '80px 30px 40px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#1e133e',
              }}
            >
              <X size={26} />
            </button>

            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: cat.highlight ? '#7c5cff' : '#1e133e',
                  fontSize: '1.2rem',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                }}
              >
                {cat.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper Responsive Styles */}
      <style>{`
        .md-flex-desktop {
          display: none;
        }
        .mobile-toggle {
          display: flex;
        }
        @media (min-width: 768px) {
          .md-flex-desktop {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
        .hover-scale {
          transition: transform 0.2s;
        }
        .hover-scale:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
