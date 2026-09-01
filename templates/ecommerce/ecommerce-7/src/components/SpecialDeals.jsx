import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';

const SpecialDeals = () => {
  const navigate = useNavigate();

  // Countdown timer calculation
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const padZero = (num) => {
    return String(num).padStart(2, '0');
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden relative">
      
      {/* 1. Airplane carrying a banner flying continuously in background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['-200px', '1200px'],
            y: [50, 80, 50]
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear"
          }}
          className="absolute flex items-center gap-1 select-none opacity-35"
        >
          {/* Airplane */}
          <span className="text-3xl">✈️</span>
          {/* Banner message */}
          <div className="bg-pink-500 text-white font-bold text-[10px] tracking-wider px-3 py-1 rounded-full border border-pink-400 uppercase shadow-md flex items-center gap-1">
            <span>Special Deal: 20% OFF Headphones</span>
            <span className="animate-ping w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 glass-card rounded-[36px] border border-pink-200/50 p-8 md:p-12 shadow-premium bg-gradient-to-tr from-white/70 via-pink-100/30 to-rose-100/30">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Details column */}
          <div className="text-left flex flex-col">
            
            <div className="inline-flex items-center gap-2 bg-rose-100/80 px-4 py-2 rounded-full border border-rose-200 w-fit mb-6 shadow-sm">
              <Tag size={14} className="text-rose-500 fill-rose-100" />
              <span className="text-xs font-semibold text-rose-700 font-display tracking-wider uppercase">
                Flash Offer Flying In
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 leading-tight">
              Deals Flying Your Way
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Grab our featured top-rated item before the flight leaves! Limited quantity available in the warehouse.
            </p>

            {/* Countdown timer */}
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-pink-100 shadow-md flex items-center justify-center font-display font-bold text-2xl text-pink-600">
                  {padZero(timeLeft.hours || 0)}
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-2">Hours</span>
              </div>
              <div className="text-pink-300 text-3xl font-display font-bold self-center -translate-y-2">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-pink-100 shadow-md flex items-center justify-center font-display font-bold text-2xl text-pink-600">
                  {padZero(timeLeft.minutes || 0)}
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-2">Mins</span>
              </div>
              <div className="text-pink-300 text-3xl font-display font-bold self-center -translate-y-2">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-pink-100 shadow-md flex items-center justify-center font-display font-bold text-2xl text-pink-600">
                  {padZero(timeLeft.seconds || 0)}
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-2">Secs</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate('/shop?sortBy=discount_desc')}
              className="mt-10 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 w-fit hover:shadow-premium transition-all group"
            >
              Shop Deals Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Right Product Spotlight card column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card border border-white p-6 rounded-[30px] shadow-lg flex flex-col md:flex-row items-center gap-6"
          >
            
            {/* Promo Tag */}
            <div className="absolute top-4 left-4 bg-gradient-to-tr from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-premium z-20 flex items-center gap-1">
              <Sparkles size={12} /> Save 20%
            </div>

            {/* Product Image */}
            <div className="w-44 h-44 rounded-2xl overflow-hidden bg-white shadow-md flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=60" 
                alt="Spotlight product"
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Product description details */}
            <div className="text-left flex-grow">
              <span className="text-xs text-pink-500 font-semibold tracking-wide block uppercase font-display">
                Featured Spotlight
              </span>
              <h3 className="font-display font-bold text-gray-800 text-xl mt-1 leading-snug">
                Pink Soundscape ANC Headphones
              </h3>
              <p className="text-xs text-gray-400 mt-1 max-w-[220px]">
                Wireless over-ear headphones with premium active noise cancellation.
              </p>

              {/* Price details */}
              <div className="flex items-center gap-3 mt-4">
                <span className="font-display font-bold text-2xl text-pink-600">
                  ₹7,199.00
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹8,999.00
                </span>
              </div>

              <button
                onClick={() => navigate('/shop')}
                className="mt-4 bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                View Product Details
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SpecialDeals;
