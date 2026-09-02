import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Camera, MapPin } from 'lucide-react';
import { Photo } from '../../types/portfolio';

interface GalleryCardProps {
  photo: Photo;
  index: number;
  onSelect: (photo: Photo) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ photo, index, onSelect }) => {
  // Height variations for dynamic editorial masonry layout
  const getAspectRatioClass = () => {
    switch (photo.aspectRatio) {
      case 'tall':
        return 'aspect-[3/4] md:aspect-[2/3]';
      case 'wide':
        return 'aspect-[16/10]';
      case 'square':
        return 'aspect-square';
      case 'standard':
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#12161f] border border-white/5 hover:border-[#66fcf1]/40 transition-colors duration-300"
      onClick={() => onSelect(photo)}
    >
      {/* Image container with subtle scale transition */}
      <div className={`w-full ${getAspectRatioClass()} overflow-hidden bg-[#161b24] relative`}>
        <motion.img
          src={photo.imageUrl}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

        {/* Top Floating Badge on Hover */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-[#0b0c10]/80 backdrop-blur-md text-[#66fcf1] border border-[#66fcf1]/30 rounded">
            {photo.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#0b0c10]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-[#66fcf1] transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Reveal Metadata on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-xs text-[#c5c6c7]/80 font-mono mb-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#45a29e]" />
              {photo.location}
            </span>
            <span>·</span>
            <span>{photo.year}</span>
          </div>

          <h3 className="text-lg font-bold font-['Syne'] text-white tracking-wide mb-1.5">
            {photo.title}
          </h3>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#66fcf1]/90">
            <Camera className="w-3 h-3" />
            <span className="truncate">{photo.exif.camera} · {photo.exif.lens}</span>
          </div>
        </div>
      </div>

      {/* Static bottom bar visible on mobile without hover */}
      <div className="p-3 md:hidden flex items-center justify-between bg-[#12161f]">
        <div>
          <h4 className="text-sm font-semibold text-white font-['Syne']">{photo.title}</h4>
          <span className="text-[10px] font-mono text-[#c5c6c7]/60">{photo.location}</span>
        </div>
        <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-white/5 text-[#66fcf1] rounded">
          {photo.category}
        </span>
      </div>
    </motion.div>
  );
};
