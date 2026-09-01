import React, { useState } from 'react';
import { Ship, Truck, Plane, ClipboardList, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuoteForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [shipmentType, setShipmentType] = useState('road');
  const [trackingNumber, setTrackingNumber] = useState('');

  const shipmentOptions = [
    { value: 'road', label: 'Road Transport', icon: Truck },
    { value: 'ocean', label: 'Ocean Freight', icon: Ship },
    { value: 'air', label: 'Air Freight', icon: Plane },
    { value: 'warehouse', label: 'Warehousing / Storage', icon: ClipboardList },
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    alert(`Estimating quote from: ${origin || 'Anywhere'} to ${destination || 'Anywhere'} for ${shipmentType}`);
  };

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Tracking shipment number: ${trackingNumber}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-8 relative z-20"
    >
      {/* Tab 1: Instant Quote Estimator */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <ClipboardList className="w-5 h-5 text-accent" />
          <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800">
            Instant Quote Estimator
          </h3>
        </div>
        
        <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="origin-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Origin City / Port</label>
            <input
              id="origin-input"
              type="text"
              required
              placeholder="e.g. Los Angeles, USA"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="dest-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination City / Port</label>
            <input
              id="dest-input"
              type="text"
              required
              placeholder="e.g. Rotterdam, Netherlands"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div className="sm:col-span-2 space-y-1">
            <label htmlFor="freight-select" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Shipment Mode</label>
            <select
              id="freight-select"
              value={shipmentType}
              onChange={(e) => setShipmentType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:outline-none transition-colors cursor-pointer"
            >
              {shipmentOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#E05E00' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-accent/10"
            >
              <span>Calculate Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </form>
      </div>

      {/* Vertical separator */}
      <div className="hidden lg:block w-px bg-slate-100 self-stretch" />

      {/* Tab 2: Track Consignment */}
      <div className="lg:w-[320px] flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Truck className="w-5 h-5 text-primary" />
            <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800">
              Track Consignment
            </h3>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mt-4">
            Enter your 10-digit tracking or bill of lading code to check the live transit status of your cargo containers.
          </p>
        </div>

        <form onSubmit={handleTrack} className="space-y-4 pt-2">
          <div className="space-y-1">
            <label htmlFor="track-number-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tracking Number</label>
            <input
              id="track-number-input"
              type="text"
              required
              placeholder="e.g. TRK-48192-X"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary hover:bg-primary-light text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Live Tracking</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
