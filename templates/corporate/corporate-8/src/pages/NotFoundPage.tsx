import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ArrowLeft, Home, Search, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FAF9F5]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mx-auto">
          <span className="font-mono text-3xl font-black">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
            Blueprint Not Found
          </h1>
          <p className="text-sm text-slate-600">
            The page or specification you requested has either moved or does not exist in our system registry.
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <Button variant="primary" to="/" withArrow className="w-full justify-center">
            Return to Homepage
          </Button>

          <Link
            to="/services"
            className="block text-xs font-bold text-slate-600 hover:text-amber-600 underline"
          >
            Browse Commercial Services Directory
          </Link>
        </div>
      </div>
    </div>
  );
};
