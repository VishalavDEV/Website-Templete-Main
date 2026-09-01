import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Clock, CheckCircle2, Globe, Sparkles, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ playClick, playSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'VIP Pre-Order',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick?.();

    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      playSuccess?.();
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#FF003C', '#EF4444', '#F97316', '#FFFFFF']
      });
    }, 900);
  };

  return (
    <section id="contact-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-rose-300 mb-4 shadow-neon-red">
          <Flame className="w-3.5 h-3.5 text-cyber-red animate-pulse" />
          <span>DIRECT CONTACT & GLOBAL GAMING HUBS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          Connect With The TENFIVE Squad
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Whether you represent an esports team, gaming media reviewer, or are reserving your VIP pre-order allocation, our concierge is active 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Cards & Global Labs */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Quick Contact Card */}
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 border border-cyber-red/40 shadow-neon-red">
            <h3 className="font-display font-bold text-xl text-white mb-5 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-cyber-crimson" />
              <span>Direct Uplink Channels</span>
            </h3>

            <div className="space-y-4 font-sans text-sm">
              
              {/* Email */}
              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.03] border border-cyber-red/20 hover:border-cyber-red/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-cyber-red/15 border border-cyber-red/30 flex items-center justify-center text-cyber-crimson shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Electronic Mail</span>
                  <p className="text-white font-medium">contact@tenfive.tech</p>
                  <p className="text-xs text-rose-300 font-mono">press@tenfive.tech (Review Units)</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.03] border border-cyber-red/20 hover:border-cyber-red/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-cyber-red/15 border border-cyber-red/30 flex items-center justify-center text-cyber-crimson shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Voice Concierge (Toll-Free)</span>
                  <p className="text-white font-medium">+1 (800) 105-TENFIVE</p>
                  <p className="text-xs text-slate-400 font-mono">+1 (415) 555-1050 (International)</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-cyber-amber/15 border border-cyber-amber/30 flex items-center justify-center text-cyber-amber shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Response SLA</span>
                  <p className="text-white font-medium">24/7 Global Dispatch</p>
                  <p className="text-xs text-emerald-400 font-mono">Average response time: &lt; 8 mins</p>
                </div>
              </div>

            </div>
          </div>

          {/* Global Headquarters & Labs */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10">
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-rose-400" />
              <span>Global Innovation Hubs</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>🇺🇸 TENFIVE Silicon Valley HQ</span>
                  <span className="text-rose-400 text-[10px]">Gaming Silicon Lab</span>
                </div>
                <p className="text-slate-400 mt-1">105 Quantum Way, Palo Alto, CA 94301</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>🇯🇵 Tokyo Precision Hinge Lab</span>
                  <span className="text-cyber-amber text-[10px]">180° Mechanics</span>
                </div>
                <p className="text-slate-400 mt-1">Shibuya Scramble Tower 28F, Tokyo 150-6136</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>🇬🇧 London European Center</span>
                  <span className="text-slate-400 text-[10px]">Esports Operations</span>
                </div>
                <p className="text-slate-400 mt-1">10 Finsbury Square, London EC2A 1AF</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact / Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-9 border border-cyber-red/40 shadow-2xl h-full flex flex-col justify-between shadow-neon-red">
            
            {status === 'success' ? (
              <div className="my-auto text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-cyber-red/20 border border-cyber-red flex items-center justify-center mx-auto mb-4 shadow-neon-red">
                  <CheckCircle2 className="w-8 h-8 text-cyber-crimson" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Transmission Received</h3>
                <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <span className="text-cyber-crimson font-bold">{formData.name}</span>. A TENFIVE Gaming Specialist has been assigned to your ticket and will contact <span className="text-white font-mono">{formData.email}</span> shortly.
                </p>
                <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-cyber-red/30 text-xs font-mono text-slate-300">
                  <Flame className="w-4 h-4 text-cyber-red" />
                  <span>Inquiry Reference: #TF-GAME-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', inquiryType: 'VIP Pre-Order', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Priority response queue for review hardware, esports team sponsorship, and VIP drop allocations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      className="w-full bg-obsidian-900/90 border border-cyber-red/30 focus:border-cyber-red rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@studio.io"
                      className="w-full bg-obsidian-900/90 border border-cyber-red/30 focus:border-cyber-red rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Inquiry Department</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-obsidian-900/90 border border-cyber-red/30 focus:border-cyber-red rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="VIP Pre-Order">TENFIVE 180° Gaming VIP Pre-Order</option>
                    <option value="Esports Team">Esports & Gaming Fleet Procurement</option>
                    <option value="Media/Press">Media, Streamer & Press Review Hardware</option>
                    <option value="Hardware Partnership">Game Dev & OEM Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Message / Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your gaming requirements, anticipated fleet volume, or press publication..."
                    className="w-full bg-obsidian-900/90 border border-cyber-red/30 focus:border-cyber-red rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-gradient-to-r from-cyber-red via-cyber-crimson to-cyber-amber hover:opacity-95 text-white font-display font-bold text-base transition-all duration-300 shadow-neon-red active:scale-[0.99] disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Priority Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
