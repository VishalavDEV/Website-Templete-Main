import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

export default function Contact({ onShowToast, onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Portrait & Editorial',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      onShowToast({ message: 'Please provide your name and email address.', type: 'info' });
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast({ message: 'Message sent successfully! We will get back to you within 24 hours.', type: 'success' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        sessionType: 'Portrait & Editorial',
        date: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#141414] text-white overflow-hidden scroll-mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#e74c3c] uppercase">
              GET IN TOUCH
            </span>
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Create Something Timeless
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Have an upcoming project, wedding, or private portrait session in mind? Send an inquiry or reserve your date directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#181818] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Studio Contact Details
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#e74c3c]/10 text-[#e74c3c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Direct Inquiries</div>
                  <a href="mailto:hello@photom4.studio" className="text-sm font-semibold text-white hover:text-[#e74c3c] transition-colors">
                    hello@photom4.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#e74c3c]/10 text-[#e74c3c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Phone & WhatsApp</div>
                  <a href="tel:+41445550199" className="text-sm font-semibold text-white hover:text-[#e74c3c] transition-colors">
                    +41 44 555 0199 / +1 (555) 234-8890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#e74c3c]/10 text-[#e74c3c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Studio Location</div>
                  <div className="text-sm font-semibold text-white">
                    Limmatquai 42, 8001 Zürich, Switzerland
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#e74c3c]/10 text-[#e74c3c]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Studio Hours</div>
                  <div className="text-sm font-semibold text-white">
                    Mon – Sat: 08:30 – 19:00 (CET)
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Callout Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1f1616] to-[#181818] border border-[#e74c3c]/30 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#e74c3c] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Instant Reservation</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Want to book a photoshoot package right away?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Use our interactive booking tool to choose your desired package, select open calendar dates, and calculate rates instantly.
              </p>
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e74c3c] hover:bg-[#d63031] text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                Open Booking Scheduler
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Send a Message
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-8">
                Fill out the brief form below and we'll reply with a custom brochure and available shoot dates.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Your inquiry has been received. Elena and our studio management will review your request and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Session Type
                      </label>
                      <select
                        value={formData.sessionType}
                        onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1e1e1e] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#e74c3c] transition-colors"
                      >
                        <option value="Portrait & Editorial">Portrait & Editorial</option>
                        <option value="Weddings & Celebrations">Weddings & Celebrations</option>
                        <option value="Commercial & Brand Campaign">Commercial & Brand Campaign</option>
                        <option value="Destination Expedition">Destination Expedition</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Tell Us About Your Vision & Preferred Dates
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your location, vision, aesthetic expectations, or timeline..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#e74c3c] hover:bg-[#d63031] text-white shadow-xl shadow-[#e74c3c]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
