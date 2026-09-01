import React, { useState } from 'react';
import ScheduleCard from '../components/ScheduleCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Schedule() {
  const [stageFilter, setStageFilter] = useState('ALL');

  const fullSchedule = [
    { time: '5:00 PM', title: 'Main Venue Gates Open & Ambient Soundscapes', description: 'Welcome crowd, entry verification & food zone opening', stage: 'Arena Entrance' },
    { time: '5:30 PM', title: 'Golden Hour DJ Warm-Up', artist: 'DJ Frequency', stage: 'Afterdark Stage' },
    { time: '6:00 PM', title: 'Acoustic Sunset Opening', artist: 'Elio Vane', stage: 'Echo Stage' },
    { time: '7:00 PM', title: 'Dream Pop Harmony', artist: 'Aria Noir', stage: 'Echo Stage' },
    { time: '8:00 PM', title: 'Alternative Soul Showcase', artist: 'Mira Vale', stage: 'Main Stage' },
    { time: '9:00 PM', title: 'Hip-Hop Fusion Energy', artist: 'Zen Ray', stage: 'Main Stage' },
    { time: '10:00 PM', title: 'Indie Pop Headline Act', artist: 'Lyra Voss', stage: 'Main Stage' },
    { time: '11:00 PM', title: 'Alternative Rock Explosion', artist: 'The Silver Room', stage: 'Main Stage' },
    { time: '12:00 AM', title: 'Midnight Electronic Echo Set', artist: 'Kael Nova', stage: 'Afterdark Stage' },
    { time: '1:00 AM', title: 'Modular Synth Afterglow', artist: 'Nova Kai', stage: 'Afterdark Stage' },
  ];

  const stages = ['ALL', 'Main Stage', 'Echo Stage', 'Afterdark Stage'];

  const filteredSchedule = stageFilter === 'ALL'
    ? fullSchedule
    : fullSchedule.filter(s => s.stage === stageFilter || s.stage === 'Arena Entrance');

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #191506 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">24 OCTOBER 2026 TIMELINE</span>
          <h1 className="section-title">FULL FESTIVAL SCHEDULE</h1>
          <p className="section-desc">Plan your night across our 3 iconic stages from doors open at 5:00 PM to late night afterglow.</p>

          <div className="gallery-filter-bar" style={{ marginTop: '36px' }}>
            {stages.map(stage => (
              <button
                key={stage}
                className={`filter-btn ${stageFilter === stage ? 'active' : ''}`}
                onClick={() => setStageFilter(stage)}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          {filteredSchedule.map((item, idx) => (
            <ScheduleCard key={idx} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
