import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Archive, Send, CheckCircle2, AlertCircle, Signal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields before transmission.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid communication email address.');
      return;
    }

    setStatus('transmitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-b border-slate-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>08 / CONTACT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-slate-900 mt-3 tracking-tight uppercase">
            READY FOR THE <br />
            <span className="text-sky-800">NEXT MISSION.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-sans">
            "Open to research collaboration, engineering discussions, systems innovation, and future-focused aerospace projects."
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Direct Contact Channels & Metadata Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-800 shadow-xl space-y-6 tech-corner-box">
              <div className="flex items-center space-x-2 text-sky-400 font-mono-tech text-xs uppercase tracking-widest border-b border-slate-800 pb-3">
                <Signal className="w-4 h-4 animate-pulse" />
                <span>DIRECT TELEMETRY CHANNELS</span>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                  COMMUNICATION EMAIL
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-mono-tech font-bold text-sky-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                  BASE LOCATION
                </span>
                <div className="text-sm font-mono-tech text-slate-200 font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  {PERSONAL_INFO.location}
                </div>
              </div>

              {/* Networks */}
              <div className="pt-4 border-t border-slate-800 space-y-3 font-mono-tech text-xs">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  PROFESSIONAL ARCHIVES
                </span>

                <div className="flex flex-col space-y-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-950 rounded border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <span className="text-[10px] text-slate-500">[PLACEHOLDER]</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.archive}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-950 rounded border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Archive className="w-4 h-4 text-cyan-400" />
                      <span>Technical Archive</span>
                    </span>
                    <span className="text-[10px] text-slate-500">[PLACEHOLDER]</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Transmission Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm tech-corner-box">
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-sky-600" />
              <span>TRANSMIT MESSAGE</span>
            </h3>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-6 rounded-lg font-mono-tech space-y-3 animate-fadeIn">
                <div className="flex items-center space-x-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>TRANSMISSION ACKNOWLEDGED</span>
                </div>
                <p className="text-xs text-emerald-800 font-sans">
                  Your message telemetry packet has been encrypted and received. Dr. Arin Solberg will respond shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-mono-tech uppercase font-bold"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono-tech text-xs">
                {status === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-slate-700 uppercase font-semibold">
                      Your Name <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Elena Vance"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm font-sans outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-slate-700 uppercase font-semibold">
                      Email Address <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.org"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm font-sans outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-slate-700 uppercase font-semibold">
                      Organization / Institute
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Fictional Research Lab"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm font-sans outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-slate-700 uppercase font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Orbital System Collaboration"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm font-sans outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-700 uppercase font-semibold">
                    Message <span className="text-sky-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your engineering inquiry or collaboration proposal..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm font-sans outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'transmitting'}
                  className="w-full py-3.5 bg-slate-900 hover:bg-sky-700 text-white font-mono-tech text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all duration-200 btn-signal flex items-center justify-center space-x-2"
                >
                  {status === 'transmitting' ? (
                    <span>ENCRYPTING &amp; TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
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
