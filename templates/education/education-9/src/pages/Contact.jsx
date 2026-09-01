import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { api } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await api.submitContact(formData);
      if (response && response.status === 'success') {
        setSuccessMsg(response.message || "Thank you! Your message was received successfully.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg("Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Get in Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Connect with our Campus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            Have a question about our structured roadmaps, student badges, or career tracks? Drop us a line!
          </motion.p>
        </div>

        {/* Contact form grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-lg space-y-6">
            <h3 className="font-extrabold text-base text-education-navy">Send us a Message</h3>
            
            <AnimatePresence mode="wait">
              {successMsg ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 rounded-2xl border border-green-200 bg-green-50/50 flex items-start gap-3"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs text-green-700">Message Submitted</h4>
                    <p className="text-xs text-green-600 font-medium">{successMsg}</p>
                    <button 
                      onClick={() => setSuccessMsg('')} 
                      className="text-[10px] text-green-600 font-bold underline hover:text-green-700 mt-2 block"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-education-navy/70">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-education-navy/70">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-education-navy/70">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Question about curriculum..."
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-education-navy/70">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Write your query here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 hover:shadow-md transition-all flex items-center justify-center gap-1.5 uppercase tracking-wide disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={12} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Cards & Mock Animation */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info details */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-white/50 backdrop-blur-sm space-y-4">
              <h3 className="font-extrabold text-base text-education-navy">Campus Locations</h3>
              <div className="space-y-3.5 text-xs text-education-navy/80">
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-sky-500" />
                  <span>support@motionedu.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-sky-500" />
                  <span>+1 (800) 555-0199</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-sky-500" />
                  <span>Silicon Valley Campus, CA, USA</span>
                </div>
              </div>
            </div>

            {/* Simulated mailing flow animations card */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-sky-50/30 backdrop-blur-sm relative overflow-hidden h-44 flex flex-col justify-center items-center select-none shadow-inner">
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 4, 0]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-sky-100/60 shadow-lg flex items-center justify-center text-sky-500"
              >
                <MessageSquare size={28} className="animate-pulse" />

                {/* Flying Mail Icon 1 */}
                <motion.div
                  animate={{ y: [0, -40, 0], x: [0, -35, 0], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
                  className="absolute p-1.5 rounded-lg bg-sky-400 text-white shadow-md"
                >
                  <Mail size={10} />
                </motion.div>

                {/* Flying Mail Icon 2 */}
                <motion.div
                  animate={{ y: [0, -50, 0], x: [0, 40, 0], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeOut", delay: 1 }}
                  className="absolute p-1.5 rounded-lg bg-cyan-400 text-white shadow-md"
                >
                  <Mail size={10} />
                </motion.div>
              </motion.div>
              
              <p className="text-[10px] text-education-navy/50 font-bold uppercase tracking-wider mt-4">
                Message Flow Visualizer
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
