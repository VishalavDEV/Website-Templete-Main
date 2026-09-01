import React from 'react';
import { ArrowUpRight, CheckCircle2, Award, Shield, Layers, TrendingUp } from 'lucide-react';

interface AboutProps {
  onOpenAboutModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAboutModal, onNavigate }) => {
  const metrics = [
    { value: '150+', label: 'ENTERPRISE PROJECTS', subtext: 'Executed for market leaders', trend: '+14% Y/Y' },
    { value: '32', label: 'GLOBAL MARKETS', subtext: 'Across US, EU & APAC', trend: 'Multi-Region' },
    { value: '98%', label: 'CLIENT RETENTION', subtext: 'Long-term retainers', trend: 'Audit Score' },
    { value: '4.8x', label: 'AVERAGE ROI', subtext: 'Measured over 3 years', trend: 'Verified' },
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          <span className="text-slate-900">01 /</span>
          <span>ABOUT VERTEX ADVISORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Statement & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-tight font-sans">
              WE DON'T JUST BUILD SOLUTIONS. <br />
              <span className="bg-slate-900 text-white px-2 py-0.5 inline-block mt-1">WE BUILD BUSINESS ADVANTAGE.</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Founded on the mandate that technology investments must directly generate enterprise valuation, Vertex operates as a strategic hybrid: part executive business consultancy, part high-throughput software engineering firm.
              </p>
              <p>
                We do not deliver generic software. We architect competitive moats, streamline complex capital expenditure, and deploy resilient multi-cloud systems engineered to withstand exponential market shifts.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 bg-[#FAF9F6] border border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  01 / EXECUTIVE SENIORITY
                </span>
                <p className="text-xs text-slate-600">No junior handoffs. Every pod is led by veteran software architects and strategic advisors.</p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  02 / QUANTIFIABLE ROI
                </span>
                <p className="text-xs text-slate-600">Every initiative measures explicit metrics: latency drops, OpEx savings, and release speed.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAboutModal}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-900"
              >
                <span>READ CORPORATE OVERVIEW</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-emerald-400" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <span>SCHEDULE EXECUTIVE BRIEFING</span>
              </button>
            </div>

          </div>

          {/* Right Column: Business Intelligence Metrics Grid */}
          <div className="lg:col-span-5 relative space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 font-mono text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-500">BUSINESS INTELLIGENCE METRICS</span>
              <span className="text-emerald-600 font-bold uppercase">● AUDITED 2026</span>
            </div>

            {/* SVG Connecting Visualization Line Background */}
            <div className="relative bg-[#FAF9F6] border border-slate-300 p-6 space-y-6">
              
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 350" fill="none">
                <path d="M 50 50 L 350 120 L 50 250 L 350 300" stroke="#0f172a" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="50" cy="50" r="4" fill="#10b981" />
                <circle cx="350" cy="120" r="4" fill="#10b981" />
                <circle cx="50" cy="250" r="4" fill="#10b981" />
                <circle cx="350" cy="300" r="4" fill="#10b981" />
              </svg>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-5 border border-slate-200 space-y-2 hover:border-slate-900 transition-colors group">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{m.trend}</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950">
                      {m.value}
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">{m.label}</h4>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">{m.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Verification Footer */}
              <div className="p-4 bg-slate-900 text-white font-mono text-xs space-y-1 relative z-10">
                <div className="flex items-center justify-between text-emerald-400 font-bold uppercase text-[10px]">
                  <span>ENTERPRISE BENCHMARK</span>
                  <span>SOC2 TYPE II</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  All strategic roadmaps enforce strict ISO 27001 data residency &amp; Zero-Trust security protocols.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
