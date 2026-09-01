import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121316] text-[#f8f7f4] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="font-mono text-xs text-lime-400 uppercase tracking-[0.4em] mb-4">
        ERROR // CODE 404
      </div>

      <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black uppercase text-white tracking-tighter">
        404
      </h1>

      <h2 className="text-xl sm:text-3xl font-serif font-bold text-gray-300 uppercase mt-2">
        PAGE NOT FOUND IN ARCHITECTURE
      </h2>

      <p className="max-w-md text-xs sm:text-sm font-sans text-gray-400 mt-4 leading-relaxed">
        The requested URL path does not exist or has been relocated within the VANTA FORM site map.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-lime-400 text-black font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN HOME</span>
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="px-6 py-3 bg-white/10 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/20 transition-colors cursor-pointer flex items-center gap-2"
        >
          <Mail className="w-4 h-4 text-lime-400" />
          <span>CONTACT US</span>
        </button>
      </div>
    </div>
  );
};
