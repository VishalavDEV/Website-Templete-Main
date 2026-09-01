import React from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { Globe, SunMedium, TrendingUp, Sparkles } from 'lucide-react';

export function TopBar() {
  const { currentEdition, setCurrentEdition, setIsNewsletterOpen } = useMagazine();

  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  const editions = ['Global Edition', 'US & Americas', 'UK & Europe', 'Asia Pacific'];

  return (
    <div className="border-b border-[#E8E5DC] bg-[#FAF9F5] text-[#52524E] text-[0.75rem] py-1.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Date & Weather */}
        <div className="flex items-center gap-4">
          <span className="font-medium tracking-wide uppercase text-[#73736C]">
            {currentDate}
          </span>
          <span className="hidden sm:inline-block text-[#D1CDC4]">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-[#52524E]">
            <SunMedium className="w-3.5 h-3.5 text-[#C28B38]" />
            <span>London 18°C &bull; New York 21°C &bull; Tokyo 24°C</span>
          </div>
        </div>

        {/* Center: Issue ticker callout */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[#141413]">
          <span className="w-2 h-2 rounded-full bg-[#D43825] animate-pulse"></span>
          <span>Print Vol. 48 In Stock</span>
          <span className="text-[#A1A19A]">&bull;</span>
          <span className="text-[#52524E]">Free Worldwide Shipping for Members</span>
        </div>

        {/* Right: Edition Switcher & Subscribe Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#73736C]" />
            <select
              value={currentEdition}
              onChange={(e) => setCurrentEdition(e.target.value)}
              aria-label="Select Edition"
              className="bg-transparent border-none text-[#141413] font-semibold text-[0.75rem] cursor-pointer focus:outline-none pr-1"
            >
              {editions.map((ed) => (
                <option key={ed} value={ed} className="bg-white text-black">
                  {ed}
                </option>
              ))}
            </select>
          </div>

          <span className="text-[#D1CDC4]">|</span>

          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="text-[#D43825] hover:text-[#B32717] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
}
