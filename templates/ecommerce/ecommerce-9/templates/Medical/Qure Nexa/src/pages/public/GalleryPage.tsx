import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../../types';
import { ApiService } from '../../services/api';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';
import { Image, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getGallery();
        setItems(data);
      } catch (err) {
        console.error('Failed to load gallery', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const categories = ['All', 'Hospital', 'Facilities', 'Departments', 'Doctors', 'Events'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Hospital Tour & Media
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Qure Nexa Campus & Technology Gallery
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Take a visual tour through our advanced surgical suites, modern patient recovery wings, and community medical outreach events.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Pills */}
        <ScrollReveal direction="down">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-sm scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} direction="3d" delay={idx * 60}>
                <ThreeDCard intensity={12} onClick={() => setActiveItem(item)}>
                  <div className="group relative rounded-3xl overflow-hidden shadow-2xs border border-slate-200 bg-slate-900 cursor-pointer aspect-4/3">
                    <ImageWithFallback
                      src={item.image_url}
                      alt={item.caption}
                      fallbackType="hospital"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-4 left-4">
                      <Badge variant="teal" size="sm">
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-sm font-bold leading-snug">{item.caption}</h4>
                      {item.description && (
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Full Size Modal Lightbox */}
      {activeItem && (
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem.caption}
          subtitle={`Category: ${activeItem.category}`}
          maxWidth="3xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-16/10">
              <ImageWithFallback
                src={activeItem.image_url}
                alt={activeItem.caption}
                fallbackType="hospital"
                className="w-full h-full object-cover"
              />
            </div>
            {activeItem.description && (
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeItem.description}
              </p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
