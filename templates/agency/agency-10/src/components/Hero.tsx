import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Activity, 
  Layers, 
  ShieldCheck, 
  Zap,
  Play,
  RotateCw
} from 'lucide-react';

interface HeroProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'stream' | 'vision'>('agents');
  const [simulationRunning, setSimulationRunning] = useState(true);

  return (
    <section id="hero-section" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 mb-6 px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Accepting 2026 Q3 Projects
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[86px] xl:text-[96px] leading-[0.88] font-black tracking-tighter mb-8 italic font-display text-slate-950">
              Intelligent <br />
              <span className="text-blue-600 not-italic">Digital</span> <br />
              Architects.
            </h1>

            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg mb-10 font-medium">
              We build premium AI agents, enterprise-grade software, and automated ecosystem architectures for global market leaders.
            </p>

            {/* CTAs & Social Proof */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="hero-start-project-btn"
                onClick={onOpenInquiry}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-98 cursor-pointer flex items-center gap-2 text-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                id="hero-solutions-btn"
                onClick={() => onNavigate('solutions')}
                className="border-2 border-slate-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-black tracking-widest hover:bg-slate-900 hover:text-white transition-colors uppercase cursor-pointer"
              >
                Explore Solutions
              </button>

              <button
                id="hero-explore-work-btn"
                onClick={() => onNavigate('work')}
                className="text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors uppercase tracking-wider underline underline-offset-4 cursor-pointer"
              >
                View Case Studies
              </button>

              <div className="flex -space-x-3 items-center ml-2 sm:ml-4">
                <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Leader" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-300 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Leader" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-400 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Leader" className="w-full h-full object-cover" />
                </div>
                <span className="pl-5 text-xs font-bold text-slate-400 italic">50+ Enterprise Deployments</span>
              </div>
            </div>

            {/* Assurance Signals */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% IP &amp; Code Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero Data Retention AI
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Senior-Only Pods
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Monitor with Rotated Layer */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-blue-50 rounded-[44px] lg:rounded-[60px] transform rotate-2 sm:rotate-3 pointer-events-none"></div>
            
            <div className="relative bg-white border border-slate-100 shadow-2xl rounded-[44px] lg:rounded-[60px] p-6 sm:p-8 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-xs font-black uppercase tracking-tighter text-slate-900">
                  Inference Monitor
                </div>
                <button
                  type="button"
                  onClick={() => setSimulationRunning(!simulationRunning)}
                  className="flex items-center gap-1.5 text-[10px] font-mono bg-green-100 text-green-700 hover:bg-green-200 px-2.5 py-0.5 rounded uppercase font-bold tracking-wider cursor-pointer transition-colors"
                  title="Click to pause or resume simulation"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${simulationRunning ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span>{simulationRunning ? 'Live Active' : 'Paused'}</span>
                </button>
              </div>

              {/* Monitor Content Body */}
              <div className="space-y-5">
                {/* Velocity Bars */}
                <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      {activeTab === 'agents' ? 'RAG Evaluation Velocity' : activeTab === 'stream' ? 'Kafka Ingestion Throughput' : 'Tensor Inference FPS'}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-blue-600">
                      {activeTab === 'agents' ? '4.8k req/s' : activeTab === 'stream' ? '142k msg/s' : '60.4 FPS'}
                    </span>
                  </div>
                  <div className="flex items-end space-x-1.5 h-12">
                    {activeTab === 'agents' && (
                      <>
                        <div className="bg-blue-200 w-full h-[40%] rounded-sm"></div>
                        <div className="bg-blue-300 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-blue-400 w-full h-[85%] rounded-sm"></div>
                        <div className="bg-blue-600 w-full h-[70%] rounded-sm"></div>
                        <div className="bg-blue-500 w-full h-[95%] rounded-sm"></div>
                        <div className="bg-blue-400 w-full h-[55%] rounded-sm"></div>
                        <div className="bg-blue-600 w-full h-[88%] rounded-sm"></div>
                        <div className="bg-blue-300 w-full h-[65%] rounded-sm"></div>
                      </>
                    )}
                    {activeTab === 'stream' && (
                      <>
                        <div className="bg-cyan-200 w-full h-[75%] rounded-sm"></div>
                        <div className="bg-cyan-400 w-full h-[90%] rounded-sm"></div>
                        <div className="bg-cyan-600 w-full h-[95%] rounded-sm"></div>
                        <div className="bg-blue-600 w-full h-[85%] rounded-sm"></div>
                        <div className="bg-cyan-500 w-full h-[98%] rounded-sm"></div>
                        <div className="bg-blue-500 w-full h-[90%] rounded-sm"></div>
                        <div className="bg-cyan-600 w-full h-[92%] rounded-sm"></div>
                        <div className="bg-blue-400 w-full h-[80%] rounded-sm"></div>
                      </>
                    )}
                    {activeTab === 'vision' && (
                      <>
                        <div className="bg-purple-300 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-400 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-500 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-600 w-full h-[62%] rounded-sm"></div>
                        <div className="bg-purple-500 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-600 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-400 w-full h-[60%] rounded-sm"></div>
                        <div className="bg-purple-300 w-full h-[60%] rounded-sm"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 rounded-3xl p-5 text-white shadow-sm">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Active Nodes
                    </div>
                    <div className="text-2xl font-black font-display tracking-tight">
                      {activeTab === 'agents' ? '14,802' : activeTab === 'stream' ? '32 Broker Shards' : '512 Edge Cores'}
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Avg Latency
                    </div>
                    <div className="text-2xl font-black italic tracking-tight text-slate-900">
                      {activeTab === 'agents' ? '14.2' : activeTab === 'stream' ? '4.8' : '18.4'}<span className="text-xs font-normal not-italic ml-1 text-slate-500">ms</span>
                    </div>
                  </div>
                </div>

                {/* Optimization Trigger Alert */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50/80 border border-blue-100 rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xs shrink-0 text-blue-600">
                    <Zap className="w-4 h-4 fill-blue-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-blue-900 tracking-wider">
                      Optimization Triggered
                    </div>
                    <div className="text-xs text-blue-700 opacity-85">
                      Hyper-threading active for Node 7
                    </div>
                  </div>
                </div>

                {/* Interactive Telemetry Tab Selector */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Telemetry Stream
                    </span>
                    <div className="flex items-center gap-1">
                      {(['agents', 'stream', 'vision'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase transition-colors cursor-pointer ${
                            activeTab === tab
                              ? 'bg-blue-600 text-white font-bold'
                              : 'text-slate-400 hover:text-slate-900'
                          }`}
                        >
                          {tab === 'agents' ? 'RAG' : tab === 'stream' ? 'Kafka' : 'Edge'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl text-slate-300 font-mono text-[10px] space-y-1">
                    {activeTab === 'agents' && (
                      <div>
                        <span className="text-emerald-400">[EVAL_PASS]</span> Triad score 0.992 &bull; Hallucination &lt;0.2% &bull; Retrieval 14.2ms
                      </div>
                    )}
                    {activeTab === 'stream' && (
                      <div>
                        <span className="text-blue-400">[KAFKA_STREAM]</span> Ingestion 142k/s &bull; ClickHouse query 4.8ms &bull; Lag: 0ms
                      </div>
                    )}
                    {activeTab === 'vision' && (
                      <div>
                        <span className="text-purple-400">[EDGE_TENSOR]</span> Latency 18.4ms &bull; 60 FPS &bull; Jetson AGX localized
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial 3-Column Highlights Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
              Artificial Intelligence
            </p>
            <p className="text-base font-bold text-slate-900">
              LLM &amp; RAG Pipelines
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
              Core Development
            </p>
            <p className="text-base font-bold text-slate-900">
              Enterprise Architecture
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
              Automation
            </p>
            <p className="text-base font-bold text-slate-900">
              Intelligent Agent Workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
