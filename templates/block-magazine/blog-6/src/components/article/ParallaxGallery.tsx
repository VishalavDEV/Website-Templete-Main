import React, { memo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Camera, MapPin } from 'lucide-react';
import { DynamicImage } from '../ui/DynamicImage';
import { PRIMARY_IMAGES } from '../../data/assets';

export interface GalleryImage {
  url: string;
  caption: string;
  fallbackKey?: string;
}

export interface ParallaxGalleryProps {
  images?: GalleryImage[];
  galleryTitle?: string;
  location?: string;
}

export const ParallaxGallery: React.FC<ParallaxGalleryProps> = memo(({
  images = [
    {
      url: PRIMARY_IMAGES.gallery1,
      caption: 'Main cantilevered glass pavilion overlooking coastal fjord.',
      fallbackKey: 'spatialPavilion',
    },
    {
      url: PRIMARY_IMAGES.gallery2,
      caption: 'Photonic light dispersion detail through crystal facets.',
      fallbackKey: 'generativeGlass',
    },
    {
      url: PRIMARY_IMAGES.gallery3,
      caption: 'Algorithmic structural ribbing at golden hour.',
      fallbackKey: 'photosyntheticTimber',
    },
  ],
  galleryTitle = 'Visual Retrospective: Photonic Spatial Pavilions',
  location = 'Nordic Architecture Biennale • 60°10\'N 24°56\'E',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const parallaxY1 = useTransform(smoothProgress, [0, 1], [-20, 25]);
  const parallaxY2 = useTransform(smoothProgress, [0, 1], [25, -25]);

  return (
    <div ref={containerRef} className="my-16 -mx-4 sm:-mx-8 lg:-mx-16">
      {/* Gallery Header Strip */}
      <div className="px-4 sm:px-8 lg:px-16 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>{galleryTitle}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          <span>{location}</span>
        </div>
      </div>

      {/* Breakout Image Grid with Differentiated Parallax */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 sm:px-8 lg:px-16">
        {/* Large Panorama Hero (8 Cols) */}
        <div className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
          <motion.div
            style={{ y: parallaxY1 }}
            className="absolute inset-0 w-full h-[115%] -top-[7%]"
          >
            <DynamicImage
              src={images[0].url}
              alt={images[0].caption}
              fallbackKey={images[0].fallbackKey}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              containerClassName="w-full h-full"
            />
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-2xl text-white/90 text-xs font-mono flex items-center justify-between z-10">
            <span>{images[0].caption}</span>
            <span className="text-[10px] text-slate-300">01 / 03</span>
          </div>
        </div>

        {/* Side Stack (4 Cols) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {images.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[16/9] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 group"
            >
              <motion.div
                style={{ y: parallaxY2 }}
                className="absolute inset-0 w-full h-[115%] -top-[7%]"
              >
                <DynamicImage
                  src={img.url}
                  alt={img.caption}
                  fallbackKey={img.fallbackKey}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  containerClassName="w-full h-full"
                />
              </motion.div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl text-white/90 text-[11px] font-mono flex items-center justify-between z-10">
                <span className="truncate mr-2">{img.caption}</span>
                <span className="text-[10px] text-slate-300">0{idx + 2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ParallaxGallery.displayName = 'ParallaxGallery';
