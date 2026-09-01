import React from 'react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#171512] text-[#F3EBDD] py-28 md:py-44 px-6 md:px-16 overflow-hidden flex flex-col justify-center items-center border-t border-[rgba(243,235,221,0.1)]">
      {/* Background Animated Scrolling Quotation Marks */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="font-display font-black text-[25rem] md:text-[40rem] text-[#B87552] leading-none animate-pulse">
          “
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="font-mono text-xs text-[#B87552] tracking-[0.3em] uppercase block mb-8 font-bold">
          09 // THE VERDICT
        </span>

        {/* Giant Statement */}
        <h2 className="font-display font-black tracking-tighter uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-[#F3EBDD] mb-12">
          “NOT JUST DINNER. <br />
          <span className="text-[#B87552]">A NIGHT WORTH</span> <br />
          REMEMBERING.”
        </h2>

        {/* Customer Information */}
        <div className="flex flex-col items-center space-y-2 font-mono text-xs tracking-widest text-[#B8AA98] border-t border-[rgba(243,235,221,0.14)] pt-8 max-w-md mx-auto">
          <span className="text-[#F3EBDD] font-bold text-sm">ARCHITECTURAL DIGEST INDIA</span>
          <span>CRITIC REVIEW — MUMBAI / CHENNAI</span>
          <span className="text-[#B87552] font-bold">RATING: 5/5 GASTRONOMY STARS</span>
        </div>
      </div>
    </section>
  );
};
