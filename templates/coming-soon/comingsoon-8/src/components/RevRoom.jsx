import React, { useState, useEffect, useRef } from 'react';
import { Zap, Flame, Gauge, Volume2 } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export default function RevRoom() {
  const [isHoldingThrottle, setIsHoldingThrottle] = useState(false);
  const [rpm, setRpm] = useState(1400); // Authentic Duke idle RPM
  const [powerHp, setPowerHp] = useState(6);
  const animRef = useRef(null);

  useEffect(() => {
    const updateEngine = () => {
      if (isHoldingThrottle) {
        setRpm(prev => {
          // Fast aggressive throttle acceleration to 10,500 RPM
          const next = Math.min(10500, prev + 280);
          audioEngine.setRpm(next);
          setPowerHp(Math.round((next / 10500) * 42));
          return next;
        });
      } else {
        setRpm(prev => {
          // Natural engine braking deceleration back to 1,400 RPM idle
          const next = Math.max(1400, prev - 190);
          audioEngine.setRpm(next);
          setPowerHp(Math.round((next / 10500) * 42));
          return next;
        });
      }
      animRef.current = requestAnimationFrame(updateEngine);
    };

    animRef.current = requestAnimationFrame(updateEngine);
    return () => cancelAnimationFrame(animRef.current);
  }, [isHoldingThrottle]);

  const handleStartRev = () => {
    audioEngine.startEngine();
    setIsHoldingThrottle(true);
  };

  const handleStopRev = () => {
    setIsHoldingThrottle(false);
    // Keep engine idling for 1.2s then fade out
    setTimeout(() => {
      if (!isHoldingThrottle) {
        audioEngine.stopEngine();
      }
    }, 1200);
  };

  const rpmPercent = Math.min(100, Math.max(0, ((rpm - 1400) / (10500 - 1400)) * 100));

  return (
    <section id="rev-chamber" className="section-rev-room">
      <div className="section-header-block">
        <div className="section-badge">AUTHENTIC 4-STROKE EXHAUST LAB</div>
        <h2 className="section-heading">HTM 350 DUDE REV CHAMBER</h2>
        <p className="section-desc">
          Hear the raw, unadulterated single-cylinder punch. Press and hold the throttle below to unleash the throaty exhaust growl and 10,500 RPM redline harmonics.
        </p>
      </div>

      <div className="rev-chamber-cockpit">
        {/* Tachometer Display */}
        <div className="tacho-dial-wrapper">
          <div className="tacho-glow-ring" style={{ opacity: 0.3 + (rpmPercent / 100) * 0.7 }} />
          
          <div className="tacho-center-content">
            <span className="tacho-rpm-title">ENGINE TACHOMETER</span>
            <div className="tacho-rpm-number">
              {rpm.toLocaleString()}
            </div>
            <div className="tacho-sub-telemetry">
              <span className="tacho-kw"><Zap size={14} /> {powerHp} PS OUTPUT</span>
              <span className="tacho-mode">
                {rpm >= 9800 ? 'REDLINE // SHIFT NOW' : '4-STROKE // LC4'}
              </span>
            </div>
          </div>

          {/* Curved RPM bar gauge */}
          <div className="rpm-bar-track">
            <div 
              className="rpm-bar-fill"
              style={{ width: `${rpmPercent}%` }}
            />
          </div>
        </div>

        {/* Interactive Throttle Grip */}
        <div className="throttle-trigger-box">
          <button
            id="btn-throttle-grip"
            className={`btn-throttle-grip ${isHoldingThrottle ? 'active-revving' : ''}`}
            onMouseDown={handleStartRev}
            onMouseUp={handleStopRev}
            onMouseLeave={handleStopRev}
            onTouchStart={handleStartRev}
            onTouchEnd={handleStopRev}
          >
            <div className="throttle-inner-glow" />
            <Flame className="throttle-icon" size={32} />
            <span className="throttle-text">
              {isHoldingThrottle ? 'HOLDING FULL THROTTLE' : 'HOLD TO REV THROTTLE'}
            </span>
            <span className="throttle-sub">REAL 4-STROKE SINGLE-CYLINDER SOUND</span>
          </button>
        </div>
      </div>
    </section>
  );
}
