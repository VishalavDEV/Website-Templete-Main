import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email must be a valid address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('submitting');
    try {
      const response = await api.submitContact(formData);
      setSubmitStatus('success');
      setStatusMessage(response.message || 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setStatusMessage(err.message || 'Failed to submit contact enquiry. Please try again.');
      if (err.errors) {
        setErrors(err.errors);
      }
    }
  };

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 overflow-hidden">
        {/* HEADER */}
        <section className="relative max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
          <div className="absolute top-[-30%] left-[20%] w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primaryAccent"
          >
            <span>Get in Touch</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-primaryText leading-tight max-w-2xl"
          >
            Let's Collaborate On Your <span className="gradient-text">Next Venture</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondaryText text-sm sm:text-base max-w-lg leading-relaxed"
          >
            Fill out the form below and our architectural team will reach back within 24 hours.
          </motion.p>
        </section>

        {/* CONTENT LAYOUT */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info cards (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-primaryText text-sm mb-1">Corporate Office</h3>
                <p className="text-secondaryText text-xs leading-relaxed">
                  100 Innovation Way, Suite 400<br />Silicon Valley, CA 94025
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-primaryText text-sm mb-1">Email Enquiries</h3>
                <a href="mailto:hello@auradigital.com" className="text-secondaryText text-xs hover:text-primaryText transition-colors">
                  hello@auradigital.com
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-primaryText text-sm mb-1">Call Support</h3>
                <a href="tel:+15551234567" className="text-secondaryText text-xs hover:text-primaryText transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-primaryText">Enquiry Transmitted!</h2>
                  <p className="text-secondaryText text-sm max-w-sm">
                    {statusMessage}
                  </p>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="mt-4 border border-slate-200 text-primaryText px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {submitStatus === 'error' && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3.5 rounded-xl text-xs flex items-center gap-3">
                      <AlertTriangle size={18} className="shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors ${
                          errors.name ? 'border-rose-300 focus:border-rose-400' : 'border-slate-100'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 font-semibold">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Email Address *</label>
                      <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors ${
                          errors.email ? 'border-rose-300 focus:border-rose-400' : 'border-slate-100'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-rose-500 font-semibold">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Subject *</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors ${
                        errors.subject ? 'border-rose-300 focus:border-rose-400' : 'border-slate-100'
                      }`}
                      placeholder="Project architecture analysis"
                    />
                    {errors.subject && <span className="text-[10px] text-rose-500 font-semibold">{errors.subject}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primaryText uppercase tracking-wider">Your Message *</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-colors resize-none ${
                        errors.message ? 'border-rose-300 focus:border-rose-400' : 'border-slate-100'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && <span className="text-[10px] text-rose-500 font-semibold">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="gradient-bg text-white py-3.5 rounded-xl font-semibold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 select-none cursor-pointer disabled:opacity-50"
                  >
                    {submitStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
