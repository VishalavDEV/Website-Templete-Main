import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Activity,
  Copy,
  Check,
  ArrowRight,
  GitCommit,
} from 'lucide-react';
import { tabData } from '../data/landingData';

export default function FeatureTabs() {
  const [activeTabId, setActiveTabId] = useState('developer-apis');
  const [selectedLang, setSelectedLang] = useState('typescript');
  const [copied, setCopied] = useState(false);

  const activeTab = tabData.find((t) => t.id === activeTabId) || tabData[0];

  const handleCopyCode = () => {
    if (activeTab.codeSnippets && activeTab.codeSnippets[selectedLang]) {
      navigator.clipboard.writeText(activeTab.codeSnippets[selectedLang]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="interactive-demo" className="py-24 sm:py-32 scroll-mt-28 relative border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-mid)' }}
          >
            <Activity className="w-3.5 h-3.5" />
            Interactive Deep Dive
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-main)' }}>
            One Platform.{' '}
            <span className="text-gradient-cyan-emerald">Infinite Velocity.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--text-sub)' }}>
            Explore how Aether gives your engineering team full-stack super powers across every phase of the development lifecycle.
          </p>
        </div>

        {/* Tab Selection Navigation Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border relative gap-2 overflow-x-auto max-w-full" style={{ borderColor: 'var(--border-color)' }}>
            {tabData.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap z-10 ${
                    isActive ? 'text-white' : 'hover:opacity-100 opacity-70'
                  }`}
                  style={!isActive ? { color: 'var(--text-sub)' } : {}}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-xl shadow-lg"
                      style={{ background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.id === 'developer-apis' && <Code2 className="w-4 h-4" />}
                    {tab.id === 'continuous-ops' && <Terminal className="w-4 h-4" />}
                    {tab.id === 'observability' && <Activity className="w-4 h-4" />}
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-3xl border overflow-hidden shadow-2xl p-6 sm:p-10"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{
                      backgroundColor: 'var(--bg-pill)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--accent-start)'
                    }}
                  >
                    {activeTab.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug" style={{ color: 'var(--text-main)' }}>
                    {activeTab.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-sub)' }}>
                    {activeTab.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                      style={{ color: 'var(--accent-mid)' }}
                    >
                      <span>Explore complete documentation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Custom Interactive Preview Panel */}
                <div className="lg:col-span-7">
                  
                  {/* TAB 1: DEVELOPER APIS -> CODE EDITOR */}
                  {activeTab.id === 'developer-apis' && (
                    <div
                      className="rounded-2xl border overflow-hidden shadow-xl font-mono text-xs"
                      style={{ backgroundColor: '#090D16', borderColor: 'var(--border-color)' }}
                    >
                      {/* Code Header Bar */}
                      <div
                        className="flex items-center justify-between px-4 py-2.5 border-b"
                        style={{ backgroundColor: '#06080F', borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div className="flex items-center gap-1.5">
                          {['typescript', 'python', 'go'].map((lang) => (
                            <button
                              key={lang}
                              onClick={() => setSelectedLang(lang)}
                              className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                                selectedLang === lang
                                  ? 'bg-brand-violet/20 text-brand-violet font-bold border border-brand-violet/30'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {lang.toUpperCase()}
                            </button>
                          ))}
                        </div>

                        {/* Copy Code Button */}
                        <button
                          onClick={handleCopyCode}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>

                      {/* Code Editor Body */}
                      <div className="p-4 sm:p-5 text-slate-300 overflow-x-auto leading-relaxed max-h-[360px]">
                        <pre className="text-xs sm:text-[13px]">
                          <code>{activeTab.codeSnippets[selectedLang]}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CONTINUOUS OPS -> PIPELINE FLOW */}
                  {activeTab.id === 'continuous-ops' && (
                    <div
                      className="rounded-2xl border p-5 sm:p-6 space-y-4"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                    >
                      <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <div className="flex items-center gap-2">
                          <GitCommit className="w-4 h-4" style={{ color: 'var(--accent-mid)' }} />
                          <span className="text-xs font-semibold font-mono" style={{ color: 'var(--text-main)' }}>commit #9f8c2e // main</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                          PIPELINE ACTIVE (4.2s TOTAL)
                        </span>
                      </div>

                      <div className="space-y-3">
                        {activeTab.pipelineStages.map((stage) => (
                          <div
                            key={stage.step}
                            className="p-3.5 rounded-xl border transition-all flex items-start justify-between gap-4"
                            style={{ backgroundColor: 'var(--bg-pill)', borderColor: 'var(--border-color)' }}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className="w-6 h-6 rounded-lg border flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5"
                                style={{
                                  backgroundColor: 'var(--bg-card)',
                                  borderColor: 'var(--border-color)',
                                  color: 'var(--accent-start)'
                                }}
                              >
                                {stage.step}
                              </span>
                              <div>
                                <h4 className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>{stage.name}</h4>
                                <p className="text-xs mt-0.5" style={{ color: 'var(--text-sub)' }}>{stage.desc}</p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="text-xs font-mono font-bold text-emerald-500">{stage.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: OBSERVABILITY -> LIVE TELEMETRY DASHBOARD */}
                  {activeTab.id === 'observability' && (
                    <div
                      className="rounded-2xl border p-5 sm:p-6 space-y-5"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                    >
                      {/* Metric Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {activeTab.telemetryStats.map((stat) => (
                          <div
                            key={stat.label}
                            className="p-3.5 rounded-xl border"
                            style={{ backgroundColor: 'var(--bg-pill)', borderColor: 'var(--border-color)' }}
                          >
                            <div className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                            <div className="text-lg font-bold mt-1 flex items-center justify-between" style={{ color: 'var(--text-main)' }}>
                              <span>{stat.value}</span>
                              <span className="text-xs text-emerald-500 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                {stat.change}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Live Log Stream */}
                      <div
                        className="rounded-xl p-3.5 border font-mono text-[11px] space-y-2"
                        style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)' }}
                      >
                        <div className="flex items-center justify-between pb-1.5 border-b" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> LIVE STREAM
                          </span>
                          <span>Auto-scrolling</span>
                        </div>
                        {activeTab.liveLogs.map((log, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="shrink-0" style={{ color: 'var(--text-muted)' }}>{log.time}</span>
                            <span className={log.type === 'success' ? 'text-emerald-500' : log.type === 'warn' ? 'text-amber-500' : ''} style={log.type === 'info' ? { color: 'var(--text-main)' } : {}}>
                              {log.event}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
