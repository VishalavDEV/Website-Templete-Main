import React from 'react';
import { Music, Users, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Stages() {
  const stagesData = [
    {
      id: 1,
      name: 'AURORA MAIN STAGE',
      tagline: 'Monumental Arena Performances',
      capacity: '10,000+ Attendees',
      style: 'Pop, Indie Headliners, Rock & Soul',
      artists: ['Lyra Voss', 'The Silver Room', 'Mira Vale', 'Zen Ray'],
      schedule: '6:00 PM - 12:00 AM',
      specs: '120,000 Watt L-Acoustics Sound System, 4K LED Curved Backdrop, Golden Laser Array',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'ECHO STAGE',
      tagline: 'Independent & Emerging Acoustic Revelations',
      capacity: '3,500 Attendees',
      style: 'Acoustic Indie, Dream Pop, Singer-Songwriters',
      artists: ['Elio Vane', 'Aria Noir', 'Acoustic Collective'],
      schedule: '5:30 PM - 11:00 PM',
      specs: 'Warm Acoustic Array, Natural Golden Spotlights, Surround Sound Canopy',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'AFTERDARK STAGE',
      tagline: 'Late-Night Electronic & DJ Sanctuary',
      capacity: '2,500 Attendees',
      style: 'Electronic, Synth-Wave, Techno, Deep House',
      artists: ['Kael Nova', 'Nova Kai', 'Midnight Frequency DJs'],
      schedule: '11:00 PM - 2:00 AM',
      specs: 'Sub-bass Earthquake Subs, Hologram Projection Ring, Smoke Beams',
      image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden pt-24 sm:pt-28 md:pt-32 relative z-10 min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 text-center relative bg-[radial-gradient(ellipse_at_top,_#261c04_0%,_#050505_75%)] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle inline-block text-xs sm:text-sm font-extrabold tracking-[4px] text-[#F5B900] uppercase mb-3">
            THE THREE SONIC ARENAS
          </span>
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
            FESTIVAL STAGES
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore the unique sound engineering and line-ups powering each of our 3 stages.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12">
          {stagesData.map((st) => (
            <div
              key={st.id}
              className="bg-[#141414] rounded-2xl overflow-hidden border border-white/10 p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-[#FFC928] transition-all duration-300"
            >
              <div className="rounded-xl overflow-hidden aspect-[16/10] md:aspect-auto md:h-80 border border-[#F5B900]/30 relative bg-neutral-900">
                <img src={st.image} alt={st.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-[#FFC928] uppercase tracking-widest mb-1">
                  {st.capacity}
                </span>
                <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white mb-2">
                  {st.name}
                </h2>
                <p className="text-[#F5B900] font-medium italic text-sm sm:text-base mb-4">
                  “{st.tagline}”
                </p>

                <div className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-300 mb-6">
                  <div><strong className="text-white">Style:</strong> {st.style}</div>
                  <div><strong className="text-white">Schedule:</strong> {st.schedule}</div>
                  <div><strong className="text-white">Featured Artists:</strong> {st.artists.join(', ')}</div>
                  <div><strong className="text-white">Audio Tech:</strong> {st.specs}</div>
                </div>

                <div>
                  <Link to="/schedule" className="btn-secondary py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider inline-flex">
                    VIEW STAGE SCHEDULE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
