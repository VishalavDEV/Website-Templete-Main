import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Mail, MapPin, Phone, Send, Check } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { name, email, subject, message };
      await axios.post('http://localhost:8080/api/contact', payload);
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    } catch (err) {
      console.error("Error submitting contact form", err);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Support</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Have queries about custom timelines, booking numbers, or flight connections? Drop us a line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Direct Info */}
        <div className="space-y-6 lg:col-span-1">
          <div className="glass-panel rounded-3xl p-6 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Details</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@travelverse.com</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (234) 567-890</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 text-center space-y-4">
            <Compass className="w-8 h-8 text-indigo-400 mx-auto animate-spin" />
            <h4 className="font-bold text-white text-xs">Support Hours</h4>
            <p className="text-slate-400 text-[10px] leading-relaxed">
              Our automated coordinate trackers and customer relations lines are available 24/7.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2 glass-panel rounded-3xl p-6 lg:p-8 border border-slate-800 relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-4"
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="abc@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Booking inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Type details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold text-xs flex items-center justify-center space-x-2"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/20">
                  <Check className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                
                {/* Paper plane animated path */}
                <div className="relative w-40 h-20 mx-auto overflow-hidden">
                  <motion.div
                    initial={{ x: -10, y: 30, rotate: 15 }}
                    animate={{ x: 180, y: -20, rotate: 5 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="absolute text-teal-400"
                  >
                    <Send className="w-8 h-8 fill-current" />
                  </motion.div>
                </div>

                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Your inquiry has been registered. Our support team will coordinate with your email shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
