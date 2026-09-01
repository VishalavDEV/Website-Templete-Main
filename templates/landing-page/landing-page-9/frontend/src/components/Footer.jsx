import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Youtube, Linkedin, Shield } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative w-full bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Top CTA Banner in Footer */}
        <div className="rounded-3xl bg-gradient-to-r from-[#121218] via-[#1a1a24] to-[#121218] border border-white/10 p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2994A]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2994A] block mb-2">
              Bespoke Mobility
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Ready to Command the Road?
            </h3>
            <p className="mt-2 text-sm text-[#8E8E99]">
              Join over 4,000 elite drivers across 30 global metropolitan hubs.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="relative z-10 px-8 py-4 rounded-full bg-[#F2994A] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(242,153,74,0.4)] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Commence Reservation
          </button>
        </div>

        {/* Footer Links & Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <span className="font-display font-black text-2xl tracking-tight text-white block mb-4">
              ExquDrive<span className="text-[#F2994A]">.</span>
            </span>
            <p className="text-xs text-[#8E8E99] max-w-sm leading-relaxed mb-6">
              The premier ultra-luxury automotive platform offering immediate concierge access to the world's most coveted supercars and grand tourers.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F2994A] hover:text-black border border-white/10 flex items-center justify-center text-white/70 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F2994A] hover:text-black border border-white/10 flex items-center justify-center text-white/70 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F2994A] hover:text-black border border-white/10 flex items-center justify-center text-white/70 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F2994A] hover:text-black border border-white/10 flex items-center justify-center text-white/70 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Col 1 */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2994A] mb-4">
              Fleet Category
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E99]">
              <li><a href="#fleet" className="hover:text-white transition-colors">Track Coupes</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Supercars</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Ultra Luxury Saloons</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Prestige SUVs</a></li>
            </ul>
          </div>

          {/* Navigation Col 2 */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2994A] mb-4">
              Concierge Hubs
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E99]">
              <li><span className="hover:text-white transition-colors">Monaco &bull; Nice</span></li>
              <li><span className="hover:text-white transition-colors">Zurich &bull; Geneva</span></li>
              <li><span className="hover:text-white transition-colors">London &bull; Mayfair</span></li>
              <li><span className="hover:text-white transition-colors">Dubai &bull; Palm</span></li>
            </ul>
          </div>

          {/* Navigation Col 3 */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2994A] mb-4">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E8E99]">
              <li><a href="#security" className="hover:text-white transition-colors">Security Charter</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Direct Support 24/7</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E8E99]/70 gap-4">
          <div>
            &copy; {new Date().getFullYear()} ExquDrive Automotive Holding S.A. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/60">
              <Shield className="w-3.5 h-3.5 text-[#F2994A]" /> End-to-End Encrypted Fleet Telemetry
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
