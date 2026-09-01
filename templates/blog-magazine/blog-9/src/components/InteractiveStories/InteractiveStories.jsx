import React, { useState } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, Gauge, Clock, Compass } from 'lucide-react';
import './InteractiveStories.css';

const STORIES = [
  {
    id: 'star-life',
    name: 'The Life of a Star',
    subtitle: 'From molecular gas cloud to gravitational singularity.',
    category: 'Astrophysics',
    phases: [
      {
        name: 'Nebula',
        title: 'Giant Molecular Cloud',
        desc: 'Vast interstellar clouds of cold molecular hydrogen and helium slowly collapse under self-gravity over millions of years.',
        image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Temperature', value: '10 to 20 K' },
          { label: 'Timescale', value: '10 - 50 Million Yrs' }
        ]
      },
      {
        name: 'Protostar',
        title: 'Gravitational Ignition',
        desc: 'Infalling matter releases gravitational potential energy, heating the dense core until internal gas pressure balances gravitational collapse.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Core Temp', value: '10 Million K' },
          { label: 'Accretion Rate', value: '10⁻⁵ M☉ / yr' }
        ]
      },
      {
        name: 'Main Sequence',
        title: 'Thermonuclear Equilibrium',
        desc: 'Hydrogen nuclei fuse into helium via the proton-proton chain in the core, providing stable radiation pressure for billions of years.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Luminosity', value: '1.0 L☉' },
          { label: 'Duration', value: '10 Billion Yrs' }
        ]
      },
      {
        name: 'Red Giant',
        title: 'Core Depletion & Shell Burning',
        desc: 'Core hydrogen exhausts; the helium core contracts while hydrogen shell burning causes the outer convective envelope to expand a hundredfold.',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Radius', value: '100x Solar' },
          { label: 'Core Fuel', value: 'Triple-Alpha He' }
        ]
      },
      {
        name: 'Supernova',
        title: 'Core Collapse Cataclysm',
        desc: 'Electron degeneracy pressure is overcome. In fractions of a second, the iron core collapses into a neutron star, expelling heavy elements into the cosmos.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Peak Energy', value: '10⁴⁴ Joules' },
          { label: 'Expansion Vel', value: '10,000 km/s' }
        ]
      },
      {
        name: 'Black Hole',
        title: 'Gravitational Singularity',
        desc: 'If the remnant mass exceeds the Tolman-Oppenheimer-Volkoff limit, space-time curves infinitely into an event horizon where light cannot escape.',
        image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Event Horizon', value: 'Schwarzschild R' },
          { label: 'Density', value: 'Infinite' }
        ]
      }
    ]
  },
  {
    "id": "into-the-deep",
    "name": "Into the Deep",
    "subtitle": "A vertical descent from sunlit waves to hadal hydrothermal vents.",
    "category": "Oceanography",
    "phases": [
      {
        name: 'Surface',
        title: 'The Epipelagic Realm',
        desc: 'From 0 to 200 meters, ninety percent of all marine life thrives in the sunlit photic zone where phytoplankton synthesize the ocean’s base energy.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Depth', value: '0 - 200 m' },
          { label: 'Pressure', value: '1 - 20 atm' }
        ]
      },
      {
        name: 'Twilight Zone',
        title: 'The Mesopelagic Domain',
        desc: 'Light dims to a faint blue twilight. Bizarre creature adaptations dominate: enormous tubular eyes, counter-illumination photophores, and daily vertical migrations.',
        image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Depth', value: '200 - 1,000 m' },
          { label: 'Water Temp', value: '4°C to 8°C' }
        ]
      },
      {
        name: 'Midnight Zone',
        title: 'The Bathypelagic Shadows',
        desc: 'Total perpetual blackness. Organisms depend on marine snow falling from above and use specialized bioluminescent lures to capture prey.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Depth', value: '1,000 - 4,000 m' },
          { label: 'Light', value: '0% Solar' }
        ]
      },
      {
        name: 'Abyss',
        title: 'The Hadal Floor',
        desc: 'Six to eleven kilometers down in ocean trenches, water pressure reaches over a thousand atmospheres. Chemotrophic piezophilic microbes thrive on minerals.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Depth', value: '6,000 - 11,000 m' },
          { label: 'Pressure', value: '1,100 atm' }
        ]
      }
    ]
  },
  {
    "id": "civilization-rise",
    "name": "The Rise of Civilization",
    "subtitle": "How geology, agriculture, and waterways forge human empires.",
    "category": "Archaeology",
    "phases": [
      {
        name: 'Settlement',
        title: 'River Valley Domestication',
        desc: 'Permanent agrarian villages establish along alluvial floodplains like the Tigris, Euphrates, and Nile during the Neolithic Revolution.',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Era', value: '8000 - 5000 BCE' },
          { label: 'Technology', value: 'Irrigation & Pottery' }
        ]
      },
      {
        name: 'City',
        title: 'Urban Specialization',
        desc: 'Surplus food enables division of labor: metallurgy, monumental stone architecture, standardized legal codes, and cuneiform accounting.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Era', value: '3500 - 2000 BCE' },
          { label: 'Scale', value: '50,000+ Inhabitants' }
        ]
      },
      {
        name: 'Empire',
        title: 'Continental Hegemony',
        desc: 'Military networks, paved highways, maritime trade galleys, and monumental administrative palaces project power across multi-ethnic territories.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Era', value: '500 BCE - 400 CE' },
          { label: 'Territory', value: '5+ Million km²' }
        ]
      },
      {
        name: 'Ruins',
        title: 'Geological Reclamation',
        desc: 'Climatic shifts, trade rerouting, and ecological depletion return limestone monoliths back to the sand dunes and jungle canopy.',
        image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1800&q=85',
        stats: [
          { label: 'Era', value: 'Modern Archaeology' },
          { label: 'Discovery', value: 'LiDAR Telemetry' }
        ]
      }
    ]
  }
];

