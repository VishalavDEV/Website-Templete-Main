import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import client from '../api/client';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    setGeneralError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setGeneralError('');

    try {
      const res = await client.post('/contact', formData);
      if (res.data && res.data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setGeneralError(res.data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errorData = err.response.data;
        if (errorData && errorData.data) {
          setErrors(errorData.data);
        } else {
          setGeneralError(errorData.message || 'Validation failed.');
        }
      } else {
        console.error('Contact submission error', err);
        setGeneralError('Failed to connect to the backend server. Make sure it is running on port 8080.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-20 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[50%] aspect-square rounded-full bg-purple-100/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] aspect-square rounded-full bg-indigo-100/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <section className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-mono uppercase mb-6">
            PARTNER WITH US
          </h1>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            Submit your concept. Our squad will review details, draft initial validation metrics, and schedule an introductory sprint check.
          </p>
        </section>

        {/* Form Container */}
        <div className="max-w-xl mx-auto bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* General Error Banner */}
                {generalError && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3 text-red-600 text-xs font-medium"
                  >
                    <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                    <span>{generalError}</span>
                  </motion.div>
                )}

                {/* Name Field */}
                <div className="relative w-full group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block py-3 px-1 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-purple-600'
                    } appearance-none focus:outline-none focus:ring-0 peer transition-colors`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-5 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-purple-600"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <span className="text-[10px] text-red-500 mt-1 block font-mono">{errors.name}</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative w-full group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block py-3 px-1 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-purple-600'
                    } appearance-none focus:outline-none focus:ring-0 peer transition-colors`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-5 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-purple-600"
                  >
                    Email Address
                  </label>
                  {errors.email && (
                    <span className="text-[10px] text-red-500 mt-1 block font-mono">{errors.email}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative w-full group">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block py-3 px-1 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 ${
                      errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-purple-600'
                    } appearance-none focus:outline-none focus:ring-0 peer transition-colors resize-none`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-5 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-purple-600"
                  >
                    Tell us about your venture concept...
                  </label>
                  {errors.message && (
                    <span className="text-[10px] text-red-500 mt-1 block font-mono">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold text-xs tracking-widest uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 font-mono"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-10 space-y-5 flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                >
                  <CheckCircle size={56} className="text-purple-600" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 font-mono">APPLICATION RECEIVED</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                    Thank you! Your concept application has been received and logged by our venture team. We will reach out shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 border border-slate-200 text-slate-500 hover:text-slate-800 rounded-xl text-xs font-mono font-bold tracking-wider hover:bg-slate-50 transition-colors uppercase"
                >
                  Submit Another Idea
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
