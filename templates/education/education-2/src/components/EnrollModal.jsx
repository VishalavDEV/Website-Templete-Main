import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

export default function EnrollModal({ course, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    plan: 'one-time'
  });

  if (!course) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Enrollment Confirmed!</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Congratulations! You have successfully registered for <span className="font-bold text-slate-800">{course.title}</span>. A confirmation email with dashboard credentials has been dispatched to <span className="font-semibold text-primary-600">{formData.email || 'your email'}</span>.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-left border border-slate-100 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Student:</span>
                  <span className="font-bold text-slate-800">{formData.fullName || 'Registered Student'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Course Duration:</span>
                  <span className="font-semibold text-slate-700">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Access Type:</span>
                  <span className="font-semibold text-emerald-600">Lifetime Access</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-primary-600/30"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <div>
              {/* Modal Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-primary-950 to-slate-900 text-white p-6 relative">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-sky-400">
                  <Sparkles className="w-4 h-4" />
                  Instant Enrollment Admission
                </div>
                <h3 className="text-xl font-bold line-clamp-1 pr-6">{course.title}</h3>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                  <span>Instructor: {course.instructor.name}</span>
                  <span>•</span>
                  <span>{course.duration}</span>
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Payment Plan
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, plan: 'one-time' })}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        formData.plan === 'one-time'
                          ? 'border-primary-600 bg-primary-50 text-primary-900 ring-2 ring-primary-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold">One-Time Payment</div>
                      <div className="text-slate-500 text-[11px] font-medium">${course.price} total</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, plan: 'installment' })}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        formData.plan === 'installment'
                          ? 'border-primary-600 bg-primary-50 text-primary-900 ring-2 ring-primary-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold">3 Monthly Payments</div>
                      <div className="text-slate-500 text-[11px] font-medium">${Math.round(course.price / 3)}/mo</div>
                    </button>
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Course Tuition</span>
                    <span>${course.price}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Digital Resource Access Fee</span>
                    <span className="text-emerald-600 font-medium">FREE</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-sm text-slate-900">
                    <span>Total Amount</span>
                    <span className="text-primary-600">${course.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>30-Day Money-Back Guarantee. Encrypted TLS Checkout.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-md shadow-primary-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  Complete Instant Enrollment
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
