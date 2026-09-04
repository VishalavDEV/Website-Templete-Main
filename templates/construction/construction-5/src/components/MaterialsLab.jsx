import React, { useEffect, useState } from 'react';

export default function MaterialsLab() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const fallbackMaterials = [
    {
      id: 'mat-01',
      code: 'MAT-01',
      name: 'Siberian Larch & Yakisugi',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80',
      detail: 'Shou Sugi Ban Japanese charred wood providing impervious natural resistance to moisture, insects, and UV degradation.',
      rating: '50-YR WARRANTY',
      metaInfo: 'Thermal: 0.13 W/mK • Class A Fire'
    },
    {
      id: 'mat-02',
      code: 'MAT-02',
      name: 'Low-Iron Solar Acoustic Glass',
      image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80',
      detail: 'Triple-pane laminated structural glazing offering 92% optical clarity and 45dB acoustic isolation against extreme alpine climates.',
      rating: '0.18 U-VALUE',
      metaInfo: 'Sound: 45 dB • 99% UV Block'
    },
    {
      id: 'mat-03',
      code: 'MAT-03',
      name: 'Honed Swiss Basalt & Granite',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      detail: 'Volcanic quarry stone diamond-cut into seamless indoor-outdoor floor slabs with concealed floor heating conduits.',
      rating: 'ZERO POROSITY',
      metaInfo: 'Hardness: 7 Mohs • Zero Sealant'
    },
    {
      id: 'mat-04',
      code: 'MAT-04',
      name: 'Black Quartz Reflection Pool',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
      detail: 'Submerged crystalline dark quartz with micro-slit perimeter overflow, silent circulation pumps, and LED light ribbons.',
      rating: 'MIRROR OPTICS',
      metaInfo: 'Flow: Silent 30dB • Heated Geothermal'
    }
  ];

  useEffect(() => {
    fetch('/api/materials')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch materials');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setMaterials(data);
        } else {
          setMaterials(fallbackMaterials);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Backend API connection warning, using fallback materials data:', err);
        setMaterials(fallbackMaterials);
        setLoading(false);
      });
  }, []);

  const heroImageSrc = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

  return (
    <section className="materials-section w-full max-w-full overflow-x-hidden bg-[#0a0a0a] text-white border-t border-neutral-800/60" id="materials">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 md:py-16">
        
        {/* Section Header Split: Responsive Mobile-First */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="order-1 flex flex-col">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#c88a58] font-bold uppercase mb-2">
              SPECIMEN LAB // CRAFTSMANSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              Tactile Materials & Engineering
            </h2>
          </div>
          <div className="order-2 max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Uncompromising structural elements and forensic mineral analysis selected for timeless architectural resilience.
            </p>
          </div>
        </div>

        {/* Featured Engineering Showcase Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          
          {/* Main Architectural Image Container with Skeleton Loader */}
          <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-neutral-800 shadow-2xl border border-neutral-800 group">
              {/* Skeleton placeholder while loading */}
              {!heroImageLoaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
                  <span className="text-xs font-mono text-neutral-500">LOADING SPECIMEN MATRIX...</span>
                </div>
              )}
              
              <img
                src={heroImageSrc}
                alt="Tactile Materials & Engineering"
                onLoad={() => setHeroImageLoaded(true)}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
                  setHeroImageLoaded(true);
                }}
                className={`w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-105 ${
                  heroImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Badges Overlay */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-2">
                <span className="bg-black/80 backdrop-blur-md text-[#c88a58] font-mono text-[10px] sm:text-xs font-bold px-3 py-1 rounded border border-[#c88a58]/40 shadow-md">
                  ARCHITECTURAL MATRIX // ISO-14001
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 bg-black/85 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    SWISS TIMBER & QUARTZ JOINERY
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Precision forensic acoustic & seismic tolerance validation
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#c88a58] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700 self-start sm:self-auto">
                  0.05 MM TOLERANCE
                </span>
              </div>
            </div>
          </div>

          {/* Right Engineering Specs Card */}
          <div className="lg:col-span-5 order-2 lg:order-2 bg-[#0e0e0e] border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-[#c88a58] uppercase tracking-wider">
                  ENGINEERING METRICS
                </span>
                <span className="text-[10px] font-mono bg-neutral-900 text-neutral-400 px-2 py-0.5 rounded border border-neutral-800">
                  TIER-1 STRUCTURAL
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 leading-snug">
                Forensic Durability & Swiss Passive Engineering
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Every material specimen undergoes stringent thermographic auditing, acoustic resonance profiling, and weathering testing to ensure generational longevity.
              </p>

              <div className="space-y-3 border-t border-neutral-800/80 pt-4">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-neutral-400">Thermal Envelope:</span>
                  <strong className="text-white font-mono">0.11 W/m²K (Passivhaus)</strong>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-neutral-400">Acoustic Attenuation:</span>
                  <strong className="text-white font-mono">Rw + Ctr = 48 dB</strong>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-neutral-400">Embodied Carbon:</span>
                  <strong className="text-emerald-400 font-mono">-42% Net Negative</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <a
                href="#configurator"
                className="inline-flex w-full items-center justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-[#c88a58] via-[#e2a87a] to-[#99582a] text-[#0e0e0e] font-mono font-black text-xs uppercase tracking-widest hover:opacity-90 shadow-lg transition-all"
              >
                OPEN BIM SPEC CONFIGURATOR →
              </a>
            </div>
          </div>

        </div>

        {/* 4-Column Specimen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(materials.length > 0 ? materials : fallbackMaterials).map((mat) => (
            <div
              key={mat.id || mat.code}
              className="group bg-[#0e0e0e] border border-neutral-800 hover:border-[#c88a58] rounded-xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs font-bold text-[#c88a58]">{mat.code}</span>
                  <span className="font-mono text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">
                    {mat.rating}
                  </span>
                </div>

                {/* Specimen Material Image */}
                <div className="relative w-full aspect-video sm:aspect-[16/10] rounded-lg overflow-hidden my-3.5 bg-neutral-800 shadow-inner">
                  <img
                    src={mat.image || 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80'}
                    alt={mat.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=600&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#c88a58] transition-colors">
                  {mat.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                  {mat.detail}
                </p>
              </div>

              <div className="font-mono text-[11px] sm:text-xs text-[#c88a58] border-t border-neutral-800/80 pt-3 flex items-center justify-between">
                <span>{mat.metaInfo}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
