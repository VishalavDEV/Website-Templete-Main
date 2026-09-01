import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingBag, Heart, ShieldAlert, Cpu, Settings } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import { formatINR } from '../services/api';

const Profile = () => {
  const { wishlist, lastPlacedOrder } = useContext(AppContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('DASHBOARD');

  // Simulated orders history
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const historical = [
      { id: 'BC-992811', date: '2026-08-10', total: 29999.00, status: 'DELIVERED', trackingNumber: 'TRK99281100' },
      { id: 'BC-881765', date: '2026-07-28', total: 119999.00, status: 'DELIVERED', trackingNumber: 'TRK88176500' }
    ];

    if (lastPlacedOrder) {
      setOrders([lastPlacedOrder, ...historical]);
    } else {
      setOrders(historical);
    }
  }, [lastPlacedOrder]);

  const handleTrackClick = (id) => {
    navigate(`/track-order?code=${id}`);
  };

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* LEFT SIDEBAR CONTROLS */}
          <div className="glass-panel" style={{
            flex: '1 1 250px',
            padding: '25px',
            borderRadius: '12px',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(0, 240, 255, 0.15)' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1.5px solid #00f0ff',
                boxShadow: '0 0 10px rgba(0, 240, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f0ff',
                fontSize: '22px'
              }}>
                ⚡
              </div>
              <div>
                <h3 style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-tech)' }}>NEO V</h3>
                <span style={{ fontSize: '10px', color: '#64748b', fontFamily: 'var(--font-tech)' }}>LEVEL 5 USER</span>
              </div>
            </div>

            {/* Menu buttons */}
            {[
              { id: 'DASHBOARD', label: 'MY DASHBOARD', icon: <Cpu size={14} /> },
              { id: 'ORDERS', label: 'ORDERS TELEMETRY', icon: <ShoppingBag size={14} /> },
              { id: 'WISHLIST', label: 'MARKED NODES', icon: <Heart size={14} /> },
              { id: 'SETTINGS', label: 'PORT SYSTEM', icon: <Settings size={14} /> }
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: active ? '#00f0ff' : '#94a3b8',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '12px',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    backgroundColor: active ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s'
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT VIEW PANEL */}
          <div style={{ flex: '1 1 700px' }}>
            <AnimatePresence mode="wait">
              {/* DASHBOARD TAB */}
              {activeTab === 'DASHBOARD' && (
                <motion.div
                  key="dashboard-tab"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                >
                  <div className="glass-panel hologram-effect" style={{
                    padding: '30px',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(0, 240, 255, 0.25)',
                    position: 'relative'
                  }}>
                    <h2 style={{ fontSize: '18px', color: '#fff', fontFamily: 'var(--font-tech)' }}>
                      WELCOME COMMANDER, NEO V
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px', lineHeight: '1.5' }}>
                      Showroom cockpit online. All diagnostic sensors reporting normal operation. You have {wishlist.length} saved product nodes and {orders.length} registered orders.
                    </p>
                  </div>

                  {/* Summary grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px' }}>
                      <span style={{ fontSize: '10px', color: '#64748b', fontFamily: 'var(--font-tech)' }}>ORDER LOGS ACTIVE</span>
                      <div style={{ fontSize: '28px', fontFamily: 'var(--font-tech)', color: '#00f0ff', margin: '10px 0' }}>{orders.length}</div>
                      <button onClick={() => setActiveTab('ORDERS')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', fontFamily: 'var(--font-tech)' }}>
                        VIEW LOGS →
                      </button>
                    </div>

                    <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px' }}>
                      <span style={{ fontSize: '10px', color: '#64748b', fontFamily: 'var(--font-tech)' }}>WISHLISTED PRODUCTS</span>
                      <div style={{ fontSize: '28px', fontFamily: 'var(--font-tech)', color: '#00f0ff', margin: '10px 0' }}>{wishlist.length}</div>
                      <button onClick={() => navigate('/wishlist')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', fontFamily: 'var(--font-tech)' }}>
                        OPEN BOARD →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ORDERS TAB */}
              {activeTab === 'ORDERS' && (
                <motion.div
                  key="orders-tab"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h2 style={{ fontSize: '16px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>ORDERS HISTORY LOGS</h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {orders.map((o) => (
                      <div key={o.id} className="glass-panel" style={{
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '15px'
                      }}>
                        <div>
                          <div style={{ fontSize: '14px', fontFamily: 'var(--font-tech)', color: '#fff' }}>{o.id}</div>
                          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Dispatched: {o.createdAt || o.date}</div>
                        </div>

                        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                          <div>
                            <span style={{ fontSize: '10px', color: '#64748b' }}>AMOUNT</span>
                            <div style={{ fontSize: '14px', fontFamily: 'var(--font-tech)', color: '#fff', fontWeight: 'bold' }}>
                              {formatINR(o.totalAmount ? o.totalAmount : o.total)}
                            </div>
                          </div>

                          <div>
                            <span style={{ fontSize: '10px', color: '#64748b' }}>STATUS</span>
                            <div style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', color: o.status === 'DELIVERED' ? '#10b981' : '#00f0ff', fontWeight: 'bold' }}>
                              {o.status}
                            </div>
                          </div>

                          <button onClick={() => handleTrackClick(o.id)} className="cyber-button" style={{ padding: '6px 12px', fontSize: '9px', borderRadius: '4px' }}>
                            TRACK
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* WISHLIST TAB */}
              {activeTab === 'WISHLIST' && (
                <motion.div
                  key="wishlist-tab"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h2 style={{ fontSize: '16px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>FLAGGED CHANNELS ({wishlist.length})</h2>
                  {wishlist.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                      {wishlist.map(p => (
                        <div key={p.id} className="glass-panel" style={{ padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                          <h4 style={{ fontSize: '12px', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</h4>
                          <span style={{ fontSize: '13px', color: '#00f0ff', display: 'block', marginTop: '6px' }}>{formatINR(p.price)}</span>
                          <button onClick={() => navigate(`/product/${p.id}`)} className="cyber-button" style={{ width: '100%', padding: '6px 0', fontSize: '9px', marginTop: '12px', justifyContent: 'center' }}>
                            OPEN NODE
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: '#64748b', fontSize: '13px' }}>No marked coordinates found.</p>
                  )}
                </motion.div>
              )}

              {/* SETTINGS TAB */}
              {activeTab === 'SETTINGS' && (
                <motion.div
                  key="settings-tab"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="glass-panel"
                  style={{ padding: '25px', borderRadius: '10px' }}
                >
                  <h3 style={{ fontSize: '14px', color: '#00f0ff', fontFamily: 'var(--font-tech)', marginBottom: '15px' }}>PREFERENCES & CONFIG</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Holographic Grid Scanlines</span>
                      <div className="led-blinker" style={{ backgroundColor: '#10b981' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>System Audio Syncing</span>
                      <span style={{ color: '#64748b' }}>MUTED</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Diagnostic Verbose Level</span>
                      <span style={{ color: '#00f0ff' }}>LEVEL 3</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Profile;
