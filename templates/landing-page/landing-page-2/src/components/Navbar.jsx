import React from 'react';
import { Cloud, ExternalLink } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full pt-8 pb-4 px-8 max-w-7xl mx-auto flex items-center justify-between">
      {/* Left Navigation Links */}
      <nav className="flex items-center gap-7 text-[13px] font-medium text-gray-500">
        <a href="#hero" className="text-gray-900 font-semibold hover:text-black transition-colors">
          Home
        </a>
        <a href="#features" className="hover:text-gray-900 transition-colors">
          Shop
        </a>
        <a href="#productivity" className="hover:text-gray-900 transition-colors">
          Downloads
        </a>
        <a href="#productivity" className="hover:text-gray-900 transition-colors">
          Blog
        </a>
      </nav>

      {/* Right Cloud Access Box */}
      <div className="flex items-center gap-3 text-right">
        <div className="w-9 h-7 rounded-xl bg-gray-500/80 flex items-center justify-center text-white text-[9px] font-mono font-bold tracking-tighter">
          BUSY
        </div>
        <div className="flex flex-col text-left">
          <a href="#productivity" className="text-xs font-semibold text-gray-800 hover:text-[#FF5A1F] flex items-center gap-1">
            <span>Cloud Access</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
          <span className="text-[10px] text-gray-400 leading-tight max-w-[210px]">
            Log in to Busy Cloud to control your device via API and MQTT
          </span>
        </div>
      </div>
    </header>
  );
}
