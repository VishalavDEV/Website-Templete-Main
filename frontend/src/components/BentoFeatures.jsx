import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  GitBranch,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
} from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-start)' }}
          >
            <Zap className="w-3.5 h-3.5" style={{ color: 'var(--accent-mid)' }} />
            Zero-G Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--text-main)' }}
          >
            Engineered for Extreme Velocity.{' '}
            <span className="text-gradient-purple-cyan block sm:inline">
              Built for Scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg"
            style={{ color: 'var(--text-sub)' }}
          >
            Every layer of Aether is designed to eradicate cloud latency, automate failure recovery, and make multi-cloud feel like single-server simplicity.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Global Real-Time Edge Sync (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-mid)'
                  }}
                >
                  <Globe className="w-6 h-6" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-mid)'
                  }}
                >
                  Sub-12ms Anycast Mesh
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
                Global Real-Time Edge Sync
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-sub)' }}>
                Multi-region database state and session storage synchronizes across 320+ edge POPs in under 12ms using state-of-the-art CRDT active-active replication.
              </p>
            </div>

            {/* Interactive Visual Element inside Card */}
            <div
              className="mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-3"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>US-East (N. Virginia)</div>
                <div className="text-sm font-bold flex items-center gap-1.5 mt-0.5 font-mono" style={{ color: 'var(--text-main)' }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> 0.8ms
                </div>
              </div>
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>EU-Central (Frankfurt)</div>
                <div className="text-sm font-bold flex items-center gap-1.5 mt-0.5 font-mono" style={{ color: 'var(--text-main)' }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> 1.3ms
                </div>
              </div>
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>AP-East (Tokyo)</div>
                <div className="text-sm font-bold flex items-center gap-1.5 mt-0.5 font-mono" style={{ color: 'var(--text-main)' }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> 2.1ms
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Autonomous CI/CD Engine (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-start)'
                  }}
                >
                  <GitBranch className="w-6 h-6" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-start)'
                  }}
                >
                  ML Canary
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
                Autonomous CI/CD
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sub)' }}>
                Self-healing deployment pipelines that detect memory leaks and error spikes in real-time, executing automated rollbacks in 200ms.
              </p>
            </div>

            {/* Mini Pipeline Indicator */}
            <div
              className="mt-6 p-3.5 rounded-xl border font-mono text-xs"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center justify-between mb-1.5" style={{ color: 'var(--text-main)' }}>
                <span>Canary Slice</span>
                <span className="text-emerald-500 font-bold">Passed 100%</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-pill)' }}>
                <div
                  className="h-full w-[94%]"
                  style={{ background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Zero-Config Multi-Cloud (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-end)'
                  }}
                >
                  <Cpu className="w-6 h-6" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-end)'
                  }}
                >
                  Zero YAML
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
                Zero-Config Multi-Cloud
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sub)' }}>
                Connect your GitHub repository. Aether inspects your project, provisions edge containers, and orchestrates redundant routing in seconds.
              </p>
            </div>

            {/* Code pill */}
            <div
              className="mt-6 p-3 rounded-xl border font-mono text-[11px] flex items-center justify-between"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)' }}
            >
              <span style={{ color: 'var(--accent-mid)' }}>$ aether push --hyperspeed</span>
              <span className="text-emerald-500 font-bold">READY</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Enterprise Zero-Trust Shield (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-start)'
                  }}
                >
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: 'var(--bg-pill)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--accent-start)'
                  }}
                >
                  Quantum-Safe Security
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
                Enterprise Zero-Trust Shield
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-sub)' }}>
                Built-in mutual TLS, quantum-resistant envelope encryption, automated DDoS mitigation at the edge, and continuous SOC2 / HIPAA audit trails.
              </p>
            </div>

            {/* Badges Grid */}
            <div
              className="mt-8 pt-6 border-t flex flex-wrap items-center gap-3"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                <Lock className="w-3.5 h-3.5 text-rose-500" /> SOC2 Type II Certified
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> HIPAA & GDPR Compliant
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                <Zap className="w-3.5 h-3.5" style={{ color: 'var(--accent-mid)' }} /> 40 Tbps DDoS Shield
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
