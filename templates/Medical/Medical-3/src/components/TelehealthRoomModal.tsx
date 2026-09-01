import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  MessageSquare, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  Send, 
  Maximize2, 
  Share2,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TelehealthRoomModal: React.FC = () => {
  const { activeTelehealthAppointment, closeTelehealthRoom, addToast } = useApp();

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'System', text: 'End-to-End 256-bit AES Clinical Encryption Established.', time: '10:30 AM' },
    { sender: 'Dr. Sarah Lin', text: 'Hello Alex! I am reviewing your recent 4D echocardiogram results now.', time: '10:30 AM' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  if (!activeTelehealthAppointment) return null;

  const appt = activeTelehealthAppointment;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const newMsg = { sender: 'You', text: inputMsg, time: 'Just now' };
    setMessages((prev) => [...prev, newMsg]);
    setInputMsg('');

    // Simulate doctor reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: appt.doctorName,
          text: 'Thank you for updating. Your resting ECG waveform shows stable sinus rhythm with optimal recovery.',
          time: 'Just now'
        }
      ]);
    }, 1200);
  };

  const handleEndCall = () => {
    addToast({
      type: 'info',
      title: 'Consultation Concluded',
      message: `Telehealth session with ${appt.doctorName} ended. Summary saved to Patient Portal.`
    });
    closeTelehealthRoom();
  };

  return (
    <AnimatePresence>
      <div 
        id="telehealth-room-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#0A1128]/90 backdrop-blur-xl overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          id="telehealth-room-modal"
          className="bg-[#0A1128] text-white w-full max-w-6xl h-full sm:h-[90vh] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col border border-[#1A535C] relative"
        >
          {/* Top Virtual Room Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0A1128]/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#1A535C] border border-[#4ECDC4]/30 flex items-center justify-center text-[#4ECDC4] shadow-md">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white font-['Manrope']">{appt.doctorName}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1A535C] text-[#4ECDC4] border border-[#4ECDC4]/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-ping" />
                    LIVE 4K HD
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{appt.doctorSpecialty} • Room {appt.id}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ECDC4]" /> HIPAA Encrypted
              </span>
              <button
                onClick={handleEndCall}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
            
            {/* Main Doctor Video Feed (8 or 12 cols) */}
            <div className={`relative bg-slate-950 flex items-center justify-center overflow-hidden transition-all ${chatOpen ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
              
              {/* Doctor Video Simulation Image */}
              <div className="relative w-full h-full">
                <img
                  src={appt.doctorPhoto}
                  alt={appt.doctorName}
                  className="w-full h-full object-cover filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-[#0A1128]/30" />

                {/* Floating Patient Self-View Mirror (Picture in Picture) */}
                <div className="absolute bottom-6 right-6 w-36 h-28 sm:w-48 sm:h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 z-20">
                  {cameraOn ? (
                    <div className="w-full h-full relative bg-slate-800 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                        alt="Patient Self View"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold bg-black/60 px-2 py-0.5 rounded-full text-white">
                        You (Alex)
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                      <VideoOff className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Live Biometric Telemetry Overlay on Left */}
                <div className="absolute top-6 left-6 p-4 rounded-3xl bg-[#0A1128]/85 backdrop-blur-md border border-white/15 text-white z-20 space-y-2 hidden sm:block max-w-xs shadow-xl">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#4ECDC4] uppercase tracking-[0.2em]">
                    <Activity className="w-4 h-4 animate-pulse" /> Live Telemetry
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">Heart Rate</span>
                      <span className="font-bold text-white text-sm">68 bpm</span>
                    </div>
                    <div className="h-5 w-px bg-white/15" />
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">SpO2</span>
                      <span className="font-bold text-white text-sm">99%</span>
                    </div>
                    <div className="h-5 w-px bg-white/15" />
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">BP</span>
                      <span className="font-bold text-white text-sm">118/76</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* In-Call Encrypted Chat Sidebar (4 cols) */}
            {chatOpen && (
              <div className="lg:col-span-4 bg-[#0A1128] border-l border-white/10 flex flex-col h-full">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4ECDC4]">
                    Clinical Consultation Chat
                  </h4>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Messages feed */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl max-w-[88%] ${
                        m.sender === 'You'
                          ? 'ml-auto bg-[#1A535C] text-white rounded-br-none border border-[#4ECDC4]/30'
                          : m.sender === 'System'
                          ? 'mx-auto bg-slate-800 text-slate-400 text-[11px] text-center'
                          : 'bg-white/10 text-slate-200 rounded-bl-none'
                      }`}
                    >
                      {m.sender !== 'System' && (
                        <span className="text-[10px] font-bold opacity-70 block mb-0.5">
                          {m.sender} • {m.time}
                        </span>
                      )}
                      <p className="leading-relaxed">{m.text}</p>
                    </div>
                  ))}
                </div>

                {/* Message input */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 flex gap-2">
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Type clinical inquiry to doctor..."
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-[#4ECDC4]"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-full bg-[#4ECDC4] hover:bg-[#3DB8AF] text-[#0A1128] font-bold cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

          </div>

          {/* Bottom Control Dock */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#0A1128] flex items-center justify-between shrink-0">
            
            <div className="flex items-center gap-2 text-xs text-slate-400 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Audio: Lossless HD</span>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-3 mx-auto sm:mx-0">
              <button
                onClick={() => setMicOn((p) => !p)}
                className={`p-3.5 rounded-full transition-colors cursor-pointer ${
                  micOn ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-rose-600 text-white'
                }`}
                title={micOn ? 'Mute Mic' : 'Unmute Mic'}
              >
                {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setCameraOn((p) => !p)}
                className={`p-3.5 rounded-full transition-colors cursor-pointer ${
                  cameraOn ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-rose-600 text-white'
                }`}
                title={cameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
              >
                {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setChatOpen((p) => !p)}
                className={`p-3.5 rounded-full transition-colors cursor-pointer ${
                  chatOpen ? 'bg-[#1A535C] text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title="Toggle Clinical Chat"
              >
                <MessageSquare className="w-5 h-5" />
              </button>

              <button
                onClick={handleEndCall}
                className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Call</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 hidden sm:block">
              {appt.doctorName} is in session
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
