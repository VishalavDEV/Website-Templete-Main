import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const GALLERY_IMAGES = [
  {
    url: 'images/pexels-fauxels-3184657.jpg',
    title: 'Collaborative Design Workshop',
    subtitle: 'Strategy & Brand Architecture'
  },
  {
    url: 'images/pexels-cottonbro-5483050.jpg',
    title: 'Tactile Print & Material Lab',
    subtitle: 'Copenhagen Art Direction Studio'
  },
  {
    url: 'images/pexels-jibarofoto-2148216.jpg',
    title: 'Frontend Engineering Lab',
    subtitle: '60fps React & Canvas Development'
  },
  {
    url: 'images/pexels-mikael-blomkvist-6476256.jpg',
    title: 'Creative Review & Synthesis',
    subtitle: 'Executive Leadership Syncs'
  },
  {
    url: 'images/pexels-mikael-blomkvist-6476260.jpg',
    title: 'Brand Systems Synthesis',
    subtitle: 'Nordic Art Direction'
  },
  {
    url: 'images/pexels-divinetechygirl-1181346.jpg',
    title: 'Digital Product Prototyping',
    subtitle: 'Interactive UI/UX Lab'
  },
  {
    url: 'images/pexels-ann-h-45017-32417522.jpg',
    title: 'Spatial Architecture & Materials',
    subtitle: 'Physical Brand Touchpoints'
  },
  {
    url: 'images/pexels-karola-g2-6224.jpg',
    title: 'Tactile Product Packaging',
    subtitle: 'Luxury E-Commerce Direction'
  }
];

const ACCOLADES = [
  { year: '2025', title: 'Nordic Studio of the Year', organization: 'Nordic Design Awards' },
  { year: '2024', title: 'Red Dot: Best of the Best', organization: 'Red Dot Product Design' },
  { year: '2024', title: 'Site of the Month (x3)', organization: 'Awwwards Global' },
  { year: '2023', title: 'Best E-Commerce Architecture', organization: 'European Web Summit' }
];

export const StudioGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Inside AURELIA"
          title="Our Copenhagen workspace & studio culture."
          subtitle="Take a look behind the scenes where our multidisciplinary teams craft identities, products, and web flagships."
        />

        {/* 8-Image Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#EAE6DF] shadow-md border border-[#EAE6DF]"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D96B43] mb-1">
                  {img.subtitle}
                </span>
                <h4 className="text-base font-bold font-display leading-snug">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accolades & Awards Bar */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#EAE6DF] shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F9EFEA] text-[#D96B43] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#1A1918]">Industry Recognition</h3>
              <p className="text-xs text-[#6B6863]">Recent global awards for strategic excellence and digital design</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOLADES.map((acc, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#EAE6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D96B43]">{acc.year}</span>
                </div>
                <h4 className="text-sm font-bold font-display text-[#1A1918]">{acc.title}</h4>
                <p className="text-xs text-[#6B6863]">{acc.organization}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
