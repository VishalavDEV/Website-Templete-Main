import React from 'react';

// Precision Project Artwork for TaskFlow
export const TaskFlowPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#11131f] text-slate-200 p-3 flex flex-col justify-between overflow-hidden relative font-sans select-none">
      {/* Top App Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center text-[9px] font-bold text-white">TF</div>
          <span className="text-[11px] font-bold text-slate-200 tracking-tight">TaskFlow</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[9px] text-slate-400">Sprint 4 Active</span>
          <div className="w-4 h-4 rounded-full bg-slate-700 ml-1 border border-slate-600"></div>
        </div>
      </div>

      {/* Dashboard Metrics Row */}
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        <div className="bg-[#181b2a] p-1.5 rounded border border-slate-800">
          <div className="text-[8px] text-slate-400">Total Tasks</div>
          <div className="text-[12px] font-bold text-white flex items-center justify-between">
            <span>48</span>
            <span className="text-[8px] text-emerald-400 font-medium">+12%</span>
          </div>
        </div>
        <div className="bg-[#181b2a] p-1.5 rounded border border-slate-800">
          <div className="text-[8px] text-slate-400">Completed</div>
          <div className="text-[12px] font-bold text-indigo-400 flex items-center justify-between">
            <span>34</span>
            <span className="text-[8px] text-indigo-300 font-medium">71%</span>
          </div>
        </div>
        <div className="bg-[#181b2a] p-1.5 rounded border border-slate-800">
          <div className="text-[8px] text-slate-400">Team Velocity</div>
          <div className="text-[12px] font-bold text-amber-400 flex items-center justify-between">
            <span>96%</span>
            <span className="text-[8px] text-amber-300">⚡</span>
          </div>
        </div>
      </div>

      {/* Visual Kanban / Chart Board */}
      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-[90px]">
        {/* Column 1: In Progress */}
        <div className="bg-[#151824] p-1.5 rounded border border-slate-800 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[8px] font-semibold text-slate-400">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> In Progress</span>
            <span className="bg-slate-800 px-1 rounded text-[7px]">3</span>
          </div>
          <div className="bg-[#1e2235] p-1.5 rounded border border-slate-700/60 shadow-sm">
            <div className="text-[9px] font-medium text-slate-100">Auth Flow v2</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[7px] bg-indigo-500/20 text-indigo-300 px-1 py-0.5 rounded">High</span>
              <div className="w-3 h-3 rounded-full bg-indigo-400 text-[7px] flex items-center justify-center font-bold text-white">A</div>
            </div>
          </div>
          <div className="bg-[#1e2235] p-1.5 rounded border border-slate-700/60 shadow-sm">
            <div className="text-[9px] font-medium text-slate-100">API Gateway</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[7px] bg-blue-500/20 text-blue-300 px-1 py-0.5 rounded">Dev</span>
              <div className="w-3 h-3 rounded-full bg-blue-400 text-[7px] flex items-center justify-center font-bold text-white">S</div>
            </div>
          </div>
        </div>

        {/* Column 2: Code Review */}
        <div className="bg-[#151824] p-1.5 rounded border border-slate-800 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[8px] font-semibold text-slate-400">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Review</span>
            <span className="bg-slate-800 px-1 rounded text-[7px]">2</span>
          </div>
          <div className="bg-[#1e2235] p-1.5 rounded border border-slate-700/60 shadow-sm">
            <div className="text-[9px] font-medium text-slate-100">Payment Hook</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[7px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded">Stripe</span>
              <div className="w-3 h-3 rounded-full bg-emerald-400 text-[7px] flex items-center justify-center font-bold text-white">K</div>
            </div>
          </div>
          {/* Mini analytics graph bar */}
          <div className="bg-[#1a1d2e] p-1 rounded border border-slate-800 mt-auto">
            <div className="flex justify-between text-[6px] text-slate-400 mb-0.5">
              <span>Sprint Progress</span>
              <span>84%</span>
            </div>
            <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[84%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Column 3: Analytics / Wave Chart */}
        <div className="bg-[#151824] p-1.5 rounded border border-slate-800 flex flex-col justify-between">
          <div className="text-[8px] font-semibold text-slate-400">Activity Trend</div>
          {/* Custom SVG line chart */}
          <svg className="w-full h-12 my-auto" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,35 Q20,10 40,25 T70,12 T100,5 L100,40 L0,40 Z" fill="url(#chart-glow)"/>
            <path d="M0,35 Q20,10 40,25 T70,12 T100,5" fill="none" stroke="#6366f1" strokeWidth="2"/>
            <circle cx="70" cy="12" r="2.5" fill="#f59e0b"/>
            <circle cx="100" cy="5" r="2.5" fill="#10b981"/>
          </svg>
          <div className="flex justify-between text-[7px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Precision Project Artwork for Wanderlust
export const WanderlustPreview: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-900 text-white font-sans select-none flex flex-col justify-between p-3">
      {/* Background Scenic Landscape Image */}
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
        alt="Wanderlust Travel Landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-65"
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/70 pointer-events-none"></div>

      {/* Top Navbar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-xs">✦</span>
          <span className="text-[11px] font-bold tracking-tight">Wanderlust</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-slate-200">
          <span className="hover:text-white">Places</span>
          <span className="hover:text-white">Trips</span>
          <span className="hover:text-white">Guides</span>
          <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">Explore</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-auto text-center px-2">
        <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-white drop-shadow-md">
          Explore the World<br />
          <span className="text-indigo-300">Beautiful Places</span>
        </h3>
        <p className="text-[8px] text-slate-200 mt-1 max-w-[200px] mx-auto drop-shadow">
          Discover curated mountain trails, tranquil retreats and vibrant cities.
        </p>

        {/* Search Bar Pill */}
        <div className="mt-2.5 mx-auto max-w-[220px] bg-white/95 backdrop-blur-md text-slate-800 rounded-full px-2 py-1 shadow-lg flex items-center justify-between text-[8px]">
          <div className="flex items-center gap-1 text-slate-600">
            <span>📍</span>
            <span className="font-medium text-slate-700">Where to next?</span>
          </div>
          <div className="bg-indigo-600 text-white px-2 py-0.5 rounded-full font-semibold text-[7px]">
            Search
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="relative z-10 flex items-center justify-between gap-1 text-[7px] text-slate-300 bg-slate-900/60 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
        <div className="flex items-center gap-1">
          <span>🏔️</span>
          <span>Alps Expeditions</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <span>4.9 (1.4k reviews)</span>
        </div>
      </div>
    </div>
  );
};

