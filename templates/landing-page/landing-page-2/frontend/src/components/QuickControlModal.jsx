import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cloud, Zap, Check, Sliders, Sparkles, Send, Bell } from 'lucide-react';
import { updateStatus } from '../services/api';

export default function QuickControlModal({ isOpen, onClose, currentStatus, onStatusChange }) {
  const [statusText, setStatusText] = useState(currentStatus?.status || 'BUSY');
  const [message, setMessage] = useState(currentStatus?.message || 'In Deep Focus Session');
  const [color, setColor] = useState(currentStatus?.color || '#FF5A1F');
  const [brightness, setBrightness] = useState(currentStatus?.brightness || 90);
  const [expiry, setExpiry] = useState(currentStatus?.expiryMinutes || 25);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = async () => {
    const payload = {
      status: statusText.toUpperCase(),
      message,
      color,
      brightness: parseInt(brightness),
      active: true,
      expiryMinutes: parseInt(expiry)
    };
    await updateStatus(payload);
    if (onStatusChange) {
      onStatusChange(payload.status, payload.color);
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  const presets = [
    { label: 'BUSY', color: '#FF5A1F', msg: 'Do Not Disturb - Deep Work' },
    { label: 'FOCUS', color: '#8B5CF6', msg: 'Coding flow zone' },
    { label: 'ACTIVE', color: '#10B981', msg: 'Available for collaboration' },
    { label: 'MEETING', color: '#F59E0B', msg: 'On a client Zoom call' },
    { label: 'COFFEE', color: '#3B82F6', msg: 'Recharging - Back in 10m' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        {/* Modal Backdrop click to close */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#0E111A] border border-white/20 p-6 sm:p-8 shadow-2xl z-10 space-y-6 overflow-hidden"
        >
          {/* Top ambient highlight */}
          <div 
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ backgroundColor: color }}
          />

          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">Cloud Status Remote</h3>
                <p className="text-xs font-mono text-gray-400">SYNC OVER WEBSOCKET & REST</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-300">QUICK PRESETS</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {presets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => {
                    setStatusText(p.label);
                    setColor(p.color);
                    setMessage(p.msg);
                  }}
                  className={`px-2.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex flex-col items-center gap-1 border ${
                    statusText === p.label 
                      ? 'bg-brand-orange/20 border-brand-orange text-white shadow-sm' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Status Label */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-300">LED SCREEN TEXT (MAX 6 CHARS)</label>
            <input
              type="text"
              maxLength={6}
              value={statusText}
              onChange={(e) => setStatusText(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white font-mono uppercase text-base focus:outline-none focus:border-brand-orange"
            />
          </div>

          {/* Broadcast Message */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-300">TEAM STATUS MESSAGE</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-brand-orange"
            />
          </div>

          {/* Brightness & Expiry Sliders */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>BRIGHTNESS</span>
                <span className="text-white">{brightness}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                className="w-full accent-brand-orange"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>EXPIRY DURATION</span>
                <span className="text-white">{expiry} min</span>
              </div>
              <select
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-3 py-1.5 bg-black/60 border border-white/20 rounded-xl text-white font-mono text-xs focus:outline-none"
              >
                <option value={15}>15 Minutes</option>
                <option value={25}>25 Minutes</option>
                <option value={45}>45 Minutes</option>
                <option value={60}>60 Minutes</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs font-bold transition-all"
            >
              CANCEL
            </button>
            <button
              onClick={handleSave}
              className="flex-2 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-[#FF723B] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-glow-orange cursor-pointer hover:scale-[1.02] transition-transform"
            >
              {saved ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              <span>{saved ? 'BROADCASTED!' : 'PUSH TO HARDWARE'}</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
