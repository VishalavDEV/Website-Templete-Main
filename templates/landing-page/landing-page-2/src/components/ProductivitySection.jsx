import React, { useState, useEffect, useRef } from 'react';
import { MinusCircle, LayoutGrid, Timer, Play, Pause, RotateCcw, QrCode, Copy, Check, Volume2 } from 'lucide-react';
import { sendPomodoroAction, updateStatus, fetchPomodoro } from '../services/api';

// Synthesize pleasant tactile haptic click sound
function playClickSound(freq = 600) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.06);
  } catch (e) {}
}

export default function ProductivitySection() {
  // Real-time Countdown Timer State
  const [seconds, setSeconds] = useState(1559); // 25:59 initial
  const [isRunning, setIsRunning] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('BUSY');
  const [statusColor, setStatusColor] = useState('#FF3820');
  const [isDeviceOn, setIsDeviceOn] = useState(true);
  const [dialAngle, setDialAngle] = useState(0);
  const [copiedIp, setCopiedIp] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  // Real-time 1Hz Countdown Timer Loop
  useEffect(() => {
    let interval = null;
    if (isRunning && isDeviceOn) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            playClickSound(880);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isDeviceOn]);

  // Initial backend sync
  useEffect(() => {
    fetchPomodoro().then((state) => {
      if (state) {
        if (state.remainingSeconds) setSeconds(state.remainingSeconds);
        if (state.running !== undefined) setIsRunning(state.running);
      }
    });
  }, []);

  // 1. Toggle Timer (Start / Pause)
  const handleToggleTimer = async () => {
    if (!isDeviceOn) setIsDeviceOn(true);
    const nextRunning = !isRunning;
    setIsRunning(nextRunning);
    playClickSound(nextRunning ? 700 : 450);

    try {
      await sendPomodoroAction(nextRunning ? 'START' : 'PAUSE', seconds);
    } catch (e) {}
  };

  // 2. Rotary Dial Interaction (Rotate preset duration)
  const handleRotateDial = () => {
    playClickSound(520);
    const newAngle = dialAngle + 45;
    setDialAngle(newAngle);

    // Preset cycles: 25:59 -> 05:00 -> 15:00 -> 50:00
    const presets = [1559, 300, 900, 3000];
    const nextIdx = Math.floor((newAngle / 45) % presets.length);
    const newSec = presets[nextIdx];
    setSeconds(newSec);
    setIsRunning(false);

    try {
      sendPomodoroAction('RESET', newSec);
    } catch (e) {}
  };

  // 3. Orange Push Button (Cycle Status: BUSY -> FOCUS -> ACTIVE)
  const handleCycleStatus = () => {
    playClickSound(800);
    const states = [
      { name: 'BUSY', color: '#FF3820' },
      { name: 'FOCUS', color: '#8B5CF6' },
      { name: 'ACTIVE', color: '#10B981' }
    ];
    const currIdx = states.findIndex((s) => s.name === currentStatus);
    const nextState = states[(currIdx + 1) % states.length];
    setCurrentStatus(nextState.name);
    setStatusColor(nextState.color);

    try {
      updateStatus({ status: nextState.name, color: nextState.color });
    } catch (e) {}
  };

  // 4. Toggle Switch (Device On / Off Power)
  const handleTogglePower = () => {
    playClickSound(isDeviceOn ? 300 : 600);
    setIsDeviceOn(!isDeviceOn);
    if (isDeviceOn) setIsRunning(false);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleCopyIp = () => {
    navigator.clipboard.writeText('192.168.4.20');
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  return (
    <section id="productivity" className="relative py-16 px-6 max-w-6xl mx-auto">
      
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-5xl font-display font-semibold text-center text-gray-950 mb-16 tracking-tight">
        Productivity multi-tool
      </h2>

      {/* Main Grid: Left Feature Cards & Right Device Mockup + Developer Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 3 Cards */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Card 1: Busy Status */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200/90 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <MinusCircle className="w-5 h-5 text-red-500 fill-red-500/20" />
              <h3 className="text-lg font-bold text-gray-900">Busy Status</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Customizable busy status message to match your own workflow.
            </p>
            <ul className="text-[11px] text-gray-600 space-y-1.5 pt-1 pl-1">
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Set any busy message, expiry timer and activation trigger</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Upload custom busy graphics or choose from gallery</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Activate manually from device or remotely from PC, Mobile App or via API</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Automatic activation by Zoom, Discord, Microsoft Teams, Google Calendar</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Apps */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200/90 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="w-5 h-5 text-gray-800" />
              <h3 className="text-lg font-bold text-gray-900">Apps</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Built-in apps: clock, weather, social media metrics, currency chart, pixel art wallpapers, and more.
            </p>
            <div className="flex flex-col text-[11px] text-gray-600 pt-1 space-y-1 pl-1">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Install JavaScript apps from community</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Cloud-based Python/JavaScript/Go apps</span>
              </div>
            </div>
          </div>

          {/* Card 3: Pomodoro timer */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200/90 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="text-base">🍅</div>
              <h3 className="text-lg font-bold text-gray-900">Pomodoro timer</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Time management technique based on short intervals of focused work broken by five-minute breaks.
            </p>
            <ul className="text-[11px] text-gray-600 space-y-1.5 pt-1 pl-1">
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Configure your own focus intervals</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-gray-400">•</span>
                <span>Integration with hourly payment time trackers</span>
              </li>
            </ul>
          </div>

        </div>


        {/* Right Column: LIVE REAL-TIME WORKING DEVICE CONTROLLER BOX */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* HARDWARE DEVICE CONTROLLER BOX */}
          <div className="rounded-3xl p-6 bg-gradient-to-b from-[#ECEEF3] via-[#DEE2EB] to-[#CCD1DE] border border-white shadow-xl relative select-none">
            
            {/* Top-Down Matte Navy/Black Hardware Surface */}
            <div className="relative rounded-2xl p-5 bg-[#171B24] shadow-2xl border border-gray-700/80 text-white space-y-5">
              
              {/* TOP CONTROLS ROW: Dial + Orange Button + Start/Pause Button + Power Toggle */}
              <div className="flex items-center justify-between px-2 pb-4 border-b border-gray-700/60">
                
                {/* 1. Rotary Knob (Clickable to rotate and change timer preset) */}
                <div className="flex items-center gap-3">
                  <div 
                    onClick={handleRotateDial}
                    title="Click dial to cycle timer presets (25m / 5m / 15m / 50m)"
                    className="w-13 h-13 rounded-full bg-gradient-to-b from-[#F2F4F7] to-[#D5D9E0] border-2 border-[#FF5A1F] shadow-lg flex items-center justify-center p-1 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <div 
                      style={{ transform: `rotate(${dialAngle}deg)` }}
                      className="w-full h-full rounded-full border border-gray-300 flex items-center justify-center text-[9px] text-gray-600 font-mono font-bold transition-transform duration-200 relative"
                    >
                      <span>DIAL</span>
                      <span className="absolute top-0.5 w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"></span>
                    </div>
                  </div>

                  {/* 2. Orange Status Action Button (Cycles BUSY / FOCUS / ACTIVE) */}
                  <button
                    onClick={handleCycleStatus}
                    title="Click to toggle status: BUSY / FOCUS / ACTIVE"
                    className="w-5 h-5 rounded-full bg-[#FF5A1F] hover:bg-[#FF723B] active:scale-90 shadow-md cursor-pointer border border-white/30 transition-transform"
                  />
                </div>

                {/* 3. Center "Start/Pause" Wide Tactile Touch Button */}
                <div className="text-center">
                  <button 
                    onClick={handleToggleTimer}
                    title="Click to Start / Pause real-time countdown"
                    className={`px-8 py-2.5 rounded-xl font-mono text-xs font-bold border shadow-md flex items-center gap-2 cursor-pointer transition-all ${
                      isRunning 
                        ? 'bg-amber-400 text-black border-amber-300 ring-2 ring-amber-400/40' 
                        : 'bg-[#F0F2F6] hover:bg-white text-gray-800 border-gray-300'
                    }`}
                  >
                    <span>✋</span>
                    <span>{isRunning ? 'Pause' : 'Start/Pause'}</span>
                  </button>
                </div>

                {/* 4. Right Orange Power / Mode Lever Switch */}
                <div 
                  onClick={handleTogglePower}
                  title="Click to toggle device power on/off"
                  className={`w-14 h-7 rounded-lg border flex items-center p-1 cursor-pointer transition-all ${
                    isDeviceOn 
                      ? 'bg-[#2A3140] border-gray-600 justify-end' 
                      : 'bg-[#181C26] border-gray-800 justify-start opacity-50'
                  }`}
                >
                  <div className={`w-6 h-5 rounded-md shadow-sm transition-colors ${
                    isDeviceOn ? 'bg-[#FF5A1F]' : 'bg-gray-600'
                  }`}></div>
                </div>

              </div>

              {/* CENTER DISPLAY AND USB/APP STATUS PANELS */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1 items-center">
                
                {/* Left Panel: Control via USB */}
                <div className="md:col-span-3 text-[10px] font-mono text-gray-400 space-y-1 text-left">
                  <div className="text-white font-bold flex items-center gap-1">
                    <span>Control via</span>
                    <span>🔌 USB</span>
                  </div>
                  <div>Connect to PC to access:</div>
                  <div>• Serial COM port</div>
                  <div 
                    onClick={handleCopyIp}
                    className="cursor-pointer hover:text-white flex items-center gap-1 group"
                    title="Click to copy IP"
                  >
                    <span>• Virtual LAN:</span>
                    <span className="text-white font-bold underline decoration-dotted">192.168.4.20</span>
                    {copiedIp ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />}
                  </div>
                </div>

                {/* Center OLED Active Matrix Display (Real-time Live Clock & Status) */}
                <div className="md:col-span-6 rounded-2xl p-4 bg-black border-2 border-gray-800 text-center space-y-1.5 shadow-inner relative overflow-hidden">
                  
                  {/* Subtle Scanlines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  {/* Mode Indicator */}
                  <div className="text-[10px] font-mono tracking-widest text-gray-400 flex items-center justify-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isRunning && isDeviceOn ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'}`}></span>
                    <span>{isDeviceOn ? (isRunning ? '▶▶ ACTIVE ◀◀' : '⏸ PAUSED') : 'OFFLINE'}</span>
                  </div>

                  {/* Real-time Giant Glowing Clock */}
                  <div 
                    className="text-4xl sm:text-5xl font-mono font-extrabold tracking-widest select-none transition-all"
                    style={{
                      color: isDeviceOn ? '#FFFFFF' : '#444',
                      textShadow: isDeviceOn && isRunning ? '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 90, 31, 0.5)' : 'none'
                    }}
                  >
                    {isDeviceOn ? `▶ ${formatTime(seconds)}` : '--:--'}
                  </div>

                  {/* Dynamic Status Text: BUSY / FOCUS / ACTIVE */}
                  <div 
                    className="text-xs font-mono font-bold tracking-widest uppercase transition-colors"
                    style={{ 
                      color: isDeviceOn ? statusColor : '#444',
                      textShadow: isDeviceOn ? `0 0 10px ${statusColor}99` : 'none'
                    }}
                  >
                    {isDeviceOn ? currentStatus : 'STANDBY'}
                  </div>
                </div>

                {/* Right Panel: Control via App + Interactive QR Code */}
                <div className="md:col-span-3 text-[10px] font-mono text-gray-400 flex md:flex-col items-center md:items-end justify-between gap-2 text-right">
                  <div className="space-y-0.5">
                    <div className="text-white font-bold">Control via App</div>
                    <div>Desktop: Win / macOS</div>
                    <div>Mobile: iOS / Android</div>
                  </div>
                  <div 
                    onClick={() => setShowQrModal(!showQrModal)}
                    className="w-11 h-11 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform shadow-md"
                    title="Click to view App connection QR"
                  >
                    <QrCode className="w-9 h-9 text-black" />
                  </div>
                </div>

              </div>

              {/* Bottom Interactive Hint */}
              <div className="pt-2 border-t border-gray-700/40 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"></span>
                  <span>Interactive Real-Time Controller: Click Start/Pause, Dial or Buttons</span>
                </span>
                <span className="text-emerald-400 font-bold">● LIVE 1Hz ENGINE</span>
              </div>

            </div>

          </div>


          {/* Bottom-Right: Developers Friendly Terminal Window */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm space-y-4 font-mono">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                <span>&gt;_</span>
                <span>Developers friendly</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300"></span>
              </div>
            </div>

            {/* 2 Columns Bullet Points matching reference 1:1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-700">
              <div className="space-y-2">
                <div>&gt; Open HTTP API</div>
                <div>&gt; Bluetooth Low Energy</div>
                <div>&gt; Free JavaScript apps SDK</div>
                <div>&gt; Libs for Python/JavaScript/Go</div>
                <div>&gt; USB Virtual LAN device</div>
                <div>&gt; Self-hosted cloud provisioning</div>
                <div>&gt; Wi-Fi 2.4 GHz</div>
              </div>
              <div className="space-y-2">
                <div>&gt; Control via MQTT</div>
                <div>&gt; Serial COM port over USB</div>
                <div>&gt; IoT integrations: IFTTT, HomeAssistant</div>
                <div>&gt; No vendor lock-in</div>
                <div>&gt; Offline API (no internet required)</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
