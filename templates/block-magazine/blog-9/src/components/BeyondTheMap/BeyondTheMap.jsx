import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Zap } from 'lucide-react';
import Hyperspeed from '../Hyperspeed/Hyperspeed';
import './BeyondTheMap.css';

export default function BeyondTheMap() {
  const effectOptions = useMemo(
    () => ({
      distortion: 'turbulentDistortion',
      length: 420,
      roadWidth: 12,
      islandWidth: 3,
      lanesPerRoad: 3,
      fov: 85,
      fovSpeedUp: 140,
      speedUp: 2.2,
      carLightsFade: 0.45,
      totalSideLightSticks: 18,
      lightPairsPerRoadWay: 35,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.08,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.4],
      lightStickHeight: [1.2, 1.6],
      movingAwaySpeed: [60, 90],
      movingCloserSpeed: [-120, -170],
      carLightsLength: [420 * 0.04, 420 * 0.22],
      carLightsRadius: [0.06, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x06070a,
        islandColor: 0x090a0d,
        background: 0x000000,
        shoulderLines: 0x1a2332,
        brokenLines: 0x1a2332,
        leftCars: [0x1e3a5f, 0x2d4a3e, 0xc9933b],
        rightCars: [0x0a1628, 0x162d3a, 0x3d2b1f],
        sticks: 0x1e3a5f
      }
    }),
    []
  );

  return (
    <section className="beyond-the-map-section" aria-label="Beyond the Map">
      <div className="beyond-the-map-canvas-container">
        <Hyperspeed effectOptions={effectOptions} />
      </div>
      <div className="beyond-the-map-overlay" />

      <div className="beyond-the-map-content">
        <div className="beyond-the-map-tag">
          <Zap size={14} />
          <span>Into the Unknown</span>
        </div>

        <h2 className="beyond-the-map-title">Beyond the Map</h2>

        <p className="beyond-the-map-text">
          Some places are easier to imagine than to reach. Join our global expeditions into uncharted polar frontiers, hadal trenches, and deep space telemetry.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/explore" className="atlas-btn atlas-btn-primary">
            <span>Begin Expedition</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/exploration" className="atlas-btn atlas-btn-secondary">
            <Compass size={16} />
            <span>Exploration Department</span>
          </Link>
        </div>

        <div className="beyond-the-map-interactive-hint">
          Click & Hold to Accelerate Through the Speed of Light
        </div>
      </div>
    </section>
  );
}
