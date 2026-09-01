'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="about" className="w-full bg-[#FFF9F5] border-t border-[#F3D0D7] pt-14 pb-8 text-[#2D2224]">
      {/* Guarantees Ticker */}
      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-3xl border border-[#F3D0D7] bg-white p-6 shadow-xs">
          <div className="flex items-center gap-3 text-left">
            <div className="rounded-full bg-[#F7DDE2] p-3 text-[#B76E79]">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold">Complimentary Express Shipping</h4>
              <p className="text-xs text-[#7E6B6E]">On all orders over ₹999 across India</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="rounded-full bg-[#F7DDE2] p-3 text-[#B76E79]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold">100% Clean & Biocompatible</h4>
              <p className="text-xs text-[#7E6B6E]">Dermatologist tested, non-toxic & vegan</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="rounded-full bg-[#F7DDE2] p-3 text-[#B76E79]">
              <RefreshCw className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold">30-Day Soft Glow Guarantee</h4>
              <p className="text-xs text-[#7E6B6E]">Hassle-free 30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F3D0D7]/60">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="group inline-flex items-center gap-2 font-heading text-3xl font-extrabold text-[#2D2224]">
            <span>Soft</span>
            <span className="font-accent italic text-[#B76E79] font-normal">Glow</span>
            <Sparkles className="h-4 w-4 text-[#B76E79]" />
          </Link>

          <p className="text-xs sm:text-sm text-[#7E6B6E] leading-relaxed max-w-md">
            Clean, skin-first lip cosmetics crafted with cold-pressed rose lipids, biocompatible tri-peptides, and raw plant seed oils. Designed for everyday natural radiance.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <a href="#" className="rounded-full border border-[#F3D0D7] bg-white p-2 text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <span className="text-xs text-[#7E6B6E] font-medium">@softglowbeauty</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-heading text-lg font-bold text-[#2D2224]">Shop & Explore</h4>
          <ul className="space-y-2 text-xs font-medium text-[#7E6B6E]">
            <li><Link href="/shop" className="hover:text-[#B76E79] transition-colors">Shop All Products</Link></li>
            <li><Link href="/#new-arrivals" className="hover:text-[#B76E79] transition-colors">New Arrivals</Link></li>
            <li><Link href="/#bestsellers" className="hover:text-[#B76E79] transition-colors">Best Sellers</Link></li>
            <li><Link href="/#routine" className="hover:text-[#B76E79] transition-colors">4-Step Skincare Routine</Link></li>
            <li><Link href="/#reviews" className="hover:text-[#B76E79] transition-colors">Customer Reviews</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup Column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-heading text-lg font-bold text-[#2D2224]">Join Soft Glow Club</h4>
          <p className="text-xs text-[#7E6B6E]">
            Subscribe to receive secret drops, 15% off your first order, and lip care tips.
          </p>

          {subscribed ? (
            <div className="rounded-2xl bg-[#F7DDE2] p-4 text-xs font-bold text-[#9E5661] text-center flex items-center justify-center gap-2">
              <Check className="h-4 w-4" />
              <span>Welcome to the Soft Glow Club! Check your inbox for 15% off.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-[#F3D0D7] bg-white px-4 py-2.5 text-xs text-[#2D2224] outline-none focus:border-[#B76E79] placeholder:text-[#7E6B6E]/60"
              />
              <button
                type="submit"
                className="rounded-full bg-[#B76E79] p-2.5 text-white hover:bg-[#9E5661] transition-colors flex-shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7E6B6E] gap-2">
        <span>© {new Date().getFullYear()} Soft Glow Beauty Inc. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Shipping & Returns</a>
        </div>
      </div>
    </footer>
  );
};
