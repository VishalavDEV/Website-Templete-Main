import React from 'react';
import { NOIRE_GALLERY } from '../data/noireData';

export const UnconventionalGallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[rgba(243,235,221,0.14)] pb-8">
        <div>
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
            08 // VISUAL TRACK
          </span>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-6xl text-[#F3EBDD] uppercase">
            THE GALLERY
          </h2>
        </div>
        <div className="font-mono text-xs text-[#B8AA98] tracking-widest uppercase">
          OVERLAPPING VISUAL PERSPECTIVES
        </div>
      </div>

      {/* Asymmetric Overlapping Vertical Track */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-12 md:space-y-[-40px]">
        {NOIRE_GALLERY.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative z-10 w-full md:w-[75%] ${
                isEven ? 'self-start md:ml-0' : 'self-end md:mr-0'
              } group transition-all duration-500 hover:z-30`}
            >
              <div
                className={`relative overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm bg-[#211D18] shadow-lg ${
                  item.aspect === 'landscape'
                    ? 'h-[350px] md:h-[450px]'
                    : item.aspect === 'portrait'
                    ? 'h-[500px] md:h-[600px] max-w-lg'
                    : item.aspect === 'square'
                    ? 'h-[400px] md:h-[480px] max-w-xl'
                    : 'h-[400px] md:h-[550px] w-full'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlaid Caption */}
                <div className="absolute bottom-6 left-6 bg-[#171512]/95 backdrop-blur-md p-4 border border-[rgba(243,235,221,0.14)] max-w-xs shadow-md">
                  <div className="font-mono text-xs text-[#B87552] uppercase tracking-widest mb-1 font-bold">
                    CAPT. 0{index + 1} // {item.title}
                  </div>
                  <p className="font-body text-xs text-[#F3EBDD] font-medium">{item.caption}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
