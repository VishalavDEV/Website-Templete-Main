import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Box, Send, Truck, Heart } from 'lucide-react';

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: 'Browse', icon: <Search size={22} />, desc: 'Explore and discover our unique pink products', emoji: '🛍️' },
    { name: 'Add to Cart', icon: <ShoppingCart size={22} />, desc: 'Lock in your favorites instantly', emoji: '🛒' },
    { name: 'Packing', icon: <Box size={22} />, desc: 'Wrapped with love and care at warehouse', emoji: '📦' },
    { name: 'Shipping', icon: <Send size={22} />, desc: 'Sent flying via express cargo flight', emoji: '✈️' },
    { name: 'In Transit', icon: <Truck size={22} />, desc: 'Riding down the highway on the way to you', emoji: '🚚' },
    { name: 'Delivered', icon: <Heart size={22} />, desc: 'Arrived safe and sound at your door', emoji: '🏠' }
  ];

  // Auto transition steps to show the parcel journey dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mt-4">
            From Click to Doorstep
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-lg mx-auto">
            Watch the magical journey your parcel travels from the second you browse to when it arrives at your home.
          </p>
        </motion.div>

        {/* Step-by-Step Horizontal Timeline Grid */}
        <div className="relative mt-24 mb-12">
          
          {/* Progress Bar Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-pink-100 -translate-y-1/2 z-0 hidden lg:block rounded-full" />
          
          {/* Active progress line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-pink-400 via-rose-500 to-accent-magenta -translate-y-1/2 z-0 hidden lg:block rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Flying Parcel on timeline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="absolute z-20 hidden lg:block text-2xl"
              style={{
                top: '-40px',
                left: `calc(${(activeStep / (steps.length - 1)) * 100}% - 14px)`
              }}
              initial={{ scale: 0, y: -10 }}
              animate={{ scale: [1.2, 1], y: 0 }}
              exit={{ scale: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <span className="animate-bounce inline-block">{steps[activeStep].emoji}</span>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] bg-pink-500 text-white font-bold px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                  On the Way
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isCompleted = idx <= activeStep;
              const isActive = idx === activeStep;

              return (
                <div 
                  key={step.name} 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  
                  {/* Icon Outer Circle */}
                  <motion.div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                      isActive 
                        ? 'bg-gradient-to-tr from-pink-400 to-rose-500 text-white border-transparent shadow-premium scale-110'
                        : isCompleted
                        ? 'bg-pink-100/80 text-pink-600 border-pink-300'
                        : 'bg-white text-gray-400 border-gray-100 hover:border-pink-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Name and Text Details */}
                  <div className="mt-4 text-center">
                    <span className={`font-display text-sm font-bold block ${
                      isActive ? 'text-pink-600' : 'text-gray-700'
                    }`}>
                      {step.name}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 max-w-[150px] mx-auto block leading-tight">
                      {step.desc}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Informative Journey Detail Card */}
        <motion.div
          key={activeStep + "-info"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto glass-card rounded-2xl p-6 border border-pink-100 mt-12 flex flex-col md:flex-row items-center gap-6 shadow-md"
        >
          <div className="text-5xl">{steps[activeStep].emoji}</div>
          <div className="text-left flex-grow">
            <h4 className="font-display font-bold text-gray-800 text-lg">
              Stage {activeStep + 1}: {steps[activeStep].name}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Our {steps[activeStep].name.toLowerCase()} process is fully integrated. {steps[activeStep].desc}. In our universe, your purchases are tracked second-by-second using secure backends.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping" />
            <span className="text-[10px] text-pink-600 font-bold uppercase tracking-widest">
              Live Tracking
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneySection;
