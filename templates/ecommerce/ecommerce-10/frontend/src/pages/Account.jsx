import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingBag, Heart, MapPin, Settings, LogOut, CheckCircle, RefreshCw, Clock } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const Account = () => {
  const { user, orders, logout, fetchOrders, wishlist } = useContext(EcomContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders'); // orders | profile | settings
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleRefreshOrders = async () => {
    setRefreshing(true);
    await fetchOrders();
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  };

  // Status mapping to step index
  const statusStepIndex = (status) => {
    switch (status) {
      case 'Placed': return 0;
      case 'Confirmed': return 1;
      case 'Packed': return 2;
      case 'Shipped': return 3;
      case 'Delivered': return 4;
      default: return 0;
    }
  };

  const trackingSteps = [
    { label: 'Placed', desc: 'Order placed successfully' },
    { label: 'Confirmed', desc: 'Payment verified & confirmed' },
    { label: 'Packed', desc: 'Items packaged in lavender box' },
    { label: 'Shipped', desc: 'Package left sorting facility' },
    { label: 'Delivered', desc: 'Delivered at door step' },
  ];

  if (!user) return null;

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1200px', margin: '0 auto', minHeight: '85vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px' }} className="account-grid">
        
        {/* Sidebar Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* User profile avatar info */}
          <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.12)', borderRadius: '24px', padding: '24px', textAlign: 'center', boxShadow: '0 8px 24px rgba(124,92,255,0.03)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f1edff', border: '2.5px solid #7c5cff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', color: '#7c5cff' }}>
              <User size={36} />
            </div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', color: '#1e133e', fontWeight: 700 }}>
              {user.name}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#8a7db3' }}>{user.email}</span>
          </div>

          {/* Nav buttons links */}
          <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.12)', borderRadius: '24px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: '0 8px 24px rgba(124,92,255,0.03)' }}>
            {[
              { id: 'orders', label: 'My Orders', icon: <ShoppingBag size={18} /> },
              { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
              { id: 'wishlist', label: 'Wishlist', icon: <Heart size={18} />, action: () => navigate('/wishlist') },
              { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={tab.action ? tab.action : () => { setActiveTab(tab.id); setSelectedOrder(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: activeTab === tab.id && !tab.action ? '#f1edff' : 'transparent',
                  color: activeTab === tab.id && !tab.action ? '#7c5cff' : '#5c4e8c',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id || tab.action) {
                    e.currentTarget.style.backgroundColor = 'rgba(124,92,255,0.03)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id || tab.action) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}

            {/* Logout button */}
            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 18px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: 'transparent',
                color: '#ff4d4d',
                transition: 'all 0.2s',
                textAlign: 'left',
                marginTop: '10px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffcbc130'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* Details Dashboard Content Area */}
        <div style={{ backgroundColor: '#fff', border: '1px solid rgba(124,92,255,0.12)', borderRadius: '24px', padding: '36px', boxShadow: '0 8px 24px rgba(124,92,255,0.03)', minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            
            {activeTab === 'orders' && !selectedOrder && (
              <motion.div key="ordersList" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: '#1e133e' }}>Order History</h3>
                  <button
                    onClick={handleRefreshOrders}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: '#7c5cff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    <RefreshCw size={14} className={refreshing ? 'spin-anim' : ''} /> Refresh Status
                  </button>
                </div>

                {orders.length === 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 0', gap: '12px' }}>
                    <ShoppingBag size={48} style={{ color: '#eae3ff' }} />
                    <p style={{ color: '#8a7db3', fontSize: '0.9rem' }}>You haven't placed any orders yet.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {orders.map((ord) => (
                      <div
                        key={ord.id}
                        onClick={() => setSelectedOrder(ord)}
                        style={{
                          padding: '20px',
                          borderRadius: '16px',
                          border: '1.5px solid rgba(124,92,255,0.08)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#7c5cff'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(124,92,255,0.08)'}
                      >
                        <div>
                          <span style={{ fontSize: '0.8rem', color: '#8a7db3' }}>ID: {ord.id}</span>
                          <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600, marginTop: '4px' }}>
                            Placed on {ord.date.split(' ')[0]}
                          </h4>
                          <div style={{ display: 'flex', gap: '10px', marginTop: '6px', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#f1edff', padding: '2px 8px', borderRadius: '10px', color: '#7c5cff', fontWeight: 600 }}>
                              Status: {ord.status}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#8a7db3' }}>
                              {ord.items.length} items
                            </span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e133e' }}>
                            ₹{ord.total.toFixed(0)}
                          </span>
                          <span style={{ display: 'block', fontSize: '0.75rem', color: '#7c5cff', marginTop: '4px', textDecoration: 'underline' }}>
                            View Details
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Order Details with Animated timeline */}
            {activeTab === 'orders' && selectedOrder && (
              <motion.div key="orderDetails" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <button
                  onClick={() => setSelectedOrder(null)}
                  style={{ background: 'none', border: 'none', color: '#7c5cff', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px', textDecoration: 'underline' }}
                >
                  &larr; Back to List
                </button>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid rgba(124, 92, 255, 0.08)', paddingBottom: '20px', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Outfit', fontSize: '1.35rem', color: '#1e133e' }}>
                      Order ID: {selectedOrder.id}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#8a7db3' }}>Date Placed: {selectedOrder.date}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#7c5cff' }}>
                      ₹{selectedOrder.total.toFixed(0)}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#8a7db3', marginTop: '2px' }}>Paid via {selectedOrder.paymentMethod}</span>
                  </div>
                </div>

                {/* Animated tracking timeline */}
                <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600, marginBottom: '20px' }}>Delivery Tracker</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', padding: '0 10px', marginBottom: '40px' }} className="timeline-container">
                  
                  {/* Timeline bar line */}
                  <div style={{ position: 'absolute', top: '15px', left: '20px', right: '20px', height: '3px', backgroundColor: '#e9e6f2', zIndex: 1 }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '20px',
                      width: `${(statusStepIndex(selectedOrder.status) / 4) * 100}%`,
                      height: '3px',
                      backgroundColor: '#7c5cff',
                      zIndex: 2,
                      transition: 'width 0.5s ease',
                      boxShadow: '0 0 10px rgba(124,92,255,0.4)',
                    }}
                  />

                  {trackingSteps.map((step, idx) => {
                    const isActive = statusStepIndex(selectedOrder.status) >= idx;
                    const isCurrent = statusStepIndex(selectedOrder.status) === idx;
                    return (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3, position: 'relative', flex: 1, textAlign: 'center' }}>
                        <motion.div
                          animate={isCurrent ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 2 }}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: isActive ? '#7c5cff' : '#fff',
                            border: '2.5px solid',
                            borderColor: isActive ? '#7c5cff' : '#e9e6f2',
                            color: isActive ? '#fff' : '#8a7db3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: isCurrent ? '0 0 15px rgba(124,92,255,0.6)' : 'none',
                          }}
                        >
                          {isActive ? <CheckCircle size={16} /> : <Clock size={16} />}
                        </motion.div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: isActive ? '#7c5cff' : '#8a7db3', marginTop: '8px' }}>
                          {step.label}
                        </span>
                        <span style={{ fontSize: '0.65rem', color: '#8a7db3', marginTop: '2px', display: 'none' }} className="timeline-desc">
                          {step.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Items summary */}
                <h4 style={{ fontSize: '0.95rem', color: '#1e133e', fontWeight: 600, marginBottom: '14px' }}>Items</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '14px', padding: '12px', border: '1px solid rgba(124,92,255,0.05)', borderRadius: '12px' }}>
                      <img src={item.product.image} alt={item.product.name} style={{ width: '48px', height: '54px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h5 style={{ fontSize: '0.85rem', color: '#1e133e', fontWeight: 600 }}>{item.product.name}</h5>
                        <span style={{ fontSize: '0.75rem', color: '#8a7db3', marginTop: '2px' }}>
                          Qty: {item.quantity} | Size: {item.size} | Color: {item.color}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: '#1e133e', marginBottom: '24px' }}>My Profile Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#8a7db3' }}>Full Name</span>
                    <strong style={{ fontSize: '1rem', color: '#1e133e' }}>{user.name}</strong>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#8a7db3' }}>Email Address</span>
                    <strong style={{ fontSize: '1rem', color: '#1e133e' }}>{user.email}</strong>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#8a7db3' }}>Phone Number</span>
                    <strong style={{ fontSize: '1rem', color: '#1e133e' }}>{user.phone}</strong>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', color: '#1e133e', marginBottom: '24px' }}>Settings</h3>
                <p style={{ color: '#8a7db3', fontSize: '0.9rem' }}>Manage your address directories and newsletter preferences.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#5c4e8c' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: '#7c5cff' }} /> Enable dynamic visual email updates
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#5c4e8c' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: '#7c5cff' }} /> Opt-in to early sales access
                  </label>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @keyframes spin-keyframes {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin-anim {
          animation: spin-keyframes 1s linear infinite;
        }
        @media (max-width: 768px) {
          .account-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-desc {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Account;
