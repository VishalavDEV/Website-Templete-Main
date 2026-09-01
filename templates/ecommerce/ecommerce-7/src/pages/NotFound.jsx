import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-white border border-pink-100 rounded-[32px] p-8 md:p-12 max-w-md shadow-premium"
      >
        <div className="w-20 h-20 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-pink-100/50">
          <Compass size={40} className="animate-spin-slow" />
        </div>
        
        <h1 className="text-6xl font-display font-extrabold text-pink-500">404</h1>
        <h2 className="text-xl font-display font-bold text-gray-800 mt-4">Lost in the Universe</h2>
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          The parcel coordinate you specified does not exist in our hangar. It might have drifted off course or been delivered to another quadrant.
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-8 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 rounded-2xl shadow-premium hover:shadow-lg transition-all flex items-center justify-center gap-2 text-xs"
        >
          <ArrowLeft size={16} /> Take Me Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
