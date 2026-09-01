import { Star } from 'lucide-react';
import './TestimonialCard.css';

/**
 * Testimonial slide card used inside the carousel on the Home and Testimonials pages.
 */
const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card" aria-label={`Testimonial from ${testimonial.name}`}>
      {/* Quote mark */}
      <div className="testimonial-card__quote" aria-hidden="true">"</div>

      {/* Stars */}
      <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
        ))}
      </div>

      {/* Text */}
      <blockquote className="testimonial-card__text">
        {testimonial.testimonial}
      </blockquote>

      {/* Author */}
      <div className="testimonial-card__author">
        <div
          className="testimonial-card__avatar"
          style={{ background: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div className="testimonial-card__author-info">
          <cite className="testimonial-card__name">{testimonial.name}</cite>
          <span className="testimonial-card__role">
            {testimonial.designation} · {testimonial.company}
          </span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
