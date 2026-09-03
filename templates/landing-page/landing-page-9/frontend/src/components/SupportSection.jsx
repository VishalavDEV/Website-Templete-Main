import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Clock, PhoneCall, ShieldAlert, CheckCircle2, Send } from 'lucide-react';

export default function SupportSection() {
  const [ticketSent, setTicketSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', reason: 'Concierge Booking' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketSent(true);
    setTimeout(() => {
      setTicketSent(false);
      setFormData({ name: '', phone: '', reason: 'Concierge Booking' });
    }, 4000);
  };

  const supportPillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#F2994A]" />,
      title: '24/7 Dedicated Concierge',
      desc: 'Immediate, live chauffeur and vehicle assistance anytime in North America and Europe with sub-60-second response latency.'
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#F2994A]" />,
      title: 'Direct Telemetry Dispatch',
      desc: 'On-demand mechanical and satellite support link embedded in every vehicle console for instantaneous roadside resolution.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#F2994A]" />,
      title: 'Emergency Rapid Exchange',
      desc: 'In the rare event of an issue, an identical or higher tier replacement vehicle is dispatched to your GPS location within 45 minutes.'
    }
  ];

  return (
    <section id="support" className="py-24 px-6 lg:px-16 bg-[#090a0f] border-t border-white/5 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F2994A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#F2994A] mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>24/7 Global Client Support</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            White-Glove Concierge <br />
            <span className="text-[#F2994A]">Always By Your Side.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Every ExquDrive rental comes with dedicated VIP support agents, real-time satellite telemetry, and round-the-clock priority dispatch.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#F2994A]/40 transition-all duration-300 hover:bg-white/[0.04] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F2994A]/10 border border-[#F2994A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{pillar.title}</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Instant Support Request Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 p-8 md:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Dispatch Available Now</span>
              </div>
              <h4 className="text-xl md:text-2xl font-medium text-white mb-2">Need Immediate Roadside Assistance?</h4>
              <p className="text-xs md:text-sm text-zinc-400">
                Direct hotline: <span className="text-white font-mono font-semibold">+1 (800) 948-EXQU</span> or request instant call-back below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2.5 rounded-full bg-black/60 border border-white/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F2994A] transition-colors"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-2.5 rounded-full bg-black/60 border border-white/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F2994A] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#F2994A] hover:bg-[#ffaa5c] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#F2994A]/20 cursor-pointer"
              >
                {ticketSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Dispatched!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Call</span>
                  </>
                )}
              </button>
            </form>
          </div>
          {ticketSent && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-mono">
              ✓ Telemetry beacon confirmed. A senior concierge coordinator is contacting {formData.phone || 'you'} within 60 seconds.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
