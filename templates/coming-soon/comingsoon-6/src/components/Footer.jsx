import React from 'react';
import { Globe, MessageSquare, Code2, Video, ShieldCheck, Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyber-red/20 bg-obsidian-950/85 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">TENFIVE</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyber-red/15 text-cyber-crimson border border-cyber-red/40 font-mono">GAMING PRO</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              © {new Date().getFullYear()} TENFIVE Technologies Inc. All rights reserved. Engineered for elite gamers & creators.
            </p>
          </div>

          {/* Operational Status with Red Gaming Pulse */}
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-rose-300 shadow-neon-red">
            <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
            <span>Gaming Battle Uplink: 100% Active</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 text-slate-400">
            <a href="#" aria-label="Global Network" className="hover:text-cyber-crimson transition-colors p-2 rounded-lg bg-white/5 hover:bg-cyber-red/10 border border-white/5 hover:border-cyber-red/30">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Gaming Discord Community" className="hover:text-cyber-crimson transition-colors p-2 rounded-lg bg-white/5 hover:bg-cyber-red/10 border border-white/5 hover:border-cyber-red/30">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Developer Docs" className="hover:text-cyber-crimson transition-colors p-2 rounded-lg bg-white/5 hover:bg-cyber-red/10 border border-white/5 hover:border-cyber-red/30">
              <Code2 className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitch / YouTube Stream" className="hover:text-cyber-crimson transition-colors p-2 rounded-lg bg-white/5 hover:bg-cyber-red/10 border border-white/5 hover:border-cyber-red/30">
              <Video className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
