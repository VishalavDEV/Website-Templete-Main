import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      {/* Header Banner */}
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            VISUAL ARCHIVE
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            FESTIVAL GALLERY
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Relive moments of acoustic intensity, stage lights, crowd energy, and behind-the-scenes vibes from Midnight Echo.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>
    </div>
  );
}
