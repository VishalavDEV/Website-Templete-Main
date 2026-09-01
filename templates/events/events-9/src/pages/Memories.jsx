import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Memories() {
  const memoriesList = [
    { title: "FIRST MEETING", year: "PARIS, 2019", desc: "Two architects sharing a coffee at sunset.", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85" },
    { title: "FIRST DATE", year: "LE MARAIS, 2020", desc: "A cozy evening filled with endless laughter.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85" },
    { title: "FIRST TRIP", year: "SOUTH INDIA, 2021", desc: "Exploring serene backwaters and tea plantations.", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85" },
    { title: "FAMILY MEETING", year: "CHENNAI, 2023", desc: "Uniting both families with warmth and blessings.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85" },
    { title: "THE PROPOSAL", year: "SANTORINI, 2025", desc: "A cliffside YES under a golden sunset.", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=85" },
    { title: "ENGAGEMENT", year: "CHENNAI, 2026", desc: "An intimate ring exchange surrounded by rose blossoms.", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85" },
    { title: "PRE-WEDDING", year: "COASTAL SHORES, 2026", desc: "Editorial photography along East Coast Road.", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85" },
    { title: "HALDI & MEHENDI", year: "DECEMBER 2026", desc: "Turmeric, marigolds, and intricate henna artistry.", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85" },
    { title: "SANGEET NIGHT", year: "DECEMBER 2026", desc: "A night of family dances and sparkling music.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85" },
    { title: "WEDDING CEREMONY", year: "18 DECEMBER 2026", desc: "Tying the sacred vows around the holy fire.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85" },
    { title: "GRAND RECEPTION", year: "18 DECEMBER 2026", desc: "Gala toast under stars and fireworks.", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85" },
    { title: "THE FUTURE", year: "FOREVER & BEYOND", desc: "Where two stories become one.", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85" }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="section-label">CHRONOLOGICAL MEMORY WALL</span>
          <h1 className="serif-title">OUR MEMORIES</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            A visual timeline celebrating key milestones from our first meeting to our forever.
          </p>
        </div>

        {/* CHRONOLOGICAL MEMORY GRID */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {memoriesList.map((mem, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="split-story-grid" style={{ alignItems: 'center' }}>
                <div className="story-image-wrap" style={{ order: isEven ? 1 : 2 }}>
                  <img src={mem.image} alt={mem.title} style={{ height: '420px' }} />
                </div>
                <div style={{ order: isEven ? 2 : 1 }}>
                  <span className="section-label">{mem.year}</span>
                  <h2 className="serif-title" style={{ marginBottom: '1rem', fontSize: '2.4rem' }}>{mem.title}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {mem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
