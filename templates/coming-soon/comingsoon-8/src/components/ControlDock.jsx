import React from 'react';
import { 
  Play, 
  Pause, 
  RotateCw, 
  Sun, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Palette, 
  SlidersHorizontal 
} from 'lucide-react';
import { COLORWAYS } from './MotorcycleModel';
import { audioEngine } from './AudioEngine';

export default function ControlDock({
  isRotating,
  setIsRotating,
  rotationSpeed,
  setRotationSpeed,
  activeColorway,
  setActiveColorway,
  isHighBeam,
  setIsHighBeam,
  isNeonUnderglow,
  setIsNeonUnderglow,
  isAudioOn,
  setIsAudioOn
}) {
  const toggleRotation = () => {
    audioEngine.playClick();
    setIsRotating(!isRotating);
  };

  const handleSpeedChange = (speed) => {
    audioEngine.playClick();
    setRotationSpeed(speed);
  };

  const handleColorChange = (cw) => {
    audioEngine.playClick();
    setActiveColorway(cw);
  };

  const toggleHighBeam = () => {
    audioEngine.playBeamCharge();
    setIsHighBeam(!isHighBeam);
  };

  const toggleUnderglow = () => {
    audioEngine.playClick();
    setIsNeonUnderglow(!isNeonUnderglow);
  };

  const toggleAudio = () => {
    if (!isAudioOn) {
      audioEngine.startAmbient();
      setIsAudioOn(true);
    } else {
      audioEngine.stopAmbient();
      audioEngine.stopEngine();
      setIsAudioOn(false);
    }
  };

  return (
    <div className="control-dock-bar">
      {/* 1. Play / Pause Turntable */}
      <div className="dock-group">
        <button
          id="btn-toggle-rotate"
          className={`dock-btn ${isRotating ? 'active' : ''}`}
          onClick={toggleRotation}
          title={isRotating ? 'Pause 360° Rotation' : 'Resume 360° Rotation'}
        >
          {isRotating ? <Pause size={18} /> : <Play size={18} />}
          <span className="dock-btn-label">{isRotating ? 'ROTATING' : 'PAUSED'}</span>
        </button>

        {/* Speed presets */}
        <div className="speed-pills">
          {[0.5, 1.0, 2.0].map((spd) => (
            <button
              key={spd}
              className={`speed-pill ${rotationSpeed === spd ? 'active' : ''}`}
              onClick={() => handleSpeedChange(spd)}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      <div className="dock-separator" />

      {/* 2. Colorway Configurator Palette */}
      <div className="dock-group color-palette-group">
        <span className="dock-group-title">
          <Palette size={14} className="group-icon" />
          <span>LIVERY</span>
        </span>
        <div className="colorway-swatches">
          {COLORWAYS.map((cw) => (
            <button
              key={cw.id}
              className={`color-swatch-btn ${activeColorway.id === cw.id ? 'active' : ''}`}
              style={{ background: cw.color, borderColor: cw.accent }}
              onClick={() => handleColorChange(cw)}
              title={cw.name}
            >
              {activeColorway.id === cw.id && (
                <span className="swatch-accent-dot" style={{ background: cw.accent }} />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="dock-separator" />

      {/* 3. Dynamic Headlight High-Beam & Underglow */}
      <div className="dock-group lighting-toggles">
        <button
          id="btn-high-beam"
          className={`dock-toggle-btn ${isHighBeam ? 'active' : ''}`}
          onClick={toggleHighBeam}
          title="Toggle High-Beam Headlight Surge"
        >
          <Sun size={17} />
          <span>HIGH BEAM</span>
        </button>

        <button
          id="btn-underglow"
          className={`dock-toggle-btn ${isNeonUnderglow ? 'active' : ''}`}
          onClick={toggleUnderglow}
          title="Toggle Neon Underglow"
        >
          <Sparkles size={17} />
          <span>UNDERGLOW</span>
        </button>
      </div>

      <div className="dock-separator" />

      {/* 4. Audio Engine Toggle */}
      <div className="dock-group">
        <button
          id="btn-audio-toggle"
          className={`dock-icon-btn ${isAudioOn ? 'active' : ''}`}
          onClick={toggleAudio}
          title={isAudioOn ? 'Mute Audio Engine' : 'Activate Cinematic Audio'}
        >
          {isAudioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>
    </div>
  );
}
