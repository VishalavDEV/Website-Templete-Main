import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Fingerprint, Satellite, Award, FileCheck2, Cpu } from 'lucide-react';

export default function SecuritySection({ onOpenBooking }) {
  const securityFeatures = [
    {
      icon: <Fingerprint className="w-6 h-6 text-[#F2994A]" />,
      title: 'Biometric Driver Verification',
      badge: 'Zero Identity Fraud',
      desc: 'Instant cryptographic facial and driver license matching ensures only authenticated VIP clients operate our high-performance fleet.'
    },
    {
      icon: <Satellite className="w-6 h-6 text-[#F2994A]" />,
      title: 'Encrypted Telemetry & GPS',
      badge: 'End-to-End SSL',
      desc: 'Real-time vehicle health, tire temperature, engine RPM, and geolocation streaming with private geofencing protection.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#F2994A]" />,
      title: '$2.5M Comprehensive Insurance',
      badge: 'Full Indemnity',
      desc: 'Every reservation includes bumper-to-bumper liability, collision, theft, and third-party protection backed by Lloyd’s of London syndicate.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#F2994A]" />,
      title: 'Encrypted Digital Keypad Vault',
      badge: 'NFC Contactless',
      desc: 'Keyless smartphone activation with rolling encryption tokens. No physical key handoff needed for private airfield drop-offs.'
    }
  ];

  return (
    <section id="security" className="py-24 px-6 lg:px-16 bg-[#070709] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-[#F2994A]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#F2994A] mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Military-Grade Fleet Protection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Security Engineered for <br />
            <span className="text-[#F2994A]">Absolute Peace of Mind.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            From the moment you reserve to the completion of your drive, your personal data and vehicle safety are guarded by multi-tier cryptographic protocols.
          </p>
        </div>

        {/* 4 Cards Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F2994A]/40 transition-all duration-300 hover:bg-white/[0.04] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F2994A]/10 border border-[#F2994A]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] text-[#F2994A] border border-white/10">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-base font-medium text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">{feat.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Protocol Active</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certified Trust Banner */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Full Commercial Fleet Compliance</div>
              <div className="text-xs text-zinc-400 mt-0.5">DOT Certified • Fully Insured Up to $2,500,000 • ISO 27001 Data Privacy Standard</div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#F2994A] transition-colors cursor-pointer"
          >
            Review Security Charter & Reserve
          </button>
        </div>
      </div>
    </section>
  );
}
