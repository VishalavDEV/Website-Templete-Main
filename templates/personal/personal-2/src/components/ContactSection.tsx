import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            LET'S WORK TOGETHER
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between group hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Email Me</span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="font-heading font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy email"
                className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">Location</span>
                <span className="font-heading font-bold text-sm text-slate-900">
                  {PROFILE_DATA.location}
                </span>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-800">
                {PROFILE_DATA.availability}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
            
            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto font-sans">
                  Thanks for reaching out! Arjun will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white font-sans transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-3 rounded-xl font-heading font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

