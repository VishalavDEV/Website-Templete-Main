import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { fetchOrder, fetchOrderByTracking } from '../services/api';
import PageTransition from '../components/PageTransition';

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const [orderCode, setOrderCode] = useState(searchParams.get('code') || '');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Poll server for updates if order is found
  useEffect(() => {
    if (!order) return;

    // Stop polling if already delivered
    if (order.status === 'DELIVERED') return;

    const interval = setInterval(async () => {
      try {
        const updated = await fetchOrder(order.id);
        setOrder(updated);
      } catch (err) {
        console.error('Polling sync error', err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [order]);

  // Initial trigger if query param present
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      handleTrackSubmit(null, code);
    }
  }, [searchParams]);

  const handleTrackSubmit = async (e, codeOverride = null) => {
    if (e) e.preventDefault();
    const code = codeOverride || orderCode;
    if (!code.trim()) return;

    setLoading(true);
    setError(false);
    setOrder(null);

    try {
      let data;
      if (code.startsWith('BC-')) {
        data = await fetchOrder(code);
      } else {
        data = await fetchOrderByTracking(code);
      }
      setOrder(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const stages = [
    { key: 'ORDER CONFIRMED', label: 'CONFIRMED', desc: 'Dispatched to orbital launchpad' },
    { key: 'PACKED', label: 'PACKED', desc: 'Secure thermal shell sealed' },
    { key: 'SHIPPED', label: 'SHIPPED', desc: 'Warp transit hyper-lane entry' },
    { key: 'OUT FOR DELIVERY', label: 'OUT FOR DELIVERY', desc: 'Atmospheric drop pod entry sequence' },
    { key: 'DELIVERED', label: 'DELIVERED', desc: 'Payload landing terminal secure' }
  ];

  const getStageIndex = (status) => {
    return stages.findIndex(s => s.key === status);
  };

  const currentStageIdx = order ? getStageIndex(order.status) : -1;

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="glow-text" style={{ fontSize: '30px', fontFamily: 'var(--font-tech)' }}>
            ORBITAL DELIVERY TRACKER
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px' }}>
            Query order coordinate telemetry in real-time.
          </p>
        </div>

        {/* Search tracker form */}
        <div className="glass-panel" style={{ padding: '20px 25px', borderRadius: '10px', marginBottom: '40px' }}>
          <form onSubmit={handleTrackSubmit} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1 1 300px' }}>
              <input
                type="text"
                placeholder="ENTER ORDER CODE (e.g. BC-123456) OR TRACKING ID..."
                value={orderCode}
                onChange={(e) => setOrderCode(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 45px',
                  backgroundColor: 'rgba(3, 7, 18, 0.7)',
                  border: '1.5px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '6px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '13px',
                  fontFamily: 'var(--font-tech)',
                  letterSpacing: '0.05em'
                }}
              />
              <Compass size={18} color="#00f0ff" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            <button type="submit" disabled={loading} className="cyber-button solid" style={{ padding: '0 30px' }}>
              {loading ? 'SYNCING...' : 'PING NODE'}
            </button>
          </form>
        </div>

        {/* Tracking Render output */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <div className="led-blinker" style={{ width: '16px', height: '16px' }} />
          </div>
        )}

        {error && (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            border: '1px dashed rgba(255, 0, 85, 0.3)',
            borderRadius: '10px'
          }}>
            <h3 style={{ color: '#ff0055', fontFamily: 'var(--font-tech)', fontSize: '15px' }}>PING ERROR: COORDINATES OFFLINE</h3>
            <p style={{ color: '#64748b', fontSize: '13px', marginTop: '6px' }}>
              Order code or tracking ID not verified on this showroom console. Re-enter parameters.
            </p>
          </div>
        )}

        {order && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* 1. Track Stepper route */}
            <div className="glass-panel" style={{
              padding: '40px 30px',
              borderRadius: '12px',
              border: '1.5px solid rgba(0, 240, 255, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Scanline backdrop */}
              <div className="scanlines" style={{ opacity: 0.1 }} />

              {/* HUD detail */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-tech)', color: '#00f0ff', marginBottom: '30px' }}>
                <span>STATUS: {order.status}</span>
                <span>TIME ELAPSED: AUTO REFRESH ACTIVE</span>
              </div>

              {/* Progress Line */}
              <div style={{ position: 'relative', margin: '40px 0', minHeight: '120px' }}>
                {/* Horizontal Path */}
                <div style={{
                  position: 'absolute',
                  left: '5%',
                  top: '25px',
                  width: '90%',
                  height: '4px',
                  backgroundColor: 'rgba(0, 240, 255, 0.1)',
                  zIndex: 0
                }} />

                {/* Glowing completed path */}
                <div style={{
                  position: 'absolute',
                  left: '5%',
                  top: '25px',
                  width: `${currentStageIdx === -1 ? 0 : (currentStageIdx / (stages.length - 1)) * 90}%`,
                  height: '4px',
                  backgroundColor: '#00f0ff',
                  boxShadow: '0 0 10px #00f0ff',
                  zIndex: 1,
                  transition: 'width 0.8s ease'
                }} />

                {/* Animated Vehicle / Drop pod icon tracking */}
                {currentStageIdx >= 0 && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: `calc(5% + ${currentStageIdx === -1 ? 0 : (currentStageIdx / (stages.length - 1)) * 90}% - 15px)`,
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#030712',
                      border: '1.5px solid #00f0ff',
                      borderRadius: '50%',
                      boxShadow: '0 0 15px #00f0ff',
                      color: '#00f0ff',
                      zIndex: 3,
                      transition: 'left 0.8s ease'
                    }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    🛸
                  </motion.div>
                )}

                {/* Stage node circles */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 5%'
                }}>
                  {stages.map((s, idx) => {
                    const isPassed = idx <= currentStageIdx;
                    return (
                      <div key={idx} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
                        width: '16%'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: isPassed ? '#030712' : '#1e293b',
                          border: isPassed ? '2.5px solid #00f0ff' : '2.5px solid rgba(0, 240, 255, 0.15)',
                          boxShadow: isPassed ? '0 0 8px rgba(0, 240, 255, 0.5)' : 'none',
                          zIndex: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isPassed ? '#00f0ff' : '#64748b',
                          transition: 'all 0.4s'
                        }}>
                          {isPassed && <CheckCircle2 size={12} />}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{
                            fontSize: '9px',
                            fontFamily: 'var(--font-tech)',
                            color: isPassed ? '#00f0ff' : '#64748b',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em'
                          }}>
                            {s.label}
                          </div>
                          <div style={{ fontSize: '8px', color: '#64748b', marginTop: '4px', lineHeight: '1.2' }}>{s.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Order summary details */}
            <div className="glass-panel" style={{ padding: '25px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: '#00f0ff', marginBottom: '15px' }}>
                PAYLOAD SUMMARY FOR {order.customerName.toUpperCase()}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>SHIPPING COORDINATES:</span>
                  <span>{order.shippingAddress}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>TRANSMITTED STAGE:</span>
                  <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>{order.status}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>ITEMS TRANSITING:</span>
                  <span>{order.items.length} unique item node(s)</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};

export default TrackOrder;