export default function InteractiveStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);

  const story = STORIES[activeStoryIdx];
  const phase = story.phases[activePhaseIdx] || story.phases[0];

  const handleStoryChange = (idx) => {
    setActiveStoryIdx(idx);
    setActivePhaseIdx(0);
  };

  const handleNextPhase = () => {
    setActivePhaseIdx((prev) => (prev + 1) % story.phases.length);
  };

  const handlePrevPhase = () => {
    setActivePhaseIdx((prev) => (prev - 1 + story.phases.length) % story.phases.length);
  };

  return (
    <section className="interactive-stories-section" aria-label="Experience the Story">
      <div className="atlas-container">
        <div className="interactive-stories-header">
          <div className="atlas-section-eyebrow">
            <Sparkles size={14} />
            <span>Interactive Narrative</span>
          </div>
          <h2 className="atlas-section-title">Experience the Story</h2>
          <p className="atlas-section-subtitle">
            Step into the scientific mechanics of cosmic, oceanic, and human evolution through interactive chronological stages.
          </p>
        </div>

        <div className="interactive-stories-tabs">
          {STORIES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`interactive-tab-btn${activeStoryIdx === idx ? ' is-active' : ''}`}
              onClick={() => handleStoryChange(idx)}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="interactive-story-stage">
          <div className="interactive-stage-bg">
            <img src={phase.image} alt={phase.title} />
          </div>
          <div className="interactive-stage-overlay" />

          <div className="interactive-stage-topbar">
            <div>
              <div className="interactive-stage-tag">{story.category} · Phase {activePhaseIdx + 1} of {story.phases.length}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff', marginTop: '4px' }}>{story.name}</h3>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="depth-carousel__arrow"
                style={{ position: 'static', transform: 'none' }}
                onClick={handlePrevPhase}
                aria-label="Previous Phase"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="depth-carousel__arrow"
                style={{ position: 'static', transform: 'none' }}
                onClick={handleNextPhase}
                aria-label="Next Phase"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="interactive-phase-nav">
            <div className="interactive-phases-list">
              {story.phases.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`interactive-phase-item${activePhaseIdx === idx ? ' is-active' : ''}`}
                  onClick={() => setActivePhaseIdx(idx)}
                >
                  <span>0{idx + 1} · {p.name}</span>
                </button>
              ))}
            </div>

            <div className="interactive-phase-content">
              <div>
                <h4 className="interactive-phase-title">{phase.title}</h4>
                <p className="interactive-phase-desc">{phase.desc}</p>
              </div>

              <div className="interactive-phase-stats">
                {phase.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="interactive-stat-label">{stat.label}</div>
                    <div className="interactive-stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
