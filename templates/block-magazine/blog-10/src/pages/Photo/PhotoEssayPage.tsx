import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, MapPin, Sparkles, ArrowLeft, ArrowUpRight, Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { PhotoEssay, PhotoItem } from '../../types';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const PhotoEssayPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [essay, setEssay] = useState<PhotoEssay | null>(null);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadEssay = async () => {
      if (!slug) return;
      const found = await mockApi.getPhotoEssayBySlug(slug);
      if (isMounted && found) {
        setEssay(found);
      }
    };

    loadEssay();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (!essay) return null;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
        <Link
          to="/photography"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a8a49c] hover:text-[#e0a358] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO PHOTOGRAPHY BUREAU</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-widest uppercase">
          <Camera className="w-3.5 h-3.5" />
          <span>PORTFOLIO ESSAY · {essay.photos.length} PHOTOGRAPHS</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {essay.title}
        </h1>

        <p className="font-sans text-base sm:text-xl text-[#d1c7b7] font-light leading-relaxed max-w-3xl">
          {essay.subtitle}
        </p>

        {/* Photographer Credentials */}
        <div className="p-6 rounded-2xl bg-[#141619] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={essay.photographer.avatar}
              alt={essay.photographer.name}
              className="w-14 h-14 rounded-full object-cover border border-white/20"
            />
            <div>
              <div className="font-serif text-lg font-bold text-white">
                {essay.photographer.name}
              </div>
              <div className="text-xs font-mono text-[#e0a358]">
                {essay.photographer.role} · {essay.photographer.location}
              </div>
              <p className="font-sans text-xs text-[#a8a49c] mt-1 max-w-md">
                {essay.photographer.bio}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right space-y-1 font-mono text-xs text-[#a8a49c] border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6">
            <div className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#c98a3e]" />
              <span>{essay.location}</span>
            </div>
            <div>EXPEDITION: {essay.date}</div>
            <div className="text-[#e0a358]">HIGH RESOLUTION ARCHIVE</div>
          </div>
        </div>
      </section>

      {/* Main Photographic Narrative Stream */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {essay.photos.map((photo, idx) => (
          <div
            key={photo.id}
            className="space-y-4 rounded-3xl bg-[#111317] border border-white/10 p-4 sm:p-8 shadow-2xl"
          >
            <div
              onClick={() => setActivePhoto(photo)}
              className="relative aspect-[16/10] sm:aspect-[21/11] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 text-xs font-mono">
                  <Maximize2 className="w-4 h-4 text-[#e0a358]" />
                  <span>EXPAND FULLSCREEN</span>
                </span>
              </div>
              <div className="absolute top-4 left-4 font-mono text-xs bg-black/60 px-3 py-1 rounded-full text-[#e0a358] backdrop-blur-md border border-white/15">
                FRAME 0{idx + 1} / 0{essay.photos.length}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
              <p className="font-serif text-base sm:text-lg text-[#f0ede6] leading-relaxed max-w-2xl">
                {photo.caption}
              </p>

              {/* Technical EXIF / Gear Tag */}
              {photo.technical && (
                <div className="p-3 rounded-xl bg-[#0c0d0e] border border-white/10 font-mono text-[11px] text-[#a8a49c] space-y-0.5 shrink-0">
                  <div className="text-[#e0a358] font-bold uppercase">OPTICAL TELEMETRY</div>
                  <div>{photo.technical.camera} · {photo.technical.lens}</div>
                  <div>{photo.technical.settings}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#e0a358]">
              LIGHTBOX EXPEDITION VIEW
            </span>
            <button
              onClick={() => setActivePhoto(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="my-auto flex items-center justify-center p-4 max-h-[75vh]">
            <img
              src={activePhoto.url}
              alt={activePhoto.caption}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
            />
          </div>

          <div className="border-t border-white/10 pt-4 text-center max-w-2xl mx-auto">
            <p className="font-serif text-sm sm:text-base text-white">
              {activePhoto.caption}
            </p>
            {activePhoto.technical && (
              <p className="font-mono text-xs text-[#e0a358] mt-1">
                {activePhoto.technical.camera} — {activePhoto.technical.lens} — {activePhoto.technical.settings}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
