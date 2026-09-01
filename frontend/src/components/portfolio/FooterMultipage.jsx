import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData, SOCIAL_FA_MAP } from '../../data/portfolio/multipageData';

export default function FooterMultipage() {
  return (
    <footer className="bg-[#080808] border-t border-zinc-900 text-zinc-400 py-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Brand info */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-start">
          <Link to="/templates/portfolio/multipage-portfolio" className="flex items-center gap-2 mb-4 group">
            <div className="w-8 h-8 rounded-full bg-[#e8583f]/10 border border-[#e8583f]/20 flex items-center justify-center font-bold text-[#e8583f] text-xs">
              {portfolioData.brand.logoText}
            </div>
            <span className="text-white font-black text-sm tracking-widest uppercase">
              {portfolioData.brand.siteName}
            </span>
          </Link>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
            Evelyn Vance Visual Studio. Constructing visual ecosystems and robust full-stack React components for digital projects.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-start">
          <h4 className="text-[10px] font-sans tracking-widest uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-1.5 w-full">
            QUICK DIRECTORY
          </h4>
          <div className="flex flex-col gap-2">
            {portfolioData.navigation.slice(0, 5).map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-xs text-zinc-500 hover:text-[#e8583f] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info socials */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start">
          <h4 className="text-[10px] font-sans tracking-widest uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-1.5 w-full">
            CONNECTION POINTS
          </h4>
          <span className="text-xs text-zinc-500 block mb-2 leading-relaxed">
            London, United Kingdom // <a href={`mailto:${portfolioData.brand.email}`} className="text-white hover:text-[#e8583f] transition-colors">{portfolioData.brand.email}</a>
          </span>

          <div className="flex gap-3.5 mt-4">
            {portfolioData.socials.map((soc, idx) => {
              const faClass = SOCIAL_FA_MAP[soc.name] || "fa-solid fa-link";
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-800 hover:border-zinc-700 bg-[#0d0d0d] text-zinc-500 hover:text-[#e8583f] flex items-center justify-center transition-all text-xs"
                >
                  <i className={faClass}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans tracking-widest uppercase font-bold text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} EVELYN VANCE. ALL RIGHTS RESERVED.</span>
        <span>MULTIPAGE ROUTED PORTFOLIO FRAMEWORK</span>
      </div>
    </footer>
  );
}