// Precision Project Artwork for ChronoShop
export const ChronoShopPreview: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0a0a0c] text-white font-sans select-none flex flex-col justify-between p-3">
      {/* Top Navbar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full border border-amber-400 flex items-center justify-center text-[7px] text-amber-400 font-serif">C</div>
          <span className="text-[11px] font-semibold tracking-wider font-serif">CHRONO</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-slate-400">
          <span>Men</span>
          <span>Women</span>
          <span>Heritage</span>
          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px]">🛒</div>
        </div>
      </div>

      {/* Hero Content with Luxury Watch */}
      <div className="relative z-10 flex items-center justify-between flex-1 my-auto">
        <div className="max-w-[55%]">
          <span className="text-[7px] tracking-widest uppercase text-amber-400 font-semibold">Automatic Collection</span>
          <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight mt-0.5">
            Timeless Style<br />
            <span className="text-slate-400">Unmatched Quality</span>
          </h3>
          <p className="text-[7px] text-slate-400 mt-1 line-clamp-2">
            Engineered with sapphire crystal and precision Swiss movement.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 font-bold text-[7px] px-2 py-0.5 rounded">Buy Now</span>
            <span className="text-[8px] font-bold text-white">$1,249</span>
          </div>
        </div>

        {/* Watch Image / Graphic */}
        <div className="w-[42%] flex items-center justify-center relative">
          <div className="absolute w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop"
            alt="Luxury Chrono Watch"
            className="w-24 h-24 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Feature Footnote */}
      <div className="relative z-10 flex items-center justify-between text-[7px] text-slate-400 pt-1.5 border-t border-white/5">
        <span>Water Resistant 100M</span>
        <span>5-Year Warranty</span>
        <span>Free Global Shipping</span>
      </div>
    </div>
  );
};
