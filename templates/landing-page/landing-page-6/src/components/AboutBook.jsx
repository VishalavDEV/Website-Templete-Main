import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutBook() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column Artwork */}
          <div className="about-image-wrapper reveal-on-scroll">
            <img 
              src="/assets/images/chapter1.jpg" 
              alt="Memory Vault Conceptual Artwork" 
            />
            <div className="about-badge-floating">
              <h4>Vault 9 Archive</h4>
              <p>Subterranean Memory Sanctuary</p>
            </div>
          </div>

          {/* Right Column Editorial Description */}
          <div className="about-content reveal-on-scroll delay-2">
            <span className="section-label">ABOUT THE NOVEL</span>
            <h2 className="section-heading">
              A Journey Beyond The Familiar
            </h2>

            <p className="hero-paragraph" style={{ marginBottom: '20px' }}>
              When archivist Lyra Vance accidentally decodes an unregistered memory sphere, she unlocks a secret that the ruling Memory Syndicate spent decades trying to erase: a recorded prophecy transmitted from forty years in the future.
            </p>

            <p className="hero-paragraph" style={{ marginBottom: '32px' }}>
              Forced into hiding across the neon-drenched rooftop labyrinth of Lumina City, Lyra must navigate a high-stakes conspiracy where her own past is the ultimate weapon—and her forgotten choices hold the blueprint for humanity's redemption.
            </p>

            <a href="#themes" className="btn-primary">
              Discover The World <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
