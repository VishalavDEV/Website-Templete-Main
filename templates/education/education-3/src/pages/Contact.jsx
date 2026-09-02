import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: 'General Admissions',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <MessageSquare className="w-4 h-4" />
            <span>COMMUNICATION DESK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Connect With Aetheria.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Have questions regarding academic fellowships, research lab access, corporate partnerships, or campus visits? Reach out to our advisory team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6 bg-slate-950/60">
              <h3 className="text-2xl font-bold text-white font-display">Campus Headquarters</h3>

              <div className="space-y-4 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-bold">Main Campus Quad</div>
                    <div>Aetheria Tower, Innovation Plaza 101</div>
                    <div>Zurich / Geneva Academic Corridor</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-violetAccent-400 shrink-0" />
                  <span>admissions@aetheria.edu</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>+41 44 892 1000</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
              <h4 className="text-lg font-bold text-white font-display">Department Directories</h4>
              <ul className="space-y-2 text-xs font-mono text-slate-400">
                <li className="flex justify-between"><span>Research Office:</span> <span className="text-electric-300">research@aetheria.edu</span></li>
                <li className="flex justify-between"><span>Venture Incubator:</span> <span className="text-violetAccent-400">ventures@aetheria.edu</span></li>
                <li className="flex justify-between"><span>Press & Media:</span> <span className="text-cyan-300">press@aetheria.edu</span></li>
              </ul>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl glass-panel border border-electric-500/30 bg-slate-900/80">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white font-display">Send a Direct Message</h3>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="marcus@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Target Department</label>
                    <select
                      value={form.department}
                      onChange={(e) => setForm(prev => ({ ...prev, department: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                    >
                      <option value="General Admissions">General Admissions</option>
                      <option value="Research & Lab Grants">Research & Lab Grants</option>
                      <option value="Faculty & Mentorship">Faculty & Mentorship</option>
                      <option value="Venture Incubator">Venture Incubator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Write your inquiry or partnership proposal..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-600 to-violetAccent-600 hover:from-electric-500 hover:to-violetAccent-500 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-electric-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH MESSAGE</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Message Received</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {form.name}. Our communication desk will process your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 text-xs font-semibold"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
