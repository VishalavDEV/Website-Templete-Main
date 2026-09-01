import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LockScreen() {
  const [password, setPassword] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUnlock = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-neura-bg text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neura-cyan/15 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm bg-neura-panel/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl z-10 text-center space-y-6"
      >
        <div className="space-y-3">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
            alt="Avatar"
            className="w-20 h-20 rounded-2xl mx-auto object-cover ring-2 ring-neura-cyan shadow-glow-cyan"
          />
          <div>
            <h2 className="text-lg font-bold text-white">{user?.name || 'Admin User'}</h2>
            <span className="text-xs text-neura-cyan font-mono">Session Locked</span>
          </div>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to unlock..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center justify-center space-x-2"
          >
            <span>Unlock Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
