import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { aurelisImages } from '../../data/aurelisImages';
import { nexoraImages } from '../../data/nexoraImages';
import { vantaImages } from '../../data/vantaImages';
import { strativaImages } from '../../data/strativaImages';
import { lumoraImages } from '../../data/lumoraImages';

const templates = [
  {
    id: 'aurelis',
    route: '/aurelis',
    tag: 'ENTERPRISE & BUSINESS',
    status: 'FREE',
    name: 'Aurelis',
    tagline: 'Strategic solutions for ambitious organizations.',
    desc: 'An elegant, premium React corporate template featuring board-level advisory scopes, leadership bios, transaction analytics, and client reviews.',
    image: aurelisImages.hero,
    tagBg: 'bg-[#EFF6FF] text-[#2563EB]',
    statusBg: 'bg-[#ECFDF5] text-[#059669]'
  },
  {
    id: 'nexora',
    route: '/nexora',
    tag: 'TECHNOLOGY & DIGITAL',
    status: 'FREE',
    name: 'Nexora',
    tagline: 'Futuristic systems for distributed digital operations.',
    desc: 'A dark-theme cybernetic template featuring modular technology cards, an interactive event products switcher, and live SVG network topology highlights.',
    image: nexoraImages.hero,
    tagBg: 'bg-[#EFF6FF] text-[#2563EB]',
    statusBg: 'bg-[#ECFDF5] text-[#059669]'
  },
  {
    id: 'vanta-studio',
    route: '/vanta-studio',
    tag: 'CREATIVE AGENCY',
    status: 'FREE',
    name: 'Vanta Studio',
    tagline: 'Expressive brand identities that command culture.',
    desc: 'An asymmetric art-editorial portfolio featuring oversized typography grids, horizontal project wheels, magnetic elements, and custom cursors.',
    image: vantaImages.gallery[0],
    tagBg: 'bg-[#EFF6FF] text-[#2563EB]',
    statusBg: 'bg-[#ECFDF5] text-[#059669]'
  },
  {
    id: 'strativa',
    route: '/strativa',
    tag: 'CONSULTING & STRATEGY',
    status: 'FREE',
    name: 'Strativa',
    tagline: 'Clarity for complex corporate decisions.',
    desc: 'A sophisticated strategy setup featuring click-swappable expertise panels, expandable accordion case studies, and live SVG metrics graphs.',
    image: strativaImages.hero,
    tagBg: 'bg-[#EFF6FF] text-[#2563EB]',
    statusBg: 'bg-[#ECFDF5] text-[#059669]'
  },
  {
    id: 'lumora-labs',
    route: '/lumora-labs',
    tag: 'STARTUP & INNOVATION',
    status: 'FREE',
    name: 'Lumora Labs',
    tagline: 'Building products for what comes next.',
    desc: 'An energetic startup builder layout featuring 3D tilting product cards, tab-filtered showcase interfaces, and floating geometry overlays.',
    image: lumoraImages.hero,
    tagBg: 'bg-[#EFF6FF] text-[#2563EB]',
    statusBg: 'bg-[#ECFDF5] text-[#059669]'
  }
];

export default function MarketplaceHome() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      <div className="max-w-5xl w-full text-center">
        {/* Marketplace List Cards */}
        <div className="space-y-10">
          {templates.map((tpl, idx) => (
            <motion.div
              key={tpl.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-300 w-full text-left"
            >
              {/* LEFT COLUMN: Overlapping mockups representing live demo viewport */}
              <div className="w-full lg:w-[48%] bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8 flex items-center justify-center relative aspect-[16/10] shrink-0 overflow-hidden select-none">
                
                {/* 1. Desktop Web Frame */}
                <div className="w-[72%] aspect-[16/10] bg-slate-950 border-[5px] border-slate-900 rounded-lg shadow-xl overflow-hidden relative -translate-x-[15%] z-0 flex flex-col">
                  <div className="h-3.5 bg-slate-950 flex items-center px-2 space-x-1 border-b border-slate-900 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-950 overflow-hidden">
                    <img src={tpl.image} alt="" className="w-full h-full object-cover opacity-90" />
                  </div>
                </div>

                {/* 2. Tablet Web Frame (Overlaps Desktop) */}
                <div className="w-[30%] aspect-[3/4.5] bg-slate-950 border-[4px] border-slate-950 rounded-lg shadow-2xl overflow-hidden absolute left-[50%] z-10 flex flex-col">
                  <div className="h-2 bg-slate-950 w-full flex items-center justify-center shrink-0">
                    <span className="w-6 h-0.5 rounded-full bg-slate-800" />
                  </div>
                  <div className="flex-1 bg-slate-950 overflow-hidden">
                    <img src={tpl.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 3. Phone Web Frame (Overlaps Tablet) */}
                <div className="w-[20%] aspect-[9/18.5] bg-slate-950 border-[3.5px] border-slate-950 rounded-lg shadow-2xl overflow-hidden absolute left-[71%] z-20">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-black rounded-full z-30" />
                  <div className="w-full h-full bg-slate-900 overflow-hidden">
                    <img src={tpl.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Badges, Title, Updated, Tagline, Description and Button */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  {/* Badges */}
                  <div className="flex items-center space-x-2.5 mb-4">
                    <span className={`text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase ${tpl.tagBg}`}>
                      {tpl.tag}
                    </span>
                    <span className={`text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase ${tpl.statusBg}`}>
                      {tpl.status}
                    </span>
                  </div>

                  {/* Template Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug mb-1">
                    {tpl.name}
                  </h3>

                  {/* Subheading / Tagline */}
                  <h4 className="text-xs font-bold text-slate-700 italic mb-3">
                    {tpl.tagline}
                  </h4>

                  {/* Update metadata line */}
                  <div className="flex items-center space-x-1.5 text-slate-400 mb-4">
                    <Clock size={13} className="text-slate-400" />
                    <span className="text-[10px] font-medium font-mono">Updated recently</span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-8">
                    {tpl.desc}
                  </p>
                </div>

                {/* Live Demo button */}
                <Link
                  to={tpl.route}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="w-full py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-xs font-bold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-blue-100 hover:shadow-lg focus:outline-none mt-auto"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={13} className="stroke-[2.5]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-20 border-t border-slate-200 pt-8 text-[10px] text-slate-400 font-mono">
          <span>&copy; 2026 Business Studio Template Marketplace. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
