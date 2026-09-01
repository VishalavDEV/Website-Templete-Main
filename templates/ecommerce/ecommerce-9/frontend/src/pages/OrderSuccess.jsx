import React, { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import { formatINR } from '../services/api';

const OrderSuccess = () => {
  const { lastPlacedOrder } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If no order placed, redirect home
    if (!lastPlacedOrder) {
      navigate('/');
    }
  }, [lastPlacedOrder, navigate]);

  if (!lastPlacedOrder) return null;

  return (
    <PageTransition>
      <div style={{
        padding: '60px 5%',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div className="circuit-bg" />

        {/* ================= CINEMATIC PACKAGE RISING ANIMATION ================= */}
        <div style={{
          position: 'relative',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Backlight halo */}
          <div style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
            boxShadow: '0 0 60px rgba(0, 240, 255, 0.4)',
            zIndex: 0
          }} />

          {/* Package Container */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 15, duration: 0.8 }}
            style={{ position: 'relative', zIndex: 1, width: '100px', height: '100px' }}
          >
            {/* Holographic Box Drawing */}
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.5))' }}>
              <polygon points="50,15 90,32 50,49 10,32" fill="rgba(0, 240, 255, 0.25)" stroke="#00f0ff" strokeWidth="2" />
              <polygon points="10,32 50,49 50,90 10,73" fill="rgba(0, 240, 255, 0.15)" stroke="#00f0ff" strokeWidth="2" />
              <polygon points="90,32 50,49 50,90 90,73" fill="rgba(0, 240, 255, 0.1)" stroke="#00f0ff" strokeWidth="2" />
              
              {/* Particle sparks shooting out */}
              <motion.circle cx="50" cy="15" r="2" fill="#00f0ff" animate={{ y: [-10, -30], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} />
              <motion.circle cx="90" cy="32" r="2" fill="#00f0ff" animate={{ x: [10, 25], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1 }} />
              <motion.circle cx="10" cy="32" r="2" fill="#00f0ff" animate={{ x: [-10, -25], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1 }} />
            </svg>
          </motion.div>
        </div>

        {/* Success headers */}
        <div>
          <h1 className="glow-text-cyan" style={{ fontSize: '32px', fontFamily: 'var(--font-tech)' }}>
            ORDER POWERED UP!
          </h1>
          <p style={{ color: '#fff', fontSize: '15px', marginTop: '10px', fontFamily: 'var(--font-tech)' }}>
            Your technology is on its way.
          </p>
          <p style={{ color: '#64748b', fontSize: '13px', marginTop: '8px', lineHeight: '1.5' }}>
            The order request has been authorized and dispatched to the orbital deployment grid.<br />
            Tracking coordinates generated successfully.
          </p>
        </div>

        {/* Order Info Card */}
        <div className="glass-panel" style={{
          padding: '20px 30px',
          width: '100%',
          maxWidth: '480px',
          borderRadius: '10px',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '13px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#64748b' }}>ORDER CODE:</span>
            <span style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'var(--font-tech)' }}>{lastPlacedOrder.id}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#64748b' }}>TRACKING ID:</span>
            <span style={{ color: '#00f0ff', fontWeight: 'bold', fontFamily: 'var(--font-tech)' }}>{lastPlacedOrder.trackingNumber}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#64748b' }}>FINAL AMOUNT:</span>
            <span style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'var(--font-tech)' }}>{formatINR(lastPlacedOrder.totalAmount)}</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <Link to="/" className="cyber-button">
            SHOWROOM TERMINAL
          </Link>
          <Link to={`/track-order?code=${lastPlacedOrder.id}`} className="cyber-button solid">
            TRACK ORDER
          </Link>
        </div>

      </div>
    </PageTransition>
  );
};

export default OrderSuccess;
