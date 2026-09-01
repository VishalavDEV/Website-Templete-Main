import React from 'react';
import { Testimonial } from '../../types';
import { Tilt3DCard } from '../common/Tilt3DCard';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Tilt3DCard maxTilt={6} perspective={1000} className="h-full">
      <div 
        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between h-full group relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors pointer-events-none"
          style={{ transform: 'translateZ(12px)' }}
        >
          <Quote className="w-10 h-10 opacity-60" />
        </div>
        <div className="relative z-10" style={{ transform: 'translateZ(16px)' }}>
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
            "{testimonial.content}"
          </p>
        </div>
        <div 
          className="flex items-center gap-3.5 pt-4 border-t border-slate-100 relative z-10"
          style={{ transform: 'translateZ(14px)' }}
        >
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/20 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
            <p className="text-slate-500 text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </Tilt3DCard>
  );
};
