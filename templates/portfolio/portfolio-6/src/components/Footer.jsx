import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2 } from 'lucide-react';
import { agencyData, SOCIAL_FA_MAP } from '../data/agencyData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="green-radial-glow-footer bg-[#070707] border-t border-zinc-900 text-zinc-400 py-16 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* Brand details */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <div className="w-8 h-8 rounded bg-[#3ecf6e]/10 border border-[#3ecf6e]/20 flex items-center justify-center font-bold text-[#3ecf6e] text-xs">
              {agencyData.brand.logoText}
            </div>
            <span className="text-white font-black text-sm tracking-wider uppercase">
              {agencyData.brand.siteName}
            </span>
          </Link>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mb-6">
            Synthetix visual software studio. Constructing serverless web systems, DevOps automations, and modern front-ends.
          </p>

          <div className="flex gap-3">
            {agencyData.socials.map((soc, idx) => {
              const faClass = SOCIAL_FA_MAP[soc.name] || "fa-solid fa-link";
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-500 hover:text-[#3ecf6e] flex items-center justify-center transition-all text-xs"
                >
                  <i className={faClass}></i>
                </a>
              );
            })}
          </div>
        </div>

        {/* Directory links */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-start">
          <h4 className="text-[10px] tracking-wider uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-2 w-full">
            DIRECTORY
          </h4>
          <div className="flex flex-col gap-2.5">
            {agencyData.navigation.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-xs text-zinc-500 hover:text-[#3ecf6e] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup panel */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-start">
          <h4 className="text-[10px] tracking-wider uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-2 w-full">
            NEWSLETTER
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed mb-4">
            Receive monthly summaries of our React frameworks, design handoff guides, and release packages.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
            <input
              type="email"
              placeholder="growth@enterprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-700 text-xs px-4 py-2.5 outline-none focus:border-[#3ecf6e] transition-colors rounded-none"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-zinc-800 hover:bg-[#3ecf6e] hover:text-black border border-zinc-800 hover:border-[#3ecf6e] text-[#3ecf6e] text-xs font-bold transition-all uppercase tracking-wider"
            >
              {subscribed ? <CheckCircle2 size={14} /> : "Join"}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-widest uppercase font-bold text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} SYNTHETIX SYSTEMS. ALL RIGHTS RESERVED.</span>
        <span>TECH-FORWARD MULTIPAGE ENGINE</span>
      </div>
    </footer>
  );
}
