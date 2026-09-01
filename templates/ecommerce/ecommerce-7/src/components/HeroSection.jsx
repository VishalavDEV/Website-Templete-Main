import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Heart, Sparkles, Send, Truck } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  // Animations variants
  const cloudVariants = {
    animate1: {
      x: [-50, 400],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear"
        }
      }
    },
    animate2: {
      x: [400, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear"
        }
      }
    }
  };

  const airplaneVariants = {
    animate: {
      x: [-150, 500],
      y: [40, 20, 40],
      scale: [0.8, 1, 0.8],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "easeInOut"
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }
    }
  };

  const bikeVariants = {
    animate: {
      x: [-100, 400],
      y: [0, -2, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        },
        y: {
          repeat: Infinity,
          duration: 0.3,
          ease: "easeInOut"
        }
      }
    }
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  // Sparkles animations
  const sparkleVariants = {
    animate: (i) => ({
      scale: [0.8, 1.3, 0.8],
      opacity: [0.4, 0.9, 0.4],
      rotate: [0, 90, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5 + i * 0.3,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative background grid and soft radial glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-rose-200/20 rounded-full blur-[80px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100/60 backdrop-blur-md px-4 py-2 rounded-full border border-pink-200 w-fit mb-6 shadow-premium">
            <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" />
            <span className="text-xs font-semibold text-pink-700 tracking-wide font-display">
              Welcome to the Delivery Universe
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-800 leading-tight mb-6">
            Your Shopping Journey, <br />
            <span className="text-gradient">Delivered With Love.</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
            Discover products you love. Order in seconds. Watch them make their way to you. Experience shopping like a living, animated world.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-2xl shadow-premium hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0] transition-all group"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2 bg-white/70 backdrop-blur-md border border-pink-200 text-pink-600 font-bold px-8 py-4 rounded-2xl hover:bg-pink-50/50 hover:translate-y-[-2px] active:translate-y-[0] transition-all"
            >
              Start Shopping
              <ShoppingBag size={18} />
            </button>
          </div>

          {/* Social Proof metrics */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-pink-100">
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-gray-800">10k+</p>
              <p className="text-xs text-gray-500 font-medium">Happy Deliveries</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-gray-800">4.9★</p>
              <p className="text-xs text-gray-500 font-medium">Customer Reviews</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-gray-800">15 Min</p>
              <p className="text-xs text-gray-500 font-medium">Average Packing Time</p>
            </div>
          </div>

        </motion.div>

        {/* Right Animated Scene Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative glass-card rounded-[32px] p-6 h-[350px] md:h-[450px] w-full border border-pink-200/50 shadow-premium overflow-hidden"
        >
          {/* 1. Clouds moving in background */}
          <motion.div 
            variants={cloudVariants}
            animate="animate1"
            className="absolute top-10 left-0 text-white/50 opacity-40 select-none pointer-events-none"
          >
            ☁️
          </motion.div>
          <motion.div 
            variants={cloudVariants}
            animate="animate2"
            className="absolute top-24 left-20 text-white/50 opacity-30 select-none pointer-events-none text-2xl"
          >
            ☁️
          </motion.div>
          <motion.div 
            variants={cloudVariants}
            animate="animate1"
            className="absolute top-6 right-24 text-white/50 opacity-50 select-none pointer-events-none text-xl"
          >
            ☁️
          </motion.div>

          {/* 2. Airplane flying across top background */}
          <motion.div
            variants={airplaneVariants}
            animate="animate"
            className="absolute top-6 left-0 text-3xl select-none pointer-events-none"
          >
            ✈️
          </motion.div>

          {/* 3. Landscape background elements (Road and Hills) */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-pink-100 to-pink-50/20 -z-10" />
          <div className="absolute bottom-12 left-0 right-0 h-[2px] bg-pink-200/80 dashed border-t border-dashed border-pink-300" />
          
          {/* 4. Bike rider crossing path */}
          <motion.div
            variants={bikeVariants}
            animate="animate"
            className="absolute bottom-10 left-0 text-4xl select-none pointer-events-none"
          >
            🏍️
          </motion.div>

          {/* 5. Standing Delivery Man carrying a parcel */}
          <div className="absolute bottom-10 right-10 flex flex-col items-center">
            {/* Package floating/bouncing above delivery man */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="bg-white px-3 py-1.5 rounded-full border border-pink-200 shadow-premium flex items-center gap-1 mb-2 text-xs font-bold text-pink-600"
            >
              📦 For You
            </motion.div>
            <motion.div 
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-6xl md:text-7xl select-none pointer-events-none"
            >
              🧑‍✈️
            </motion.div>
          </div>

          {/* 6. Floating Shopping / Product Icons */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-16 right-16 bg-white p-3 rounded-full border border-pink-100 shadow-premium text-pink-500"
          >
            🛍️
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-40 left-12 bg-white p-3 rounded-full border border-pink-100 shadow-premium text-pink-500"
          >
            💄
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            className="absolute top-44 right-44 bg-white p-3 rounded-full border border-pink-100 shadow-premium text-pink-500"
          >
            🎧
          </motion.div>

          {/* 7. Floating Heart and Sparkles */}
          <motion.div
            variants={heartVariants}
            animate="animate"
            className="absolute bottom-32 right-36 text-rose-500 text-lg select-none"
          >
            💗
          </motion.div>
          
          <motion.div
            variants={heartVariants}
            animate="animate"
            className="absolute top-28 left-48 text-rose-400 text-sm select-none"
          >
            🌸
          </motion.div>

          <motion.div
            custom={1}
            variants={sparkleVariants}
            animate="animate"
            className="absolute top-12 left-1/3 text-yellow-400 text-sm"
          >
            ✨
          </motion.div>

          <motion.div
            custom={2}
            variants={sparkleVariants}
            animate="animate"
            className="absolute bottom-20 left-1/4 text-yellow-400 text-lg"
          >
            ✨
          </motion.div>

          <motion.div
            custom={3}
            variants={sparkleVariants}
            animate="animate"
            className="absolute top-32 right-12 text-yellow-400 text-sm"
          >
            ✨
          </motion.div>

          {/* Parabolic parcel arc flying from center */}
          <motion.div
            animate={{
              x: [100, 220],
              y: [200, 100, 160],
              opacity: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute text-xl pointer-events-none select-none"
          >
            📦
          </motion.div>

          {/* Curved track lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-pink-200/40 fill-none stroke-[2px] stroke-dasharray-[5,5] -z-10">
            <path d="M50,150 Q150,50 250,150 T450,150" />
            <path d="M100,200 Q200,100 300,200 T500,200" />
          </svg>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;
