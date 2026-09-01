import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [localQuery, setLocalQuery] = useState('');
  const { setSearchQuery } = useContext(EcomContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Listen for Escape key
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
      navigate(`/products?search=${encodeURIComponent(localQuery)}`);
      onClose();
    }
  };

  const handleSuggestionClick = (tag) => {
    setSearchQuery(tag);
    navigate(`/products?search=${encodeURIComponent(tag)}`);
    onClose();
  };

  const suggestions = [
    'Dresses', 'Shoes', 'Bags', 'Watches', 'T-shirts', 'Jeans', 'Baby clothes', 'Accessories'
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(19, 14, 38, 0.75)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            background: 'none',
            border: 'none',
            color: '#eae3ff',
            cursor: 'pointer',
            padding: '10px',
          }}
        >
          <X size={32} />
        </button>

        <div style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <h2
            style={{
              fontFamily: 'Outfit',
              fontSize: '2rem',
              color: '#eae3ff',
              textAlign: 'center',
              textShadow: '0 0 15px rgba(124,92,255,0.4)',
            }}
          >
            Find Your Lavender Style
          </h2>

          {/* Search Input Form */}
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '2px solid rgba(124, 92, 255, 0.3)',
              borderRadius: '50px',
              padding: '10px 24px',
              boxShadow: '0 0 20px rgba(124, 92, 255, 0.15)',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#7c5cff';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(124, 92, 255, 0.35)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(124, 92, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 92, 255, 0.15)';
            }}
          >
            <Search size={24} style={{ color: '#8a7db3', marginRight: '16px' }} />
            <input
              type="text"
              placeholder="Search products, brands, collections..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              autoFocus
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '1.25rem',
                flex: 1,
                fontFamily: 'Inter',
              }}
            />
            {localQuery.trim() && (
              <button
                type="submit"
                style={{
                  background: '#7c5cff',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <ArrowRight size={18} />
              </button>
            )}
          </form>

          {/* Quick Suggestions Chips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.85rem', color: '#8a7db3', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Suggested Searches
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {suggestions.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(tag)}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '8px 18px',
                    color: '#eae3ff',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(124, 92, 255, 0.2)';
                    e.currentTarget.style.borderColor = '#7c5cff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchOverlay;
