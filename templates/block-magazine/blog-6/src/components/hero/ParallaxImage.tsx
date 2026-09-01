import React, { memo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DynamicImage } from '../ui/DynamicImage';
import { PRIMARY_IMAGES } from '../../data/assets';

export interface ParallaxImageProps {
  imageUrl?: string;
  altText?: string;
  badgeText?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = memo(({
  imageUrl = PRIMARY_IMAGES.heroPavilion,
  altText = 'Contemporary Spatial Pavilion by Design Mag',
  badgeText = 'FEATURED COVER RETROSPECTIVE',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure relative scroll through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll velocity with spring dampening
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  // Pure compositor transformations: Y translate & Scale
  const yParallax = useTransform(smoothProgress, [0, 1], [-20, 30]);
  const scaleParallax = useTransform(smoothProgress, [0, 1], [1.05, 1.01]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.12, 0.04, 0.2]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] min-h-[340px] max-h-[640px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/80 bg-slate-900 gpu-layer"
    >
      {/* Parallax Image Layer (Hardware Accelerated) */}
      <motion.div
        style={{
          y: yParallax,
          scale: scaleParallax,
        }}
        className="absolute inset-0 w-full h-[116%] -top-[8%] will-change-transform gpu-layer"
      >
        <DynamicImage
          src={imageUrl}
          alt={altText}
          fallbackKey="spatialPavilion"
          priority={true}
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          containerClassName="w-full h-full"
        />
      </motion.div>

      {/* Dynamic Overlay Gradient for Depth */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none"
      />

      {/* Floating Spatial Badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <div className="glass-pill px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-slate-800 flex items-center gap-2 shadow-lg backdrop-blur-md bg-white/90">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>{badgeText}</span>
        </div>
      </div>

      {/* Corner Spatial Geometry Watermark */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 hidden sm:flex flex-col items-end text-right text-white/85 drop-shadow-md">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Spatial Coordinates</span>
        <span className="text-xs font-mono font-semibold text-white">37°46'29.2"N 122°25'09.9"W</span>
      </div>
    </div>
  );
});

ParallaxImage.displayName = 'ParallaxImage';
