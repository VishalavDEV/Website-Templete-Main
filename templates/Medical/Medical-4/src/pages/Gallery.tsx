import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { gallery } from '../data/gallery';
import { GalleryCard } from '../components/cards/GalleryCard';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Hospital', 'Facilities', 'Doctors', 'Events'];

  const filteredGallery = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="MediCare Gallery" 
        subtitle="Explore our facilities, medical teams, and patient-focused environment."
        breadcrumbItems={[{ label: 'Gallery' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="flex flex-wrap justify-center gap-2.5 mb-10 sm:mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeFilter === filter ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => (
            <ScrollReveal key={item.id} animation="pop" delay={index * 60}>
              <GalleryCard item={item} onOpen={setLightboxItem} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full floating-window bg-white overflow-hidden shadow-2xl p-0">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-md cursor-pointer"
            >
              ✕
            </button>
            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center">
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title} 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800";
                }}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-8 bg-white">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1">{lightboxItem.category}</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">{lightboxItem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
