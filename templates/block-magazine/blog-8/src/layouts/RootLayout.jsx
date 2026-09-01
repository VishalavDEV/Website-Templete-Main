import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useMagazine } from '../context/MagazineContext';
import Header from '../components/navigation/Header';
import KineticRibbon from '../components/common/KineticRibbon';
import DopamineBadge from '../components/common/DopamineBadge';
import MaximalistButton from '../components/common/MaximalistButton';
import { Sparkles, Bookmark, ArrowUpRight, Flame, Heart } from 'lucide-react';

export function RootLayout() {
  const { savedArticles, setSelectedCategory, triggerDopamineConfetti } = useMagazine();
  const navigate = useNavigate();

  const handleFooterCategory = (catId) => {
    setSelectedCategory(catId);
    navigate('/');
    setTimeout(() => {
      document.getElementById('category-archive-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0E] flex flex-col font-body selection:bg-[#FF007A] selection:text-white overflow-x-hidden w-full">
      {/* Top Utility Dopamine Announcement Bar */}
      <div className="bg-[#0A0A0E] text-white py-1.5 px-3 sm:px-8 flex items-center justify-between text-[11px] sm:text-xs font-mono border-b-2 border-[#0A0A0E] z-50 relative w-full">
        <div className="flex items-center gap-2 sm:gap-3 truncate">
          <span className="flex items-center gap-1.5 text-[#10FF70] font-black shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10FF70] animate-ping inline-block"></span>
            LIVE // FASHION ARCHIVE
          </span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-300 truncate">ISSUE 42 • SPRING / SUMMER 2026</span>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <button
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
            }}
            className="flex items-center gap-1 text-[#FFE600] font-bold hover:text-white transition-colors cursor-pointer text-[10px] sm:text-xs"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">DOPAMINE BURST</span>
            <span className="xs:hidden">BURST</span>
          </button>
          <div className="flex items-center gap-1 bg-[#FF007A] px-2 py-0.5 text-white font-bold text-[10px] sm:text-xs">
            <Bookmark className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            <span>{savedArticles.length} GRAILS</span>
          </div>
        </div>
      </div>

      {/* PHASE 4: STICKY GLASS HEADER WITH SCROLL-SPRING DYNAMICS */}
      <Header />

      {/* Kinetic Running Ticker */}
      <KineticRibbon />

      {/* Main Content Area (Fluid Max-Width Container) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Outlet />
      </main>

      {/* Maximalist Responsive Footer */}
      <footer className="border-t-4 border-[#0A0A0E] bg-[#FFFBE6] mt-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b-2 border-[#0A0A0E]">
            <div className="md:col-span-2 space-y-4">
              <div className="font-y2k font-black text-3xl sm:text-4xl text-[#0A0A0E]">
                XTRA<span className="text-[#FF007A]">.</span>MAG
              </div>
              <p className="font-body text-xs sm:text-sm text-[#2C2D35] max-w-md font-medium leading-relaxed">
                The unapologetic chronicle of next-generation fashion achievements, digital couture, dopamine tailoring, and avant-garde streetwear milestones.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <DopamineBadge variant="pink">#MAXIMALISM</DopamineBadge>
                <DopamineBadge variant="blue">#DOPAMINE_DESIGN</DopamineBadge>
                <DopamineBadge variant="lime">#GEN_Z_COUTURE</DopamineBadge>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider mb-3">Categories & Archives</h4>
              <ul className="space-y-2 text-xs sm:text-sm font-mono font-medium">
                <li>
                  <button onClick={() => handleFooterCategory('runway-rebel')} className="hover:text-[#FF007A] transition-colors cursor-pointer text-left">
                    → Runway Rebels
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFooterCategory('digital-couture')} className="hover:text-[#0047FF] transition-colors cursor-pointer text-left">
                    → Digital Couture
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFooterCategory('streetwear-grails')} className="hover:text-[#FF5500] transition-colors cursor-pointer text-left">
                    → Streetwear Grails
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFooterCategory('bio-materials')} className="hover:text-[#10FF70] transition-colors cursor-pointer text-left">
                    → Bio & Eco Tech
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFooterCategory('y2k-archive')} className="hover:text-[#FFE600] transition-colors cursor-pointer text-left">
                    → Y2K Archive
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-black text-sm uppercase tracking-wider mb-3">Manifesto</h4>
              <div className="p-3 bg-white border-2 border-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E]">
                <p className="font-mono text-xs font-bold leading-relaxed text-[#0A0A0E]">
                  "MORE IS MORE. COLOR IS IDENTITY. ZERO COMPROMISE ON ENERGY."
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626470]">
            <div>© 2026 XTRA MAGAZINE // ALL RIGHTS RESERVED</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF007A]"></span>
              <span>STRICTLY LIGHT THEME • DOPAMINE ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
