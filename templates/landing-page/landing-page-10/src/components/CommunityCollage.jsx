import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles, MapPin } from 'lucide-react';

export default function CommunityCollage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // -15 to +15 px
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  const COMMUNITY_IMAGES = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Morning Trail Walk',
      tag: 'Movement',
      pos: 'col-span-12 lg:col-span-5 h-72 sm:h-96'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      caption: 'Nourishing Together',
      tag: 'Nutrition',
      pos: 'col-span-12 sm:col-span-6 lg:col-span-4 h-72 sm:h-96'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      caption: 'Outdoor Recovery Stretch',
      tag: 'Rest',
      pos: 'col-span-12 sm:col-span-6 lg:col-span-3 h-72 sm:h-96'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      caption: 'Partner Strength Practice',
      tag: 'Strength',
      pos: 'col-span-12 sm:col-span-6 lg:col-span-7 h-72 sm:h-80'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      caption: 'Mindful Evening Reset',
      tag: 'Habits',
      pos: 'col-span-12 sm:col-span-6 lg:col-span-5 h-72 sm:h-80'
    }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="py-24 md:py-36 bg-[#171816] text-[#F3F0E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
              THE AURELIS COMMUNITY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
              Built around <span className="editorial-italic font-normal text-[#D8D4C8]">real people.</span>
            </h2>
          </div>
          <p className="text-base text-[#D8D4C8]/80 max-w-md font-light leading-relaxed">
            Health is shared energy. Join a global community of thoughtful individuals cultivating strength, balance, and lifelong habits together.
          </p>
        </div>

        {/* Living Responsive Interactive Image Collage Grid */}
        <div className="grid grid-cols-12 gap-6">
          {COMMUNITY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              style={{
                x: mousePosition.x * (idx % 2 === 0 ? 1 : -1),
                y: mousePosition.y * (idx % 2 === 0 ? -1 : 1)
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className={`relative rounded-3xl overflow-hidden group shadow-2xl border border-white/10 ${img.pos}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Caption on Hover */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white transition-all duration-300">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B56F4D]">
                    {img.tag}
                  </span>
                  <h4 className="text-lg font-heading font-bold text-[#F3F0E8]">
                    {img.caption}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4 text-[#B56F4D]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
