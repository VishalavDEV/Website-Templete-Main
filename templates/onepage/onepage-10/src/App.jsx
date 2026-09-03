import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Send, 
  X, 
  Radio, 
  Play 
} from 'lucide-react';

export default function App() {
  const [trafficRequests, setTrafficRequests] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const savedCost = Math.round(trafficRequests * 1420);
  const latencyGain = (trafficRequests * 0.8 + 12).toFixed(1);

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#040711]/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white font-grotesk text-lg">
              S
            </div>
            <span className="font-grotesk text-xl font-bold tracking-wider text-white">SYNTHESIS <span className="text-xs font-mono text-cyan-400 font-normal">// BENCHMARK</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#metrics" className="hover:text-cyan-400 transition-colors">Telemetry</a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">ROI Calculator</a>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-cyan px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
          >
            <Activity size={16} />
            <span>Run Free Audit</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8">
            <Radio size={14} className="animate-pulse text-cyan-400" />
            <span>LIVE BENCHMARK TELEMETRY // v4.8 ACTIVE</span>
          </div>

          <h1 className="font-grotesk text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Real-Time Digital Benchmark & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Performance Physics.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            Measure, stress-test, and accelerate your web application infrastructure with synthetic latency simulation and automated edge routing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-cyan px-8 py-4 rounded-xl text-base flex items-center gap-3"
            >
              <span>Initialize Live Benchmark</span>
              <Play size={16} />
            </button>

            <a 
              href="#calculator"
              className="px-8 py-4 rounded-xl text-base font-semibold bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              <Sliders size={18} />
              <span>Calculate Savings</span>
            </a>
          </div>
        </div>
      </section>

      {/* Live Metrics Grid */}
      <section id="metrics" className="py-16 px-6 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bench-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400">EDGE LATENCY</span>
              <Zap size={18} className="text-cyan-400" />
            </div>
            <div className="font-grotesk text-3xl font-bold text-white mb-1">11.8 ms</div>
            <p className="text-xs text-emerald-400 font-medium">&darr; 42% faster than global AWS avg</p>
          </div>

          <div className="bench-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400">THROUGHPUT</span>
              <Activity size={18} className="text-blue-400" />
            </div>
            <div className="font-grotesk text-3xl font-bold text-white mb-1">145k /sec</div>
            <p className="text-xs text-slate-400 font-medium">Sustained HTTP/3 streams</p>
          </div>

          <div className="bench-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400">AVAILABILITY SLA</span>
              <ShieldCheck size={18} className="text-indigo-400" />
            </div>
            <div className="font-grotesk text-3xl font-bold text-white mb-1">99.999%</div>
            <p className="text-xs text-emerald-400 font-medium">Zero-downtime failover</p>
          </div>

          <div className="bench-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400">NODES ONLINE</span>
              <Globe size={18} className="text-cyan-400" />
            </div>
            <div className="font-grotesk text-3xl font-bold text-white mb-1">320 Reg.</div>
            <p className="text-xs text-slate-400 font-medium">Distributed PoP Locations</p>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section id="calculator" className="py-24 px-6 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto bench-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-white mb-3">Interactive Infrastructure Calculator</h2>
            <p className="text-slate-400 text-sm">Adjust monthly request volume to estimate bandwidth and compute cost savings.</p>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-3">
                <span className="text-slate-300">Monthly Request Traffic</span>
                <span className="text-cyan-400 font-mono text-lg">{trafficRequests} Million Requests / Mo</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={trafficRequests} 
                onChange={(e) => setTrafficRequests(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center">
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated Monthly Savings</span>
                <div className="font-grotesk text-3xl font-extrabold text-cyan-400 mt-2">${savedCost.toLocaleString()} / mo</div>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center">
                <span className="text-xs font-mono text-slate-400 uppercase">Global TTFB Reduction</span>
                <div className="font-grotesk text-3xl font-extrabold text-white mt-2">-{latencyGain}% TTFB</div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-cyan px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Claim Infrastructure Report</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/80 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-grotesk text-white font-bold text-sm">
            SYNTHESIS <span className="text-cyan-400">BENCHMARK</span> &copy; {new Date().getFullYear()}
          </div>
          <p>Synthetic Telemetry & High-Throughput Edge Acceleration Platform.</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-2xl p-8 shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X size={20} />
            </button>

            {!auditSubmitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="text-cyan-400" size={24} />
                  <div>
                    <h3 className="font-grotesk text-xl font-bold text-white">Instant Synthetic Audit</h3>
                    <p className="text-xs text-slate-400">Get a 10-page benchmark analysis for your app domain.</p>
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setAuditSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Target Web Domain</label>
                    <input 
                      required 
                      type="url" 
                      placeholder="https://yourbrand.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="dev@yourbrand.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-cyan py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                    <span>Generate Benchmark Report</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-grotesk text-2xl font-bold text-white">Audit Queued</h3>
                <p className="text-sm text-slate-300">Synthetic probe nodes are scanning your domain. Report sent to email.</p>
                <button 
                  onClick={() => { setIsModalOpen(false); setAuditSubmitted(false); }}
                  className="btn-cyan px-6 py-2 rounded-lg text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
