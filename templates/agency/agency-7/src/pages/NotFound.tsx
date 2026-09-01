import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-28 text-center space-y-8">
      <div className="inline-flex items-center space-x-2 rounded-full border border-red-500/30 bg-red-50 dark:bg-red-950/40 px-4 py-1.5 font-mono text-xs uppercase font-bold text-red-500">
        <Compass className="h-4 w-4 animate-spin-slow" />
        <span>404 ERROR // SPATIAL ANOMALY</span>
      </div>

      <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        THIS PAGE DOESN'T EXIST.
      </h1>

      <p className="max-w-md mx-auto text-sm text-neutral-600 dark:text-neutral-400 font-light">
        The route or case study link you followed might have shifted coordinates or moved to another spatial node.
      </p>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO HOME</span>
        </Link>
      </div>
    </div>
  );
};
