import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sliders, 
  ShieldCheck, 
  Terminal, 
  TrendingUp, 
  GitPullRequest, 
  Layers 
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

const TABS = [
  {
    id: 'automate',
    name: 'Autonomous Orchestration',
    tagline: 'Event-driven bots that never sleep',
    bullets: [
      'Trigger webhooks and sync 200+ developer integrations in real-time',
      'Auto-resolve standard dependency blockers with built-in AI Copilot',
      'Zero maintenance YAML workflow declarations with live syntax check'
    ]
  },
  {
    id: 'visibility',
    name: 'Unified Sprint Visibility',
    tagline: 'Single source of truth for cross-functional teams',
    bullets: [
      'Consolidate GitHub PRs, Figma links, and Linear issues seamlessly',
      'Real-time async status rollups for engineering leadership without meetings',
      'Granular role-based permissions and activity audit streams'
    ]
  },
  {
    id: 'velocity',
    name: 'Predictive Velocity Engine',
    tagline: 'Eliminate delivery bottlenecks before they happen',
    bullets: [
      'Predictive cycle time forecasting based on historical team velocity',
      'Automated pull request review reminder escalations',
      'Interactive bottleneck heatmaps across repos and microservices'
    ]
  }
];

export default function ProductDeepDive() {
  const [activeTab, setActiveTab] = useState(0);
  const { openAuthModal } = useModal();

  return (
    <section id="solutions" className="py-24 md:py-32 relative bg-[#070709] border-t border-b border-white/[0.06]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-5 w-fit">
              <Sparkles size={14} />
              Deep Dive & Workflows
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              See the Work.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Understand the Why.
              </span>{' '}
              Act Faster.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
              Eliminate information silos and endless async pinging. Flowzen automatically synthesizes code commits, design updates, and customer feedback into clean actionable tasks.
            </p>

            {/* Interactive Tab Selectors */}
            <div className="flex flex-col gap-3 mb-8">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/5'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-base text-white flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activeTab === idx ? 'bg-amber-400' : 'bg-zinc-600'}`}></span>
                      {tab.name}
                    </div>
                    <span className="text-xs text-amber-400/80 font-mono">0{idx + 1}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 pl-4">{tab.tagline}</div>
                </button>
              ))}
            </div>

            {/* Tab Bullet Points */}
            <div className="space-y-3 mb-8">
              {TABS[activeTab].bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="mt-1 p-0.5 rounded-full bg-amber-500/20 text-amber-400">
                    <CheckCircle2 size={15} />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => openAuthModal('growth')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Experience Flowzen In Action
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Live Interactive Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="relative p-5 md:p-7 rounded-3xl bg-[#0c0c10]/95 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden">
              
              <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs font-mono text-zinc-300">
                    flowzen://live/{TABS[activeTab].id}
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-mono font-semibold">
                  STATUS: LIVE
                </span>
              </div>

              {/* Tab 1 Visual: Code & Automation Workflow */}
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="tab-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto">
                      <div className="flex items-center justify-between text-zinc-500 mb-2 border-b border-white/[0.06] pb-1.5">
                        <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                          <Terminal size={13} />
                          workflow.auto.yml
                        </span>
                        <span className="text-[10px]">YAML • 12ms EXEC</span>
                      </div>
                      <p><span className="text-amber-400">on:</span> [pull_request_merged, jira_issue_resolved]</p>
                      <p><span className="text-amber-400">pipeline:</span></p>
                      <p className="pl-3"><span className="text-purple-400">- step:</span> trigger_zero_downtime_deploy</p>
                      <p className="pl-6 text-zinc-500">provider: aws_us_east_cluster</p>
                      <p className="pl-3"><span className="text-purple-400">- step:</span> execute_ai_security_lint</p>
                      <p className="pl-6 text-zinc-500">status: <span className="text-emerald-400">PASSED (0 alerts)</span></p>
                      <p className="pl-3"><span className="text-purple-400">- step:</span> broadcast_slack_notification</p>
                      <p className="pl-6 text-zinc-500">channel: #eng-ship-log</p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-white/[0.03] to-transparent border border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold">
                          <Zap size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Continuous Deployment Auto-Pilot</div>
                          <div className="text-xs text-zinc-400">38 commits shipped today with 0 rollbacks</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold">ACTIVE</span>
                    </div>
                  </motion.div>
                )}

                {/* Tab 2 Visual: Kanban & Unified Sprint Board */}
                {activeTab === 1 && (
                  <motion.div
                    key="tab-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                          <span>In Review</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">3</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 mb-2">
                          <div className="text-xs font-semibold text-white">OAuth2 PKCE Refactor</div>
                          <div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-2">
                            <span className="text-amber-400 font-mono">PR #128</span>
                            <span>Elena R.</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                          <div className="text-xs font-semibold text-white">Figma Token Sync Engine</div>
                          <div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-2">
                            <span className="text-amber-400 font-mono">PR #131</span>
                            <span>Marcus V.</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                          <span>Shipped & Verified</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">14</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-emerald-500/20 mb-2">
                          <div className="text-xs font-semibold text-white">Sub-10ms Redis Cache</div>
                          <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-2">
                            <span>✓ Automated test passed</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-emerald-500/20">
                          <div className="text-xs font-semibold text-white">SOC2 Audit Log Exporter</div>
                          <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-2">
                            <span>✓ Live in Prod</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab 3 Visual: Velocity Analytics Heatmap */}
                {activeTab === 2 && (
                  <motion.div
                    key="tab-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <TrendingUp size={15} className="text-amber-400" />
                          Sprint Cycle Time Heatmap
                        </div>
                        <span className="text-[11px] text-emerald-400 font-semibold font-mono">
                          -42% Idle Time
                        </span>
                      </div>

                      {/* Heatmap Grid */}
                      <div className="grid grid-cols-7 gap-1.5 pt-2">
                        {Array.from({ length: 28 }).map((_, i) => {
                          const intensity = (i * 37) % 5;
                          const bg = intensity === 4 ? 'bg-amber-400' :
                                     intensity === 3 ? 'bg-amber-500/70' :
                                     intensity === 2 ? 'bg-amber-500/40' :
                                     intensity === 1 ? 'bg-amber-500/20' : 'bg-white/[0.05]';
                          return (
                            <div
                              key={i}
                              className={`h-6 rounded-md ${bg} transition-all hover:scale-110 cursor-pointer`}
                              title={`Day ${i + 1}: ${intensity * 12} commits shipped`}
                            ></div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                      <span className="text-zinc-400">Bottleneck Risk Alert:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero active blockades detected
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
