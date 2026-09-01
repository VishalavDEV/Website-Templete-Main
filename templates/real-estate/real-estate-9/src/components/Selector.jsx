import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Home, Sparkles } from "lucide-react";
import { selectorData } from "../data/selectorData";

export default function Selector() {
  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#2C3E50] font-sans selection:bg-[#1d4ed8] selection:text-white pb-20">
      
      {/* Main Selection Area */}
      <main className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-12">

        {/* List of Custom Horizontal Cards (Matches Screenshot UI Layout) */}
        <div className="space-y-8 md:space-y-12">
          {selectorData.map((template, idx) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-[#ECEFF1] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch"
            >
              
              {/* Left Column: Overlapping Devices Mockups (Desktop, Tablet, Mobile stacked) */}
              <div className="relative w-full lg:w-[42%] min-h-[260px] md:min-h-[300px] bg-gradient-to-br from-slate-50 to-[#ECEFF1] rounded-2xl overflow-hidden flex items-center justify-center shrink-0 border border-neutral-200/40">
                {/* Grid Decorative Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#cfd8dc_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                
                {/* 1. Desktop Screen Mockup */}
                <div className="absolute top-[12%] left-[8%] w-[64%] aspect-[16/10] bg-neutral-950 rounded-xl border-4 border-neutral-900 shadow-[0_12px_24px_rgba(0,0,0,0.14)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src={template.image} 
                    alt={`${template.name} Desktop`} 
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* 2. Tablet Screen Mockup (Overlaps desktop right) */}
                <div className="absolute top-[24%] left-[58%] w-[24%] aspect-[3/4] bg-neutral-950 rounded-xl border-[3.5px] border-neutral-900 shadow-[0_8px_16px_rgba(0,0,0,0.16)] overflow-hidden z-10">
                  <img 
                    src={template.image} 
                    alt={`${template.name} Tablet`} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* 3. Mobile Phone Mockup (Overlaps tablet bottom right) */}
                <div className="absolute top-[34%] left-[73%] w-[16%] aspect-[9/19] bg-neutral-950 rounded-lg border-[2.5px] border-neutral-900 shadow-[0_6px_12px_rgba(0,0,0,0.2)] overflow-hidden z-20">
                  <img 
                    src={template.image} 
                    alt={`${template.name} Mobile`} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Template Info Details */}
              <div className="flex-grow flex flex-col justify-between py-2">
                <div>
                  {/* Category and Price Badges */}
                  <div className="flex flex-wrap gap-2.5 items-center">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md text-[9px] tracking-widest font-bold uppercase border border-blue-100">
                      {template.tag}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-[9px] tracking-widest font-bold uppercase border ${template.priceTag === "FREE" ? "bg-green-50 text-green-600 border-green-100" : "bg-orange-50 text-orange-600 border-orange-100"}`}>
                      {template.priceTag}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight mt-4">
                    {template.name} — {template.category}
                  </h3>

                  {/* Updated recently metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-2 font-mono">
                    <Clock className="w-3.5 h-3.5 text-neutral-450" />
                    <span>{template.updated}</span>
                  </div>

                  {/* Description Copy */}
                  <p className="text-sm md:text-base text-neutral-500 font-sans mt-4 max-w-xl leading-relaxed font-light">
                    {template.description}
                  </p>
                </div>

                {/* Live Demo Action Button */}
                <div className="mt-8 pt-4">
                  <Link 
                    to={template.route} 
                    className="inline-flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs tracking-widest py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Area */}
      <footer className="max-w-6xl mx-auto px-6 border-t border-neutral-300/60 pt-8 mt-16 text-center text-xs font-mono text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} ARCHISPHERE METROPOLIS ENGINE.</span>
        <span className="uppercase tracking-wider">PREMIUM REAL ESTATE LAYOUT PLATFORM</span>
      </footer>

    </div>
  );
}
