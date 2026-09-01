import { Quote } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Testimonials Full Page Component
 * Displays the complete set of student reviews and success stories in a grid.
 */
export default function TestimonialsPage() {
  const { testimonials } = contentData;

  return (
    <div className="testimonials-page fade-in">
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-gold">Reviews</span>
          <h1>Student Testimonials</h1>
          <p className="banner-sub">Read full transcripts of student stories, achievements, and experiences at Apex.</p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="testimonials-grid-section section-padding">
        <div className="container">
          <div className="grid-3 testimonials-grid">
            {testimonials.map((test) => (
              <div key={test.id} className="card testimonial-grid-card flex-between-column fade-in">
                <div>
                  <Quote className="quote-icon" size={32} style={{ opacity: 0.15, marginBottom: 'var(--space-md)' }} />
                  <p className="testimonial-text">"{test.quote}"</p>
                </div>
                
                <div className="testimonial-user" style={{ marginTop: 'var(--space-lg)' }}>
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    className="testimonial-avatar"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"; // fallback
                    }}
                  />
                  <div className="testimonial-info">
                    <h4>{test.name}</h4>
                    <p className="testimonial-meta">
                      {test.course} <br />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{test.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
