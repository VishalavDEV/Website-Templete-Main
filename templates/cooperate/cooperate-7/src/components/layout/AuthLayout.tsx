import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ScrollToTop } from '../common/ScrollToTop';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-slate-900">
      <ScrollToTop />

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 p-0.5 shadow-sm group-hover:bg-zinc-800 transition flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-xs transform rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-zinc-700 transition">
              Straventa
            </span>
          </div>
        </Link>
      </div>

      {/* Auth Card Content */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl">
          <Outlet />
        </div>

        {/* Security Trust Indicators */}
        <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600" /> 256-bit SSL Encryption
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SOC2 Type II Certified
          </span>
        </div>
      </div>
    </div>
  );
};
