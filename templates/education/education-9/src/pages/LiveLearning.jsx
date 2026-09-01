import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Radio, Send, Users, User, Calendar, Clock, Video, Smile } from 'lucide-react';

const LIVE_CLASSES = [
  { id: "live-1", title: "Scroll Physics in CSS & Framer Motion", instructor: "Prof. Alex Mercer", category: "Web Development", attendees: 142, duration: "60 mins" },
  { id: "live-2", title: "Backpropagation Math Visualized", instructor: "Dr. Sarah Jenkins", category: "Artificial Intelligence", attendees: 95, duration: "90 mins" }
];

const UPCOMING_CLASSES = [
  { id: "up-1", title: "Linear Transformations & Graphics Coordinate Scaling", instructor: "Dr. Alan Mercer", date: "Aug 28", time: "05:00 PM", attendees: 210 },
  { id: "up-2", title: "Visual Contrast & Grid Alignments", instructor: "Elena Rostova", date: "Aug 29", time: "03:30 PM", attendees: 180 }
];

const CHAT_PRESETS = [
  { name: "John D.", text: "Wow, the spring animation feels so clean!" },
  { name: "Suresh P.", text: "Can we use GSAP timelines for this scroll trigger?" },
  { name: "Emma L.", text: "This math visualization makes sense now." },
  { name: "David K.", text: "Is the certificate available after final project submission?" },
  { name: "Sophia M.", text: "I love the light blue interface." }
];

export default function LiveLearning() {
  const [selectedClass, setSelectedClass] = useState(LIVE_CLASSES[0]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, name: "System", text: "Welcome to the Live Interactive Whiteboard! Class is starting.", time: "06:00 PM" }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Add random incoming chat messages to simulate live class atmosphere
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = CHAT_PRESETS[Math.floor(Math.random() * CHAT_PRESETS.length)];
      setChatMessages(prev => [
        ...prev.slice(-15), // keep last 15 messages
        {
          id: Date.now(),
          name: randomMsg.name,
          text: randomMsg.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "You",
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatInput('');
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-education-navy flex items-center gap-2">
              <Tv size={26} className="text-sky-500" />
              Live Interactive Classroom
            </h1>
            <p className="text-sm text-education-navy/70">
              Tune into live webinars, ask questions in real-time, and follow whiteboard sketches.
            </p>
          </div>
          
          {/* Blink LIVE badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200/50 self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-wide">2 Classes Live Now</span>
          </div>
        </div>

        {/* Grid player split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mock Video Whiteboard & Chat */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Whiteboard Board */}
            <div className="aspect-video rounded-3xl border border-sky-100 bg-sky-95/80 relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-md shadow-sky-50">
              {/* Top border detailing */}
              <div className="absolute top-4 left-6 flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-red-500 text-[10px] font-bold text-white tracking-widest uppercase animate-pulse flex items-center gap-1">
                  ● Live
                </span>
                <span className="text-xs font-bold text-education-navy/80">{selectedClass.title}</span>
              </div>
              <div className="absolute top-4 right-6 flex items-center gap-1.5 text-xs text-education-navy/60 font-semibold">
                <Users size={14} className="text-sky-500" />
                <span>{selectedClass.attendees} Watching</span>
              </div>

              {/* Whiteboard mock drawings/symbols in middle */}
              <div className="w-full max-w-lg space-y-4 text-center select-none pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-xl text-xs font-semibold border border-sky-100/50">
                  <Clock size={12} className="text-sky-500" />
                  <span>Time Elapsed: 24:32</span>
                </div>
                
                {/* Floating animated elements representing the lecture */}
                <div className="relative py-8 h-40 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="w-28 h-28 rounded-full border border-dashed border-sky-300 flex items-center justify-center opacity-70"
                  >
                    <span className="text-[10px] font-bold font-mono text-sky-600">Coordinate Grid</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute font-mono text-xs text-sky-500/80 font-bold bg-white px-3 py-1 rounded-lg border border-sky-50"
                  >
                    x(t) = A·sin(ωt + φ)
                  </motion.div>
                </div>
                
                <p className="text-xs text-education-navy/60 italic font-medium">
                  Instructor is sketching formulas...
                </p>
              </div>

              {/* Whiteboard bottom panel controls */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between border-t border-sky-100/60 pt-3 text-[10px] text-education-navy/60 font-bold">
                <span>Presenter: {selectedClass.instructor}</span>
                <span className="text-sky-500">Interactive Board v1.2</span>
              </div>
            </div>

            {/* Chat Box */}
            <div className="p-5 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm h-64 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 border-b border-sky-50 pb-2 mb-3">
                <Radio size={14} className="text-sky-500 animate-pulse" />
                <h3 className="font-bold text-xs text-education-navy uppercase tracking-wider">Live Student Chat</h3>
              </div>

              {/* Chat flow list */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                {chatMessages.map(msg => (
                  <div key={msg.id} className="text-xs flex items-start gap-2">
                    <span className="font-extrabold text-sky-600 whitespace-nowrap">{msg.name}:</span>
                    <span className="text-education-navy/90 leading-relaxed font-outfit">{msg.text}</span>
                  </div>
                ))}
              </div>

              {/* Form Input */}
              <form onSubmit={handleSendChat} className="flex items-center gap-2 mt-4 pt-3 border-t border-sky-50">
                <input
                  type="text"
                  required
                  placeholder="Ask a question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 font-outfit"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-sky-500 text-white shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Send size={13} />
                </button>
              </form>
            </div>

          </div>

          {/* Sidebar Schedule */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Classes Selector */}
            <div className="p-5 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-education-navy border-b border-sky-50 pb-2">Active Streams</h3>
              <div className="space-y-3">
                {LIVE_CLASSES.map(cls => (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex flex-col space-y-1.5 transition-all ${
                      selectedClass.id === cls.id
                        ? 'border-sky-400 bg-sky-50/50 shadow-sm'
                        : 'border-sky-100/50 bg-white/40 hover:bg-white/90'
                    }`}
                  >
                    <span className="px-2 py-0.5 rounded bg-red-100 text-red-600 font-bold text-[8px] uppercase tracking-wide self-start">
                      ● Live Now
                    </span>
                    <h4 className="font-bold text-xs text-education-navy line-clamp-1">{cls.title}</h4>
                    <div className="flex items-center justify-between text-[9px] text-gray-400 font-semibold">
                      <span>{cls.instructor}</span>
                      <span>{cls.attendees} attending</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="p-5 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-education-navy border-b border-sky-50 pb-2">Upcoming Class Schedule</h3>
              <div className="space-y-4">
                {UPCOMING_CLASSES.map(up => (
                  <div key={up.id} className="p-3 bg-sky-50/40 rounded-2xl space-y-2 border border-sky-100/20">
                    <div className="flex items-center justify-between text-[9px] font-bold text-sky-600 uppercase">
                      <span className="flex items-center gap-0.5"><Calendar size={10} /> {up.date}</span>
                      <span className="flex items-center gap-0.5"><Clock size={10} /> {up.time}</span>
                    </div>
                    <h4 className="font-bold text-xs text-education-navy leading-tight">{up.title}</h4>
                    <div className="flex items-center justify-between text-[9px] text-gray-400">
                      <span>{up.instructor}</span>
                      <span>{up.attendees} registered</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
