import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import ProductImage from '../components/ProductImage';
import { formatINR } from '../services/api';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useContext(AppContext);

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="glow-text" style={{ fontSize: '30px', fontFamily: 'var(--font-tech)' }}>
            YOUR BLUE COLLECTION
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px' }}>
            Flagged electronic nodes stored in local memory core.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {wishlist.length > 0 ? (
            /* Items list */
            <motion.div
              key="wishlist-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '25px'
              }}
            >
              {wishlist.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    filter: 'blur(10px)',
                    transition: { duration: 0.4 }
                  }}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '350px'
                  }}
                >
                  {/* Card top */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-tech)', color: '#00f0ff' }}>{p.brand}</span>
                    <button
                      onClick={() => toggleWishlist(p)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff0055' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Image */}
                  <Link to={`/product/${p.id}`} style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '70%', height: '140px' }}>
                      <ProductImage id={p.id} category={p.category} />
                    </div>
                  </Link>

                  {/* Meta */}
                  <div style={{ marginTop: '10px' }}>
                    <Link to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '14px', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.name}
                      </h3>
                    </Link>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                      <span style={{ fontSize: '16px', fontFamily: 'var(--font-tech)', color: '#fff', fontWeight: 'bold' }}>
                        {formatINR(p.price)}
                      </span>

                      <button
                        onClick={() => addToCart(p)}
                        className="cyber-button solid"
                        style={{
                          padding: '6px 12px',
                          fontSize: '10px',
                          borderRadius: '4px'
                        }}
                      >
                        <ShoppingCart size={10} /> ADD
                      </button>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty state */
            <motion.div
              key="wishlist-empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                border: '1.5px dashed rgba(0, 240, 255, 0.15)',
                borderRadius: '16px',
                textAlign: 'center',
                gap: '20px'
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  color: '#ff0055',
                  filter: 'drop-shadow(0 0 10px rgba(255,0,85,0.4))'
                }}
              >
                <Heart size={48} fill="#ff0055" />
              </motion.div>
              
              <div>
                <h2 style={{ fontSize: '18px', color: '#fff', fontFamily: 'var(--font-tech)' }}>
                  YOUR BLUE COLLECTION IS EMPTY
                </h2>
                <p style={{ color: '#64748b', fontSize: '13px', marginTop: '6px' }}>
                  No coordinates marked. Scan the showroom catalog.
                </p>
              </div>

              <Link to="/products" className="cyber-button solid" style={{ marginTop: '10px' }}>
                BROWSE DEEP CATALOG
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Wishlist;
