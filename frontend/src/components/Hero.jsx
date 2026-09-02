import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Zap,
  CheckCircle2,
  TrendingUp,
  Server,
  ShieldCheck,
} from 'lucide-react';
import { heroData } from '../data/landingData';

export default function Hero({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('mesh');

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href={heroData.badgeLink}
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill transition-all duration-300 shadow-md"
            style={{ borderColor: 'var(--border-hover)' }}
          >
            <span className="flex h-2 w-2 relative">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: 'var(--accent-start)' }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: 'var(--accent-start)' }}
              ></span>
            </span>
            <span
              className="text-xs sm:text-sm font-medium"
              style={{ color: 'var(--text-main)' }}
            >
              {heroData.badge}
            </span>
            <ArrowRight
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              style={{ color: 'var(--accent-start)' }}
            />
          </a>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center mt-5 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]"
            style={{ color: 'var(--text-main)' }}
          >
            Defy Limits.{' '}
            <span className="text-gradient-purple-cyan block sm:inline">
              Accelerate Your Product
            </span>{' '}
            to Zero-G.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-sub)' }}
          >
            {heroData.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl p-px font-semibold text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid), var(--accent-end))'
                }}
              ></span>
              <span
                className="relative block px-8 py-3.5 rounded-[11px] backdrop-blur-sm transition-all duration-300 text-white"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              >
                <span className="flex items-center justify-center gap-2.5 text-base font-semibold">
                  <Zap className="w-4 h-4 text-white" />
                  {heroData.primaryCTA}
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </a>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-card transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base font-medium group"
              style={{ color: 'var(--text-main)' }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--bg-pill)', color: 'var(--accent-start)' }}
              >
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>{heroData.secondaryCTA}</span>
            </button>
          </motion.div>

          {/* Reassurance pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex items-center justify-center gap-6 text-xs font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              14-day free Pro trial
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Instant 60s setup
            </span>
          </motion.div>
        </div>

        {/* Multi-Layered 3D Floating Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto relative"
        >
          {/* Ambient Glow behind the Dashboard */}
          <div
            className="absolute -inset-1 rounded-3xl blur-2xl opacity-60 transition duration-1000 -z-10"
            style={{
              background: 'linear-gradient(135deg, var(--orb-1), var(--orb-2))'
            }}
          />

          {/* Main Glass Console Card */}
          <div className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Console Window Header Bar */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--bg-pill)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span
                  className="text-xs font-mono hidden sm:inline-block"
                  style={{ color: 'var(--text-muted)' }}
                >
                  aether-mesh // cluster-alpha-global
                </span>
              </div>

              {/* Console Tab Switchers */}
              <div
                className="flex items-center gap-1 p-1 rounded-xl border text-xs font-medium"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                {['mesh', 'telemetry', 'canary'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg capitalize transition-all ${
                      activeTab === tab
                        ? 'font-semibold shadow-sm'
                        : 'hover:opacity-100 opacity-70'
                    }`}
                    style={
                      activeTab === tab
                        ? {
                            backgroundColor: 'var(--bg-pill)',
                            color: 'var(--accent-start)',
                            borderColor: 'var(--border-color)',
                            borderWidth: 1
                          }
                        : { color: 'var(--text-sub)' }
                    }
                  >
                    {tab === 'mesh' ? 'Global Mesh' : tab === 'telemetry' ? 'Live Telemetry' : 'AI Canary'}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-emerald-500">SYNCED 100%</span>
              </div>
            </div>

            {/* Dashboard Inner Workspace */}
            <div className="p-4 sm:p-8">
              {/* Metric Row - Cleanly laid out with zero overlaps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div
                  className="p-3.5 sm:p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Edge Latency
                  </div>
                  <div className="mt-1 text-xl sm:text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                    1.8 ms
                    <span className="text-[10px] text-emerald-500 font-normal bg-emerald-500/10 px-1.5 py-0.5 rounded">-64%</span>
                  </div>
                </div>

                <div
                  className="p-3.5 sm:p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Throughput
                  </div>
                  <div className="mt-1 text-xl sm:text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--accent-mid)' }}>
                    48.4k <span className="text-xs font-normal" style={{ color: 'var(--text-muted)' }}>req/s</span>
                  </div>
                </div>

                <div
                  className="p-3.5 sm:p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Cache Hit Ratio
                  </div>
                  <div className="mt-1 text-xl sm:text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--accent-start)' }}>
                    99.8%
                  </div>
                </div>

                <div
                  className="p-3.5 sm:p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Multi-Cloud Status
                  </div>
                  <div className="mt-1 text-xl sm:text-2xl font-bold text-emerald-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 inline" />
                    Zero-G
                  </div>
                </div>
              </div>

              {/* Dynamic Simulated Visual Area */}
              <div
                className="p-4 sm:p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4" style={{ color: 'var(--accent-mid)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Global Edge Node Topology</span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>320 POPs Active</span>
                </div>

                {/* SVG Simulated Chart Wave */}
                <div className="relative h-32 sm:h-44 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
                    <defs>
                      <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent-start)" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="var(--accent-mid)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="var(--accent-mid)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--accent-start)" />
                        <stop offset="50%" stopColor="var(--accent-mid)" />
                        <stop offset="100%" stopColor="var(--accent-end)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area fill */}
                    <path
                      d="M0,110 C80,90 120,40 200,60 C280,80 340,20 420,35 C460,42 490,15 500,20 L500,150 L0,150 Z"
                      fill="url(#heroGradient)"
                    />
                    
                    {/* Line stroke */}
                    <path
                      d="M0,110 C80,90 120,40 200,60 C280,80 340,20 420,35 C460,42 490,15 500,20"
                      fill="none"
                      stroke="url(#strokeGradient)"
                      strokeWidth="3"
                    />

                    {/* Animated Pulsing Data Points */}
                    <circle cx="200" cy="60" r="4" fill="var(--accent-start)" className="animate-ping" />
                    <circle cx="200" cy="60" r="4" fill="var(--text-main)" />

                    <circle cx="420" cy="35" r="4" fill="var(--accent-mid)" className="animate-ping" />
                    <circle cx="420" cy="35" r="4" fill="var(--text-main)" />
                  </svg>
                </div>

                {/* Sub-bar with POP distribution badges */}
                <div
                  className="mt-4 pt-3 border-t flex flex-wrap items-center justify-between gap-2 text-xs font-mono"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-start)' }} /> us-east: 0.9ms</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mid)' }} /> eu-central: 1.4ms</span>
                    <span className="flex items-center gap-1.5 hidden sm:inline-flex"><span className="w-2 h-2 rounded-full text-emerald-500" /> ap-northeast: 2.1ms</span>
                  </div>
                  <span className="text-emerald-500 font-bold">Auto-balanced 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Floating Badges - Positioned neatly along the bottom edge without overlapping any text */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 left-6 sm:left-12 glass-panel px-4 py-2.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-2.5 z-20 border"
            style={{ borderColor: 'var(--border-hover)' }}
          >
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--bg-pill)', color: 'var(--accent-mid)' }}>
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
              Anycast Routing: <span className="text-emerald-500 font-mono font-bold">320 POPs Active</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-5 right-6 sm:right-12 glass-panel px-4 py-2.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-2.5 z-20 border"
            style={{ borderColor: 'var(--border-hover)' }}
          >
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--bg-pill)', color: 'var(--accent-start)' }}>
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-main)' }}>
              AI Canary: <span className="text-emerald-500 font-mono font-bold">+99.4% Pass Rate</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
