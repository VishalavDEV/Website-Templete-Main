import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageSquare, Send, Hash, Phone, Video } from 'lucide-react';

export default function ChatApp() {
  const [activeChannel, setActiveChannel] = useState('#neura-dev');
  const [inputText, setInputText] = useState('');

  const chatActivity = [
    { day: 'Mon', messages: 142 },
    { day: 'Tue', messages: 210 },
    { day: 'Wed', messages: 185 },
    { day: 'Thu', messages: 260 },
    { day: 'Fri', messages: 295 },
  ];

  const [messages, setMessages] = useState([
    { id: 1, user: 'Sarah Connor', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', text: 'Hey team, the Neura-LLM v4.2 model deployment has successfully initialized on node US-East-1.', time: '10:14 AM' },
    { id: 2, user: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', text: 'Awesome! Latency looks solid at 64ms. Testing the real-time WebSocket sync now.', time: '10:16 AM' },
    { id: 3, user: 'Emily Park', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80', text: 'Great work! SOC2 audit logs also confirmed 100% compliance on end-to-end JWT encryption.', time: '10:20 AM' },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const msg = {
      id: Date.now(),
      user: 'Admin User',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, msg]);
    setInputText('');
  };

  return (
    <Layout title="Team Chat Messenger" breadcrumb="Home / Applications / Chat">
      <div className="space-y-4">
        {/* Chat Activity Chart */}
        <div className="rounded-3xl glass-card p-4 border border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-neura-cyan" />
            <span className="text-xs font-bold text-white">Daily Message Telemetry (1,092 Total)</span>
          </div>
          <div className="w-64 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chatActivity}>
                <Bar dataKey="messages" fill="#00f0ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="h-[calc(100vh-280px)] rounded-3xl glass-panel border border-white/10 flex overflow-hidden">
          {/* Left Channels Roster */}
          <div className="w-64 border-r border-white/10 bg-white/[0.01] p-4 space-y-4 shrink-0 hidden sm:block">
            <div className="flex items-center space-x-2 px-2">
              <MessageSquare className="w-4 h-4 text-neura-cyan" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Channels</span>
            </div>

            <div className="space-y-1 text-xs">
              {['#general', '#neura-dev', '#security-alerts', '#announcements'].map(ch => (
                <button
                  key={ch}
                  onClick={() => setActiveChannel(ch)}
                  className={`w-full flex items-center px-3 py-2 rounded-xl transition-all font-semibold ${
                    activeChannel === ch ? 'bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Hash className="w-3.5 h-3.5 mr-2" />
                  <span>{ch}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Conversation Window */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02] gap-2">
              <div className="flex items-center space-x-2">
                <Hash className="w-5 h-5 text-neura-cyan shrink-0" />
                <h3 className="text-sm font-bold text-white hidden sm:block">{activeChannel}</h3>

                {/* Mobile Channel Switcher */}
                <select
                  value={activeChannel}
                  onChange={(e) => setActiveChannel(e.target.value)}
                  className="sm:hidden bg-neura-panel border border-white/10 text-white font-bold text-xs py-1 px-2 rounded-xl focus:outline-none focus:border-neura-cyan"
                >
                  {['#general', '#neura-dev', '#security-alerts', '#announcements'].map(ch => (
                    <option key={ch} value={ch}>{ch}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white">
                  <Video className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map(m => (
                <div key={m.id} className="flex items-start space-x-3 text-xs">
                  <img src={m.avatar} alt={m.user} className="w-8 h-8 rounded-xl object-cover ring-1 ring-white/20 shrink-0" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white">{m.user}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{m.time}</span>
                    </div>
                    <p className="text-slate-200 mt-1 bg-white/[0.03] border border-white/10 p-3 rounded-2xl max-w-xl leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Message ${activeChannel}...`}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold shadow-glow-cyan hover:opacity-90 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
