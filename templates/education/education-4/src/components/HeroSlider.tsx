import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Award, 
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { HERO_SLIDES } from '../data/universityData';

interface HeroSliderProps {
  onOpenAdmissions: () => void;
  onLearnMore: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenAdmissions,
  onLearnMore,
  onNavigateSection
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = HERO_SLIDES[currentIndex];

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const featureBoxes = [
    {
      id: 'scholarship',
      title: 'Scholarship Facility',
      desc: 'Empowering ambitious students with merit grants and financial aid.',
      icon: GraduationCap,
      action: () => onOpenAdmissions()
    },
    {
      id: 'certification',
      title: 'Global Certification',
      desc: 'Internationally accredited degree pathways recognized across 80+ nations.',
      icon: Award,
      action: () => onNavigateSection ? onNavigateSection('courses') : onLearnMore()
    },
    {
      id: 'library',
      title: 'Book Library & Store',
      desc: '24/7 access to over 3.2 million academic textbooks & research journals.',
      icon: BookOpen,
      action: () => onNavigateSection ? onNavigateSection('campus-tour') : onLearnMore()
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden select-none bg-[#0e1b2e]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Banner Visual Area */}
      <div className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] flex items-center">
        {/* Background Image Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.bgImage}
              alt={slide.headline}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_top]"
            />
            {/* Subtle Gradient Overlay on Left to ensure high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b2e]/90 via-[#0e1b2e]/55 to-black/25" />
          </div>
        ))}

        {/* Hero Content on the Left */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 pt-0 pb-20 flex flex-col items-start justify-center">
          <div className="max-w-xl text-left">
            {/* Main Headline */}
            <h1 
              id="hero-main-title"
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md"
            >
              {currentSlide.headline}
            </h1>

            {/* Subtitle text */}
            <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed mb-8 max-w-lg drop-shadow">
              {currentSlide.subtitle}
            </p>

            {/* Golden CTA Button: "START A COURSE" */}
            <div className="flex items-center gap-4">
              <button
                id="hero-start-course-btn"
                onClick={onLearnMore}
                className="bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-none transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                START A COURSE
              </button>
              <button
                onClick={onOpenAdmissions}
                className="hidden sm:inline-flex bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none backdrop-blur-sm border border-white/30 transition-all cursor-pointer"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          id="hero-prev-btn"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#ffb606] hover:text-slate-950 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          id="hero-next-btn"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#ffb606] hover:text-slate-950 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3 Connected Navy Translucent Feature Boxes Overlaid at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
            {featureBoxes.map((box, idx) => {
              const IconComponent = box.icon;
              return (
                <div
                  key={box.id}
                  onClick={box.action}
                  className={`p-6 sm:p-7 flex items-center justify-between cursor-pointer transition-all duration-300 group ${
                    idx === 0 
                      ? 'bg-[#0f1d32]/90 hover:bg-[#0f1d32] border-t md:border-t-0 md:border-r border-slate-700/50' 
                      : idx === 1
                      ? 'bg-[#15253e]/90 hover:bg-[#15253e] border-t md:border-t-0 md:border-r border-slate-700/50'
                      : 'bg-[#0f1d32]/90 hover:bg-[#0f1d32]'
                  }`}
                >
                  <div className="pr-4">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ffb606] transition-colors mb-1.5 flex items-center gap-2">
                      <span>{box.title}</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-normal leading-relaxed line-clamp-2">
                      {box.desc}
                    </p>
                  </div>

                  {/* Gold Icon on the Right */}
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ffb606]/20 transition-all">
                    <IconComponent className="w-7 h-7 text-[#ffb606]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
