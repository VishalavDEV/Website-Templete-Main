import React, { useState } from 'react';
import Modal from '../components/Modal';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'LINEUP ANNOUNCEMENT',
      subtitle: 'Meet the first wave of artists joining Midnight Echo 2026.',
      category: 'ANNOUNCEMENT',
      date: '15 AUGUST 2026',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      fullText: 'Velora Live is thrilled to announce the official first phase lineup for Midnight Echo 2026! Headlined by indie pop icon Lyra Voss and electronic producer Kael Nova, this year features 30+ artists performing across three custom sound arenas in Chennai.',
    },
    {
      id: 2,
      title: 'VIP EXPERIENCE',
      subtitle: 'Discover the exclusive world of the Velora VIP zone.',
      category: 'VIP INSIDER',
      date: '10 AUGUST 2026',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
      fullText: 'Step into unprecedented festival luxury. The Velora VIP Pass unlocks dedicated front-stage viewing decks, air-conditioned lounges, complimentary artisanal catering, and backstage meet & greet sessions with headline performers.',
    },
    {
      id: 3,
      title: 'THE VENUE ARCHITECTURE',
      subtitle: 'Step inside Aurora Sound Arena, Chennai.',
      category: 'VENUE GUIDE',
      date: '02 AUGUST 2026',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      fullText: 'Designed specifically for high-fidelity live music acoustic performance, Aurora Sound Arena features 360-degree acoustic baffle architecture, multi-tiered viewing platforms, and 4,000+ parking spaces.',
    },
    {
      id: 4,
      title: 'ESSENTIAL EVENT GUIDE',
      subtitle: 'Everything you need to know before the night begins.',
      category: 'FESTIVAL GUIDE',
      date: '28 JULY 2026',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      fullText: 'From gate entry protocols and e-ticket scanning to food village vendors, transportation options, and camera rules, here is your essential guide to navigating Midnight Echo 2026.',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            LATEST UPDATES
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            FESTIVAL NEWS & GUIDES
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Stay informed with official lineup announcements, venue guides, and VIP features.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#F5B900]/50 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#FFC928]">
                    {art.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-xs text-[#FFC928] mb-2 font-medium">
                    <Calendar size={13} /> {art.date}
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-lg font-bold uppercase text-white mb-2">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed line-clamp-2">
                    {art.subtitle}
                  </p>
                  <button
                    className="btn-secondary mt-auto py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#F5B900]/40 hover:bg-[#F5B900] hover:text-black transition-all flex items-center justify-center gap-1.5"
                    onClick={() => setSelectedArticle(art)}
                  >
                    READ MORE <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <Modal onClose={() => setSelectedArticle(null)}>
          <div className="flex flex-col items-center text-center">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5B900]/20 text-[#FFC928] border border-[#F5B900]/40 mb-3">
              {selectedArticle.category}
            </span>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide mb-2">
              {selectedArticle.title}
            </h2>
            <div className="text-xs text-[#FFC928] mb-6">{selectedArticle.date}</div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {selectedArticle.fullText}
            </p>
            <button
              className="btn-primary py-3 px-8 rounded-full font-bold uppercase tracking-wider text-black bg-[#F5B900] hover:bg-[#FFC928]"
              onClick={() => setSelectedArticle(null)}
            >
              CLOSE ARTICLE
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
