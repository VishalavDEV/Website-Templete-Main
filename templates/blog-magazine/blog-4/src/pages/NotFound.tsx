import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-in fade-in duration-300">
      <div className="w-20 h-20 rounded-3xl bg-[#C85A32]/15 dark:bg-[#C85A32]/25 text-[#C85A32] dark:text-[#E27453] flex items-center justify-center mx-auto mb-6">
        <Compass className="w-10 h-10" />
      </div>

      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-2 block">
        Error 404
      </span>

      <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight mb-4">
        Page Not Found
      </h1>

      <p className="text-base text-[#44403C] dark:text-[#D7D1C6] max-w-md mx-auto leading-relaxed mb-8">
        The dispatch, author profile, or category desk you are looking for has been moved or does not exist in our publication archives.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-sm font-semibold transition-colors shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/stories"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] text-sm font-semibold hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Stories</span>
        </Link>
      </div>
    </div>
  );
};
