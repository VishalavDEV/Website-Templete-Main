import React, { useState } from 'react';
import { NOIRE_IMAGES } from '../data/noireData';

export const SignatureDishSection: React.FC = () => {
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x, y });
  };

  return (
    <section className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Editorial Title */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
            05 // SIGNATURE GASTRONOMY
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl text-[#F3EBDD] uppercase">
            SIGNATURE 01
          </h2>
        </div>
        <div className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase">
          MOVE CURSOR OVER DISH TO FOCUS DETAIL
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Details */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase font-bold">
            ITEM CODE: SE-01
          </span>
          <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#F3EBDD]">
            CHARRED <br />
            SEA BASS
          </h3>
          <p className="font-mono text-xs md:text-sm text-[#B8AA98] leading-relaxed">
            citrus &nbsp;·&nbsp; chilli &nbsp;·&nbsp; smoked butter &nbsp;·&nbsp; sea salt
          </p>
          <p className="font-body text-sm text-[#B8AA98] leading-relaxed">
            Wild line-caught sea bass cooked over roaring white binchotan coals. Crispy blistered skin with cold citrus emulsion and whipped tallow butter.
          </p>

          <div className="pt-4 border-t border-[rgba(243,235,221,0.14)] flex justify-between items-center">
            <span className="font-mono text-2xl font-bold text-[#B87552]">₹1,150</span>
            <span className="font-mono text-xs text-[#B8AA98] uppercase">SERVED UNTIL 00:30</span>
          </div>
        </div>

        {/* Right Image Frame with Interactive Circular Cursor Lens */}
        <div
          onMouseMove={handleMouseMove}
          className="lg:col-span-8 relative h-[450px] md:h-[600px] w-full overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm cursor-crosshair group shadow-xl bg-[#211D18]"
        >
          <img
            src={NOIRE_IMAGES.signatureSeabass}
            alt="CHARRED SEA BASS"
            className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Giant Circular Lens Marker */}
          <div
            className="pointer-events-none absolute w-48 h-48 rounded-full border-2 border-[#B87552] shadow-2xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-[#B87552]/15 backdrop-contrast-125 transition-all duration-75"
            style={{
              left: `${lensPos.x}%`,
              top: `${lensPos.y}%`,
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#B87552] animate-ping" />
            <div className="absolute top-2 font-mono text-[9px] text-[#B87552] uppercase tracking-widest font-bold">
              [ NOIRÉ FOCUS ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
