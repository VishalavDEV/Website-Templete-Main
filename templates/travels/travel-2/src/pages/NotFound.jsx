import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, AlertOctagon, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-850 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute w-[50vw] h-[50vw] bg-[#ff2a74]/5 rounded-full blur-3xl" />

      {/* Lost flight animation */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-5, 10, -5]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut'
        }}
        className="relative p-6 bg-white border border-stone-200 rounded-full mb-8 shadow-md"
      >
        <Plane size={64} className="text-[#ff2a74] transform -rotate-45" />
        <div className="absolute -top-1 -right-1 p-2 bg-[#ff2a74] rounded-full text-white animate-bounce">
          <AlertOctagon size={16} />
        </div>
      </motion.div>

      {/* Message Info */}
      <div className="text-center max-w-sm relative z-10">
        <h1 className="text-6xl md:text-7xl font-heading font-black text-stone-850 tracking-tight leading-none">
          404
        </h1>
        <h3 className="font-heading font-extrabold text-lg text-stone-800 uppercase tracking-widest mt-3">
          Flight Off Course
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed font-medium mt-3">
          The corridor path you are looking for has either expired or been rerouted to another global terminal. Let's steer you back.
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-95 text-white text-xs font-bold rounded-2xl shadow-lg inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-103"
        >
          <ArrowLeft size={14} />
          <span>Reroute to Home</span>
        </button>
      </div>

    </div>
  );
}
