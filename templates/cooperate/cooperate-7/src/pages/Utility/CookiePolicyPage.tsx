import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400">Cookie Policy</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Straventa Cookie &amp; Tracking Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: January 1, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8 text-sm sm:text-base leading-relaxed bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. How We Use Cookies</h2>
            <p>
              Straventa uses first-party cookies to remember your interface preferences, ensure secure tokenized portal sessions, and analyze aggregated traffic telemetry to improve platform response times.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Types of Cookies We Deploy</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Strictly Necessary:</strong> Essential for authentication, CSRF token validation, and session routing.</li>
              <li><strong>Performance &amp; Analytics:</strong> Aggregated measurement of page load times, query speeds, and navigation paths.</li>
              <li><strong>Functional Preferences:</strong> Memorizing search filters, consent choices, and region preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Managing Preferences</h2>
            <p>
              You can adjust or revoke your cookie settings at any time via your browser settings or by clearing your local storage cache.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
