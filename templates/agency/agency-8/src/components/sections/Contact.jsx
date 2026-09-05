import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Globe, Share2 } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Contact() {
  const { setCursorState } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'UI/UX & Web Development',
    budget: '$25k - $50k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = ['UI/UX & Web', 'Branding & Identity', 'Mobile App', 'Motion & 3D', 'Growth & Marketing'];
  const budgetRanges = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', projectType: 'UI/UX & Web Development', budget: '$25k - $50k', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#070915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="GET IN TOUCH"
          title="LET'S BUILD SOMETHING EXTRAORDINARY"
          description="Fill out the form below or reach out directly to initiate your project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Direct Info Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">Direct Contacts</h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase block">EMAIL US</span>
                    <a href="mailto:hello@loop.agency" className="text-base sm:text-lg font-syne font-bold text-white hover:text-cyan-400 transition-colors truncate block">
                      hello@loop.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase block">CALL US</span>
                    <a href="tel:+919876543210" className="text-base sm:text-lg font-syne font-bold text-white hover:text-cyan-400 transition-colors truncate block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase block">LOCATION</span>
                    <p className="text-base sm:text-lg font-syne font-bold text-white">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 sm:pt-6 border-t border-white/5">
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase block mb-3 sm:mb-4">FOLLOW LOOP AGENCY</span>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Instagram', 'LinkedIn', 'Dribbble', 'Behance'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={() => setCursorState('button')}
                      onMouseLeave={() => setCursorState('default')}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs font-syne font-bold text-slate-300 hover:bg-cyan-400 hover:text-black transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-syne font-extrabold text-white">Project Request Sent!</h3>
                  <p className="text-slate-400 font-light max-w-md mx-auto">
                    Thank you for reaching out to LOOP AGENCY. Our strategy lead will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Project Type Select Pills */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-3">PROJECT TYPE</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2 rounded-full text-xs font-syne font-bold transition-all ${
                            formData.projectType === type
                              ? 'bg-cyan-400 text-black shadow-[0_0_15px_#22d3ee]'
                              : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-3">PROJECT BUDGET (USD)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                            formData.budget === b
                              ? 'bg-blue-600 text-white shadow-[0_0_15px_#3b82f6]'
                              : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">PROJECT DETAILS *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target timeline, and vision..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onMouseEnter={() => setCursorState('button')}
                    onMouseLeave={() => setCursorState('default')}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Send Project Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
