import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'FIELD NOT FOUND — AGROTECH AI';
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-paper-light dark:bg-paper-dark px-6 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono-tech font-extrabold text-3xl flex items-center justify-center mx-auto shadow-inner border border-emerald-300/40">
          404
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-paper-dark dark:text-paper-light tracking-tight">
          FIELD NOT FOUND.
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-serif-editorial italic">
          "The story or page you are looking for has moved beyond the agricultural horizon."
        </p>

        <div className="pt-6 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3.5 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white text-xs font-mono-tech font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-forest-800 transition-all shadow-md"
          >
            <Home className="w-4 h-4" /> Back Home
          </Link>
          <Link
            to="/stories"
            className="px-6 py-3.5 rounded-xl bg-paper-surface dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-paper-dark dark:text-paper-light text-xs font-mono-tech font-bold uppercase tracking-widest flex items-center gap-2 hover:border-emerald-600 transition-colors"
          >
            <Compass className="w-4 h-4 text-emerald-600" /> Explore Stories
          </Link>
        </div>
      </div>
    </main>
  );
};
