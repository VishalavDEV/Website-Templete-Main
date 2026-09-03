import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Activity,
  Zap,
  Lock,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setIsConsultationModalOpen, setIsOperationsConsoleOpen } = useApp();

  const handleScrollToDashboard = () => {
    const el = document.getElementById('dashboard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#08080A]">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-indigo-400">
              NEXORA Enterprise Intelligence Platform Live
            </span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Turn Complex Data Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Decisive Action.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI-powered intelligence dashboard for enterprise operations. Unifying causal AI, autonomous workflow swarms, and sovereign business intelligence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/25 active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleScrollToDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-full transition-all duration-200"
            >
              <Activity className="w-4 h-4 text-indigo-400" />
              <span>Explore Live Telemetry</span>
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">SOC2 Type II & FedRAMP Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-400">Sub-10ms Decision Latency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-indigo-400" />
              <span className="text-slate-400">Zero-Data-Retention Guarantee</span>
            </div>
          </div>
        </div>

        {/* Futuristic Dashboard Mockup Glass Canvas */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Ambient Rim Light */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-20 transition duration-500" />

          <div className="relative rounded-2xl bg-[#0A0A0E] border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Mockup Top Window Chrome */}
            <div className="px-6 py-3.5 bg-[#08080A] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="text-xs font-mono text-slate-500 ml-3">nexora://production.sovereign-mesh/cluster-01</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold">99.999% CLUSTER UPTIME</span>
              </div>
            </div>

            {/* Mockup Inside Visual Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#08080A]/60">
              {/* Card 1: Revenue Performance */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Revenue Performance</span>
                  <span className="text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-2 py-0.5 rounded">+12.4%</span>
                </div>
                <div className="text-2xl font-bold text-white">$4.2M</div>
                <div className="mt-3 flex gap-1 h-6 items-end">
                  <div className="bg-indigo-500/30 w-full h-2 rounded-t-sm"></div>
                  <div className="bg-indigo-500/30 w-full h-3 rounded-t-sm"></div>
                  <div className="bg-indigo-500/30 w-full h-4 rounded-t-sm"></div>
                  <div className="bg-indigo-500 w-full h-5 rounded-t-sm"></div>
                  <div className="bg-indigo-500/30 w-full h-3 rounded-t-sm"></div>
                  <div className="bg-indigo-500 w-full h-6 rounded-t-sm"></div>
                </div>
              </div>

              {/* Card 2: Operational Efficiency */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Operational Efficiency</span>
                  <span className="text-cyan-400 text-[10px] font-bold bg-cyan-400/10 px-2 py-0.5 rounded">98.7%</span>
                </div>
                <div className="text-2xl font-bold text-white">94.2%</div>
                <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[94.2%] rounded-full"></div>
                </div>
              </div>

              {/* Card 3: Active AI Workflows */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active AI Workflows</span>
                  <span className="text-indigo-400 text-[10px] font-bold bg-indigo-400/10 px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="text-2xl font-bold text-white">842</div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="text-[10px] text-slate-500">Real-time tracking active</span>
                </div>
              </div>

              {/* Card 4: Anomaly Detection */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Anomaly Detection</span>
                  <span className="text-slate-400 text-[10px] font-bold bg-white/5 px-2 py-0.5 rounded">Normal</span>
                </div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="mt-3 text-[10px] text-slate-500 italic">No security events detected.</div>
              </div>
            </div>

            {/* Quick Interactive Prompt Banner */}
            <div className="px-6 py-4 bg-[#08080A] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Autonomous Root-Cause Synthesis: Operational efficiency is at 98.4% across 14 enterprise data nodes.</span>
              </div>
              <button
                onClick={() => setIsOperationsConsoleOpen(true)}
                className="text-indigo-400 hover:text-indigo-300 font-semibold whitespace-nowrap"
              >
                Open Operations Console →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

