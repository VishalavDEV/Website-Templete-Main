import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  Play, 
  Search, 
  GitBranch, 
  Sliders, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Bell, 
  RefreshCw 
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulating, setSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const [completedTasks, setCompletedTasks] = useState([true, true, false, false]);
  const { showToast } = useModal();

  // Simulation pulse effect
  const handleTriggerSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    showToast('⚡ Running autonomous multi-stage workflow pipeline...');
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveStepIndex(step % 4);
      if (step >= 4) {
        clearInterval(interval);
        setSimulating(false);
        setCompletedTasks([true, true, true, true]);
        showToast('✓ Workflow #1402 deployed to 8 edge regions in 12ms!');
      }
    }, 600);
  };

  // Toggle task
  const toggleTask = (index, title) => {
    const updated = [...completedTasks];
    updated[index] = !updated[index];
    setCompletedTasks(updated);
    showToast(updated[index] ? `✓ Completed: ${title}` : `⏳ Reopened: ${title}`);
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl bg-[#09090c]/90 border border-white/10 shadow-2xl shadow-black/90 backdrop-blur-2xl p-3 md:p-6 text-left overflow-hidden">
      
      {/* Background Amber Glow Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Mockup Window Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            api.flowzen.internal/v2/pipeline
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-2.5">
          <button 
            onClick={handleTriggerSimulation}
            disabled={simulating}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              simulating 
                ? 'bg-amber-500 text-black animate-pulse' 
                : 'bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300'
            }`}
          >
            {simulating ? <RefreshCw size={13} className="animate-spin" /> : <Play size={13} fill="currentColor" />}
            {simulating ? 'Running Workflow...' : 'Test Run Workflow'}
          </button>
          
          <div className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-xs text-zinc-400">
            <Clock size={13} className="text-amber-400 mr-1" />
            12ms Latency
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Mini Sidebar */}
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-1 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 px-3 py-1">Workspace</div>
          <button 
            onClick={() => showToast('📂 Auto-Flows workspace active')}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 text-left cursor-pointer"
          >
            <Zap size={14} />
            Auto-Flows
          </button>
          <button 
            onClick={() => showToast('⚙️ Switched to Pipelines view')}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] text-left cursor-pointer"
          >
            <Layers size={14} />
            Pipelines
          </button>
          <button 
            onClick={() => showToast('📊 Live Telemetry stream connected')}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] text-left cursor-pointer"
          >
            <Activity size={14} />
            Telemetry
          </button>
          <button 
            onClick={() => showToast('🔒 SOC2 Security audit stream 100% healthy')}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] text-left cursor-pointer"
          >
            <ShieldCheck size={14} />
            Security Log
          </button>

          <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center gap-2 px-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-black">
              FZ
            </div>
            <div className="text-[11px] text-zinc-300 truncate">Core Cluster</div>
          </div>
        </div>

        {/* Center/Right Main Dashboard */}
        <div className="col-span-1 lg:col-span-10 flex flex-col gap-4">
          
          {/* Top Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]">
              <div className="text-[11px] text-zinc-400">Total Workflows</div>
              <div className="text-lg md:text-xl font-bold text-white mt-0.5 flex items-baseline gap-1.5">
                42,890
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center">
                  +18.4%
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]">
              <div className="text-[11px] text-zinc-400">Avg Cycle Time</div>
              <div className="text-lg md:text-xl font-bold text-white mt-0.5 flex items-baseline gap-1.5">
                1.4s
                <span className="text-[11px] font-semibold text-amber-400 flex items-center">
                  -58%
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]">
              <div className="text-[11px] text-zinc-400">Tasks Automated</div>
              <div className="text-lg md:text-xl font-bold text-white mt-0.5 flex items-baseline gap-1.5">
                99.4%
                <span className="text-[11px] font-semibold text-emerald-400">
                  Optimal
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]">
              <div className="text-[11px] text-zinc-400">Security Health</div>
              <div className="text-lg md:text-xl font-bold text-white mt-0.5 flex items-baseline gap-1.5">
                100%
                <span className="text-[11px] font-semibold text-sky-400">
                  SOC2
                </span>
              </div>
            </div>
          </div>

          {/* Workflow Interactive Node Chain */}
          <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-amber-400" />
                <span className="text-xs font-semibold text-zinc-200">Active Workflow: Smart Deployment & Notification</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                RUNNING
              </span>
            </div>

            {/* Nodes Chain */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative">
              
              {/* Node 1 */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeStepIndex === 0 
                  ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'bg-white/[0.02] border-white/10'
              }`}>
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="text-[10px] font-mono text-amber-400">01 TRIGGER</span>
                  <GitBranch size={13} className="text-zinc-400" />
                </div>
                <div className="text-xs font-bold text-white">GitHub PR Merged</div>
                <div className="text-[10px] text-zinc-400 mt-1">main branch #1402</div>
              </div>

              {/* Node 2 */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeStepIndex === 1 
                  ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'bg-white/[0.02] border-white/10'
              }`}>
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="text-[10px] font-mono text-amber-400">02 VALIDATE</span>
                  <Cpu size={13} className="text-zinc-400" />
                </div>
                <div className="text-xs font-bold text-white">AI Security Audit</div>
                <div className="text-[10px] text-emerald-400 mt-1 font-semibold">0 Vulnerabilities</div>
              </div>

              {/* Node 3 */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeStepIndex === 2 
                  ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'bg-white/[0.02] border-white/10'
              }`}>
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="text-[10px] font-mono text-amber-400">03 DEPLOY</span>
                  <Zap size={13} className="text-zinc-400" />
                </div>
                <div className="text-xs font-bold text-white">Edge Rollout (Global)</div>
                <div className="text-[10px] text-zinc-400 mt-1">8 Regions active</div>
              </div>

              {/* Node 4 */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeStepIndex === 3 
                  ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/20' 
                  : 'bg-white/[0.02] border-white/10'
              }`}>
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="text-[10px] font-mono text-amber-400">04 NOTIFY</span>
                  <Bell size={13} className="text-zinc-400" />
                </div>
                <div className="text-xs font-bold text-white">Broadcast Slack & Jira</div>
                <div className="text-[10px] text-zinc-400 mt-1">Sprint updated</div>
              </div>
            </div>
          </div>

          {/* Bottom Split: SVG Chart & Task Queue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {/* Real-time Velocity Chart */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-amber-400" />
                  Team Execution Velocity
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">Last 7 days</span>
              </div>

              {/* Vector SVG Line Chart */}
              <div className="relative h-28 w-full mt-1">
                <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5A900" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#F5A900" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill path */}
                  <path
                    d="M 0,85 Q 40,70 70,55 T 140,40 T 210,25 T 300,10 L 300,100 L 0,100 Z"
                    fill="url(#chartGlow)"
                  />

                  {/* Stroke path */}
                  <path
                    d="M 0,85 Q 40,70 70,55 T 140,40 T 210,25 T 300,10"
                    fill="none"
                    stroke="#F5A900"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Pulsing point */}
                  <circle cx="300" cy="10" r="5" fill="#F5A900" className="animate-pulse" />
                  <circle cx="300" cy="10" r="9" fill="none" stroke="#F5A900" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono pt-2 border-t border-white/[0.04]">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span className="text-amber-400 font-bold">Today (+3.4x)</span>
              </div>
            </div>

            {/* Interactive Task Checklist */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-amber-400" />
                  Automated Task Backlog
                </div>
                <span className="text-[10px] text-zinc-400">Click to toggle</span>
              </div>

              <div className="space-y-2 mt-1">
                {[
                  { title: 'Auto-sync Linear sprint to Notion roadmap', time: '1m ago' },
                  { title: 'Trigger Docker multi-arch release image', time: '4m ago' },
                  { title: 'Generate AI weekly executive brief', time: '12m ago' },
                  { title: 'Archive stale pull requests & notify owners', time: '25m ago' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleTask(idx, item.title)}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        completedTasks[idx] 
                          ? 'bg-amber-500 text-black font-bold' 
                          : 'border border-zinc-600'
                      }`}>
                        {completedTasks[idx] && '✓'}
                      </div>
                      <span className={`text-xs ${completedTasks[idx] ? 'text-zinc-400 line-through' : 'text-zinc-200'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
