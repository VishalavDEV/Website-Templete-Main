import React from 'react';

export const Blog: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="py-5 bg-primary-dark text-center" style={{ paddingTop: '8rem' }}>
        <div className="container py-5">
          <span className="eyebrow eyebrow-light">THE HEARTH JOURNAL</span>
          <h1 className="display-3 font-heading text-cream mb-3">Stories of Fire & Season</h1>
          <p className="section-subtitle text-muted-light mx-auto" style={{ maxWidth: '650px' }}>
            Reflections from our chefs, grower visits across the hills, and deep dives into the sensory art of live ember cookery.
          </p>
        </div>
      </section>

      {/* Journal Articles Grid */}
      <section className="section-py bg-cream">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <article className="journal-card">
                <div className="journal-thumb-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop"
                    alt="The Story Behind Our Kitchen"
                  />
                  <span className="journal-category-tag">Kitchen Story</span>
                </div>
                <div className="journal-body">
                  <small className="text-muted-custom mb-2">
                    <i className="bi bi-calendar3 me-1"></i>August 10, 2026 &bull; 4 min read
                  </small>
                  <h2 className="journal-title">The Story Behind Our Kitchen</h2>
                  <p className="text-muted-custom small flex-grow-1">
                    How an obsession with seasoned hard wood and ancestral earthen stoves shaped the very foundation of Ember House.
                  </p>
                  <a href="#essay" className="btn-link-ember mt-2">
                    Read Essay <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
