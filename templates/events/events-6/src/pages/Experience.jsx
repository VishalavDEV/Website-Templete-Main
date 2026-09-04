import React from 'react';
import { Music, Zap, Disc, Utensils, Palette, ShoppingBag, Camera, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  const experiencesList = [
    {
      title: 'LIVE MUSIC',
      desc: 'Prerequisites: 3 stages, 30+ artists, 10 hours of non-stop live performances spanning pop, soul, electronic, and rock.',
      icon: <Music size={28} />,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'LIGHT SHOW',
      desc: 'Synchronized golden spotlight arrays, high-power laser beam cannons, and volumetric fog curtains.',
      icon: <Zap size={28} />,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'DJ ZONE',
      desc: 'After-hours synth sanctuary featuring modular synthesizer DJ sets and deep electronic grooves until dawn.',
      icon: <Disc size={28} />,
      image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'FOOD VILLAGE',
      desc: 'Curated gourmet street food trucks, artisan woodfired pizzas, vegan specialties, and craft mocktails.',
      icon: <Utensils size={28} />,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'ART INSTALLATIONS',
      desc: 'Interactive audio-reactive light sculptures and oversized glowing neon acoustic installations.',
      icon: <Palette size={28} />,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'MERCHANDISE',
      desc: 'Limited edition Velora Live hoodies, vintage concert poster prints, vinyl records, and golden wristbands.',
      icon: <ShoppingBag size={28} />,
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'PHOTO ZONE',
      desc: 'Golden glowing stage backdrop photo booths designed for unforgettable memory capturing.',
      icon: <Camera size={28} />,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'VIP LOUNGE',
      desc: 'Air-conditioned luxury lounge, private bar, front-stage viewing deck, and exclusive artist meet & greets.',
      icon: <Crown size={28} />,
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            IMMERSIVE FESTIVAL WORLD
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            THE VELORA EXPERIENCE
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            More than a concert — step into an immersive night of music, art, lights, and luxury.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencesList.map((exp, idx) => (
              <div
                key={idx}
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(245,185,0,0.2)] flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="text-[#FFC928] mb-3">{exp.icon}</div>
                  <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link to="/tickets" className="btn-primary py-4 px-10 rounded-full font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFC928] via-[#F5B900] to-[#D99800]">
              RESERVE YOUR PASS NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
