import React from 'react';
import { Quote } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function BookIntro() {
  return (
    <section id="story" className="section text-center">
      <div className="container center-content">
        <span className="section-label reveal-on-scroll">THE STORY</span>
        
        <h2 className="section-heading reveal-on-scroll delay-1">
          A Future Built From Forgotten Memories
        </h2>

        <p className="section-desc reveal-on-scroll delay-2">
          Set in a near-future metropolis where human consciousness can be archived, edited, and traded like currency, <em>The Echoes of Tomorrow</em> explores the fragile boundary between truth, emotion, and survival.
        </p>

        {/* Large Decorative Quote Card */}
        <div className="book-intro-quote-card reveal-on-scroll delay-3">
          <Quote className="quote-icon" size={54} />
          <blockquote className="quote-text">
            “{bookDetailsData.heroQuote}”
          </blockquote>
          <span className="quote-author">— MIRA ROWAN</span>
        </div>
      </div>
    </section>
  );
}
