import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Tv, Smartphone, Headphones, Gamepad2, Camera, Percent, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedTV = () => {
  const [isOn, setIsOn] = useState(true);
  const [currentChannel, setCurrentChannel] = useState('HOME'); // HOME, TV, MOBILE, AUDIO, GAMING, CAMERAS, OFFERS
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const channels = {
    HOME: {
      title: "BLUECORE ENTERTAINMENT",
      subtitle: "POWER YOUR FUTURE",
      desc: "Welcome to the ultimate digital showroom terminal. Control this display using the terminal remote.",
      accent: "#00f0ff",
      badge: "Showroom Terminal"
    },
    TV: {
      title: "4K OLED SMART TV",
      subtitle: "BLUECORE OLED-X 65\"",
      desc: "Pixel-perfect depth. Dynamic AI self-lit pixels projecting 1.07 billion colors.",
      accent: "#00f0ff",
      badge: "120Hz Cinema",
      link: "/products?category=tv"
    },
    MOBILE: {
      title: "FLAGSHIP SMARTPHONES",
      subtitle: "CyberPhone Fold",
      desc: "Foldable Liquid Crystal display powered by Neural Snapdragon 8 Gen 3.",
      accent: "#00f5ff",
      badge: "5G Hologram Ready",
      link: "/products?category=mobiles"
    },
    AUDIO: {
      title: "IMMERSIVE AUDIO",
      subtitle: "SoundSphere ANC",
      desc: "Neuro-feedback spatial audio. Dynamic 48dB active ambient canceling filters.",
      accent: "#0066ff",
      badge: "Hi-Res Audio",
      link: "/products?category=audio"
    },
    GAMING: {
      title: "NEXT-GEN GAMING",
      subtitle: "CoreStation Genesis",
      desc: "Neural-link controllers mapping 120fps ray-traced quantum renders in real-time.",
      accent: "#00f0ff",
      badge: "Ultra Low Latency",
      link: "/products?category=gaming"
    },
    CAMERAS: {
      title: "CAPTURE EVERYTHING",
      subtitle: "Alpha 7 IV Mirrorless",
      desc: "33MP Full-Frame sensor capturing stunning 10-bit cinema-grade 4K videos.",
      accent: "#cbd5e1",
      badge: "Pro Hybrid Lens",
      link: "/products?category=cameras"
    },
    OFFERS: {
      title: "BLUE DEALS",
      subtitle: "FLASH DEALS ACTIVE",
      desc: "Up to 50% off on flagship television sets and wireless audio packages.",
      accent: "#ff0055",
      badge: "Limited Quantities",
      link: "/offers"
    }
  };

  // Default channel slideshow sequence (rotates every 3 seconds only when channel is HOME and TV is ON)
  const slideshowSequence = ['TV', 'MOBILE', 'AUDIO', 'GAMING', 'CAMERAS', 'OFFERS'];

  useEffect(() => {
    if (!isOn || currentChannel !== 'HOME') return;

    const interval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % slideshowSequence.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOn, currentChannel]);

  // Determine what details to display on screen
  const displayChannel = currentChannel === 'HOME' ? slideshowSequence[sequenceIndex] : currentChannel;
  const channelData = channels[displayChannel];

  const handleRemoteClick = (channelKey) => {
    if (!isOn && channelKey !== 'POWER') return;
    if (channelKey === 'POWER') {
      setIsOn(!isOn);
      if (!isOn) {
        setCurrentChannel('HOME');
      }
    } else {
      setCurrentChannel(channelKey);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      
      {/* 1. THE SMART TV SCREEN */}
      <div style={{
        flex: '1 1 600px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* LED Backlight Glow effect behind TV */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '90%',
          height: '80%',
          borderRadius: '8px',
          boxShadow: isOn 
            ? `0 0 70px ${channels[displayChannel].accent}aa, 0 0 140px ${channels[displayChannel].accent}33` 
            : '0 0 20px rgba(255, 0, 85, 0.1)',
          transition: 'all 0.8s ease',
          zIndex: 0
        }} />

        {/* TV Outer Frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          border: '8px solid #1e293b',
          borderImage: 'linear-gradient(135deg, #1e293b, #0f172a, #475569) 1',
          borderRadius: '4px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 240, 255, 0.15)',
          background: '#02050e',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1
        }}>
          {/* Glass Screen Coating & Reflective sheen */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(125deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%)',
            pointerEvents: 'none',
            zIndex: 10
          }} />

          {/* Electronic Scanlines */}
          {isOn && <div className="scanlines" style={{ opacity: 0.15 }} />}

          {/* SCREEN CONTENT */}
          <AnimatePresence mode="wait">
            {!isOn ? (
              /* STANDBY SCREEN */
              <motion.div
                key="standby"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#010308',
                  color: '#94a3b8'
                }}
              >
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Power size={36} color="#ff0055" style={{ filter: 'drop-shadow(0 0 8px #ff0055)' }} />
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.25em',
                    color: '#ff0055'
                  }}>
                    STANDBY MODE
                  </span>
                </motion.div>
              </motion.div>
            ) : (
              /* ACTIVE CHANNEL SCREEN */
              <motion.div
                key={displayChannel}
                initial={{ opacity: 0, filter: 'brightness(2)' }}
                animate={{ opacity: 1, filter: 'brightness(1)' }}
                exit={{ opacity: 0, filter: 'brightness(2)' }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '8% 8%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: `radial-gradient(circle at center, rgba(11, 30, 80, 0.4) 0%, #02050e 100%)`,
                  color: '#fff',
                  position: 'relative'
                }}
              >
                {/* Visual Icon backdrop */}
                <div style={{
                  position: 'absolute',
                  right: '10%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0.04,
                  color: channelData.accent,
                  pointerEvents: 'none'
                }}>
                  {displayChannel === 'TV' && <Tv size={180} />}
                  {displayChannel === 'MOBILE' && <Smartphone size={180} />}
                  {displayChannel === 'AUDIO' && <Headphones size={180} />}
                  {displayChannel === 'GAMING' && <Gamepad2 size={180} />}
                  {displayChannel === 'CAMERAS' && <Camera size={180} />}
                  {displayChannel === 'OFFERS' && <Percent size={180} />}
                </div>

                {/* Top badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-tech)',
                    border: `1px solid ${channelData.accent}`,
                    color: channelData.accent,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    boxShadow: `0 0 8px ${channelData.accent}55`,
                    letterSpacing: '0.1em'
                  }}>
                    {channelData.badge}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', fontFamily: 'var(--font-tech)', opacity: 0.5 }}>
                    <div className="led-blinker" style={{ backgroundColor: channelData.accent }} />
                    CH: {currentChannel}
                  </div>
                </div>

                {/* Main Product Info */}
                <div style={{ maxWidth: '65%' }}>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '11px', fontFamily: 'var(--font-tech)', letterSpacing: '0.15em', color: channelData.accent }}
                  >
                    {channelData.subtitle}
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      marginTop: '6px',
                      textShadow: `0 0 10px ${channelData.accent}66`,
                      lineHeight: '1.2'
                    }}
                  >
                    {channelData.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px', lineHeight: '1.5' }}
                  >
                    {channelData.desc}
                  </motion.p>
                </div>

                {/* Call to action inside TV */}
                <div>
                  {channelData.link ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link to={channelData.link} className="cyber-button" style={{
                        padding: '8px 16px',
                        fontSize: '11px',
                        borderColor: channelData.accent,
                        color: channelData.accent
                      }}>
                        OPEN TERMINAL
                      </Link>
                    </motion.div>
                  ) : (
                    <div style={{ fontSize: '10px', opacity: 0.4, fontFamily: 'var(--font-tech)' }}>
                      BLUECORE CORE CONSOLE V2.8
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* TV Foot Stands */}
        <div style={{
          width: '100px',
          height: '20px',
          background: 'linear-gradient(to bottom, #1e293b, #030712)',
          borderLeft: '1px solid rgba(0, 240, 255, 0.15)',
          borderRight: '1px solid rgba(0, 240, 255, 0.15)',
          zIndex: 1
        }} />
        <div style={{
          width: '200px',
          height: '8px',
          background: 'linear-gradient(to bottom, #334155, #02050e)',
          borderRadius: '4px',
          boxShadow: '0 10px 15px rgba(0,0,0,0.5)',
          zIndex: 1
        }} />
      </div>

      {/* 2. THE FUTURISTIC REMOTE CONTROL */}
      <div style={{
        flex: '0 1 240px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div className="glass-panel" style={{
          width: '200px',
          padding: '25px 20px',
          borderRadius: '24px',
          border: '1.5px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Remote Top: Power and Standby LED */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '9px', fontFamily: 'var(--font-tech)', color: '#64748b', letterSpacing: '0.1em' }}>
              BLUECORE RM-1
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {/* Blinking Red/Blue LED based on state */}
              <div className={`led-blinker ${!isOn ? 'standby' : ''}`} />
              <button
                onClick={() => handleRemoteClick('POWER')}
                style={{
                  background: isOn ? 'rgba(255, 0, 85, 0.1)' : 'rgba(255, 0, 85, 0.3)',
                  border: '1px solid #ff0055',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ff0055',
                  boxShadow: !isOn ? '0 0 10px #ff0055' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Power size={14} />
              </button>
            </div>
          </div>

          {/* Grid of buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {/* HOME */}
            <button
              onClick={() => handleRemoteClick('HOME')}
              disabled={!isOn}
              style={{
                gridColumn: 'span 2',
                backgroundColor: currentChannel === 'HOME' && isOn ? 'rgba(0, 240, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                border: currentChannel === 'HOME' && isOn ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
                boxShadow: currentChannel === 'HOME' && isOn ? '0 0 10px rgba(0,240,255,0.2)' : 'none',
                color: currentChannel === 'HOME' && isOn ? '#00f0ff' : '#94a3b8',
                borderRadius: '8px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: isOn ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-tech)',
                fontSize: '10px',
                transition: 'all 0.2s ease',
                opacity: isOn ? 1 : 0.4
              }}
            >
              <Home size={12} /> HOME
            </button>

            {/* TV */}
            <button
              onClick={() => handleRemoteClick('TV')}
              disabled={!isOn}
              style={getRemoteBtnStyle('TV')}
            >
              <Tv size={12} /> TV
            </button>

            {/* MOBILE */}
            <button
              onClick={() => handleRemoteClick('MOBILE')}
              disabled={!isOn}
              style={getRemoteBtnStyle('MOBILE')}
            >
              <Smartphone size={12} /> MOBILE
            </button>

            {/* AUDIO */}
            <button
              onClick={() => handleRemoteClick('AUDIO')}
              disabled={!isOn}
              style={getRemoteBtnStyle('AUDIO')}
            >
              <Headphones size={12} /> AUDIO
            </button>

            {/* GAMING */}
            <button
              onClick={() => handleRemoteClick('GAMING')}
              disabled={!isOn}
              style={getRemoteBtnStyle('GAMING')}
            >
              <Gamepad2 size={12} /> GAMING
            </button>

            {/* CAMERAS */}
            <button
              onClick={() => handleRemoteClick('CAMERAS')}
              disabled={!isOn}
              style={getRemoteBtnStyle('CAMERAS')}
            >
              <Camera size={12} /> CAMERAS
            </button>

            {/* OFFERS */}
            <button
              onClick={() => handleRemoteClick('OFFERS')}
              disabled={!isOn}
              style={getRemoteBtnStyle('OFFERS')}
            >
              <Percent size={12} /> OFFERS
            </button>
          </div>

          {/* D-Pad circle just for futuristic aesthetic */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '1.5px solid rgba(0, 240, 255, 0.15)',
              background: 'rgba(15, 23, 42, 0.4)',
              position: 'relative',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 240, 255, 0.3)' }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 240, 255, 0.3)' }} />
              <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 240, 255, 0.3)' }} />
              <div style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 240, 255, 0.3)' }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                boxShadow: '0 0 5px rgba(0,240,255,0.1)'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function getRemoteBtnStyle(channelKey) {
    const active = currentChannel === channelKey && isOn;
    return {
      backgroundColor: active ? 'rgba(0, 240, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
      border: active ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
      boxShadow: active ? '0 0 10px rgba(0,240,255,0.2)' : 'none',
      color: active ? '#00f0ff' : '#94a3b8',
      borderRadius: '8px',
      padding: '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      cursor: isOn ? 'pointer' : 'not-allowed',
      fontFamily: 'var(--font-tech)',
      fontSize: '8px',
      transition: 'all 0.2s ease',
      opacity: isOn ? 1 : 0.4
    };
  }
};

export default AnimatedTV;
