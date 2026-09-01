import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { 
  Star, ChevronLeft, ChevronRight, Quote, 
  CheckCircle2, Heart, Pause, Play, UserCheck 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const total = testimonialsData.length;

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-teal-400 font-extrabold text-xs tracking-wider uppercase bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
              Verified Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Stories of Healing & Restored Vitality
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Read how our personalized medical interventions transformed our patients' everyday lives.
            </p>
          </div>

          {/* Autoplay & Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              id="testimonial-autoplay-toggle"
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition cursor-pointer"
              title={isAutoplay ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card */}
        <div className="bg-slate-800/90 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md relative animate-fade-in">
          <Quote className="w-16 h-16 text-teal-500/20 absolute top-6 right-8 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Patient Photo & Credentials */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative">
                <img
                  src={current.avatar}
                  alt={current.patientName}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-teal-500/30 shadow-xl"
                />
                <span className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-1 rounded-full shadow">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{current.patientName}</h3>
                <p className="text-xs text-slate-400">{current.location}</p>
                <div className="flex items-center gap-1 pt-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 w-full space-y-1 text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                  Treated Department
                </span>
                <span className="font-semibold text-teal-300 block">{current.departmentName}</span>
                <span className="text-slate-400 text-[11px] block">Attending: {current.doctorName}</span>
              </div>
            </div>

            {/* Testimonial Story */}
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold px-3 py-1 rounded-full inline-block">
                {current.treatment}
              </span>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                "{current.quote}"
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-white/5">
                {current.story}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                <span>Verified Clinical Review • {current.date}</span>
                <span className="text-teal-400 font-mono font-bold">
                  Story {currentIndex + 1} of {total}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              id={`testimonial-dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-teal-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Jump to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
