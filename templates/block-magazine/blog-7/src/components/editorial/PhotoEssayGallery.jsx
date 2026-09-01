import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight } from 'lucide-react';

export function PhotoEssayGallery() {
  const photoEssays = [
    {
      title: 'Echoes of Raw Concrete: Post-War Sacred brutalism in Central Europe',
      photographer: 'Kenji Takahashi',
      location: 'Vienna & Zurich',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
      slug: 'brutalist-acoustic-sanctuaries',
      shotsCount: '18 Photographs',
    },
    {
      title: 'Gotland Mist: The Cold-Water Retting Fields of Northern Sweden',
      photographer: 'Astrid Lind',
      location: 'Gotland, Sweden',
      image: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1000&auto=format&fit=crop',
      slug: 'nordic-textiles-craft',
      shotsCount: '14 Photographs',
    },
  ];

  return (
    <section className="my-14">
      <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#141413]">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#D43825]" />
          <h3 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#141413]">
            Visual Monographs & Photo Essays
          </h3>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-[#73736C]">
          Curated Photography Portfolios
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photoEssays.map((essay, idx) => (
          <Link
            key={idx}
            to={`/article/${essay.slug}`}
            className="group block relative overflow-hidden bg-[#141413] border border-[#141413] shadow-md"
          >
            <div className="aspect-[16/10] overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
              <img
                src={essay.image}
                alt={essay.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Gradient Overlay & Editorial Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center justify-between text-xs text-white/80 font-mono mb-2">
                <span>{essay.location}</span>
                <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 text-[0.65rem] uppercase font-bold text-white">
                  {essay.shotsCount}
                </span>
              </div>
              <h4 className="font-serif-headline text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3B3A6] transition-colors leading-snug">
                {essay.title}
              </h4>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20 text-xs text-white/70">
                <span>Photography by {essay.photographer}</span>
                <span className="flex items-center gap-1 font-bold text-white group-hover:translate-x-1 transition-transform">
                  <span>View Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
