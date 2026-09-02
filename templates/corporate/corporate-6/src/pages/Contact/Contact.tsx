import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield } from 'lucide-react';
import { officeHubs } from '../../data/offices';
import SectionHeading from '../../components/ui/SectionHeading';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Corporate Travel Program',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Global Advisory Desks
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Connect with Aurelia.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Speak with an enterprise mobility director or request a comprehensive review of your organization's global travel program.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Regional Desks */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#0E1412]">Inquiry Transmitted</h3>
                <p className="text-xs sm:text-sm text-[#62756D] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0E1412]">{formData.name}</strong>. An Aurelia Enterprise Director has been assigned to <strong className="text-[#0E1412]">{formData.company}</strong> and will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] mt-4 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1412]">
                    Enterprise Travel Consultation
                  </h2>
                  <p className="text-xs text-[#62756D] mt-1">
                    Fill in your organization details to receive a complimentary forensic rate benchmarking analysis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Capital Global"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                      Direct Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 20 7946 0912"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                    Inquiry Scope
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                  >
                    <option value="Corporate Travel Program">Corporate Travel Management Program ($500K+ Annual Spend)</option>
                    <option value="Executive Concierge">Executive / C-Suite VIP Concierge Protocol</option>
                    <option value="MICE & Events">MICE / Large Corporate Conference Logistics</option>
                    <option value="Duty of Care Security">Duty of Care & Risk Management Integration</option>
                    <option value="General Inquiry">General Partnership / Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-2">
                    Key Objectives & Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current travel challenges, key flight corridors, or upcoming conference plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Enterprise Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Global Headquarters (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0A261F] text-white border border-[#165042] space-y-4">
              <div className="flex items-center gap-2 text-[#DFBA58] text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>24/7 Global Duty of Care Hotline</span>
              </div>
              <p className="text-xs text-[#D8C3A8]/80 leading-relaxed">
                For active traveling executives experiencing flight cancellations, medical incidents, or emergency extractions.
              </p>
              <div className="p-4 rounded-2xl bg-[#061814] border border-[#165042] text-xs font-mono">
                <div className="text-[#8FA29A]">International Emergency Line:</div>
                <div className="font-bold text-white text-base mt-0.5">+41 22 819 9000</div>
                <div className="text-[10px] text-[#DFBA58] mt-1">Average Response: &lt; 45 Seconds</div>
              </div>
            </div>

            {/* Office Hubs List */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-semibold text-[#0E1412]">Regional Headquarters</h3>
              
              <div className="space-y-4 divide-y divide-[#D8C3A8]/40 text-xs">
                {officeHubs.slice(0, 4).map((hub) => (
                  <div key={hub.city} className="pt-4 first:pt-0 space-y-1">
                    <div className="font-bold text-[#0E1412] flex items-center justify-between">
                      <span>{hub.city} ({hub.country})</span>
                      <span className="text-[10px] font-mono text-[#0F382E] uppercase">{hub.region}</span>
                    </div>
                    <div className="text-[#62756D]">{hub.address}</div>
                    <div className="text-[#8FA29A]">{hub.phone} • {hub.email}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
