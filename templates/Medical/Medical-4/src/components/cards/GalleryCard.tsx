import React from 'react';
import { GalleryItem } from '../../types';
import { Tilt3DCard } from '../common/Tilt3DCard';
import { ZoomIn } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpen }) => {
  return (
    <Tilt3DCard maxTilt={6} perspective={1000} className="h-64">
      <div 
        onClick={() => onOpen(item)}
        className="relative overflow-hidden group cursor-pointer bg-slate-100 h-full w-full rounded-2xl border border-slate-200/80 shadow-sm"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img 
          src={item.image} 
          alt={item.title}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800";
          }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div style={{ transform: 'translateZ(18px)' }}>
            <span className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wider block">{item.category}</span>
            <h4 className="text-white font-bold text-lg">{item.title}</h4>
          </div>
          <div 
            className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm"
            style={{ transform: 'translateZ(24px)' }}
          >
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Tilt3DCard>
  );
};
