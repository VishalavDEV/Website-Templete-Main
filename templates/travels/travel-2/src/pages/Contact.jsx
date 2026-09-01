import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Compass, Plane, Heart, RefreshCw } from 'lucide-react';
import { submitContact } from '../services/api';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'animating', 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');
    
    // Call the API service
    await submitContact({ name, email, phone, destination: dest, message });

    // Transition to envelope animations
    setTimeout(() => {
      setStatus('animating');
    }, 1000);

    // Final delivered stage
    setTimeout(() => {
      setStatus('sent');
    }, 2800);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDest('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#ff2a74]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Contact Info */}
        <div className="lg:col-span-5">
          <div className="max-w-md mb-8">
            <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading font-extrabold">Postcard Registry</span>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-stone-850 mt-1">
              Contact Us.
            </h1>
            <p className="text-xs text-stone-500 mt-3 leading-relaxed font-medium">
              Have questions about flight coordinates, custom itineraries, or local tour guides? Drop us a digital airmail postcard.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-xs font-semibold text-stone-600">
            <div className="flex items-center gap-3.5 p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
              <MapPin className="text-[#ff2a74]" size={16} />
              <div>
                <h4 className="font-heading font-extrabold text-stone-800 mb-0.5">HQ Terminal</h4>
                <span>100 Voyager Plaza, Chennai, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
              <Phone className="text-[#0066ff]" size={16} />
              <div>
                <h4 className="font-heading font-extrabold text-stone-800 mb-0.5">Air Call Center</h4>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
              <Mail className="text-[#ff2a74]" size={16} />
              <div>
                <h4 className="font-heading font-extrabold text-stone-800 mb-0.5">Support Inbox</h4>
                <span>explore@wanderly.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Postcard / Envelope */}
        <div className="lg:col-span-7 min-h-[460px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            
            {/* Stage 1: Active Form (Postcard style) */}
            {(status === 'idle' || status === 'submitting') && (
              <motion.div
                key="form-postcard"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full bg-white border-2 border-stone-200 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden"
              >
                {/* Airmail stripes border overlay */}
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-white to-[#0066ff] bg-[length:24px_100%] repeat-x" />
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-500 via-white to-[#0066ff] bg-[length:24px_100%] repeat-x" />

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] uppercase font-bold text-stone-400">FullName</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="glass-input text-xs border-stone-200 py-2.5 px-3"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] uppercase font-bold text-stone-400">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="glass-input text-xs border-stone-200 py-2.5 px-3"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] uppercase font-bold text-stone-400">Phone</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="glass-input text-xs border-stone-200 py-2.5 px-3"
                        placeholder="+91 98765..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] uppercase font-bold text-stone-400">Target Destination</label>
                      <input
                        type="text"
                        value={dest}
                        onChange={(e) => setDest(e.target.value)}
                        className="glass-input text-xs border-stone-200 py-2.5 px-3"
                        placeholder="e.g. Kerala, Switzerland"
                      />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <label className="text-[9px] uppercase font-bold text-stone-400">Your Inquiry Message</label>
                      <textarea
                        required
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="glass-input text-xs border-stone-200 py-2 px-3 flex-1 resize-none"
                        placeholder="Tell us what you'd like to plan..."
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 flex justify-between items-center mt-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-stone-400">
                      <Compass size={12} className="animate-spin text-[#ff2a74]" style={{ animationDuration: '8s' }} />
                      <span>AIRMAIL PROTOCOL</span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-95 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <RefreshCw size={12} className="animate-spin" />
                          <span>Sealing...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          <span>Send Airmail</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Stage 2: Sealing & Envelope Closure Flying Animation */}
            {status === 'animating' && (
              <motion.div
                key="sealing-envelope"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.9, 1.05, 0.4],
                  rotate: [-5, 5, 45],
                  x: [0, 0, 500],
                  y: [0, 0, -400],
                }}
                transition={{
                  duration: 2.2,
                  times: [0, 0.3, 1],
                  ease: 'easeInOut',
                }}
                className="w-80 h-52 bg-stone-100 border-2 border-stone-300 rounded-2xl shadow-xl flex flex-col justify-between p-4 relative"
              >
                {/* Dotted stamp placeholder */}
                <div className="absolute top-4 right-4 w-12 h-16 border-2 border-dashed border-[#ff2a74] rounded-md flex items-center justify-center text-[#ff2a74] text-xs font-bold select-none">
                  Stamp
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="w-16 h-3 bg-stone-200 rounded-full" />
                  <div className="w-24 h-3 bg-stone-200 rounded-full mt-1" />
                </div>

                <div className="flex items-center gap-2 border-t border-stone-200 pt-3 text-[10px] text-stone-500">
                  <Plane size={14} className="text-[#ff2a74] rotate-45 animate-pulse" />
                  <span className="font-bold">POSTCARD SEALED • FLYING AWAY...</span>
                </div>
              </motion.div>
            )}

            {/* Stage 3: Sent Success Message */}
            {status === 'sent' && (
              <motion.div
                key="sent-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-white border border-stone-200 rounded-3xl p-8 text-center shadow-sm max-w-sm flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-4 text-2xl animate-bounce">
                  ✨
                </div>
                <h3 className="font-heading font-black text-stone-850 text-lg">Postcard Delivered!</h3>
                <p className="text-xs text-stone-500 max-w-xs mt-1.5 leading-relaxed font-semibold">
                  Thank you! Your travel request has successfully landed in our HQ terminal. We'll coordinates your guides shortly.
                </p>

                <button
                  onClick={handleReset}
                  className="mt-6 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl border border-stone-200 transition-colors cursor-pointer"
                >
                  Send another Postcard
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
