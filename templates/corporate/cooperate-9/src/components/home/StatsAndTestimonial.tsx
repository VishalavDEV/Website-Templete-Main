import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const StatsAndTestimonial: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: '“Finora has transformed the way I manage my finances. The personalized guidance and real-time insights make me feel more in control.”',
      name: 'Priya Sharma',
      role: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop',
    },
    {
      quote: '“Having our portfolio rebalanced seamlessly with our dedicated Finora advisor has made expanding our commercial footprint completely stress-free.”',
      name: 'Marcus Vance',
      role: 'Chief Investment Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=240&auto=format&fit=crop',
    },
    {
      quote: '“The combination of intelligent AI savings projections and human verification gave us the confidence to lock in our first property 14 months early.”',
      name: 'Elena Rostova',
      role: 'Private Wealth Client',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop',
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT CARD: TRUSTED BY STATS */}
        <div className="bg-[#F7F5F0] rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#191919] leading-tight max-w-sm">
              Trusted by growing individuals and businesses
            </h3>
          </div>

          {/* 3 STAT COLUMNS */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EBE8E1]">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#191919] tracking-tight">
                50K+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                Active Clients
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#191919] tracking-tight">
                $12B+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                Assets Managed
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#191919] tracking-tight">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: WHAT OUR CLIENTS SAY */}
        <div className="bg-[#F7F5F0] rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#191919]">
              What our clients say
            </h3>

            {/* Testimonial Quote */}
            <blockquote className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[19px] font-serif italic text-[#191919]/90 leading-relaxed min-h-[90px]">
              {current.quote}
            </blockquote>
          </div>

          {/* AUTHOR & CONTROLS FOOTER */}
          <div className="pt-4 border-t border-[#EBE8E1] flex items-center justify-between">
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-semibold text-[#191919]">{current.name}</div>
                <div className="text-xs text-gray-500">{current.role}</div>
              </div>
            </div>

            {/* Pagination Dots & Navigation Arrows */}
            <div className="flex items-center gap-4">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentTestimonial ? 'bg-[#191919] scale-110' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-full transition cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-full transition cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
