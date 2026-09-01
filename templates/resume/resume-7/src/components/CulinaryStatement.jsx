import React from 'react';
import { CHEF_PROFILE } from '../data/culinaryData';

export default function CulinaryStatement() {
  return (
    <section className="statement-section">
      <div className="container statement-box">
        <span className="statement-quote-mark">&ldquo;</span>
        <blockquote className="statement-quote">
          "{CHEF_PROFILE.quote}"
        </blockquote>
        <div className="statement-author">
          {CHEF_PROFILE.name.toUpperCase()}
        </div>
        <div className="statement-author-title">
          {CHEF_PROFILE.title} &bull; {CHEF_PROFILE.location}
        </div>
      </div>
    </section>
  );
}
