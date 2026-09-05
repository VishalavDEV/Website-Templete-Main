import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ScrollToTop } from '../common/ScrollToTop';
import { ShieldCheck, CheckCircle2, X, ArrowLeft } from 'lucide-react';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-slate-900">
      <ScrollToTop />

      {/* Top Back / Cancel Bar */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6 relative z-10 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition px-2.5 py-1.5 rounded-lg hover:bg-slate-200/70"
          title="Return to Main Website"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Website</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200/70 transition"
          title="Cancel & Exit"
          aria-label="Cancel and return to homepage"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6 relative z-10">
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
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl relative">
          {/* Card Close / Exit Button */}
          <Link
            to="/"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
            title="Cancel & Return to Homepage"
            aria-label="Close and return to homepage"
          >
            <X className="w-5 h-5" />
          </Link>
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

