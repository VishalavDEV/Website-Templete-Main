import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Avatar } from '../ui/GlobalComponents';
import { Send, Search, Terminal, MessageSquare, AlertCircle } from 'lucide-react';

export const Messages: React.FC = () => {
  const { messages, sendMessage, markMessagesAsRead } = useApp();

  const [activeChannel, setActiveChannel] = useState('global');
  const [searchVal, setSearchVal] = useState('');
  const [typedMessage, setTypedMessage] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Mark channel messages as read on activation
  useEffect(() => {
    markMessagesAsRead(activeChannel);
  }, [activeChannel, messages.length]);

  // Scroll to bottom of message feeds
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChannel, messages.length]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    sendMessage(typedMessage, activeChannel);
    setTypedMessage('');
  };

  // Chat Channels
  const channels = [
    { id: 'global', name: '# global-subnets', desc: 'Central command broadcast feed', icon: <Terminal className="h-4 w-4" /> },
    { id: 'project-alpha', name: '# project-aegis', desc: 'Core spatial module team line', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'direct-user', name: 'Amira Patel (Analyst)', desc: 'Finance ledgers coordination', isDirect: true }
  ];

  const filteredMessages = messages
    .filter(m => m.channel === activeChannel)
    .filter(m => m.content.toLowerCase().includes(searchVal.toLowerCase()));

  const activeChannelObj = channels.find(c => c.id === activeChannel);

  return (
    <div className="border border-blue-100 bg-white rounded-xl overflow-hidden h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] min-h-[480px] max-h-[750px] flex shadow-xs">
      {/* Channels pane sidebar */}
      <div className="w-64 border-r border-blue-100 flex flex-col justify-between shrink-0 hidden md:flex bg-slate-50/50 min-h-0">
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Channel search */}
          <div className="p-3 border-b border-blue-100 bg-white">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input 
                type="text" 
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search feeds..." 
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-blue-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="p-3">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2 px-2">Feeds & Lines</span>
            <div className="space-y-1">
              {channels.map((ch) => {
                const isActive = ch.id === activeChannel;
                const unreads = messages.filter(m => m.channel === ch.id && m.unread).length;

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannel(ch.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {ch.isDirect ? (
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      ) : (
                        <span className={`shrink-0 ${isActive ? 'text-white' : 'text-blue-600'}`}>{ch.icon}</span>
                      )}
                      <span className="truncate">{ch.name}</span>
                    </div>
                    {unreads > 0 && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                        {unreads}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Console info box */}
        <div className="p-4 bg-white border-t border-blue-100 text-[10px] text-slate-500 font-mono flex items-center gap-2 shrink-0">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <span>ECHO MODE ENABLED</span>
        </div>
      </div>

      {/* Primary chat window pane */}
      <div className="flex-1 flex flex-col justify-between min-w-0 bg-white h-full">
        {/* Header bar */}
        <div className="px-4 py-3.5 border-b border-blue-100 flex justify-between items-center bg-white shrink-0">
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider font-mono">
              {activeChannelObj?.name || 'COMM LINK'}
            </h4>
            <span className="text-[10px] text-slate-500 block mt-0.5 font-mono">{activeChannelObj?.desc}</span>
          </div>
          {/* Quick mobile responsive switch buttons */}
          <div className="flex md:hidden gap-1">
            {channels.map((ch) => (
              <button 
                key={ch.id} 
                onClick={() => setActiveChannel(ch.id)}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-md uppercase font-mono cursor-pointer ${
                  activeChannel === ch.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {ch.id === 'global' ? 'Global' : ch.id === 'project-alpha' ? 'Aegis' : 'Direct'}
              </button>
            ))}
          </div>
        </div>

        {/* Message Feed grid */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0 bg-slate-50/30">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => {
              const isUser = msg.senderId === 'user';
              const isSys = msg.senderId === 'system';

              return (
                <div key={msg.id} className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}>
                  {!isUser && (
                    isSys ? (
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs shrink-0 font-mono font-bold shadow-xs">
                        Ω
                      </div>
                    ) : (
                      <Avatar src={msg.senderAvatar} name={msg.senderName} size="sm" />
                    )
                  )}

                  <div className={`max-w-md ${isUser ? 'text-right' : ''}`}>
                    <div className="flex items-baseline gap-2 justify-start">
                      {!isUser && <span className="text-[10px] font-bold text-slate-700">{msg.senderName}</span>}
                      <span className="text-[9px] text-slate-400 font-mono">{msg.timestamp}</span>
                    </div>

                    <div className={`mt-1 text-xs p-3 rounded-xl inline-block text-left shadow-2xs ${
                      isUser 
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : isSys 
                        ? 'bg-blue-50/80 border border-blue-200 text-blue-900 font-mono leading-relaxed'
                        : 'bg-white border border-blue-100 text-slate-800'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-full flex items-center justify-center text-center p-8">
              <div>
                <MessageSquare className="h-10 w-10 text-blue-200 mx-auto mb-2" />
                <span className="text-xs font-bold text-slate-700 uppercase font-mono">Empty Feeds Queue</span>
                <p className="text-[10px] text-slate-400 mt-1 max-w-xs font-mono">Write your first message below to synchronize live communications.</p>
              </div>
            </div>
          )}
          <div ref={messageEndRef} />
        </div>

        {/* Input composer bar */}
        <form onSubmit={handleSend} className="p-4 border-t border-blue-100 bg-white flex gap-2">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            placeholder={`Compile transmission to ${activeChannelObj?.name || 'Comm link'}... (type "help" for dynamic diagnostics responses)`}
            className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-blue-200 rounded-xl placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
          />
          <button 
            type="submit"
            className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs transition shrink-0 cursor-pointer"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
