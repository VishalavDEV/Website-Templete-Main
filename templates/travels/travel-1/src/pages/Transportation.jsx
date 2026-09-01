import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Train, Plane, Ship, Compass, ArrowRight, DollarSign, Shield } from 'lucide-react';
import { DrivingCar, MovingTrain, FloatingAirplane, SailingShip } from '../components/animations/FloatingVehicles';

export default function Transportation() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Plane');

  const modes = [
    { 
      name: 'Car', 
      icon: Car, 
      tagline: 'Scenic Highways & Mountain Valleys', 
      desc: 'Rent state-of-the-art electric vehicles, luxury sedans, or rugged SUVs. Perfect for family road trips and self-driven explorations.',
      avgPrice: 85,
      features: ['Unlimited Mileage', 'Full Comprehensive Insurance', 'GPS and Autopilot inclusions']
    },
    { 
      name: 'Train', 
      icon: Train, 
      tagline: 'High-speed scenic railways', 
      desc: 'Ride majestic bullet trains and luxury rail suites. Watch glaciers, forests, and countryside zoom by through panoramic glass windows.',
      avgPrice: 120,
      features: ['Private Sleeping Cabins', 'Fine Dining Car access', 'Lounge check-in stations']
    },
    { 
      name: 'Plane', 
      icon: Plane, 
      tagline: 'Dazzling global flight pathways', 
      desc: 'Book premium airlines, business class suites, or chartered private flights to international landmarks with instant coordinate check-ins.',
      avgPrice: 450,
      features: ['Priority Lounge Access', 'Flat-Bed Sleeper Suites', 'Complimentary Gourmet Dinners']
    },
    { 
      name: 'Ship', 
      icon: Ship, 
      tagline: 'Majestic high-seas ocean cruise lines', 
      desc: 'Sail through deep blue lagoons, islands, and coastlines on ultra-modern mega cruise liners and private yachts.',
      avgPrice: 280,
      features: ['Oceanview Balcony Suites', 'Aqua Park & Theater entry', 'All-inclusive bar credits']
    }
  ];

  const currentMode = modes.find(m => m.name === activeTab);

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Way to Travel</span>
        </h1>
        <p className="text-slate-600 text-sm">
          Select a mode of transportation to expand the environment and view packages.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {modes.map(m => {
          const Icon = m.icon;
          const isSelected = activeTab === m.name;
          return (
            <button
              key={m.name}
              onClick={() => setActiveTab(m.name)}
              className={`p-6 rounded-3xl border text-center flex flex-col items-center space-y-3 transition-all duration-300 ${
                isSelected 
                  ? 'bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-400 shadow-md text-indigo-750' 
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-indigo-650 hover:bg-slate-200'
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? 'bg-indigo-500/20 text-indigo-650' : 'bg-slate-200 text-slate-500'}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-slate-800">{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Expanded Animated Canvas & details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Environment Canvas Box */}
        <div className="lg:col-span-2 relative h-96 bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-end p-8 dark-section">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950 z-0 pointer-events-none" />
          
          {/* Animated clouds in sky backdrop */}
          <div className="absolute top-10 left-10 w-20 h-10 bg-slate-800/20 rounded-full blur-md" />
          <div className="absolute top-20 right-20 w-32 h-14 bg-slate-800/20 rounded-full blur-lg" />

          {/* Trigger active floating vehicle animation */}
          {activeTab === 'Car' && <DrivingCar bottom="80px" speed={6} />}
          {activeTab === 'Train' && <MovingTrain bottom="80px" speed={8} />}
          {activeTab === 'Plane' && <FloatingAirplane top="35%" speed={9} />}
          {activeTab === 'Ship' && <SailingShip bottom="80px" speed={11} />}

          {/* Environmental ground lines */}
          <div className="absolute bottom-16 left-8 right-8 h-0.5 bg-slate-800 rounded-full" />
        </div>

        {/* Telemetry info details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-650 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                Premium Transit
              </span>
              <h2 className="text-3xl font-black text-slate-850">{currentMode.name} Journey</h2>
              <p className="text-slate-650 text-xs leading-relaxed">{currentMode.desc}</p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Perks</h4>
                <div className="space-y-1.5">
                  {currentMode.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-slate-600 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-550" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-slate-500 text-xs">Est. Ticket Cost</span>
                <span className="text-teal-650 font-bold text-lg flex items-center">
                  <DollarSign className="w-5 h-5" />
                  {currentMode.avgPrice} <span className="text-[10px] text-slate-500 font-normal ml-1">/ trip</span>
                </span>
              </div>

              <button
                onClick={() => navigate(`/booking?mode=${currentMode.name}`)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Ticket Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
