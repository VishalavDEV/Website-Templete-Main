import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  const { name, course, rating, avatar, color, text, role } = testimonial;

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote" aria-hidden="true">"</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
        <div
          className="testimonial-avatar"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
          aria-hidden="true"
        >
          {avatar}
        </div>
        <div>
          <strong style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem' }}>{name}</strong>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{role}</span>
        </div>
      </div>
      <div className="stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill={i < rating ? '#fbbf24' : 'none'} color={i < rating ? '#fbbf24' : '#d1d5db'} />
        ))}
      </div>
      <p className="testimonial-text" style={{ marginTop: 'var(--space-md)' }}>"{text}"</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
        Course: {course}
      </p>
    </div>
  );
}
