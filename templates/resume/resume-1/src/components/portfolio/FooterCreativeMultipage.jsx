import React from 'react';
import { Link } from 'react-router-dom';
import { creativeData } from '../../data/portfolio/creativeMultipageData';

export default function FooterCreativeMultipage() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-16 px-6 md:px-12 font-sans border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* Brand details */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start">
          <Link to="/templates/portfolio/creative-multipage-portfolio" className="font-serif-heading text-lg font-black text-white uppercase tracking-wider mb-4">
            {creativeData.brand.logoText}
          </Link>
          <p className="text-xs text-zinc-650 leading-relaxed max-w-xs mb-6">
            Monochrome portrait and design direction. Constructing visual campaigns with stark contrast and magenta accents.
          </p>

          <div className="flex gap-4">
            {creativeData.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-all text-xs"
              >
                <i className={soc.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Directory links */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-start">
          <h4 className="text-[10px] tracking-widest uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-2 w-full font-sans">
            DIRECTORY
          </h4>
          <div className="flex flex-col gap-2.5">
            {creativeData.navigation.filter(item => !item.submenu).map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-xs text-zinc-500 hover:text-[#ec4899] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact links */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-start">
          <h4 className="text-[10px] tracking-widest uppercase font-bold text-white mb-4 border-b border-zinc-900 pb-2 w-full font-sans">
            STUDIO INQUIRIES
          </h4>
          <p className="text-xs text-zinc-650 leading-relaxed mb-6">
            For fashion editorials, visual campaigns, or commercial projects.
          </p>
          <div className="flex flex-col gap-2 text-xs">
            <a href={`mailto:${creativeData.brand.email}`} className="text-zinc-400 hover:text-[#ec4899] transition-colors">
              {creativeData.brand.email}
            </a>
            <span className="text-zinc-650 font-medium">
              {creativeData.brand.phone}
            </span>
            <span className="text-zinc-655 font-medium font-sans">
              {creativeData.brand.location}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-widest uppercase font-bold text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} SASHA GREY DESIGN. ALL RIGHTS RESERVED.</span>
        <span>CREATIVE MULTIPAGE ENGINE</span>
      </div>
    </footer>
  );
}
