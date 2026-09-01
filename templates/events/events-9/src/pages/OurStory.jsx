import React from 'react';
import { weddingData } from '../data/weddingData';
import { Calendar, MapPin, Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* HERO HEADER */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">THE JOURNEY OF US</span>
          <h1 className="serif-title">OUR STORY</h1>
          <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontSize: '1.4rem', marginTop: '0.5rem' }}>
            "{weddingData.ourStory.subtitle}"
          </p>
        </div>

        {/* HOW WE MET */}
        <div className="split-story-grid" style={{ marginBottom: '6rem' }}>
          <div className="story-image-wrap">
            <img src={weddingData.ourStory.howWeMet.image} alt={weddingData.ourStory.howWeMet.title} />
          </div>
          <div>
            <span className="section-label">THE BEGINNING</span>
            <h2 className="serif-title" style={{ marginBottom: '1.2rem' }}>{weddingData.ourStory.howWeMet.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.8' }}>
              {weddingData.ourStory.howWeMet.text}
            </p>
          </div>
        </div>

        {/* OUR FIRST DATE */}
        <div className="dresscode-card" style={{ maxWidth: '950px', margin: '0 auto 6rem', padding: '3.5rem' }}>
          <div className="split-story-grid" style={{ gap: '2.5rem' }}>
            <div>
              <span className="section-label">SPRING IN PARIS</span>
              <h2 className="serif-title" style={{ marginBottom: '1rem' }}>{weddingData.ourStory.firstDate.title}</h2>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--accent)' }}>
                <span><Calendar size={15} style={{ display: 'inline', marginRight: '0.3rem' }} /> {weddingData.ourStory.firstDate.date}</span>
                <span><MapPin size={15} style={{ display: 'inline', marginRight: '0.3rem' }} /> {weddingData.ourStory.firstDate.location}</span>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: '1.8', fontStyle: 'italic' }}>
                "{weddingData.ourStory.firstDate.memory}"
              </p>
            </div>

            <div className="story-image-wrap" style={{ height: '320px' }}>
              <img src={weddingData.ourStory.firstDate.image} alt="First Date Memory" style={{ height: '100%' }} />
            </div>
          </div>
        </div>

        {/* RELATIONSHIP TIMELINE */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="section-label">MILESTONES</span>
          <h2 className="serif-title">RELATIONSHIP TIMELINE</h2>
        </div>

        <div className="timeline-vertical" style={{ marginBottom: '6rem' }}>
          {weddingData.ourStory.timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* PROPOSAL STORY */}
        <div className="split-story-grid" style={{ marginBottom: '6rem' }}>
          <div>
            <span className="section-label">SANTORINI SUNSET</span>
            <h2 className="serif-title" style={{ marginBottom: '1.2rem' }}>{weddingData.ourStory.proposal.title}</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {weddingData.ourStory.proposal.how}
            </p>
            <blockquote style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1rem', fontStyle: 'italic', color: 'var(--text)', fontSize: '1.15rem' }}>
              "{weddingData.ourStory.proposal.reaction}"
            </blockquote>
          </div>

          <div className="story-image-wrap">
            <img src={weddingData.ourStory.proposal.image} alt={weddingData.ourStory.proposal.title} />
          </div>
        </div>

        {/* ENGAGEMENT STORY */}
        <div className="dresscode-card" style={{ maxWidth: '950px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
          <Heart size={36} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
          <h2 className="serif-title" style={{ marginBottom: '1rem' }}>{weddingData.ourStory.engagement.title}</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            {weddingData.ourStory.engagement.details}
          </p>
          <img 
            src={weddingData.ourStory.engagement.image} 
            alt="Engagement Photo" 
            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border)' }} 
          />
        </div>
      </div>
    </div>
  );
}
