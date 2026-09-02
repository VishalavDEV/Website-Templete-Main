import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  return (
    <PageTransition>
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            24/7 Clinical & Administrative Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact AICarePlus AI
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Reach our patient care desk, emergency trauma center, or scheduling coordinators.
          </p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Emergency Alert Banner */}
          <div className="p-6 rounded-3xl bg-red-500/15 border border-red-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-red-500 text-white animate-bounce">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">Level-1 Emergency Trauma Hotline</h3>
                <p className="text-xs text-slate-300">For life-threatening cardiac events, stroke, acute trauma, or major injury.</p>
              </div>
            </div>
            <div className="text-center md:text-right font-mono">
              <div className="text-2xl font-extrabold text-white">+1 (800) 785-7322</div>
              <div className="text-xs text-red-400 font-bold">24/7 Ambulance Dispatch Available</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-white">Hospital Campus Info</h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Main Campus Address</div>
                      <div className="mt-0.5 text-slate-400 leading-relaxed">
                        742 Evergreen Health Boulevard, Medical District, Pavilion A-D, Boston, MA 02115
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Appointments Desk</div>
                      <div className="mt-0.5 font-mono text-cyan-300">+1 (800) 555-PULSE (+1 800 555-78573)</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Email Inquiries</div>
                      <div className="mt-0.5 font-mono text-cyan-300">care@aicareplus.health</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Outpatient Clinic Hours</div>
                      <div className="mt-0.5 text-slate-400">Mon - Sat: 08:00 AM - 08:00 PM</div>
                      <div className="text-emerald-400 font-semibold mt-0.5">Emergency Department: 24/7/365</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-4 rounded-2xl border border-white/10 relative overflow-hidden h-48 flex items-center justify-center text-center bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                  alt="Campus Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 space-y-1">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
                  <div className="text-sm font-bold text-white">AICarePlus Main Pavilion</div>
                  <div className="text-xs text-cyan-300">Interactive Location GPS Active</div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 rounded-3xl border border-cyan-500/30 shadow-2xl glow-cyan">
                <h3 className="text-xl font-bold text-white mb-1">Send Us a Message</h3>
                <p className="text-xs text-slate-400 mb-6">Our patient relations team responds within 2 business hours.</p>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 mb-6 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Message delivered successfully! A care representative will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Appointment Help">Appointment Scheduling</option>
                      <option value="Diagnostics / Lab">Diagnostics & Lab Reports</option>
                      <option value="Billing & Insurance">Insurance & Billing</option>
                      <option value="Feedback">Patient Feedback</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Type your message or clinical question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
