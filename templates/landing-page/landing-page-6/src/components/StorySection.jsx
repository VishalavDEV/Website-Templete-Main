import React from 'react';
import { ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function StorySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">INSIDE THE STORY</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Step Into The World
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Three key chapters that define Lyra's desperate race against time and loss.
          </p>
        </div>

        <div className="story-grid">
          {bookDetailsData.storyMoments.map((moment, idx) => (
            <div 
              key={moment.id} 
              className={`story-card reveal-on-scroll delay-${idx + 1}`}
            >
              <div className="story-card-img-wrapper">
                <img src={moment.image} alt={moment.title} />
                <span className="story-card-badge">{moment.chapterLabel}</span>
              </div>

              <div className="story-card-body">
                <h3 className="story-card-title">{moment.title}</h3>
                <p className="story-card-desc">{moment.desc}</p>
                <div className="story-card-quote">
                  "{moment.quote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
