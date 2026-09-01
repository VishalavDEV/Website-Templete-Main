import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "Powerlifter & Member",
      text: "I came to Vortex Forge looking for real weights and proper squat racks. I found a community that completely transformed my strength limits. Increased my deadlift by 45kg in 6 months!",
      photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Elena Rostova",
      role: "Iron Ascent 2025 Finalist",
      text: "The energy at the Iron Ascent event is unmatched. From the lightning effects to the heavy music and cheering crowd, it drives you to pull reps you never thought possible.",
      photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Miller",
      role: "Shred Program Participant",
      text: "The trainers actually care about periodization and biomechanics. Coach Kael kept me disciplined through 12 brutal weeks. Down 10kg fat and feeling explosive.",
      photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="REAL STORIES • REAL GAINS" title="MEMBER TESTIMONIALS" />
        <div className="grid-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
