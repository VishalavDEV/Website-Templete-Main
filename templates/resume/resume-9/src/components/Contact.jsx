import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Share2, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Research Collaboration',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjects = [
    'Research Collaboration',
    'Speaking / Keynote',
    'Workshop Facilitation',
    'Academic Inquiry',
    'General Inquiry'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#1E1B4B', '#4A6B5D', '#EEECF8']
        });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#E6E6E0] relative">
      
      {/* MARGIN ANNOTATION */}
      <div className="hidden lg:block absolute left-8 top-28 w-36 font-mono-tag text-[10px] text-[#9CA3AF] leading-relaxed uppercase border-l border-[#E6E6E0] pl-3">
        SEC 10 &bull; RESEARCH CORRESPONDENCE & INQUIRIES
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT CORRESPONDENCE DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="font-mono-tag text-xs font-semibold text-[#4A6B5D] uppercase tracking-widest block">
                CORRESPONDENCE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E1B4B] leading-tight">
                LET'S ASK<br />
                <span className="font-italic font-normal italic text-[#2A2F45]">BETTER QUESTIONS.</span>
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed font-light">
                Open to research collaborations, behavioral studies, workshops, speaking opportunities, and interdisciplinary conversations.
              </p>
            </div>

            {/* CONTACT DETAILS LIST */}
            <div className="space-y-6 pt-4 border-t border-[#E6E6E0]">
              
              <div>
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                  EMAIL
                </span>
                <a
                  href="mailto:hello@miraellison.example"
                  className="font-serif text-xl font-bold text-[#1E1B4B] hover:text-[#4A6B5D] transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-[#4A6B5D]" />
                  <span>hello@miraellison.example</span>
                </a>
              </div>

              <div>
                <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                  LOCATION
                </span>
                <div className="font-serif text-lg text-[#1E1B4B] flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#4A6B5D]" />
                  <span>Amsterdam, Netherlands</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                    RESEARCH PROFILE
                  </span>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-semibold text-[#1E1B4B] hover:underline flex items-center space-x-1"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#4A6B5D]" />
                    <span>Research Archive</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-1">
                    PROFESSIONAL NETWORK
                  </span>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-semibold text-[#1E1B4B] hover:underline flex items-center space-x-1"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#4A6B5D]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* MEDICAL DISCLAIMER NOTICE */}
            <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#1E1B4B] space-y-1">
              <span className="font-mono-tag text-[10px] text-[#1E1B4B] uppercase font-semibold block">
                IMPORTANT DEMONSTRATION NOTICE
              </span>
              <p className="text-[11px] text-[#6B7280] leading-relaxed">
                This is a fictional research portfolio demonstration. Dr. Mira Ellison is a fictional persona and does not provide clinical diagnosis, medical advice, or psychiatric services.
              </p>
            </div>

          </div>

          {/* RIGHT MINIMAL CONTACT FORM */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E6E6E0] p-8 sm:p-10 shadow-paper relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#E8EFEB] text-[#4A6B5D] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-[#1E1B4B]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto font-light">
                    Thank you for reaching out. In this demonstration environment, your message has been processed successfully.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', organization: '', subject: 'Research Collaboration', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#1E1B4B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#E6E6E0] pb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                    Send a Research Inquiry
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Fill out the inquiry form below to initiate correspondence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* NAME */}
                  <div className="space-y-1">
                    <label className="font-mono-tag text-xs font-medium text-[#1E1B4B] uppercase block">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Alex Vance"
                      className={`w-full bg-white border px-4 py-3 text-sm focus:outline-none focus:border-[#1E1B4B] transition-colors ${
                        errors.name ? 'border-red-400' : 'border-[#E6E6E0]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-1">
                    <label className="font-mono-tag text-xs font-medium text-[#1E1B4B] uppercase block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.vance@example.org"
                      className={`w-full bg-white border px-4 py-3 text-sm focus:outline-none focus:border-[#1E1B4B] transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#E6E6E0]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* ORGANIZATION */}
                  <div className="space-y-1">
                    <label className="font-mono-tag text-xs font-medium text-[#1E1B4B] uppercase block">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Center for Social Inquiry"
                      className="w-full bg-white border border-[#E6E6E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1E1B4B] transition-colors"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div className="space-y-1">
                    <label className="font-mono-tag text-xs font-medium text-[#1E1B4B] uppercase block">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#E6E6E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1E1B4B] transition-colors"
                    >
                      {subjects.map((sub, i) => (
                        <option key={i} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="space-y-1">
                  <label className="font-mono-tag text-xs font-medium text-[#1E1B4B] uppercase block">
                    Inquiry Details / Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research proposal, event invitation, or inquiry..."
                    className={`w-full bg-white border px-4 py-3 text-sm focus:outline-none focus:border-[#1E1B4B] transition-colors ${
                      errors.message ? 'border-red-400' : 'border-[#E6E6E0]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1E1B4B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45] transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
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
