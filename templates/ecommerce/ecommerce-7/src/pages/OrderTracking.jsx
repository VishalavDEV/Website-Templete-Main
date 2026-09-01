import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, Truck, Package, Heart, RefreshCw, Send, CheckCircle } from 'lucide-react';

const OrderTracking = () => {
  const [searchParams] = useSearchParams();
  const queryTrackingNumber = searchParams.get('trackingNumber') || '';

  const [trackingInput, setTrackingInput] = useState(queryTrackingNumber);
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!trackingInput.trim()) return;

    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const response = await api.get(`/orders/track/${trackingInput.trim()}`);
      setShipment(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Shipment tracking details not found. Please verify your tracking number (e.g., PK-xxxxxxxxx).');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Auto trigger tracking if query param is set in URL
  useEffect(() => {
    if (queryTrackingNumber) {
      setTrackingInput(queryTrackingNumber);
      handleTrackSubmit();
    }
  }, [queryTrackingNumber]);

  const stagesList = [
    { key: 'PENDING', name: 'Confirmed', emoji: '🛍️', desc: 'Order confirmed and registered' },
    { key: 'PACKED', name: 'Packed', emoji: '📦', desc: 'Wrapped with love at warehouse' },
    { key: 'SHIPPED', name: 'Shipped', emoji: '✈️', desc: 'Departed sorting facility' },
    { key: 'IN_TRANSIT', name: 'In Transit', emoji: '🚚', desc: 'Riding down the delivery corridor' },
    { key: 'OUT_FOR_DELIVERY', name: 'Out for Delivery', emoji: '🏍️', desc: 'Courier rider is on their way' },
    { key: 'DELIVERED', name: 'Delivered', emoji: '🏠', desc: 'Parcel arrived at your doorstep' }
  ];

  // Helper to check status active index
  const getActiveStageIndex = (status) => {
    if (!status) return 0;
    const index = stagesList.findIndex(stage => stage.key === status.toUpperCase());
    return index !== -1 ? index : 0;
  };

  const activeIndex = shipment ? getActiveStageIndex(shipment.status) : 0;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      
      {/* Title Header */}
      <div className="text-left mb-10">
        <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
          Parcel Radar
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 mt-4 text-gradient">
          Track Your Parcel
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Enter your unique Pink tracking number to follow your parcel's journey through the cosmos.
        </p>
      </div>

      {/* Tracking search form bar */}
      <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3 mb-12">
        <input
          type="text"
          value={trackingInput}
          onChange={(e) => setTrackingInput(e.target.value)}
          placeholder="Enter Tracking ID (e.g. PK-A8F3D129E)"
          className="flex-grow bg-white border border-pink-100 rounded-2xl px-6 py-4 outline-none text-sm text-gray-700 focus:border-pink-300 shadow-sm font-mono tracking-wider"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-2xl shadow-premium hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <RefreshCw size={18} className="animate-spin" />
          ) : (
            <>
              <Search size={18} /> Locate Parcel
            </>
          )}
        </button>
      </form>

      {/* Error display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 text-red-500 font-semibold text-sm p-4 rounded-3xl border border-red-100 shadow-sm text-left mb-8"
        >
          ❌ {error}
        </motion.div>
      )}

      {/* Tracking results display */}
      <AnimatePresence mode="wait">
        {shipment && (
          <motion.div
            key="trackingResults"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-8 text-left"
          >
            
            {/* Quick summary header cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-pink-100 rounded-3xl p-6 shadow-premium">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl"><Truck size={20} /></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Courier Carrier</p>
                  <p className="text-sm font-bold text-gray-700">{shipment.carrier}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl"><Calendar size={20} /></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Estimated Delivery</p>
                  <p className="text-sm font-bold text-gray-700">In 3 business days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl"><MapPin size={20} /></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Current Status</p>
                  <p className="text-sm font-bold text-pink-600 uppercase tracking-widest">{shipment.status}</p>
                </div>
              </div>
            </div>

            {/* Timelines and Animation landscape */}
            <div className="glass-card rounded-[32px] border border-pink-100 p-6 md:p-10 shadow-premium flex flex-col items-center">
              
              {/* Dynamic status illustration */}
              <div className="relative w-full max-w-md h-36 bg-pink-50/50 rounded-2xl border border-pink-100 overflow-hidden mb-12 flex items-center justify-center shadow-inner">
                {/* Hills / road */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-pink-100" />
                <div className="absolute bottom-4 left-0 right-0 h-[1px] border-t border-dashed border-pink-200" />

                {/* Specific active animations depending on stage */}
                {shipment.status === 'PENDING' && (
                  <motion.div animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 2 }} className="text-6xl">🛍️</motion.div>
                )}
                {shipment.status === 'PACKED' && (
                  <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-6xl">📦</motion.div>
                )}
                {shipment.status === 'SHIPPED' && (
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} className="text-6xl">✈️</motion.div>
                )}
                {shipment.status === 'IN_TRANSIT' && (
                  <motion.div animate={{ x: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} className="text-6xl">🚚</motion.div>
                )}
                {shipment.status === 'OUT_FOR_DELIVERY' && (
                  <motion.div animate={{ x: [-20, 20, -20], y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} className="text-6xl animate-drive-slow">🏍️</motion.div>
                )}
                {shipment.status === 'DELIVERED' && (
                  <div className="flex gap-4 items-center">
                    <span className="text-5xl animate-float">🏠</span>
                    <span className="text-4xl animate-bounce">📦</span>
                  </div>
                )}
              </div>

              {/* Step timeline list */}
              <div className="w-full relative pl-8 md:pl-0 md:flex md:justify-between md:items-start">
                
                {/* Horizontal line (desktop) */}
                <div className="absolute top-4 left-0 right-0 h-[2px] bg-pink-100 z-0 hidden md:block" />
                <div 
                  className="absolute top-4 left-0 h-[2px] bg-pink-500 z-0 hidden md:block" 
                  style={{ width: `${(activeIndex / (stagesList.length - 1)) * 100}%` }}
                />

                {/* Vertical line (mobile) */}
                <div className="absolute top-0 bottom-0 left-[14px] w-[2px] bg-pink-100 z-0 md:hidden" />
                <div 
                  className="absolute top-0 left-[14px] w-[2px] bg-pink-500 z-0 md:hidden" 
                  style={{ height: `${(activeIndex / (stagesList.length - 1)) * 100}%` }}
                />

                {stagesList.map((stage, idx) => {
                  const completed = idx <= activeIndex;
                  const current = idx === activeIndex;

                  return (
                    <div key={stage.key} className="flex md:flex-col items-start md:items-center relative z-10 gap-4 md:gap-2 mb-6 md:mb-0 md:w-32 text-left md:text-center">
                      
                      {/* Check dot */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 bg-white transition-all ${
                        current
                          ? 'border-pink-500 text-pink-600 scale-110 shadow-md font-bold'
                          : completed
                          ? 'border-pink-500 text-pink-500 bg-pink-50'
                          : 'border-pink-100 text-gray-300'
                      }`}>
                        {completed && !current ? <CheckCircle size={14} className="text-pink-500" /> : <span>{stage.emoji}</span>}
                      </div>

                      {/* Labels */}
                      <div>
                        <p className={`font-display text-xs font-bold ${
                          current ? 'text-pink-600' : completed ? 'text-gray-700' : 'text-gray-400'
                        }`}>{stage.name}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 leading-tight hidden md:block">{stage.desc}</p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default OrderTracking;
