import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Droplets, Stethoscope, Music, Camera, Zap, Award, Sparkles } from 'lucide-react';

const ROUTE_STOPS = [
  { id: 1, name: "Marina Gateway", km: "0 KM", type: "START", desc: "Flag-Off Arch & Runner Holding Pens", icon: MapPin },
  { id: 2, name: "Beach Road", km: "3 KM", type: "HYDRATION + MUSIC", desc: "Ocean breeze sprint & Live Brass Band", icon: Droplets },
  { id: 3, name: "Heritage District", km: "7 KM", type: "CHEERING ZONE 01", desc: "Cultural Folk Drums & Hydration", icon: Music },
  { id: 4, name: "Central Avenue", km: "11 KM", type: "ENERGY GEL + MED", desc: "Isotonic drinks & Medical station", icon: Zap },
  { id: 5, name: "City Park", km: "14 KM", type: "CHEERING ZONE 02", desc: "Live DJ Stage & Spray Mist Tunnel", icon: Sparkles },
  { id: 6, name: "Riverside Road", km: "17 KM", type: "PHOTO POINT", desc: "Official HD photography & Pacers", icon: Camera },
  { id: 7, name: "Victory Boulevard", km: "20 KM", type: "FINAL SPRINT", desc: "Crowd roar & 1KM to glory marker", icon: Navigation },
  { id: 8, name: "Vayora City Stadium", km: "21.1 KM", type: "FINISH LINE", desc: "Red Carpet, Finish Ribbon & Medals", icon: Award }
];

const CHEERING_ZONES = [
  { zone: "CHEERING ZONE 01", location: "Heritage District (KM 7)", feature: "Dhol Drums & Crowd Energy", color: "var(--marathon-red)" },
  { zone: "CHEERING ZONE 02", location: "City Park Boulevard (KM 14)", feature: "Live DJ Stage & High Octane Beat", color: "var(--bright-orange)" },
  { zone: "CHEERING ZONE 03", location: "Riverside Bridge (KM 17)", feature: "Traditional Cheering & Flag Wave", color: "#38BDF8" },
  { zone: "CHEERING ZONE 04", location: "Central Avenue Plaza (KM 19)", feature: "Brass Marching Band & Confetti", color: "#A855F7" },
  { zone: "CHEERING ZONE 05", location: "Stadium Approach (KM 20.5)", feature: "Final Kilometer Wall of Sound", color: "#10B981" },
  { zone: "FINISH ZONE", location: "Vayora Stadium Arena", feature: "Confetti Cannon + Medals + Live Ceremony", color: "var(--marathon-red)" }
];

export default function RouteMap() {
  const [selectedStop, setSelectedStop] = useState(ROUTE_STOPS[0]);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(180deg, #090A0D 0%, #15171B 100%)',
      padding: '80px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            COURSE LAYOUT
          </div>
          <h2 className="section-title">KNOW YOUR ROAD</h2>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
            Explore the certified 21.1 KM half marathon course winding through Chennai's coastal landmarks, heritage avenues, and electric cheer zones.
          </p>
        </div>

        {/* Interactive SVG Illustrated Route Map Component */}
        <div className="glass-panel" style={{
          padding: '30px',
          marginBottom: '50px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <h3 className="font-display" style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>
                COURSE WAYPOINTS & STATIONS
              </h3>
              <span style={{ color: 'var(--bright-orange)', fontSize: '0.85rem', fontWeight: 700 }}>
                CLICK ANY STOP TO VIEW STATION DETAILS
              </span>
            </div>

            {/* Map Legend */}
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: 'var(--soft-grey)', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Droplets size={12} color="var(--bright-orange)" /> Hydration</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Stethoscope size={12} color="var(--marathon-red)" /> Medical</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Music size={12} color="#38BDF8" /> Cheer Zone</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Award size={12} color="#10B981" /> Finish</span>
            </div>
          </div>

          {/* SVG Route Line Representation */}
          <div style={{ position: 'relative', width: '100%', height: '240px', background: 'rgba(9,10,13,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '20px' }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
              {/* Background Glow Path */}
              <path
                d="M 50 160 C 150 40, 250 160, 380 90 C 480 30, 580 170, 700 80 C 800 20, 880 140, 950 50"
                fill="none"
                stroke="rgba(255, 107, 44, 0.25)"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Animated Animated Foreground Route Line */}
              <path
                ref={pathRef}
                d="M 50 160 C 150 40, 250 160, 380 90 C 480 30, 580 170, 700 80 C 800 20, 880 140, 950 50"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength || 1000,
                  strokeDashoffset: 0,
                  transition: 'stroke-dashoffset 2s ease'
                }}
              />

              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E92B2B" />
                  <stop offset="50%" stopColor="#FF6B2C" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Waypoint Nodes */}
              {ROUTE_STOPS.map((stop, index) => {
                const positions = [
                  { x: 50, y: 160 },
                  { x: 160, y: 100 },
                  { x: 260, y: 150 },
                  { x: 380, y: 90 },
                  { x: 500, y: 70 },
                  { x: 640, y: 130 },
                  { x: 780, y: 50 },
                  { x: 950, y: 50 }
                ];
                const pos = positions[index] || { x: 50, y: 50 };
                const isSelected = selectedStop.id === stop.id;

                return (
                  <g key={stop.id} onClick={() => setSelectedStop(stop)} style={{ cursor: 'pointer' }}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 14 : 9}
                      fill={isSelected ? '#E92B2B' : '#15171B'}
                      stroke={isSelected ? '#FF6B2C' : '#F8F7F2'}
                      strokeWidth={isSelected ? 3 : 2}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + (index % 2 === 0 ? 32 : -20)}
                      textAnchor="middle"
                      fill={isSelected ? '#FF6B2C' : '#A8ADB5'}
                      fontSize="11"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="Montserrat"
                    >
                      {stop.km}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Stop Card Popup */}
          <div style={{
            marginTop: '20px',
            background: 'rgba(255,107,44,0.08)',
            border: '1px solid rgba(255,107,44,0.25)',
            borderRadius: '8px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                {React.createElement(selectedStop.icon, { size: 20 })}
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700 }}>
                  {selectedStop.name} ({selectedStop.km})
                </h4>
                <p style={{ color: 'var(--soft-grey)', fontSize: '0.85rem' }}>
                  {selectedStop.desc}
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--marathon-red)',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '6px 14px',
              borderRadius: '20px',
              letterSpacing: '1px'
            }}>
              {selectedStop.type}
            </div>
          </div>

        </div>

        {/* Cheering Zones Grid */}
        <h3 className="font-display" style={{ fontSize: '2rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '24px' }}>
          THE CHEERING ZONE EXPERIENCE
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {CHEERING_ZONES.map((zone, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px',
                borderLeft: `4px solid ${zone.color}`
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: zone.color, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                {zone.zone}
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>
                {zone.location}
              </h4>
              <p style={{ color: 'var(--soft-grey)', fontSize: '0.85rem' }}>
                {zone.feature}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
