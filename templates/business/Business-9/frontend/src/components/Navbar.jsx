import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Insights', path: '/insights' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.25 } 
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`} style={{ padding: scrolled ? '0.75rem 0' : '1.25rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Animated Brand Logo */}
        <motion.div 
          onClick={handleLogoClick}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div style={{
            background: 'var(--primary-gradient)',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
          }}>
            <Sparkles size={20} color="#FFF" className="float-anim" />
          </div>
          <span style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: '-0.5px'
          }}>
            Oran<span className="text-gradient">grow</span>
          </span>
        </motion.div>

        {/* Desktop Navigation links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button & Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button 
            className="btn btn-primary desktop-only"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.85rem' }}
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight size={15} />
          </motion.button>

          {/* Hamburger Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'none',
              padding: '0.25rem'
            }}
            className="hamburger-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--bg-dark-card)',
              backdropFilter: 'blur(20px)',
              padding: '2rem 1.5rem',
              borderBottom: '1px solid rgba(249, 115, 22, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 999
            }}
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'block',
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 0'
                  })}
                  onClick={handleMobileLinkClick}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={linkVariants} style={{ marginTop: '0.5rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/contact');
                }}
              >
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
          .hamburger-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
