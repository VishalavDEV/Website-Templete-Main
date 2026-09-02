import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400">Terms of Service</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Straventa Terms of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: January 1, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8 text-sm sm:text-base leading-relaxed bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement &amp; Acceptance</h2>
            <p>
              By accessing the website, services, and digital products operated by Straventa Inc. ("Straventa"), you agree to abide by these Terms of Service and all applicable international trade and cybersecurity regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property Rights</h2>
            <p>
              All proprietary architectures, code frameworks, whitepapers, benchmarks, trade secrets, trademarks, and documentation published on this website are the exclusive intellectual property of Straventa Inc. and its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Professional Services Engagements</h2>
            <p>
              Consulting, software delivery, and cloud infrastructure management are governed by separately executed Statements of Work (SOWs) and Master Services Agreements (MSAs), which supersede conflicting provisions herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              In no event shall Straventa be liable for indirect, incidental, special, or consequential damages resulting from unauthorized system access or temporary service interruption outside our direct control.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
