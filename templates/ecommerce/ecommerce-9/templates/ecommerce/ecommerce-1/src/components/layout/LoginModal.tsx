'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, ArrowRight, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const LoginModal: React.FC = () => {
  const { isLoginOpen, closeLogin } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeLogin();
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLogin}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeLogin}
                className="absolute right-5 top-5 rounded-full p-2 text-stone-400 hover:bg-stone-200/60 hover:text-stone-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center space-y-2 mb-6">
                <a href="#" className="font-heading text-2xl font-bold tracking-widest text-[#1C1917] block">
                  XYZ <span className="font-accent text-xl text-[#D98A7F] font-normal">Beauty</span>
                </a>
                <h3 className="font-heading text-3xl font-bold text-stone-900">
                  Welcome Back
                </h3>
                <p className="text-xs text-stone-500 font-body">
                  Sign in to access your saved shade wishlist and rewards.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-8 rounded-2xl bg-white p-6 text-center border border-stone-200 shadow-sm space-y-3"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D98A7F]/20 text-[#D98A7F]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-stone-900">Successfully Signed In</h4>
                  <p className="text-xs text-stone-500 font-body">Redirecting to your XYZ Beauty account...</p>
                </motion.div>
              ) : (
                /* Login Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">Email or Username</label>
                    <div className="flex items-center rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 shadow-2xs focus-within:border-[#D98A7F] focus-within:ring-2 focus-within:ring-[#D98A7F]/20 transition-all">
                      <Mail className="h-4 w-4 text-stone-400 mr-2.5 flex-shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm text-stone-900 outline-none placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">Password</label>
                    <div className="flex items-center rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 shadow-2xs focus-within:border-[#D98A7F] focus-within:ring-2 focus-within:ring-[#D98A7F]/20 transition-all">
                      <Lock className="h-4 w-4 text-stone-400 mr-2.5 flex-shrink-0" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm text-stone-900 outline-none placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-stone-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-stone-300 text-[#D98A7F] focus:ring-[#D98A7F]"
                      />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="font-medium text-[#D98A7F] hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="magnetic-target w-full flex items-center justify-center gap-2 rounded-full bg-[#1C1917] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#D98A7F] transition-all duration-300 mt-6"
                  >
                    <span>Sign In to XYZ Beauty</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </form>
              )}

              {/* Bottom Footer Note */}
              <div className="mt-6 border-t border-stone-200 pt-4 text-center text-xs text-stone-500">
                Don't have an account yet?{' '}
                <a href="#" className="font-semibold text-[#1C1917] hover:text-[#D98A7F] underline">
                  Create an Account
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
